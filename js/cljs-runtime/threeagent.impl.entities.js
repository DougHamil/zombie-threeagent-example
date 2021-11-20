goog.provide('threeagent.impl.entities');
var module$node_modules$three$build$three_module=shadow.js.require("module$node_modules$three$build$three_module", {});
if((typeof threeagent !== 'undefined') && (typeof threeagent.impl !== 'undefined') && (typeof threeagent.impl.entities !== 'undefined') && (typeof threeagent.impl.entities.material_cache !== 'undefined')){
} else {
threeagent.impl.entities.material_cache = cljs.core.memoize(threeagent.impl.threejs.mesh_phong_material);
}
threeagent.impl.entities.__GT_material = (function threeagent$impl$entities$__GT_material(config){
if((config instanceof module$node_modules$three$build$three_module.Material)){
return config;
} else {
return threeagent.impl.entities.material_cache(config);
}
});

/**
* @constructor
 * @implements {threeagent.entity.IEntityType}
 * @implements {threeagent.entity.IUpdateableEntityType}
*/
threeagent.impl.entities.MeshEntity = (function (geo_fn){
this.geo_fn = geo_fn;
});
(threeagent.impl.entities.MeshEntity.prototype.threeagent$entity$IEntityType$ = cljs.core.PROTOCOL_SENTINEL);

(threeagent.impl.entities.MeshEntity.prototype.threeagent$entity$IEntityType$create$arity$3 = (function (_,___$1,config){
var self__ = this;
var ___$2 = this;
var geo = (self__.geo_fn.cljs$core$IFn$_invoke$arity$1 ? self__.geo_fn.cljs$core$IFn$_invoke$arity$1(config) : self__.geo_fn.call(null,config));
var mat = threeagent.impl.entities.__GT_material(new cljs.core.Keyword(null,"material","material",460118677).cljs$core$IFn$_invoke$arity$1(config));
var mesh = (new module$node_modules$three$build$three_module.Mesh(geo,mat));
(mesh.castShadow = new cljs.core.Keyword(null,"cast-shadow","cast-shadow",-446090219).cljs$core$IFn$_invoke$arity$1(config));

(mesh.receiveShadow = new cljs.core.Keyword(null,"receive-shadow","receive-shadow",-789712390).cljs$core$IFn$_invoke$arity$1(config));

return mesh;
}));

(threeagent.impl.entities.MeshEntity.prototype.threeagent$entity$IEntityType$destroy_BANG_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
return null;
}));

(threeagent.impl.entities.MeshEntity.prototype.threeagent$entity$IUpdateableEntityType$ = cljs.core.PROTOCOL_SENTINEL);

(threeagent.impl.entities.MeshEntity.prototype.threeagent$entity$IUpdateableEntityType$update_BANG_$arity$4 = (function (_,___$1,mesh,config){
var self__ = this;
var ___$2 = this;
var geo = (self__.geo_fn.cljs$core$IFn$_invoke$arity$1 ? self__.geo_fn.cljs$core$IFn$_invoke$arity$1(config) : self__.geo_fn.call(null,config));
var mat = threeagent.impl.entities.__GT_material(new cljs.core.Keyword(null,"material","material",460118677).cljs$core$IFn$_invoke$arity$1(config));
(mesh.geometry = geo);

(mesh.material = mat);

(mesh.castShadow = new cljs.core.Keyword(null,"cast-shadow","cast-shadow",-446090219).cljs$core$IFn$_invoke$arity$1(config));

(mesh.receiveShadow = new cljs.core.Keyword(null,"receive-shadow","receive-shadow",-789712390).cljs$core$IFn$_invoke$arity$1(config));

return mesh;
}));

(threeagent.impl.entities.MeshEntity.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"geo-fn","geo-fn",1581818572,null)], null);
}));

(threeagent.impl.entities.MeshEntity.cljs$lang$type = true);

(threeagent.impl.entities.MeshEntity.cljs$lang$ctorStr = "threeagent.impl.entities/MeshEntity");

(threeagent.impl.entities.MeshEntity.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"threeagent.impl.entities/MeshEntity");
}));

/**
 * Positional factory function for threeagent.impl.entities/MeshEntity.
 */
threeagent.impl.entities.__GT_MeshEntity = (function threeagent$impl$entities$__GT_MeshEntity(geo_fn){
return (new threeagent.impl.entities.MeshEntity(geo_fn));
});

threeagent.impl.entities.default_light_shadow = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"map-size","map-size",-683564558),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(512),new cljs.core.Keyword(null,"height","height",1025178622),(512)], null),new cljs.core.Keyword(null,"focus","focus",234677911),1.0,new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"near","near",-1077668328),0.5,new cljs.core.Keyword(null,"far","far",85807546),(500),new cljs.core.Keyword(null,"left","left",-399115937),(-5),new cljs.core.Keyword(null,"right","right",-452581833),(5),new cljs.core.Keyword(null,"top","top",-1856271961),(5),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(-5)], null)], null);
threeagent.impl.entities.apply_shadow_settings_BANG_ = (function threeagent$impl$entities$apply_shadow_settings_BANG_(light,shadow_cfg){
if(cljs.core.truth_(shadow_cfg)){
var shadow_9971__$1 = light.shadow;
var camera_obj_9972 = shadow_9971__$1.camera;
var map_size_9973 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"map-size","map-size",-683564558).cljs$core$IFn$_invoke$arity$1(threeagent.impl.entities.default_light_shadow),new cljs.core.Keyword(null,"map-size","map-size",-683564558).cljs$core$IFn$_invoke$arity$1(shadow_cfg)], 0));
var camera_9974 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(threeagent.impl.entities.default_light_shadow),new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(shadow_cfg)], 0));
(shadow_9971__$1.mapSize.width = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(map_size_9973));

(shadow_9971__$1.mapSize.height = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(map_size_9973));

(camera_obj_9972.near = new cljs.core.Keyword(null,"near","near",-1077668328).cljs$core$IFn$_invoke$arity$1(camera_9974));

