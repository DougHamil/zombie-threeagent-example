goog.provide('zombie.scene.system.physics.core');
var module$node_modules$three$build$three_module=shadow.js.require("module$node_modules$three$build$three_module", {});
var module$node_modules$matter_js$build$matter=shadow.js.require("module$node_modules$matter_js$build$matter", {});
if((typeof zombie !== 'undefined') && (typeof zombie.scene !== 'undefined') && (typeof zombie.scene.system !== 'undefined') && (typeof zombie.scene.system.physics !== 'undefined') && (typeof zombie.scene.system.physics.core !== 'undefined') && (typeof zombie.scene.system.physics.core.m_v1 !== 'undefined')){
} else {
zombie.scene.system.physics.core.m_v1 = module$node_modules$matter_js$build$matter.Vector.create((0),(0));
}
if((typeof zombie !== 'undefined') && (typeof zombie.scene !== 'undefined') && (typeof zombie.scene.system !== 'undefined') && (typeof zombie.scene.system.physics !== 'undefined') && (typeof zombie.scene.system.physics.core !== 'undefined') && (typeof zombie.scene.system.physics.core.up !== 'undefined')){
} else {
zombie.scene.system.physics.core.up = (new module$node_modules$three$build$three_module.Vector3((0),(1),(0)));
}
if((typeof zombie !== 'undefined') && (typeof zombie.scene !== 'undefined') && (typeof zombie.scene.system !== 'undefined') && (typeof zombie.scene.system.physics !== 'undefined') && (typeof zombie.scene.system.physics.core !== 'undefined') && (typeof zombie.scene.system.physics.core.v1 !== 'undefined')){
} else {
zombie.scene.system.physics.core.v1 = (new module$node_modules$three$build$three_module.Vector3((0),(0),(0)));
}
if((typeof zombie !== 'undefined') && (typeof zombie.scene !== 'undefined') && (typeof zombie.scene.system !== 'undefined') && (typeof zombie.scene.system.physics !== 'undefined') && (typeof zombie.scene.system.physics.core !== 'undefined') && (typeof zombie.scene.system.physics.core.physics_scale !== 'undefined')){
} else {
zombie.scene.system.physics.core.physics_scale = 10.0;
}
zombie.scene.system.physics.core.tuple__GT_world_position = (function zombie$scene$system$physics$core$tuple__GT_world_position(p__13138){
var vec__13139 = p__13138;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13139,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13139,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13139,(2),null);
return cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x * zombie.scene.system.physics.core.physics_scale),new cljs.core.Keyword(null,"y","y",-1757859776),(z * zombie.scene.system.physics.core.physics_scale)], null));
});
zombie.scene.system.physics.core.physics_vec__GT_vector3 = (function zombie$scene$system$physics$core$physics_vec__GT_vector3(y,v){
return (new module$node_modules$three$build$three_module.Vector3((v.x / zombie.scene.system.physics.core.physics_scale),y,(v.y / zombie.scene.system.physics.core.physics_scale)));
});
zombie.scene.system.physics.core.tuple__GT_into_physics_vec = (function zombie$scene$system$physics$core$tuple__GT_into_physics_vec(p__13142,v){
var vec__13143 = p__13142;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13143,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13143,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13143,(2),null);
(v.x = x);

(v.y = z);

return v;
});
zombie.scene.system.physics.core.update_transforms_BANG_ = (function zombie$scene$system$physics$core$update_transforms_BANG_(local_state){
var entities = new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(local_state));
var seq__13146 = cljs.core.seq(entities);
var chunk__13147 = null;
var count__13148 = (0);
var i__13149 = (0);
while(true){
if((i__13149 < count__13148)){
var vec__13158 = chunk__13147.cljs$core$IIndexed$_nth$arity$2(null,i__13149);
var object = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13158,(0),null);
var map__13161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13158,(1),null);
var map__13161__$1 = cljs.core.__destructure_map(map__13161);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13161__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var angle_offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13161__$1,new cljs.core.Keyword(null,"angle-offset","angle-offset",-824819163));
var ignore_rotation_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13161__$1,new cljs.core.Keyword(null,"ignore-rotation?","ignore-rotation?",-683450086));
var body_pos_13199 = body.position;
var parent_13200 = object.parent;
var wx_13201 = (body_pos_13199.x / zombie.scene.system.physics.core.physics_scale);
var wz_13202 = (body_pos_13199.y / zombie.scene.system.physics.core.physics_scale);
var world_pos_13203 = zombie.scene.system.physics.core.v1.set(wx_13201,(0),wz_13202);
var local_pos_13204 = parent_13200.worldToLocal(world_pos_13203);
object.position.setX(local_pos_13204.x);

