goog.provide('zombie.scene.system.animation');
var module$node_modules$three$build$three_module=shadow.js.require("module$node_modules$three$build$three_module", {});
zombie.scene.system.animation.set_animation_BANG_ = (function zombie$scene$system$animation$set_animation_BANG_(local_state,entity_id,p__12919){
var map__12920 = p__12919;
var map__12920__$1 = cljs.core.__destructure_map(map__12920);
var animation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12920__$1,new cljs.core.Keyword(null,"animation","animation",-1248293244));
var loop_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12920__$1,new cljs.core.Keyword(null,"loop?","loop?",457687798));
var layer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12920__$1,new cljs.core.Keyword(null,"layer","layer",-1601820589));
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12920__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var clamp_when_finished_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12920__$1,new cljs.core.Keyword(null,"clamp-when-finished?","clamp-when-finished?",1915888022));
var sync_layer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12920__$1,new cljs.core.Keyword(null,"sync-layer","sync-layer",1468602624));
var loop = (cljs.core.truth_(loop_QMARK_)?module$node_modules$three$build$three_module.LoopRepeat:module$node_modules$three$build$three_module.LoopOnce);
var map__12923 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(local_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id], null));
var map__12923__$1 = cljs.core.__destructure_map(map__12923);
var mixer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12923__$1,new cljs.core.Keyword(null,"mixer","mixer",-120313315));
var clip = cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(zombie.state.databases.assets),animation));
var old_action = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(local_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,new cljs.core.Keyword(null,"layers","layers",1944875032),layer], null));
var sync_action = (cljs.core.truth_(sync_layer)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(local_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,new cljs.core.Keyword(null,"layers","layers",1944875032),sync_layer], null)):null);
var action = mixer.clipAction(clip);
if(cljs.core.truth_((function (){var and__4210__auto__ = old_action;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_action,action);
} else {
return and__4210__auto__;
}
})())){
old_action.stop();
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(local_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,new cljs.core.Keyword(null,"layers","layers",1944875032),layer], null),action);

(action.clampWhenFinished = (function (){var or__4212__auto__ = clamp_when_finished_QMARK_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return false;
}
})());

action.setLoop(loop);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(module$node_modules$three$build$three_module.LoopOnce,loop)){
action.reset();
} else {
if(cljs.core.not(action.isRunning())){
action.reset();
} else {
}
}

if(cljs.core.truth_(weight)){
(action.weight = weight);
} else {
}

if(cljs.core.truth_(sync_action)){
action.syncWith(sync_action);
} else {
}

return action.play();
});
zombie.scene.system.animation.stop_animation_BANG_ = (function zombie$scene$system$animation$stop_animation_BANG_(local_state,entity_id,p__12927){
var map__12928 = p__12927;
var map__12928__$1 = cljs.core.__destructure_map(map__12928);
var animation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12928__$1,new cljs.core.Keyword(null,"animation","animation",-1248293244));
var clip = cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(zombie.state.databases.assets),animation));
var mixer = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(local_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,new cljs.core.Keyword(null,"mixer","mixer",-120313315)], null));
var action = mixer.clipAction(clip);
if(cljs.core.truth_((function (){var and__4210__auto__ = action;
if(cljs.core.truth_(and__4210__auto__)){
return action.isRunning();
} else {
return and__4210__auto__;
}
})())){
return action.stop();
} else {
return null;
}
});
zombie.scene.system.animation.stop_all_animation_BANG_ = (function zombie$scene$system$animation$stop_all_animation_BANG_(local_state,entity_id,_cfg){
var mixer = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(local_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,new cljs.core.Keyword(null,"mixer","mixer",-120313315)], null));
return mixer.stopAllAction();
});
zombie.scene.system.animation.set_look_at_BANG_ = (function zombie$scene$system$animation$set_look_at_BANG_(obj,p__12929){
var vec__12930 = p__12929;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12930,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12930,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12930,(2),null);
if(cljs.core.truth_((function (){var and__4210__auto__ = x;
if(cljs.core.truth_(and__4210__auto__)){
return z;
} else {
return and__4210__auto__;
}
})())){
return obj.lookAt(x,y,z);
} else {
return null;
}
});
zombie.scene.system.animation.tick_entity_BANG_ = (function zombie$scene$system$animation$tick_entity_BANG_(delta_time,_entity_id,p__12933){
var map__12934 = p__12933;
var map__12934__$1 = cljs.core.__destructure_map(map__12934);
var mixer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12934__$1,new cljs.core.Keyword(null,"mixer","mixer",-120313315));
var lower_look_at_target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12934__$1,new cljs.core.Keyword(null,"lower-look-at-target","lower-look-at-target",1866511835));
var upper_look_at_target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12934__$1,new cljs.core.Keyword(null,"upper-look-at-target","upper-look-at-target",242071727));
var lower_bone = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12934__$1,new cljs.core.Keyword(null,"lower-bone","lower-bone",1574029637));
var upper_bone = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12934__$1,new cljs.core.Keyword(null,"upper-bone","upper-bone",-697343399));
mixer.update(delta_time);

