goog.provide('zombie.scene.effects');
zombie.scene.effects.particle_system = (function zombie$scene$effects$particle_system(id,p__10661){
var map__10662 = p__10661;
var map__10662__$1 = cljs.core.__destructure_map(map__10662);
var cfg = map__10662__$1;
var rotation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10662__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10662__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"particle","particle",-1614503951),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cfg,new cljs.core.Keyword(null,"on-dead","on-dead",1703912838),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(zombie.state.databases.particles,cljs.core.dissoc,id);

var temp__5753__auto__ = new cljs.core.Keyword(null,"on-dead","on-dead",1703912838).cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
} else {
return null;
}
})),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),rotation,new cljs.core.Keyword(null,"position","position",-2011731912),position], null)], null);
});
zombie.scene.effects.ray = (function zombie$scene$effects$ray(id,p__10663){
var map__10664 = p__10663;
var map__10664__$1 = cljs.core.__destructure_map(map__10664);
var start_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10664__$1,new cljs.core.Keyword(null,"start-position","start-position",-576733324));
var end_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10664__$1,new cljs.core.Keyword(null,"end-position","end-position",-1045268232));
var life = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(0.0);
var start_length = zombie.util.math.distance(start_position,end_position);
var dir = zombie.util.math.direction(start_position,end_position);
var rot = zombie.util.threejs.direction_tuple__GT_rotation_tuple(dir);
return (function (_,___$1){
var ___$2 = cljs.core.deref((function (){var G__10665 = zombie.state.databases.game;
var G__10666 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882)], null);
return (threeagent.core.cursor.cljs$core$IFn$_invoke$arity$2 ? threeagent.core.cursor.cljs$core$IFn$_invoke$arity$2(G__10665,G__10666) : threeagent.core.cursor.call(null,G__10665,G__10666));
})());
var dt = cljs.core.deref((function (){var G__10667 = zombie.state.databases.game;
var G__10668 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delta-time","delta-time",-1123875803)], null);
return (threeagent.core.cursor.cljs$core$IFn$_invoke$arity$2 ? threeagent.core.cursor.cljs$core$IFn$_invoke$arity$2(G__10667,G__10668) : threeagent.core.cursor.call(null,G__10667,G__10668));
})());
var ___$3 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(life,cljs.core._PLUS_,dt);
var n = (cljs.core.deref(life) / 0.2);
var length = (start_length * (1.0 - n));
if((1.0 < n)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(zombie.state.databases.rays,cljs.core.dissoc,id);
} else {
}

