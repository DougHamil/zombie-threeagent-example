goog.provide('zombie.assets.animation');
var module$node_modules$three$examples$jsm$loaders$FBXLoader=shadow.js.require("module$node_modules$three$examples$jsm$loaders$FBXLoader", {});
var module$node_modules$three$build$three_module=shadow.js.require("module$node_modules$three$build$three_module", {});
zombie.assets.animation.fbx_loader = (new module$node_modules$three$examples$jsm$loaders$FBXLoader.FBXLoader());
zombie.assets.animation.kenney_roots = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lower","lower",1120320821),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, ["Toe",null,"Root",null,"Foot",null,"Leg",null,"Toes",null,"HipsCtrl",null,"Knee",null,"Heel",null], null), null),new cljs.core.Keyword(null,"upper","upper",246243906),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["Spine",null,"Chest",null,"Shoulder",null,"Hand",null,"Arm",null,"Head",null,"Neck",null], null), null)], null);
zombie.assets.animation.valid_animation_QMARK_ = (function zombie$assets$animation$valid_animation_QMARK_(anim){
return (!(clojure.string.includes_QMARK_(anim.name,"0.Targeting")));
});
zombie.assets.animation.mute_tracks_BANG_ = (function zombie$assets$animation$mute_tracks_BANG_(keys,clip){
var tracks = cljs.core.to_array(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (track){
var name = track.name;
return cljs.core.not(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,k){
var or__4212__auto__ = acc;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return clojure.string.includes_QMARK_(name,k);
}
}),false,keys));
}),clip.tracks));
(clip.tracks = tracks);

return clip;
});
zombie.assets.animation.kenney_mute_half = (function zombie$assets$animation$kenney_mute_half(_key,anims,p__10500){
var map__10501 = p__10500;
var map__10501__$1 = cljs.core.__destructure_map(map__10501);
var mute_layer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10501__$1,new cljs.core.Keyword(null,"mute-layer","mute-layer",-1073710410));
if(cljs.core.truth_(mute_layer)){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zombie.assets.animation.mute_tracks_BANG_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(zombie.assets.animation.kenney_roots,mute_layer)),anims));
} else {
return anims;
}
});
zombie.assets.animation.middleware = (function zombie$assets$animation$middleware(_key,anims,p__10503){
var map__10504 = p__10503;
var map__10504__$1 = cljs.core.__destructure_map(map__10504);
var additive_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10504__$1,new cljs.core.Keyword(null,"additive?","additive?",1204187791));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10502_SHARP_){
if(cljs.core.truth_(additive_QMARK_)){
return module$node_modules$three$build$three_module.AnimationUtils.makeClipAdditive(p1__10502_SHARP_);
} else {
return p1__10502_SHARP_;
}
}),anims);
});
zombie.assets.animation.loader = (function zombie$assets$animation$loader(_key,path,_cfg){
return (new Promise((function (res,rej){
return zombie.assets.animation.fbx_loader.load(path,(function (data){
var G__10507 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(zombie.assets.animation.valid_animation_QMARK_,data.animations);
return (res.cljs$core$IFn$_invoke$arity$1 ? res.cljs$core$IFn$_invoke$arity$1(G__10507) : res.call(null,G__10507));
}),null,(function (err){
console.error(err);

return (rej.cljs$core$IFn$_invoke$arity$1 ? rej.cljs$core$IFn$_invoke$arity$1(err) : rej.call(null,err));
}));
})));
});

//# sourceMappingURL=zombie.assets.animation.js.map