object.position.setZ(local_pos_13204.z);

if(cljs.core.truth_(ignore_rotation_QMARK_)){
} else {
var angle_13205 = (body.angle - angle_offset);
object.setRotationFromAxisAngle(zombie.scene.system.physics.core.up,angle_13205);
}


var G__13206 = seq__13146;
var G__13207 = chunk__13147;
var G__13208 = count__13148;
var G__13209 = (i__13149 + (1));
seq__13146 = G__13206;
chunk__13147 = G__13207;
count__13148 = G__13208;
i__13149 = G__13209;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__13146);
if(temp__5753__auto__){
var seq__13146__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13146__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__13146__$1);
var G__13210 = cljs.core.chunk_rest(seq__13146__$1);
var G__13211 = c__4638__auto__;
var G__13212 = cljs.core.count(c__4638__auto__);
var G__13213 = (0);
seq__13146 = G__13210;
chunk__13147 = G__13211;
count__13148 = G__13212;
i__13149 = G__13213;
continue;
} else {
var vec__13162 = cljs.core.first(seq__13146__$1);
var object = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13162,(0),null);
var map__13165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13162,(1),null);
var map__13165__$1 = cljs.core.__destructure_map(map__13165);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13165__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var angle_offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13165__$1,new cljs.core.Keyword(null,"angle-offset","angle-offset",-824819163));
var ignore_rotation_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13165__$1,new cljs.core.Keyword(null,"ignore-rotation?","ignore-rotation?",-683450086));
var body_pos_13214 = body.position;
var parent_13215 = object.parent;
var wx_13216 = (body_pos_13214.x / zombie.scene.system.physics.core.physics_scale);
var wz_13217 = (body_pos_13214.y / zombie.scene.system.physics.core.physics_scale);
var world_pos_13218 = zombie.scene.system.physics.core.v1.set(wx_13216,(0),wz_13217);
var local_pos_13219 = parent_13215.worldToLocal(world_pos_13218);
object.position.setX(local_pos_13219.x);

object.position.setZ(local_pos_13219.z);

if(cljs.core.truth_(ignore_rotation_QMARK_)){
} else {
var angle_13220 = (body.angle - angle_offset);
object.setRotationFromAxisAngle(zombie.scene.system.physics.core.up,angle_13220);
}


var G__13221 = cljs.core.next(seq__13146__$1);
var G__13222 = null;
var G__13223 = (0);
var G__13224 = (0);
seq__13146 = G__13221;
chunk__13147 = G__13222;
count__13148 = G__13223;
i__13149 = G__13224;
continue;
}
} else {
return null;
}
}
break;
}
});
zombie.scene.system.physics.core.apply_movement_BANG_ = (function zombie$scene$system$physics$core$apply_movement_BANG_(local_state){
var seq__13166 = cljs.core.seq(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(local_state)));
var chunk__13167 = null;
var count__13168 = (0);
var i__13169 = (0);
while(true){
if((i__13169 < count__13168)){
var vec__13178 = chunk__13167.cljs$core$IIndexed$_nth$arity$2(null,i__13169);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13178,(0),null);
var map__13181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13178,(1),null);
var map__13181__$1 = cljs.core.__destructure_map(map__13181);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13181__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var velocity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13181__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
if(cljs.core.truth_(velocity)){
var v_13225 = velocity;
module$node_modules$matter_js$build$matter.Body.applyForce(body,body.position,zombie.scene.system.physics.core.tuple__GT_into_physics_vec(v_13225,zombie.scene.system.physics.core.m_v1));
} else {
}


var G__13226 = seq__13166;
var G__13227 = chunk__13167;
var G__13228 = count__13168;
var G__13229 = (i__13169 + (1));
seq__13166 = G__13226;
chunk__13167 = G__13227;
count__13168 = G__13228;
i__13169 = G__13229;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__13166);
if(temp__5753__auto__){
var seq__13166__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13166__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__13166__$1);
var G__13230 = cljs.core.chunk_rest(seq__13166__$1);
var G__13231 = c__4638__auto__;
var G__13232 = cljs.core.count(c__4638__auto__);
var G__13233 = (0);
seq__13166 = G__13230;
chunk__13167 = G__13231;
count__13168 = G__13232;
i__13169 = G__13233;
continue;
} else {
var vec__13182 = cljs.core.first(seq__13166__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13182,(0),null);
var map__13185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13182,(1),null);
var map__13185__$1 = cljs.core.__destructure_map(map__13185);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13185__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var velocity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13185__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
if(cljs.core.truth_(velocity)){
var v_13234 = velocity;
module$node_modules$matter_js$build$matter.Body.applyForce(body,body.position,zombie.scene.system.physics.core.tuple__GT_into_physics_vec(v_13234,zombie.scene.system.physics.core.m_v1));
} else {
}


