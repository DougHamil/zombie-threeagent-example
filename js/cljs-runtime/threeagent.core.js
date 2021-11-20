goog.provide('threeagent.core');
threeagent.core.atom = reagent.ratom.atom;
threeagent.core.cursor = reagent.ratom.cursor;
threeagent.core.track = reagent.ratom.track;
/**
 * Renders the threeagent scene at the specified `dom-root` using
 * the `root-fn` as the root component function.
 * 
 * Additional configuration can be provided through the `opts` parameter
 * 
 * Example:
 * ```clojure
 *  (threeagent/render my-root-fn (js/document.getElementById "app"))
 * ```
 *   
 */
threeagent.core.render = (function threeagent$core$render(var_args){
var G__10306 = arguments.length;
switch (G__10306) {
case 2:
return threeagent.core.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return threeagent.core.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(threeagent.core.render.cljs$core$IFn$_invoke$arity$2 = (function (root_fn,dom_root){
return threeagent.core.render.cljs$core$IFn$_invoke$arity$3(root_fn,dom_root,cljs.core.PersistentArrayMap.EMPTY);
}));

(threeagent.core.render.cljs$core$IFn$_invoke$arity$3 = (function (root_fn,dom_root,opts){
return threeagent.impl.scene.render(root_fn,dom_root,opts);
}));

(threeagent.core.render.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=threeagent.core.js.map
