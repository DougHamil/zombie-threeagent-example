goog.provide('zombie.scene.system.combat');
var module$node_modules$three$build$three_module=shadow.js.require("module$node_modules$three$build$three_module", {});
var module$node_modules$$tweenjs$tween_js$dist$tween_esm=shadow.js.require("module$node_modules$$tweenjs$tween_js$dist$tween_esm", {});
zombie.scene.system.combat.hit_reaction_flash_BANG_ = (function zombie$scene$system$combat$hit_reaction_flash_BANG_(materials){
var t1 = (new module$node_modules$$tweenjs$tween_js$dist$tween_esm.Tween(({"x": (0)}))).to(({"x": (1)}),(200)).repeat((1)).yoyo(true).start();
return t1.onUpdate((function (p1__13044_SHARP_){
var seq__13045 = cljs.core.seq(materials);
var chunk__13046 = null;
var count__13047 = (0);
var i__13048 = (0);
while(true){
if((i__13048 < count__13047)){
var m = chunk__13046.cljs$core$IIndexed$_nth$arity$2(null,i__13048);
m.setValues(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"emissive","emissive",-761267227),"white",new cljs.core.Keyword(null,"emissiveIntensity","emissiveIntensity",2119800890),p1__13044_SHARP_.x], null)));


var G__13057 = seq__13045;
var G__13058 = chunk__13046;
var G__13059 = count__13047;
var G__13060 = (i__13048 + (1));
seq__13045 = G__13057;
chunk__13046 = G__13058;
count__13047 = G__13059;
i__13048 = G__13060;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__13045);
if(temp__5753__auto__){
var seq__13045__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13045__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__13045__$1);
var G__13061 = cljs.core.chunk_rest(seq__13045__$1);
var G__13062 = c__4638__auto__;
var G__13063 = cljs.core.count(c__4638__auto__);
var G__13064 = (0);
seq__13045 = G__13061;
chunk__13046 = G__13062;
count__13047 = G__13063;
i__13048 = G__13064;
continue;
} else {
var m = cljs.core.first(seq__13045__$1);
m.setValues(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"emissive","emissive",-761267227),"white",new cljs.core.Keyword(null,"emissiveIntensity","emissiveIntensity",2119800890),p1__13044_SHARP_.x], null)));


var G__13065 = cljs.core.next(seq__13045__$1);
var G__13066 = null;
var G__13067 = (0);
var G__13068 = (0);
seq__13045 = G__13065;
chunk__13046 = G__13066;
count__13047 = G__13067;
i__13048 = G__13068;
continue;
}
} else {
return null;
}
}
break;
}
}));
});
zombie.scene.system.combat.handle_reaction_BANG_ = (function zombie$scene$system$combat$handle_reaction_BANG_(bus,object,materials,p__13049,p__13050){
var map__13051 = p__13049;
var map__13051__$1 = cljs.core.__destructure_map(map__13051);
var text_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13051__$1,new cljs.core.Keyword(null,"text?","text?",-934411583));
var flash_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13051__$1,new cljs.core.Keyword(null,"flash?","flash?",1054054288));
var sound = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13051__$1,new cljs.core.Keyword(null,"sound","sound",-2127407070));
var particles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13051__$1,new cljs.core.Keyword(null,"particles","particles",801881788));
var map__13052 = p__13050;
var map__13052__$1 = cljs.core.__destructure_map(map__13052);
var hit_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13052__$1,new cljs.core.Keyword(null,"hit-position","hit-position",1824962160));
var hit_normal = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13052__$1,new cljs.core.Keyword(null,"hit-normal","hit-normal",929947402));
var damage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13052__$1,new cljs.core.Keyword(null,"damage","damage",970520018));
if(cljs.core.truth_(text_QMARK_)){
zombie.util.messaging.send(bus,new cljs.core.Keyword("particles","spawn","particles/spawn",282676462),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"floating-text","floating-text",1601770399),new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(zombie.util.threejs.world_position_as_tuple(object),(1),(2)),new cljs.core.Keyword(null,"color","color",1011675173),"orange",new cljs.core.Keyword(null,"speed","speed",1257663751),(5),new cljs.core.Keyword(null,"spread","spread",862337191),(8),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.str.cljs$core$IFn$_invoke$arity$1(damage)], null));
} else {
}

