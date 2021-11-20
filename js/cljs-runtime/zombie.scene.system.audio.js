goog.provide('zombie.scene.system.audio');
var module$node_modules$three$build$three_module=shadow.js.require("module$node_modules$three$build$three_module", {});
var module$node_modules$howler$dist$howler=shadow.js.require("module$node_modules$howler$dist$howler", {});
zombie.scene.system.audio.v1 = (new module$node_modules$three$build$three_module.Vector3());
zombie.scene.system.audio.v2 = (new module$node_modules$three$build$three_module.Vector3());
zombie.scene.system.audio.v3 = (new module$node_modules$three$build$three_module.Vector3());
zombie.scene.system.audio.quat1 = (new module$node_modules$three$build$three_module.Quaternion());
zombie.scene.system.audio.set_to_world_position_BANG_ = (function zombie$scene$system$audio$set_to_world_position_BANG_(howl,obj,sound_id){
var world_pos = obj.getWorldPosition(zombie.scene.system.audio.v1);
var world_dir = obj.getWorldDirection(zombie.scene.system.audio.v2);
var world_quat = obj.getWorldQuaternion(zombie.scene.system.audio.quat1);
var world_up = zombie.scene.system.audio.v3.copy(obj.up).applyQuaternion(world_quat);
howl.orientation(world_dir.x,world_dir.y,world_dir.z,world_up.x,world_up.y,world_up.z);

return howl.pos(world_pos.x,world_pos.y,world_pos.z,sound_id);
});
zombie.scene.system.audio.random_sfx = (function zombie$scene$system$audio$random_sfx(type){
return cljs.core.rand_nth(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(zombie.state.databases.assets),type));
});
zombie.scene.system.audio.play_sound_BANG_ = (function zombie$scene$system$audio$play_sound_BANG_(local_state,obj,p__13298){
var map__13299 = p__13298;
var map__13299__$1 = cljs.core.__destructure_map(map__13299);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13299__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var howl = zombie.scene.system.audio.random_sfx(type);
var sound_id = howl.play();
return zombie.scene.system.audio.set_to_world_position_BANG_(howl,obj,sound_id);
});
zombie.scene.system.audio.play_sound_at_position_BANG_ = (function zombie$scene$system$audio$play_sound_at_position_BANG_(p__13300){
var map__13301 = p__13300;
var map__13301__$1 = cljs.core.__destructure_map(map__13301);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13301__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13301__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var vec__13302 = position;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13302,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13302,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13302,(2),null);
var howl = zombie.scene.system.audio.random_sfx(type);
var sound_id = howl.play();
return howl.pos(x,y,z,sound_id);
});
zombie.scene.system.audio.register_listeners_BANG_ = (function zombie$scene$system$audio$register_listeners_BANG_(bus,local_state,entity_id,obj){
return zombie.util.messaging.on(bus,entity_id,new cljs.core.Keyword("audio","play-sound","audio/play-sound",-1045916618),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(zombie.scene.system.audio.play_sound_BANG_,local_state,obj));
});

/**
* @constructor
 * @implements {threeagent.system.ISystem}
*/
zombie.scene.system.audio.AudioSystem = (function (bus,local_state){
this.bus = bus;
this.local_state = local_state;
});
(zombie.scene.system.audio.AudioSystem.prototype.threeagent$system$ISystem$ = cljs.core.PROTOCOL_SENTINEL);

(zombie.scene.system.audio.AudioSystem.prototype.threeagent$system$ISystem$init$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return zombie.util.messaging.on(self__.bus,new cljs.core.Keyword("audio","play-sound","audio/play-sound",-1045916618),zombie.scene.system.audio.play_sound_at_position_BANG_);
}));

(zombie.scene.system.audio.AudioSystem.prototype.threeagent$system$ISystem$destroy$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(zombie.scene.system.audio.AudioSystem.prototype.threeagent$system$ISystem$on_entity_added$arity$5 = (function (_,___$1,key,obj,p__13305){
var self__ = this;
var map__13306 = p__13305;
var map__13306__$1 = cljs.core.__destructure_map(map__13306);
var listener_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13306__$1,new cljs.core.Keyword(null,"listener?","listener?",-1382178204));
var ___$2 = this;
if(cljs.core.truth_(listener_QMARK_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.local_state,cljs.core.assoc,new cljs.core.Keyword(null,"listener","listener",882147248),obj);
} else {
}

return zombie.scene.system.audio.register_listeners_BANG_(self__.bus,self__.local_state,key,obj);
}));

(zombie.scene.system.audio.AudioSystem.prototype.threeagent$system$ISystem$on_entity_removed$arity$5 = (function (_,___$1,_key,_obj,p__13307){
var self__ = this;
var map__13308 = p__13307;
var map__13308__$1 = cljs.core.__destructure_map(map__13308);
var listener_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13308__$1,new cljs.core.Keyword(null,"listener?","listener?",-1382178204));
var ___$2 = this;
if(cljs.core.truth_(listener_QMARK_)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.local_state,cljs.core.dissoc,new cljs.core.Keyword(null,"listener","listener",882147248));
} else {
return null;
}
}));

(zombie.scene.system.audio.AudioSystem.prototype.threeagent$system$ISystem$tick$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
var temp__5753__auto__ = new cljs.core.Keyword(null,"listener","listener",882147248).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.local_state));
if(cljs.core.truth_(temp__5753__auto__)){
var listener = temp__5753__auto__;
return zombie.scene.system.audio.set_to_world_position_BANG_(module$node_modules$howler$dist$howler.Howler,listener,null);
} else {
return null;
}
}));

(zombie.scene.system.audio.AudioSystem.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bus","bus",549657924,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null)], null);
}));

(zombie.scene.system.audio.AudioSystem.cljs$lang$type = true);

(zombie.scene.system.audio.AudioSystem.cljs$lang$ctorStr = "zombie.scene.system.audio/AudioSystem");

(zombie.scene.system.audio.AudioSystem.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"zombie.scene.system.audio/AudioSystem");
}));

/**
 * Positional factory function for zombie.scene.system.audio/AudioSystem.
 */
zombie.scene.system.audio.__GT_AudioSystem = (function zombie$scene$system$audio$__GT_AudioSystem(bus,local_state){
return (new zombie.scene.system.audio.AudioSystem(bus,local_state));
});

zombie.scene.system.audio.create = (function zombie$scene$system$audio$create(event_bus){
return zombie.scene.system.audio.__GT_AudioSystem(event_bus,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=zombie.scene.system.audio.js.map
