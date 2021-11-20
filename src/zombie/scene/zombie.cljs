(ns zombie.scene.zombie
  "The Threeagent component for the zombies")

(defn- model [id]
  (let [s 0.005]
    [:model {:id id
             :type :model/zombie
             :scale [s s s]
             :animation {:type :animation/character-idle}}]))

(defn render [_database id cfg]
  (let [{:keys [initial-position
                initial-health]} cfg]
    [:object {:id id
              :game {:enemy? true}
              :zombie {:move-speed 0.17}
              :entity {}
              :physics {:parts {:hull {:type :circle
                                       :radius 0.5
                                       :settings {:mass 100
                                                  :frictionAir 0.5}}}
                        :ignore-rotation? true
                        :position-offset [0.5 0 0.5]
                        :entity-id id}
              :spawner {:on-death [{:type :powerup
                                    :name "Speed+"
                                    :modifier {:stat :speed
                                               :amount 0.05}}]}
              :position initial-position
              :combat {:health initial-health}}
     [model id]]))
