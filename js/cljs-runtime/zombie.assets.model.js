goog.provide('zombie.assets.model');
var module$node_modules$three$examples$jsm$loaders$GLTFLoader=shadow.js.require("module$node_modules$three$examples$jsm$loaders$GLTFLoader", {});
var module$node_modules$three$examples$jsm$loaders$FBXLoader=shadow.js.require("module$node_modules$three$examples$jsm$loaders$FBXLoader", {});
var module$node_modules$three$build$three_module=shadow.js.require("module$node_modules$three$build$three_module", {});
zombie.assets.model.gltf_loader = (new module$node_modules$three$examples$jsm$loaders$GLTFLoader.GLTFLoader());
zombie.assets.model.fbx_loader = (new module$node_modules$three$examples$jsm$loaders$FBXLoader.FBXLoader());
zombie.assets.model.select_loader = (function zombie$assets$model$select_loader(path){
if(((clojure.string.ends_with_QMARK_(path,".glb")) || (clojure.string.ends_with_QMARK_(path,".gltf")))){
return zombie.assets.model.gltf_loader;
} else {
return zombie.assets.model.fbx_loader;
}
});
zombie.assets.model.store_bounding_box_BANG_ = (function zombie$assets$model$store_bounding_box_BANG_(key,obj){
var bb = (new module$node_modules$three$build$three_module.Box3()).setFromObject(obj);
zombie.util.threejs.center_at_origin_BANG_(bb);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(zombie.state.databases.model_colliders,cljs.core.assoc,key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bounding-box","bounding-box",201336205),bb], null));

return obj;
});
zombie.assets.model.apply_scale_BANG_ = (function zombie$assets$model$apply_scale_BANG_(scale,obj){
obj.scale.set(scale,scale,scale);

return obj;
});
zombie.assets.model.apply_shadow_BANG_ = (function zombie$assets$model$apply_shadow_BANG_(obj){
obj.traverse((function (obj__$1){
(obj__$1.castShadow = true);

return (obj__$1.receiveShadow = true);
}));

return obj;
});
zombie.assets.model.set_phong_material_BANG_ = (function zombie$assets$model$set_phong_material_BANG_(material,obj){
obj.traverse((function (obj__$1){
if(cljs.core.truth_(obj__$1.isMesh)){
var old_mat = obj__$1.material;
var phong_mat = (function (){var or__4212__auto__ = material;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return zombie.assets.material.create_phong_material(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"color","color",1011675173),old_mat.color,new cljs.core.Keyword(null,"map","map",1371690461),old_mat.map,new cljs.core.Keyword(null,"emissiveIntensity","emissiveIntensity",2119800890),old_mat.emissiveIntensity,new cljs.core.Keyword(null,"emissive","emissive",-761267227),old_mat.emissive,new cljs.core.Keyword(null,"emissiveMap","emissiveMap",-1434770057),old_mat.emissiveMap,new cljs.core.Keyword(null,"shininess","shininess",-509323286),old_mat.shininess], null));
}
})();
return (obj__$1.material = phong_mat);
} else {
return null;
}
}));

return obj;
});
zombie.assets.model.replace_materials_BANG_ = (function zombie$assets$model$replace_materials_BANG_(mats,obj){
obj.traverse((function (obj__$1){
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(mats,obj__$1.name);
if(cljs.core.truth_(temp__5753__auto__)){
var mat = temp__5753__auto__;
return (obj__$1.material = mat);
} else {
return null;
}
}));

return obj;
});
zombie.assets.model.middleware = (function zombie$assets$model$middleware(key,obj,p__10497){
var map__10498 = p__10497;
var map__10498__$1 = cljs.core.__destructure_map(map__10498);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10498__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var pool_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10498__$1,new cljs.core.Keyword(null,"pool-size","pool-size",-1637051676));
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10498__$1,new cljs.core.Keyword(null,"material","material",460118677));
var material_replacements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10498__$1,new cljs.core.Keyword(null,"material-replacements","material-replacements",1900992836));
var G__10499 = obj;
var G__10499__$1 = zombie.assets.model.set_phong_material_BANG_(material,G__10499)
;
var G__10499__$2 = (cljs.core.truth_(material_replacements)?zombie.assets.model.replace_materials_BANG_(material_replacements,G__10499__$1):G__10499__$1);
var G__10499__$3 = zombie.assets.model.apply_shadow_BANG_(G__10499__$2)
;
var G__10499__$4 = (cljs.core.truth_(scale)?zombie.assets.model.apply_scale_BANG_(scale,G__10499__$3):G__10499__$3);
var G__10499__$5 = zombie.assets.model.store_bounding_box_BANG_(key,G__10499__$4)
;
return zombie.util.pooling.pool((function (){var or__4212__auto__ = pool_size;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (20);
}
})(),G__10499__$5);

});
zombie.assets.model.skin_middleware = (function zombie$assets$model$skin_middleware(_key,obj,p__10500){
var map__10501 = p__10500;
var map__10501__$1 = cljs.core.__destructure_map(map__10501);
var shininess = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10501__$1,new cljs.core.Keyword(null,"shininess","shininess",-509323286));
var skin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10501__$1,new cljs.core.Keyword(null,"skin","skin",2146317821));
var skin_emissive = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10501__$1,new cljs.core.Keyword(null,"skin-emissive","skin-emissive",820216539));
var emissive = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10501__$1,new cljs.core.Keyword(null,"emissive","emissive",-761267227));
var material = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10501__$1,new cljs.core.Keyword(null,"material","material",460118677));
var mesh = (obj.children[(0)]);
var mat = mesh.material;
if(cljs.core.truth_(material)){
} else {
mat.setValues(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"map","map",1371690461),skin,new cljs.core.Keyword(null,"emissiveIntensity","emissiveIntensity",2119800890),(cljs.core.truth_(skin_emissive)?(1):null),new cljs.core.Keyword(null,"emissive","emissive",-761267227),emissive,new cljs.core.Keyword(null,"emissiveMap","emissiveMap",-1434770057),skin_emissive,new cljs.core.Keyword(null,"shininess","shininess",-509323286),(function (){var or__4212__auto__ = shininess;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (0);
}
})()], null)));
}

return obj;
});
zombie.assets.model.loader = (function zombie$assets$model$loader(_key,path,_cfg){
return (new Promise((function (res,rej){
return zombie.assets.model.select_loader(path).load(path,(function (data){
var data__$1 = (function (){var temp__5751__auto__ = data.scene;
if(cljs.core.truth_(temp__5751__auto__)){
var scene = temp__5751__auto__;
return scene;
} else {
return data;
}
})();
return (res.cljs$core$IFn$_invoke$arity$1 ? res.cljs$core$IFn$_invoke$arity$1(data__$1) : res.call(null,data__$1));
}),null,rej);
})));
});
zombie.assets.model.claim_model_BANG_ = (function zombie$assets$model$claim_model_BANG_(model_key){
var pool = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(zombie.state.databases.assets),model_key);
return zombie.util.pooling.claim_BANG_(pool);
});
zombie.assets.model.return_model_BANG_ = (function zombie$assets$model$return_model_BANG_(model_key,model){
var pool = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(zombie.state.databases.assets),model_key);
return zombie.util.pooling.return_BANG_(pool,model);
});

//# sourceMappingURL=zombie.assets.model.js.map
