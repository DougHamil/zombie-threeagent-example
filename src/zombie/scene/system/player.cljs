(ns zombie.scene.system.player
  (:require [threeagent.system :refer [ISystem]]
            [threeagent.core :as th]
            [reagent.core :as r]
            ["three" :as three]
            [statecharts.core :as fsm]
            [zombie.util.common :as util]
            [zombie.util.threejs :refer [vector3->map
                                       world-position-as-tuple
                                       vector3->tuple]]
            [zombie.util.messaging :as message]
            [zombie.util.timer :as timer]
            [zombie.assets.material :refer [uniform-player-position
                                          uniform-time]]
            [zombie.state.databases :as db]))

(def ^:private v1 (three/Vector3.))
(def ^:private v2 (three/Vector3.))
(def ^:private heading (three/Vector3.))
(def ^:private look-position (three/Vector3.))
(def ^:private move-right-vec (.normalize (three/Vector3. 0.5 0 -0.5)))
(def ^:private move-up-vec (.normalize (three/Vector3. -0.5 0 -0.5)))

(defn- -guard-running? [{:keys [state]} _]
  (:moving? @state))

(defn- -play-anim! [opts {:keys [entity-id bus]} _]
  (message/send bus entity-id :animation/play opts))

(def ^:private lower-body-fsm {:initial :start
                               :on {:tick {}}
                               :states {:start {:on {:start :idle}}
                                        :idle {:entry (partial -play-anim! {:layer :lower
                                                                            :animation :animation/character-idle-lower
                                                                            :loop? true})
                                               :on {:tick [{:target :running
                                                            :guard -guard-running?}]}}
                                        :running {:entry (partial -play-anim! {:layer :lower
                                                                               :animation :animation/character-run-lower
                                                                               :loop? true})
                                                  :on {:tick [{:target :idle
                                                               :guard (complement -guard-running?)}]}}}})

(def ^:private upper-body-fsm {:initial :start
                               :on {:tick {}
                                    :start-aiming [:. :aiming]
                                    :stop-aiming [{:target [:. :running]
                                                   :guard -guard-running?}
                                                  {:target [:. :idle]}]}
                               :states {:start {:on {:start :idle}}
                                        :idle {:entry (partial -play-anim! {:layer :upper
                                                                            :sync-layer :lower
                                                                            :animation :animation/character-idle-upper
                                                                            :loop? true})
                                               :on {:tick [{:target :running
                                                            :guard -guard-running?}]}}
                                        :aiming {:entry  (partial -play-anim! {:layer :upper
                                                                               :animation :animation/character-aim
                                                                               :loop? true})}
                                        :running {:entry (partial -play-anim! {:layer :upper
                                                                               :sync-layer :lower
                                                                               :animation :animation/character-run-upper
                                                                               :loop? true})
                                                  :on {:tick [{:target :idle
                                                               :guard (complement -guard-running?)}]}}}})

(def ^:private animation-fsm
  (fsm/machine
   {:id :player-animation
    :type :parallel
    :regions {:lower-body lower-body-fsm
              :upper-body upper-body-fsm}}))

(defn- set-upper-look-at! [event-bus entity-id {:keys [x z]}]
  (message/send event-bus entity-id :animation/set-upper-look-at-target [x 0.5 z]))

(defn- set-lower-look-at! [event-bus entity-id {:keys [x z]}]
  (message/send event-bus entity-id :animation/set-lower-look-at-target [x 0.5 z]))

(defn- get-movement-heading [[input-x input-y]]
  ;; WARNING: This assumes fixed camera angle
  (let [xvec (-> (.copy v1 move-right-vec)
                 (.multiplyScalar input-x))
        yvec (-> (.copy v2 move-up-vec)
                 (.multiplyScalar input-y))
        heading (-> heading
                    (.copy xvec)
                    (.add yvec))]
    (.normalize heading)))

(defn- get-target-position-world [out ^three/Object3D object ^three/Vector3 heading dist]
  (if (< 0 (.lengthSq heading))
    (do
      (.getWorldPosition object out)
      (.copy v2 heading)
      (.multiplyScalar v2 dist)
      (.add out v2))
    (do
      (.getWorldPosition object out)
      (.getWorldDirection object v2)
      (.multiplyScalar v2 100)
      (.add out v2))))


(defn- set-velocity! [bus entity-id speed ^three/Vector3 local-heading]
  ;; WARNING: This assumes local-heading is in world-space
  (.multiplyScalar local-heading @speed)
  (message/send bus entity-id :physics/set-velocity (vector3->tuple local-heading)))

(defn- update-movement! [bus entity-id {:keys [^three/Object3D object
                                               move-input-xy
                                               move-speed
                                               last-look-position]}]
  (let [movement-heading (get-movement-heading move-input-xy)
        look-position (vector3->map
                       (get-target-position-world look-position object movement-heading 10.0))
        moving? (< 0 (.lengthSq movement-heading))]
    (set-velocity! bus entity-id move-speed movement-heading)
    {:look-position (if moving? look-position last-look-position)
     :moving? moving?}))

