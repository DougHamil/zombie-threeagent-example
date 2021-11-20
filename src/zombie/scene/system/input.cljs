(ns zombie.scene.system.input
  (:require [threeagent.system :refer [ISystem]]
            ["three" :as three]
            [zombie.util.input :refer [mouse-evt->canvas-position
                                     normalize-screen-position
                                     point->map]]
            [zombie.util.messaging :as message]
            [zombie.state.databases :as db]))

(def ^:private v1 (three/Vector3.))
(def ^:private v2 (three/Vector3.))
(def ^:private r1 (three/Ray.))
(def ^:private ground-plane (three/Plane. (three/Vector3. 0 1 0)))

(def ^:private mouse-button->action {0 :fire
                                     2 :aim})

(def ^:private keycode->axis {65 [:move [-1 0]]
                              68 [:move [1 0]]
                              87 [:move [0 1]]
                              83 [:move [0 -1]]})

(defn- pick-at-position [^three/Raycaster raycaster
                         ^three/Camera camera
                         pickables
                         position]
  (.setFromCamera raycaster (clj->js position) camera)
  (when-let [i (first (.intersectObjects raycaster (clj->js pickables) true))]
    [(.-object i) (.-point i)]))

(defn- normalized->world-position [^three/Camera camera {:keys [x y]}]
  ;; WARNING: This assumes ortho cam
  (let [origin (-> v1
                   (.set x y -1)
                   (.unproject camera))
        dir (.getWorldDirection camera v2)
        ray (.set r1 origin dir)
        dist (.distanceToPlane ray ground-plane)]
    (.at ray dist v2)
    (point->map v2)))

(defn- get-click-handler [local-state obj]
  (get-in @local-state [:on-click obj]))

(defn- set-cursor! [canvas type]
  (set! (.-cursor (.-style canvas)) type))

(defn- get-cursor-type [local-state obj]
  (get-in @local-state [:cursor obj] "default"))
               
(defn- on-mouse-move [_local-state canvas evt]
  (let [screen-pos (mouse-evt->canvas-position canvas evt)]
    (swap! db/input assoc-in [:mouse :screen-position] screen-pos)))

(defn- try-click-at-position [local-state normalized-pos]
  (let [{:keys [raycaster
                pickables
                pick-camera]} @local-state
        [picked-obj point] (pick-at-position raycaster pick-camera pickables normalized-pos)]
    (when picked-obj
      (when-let [click-handler (get-click-handler local-state picked-obj)]
        (click-handler (point->map point))))))

(defn- on-mouse-down [bus local-state canvas evt]
  (when (= 0 (.-button evt))
    (when-let [screen-pos (get-in @db/input [:mouse :screen-position])]
      (let [norm-pos (normalize-screen-position canvas screen-pos)]
        (try-click-at-position local-state norm-pos))))
  (when-let [action-type (get mouse-button->action (.-button evt))]
    (message/send bus
                  (:receiving-entities @local-state)
                  [:input/action action-type] true)))

(defn- on-mouse-up [bus local-state _canvas evt]
  (when-let [action-type (get mouse-button->action (.-button evt))]
    (message/send bus
                  (:receiving-entities @local-state)
                  [:input/action action-type] false)))

(defn- sum-axis [axis-entries]
   (->> axis-entries
        (reduce (fn [[ax ay] [x y]]
                  [(+ ax x)
                   (+ ay y)])
                [0 0])))
(defn- inc-axis! [local-state axis-type axis]
  (let [acc (conj (get-in @local-state [:axis axis-type] #{})
                  axis)]
    (swap! local-state assoc-in [:axis axis-type] acc)
    (sum-axis acc)))

(defn- dec-axis! [local-state axis-type axis]
  (let [acc (disj (get-in @local-state [:axis axis-type] #{})
                  axis)]
    (swap! local-state assoc-in [:axis axis-type] acc)
    (sum-axis acc)))
  
(defn- on-key-down [bus local-state _canvas evt]
  ;;(js/console.log (.-keyCode evt))
  (let [key-code (.-keyCode evt)]
    (when-let [[type axis] (get keycode->axis key-code)]
      (when-not (get-in @local-state [:keys key-code])
        (swap! local-state assoc-in [:keys key-code] true)
        (message/send bus
                      (:receiving-entities @local-state)
                      [:input/axis-update type] (inc-axis! local-state type axis))))))

(defn- on-key-up [bus local-state _canvas evt]
  (when-let [[type axis] (get keycode->axis (.-keyCode evt))]
    (swap! local-state assoc-in [:keys (.-keyCode evt)] false)
    (message/send bus
                  (:receiving-entities @local-state)
                  [:input/axis-update type] (dec-axis! local-state type axis))))

(defn- add-listeners! [bus local-state ^js canvas]
  (let [handler-map {"mousemove" (partial on-mouse-move local-state canvas)
                     "mousedown" (partial on-mouse-down bus local-state canvas)
                     "mouseup" (partial on-mouse-up bus local-state canvas)
                     "keydown" (partial on-key-down bus local-state canvas)
                     "keyup" (partial on-key-up bus local-state canvas)
                     "contextmenu" (fn [evt]
                                     (.preventDefault evt)
                                     false)}]
    (swap! local-state assoc :handlers handler-map)
    (doseq [[event-name handler-fn] handler-map]
      (.addEventListener canvas event-name handler-fn))))

(defn- remove-listeners! [local-state ^js canvas]
  (when-let [handlers (:handlers @local-state)]
    (doseq [[event-name handler-fn] handlers]
      (.removeEventListener canvas event-name handler-fn))
    (swap! local-state dissoc :handlers)))

(defn- tick [local-state]
  (when-let [screen-pos (get-in @db/input [:mouse :screen-position])]
    (let [{:keys [raycaster pick-camera pickables canvas]} @local-state
          norm-pos (normalize-screen-position canvas screen-pos)
          world-pos (normalized->world-position pick-camera norm-pos)]
      (swap! db/input assoc-in [:mouse :world-position] world-pos)
      (if-let [[picked-obj _] (pick-at-position raycaster pick-camera pickables norm-pos)]
        (set-cursor! canvas (get-cursor-type local-state picked-obj))
        (set-cursor! canvas "default")))))

(defrecord InputSystem [event-bus local-state]
  ISystem
  (init [_ {:keys [canvas threejs-scene]}]
    (swap! local-state assoc
           :scene threejs-scene
           :canvas canvas
           :raycaster (new three/Raycaster)
           :receiving-entities #{})
    (add-listeners! event-bus local-state canvas))
  (destroy [_ {:keys [canvas]}]
    (remove-listeners! local-state canvas))
  (on-entity-added [_ _ key ^js obj {:keys [pick-camera
                                            receive-events?
                                            cursor
                                            on-click]}]
    (when pick-camera
      (swap! local-state assoc :pick-camera obj))
    (when on-click
      (swap! local-state update :pickables conj obj)
      (swap! local-state assoc-in [:on-click obj] on-click))
    (when receive-events?
      (swap! local-state update :receiving-entities conj key))
    (swap! local-state assoc-in [:cursor obj] cursor))
  (on-entity-removed [_ _ key obj _config]
    (swap! local-state update :pickables disj obj)
    (swap! local-state update :receiving-entities disj key))

  (tick [_ _delta-time]
    (tick local-state)))

(defn create [event-bus]
  (let [local-state (atom {:pickables #{}})]
    (->InputSystem event-bus local-state)))

