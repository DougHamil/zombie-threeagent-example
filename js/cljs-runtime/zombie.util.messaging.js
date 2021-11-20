goog.provide('zombie.util.messaging');

/**
 * @interface
 */
zombie.util.messaging.IEventBus = function(){};

var zombie$util$messaging$IEventBus$drop_all$dyn_10803 = (function (this$,entity_id){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (zombie.util.messaging.drop_all[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(this$,entity_id) : m__4510__auto__.call(null,this$,entity_id));
} else {
var m__4508__auto__ = (zombie.util.messaging.drop_all["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(this$,entity_id) : m__4508__auto__.call(null,this$,entity_id));
} else {
throw cljs.core.missing_protocol("IEventBus.drop-all",this$);
}
}
});
zombie.util.messaging.drop_all = (function zombie$util$messaging$drop_all(this$,entity_id){
if((((!((this$ == null)))) && ((!((this$.zombie$util$messaging$IEventBus$drop_all$arity$2 == null)))))){
return this$.zombie$util$messaging$IEventBus$drop_all$arity$2(this$,entity_id);
} else {
return zombie$util$messaging$IEventBus$drop_all$dyn_10803(this$,entity_id);
}
});

var zombie$util$messaging$IEventBus$send$dyn_10804 = (function() {
var G__10805 = null;
var G__10805__3 = (function (this$,type,payload){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (zombie.util.messaging.send[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(this$,type,payload) : m__4510__auto__.call(null,this$,type,payload));
} else {
var m__4508__auto__ = (zombie.util.messaging.send["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(this$,type,payload) : m__4508__auto__.call(null,this$,type,payload));
} else {
throw cljs.core.missing_protocol("IEventBus.send",this$);
}
}
});
var G__10805__4 = (function (this$,entity_id,type,payload){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (zombie.util.messaging.send[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$4(this$,entity_id,type,payload) : m__4510__auto__.call(null,this$,entity_id,type,payload));
} else {
var m__4508__auto__ = (zombie.util.messaging.send["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$4(this$,entity_id,type,payload) : m__4508__auto__.call(null,this$,entity_id,type,payload));
} else {
throw cljs.core.missing_protocol("IEventBus.send",this$);
}
}
});
G__10805 = function(this$,entity_id,type,payload){
switch(arguments.length){
case 3:
return G__10805__3.call(this,this$,entity_id,type);
case 4:
return G__10805__4.call(this,this$,entity_id,type,payload);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__10805.cljs$core$IFn$_invoke$arity$3 = G__10805__3;
G__10805.cljs$core$IFn$_invoke$arity$4 = G__10805__4;
return G__10805;
})()
;
zombie.util.messaging.send = (function zombie$util$messaging$send(var_args){
var G__10776 = arguments.length;
switch (G__10776) {
case 4:
return zombie.util.messaging.send.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return zombie.util.messaging.send.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zombie.util.messaging.send.cljs$core$IFn$_invoke$arity$4 = (function (this$,entity_id,type,payload){
if((((!((this$ == null)))) && ((!((this$.zombie$util$messaging$IEventBus$send$arity$4 == null)))))){
return this$.zombie$util$messaging$IEventBus$send$arity$4(this$,entity_id,type,payload);
} else {
return zombie$util$messaging$IEventBus$send$dyn_10804(this$,entity_id,type,payload);
}
}));

(zombie.util.messaging.send.cljs$core$IFn$_invoke$arity$3 = (function (this$,type,payload){
if((((!((this$ == null)))) && ((!((this$.zombie$util$messaging$IEventBus$send$arity$3 == null)))))){
return this$.zombie$util$messaging$IEventBus$send$arity$3(this$,type,payload);
} else {
return zombie$util$messaging$IEventBus$send$dyn_10804(this$,type,payload);
}
}));

(zombie.util.messaging.send.cljs$lang$maxFixedArity = 4);


var zombie$util$messaging$IEventBus$on$dyn_10807 = (function() {
var G__10808 = null;
var G__10808__3 = (function (this$,type,callback_fn){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (zombie.util.messaging.on[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(this$,type,callback_fn) : m__4510__auto__.call(null,this$,type,callback_fn));
} else {
var m__4508__auto__ = (zombie.util.messaging.on["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(this$,type,callback_fn) : m__4508__auto__.call(null,this$,type,callback_fn));
} else {
throw cljs.core.missing_protocol("IEventBus.on",this$);
}
}
});
var G__10808__4 = (function (this$,entity_id,type,callback_fn){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (zombie.util.messaging.on[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$4(this$,entity_id,type,callback_fn) : m__4510__auto__.call(null,this$,entity_id,type,callback_fn));
} else {
var m__4508__auto__ = (zombie.util.messaging.on["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$4(this$,entity_id,type,callback_fn) : m__4508__auto__.call(null,this$,entity_id,type,callback_fn));
} else {
throw cljs.core.missing_protocol("IEventBus.on",this$);
}
}
});
G__10808 = function(this$,entity_id,type,callback_fn){
switch(arguments.length){
case 3:
return G__10808__3.call(this,this$,entity_id,type);
case 4:
return G__10808__4.call(this,this$,entity_id,type,callback_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__10808.cljs$core$IFn$_invoke$arity$3 = G__10808__3;
G__10808.cljs$core$IFn$_invoke$arity$4 = G__10808__4;
return G__10808;
})()
;
zombie.util.messaging.on = (function zombie$util$messaging$on(var_args){
var G__10778 = arguments.length;
switch (G__10778) {
case 3:
return zombie.util.messaging.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return zombie.util.messaging.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zombie.util.messaging.on.cljs$core$IFn$_invoke$arity$3 = (function (this$,type,callback_fn){
if((((!((this$ == null)))) && ((!((this$.zombie$util$messaging$IEventBus$on$arity$3 == null)))))){
return this$.zombie$util$messaging$IEventBus$on$arity$3(this$,type,callback_fn);
} else {
return zombie$util$messaging$IEventBus$on$dyn_10807(this$,type,callback_fn);
}
}));

(zombie.util.messaging.on.cljs$core$IFn$_invoke$arity$4 = (function (this$,entity_id,type,callback_fn){
if((((!((this$ == null)))) && ((!((this$.zombie$util$messaging$IEventBus$on$arity$4 == null)))))){
return this$.zombie$util$messaging$IEventBus$on$arity$4(this$,entity_id,type,callback_fn);
} else {
return zombie$util$messaging$IEventBus$on$dyn_10807(this$,entity_id,type,callback_fn);
}
}));

(zombie.util.messaging.on.cljs$lang$maxFixedArity = 4);



/**
* @constructor
 * @implements {zombie.util.messaging.IEventBus}
*/
zombie.util.messaging.EventBus = (function (subs){
this.subs = subs;
});
(zombie.util.messaging.EventBus.prototype.zombie$util$messaging$IEventBus$ = cljs.core.PROTOCOL_SENTINEL);

(zombie.util.messaging.EventBus.prototype.zombie$util$messaging$IEventBus$drop_all$arity$2 = (function (_,entity_id){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(entity_id)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.subs,cljs.core.dissoc,entity_id);
} else {
return null;
}
}));

(zombie.util.messaging.EventBus.prototype.zombie$util$messaging$IEventBus$send$arity$3 = (function (this$,type,payload){
var self__ = this;
var this$__$1 = this;
return this$__$1.zombie$util$messaging$IEventBus$send$arity$4(null,null,type,payload);
}));

(zombie.util.messaging.EventBus.prototype.zombie$util$messaging$IEventBus$send$arity$4 = (function (_,entity_ids,type,payload){
var self__ = this;
var ___$1 = this;
if(cljs.core.coll_QMARK_(entity_ids)){
var seq__10779 = cljs.core.seq(entity_ids);
var chunk__10780 = null;
var count__10781 = (0);
var i__10782 = (0);
while(true){
if((i__10782 < count__10781)){
var entity_id = chunk__10780.cljs$core$IIndexed$_nth$arity$2(null,i__10782);
var seq__10791_10810 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.subs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,type], null)));
var chunk__10792_10811 = null;
var count__10793_10812 = (0);
var i__10794_10813 = (0);
while(true){
if((i__10794_10813 < count__10793_10812)){
var handler_10814 = chunk__10792_10811.cljs$core$IIndexed$_nth$arity$2(null,i__10794_10813);
(handler_10814.cljs$core$IFn$_invoke$arity$1 ? handler_10814.cljs$core$IFn$_invoke$arity$1(payload) : handler_10814.call(null,payload));


var G__10815 = seq__10791_10810;
var G__10816 = chunk__10792_10811;
var G__10817 = count__10793_10812;
var G__10818 = (i__10794_10813 + (1));
seq__10791_10810 = G__10815;
chunk__10792_10811 = G__10816;
count__10793_10812 = G__10817;
i__10794_10813 = G__10818;
continue;
} else {
var temp__5753__auto___10819 = cljs.core.seq(seq__10791_10810);
if(temp__5753__auto___10819){
var seq__10791_10820__$1 = temp__5753__auto___10819;
if(cljs.core.chunked_seq_QMARK_(seq__10791_10820__$1)){
var c__4638__auto___10821 = cljs.core.chunk_first(seq__10791_10820__$1);
var G__10822 = cljs.core.chunk_rest(seq__10791_10820__$1);
var G__10823 = c__4638__auto___10821;
var G__10824 = cljs.core.count(c__4638__auto___10821);
var G__10825 = (0);
seq__10791_10810 = G__10822;
chunk__10792_10811 = G__10823;
count__10793_10812 = G__10824;
i__10794_10813 = G__10825;
continue;
} else {
var handler_10826 = cljs.core.first(seq__10791_10820__$1);
(handler_10826.cljs$core$IFn$_invoke$arity$1 ? handler_10826.cljs$core$IFn$_invoke$arity$1(payload) : handler_10826.call(null,payload));


var G__10827 = cljs.core.next(seq__10791_10820__$1);
var G__10828 = null;
var G__10829 = (0);
var G__10830 = (0);
seq__10791_10810 = G__10827;
chunk__10792_10811 = G__10828;
count__10793_10812 = G__10829;
i__10794_10813 = G__10830;
continue;
}
} else {
}
}
break;
}


var G__10831 = seq__10779;
var G__10832 = chunk__10780;
var G__10833 = count__10781;
var G__10834 = (i__10782 + (1));
seq__10779 = G__10831;
chunk__10780 = G__10832;
count__10781 = G__10833;
i__10782 = G__10834;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__10779);
if(temp__5753__auto__){
var seq__10779__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10779__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__10779__$1);
var G__10835 = cljs.core.chunk_rest(seq__10779__$1);
var G__10836 = c__4638__auto__;
var G__10837 = cljs.core.count(c__4638__auto__);
var G__10838 = (0);
seq__10779 = G__10835;
chunk__10780 = G__10836;
count__10781 = G__10837;
i__10782 = G__10838;
continue;
} else {
var entity_id = cljs.core.first(seq__10779__$1);
var seq__10795_10839 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.subs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,type], null)));
var chunk__10796_10840 = null;
var count__10797_10841 = (0);
var i__10798_10842 = (0);
while(true){
if((i__10798_10842 < count__10797_10841)){
var handler_10843 = chunk__10796_10840.cljs$core$IIndexed$_nth$arity$2(null,i__10798_10842);
(handler_10843.cljs$core$IFn$_invoke$arity$1 ? handler_10843.cljs$core$IFn$_invoke$arity$1(payload) : handler_10843.call(null,payload));


var G__10844 = seq__10795_10839;
var G__10845 = chunk__10796_10840;
var G__10846 = count__10797_10841;
var G__10847 = (i__10798_10842 + (1));
seq__10795_10839 = G__10844;
chunk__10796_10840 = G__10845;
count__10797_10841 = G__10846;
i__10798_10842 = G__10847;
continue;
} else {
var temp__5753__auto___10848__$1 = cljs.core.seq(seq__10795_10839);
if(temp__5753__auto___10848__$1){
var seq__10795_10849__$1 = temp__5753__auto___10848__$1;
if(cljs.core.chunked_seq_QMARK_(seq__10795_10849__$1)){
var c__4638__auto___10850 = cljs.core.chunk_first(seq__10795_10849__$1);
var G__10851 = cljs.core.chunk_rest(seq__10795_10849__$1);
var G__10852 = c__4638__auto___10850;
var G__10853 = cljs.core.count(c__4638__auto___10850);
var G__10854 = (0);
seq__10795_10839 = G__10851;
chunk__10796_10840 = G__10852;
count__10797_10841 = G__10853;
i__10798_10842 = G__10854;
continue;
} else {
var handler_10855 = cljs.core.first(seq__10795_10849__$1);
(handler_10855.cljs$core$IFn$_invoke$arity$1 ? handler_10855.cljs$core$IFn$_invoke$arity$1(payload) : handler_10855.call(null,payload));


var G__10856 = cljs.core.next(seq__10795_10849__$1);
var G__10857 = null;
var G__10858 = (0);
var G__10859 = (0);
seq__10795_10839 = G__10856;
chunk__10796_10840 = G__10857;
count__10797_10841 = G__10858;
i__10798_10842 = G__10859;
continue;
}
} else {
}
}
break;
}


var G__10860 = cljs.core.next(seq__10779__$1);
var G__10861 = null;
var G__10862 = (0);
var G__10863 = (0);
seq__10779 = G__10860;
chunk__10780 = G__10861;
count__10781 = G__10862;
i__10782 = G__10863;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var seq__10799 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.subs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_ids,type], null)));
var chunk__10800 = null;
var count__10801 = (0);
var i__10802 = (0);
while(true){
if((i__10802 < count__10801)){
var handler = chunk__10800.cljs$core$IIndexed$_nth$arity$2(null,i__10802);
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(payload) : handler.call(null,payload));


var G__10866 = seq__10799;
var G__10867 = chunk__10800;
var G__10868 = count__10801;
var G__10869 = (i__10802 + (1));
seq__10799 = G__10866;
chunk__10800 = G__10867;
count__10801 = G__10868;
i__10802 = G__10869;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__10799);
if(temp__5753__auto__){
var seq__10799__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10799__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__10799__$1);
var G__10870 = cljs.core.chunk_rest(seq__10799__$1);
var G__10871 = c__4638__auto__;
var G__10872 = cljs.core.count(c__4638__auto__);
var G__10873 = (0);
seq__10799 = G__10870;
chunk__10800 = G__10871;
count__10801 = G__10872;
i__10802 = G__10873;
continue;
} else {
var handler = cljs.core.first(seq__10799__$1);
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(payload) : handler.call(null,payload));


var G__10874 = cljs.core.next(seq__10799__$1);
var G__10875 = null;
var G__10876 = (0);
var G__10877 = (0);
seq__10799 = G__10874;
chunk__10800 = G__10875;
count__10801 = G__10876;
i__10802 = G__10877;
continue;
}
} else {
return null;
}
}
break;
}
}
}));

