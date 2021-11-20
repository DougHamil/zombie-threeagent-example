goog.provide('zombie.scene.system.physics.body');
var module$node_modules$matter_js$build$matter=shadow.js.require("module$node_modules$matter_js$build$matter", {});
var module$node_modules$three$build$three_module=shadow.js.require("module$node_modules$three$build$three_module", {});
zombie.scene.system.physics.body.v1 = (new module$node_modules$three$build$three_module.Vector3());
zombie.scene.system.physics.body.quat1 = (new module$node_modules$three$build$three_module.Quaternion());
zombie.scene.system.physics.body.euler1 = (new module$node_modules$three$build$three_module.Euler());
if((typeof zombie !== 'undefined') && (typeof zombie.scene !== 'undefined') && (typeof zombie.scene.system !== 'undefined') && (typeof zombie.scene.system.physics !== 'undefined') && (typeof zombie.scene.system.physics.body !== 'undefined') && (typeof zombie.scene.system.physics.body.create_body_STAR_ !== 'undefined')){
} else {
zombie.scene.system.physics.body.create_body_STAR_ = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__13085 = cljs.core.get_global_hierarchy;
return (fexpr__13085.cljs$core$IFn$_invoke$arity$0 ? fexpr__13085.cljs$core$IFn$_invoke$arity$0() : fexpr__13085.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("zombie.scene.system.physics.body","create-body*"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
zombie.scene.system.physics.body.create_body_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rectangle","rectangle",293163262),(function (p__13086){
var map__13087 = p__13086;
var map__13087__$1 = cljs.core.__destructure_map(map__13087);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13087__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13087__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13087__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13087__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var settings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13087__$1,new cljs.core.Keyword(null,"settings","settings",1556144875));
var vec__13092 = position;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13092,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13092,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13092,(2),null);
return module$node_modules$matter_js$build$matter.Bodies.rectangle(x,z,(scale * width),(scale * height),cljs.core.clj__GT_js(settings));
}));
zombie.scene.system.physics.body.create_body_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"circle","circle",1903212362),(function (p__13098){
var map__13099 = p__13098;
var map__13099__$1 = cljs.core.__destructure_map(map__13099);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13099__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13099__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13099__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var settings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13099__$1,new cljs.core.Keyword(null,"settings","settings",1556144875));
var vec__13103 = position;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13103,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13103,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13103,(2),null);
return module$node_modules$matter_js$build$matter.Bodies.circle(x,z,(scale * radius),cljs.core.clj__GT_js(settings));
}));
zombie.scene.system.physics.body.create_body_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"model-bounding-box","model-bounding-box",-112419983),(function (p__13109){
var map__13110 = p__13109;
var map__13110__$1 = cljs.core.__destructure_map(map__13110);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13110__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13110__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13110__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var model_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13110__$1,new cljs.core.Keyword(null,"model-type","model-type",398058196));
var settings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13110__$1,new cljs.core.Keyword(null,"settings","settings",1556144875));
var map__13114 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(zombie.state.databases.model_colliders),model_type);
var map__13114__$1 = cljs.core.__destructure_map(map__13114);
var bb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13114__$1,new cljs.core.Keyword(null,"bounding-box","bounding-box",201336205));
var min = bb.min;
var max = bb.max;
var w = (max.x - min.x);
var h = (max.z - min.z);
var vec__13115 = position;
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13115,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13115,(1),null);
var pz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13115,(2),null);
var body = module$node_modules$matter_js$build$matter.Bodies.rectangle(px,pz,(scale * w),(scale * h),cljs.core.clj__GT_js(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(settings,new cljs.core.Keyword(null,"angle","angle",1622094254),angle)));
(body.originOffset = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));

return body;
}));
zombie.scene.system.physics.body.world_transform = (function zombie$scene$system$physics$body$world_transform(world_scale,obj){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13118_SHARP_){
return (world_scale * p1__13118_SHARP_);
}),zombie.util.threejs.vector3__GT_tuple(obj.getWorldPosition(zombie.scene.system.physics.body.v1))),new cljs.core.Keyword(null,"angle","angle",1622094254),zombie.util.threejs.get_world_rotation(obj,zombie.scene.system.physics.body.euler1).reorder("YXZ").y,new cljs.core.Keyword(null,"scale","scale",-230427353),(world_scale * obj.getWorldScale(zombie.scene.system.physics.body.v1).x)], null);
});
zombie.scene.system.physics.body.create_body = (function zombie$scene$system$physics$body$create_body(world_scale,object,part_defs){
var map__13119 = zombie.scene.system.physics.body.world_transform(world_scale,object);
var map__13119__$1 = cljs.core.__destructure_map(map__13119);
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13119__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13119__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13119__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var parts = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__13120){
var vec__13121 = p__13120;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13121,(0),null);
var part_def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13121,(1),null);
var part = zombie.scene.system.physics.body.create_body_STAR_.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(part_def,new cljs.core.Keyword(null,"angle","angle",1622094254),angle,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"object","object",1474613949),object,new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"scale","scale",-230427353),scale], 0)));
var temp__5753__auto___13136 = new cljs.core.Keyword(null,"on-collision-start","on-collision-start",1608797537).cljs$core$IFn$_invoke$arity$1(part_def);
if(cljs.core.truth_(temp__5753__auto___13136)){
var on_coll_13137 = temp__5753__auto___13136;
(part.onCollisionStart = on_coll_13137);
} else {
}

(part.key = key);

return part;
}),part_defs));
var parent = cljs.core.first(parts);
module$node_modules$matter_js$build$matter.Body.setParts(parent,parts);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"body","body",-2049205669),parent,new cljs.core.Keyword(null,"angle-offset","angle-offset",-824819163),angle], null);
});

//# sourceMappingURL=zombie.scene.system.physics.body.js.map
