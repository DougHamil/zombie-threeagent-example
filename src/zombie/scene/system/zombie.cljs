(ns zombie.scene.system.zombie
  (:require [threeagent.system :refer [ISystem]]
            ["three" :as three]
            [statecharts.core :as fsm]
            [zombie.util.messaging :as message]
            [zombie.util.threejs :refer [vector3->tuple
                                       distance-between
                                       world-position-as-tuple]]
            [zombie.util.timer :as timer]
            [zombie.state.databases :as db]))

(def ^:private v1 (three/Vector3.))
(def ^:private v2 (three/Vector3.))

(defn- move-towards! [bus entity-id move-speed ^three/Object3D obj ^three/Object3D target-obj]
  (let [target-pos (.getWorldPosition target-obj v1)
        heading (-> (.getWorldPosition obj v2)
                    (.sub target-pos)
                    (.normalize)
                    (.multiplyScalar (- move-speed)))]
    (.lookAt obj target-pos)
    (message/send bus entity-id :physics/set-velocity (vector3->tuple heading))))

(defn- in-range? [{:keys [^three/Object3D object
                          ^three/Object3D attacker-obj]}
                  _]
  (> 2 (distance-between object attacker-obj)))

(defn- -entry-idle [{:keys [bus entity-id]} _]
  (message/send bus entity-id :animation/play {:loop? true
                                               :animation :animation/character-idle}))

(defn- -entry-chasing [{:keys [bus entity-id]} _]
  (message/send bus entity-id :animation/play {:loop? true
                                               :animation :animation/character-run}))

(defn- -entry-attacking-pre-hit [{:keys [bus entity-id]} _]
  (message/send bus entity-id :physics/set-velocity [0 0 0])
  (message/send bus entity-id :animation/play {:loop? false
                                               :animation :animation/character-attack}))

(defn- -entry-dying [{:keys [bus entity-id object]} _]
  (message/send bus :particles/spawn {:type :blood-fountain
                                      :position (world-position-as-tuple object)})
  (message/send bus entity-id :physics/set-velocity [0 0 0])
  (message/send bus entity-id :physics/disable {})
  (message/send bus entity-id :animation/stop-all {})
  (message/send bus entity-id :animation/play {:loop? false
                                               :clamp-when-finished? true
                                               :animation :animation/character-death}))

(defn- -entry-attacking-hit [{:keys [bus entity-id
                                     attacker-id]
                              :as ctx} _]
  (when (in-range? ctx nil)
    (message/send bus attacker-id :combat/hit {:damage 10
                                               :attack-direction [0 0 0]
                                               :hit-normal [0 0 0]
                                               :hit-position [0 0 0]
                                               :attacker-id entity-id})))

(defn- -entry-dead [{:keys [entity-db entity-id]} _]
  (swap! entity-db dissoc entity-id))

(defn- -action-idle-to-chasing [{:keys [object bus]} _]
  (message/send bus :particles/spawn {:type :floating-text
                                      :position (assoc (world-position-as-tuple object)
                                                       1 1)
                                      :color "red"
                                      :text "BRAAINNS"}))

(defmulti tick-ai-zombie (fn [state _context] state))
(defmethod tick-ai-zombie :default [])

(defmulti tick-zombie (fn [state _context] state))
(defmethod tick-zombie :chasing [_ {:keys [bus entity-id move-speed attacker-obj object]}]
  (move-towards! bus entity-id move-speed object attacker-obj))
(defmethod tick-zombie :default [])

