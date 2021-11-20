goog.provide('zombie.assets.font');
var module$node_modules$troika_three_text$dist$troika_three_text_esm=shadow.js.require("module$node_modules$troika_three_text$dist$troika_three_text_esm", {});
zombie.assets.font.font_loader = (function zombie$assets$font$font_loader(_key,path,p__10519){
var map__10520 = p__10519;
var map__10520__$1 = cljs.core.__destructure_map(map__10520);
var characters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10520__$1,new cljs.core.Keyword(null,"characters","characters",-163867197));
return (new Promise((function (res,rej){
return module$node_modules$troika_three_text$dist$troika_three_text_esm.preloadFont(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font","font",-1506159249),path,new cljs.core.Keyword(null,"characters","characters",-163867197),characters], null)),(function (){
var text = (new module$node_modules$troika_three_text$dist$troika_three_text_esm.Text());
return text.sync((function (){
return (res.cljs$core$IFn$_invoke$arity$1 ? res.cljs$core$IFn$_invoke$arity$1(path) : res.call(null,path));
}));
}));
})));
});

//# sourceMappingURL=zombie.assets.font.js.map
