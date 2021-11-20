(ns zombie.scene.system.physics.core
  (:require ["three" :as three]
            [medley.core :refer [dissoc-in]]
            ["matter-js" :refer [Engine Composite Body Vector Render Query Runner Events]]
            ["./raycast" :refer [raycast]]
            [threeagent.system :refer [ISystem]]
            [zombie.util.threejs :refer [vector3->tuple]]
            [zombie.util.messaging :as message]
            [zombie.state.databases :as db]
            [zombie.scene.system.physics.body :as bodies]))

(defonce ^:private m-v1 ^Vector (.create Vector 0 0))
(defonce ^:private up (three/Vector3. 0 1 0))
(defonce ^:private v1 (three/Vector3. 0 0 0))

;; Scale up the physics world by 10
;; because sizes less than 1 cause instability
(defonce ^:private physics-scale 10.0)

;; Util
(defn- tuple->world-position [[x _ z]]
  (clj->js {:x (* x physics-scale)
            :y (* z physics-scale)}))

(defn- physics-vec->vector3 [y ^js v]
  (three/Vector3. (/ (.-x v) physics-scale)
                  y
                  (/ (.-y v) physics-scale)))

(defn- tuple->into-physics-vec [[x _ z] ^Vector v]
  (set! (.-x v) x)
  (set! (.-y v) z)
  v)

;; Logic
(defn- update-transforms! [local-state]
  (let [entities (:objects @local-state)]
    (doseq [[object {:keys [body
                            angle-offset
                            ignore-rotation?]}] entities]
      (let [body-pos ^Vector (.-position body)
            parent ^three/Object3D (.-parent object)
            wx (/ (.-x body-pos)
                  physics-scale)
            wz (/ (.-y body-pos)
                  physics-scale)
            world-pos (.set v1 wx 0 wz)
            local-pos (.worldToLocal parent world-pos)]
        (.setX (.-position object) (.-x local-pos))
        (.setZ (.-position object) (.-z local-pos)))
      (when-not ignore-rotation?
        (let [angle (- (.-angle body)
                       angle-offset)]
          (.setRotationFromAxisAngle object up angle))))))

(defn- apply-movement! [local-state]
  (doseq [[_ {:keys [body velocity]}] (:objects @local-state)]
    (when velocity
      (let [v velocity]
        (.applyForce Body body (.-position body) (tuple->into-physics-vec v m-v1))))))

(defn- register-body! [local-state ^three/Object3D obj entity-id body-def]
  (let [world (:world @local-state)
        {:keys [^Body body]
         :as result} (bodies/create-body physics-scale obj body-def)]
    (set! (.-entityId body) entity-id)
    (.add Composite world body)
    result))

(defn- unregister-body! [local-state body]
  (when body
    (let [world (:world @local-state)]
      (.remove Composite world body))))


(defn- collision->map [y-pos ^js ray-start ^js collision]
  (let [hit-point (physics-vec->vector3 0 (.-point collision))
        start-point (physics-vec->vector3 0 ray-start)
        distance (-> start-point
                     (.sub hit-point)
                     (.length))]
    {:entity-id (-> collision
                    (.-body)
                    (.-entityId))
     :hit-normal (vector3->tuple (.normalize (physics-vec->vector3 0 (.-normal collision))))
     :distance distance
     :hit-position (vector3->tuple (physics-vec->vector3 y-pos (.-point collision)))}))
                              
(defn- on-disable! [local-state body _payload]
  (unregister-body! local-state body))

(defn- on-set-velocity! [local-state entity-obj velocity]
  (swap! local-state assoc-in [:objects entity-obj :velocity] velocity))

(defn- on-apply-impulse! [body [ix _ iz]]
  (.applyForce Body body (.-position body) (clj->js {:x ix :y iz})))

(defn- register-listeners! [bus local-state entity-id obj body]
  (message/on bus entity-id :physics/disable (partial on-disable! local-state body))
  (message/on bus entity-id :physics/set-velocity (partial on-set-velocity! local-state obj))
  (message/on bus entity-id :physics/apply-force (partial on-apply-impulse! body)))

(defn- on-collision-start [^js event]
  (doseq [p (.-pairs event)]
    (let [a ^Body (.-bodyA p)
          b ^Body (.-bodyB p)]
      (when-let [cb ^js (.-onCollisionStart a)]
        (cb))
      (when-let [cb ^js (.-onCollisionStart b)]
        (cb)))))
  
(defprotocol IPhysicsSystem
  (raycast-all [this ray-start ray-end]))

(deftype PhysicsSystem [bus local-state ^js/Array delta-history]
  IPhysicsSystem
  (raycast-all [_ ray-start ray-end]
    (let [{:keys [world]} @local-state
          bodies (.allBodies Composite world)
          y-pos (second ray-start)
          ray-start (tuple->world-position ray-start)
          ray-end (tuple->world-position ray-end)
          hits (-> (.ray Query bodies ray-start ray-end)
                   (raycast ray-start ray-end))]
      (->> hits
           (map (partial collision->map y-pos ray-start))
           (sort-by :depth))))
  ISystem
  (init [_ _]
    (let [engine (.create Engine (clj->js {:gravity {:x 0 :y 0}}))
          runner (.create Runner)
          render (.create Render (clj->js {:canvas (:physics-debug-canvas @db/ui)
                                           :engine engine
                                           :options {:showDebug true
                                                     :width 400
                                                     :height 400
                                                     :pixelRatio "auto"
                                                     :showConvexHulls true
                                                     :showVelocity true}}))
          world (.-world engine)]
      ;; MatterJS.Runner handles delta-smoothing for us
      (.on Events runner "beforeUpdate" #(apply-movement! local-state))
      (.on Events runner "afterUpdate" #(do
                                          (.lookAt Render render (.allBodies Composite world))
                                          (update-transforms! local-state)))
      (.on Events engine "collisionStart" on-collision-start)
      (.run Runner runner engine)
      (.run Render render)
      (swap! local-state assoc
             :render render
             :runner runner
             :engine engine
             :world world
             :objects {}
             :entities {})))
  (destroy [_ _]
    (.stop Runner (:runner @local-state))
    (.stop Render (:render @local-state)))
  (on-entity-added [_ _ entity-id obj {:keys [parts ignore-rotation? position-offset]}]
    (let [{:keys [body angle-offset]} (register-body! local-state obj entity-id parts)]
      (swap! local-state assoc-in [:objects obj] {:entity-id entity-id
                                                  :ignore-rotation? ignore-rotation?
                                                  :angle-offset angle-offset
                                                  :position-offset position-offset
                                                  :body body})
      (when entity-id
        (register-listeners! bus local-state entity-id obj body))))
  (on-entity-removed [_ _ _ obj _cfg]
    (let [body (get-in @local-state [:objects obj :body])]
      (unregister-body! local-state body)
      (swap! local-state dissoc-in [:objects obj])))
  (tick [_ _delta-time]))

(defn create [event-bus]
  (->PhysicsSystem event-bus (atom {}) (array)))
