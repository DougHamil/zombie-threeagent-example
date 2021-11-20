(ns zombie.scene.system.canvas
  (:require [threeagent.system :refer [ISystem]]
            [zombie.state.databases :as db]))

(defn- resize-canvas! [canvas threejs-renderer]
  (let [w (.-innerWidth js/window)
        h (.-innerHeight js/window)
        pixel-ratio (.-devicePixelRatio js/window)]
    (set! (.-width canvas) w)
    (set! (.-height canvas) h)
    (swap! db/scene assoc :screen-aspect-ratio (/ w h))
    (swap! db/scene assoc :screen-pixel-ratio pixel-ratio)
    (.setPixelRatio threejs-renderer) pixel-ratio
    (.setSize threejs-renderer w h)))

(deftype CanvasSystem [local-state]
  ISystem
  (init [_ {:keys [canvas threejs-renderer]}]
    (let [listener-fn (partial resize-canvas! canvas threejs-renderer)]
      (js/window.addEventListener "resize" listener-fn)
      (swap! local-state assoc :resize-listener listener-fn)
      (listener-fn)))
  (destroy [_ _]
    (js/window.removeEventListener "resize" (:resize-listener @local-state)))
  (on-entity-added [_ _ _key _obj _config])
  (on-entity-removed [_ _ _key _obj _config])
  (tick [_ _delta-time]))

(defn create []
  (->CanvasSystem (atom {})))
