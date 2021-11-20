goog.provide('zombie.util.pooling');
var module$node_modules$three$examples$jsm$utils$SkeletonUtils=shadow.js.require("module$node_modules$three$examples$jsm$utils$SkeletonUtils", {});
zombie.util.pooling.pool = (function zombie$util$pooling$pool(count,source){
var pool = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__10447_10458 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(count));
var chunk__10448_10459 = null;
var count__10449_10460 = (0);
var i__10450_10461 = (0);
while(true){
if((i__10450_10461 < count__10449_10460)){
var __10462 = chunk__10448_10459.cljs$core$IIndexed$_nth$arity$2(null,i__10450_10461);
var clone_10463 = module$node_modules$three$examples$jsm$utils$SkeletonUtils.clone(source);
var __10464__$1 = (clone_10463.animations = source.animations);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pool,cljs.core.assoc,clone_10463.uuid,clone_10463);


var G__10465 = seq__10447_10458;
var G__10466 = chunk__10448_10459;
var G__10467 = count__10449_10460;
var G__10468 = (i__10450_10461 + (1));
seq__10447_10458 = G__10465;
chunk__10448_10459 = G__10466;
count__10449_10460 = G__10467;
i__10450_10461 = G__10468;
continue;
} else {
var temp__5753__auto___10469 = cljs.core.seq(seq__10447_10458);
if(temp__5753__auto___10469){
var seq__10447_10470__$1 = temp__5753__auto___10469;
if(cljs.core.chunked_seq_QMARK_(seq__10447_10470__$1)){
var c__4638__auto___10471 = cljs.core.chunk_first(seq__10447_10470__$1);
var G__10472 = cljs.core.chunk_rest(seq__10447_10470__$1);
var G__10473 = c__4638__auto___10471;
var G__10474 = cljs.core.count(c__4638__auto___10471);
var G__10475 = (0);
seq__10447_10458 = G__10472;
chunk__10448_10459 = G__10473;
count__10449_10460 = G__10474;
i__10450_10461 = G__10475;
continue;
} else {
var __10476 = cljs.core.first(seq__10447_10470__$1);
var clone_10477 = module$node_modules$three$examples$jsm$utils$SkeletonUtils.clone(source);
var __10478__$1 = (clone_10477.animations = source.animations);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pool,cljs.core.assoc,clone_10477.uuid,clone_10477);


var G__10479 = cljs.core.next(seq__10447_10470__$1);
var G__10480 = null;
var G__10481 = (0);
var G__10482 = (0);
seq__10447_10458 = G__10479;
chunk__10448_10459 = G__10480;
count__10449_10460 = G__10481;
i__10450_10461 = G__10482;
continue;
}
} else {
}
}
break;
}

return pool;
});
zombie.util.pooling.claim_BANG_ = (function zombie$util$pooling$claim_BANG_(pool){
var temp__5753__auto__ = cljs.core.first(cljs.core.deref(pool));
if(cljs.core.truth_(temp__5753__auto__)){
var vec__10455 = temp__5753__auto__;
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10455,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10455,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(pool,cljs.core.dissoc,item_id);

return item;
} else {
return null;
}
});
zombie.util.pooling.return_BANG_ = (function zombie$util$pooling$return_BANG_(pool,item){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pool,cljs.core.assoc,item.uuid,item);
});
zombie.util.pooling.size = (function zombie$util$pooling$size(pool){
return cljs.core.count(cljs.core.deref(pool));
});

//# sourceMappingURL=zombie.util.pooling.js.map