(camera_obj_9972.far = new cljs.core.Keyword(null,"far","far",85807546).cljs$core$IFn$_invoke$arity$1(camera_9974));

(camera_obj_9972.left = new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(camera_9974));

(camera_obj_9972.right = new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(camera_9974));

(camera_obj_9972.top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(camera_9974));

(camera_obj_9972.bottom = new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(camera_9974));

(shadow_9971__$1.focus = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(shadow_cfg);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"focus","focus",234677911).cljs$core$IFn$_invoke$arity$1(threeagent.impl.entities.default_light_shadow);
}
})());

camera_obj_9972.updateProjectionMatrix();
} else {
}

return light;
});

/**
* @constructor
 * @implements {threeagent.entity.IEntityType}
 * @implements {threeagent.entity.IUpdateableEntityType}
*/
threeagent.impl.entities.LightEntity = (function (create_fn,update_fn){
this.create_fn = create_fn;
this.update_fn = update_fn;
});
(threeagent.impl.entities.LightEntity.prototype.threeagent$entity$IEntityType$ = cljs.core.PROTOCOL_SENTINEL);

(threeagent.impl.entities.LightEntity.prototype.threeagent$entity$IEntityType$create$arity$3 = (function (_,___$1,cfg){
var self__ = this;
var ___$2 = this;
var light = (self__.create_fn.cljs$core$IFn$_invoke$arity$1 ? self__.create_fn.cljs$core$IFn$_invoke$arity$1(cfg) : self__.create_fn.call(null,cfg));
(light.castShadow = new cljs.core.Keyword(null,"cast-shadow","cast-shadow",-446090219).cljs$core$IFn$_invoke$arity$1(cfg));

(light.receiveShadow = new cljs.core.Keyword(null,"receive-shadow","receive-shadow",-789712390).cljs$core$IFn$_invoke$arity$1(cfg));

return threeagent.impl.entities.apply_shadow_settings_BANG_(light,new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(cfg));
}));

(threeagent.impl.entities.LightEntity.prototype.threeagent$entity$IEntityType$destroy_BANG_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
return null;
}));

(threeagent.impl.entities.LightEntity.prototype.threeagent$entity$IUpdateableEntityType$ = cljs.core.PROTOCOL_SENTINEL);

(threeagent.impl.entities.LightEntity.prototype.threeagent$entity$IUpdateableEntityType$update_BANG_$arity$4 = (function (_,___$1,obj,cfg){
var self__ = this;
var ___$2 = this;
(self__.update_fn.cljs$core$IFn$_invoke$arity$2 ? self__.update_fn.cljs$core$IFn$_invoke$arity$2(obj,cfg) : self__.update_fn.call(null,obj,cfg));

(obj.castShadow = new cljs.core.Keyword(null,"cast-shadow","cast-shadow",-446090219).cljs$core$IFn$_invoke$arity$1(cfg));

(obj.receiveShadow = new cljs.core.Keyword(null,"receive-shadow","receive-shadow",-789712390).cljs$core$IFn$_invoke$arity$1(cfg));

return threeagent.impl.entities.apply_shadow_settings_BANG_(obj,new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(cfg));
}));

(threeagent.impl.entities.LightEntity.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"create-fn","create-fn",44490714,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null)], null);
}));

(threeagent.impl.entities.LightEntity.cljs$lang$type = true);

(threeagent.impl.entities.LightEntity.cljs$lang$ctorStr = "threeagent.impl.entities/LightEntity");

(threeagent.impl.entities.LightEntity.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"threeagent.impl.entities/LightEntity");
}));

/**
 * Positional factory function for threeagent.impl.entities/LightEntity.
 */
threeagent.impl.entities.__GT_LightEntity = (function threeagent$impl$entities$__GT_LightEntity(create_fn,update_fn){
return (new threeagent.impl.entities.LightEntity(create_fn,update_fn));
});

threeagent.impl.entities.apply_props_clj_BANG_ = (function threeagent$impl$entities$apply_props_clj_BANG_(obj,properties){
var seq__9894_9975 = cljs.core.seq(properties);
var chunk__9895_9976 = null;
var count__9896_9977 = (0);
var i__9897_9978 = (0);
while(true){
if((i__9897_9978 < count__9896_9977)){
var vec__9904_9979 = chunk__9895_9976.cljs$core$IIndexed$_nth$arity$2(null,i__9897_9978);
var k_9980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9904_9979,(0),null);
var v_9981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9904_9979,(1),null);
goog.object.set(obj,cljs.core.name(k_9980),v_9981);


var G__9982 = seq__9894_9975;
var G__9983 = chunk__9895_9976;
var G__9984 = count__9896_9977;
var G__9985 = (i__9897_9978 + (1));
seq__9894_9975 = G__9982;
chunk__9895_9976 = G__9983;
count__9896_9977 = G__9984;
i__9897_9978 = G__9985;
continue;
} else {
var temp__5753__auto___9986 = cljs.core.seq(seq__9894_9975);
if(temp__5753__auto___9986){
var seq__9894_9987__$1 = temp__5753__auto___9986;
if(cljs.core.chunked_seq_QMARK_(seq__9894_9987__$1)){
var c__4638__auto___9988 = cljs.core.chunk_first(seq__9894_9987__$1);
var G__9989 = cljs.core.chunk_rest(seq__9894_9987__$1);
var G__9990 = c__4638__auto___9988;
var G__9991 = cljs.core.count(c__4638__auto___9988);
var G__9992 = (0);
seq__9894_9975 = G__9989;
chunk__9895_9976 = G__9990;
count__9896_9977 = G__9991;
i__9897_9978 = G__9992;
continue;
} else {
var vec__9907_9993 = cljs.core.first(seq__9894_9987__$1);
var k_9994 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9907_9993,(0),null);
var v_9995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9907_9993,(1),null);
goog.object.set(obj,cljs.core.name(k_9994),v_9995);


var G__9996 = cljs.core.next(seq__9894_9987__$1);
var G__9997 = null;
var G__9998 = (0);
var G__9999 = (0);
seq__9894_9975 = G__9996;
chunk__9895_9976 = G__9997;
count__9896_9977 = G__9998;
i__9897_9978 = G__9999;
continue;
}
} else {
}
}
break;
}