var G__13235 = cljs.core.next(seq__13166__$1);
var G__13236 = null;
var G__13237 = (0);
var G__13238 = (0);
seq__13166 = G__13235;
chunk__13167 = G__13236;
count__13168 = G__13237;
i__13169 = G__13238;
continue;
}
} else {
return null;
}
}
break;
}
});
zombie.scene.system.physics.core.register_body_BANG_ = (function zombie$scene$system$physics$core$register_body_BANG_(local_state,obj,entity_id,body_def){
var world = new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(local_state));
var map__13186 = zombie.scene.system.physics.body.create_body(zombie.scene.system.physics.core.physics_scale,obj,body_def);
var map__13186__$1 = cljs.core.__destructure_map(map__13186);
var result = map__13186__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13186__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
(body.entityId = entity_id);

module$node_modules$matter_js$build$matter.Composite.add(world,body);

return result;
});
zombie.scene.system.physics.core.unregister_body_BANG_ = (function zombie$scene$system$physics$core$unregister_body_BANG_(local_state,body){
if(cljs.core.truth_(body)){
var world = new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(local_state));
return module$node_modules$matter_js$build$matter.Composite.remove(world,body);
} else {
return null;
}
});
zombie.scene.system.physics.core.collision__GT_map = (function zombie$scene$system$physics$core$collision__GT_map(y_pos,ray_start,collision){
var hit_point = zombie.scene.system.physics.core.physics_vec__GT_vector3((0),collision.point);
var start_point = zombie.scene.system.physics.core.physics_vec__GT_vector3((0),ray_start);
var distance = start_point.sub(hit_point).length();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),collision.body.entityId,new cljs.core.Keyword(null,"hit-normal","hit-normal",929947402),zombie.util.threejs.vector3__GT_tuple(zombie.scene.system.physics.core.physics_vec__GT_vector3((0),collision.normal).normalize()),new cljs.core.Keyword(null,"distance","distance",-1671893894),distance,new cljs.core.Keyword(null,"hit-position","hit-position",1824962160),zombie.util.threejs.vector3__GT_tuple(zombie.scene.system.physics.core.physics_vec__GT_vector3(y_pos,collision.point))], null);
});
zombie.scene.system.physics.core.on_disable_BANG_ = (function zombie$scene$system$physics$core$on_disable_BANG_(local_state,body,_payload){
return zombie.scene.system.physics.core.unregister_body_BANG_(local_state,body);
});
zombie.scene.system.physics.core.on_set_velocity_BANG_ = (function zombie$scene$system$physics$core$on_set_velocity_BANG_(local_state,entity_obj,velocity){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(local_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),entity_obj,new cljs.core.Keyword(null,"velocity","velocity",-581524355)], null),velocity);
});
zombie.scene.system.physics.core.on_apply_impulse_BANG_ = (function zombie$scene$system$physics$core$on_apply_impulse_BANG_(body,p__13187){
var vec__13188 = p__13187;
var ix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13188,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13188,(1),null);
var iz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13188,(2),null);
return module$node_modules$matter_js$build$matter.Body.applyForce(body,body.position,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),ix,new cljs.core.Keyword(null,"y","y",-1757859776),iz], null)));
});
zombie.scene.system.physics.core.register_listeners_BANG_ = (function zombie$scene$system$physics$core$register_listeners_BANG_(bus,local_state,entity_id,obj,body){
zombie.util.messaging.on(bus,entity_id,new cljs.core.Keyword("physics","disable","physics/disable",1232135877),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(zombie.scene.system.physics.core.on_disable_BANG_,local_state,body));

zombie.util.messaging.on(bus,entity_id,new cljs.core.Keyword("physics","set-velocity","physics/set-velocity",-586483352),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(zombie.scene.system.physics.core.on_set_velocity_BANG_,local_state,obj));

return zombie.util.messaging.on(bus,entity_id,new cljs.core.Keyword("physics","apply-force","physics/apply-force",594975221),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zombie.scene.system.physics.core.on_apply_impulse_BANG_,body));
});
zombie.scene.system.physics.core.on_collision_start = (function zombie$scene$system$physics$core$on_collision_start(event){
var seq__13191 = cljs.core.seq(event.pairs);
var chunk__13192 = null;
var count__13193 = (0);
var i__13194 = (0);
while(true){
if((i__13194 < count__13193)){
var p = chunk__13192.cljs$core$IIndexed$_nth$arity$2(null,i__13194);
var a_13242 = p.bodyA;
var b_13243 = p.bodyB;
var temp__5753__auto___13244 = a_13242.onCollisionStart;
if(cljs.core.truth_(temp__5753__auto___13244)){
var cb_13245 = temp__5753__auto___13244;
(cb_13245.cljs$core$IFn$_invoke$arity$0 ? cb_13245.cljs$core$IFn$_invoke$arity$0() : cb_13245.call(null));
} else {
}

var temp__5753__auto___13246 = b_13243.onCollisionStart;
if(cljs.core.truth_(temp__5753__auto___13246)){
var cb_13247 = temp__5753__auto___13246;
(cb_13247.cljs$core$IFn$_invoke$arity$0 ? cb_13247.cljs$core$IFn$_invoke$arity$0() : cb_13247.call(null));
} else {
}


var G__13248 = seq__13191;
var G__13249 = chunk__13192;
var G__13250 = count__13193;
var G__13251 = (i__13194 + (1));
seq__13191 = G__13248;
chunk__13192 = G__13249;
count__13193 = G__13250;
i__13194 = G__13251;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__13191);
if(temp__5753__auto__){
var seq__13191__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13191__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__13191__$1);
var G__13252 = cljs.core.chunk_rest(seq__13191__$1);
var G__13253 = c__4638__auto__;
var G__13254 = cljs.core.count(c__4638__auto__);
var G__13255 = (0);
seq__13191 = G__13252;
chunk__13192 = G__13253;
count__13193 = G__13254;
i__13194 = G__13255;
continue;
} else {
var p = cljs.core.first(seq__13191__$1);
var a_13257 = p.bodyA;
var b_13258 = p.bodyB;
var temp__5753__auto___13259__$1 = a_13257.onCollisionStart;
if(cljs.core.truth_(temp__5753__auto___13259__$1)){
var cb_13260 = temp__5753__auto___13259__$1;
(cb_13260.cljs$core$IFn$_invoke$arity$0 ? cb_13260.cljs$core$IFn$_invoke$arity$0() : cb_13260.call(null));
} else {
}

var temp__5753__auto___13261__$1 = b_13258.onCollisionStart;
if(cljs.core.truth_(temp__5753__auto___13261__$1)){
var cb_13262 = temp__5753__auto___13261__$1;
(cb_13262.cljs$core$IFn$_invoke$arity$0 ? cb_13262.cljs$core$IFn$_invoke$arity$0() : cb_13262.call(null));
} else {
}


var G__13263 = cljs.core.next(seq__13191__$1);
var G__13264 = null;
var G__13265 = (0);
var G__13266 = (0);
seq__13191 = G__13263;
chunk__13192 = G__13264;
count__13193 = G__13265;
i__13194 = G__13266;
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
 * @interface
 */
zombie.scene.system.physics.core.IPhysicsSystem = function(){};

var zombie$scene$system$physics$core$IPhysicsSystem$raycast_all$dyn_13267 = (function (this$,ray_start,ray_end){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (zombie.scene.system.physics.core.raycast_all[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(this$,ray_start,ray_end) : m__4510__auto__.call(null,this$,ray_start,ray_end));
} else {
var m__4508__auto__ = (zombie.scene.system.physics.core.raycast_all["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(this$,ray_start,ray_end) : m__4508__auto__.call(null,this$,ray_start,ray_end));
} else {
throw cljs.core.missing_protocol("IPhysicsSystem.raycast-all",this$);
}
}
});
zombie.scene.system.physics.core.raycast_all = (function zombie$scene$system$physics$core$raycast_all(this$,ray_start,ray_end){
if((((!((this$ == null)))) && ((!((this$.zombie$scene$system$physics$core$IPhysicsSystem$raycast_all$arity$3 == null)))))){
return this$.zombie$scene$system$physics$core$IPhysicsSystem$raycast_all$arity$3(this$,ray_start,ray_end);
} else {
return zombie$scene$system$physics$core$IPhysicsSystem$raycast_all$dyn_13267(this$,ray_start,ray_end);
}
});


/**
* @constructor
 * @implements {zombie.scene.system.physics.core.IPhysicsSystem}
 * @implements {threeagent.system.ISystem}
*/
zombie.scene.system.physics.core.PhysicsSystem = (function (bus,local_state,delta_history){
this.bus = bus;
this.local_state = local_state;
this.delta_history = delta_history;
});
(zombie.scene.system.physics.core.PhysicsSystem.prototype.zombie$scene$system$physics$core$IPhysicsSystem$ = cljs.core.PROTOCOL_SENTINEL);

(zombie.scene.system.physics.core.PhysicsSystem.prototype.zombie$scene$system$physics$core$IPhysicsSystem$raycast_all$arity$3 = (function (_,ray_start,ray_end){
var self__ = this;
var ___$1 = this;
var map__13195 = cljs.core.deref(self__.local_state);
var map__13195__$1 = cljs.core.__destructure_map(map__13195);
var world = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13195__$1,new cljs.core.Keyword(null,"world","world",-418292623));
var bodies = module$node_modules$matter_js$build$matter.Composite.allBodies(world);
var y_pos = cljs.core.second(ray_start);
var ray_start__$1 = zombie.scene.system.physics.core.tuple__GT_world_position(ray_start);
var ray_end__$1 = zombie.scene.system.physics.core.tuple__GT_world_position(ray_end);
var hits = module$zombie$scene$system$physics$raycast.raycast(module$node_modules$matter_js$build$matter.Query.ray(bodies,ray_start__$1,ray_end__$1),ray_start__$1,ray_end__$1);
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"depth","depth",1768663640),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(zombie.scene.system.physics.core.collision__GT_map,y_pos,ray_start__$1),hits));
}));