if(cljs.core.truth_(lower_look_at_target)){
zombie.scene.system.animation.set_look_at_BANG_(lower_bone,lower_look_at_target);
} else {
}

if(cljs.core.truth_(upper_look_at_target)){
return zombie.scene.system.animation.set_look_at_BANG_(upper_bone,upper_look_at_target);
} else {
return null;
}
});
zombie.scene.system.animation.register_handlers_BANG_ = (function zombie$scene$system$animation$register_handlers_BANG_(local_state,event_bus,entity_id){
zombie.util.messaging.on(event_bus,entity_id,new cljs.core.Keyword("animation","set-upper-look-at-target","animation/set-upper-look-at-target",-884500220),(function (p1__12938_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(local_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,new cljs.core.Keyword(null,"upper-look-at-target","upper-look-at-target",242071727)], null),p1__12938_SHARP_);
}));

zombie.util.messaging.on(event_bus,entity_id,new cljs.core.Keyword("animation","set-lower-look-at-target","animation/set-lower-look-at-target",-800600326),(function (p1__12939_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(local_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,new cljs.core.Keyword(null,"lower-look-at-target","lower-look-at-target",1866511835)], null),p1__12939_SHARP_);
}));

zombie.util.messaging.on(event_bus,entity_id,new cljs.core.Keyword("animation","stop-all","animation/stop-all",-1604963053),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(zombie.scene.system.animation.stop_all_animation_BANG_,local_state,entity_id));

zombie.util.messaging.on(event_bus,entity_id,new cljs.core.Keyword("animation","stop","animation/stop",-876665450),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(zombie.scene.system.animation.stop_animation_BANG_,local_state,entity_id));

return zombie.util.messaging.on(event_bus,entity_id,new cljs.core.Keyword("animation","play","animation/play",416602782),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(zombie.scene.system.animation.set_animation_BANG_,local_state,entity_id));
});

/**
* @constructor
 * @implements {threeagent.system.ISystem}
*/
zombie.scene.system.animation.AnimationSystem = (function (event_bus,local_state){
this.event_bus = event_bus;
this.local_state = local_state;
});
(zombie.scene.system.animation.AnimationSystem.prototype.threeagent$system$ISystem$ = cljs.core.PROTOCOL_SENTINEL);

(zombie.scene.system.animation.AnimationSystem.prototype.threeagent$system$ISystem$init$arity$2 = (function (_,p__12940){
var self__ = this;
var map__12941 = p__12940;
var map__12941__$1 = cljs.core.__destructure_map(map__12941);
var ___$1 = this;
return null;
}));

(zombie.scene.system.animation.AnimationSystem.prototype.threeagent$system$ISystem$destroy$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(zombie.scene.system.animation.AnimationSystem.prototype.threeagent$system$ISystem$on_entity_added$arity$5 = (function (_,___$1,key,obj,p__12944){
var self__ = this;
var map__12945 = p__12944;
var map__12945__$1 = cljs.core.__destructure_map(map__12945);
var cfg = map__12945__$1;
var clip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12945__$1,new cljs.core.Keyword(null,"clip","clip",830998499));
var ___$2 = this;
var model = (obj.children[(0)]);
var mixer = (new module$node_modules$three$build$three_module.AnimationMixer(model));
var upper_bone = zombie.util.threejs.get_in_object(obj,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Root","HipsCtrl","Hips","Spine"], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.local_state,cljs.core.assoc,key,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mixer","mixer",-120313315),mixer,new cljs.core.Keyword(null,"object","object",1474613949),obj,new cljs.core.Keyword(null,"upper-bone","upper-bone",-697343399),upper_bone,new cljs.core.Keyword(null,"lower-bone","lower-bone",1574029637),obj], null));

