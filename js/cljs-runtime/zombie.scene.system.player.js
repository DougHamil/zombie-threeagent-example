goog.provide('zombie.scene.system.player');
var module$node_modules$three$build$three_module=shadow.js.require("module$node_modules$three$build$three_module", {});
zombie.scene.system.player.v1 = (new module$node_modules$three$build$three_module.Vector3());
zombie.scene.system.player.v2 = (new module$node_modules$three$build$three_module.Vector3());
zombie.scene.system.player.heading = (new module$node_modules$three$build$three_module.Vector3());
zombie.scene.system.player.look_position = (new module$node_modules$three$build$three_module.Vector3());
zombie.scene.system.player.move_right_vec = (new module$node_modules$three$build$three_module.Vector3(0.5,(0),-0.5)).normalize();
zombie.scene.system.player.move_up_vec = (new module$node_modules$three$build$three_module.Vector3(-0.5,(0),-0.5)).normalize();
zombie.scene.system.player._guard_running_QMARK_ = (function zombie$scene$system$player$_guard_running_QMARK_(p__12904,_){
var map__12905 = p__12904;
var map__12905__$1 = cljs.core.__destructure_map(map__12905);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12905__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.Keyword(null,"moving?","moving?",1843710132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
});
zombie.scene.system.player._play_anim_BANG_ = (function zombie$scene$system$player$_play_anim_BANG_(opts,p__12906,_){
var map__12907 = p__12906;
var map__12907__$1 = cljs.core.__destructure_map(map__12907);
var entity_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12907__$1,new cljs.core.Keyword(null,"entity-id","entity-id",1485898093));
var bus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12907__$1,new cljs.core.Keyword(null,"bus","bus",-1090873603));
return zombie.util.messaging.send(bus,entity_id,new cljs.core.Keyword("animation","play","animation/play",416602782),opts);
});
zombie.scene.system.player.lower_body_fsm = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"states","states",1389013542),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"idle","idle",-2007156861)], null)], null),new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entry","entry",505168823),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zombie.scene.system.player._play_anim_BANG_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"lower","lower",1120320821),new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.Keyword("animation","character-idle-lower","animation/character-idle-lower",-422804994),new cljs.core.Keyword(null,"loop?","loop?",457687798),true], null)),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"guard","guard",-873147811),zombie.scene.system.player._guard_running_QMARK_], null)], null)], null)], null),new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entry","entry",505168823),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zombie.scene.system.player._play_anim_BANG_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"lower","lower",1120320821),new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.Keyword("animation","character-run-lower","animation/character-run-lower",-113509200),new cljs.core.Keyword(null,"loop?","loop?",457687798),true], null)),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.Keyword(null,"guard","guard",-873147811),cljs.core.complement(zombie.scene.system.player._guard_running_QMARK_)], null)], null)], null)], null)], null)], null);
zombie.scene.system.player.upper_body_fsm = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tick","tick",-835886976),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"start-aiming","start-aiming",-242869861),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".",".",335144435),new cljs.core.Keyword(null,"aiming","aiming",-316056607)], null),new cljs.core.Keyword(null,"stop-aiming","stop-aiming",-1704483240),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".",".",335144435),new cljs.core.Keyword(null,"running","running",1554969103)], null),new cljs.core.Keyword(null,"guard","guard",-873147811),zombie.scene.system.player._guard_running_QMARK_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".",".",335144435),new cljs.core.Keyword(null,"idle","idle",-2007156861)], null)], null)], null)], null),new cljs.core.Keyword(null,"states","states",1389013542),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"idle","idle",-2007156861)], null)], null),new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entry","entry",505168823),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zombie.scene.system.player._play_anim_BANG_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"upper","upper",246243906),new cljs.core.Keyword(null,"sync-layer","sync-layer",1468602624),new cljs.core.Keyword(null,"lower","lower",1120320821),new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.Keyword("animation","character-idle-upper","animation/character-idle-upper",1550954442),new cljs.core.Keyword(null,"loop?","loop?",457687798),true], null)),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"guard","guard",-873147811),zombie.scene.system.player._guard_running_QMARK_], null)], null)], null)], null),new cljs.core.Keyword(null,"aiming","aiming",-316056607),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entry","entry",505168823),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zombie.scene.system.player._play_anim_BANG_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"upper","upper",246243906),new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.Keyword("animation","character-aim","animation/character-aim",2006416585),new cljs.core.Keyword(null,"loop?","loop?",457687798),true], null))], null),new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entry","entry",505168823),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zombie.scene.system.player._play_anim_BANG_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"upper","upper",246243906),new cljs.core.Keyword(null,"sync-layer","sync-layer",1468602624),new cljs.core.Keyword(null,"lower","lower",1120320821),new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.Keyword("animation","character-run-upper","animation/character-run-upper",33420918),new cljs.core.Keyword(null,"loop?","loop?",457687798),true], null)),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.Keyword(null,"guard","guard",-873147811),cljs.core.complement(zombie.scene.system.player._guard_running_QMARK_)], null)], null)], null)], null)], null)], null);
zombie.scene.system.player.animation_fsm = (function (){var G__12908 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"player-animation","player-animation",729252014),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parallel","parallel",-1863607128),new cljs.core.Keyword(null,"regions","regions",-1023815958),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lower-body","lower-body",-68777605),zombie.scene.system.player.lower_body_fsm,new cljs.core.Keyword(null,"upper-body","upper-body",-1633970003),zombie.scene.system.player.upper_body_fsm], null)], null);
return (statecharts.core.machine.cljs$core$IFn$_invoke$arity$1 ? statecharts.core.machine.cljs$core$IFn$_invoke$arity$1(G__12908) : statecharts.core.machine.call(null,G__12908));
})();
zombie.scene.system.player.set_upper_look_at_BANG_ = (function zombie$scene$system$player$set_upper_look_at_BANG_(event_bus,entity_id,p__12909){
var map__12910 = p__12909;
var map__12910__$1 = cljs.core.__destructure_map(map__12910);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12910__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12910__$1,new cljs.core.Keyword(null,"z","z",-789527183));
return zombie.util.messaging.send(event_bus,entity_id,new cljs.core.Keyword("animation","set-upper-look-at-target","animation/set-upper-look-at-target",-884500220),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,0.5,z], null));
});
zombie.scene.system.player.set_lower_look_at_BANG_ = (function zombie$scene$system$player$set_lower_look_at_BANG_(event_bus,entity_id,p__12914){
var map__12915 = p__12914;
var map__12915__$1 = cljs.core.__destructure_map(map__12915);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12915__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12915__$1,new cljs.core.Keyword(null,"z","z",-789527183));
return zombie.util.messaging.send(event_bus,entity_id,new cljs.core.Keyword("animation","set-lower-look-at-target","animation/set-lower-look-at-target",-800600326),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,0.5,z], null));
});
zombie.scene.system.player.get_movement_heading = (function zombie$scene$system$player$get_movement_heading(p__12916){
var vec__12917 = p__12916;
var input_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12917,(0),null);
var input_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12917,(1),null);
var xvec = zombie.scene.system.player.v1.copy(zombie.scene.system.player.move_right_vec).multiplyScalar(input_x);
var yvec = zombie.scene.system.player.v2.copy(zombie.scene.system.player.move_up_vec).multiplyScalar(input_y);
var heading = zombie.scene.system.player.heading.copy(xvec).add(yvec);
return heading.normalize();
});
zombie.scene.system.player.get_target_position_world = (function zombie$scene$system$player$get_target_position_world(out,object,heading,dist){
if(((0) < heading.lengthSq())){
object.getWorldPosition(out);

zombie.scene.system.player.v2.copy(heading);

zombie.scene.system.player.v2.multiplyScalar(dist);

return out.add(zombie.scene.system.player.v2);
} else {
object.getWorldPosition(out);

object.getWorldDirection(zombie.scene.system.player.v2);

zombie.scene.system.player.v2.multiplyScalar((100));

return out.add(zombie.scene.system.player.v2);
}
});
zombie.scene.system.player.set_velocity_BANG_ = (function zombie$scene$system$player$set_velocity_BANG_(bus,entity_id,speed,local_heading){
local_heading.multiplyScalar(cljs.core.deref(speed));

return zombie.util.messaging.send(bus,entity_id,new cljs.core.Keyword("physics","set-velocity","physics/set-velocity",-586483352),zombie.util.threejs.vector3__GT_tuple(local_heading));
});
zombie.scene.system.player.update_movement_BANG_ = (function zombie$scene$system$player$update_movement_BANG_(bus,entity_id,p__12926){
var map__12927 = p__12926;
var map__12927__$1 = cljs.core.__destructure_map(map__12927);
var object = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12927__$1,new cljs.core.Keyword(null,"object","object",1474613949));
var move_input_xy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12927__$1,new cljs.core.Keyword(null,"move-input-xy","move-input-xy",-1370194460));
var move_speed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12927__$1,new cljs.core.Keyword(null,"move-speed","move-speed",1817709482));
var last_look_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12927__$1,new cljs.core.Keyword(null,"last-look-position","last-look-position",100539945));
var movement_heading = zombie.scene.system.player.get_movement_heading(move_input_xy);
var look_position = zombie.util.threejs.vector3__GT_map(zombie.scene.system.player.get_target_position_world(zombie.scene.system.player.look_position,object,movement_heading,10.0));
var moving_QMARK_ = ((0) < movement_heading.lengthSq());
zombie.scene.system.player.set_velocity_BANG_(bus,entity_id,move_speed,movement_heading);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"look-position","look-position",942946522),((moving_QMARK_)?look_position:last_look_position),new cljs.core.Keyword(null,"moving?","moving?",1843710132),moving_QMARK_], null);
});
zombie.scene.system.player.update_weapon_BANG_ = (function zombie$scene$system$player$update_weapon_BANG_(bus,entity_id,player,p__12932){
var map__12933 = p__12932;
var map__12933__$1 = cljs.core.__destructure_map(map__12933);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12933__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12933__$1,new cljs.core.Keyword(null,"z","z",-789527183));
var height = 1.5;
var object = new cljs.core.Keyword(null,"object","object",1474613949).cljs$core$IFn$_invoke$arity$1(player);
var aim_pos = zombie.scene.system.player.v1.set(x,height,z);
var pos = object.getWorldPosition(zombie.scene.system.player.v2).setY(height);
var dir = aim_pos.sub(pos).normalize();
return zombie.util.messaging.send(bus,entity_id,new cljs.core.Keyword("weapon","set-aim","weapon/set-aim",407242753),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"world-position","world-position",-486434797),zombie.util.threejs.vector3__GT_tuple(pos),new cljs.core.Keyword(null,"world-direction","world-direction",-1274942861),zombie.util.threejs.vector3__GT_tuple(dir)], null));
});
zombie.scene.system.player.tick = (function zombie$scene$system$player$tick(bus,_,entity_id,p__12934){
var map__12935 = p__12934;
var map__12935__$1 = cljs.core.__destructure_map(map__12935);
var player = map__12935__$1;
var aiming_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12935__$1,new cljs.core.Keyword(null,"aiming?","aiming?",2088975299));
var dead_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12935__$1,new cljs.core.Keyword(null,"dead?","dead?",990391228));
var object = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12935__$1,new cljs.core.Keyword(null,"object","object",1474613949));
var anim_fsm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12935__$1,new cljs.core.Keyword(null,"anim-fsm","anim-fsm",648062135));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12935__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
statecharts.core.send.cljs$core$IFn$_invoke$arity$2(anim_fsm,new cljs.core.Keyword(null,"tick","tick",-835886976));

