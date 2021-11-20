goog.provide('zombie.util.math');
if((typeof zombie !== 'undefined') && (typeof zombie.util !== 'undefined') && (typeof zombie.util.math !== 'undefined') && (typeof zombie.util.math.pi !== 'undefined')){
} else {
zombie.util.math.pi = (Math.PI + (0));
}
if((typeof zombie !== 'undefined') && (typeof zombie.util !== 'undefined') && (typeof zombie.util.math !== 'undefined') && (typeof zombie.util.math.pi2 !== 'undefined')){
} else {
zombie.util.math.pi2 = (Math.PI / 2.0);
}
if((typeof zombie !== 'undefined') && (typeof zombie.util !== 'undefined') && (typeof zombie.util.math !== 'undefined') && (typeof zombie.util.math.pi4 !== 'undefined')){
} else {
zombie.util.math.pi4 = (Math.PI / 4.0);
}
zombie.util.math.distance = (function zombie$util$math$distance(p__10521,p__10522){
var vec__10523 = p__10521;
var ax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10523,(0),null);
var ay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10523,(1),null);
var az = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10523,(2),null);
var vec__10526 = p__10522;
var bx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10526,(0),null);
var by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10526,(1),null);
var bz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10526,(2),null);
var dx = (bx - ax);
var dy = (by - ay);
var dz = (bz - az);
return Math.sqrt((((dx * dx) + (dy * dy)) + (dz * dz)));
});
zombie.util.math.direction = (function zombie$util$math$direction(p__10529,p__10530){
var vec__10531 = p__10529;
var ax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10531,(0),null);
var ay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10531,(1),null);
var az = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10531,(2),null);
var a = vec__10531;
var vec__10534 = p__10530;
var bx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10534,(0),null);
var by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10534,(1),null);
var bz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10534,(2),null);
var b = vec__10534;
var dx = (bx - ax);
var dy = (by - ay);
var dz = (bz - az);
var dist = zombie.util.math.distance(a,b);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(dx / dist),(dy / dist),(dz / dist)], null);
});

//# sourceMappingURL=zombie.util.math.js.map
