(ns zombie.assets.audio
  (:require ["howler" :refer [Howl]]))

(defn sfx-loader [k path {:keys [extension entries volume]}]
  (js/Promise. (fn [res rej]
                 (if entries
                   (let [howls (->> entries
                                    (map #(str path % extension))
                                    (map #(Howl. (clj->js {:src %
                                                           :volume (or volume 1.0)})))
                                    (doall))]
                     (res howls))
                   (res [(Howl. (clj->js {:src path
                                          :volume (or volume 1.0)}))])))))
