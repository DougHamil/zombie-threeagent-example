goog.provide('zombie.scene.system.game');
var module$node_modules$$tweenjs$tween_js$dist$tween_esm=shadow.js.require("module$node_modules$$tweenjs$tween_js$dist$tween_esm", {});
zombie.scene.system.game.door_tween_BANG_ = (function zombie$scene$system$game$door_tween_BANG_(state,on_complete){
var t = (new module$node_modules$$tweenjs$tween_js$dist$tween_esm.Tween(({"x": (0)}))).to(({"x": (1)}),(200)).start();
t.onUpdate((function (p1__13331_SHARP_){
return cljs.core.reset_BANG_(state,p1__13331_SHARP_.x);
}));

if(cljs.core.truth_(on_complete)){
return t.onComplete(on_complete);
} else {
return null;
}
});
zombie.scene.system.game.room_fsm = (function (){var G__13338 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"states","states",1389013542),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.Keyword(null,"clearing","clearing",1048111334)], null)], null),new cljs.core.Keyword(null,"clearing","clearing",1048111334),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entry","entry",505168823),(function (p1__13337_SHARP_){
return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"outro-tween","outro-tween",1970374123).cljs$core$IFn$_invoke$arity$1(p1__13337_SHARP_),(0));
}),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cleared","cleared",-1267667336),new cljs.core.Keyword(null,"cooldown","cooldown",-1178127572),new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.Keyword(null,"clearing","clearing",1048111334)], null)], null),new cljs.core.Keyword(null,"cooldown","cooldown",-1178127572),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"delay","delay",-574225219),(200),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"cleared","cleared",-1267667336)], null)], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reset","reset",-800929946),new cljs.core.Keyword(null,"clearing","clearing",1048111334)], null)], null),new cljs.core.Keyword(null,"cleared","cleared",-1267667336),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entry","entry",505168823),(function (p__13339){
var map__13340 = p__13339;
var map__13340__$1 = cljs.core.__destructure_map(map__13340);
var outro_tween = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13340__$1,new cljs.core.Keyword(null,"outro-tween","outro-tween",1970374123));
var on_clear = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13340__$1,new cljs.core.Keyword(null,"on-clear","on-clear",2009781891));
return zombie.scene.system.game.door_tween_BANG_(outro_tween,on_clear);
})], null)], null)], null);
return (statecharts.core.machine.cljs$core$IFn$_invoke$arity$1 ? statecharts.core.machine.cljs$core$IFn$_invoke$arity$1(G__13338) : statecharts.core.machine.call(null,G__13338));
})();
zombie.scene.system.game.register_enemy_BANG_ = (function zombie$scene$system$game$register_enemy_BANG_(bus,enemy_list,room_fsm,enemy_id){
return zombie.util.messaging.on(bus,enemy_id,new cljs.core.Keyword("entity","killed","entity/killed",-684013280),(function (){
var enemies = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(enemy_list,cljs.core.disj,enemy_id);
if(cljs.core.empty_QMARK_(enemies)){
return statecharts.core.send.cljs$core$IFn$_invoke$arity$2(room_fsm,new cljs.core.Keyword(null,"cleared","cleared",-1267667336));
} else {
return null;
}
}));
});

/**
* @constructor
 * @implements {threeagent.system.ISystem}
*/
zombie.scene.system.game.GameSystem = (function (bus,local_state){
this.bus = bus;
this.local_state = local_state;
});
(zombie.scene.system.game.GameSystem.prototype.threeagent$system$ISystem$ = cljs.core.PROTOCOL_SENTINEL);

(zombie.scene.system.game.GameSystem.prototype.threeagent$system$ISystem$init$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.reset_BANG_(self__.local_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rooms","rooms",1196158176),cljs.core.PersistentArrayMap.EMPTY], null));
}));

(zombie.scene.system.game.GameSystem.prototype.threeagent$system$ISystem$destroy$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(zombie.scene.system.game.GameSystem.prototype.threeagent$system$ISystem$on_entity_added$arity$5 = (function (_,p__13357,id,_obj,p__13358){
var self__ = this;
var map__13359 = p__13357;
var map__13359__$1 = cljs.core.__destructure_map(map__13359);
var map__13360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13359__$1,new cljs.core.Keyword(null,"room","room",536484922));
var map__13360__$1 = cljs.core.__destructure_map(map__13360);
var room_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13360__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var room_enemies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13360__$1,new cljs.core.Keyword(null,"enemies","enemies",2114285722));
var map__13361 = p__13358;
var map__13361__$1 = cljs.core.__destructure_map(map__13361);
var room = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13361__$1,new cljs.core.Keyword(null,"room","room",536484922));
var enemy_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13361__$1,new cljs.core.Keyword(null,"enemy?","enemy?",-772698281));
var ___$1 = this;
var cur = zombie.util.common.cursor(self__.local_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rooms","rooms",1196158176),room_id], null));
if(cljs.core.truth_(room)){
var fsm_13369 = (function (){var G__13366 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(zombie.scene.system.game.room_fsm,new cljs.core.Keyword(null,"context","context",-830191113),room);
return (statecharts.core.service.cljs$core$IFn$_invoke$arity$1 ? statecharts.core.service.cljs$core$IFn$_invoke$arity$1(G__13366) : statecharts.core.service.call(null,G__13366));
})();
statecharts.core.start(fsm_13369);

cljs.core.reset_BANG_(cur,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fsm","fsm",937922990),fsm_13369], null));
} else {
}

if(cljs.core.truth_(enemy_QMARK_)){
statecharts.core.send.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fsm","fsm",937922990).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cur)),new cljs.core.Keyword(null,"reset","reset",-800929946));

zombie.scene.system.game.register_enemy_BANG_(self__.bus,room_enemies,new cljs.core.Keyword(null,"fsm","fsm",937922990).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cur)),id);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(room_enemies,cljs.core.conj,id);
} else {
return null;
}
}));

(zombie.scene.system.game.GameSystem.prototype.threeagent$system$ISystem$on_entity_removed$arity$5 = (function (_,___$1,_id,_obj,p__13367){
var self__ = this;
var map__13368 = p__13367;
var map__13368__$1 = cljs.core.__destructure_map(map__13368);
var ___$2 = this;
return null;
}));

(zombie.scene.system.game.GameSystem.prototype.threeagent$system$ISystem$tick$arity$2 = (function (_,_delta_time){
var self__ = this;
var ___$1 = this;
return null;
}));

(zombie.scene.system.game.GameSystem.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bus","bus",549657924,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null)], null);
}));

(zombie.scene.system.game.GameSystem.cljs$lang$type = true);

(zombie.scene.system.game.GameSystem.cljs$lang$ctorStr = "zombie.scene.system.game/GameSystem");

(zombie.scene.system.game.GameSystem.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"zombie.scene.system.game/GameSystem");
}));

/**
 * Positional factory function for zombie.scene.system.game/GameSystem.
 */
zombie.scene.system.game.__GT_GameSystem = (function zombie$scene$system$game$__GT_GameSystem(bus,local_state){
return (new zombie.scene.system.game.GameSystem(bus,local_state));
});

zombie.scene.system.game.create = (function zombie$scene$system$game$create(event_bus){
return zombie.scene.system.game.__GT_GameSystem(event_bus,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=zombie.scene.system.game.js.map
