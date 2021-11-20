(ns zombie.scene.entity-type.core
  (:require ["three" :as three]
            ["troika-three-text" :refer [Text]]
            [zombie.state.databases :as db]
            [zombie.util.pooling :as pools]
            [threeagent.entity :refer [IEntityType]]))

(deftype ModelEntity []
  IEntityType
  (create [_ _ {:keys [type]}]
    (let [parent (three/Object3D.)
          pool (get @db/assets type)
          model (pools/claim! pool)]
      (when model
        (.add parent model)
        (set! (.-modelInstance parent) model))
      parent))
  (destroy! [_ _ ^three/Object3D obj {:keys [type]}]
    (let [model (.-modelInstance obj)]
      (when model
        (let [pool (get @db/assets type)]
          (pools/return! pool model))))))

(deftype TextEntity []
  IEntityType
  (create [_ _ {:keys [text font anchor-x color]}]
    (let [parent (three/Object3D.)
          obj (Text.)]
      (set! (.-text obj) text)
      (set! (.-font obj) ((or font :font/bebas) @db/assets))
      (when anchor-x
        (set! (.-anchorX obj) anchor-x))
      (when color
        (set! (.-color obj) color))
      (.sync obj)
      (.add parent obj)
      parent))
  (destroy! [_ _ ^three/Object3D obj _]
    (.dispose (aget (.-children obj) 0))))

(defn create []
  {:text (->TextEntity)
   :model (->ModelEntity)})
