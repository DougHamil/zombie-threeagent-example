(ns zombie.util.messaging)

(defprotocol IEventBus
  (drop-all [this entity-id])
  (send
    [this entity-id type payload]
    [this type payload])
  (on
    [this type callback-fn]
    [this entity-id type callback-fn]))

(deftype EventBus [subs]
  IEventBus
  (drop-all [_ entity-id]
    (when entity-id
      (swap! subs dissoc entity-id)))
  (send [this type payload]
    (send this nil type payload))
  (send [_ entity-ids type payload]
    (if (coll? entity-ids)
      (doseq [entity-id entity-ids]
        (doseq [handler (get-in @subs [entity-id type])]
          (handler payload)))
      (doseq [handler (get-in @subs [entity-ids type])]
        (handler payload))))
  (on [this type callback-fn]
    (on this nil type callback-fn))
  (on [_ entity-id type callback-fn]
    (swap! subs update-in [entity-id type] conj callback-fn)))

(defn create-event-bus []
  (->EventBus (atom {})))