if(cljs.core.truth_(flash_QMARK_)){
zombie.scene.system.combat.hit_reaction_flash_BANG_(materials);
} else {
}

if(cljs.core.truth_(sound)){
zombie.util.messaging.send(bus,new cljs.core.Keyword("audio","play-sound","audio/play-sound",-1045916618),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),sound,new cljs.core.Keyword(null,"position","position",-2011731912),hit_position], null));
} else {
}

if(cljs.core.truth_(particles)){
return zombie.util.messaging.send(bus,new cljs.core.Keyword("particles","spawn","particles/spawn",282676462),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),particles,new cljs.core.Keyword(null,"position","position",-2011731912),hit_position,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),hit_normal], null));
} else {
return null;
}
});
zombie.scene.system.combat.on_hit = (function zombie$scene$system$combat$on_hit(bus,local_state,entity_id,p__13053){
var map__13054 = p__13053;
var map__13054__$1 = cljs.core.__destructure_map(map__13054);
var hit = map__13054__$1;
var damage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13054__$1,new cljs.core.Keyword(null,"damage","damage",970520018));
var map__13055 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(local_state),entity_id);
var map__13055__$1 = cljs.core.__destructure_map(map__13055);
var health = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13055__$1,new cljs.core.Keyword(null,"health","health",-295520649));
var hit_reaction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13055__$1,new cljs.core.Keyword(null,"hit-reaction","hit-reaction",575941111));
var materials = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13055__$1,new cljs.core.Keyword(null,"materials","materials",2036902582));
var object = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13055__$1,new cljs.core.Keyword(null,"object","object",1474613949));
var death_reaction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13055__$1,new cljs.core.Keyword(null,"death-reaction","death-reaction",-473209476));
var on_killed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13055__$1,new cljs.core.Keyword(null,"on-killed","on-killed",-1553804717));
var total_health = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13055__$1,new cljs.core.Keyword(null,"total-health","total-health",-697413861));
var new_health = (function (){var x__4295__auto__ = (health - damage);
var y__4296__auto__ = (0);
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(zombie.state.databases.health_bars,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,new cljs.core.Keyword(null,"visible?","visible?",2129863715)], null),true);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(zombie.state.databases.health_bars,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,new cljs.core.Keyword(null,"percent","percent",2031453817)], null),(new_health / total_health));

zombie.scene.system.combat.handle_reaction_BANG_(bus,object,materials,hit_reaction,hit);

if((health > (0))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(local_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,new cljs.core.Keyword(null,"health","health",-295520649)], null),new_health);

if((new_health > (0))){
return zombie.util.messaging.send(bus,entity_id,new cljs.core.Keyword("entity","damaged","entity/damaged",-942098362),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(hit,new cljs.core.Keyword(null,"damage","damage",970520018),damage,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"old-health","old-health",-1846735160),health,new cljs.core.Keyword(null,"new-health","new-health",-989145959),new_health], 0)));
} else {
if(cljs.core.truth_(on_killed)){
(on_killed.cljs$core$IFn$_invoke$arity$0 ? on_killed.cljs$core$IFn$_invoke$arity$0() : on_killed.call(null));
} else {
}

zombie.scene.system.combat.handle_reaction_BANG_(bus,object,materials,death_reaction,hit);

return zombie.util.messaging.send(bus,entity_id,new cljs.core.Keyword("entity","killed","entity/killed",-684013280),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(hit,new cljs.core.Keyword(null,"damage","damage",970520018),damage,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"old-health","old-health",-1846735160),health,new cljs.core.Keyword(null,"new-health","new-health",-989145959),(0)], 0)));
}
} else {
return null;
}
});
zombie.scene.system.combat.register_listeners_BANG_ = (function zombie$scene$system$combat$register_listeners_BANG_(bus,local_state,entity_id){
return zombie.util.messaging.on(bus,entity_id,new cljs.core.Keyword("combat","hit","combat/hit",-1592659022),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(zombie.scene.system.combat.on_hit,bus,local_state,entity_id));
});
zombie.scene.system.combat.get_materials = (function zombie$scene$system$combat$get_materials(obj){
var mats = [];
obj.traverse((function (p1__13056_SHARP_){
var temp__5753__auto__ = p1__13056_SHARP_.material;
if(cljs.core.truth_(temp__5753__auto__)){
var mat = temp__5753__auto__;
if((mat instanceof module$node_modules$three$build$three_module.MeshPhongMaterial)){
var c = mat.clone();
(p1__13056_SHARP_.material = c);

return mats.push(c);
} else {
return null;
}
} else {
return null;
}
}));

return mats;
});

