goog.provide('zombie.util.common');

/**
* @constructor
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
*/
zombie.util.common.Cursor = (function (atm,path){
this.atm = atm;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 98304;
});
(zombie.util.common.Cursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.atm),self__.path);
}));

(zombie.util.common.Cursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (_,new_value){
var self__ = this;
var ___$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.atm,cljs.core.assoc_in,self__.path,new_value),self__.path);
}));

(zombie.util.common.Cursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__10621 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.atm),self__.path);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__10621) : f.call(null,G__10621));
})());
}));

(zombie.util.common.Cursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,x){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__10622 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.atm),self__.path);
var G__10623 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__10622,G__10623) : f.call(null,G__10622,G__10623));
})());
}));

(zombie.util.common.Cursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,x,y){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__10624 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.atm),self__.path);
var G__10625 = x;
var G__10626 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__10624,G__10625,G__10626) : f.call(null,G__10624,G__10625,G__10626));
})());
}));

(zombie.util.common.Cursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,x,y,more){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.atm),self__.path),x,y,more));
}));

(zombie.util.common.Cursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atm","atm",-1963551835,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
}));

(zombie.util.common.Cursor.cljs$lang$type = true);

(zombie.util.common.Cursor.cljs$lang$ctorStr = "zombie.util.common/Cursor");

(zombie.util.common.Cursor.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"zombie.util.common/Cursor");
}));

/**
 * Positional factory function for zombie.util.common/Cursor.
 */
zombie.util.common.__GT_Cursor = (function zombie$util$common$__GT_Cursor(atm,path){
return (new zombie.util.common.Cursor(atm,path));
});

zombie.util.common.cursor = (function zombie$util$common$cursor(atm,path){
return zombie.util.common.__GT_Cursor(atm,path);
});
zombie.util.common.log_counters = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
zombie.util.common.loop_log = (function zombie$util$common$loop_log(key,value){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(zombie.util.common.log_counters,cljs.core.update,key,cljs.core.inc);

if(((10) < cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(zombie.util.common.log_counters),key))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(zombie.util.common.log_counters,cljs.core.assoc,key,(0));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0));
} else {
return null;
}
});
zombie.util.common.physics_layer_default = (1);
zombie.util.common.physics_layer_player = (2);
zombie.util.common.physics_layer_props = (3);

//# sourceMappingURL=zombie.util.common.js.map
