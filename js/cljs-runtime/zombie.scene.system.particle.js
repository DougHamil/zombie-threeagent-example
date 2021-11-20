goog.provide('zombie.scene.system.particle');
var module$node_modules$three$build$three_module=shadow.js.require("module$node_modules$three$build$three_module", {});
var module$node_modules$troika_three_text$dist$troika_three_text_esm=shadow.js.require("module$node_modules$troika_three_text$dist$troika_three_text_esm", {});
var module$node_modules$three_nebula$build$esm$index=shadow.js.require("module$node_modules$three_nebula$build$esm$index", {});
zombie.scene.system.particle._STAR_next_particle_id_STAR_ = (0);
zombie.scene.system.particle.v1 = (new module$node_modules$three$build$three_module.Vector3());
zombie.scene.system.particle.v2 = (new module$node_modules$three$build$three_module.Vector3());
zombie.scene.system.particle.e1 = (new module$node_modules$three$build$three_module.Euler());
zombie.scene.system.particle.create_text_body_STAR_ = (function zombie$scene$system$particle$create_text_body_STAR_(text,color,font_size){
var obj = (new module$node_modules$troika_three_text$dist$troika_three_text_esm.Text());
if(cljs.core.truth_(color)){
(obj.color = color);
} else {
}

(obj.text = text);

(obj.font = new cljs.core.Keyword("font","bebas","font/bebas",-324908376).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(zombie.state.databases.assets)));

(obj.fontSize = font_size);

return obj;
});
zombie.scene.system.particle.create_text_body = cljs.core.memoize(zombie.scene.system.particle.create_text_body_STAR_);
zombie.scene.system.particle.create_sprite_body = (function zombie$scene$system$particle$create_sprite_body(){
var texture = new cljs.core.Keyword("texture","particle-circle-fade","texture/particle-circle-fade",-809415940).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(zombie.state.databases.assets));
var mat = (new module$node_modules$three$build$three_module.SpriteMaterial(({"map": texture})));
return (new module$node_modules$three$build$three_module.Sprite(mat));
});
zombie.scene.system.particle.tuple__GT_nebula_vector = (function zombie$scene$system$particle$tuple__GT_nebula_vector(p__13008){
var vec__13009 = p__13008;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13009,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13009,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13009,(2),null);
return (new module$node_modules$three_nebula$build$esm$index.Vector3D(x,y,z));
});
zombie.scene.system.particle.look_at_rotation = (function zombie$scene$system$particle$look_at_rotation(source_pos,target_obj){
var pos = target_obj.getWorldPosition(zombie.scene.system.particle.v2);
var look_dir = pos.sub(zombie.util.threejs.tuple__GT_vector3(source_pos)).normalize();
return zombie.util.threejs.direction_tuple__GT_rotation_tuple(zombie.util.threejs.vector3__GT_tuple(look_dir));
});
if((typeof zombie !== 'undefined') && (typeof zombie.scene !== 'undefined') && (typeof zombie.scene.system !== 'undefined') && (typeof zombie.scene.system.particle !== 'undefined') && (typeof zombie.scene.system.particle.create_emitter !== 'undefined')){
} else {
zombie.scene.system.particle.create_emitter = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__13012 = cljs.core.get_global_hierarchy;
return (fexpr__13012.cljs$core$IFn$_invoke$arity$0 ? fexpr__13012.cljs$core$IFn$_invoke$arity$0() : fexpr__13012.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("zombie.scene.system.particle","create-emitter"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
zombie.scene.system.particle.create_emitter.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"floating-text","floating-text",1601770399),(function (p__13013){
var map__13014 = p__13013;
var map__13014__$1 = cljs.core.__destructure_map(map__13014);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13014__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var speed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13014__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var spread = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13014__$1,new cljs.core.Keyword(null,"spread","spread",862337191));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13014__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var font_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13014__$1,new cljs.core.Keyword(null,"font-size","font-size",-1847940346));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13014__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var cam = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(zombie.state.databases.entity_objects),"camera");
var rot = zombie.scene.system.particle.look_at_rotation(position,cam);
var rotate = (new module$node_modules$three_nebula$build$esm$index.Rotate(zombie.scene.system.particle.tuple__GT_nebula_vector(rot)));
return (new module$node_modules$three_nebula$build$esm$index.Emitter()).setRate((new module$node_modules$three_nebula$build$esm$index.Rate((new module$node_modules$three_nebula$build$esm$index.Span((1),(1))),(new module$node_modules$three_nebula$build$esm$index.Span((1)))))).setInitializers([(new module$node_modules$three_nebula$build$esm$index.Position((new module$node_modules$three_nebula$build$esm$index.PointZone((0),(0))))),(new module$node_modules$three_nebula$build$esm$index.VectorVelocity((new module$node_modules$three_nebula$build$esm$index.Vector3D((0),(function (){var or__4212__auto__ = speed;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (2);
}
})(),(0))),(function (){var or__4212__auto__ = spread;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (0);
}
})())),(new module$node_modules$three_nebula$build$esm$index.Mass((1))),(new module$node_modules$three_nebula$build$esm$index.Body(zombie.scene.system.particle.create_text_body(text,color,(function (){var or__4212__auto__ = font_size;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return 0.8;
}
})()))),(new module$node_modules$three_nebula$build$esm$index.Life((1)))]).setBehaviours(cljs.core.to_array(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new module$node_modules$three_nebula$build$esm$index.Alpha(1.0,0.0)),rotate], null)));
}));
zombie.scene.system.particle.create_emitter.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"wood-explosion","wood-explosion",794897664),(function (p__13028){
var map__13029 = p__13028;
var map__13029__$1 = cljs.core.__destructure_map(map__13029);
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13029__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13029__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var dir = zombie.scene.system.particle.tuple__GT_nebula_vector((function (){var or__4212__auto__ = direction;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null);
}
})());
var scale__$1 = (0.005 * (function (){var or__4212__auto__ = scale;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return 1.0;
}
})());
return (new module$node_modules$three_nebula$build$esm$index.Emitter()).setRate((new module$node_modules$three_nebula$build$esm$index.Rate((new module$node_modules$three_nebula$build$esm$index.Span((5),(5))),(new module$node_modules$three_nebula$build$esm$index.Span((1)))))).setInitializers([(new module$node_modules$three_nebula$build$esm$index.Position((new module$node_modules$three_nebula$build$esm$index.PointZone((0),(0))))),(new module$node_modules$three_nebula$build$esm$index.Mass((1))),(new module$node_modules$three_nebula$build$esm$index.Radius(0.2,0.2)),(new module$node_modules$three_nebula$build$esm$index.Life((1))),(new module$node_modules$three_nebula$build$esm$index.RadialVelocity((20),dir,(25)))]).setBehaviours([(new module$node_modules$three_nebula$build$esm$index.Alpha((1),0.0)),(new module$node_modules$three_nebula$build$esm$index.Scale(scale__$1,scale__$1)),(new module$node_modules$three_nebula$build$esm$index.Gravity(0.9)),(new module$node_modules$three_nebula$build$esm$index.Color((new module$node_modules$three$build$three_module.Color((9849600))),(new module$node_modules$three$build$three_module.Color((9849600)))))]);
}));
zombie.scene.system.particle.create_emitter.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"blood-fountain","blood-fountain",-442547275),(function (p__13031){
var map__13032 = p__13031;
var map__13032__$1 = cljs.core.__destructure_map(map__13032);
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13032__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13032__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var dir = zombie.scene.system.particle.tuple__GT_nebula_vector((function (){var or__4212__auto__ = direction;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null);
}
})());
var scale__$1 = (0.005 * (function (){var or__4212__auto__ = scale;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return 1.0;
}
})());
return (new module$node_modules$three_nebula$build$esm$index.Emitter()).setRate((new module$node_modules$three_nebula$build$esm$index.Rate((new module$node_modules$three_nebula$build$esm$index.Span((5),(5))),(new module$node_modules$three_nebula$build$esm$index.Span((1)))))).setInitializers([(new module$node_modules$three_nebula$build$esm$index.Position((new module$node_modules$three_nebula$build$esm$index.PointZone((0),(0))))),(new module$node_modules$three_nebula$build$esm$index.Mass((1))),(new module$node_modules$three_nebula$build$esm$index.Radius(0.2,0.2)),(new module$node_modules$three_nebula$build$esm$index.Life((1))),(new module$node_modules$three_nebula$build$esm$index.RadialVelocity((20),dir,(25)))]).setBehaviours([(new module$node_modules$three_nebula$build$esm$index.Alpha((1),0.0)),(new module$node_modules$three_nebula$build$esm$index.Scale(scale__$1,scale__$1)),(new module$node_modules$three_nebula$build$esm$index.Gravity(0.9)),(new module$node_modules$three_nebula$build$esm$index.Color((new module$node_modules$three$build$three_module.Color((11141120))),(new module$node_modules$three$build$three_module.Color((11141120)))))]);
}));
zombie.scene.system.particle.create_emitter.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"impact-sparks","impact-sparks",-1076645149),(function (p__13033){
var map__13034 = p__13033;
var map__13034__$1 = cljs.core.__destructure_map(map__13034);
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13034__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var dir = zombie.scene.system.particle.tuple__GT_nebula_vector((function (){var or__4212__auto__ = direction;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null);
}
})());
return (new module$node_modules$three_nebula$build$esm$index.Emitter()).setRate((new module$node_modules$three_nebula$build$esm$index.Rate((new module$node_modules$three_nebula$build$esm$index.Span((5),(5))),(new module$node_modules$three_nebula$build$esm$index.Span((1)))))).setInitializers([(new module$node_modules$three_nebula$build$esm$index.Position((new module$node_modules$three_nebula$build$esm$index.PointZone((0),(0))))),(new module$node_modules$three_nebula$build$esm$index.Mass((1))),(new module$node_modules$three_nebula$build$esm$index.Radius(0.1,0.1)),(new module$node_modules$three_nebula$build$esm$index.Life(0.2)),(new module$node_modules$three_nebula$build$esm$index.RadialVelocity((20),dir,(20)))]).setBehaviours([(new module$node_modules$three_nebula$build$esm$index.Alpha(0.5,1.0)),(new module$node_modules$three_nebula$build$esm$index.Scale(0.002,0.002)),(new module$node_modules$three_nebula$build$esm$index.Color((new module$node_modules$three$build$three_module.Color((16776960))),(new module$node_modules$three$build$three_module.Color((16776960)))))]);
}));
zombie.scene.system.particle.create_emitter.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"moths","moths",1906733066),(function (p__13035){
var map__13036 = p__13035;
var map__13036__$1 = cljs.core.__destructure_map(map__13036);
var vec__13037 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13036__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13037,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13037,(1),null);
var pz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13037,(2),null);
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13036__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return (new module$node_modules$three_nebula$build$esm$index.Emitter()).setRate((new module$node_modules$three_nebula$build$esm$index.Rate((new module$node_modules$three_nebula$build$esm$index.Span((1),(1))),(new module$node_modules$three_nebula$build$esm$index.Span(0.2,0.2))))).setInitializers([(new module$node_modules$three_nebula$build$esm$index.Position((new module$node_modules$three_nebula$build$esm$index.SphereZone(px,py,pz,0.5)))),(new module$node_modules$three_nebula$build$esm$index.Radius(0.1,0.1)),(new module$node_modules$three_nebula$build$esm$index.VectorVelocity((new module$node_modules$three_nebula$build$esm$index.Vector3D((0),1.0,(0))),(180))),(new module$node_modules$three_nebula$build$esm$index.Body(zombie.scene.system.particle.create_sprite_body())),(new module$node_modules$three_nebula$build$esm$index.Life(2.5)),(new module$node_modules$three_nebula$build$esm$index.Mass((1)))]).setBehaviours([(new module$node_modules$three_nebula$build$esm$index.Alpha(0.4,0.0)),(new module$node_modules$three_nebula$build$esm$index.Scale(0.08,0.001)),(new module$node_modules$three_nebula$build$esm$index.Rotate(0.5,0.0,(1))),(new module$node_modules$three_nebula$build$esm$index.Attraction(zombie.util.threejs.tuple__GT_vector3(position),0.05,(3))),(new module$node_modules$three_nebula$build$esm$index.Color((new module$node_modules$three$build$three_module.Color((16365568))),(new module$node_modules$three$build$three_module.Color((16365568)))))]);
}));
zombie.scene.system.particle.create_emitter.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"smoke-trail-loop","smoke-trail-loop",-250118063),(function (_){
return (new module$node_modules$three_nebula$build$esm$index.Emitter()).setRate((new module$node_modules$three_nebula$build$esm$index.Rate((new module$node_modules$three_nebula$build$esm$index.Span((1),(1))),(new module$node_modules$three_nebula$build$esm$index.Span(0.3,0.3))))).setInitializers([(new module$node_modules$three_nebula$build$esm$index.Position((new module$node_modules$three_nebula$build$esm$index.PointZone((0),(0),(0))))),(new module$node_modules$three_nebula$build$esm$index.Radius(0.1,0.1)),(new module$node_modules$three_nebula$build$esm$index.VectorVelocity((new module$node_modules$three_nebula$build$esm$index.Vector3D((0),0.3,(0))),(1))),(new module$node_modules$three_nebula$build$esm$index.Body(zombie.scene.system.particle.create_sprite_body())),(new module$node_modules$three_nebula$build$esm$index.Life(1.5)),(new module$node_modules$three_nebula$build$esm$index.Mass((1)))]).setBehaviours([(new module$node_modules$three_nebula$build$esm$index.Alpha(0.4,0.0)),(new module$node_modules$three_nebula$build$esm$index.Scale(0.001,(new module$node_modules$three_nebula$build$esm$index.Span(0.3,0.4)))),(new module$node_modules$three_nebula$build$esm$index.Rotate(0.5,0.0,(1))),(new module$node_modules$three_nebula$build$esm$index.RandomDrift(0.05,(0),0.05,0.2)),(new module$node_modules$three_nebula$build$esm$index.Color((new module$node_modules$three$build$three_module.Color((15658734))),(new module$node_modules$three$build$three_module.Color((12303291)))))]);
}));
zombie.scene.system.particle.create_system = (function zombie$scene$system$particle$create_system(container){
var system = (new module$node_modules$three_nebula$build$esm$index.System());
var renderer = (new module$node_modules$three_nebula$build$esm$index.MeshRenderer(container,module$node_modules$three$build$three_module));
system.addRenderer(renderer);

return system;
});
zombie.scene.system.particle.on_spawn_particle_system = (function zombie$scene$system$particle$on_spawn_particle_system(cfg){
(zombie.scene.system.particle._STAR_next_particle_id_STAR_ = (zombie.scene.system.particle._STAR_next_particle_id_STAR_ + (1)));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(zombie.state.databases.particles,cljs.core.assoc,zombie.scene.system.particle._STAR_next_particle_id_STAR_,cfg);
});