/**
* @constructor
 * @implements {threeagent.system.ISystem}
*/
zombie.scene.system.combat.CombatSystem = (function (bus,local_state){
this.bus = bus;
this.local_state = local_state;
});
(zombie.scene.system.combat.CombatSystem.prototype.threeagent$system$ISystem$ = cljs.core.PROTOCOL_SENTINEL);

(zombie.scene.system.combat.CombatSystem.prototype.threeagent$system$ISystem$init$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(zombie.scene.system.combat.CombatSystem.prototype.threeagent$system$ISystem$destroy$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(zombie.scene.system.combat.CombatSystem.prototype.threeagent$system$ISystem$on_entity_added$arity$5 = (function (_,___$1,id,obj,cfg){
var self__ = this;
var ___$2 = this;
zombie.scene.system.combat.register_listeners_BANG_(self__.bus,self__.local_state,id);

return (function (){
var materials = zombie.scene.system.combat.get_materials(obj);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(zombie.state.databases.health_bars,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"visible?","visible?",2129863715),false,new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),id,new cljs.core.Keyword(null,"percent","percent",2031453817),1.0], null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.local_state,cljs.core.assoc,id,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cfg,new cljs.core.Keyword(null,"total-health","total-health",-697413861),new cljs.core.Keyword(null,"health","health",-295520649).cljs$core$IFn$_invoke$arity$1(cfg),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"object","object",1474613949),obj,new cljs.core.Keyword(null,"materials","materials",2036902582),materials], 0)));
});
}));

(zombie.scene.system.combat.CombatSystem.prototype.threeagent$system$ISystem$on_entity_removed$arity$5 = (function (_,___$1,id,_obj,_cfg){
var self__ = this;
var ___$2 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(zombie.state.databases.health_bars,cljs.core.dissoc,id);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.local_state,cljs.core.dissoc,id);
}));

(zombie.scene.system.combat.CombatSystem.prototype.threeagent$system$ISystem$tick$arity$2 = (function (_,_delta_time){
var self__ = this;
var ___$1 = this;
return null;
}));

(zombie.scene.system.combat.CombatSystem.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bus","bus",549657924,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null)], null);
}));

(zombie.scene.system.combat.CombatSystem.cljs$lang$type = true);

(zombie.scene.system.combat.CombatSystem.cljs$lang$ctorStr = "zombie.scene.system.combat/CombatSystem");

(zombie.scene.system.combat.CombatSystem.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"zombie.scene.system.combat/CombatSystem");
}));

/**
 * Positional factory function for zombie.scene.system.combat/CombatSystem.
 */
zombie.scene.system.combat.__GT_CombatSystem = (function zombie$scene$system$combat$__GT_CombatSystem(bus,local_state){
return (new zombie.scene.system.combat.CombatSystem(bus,local_state));
});

zombie.scene.system.combat.create = (function zombie$scene$system$combat$create(event_bus){
return zombie.scene.system.combat.__GT_CombatSystem(event_bus,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=zombie.scene.system.combat.js.map
