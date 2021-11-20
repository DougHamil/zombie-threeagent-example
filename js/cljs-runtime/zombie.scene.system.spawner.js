goog.provide('zombie.scene.system.spawner');
if((typeof zombie !== 'undefined') && (typeof zombie.scene !== 'undefined') && (typeof zombie.scene.system !== 'undefined') && (typeof zombie.scene.system.spawner !== 'undefined') && (typeof zombie.scene.system.spawner._STAR_spawn_id_STAR_ !== 'undefined')){
} else {
zombie.scene.system.spawner._STAR_spawn_id_STAR_ = (0);
}
zombie.scene.system.spawner.next_id = (function zombie$scene$system$spawner$next_id(){
(zombie.scene.system.spawner._STAR_spawn_id_STAR_ = (zombie.scene.system.spawner._STAR_spawn_id_STAR_ + (1)));

return ["spawnable-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zombie.scene.system.spawner._STAR_spawn_id_STAR_)].join('');
});
zombie.scene.system.spawner.on_killed = (function zombie$scene$system$spawner$on_killed(entity_db,obj,spawnables){
var seq__13382 = cljs.core.seq(spawnables);
var chunk__13383 = null;
var count__13384 = (0);
var i__13385 = (0);
while(true){
if((i__13385 < count__13384)){
var spawnable = chunk__13383.cljs$core$IIndexed$_nth$arity$2(null,i__13385);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(entity_db,cljs.core.assoc,(function (){var or__4212__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(spawnable);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return zombie.scene.system.spawner.next_id();
}
})(),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spawnable,new cljs.core.Keyword(null,"initial-position","initial-position",1055724056),zombie.util.threejs.world_position_as_tuple(obj)));


var G__13390 = seq__13382;
var G__13391 = chunk__13383;
var G__13392 = count__13384;
var G__13393 = (i__13385 + (1));
seq__13382 = G__13390;
chunk__13383 = G__13391;
count__13384 = G__13392;
i__13385 = G__13393;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__13382);
if(temp__5753__auto__){
var seq__13382__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13382__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__13382__$1);
var G__13394 = cljs.core.chunk_rest(seq__13382__$1);
var G__13395 = c__4638__auto__;
var G__13396 = cljs.core.count(c__4638__auto__);
var G__13397 = (0);
seq__13382 = G__13394;
chunk__13383 = G__13395;
count__13384 = G__13396;
i__13385 = G__13397;
continue;
} else {
var spawnable = cljs.core.first(seq__13382__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(entity_db,cljs.core.assoc,(function (){var or__4212__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(spawnable);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return zombie.scene.system.spawner.next_id();
}
})(),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spawnable,new cljs.core.Keyword(null,"initial-position","initial-position",1055724056),zombie.util.threejs.world_position_as_tuple(obj)));


var G__13398 = cljs.core.next(seq__13382__$1);
var G__13399 = null;
var G__13400 = (0);
var G__13401 = (0);
seq__13382 = G__13398;
chunk__13383 = G__13399;
count__13384 = G__13400;
i__13385 = G__13401;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {threeagent.system.ISystem}
*/
zombie.scene.system.spawner.SpawnerSystem = (function (bus,local_state){
this.bus = bus;
this.local_state = local_state;
});
(zombie.scene.system.spawner.SpawnerSystem.prototype.threeagent$system$ISystem$ = cljs.core.PROTOCOL_SENTINEL);

(zombie.scene.system.spawner.SpawnerSystem.prototype.threeagent$system$ISystem$init$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(zombie.scene.system.spawner.SpawnerSystem.prototype.threeagent$system$ISystem$destroy$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(zombie.scene.system.spawner.SpawnerSystem.prototype.threeagent$system$ISystem$on_entity_added$arity$5 = (function (_,p__13386,key,obj,p__13387){
var self__ = this;
var map__13388 = p__13386;
var map__13388__$1 = cljs.core.__destructure_map(map__13388);
var entity_db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13388__$1,new cljs.core.Keyword(null,"entity-db","entity-db",422060390));
var map__13389 = p__13387;
var map__13389__$1 = cljs.core.__destructure_map(map__13389);
var on_death = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13389__$1,new cljs.core.Keyword(null,"on-death","on-death",2035139018));
var ___$1 = this;
if(cljs.core.truth_(on_death)){
return zombie.util.messaging.on(self__.bus,key,new cljs.core.Keyword("entity","killed","entity/killed",-684013280),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(zombie.scene.system.spawner.on_killed,(function (){var or__4212__auto__ = entity_db;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return zombie.state.databases.entities;
}
})(),obj,on_death));
} else {
return null;
}
}));

(zombie.scene.system.spawner.SpawnerSystem.prototype.threeagent$system$ISystem$on_entity_removed$arity$5 = (function (_,___$1,key,_obj,_cfg){
var self__ = this;
var ___$2 = this;
return null;
}));

(zombie.scene.system.spawner.SpawnerSystem.prototype.threeagent$system$ISystem$tick$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(zombie.scene.system.spawner.SpawnerSystem.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bus","bus",549657924,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null)], null);
}));

(zombie.scene.system.spawner.SpawnerSystem.cljs$lang$type = true);

(zombie.scene.system.spawner.SpawnerSystem.cljs$lang$ctorStr = "zombie.scene.system.spawner/SpawnerSystem");

(zombie.scene.system.spawner.SpawnerSystem.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"zombie.scene.system.spawner/SpawnerSystem");
}));

/**
 * Positional factory function for zombie.scene.system.spawner/SpawnerSystem.
 */
zombie.scene.system.spawner.__GT_SpawnerSystem = (function zombie$scene$system$spawner$__GT_SpawnerSystem(bus,local_state){
return (new zombie.scene.system.spawner.SpawnerSystem(bus,local_state));
});

zombie.scene.system.spawner.create = (function zombie$scene$system$spawner$create(event_bus){
return zombie.scene.system.spawner.__GT_SpawnerSystem(event_bus,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=zombie.scene.system.spawner.js.map