return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),end_position,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),rot], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"box","box",1530920394),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(length / (-2))], null),new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.Keyword("material","laser-bullet","material/laser-bullet",-1428547179).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(zombie.state.databases.assets)),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.1,0.1,(- length)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instance","instance",-2121349050),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword("light","laser-bullet","light/laser-bullet",-687019642).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(zombie.state.databases.assets))], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
});
});
zombie.scene.effects.health_bar = (function zombie$scene$effects$health_bar(_id,p__10673){
var map__10674 = p__10673;
var map__10674__$1 = cljs.core.__destructure_map(map__10674);
var percent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10674__$1,new cljs.core.Keyword(null,"percent","percent",2031453817));
var visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10674__$1,new cljs.core.Keyword(null,"visible?","visible?",2129863715));
var entity_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10674__$1,new cljs.core.Keyword(null,"entity-id","entity-id",1485898093));
var length = (percent * 1.5);
var x_offset = (length - 1.5);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_offset,(0),(0)], null)], null),(cljs.core.truth_(visible_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"box","box",1530920394),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.Keyword("material","health-bar","material/health-bar",-1419435050).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(zombie.state.databases.assets)),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),zombie.util.math.pi4,(0)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [length,0.1,0.1], null),new cljs.core.Keyword(null,"follow","follow",-809317662),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),entity_id,new cljs.core.Keyword(null,"position-offset","position-offset",1257061411),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(0)], null)], null)], null)], null):null)], null);
});
zombie.scene.effects.particles = (function zombie$scene$effects$particles(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),(function (){var iter__4611__auto__ = (function zombie$scene$effects$particles_$_iter__10675(s__10676){
return (new cljs.core.LazySeq(null,(function (){
var s__10676__$1 = s__10676;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__10676__$1);
if(temp__5753__auto__){
var s__10676__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10676__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__10676__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__10678 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__10677 = (0);
while(true){
if((i__10677 < size__4610__auto__)){
var vec__10683 = cljs.core._nth(c__4609__auto__,i__10677);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10683,(0),null);
var particle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10683,(1),null);
cljs.core.chunk_append(b__10678,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.effects.particle_system,id,particle], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__10727 = (i__10677 + (1));
i__10677 = G__10727;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10678),zombie$scene$effects$particles_$_iter__10675(cljs.core.chunk_rest(s__10676__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10678),null);
}
} else {
var vec__10686 = cljs.core.first(s__10676__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10686,(0),null);
var particle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10686,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.effects.particle_system,id,particle], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),zombie$scene$effects$particles_$_iter__10675(cljs.core.rest(s__10676__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.deref(zombie.state.databases.particles));
})()], null);
});
zombie.scene.effects.health_bars = (function zombie$scene$effects$health_bars(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),(function (){var iter__4611__auto__ = (function zombie$scene$effects$health_bars_$_iter__10689(s__10690){
return (new cljs.core.LazySeq(null,(function (){
var s__10690__$1 = s__10690;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__10690__$1);
if(temp__5753__auto__){
var s__10690__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10690__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__10690__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__10692 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__10691 = (0);
while(true){
if((i__10691 < size__4610__auto__)){
var vec__10695 = cljs.core._nth(c__4609__auto__,i__10691);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10695,(0),null);
var cfg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10695,(1),null);
cljs.core.chunk_append(b__10692,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.effects.health_bar,id,cfg], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__10728 = (i__10691 + (1));
i__10691 = G__10728;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10692),zombie$scene$effects$health_bars_$_iter__10689(cljs.core.chunk_rest(s__10690__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10692),null);
}
} else {
var vec__10698 = cljs.core.first(s__10690__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10698,(0),null);
var cfg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10698,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.effects.health_bar,id,cfg], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),zombie$scene$effects$health_bars_$_iter__10689(cljs.core.rest(s__10690__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.deref(zombie.state.databases.health_bars));
})()], null);
});
zombie.scene.effects.rays = (function zombie$scene$effects$rays(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),(function (){var iter__4611__auto__ = (function zombie$scene$effects$rays_$_iter__10702(s__10703){
return (new cljs.core.LazySeq(null,(function (){
var s__10703__$1 = s__10703;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__10703__$1);
if(temp__5753__auto__){
var s__10703__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10703__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__10703__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__10705 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__10704 = (0);
while(true){
if((i__10704 < size__4610__auto__)){
var vec__10706 = cljs.core._nth(c__4609__auto__,i__10704);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10706,(0),null);
var cfg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10706,(1),null);
cljs.core.chunk_append(b__10705,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.effects.ray,id,cfg], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__10729 = (i__10704 + (1));
i__10704 = G__10729;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10705),zombie$scene$effects$rays_$_iter__10702(cljs.core.chunk_rest(s__10703__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10705),null);
}
} else {
var vec__10714 = cljs.core.first(s__10703__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10714,(0),null);
var cfg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10714,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.effects.ray,id,cfg], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),zombie$scene$effects$rays_$_iter__10702(cljs.core.rest(s__10703__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.deref(zombie.state.databases.rays));
})()], null);
});
zombie.scene.effects.render = (function zombie$scene$effects$render(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.effects.particles], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.effects.health_bars], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.effects.rays], null)], null);
});

//# sourceMappingURL=zombie.scene.effects.js.map
