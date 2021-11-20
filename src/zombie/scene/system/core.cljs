(ns zombie.scene.system.core
  (:require [zombie.scene.system.input :as input]
            [zombie.scene.system.camera :as camera]
            [zombie.scene.system.canvas :as canvas]
            [zombie.scene.system.player :as player]
            [zombie.scene.system.animation :as animation]
            [zombie.scene.system.particle :as particle]
            [zombie.scene.system.combat :as combat]
            [zombie.scene.system.attachment :as attachment]
            [zombie.scene.system.follow :as follow]
            [zombie.scene.system.weapon :as weapon]
            [zombie.scene.system.audio :as audio]
            [zombie.scene.system.zombie :as zombie]
            [zombie.scene.system.entity :as entity]
            [zombie.scene.system.game :as game]
            [zombie.scene.system.spawner :as spawner]
            [zombie.scene.system.physics.core :as physics]
            [zombie.util.messaging :as messaging]))

(defn create []
  (let [event-bus (messaging/create-event-bus)]
    {:input (input/create event-bus)
     :camera (camera/create)
     :canvas (canvas/create)
     :particle (particle/create event-bus)
     :combat (combat/create event-bus)
     :animation (animation/create event-bus)
     :attachment (attachment/create event-bus)
     :follow (follow/create event-bus)
     :player (player/create event-bus)
     :game (game/create event-bus)
     :weapon (weapon/create event-bus)
     :spawner (spawner/create event-bus)
     :physics (physics/create event-bus)
     :audio (audio/create event-bus)
     :zombie (zombie/create event-bus)
     :entity (entity/create event-bus)}))