return obj;
});
threeagent.impl.entities.builtin_entity_types = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sphere","sphere",384337120),new cljs.core.Keyword(null,"point-light","point-light",669926690),new cljs.core.Keyword(null,"directional-light","directional-light",1424371138),new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"hemisphere-light","hemisphere-light",-1569111131),new cljs.core.Keyword(null,"ring","ring",-974350330),new cljs.core.Keyword(null,"instance","instance",-2121349050),new cljs.core.Keyword(null,"perspective-camera","perspective-camera",1944836071),new cljs.core.Keyword(null,"plane","plane",-223595224),new cljs.core.Keyword(null,"torus-knot","torus-knot",466642313),new cljs.core.Keyword(null,"box","box",1530920394),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"octahedron","octahedron",245466475),new cljs.core.Keyword(null,"spot-light","spot-light",2068323183),new cljs.core.Keyword(null,"rect-area-light","rect-area-light",-1419656976),new cljs.core.Keyword(null,"torus","torus",790837427),new cljs.core.Keyword(null,"ambient-light","ambient-light",1637901620),new cljs.core.Keyword(null,"cylinder","cylinder",-1762349035),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"cone","cone",-1644572970),new cljs.core.Keyword(null,"icosahedron","icosahedron",-1698316329),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"tetrahedron","tetrahedron",-902050819),new cljs.core.Keyword(null,"dodecahedron","dodecahedron",-1629151490),new cljs.core.Keyword(null,"orthographic-camera","orthographic-camera",-79663393)],[threeagent.impl.entities.__GT_MeshEntity((function (p__9910){
var map__9911 = p__9910;
var map__9911__$1 = cljs.core.__destructure_map(map__9911);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9911__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var width_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9911__$1,new cljs.core.Keyword(null,"width-segments","width-segments",25187827));
var height_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9911__$1,new cljs.core.Keyword(null,"height-segments","height-segments",1831894149));
var phi_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9911__$1,new cljs.core.Keyword(null,"phi-start","phi-start",-1129440297));
var phi_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9911__$1,new cljs.core.Keyword(null,"phi-length","phi-length",-99998879));
var theta_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9911__$1,new cljs.core.Keyword(null,"theta-start","theta-start",-1644036763));
var theta_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9911__$1,new cljs.core.Keyword(null,"theta-length","theta-length",-163292368));
return (new module$node_modules$three$build$three_module.SphereGeometry((function (){var or__4212__auto__ = radius;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})(),(function (){var or__4212__auto__ = width_segments;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (8);
}
})(),(function (){var or__4212__auto__ = height_segments;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (6);
}
})(),(function (){var or__4212__auto__ = phi_start;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (0);
}
})(),(function (){var or__4212__auto__ = phi_length;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return threeagent.impl.util.pi_times_2;
}
})(),(function (){var or__4212__auto__ = theta_start;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (0);
}
})(),(function (){var or__4212__auto__ = theta_length;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return threeagent.impl.util.pi;
}
})()));
})),threeagent.impl.entities.__GT_LightEntity((function (p__9912){
var map__9913 = p__9912;
var map__9913__$1 = cljs.core.__destructure_map(map__9913);
var intensity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9913__$1,new cljs.core.Keyword(null,"intensity","intensity",1142770863));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9913__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var distance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9913__$1,new cljs.core.Keyword(null,"distance","distance",-1671893894));
var decay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9913__$1,new cljs.core.Keyword(null,"decay","decay",1036712184));
return (new module$node_modules$three$build$three_module.PointLight((function (){var or__4212__auto__ = color;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (16777215);
}
})(),(function (){var or__4212__auto__ = intensity;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return 1.0;
}
})(),(function (){var or__4212__auto__ = distance;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (0);
}
})(),(function (){var or__4212__auto__ = decay;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return 1.0;
}
})()));
}),(function (o,cfg){
threeagent.impl.entities.apply_props_clj_BANG_(o,cfg);

return o;
})),threeagent.impl.entities.__GT_LightEntity((function (p__9914){
var map__9915 = p__9914;
var map__9915__$1 = cljs.core.__destructure_map(map__9915);
var intensity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9915__$1,new cljs.core.Keyword(null,"intensity","intensity",1142770863));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9915__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9915__$1,new cljs.core.Keyword(null,"target","target",253001721));
var light = (new module$node_modules$three$build$three_module.DirectionalLight((function (){var or__4212__auto__ = color;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (16777215);
}
})(),(function (){var or__4212__auto__ = intensity;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return 1.0;
}
})()));
(light.originalTarget = light.target);

if(cljs.core.truth_(target)){
(light.target = target);
} else {
}

return light;
}),(function (o,p__9916){
var map__9917 = p__9916;
var map__9917__$1 = cljs.core.__destructure_map(map__9917);
var cfg = map__9917__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9917__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.truth_(target)){
(o.target = target);
} else {
(o.target = o.originalTarget);
}

threeagent.impl.entities.apply_props_clj_BANG_(o,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.Keyword(null,"target","target",253001721)));

return o;
})),(function (){
if((typeof threeagent !== 'undefined') && (typeof threeagent.impl !== 'undefined') && (typeof threeagent.impl.entities !== 'undefined') && (typeof threeagent.impl.entities.t_threeagent$impl$entities9918 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {threeagent.entity.IEntityType}
 * @implements {threeagent.entity.IUpdateableEntityType}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
threeagent.impl.entities.t_threeagent$impl$entities9918 = (function (meta9919){
this.meta9919 = meta9919;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(threeagent.impl.entities.t_threeagent$impl$entities9918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9920,meta9919__$1){
var self__ = this;
var _9920__$1 = this;
return (new threeagent.impl.entities.t_threeagent$impl$entities9918(meta9919__$1));
}));

(threeagent.impl.entities.t_threeagent$impl$entities9918.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9920){
var self__ = this;
var _9920__$1 = this;
return self__.meta9919;
}));

(threeagent.impl.entities.t_threeagent$impl$entities9918.prototype.threeagent$entity$IEntityType$ = cljs.core.PROTOCOL_SENTINEL);

(threeagent.impl.entities.t_threeagent$impl$entities9918.prototype.threeagent$entity$IEntityType$create$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return (new module$node_modules$three$build$three_module.Group());
}));

