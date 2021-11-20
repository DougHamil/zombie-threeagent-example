goog.provide('threeagent.impl.scene');
var module$node_modules$three$build$three_module=shadow.js.require("module$node_modules$three$build$three_module", {});
if((typeof threeagent !== 'undefined') && (typeof threeagent.impl !== 'undefined') && (typeof threeagent.impl.scene !== 'undefined') && (typeof threeagent.impl.scene.contexts !== 'undefined')){
} else {
threeagent.impl.scene.contexts = [];
}
threeagent.impl.scene.raw_context__GT_context = (function threeagent$impl$scene$raw_context__GT_context(raw_ctx){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"threejs-renderer","threejs-renderer",468746733),raw_ctx.renderer,new cljs.core.Keyword(null,"threejs-scene","threejs-scene",754266515),raw_ctx.sceneRoot,new cljs.core.Keyword(null,"threejs-default-camera","threejs-default-camera",589639313),raw_ctx.defaultCamera,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),raw_ctx.canvas], null);
});
threeagent.impl.scene.in_place_update_QMARK_ = (function threeagent$impl$scene$in_place_update_QMARK_(ctx,node){
var entity_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ctx.entityTypes,new cljs.core.Keyword(null,"component-key","component-key",1189239034).cljs$core$IFn$_invoke$arity$1(node.data));
if((!((entity_type == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === entity_type.threeagent$entity$IUpdateableEntityType$)))){
return true;
} else {
if((!entity_type.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(threeagent.entity.IUpdateableEntityType,entity_type);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(threeagent.entity.IUpdateableEntityType,entity_type);
}
});
threeagent.impl.scene.portal_QMARK_ = (function threeagent$impl$scene$portal_QMARK_(node){
return (!((node.portalPath == null)));
});
threeagent.impl.scene.on_entity_removed = (function threeagent$impl$scene$on_entity_removed(ctx,node,old_obj,old_component_config){
var temp__5753__auto___10292 = new cljs.core.Keyword(null,"on-removed","on-removed",-1308728142).cljs$core$IFn$_invoke$arity$1(node.meta);
if(cljs.core.truth_(temp__5753__auto___10292)){
var callback_10293 = temp__5753__auto___10292;
(callback_10293.cljs$core$IFn$_invoke$arity$1 ? callback_10293.cljs$core$IFn$_invoke$arity$1(old_obj) : callback_10293.call(null,old_obj));
} else {
}

var temp__5753__auto___10294 = new cljs.core.Keyword(null,"on-removed","on-removed",-1308728142).cljs$core$IFn$_invoke$arity$1(old_component_config);
if(cljs.core.truth_(temp__5753__auto___10294)){
var on_removed_10295 = temp__5753__auto___10294;
(on_removed_10295.cljs$core$IFn$_invoke$arity$1 ? on_removed_10295.cljs$core$IFn$_invoke$arity$1(old_obj) : on_removed_10295.call(null,old_obj));
} else {
}

var callbacks = threeagent.impl.system.dispatch_on_removed(ctx,node.context,node.id,old_obj,old_component_config);
if(cljs.core.truth_(old_obj.isCamera)){
if(cljs.core.truth_(old_obj.active)){
(ctx.camera = ctx.lastCamera);
} else {
}

var cams_10296 = ctx.cameras;
cams_10296.splice(cams_10296.indexOf(old_obj),(1));
} else {
}

return callbacks;
});
threeagent.impl.scene.on_entity_added = (function threeagent$impl$scene$on_entity_added(ctx,node,obj,component_config){
var temp__5753__auto___10297 = new cljs.core.Keyword(null,"on-added","on-added",-54041858).cljs$core$IFn$_invoke$arity$1(node.meta);
if(cljs.core.truth_(temp__5753__auto___10297)){
var callback_10298 = temp__5753__auto___10297;
(callback_10298.cljs$core$IFn$_invoke$arity$1 ? callback_10298.cljs$core$IFn$_invoke$arity$1(obj) : callback_10298.call(null,obj));
} else {
}

var temp__5753__auto___10299 = new cljs.core.Keyword(null,"on-added","on-added",-54041858).cljs$core$IFn$_invoke$arity$1(component_config);
if(cljs.core.truth_(temp__5753__auto___10299)){
var on_added_10300 = temp__5753__auto___10299;
(on_added_10300.cljs$core$IFn$_invoke$arity$1 ? on_added_10300.cljs$core$IFn$_invoke$arity$1(obj) : on_added_10300.call(null,obj));
} else {
}

var temp__5753__auto___10301 = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(component_config);
if(cljs.core.truth_(temp__5753__auto___10301)){
var ref_10302 = temp__5753__auto___10301;
(ref_10302.cljs$core$IFn$_invoke$arity$1 ? ref_10302.cljs$core$IFn$_invoke$arity$1(obj) : ref_10302.call(null,obj));
} else {
}

var callbacks = threeagent.impl.system.dispatch_on_added(ctx,node.context,node.id,obj,component_config);
if(cljs.core.truth_(obj.isCamera)){
if(cljs.core.truth_(obj.active)){
(ctx.lastCamera = ctx.camera);

(ctx.camera = obj);
} else {
}

ctx.cameras.push(obj);
} else {
}

return callbacks;
});
threeagent.impl.scene.create_entity_object = (function threeagent$impl$scene$create_entity_object(ctx,node){
var map__10246 = node.data;
var map__10246__$1 = cljs.core.__destructure_map(map__10246);
var component_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10246__$1,new cljs.core.Keyword(null,"component-config","component-config",2000790546));
var component_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10246__$1,new cljs.core.Keyword(null,"component-key","component-key",1189239034));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10246__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var rotation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10246__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10246__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ctx.entityTypes,component_key);
if(cljs.core.truth_(temp__5751__auto__)){
var entity_type = temp__5751__auto__;
var obj = threeagent.entity.create(entity_type,node.context,component_config);
threeagent.impl.threejs.set_position_BANG_(obj,position);

threeagent.impl.threejs.set_rotation_BANG_(obj,rotation);

threeagent.impl.threejs.set_scale_BANG_(obj,scale);

return obj;
} else {
throw (new Error(["Cannot find entity-type for keyword '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_key),"'"].join(''),node));
}
});
threeagent.impl.scene.resolve_portal_object = (function threeagent$impl$scene$resolve_portal_object(default_parent,node){
var path = node.portalPath;
var parent = threeagent.impl.threejs.get_in(default_parent,path);
if(cljs.core.truth_(parent)){
} else {
console.error(["Invalid portal path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join(''),default_parent);

throw (new Error(["Portal path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"' is invalid."].join('')));
}

return parent;
});
threeagent.impl.scene.create_entity = (function threeagent$impl$scene$create_entity(var_args){
var G__10248 = arguments.length;
switch (G__10248) {
case 3:
return threeagent.impl.scene.create_entity.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return threeagent.impl.scene.create_entity.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(threeagent.impl.scene.create_entity.cljs$core$IFn$_invoke$arity$3 = (function (ctx,parent_object,node){
return threeagent.impl.scene.create_entity.cljs$core$IFn$_invoke$arity$4(ctx,parent_object,node,threeagent.impl.scene.portal_QMARK_(node));
}));

(threeagent.impl.scene.create_entity.cljs$core$IFn$_invoke$arity$4 = (function (ctx,parent,node,portal_QMARK_){
var map__10249 = node.data;
var map__10249__$1 = cljs.core.__destructure_map(map__10249);
var component_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10249__$1,new cljs.core.Keyword(null,"component-config","component-config",2000790546));
var obj = (cljs.core.truth_(portal_QMARK_)?threeagent.impl.scene.resolve_portal_object(parent,node):threeagent.impl.scene.create_entity_object(ctx,node));
if(cljs.core.truth_(portal_QMARK_)){
} else {
parent.add(obj);
}

(node.threejs = obj);

var post_added_fns_10304 = threeagent.impl.scene.on_entity_added(ctx,node,obj,component_config);
node.for_each_child(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(threeagent.impl.scene.create_entity,ctx,obj));

var seq__10250_10305 = cljs.core.seq(post_added_fns_10304);
var chunk__10251_10306 = null;
var count__10252_10307 = (0);
var i__10253_10308 = (0);
while(true){
if((i__10253_10308 < count__10252_10307)){
var cb_10309 = chunk__10251_10306.cljs$core$IIndexed$_nth$arity$2(null,i__10253_10308);
(cb_10309.cljs$core$IFn$_invoke$arity$0 ? cb_10309.cljs$core$IFn$_invoke$arity$0() : cb_10309.call(null));


var G__10310 = seq__10250_10305;
var G__10311 = chunk__10251_10306;
var G__10312 = count__10252_10307;
var G__10313 = (i__10253_10308 + (1));
seq__10250_10305 = G__10310;
chunk__10251_10306 = G__10311;
count__10252_10307 = G__10312;
i__10253_10308 = G__10313;
continue;
} else {
var temp__5753__auto___10314 = cljs.core.seq(seq__10250_10305);
if(temp__5753__auto___10314){
var seq__10250_10315__$1 = temp__5753__auto___10314;
if(cljs.core.chunked_seq_QMARK_(seq__10250_10315__$1)){
var c__4638__auto___10316 = cljs.core.chunk_first(seq__10250_10315__$1);
var G__10317 = cljs.core.chunk_rest(seq__10250_10315__$1);
var G__10318 = c__4638__auto___10316;
var G__10319 = cljs.core.count(c__4638__auto___10316);
var G__10320 = (0);
seq__10250_10305 = G__10317;
chunk__10251_10306 = G__10318;
count__10252_10307 = G__10319;
i__10253_10308 = G__10320;
continue;
} else {
var cb_10321 = cljs.core.first(seq__10250_10315__$1);
(cb_10321.cljs$core$IFn$_invoke$arity$0 ? cb_10321.cljs$core$IFn$_invoke$arity$0() : cb_10321.call(null));


var G__10322 = cljs.core.next(seq__10250_10315__$1);
var G__10323 = null;
var G__10324 = (0);
var G__10325 = (0);
seq__10250_10305 = G__10322;
chunk__10251_10306 = G__10323;
count__10252_10307 = G__10324;
i__10253_10308 = G__10325;
continue;
}
} else {
}
}
break;
}

return obj;
}));

(threeagent.impl.scene.create_entity.cljs$lang$maxFixedArity = 4);

threeagent.impl.scene.destroy_entity = (function threeagent$impl$scene$destroy_entity(ctx,node){
if(threeagent.impl.scene.portal_QMARK_(node)){
return node.for_each_child(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(threeagent.impl.scene.destroy_entity,ctx));
} else {
var map__10254 = node.data;
var map__10254__$1 = cljs.core.__destructure_map(map__10254);
var component_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10254__$1,new cljs.core.Keyword(null,"component-key","component-key",1189239034));
var component_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10254__$1,new cljs.core.Keyword(null,"component-config","component-config",2000790546));
var entity_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ctx.entityTypes,component_key);
var obj = node.threejs;
var post_removed_fns_10326 = threeagent.impl.scene.on_entity_removed(ctx,node,obj,component_config);
node.for_each_child(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(threeagent.impl.scene.destroy_entity,ctx));

var seq__10255_10327 = cljs.core.seq(post_removed_fns_10326);
var chunk__10256_10328 = null;
var count__10257_10329 = (0);
var i__10258_10330 = (0);
while(true){
if((i__10258_10330 < count__10257_10329)){
var cb_10331 = chunk__10256_10328.cljs$core$IIndexed$_nth$arity$2(null,i__10258_10330);
(cb_10331.cljs$core$IFn$_invoke$arity$0 ? cb_10331.cljs$core$IFn$_invoke$arity$0() : cb_10331.call(null));


var G__10332 = seq__10255_10327;
var G__10333 = chunk__10256_10328;
var G__10334 = count__10257_10329;
var G__10335 = (i__10258_10330 + (1));
seq__10255_10327 = G__10332;
chunk__10256_10328 = G__10333;
count__10257_10329 = G__10334;
i__10258_10330 = G__10335;
continue;
} else {
var temp__5753__auto___10336 = cljs.core.seq(seq__10255_10327);
if(temp__5753__auto___10336){
var seq__10255_10337__$1 = temp__5753__auto___10336;
if(cljs.core.chunked_seq_QMARK_(seq__10255_10337__$1)){
var c__4638__auto___10338 = cljs.core.chunk_first(seq__10255_10337__$1);
var G__10339 = cljs.core.chunk_rest(seq__10255_10337__$1);
var G__10340 = c__4638__auto___10338;
var G__10341 = cljs.core.count(c__4638__auto___10338);
var G__10342 = (0);
seq__10255_10327 = G__10339;
chunk__10256_10328 = G__10340;
count__10257_10329 = G__10341;
i__10258_10330 = G__10342;
continue;
} else {
var cb_10343 = cljs.core.first(seq__10255_10337__$1);
(cb_10343.cljs$core$IFn$_invoke$arity$0 ? cb_10343.cljs$core$IFn$_invoke$arity$0() : cb_10343.call(null));


var G__10344 = cljs.core.next(seq__10255_10337__$1);
var G__10345 = null;
var G__10346 = (0);
var G__10347 = (0);
seq__10255_10327 = G__10344;
chunk__10256_10328 = G__10345;
count__10257_10329 = G__10346;
i__10258_10330 = G__10347;
continue;
}
} else {
}
}
break;
}

var temp__5753__auto___10348 = obj.parent;
if(cljs.core.truth_(temp__5753__auto___10348)){
var parent_10349 = temp__5753__auto___10348;
parent_10349.remove(obj);
} else {
}

return threeagent.entity.destroy_BANG_(entity_type,node.context,obj,component_config);
}
});
threeagent.impl.scene.update_entity = (function threeagent$impl$scene$update_entity(ctx,node,old_data,new_data){
var map__10259 = new_data;
var map__10259__$1 = cljs.core.__destructure_map(map__10259);
var component_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10259__$1,new cljs.core.Keyword(null,"component-config","component-config",2000790546));
var component_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10259__$1,new cljs.core.Keyword(null,"component-key","component-key",1189239034));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10259__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var rotation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10259__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10259__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var entity_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ctx.entityTypes,component_key);
var obj = node.threejs;
var seq__10260_10350 = cljs.core.seq(threeagent.impl.scene.on_entity_removed(ctx,node,obj,new cljs.core.Keyword(null,"component-config","component-config",2000790546).cljs$core$IFn$_invoke$arity$1(old_data)));
var chunk__10261_10351 = null;
var count__10262_10352 = (0);
var i__10263_10353 = (0);
while(true){
if((i__10263_10353 < count__10262_10352)){
var cb_10354 = chunk__10261_10351.cljs$core$IIndexed$_nth$arity$2(null,i__10263_10353);
(cb_10354.cljs$core$IFn$_invoke$arity$0 ? cb_10354.cljs$core$IFn$_invoke$arity$0() : cb_10354.call(null));


var G__10355 = seq__10260_10350;
var G__10356 = chunk__10261_10351;
var G__10357 = count__10262_10352;
var G__10358 = (i__10263_10353 + (1));
seq__10260_10350 = G__10355;
chunk__10261_10351 = G__10356;
count__10262_10352 = G__10357;
i__10263_10353 = G__10358;
continue;
} else {
var temp__5753__auto___10359 = cljs.core.seq(seq__10260_10350);
if(temp__5753__auto___10359){
var seq__10260_10360__$1 = temp__5753__auto___10359;
if(cljs.core.chunked_seq_QMARK_(seq__10260_10360__$1)){
var c__4638__auto___10361 = cljs.core.chunk_first(seq__10260_10360__$1);
var G__10362 = cljs.core.chunk_rest(seq__10260_10360__$1);
var G__10363 = c__4638__auto___10361;
var G__10364 = cljs.core.count(c__4638__auto___10361);
var G__10365 = (0);
seq__10260_10350 = G__10362;
chunk__10261_10351 = G__10363;
count__10262_10352 = G__10364;
i__10263_10353 = G__10365;
continue;
} else {
var cb_10366 = cljs.core.first(seq__10260_10360__$1);
(cb_10366.cljs$core$IFn$_invoke$arity$0 ? cb_10366.cljs$core$IFn$_invoke$arity$0() : cb_10366.call(null));


var G__10367 = cljs.core.next(seq__10260_10360__$1);
var G__10368 = null;
var G__10369 = (0);
var G__10370 = (0);
seq__10260_10350 = G__10367;
chunk__10261_10351 = G__10368;
count__10262_10352 = G__10369;
i__10263_10353 = G__10370;
continue;
}
} else {
}
}
break;
}

threeagent.entity.update_BANG_(entity_type,node.context,obj,component_config);

threeagent.impl.threejs.set_position_BANG_(obj,position);

threeagent.impl.threejs.set_rotation_BANG_(obj,rotation);

threeagent.impl.threejs.set_scale_BANG_(obj,scale);

var seq__10264_10371 = cljs.core.seq(threeagent.impl.scene.on_entity_added(ctx,node,obj,component_config));
var chunk__10265_10372 = null;
var count__10266_10373 = (0);
var i__10267_10374 = (0);
while(true){
if((i__10267_10374 < count__10266_10373)){
var cb_10375 = chunk__10265_10372.cljs$core$IIndexed$_nth$arity$2(null,i__10267_10374);
(cb_10375.cljs$core$IFn$_invoke$arity$0 ? cb_10375.cljs$core$IFn$_invoke$arity$0() : cb_10375.call(null));


var G__10376 = seq__10264_10371;
var G__10377 = chunk__10265_10372;
var G__10378 = count__10266_10373;
var G__10379 = (i__10267_10374 + (1));
seq__10264_10371 = G__10376;
chunk__10265_10372 = G__10377;
count__10266_10373 = G__10378;
i__10267_10374 = G__10379;
continue;
} else {
var temp__5753__auto___10380 = cljs.core.seq(seq__10264_10371);
if(temp__5753__auto___10380){
var seq__10264_10381__$1 = temp__5753__auto___10380;
if(cljs.core.chunked_seq_QMARK_(seq__10264_10381__$1)){
var c__4638__auto___10382 = cljs.core.chunk_first(seq__10264_10381__$1);
var G__10383 = cljs.core.chunk_rest(seq__10264_10381__$1);
var G__10384 = c__4638__auto___10382;
var G__10385 = cljs.core.count(c__4638__auto___10382);
var G__10386 = (0);
seq__10264_10371 = G__10383;
chunk__10265_10372 = G__10384;
count__10266_10373 = G__10385;
i__10267_10374 = G__10386;
continue;
} else {
var cb_10387 = cljs.core.first(seq__10264_10381__$1);
(cb_10387.cljs$core$IFn$_invoke$arity$0 ? cb_10387.cljs$core$IFn$_invoke$arity$0() : cb_10387.call(null));


var G__10388 = cljs.core.next(seq__10264_10381__$1);
var G__10389 = null;
var G__10390 = (0);
var G__10391 = (0);
seq__10264_10371 = G__10388;
chunk__10265_10372 = G__10389;
count__10266_10373 = G__10390;
i__10267_10374 = G__10391;
continue;
}
} else {
}
}
break;
}

return obj;
});
threeagent.impl.scene.transform_entity = (function threeagent$impl$scene$transform_entity(_ctx,node){
var map__10268 = node.data;
var map__10268__$1 = cljs.core.__destructure_map(map__10268);
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10268__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var rotation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10268__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10268__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var obj = node.threejs;
threeagent.impl.threejs.set_position_BANG_(obj,position);

threeagent.impl.threejs.set_rotation_BANG_(obj,rotation);

return threeagent.impl.threejs.set_scale_BANG_(obj,scale);
});
/**
 * Destroy and recreate an entity at a given node in the scene-graph
 */
threeagent.impl.scene.replace_entity = (function threeagent$impl$scene$replace_entity(ctx,node,old_data,new_data){
var old_obj = node.threejs;
var map__10269 = old_data;
var map__10269__$1 = cljs.core.__destructure_map(map__10269);
var old_component_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10269__$1,new cljs.core.Keyword(null,"component-key","component-key",1189239034));
var old_component_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10269__$1,new cljs.core.Keyword(null,"component-config","component-config",2000790546));
var old_entity_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ctx.entityTypes,old_component_key);
var parent_obj = old_obj.parent;
var children = old_obj.children;
threeagent.impl.scene.on_entity_removed(ctx,node,old_obj,old_component_config);

threeagent.entity.destroy_BANG_(old_entity_type,node.context,old_obj,old_component_config);

var new_obj = threeagent.impl.scene.create_entity_object(ctx,node);
(node.threejs = new_obj);

parent_obj.remove(old_obj);

parent_obj.add(new_obj);

if(cljs.core.truth_(node.terminal_QMARK_())){
} else {
var seq__10270_10392 = cljs.core.seq(cljs.core.aclone(children));
var chunk__10271_10393 = null;
var count__10272_10394 = (0);
var i__10273_10395 = (0);
while(true){
if((i__10273_10395 < count__10272_10394)){
var child_10396 = chunk__10271_10393.cljs$core$IIndexed$_nth$arity$2(null,i__10273_10395);
new_obj.add(child_10396);


var G__10397 = seq__10270_10392;
var G__10398 = chunk__10271_10393;
var G__10399 = count__10272_10394;
var G__10400 = (i__10273_10395 + (1));
seq__10270_10392 = G__10397;
chunk__10271_10393 = G__10398;
count__10272_10394 = G__10399;
i__10273_10395 = G__10400;
continue;
} else {
var temp__5753__auto___10401 = cljs.core.seq(seq__10270_10392);
if(temp__5753__auto___10401){
var seq__10270_10402__$1 = temp__5753__auto___10401;
if(cljs.core.chunked_seq_QMARK_(seq__10270_10402__$1)){
var c__4638__auto___10403 = cljs.core.chunk_first(seq__10270_10402__$1);
var G__10404 = cljs.core.chunk_rest(seq__10270_10402__$1);
var G__10405 = c__4638__auto___10403;
var G__10406 = cljs.core.count(c__4638__auto___10403);
var G__10407 = (0);
seq__10270_10392 = G__10404;
chunk__10271_10393 = G__10405;
count__10272_10394 = G__10406;
i__10273_10395 = G__10407;
continue;
} else {
var child_10408 = cljs.core.first(seq__10270_10402__$1);
new_obj.add(child_10408);


var G__10409 = cljs.core.next(seq__10270_10402__$1);
var G__10410 = null;
var G__10411 = (0);
var G__10412 = (0);
seq__10270_10392 = G__10409;
chunk__10271_10393 = G__10410;
count__10272_10394 = G__10411;
i__10273_10395 = G__10412;
continue;
}
} else {
}
}
break;
}
}

return threeagent.impl.scene.on_entity_added(ctx,node,new_obj,new cljs.core.Keyword(null,"component-config","component-config",2000790546).cljs$core$IFn$_invoke$arity$1(new_data));
});
threeagent.impl.scene.init_scene_BANG_ = (function threeagent$impl$scene$init_scene_BANG_(context,virtual_scene,scene_root){
return threeagent.impl.scene.create_entity.cljs$core$IFn$_invoke$arity$3(context,scene_root,virtual_scene.root);
});
threeagent.impl.scene.update_type = (function threeagent$impl$scene$update_type(context,node,o,n){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"component-key","component-key",1189239034).cljs$core$IFn$_invoke$arity$1(o),new cljs.core.Keyword(null,"component-key","component-key",1189239034).cljs$core$IFn$_invoke$arity$1(n))){
return new cljs.core.Keyword(null,"replace-entity","replace-entity",1298949311);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"component-config","component-config",2000790546).cljs$core$IFn$_invoke$arity$1(o),new cljs.core.Keyword(null,"component-config","component-config",2000790546).cljs$core$IFn$_invoke$arity$1(n))){
if(threeagent.impl.scene.in_place_update_QMARK_(context,node)){
return new cljs.core.Keyword(null,"update-entity","update-entity",-2127937836);
} else {
return new cljs.core.Keyword(null,"replace-entity","replace-entity",1298949311);
}
} else {
return new cljs.core.Keyword(null,"transform-entity","transform-entity",-9363241);

}
}
});
threeagent.impl.scene.apply_change_BANG_ = (function threeagent$impl$scene$apply_change_BANG_(context,p__10274){
var vec__10275 = p__10274;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10275,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10275,(1),null);
var old_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10275,(2),null);
var new_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10275,(3),null);
var G__10278 = action;
var G__10278__$1 = (((G__10278 instanceof cljs.core.Keyword))?G__10278.fqn:null);
switch (G__10278__$1) {
case "add":
return threeagent.impl.scene.create_entity.cljs$core$IFn$_invoke$arity$3(context,node.parent.threejs,node);

break;
case "remove":
return threeagent.impl.scene.destroy_entity(context,node);

break;
case "update":
var G__10279 = threeagent.impl.scene.update_type(context,node,old_data,new_data);
var G__10279__$1 = (((G__10279 instanceof cljs.core.Keyword))?G__10279.fqn:null);
switch (G__10279__$1) {
case "replace-entity":
try{return threeagent.impl.scene.replace_entity(context,node,old_data,new_data);
}catch (e10280){var ex = e10280;
return console.error("Failed to replace entity",ex,cljs.core.clj__GT_js(node.data));
}
break;
case "update-entity":
try{return threeagent.impl.scene.update_entity(context,node,old_data,new_data);
}catch (e10281){var ex = e10281;
return console.error("Failed to update entity",ex,cljs.core.clj__GT_js(node.data));
}
break;
case "transform-entity":
try{return threeagent.impl.scene.transform_entity(context,node);
}catch (e10282){var ex = e10282;
return console.error("Failed to transform entity",ex,cljs.core.clj__GT_js(node.data));
}
break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10279__$1)].join('')));

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10278__$1)].join('')));

}
});
threeagent.impl.scene.animate = (function threeagent$impl$scene$animate(context){
var stats = context.stats;
var clock = context.clock;
var virtual_scene = context.virtualScene;
var renderer = context.renderer;
var composer = context.composer;
var scene_root = context.sceneRoot;
var before_render_cb = context.beforeRenderCb;
var after_render_cb = context.afterRenderCb;
if(cljs.core.truth_(stats)){
stats.begin();
} else {
}

var delta_time_10415 = clock.getDelta();
var changelog_10416 = [];
threeagent.impl.system.dispatch_on_tick(context,delta_time_10415);

if(cljs.core.truth_(before_render_cb)){
(before_render_cb.cljs$core$IFn$_invoke$arity$1 ? before_render_cb.cljs$core$IFn$_invoke$arity$1(delta_time_10415) : before_render_cb.call(null,delta_time_10415));
} else {
}

threeagent.impl.virtual_scene.render_BANG_(virtual_scene,changelog_10416);

var seq__10283_10417 = cljs.core.seq(changelog_10416);
var chunk__10284_10418 = null;
var count__10285_10419 = (0);
var i__10286_10420 = (0);
while(true){
if((i__10286_10420 < count__10285_10419)){
var change_10421 = chunk__10284_10418.cljs$core$IIndexed$_nth$arity$2(null,i__10286_10420);
threeagent.impl.scene.apply_change_BANG_(context,change_10421);


var G__10422 = seq__10283_10417;
var G__10423 = chunk__10284_10418;
var G__10424 = count__10285_10419;
var G__10425 = (i__10286_10420 + (1));
seq__10283_10417 = G__10422;
chunk__10284_10418 = G__10423;
count__10285_10419 = G__10424;
i__10286_10420 = G__10425;
continue;
} else {
var temp__5753__auto___10426 = cljs.core.seq(seq__10283_10417);
if(temp__5753__auto___10426){
var seq__10283_10427__$1 = temp__5753__auto___10426;
if(cljs.core.chunked_seq_QMARK_(seq__10283_10427__$1)){
var c__4638__auto___10428 = cljs.core.chunk_first(seq__10283_10427__$1);
var G__10429 = cljs.core.chunk_rest(seq__10283_10427__$1);
var G__10430 = c__4638__auto___10428;
var G__10431 = cljs.core.count(c__4638__auto___10428);
var G__10432 = (0);
seq__10283_10417 = G__10429;
chunk__10284_10418 = G__10430;
count__10285_10419 = G__10431;
i__10286_10420 = G__10432;
continue;
} else {
var change_10433 = cljs.core.first(seq__10283_10427__$1);
threeagent.impl.scene.apply_change_BANG_(context,change_10433);


var G__10434 = cljs.core.next(seq__10283_10427__$1);
var G__10435 = null;
var G__10436 = (0);
var G__10437 = (0);
seq__10283_10417 = G__10434;
chunk__10284_10418 = G__10435;
count__10285_10419 = G__10436;
i__10286_10420 = G__10437;
continue;
}
} else {
}
}
break;
}

var camera_10438 = context.camera;
if(cljs.core.truth_(composer)){
composer.render(delta_time_10415);
} else {
renderer.render(scene_root,camera_10438);
}

if(cljs.core.truth_(after_render_cb)){
(after_render_cb.cljs$core$IFn$_invoke$arity$1 ? after_render_cb.cljs$core$IFn$_invoke$arity$1(delta_time_10415) : after_render_cb.call(null,delta_time_10415));
} else {
}

if(cljs.core.truth_(stats)){
return stats.end();
} else {
return null;
}
});
threeagent.impl.scene.get_canvas = (function threeagent$impl$scene$get_canvas(dom_root){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("canvas",clojure.string.lower_case(dom_root.tagName))){
return dom_root;
} else {
var c = document.createElement("canvas");
return dom_root.appendChild(c);
}
});
threeagent.impl.scene.set_shadow_map_BANG_ = (function threeagent$impl$scene$set_shadow_map_BANG_(renderer,shadow_map){
if(cljs.core.truth_(shadow_map)){
var sm = renderer.shadowMap;
(sm.enabled = new cljs.core.Keyword(null,"enabled","enabled",1195909756).cljs$core$IFn$_invoke$arity$1(shadow_map));

return (sm.type = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shadow_map);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return module$node_modules$three$build$three_module.PCFShadowMap;
}
})());
} else {
return null;
}
});
threeagent.impl.scene.create_context = (function threeagent$impl$scene$create_context(root_fn,dom_root,p__10287){
var map__10288 = p__10287;
var map__10288__$1 = cljs.core.__destructure_map(map__10288);
var on_before_render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10288__$1,new cljs.core.Keyword(null,"on-before-render","on-before-render",601463713));
var on_after_render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10288__$1,new cljs.core.Keyword(null,"on-after-render","on-after-render",-1318143250));
var shadow_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10288__$1,new cljs.core.Keyword(null,"shadow-map","shadow-map",1196779829));
var systems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10288__$1,new cljs.core.Keyword(null,"systems","systems",-1015374944));
var entity_types = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10288__$1,new cljs.core.Keyword(null,"entity-types","entity-types",-1594967372));
var canvas = threeagent.impl.scene.get_canvas(dom_root);
var width = canvas.offsetWidth;
var height = canvas.offsetHeight;
var renderer = (new module$node_modules$three$build$three_module.WebGLRenderer(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),canvas], null))));
var camera = (new module$node_modules$three$build$three_module.PerspectiveCamera((75),(width / height),0.1,(1000)));
var cameras = [];
var scene_root = (new module$node_modules$three$build$three_module.Scene());
var clock = (new module$node_modules$three$build$three_module.Clock());
renderer.setSize(width,height);

