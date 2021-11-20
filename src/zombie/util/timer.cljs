(ns zombie.util.timer)

(defn after [ms cb]
  (js/setTimeout cb ms))

(defn maybe-tick [^js ticker delta-time]
  (let [old-time (.-time ticker)
        new-time (+ old-time delta-time)
        freq (.-frequency ticker)]
    (if (< freq new-time)
      (do
        (set! (.-time ticker) (- new-time freq))
        ((.-tickFn ticker)))
      (set! (.-time ticker) new-time))))

(defn jitter-ticker [jitter freq tick-fn]
  (clj->js {:time (rand jitter)
            :tickFn tick-fn
            :frequency freq}))
