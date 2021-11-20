(ns zombie.scene.system.particle
  (:require [threeagent.system :refer [ISystem]]
            ["three" :as three]
            ["troika-three-text" :as troika]
            ["three-nebula" :as n]
            [zombie.util.messaging :as message]
            [zombie.util.threejs :refer [vector3->tuple
                                       tuple->vector3
                                       direction-tuple->rotation-tuple
                                       get-world-rotation]]
            [zombie.state.databases :as db]))

(def ^:private ^:dynamic *next-particle-id* 0)
(def ^:private v1 (three/Vector3.))
(def ^:private v2 (three/Vector3.))
(def ^:private e1 (three/Euler.))

(defn- create-text-body* [text color font-size]
  (let [obj (troika/Text.)]
    (when color
      (set! (.-color obj) color))
    (set! (.-text obj) text)
    (set! (.-font obj) (:font/bebas @db/assets))
    (set! (.-fontSize obj) font-size)
    obj))

(def create-text-body (memoize create-text-body*))

(defn- create-sprite-body []
  (let [texture (:texture/particle-circle-fade @db/assets)
        mat (three/SpriteMaterial. #js {:map texture})]
    (three/Sprite. mat)))

(defn- tuple->nebula-vector [[x y z]]
  (n/Vector3D. x y z))

(defn- look-at-rotation [source-pos ^three/Object3D target-obj]
  (let [pos (.getWorldPosition target-obj v2)
        look-dir (-> pos
                     (.sub (tuple->vector3 source-pos))
                     (.normalize))]
    (direction-tuple->rotation-tuple (vector3->tuple look-dir))))

(defmulti create-emitter :type)

(defmethod create-emitter :floating-text
  [{color :color
    speed :speed
    spread :spread
    position :position
    font-size :font-size
    text :text}]
  (let [cam (get @db/entity-objects "camera")
        rot (look-at-rotation position cam)
        rotate (n/Rotate. (tuple->nebula-vector rot))]
    (-> (n/Emitter.)
        (.setRate (n/Rate. (n/Span. 1 1) (n/Span. 1)))
        (.setInitializers #js [(n/Position. (n/PointZone. 0 0))
                               (n/VectorVelocity. (n/Vector3D. 0 (or speed 2) 0)
                                                  (or spread 0))
                               (n/Mass. 1)
                               (n/Body. (create-text-body text color (or font-size 0.8)))
                               (n/Life. 1)])
        (.setBehaviours (to-array [(n/Alpha. 1.0 0.0)
                                   rotate])))))
  
(defmethod create-emitter :wood-explosion
  [{:keys [direction scale]}]
  (let [dir (tuple->nebula-vector (or direction [0 1 0]))
        scale (* 0.005 (or scale 1.0))]
    (-> (n/Emitter.)
        (.setRate (n/Rate. (n/Span. 5 5) (n/Span. 1)))
        (.setInitializers #js [(n/Position. (n/PointZone. 0 0))
                               (n/Mass. 1)
                               (n/Radius. 0.2 0.2)
                               (n/Life. 1)
                               (n/RadialVelocity. 20 dir 25)])
        (.setBehaviours #js [(n/Alpha. 1 0.0)
                             (n/Scale. scale scale)
                             (n/Gravity. 0.9)
                             (n/Color. (three/Color. 0x964B00) (three/Color. 0x964B00))]))))

(defmethod create-emitter :blood-fountain ;; Metal AF
  [{:keys [direction scale]}]
  (let [dir (tuple->nebula-vector (or direction [0 1 0]))
        scale (* 0.005 (or scale 1.0))]
    (-> (n/Emitter.)
        (.setRate (n/Rate. (n/Span. 5 5) (n/Span. 1)))
        (.setInitializers #js [(n/Position. (n/PointZone. 0 0))
                               (n/Mass. 1)
                               (n/Radius. 0.2 0.2)
                               (n/Life. 1)
                               (n/RadialVelocity. 20 dir 25)])
        (.setBehaviours #js [(n/Alpha. 1 0.0)
                             (n/Scale. scale scale)
                             (n/Gravity. 0.9)
                             (n/Color. (three/Color. 0xAA0000) (three/Color. 0xAA0000))]))))

