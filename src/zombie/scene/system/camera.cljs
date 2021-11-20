(ns zombie.scene.system.camera
  (:require [zombie.state.databases :as db]
            [threeagent.system :refer [ISystem]]
            ["three" :as three]))

(def ^:private v1 (three/Vector3.))

(defn- tick-camera! [_delta-time {:keys [look-at-target
                                         object]}]
  (when-let [look-at-obj (get-in @db/entity-objects [look-at-target])]
    (let [pos (.getWorldPosition look-at-obj v1)]
      (.lookAt object pos))))

(deftype CameraSystem [local-state]
  ISystem
  (init [_ {:keys [canvas threejs-renderer]}]
    (swap! local-state assoc
           :canvas canvas
           :renderer threejs-renderer))
  (destroy [_ _])
  (on-entity-added [_ _ id ^js obj {:keys [look-at-target]}]
    (let [ctx {:object obj
               :look-at-target look-at-target}]
      (swap! local-state assoc-in [:cameras id] ctx)))
  (on-entity-removed [_ _ _id _obj _config])
  (tick [_ delta-time]
    (doseq [[_ cam] (:cameras @local-state)]
      (tick-camera! delta-time cam))))
    

(defn create []
  (->CameraSystem (atom {})))
