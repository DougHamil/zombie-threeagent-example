(ns zombie.scene.core
  (:require [threeagent.core :as th]
            ["three" :as three]
            ["@tweenjs/tween.js" :as tween]
            [zombie.scene.view.game :as game-view]
            [zombie.scene.view.title :as title-view]
            [zombie.state.databases :as db]
            [zombie.scene.system.core :as systems]
            [zombie.scene.entity-type.core :as entity-types]))

(defn- root []
  [:object
   [:text {:text "a"}] ;; Force text shader to compile
   (case @(th/cursor db/game [:active-view])
     :game  [game-view/render]
     :title [title-view/render])])

(defn init! []
  (let [ctx (th/render root
                       (js/document.getElementById "root")
                       {:shadow-map {:enabled true}
                        :systems (systems/create)
                        :entity-types (entity-types/create)
                        :on-before-render #(do (swap! db/game update :time + %)
                                               (swap! db/game assoc :delta-time %)
                                               (.update tween))})
        scene (:threejs-scene ctx)
        renderer (:threejs-renderer ctx)]
    (let [fog-color 0x101010]
      (set! (.-fog scene) (three/Fog. fog-color 100 100))
      (.setClearColor renderer fog-color))
    (swap! db/scene assoc :threeagent-context ctx)))