(defmethod create-emitter :impact-sparks
  [{:keys [direction]}]
  (let [dir (tuple->nebula-vector (or direction [0 0 1]))]
    (-> (n/Emitter.)
        (.setRate (n/Rate. (n/Span. 5 5) (n/Span. 1)))
        (.setInitializers #js [(n/Position. (n/PointZone. 0 0))
                               (n/Mass. 1)
                               (n/Radius. 0.1 0.1)
                               (n/Life. 0.2)
                               (n/RadialVelocity. 20 dir 20)])
        (.setBehaviours #js [(n/Alpha. 0.5 1.0)
                             (n/Scale. 0.002 0.002)
                             (n/Color. (three/Color. 0xFFFF00) (three/Color. 0xFFFF00))]))))

(defmethod create-emitter :moths
  [{[px py pz] :as position :position}]
  (-> (n/Emitter.)
      (.setRate (n/Rate. (n/Span. 1 1) (n/Span. 0.2 0.2)))
      (.setInitializers #js [(n/Position. (n/SphereZone. px py pz 0.5))
                             (n/Radius. 0.1 0.1)
                             (n/VectorVelocity. (n/Vector3D. 0 1.0 0) 180)
                             (n/Body. (create-sprite-body))
                             (n/Life. 2.5)
                             (n/Mass. 1)])
      (.setBehaviours #js [(n/Alpha. 0.4 0.0)
                           (n/Scale. 0.08 0.001)
                           (n/Rotate. 0.5 0.0 1)
                           (n/Attraction. (tuple->vector3 position) 0.05 3)
                           ;(n/RandomDrift. 0.05 0 0.05 0.2)
                           (n/Color. (three/Color. 0xF9B800) (three/Color. 0xF9B800))])))

(defmethod create-emitter :smoke-trail-loop
  [_]
  (-> (n/Emitter.)
      (.setRate (n/Rate. (n/Span. 1 1) (n/Span. 0.3 0.3)))
      (.setInitializers #js [(n/Position. (n/PointZone. 0 0 0))
                             (n/Radius. 0.1 0.1)
                             (n/VectorVelocity. (n/Vector3D. 0 0.3 0) 1)
                             (n/Body. (create-sprite-body))
                             (n/Life. 1.5)
                             (n/Mass. 1)])
      (.setBehaviours #js [(n/Alpha. 0.4 0.0)
                           (n/Scale. 0.001 (n/Span. 0.3 0.4))
                           (n/Rotate. 0.5 0.0 1)
                           (n/RandomDrift. 0.05 0 0.05 0.2)
                           (n/Color. (three/Color. 0xEEEEEE) (three/Color. 0xBBBBBB))])))


(defn- create-system [container]
  (let [system (n/System.)
        renderer (n/MeshRenderer. container three)]
    (.addRenderer system renderer)
    system))

(defn- on-spawn-particle-system [cfg]
  (set! *next-particle-id* (inc *next-particle-id*))
  (swap! db/particles assoc *next-particle-id* cfg))

(deftype ParticleSystem [bus local-state]
  ISystem
  (init [_ {:keys [threejs-scene]}]
    (let [system (create-system threejs-scene)]
      (message/on bus :particles/spawn on-spawn-particle-system)
      (reset! local-state {:system system})))
  (destroy [_ _]
    (.destroy (:system @local-state)))
  (on-entity-added [_ _ _key ^three/Object3D obj {:keys [on-dead
                                                         loop?] :as cfg}]
    (let [world-pos (.getWorldPosition obj v1)
          world-rot (get-world-rotation obj e1)
          system ^n/System (:system @local-state)
          emitter ^n/Emitter (create-emitter (assoc cfg
                                                    :position (vector3->tuple world-pos)
                                                    :rotation (vector3->tuple world-rot)))]
      (.setPosition emitter (.clone world-pos))
      (.setRotation emitter world-rot)
      (.addEmitter system emitter)
      (swap! local-state assoc-in [:emitters obj] emitter)
      (if loop?
        (.emit emitter)
        (.emit emitter 1 0.5))
      (when on-dead
        (.addOnEmitterDeadEventListener emitter on-dead))))
  (on-entity-removed [_ _ _key obj _cfg]
    (when-let [emitter (get-in @local-state [:emitters obj])]
      (.destroy emitter)))
  (tick [_ delta-time]
    (.update ^n/System (:system @local-state)
             delta-time)))

(defn create [event-bus]
  (->ParticleSystem event-bus (atom {})))
