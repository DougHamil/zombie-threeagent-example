(ns zombie.app
  (:require [zombie.assets.core :as assets]
            [zombie.scene.core :as scene]
            [zombie.ui.core :as ui]))


(defn ^:dev/after-load start []
  (scene/init!)
  (ui/init!))

(defn init
  "Entry point"
  []
  (-> (assets/init!)
      (.then start)))
