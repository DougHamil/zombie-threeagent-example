(ns zombie.scene.system.spawner
  (:require [threeagent.system :refer [ISystem]]
            [zombie.util.messaging :as message]
            [zombie.util.threejs :refer [world-position-as-tuple]]
            [zombie.state.databases :as db]))

(defonce ^:private ^:dynamic *spawn-id* 0)

(defn- next-id []
  (set! *spawn-id* (inc *spawn-id*))
  (str "spawnable-" *spawn-id*))
  
(defn- on-killed [entity-db obj spawnables]
  (doseq [spawnable spawnables]
    (swap! entity-db assoc (or (:id spawnable) (next-id))
           (assoc spawnable
                  :initial-position (world-position-as-tuple obj)))))
  
(deftype SpawnerSystem [bus local-state]
  ISystem
  (init [_ _])
  (destroy [_ _])
  (on-entity-added [_ {:keys [entity-db]} key obj {:keys [on-death]}]
    (when on-death
      (message/on bus key :entity/killed
                  (partial on-killed (or entity-db db/entities) obj on-death))))
  (on-entity-removed [_ _ key _obj _cfg])
  (tick [_ _]))

(defn create [event-bus]
  (->SpawnerSystem event-bus (atom {})))
