(ns zombie.assets.texture
  (:require ["three" :as three]))

(def ^:private three-texture-loader (three/TextureLoader.))

(defn loader [_key path cfg]
  (js/Promise. (fn [resolve _]
                  (.load three-texture-loader path
                        (fn [t]
                          (set! (.-wrapS t) three/RepeatWrapping)
                          (set! (.-wrapT t) three/RepeatWrapping)
                          (set! (.-magFilter t) three/NearestFilter)
                          (set! (.-anisotropy t) 4)
                          (when-let [rpt (:repeat cfg)]
                            (set! (.-repeat t) (clj->js rpt)))
                          (resolve t))))))