if(cljs.core.truth_(dead_QMARK_)){
return null;
} else {
var aim_position = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(zombie.state.databases.input),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"world-position","world-position",-486434797)], null));
var world_position = object.getWorldPosition(zombie.scene.system.player.v1);
zombie.assets.material.uniform_player_position.copy(world_position);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(zombie.state.databases.player,cljs.core.assoc,new cljs.core.Keyword(null,"lasersight-visible?","lasersight-visible?",1190043148),aiming_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"world-position","world-position",-486434797),zombie.util.threejs.vector3__GT_tuple(world_position)], 0));

zombie.scene.system.player.update_weapon_BANG_(bus,entity_id,player,aim_position);

var map__12938 = zombie.scene.system.player.update_movement_BANG_(bus,entity_id,player);
var map__12938__$1 = cljs.core.__destructure_map(map__12938);
var look_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12938__$1,new cljs.core.Keyword(null,"look-position","look-position",942946522));
var moving_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12938__$1,new cljs.core.Keyword(null,"moving?","moving?",1843710132));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.assoc,new cljs.core.Keyword(null,"last-look-position","last-look-position",100539945),look_position,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"moving?","moving?",1843710132),moving_QMARK_], 0));

if(cljs.core.truth_((function (){var or__4212__auto__ = moving_QMARK_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.not(aiming_QMARK_);
}
})())){
zombie.scene.system.player.set_lower_look_at_BANG_(bus,entity_id,look_position);
} else {
zombie.scene.system.player.set_lower_look_at_BANG_(bus,entity_id,aim_position);
}

