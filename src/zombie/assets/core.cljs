(ns zombie.assets.core
  (:require ["three" :as three]
            [zombie.state.databases :as db]
            [zombie.assets.model :as models]
            [zombie.assets.animation :as animations]
            [zombie.assets.audio :as audio]
            [zombie.assets.texture :as textures]
            [zombie.assets.material :as materials]
            [zombie.assets.light :as lights]
            [zombie.assets.font :as fonts]
            [zombie.util.math :refer [pi2]]
            [zombie.util.asset-loader :as loader :refer [ref]]))

(def ^:private assets
  [["" ;; These assets synthetic
    ;; Lights
    ["light" {:loader lights/loader}
     ["laser-bullet" :light/laser-bullet {:color "green"
                                          :distance 2.5
                                          :type :point}]]
    ;; Materials
    ["material" {:loader materials/phong-loader}
     ["grass" :material/grass {:map (ref :texture/grass)}]
     ["tile" :material/tile {:map (ref :texture/tile)}]
     ["health-bar" :material/health-bar {:color "red"
                                         :emissiveIntensity 1
                                         :emissive "red"}]
     ["powerup-blue" :material/powerup-blue {:color "blue"
                                             :emissiveIntensity 1
                                             :emissive "blue"}]
     ["lightpost-lamp" :material/lightpost-lamp {:color "yellow"
                                                 :emissiveIntensity 1
                                                 :emissive "yellow"}]
     ["laser-bullet" :material/laser-bullet {:color "green"
                                             :emissiveIntensity 1
                                             :emissive "green"}]
     ["skin-zombie" :material/skin-zombie {:emissive 0xFF0000
                                           :shininess 0
                                           :emissiveMap (ref :texture/skin-zombie-emissive)
                                           :emissiveIntensity 1.0
                                           :map      (ref :texture/skin-zombie)}]
     ["skin-robot" :material/skin-robot {:emissive 0xFFFF00
                                         :shininess 100
                                         :emissiveMap (ref :texture/skin-robot-emissive)
                                         :emissiveIntensity 1.0
                                         :map      (ref :texture/skin-robot)}]
     ["sprites" {:loader materials/sprite-loader}
      ["laser-particle" :material/laser-particle {:map (ref :texture/particle-laser)
                                                  :alphaMap (ref :texture/particle-laser)
                                                  :blending three/AdditiveBlending
                                                  :fog true
                                                  :rotation (/ pi2 2)}]]]]
   ["/assets"
    ;; Fonts
    ["fonts" {:loader fonts/font-loader}
     ["BebasNeue-Regular.ttf" :font/bebas {:characters "123467890abcdefghijklmnopqrstuvwyz"}]]
    ;; Audio
    ["audio"
     ["sfx" {:loader audio/sfx-loader}
      ["laserLarge_00" :sfx/laser-large-old {:extension ".ogg"
                                             :volume    0.5
                                             :entries   (map str (range 5))}]
      ["laserSmall_00" :sfx/laser-large {:extension ".ogg"
                                         :volume    0.8
                                         :entries   (map str (range 5))}]
      ["impactPlate_light_00" :sfx/impact-plate {:extension ".ogg"
                                                 :volume    0.6
                                                 :entries   (map str (range 5))}]]]
    ;; Textures
    ["textures" {:loader textures/loader}
     ["tile.png" :texture/tile {:repeat {:x 100 :y 100}}]
     ["grass.png" :texture/grass {:repeat {:x 5 :y 5}}]
     ["characters"
      ["robot.png" :texture/skin-robot]
      ["robot_emissive.png" :texture/skin-robot-emissive]
      ["zombieA.png" :texture/skin-zombie]
      ["zombie_emissive.png" :texture/skin-zombie-emissive]]
     ["particles"
      ["Laser1.png" :texture/particle-laser]
      ["circleFade.png" :texture/particle-circle-fade]]]
    ;; Animations
    ["animations" {:loader     animations/loader
                   :middleware [animations/middleware]}
     ["character" {:middleware [animations/kenney-mute-half]}
      ["title_idle.fbx" :animation/character-title-idle]
      ["idle.fbx" :animation/character-idle-lower {:mute-layer :upper}]
      ["idle.fbx" :animation/character-idle-upper {:mute-layer :lower}]
      ["idle.fbx" :animation/character-idle {}]
      ["hit_reaction.fbx" :animation/character-hit-reaction-upper {:mute-layer :lower
                                                                   :additive? true}]
      ["aim.fbx" :animation/character-aim {:additive? false
                                           :mute-layer :lower}]
      ["run.fbx" :animation/character-run]
      ["run.fbx" :animation/character-run-lower {:mute-layer :upper}]
      ["run.fbx" :animation/character-run-upper {:mute-layer :lower}]
      ["walk.fbx" :animation/character-walk]
      ["death.fbx" :animation/character-death]
      ["shoot.fbx" :animation/character-shoot {:additive? false
                                               :mute-layer :lower}]
      ["attack.fbx" :animation/character-attack {:additive? false}]]]
    ;; Models
    ["models" {:loader     models/loader
               :middleware [models/middleware]}
     ["characters" 
      ["characterMedium.fbx" :model/robot {:material (ref :material/skin-robot)}]
      ["characterMedium.fbx" :model/zombie {:material (ref :material/skin-zombie)
                                            :pool-size 50}]]
     ["props"
      ["chest.glb" :model/chest {:scale 3}]
      ["crate.glb" :model/crate {:scale 3}]]
     ["weapons"
      ["blasterA.glb" :model/blaster-a]
      ["blasterB.glb" :model/blaster-b]
      ["blasterJ.glb" :model/blaster-j]]
     ["environment"
      ;; Graveyard
      ["road.glb" :model/road {:scale 3
                               :pools-size 120}]
      ["ironFence.glb" :model/iron-fence {:scale 3
                                          :pool-size 40}]
      ["light_curved.glb" :model/light-curved {:scale 10}]
      ["lightpostSingle.glb" :model/lightpost-single {:scale 3
                                                      :material-replacements {"Mesh_lightpostSingle_2"
                                                                              (ref :material/lightpost-lamp)}}]
      ["trunk.glb" :model/stump {:scale 3}]
      ["stoneWall.glb" :model/stone-wall {:scale 3
                                          :pool-size 180}]
      ["stoneWallColumn.glb" :model/stone-wall-column {:scale 3}]
      ["columnLarge.glb" :model/column-large {:scale 3
                                              :pool-size 80}]
      ["gravestoneDecorative.glb" :model/gravestone-decorative {:scale 3}]
      ["bench.glb" :model/bench {:scale 3}]
      ["coffin.glb" :model/coffin {:scale 3
                                   :pools-size 80}]
      ["coffinOld.glb" :model/coffin-old {:scale 3}]
      ["debris.glb" :model/debris {:scale 3}]
      ["debrisWood.glb" :model/debris-wood {:scale 3}]
      ["grave.glb" :model/grave {:scale 3}]
      ["graveBorder.glb" :model/grave-border {:scale 3}]]]]])


(defn init! []
  (loader/load! db/assets assets))
