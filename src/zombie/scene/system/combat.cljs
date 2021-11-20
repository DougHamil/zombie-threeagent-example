(ns zombie.scene.system.combat
  (:require [threeagent.system :refer [ISystem]]
            ["three" :as three]
            ["@tweenjs/tween.js" :as tween]
            [zombie.state.databases :as db]
            [zombie.util.threejs :refer [world-position-as-tuple]]
            [zombie.util.messaging :as message]))

(defn- hit-reaction-flash! [materials]
  (let [t1 (-> (tween/Tween. #js {:x 0})
               (.to #js {:x 1} 200)
               (.repeat 1)
               (.yoyo true)
               (.start))]
    (.onUpdate t1 #(doseq [m materials]
                     (.setValues ^three/Material m (clj->js {:emissive "white"
                                                             :emissiveIntensity (.-x %)}))))))

(defn- handle-reaction! [bus
                         object
                         materials
                         {:keys [text? flash? sound particles]}
                         {:keys [hit-position hit-normal damage]}]
      (when text?
        (message/send bus :particles/spawn {:type :floating-text
                                            :position (assoc (world-position-as-tuple object)
                                                             1 2)
                                            :color "orange"
                                            :speed 5
                                            :spread 8
                                            :text (str damage)}))
      (when flash?
        (hit-reaction-flash! materials))
      (when sound
        (message/send bus :audio/play-sound {:type sound
                                             :position hit-position}))
      (when particles
        (message/send bus :particles/spawn {:type particles
                                            :position hit-position
                                            :rotation hit-normal})))

(defn- on-hit [bus local-state entity-id {:keys [damage] :as hit}]
  (let [{:keys [health hit-reaction materials object
                death-reaction
                on-killed total-health]} (get @local-state entity-id)
        new-health (max (- health damage) 0)]
    (swap! db/health-bars assoc-in [entity-id :visible?] true)
    (swap! db/health-bars assoc-in [entity-id :percent] (/ new-health total-health))
    (handle-reaction! bus object materials hit-reaction hit)
    (when (pos? health)
      (swap! local-state assoc-in [entity-id :health] new-health)
      (if (pos? new-health)
        (message/send bus entity-id :entity/damaged (assoc hit
                                                           :damage damage
                                                           :old-health health
                                                           :new-health new-health))
        (do
          (when on-killed
            (on-killed))
          (handle-reaction! bus object materials death-reaction hit)
          (message/send bus entity-id :entity/killed (assoc hit
                                                            :damage damage
                                                            :old-health health
                                                            :new-health 0)))))))

(defn register-listeners! [bus local-state entity-id]
  (message/on bus entity-id :combat/hit (partial on-hit bus local-state entity-id)))

(defn- get-materials [^three/Object3D obj]
  (let [mats (array)]
    (.traverse obj #(do
                      (when-let [mat (.-material %)]
                        (when (instance? three/MeshPhongMaterial mat)
                          (let [c (.clone mat)]
                            (set! (.-material %) c)
                            (.push mats c))))))
    mats))

(deftype CombatSystem [bus local-state]
  ISystem
  (init [_ _])
  (destroy [_ _])
  (on-entity-added [_ _ id ^three/Object3D obj cfg]
    (register-listeners! bus local-state id)
    (fn []
      (let [materials (get-materials obj)]
        (swap! db/health-bars assoc id {:visible? false
                                        :entity-id id
                                        :percent 1.0})
        (swap! local-state assoc id (assoc cfg
                                           :total-health (:health cfg)
                                           :object obj
                                           :materials materials)))))
  (on-entity-removed [_ _ id _obj _cfg]
    (swap! db/health-bars dissoc id)
    (swap! local-state dissoc id))
  (tick [_ _delta-time]))

(defn create [event-bus]
  (->CombatSystem event-bus (atom {})))