if(cljs.core.truth_(aiming_QMARK_)){
return zombie.scene.system.player.set_upper_look_at_BANG_(bus,entity_id,aim_position);
} else {
return zombie.scene.system.player.set_upper_look_at_BANG_(bus,entity_id,look_position);
}
}
});
zombie.scene.system.player.on_damaged = (function zombie$scene$system$player$on_damaged(bus,local_state,entity_id,_payload){
var world_pos = zombie.util.threejs.world_position_as_tuple(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(local_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,new cljs.core.Keyword(null,"object","object",1474613949)], null)));
return zombie.util.messaging.send(bus,new cljs.core.Keyword("particles","spawn","particles/spawn",282676462),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"blood-fountain","blood-fountain",-442547275),new cljs.core.Keyword(null,"scale","scale",-230427353),0.5,new cljs.core.Keyword(null,"position","position",-2011731912),world_pos], null));
});
zombie.scene.system.player.on_killed = (function zombie$scene$system$player$on_killed(bus,local_state,entity_id,_payload){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(local_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,new cljs.core.Keyword(null,"dead?","dead?",990391228)], null)))){
return null;
} else {
zombie.util.timer.after((5000),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(zombie.state.databases.game,cljs.core.assoc,new cljs.core.Keyword(null,"active-view","active-view",-1531689252),new cljs.core.Keyword(null,"title","title",636505583));
}));