threeagent.impl.scene.set_shadow_map_BANG_(renderer,shadow_map);

threeagent.impl.system.dispatch_init(systems,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"threejs-renderer","threejs-renderer",468746733),renderer,new cljs.core.Keyword(null,"threejs-scene","threejs-scene",754266515),scene_root,new cljs.core.Keyword(null,"threejs-default-camera","threejs-default-camera",589639313),camera,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),canvas], null));

var virtual_scene = threeagent.impl.virtual_scene.create(root_fn);
var context = (new threeagent.impl.types.Context(virtual_scene,scene_root,dom_root,null,canvas,camera,cameras,clock,renderer,on_before_render,on_after_render,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([threeagent.impl.entities.builtin_entity_types,entity_types], 0)),systems,camera));
threeagent.impl.scene.init_scene_BANG_(context,virtual_scene,scene_root);

threeagent.impl.scene.contexts.push(context);

renderer.setAnimationLoop((function (){
return threeagent.impl.scene.animate(context);
}));

return context;
});
threeagent.impl.scene.clear_scene_BANG_ = (function threeagent$impl$scene$clear_scene_BANG_(context,vscene_root){
vscene_root.for_each_child(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(threeagent.impl.scene.destroy_entity,context));

return context.sceneRoot.clear();
});
threeagent.impl.scene.reset_context_BANG_ = (function threeagent$impl$scene$reset_context_BANG_(old_context,root_fn,p__10289){
var map__10290 = p__10289;
var map__10290__$1 = cljs.core.__destructure_map(map__10290);
var on_before_render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10290__$1,new cljs.core.Keyword(null,"on-before-render","on-before-render",601463713));
var on_after_render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10290__$1,new cljs.core.Keyword(null,"on-after-render","on-after-render",-1318143250));
var shadow_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10290__$1,new cljs.core.Keyword(null,"shadow-map","shadow-map",1196779829));
var entity_types = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10290__$1,new cljs.core.Keyword(null,"entity-types","entity-types",-1594967372));
var systems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10290__$1,new cljs.core.Keyword(null,"systems","systems",-1015374944));
var scene_root = old_context.sceneRoot;
var virtual_scene = old_context.virtualScene;
var renderer = old_context.renderer;
threeagent.impl.system.dispatch_destroy(old_context.systems,threeagent.impl.scene.raw_context__GT_context(old_context));