(threeagent.impl.entities.t_threeagent$impl$entities9918.prototype.threeagent$entity$IEntityType$destroy_BANG_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
return null;
}));

(threeagent.impl.entities.t_threeagent$impl$entities9918.prototype.threeagent$entity$IUpdateableEntityType$ = cljs.core.PROTOCOL_SENTINEL);

(threeagent.impl.entities.t_threeagent$impl$entities9918.prototype.threeagent$entity$IUpdateableEntityType$update_BANG_$arity$4 = (function (_,___$1,obj,___$2){
var self__ = this;
var ___$3 = this;
return obj;
}));

(threeagent.impl.entities.t_threeagent$impl$entities9918.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta9919","meta9919",-1789679140,null)], null);
}));

(threeagent.impl.entities.t_threeagent$impl$entities9918.cljs$lang$type = true);

(threeagent.impl.entities.t_threeagent$impl$entities9918.cljs$lang$ctorStr = "threeagent.impl.entities/t_threeagent$impl$entities9918");

(threeagent.impl.entities.t_threeagent$impl$entities9918.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"threeagent.impl.entities/t_threeagent$impl$entities9918");
}));

/**
 * Positional factory function for threeagent.impl.entities/t_threeagent$impl$entities9918.
 */
threeagent.impl.entities.__GT_t_threeagent$impl$entities9918 = (function threeagent$impl$entities$__GT_t_threeagent$impl$entities9918(meta9919){
return (new threeagent.impl.entities.t_threeagent$impl$entities9918(meta9919));
});

}

return (new threeagent.impl.entities.t_threeagent$impl$entities9918(cljs.core.PersistentArrayMap.EMPTY));
})()
,threeagent.impl.entities.__GT_LightEntity((function (p__9921){
var map__9922 = p__9921;
var map__9922__$1 = cljs.core.__destructure_map(map__9922);
var sky_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9922__$1,new cljs.core.Keyword(null,"sky-color","sky-color",1803548607));
var ground_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9922__$1,new cljs.core.Keyword(null,"ground-color","ground-color",-1832095873));
var intensity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9922__$1,new cljs.core.Keyword(null,"intensity","intensity",1142770863));
return (new module$node_modules$three$build$three_module.HemisphereLight((function (){var or__4212__auto__ = sky_color;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (16777215);
}
})(),(function (){var or__4212__auto__ = ground_color;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (16777215);
}
})(),(function (){var or__4212__auto__ = intensity;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})()));
}),(function (o,cfg){
threeagent.impl.entities.apply_props_clj_BANG_(o,clojure.set.rename_keys(cfg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sky-color","sky-color",1803548607),new cljs.core.Keyword(null,"skyColor","skyColor",-1116053720),new cljs.core.Keyword(null,"ground-color","ground-color",-1832095873),new cljs.core.Keyword(null,"groundColor","groundColor",-2043012665)], null)));

return o;
})),threeagent.impl.entities.__GT_MeshEntity((function (p__9923){
var map__9924 = p__9923;
var map__9924__$1 = cljs.core.__destructure_map(map__9924);
var inner_radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9924__$1,new cljs.core.Keyword(null,"inner-radius","inner-radius",-681823510));
var outer_radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9924__$1,new cljs.core.Keyword(null,"outer-radius","outer-radius",1715267468));
var theta_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9924__$1,new cljs.core.Keyword(null,"theta-segments","theta-segments",-1631011703));
var phi_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9924__$1,new cljs.core.Keyword(null,"phi-segments","phi-segments",1443058713));
var theta_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9924__$1,new cljs.core.Keyword(null,"theta-start","theta-start",-1644036763));
var theta_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9924__$1,new cljs.core.Keyword(null,"theta-length","theta-length",-163292368));
return (new module$node_modules$three$build$three_module.RingGeometry((function (){var or__4212__auto__ = inner_radius;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return 0.5;
}
})(),(function (){var or__4212__auto__ = outer_radius;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return 1.0;
}
})(),(function (){var or__4212__auto__ = theta_segments;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (8);
}
})(),(function (){var or__4212__auto__ = phi_segments;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (8);
}
})(),(function (){var or__4212__auto__ = theta_start;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (0);
}
})(),(function (){var or__4212__auto__ = theta_length;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return threeagent.impl.util.pi_times_2;
}
})()));
})),(function (){
if((typeof threeagent !== 'undefined') && (typeof threeagent.impl !== 'undefined') && (typeof threeagent.impl.entities !== 'undefined') && (typeof threeagent.impl.entities.t_threeagent$impl$entities9925 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {threeagent.entity.IEntityType}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
threeagent.impl.entities.t_threeagent$impl$entities9925 = (function (meta9926){
this.meta9926 = meta9926;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(threeagent.impl.entities.t_threeagent$impl$entities9925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9927,meta9926__$1){
var self__ = this;
var _9927__$1 = this;
return (new threeagent.impl.entities.t_threeagent$impl$entities9925(meta9926__$1));
}));

(threeagent.impl.entities.t_threeagent$impl$entities9925.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9927){
var self__ = this;
var _9927__$1 = this;
return self__.meta9926;
}));

(threeagent.impl.entities.t_threeagent$impl$entities9925.prototype.threeagent$entity$IEntityType$ = cljs.core.PROTOCOL_SENTINEL);

(threeagent.impl.entities.t_threeagent$impl$entities9925.prototype.threeagent$entity$IEntityType$create$arity$3 = (function (_,___$1,p__9928){
var self__ = this;
var map__9929 = p__9928;
var map__9929__$1 = cljs.core.__destructure_map(map__9929);
var object = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9929__$1,new cljs.core.Keyword(null,"object","object",1474613949));
var ___$2 = this;
return object;
}));

(threeagent.impl.entities.t_threeagent$impl$entities9925.prototype.threeagent$entity$IEntityType$destroy_BANG_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
return null;
}));