(def ^:private zombie-fsm
  (fsm/machine
   {:id :zombiezzzzzz
    :initial :initialize
    :on {:tick {}}
    :states {:initialize {:on {:start {:target :idle}}}
             :idle {:on {:damaged {:target :chasing
                                   :actions [-action-idle-to-chasing]}
                         :killed {:target :dying}}
                    :entry [-entry-idle]}
             :chasing {:on {:tick [{:target :attacking
                                    :guard in-range?}]
                            :killed {:target :dying}
                            :damaged {}}
                       :entry [-entry-chasing]}
             :attacking {:initial :pre-hit
                         :states {:pre-hit {:after [{:delay 500
                                                     :target :hit}]
                                            :entry [-entry-attacking-pre-hit]}
                                  :hit {:after [{:delay 300
                                                 :target :post-hit}]
                                        :entry -entry-attacking-hit}
                                  :post-hit {:on {:tick [{:guard in-range?
                                                          :target :pre-hit}
                                                         {:target [:> :chasing]}]}}}

                         :on {:killed {:target :dying}
                              :damaged {}}}
             :dying {:on {:damaged {}
                          :killed {}}
                     :entry [-entry-dying]
                     :after [{:delay 2000
                              :target :dead}]}
             :dead {:entry [-entry-dead]}}}))

(defn- on-damaged [bus local-state entity-id object payload]
  (let [{:keys [attacker-id
                damage
                attack-direction
                hit-position]}
        payload
        attacker-obj ^three/Object3D (get @db/entity-objects attacker-id)
        fsm (get-in @local-state [entity-id :fsm])]
    (fsm/update-state fsm assoc
                      :attacker-id (:attacker-id payload)
                      :attacker-obj attacker-obj)
    (fsm/send fsm {:type :damaged
                   :payload payload})
    ;; TODO: Scale impact force by distance? The weapon should have some say over the impact force
    ;(message/send bus entity-id :physics/apply-force attack-direction)
    (message/send bus entity-id :animation/play {:loop? false
                                                 :layer :upper
                                                 :animation :animation/character-hit-reaction-upper})

    (message/send bus :particles/spawn {:type :blood-fountain
                                        :scale 0.5
                                        :position hit-position})
    (message/send bus :particles/spawn {:type :floating-text
                                        :position (assoc (world-position-as-tuple object)
                                                         1 2)
                                        :color "orange"
                                        :speed 5
                                        :spread 8
                                        :text (str damage)})
    (swap! local-state assoc-in [entity-id :target-object] attacker-obj)))

(defn- on-killed [_bus local-state entity-id payload]
  (let [fsm (get-in @local-state [entity-id :fsm])]
    (fsm/send fsm {:type :killed
                   :payload payload})))

(defn- tick-ai [fsm]
  (fsm/send fsm :tick)
  (tick-ai-zombie (fsm/value fsm) (fsm/state fsm)))

(defn- register-listeners! [bus local-state entity-id object]
  (message/on bus entity-id :entity/damaged (partial on-damaged bus local-state entity-id object))
  (message/on bus entity-id :entity/killed (partial on-killed bus local-state entity-id)))

(deftype ZombieSystem [bus local-state]
  ISystem
  (init [_ _])
  (destroy [_ _])
  (on-entity-added [_ {:keys [entity-db]} id obj {:keys [move-speed]}]
    (register-listeners! bus local-state id obj)
    (let [context {:object obj
                   :entity-db entity-db
                   :move-speed move-speed
                   :local-state local-state
                   :bus bus
                   :entity-id id}
          fsm-service (fsm/service (assoc zombie-fsm :context context))]
      (fsm/start fsm-service)
      (swap! local-state assoc id {:ai-ticker (timer/jitter-ticker 0.2 0.25 #(tick-ai fsm-service))
                                   :local-state local-state
                                   :fsm fsm-service})
      #(fsm/send fsm-service :start)))
  (on-entity-removed [_ _ id _obj _cfg]
    (swap! local-state dissoc id))
  (tick [_ delta-time]
    (doseq [[_ {:keys [ai-ticker fsm]}] @local-state]
      (timer/maybe-tick ai-ticker delta-time)
      (tick-zombie (fsm/value fsm) (fsm/state fsm)))))

(defn create [event-bus]
  (->ZombieSystem event-bus (atom {})))
