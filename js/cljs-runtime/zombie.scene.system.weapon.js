goog.provide('zombie.scene.system.weapon');
zombie.scene.system.weapon._STAR_next_id_STAR_ = (0);
zombie.scene.system.weapon._semi_auto_entry_fire = (function zombie$scene$system$weapon$_semi_auto_entry_fire(p__13206,_evt){
var map__13211 = p__13206;
var map__13211__$1 = cljs.core.__destructure_map(map__13211);
var bus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13211__$1,new cljs.core.Keyword(null,"bus","bus",-1090873603));
var local_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13211__$1,new cljs.core.Keyword(null,"local-state","local-state",-282143524));
var entity_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13211__$1,new cljs.core.Keyword(null,"entity-id","entity-id",1485898093));
return (zombie.scene.system.weapon.fire_weapon_BANG_.cljs$core$IFn$_invoke$arity$3 ? zombie.scene.system.weapon.fire_weapon_BANG_.cljs$core$IFn$_invoke$arity$3(bus,local_state,entity_id) : zombie.scene.system.weapon.fire_weapon_BANG_.call(null,bus,local_state,entity_id));
});
zombie.scene.system.weapon.semi_auto_fsm = (function zombie$scene$system$weapon$semi_auto_fsm(firing_rate){
var G__13227 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("weapon","semi-auto","weapon/semi-auto",-820018050),new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start-firing","start-firing",804428738),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"end-firing","end-firing",24849812),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"tick","tick",-835886976),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"states","states",1389013542),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start-firing","start-firing",804428738),new cljs.core.Keyword(null,"fire","fire",-144730624)], null)], null),new cljs.core.Keyword(null,"fire","fire",-144730624),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entry","entry",505168823),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.system.weapon._semi_auto_entry_fire], null),new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"delay","delay",-574225219),((1000) * (1.0 / firing_rate)),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"idle","idle",-2007156861)], null)], null)], null)], null)], null);
return (statecharts.core.machine.cljs$core$IFn$_invoke$arity$1 ? statecharts.core.machine.cljs$core$IFn$_invoke$arity$1(G__13227) : statecharts.core.machine.call(null,G__13227));
});
zombie.scene.system.weapon.spawn_particles_BANG_ = (function zombie$scene$system$weapon$spawn_particles_BANG_(bus,type,pos,dir){
return zombie.util.messaging.send(bus,new cljs.core.Keyword("particles","spawn","particles/spawn",282676462),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"position","position",-2011731912),pos,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),dir], null));
});
zombie.scene.system.weapon.fire_weapon_BANG_ = (function zombie$scene$system$weapon$fire_weapon_BANG_(bus,local_state,entity_id){
var physics_system = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(local_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"systems","systems",-1015374944),new cljs.core.Keyword(null,"physics","physics",-1254209137)], null));
var map__13243 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(local_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weapons","weapons",-1983639898),entity_id], null));
var map__13243__$1 = cljs.core.__destructure_map(map__13243);
var damage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13243__$1,new cljs.core.Keyword(null,"damage","damage",970520018));
var aim = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13243__$1,new cljs.core.Keyword(null,"aim","aim",-1211687229));
var map__13244 = aim;
var map__13244__$1 = cljs.core.__destructure_map(map__13244);
var world_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13244__$1,new cljs.core.Keyword(null,"world-position","world-position",-486434797));
var world_direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13244__$1,new cljs.core.Keyword(null,"world-direction","world-direction",-1274942861));
var ray_start = zombie.util.threejs.tuple__GT_vector3(world_position);
var ray_end = zombie.util.threejs.tuple__GT_vector3(world_direction).multiplyScalar((10)).add(ray_start);
var hits = cljs.core.take.cljs$core$IFn$_invoke$arity$2((1),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"distance","distance",-1671893894),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__13242_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(entity_id,new cljs.core.Keyword(null,"entity-id","entity-id",1485898093).cljs$core$IFn$_invoke$arity$1(p1__13242_SHARP_));
}),zombie.scene.system.physics.core.raycast_all(physics_system,zombie.util.threejs.vector3__GT_tuple(ray_start),zombie.util.threejs.vector3__GT_tuple(ray_end)))));
zombie.util.messaging.send(bus,entity_id,new cljs.core.Keyword("audio","play-sound","audio/play-sound",-1045916618),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("sfx","laser-large","sfx/laser-large",346806202)], null));

