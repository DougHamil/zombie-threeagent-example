(ns zombie.util.input)

(defn mouse-evt->canvas-position [^js canvas ^js mouse-evt]
  (let [rect (.getBoundingClientRect canvas)]
    {:x (/ (* (- (.-clientX mouse-evt)
                 (.-left rect))
              (.-width canvas))
           (.-width rect))
     :y (/ (* (- (.-clientY mouse-evt)
                 (.-top rect))
              (.-height canvas))
           (.-height rect))}))

(defn normalize-screen-position [^js canvas {:keys [x y]}]
  {:x (- (* (/ x (.-width canvas))
            2)
         1)
   :y (+ (* (/ y (.-height canvas))
            -2)
         1)})

(defn point->map [^js point]
  ;; WARNING: js->clj does not work for this
  {:x (.-x point)
   :y (.-y point)
   :z (.-z point)})
