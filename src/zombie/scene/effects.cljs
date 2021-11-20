(ns zombie.scene.effects
  "Threeagent components for world-space visual effects (particles, bullet tracers, etc)"
  (:require [zombie.state.databases :as db]
            [zombie.util.math :as math]
            [zombie.util.threejs :refer [direction-tuple->rotation-tuple]]
            [threeagent.core :as th]))

(defn- particle-system [id {:keys [rotation position] :as cfg}]
  [:object {:particle (assoc cfg
                             :on-dead (fn []
                                        (swap! db/particles dissoc id)
                                        (when-let [cb (:on-dead cfg)]
                                          (cb))))
            :rotation rotation
            :position position}])

(defn- ray [id {:keys [start-position end-position]}]
  (let [life (atom 0.0)
        start-length (math/distance start-position end-position)
        dir (math/direction start-position end-position)
        rot (direction-tuple->rotation-tuple dir)]
    (fn [_ _]
      (let [_ @(th/cursor db/game [:time])
            dt @(th/cursor db/game [:delta-time])
            _ (swap! life + dt)
            n (/ @life 0.2)
            length (* start-length (- 1.0 n))]
        (when (< 1.0 n)
          (swap! db/rays dissoc id))
        ^{:key id}
        [:object {:position end-position
                  :rotation rot}
         [:box {:position [0 0 (/ length -2)]
                :material (:material/laser-bullet @db/assets)
                :scale [0.1 0.1 (- length)]}
          [:instance {:object (:light/laser-bullet @db/assets)}]]]))))

(defn- health-bar [_id {:keys [percent visible? entity-id]}]
  (let [length (* percent 1.5)
        x-offset (- length 1.5)]
    [:object {:position [x-offset 0 0]}
     (when visible?
       [:box {:material (:material/health-bar @db/assets)
              :rotation [0 math/pi4 0]
              :scale [length 0.1 0.1]
              :follow {:entity-id entity-id
                       :position-offset [0 2 0]}}])]))

(defn- particles []
  [:object
   (for [[id particle] @db/particles]
     ^{:key id}
     [particle-system id particle])])

(defn- health-bars []
  [:object
   (for [[id cfg] @db/health-bars]
     ^{:key id}
     [health-bar id cfg])])

(defn- rays []
  [:object
   (for [[id cfg] @db/rays]
     ^{:key id}
     [ray id cfg])])

(defn render []
  [:object
   [particles]
   [health-bars]
   [rays]])
