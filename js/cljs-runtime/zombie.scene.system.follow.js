goog.provide('zombie.scene.system.follow');
var module$node_modules$three$build$three_module=shadow.js.require("module$node_modules$three$build$three_module", {});
zombie.scene.system.follow.v1 = (new module$node_modules$three$build$three_module.Vector3());
zombie.scene.system.follow.tick_follower_BANG_ = (function zombie$scene$system$follow$tick_follower_BANG_(_delta_time,p__13078){
var map__13079 = p__13078;
var map__13079__$1 = cljs.core.__destructure_map(map__13079);
var object = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13079__$1,new cljs.core.Keyword(null,"object","object",1474613949));
var entity_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13079__$1,new cljs.core.Keyword(null,"entity-id","entity-id",1485898093));
var position_offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13079__$1,new cljs.core.Keyword(null,"position-offset","position-offset",1257061411));
var look_at_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13079__$1,new cljs.core.Keyword(null,"look-at?","look-at?",-347394510));
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(zombie.state.databases.entity_objects),entity_id);
if(cljs.core.truth_(temp__5753__auto__)){
var obj = temp__5753__auto__;
var world_pos = obj.getWorldPosition(zombie.scene.system.follow.v1);
var vec__13080 = position_offset;
var ox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13080,(0),null);
var oy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13080,(1),null);
var oz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13080,(2),null);
object.position.set((ox + world_pos.x),(oy + world_pos.y),(oz + world_pos.z));

if(cljs.core.truth_(look_at_QMARK_)){
return object.lookAt(world_pos);
} else {
return null;
}
} else {
return null;
}
});

/**
* @constructor
 * @implements {threeagent.system.ISystem}
*/
zombie.scene.system.follow.FollowSystem = (function (bus,local_state){
this.bus = bus;
this.local_state = local_state;
});
(zombie.scene.system.follow.FollowSystem.prototype.threeagent$system$ISystem$ = cljs.core.PROTOCOL_SENTINEL);

(zombie.scene.system.follow.FollowSystem.prototype.threeagent$system$ISystem$init$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(zombie.scene.system.follow.FollowSystem.prototype.threeagent$system$ISystem$destroy$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(zombie.scene.system.follow.FollowSystem.prototype.threeagent$system$ISystem$on_entity_added$arity$5 = (function (_,___$1,_id,obj,p__13084){
var self__ = this;
var map__13085 = p__13084;
var map__13085__$1 = cljs.core.__destructure_map(map__13085);
var entity_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13085__$1,new cljs.core.Keyword(null,"entity-id","entity-id",1485898093));
var position_offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13085__$1,new cljs.core.Keyword(null,"position-offset","position-offset",1257061411));
var look_at_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13085__$1,new cljs.core.Keyword(null,"look-at?","look-at?",-347394510));
var ___$2 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.local_state,cljs.core.assoc,obj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),entity_id,new cljs.core.Keyword(null,"look-at?","look-at?",-347394510),look_at_QMARK_,new cljs.core.Keyword(null,"position-offset","position-offset",1257061411),(function (){var or__4212__auto__ = position_offset;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null);
}
})(),new cljs.core.Keyword(null,"object","object",1474613949),obj], null));
}));

(zombie.scene.system.follow.FollowSystem.prototype.threeagent$system$ISystem$on_entity_removed$arity$5 = (function (_,___$1,_id,obj,_config){
var self__ = this;
var ___$2 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.local_state,cljs.core.dissoc,obj);
}));

(zombie.scene.system.follow.FollowSystem.prototype.threeagent$system$ISystem$tick$arity$2 = (function (_,delta_time){
var self__ = this;
var ___$1 = this;
var seq__13093 = cljs.core.seq(cljs.core.deref(self__.local_state));
var chunk__13094 = null;
var count__13095 = (0);
var i__13096 = (0);
while(true){
if((i__13096 < count__13095)){
var vec__13108 = chunk__13094.cljs$core$IIndexed$_nth$arity$2(null,i__13096);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13108,(0),null);
var follower = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13108,(1),null);
zombie.scene.system.follow.tick_follower_BANG_(delta_time,follower);


var G__13124 = seq__13093;
var G__13125 = chunk__13094;
var G__13126 = count__13095;
var G__13127 = (i__13096 + (1));
seq__13093 = G__13124;
chunk__13094 = G__13125;
count__13095 = G__13126;
i__13096 = G__13127;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__13093);
if(temp__5753__auto__){
var seq__13093__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13093__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__13093__$1);
var G__13128 = cljs.core.chunk_rest(seq__13093__$1);
var G__13129 = c__4638__auto__;
var G__13130 = cljs.core.count(c__4638__auto__);
var G__13131 = (0);
seq__13093 = G__13128;
chunk__13094 = G__13129;
count__13095 = G__13130;
i__13096 = G__13131;
continue;
} else {
var vec__13115 = cljs.core.first(seq__13093__$1);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13115,(0),null);
var follower = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13115,(1),null);
zombie.scene.system.follow.tick_follower_BANG_(delta_time,follower);


var G__13132 = cljs.core.next(seq__13093__$1);
var G__13133 = null;
var G__13134 = (0);
var G__13135 = (0);
seq__13093 = G__13132;
chunk__13094 = G__13133;
count__13095 = G__13134;
i__13096 = G__13135;
continue;
}
} else {
return null;
}
}
break;
}
}));

(zombie.scene.system.follow.FollowSystem.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bus","bus",549657924,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null)], null);
}));

(zombie.scene.system.follow.FollowSystem.cljs$lang$type = true);

(zombie.scene.system.follow.FollowSystem.cljs$lang$ctorStr = "zombie.scene.system.follow/FollowSystem");

(zombie.scene.system.follow.FollowSystem.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"zombie.scene.system.follow/FollowSystem");
}));

/**
 * Positional factory function for zombie.scene.system.follow/FollowSystem.
 */
zombie.scene.system.follow.__GT_FollowSystem = (function zombie$scene$system$follow$__GT_FollowSystem(bus,local_state){
return (new zombie.scene.system.follow.FollowSystem(bus,local_state));
});

zombie.scene.system.follow.create = (function zombie$scene$system$follow$create(event_bus){
return zombie.scene.system.follow.__GT_FollowSystem(event_bus,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=zombie.scene.system.follow.js.map
