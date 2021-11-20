(ns zombie.scene.system.physics.body
  (:require ["matter-js" :refer [Bodies Body]]
            ["three" :as three]
            [zombie.util.threejs :refer [vector3->tuple
                                       get-world-rotation]]
            [zombie.state.databases :as db]))

(def ^:private v1 (three/Vector3.))
(def ^:private quat1 (three/Quaternion.))
(def ^:private euler1 (three/Euler.))

(defmulti create-body* :type)

(defmethod create-body* :rectangle [{:keys [scale width height position settings]}]
  (let [[x _ z] position]
    (.rectangle Bodies
                x
                z
                (* scale width)
                (* scale height)
                (clj->js settings))))

(defmethod create-body* :circle [{:keys [scale radius position settings]}]
  (let [[x _ z] position]
    (.circle Bodies
             x
             z
             (* scale radius)
             (clj->js settings))))

(defmethod create-body* :model-bounding-box [{:keys [scale position angle model-type settings]}]
  (let [{bb :bounding-box} (get @db/model-colliders model-type)
        min ^three/Vector3 (.-min bb)
        max ^three/Vector3 (.-max bb)
        w (- (.-x max) (.-x min))
        h (- (.-z max) (.-z min))
        [px _ pz] position
        body (.rectangle Bodies
                         px
                         pz
                         (* scale w)
                         (* scale h)
                         (clj->js (assoc settings :angle angle)))]
    (set! (.-originOffset body) [0 0])
    body))

(defn- world-transform [world-scale ^three/Object3D obj]
  {:position (map #(* world-scale %)
                  (vector3->tuple (.getWorldPosition obj v1)))
   :angle (-> (get-world-rotation obj euler1)
              (.reorder "YXZ")
              (.-y))
   :scale (* world-scale
             (.-x (.getWorldScale obj v1)))})

(defn create-body [world-scale ^three/Object3D object part-defs]
  (let [{:keys [position angle scale]} (world-transform world-scale object)
        parts (->> part-defs
                   (map (fn [[key part-def]]
                          (let [part ^Body (create-body* (assoc part-def
                                                                :angle angle
                                                                :object object
                                                                :position position
                                                                :scale scale))]
                            (when-let [on-coll (:on-collision-start part-def)]
                              (set! (.-onCollisionStart part) on-coll))
                            (set! (.-key part) key)
                            part)))
                   (to-array))
        parent (first parts)]
    (.setParts Body parent parts)
    {:body parent
     :angle-offset angle}))
