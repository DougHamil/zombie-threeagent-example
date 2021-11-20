(ns zombie.scene.player
  "The Threeagent component for the player"
  (:require [threeagent.core :as th]
            ["three" :as three]
            [zombie.state.databases :as db]
            [zombie.util.common :refer [physics-layer-player]]
            [zombie.util.math :refer [pi2]]))

(defn- model [id]
  (let [scale 0.005
        light-target (three/Object3D.)
        weapon-model-key :model/blaster-a]
    (.set (.-position light-target) 0 0.5 2)
    (fn []
      [:model {:type :model/robot
               :id id
               :scale [scale scale scale]
               :animation {}}
       [:> ["Root" "HipsCtrl" "Hips" "Spine" "Chest" "UpperChest"]
        [:> ["Neck" "Head"]
         [:instance {:object light-target
                     :position [0 0 2]}]
         [:spot-light {:intensity 2.0
                       :distance 20.0
                       :angle (/ pi2 3)
                       :penumbra 0.1
                       :color 0xF7B500
                       :target light-target
                       :cast-shadow true
                       :position [0 0 1]}]]
        [:> ["RightShoulder" "RightArm" "RightForeArm" "RightHand"]
         [:model {:id id
                  :type weapon-model-key
                  :rotation [pi2 0 pi2]
                  :weapon {:damage 5
                           :firing-rate 5}}]]]])))

(defn render [id]
  (let [initial-position @(th/cursor db/entities [id :initial-position])]
    [:object {:id id
              :player {:move-speed 0.12}
              :combat {:health 100}
              :entity {}
              :audio {}
              :input {:receive-events? true}
              :physics {:parts {:hull {:type :circle
                                       :radius 0.5
                                       :settings {:mass 100
                                                  :frictionAir 0.5
                                                  :collisionFilter {:category physics-layer-player}}}}
                        :ignore-rotation? true
                        :position-offset [0.5 0 0.5]}
              :position initial-position}
     [model id]]))