(threeagent.impl.entities.t_threeagent$impl$entities9925.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta9926","meta9926",21888609,null)], null);
}));

(threeagent.impl.entities.t_threeagent$impl$entities9925.cljs$lang$type = true);

(threeagent.impl.entities.t_threeagent$impl$entities9925.cljs$lang$ctorStr = "threeagent.impl.entities/t_threeagent$impl$entities9925");

(threeagent.impl.entities.t_threeagent$impl$entities9925.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"threeagent.impl.entities/t_threeagent$impl$entities9925");
}));

/**
 * Positional factory function for threeagent.impl.entities/t_threeagent$impl$entities9925.
 */
threeagent.impl.entities.__GT_t_threeagent$impl$entities9925 = (function threeagent$impl$entities$__GT_t_threeagent$impl$entities9925(meta9926){
return (new threeagent.impl.entities.t_threeagent$impl$entities9925(meta9926));
});

}

return (new threeagent.impl.entities.t_threeagent$impl$entities9925(cljs.core.PersistentArrayMap.EMPTY));
})()
,(function (){
if((typeof threeagent !== 'undefined') && (typeof threeagent.impl !== 'undefined') && (typeof threeagent.impl.entities !== 'undefined') && (typeof threeagent.impl.entities.t_threeagent$impl$entities9930 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {threeagent.entity.IEntityType}
 * @implements {threeagent.entity.IUpdateableEntityType}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
threeagent.impl.entities.t_threeagent$impl$entities9930 = (function (meta9931){
this.meta9931 = meta9931;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(threeagent.impl.entities.t_threeagent$impl$entities9930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9932,meta9931__$1){
var self__ = this;
var _9932__$1 = this;
return (new threeagent.impl.entities.t_threeagent$impl$entities9930(meta9931__$1));
}));

(threeagent.impl.entities.t_threeagent$impl$entities9930.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9932){
var self__ = this;
var _9932__$1 = this;
return self__.meta9931;
}));

(threeagent.impl.entities.t_threeagent$impl$entities9930.prototype.threeagent$entity$IEntityType$ = cljs.core.PROTOCOL_SENTINEL);

(threeagent.impl.entities.t_threeagent$impl$entities9930.prototype.threeagent$entity$IEntityType$create$arity$3 = (function (_,___$1,cfg){
var self__ = this;
var ___$2 = this;
var cam = (new module$node_modules$three$build$three_module.PerspectiveCamera(75.0,1.0,0.1,2000.0));
(cam.active = true);

threeagent.impl.entities.apply_props_clj_BANG_(cam,cfg);

cam.updateProjectionMatrix();

return cam;
}));

(threeagent.impl.entities.t_threeagent$impl$entities9930.prototype.threeagent$entity$IEntityType$destroy_BANG_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
return null;
}));

(threeagent.impl.entities.t_threeagent$impl$entities9930.prototype.threeagent$entity$IUpdateableEntityType$ = cljs.core.PROTOCOL_SENTINEL);

(threeagent.impl.entities.t_threeagent$impl$entities9930.prototype.threeagent$entity$IUpdateableEntityType$update_BANG_$arity$4 = (function (_,___$1,o,cfg){
var self__ = this;
var ___$2 = this;
threeagent.impl.entities.apply_props_clj_BANG_(o,cfg);

o.updateProjectionMatrix();

return o;
}));

(threeagent.impl.entities.t_threeagent$impl$entities9930.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta9931","meta9931",13555478,null)], null);
}));

(threeagent.impl.entities.t_threeagent$impl$entities9930.cljs$lang$type = true);

(threeagent.impl.entities.t_threeagent$impl$entities9930.cljs$lang$ctorStr = "threeagent.impl.entities/t_threeagent$impl$entities9930");

(threeagent.impl.entities.t_threeagent$impl$entities9930.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"threeagent.impl.entities/t_threeagent$impl$entities9930");
}));

/**
 * Positional factory function for threeagent.impl.entities/t_threeagent$impl$entities9930.
 */
threeagent.impl.entities.__GT_t_threeagent$impl$entities9930 = (function threeagent$impl$entities$__GT_t_threeagent$impl$entities9930(meta9931){
return (new threeagent.impl.entities.t_threeagent$impl$entities9930(meta9931));
});

}

