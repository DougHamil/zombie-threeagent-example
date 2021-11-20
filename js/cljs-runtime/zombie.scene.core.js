goog.provide('zombie.scene.core');
var module$node_modules$three$build$three_module=shadow.js.require("module$node_modules$three$build$three_module", {});
var module$node_modules$$tweenjs$tween_js$dist$tween_esm=shadow.js.require("module$node_modules$$tweenjs$tween_js$dist$tween_esm", {});
zombie.scene.core.root = (function zombie$scene$core$root(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"a"], null)], null),(function (){var G__13410 = cljs.core.deref((function (){var G__13411 = zombie.state.databases.game;
var G__13412 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-view","active-view",-1531689252)], null);
return (threeagent.core.cursor.cljs$core$IFn$_invoke$arity$2 ? threeagent.core.cursor.cljs$core$IFn$_invoke$arity$2(G__13411,G__13412) : threeagent.core.cursor.call(null,G__13411,G__13412));
})());
var G__13410__$1 = (((G__13410 instanceof cljs.core.Keyword))?G__13410.fqn:null);
switch (G__13410__$1) {
case "game":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.view.game.render], null);

break;
case "title":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.view.title.render], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13410__$1)].join('')));

}
})()], null);
});
zombie.scene.core.init_BANG_ = (function zombie$scene$core$init_BANG_(){
var ctx = threeagent.core.render.cljs$core$IFn$_invoke$arity$3(zombie.scene.core.root,document.getElementById("root"),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"shadow-map","shadow-map",1196779829),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),true], null),new cljs.core.Keyword(null,"systems","systems",-1015374944),zombie.scene.system.core.create(),new cljs.core.Keyword(null,"entity-types","entity-types",-1594967372),zombie.scene.entity_type.core.create(),new cljs.core.Keyword(null,"on-before-render","on-before-render",601463713),(function (p1__13413_SHARP_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(zombie.state.databases.game,cljs.core.update,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__13413_SHARP_], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(zombie.state.databases.game,cljs.core.assoc,new cljs.core.Keyword(null,"delta-time","delta-time",-1123875803),p1__13413_SHARP_);

return module$node_modules$$tweenjs$tween_js$dist$tween_esm.update();
})], null));
var scene = new cljs.core.Keyword(null,"threejs-scene","threejs-scene",754266515).cljs$core$IFn$_invoke$arity$1(ctx);
var renderer = new cljs.core.Keyword(null,"threejs-renderer","threejs-renderer",468746733).cljs$core$IFn$_invoke$arity$1(ctx);
var fog_color_13415 = (1052688);
(scene.fog = (new module$node_modules$three$build$three_module.Fog(fog_color_13415,(100),(100))));

renderer.setClearColor(fog_color_13415);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(zombie.state.databases.scene,cljs.core.assoc,new cljs.core.Keyword(null,"threeagent-context","threeagent-context",-687318754),ctx);
});

//# sourceMappingURL=zombie.scene.core.js.map
