goog.provide('zombie.scene.entity');
zombie.scene.entity.render = (function zombie$scene$entity$render(database){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),(function (){var iter__4611__auto__ = (function zombie$scene$entity$render_$_iter__10632(s__10633){
return (new cljs.core.LazySeq(null,(function (){
var s__10633__$1 = s__10633;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__10633__$1);
if(temp__5753__auto__){
var s__10633__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10633__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__10633__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__10635 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__10634 = (0);
while(true){
if((i__10634 < size__4610__auto__)){
var vec__10636 = cljs.core._nth(c__4609__auto__,i__10634);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10636,(0),null);
var map__10639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10636,(1),null);
var map__10639__$1 = cljs.core.__destructure_map(map__10639);
var cfg = map__10639__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10639__$1,new cljs.core.Keyword(null,"type","type",1174270348));
cljs.core.chunk_append(b__10635,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),(function (){var G__10640 = type;
var G__10640__$1 = (((G__10640 instanceof cljs.core.Keyword))?G__10640.fqn:null);
switch (G__10640__$1) {
case "powerup":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.props.powerup,database,id,cfg], null);

break;
case "zombie":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.zombie.render,database,id,cfg], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10640__$1)].join('')));

}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__10647 = (i__10634 + (1));
i__10634 = G__10647;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10635),zombie$scene$entity$render_$_iter__10632(cljs.core.chunk_rest(s__10633__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10635),null);
}
} else {
var vec__10641 = cljs.core.first(s__10633__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10641,(0),null);
var map__10644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10641,(1),null);
var map__10644__$1 = cljs.core.__destructure_map(map__10644);
var cfg = map__10644__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10644__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),(function (){var G__10645 = type;
var G__10645__$1 = (((G__10645 instanceof cljs.core.Keyword))?G__10645.fqn:null);
switch (G__10645__$1) {
case "powerup":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.props.powerup,database,id,cfg], null);

break;
case "zombie":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.zombie.render,database,id,cfg], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10645__$1)].join('')));

}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),zombie$scene$entity$render_$_iter__10632(cljs.core.rest(s__10633__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.deref(database));
})()], null);
});

//# sourceMappingURL=zombie.scene.entity.js.map
