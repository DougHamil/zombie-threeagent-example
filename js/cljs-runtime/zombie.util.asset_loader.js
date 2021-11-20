goog.provide('zombie.util.asset_loader');
zombie.util.asset_loader.join_path = (function zombie$util$asset_loader$join_path(base,addition){
var base__$1 = ((clojure.string.ends_with_QMARK_(base,"/"))?clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(base)):base);
var addition__$1 = ((clojure.string.starts_with_QMARK_(addition,"/"))?clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.rest(addition)):addition);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base__$1),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(addition__$1)].join('');
});
zombie.util.asset_loader.leaf_QMARK_ = (function zombie$util$asset_loader$leaf_QMARK_(v){
return ((cljs.core.vector_QMARK_(v)) && ((cljs.core.second(v) instanceof cljs.core.Keyword)));
});
zombie.util.asset_loader.find_refs = (function zombie$util$asset_loader$find_refs(e){
var refs = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
clojure.walk.postwalk((function (n){
if(cljs.core.truth_(new cljs.core.Keyword(null,"asset-ref","asset-ref",-1887527084).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(n)))){
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(refs,cljs.core.first(n));
} else {
}

return n;
}),e);

return cljs.core.set(cljs.core.persistent_BANG_(refs));
});
if((typeof zombie !== 'undefined') && (typeof zombie.util !== 'undefined') && (typeof zombie.util.asset_loader !== 'undefined') && (typeof zombie.util.asset_loader.visit !== 'undefined')){
} else {
zombie.util.asset_loader.visit = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__10537 = cljs.core.get_global_hierarchy;
return (fexpr__10537.cljs$core$IFn$_invoke$arity$0 ? fexpr__10537.cljs$core$IFn$_invoke$arity$0() : fexpr__10537.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("zombie.util.asset-loader","visit"),(function (_ctx,node){
if(zombie.util.asset_loader.leaf_QMARK_(node)){
return new cljs.core.Keyword(null,"leaf","leaf",1306118732);
} else {
return new cljs.core.Keyword(null,"branch","branch",-74633925);
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
zombie.util.asset_loader.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"branch","branch",-74633925),(function (ctx,node){
var path = zombie.util.asset_loader.join_path(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.first(node));
var vec__10538 = ((cljs.core.map_QMARK_(cljs.core.second(node)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(node),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),node)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.rest(node)], null));
var cfg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10538,(0),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10538,(1),null);
var mw = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"middleware","middleware",1462115504).cljs$core$IFn$_invoke$arity$2(cfg,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"middleware","middleware",1462115504).cljs$core$IFn$_invoke$arity$2(ctx,cljs.core.PersistentVector.EMPTY));
var ctx__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ctx,cfg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"middleware","middleware",1462115504),mw,new cljs.core.Keyword(null,"path","path",-188191168),path], null)], 0));
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zombie.util.asset_loader.visit,ctx__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest], 0));
}));
zombie.util.asset_loader.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"leaf","leaf",1306118732),(function (ctx,p__10541){
var vec__10542 = p__10541;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10542,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10542,(1),null);
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10542,(2),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([key,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"config","config",994861415),config,new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.Keyword(null,"middleware","middleware",1462115504).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"references","references",882562509),zombie.util.asset_loader.find_refs(config),new cljs.core.Keyword(null,"loader","loader",-462395423),new cljs.core.Keyword(null,"loader","loader",-462395423).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.Keyword(null,"path","path",-188191168),zombie.util.asset_loader.join_path(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(ctx),path)], null)]);
}));
zombie.util.asset_loader.detect_duplicates_BANG_ = (function zombie$util$asset_loader$detect_duplicates_BANG_(nodes){
var dupes = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__10545_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(cljs.core.second(p1__10545_SHARP_)));
}),cljs.core.group_by(cljs.core.first,nodes)));
if(cljs.core.seq(dupes)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Duplicate asset keys found",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"duplicate-keys","duplicate-keys",1897604030),dupes], null));
} else {
return null;
}
});
zombie.util.asset_loader.detect_cycles_BANG__STAR_ = (function zombie$util$asset_loader$detect_cycles_BANG__STAR_(nodes,visited,p__10546){
var map__10547 = p__10546;
var map__10547__$1 = cljs.core.__destructure_map(map__10547);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10547__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var references = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10547__$1,new cljs.core.Keyword(null,"references","references",882562509));
if(cljs.core.truth_((visited.cljs$core$IFn$_invoke$arity$1 ? visited.cljs$core$IFn$_invoke$arity$1(key) : visited.call(null,key)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cycle detected",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),visited,new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
} else {
var seq__10548 = cljs.core.seq(references);
var chunk__10549 = null;
var count__10550 = (0);
var i__10551 = (0);
while(true){
if((i__10551 < count__10550)){
var n = chunk__10549.cljs$core$IIndexed$_nth$arity$2(null,i__10551);
var G__10558_10591 = nodes;
var G__10559_10592 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(visited,key);
var G__10560_10593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(nodes,n);
(zombie.util.asset_loader.detect_cycles_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 ? zombie.util.asset_loader.detect_cycles_BANG__STAR_.cljs$core$IFn$_invoke$arity$3(G__10558_10591,G__10559_10592,G__10560_10593) : zombie.util.asset_loader.detect_cycles_BANG__STAR_.call(null,G__10558_10591,G__10559_10592,G__10560_10593));


var G__10594 = seq__10548;
var G__10595 = chunk__10549;
var G__10596 = count__10550;
var G__10597 = (i__10551 + (1));
seq__10548 = G__10594;
chunk__10549 = G__10595;
count__10550 = G__10596;
i__10551 = G__10597;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__10548);
if(temp__5753__auto__){
var seq__10548__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10548__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__10548__$1);
var G__10598 = cljs.core.chunk_rest(seq__10548__$1);
var G__10599 = c__4638__auto__;
var G__10600 = cljs.core.count(c__4638__auto__);
var G__10601 = (0);
seq__10548 = G__10598;
chunk__10549 = G__10599;
count__10550 = G__10600;
i__10551 = G__10601;
continue;
} else {
var n = cljs.core.first(seq__10548__$1);
var G__10561_10602 = nodes;
var G__10562_10603 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(visited,key);
var G__10563_10604 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(nodes,n);
(zombie.util.asset_loader.detect_cycles_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 ? zombie.util.asset_loader.detect_cycles_BANG__STAR_.cljs$core$IFn$_invoke$arity$3(G__10561_10602,G__10562_10603,G__10563_10604) : zombie.util.asset_loader.detect_cycles_BANG__STAR_.call(null,G__10561_10602,G__10562_10603,G__10563_10604));


var G__10605 = cljs.core.next(seq__10548__$1);
var G__10606 = null;
var G__10607 = (0);
var G__10608 = (0);
seq__10548 = G__10605;
chunk__10549 = G__10606;
count__10550 = G__10607;
i__10551 = G__10608;
continue;
}
} else {
return null;
}
}
break;
}
}
});
zombie.util.asset_loader.detect_cycles_BANG_ = (function zombie$util$asset_loader$detect_cycles_BANG_(nodes){
var seq__10564 = cljs.core.seq(nodes);
var chunk__10565 = null;
var count__10566 = (0);
var i__10567 = (0);
while(true){
if((i__10567 < count__10566)){
var vec__10574 = chunk__10565.cljs$core$IIndexed$_nth$arity$2(null,i__10567);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10574,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10574,(1),null);
zombie.util.asset_loader.detect_cycles_BANG__STAR_(nodes,cljs.core.PersistentHashSet.EMPTY,n);


var G__10609 = seq__10564;
var G__10610 = chunk__10565;
var G__10611 = count__10566;
var G__10612 = (i__10567 + (1));
seq__10564 = G__10609;
chunk__10565 = G__10610;
count__10566 = G__10611;
i__10567 = G__10612;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__10564);
if(temp__5753__auto__){
var seq__10564__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10564__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__10564__$1);
var G__10613 = cljs.core.chunk_rest(seq__10564__$1);
var G__10614 = c__4638__auto__;
var G__10615 = cljs.core.count(c__4638__auto__);
var G__10616 = (0);
seq__10564 = G__10613;
chunk__10565 = G__10614;
count__10566 = G__10615;
i__10567 = G__10616;
continue;
} else {
var vec__10577 = cljs.core.first(seq__10564__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10577,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10577,(1),null);
zombie.util.asset_loader.detect_cycles_BANG__STAR_(nodes,cljs.core.PersistentHashSet.EMPTY,n);


var G__10617 = cljs.core.next(seq__10564__$1);
var G__10618 = null;
var G__10619 = (0);
var G__10620 = (0);
seq__10564 = G__10617;
chunk__10565 = G__10618;
count__10566 = G__10619;
i__10567 = G__10620;
continue;
}
} else {
return null;
}
}
break;
}
});
zombie.util.asset_loader.validate_BANG_ = (function zombie$util$asset_loader$validate_BANG_(nodes){
zombie.util.asset_loader.detect_duplicates_BANG_(nodes);

zombie.util.asset_loader.detect_cycles_BANG_(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,nodes));

return nodes;
});
zombie.util.asset_loader.ref__GT_promise = (function zombie$util$asset_loader$ref__GT_promise(nodes,promises,database,references){
return Promise.all(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10580_SHARP_){
var G__10581 = nodes;
var G__10582 = promises;
var G__10583 = database;
var G__10584 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(nodes,p1__10580_SHARP_);
return (zombie.util.asset_loader.get_promise.cljs$core$IFn$_invoke$arity$4 ? zombie.util.asset_loader.get_promise.cljs$core$IFn$_invoke$arity$4(G__10581,G__10582,G__10583,G__10584) : zombie.util.asset_loader.get_promise.call(null,G__10581,G__10582,G__10583,G__10584));
}),references));
});
zombie.util.asset_loader.resolve_config_refs = (function zombie$util$asset_loader$resolve_config_refs(database,config){
return clojure.walk.postwalk((function (n){
if(cljs.core.truth_(new cljs.core.Keyword(null,"asset-ref","asset-ref",-1887527084).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(n)))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(database),cljs.core.first(n));
} else {
return n;
}
}),config);
});
zombie.util.asset_loader.get_promise = (function zombie$util$asset_loader$get_promise(nodes,promises,database,p__10585){
var map__10586 = p__10585;
var map__10586__$1 = cljs.core.__destructure_map(map__10586);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10586__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10586__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10586__$1,new cljs.core.Keyword(null,"config","config",994861415));
var references = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10586__$1,new cljs.core.Keyword(null,"references","references",882562509));
var loader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10586__$1,new cljs.core.Keyword(null,"loader","loader",-462395423));
var middleware = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10586__$1,new cljs.core.Keyword(null,"middleware","middleware",1462115504));
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(promises),key);
if(cljs.core.truth_(temp__5751__auto__)){
var p = temp__5751__auto__;
return p;
} else {
var p = zombie.util.asset_loader.ref__GT_promise(nodes,promises,database,references).then((function (_){
var resolved_config = zombie.util.asset_loader.resolve_config_refs(database,config);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Loading ",key], 0));

return (loader.cljs$core$IFn$_invoke$arity$3 ? loader.cljs$core$IFn$_invoke$arity$3(key,path,resolved_config) : loader.call(null,key,path,resolved_config)).then((function (data){
console.log("Loaded",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),data);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolved_config,data], null);
}));
})).then((function (p__10587){
var vec__10588 = p__10587;
var resolved_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10588,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10588,(1),null);
var result = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (data__$1,mw){
return (mw.cljs$core$IFn$_invoke$arity$3 ? mw.cljs$core$IFn$_invoke$arity$3(key,data__$1,resolved_config) : mw.call(null,key,data__$1,resolved_config));
}),data,middleware);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(database,cljs.core.assoc,key,result);

return result;
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(promises,cljs.core.assoc,key,p);

return p;
}
});
zombie.util.asset_loader.load_BANG_ = (function zombie$util$asset_loader$load_BANG_(database,tree){
var nodes = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,zombie.util.asset_loader.validate_BANG_(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zombie.util.asset_loader.visit,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"./",new cljs.core.Keyword(null,"middleware","middleware",1462115504),cljs.core.PersistentVector.EMPTY], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tree], 0))));
var promises = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return Promise.all(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(zombie.util.asset_loader.get_promise,nodes,promises,database),cljs.core.vals(nodes)));
});
zombie.util.asset_loader.ref = (function zombie$util$asset_loader$ref(asset_key){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [asset_key], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"asset-ref","asset-ref",-1887527084),true], null));
});

//# sourceMappingURL=zombie.util.asset_loader.js.map
