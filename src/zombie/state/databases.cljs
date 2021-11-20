(ns zombie.state.databases
  (:require [threeagent.core :as th]))

;; Reactive
(defonce ui (th/atom {:physics-debug-canvas (js/document.createElement "canvas")
                      :show-debug? false
                      :show-console? false}))
(defonce game (th/atom {:active-view :title
                        :time 0}))
(defonce scene (th/atom {}))
(defonce particles (th/atom {}))
(defonce health-bars (th/atom {}))
(defonce rays (th/atom {}))
(defonce input (th/atom {}))
(defonce player (th/atom {}))
(defonce entities (th/atom {"player" {:initial-health 100
                                      :type :player
                                      :initial-position [0 0 0]}}))
;; Non-reactive
(defonce model-colliders (atom {}))
(defonce entity-objects (atom {}))
(defonce assets (atom {}))
