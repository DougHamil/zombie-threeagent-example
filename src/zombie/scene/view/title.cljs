(ns zombie.scene.view.title
  "Component for the title card view"
  (:require [threeagent.core :as th]
            ["three" :as three]
            [zombie.util.math :refer [pi2 pi]]
            [zombie.state.databases :as db]))

(defn- lights []
  [:object
   [:ambient-light {:intensity 0.05}]])

(defn- camera []
  (let [aspect @(th/cursor db/scene [:screen-aspect-ratio])
        light-target (three/Object3D.)
        height 8
        width (* height aspect)]
    [:object
     [:orthographic-camera {:id "title-camera"
                            :position [0 4 10]
                            :entity {}
                            :camera   {:look-at-target "focus"}
                            :input    {:pick-camera true}
                            :near     0.001
                            :far      1000
                            :left     (- width)
                            :right    width
                            :top      height
                            :bottom   (- height)}
      [:object {:position [0 10 20]}
       [lights]]
      [:object {:position [10 0 -50]}
       [:instance {:object light-target}]]]]))

(defn ground []
  [:object {:position [-20 0 20]}
   (for [x (range 5)
         y (range 5)
         :let [px (* x 10.0)
               py (* (- y) 10.0)]]
     [:plane {:position [px 0 py]
              :scale [10.0 10.0 10.0]
              :rotation [(- pi2) 0 0]
              :receive-shadow true
              :material (:material/grass @db/assets)}])])

(defn zombies []
  [:object
   [:model {:id "zombie-a"
            :entity {}
            :type :model/zombie
            :position [-3 0 -3]
            :rotation [0 0.7 0]
            :scale [0.005 0.005 0.005]
            :animation {:clip :animation/character-idle
                        :loop? true}}]
   [:model {:id "zombie-b"
            :entity {}
            :type :model/zombie
            :position [2 0 -4.5]
            :rotation [0 -0.1 0]
            :scale [0.005 0.005 0.005]
            :animation {:clip :animation/character-idle
                        :loop? true}}]
   [:model {:id "zombie-c"
            :entity {}
            :type :model/zombie
            :position [0 0 -4.5]
            :scale [0.005 0.005 0.005]
            :animation {:clip :animation/character-idle
                        :loop? true}}]])

(defn streetlight []
  [:object
   [:model {:type :model/light-curved
            :rotation [0 pi2 0]
            :position [-2 0 1]}
    [:object {:position [0 6.8 1]}
     [:object {:particle {:type :moths
                          :loop? true}
               :position [0 -0.6 0.5]}]
     [:point-light {:intensity 1.8
                    :color 0xF9B800
                    :position [-0.8 -2 0]
                    :distance 5.5}]
     [:spot-light {:intensity 1.8
                   :cast-shadow true
                   :color 0xF9B800
                   :angle (/ pi 7)
                   :penumbra 0.2
                   :distance 18}]]]])

(defn graves []
  [:object
   [:model {:type :model/grave
            :position [3 0 -4]}]
   [:model {:type :model/coffin-old
            :rotation [0 0.3 0]
            :position [-1.4 0 -3.4]}]
   [:model {:type :model/coffin-old
            :rotation [0 -0.2 0]
            :position [2.8 0 4.5]}]
   [:model {:type :model/coffin
            :rotation [-0.5 1.1 pi2]
            :scale [0.8 0.8 0.8]
            :position [-2.5 0.4 1.3]}]])
   
(defn- title []
  [:object {:position [0 2 0]}
   [:text {:text "A Zombie Shooter"
           :anchor-x "left"
           :color "white"
           :position [0 2.8 0]
           :scale [10 10 10]}]
   [:text {:text "by Doug"
           :color "red"
           :position [5.15 1.9 0]
           :scale [2 2 2]
           :anchor-x "left"}]])

(defn- buttons []
  [:object {:position [5 3 5]
            :rotation [0 0 0]}
   [:plane {:input {:on-click (fn []
                                (swap! db/game assoc :active-view :game))
                    :cursor "pointer"}
            :scale [1 0.8 1]
            :position [0 -0.5 -0.1]}]
   [:text {:text "Play"
           :color "green"
           :scale [8 8 8]
           :anchor-x "center"}]])

(defn- scene []
  [:object
   [title]
   [buttons]
   [zombies]
   [ground]
   [streetlight]
   [lights]
   [graves]
   [:object {:position [0 2 0]
             :id "focus"
             :entity {}}]
   [:model {:type :model/robot
            :scale [0.005 0.005 0.005]
            :animation {:clip :animation/character-title-idle
                        :loop? true}}]
   [:model {:type :model/bench
            :scale [1.0 0.57 0.45]
            :position [0 0 0.03]
            :rotation [0 pi 0]}]
   [:model {:type :model/blaster-a
            :position [0.6 0.05 1]
            :rotation [0
                       (+ pi 0.3)
                       pi2]}
    [:object {:particle {:type :smoke-trail-loop
                         :loop? true}
              :position [0 0.3 -0.3]}]]])


(defn render []
  [:object
   [camera]
   [scene]])