return (new threeagent.impl.entities.t_threeagent$impl$entities9930(cljs.core.PersistentArrayMap.EMPTY));
})()
,threeagent.impl.entities.__GT_MeshEntity((function (p__9933){
var map__9934 = p__9933;
var map__9934__$1 = cljs.core.__destructure_map(map__9934);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9934__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9934__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9934__$1,new cljs.core.Keyword(null,"width-segments","width-segments",25187827));
var height_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9934__$1,new cljs.core.Keyword(null,"height-segments","height-segments",1831894149));
return (new module$node_modules$three$build$three_module.PlaneGeometry((function (){var or__4212__auto__ = width;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})(),(function (){var or__4212__auto__ = height;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})(),(function (){var or__4212__auto__ = width_segments;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})(),(function (){var or__4212__auto__ = height_segments;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})()));
})),threeagent.impl.entities.__GT_MeshEntity((function (p__9935){
var map__9936 = p__9935;
var map__9936__$1 = cljs.core.__destructure_map(map__9936);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9936__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var tube = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9936__$1,new cljs.core.Keyword(null,"tube","tube",-67082178));
var tubular_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9936__$1,new cljs.core.Keyword(null,"tubular-segments","tubular-segments",1183061483));
var radial_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9936__$1,new cljs.core.Keyword(null,"radial-segments","radial-segments",-1625677103));
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9936__$1,new cljs.core.Keyword(null,"p","p",151049309));
var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9936__$1,new cljs.core.Keyword(null,"q","q",689001697));
return (new module$node_modules$three$build$three_module.TorusKnotGeometry((function (){var or__4212__auto__ = radius;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})(),(function (){var or__4212__auto__ = tube;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return 0.4;
}
})(),(function (){var or__4212__auto__ = tubular_segments;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (64);
}
})(),(function (){var or__4212__auto__ = radial_segments;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (8);
}
})(),(function (){var or__4212__auto__ = p;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (2);
}
})(),(function (){var or__4212__auto__ = q;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (3);
}
})()));
})),threeagent.impl.entities.__GT_MeshEntity((function (p__9937){
var map__9938 = p__9937;
var map__9938__$1 = cljs.core.__destructure_map(map__9938);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9938__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9938__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9938__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var width_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9938__$1,new cljs.core.Keyword(null,"width-segments","width-segments",25187827));
var height_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9938__$1,new cljs.core.Keyword(null,"height-segments","height-segments",1831894149));
var depth_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9938__$1,new cljs.core.Keyword(null,"depth-segments","depth-segments",1921571151));
return (new module$node_modules$three$build$three_module.BoxGeometry((function (){var or__4212__auto__ = width;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})(),(function (){var or__4212__auto__ = height;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})(),(function (){var or__4212__auto__ = depth;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})(),(function (){var or__4212__auto__ = width_segments;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})(),(function (){var or__4212__auto__ = height_segments;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})(),(function (){var or__4212__auto__ = depth_segments;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})()));
})),threeagent.impl.entities.__GT_MeshEntity((function (p__9939){
var map__9940 = p__9939;
var map__9940__$1 = cljs.core.__destructure_map(map__9940);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9940__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9940__$1,new cljs.core.Keyword(null,"segments","segments",1937535949));
var theta_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9940__$1,new cljs.core.Keyword(null,"theta-start","theta-start",-1644036763));
var theta_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9940__$1,new cljs.core.Keyword(null,"theta-length","theta-length",-163292368));
return (new module$node_modules$three$build$three_module.CircleGeometry((function (){var or__4212__auto__ = radius;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})(),(function (){var or__4212__auto__ = segments;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (8);
}
})(),(function (){var or__4212__auto__ = theta_start;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (0);
}
})(),(function (){var or__4212__auto__ = theta_length;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return threeagent.impl.util.pi_times_2;
}
})()));
})),threeagent.impl.entities.__GT_MeshEntity((function (p__9941){
var map__9942 = p__9941;
var map__9942__$1 = cljs.core.__destructure_map(map__9942);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9942__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var detail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9942__$1,new cljs.core.Keyword(null,"detail","detail",-1545345025));
return (new module$node_modules$three$build$three_module.Octahedron((function (){var or__4212__auto__ = radius;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})(),(function (){var or__4212__auto__ = detail;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (0);
}
})()));
})),threeagent.impl.entities.__GT_LightEntity((function (p__9943){
var map__9944 = p__9943;
var map__9944__$1 = cljs.core.__destructure_map(map__9944);
var intensity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9944__$1,new cljs.core.Keyword(null,"intensity","intensity",1142770863));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9944__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var distance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9944__$1,new cljs.core.Keyword(null,"distance","distance",-1671893894));
var angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9944__$1,new cljs.core.Keyword(null,"angle","angle",1622094254));
var penumbra = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9944__$1,new cljs.core.Keyword(null,"penumbra","penumbra",2008278688));
var decay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9944__$1,new cljs.core.Keyword(null,"decay","decay",1036712184));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9944__$1,new cljs.core.Keyword(null,"target","target",253001721));
var light = (new module$node_modules$three$build$three_module.SpotLight((function (){var or__4212__auto__ = color;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (16777215);
}
})(),(function (){var or__4212__auto__ = intensity;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return 1.0;
}
})(),(function (){var or__4212__auto__ = distance;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (0);
}
})(),(function (){var or__4212__auto__ = angle;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return threeagent.impl.util.pi_over_2;
}
})(),(function (){var or__4212__auto__ = penumbra;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (0);
}
})(),(function (){var or__4212__auto__ = decay;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return 1.0;
}
})()));
(light.originalTarget = light.target);

if(cljs.core.truth_(target)){
(light.target = target);
} else {
}

return light;
}),(function (o,p__9945){
var map__9946 = p__9945;
var map__9946__$1 = cljs.core.__destructure_map(map__9946);
var cfg = map__9946__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9946__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.truth_(target)){
(o.target = target);
} else {
(o.target = o.originalTarget);
}

threeagent.impl.entities.apply_props_clj_BANG_(o,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.Keyword(null,"target","target",253001721)));

