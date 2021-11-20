goog.provide('zombie.assets.light');
var module$node_modules$three$build$three_module=shadow.js.require("module$node_modules$three$build$three_module", {});
zombie.assets.light.loader = (function zombie$assets$light$loader(_key,_path,p__10513){
var map__10514 = p__10513;
var map__10514__$1 = cljs.core.__destructure_map(map__10514);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10514__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10514__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var intensity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10514__$1,new cljs.core.Keyword(null,"intensity","intensity",1142770863));
var decay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10514__$1,new cljs.core.Keyword(null,"decay","decay",1036712184));
var distance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10514__$1,new cljs.core.Keyword(null,"distance","distance",-1671893894));
return Promise.resolve((function (){var G__10515 = type;
var G__10515__$1 = (((G__10515 instanceof cljs.core.Keyword))?G__10515.fqn:null);
switch (G__10515__$1) {
case "point":
return (new module$node_modules$three$build$three_module.PointLight((function (){var or__4212__auto__ = color;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "white";
}
})(),(function (){var or__4212__auto__ = intensity;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return 1.0;
}
})(),(function (){var or__4212__auto__ = distance;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return 1.0;
}
})(),(function (){var or__4212__auto__ = decay;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return 1.0;
}
})()));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10515__$1)].join('')));

}
})());
});

//# sourceMappingURL=zombie.assets.light.js.map
