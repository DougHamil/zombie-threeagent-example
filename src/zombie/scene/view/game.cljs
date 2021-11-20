(ns zombie.scene.view.game
  "Component for the gameplay view"
  (:require [threeagent.core :as th]
            ["three" :as three]
            [zombie.util.math :refer [pi2]]
            [zombie.state.databases :as db]
            [zombie.scene.map :as map]
            [zombie.scene.effects :as effects]
            [zombie.scene.player :as player]))

(defn- lights [light-target]
  [:object
   [:directional-light {:position [1 4 0]
                        :cast-shadow true
                        :shadow {:map-size {:width 2048
                                            :height 2048}
                                 :camera {:left -20
                                          :right 20
                                          :top 20
                                          :bottom -20}}
                        :target light-target
                        :color 0xFFFFFF
                        :intensity 0.05}]])

(defn- camera-helpers []
  [:object
   (when-let [helper @(th/cursor db/scene [:camera-helper])]
     [:instance {:object helper}])])

(defn- camera []
  (let [aspect @(th/cursor db/scene [:screen-aspect-ratio])
        light-target (three/Object3D.)
        height  10
        width (* height aspect)]
    [:object
     [:object {:id "audio-listener"
               :follow {:entity-id "player"
                        :look-at? true
                        :position-offset [1 1 1]}
               :audio {:listener? true}}]
     [:object {:follow {:entity-id "player"
                        :position-offset [15 18 15]}}
      [:orthographic-camera {:position [0 0 0]
                             :id "camera"
                             :entity {}
                             :camera   {:look-at-target "player"}
                             :input    {:pick-camera true}
                             :near     0.001
                             :far      1000
                             :left     (- width)
                             :right    width
                             :top      height
                             :bottom   (- height)}
       [:object {:position [0 10 20]}
        [lights light-target]]
       [:object {:position [10 0 -50]}
        [:instance {:object light-target}]]]]]))


(defn- box [pos on-click selected?]
  [:object {:physics {:parts {:hull {:type :rectangle
                                     :width 1
                                     :height 1
                                     :settings {:mass 1
                                                :frictionAir 0.5}}}
                      :position-offset [0.5 0 0.5]}
            :position pos}
    [:box {:material {:color (if selected? "purple" "white")}
           :receive-shadow true
           :cast-shadow true
           :input {:on-click on-click
                   :cursor "pointer"}}]])

(defn- cross [color]
   [:object
    [:box {:material {:color color}
           :cast-shadow true
           :receive-shadow true
           :scale [1 0.1 0.2]}]
    [:box {:material {:color color}
           :rotation [0 pi2 0]
           :cast-shadow true
           :receive-shadow true
           :scale [1 0.1 0.2]}]])

(defn- axis-pole [rot color]
  [:object {:rotation rot}
   [:cylinder {:material {:color color}
               :position [0 2.5 0]
               :height 5
               :radius-top 0.1
               :radius-bottom 0.1}]])
(defn- axes []
  [:object
   [:object 
    [axis-pole [0 0 (- pi2)] "red"]]
   [:object
    [axis-pole [0 0 0] "green"]]
   [:object 
    [axis-pole [pi2 0 0] "blue"]]])

(defn- icons []
  [:object
   (when-let [{:keys [x y z]} @(th/cursor db/input [:mouse :world-position])]
     [:object {:position [x y z]}
      [cross "blue"]])])

(defn- entities []
  (let [entities @db/entities]
    [:object
     (for [[id {:keys [type] :as cfg}] entities]
       ^{:key id}
       [:object
        (case type
          :player [player/render id])])]))

(defn render []
  [:object
   [icons]
   [effects/render]
   [camera-helpers]
   [camera]
   [map/render]
   [entities]])