threeagent.impl.scene.clear_scene_BANG_(old_context,virtual_scene.root);

threeagent.impl.virtual_scene.destroy_BANG_(virtual_scene);

threeagent.impl.scene.set_shadow_map_BANG_(renderer,shadow_map);

(old_context.cameras = []);

(old_context.systems = systems);

(old_context.entityTypes = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([threeagent.impl.entities.builtin_entity_types,entity_types], 0)));

threeagent.impl.system.dispatch_init(systems,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"threejs-renderer","threejs-renderer",468746733),renderer,new cljs.core.Keyword(null,"threejs-scene","threejs-scene",754266515),scene_root,new cljs.core.Keyword(null,"threejs-default-camera","threejs-default-camera",589639313),old_context.defaultCamera,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),old_context.canvas], null));

var new_virtual_scene = threeagent.impl.virtual_scene.create(root_fn);
threeagent.impl.scene.init_scene_BANG_(old_context,new_virtual_scene,scene_root);

(old_context.virtualScene = new_virtual_scene);

(old_context.beforeRenderCb = on_before_render);

(old_context.afterRenderCb = on_after_render);

return old_context;
});
threeagent.impl.scene.find_context = (function threeagent$impl$scene$find_context(dom_root){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__10291_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__10291_SHARP_.domRoot,dom_root);
}),threeagent.impl.scene.contexts));
});
threeagent.impl.scene.create_or_reset_context = (function threeagent$impl$scene$create_or_reset_context(root_fn,dom_root,config){
var temp__5751__auto__ = threeagent.impl.scene.find_context(dom_root);
if(cljs.core.truth_(temp__5751__auto__)){
var existing_context = temp__5751__auto__;
return threeagent.impl.scene.reset_context_BANG_(existing_context,root_fn,config);
} else {
return threeagent.impl.scene.create_context(root_fn,dom_root,config);
}
});
threeagent.impl.scene.render = (function threeagent$impl$scene$render(root_fn,dom_root,config){
return threeagent.impl.scene.raw_context__GT_context(threeagent.impl.scene.create_or_reset_context(root_fn,dom_root,config));
});

//# sourceMappingURL=threeagent.impl.scene.js.map