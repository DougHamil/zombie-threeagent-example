(ns zombie.scene.system.attachment
  (:require [zombie.util.threejs :refer [get-in-object]]
            [zombie.util.messaging :as message]
            ["three" :as three]
            [threeagent.system :refer [ISystem]]))

(deftype AttachmentSystem [bus local-state]
  ISystem
  (init [_ _])
  (destroy [_ _])
  (on-entity-added [_ _ _id obj {:keys [path object visible-signal hidden?]}]
    (let [new-parent ^three/Object3D (get-in-object obj path)]
      (.add new-parent object))
    (when hidden?
      (set! (.-visible object) false))
    (when-let [[entity-id event] visible-signal]
      (message/on bus entity-id event #(set! (.-visible object) %))))
  (on-entity-removed [_ _ _id _obj {:keys [object]}]
    (.remove (.-parent object) object))
  (tick [_ _delta-time]))

(defn create [event-bus]
  (->AttachmentSystem event-bus (atom {})))
