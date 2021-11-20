(ns zombie.assets.model
  (:require ["three/examples/jsm/loaders/GLTFLoader" :refer [GLTFLoader]]
            ["three/examples/jsm/loaders/FBXLoader" :refer [FBXLoader]]
            ["three" :as three]
            [clojure.string :as string]
            [zombie.util.pooling :as pooling]
            [zombie.util.threejs :refer [center-at-origin!]]
            [zombie.assets.material :refer [create-phong-material]]
            [zombie.state.databases :as db]))

(def ^:private gltf-loader (GLTFLoader.))
(def ^:private fbx-loader (FBXLoader.))

(defn- select-loader [path]
  (if (or (string/ends-with? path ".glb")
          (string/ends-with? path ".gltf"))
    gltf-loader
    fbx-loader))

(defn- store-bounding-box! [key ^three/Object3D obj]
  (let [bb (.setFromObject (three/Box3.) obj)]
    (center-at-origin! bb)
    (swap! db/model-colliders assoc key {:bounding-box bb})
    obj))

(defn- apply-scale! [scale ^three/Object3D obj]
  (.set (.-scale obj) scale scale scale)
  obj)

(defn- apply-shadow! [^three/Object3D obj]
  (.traverse obj (fn [^js obj]
                   (set! (.-castShadow obj) true)
                   (set! (.-receiveShadow obj) true)))
  obj)

(defn- set-phong-material! [^three/Material material ^three/Object3D obj]
  (.traverse obj (fn [^three/Object3D obj]
                   (when (.-isMesh obj)
                     (let [old-mat (.-material obj)
                           phong-mat (or
                                       material
                                       (create-phong-material {:color (.-color old-mat)
                                                               :map (.-map old-mat)
                                                               :emissiveIntensity (.-emissiveIntensity old-mat)
                                                               :emissive (.-emissive old-mat)
                                                               :emissiveMap (.-emissiveMap old-mat)
                                                               :shininess (.-shininess old-mat)}))]
                       (set! (.-material obj) phong-mat)))))
  obj)

(defn- replace-materials! [mats ^three/Object3D obj]
  (.traverse obj (fn [obj]
                   (when-let [mat (get mats (.-name obj))]
                     (set! (.-material obj) mat))))
  obj)

(defn middleware [key ^three/Object3D obj {:keys [scale pool-size material
                                                  material-replacements]}]
  (cond->> obj
    true (set-phong-material! material)
    material-replacements (replace-materials! material-replacements)
    true (apply-shadow!)
    scale (apply-scale! scale)
    true (store-bounding-box! key)
    true (pooling/pool (or pool-size 20))))

(defn skin-middleware [_key obj {:keys [shininess skin skin-emissive emissive material]}]
  (let [mesh    (aget (.-children obj) 0)
        mat     ^three/Material (.-material mesh)]
    (when-not material
      (.setValues mat (clj->js {:map       skin
                                :emissiveIntensity (when skin-emissive 1)
                                :emissive emissive
                                :emissiveMap skin-emissive
                                :shininess (or shininess 0)})))
    obj))

(defn loader [_key path _cfg]
  (js/Promise. (fn [res rej]
                 (.load (select-loader path) path
                        (fn [data]
                          (let [data (if-let [scene (.-scene data)]
                                       scene
                                       data)]
                            (res data)))
                        nil
                        rej))))

(defn claim-model! [model-key]
  (let [pool (get @db/assets model-key)]
    (pooling/claim! pool)))

(defn return-model! [model-key model]
  (let [pool (get @db/assets model-key)]
    (pooling/return! pool model)))
