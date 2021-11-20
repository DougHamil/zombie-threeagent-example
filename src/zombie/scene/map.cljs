(ns zombie.scene.map
  "Threeagent component for the game world"
  (:require [threeagent.core :as th]
            [zombie.state.databases :as db]
            [zombie.scene.entity :as entities]
            [zombie.util.math :refer [pi2 pi4 pi]]))

(def ^:private lot-size 20)
(def ^:private half-lot-size (/ lot-size 2))

(defn- model [model-key collide?]
  (if collide?
    [:model {:type model-key
             :physics {:parts {:hull {:type :model-bounding-box
                                      :model-type model-key
                                      :settings {:isStatic true}}}}}]
    [:model {:type model-key}]))

(defn- grass []
  [:plane {:position [0 0.01 0]
           :material (:material/grass @db/assets)
           :rotation [(- pi2) 0 0]
           :receive-shadow true
           :scale [lot-size lot-size 1]}])

(defn- lightpost []
  [:object {:scale [1.2 1.2 1.2]}
   [:model {:type :model/lightpost-single}
    [:object {:physics {:parts {:hull {:type :circle
                                       :radius 0.25
                                       :settings {:isStatic true}}}}}]
    [:point-light {:intensity 1.4
                   :color 0xF7B500
                   :position [0.4 3.5 -0.5]
                   :distance 8}]]])

(defn- grave1 []
  [:object
   [model :model/gravestone-decorative true]
   [:object {:position [0 0 2]
             :scale [1 0.4 1]}
    [model :model/grave false]]])

(defn- coffin1 [_id]
  (let [dead? (th/atom false)]
    (fn [id]
      (if @dead?
        [:model {:type :model/debris-wood}]
        [:object
         [:model {:id id
                  :game {:enemy? true}
                  :entity {}
                  :combat {:health 30
                           :on-killed #(reset! dead? true)
                           :death-reaction {:particles :wood-explosion}
                           :hit-reaction {:flash? true
                                          :sound :sfx/impact-plate
                                          :particles :impact-sparks
                                          :text? true}}
                  :spawner {:on-death [{:type :zombie
                                        :initial-health 50}]}
                  :rotation [0 pi 0]
                  :type :model/coffin
                  :physics {:parts {:hull {:type :model-bounding-box
                                           :model-type :model/coffin
                                           :radius 0.5
                                           :settings {:mass 100
                                                      :isStatic true}}}}}]]))))

(defn- door [open-tween]
  (let [open-val @open-tween
        open? (>= open-val 1.0)]
    [:object {:scale [0.7 0.7 0.7]
              :position [0
                         (- (* 1.4 open-val))
                         0]
              :game {:door {}}}
     [model :model/iron-fence (not open?)]]))

(defn- wall [door-tween]
  (let [wall-width 4
        segments (int (/ lot-size wall-width))
        door-segment (int (/ segments 2))]
    [:object
     (for [i (range segments)]
       [:object {:position [(- (* i wall-width)
                               (/ lot-size 2))
                            0
                            0]
                 :scale [1.0 1.0 1.0]}
        [model :model/column-large false]])
     (for [i (range segments)]
       [:object {:position [(- (* i wall-width)
                               (/ lot-size 2)
                               (- (/ wall-width 2.0)))
                            0
                            0]
                 :scale [1.5 1.5 1.5]}
        (if (and door-tween (= i door-segment))
          [door door-tween]
          [model :model/stone-wall true])])]))

(defn- road []
  (let [road-width 2.5
        s 1.4]
    [:object
     (for [i (range (/ lot-size road-width))]
       [:object {:position [(- (* i road-width)
                               (/ lot-size 2)
                               (- (/ road-width 2.0)))
                            0
                            0]
                 :scale [s 0.2 s]}
        [model :model/road false]])]))

(defn- bounds [door-tween dirs]
  [:object
   [:object {:position [(/ lot-size 2) 0 0]
             :rotation [0 pi2 0]}
    [wall (when (dirs :e)
            door-tween)]]
   [:object {:position [(/ lot-size -2) 0 0]
             :rotation [0 pi2 0]}
    [wall (when (dirs :w)
            door-tween)]]
   [:object {:position [0 0 (/ lot-size 2)]}
    [wall (when (dirs :n)
            door-tween)]]
   [:object {:position [0 0 (/ lot-size -2)]}
    [wall (when (dirs :s)
            door-tween)]]])

(defn- lot1 [room-id active? cleared?]
  [:object
   [road]
   [grass]
   [:object {:position [-8.5 0 -2.5]
             :rotation [0 pi2 0]}
    (when active?
      [lightpost])]
   (when-not @cleared?
     [:object
      (for [i (range 3)]
        [:object {:position [(* -3 i) 0 5]}
         [coffin1 (str room-id "|coffin-" i)]])])])

(defn- lot2 [door-tween]
  [:object {:id "lot2"
            :position [(- lot-size) 0 0]}
   [bounds door-tween #{:n :s :w}]
   [road]
   [grass]
   [:object {:position [-8.5 0 -2.5]
             :rotation [0 pi2 0]}
    [lightpost]]
   [:object
    (for [i (range 3)]
      [:object {:position [(* -3 i) 0 5]}
       [coffin1 (str "lot2-coffin-" i)]])]])

(defn- ground []
  [:object 
   [:plane {:position [0 0 0]
            :scale [100.0 100.0 100.0]
            :rotation [(- pi2) 0 0]
            :receive-shadow true
            :input {:on-click (fn [{:keys [x _y z]}]
                                (swap! db/scene assoc :boxes [[x 0 z]]))}
            :material (:material/tile @db/assets)}]])

(defn- room []
  (let [cleared? (th/atom false)
        on-clear #(reset! cleared? true)
        entity-db (th/atom {})
        door-tween (th/atom 0)]
    (fn [id x y active? visible? lot-fn doors]
      [{:entity-db entity-db
        :room {:id id
               :enemies (atom #{})}}

       [:object {:id id
                 :game {:room {:outro-tween door-tween
                               :on-clear on-clear}}}
        (when active?
          [:object
           [entities/render entity-db]])
        (when visible?
         [:object {:position [(* x lot-size)
                              0
                              (* y lot-size)]}
          [bounds (if active? door-tween (atom 1))
           doors]
          [lot-fn id active? cleared?]])]])))

(defn- player-cell-position []
  (let [[x _ z] @(th/cursor db/player [:world-position])
        norm-x (/ (+ x half-lot-size)
                  lot-size)
        norm-z (/ (+ z half-lot-size)
                  lot-size)]
    [(js/Math.floor norm-x)
     (js/Math.floor norm-z)]))

(defn- get-bounds-for-cell [map-size cell-x cell-z]
  (cond-> #{:n :e :s :w}
      (= 0 cell-x) (disj :e)
      (= 0 cell-z) (disj :s)
      (= (dec map-size) cell-x) (disj :w)
      (= (dec map-size) cell-z) (disj :n)))

(defn render []
  (let [[cell-x cell-z] @(th/track player-cell-position)
        map-size 3
        sight-range 2]
    [:object
     (for [x (range map-size)
           y (range map-size)]
       (let [room-id (str "room-" x "," y)
             x (- x)
             active? (and (= x cell-x)
                          (= y cell-z))
             visible? (and (> sight-range (- (max x cell-x)
                                             (min x cell-x)))
                           (> sight-range (- (max y cell-z)
                                             (min y cell-z))))]
         ^{:key room-id}
         [:object
          [room room-id x y active? visible? lot1 (get-bounds-for-cell map-size (- x) y)]]))
     [ground]]))
