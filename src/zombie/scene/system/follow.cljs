(ns zombie.scene.system.follow
  (:require [zombie.state.databases :as db]
            ["three" :as three]
            [threeagent.system :refer [ISystem]]))

(def ^:private v1 (three/Vector3.))

(defn- tick-follower! [_delta-time {:keys [^three/Object3D object entity-id position-offset look-at?]}]
  (when-let [obj ^three/Object3D (get @db/entity-objects entity-id)]
    (let [world-pos (.getWorldPosition obj v1)
          [ox oy oz] position-offset]
      (.set (.-position object)
            (+ ox (.-x world-pos))
            (+ oy (.-y world-pos))
            (+ oz (.-z world-pos)))
      (when look-at?
        (.lookAt object world-pos)))))

(deftype FollowSystem [bus local-state]
  ISystem
  (init [_ _])
  (destroy [_ _])
  (on-entity-added [_ _ _id obj {:keys [entity-id position-offset look-at?]}]
    (swap! local-state assoc obj {:entity-id entity-id
                                  :look-at? look-at?
                                  :position-offset (or position-offset [0 0 0])
                                  :object obj}))
  (on-entity-removed [_ _ _id obj _config]
    (swap! local-state dissoc obj))
  (tick [_ delta-time]
    (doseq [[_ follower] @local-state]
      (tick-follower! delta-time follower))))

(defn create [event-bus]
  (->FollowSystem event-bus (atom {})))
