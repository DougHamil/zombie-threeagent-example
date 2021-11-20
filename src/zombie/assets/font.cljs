(ns zombie.assets.font
  (:require ["troika-three-text" :as troika]))

(defn font-loader [_key path {:keys [characters]}]
  (js/Promise. (fn [res rej]
                 (troika/preloadFont (clj->js {:font path
                                               :characters characters})
                                     (fn []
                                       ;; Force shader to compile
                                       (let [text (troika/Text.)]
                                         (.sync text #(res path))))))))
  
