goog.provide('statecharts.utils');
statecharts.utils.ensure_vector = (function statecharts$utils$ensure_vector(x){
if(cljs.core.vector_QMARK_(x)){
return x;
} else {
if((x == null)){
return cljs.core.PersistentVector.EMPTY;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);

}
}
});
statecharts.utils.ensure_event_map = (function statecharts$utils$ensure_event_map(x){
if(cljs.core.map_QMARK_(x)){
return x;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),x], null);
}
});
statecharts.utils.map_kv = (function statecharts$utils$map_kv(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(m),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12503){
var vec__12504 = p__12503;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12504,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12504,(1),null);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(k,v) : f.call(null,k,v));
}),m));
});
statecharts.utils.map_vals = (function statecharts$utils$map_vals(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(m),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12509){
var vec__12510 = p__12509;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12510,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12510,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null);
}),m));
});
statecharts.utils.map_kv_vals = (function statecharts$utils$map_kv_vals(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(m),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12516){
var vec__12517 = p__12516;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12517,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12517,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(k,v) : f.call(null,k,v))], null);
}),m));
});
statecharts.utils.remove_vals = (function statecharts$utils$remove_vals(pred,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(m),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__12521){
var vec__12522 = p__12521;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12522,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12522,(1),null);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v));
}),m));
});
statecharts.utils.find_first = (function statecharts$utils$find_first(pred,coll){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred,coll));
});
statecharts.utils.with_index = (function statecharts$utils$with_index(coll){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,coll,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});
/**
 * Return the first element of x if x is a one-element vector.
 */
statecharts.utils.devectorize = (function statecharts$utils$devectorize(x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(x))){
return cljs.core.first(x);
} else {
return x;
}
});

//# sourceMappingURL=statecharts.utils.js.map