return o;
})),threeagent.impl.entities.__GT_LightEntity((function (p__9947){
var map__9948 = p__9947;
var map__9948__$1 = cljs.core.__destructure_map(map__9948);
var intensity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9948__$1,new cljs.core.Keyword(null,"intensity","intensity",1142770863));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9948__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9948__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9948__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return (new module$node_modules$three$build$three_module.RectAreaLight((function (){var or__4212__auto__ = color;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (16777215);
}
})(),(function (){var or__4212__auto__ = intensity;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return 1.0;
}
})(),(function (){var or__4212__auto__ = width;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (10);
}
})(),(function (){var or__4212__auto__ = height;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (10);
}
})()));
}),(function (o,cfg){
threeagent.impl.entities.apply_props_clj_BANG_(o,cfg);

return o;
})),threeagent.impl.entities.__GT_MeshEntity((function (p__9949){
var map__9950 = p__9949;
var map__9950__$1 = cljs.core.__destructure_map(map__9950);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9950__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var tube = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9950__$1,new cljs.core.Keyword(null,"tube","tube",-67082178));
var radial_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9950__$1,new cljs.core.Keyword(null,"radial-segments","radial-segments",-1625677103));
var tubular_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9950__$1,new cljs.core.Keyword(null,"tubular-segments","tubular-segments",1183061483));
var arc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9950__$1,new cljs.core.Keyword(null,"arc","arc",252411045));
return (new module$node_modules$three$build$three_module.TorusGeometry((function (){var or__4212__auto__ = radius;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})(),(function (){var or__4212__auto__ = tube;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return 0.4;
}
})(),(function (){var or__4212__auto__ = radial_segments;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (8);
}
})(),(function (){var or__4212__auto__ = tubular_segments;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (6);
}
})(),(function (){var or__4212__auto__ = arc;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return threeagent.impl.util.pi_times_2;
}
})()));
})),threeagent.impl.entities.__GT_LightEntity((function (p__9951){
var map__9952 = p__9951;
var map__9952__$1 = cljs.core.__destructure_map(map__9952);
var intensity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9952__$1,new cljs.core.Keyword(null,"intensity","intensity",1142770863));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9952__$1,new cljs.core.Keyword(null,"color","color",1011675173));
return (new module$node_modules$three$build$three_module.AmbientLight((function (){var or__4212__auto__ = color;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (16777215);
}
})(),(function (){var or__4212__auto__ = intensity;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return 1.0;
}
})()));
}),(function (o,cfg){
threeagent.impl.entities.apply_props_clj_BANG_(o,cfg);

return o;
})),threeagent.impl.entities.__GT_MeshEntity((function (p__9953){
var map__9954 = p__9953;
var map__9954__$1 = cljs.core.__destructure_map(map__9954);
var radius_top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9954__$1,new cljs.core.Keyword(null,"radius-top","radius-top",-343423468));
var radius_bottom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9954__$1,new cljs.core.Keyword(null,"radius-bottom","radius-bottom",-1077150367));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9954__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var radial_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9954__$1,new cljs.core.Keyword(null,"radial-segments","radial-segments",-1625677103));
var height_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9954__$1,new cljs.core.Keyword(null,"height-segments","height-segments",1831894149));
var open_ended_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9954__$1,new cljs.core.Keyword(null,"open-ended?","open-ended?",196876425));
var theta_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9954__$1,new cljs.core.Keyword(null,"theta-start","theta-start",-1644036763));
var theta_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9954__$1,new cljs.core.Keyword(null,"theta-length","theta-length",-163292368));
return (new module$node_modules$three$build$three_module.CylinderGeometry((function (){var or__4212__auto__ = radius_top;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})(),(function (){var or__4212__auto__ = radius_bottom;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})(),(function (){var or__4212__auto__ = height;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})(),(function (){var or__4212__auto__ = radial_segments;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (8);
}
})(),(function (){var or__4212__auto__ = height_segments;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})(),open_ended_QMARK_,(function (){var or__4212__auto__ = theta_start;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (0);
}
})(),(function (){var or__4212__auto__ = theta_length;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return threeagent.impl.util.pi_times_2;
}
})()));
})),threeagent.impl.entities.__GT_MeshEntity((function (p__9955){
var map__9956 = p__9955;
var map__9956__$1 = cljs.core.__destructure_map(map__9956);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9956__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
return (new module$node_modules$three$build$three_module.ShapeGeometry(shape));
})),threeagent.impl.entities.__GT_MeshEntity((function (p__9957){
var map__9958 = p__9957;
var map__9958__$1 = cljs.core.__destructure_map(map__9958);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9958__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9958__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var radial_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9958__$1,new cljs.core.Keyword(null,"radial-segments","radial-segments",-1625677103));
var height_segments = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9958__$1,new cljs.core.Keyword(null,"height-segments","height-segments",1831894149));
var open_ended_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9958__$1,new cljs.core.Keyword(null,"open-ended?","open-ended?",196876425));
var theta_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9958__$1,new cljs.core.Keyword(null,"theta-start","theta-start",-1644036763));
var theta_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9958__$1,new cljs.core.Keyword(null,"theta-length","theta-length",-163292368));
return (new module$node_modules$three$build$three_module.ConeGeometry((function (){var or__4212__auto__ = radius;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})(),(function (){var or__4212__auto__ = height;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})(),(function (){var or__4212__auto__ = radial_segments;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (8);
}
})(),(function (){var or__4212__auto__ = height_segments;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})(),open_ended_QMARK_,(function (){var or__4212__auto__ = theta_start;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (0);
}
})(),(function (){var or__4212__auto__ = theta_length;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return threeagent.impl.util.pi_times_2;
}
})()));
})),threeagent.impl.entities.__GT_MeshEntity((function (p__9959){
var map__9960 = p__9959;
var map__9960__$1 = cljs.core.__destructure_map(map__9960);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9960__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var detail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9960__$1,new cljs.core.Keyword(null,"detail","detail",-1545345025));
return (new module$node_modules$three$build$three_module.Icosahedron((function (){var or__4212__auto__ = radius;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})(),(function (){var or__4212__auto__ = detail;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (0);
}
})()));
})),(function (){
if((typeof threeagent !== 'undefined') && (typeof threeagent.impl !== 'undefined') && (typeof threeagent.impl.entities !== 'undefined') && (typeof threeagent.impl.entities.t_threeagent$impl$entities9961 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {threeagent.entity.IEntityType}
 * @implements {threeagent.entity.IUpdateableEntityType}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
threeagent.impl.entities.t_threeagent$impl$entities9961 = (function (meta9962){
this.meta9962 = meta9962;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(threeagent.impl.entities.t_threeagent$impl$entities9961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9963,meta9962__$1){
var self__ = this;
var _9963__$1 = this;
return (new threeagent.impl.entities.t_threeagent$impl$entities9961(meta9962__$1));
}));

(threeagent.impl.entities.t_threeagent$impl$entities9961.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9963){
var self__ = this;
var _9963__$1 = this;
return self__.meta9962;
}));

(threeagent.impl.entities.t_threeagent$impl$entities9961.prototype.threeagent$entity$IEntityType$ = cljs.core.PROTOCOL_SENTINEL);

(threeagent.impl.entities.t_threeagent$impl$entities9961.prototype.threeagent$entity$IEntityType$create$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return (new module$node_modules$three$build$three_module.Object3D());
}));

