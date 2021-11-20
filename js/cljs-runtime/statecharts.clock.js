goog.provide('statecharts.clock');

/**
 * @interface
 */
statecharts.clock.Clock = function(){};

var statecharts$clock$Clock$setTimeout$dyn_12529 = (function (this$,f,delay){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (statecharts.clock.setTimeout[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(this$,f,delay) : m__4510__auto__.call(null,this$,f,delay));
} else {
var m__4508__auto__ = (statecharts.clock.setTimeout["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(this$,f,delay) : m__4508__auto__.call(null,this$,f,delay));
} else {
throw cljs.core.missing_protocol("Clock.setTimeout",this$);
}
}
});
statecharts.clock.setTimeout = (function statecharts$clock$setTimeout(this$,f,delay){
if((((!((this$ == null)))) && ((!((this$.statecharts$clock$Clock$setTimeout$arity$3 == null)))))){
return this$.statecharts$clock$Clock$setTimeout$arity$3(this$,f,delay);
} else {
return statecharts$clock$Clock$setTimeout$dyn_12529(this$,f,delay);
}
});

var statecharts$clock$Clock$clearTimeout$dyn_12530 = (function (this$,id){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (statecharts.clock.clearTimeout[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(this$,id) : m__4510__auto__.call(null,this$,id));
} else {
var m__4508__auto__ = (statecharts.clock.clearTimeout["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(this$,id) : m__4508__auto__.call(null,this$,id));
} else {
throw cljs.core.missing_protocol("Clock.clearTimeout",this$);
}
}
});
statecharts.clock.clearTimeout = (function statecharts$clock$clearTimeout(this$,id){
if((((!((this$ == null)))) && ((!((this$.statecharts$clock$Clock$clearTimeout$arity$2 == null)))))){
return this$.statecharts$clock$Clock$clearTimeout$arity$2(this$,id);
} else {
return statecharts$clock$Clock$clearTimeout$dyn_12530(this$,id);
}
});


/**
* @constructor
 * @implements {statecharts.clock.Clock}
*/
statecharts.clock.WallClock = (function (){
});
(statecharts.clock.WallClock.prototype.statecharts$clock$Clock$ = cljs.core.PROTOCOL_SENTINEL);

(statecharts.clock.WallClock.prototype.statecharts$clock$Clock$setTimeout$arity$3 = (function (this$,f,delay){
var self__ = this;
var this$__$1 = this;
return setTimeout(f,delay);
}));

(statecharts.clock.WallClock.prototype.statecharts$clock$Clock$clearTimeout$arity$2 = (function (this$,id){
var self__ = this;
var this$__$1 = this;
return clearTimeout(id);
}));

(statecharts.clock.WallClock.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(statecharts.clock.WallClock.cljs$lang$type = true);

(statecharts.clock.WallClock.cljs$lang$ctorStr = "statecharts.clock/WallClock");

(statecharts.clock.WallClock.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"statecharts.clock/WallClock");
}));

/**
 * Positional factory function for statecharts.clock/WallClock.
 */
statecharts.clock.__GT_WallClock = (function statecharts$clock$__GT_WallClock(){
return (new statecharts.clock.WallClock());
});

statecharts.clock.wall_clock = (function statecharts$clock$wall_clock(){
return (new statecharts.clock.WallClock());
});

//# sourceMappingURL=statecharts.clock.js.map
