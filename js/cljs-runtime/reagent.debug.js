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
var G__8115__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__8115 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8116__i = 0, G__8116__a = new Array(arguments.length -  0);
while (G__8116__i < G__8116__a.length) {G__8116__a[G__8116__i] = arguments[G__8116__i + 0]; ++G__8116__i;}
  args = new cljs.core.IndexedSeq(G__8116__a,0,null);
} 
return G__8115__delegate.call(this,args);};
G__8115.cljs$lang$maxFixedArity = 0;
G__8115.cljs$lang$applyTo = (function (arglist__8117){
var args = cljs.core.seq(arglist__8117);
return G__8115__delegate(args);
});
G__8115.cljs$core$IFn$_invoke$arity$variadic = G__8115__delegate;
return G__8115;
})()
);

(o.error = (function() { 
var G__8118__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__8118 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8119__i = 0, G__8119__a = new Array(arguments.length -  0);
while (G__8119__i < G__8119__a.length) {G__8119__a[G__8119__i] = arguments[G__8119__i + 0]; ++G__8119__i;}
  args = new cljs.core.IndexedSeq(G__8119__a,0,null);
} 
return G__8118__delegate.call(this,args);};
G__8118.cljs$lang$maxFixedArity = 0;
G__8118.cljs$lang$applyTo = (function (arglist__8120){
var args = cljs.core.seq(arglist__8120);
return G__8118__delegate(args);
});
G__8118.cljs$core$IFn$_invoke$arity$variadic = G__8118__delegate;
return G__8118;
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