(threeagent.impl.entities.t_threeagent$impl$entities9961.prototype.threeagent$entity$IEntityType$destroy_BANG_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
return null;
}));

(threeagent.impl.entities.t_threeagent$impl$entities9961.prototype.threeagent$entity$IUpdateableEntityType$ = cljs.core.PROTOCOL_SENTINEL);

(threeagent.impl.entities.t_threeagent$impl$entities9961.prototype.threeagent$entity$IUpdateableEntityType$update_BANG_$arity$4 = (function (_,___$1,obj,___$2){
var self__ = this;
var ___$3 = this;
return obj;
}));

(threeagent.impl.entities.t_threeagent$impl$entities9961.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta9962","meta9962",1295439451,null)], null);
}));

(threeagent.impl.entities.t_threeagent$impl$entities9961.cljs$lang$type = true);

(threeagent.impl.entities.t_threeagent$impl$entities9961.cljs$lang$ctorStr = "threeagent.impl.entities/t_threeagent$impl$entities9961");

(threeagent.impl.entities.t_threeagent$impl$entities9961.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"threeagent.impl.entities/t_threeagent$impl$entities9961");
}));

/**
 * Positional factory function for threeagent.impl.entities/t_threeagent$impl$entities9961.
 */
threeagent.impl.entities.__GT_t_threeagent$impl$entities9961 = (function threeagent$impl$entities$__GT_t_threeagent$impl$entities9961(meta9962){
return (new threeagent.impl.entities.t_threeagent$impl$entities9961(meta9962));
});

}

return (new threeagent.impl.entities.t_threeagent$impl$entities9961(cljs.core.PersistentArrayMap.EMPTY));
})()
,threeagent.impl.entities.__GT_MeshEntity((function (p__9964){
var map__9965 = p__9964;
var map__9965__$1 = cljs.core.__destructure_map(map__9965);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9965__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var detail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9965__$1,new cljs.core.Keyword(null,"detail","detail",-1545345025));
return (new module$node_modules$three$build$three_module.TetrahedronGeometry((function (){var or__4212__auto__ = radius;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})(),(function (){var or__4212__auto__ = detail;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (0);
}
})()));
})),threeagent.impl.entities.__GT_MeshEntity((function (p__9966){
var map__9967 = p__9966;
var map__9967__$1 = cljs.core.__destructure_map(map__9967);
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9967__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var detail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9967__$1,new cljs.core.Keyword(null,"detail","detail",-1545345025));
return (new module$node_modules$three$build$three_module.DodecahedronGeometry((function (){var or__4212__auto__ = radius;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})(),(function (){var or__4212__auto__ = detail;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (0);
}
})()));
})),(function (){
if((typeof threeagent !== 'undefined') && (typeof threeagent.impl !== 'undefined') && (typeof threeagent.impl.entities !== 'undefined') && (typeof threeagent.impl.entities.t_threeagent$impl$entities9968 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {threeagent.entity.IEntityType}
 * @implements {threeagent.entity.IUpdateableEntityType}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
threeagent.impl.entities.t_threeagent$impl$entities9968 = (function (meta9969){
this.meta9969 = meta9969;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(threeagent.impl.entities.t_threeagent$impl$entities9968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9970,meta9969__$1){
var self__ = this;
var _9970__$1 = this;
return (new threeagent.impl.entities.t_threeagent$impl$entities9968(meta9969__$1));
}));

(threeagent.impl.entities.t_threeagent$impl$entities9968.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9970){
var self__ = this;
var _9970__$1 = this;
return self__.meta9969;
}));

(threeagent.impl.entities.t_threeagent$impl$entities9968.prototype.threeagent$entity$IEntityType$ = cljs.core.PROTOCOL_SENTINEL);

(threeagent.impl.entities.t_threeagent$impl$entities9968.prototype.threeagent$entity$IEntityType$create$arity$3 = (function (_,___$1,cfg){
var self__ = this;
var ___$2 = this;
var cam = (new module$node_modules$three$build$three_module.OrthographicCamera((-1),(1),(1),(-1),0.1,2000.0));
(cam.active = true);

threeagent.impl.entities.apply_props_clj_BANG_(cam,cfg);

cam.updateProjectionMatrix();

return cam;
}));

(threeagent.impl.entities.t_threeagent$impl$entities9968.prototype.threeagent$entity$IEntityType$destroy_BANG_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
return null;
}));

(threeagent.impl.entities.t_threeagent$impl$entities9968.prototype.threeagent$entity$IUpdateableEntityType$ = cljs.core.PROTOCOL_SENTINEL);

(threeagent.impl.entities.t_threeagent$impl$entities9968.prototype.threeagent$entity$IUpdateableEntityType$update_BANG_$arity$4 = (function (_,___$1,o,cfg){
var self__ = this;
var ___$2 = this;
threeagent.impl.entities.apply_props_clj_BANG_(o,cfg);

o.updateProjectionMatrix();

return o;
}));

(threeagent.impl.entities.t_threeagent$impl$entities9968.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta9969","meta9969",702267929,null)], null);
}));

(threeagent.impl.entities.t_threeagent$impl$entities9968.cljs$lang$type = true);

(threeagent.impl.entities.t_threeagent$impl$entities9968.cljs$lang$ctorStr = "threeagent.impl.entities/t_threeagent$impl$entities9968");

(threeagent.impl.entities.t_threeagent$impl$entities9968.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"threeagent.impl.entities/t_threeagent$impl$entities9968");
}));

/**
 * Positional factory function for threeagent.impl.entities/t_threeagent$impl$entities9968.
 */
threeagent.impl.entities.__GT_t_threeagent$impl$entities9968 = (function threeagent$impl$entities$__GT_t_threeagent$impl$entities9968(meta9969){
return (new threeagent.impl.entities.t_threeagent$impl$entities9968(meta9969));
});

}

return (new threeagent.impl.entities.t_threeagent$impl$entities9968(cljs.core.PersistentArrayMap.EMPTY));
})()
]);

//# sourceMappingURL=threeagent.impl.entities.js.map
