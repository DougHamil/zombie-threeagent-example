goog.provide('zombie.util.timer');
zombie.util.timer.after = (function zombie$util$timer$after(ms,cb){
return setTimeout(cb,ms);
});
zombie.util.timer.maybe_tick = (function zombie$util$timer$maybe_tick(ticker,delta_time){
var old_time = ticker.time;
var new_time = (old_time + delta_time);
var freq = ticker.frequency;
if((freq < new_time)){
(ticker.time = (new_time - freq));

var fexpr__12903 = ticker.tickFn;
return (fexpr__12903.cljs$core$IFn$_invoke$arity$0 ? fexpr__12903.cljs$core$IFn$_invoke$arity$0() : fexpr__12903.call(null));
} else {
return (ticker.time = new_time);
}
});
zombie.util.timer.jitter_ticker = (function zombie$util$timer$jitter_ticker(jitter,freq,tick_fn){
return cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.rand.cljs$core$IFn$_invoke$arity$1(jitter),new cljs.core.Keyword(null,"tickFn","tickFn",-510683302),tick_fn,new cljs.core.Keyword(null,"frequency","frequency",-1408891382),freq], null));
});

//# sourceMappingURL=zombie.util.timer.js.map