if(cljs.core.not(cljs.core.seq(hits))){
(zombie.scene.system.weapon._STAR_next_id_STAR_ = (zombie.scene.system.weapon._STAR_next_id_STAR_ + (1)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(zombie.state.databases.rays,cljs.core.assoc,zombie.scene.system.weapon._STAR_next_id_STAR_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start-position","start-position",-576733324),world_position,new cljs.core.Keyword(null,"end-position","end-position",-1045268232),zombie.util.threejs.vector3__GT_tuple(ray_end)], null));
} else {
}

var seq__13251 = cljs.core.seq(hits);
var chunk__13252 = null;
var count__13253 = (0);
var i__13254 = (0);
while(true){
if((i__13254 < count__13253)){
var map__13276 = chunk__13252.cljs$core$IIndexed$_nth$arity$2(null,i__13254);
var map__13276__$1 = cljs.core.__destructure_map(map__13276);
var enemy_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13276__$1,new cljs.core.Keyword(null,"entity-id","entity-id",1485898093));
var normal = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13276__$1,new cljs.core.Keyword(null,"hit-normal","hit-normal",929947402));
var hit_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13276__$1,new cljs.core.Keyword(null,"hit-position","hit-position",1824962160));
(zombie.scene.system.weapon._STAR_next_id_STAR_ = (zombie.scene.system.weapon._STAR_next_id_STAR_ + (1)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(zombie.state.databases.rays,cljs.core.assoc,zombie.scene.system.weapon._STAR_next_id_STAR_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start-position","start-position",-576733324),world_position,new cljs.core.Keyword(null,"end-position","end-position",-1045268232),hit_position], null));

if(cljs.core.truth_(enemy_id)){
zombie.util.messaging.send(bus,enemy_id,new cljs.core.Keyword("combat","hit","combat/hit",-1592659022),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"damage","damage",970520018),damage,new cljs.core.Keyword(null,"attack-direction","attack-direction",-750291677),world_direction,new cljs.core.Keyword(null,"hit-normal","hit-normal",929947402),normal,new cljs.core.Keyword(null,"hit-position","hit-position",1824962160),hit_position,new cljs.core.Keyword(null,"attacker-id","attacker-id",629894680),entity_id], null));
} else {
zombie.util.messaging.send(bus,new cljs.core.Keyword("audio","play-sound","audio/play-sound",-1045916618),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("sfx","impact-plate","sfx/impact-plate",-1268012436),new cljs.core.Keyword(null,"position","position",-2011731912),hit_position], null));

zombie.scene.system.weapon.spawn_particles_BANG_(bus,new cljs.core.Keyword(null,"impact-sparks","impact-sparks",-1076645149),hit_position,normal);
}


var G__13286 = seq__13251;
var G__13287 = chunk__13252;
var G__13288 = count__13253;
var G__13289 = (i__13254 + (1));
seq__13251 = G__13286;
chunk__13252 = G__13287;
count__13253 = G__13288;
i__13254 = G__13289;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__13251);
if(temp__5753__auto__){
var seq__13251__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13251__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__13251__$1);
var G__13290 = cljs.core.chunk_rest(seq__13251__$1);
var G__13291 = c__4638__auto__;
var G__13292 = cljs.core.count(c__4638__auto__);
var G__13293 = (0);
seq__13251 = G__13290;
chunk__13252 = G__13291;
count__13253 = G__13292;
i__13254 = G__13293;
continue;
} else {
var map__13277 = cljs.core.first(seq__13251__$1);
var map__13277__$1 = cljs.core.__destructure_map(map__13277);
var enemy_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13277__$1,new cljs.core.Keyword(null,"entity-id","entity-id",1485898093));
var normal = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13277__$1,new cljs.core.Keyword(null,"hit-normal","hit-normal",929947402));
var hit_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13277__$1,new cljs.core.Keyword(null,"hit-position","hit-position",1824962160));
(zombie.scene.system.weapon._STAR_next_id_STAR_ = (zombie.scene.system.weapon._STAR_next_id_STAR_ + (1)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(zombie.state.databases.rays,cljs.core.assoc,zombie.scene.system.weapon._STAR_next_id_STAR_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start-position","start-position",-576733324),world_position,new cljs.core.Keyword(null,"end-position","end-position",-1045268232),hit_position], null));

if(cljs.core.truth_(enemy_id)){
zombie.util.messaging.send(bus,enemy_id,new cljs.core.Keyword("combat","hit","combat/hit",-1592659022),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"damage","damage",970520018),damage,new cljs.core.Keyword(null,"attack-direction","attack-direction",-750291677),world_direction,new cljs.core.Keyword(null,"hit-normal","hit-normal",929947402),normal,new cljs.core.Keyword(null,"hit-position","hit-position",1824962160),hit_position,new cljs.core.Keyword(null,"attacker-id","attacker-id",629894680),entity_id], null));
} else {
zombie.util.messaging.send(bus,new cljs.core.Keyword("audio","play-sound","audio/play-sound",-1045916618),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("sfx","impact-plate","sfx/impact-plate",-1268012436),new cljs.core.Keyword(null,"position","position",-2011731912),hit_position], null));

zombie.scene.system.weapon.spawn_particles_BANG_(bus,new cljs.core.Keyword(null,"impact-sparks","impact-sparks",-1076645149),hit_position,normal);
}


