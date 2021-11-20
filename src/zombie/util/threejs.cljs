(ns zombie.util.threejs
  (:require ["three" :as three]))

(def ^:private v1 (three/Vector3.))
(def ^:private v2 (three/Vector3.))
(def ^:private o1 (three/Object3D.))

(defn tuple->vector3 [[x y z]]
  (three/Vector3. x y z))

(defn vector3->map [^three/Vector3 vec]
  {:x (.-x vec)
   :y (.-y vec)
   :z (.-z vec)})

(defn vector3->tuple [^three/Vector3 vec]
  [(.-x vec) (.-y vec) (.-z vec)])

(defn tuple->into-vector3 [[x y z] ^three/Vector3 vec]
  (.set vec x y z))

(defn get-in-object [^three/Object3D parent path]
  (if (seq path)
    (let [next (first path)]
      (if (string? next)
        (recur (.getObjectByName parent next) (rest path))
        (if (= :.. next)
          (recur (.-parent parent) (rest path))
          (recur (aget (.-children parent) next) (rest path)))))
    parent))

(defn center-at-origin! [^three/Box3 box]
  (let [v1 (.copy v1 (.-min box))
        v1 (.add v1 (.-max box))
        v1 (.multiplyScalar v1 -0.5)]
    (.translate box v1)
    (.getCenter box v1)))

(defn euler->tuple [^three/Euler e]
  [(.-x e) (.-y e) (.-z e)])

(defn direction-tuple->rotation-tuple [dir-tuple]
  (let [dir (tuple->into-vector3 dir-tuple v1)
        look-at-pos (-> v2
                        (.set 0 0 0)
                        (.addVectors dir (.-position o1)))]
    (.lookAt o1 look-at-pos)
    (euler->tuple (.-rotation o1))))
        
(defn get-world-rotation [^three/Object3D obj ^three/Euler eul]
  (let [dir (.getWorldDirection obj v1)
        look-at-pos (-> v2
                        (.set 0 0 0)
                        (.addVectors dir (.-position o1)))]
    (.lookAt o1 look-at-pos)
    (.copy eul (.-rotation o1))))

(defn world-position-as-tuple [^three/Object3D obj]
  (let [pos (.getWorldPosition obj v1)]
    (vector3->tuple pos)))
    
(defn distance-between [^three/Object3D a ^three/Object3D b]
  (let [pos-a (.getWorldPosition a v1)
        pos-b (.getWorldPosition b v2)]
    (.length (.sub pos-b pos-a))))
        