(zombie.util.messaging.EventBus.prototype.zombie$util$messaging$IEventBus$on$arity$3 = (function (this$,type,callback_fn){
var self__ = this;
var this$__$1 = this;
return this$__$1.zombie$util$messaging$IEventBus$on$arity$4(null,null,type,callback_fn);
}));

(zombie.util.messaging.EventBus.prototype.zombie$util$messaging$IEventBus$on$arity$4 = (function (_,entity_id,type,callback_fn){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.subs,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,type], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([callback_fn], 0));
}));

(zombie.util.messaging.EventBus.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"subs","subs",1453849536,null)], null);
}));

(zombie.util.messaging.EventBus.cljs$lang$type = true);

(zombie.util.messaging.EventBus.cljs$lang$ctorStr = "zombie.util.messaging/EventBus");

(zombie.util.messaging.EventBus.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"zombie.util.messaging/EventBus");
}));

/**
 * Positional factory function for zombie.util.messaging/EventBus.
 */
zombie.util.messaging.__GT_EventBus = (function zombie$util$messaging$__GT_EventBus(subs){
return (new zombie.util.messaging.EventBus(subs));
});

zombie.util.messaging.create_event_bus = (function zombie$util$messaging$create_event_bus(){
return zombie.util.messaging.__GT_EventBus(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=zombie.util.messaging.js.map
