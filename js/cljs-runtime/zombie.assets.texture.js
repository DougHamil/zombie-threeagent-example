goog.provide('zombie.assets.texture');
var module$node_modules$three$build$three_module=shadow.js.require("module$node_modules$three$build$three_module", {});
zombie.assets.texture.three_texture_loader = (new module$node_modules$three$build$three_module.TextureLoader());
zombie.assets.texture.loader = (function zombie$assets$texture$loader(_key,path,cfg){
return (new Promise((function (resolve,_){
return zombie.assets.texture.three_texture_loader.load(path,(function (t){
(t.wrapS = module$node_modules$three$build$three_module.RepeatWrapping);

(t.wrapT = module$node_modules$three$build$three_module.RepeatWrapping);

(t.magFilter = module$node_modules$three$build$three_module.NearestFilter);

(t.anisotropy = (4));

var temp__5753__auto___10513 = new cljs.core.Keyword(null,"repeat","repeat",832692087).cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__5753__auto___10513)){
var rpt_10514 = temp__5753__auto___10513;
(t.repeat = cljs.core.clj__GT_js(rpt_10514));
} else {
}

return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(t) : resolve.call(null,t));
}));
})));
});

//# sourceMappingURL=zombie.assets.texture.js.map