var world_pos = zombie.util.threejs.world_position_as_tuple(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(local_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,new cljs.core.Keyword(null,"object","object",1474613949)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(local_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,new cljs.core.Keyword(null,"dead?","dead?",990391228)], null),true);

zombie.util.messaging.send(bus,entity_id,new cljs.core.Keyword("physics","set-velocity","physics/set-velocity",-586483352),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null));

zombie.util.messaging.send(bus,entity_id,new cljs.core.Keyword("physics","disable","physics/disable",1232135877),cljs.core.PersistentArrayMap.EMPTY);

zombie.util.messaging.send(bus,entity_id,new cljs.core.Keyword("animation","stop-all","animation/stop-all",-1604963053),cljs.core.PersistentArrayMap.EMPTY);

zombie.util.messaging.send(bus,entity_id,new cljs.core.Keyword("animation","play","animation/play",416602782),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"loop?","loop?",457687798),false,new cljs.core.Keyword(null,"clamp-when-finished?","clamp-when-finished?",1915888022),true,new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.Keyword("animation","character-death","animation/character-death",-1881305432)], null));

return zombie.util.messaging.send(bus,new cljs.core.Keyword("particles","spawn","particles/spawn",282676462),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"blood-fountain","blood-fountain",-442547275),new cljs.core.Keyword(null,"scale","scale",-230427353),1.5,new cljs.core.Keyword(null,"position","position",-2011731912),world_pos], null));
}
});
zombie.scene.system.player.add_listeners_BANG_ = (function zombie$scene$system$player$add_listeners_BANG_(bus,local_state,entity_id,anim_fsm){
zombie.util.messaging.on(bus,entity_id,new cljs.core.Keyword("entity","damaged","entity/damaged",-942098362),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(zombie.scene.system.player.on_damaged,bus,local_state,entity_id));

zombie.util.messaging.on(bus,entity_id,new cljs.core.Keyword("entity","killed","entity/killed",-684013280),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(zombie.scene.system.player.on_killed,bus,local_state,entity_id));

zombie.util.messaging.on(bus,entity_id,new cljs.core.Keyword("weapon","fired","weapon/fired",-2124573998),(function (){
return zombie.util.messaging.send(bus,entity_id,new cljs.core.Keyword("animation","play","animation/play",416602782),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"loop?","loop?",457687798),false,new cljs.core.Keyword(null,"weight","weight",-1262796205),(1),new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.Keyword("animation","character-shoot","animation/character-shoot",-131275319)], null));
}));