/**
* @constructor
 * @implements {threeagent.system.ISystem}
*/
zombie.scene.system.particle.ParticleSystem = (function (bus,local_state){
this.bus = bus;
this.local_state = local_state;
});
(zombie.scene.system.particle.ParticleSystem.prototype.threeagent$system$ISystem$ = cljs.core.PROTOCOL_SENTINEL);

(zombie.scene.system.particle.ParticleSystem.prototype.threeagent$system$ISystem$init$arity$2 = (function (_,p__13040){
var self__ = this;
var map__13041 = p__13040;
var map__13041__$1 = cljs.core.__destructure_map(map__13041);
var threejs_scene = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13041__$1,new cljs.core.Keyword(null,"threejs-scene","threejs-scene",754266515));
var ___$1 = this;
var system = zombie.scene.system.particle.create_system(threejs_scene);
zombie.util.messaging.on(self__.bus,new cljs.core.Keyword("particles","spawn","particles/spawn",282676462),zombie.scene.system.particle.on_spawn_particle_system);

return cljs.core.reset_BANG_(self__.local_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"system","system",-29381724),system], null));
}));

(zombie.scene.system.particle.ParticleSystem.prototype.threeagent$system$ISystem$destroy$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.Keyword(null,"system","system",-29381724).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.local_state)).destroy();
}));

