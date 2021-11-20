goog.provide('zombie.ui.core');
zombie.ui.core.root = (function zombie$ui$core$root(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),"0",new cljs.core.Keyword(null,"left","left",-399115937),"0",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"position","position",-2011731912),"fixed"], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"game","game",-441523833),cljs.core.deref(reagent.core.cursor(zombie.state.databases.game,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-view","active-view",-1531689252)], null)))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.ui.hud.render], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"top","top",-1856271961),"0",new cljs.core.Keyword(null,"left","left",-399115937),"0",new cljs.core.Keyword(null,"position","position",-2011731912),"fixed"], null)], null),(cljs.core.truth_(cljs.core.deref(reagent.core.cursor(zombie.state.databases.ui,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-console?","show-console?",-869988546)], null))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.ui.console.render], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"top","top",-1856271961),"0",new cljs.core.Keyword(null,"left","left",-399115937),"0",new cljs.core.Keyword(null,"position","position",-2011731912),"fixed"], null)], null),(cljs.core.truth_(cljs.core.deref(reagent.core.cursor(zombie.state.databases.ui,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-debug?","show-debug?",-1274088080)], null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (el){
if(cljs.core.truth_(el)){
return el.appendChild(new cljs.core.Keyword(null,"physics-debug-canvas","physics-debug-canvas",802066213).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(zombie.state.databases.ui)));
} else {
return null;
}
})], null)], null):null)], null)], null);
});
zombie.ui.core.on_keypress = (function zombie$ui$core$on_keypress(evt){
var G__13426 = evt.charCode;
switch (G__13426) {
case (96):
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(zombie.state.databases.ui,cljs.core.update,new cljs.core.Keyword(null,"show-console?","show-console?",-869988546),cljs.core.not);

break;
default:
return new cljs.core.Keyword(null,"else","else",-1508377146);

}
});
zombie.ui.core.init_BANG_ = (function zombie$ui$core$init_BANG_(){
var el = document.getElementById("ui-root");
document.addEventListener("keypress",zombie.ui.core.on_keypress);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.ui.core.root], null),el);
});

//# sourceMappingURL=zombie.ui.core.js.map
