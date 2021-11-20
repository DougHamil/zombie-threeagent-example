goog.provide('zombie.assets.audio');
var module$node_modules$howler$dist$howler=shadow.js.require("module$node_modules$howler$dist$howler", {});
zombie.assets.audio.sfx_loader = (function zombie$assets$audio$sfx_loader(k,path,p__10510){
var map__10511 = p__10510;
var map__10511__$1 = cljs.core.__destructure_map(map__10511);
var extension = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10511__$1,new cljs.core.Keyword(null,"extension","extension",1453374065));
var entries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10511__$1,new cljs.core.Keyword(null,"entries","entries",-86943161));
var volume = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10511__$1,new cljs.core.Keyword(null,"volume","volume",1900330799));
return (new Promise((function (res,rej){
if(cljs.core.truth_(entries)){
var howls = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10509_SHARP_){
return (new module$node_modules$howler$dist$howler.Howl(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),p1__10509_SHARP_,new cljs.core.Keyword(null,"volume","volume",1900330799),(function (){var or__4212__auto__ = volume;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return 1.0;
}
})()], null))));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10508_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__10508_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(extension)].join('');
}),entries)));
return (res.cljs$core$IFn$_invoke$arity$1 ? res.cljs$core$IFn$_invoke$arity$1(howls) : res.call(null,howls));
} else {
var G__10512 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new module$node_modules$howler$dist$howler.Howl(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),path,new cljs.core.Keyword(null,"volume","volume",1900330799),(function (){var or__4212__auto__ = volume;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return 1.0;
}
})()], null))))], null);
return (res.cljs$core$IFn$_invoke$arity$1 ? res.cljs$core$IFn$_invoke$arity$1(G__10512) : res.call(null,G__10512));
}
})));
});

//# sourceMappingURL=zombie.assets.audio.js.map
