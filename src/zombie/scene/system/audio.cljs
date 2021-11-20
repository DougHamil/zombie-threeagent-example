(ns zombie.scene.system.audio
  (:require ["three" :as three]
            ["howler" :refer [Howler]]
            [threeagent.system :refer [ISystem]]
            [zombie.state.databases :as db]
            [zombie.util.messaging :as message]))

(def ^:private v1 (three/Vector3.))
(def ^:private v2 (three/Vector3.))
(def ^:private v3 (three/Vector3.))
(def ^:private quat1 (three/Quaternion.))

(defn- set-to-world-position! [^js howl ^three/Object3D obj sound-id]
  (let [world-pos ^three/Vector3 (.getWorldPosition obj v1)
        world-dir ^three/Vector3 (.getWorldDirection obj v2)
        world-quat ^three/Quaternion (.getWorldQuaternion obj quat1)
        world-up ^three/Vector3 (-> v3
                                    (.copy (.-up obj))
                                    (.applyQuaternion world-quat))]
    (.orientation howl
                  (.-x world-dir)
                  (.-y world-dir)
                  (.-z world-dir)
                  (.-x world-up)
                  (.-y world-up)
                  (.-z world-up))
    (.pos howl
          (.-x world-pos)
          (.-y world-pos)
          (.-z world-pos)
          sound-id)))


(defn- random-sfx [type]
  (rand-nth (get @db/assets type)))

(defn- play-sound! [local-state ^three/Object3D obj {:keys [type]}]
  (let [howl (random-sfx type)
        sound-id (.play howl)]
    (set-to-world-position! howl obj sound-id)))

(defn- play-sound-at-position! [{:keys [type position]}]
  (let [[x y z] position
        howl (random-sfx type)
        sound-id (.play howl)]
    (.pos howl x y z sound-id)))

(defn- register-listeners! [bus local-state entity-id obj]
  (message/on bus entity-id :audio/play-sound (partial play-sound! local-state obj)))

(deftype AudioSystem [bus local-state]
  ISystem
  (init [_ _]
    (message/on bus :audio/play-sound play-sound-at-position!))
  (destroy [_ _])
  (on-entity-added [_ _ key obj {:keys [listener?]}]
    (when listener?
      (swap! local-state assoc :listener obj))
    (register-listeners! bus local-state key obj))
  (on-entity-removed [_ _ _key _obj {:keys [listener?]}]
    (when listener?
      (swap! local-state dissoc :listener)))
  (tick [_ _]
    (when-let [listener (:listener @local-state)]
      (set-to-world-position! Howler listener nil))))

(defn create [event-bus]
  (->AudioSystem event-bus (atom {})))