(zombie.scene.system.physics.core.PhysicsSystem.prototype.threeagent$system$ISystem$ = cljs.core.PROTOCOL_SENTINEL);

(zombie.scene.system.physics.core.PhysicsSystem.prototype.threeagent$system$ISystem$init$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
var engine = module$node_modules$matter_js$build$matter.Engine.create(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gravity","gravity",-1815198225),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)], null)));
var runner = module$node_modules$matter_js$build$matter.Runner.create();
var render = module$node_modules$matter_js$build$matter.Render.create(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.Keyword(null,"physics-debug-canvas","physics-debug-canvas",802066213).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(zombie.state.databases.ui)),new cljs.core.Keyword(null,"engine","engine",1459054265),engine,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"showDebug","showDebug",2107047949),true,new cljs.core.Keyword(null,"width","width",-384071477),(400),new cljs.core.Keyword(null,"height","height",1025178622),(400),new cljs.core.Keyword(null,"pixelRatio","pixelRatio",625333883),"auto",new cljs.core.Keyword(null,"showConvexHulls","showConvexHulls",-1166880620),true,new cljs.core.Keyword(null,"showVelocity","showVelocity",-1058606723),true], null)], null)));
var world = engine.world;
module$node_modules$matter_js$build$matter.Events.on(runner,"beforeUpdate",(function (){
return zombie.scene.system.physics.core.apply_movement_BANG_(self__.local_state);
}));

