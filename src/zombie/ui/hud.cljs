(ns zombie.ui.hud)

(defn- grid-cell [x y children]
  [:div {:style {:grid-column-start x
                 :grid-column-end x
                 :grid-row-start y
                 :grid-row-end y}}
   children])

(defn- hud-ne []
  [:div])

(defn- hud-nw []
  [:div])
  
(defn- hud-se []
  [:div {:style {:font-size "10px"
                 :pointer-events "auto"}}
   "Created with"
   [:a {:href "https://github.com/DougHamil/threeagent"}
    "Threeagent"]])

(defn- hud-sw []
  [:div])

(defn render []
  [:div {:style {:display "grid"
                 :width "100vw"
                 :height "100vh"
                 :color "white"
                 :user-select "none"
                 :pointer-events "none"
                 :grid-template-columns "100px auto 100px"
                 :grid-template-rows "100px auto 100px"}}
   [grid-cell 1 1 [hud-nw]]
   [grid-cell 1 3 [hud-sw]]
   [grid-cell 3 1 [hud-ne]]
   [grid-cell 3 3 [hud-se]]])
