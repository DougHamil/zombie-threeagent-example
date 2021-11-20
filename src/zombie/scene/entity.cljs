(ns zombie.scene.entity
  (:require [zombie.scene.props :as props]
            [zombie.scene.zombie :as zombie]))

(defn render [database]
  [:object
   (for [[id {:keys [type] :as cfg}] @database]
     ^{:key id}
     [:object
      (case type
        :powerup [props/powerup database id cfg]
        :zombie [zombie/render database id cfg])])])
