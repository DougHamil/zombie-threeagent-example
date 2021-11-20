(ns zombie.ui.console
  (:require [reagent.core :as r]
            [zombie.state.databases :as db]))

(def commands {"toggle-debug" (fn []
                                (swap! db/ui update :show-debug? not))})
(defn- on-key [state evt]
  (case (.-charCode evt)
    13
    (let [command (:text @state)]
      (when-let [f (get commands command)]
        (f))
      (swap! state update :history conj command)
      (swap! state assoc :text ""))

    :else))

(defn- output [state]
  (let [history @(r/cursor state [:history])]
    [:div
     (for [i history]
       [:div i])]))

(defn render []
  (let [state (r/atom {:text ""
                       :history []})]
    (fn []
      [:div {:style {:width "100vw"
                     :height "50vh"
                     :display "grid"
                     :color "white"
                     :font-family "monospace"
                     :grid-template-rows "auto 20px"
                     :background-color "rgba(0, 0, 0, 0.8)"}}
       [output state]
       [:input {:type "text"
                :value (:text @state)
                :auto-focus true
                :on-change #(swap! state assoc :text (.-value (.-target %)))
                :on-key-press (partial on-key state)
                :style {:font-family "monospace"}}]])))
