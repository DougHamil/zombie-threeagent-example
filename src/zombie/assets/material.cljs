(ns zombie.assets.material
  (:require ["three" :as three]
            ["./ShaderPatch" :refer [SingleUniformValue]]))

(defonce uniform-player-position (three/Vector3. 0 0 0))
(defonce uniform-time (three/Vector3. 0 0 0))

(defn create-phong-material [cfg]
  (let [mat (three/MeshPhongMaterial. (clj->js cfg))]
    (set! (.-onBeforeCompile mat)
          (fn [^js shader]
            (set! (.-value (.-playerPosition (.-uniforms shader)))
                  uniform-player-position)
            (set! (.-value (.-time (.-uniforms shader)))
                  uniform-time)))
    mat))


(defn phong-loader [_key _path cfg]
  (js/Promise.resolve (create-phong-material cfg)))

(defn sprite-loader [_key _path cfg]
  (js/Promise.resolve (three/SpriteMaterial. (clj->js cfg))))
  
