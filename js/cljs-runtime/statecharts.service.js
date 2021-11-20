goog.provide('statecharts.service');

/**
 * @interface
 */
statecharts.service.IService = function(){};

var statecharts$service$IService$start$dyn_12793 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (statecharts.service.start[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (statecharts.service.start["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IService.start",this$);
}
}
});
statecharts.service.start = (function statecharts$service$start(this$){
if((((!((this$ == null)))) && ((!((this$.statecharts$service$IService$start$arity$1 == null)))))){
return this$.statecharts$service$IService$start$arity$1(this$);
} else {
return statecharts$service$IService$start$dyn_12793(this$);
}
});

var statecharts$service$IService$send$dyn_12794 = (function (this$,event){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (statecharts.service.send[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__4510__auto__.call(null,this$,event));
} else {
var m__4508__auto__ = (statecharts.service.send["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__4508__auto__.call(null,this$,event));
} else {
throw cljs.core.missing_protocol("IService.send",this$);
}
}
});
statecharts.service.send = (function statecharts$service$send(this$,event){
if((((!((this$ == null)))) && ((!((this$.statecharts$service$IService$send$arity$2 == null)))))){
return this$.statecharts$service$IService$send$arity$2(this$,event);
} else {
return statecharts$service$IService$send$dyn_12794(this$,event);
}
});

var statecharts$service$IService$add_listener$dyn_12796 = (function (this$,id,listener){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (statecharts.service.add_listener[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,listener) : m__4510__auto__.call(null,this$,id,listener));
} else {
var m__4508__auto__ = (statecharts.service.add_listener["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,listener) : m__4508__auto__.call(null,this$,id,listener));
} else {
throw cljs.core.missing_protocol("IService.add-listener",this$);
}
}
});
statecharts.service.add_listener = (function statecharts$service$add_listener(this$,id,listener){
if((((!((this$ == null)))) && ((!((this$.statecharts$service$IService$add_listener$arity$3 == null)))))){
return this$.statecharts$service$IService$add_listener$arity$3(this$,id,listener);
} else {
return statecharts$service$IService$add_listener$dyn_12796(this$,id,listener);
}
});

var statecharts$service$IService$reload$dyn_12799 = (function (this$,fsm){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (statecharts.service.reload[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(this$,fsm) : m__4510__auto__.call(null,this$,fsm));
} else {
var m__4508__auto__ = (statecharts.service.reload["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(this$,fsm) : m__4508__auto__.call(null,this$,fsm));
} else {
throw cljs.core.missing_protocol("IService.reload",this$);
}
}
});
statecharts.service.reload = (function statecharts$service$reload(this$,fsm){
if((((!((this$ == null)))) && ((!((this$.statecharts$service$IService$reload$arity$2 == null)))))){
return this$.statecharts$service$IService$reload$arity$2(this$,fsm);
} else {
return statecharts$service$IService$reload$dyn_12799(this$,fsm);
}
});

statecharts.service.wrap_listener = (function statecharts$service$wrap_listener(f){
return (function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
});
});

/**
* @constructor
 * @implements {statecharts.service.IService}
*/
statecharts.service.Service = (function (fsm,state,running,clock){
this.fsm = fsm;
this.state = state;
this.running = running;
this.clock = clock;
});
(statecharts.service.Service.prototype.statecharts$service$IService$ = cljs.core.PROTOCOL_SENTINEL);

(statecharts.service.Service.prototype.statecharts$service$IService$start$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.running)){
return null;
} else {
(self__.running = true);

(self__.fsm = (statecharts.service.attach_fsm_scheduler.cljs$core$IFn$_invoke$arity$2 ? statecharts.service.attach_fsm_scheduler.cljs$core$IFn$_invoke$arity$2(this$__$1,self__.fsm) : statecharts.service.attach_fsm_scheduler.call(null,this$__$1,self__.fsm)));

cljs.core.reset_BANG_(self__.state,statecharts.impl.initialize.cljs$core$IFn$_invoke$arity$1(self__.fsm));

return cljs.core.deref(self__.state);
}
}));

(statecharts.service.Service.prototype.statecharts$service$IService$send$arity$2 = (function (_,event){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.state,statecharts.impl.transition.cljs$core$IFn$_invoke$arity$3(self__.fsm,cljs.core.deref(self__.state),event));

return cljs.core.deref(self__.state);
}));

(statecharts.service.Service.prototype.statecharts$service$IService$add_listener$arity$3 = (function (_,id,listener){
var self__ = this;
var ___$1 = this;
return cljs.core.add_watch(self__.state,id,statecharts.service.wrap_listener(listener));
}));

(statecharts.service.Service.prototype.statecharts$service$IService$reload$arity$2 = (function (this$,fsm_){
var self__ = this;
var this$__$1 = this;
(self__.fsm = (statecharts.service.attach_fsm_scheduler.cljs$core$IFn$_invoke$arity$2 ? statecharts.service.attach_fsm_scheduler.cljs$core$IFn$_invoke$arity$2(this$__$1,fsm_) : statecharts.service.attach_fsm_scheduler.call(null,this$__$1,fsm_)));

return null;
}));

(statecharts.service.Service.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fsm","fsm",-1716512779,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411),true], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),cljs.core.with_meta(new cljs.core.Symbol(null,"running","running",-1099466666,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411),true], null)),new cljs.core.Symbol(null,"clock","clock",746230400,null)], null);
}));

(statecharts.service.Service.cljs$lang$type = true);

(statecharts.service.Service.cljs$lang$ctorStr = "statecharts.service/Service");

(statecharts.service.Service.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"statecharts.service/Service");
}));

/**
 * Positional factory function for statecharts.service/Service.
 */
statecharts.service.__GT_Service = (function statecharts$service$__GT_Service(fsm,state,running,clock){
return (new statecharts.service.Service(fsm,state,running,clock));
});

statecharts.service.default_opts = (function statecharts$service$default_opts(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clock","clock",-894301127),statecharts.clock.wall_clock()], null);
});
statecharts.service.service = (function statecharts$service$service(var_args){
var G__12789 = arguments.length;
switch (G__12789) {
case 1:
return statecharts.service.service.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return statecharts.service.service.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(statecharts.service.service.cljs$core$IFn$_invoke$arity$1 = (function (fsm){
return statecharts.service.service.cljs$core$IFn$_invoke$arity$2(fsm,null);
}));

(statecharts.service.service.cljs$core$IFn$_invoke$arity$2 = (function (fsm,opts){
var map__12790 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([statecharts.service.default_opts(),opts], 0));
var map__12790__$1 = cljs.core.__destructure_map(map__12790);
var clock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12790__$1,new cljs.core.Keyword(null,"clock","clock",-894301127));
return (new statecharts.service.Service(fsm,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),false,clock));
}));

(statecharts.service.service.cljs$lang$maxFixedArity = 2);

statecharts.service.attach_fsm_scheduler = (function statecharts$service$attach_fsm_scheduler(service,fsm){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fsm,new cljs.core.Keyword(null,"scheduler","scheduler",-1882870208),statecharts.delayed.make_scheduler((function (p1__12791_SHARP_){
return statecharts.service.send(service,p1__12791_SHARP_);
}),service.clock));
});

//# sourceMappingURL=statecharts.service.js.map
