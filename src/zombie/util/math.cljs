(ns zombie.util.math)

(defonce pi (+ js/Math.PI 0))
(defonce pi2 (/ js/Math.PI 2.0))
(defonce pi4 (/ js/Math.PI 4.0))

(defn distance [[ax ay az] [bx by bz]]
  (let [dx (- bx ax)
        dy (- by ay)
        dz (- bz az)]
    (Math/sqrt (+ (* dx dx)
                  (* dy dy)
                  (* dz dz)))))

(defn direction [[ax ay az :as a] [bx by bz :as b]]
  (let [dx (- bx ax)
        dy (- by ay)
        dz (- bz az)
        dist (distance a b)]
    [(/ dx dist)
     (/ dy dist)
     (/ dz dist)]))
