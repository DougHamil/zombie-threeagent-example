(ns zombie.scene.props
  "Threeagent components for gameplay props"
  (:require [threeagent.core :as th]
            [zombie.util.common :refer [physics-layer-props physics-layer-player]]
            [zombie.state.databases :as db]
            [zombie.util.math :refer [pi4]]))

(defn powerup [database id {:keys [initial-position name modifier]}]
  (let [jitter (js/Math.random)]
    (fn []
      (let [t (js/Math.sin (* 2.0
                              (+ jitter @(th/cursor db/game [:time]))))]
        [:object {:id id
                  :physics {:parts {:hull {:type :rectangle
                                           :width 0.5
                                           :height 0.5
                                           :settings {:isSensor true
                                                      :isStatic true
                                                      :collisionFilter {:category  physics-layer-props
                                                                        :mask physics-layer-player}}
                                           :on-collision-start #(do
                                                                  (swap! db/player update-in
                                                                         [:modifiers (:stat modifier)]
                                                                         conj
                                                                         (:amount modifier))
                                                                  (swap! database dissoc id))}}}
                  :position initial-position}
         [:object {:position [0 (/ (+ t 1.5) 2.0) 0]}
          [:box {:material (:material/powerup-blue @db/assets)
                 :scale [0.5 0.5 0.5]
                 :rotation [0 t 0]}]
          [:text {:text name
                  :anchor-x "center"
                  :scale [5 5 5]
                  :rotation [0 pi4 0]
                  :position [0 1 0]}]]]))))