(defn- update-weapon! [bus entity-id player {:keys [x z]}]
  (let [height 1.5
        object ^three/Object3D (:object player)
        aim-pos (.set v1 x height z)
        pos (.setY ^three/Vector3 (.getWorldPosition object v2)
                   height)
        dir (.normalize (.sub aim-pos pos))]
    (message/send bus entity-id :weapon/set-aim {:world-position (vector3->tuple pos)
                                                 :world-direction (vector3->tuple dir)})))

(defn- tick [bus _ entity-id {:keys [aiming? dead? object anim-fsm
                                     state]
                              :as player}]
  (fsm/send anim-fsm :tick)
  (when-not dead?
    (let [aim-position (get-in @db/input [:mouse :world-position])
          world-position (.getWorldPosition object v1)]
      (.copy uniform-player-position world-position)
      (swap! db/player assoc
             :lasersight-visible? aiming?
             :world-position (vector3->tuple world-position))
      (update-weapon! bus entity-id player aim-position)
      (let [{:keys [look-position moving?]} (update-movement! bus entity-id player)]
        (swap! state assoc
               :last-look-position look-position
               :moving? moving?)
      ;; Lower body look
        (if (or moving? (not aiming?))
          (set-lower-look-at! bus entity-id look-position)
          (set-lower-look-at! bus entity-id aim-position))
        (if aiming?
          (set-upper-look-at! bus entity-id aim-position)
          (set-upper-look-at! bus entity-id look-position))))))

(defn- on-damaged [bus local-state entity-id _payload]
  (let [world-pos (world-position-as-tuple (get-in @local-state [entity-id :object]))]
    (message/send bus :particles/spawn {:type :blood-fountain
                                        :scale 0.5
                                        :position world-pos})))

(defn- on-killed [bus local-state entity-id _payload]
  (when-not (get-in @local-state [entity-id :dead?])
    (timer/after 5000 (fn []
                        (swap! db/game assoc :active-view :title)))
    (let [world-pos (world-position-as-tuple (get-in @local-state [entity-id :object]))]
      (swap! local-state assoc-in [entity-id :dead?] true)
      (message/send bus entity-id :physics/set-velocity [0 0 0])
      (message/send bus entity-id :physics/disable {})
      (message/send bus entity-id :animation/stop-all {})
      (message/send bus entity-id :animation/play {:loop? false
                                                   :clamp-when-finished? true
                                                   :animation :animation/character-death})
      (message/send bus :particles/spawn {:type :blood-fountain
                                          :scale 1.5
                                          :position world-pos}))))

(defn- add-listeners! [bus local-state entity-id anim-fsm]

  (message/on bus entity-id :entity/damaged (partial on-damaged bus local-state entity-id))
  (message/on bus entity-id :entity/killed (partial on-killed bus local-state entity-id))
  (message/on bus entity-id :weapon/fired (fn []
                                            (message/send bus entity-id :animation/play {:loop? false
                                                                                         :weight 1
                                                                                         :animation :animation/character-shoot})))
  (message/on bus
              entity-id
              [:input/action :aim] #(do (swap! local-state assoc-in [entity-id :aiming?] %)
                                        (message/send bus entity-id :player/aiming? %)
                                        (fsm/send anim-fsm (if %
                                                             :start-aiming
                                                             :stop-aiming))))
  (message/on bus
              entity-id
              [:input/action :fire] #(when (and (get-in @local-state [entity-id :aiming?])
                                                (not (get-in @local-state [entity-id :dead?])))
                                       (swap! local-state assoc-in [entity-id :firing?] %)
                                       (message/send bus entity-id :weapon/fire %)))
  (message/on bus
              entity-id
              [:input/axis-update :move] #(swap! local-state assoc-in [entity-id :move-input-xy] %)))

(defn- speed-track [base-speed]
  (r/track! (fn []
              (let [adjust (->> @(th/cursor db/player [:modifiers :speed])
                                (reduce + 0))]
                (+ base-speed adjust)))))

(defrecord PlayerSystem [bus local-state]
  ISystem
  (init [_ _])
  (destroy [_ _])
  (on-entity-added [_ _ id
                    ^three/Object3D obj
                    {:keys [move-speed]}]
    (let [c (util/cursor local-state [id])
          anim-fsm (fsm/service (assoc animation-fsm
                                       :context {:object obj
                                                 :bus bus
                                                 :state c
                                                 :entity-id id}))]
      (fsm/start anim-fsm)
      (add-listeners! bus local-state id anim-fsm)
      (swap! local-state assoc id {:object obj
                                   :entity-id id
                                   :state c
                                   :anim-fsm anim-fsm
                                   :move-input-xy [0 0]
                                   :move-speed (speed-track move-speed)})
      #(fsm/send anim-fsm :start)))
  (on-entity-removed [_ _ id _obj _config]
    (swap! local-state dissoc id))
  (tick [_ delta-time]
    (.setX uniform-time (+ (.-x uniform-time)
                           delta-time))
    (doseq [[entity-id player] @local-state]
      (tick bus local-state entity-id player))))

(defn create [event-bus]
  (let [local-state (atom {})]
    (->PlayerSystem event-bus local-state)))

