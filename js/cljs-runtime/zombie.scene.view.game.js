goog.provide('zombie.scene.view.game');
var module$node_modules$three$build$three_module=shadow.js.require("module$node_modules$three$build$three_module", {});
zombie.scene.view.game.lights = (function zombie$scene$view$game$lights(light_target){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"directional-light","directional-light",1424371138),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(4),(0)], null),new cljs.core.Keyword(null,"cast-shadow","cast-shadow",-446090219),true,new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"map-size","map-size",-683564558),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(2048),new cljs.core.Keyword(null,"height","height",1025178622),(2048)], null),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),(-20),new cljs.core.Keyword(null,"right","right",-452581833),(20),new cljs.core.Keyword(null,"top","top",-1856271961),(20),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(-20)], null)], null),new cljs.core.Keyword(null,"target","target",253001721),light_target,new cljs.core.Keyword(null,"color","color",1011675173),(16777215),new cljs.core.Keyword(null,"intensity","intensity",1142770863),0.05], null)], null)], null);
});
zombie.scene.view.game.camera_helpers = (function zombie$scene$view$game$camera_helpers(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),(function (){var temp__5753__auto__ = cljs.core.deref((function (){var G__10739 = zombie.state.databases.scene;
var G__10740 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"camera-helper","camera-helper",-591790224)], null);
return (threeagent.core.cursor.cljs$core$IFn$_invoke$arity$2 ? threeagent.core.cursor.cljs$core$IFn$_invoke$arity$2(G__10739,G__10740) : threeagent.core.cursor.call(null,G__10739,G__10740));
})());
if(cljs.core.truth_(temp__5753__auto__)){
var helper = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instance","instance",-2121349050),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object","object",1474613949),helper], null)], null);
} else {
return null;
}
})()], null);
});
zombie.scene.view.game.camera = (function zombie$scene$view$game$camera(){
var aspect = cljs.core.deref((function (){var G__10741 = zombie.state.databases.scene;
var G__10742 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"screen-aspect-ratio","screen-aspect-ratio",-1045134019)], null);
return (threeagent.core.cursor.cljs$core$IFn$_invoke$arity$2 ? threeagent.core.cursor.cljs$core$IFn$_invoke$arity$2(G__10741,G__10742) : threeagent.core.cursor.call(null,G__10741,G__10742));
})());
var light_target = (new module$node_modules$three$build$three_module.Object3D());
var height = (10);
var width = (height * aspect);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"audio-listener",new cljs.core.Keyword(null,"follow","follow",-809317662),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),"player",new cljs.core.Keyword(null,"look-at?","look-at?",-347394510),true,new cljs.core.Keyword(null,"position-offset","position-offset",1257061411),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null)], null),new cljs.core.Keyword(null,"audio","audio",1819127321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listener?","listener?",-1382178204),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"follow","follow",-809317662),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),"player",new cljs.core.Keyword(null,"position-offset","position-offset",1257061411),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),(18),(15)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"orthographic-camera","orthographic-camera",-79663393),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"near","near",-1077668328),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"far","far",85807546),new cljs.core.Keyword(null,"entity","entity",-450970276),new cljs.core.Keyword(null,"left","left",-399115937)],[(- height),height,"camera",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"look-at-target","look-at-target",1083230409),"player"], null),width,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),0.001,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pick-camera","pick-camera",1317801101),true], null),(1000),cljs.core.PersistentArrayMap.EMPTY,(- width)]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10),(20)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.view.game.lights,light_target], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(0),(-50)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instance","instance",-2121349050),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object","object",1474613949),light_target], null)], null)], null)], null)], null)], null);
});
zombie.scene.view.game.box = (function zombie$scene$view$game$box(pos,on_click,selected_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"physics","physics",-1254209137),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hull","hull",-957096876),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"rectangle","rectangle",293163262),new cljs.core.Keyword(null,"width","width",-384071477),(1),new cljs.core.Keyword(null,"height","height",1025178622),(1),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mass","mass",-2138950046),(1),new cljs.core.Keyword(null,"frictionAir","frictionAir",1279701012),0.5], null)], null)], null),new cljs.core.Keyword(null,"position-offset","position-offset",1257061411),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,(0),0.5], null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),pos], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"box","box",1530920394),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(selected_QMARK_)?"purple":"white")], null),new cljs.core.Keyword(null,"receive-shadow","receive-shadow",-789712390),true,new cljs.core.Keyword(null,"cast-shadow","cast-shadow",-446090219),true,new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click,new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null)], null)], null);
});
zombie.scene.view.game.cross = (function zombie$scene$view$game$cross(color){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"box","box",1530920394),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),color], null),new cljs.core.Keyword(null,"cast-shadow","cast-shadow",-446090219),true,new cljs.core.Keyword(null,"receive-shadow","receive-shadow",-789712390),true,new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),0.1,0.2], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"box","box",1530920394),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),color], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),zombie.util.math.pi2,(0)], null),new cljs.core.Keyword(null,"cast-shadow","cast-shadow",-446090219),true,new cljs.core.Keyword(null,"receive-shadow","receive-shadow",-789712390),true,new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),0.1,0.2], null)], null)], null)], null);
});
zombie.scene.view.game.axis_pole = (function zombie$scene$view$game$axis_pole(rot,color){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),rot], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cylinder","cylinder",-1762349035),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),color], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),2.5,(0)], null),new cljs.core.Keyword(null,"height","height",1025178622),(5),new cljs.core.Keyword(null,"radius-top","radius-top",-343423468),0.1,new cljs.core.Keyword(null,"radius-bottom","radius-bottom",-1077150367),0.1], null)], null)], null);
});
zombie.scene.view.game.axes = (function zombie$scene$view$game$axes(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.view.game.axis_pole,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(- zombie.util.math.pi2)], null),"red"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.view.game.axis_pole,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),"green"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.view.game.axis_pole,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.util.math.pi2,(0),(0)], null),"blue"], null)], null)], null);
});
zombie.scene.view.game.icons = (function zombie$scene$view$game$icons(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),(function (){var temp__5753__auto__ = cljs.core.deref((function (){var G__10743 = zombie.state.databases.input;
var G__10744 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"world-position","world-position",-486434797)], null);
return (threeagent.core.cursor.cljs$core$IFn$_invoke$arity$2 ? threeagent.core.cursor.cljs$core$IFn$_invoke$arity$2(G__10743,G__10744) : threeagent.core.cursor.call(null,G__10743,G__10744));
})());
if(cljs.core.truth_(temp__5753__auto__)){
var map__10747 = temp__5753__auto__;
var map__10747__$1 = cljs.core.__destructure_map(map__10747);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10747__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10747__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10747__$1,new cljs.core.Keyword(null,"z","z",-789527183));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.view.game.cross,"blue"], null)], null);
} else {
return null;
}
})()], null);
});
zombie.scene.view.game.entities = (function zombie$scene$view$game$entities(){
var entities = cljs.core.deref(zombie.state.databases.entities);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),(function (){var iter__4611__auto__ = (function zombie$scene$view$game$entities_$_iter__10750(s__10751){
return (new cljs.core.LazySeq(null,(function (){
var s__10751__$1 = s__10751;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__10751__$1);
if(temp__5753__auto__){
var s__10751__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10751__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__10751__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__10755 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__10754 = (0);
while(true){
if((i__10754 < size__4610__auto__)){
var vec__10758 = cljs.core._nth(c__4609__auto__,i__10754);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10758,(0),null);
var map__10761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10758,(1),null);
var map__10761__$1 = cljs.core.__destructure_map(map__10761);
var cfg = map__10761__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10761__$1,new cljs.core.Keyword(null,"type","type",1174270348));
cljs.core.chunk_append(b__10755,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),(function (){var G__10762 = type;
var G__10762__$1 = (((G__10762 instanceof cljs.core.Keyword))?G__10762.fqn:null);
switch (G__10762__$1) {
case "player":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.player.render,id], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10762__$1)].join('')));

}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__10769 = (i__10754 + (1));
i__10754 = G__10769;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10755),zombie$scene$view$game$entities_$_iter__10750(cljs.core.chunk_rest(s__10751__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10755),null);
}
} else {
var vec__10763 = cljs.core.first(s__10751__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10763,(0),null);
var map__10766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10763,(1),null);
var map__10766__$1 = cljs.core.__destructure_map(map__10766);
var cfg = map__10766__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10766__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),(function (){var G__10767 = type;
var G__10767__$1 = (((G__10767 instanceof cljs.core.Keyword))?G__10767.fqn:null);
switch (G__10767__$1) {
case "player":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.player.render,id], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10767__$1)].join('')));

}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),zombie$scene$view$game$entities_$_iter__10750(cljs.core.rest(s__10751__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(entities);
})()], null);
});
zombie.scene.view.game.render = (function zombie$scene$view$game$render(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.view.game.icons], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.effects.render], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.view.game.camera_helpers], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.view.game.camera], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.map.render], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.view.game.entities], null)], null);
});

//# sourceMappingURL=zombie.scene.view.game.js.map