(zombie.scene.system.particle.ParticleSystem.prototype.threeagent$system$ISystem$on_entity_added$arity$5 = (function (_,___$1,_key,obj,p__13042){
var self__ = this;
var map__13043 = p__13042;
var map__13043__$1 = cljs.core.__destructure_map(map__13043);
var cfg = map__13043__$1;
var on_dead = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13043__$1,new cljs.core.Keyword(null,"on-dead","on-dead",1703912838));
var loop_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13043__$1,new cljs.core.Keyword(null,"loop?","loop?",457687798));
var ___$2 = this;
var world_pos = obj.getWorldPosition(zombie.scene.system.particle.v1);
var world_rot = zombie.util.threejs.get_world_rotation(obj,zombie.scene.system.particle.e1);
var system = new cljs.core.Keyword(null,"system","system",-29381724).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.local_state));
var emitter = zombie.scene.system.particle.create_emitter.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cfg,new cljs.core.Keyword(null,"position","position",-2011731912),zombie.util.threejs.vector3__GT_tuple(world_pos),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"rotation","rotation",-1728051644),zombie.util.threejs.vector3__GT_tuple(world_rot)], 0)));
emitter.setPosition(world_pos.clone());

emitter.setRotation(world_rot);

system.addEmitter(emitter);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.local_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emitters","emitters",-1346669845),obj], null),emitter);