module$node_modules$matter_js$build$matter.Events.on(runner,"afterUpdate",(function (){
module$node_modules$matter_js$build$matter.Render.lookAt(render,module$node_modules$matter_js$build$matter.Composite.allBodies(world));

return zombie.scene.system.physics.core.update_transforms_BANG_(self__.local_state);
}));

module$node_modules$matter_js$build$matter.Events.on(engine,"collisionStart",zombie.scene.system.physics.core.on_collision_start);

module$node_modules$matter_js$build$matter.Runner.run(runner,engine);

module$node_modules$matter_js$build$matter.Render.run(render);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.local_state,cljs.core.assoc,new cljs.core.Keyword(null,"render","render",-1408033454),render,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"runner","runner",1945441304),runner,new cljs.core.Keyword(null,"engine","engine",1459054265),engine,new cljs.core.Keyword(null,"world","world",-418292623),world,new cljs.core.Keyword(null,"objects","objects",2099713734),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"entities","entities",1940967403),cljs.core.PersistentArrayMap.EMPTY], 0));
}));

(zombie.scene.system.physics.core.PhysicsSystem.prototype.threeagent$system$ISystem$destroy$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
module$node_modules$matter_js$build$matter.Runner.stop(new cljs.core.Keyword(null,"runner","runner",1945441304).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.local_state)));

