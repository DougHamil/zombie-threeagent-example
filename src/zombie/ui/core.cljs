(ns zombie.ui.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [zombie.ui.hud :as hud]
            [zombie.ui.console :as console]
            [zombie.state.databases :as db]))

(defn- root []
  [:div
   [:div {:style {:top "0"
                  :left "0"
                  :pointer-events "none"
                  :position "fixed"}}
    (when (= :game @(r/cursor db/game [:active-view]))
      [hud/render])]
   [:div {:style {:top "0"
                  :left "0"
                  :position "fixed"}}
    (when @(r/cursor db/ui [:show-console?])
      [console/render])]
   [:div {:style {:top "0"
                  :left "0"
                  :position "fixed"}}
    (when @(r/cursor db/ui [:show-debug?])
      [:div {:ref (fn [el]
                    (when el
                      (.appendChild el (:physics-debug-canvas @db/ui))))}])]])

(defn- on-keypress [evt]
  (case (.-charCode evt)
    96
    (swap! db/ui update :show-console? not)

    :else))

(defn init! []
  (let [el (js/document.getElementById "ui-root")]
    (.addEventListener js/document "keypress" on-keypress)
    (rdom/render [root] el)))
  
