(ns zombie.scene.system.game
  (:require [zombie.util.messaging :as message]
            [zombie.util.common :refer [cursor]]
            ["@tweenjs/tween.js" :as tween]
            [statecharts.core :as fsm]
            [threeagent.system :refer [ISystem]]))

(defn- door-tween! [state on-complete]
  (let [t (-> (tween/Tween. #js {:x 0})
              (.to #js {:x 1} 200)
              (.start))]
    (.onUpdate t #(reset! state (.-x %)))
    (when on-complete
      (.onComplete t on-complete))))

(def ^:private room-fsm 
  (fsm/machine {:id :game
                :initial :start
                :states {:start {:on {:reset :clearing}}
                         :clearing {:entry #(reset! (:outro-tween %1) 0)
                                    :on {:cleared :cooldown
                                         :reset :clearing}}
                         :cooldown {:after [{:delay 200
                                             :target :cleared}]
                                    :on {:reset :clearing}}
                         :cleared {:entry (fn [{:keys [outro-tween on-clear]}]
                                            (door-tween! outro-tween on-clear))}}}))

(defn- register-enemy! [bus enemy-list room-fsm enemy-id]
  (message/on bus enemy-id :entity/killed (fn []
                                            (let [enemies (swap! enemy-list disj enemy-id)]
                                              (when (empty? enemies)
                                                (fsm/send room-fsm :cleared))))))


(deftype GameSystem [bus local-state]
  ISystem
  (init [_ _]
    (reset! local-state {:rooms {}}))
  (destroy [_ _])
  (on-entity-added [_ {{room-id :id
                        room-enemies :enemies}
                       :room}
                    id
                    _obj
                    {:keys [room enemy?]}]
    (let [cur (cursor local-state [:rooms room-id])]
      (when room
        (let [fsm (fsm/service (assoc room-fsm :context room))]
          (fsm/start fsm)
          (reset! cur {:fsm fsm})))
      (when enemy?
        (fsm/send (:fsm @cur) :reset)
        (register-enemy! bus room-enemies (:fsm @cur) id)
        (swap! room-enemies conj id))))
  (on-entity-removed [_ _ _id _obj {:keys []}])
  (tick [_ _delta-time]))

(defn create [event-bus]
  (->GameSystem event-bus (atom {})))