return module$node_modules$matter_js$build$matter.Render.stop(new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.local_state)));
}));

(zombie.scene.system.physics.core.PhysicsSystem.prototype.threeagent$system$ISystem$on_entity_added$arity$5 = (function (_,___$1,entity_id,obj,p__13196){
var self__ = this;
var map__13197 = p__13196;
var map__13197__$1 = cljs.core.__destructure_map(map__13197);
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13197__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var ignore_rotation_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13197__$1,new cljs.core.Keyword(null,"ignore-rotation?","ignore-rotation?",-683450086));
var position_offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13197__$1,new cljs.core.Keyword(null,"position-offset","position-offset",1257061411));
var ___$2 = this;
var map__13198 = zombie.scene.system.physics.core.register_body_BANG_(self__.local_state,obj,entity_id,parts);
var map__13198__$1 = cljs.core.__destructure_map(map__13198);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13198__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var angle_offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13198__$1,new cljs.core.Keyword(null,"angle-offset","angle-offset",-824819163));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.local_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),obj], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),entity_id,new cljs.core.Keyword(null,"ignore-rotation?","ignore-rotation?",-683450086),ignore_rotation_QMARK_,new cljs.core.Keyword(null,"angle-offset","angle-offset",-824819163),angle_offset,new cljs.core.Keyword(null,"position-offset","position-offset",1257061411),position_offset,new cljs.core.Keyword(null,"body","body",-2049205669),body], null));

if(cljs.core.truth_(entity_id)){
return zombie.scene.system.physics.core.register_listeners_BANG_(self__.bus,self__.local_state,entity_id,obj,body);
} else {
return null;
}
}));

(zombie.scene.system.physics.core.PhysicsSystem.prototype.threeagent$system$ISystem$on_entity_removed$arity$5 = (function (_,___$1,___$2,obj,_cfg){
var self__ = this;
var ___$3 = this;
var body = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.local_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),obj,new cljs.core.Keyword(null,"body","body",-2049205669)], null));
zombie.scene.system.physics.core.unregister_body_BANG_(self__.local_state,body);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.local_state,medley.core.dissoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),obj], null));
}));

(zombie.scene.system.physics.core.PhysicsSystem.prototype.threeagent$system$ISystem$tick$arity$2 = (function (_,_delta_time){
var self__ = this;
var ___$1 = this;
return null;
}));

(zombie.scene.system.physics.core.PhysicsSystem.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bus","bus",549657924,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null),cljs.core.with_meta(new cljs.core.Symbol(null,"delta-history","delta-history",926071951,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","Array","js/Array",-423508366,null)], null))], null);
}));

(zombie.scene.system.physics.core.PhysicsSystem.cljs$lang$type = true);

(zombie.scene.system.physics.core.PhysicsSystem.cljs$lang$ctorStr = "zombie.scene.system.physics.core/PhysicsSystem");

(zombie.scene.system.physics.core.PhysicsSystem.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"zombie.scene.system.physics.core/PhysicsSystem");
}));

/**
 * Positional factory function for zombie.scene.system.physics.core/PhysicsSystem.
 */
zombie.scene.system.physics.core.__GT_PhysicsSystem = (function zombie$scene$system$physics$core$__GT_PhysicsSystem(bus,local_state,delta_history){
return (new zombie.scene.system.physics.core.PhysicsSystem(bus,local_state,delta_history));
});

zombie.scene.system.physics.core.create = (function zombie$scene$system$physics$core$create(event_bus){
return zombie.scene.system.physics.core.__GT_PhysicsSystem(event_bus,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),[]);
});

//# sourceMappingURL=zombie.scene.system.physics.core.js.map