var G__13294 = cljs.core.next(seq__13251__$1);
var G__13295 = null;
var G__13296 = (0);
var G__13297 = (0);
seq__13251 = G__13294;
chunk__13252 = G__13295;
count__13253 = G__13296;
i__13254 = G__13297;
continue;
}
} else {
return null;
}
}
break;
}
});
zombie.scene.system.weapon.register_listeners_BANG_ = (function zombie$scene$system$weapon$register_listeners_BANG_(bus,local_state,entity_id,fsm){
zombie.util.messaging.on(bus,entity_id,new cljs.core.Keyword("weapon","set-aim","weapon/set-aim",407242753),(function (p1__13278_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(local_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weapons","weapons",-1983639898),entity_id,new cljs.core.Keyword(null,"aim","aim",-1211687229)], null),p1__13278_SHARP_);
}));

return zombie.util.messaging.on(bus,entity_id,new cljs.core.Keyword("weapon","fire","weapon/fire",-961423332),(function (fire_QMARK_){
if(cljs.core.truth_(fire_QMARK_)){
return statecharts.core.send.cljs$core$IFn$_invoke$arity$2(fsm,new cljs.core.Keyword(null,"start-firing","start-firing",804428738));
} else {
return statecharts.core.send.cljs$core$IFn$_invoke$arity$2(fsm,new cljs.core.Keyword(null,"end-firing","end-firing",24849812));
}
}));
});

/**
* @constructor
 * @implements {threeagent.system.ISystem}
*/
zombie.scene.system.weapon.WeaponSystem = (function (bus,local_state){
this.bus = bus;
this.local_state = local_state;
});
(zombie.scene.system.weapon.WeaponSystem.prototype.threeagent$system$ISystem$ = cljs.core.PROTOCOL_SENTINEL);

(zombie.scene.system.weapon.WeaponSystem.prototype.threeagent$system$ISystem$init$arity$2 = (function (_,p__13279){
var self__ = this;
var map__13280 = p__13279;
var map__13280__$1 = cljs.core.__destructure_map(map__13280);
var systems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13280__$1,new cljs.core.Keyword(null,"systems","systems",-1015374944));
var ___$1 = this;
return cljs.core.reset_BANG_(self__.local_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"systems","systems",-1015374944),systems], null));
}));

(zombie.scene.system.weapon.WeaponSystem.prototype.threeagent$system$ISystem$destroy$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(zombie.scene.system.weapon.WeaponSystem.prototype.threeagent$system$ISystem$on_entity_added$arity$5 = (function (_,___$1,key,_obj,p__13281){
var self__ = this;
var map__13282 = p__13281;
var map__13282__$1 = cljs.core.__destructure_map(map__13282);
var damage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13282__$1,new cljs.core.Keyword(null,"damage","damage",970520018));
var firing_rate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13282__$1,new cljs.core.Keyword(null,"firing-rate","firing-rate",-899521411));
var ___$2 = this;
var fsm = (function (){var G__13283 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(zombie.scene.system.weapon.semi_auto_fsm(firing_rate),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),key,new cljs.core.Keyword(null,"bus","bus",-1090873603),self__.bus,new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state], null));
return (statecharts.core.service.cljs$core$IFn$_invoke$arity$1 ? statecharts.core.service.cljs$core$IFn$_invoke$arity$1(G__13283) : statecharts.core.service.call(null,G__13283));
})();
statecharts.core.start(fsm);

zombie.scene.system.weapon.register_listeners_BANG_(self__.bus,self__.local_state,key,fsm);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.local_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weapons","weapons",-1983639898),key], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"damage","damage",970520018),damage,new cljs.core.Keyword(null,"fsm","fsm",937922990),fsm], null));
}));

(zombie.scene.system.weapon.WeaponSystem.prototype.threeagent$system$ISystem$on_entity_removed$arity$5 = (function (_,___$1,_key,_obj,p__13284){
var self__ = this;
var map__13285 = p__13284;
var map__13285__$1 = cljs.core.__destructure_map(map__13285);
var ___$2 = this;
return null;
}));

(zombie.scene.system.weapon.WeaponSystem.prototype.threeagent$system$ISystem$tick$arity$2 = (function (_,_delta_time){
var self__ = this;
var ___$1 = this;
return null;
}));

(zombie.scene.system.weapon.WeaponSystem.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bus","bus",549657924,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null)], null);
}));

(zombie.scene.system.weapon.WeaponSystem.cljs$lang$type = true);

(zombie.scene.system.weapon.WeaponSystem.cljs$lang$ctorStr = "zombie.scene.system.weapon/WeaponSystem");

(zombie.scene.system.weapon.WeaponSystem.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"zombie.scene.system.weapon/WeaponSystem");
}));

/**
 * Positional factory function for zombie.scene.system.weapon/WeaponSystem.
 */
zombie.scene.system.weapon.__GT_WeaponSystem = (function zombie$scene$system$weapon$__GT_WeaponSystem(bus,local_state){
return (new zombie.scene.system.weapon.WeaponSystem(bus,local_state));
});

zombie.scene.system.weapon.create = (function zombie$scene$system$weapon$create(event_bus){
return zombie.scene.system.weapon.__GT_WeaponSystem(event_bus,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=zombie.scene.system.weapon.js.map
