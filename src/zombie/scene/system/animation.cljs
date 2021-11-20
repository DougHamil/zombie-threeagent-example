(ns zombie.scene.system.animation
  (:require [threeagent.system :refer [ISystem]]
            ["three" :as three]
            [zombie.util.messaging :as message]
            [zombie.util.threejs :refer [get-in-object]]
            [zombie.state.databases :as db]))

(defn- set-animation! [local-state entity-id {:keys [animation loop? layer weight
                                                     clamp-when-finished?
                                                     sync-layer]}]
  (let [loop (if loop?
               three/LoopRepeat
               three/LoopOnce)
        {:keys [mixer]} (get-in @local-state [entity-id])
        clip (first (get @db/assets animation))
        old-action ^three/AnimationAction (get-in @local-state [entity-id :layers layer])
        sync-action ^three/AnimationAction (when sync-layer
                                             (get-in @local-state [entity-id :layers sync-layer]))
        action ^three/AnimationAction (.clipAction mixer clip)]
    (when (and old-action
               (not= old-action action))
      (.stop old-action))
    (swap! local-state assoc-in [entity-id :layers layer] action)
    (set! (.-clampWhenFinished action) (or clamp-when-finished? false))
    (.setLoop action loop)
    (if (= three/LoopOnce loop)
      (.reset action)
      (when (not (.isRunning action))
        (.reset action)))
    (when weight
      (set! (.-weight action) weight))
    (when sync-action
      (.syncWith action sync-action))
    (.play action)))

(defn- stop-animation! [local-state entity-id {:keys [animation]}]
  (let [clip (first (get @db/assets animation))
        mixer (get-in @local-state [entity-id :mixer])
        action ^three/AnimationAction (.clipAction mixer clip)]
    (when (and action (.isRunning action))
      (.stop action))))

(defn- stop-all-animation! [local-state entity-id _cfg]
  (let [mixer (get-in @local-state [entity-id :mixer])]
    (.stopAllAction mixer)))

(defn- set-look-at! [^three/Object3D obj
                     [x y z]]
  (when (and x z)
    (.lookAt obj x y z)))


(defn- tick-entity! [delta-time
                     _entity-id
                     {:keys [mixer
                             lower-look-at-target
                             upper-look-at-target
                             lower-bone
                             upper-bone]}]
  (.update mixer delta-time)
  (when lower-look-at-target
    (set-look-at! lower-bone lower-look-at-target))
  (when upper-look-at-target
    (set-look-at! upper-bone upper-look-at-target)))

(defn- register-handlers! [local-state event-bus entity-id]
  (message/on event-bus entity-id :animation/set-upper-look-at-target
              #(swap! local-state assoc-in [entity-id :upper-look-at-target] %))
  (message/on event-bus entity-id :animation/set-lower-look-at-target
              #(swap! local-state assoc-in [entity-id :lower-look-at-target] %))
  (message/on event-bus entity-id :animation/stop-all (partial stop-all-animation! local-state entity-id))
  (message/on event-bus entity-id :animation/stop (partial stop-animation! local-state entity-id))
  (message/on event-bus entity-id :animation/play (partial set-animation! local-state entity-id)))

(deftype AnimationSystem [event-bus local-state]
  ISystem
  (init [_ {:keys []}])
  (destroy [_ _])
  (on-entity-added [_ _ key ^three/Object3D obj {:keys [clip] :as cfg}]
    (let [model (aget (.-children obj) 0)
          mixer ^js (three/AnimationMixer. model)
          upper-bone (get-in-object obj ["Root" "HipsCtrl" "Hips" "Spine"])]
      (swap! local-state assoc key {:mixer mixer
                                    :object obj
                                    :upper-bone upper-bone
                                    :lower-bone obj})
      (register-handlers! local-state event-bus key)
      (when clip
        (set-animation! local-state key (assoc cfg
                                               :animation clip)))))
  (on-entity-removed [_ _ key _obj _config]
    (swap! local-state dissoc key))
  (tick [_ delta-time]
    (doseq [[entity-id data] @local-state]
      (tick-entity! delta-time entity-id data))))

(defn create [event-bus]
  (->AnimationSystem event-bus (atom {})))
