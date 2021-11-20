(ns zombie.assets.animation
  (:require ["three/examples/jsm/loaders/FBXLoader" :refer [FBXLoader]]
            ["three" :as three]
            [clojure.string :as string]))

(def ^:private fbx-loader (FBXLoader.))
(def ^:private kenney-roots {:lower #{"Toes" "Foot"
                                      "Knee" "HipsCtrl" "Leg" "Root"
                                      "Toe"
                                      "Heel"}
                             :upper #{"Spine" "Shoulder"  "Chest" "Arm" "Hand" "Head" "Neck"}})

(defn- valid-animation? [anim]
  (not (string/includes? (.-name anim) "0.Targeting")))

(defn- mute-tracks! [keys ^three/AnimationClip clip]
  (let [tracks (->> (.-tracks clip)
                    (filter (fn [track]
                              (let [name (.-name track)]
                                (not
                                 (reduce (fn [acc k]
                                           (or acc
                                               (string/includes? name k)))
                                         false
                                         keys)))))
                    (to-array))]
    (set! (.-tracks clip) tracks)
    clip))
  
(defn kenney-mute-half [_key anims {:keys [mute-layer]}]
  (if mute-layer
    (->> anims
         (map (partial mute-tracks! (get kenney-roots mute-layer)))
         (doall))
    anims))

(defn middleware [_key ^js anims {:keys [additive?]}]
  (map #(if additive?
          (three/AnimationUtils.makeClipAdditive %)
          %)
       anims))

(defn loader [_key path _cfg]
  (js/Promise. (fn [res rej]
                 (.load fbx-loader path
                        (fn [data]
                          (res (filter valid-animation? (.-animations data))))
                        nil
                        (fn [err]
                          (js/console.error err)
                          (rej err))))))
