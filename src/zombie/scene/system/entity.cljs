(ns zombie.scene.system.entity
  (:require [threeagent.system :refer [ISystem]]
            [zombie.util.messaging :as message]
            [zombie.state.databases :as db]))

(deftype EntitySystem [bus local-state]
  ISystem
  (init [_ _]
    (reset! local-state {:current-db db/entity-objects}))
  (destroy [_ _])
  (on-entity-added [_ _ id obj _cfg]
    (swap! db/entity-objects assoc id obj))
  (on-entity-removed [_ _ id obj _cfg]
    (when (nil? id)
      (js/console.error obj))
    (message/drop-all bus id)
    (swap! db/entity-objects dissoc id))
  (tick [_ _delta-time]))

(defn create [event-bus]
  (->EntitySystem event-bus (atom {})))