zombie.util.messaging.on(bus,entity_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("input","action","input/action",-1449044702),new cljs.core.Keyword(null,"aim","aim",-1211687229)], null),(function (p1__12954_SHARP_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(local_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,new cljs.core.Keyword(null,"aiming?","aiming?",2088975299)], null),p1__12954_SHARP_);

zombie.util.messaging.send(bus,entity_id,new cljs.core.Keyword("player","aiming?","player/aiming?",-1312675420),p1__12954_SHARP_);

return statecharts.core.send.cljs$core$IFn$_invoke$arity$2(anim_fsm,(cljs.core.truth_(p1__12954_SHARP_)?new cljs.core.Keyword(null,"start-aiming","start-aiming",-242869861):new cljs.core.Keyword(null,"stop-aiming","stop-aiming",-1704483240)));
}));

zombie.util.messaging.on(bus,entity_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("input","action","input/action",-1449044702),new cljs.core.Keyword(null,"fire","fire",-144730624)], null),(function (p1__12955_SHARP_){
if(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(local_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,new cljs.core.Keyword(null,"aiming?","aiming?",2088975299)], null));
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(local_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,new cljs.core.Keyword(null,"dead?","dead?",990391228)], null)));
} else {
return and__4210__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(local_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,new cljs.core.Keyword(null,"firing?","firing?",-1865348313)], null),p1__12955_SHARP_);

return zombie.util.messaging.send(bus,entity_id,new cljs.core.Keyword("weapon","fire","weapon/fire",-961423332),p1__12955_SHARP_);
} else {
return null;
}
}));

return zombie.util.messaging.on(bus,entity_id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("input","axis-update","input/axis-update",-159028349),new cljs.core.Keyword(null,"move","move",-2110884309)], null),(function (p1__12956_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(local_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,new cljs.core.Keyword(null,"move-input-xy","move-input-xy",-1370194460)], null),p1__12956_SHARP_);
}));
});
zombie.scene.system.player.speed_track = (function zombie$scene$system$player$speed_track(base_speed){
return reagent.core.track_BANG_((function (){
var adjust = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.deref((function (){var G__12960 = zombie.state.databases.player;
var G__12961 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modifiers","modifiers",50378834),new cljs.core.Keyword(null,"speed","speed",1257663751)], null);
return (threeagent.core.cursor.cljs$core$IFn$_invoke$arity$2 ? threeagent.core.cursor.cljs$core$IFn$_invoke$arity$2(G__12960,G__12961) : threeagent.core.cursor.call(null,G__12960,G__12961));
})()));
return (base_speed + adjust);
}));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {threeagent.system.ISystem}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
zombie.scene.system.player.PlayerSystem = (function (bus,local_state,__meta,__extmap,__hash){
this.bus = bus;
this.local_state = local_state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(zombie.scene.system.player.PlayerSystem.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(zombie.scene.system.player.PlayerSystem.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k12963,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__12967 = k12963;
var G__12967__$1 = (((G__12967 instanceof cljs.core.Keyword))?G__12967.fqn:null);
switch (G__12967__$1) {
case "bus":
return self__.bus;

break;
case "local-state":
return self__.local_state;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12963,else__4464__auto__);

}
}));

(zombie.scene.system.player.PlayerSystem.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__12968){
var vec__12969 = p__12968;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12969,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12969,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(zombie.scene.system.player.PlayerSystem.prototype.threeagent$system$ISystem$ = cljs.core.PROTOCOL_SENTINEL);

(zombie.scene.system.player.PlayerSystem.prototype.threeagent$system$ISystem$init$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(zombie.scene.system.player.PlayerSystem.prototype.threeagent$system$ISystem$destroy$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(zombie.scene.system.player.PlayerSystem.prototype.threeagent$system$ISystem$on_entity_added$arity$5 = (function (_,___$1,id,obj,p__12984){
var self__ = this;
var map__12985 = p__12984;
var map__12985__$1 = cljs.core.__destructure_map(map__12985);
var move_speed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12985__$1,new cljs.core.Keyword(null,"move-speed","move-speed",1817709482));
var ___$2 = this;
var c = zombie.util.common.cursor(self__.local_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
var anim_fsm = (function (){var G__12986 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(zombie.scene.system.player.animation_fsm,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"object","object",1474613949),obj,new cljs.core.Keyword(null,"bus","bus",-1090873603),self__.bus,new cljs.core.Keyword(null,"state","state",-1988618099),c,new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),id], null));
return (statecharts.core.service.cljs$core$IFn$_invoke$arity$1 ? statecharts.core.service.cljs$core$IFn$_invoke$arity$1(G__12986) : statecharts.core.service.call(null,G__12986));
})();
statecharts.core.start(anim_fsm);

zombie.scene.system.player.add_listeners_BANG_(self__.bus,self__.local_state,id,anim_fsm);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.local_state,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"object","object",1474613949),obj,new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),id,new cljs.core.Keyword(null,"state","state",-1988618099),c,new cljs.core.Keyword(null,"anim-fsm","anim-fsm",648062135),anim_fsm,new cljs.core.Keyword(null,"move-input-xy","move-input-xy",-1370194460),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"move-speed","move-speed",1817709482),zombie.scene.system.player.speed_track(move_speed)], null));