if(cljs.core.truth_(loop_QMARK_)){
emitter.emit();
} else {
emitter.emit((1),0.5);
}

if(cljs.core.truth_(on_dead)){
return emitter.addOnEmitterDeadEventListener(on_dead);
} else {
return null;
}
}));

(zombie.scene.system.particle.ParticleSystem.prototype.threeagent$system$ISystem$on_entity_removed$arity$5 = (function (_,___$1,_key,obj,_cfg){
var self__ = this;
var ___$2 = this;
var temp__5753__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.local_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emitters","emitters",-1346669845),obj], null));
if(cljs.core.truth_(temp__5753__auto__)){
var emitter = temp__5753__auto__;
return emitter.destroy();
} else {
return null;
}
}));

(zombie.scene.system.particle.ParticleSystem.prototype.threeagent$system$ISystem$tick$arity$2 = (function (_,delta_time){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"system","system",-29381724).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.local_state)).update(delta_time);
}));

(zombie.scene.system.particle.ParticleSystem.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bus","bus",549657924,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null)], null);
}));

(zombie.scene.system.particle.ParticleSystem.cljs$lang$type = true);

(zombie.scene.system.particle.ParticleSystem.cljs$lang$ctorStr = "zombie.scene.system.particle/ParticleSystem");

(zombie.scene.system.particle.ParticleSystem.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"zombie.scene.system.particle/ParticleSystem");
}));

/**
 * Positional factory function for zombie.scene.system.particle/ParticleSystem.
 */
zombie.scene.system.particle.__GT_ParticleSystem = (function zombie$scene$system$particle$__GT_ParticleSystem(bus,local_state){
return (new zombie.scene.system.particle.ParticleSystem(bus,local_state));
});

zombie.scene.system.particle.create = (function zombie$scene$system$particle$create(event_bus){
return zombie.scene.system.particle.__GT_ParticleSystem(event_bus,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=zombie.scene.system.particle.js.map
