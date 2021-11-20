(ns zombie.util.common)

(deftype Cursor [atm path]
  IDeref
  (-deref [_]
    (get-in @atm path))
  IReset
  (-reset! [_ new-value]
    (get-in (swap! atm assoc-in path new-value)
            path))
  ISwap
  (-swap! [this f]
    (-reset! this (f (get-in @atm path))))
  (-swap! [this f x]
    (-reset! this (f (get-in @atm path) x)))
  (-swap! [this f x y]
    (-reset! this (f (get-in @atm path) x y)))
  (-swap! [this f x y more]
    (-reset! this (apply f (get-in @atm path) x y more))))

(defn cursor [atm path]
  (->Cursor atm path))
  
(def ^:private log-counters (atom {}))
(defn loop-log [key value]
  (swap! log-counters update key inc)
  (when (< 10 (get @log-counters key))
    (swap! log-counters assoc key 0)
    (println value)))

(def physics-layer-default 0x0001)
(def physics-layer-player 0x0002)
(def physics-layer-props 0x0003)
