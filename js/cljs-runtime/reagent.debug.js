goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__8230__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__8230 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8231__i = 0, G__8231__a = new Array(arguments.length -  0);
while (G__8231__i < G__8231__a.length) {G__8231__a[G__8231__i] = arguments[G__8231__i + 0]; ++G__8231__i;}
  args = new cljs.core.IndexedSeq(G__8231__a,0,null);
} 
return G__8230__delegate.call(this,args);};
G__8230.cljs$lang$maxFixedArity = 0;
G__8230.cljs$lang$applyTo = (function (arglist__8232){
var args = cljs.core.seq(arglist__8232);
return G__8230__delegate(args);
});
G__8230.cljs$core$IFn$_invoke$arity$variadic = G__8230__delegate;
return G__8230;
})()
);

(o.error = (function() { 
var G__8233__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__8233 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8234__i = 0, G__8234__a = new Array(arguments.length -  0);
while (G__8234__i < G__8234__a.length) {G__8234__a[G__8234__i] = arguments[G__8234__i + 0]; ++G__8234__i;}
  args = new cljs.core.IndexedSeq(G__8234__a,0,null);
} 
return G__8233__delegate.call(this,args);};
G__8233.cljs$lang$maxFixedArity = 0;
G__8233.cljs$lang$applyTo = (function (arglist__8235){
var args = cljs.core.seq(arglist__8235);
return G__8233__delegate(args);
});
G__8233.cljs$core$IFn$_invoke$arity$variadic = G__8233__delegate;
return G__8233;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
