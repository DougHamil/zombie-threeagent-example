goog.provide('statecharts.core');
statecharts.core.machine = statecharts.impl.machine;
statecharts.core.initialize = statecharts.impl.initialize;
statecharts.core.transition = statecharts.impl.transition;
statecharts.core.assign = statecharts.impl.assign;
statecharts.core.service = statecharts.service.service;
statecharts.core.start = (function statecharts$core$start(service){
return statecharts.service.start(service);
});
statecharts.core.reload = (function statecharts$core$reload(service,fsm){
return statecharts.service.reload(service,fsm);
});
statecharts.core.send = (function statecharts$core$send(var_args){
var G__12890 = arguments.length;
switch (G__12890) {
case 2:
return statecharts.core.send.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return statecharts.core.send.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(statecharts.core.send.cljs$core$IFn$_invoke$arity$2 = (function (service,event){
return statecharts.core.send.cljs$core$IFn$_invoke$arity$3(service,event,null);
}));

(statecharts.core.send.cljs$core$IFn$_invoke$arity$3 = (function (service,event,_){
return statecharts.service.send(service,event);
}));

(statecharts.core.send.cljs$lang$maxFixedArity = 3);

statecharts.core.state = (function statecharts$core$state(service){
return cljs.core.deref(service.state);
});
statecharts.core.value = (function statecharts$core$value(service){
return new cljs.core.Keyword(null,"_state","_state",-791882382).cljs$core$IFn$_invoke$arity$1(statecharts.core.state(service));
});
statecharts.core.matches = (function statecharts$core$matches(state,value){
var v1 = statecharts.utils.ensure_vector(((cljs.core.map_QMARK_(state))?new cljs.core.Keyword(null,"_state","_state",-791882382).cljs$core$IFn$_invoke$arity$1(state):state));
var v2 = statecharts.utils.ensure_vector(value);
return statecharts.impl.is_prefix_QMARK_(v2,v1);
});
/**
 * Provide a pathway to modify the state of a state machine directly
 *   without going through any event.
 * 
 *   Return the updated context.
 *   
 */
statecharts.core.update_state = (function statecharts$core$update_state(var_args){
var args__4824__auto__ = [];
var len__4818__auto___12900 = arguments.length;
var i__4819__auto___12901 = (0);
while(true){
if((i__4819__auto___12901 < len__4818__auto___12900)){
args__4824__auto__.push((arguments[i__4819__auto___12901]));

var G__12902 = (i__4819__auto___12901 + (1));
i__4819__auto___12901 = G__12902;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return statecharts.core.update_state.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(statecharts.core.update_state.cljs$core$IFn$_invoke$arity$variadic = (function (service,f,args){
var state = service.state;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (p1__12895_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__12895_SHARP_,args);
}));
}));

(statecharts.core.update_state.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(statecharts.core.update_state.cljs$lang$applyTo = (function (seq12896){
var G__12897 = cljs.core.first(seq12896);
var seq12896__$1 = cljs.core.next(seq12896);
var G__12898 = cljs.core.first(seq12896__$1);
var seq12896__$2 = cljs.core.next(seq12896__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12897,G__12898,seq12896__$2);
}));


//# sourceMappingURL=statecharts.core.js.map