return (function (){
return statecharts.core.send.cljs$core$IFn$_invoke$arity$2(anim_fsm,new cljs.core.Keyword(null,"start","start",-355208981));
});
}));

(zombie.scene.system.player.PlayerSystem.prototype.threeagent$system$ISystem$on_entity_removed$arity$5 = (function (_,___$1,id,_obj,_config){
var self__ = this;
var ___$2 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.local_state,cljs.core.dissoc,id);
}));

(zombie.scene.system.player.PlayerSystem.prototype.threeagent$system$ISystem$tick$arity$2 = (function (_,delta_time){
var self__ = this;
var ___$1 = this;
zombie.assets.material.uniform_time.setX((zombie.assets.material.uniform_time.x + delta_time));

var seq__12987 = cljs.core.seq(cljs.core.deref(self__.local_state));
var chunk__12988 = null;
var count__12989 = (0);
var i__12990 = (0);
while(true){
if((i__12990 < count__12989)){
var vec__12997 = chunk__12988.cljs$core$IIndexed$_nth$arity$2(null,i__12990);
var entity_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12997,(0),null);
var player = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12997,(1),null);
zombie.scene.system.player.tick(self__.bus,self__.local_state,entity_id,player);


var G__13016 = seq__12987;
var G__13017 = chunk__12988;
var G__13018 = count__12989;
var G__13019 = (i__12990 + (1));
seq__12987 = G__13016;
chunk__12988 = G__13017;
count__12989 = G__13018;
i__12990 = G__13019;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__12987);
if(temp__5753__auto__){
var seq__12987__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12987__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__12987__$1);
var G__13020 = cljs.core.chunk_rest(seq__12987__$1);
var G__13021 = c__4638__auto__;
var G__13022 = cljs.core.count(c__4638__auto__);
var G__13023 = (0);
seq__12987 = G__13020;
chunk__12988 = G__13021;
count__12989 = G__13022;
i__12990 = G__13023;
continue;
} else {
var vec__13000 = cljs.core.first(seq__12987__$1);
var entity_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13000,(0),null);
var player = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13000,(1),null);
zombie.scene.system.player.tick(self__.bus,self__.local_state,entity_id,player);


var G__13024 = cljs.core.next(seq__12987__$1);
var G__13025 = null;
var G__13026 = (0);
var G__13027 = (0);
seq__12987 = G__13024;
chunk__12988 = G__13025;
count__12989 = G__13026;
i__12990 = G__13027;
continue;
}
} else {
return null;
}
}
break;
}
}));

(zombie.scene.system.player.PlayerSystem.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#zombie.scene.system.player.PlayerSystem{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bus","bus",-1090873603),self__.bus],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null))], null),self__.__extmap));
}));

(zombie.scene.system.player.PlayerSystem.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12962){
var self__ = this;
var G__12962__$1 = this;
return (new cljs.core.RecordIter((0),G__12962__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bus","bus",-1090873603),new cljs.core.Keyword(null,"local-state","local-state",-282143524)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(zombie.scene.system.player.PlayerSystem.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(zombie.scene.system.player.PlayerSystem.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new zombie.scene.system.player.PlayerSystem(self__.bus,self__.local_state,self__.__meta,self__.__extmap,self__.__hash));
}));

