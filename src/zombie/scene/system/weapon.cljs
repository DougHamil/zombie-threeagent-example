(ns zombie.scene.system.weapon
  (:require [zombie.scene.system.physics.core :as physics]
            [zombie.util.messaging :as message]
            [zombie.util.threejs :refer [tuple->vector3
                                       vector3->tuple]]
            [zombie.state.databases :as db]
            [statecharts.core :as fsm]
            [threeagent.system :refer [ISystem]]))

(def ^:private ^:dynamic *next-id* 0)
(declare fire-weapon!)
(defn- -semi-auto-entry-fire [{:keys [bus local-state entity-id]} _evt]
  (fire-weapon! bus local-state entity-id))

(defn- semi-auto-fsm [firing-rate]
  (fsm/machine {:id :weapon/semi-auto
                :initial :idle
                :on {:start-firing {}
                     :end-firing {}
                     :tick {}}
                :states {:idle {:on {:start-firing :fire}}
                         :fire {:entry [-semi-auto-entry-fire]
                                :after [{:delay (* 1000 (/ 1.0 firing-rate))
                                         :target :idle}]}}}))

(defn- spawn-particles! [bus type pos dir]
  (message/send bus :particles/spawn {:type type
                                      :position pos
                                      :rotation dir}))

(defn- fire-weapon! [bus local-state entity-id]
  (let [physics-system (get-in @local-state [:systems :physics])
        {damage :damage
         aim :aim} (get-in @local-state [:weapons entity-id])
        {:keys [world-position
                world-direction]} aim
        ray-start (tuple->vector3 world-position)
        ray-end (-> (tuple->vector3 world-direction)
                    (.multiplyScalar 10)
                    (.add ray-start))
        hits (->> (physics/raycast-all physics-system
                                       (vector3->tuple ray-start)
                                       (vector3->tuple ray-end))
                  (filter #(not= entity-id (:entity-id %)))
                  (sort-by :distance)
                  (take 1))]
    (message/send bus entity-id :audio/play-sound {:type :sfx/laser-large})
    (when (not (seq hits))
       (set! *next-id* (inc *next-id*))
       (swap! db/rays assoc *next-id* {:start-position world-position
                                       :end-position (vector3->tuple ray-end)}))
    (doseq [{enemy-id :entity-id
             normal :hit-normal
             hit-position :hit-position} hits]
       (set! *next-id* (inc *next-id*))
       (swap! db/rays assoc *next-id* {:start-position world-position
                                       :end-position hit-position})
       (if enemy-id
         (message/send bus enemy-id :combat/hit {:damage damage
                                                 :attack-direction world-direction
                                                 :hit-normal normal
                                                 :hit-position hit-position
                                                 :attacker-id entity-id})
         (do
           (message/send bus :audio/play-sound {:type :sfx/impact-plate
                                                :position hit-position})
           (spawn-particles! bus :impact-sparks
                             hit-position
                             normal))))))

(defn- register-listeners! [bus local-state entity-id fsm]
  (message/on bus entity-id :weapon/set-aim #(swap! local-state assoc-in [:weapons entity-id :aim] %))
  (message/on bus entity-id :weapon/fire
              (fn [fire?]
                (if fire?
                  (fsm/send fsm :start-firing)
                  (fsm/send fsm :end-firing)))))

(deftype WeaponSystem [bus local-state]
  ISystem
  (init [_ {:keys [systems]}]
    (reset! local-state {:systems systems}))
  (destroy [_ _])
  (on-entity-added [_ _ key _obj {:keys [damage firing-rate]}]
    (let [fsm (fsm/service (assoc (semi-auto-fsm firing-rate)
                                  :context {:entity-id key
                                            :bus bus
                                            :local-state local-state}))]
      (fsm/start fsm)
      (register-listeners! bus local-state key fsm)
      (swap! local-state assoc-in [:weapons key] {:damage damage
                                                  :fsm fsm})))
  (on-entity-removed [_ _ _key _obj {:keys []}])
  (tick [_ _delta-time]))

(defn create [event-bus]
  (->WeaponSystem event-bus (atom {})))