zombie.scene.system.animation.register_handlers_BANG_(self__.local_state,self__.event_bus,key);

if(cljs.core.truth_(clip)){
return zombie.scene.system.animation.set_animation_BANG_(self__.local_state,key,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cfg,new cljs.core.Keyword(null,"animation","animation",-1248293244),clip));
} else {
return null;
}
}));

(zombie.scene.system.animation.AnimationSystem.prototype.threeagent$system$ISystem$on_entity_removed$arity$5 = (function (_,___$1,key,_obj,_config){
var self__ = this;
var ___$2 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.local_state,cljs.core.dissoc,key);
}));

(zombie.scene.system.animation.AnimationSystem.prototype.threeagent$system$ISystem$tick$arity$2 = (function (_,delta_time){
var self__ = this;
var ___$1 = this;
var seq__12950 = cljs.core.seq(cljs.core.deref(self__.local_state));
var chunk__12951 = null;
var count__12952 = (0);
var i__12953 = (0);
while(true){
if((i__12953 < count__12952)){
var vec__12960 = chunk__12951.cljs$core$IIndexed$_nth$arity$2(null,i__12953);
var entity_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12960,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12960,(1),null);
zombie.scene.system.animation.tick_entity_BANG_(delta_time,entity_id,data);


var G__12966 = seq__12950;
var G__12967 = chunk__12951;
var G__12968 = count__12952;
var G__12969 = (i__12953 + (1));
seq__12950 = G__12966;
chunk__12951 = G__12967;
count__12952 = G__12968;
i__12953 = G__12969;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__12950);
if(temp__5753__auto__){
var seq__12950__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12950__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__12950__$1);
var G__12970 = cljs.core.chunk_rest(seq__12950__$1);
var G__12971 = c__4638__auto__;
var G__12972 = cljs.core.count(c__4638__auto__);
var G__12973 = (0);
seq__12950 = G__12970;
chunk__12951 = G__12971;
count__12952 = G__12972;
i__12953 = G__12973;
continue;
} else {
var vec__12963 = cljs.core.first(seq__12950__$1);
var entity_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12963,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12963,(1),null);
zombie.scene.system.animation.tick_entity_BANG_(delta_time,entity_id,data);


var G__12974 = cljs.core.next(seq__12950__$1);
var G__12975 = null;
var G__12976 = (0);
var G__12977 = (0);
seq__12950 = G__12974;
chunk__12951 = G__12975;
count__12952 = G__12976;
i__12953 = G__12977;
continue;
}
} else {
return null;
}
}
break;
}
}));

(zombie.scene.system.animation.AnimationSystem.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event-bus","event-bus",453922276,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null)], null);
}));

(zombie.scene.system.animation.AnimationSystem.cljs$lang$type = true);

(zombie.scene.system.animation.AnimationSystem.cljs$lang$ctorStr = "zombie.scene.system.animation/AnimationSystem");

(zombie.scene.system.animation.AnimationSystem.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"zombie.scene.system.animation/AnimationSystem");
}));

/**
 * Positional factory function for zombie.scene.system.animation/AnimationSystem.
 */
zombie.scene.system.animation.__GT_AnimationSystem = (function zombie$scene$system$animation$__GT_AnimationSystem(event_bus,local_state){
return (new zombie.scene.system.animation.AnimationSystem(event_bus,local_state));
});

zombie.scene.system.animation.create = (function zombie$scene$system$animation$create(event_bus){
return zombie.scene.system.animation.__GT_AnimationSystem(event_bus,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=zombie.scene.system.animation.js.map
