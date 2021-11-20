(ns zombie.assets.light
  (:require ["three" :as three]))

(defn loader [_key _path {:keys [type
                                 color
                                 intensity
                                 decay 
                                 distance]}]
  (js/Promise.resolve (case type
                        :point (three/PointLight. (or color "white")
                                                  (or intensity 1.0)
                                                  (or distance 1.0)
                                                  (or decay 1.0)))))