(zombie.scene.system.player.PlayerSystem.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(zombie.scene.system.player.PlayerSystem.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-652008288 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(zombie.scene.system.player.PlayerSystem.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12964,other12965){
var self__ = this;
var this12964__$1 = this;
return (((!((other12965 == null)))) && ((((this12964__$1.constructor === other12965.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12964__$1.bus,other12965.bus)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12964__$1.local_state,other12965.local_state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12964__$1.__extmap,other12965.__extmap)))))))));
}));

(zombie.scene.system.player.PlayerSystem.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"local-state","local-state",-282143524),null,new cljs.core.Keyword(null,"bus","bus",-1090873603),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new zombie.scene.system.player.PlayerSystem(self__.bus,self__.local_state,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(zombie.scene.system.player.PlayerSystem.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k12963){
var self__ = this;
var this__4468__auto____$1 = this;
var G__13003 = k12963;
var G__13003__$1 = (((G__13003 instanceof cljs.core.Keyword))?G__13003.fqn:null);
switch (G__13003__$1) {
case "bus":
case "local-state":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12963);

}
}));

(zombie.scene.system.player.PlayerSystem.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__12962){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__13004 = cljs.core.keyword_identical_QMARK_;
var expr__13005 = k__4470__auto__;
if(cljs.core.truth_((pred__13004.cljs$core$IFn$_invoke$arity$2 ? pred__13004.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bus","bus",-1090873603),expr__13005) : pred__13004.call(null,new cljs.core.Keyword(null,"bus","bus",-1090873603),expr__13005)))){
return (new zombie.scene.system.player.PlayerSystem(G__12962,self__.local_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__13004.cljs$core$IFn$_invoke$arity$2 ? pred__13004.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"local-state","local-state",-282143524),expr__13005) : pred__13004.call(null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),expr__13005)))){
return (new zombie.scene.system.player.PlayerSystem(self__.bus,G__12962,self__.__meta,self__.__extmap,null));
} else {
return (new zombie.scene.system.player.PlayerSystem(self__.bus,self__.local_state,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__12962),null));
}
}
}));

(zombie.scene.system.player.PlayerSystem.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bus","bus",-1090873603),self__.bus,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state,null))], null),self__.__extmap));
}));

(zombie.scene.system.player.PlayerSystem.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__12962){
var self__ = this;
var this__4460__auto____$1 = this;
return (new zombie.scene.system.player.PlayerSystem(self__.bus,self__.local_state,G__12962,self__.__extmap,self__.__hash));
}));

(zombie.scene.system.player.PlayerSystem.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(zombie.scene.system.player.PlayerSystem.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bus","bus",549657924,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null)], null);
}));

(zombie.scene.system.player.PlayerSystem.cljs$lang$type = true);

(zombie.scene.system.player.PlayerSystem.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"zombie.scene.system.player/PlayerSystem",null,(1),null));
}));

(zombie.scene.system.player.PlayerSystem.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"zombie.scene.system.player/PlayerSystem");
}));

/**
 * Positional factory function for zombie.scene.system.player/PlayerSystem.
 */
zombie.scene.system.player.__GT_PlayerSystem = (function zombie$scene$system$player$__GT_PlayerSystem(bus,local_state){
return (new zombie.scene.system.player.PlayerSystem(bus,local_state,null,null,null));
});

/**
 * Factory function for zombie.scene.system.player/PlayerSystem, taking a map of keywords to field values.
 */
zombie.scene.system.player.map__GT_PlayerSystem = (function zombie$scene$system$player$map__GT_PlayerSystem(G__12966){
var extmap__4501__auto__ = (function (){var G__13007 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12966,new cljs.core.Keyword(null,"bus","bus",-1090873603),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"local-state","local-state",-282143524)], 0));
if(cljs.core.record_QMARK_(G__12966)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__13007);
} else {
return G__13007;
}
})();
return (new zombie.scene.system.player.PlayerSystem(new cljs.core.Keyword(null,"bus","bus",-1090873603).cljs$core$IFn$_invoke$arity$1(G__12966),new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(G__12966),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

zombie.scene.system.player.create = (function zombie$scene$system$player$create(event_bus){
var local_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return zombie.scene.system.player.__GT_PlayerSystem(event_bus,local_state);
});

//# sourceMappingURL=zombie.scene.system.player.js.map
