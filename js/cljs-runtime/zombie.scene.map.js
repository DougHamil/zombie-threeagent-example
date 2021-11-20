goog.provide('zombie.scene.map');
zombie.scene.map.lot_size = (20);
zombie.scene.map.half_lot_size = (zombie.scene.map.lot_size / (2));
zombie.scene.map.model = (function zombie$scene$map$model(model_key,collide_QMARK_){
if(cljs.core.truth_(collide_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),model_key,new cljs.core.Keyword(null,"physics","physics",-1254209137),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hull","hull",-957096876),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"model-bounding-box","model-bounding-box",-112419983),new cljs.core.Keyword(null,"model-type","model-type",398058196),model_key,new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"isStatic","isStatic",1002568003),true], null)], null)], null)], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),model_key], null)], null);
}
});
zombie.scene.map.grass = (function zombie$scene$map$grass(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plane","plane",-223595224),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.01,(0)], null),new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.Keyword("material","grass","material/grass",1459226894).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(zombie.state.databases.assets)),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- zombie.util.math.pi2),(0),(0)], null),new cljs.core.Keyword(null,"receive-shadow","receive-shadow",-789712390),true,new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.map.lot_size,zombie.scene.map.lot_size,(1)], null)], null)], null);
});
zombie.scene.map.lightpost = (function zombie$scene$map$lightpost(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.2,1.2,1.2], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("model","lightpost-single","model/lightpost-single",-400655147)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"physics","physics",-1254209137),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hull","hull",-957096876),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"radius","radius",-2073122258),0.25,new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"isStatic","isStatic",1002568003),true], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point-light","point-light",669926690),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"intensity","intensity",1142770863),1.4,new cljs.core.Keyword(null,"color","color",1011675173),(16233728),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.4,3.5,-0.5], null),new cljs.core.Keyword(null,"distance","distance",-1671893894),(8)], null)], null)], null)], null);
});
zombie.scene.map.grave1 = (function zombie$scene$map$grave1(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.map.model,new cljs.core.Keyword("model","gravestone-decorative","model/gravestone-decorative",-462813728),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(2)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),0.4,(1)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.map.model,new cljs.core.Keyword("model","grave","model/grave",2021262544),false], null)], null)], null);
});
zombie.scene.map.coffin1 = (function zombie$scene$map$coffin1(_id){
var dead_QMARK_ = (threeagent.core.atom.cljs$core$IFn$_invoke$arity$1 ? threeagent.core.atom.cljs$core$IFn$_invoke$arity$1(false) : threeagent.core.atom.call(null,false));
return (function (id){
if(cljs.core.truth_(cljs.core.deref(dead_QMARK_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("model","debris-wood","model/debris-wood",-272241908)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enemy?","enemy?",-772698281),true], null),new cljs.core.Keyword(null,"entity","entity",-450970276),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"combat","combat",517558269),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"health","health",-295520649),(30),new cljs.core.Keyword(null,"on-killed","on-killed",-1553804717),(function (){
return cljs.core.reset_BANG_(dead_QMARK_,true);
}),new cljs.core.Keyword(null,"death-reaction","death-reaction",-473209476),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"particles","particles",801881788),new cljs.core.Keyword(null,"wood-explosion","wood-explosion",794897664)], null),new cljs.core.Keyword(null,"hit-reaction","hit-reaction",575941111),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flash?","flash?",1054054288),true,new cljs.core.Keyword(null,"sound","sound",-2127407070),new cljs.core.Keyword("sfx","impact-plate","sfx/impact-plate",-1268012436),new cljs.core.Keyword(null,"particles","particles",801881788),new cljs.core.Keyword(null,"impact-sparks","impact-sparks",-1076645149),new cljs.core.Keyword(null,"text?","text?",-934411583),true], null)], null),new cljs.core.Keyword(null,"spawner","spawner",804504391),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-death","on-death",2035139018),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"zombie","zombie",2142041507),new cljs.core.Keyword(null,"initial-health","initial-health",-207286926),(50)], null)], null)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),zombie.util.math.pi,(0)], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("model","coffin","model/coffin",-884569006),new cljs.core.Keyword(null,"physics","physics",-1254209137),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hull","hull",-957096876),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"model-bounding-box","model-bounding-box",-112419983),new cljs.core.Keyword(null,"model-type","model-type",398058196),new cljs.core.Keyword("model","coffin","model/coffin",-884569006),new cljs.core.Keyword(null,"radius","radius",-2073122258),0.5,new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mass","mass",-2138950046),(100),new cljs.core.Keyword(null,"isStatic","isStatic",1002568003),true], null)], null)], null)], null)], null)], null)], null);
}
});
});
zombie.scene.map.door = (function zombie$scene$map$door(open_tween){
var open_val = cljs.core.deref(open_tween);
var open_QMARK_ = (open_val >= 1.0);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.7,0.7,0.7], null),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(- (1.4 * open_val)),(0)], null),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"door","door",-956406127),cljs.core.PersistentArrayMap.EMPTY], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.map.model,new cljs.core.Keyword("model","iron-fence","model/iron-fence",-1575439369),(!(open_QMARK_))], null)], null);
});
zombie.scene.map.wall = (function zombie$scene$map$wall(door_tween){
var wall_width = (4);
var segments = ((zombie.scene.map.lot_size / wall_width) | (0));
var door_segment = ((segments / (2)) | (0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),(function (){var iter__4611__auto__ = (function zombie$scene$map$wall_$_iter__10649(s__10650){
return (new cljs.core.LazySeq(null,(function (){
var s__10650__$1 = s__10650;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__10650__$1);
if(temp__5753__auto__){
var s__10650__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10650__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__10650__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__10652 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__10651 = (0);
while(true){
if((i__10651 < size__4610__auto__)){
var i = cljs.core._nth(c__4609__auto__,i__10651);
cljs.core.chunk_append(b__10652,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((i * wall_width) - (zombie.scene.map.lot_size / (2))),(0),(0)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,1.0,1.0], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.map.model,new cljs.core.Keyword("model","column-large","model/column-large",1333926303),false], null)], null));

var G__10730 = (i__10651 + (1));
i__10651 = G__10730;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10652),zombie$scene$map$wall_$_iter__10649(cljs.core.chunk_rest(s__10650__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10652),null);
}
} else {
var i = cljs.core.first(s__10650__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((i * wall_width) - (zombie.scene.map.lot_size / (2))),(0),(0)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,1.0,1.0], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.map.model,new cljs.core.Keyword("model","column-large","model/column-large",1333926303),false], null)], null),zombie$scene$map$wall_$_iter__10649(cljs.core.rest(s__10650__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(segments));
})(),(function (){var iter__4611__auto__ = (function zombie$scene$map$wall_$_iter__10653(s__10654){
return (new cljs.core.LazySeq(null,(function (){
var s__10654__$1 = s__10654;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__10654__$1);
if(temp__5753__auto__){
var s__10654__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10654__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__10654__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__10656 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__10655 = (0);
while(true){
if((i__10655 < size__4610__auto__)){
var i = cljs.core._nth(c__4609__auto__,i__10655);
cljs.core.chunk_append(b__10656,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((i * wall_width) - (zombie.scene.map.lot_size / (2))) - (- (wall_width / 2.0))),(0),(0)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.5,1.5,1.5], null)], null),(cljs.core.truth_((function (){var and__4210__auto__ = door_tween;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,door_segment);
} else {
return and__4210__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.map.door,door_tween], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.map.model,new cljs.core.Keyword("model","stone-wall","model/stone-wall",-1569889785),true], null))], null));

var G__10731 = (i__10655 + (1));
i__10655 = G__10731;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10656),zombie$scene$map$wall_$_iter__10653(cljs.core.chunk_rest(s__10654__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10656),null);
}
} else {
var i = cljs.core.first(s__10654__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((i * wall_width) - (zombie.scene.map.lot_size / (2))) - (- (wall_width / 2.0))),(0),(0)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.5,1.5,1.5], null)], null),(cljs.core.truth_((function (){var and__4210__auto__ = door_tween;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,door_segment);
} else {
return and__4210__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.map.door,door_tween], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.map.model,new cljs.core.Keyword("model","stone-wall","model/stone-wall",-1569889785),true], null))], null),zombie$scene$map$wall_$_iter__10653(cljs.core.rest(s__10654__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(segments));
})()], null);
});
zombie.scene.map.road = (function zombie$scene$map$road(){
var road_width = 2.5;
var s = 1.4;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),(function (){var iter__4611__auto__ = (function zombie$scene$map$road_$_iter__10657(s__10658){
return (new cljs.core.LazySeq(null,(function (){
var s__10658__$1 = s__10658;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__10658__$1);
if(temp__5753__auto__){
var s__10658__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10658__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__10658__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__10660 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__10659 = (0);
while(true){
if((i__10659 < size__4610__auto__)){
var i = cljs.core._nth(c__4609__auto__,i__10659);
cljs.core.chunk_append(b__10660,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((i * road_width) - (zombie.scene.map.lot_size / (2))) - (- (road_width / 2.0))),(0),(0)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,0.2,s], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.map.model,new cljs.core.Keyword("model","road","model/road",1658348501),false], null)], null));

var G__10732 = (i__10659 + (1));
i__10659 = G__10732;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10660),zombie$scene$map$road_$_iter__10657(cljs.core.chunk_rest(s__10658__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10660),null);
}
} else {
var i = cljs.core.first(s__10658__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((i * road_width) - (zombie.scene.map.lot_size / (2))) - (- (road_width / 2.0))),(0),(0)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,0.2,s], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.map.model,new cljs.core.Keyword("model","road","model/road",1658348501),false], null)], null),zombie$scene$map$road_$_iter__10657(cljs.core.rest(s__10658__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((zombie.scene.map.lot_size / road_width)));
})()], null);
});
zombie.scene.map.bounds = (function zombie$scene$map$bounds(door_tween,dirs){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(zombie.scene.map.lot_size / (2)),(0),(0)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),zombie.util.math.pi2,(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.map.wall,(cljs.core.truth_((dirs.cljs$core$IFn$_invoke$arity$1 ? dirs.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"e","e",1381269198)) : dirs.call(null,new cljs.core.Keyword(null,"e","e",1381269198))))?door_tween:null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(zombie.scene.map.lot_size / (-2)),(0),(0)], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),zombie.util.math.pi2,(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.map.wall,(cljs.core.truth_((dirs.cljs$core$IFn$_invoke$arity$1 ? dirs.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"w","w",354169001)) : dirs.call(null,new cljs.core.Keyword(null,"w","w",354169001))))?door_tween:null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(zombie.scene.map.lot_size / (2))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.map.wall,(cljs.core.truth_((dirs.cljs$core$IFn$_invoke$arity$1 ? dirs.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"n","n",562130025)) : dirs.call(null,new cljs.core.Keyword(null,"n","n",562130025))))?door_tween:null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(zombie.scene.map.lot_size / (-2))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.map.wall,(cljs.core.truth_((dirs.cljs$core$IFn$_invoke$arity$1 ? dirs.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"s","s",1705939918)) : dirs.call(null,new cljs.core.Keyword(null,"s","s",1705939918))))?door_tween:null)], null)], null)], null);
});
zombie.scene.map.lot1 = (function zombie$scene$map$lot1(room_id,active_QMARK_,cleared_QMARK_){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.map.road], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.map.grass], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-8.5,(0),-2.5], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),zombie.util.math.pi2,(0)], null)], null),(cljs.core.truth_(active_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.map.lightpost], null):null)], null),(cljs.core.truth_(cljs.core.deref(cleared_QMARK_))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),(function (){var iter__4611__auto__ = (function zombie$scene$map$lot1_$_iter__10661(s__10662){
return (new cljs.core.LazySeq(null,(function (){
var s__10662__$1 = s__10662;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__10662__$1);
if(temp__5753__auto__){
var s__10662__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10662__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__10662__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__10664 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__10663 = (0);
while(true){
if((i__10663 < size__4610__auto__)){
var i = cljs.core._nth(c__4609__auto__,i__10663);
cljs.core.chunk_append(b__10664,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((-3) * i),(0),(5)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.map.coffin1,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(room_id),"|coffin-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)], null));

var G__10733 = (i__10663 + (1));
i__10663 = G__10733;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10664),zombie$scene$map$lot1_$_iter__10661(cljs.core.chunk_rest(s__10662__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10664),null);
}
} else {
var i = cljs.core.first(s__10662__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((-3) * i),(0),(5)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.map.coffin1,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(room_id),"|coffin-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)], null),zombie$scene$map$lot1_$_iter__10661(cljs.core.rest(s__10662__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
})()], null))], null);
});
zombie.scene.map.lot2 = (function zombie$scene$map$lot2(door_tween){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"lot2",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- zombie.scene.map.lot_size),(0),(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.map.bounds,door_tween,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"n","n",562130025),null,new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"s","s",1705939918),null], null), null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.map.road], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.map.grass], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-8.5,(0),-2.5], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),zombie.util.math.pi2,(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.map.lightpost], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),(function (){var iter__4611__auto__ = (function zombie$scene$map$lot2_$_iter__10669(s__10670){
return (new cljs.core.LazySeq(null,(function (){
var s__10670__$1 = s__10670;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__10670__$1);
if(temp__5753__auto__){
var s__10670__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10670__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__10670__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__10672 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__10671 = (0);
while(true){
if((i__10671 < size__4610__auto__)){
var i = cljs.core._nth(c__4609__auto__,i__10671);
cljs.core.chunk_append(b__10672,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((-3) * i),(0),(5)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.map.coffin1,["lot2-coffin-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)], null));

var G__10734 = (i__10671 + (1));
i__10671 = G__10734;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10672),zombie$scene$map$lot2_$_iter__10669(cljs.core.chunk_rest(s__10670__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10672),null);
}
} else {
var i = cljs.core.first(s__10670__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((-3) * i),(0),(5)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.map.coffin1,["lot2-coffin-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null)], null),zombie$scene$map$lot2_$_iter__10669(cljs.core.rest(s__10670__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
})()], null)], null);
});
zombie.scene.map.ground = (function zombie$scene$map$ground(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plane","plane",-223595224),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [100.0,100.0,100.0], null),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- zombie.util.math.pi2),(0),(0)], null),new cljs.core.Keyword(null,"receive-shadow","receive-shadow",-789712390),true,new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p__10679){
var map__10680 = p__10679;
var map__10680__$1 = cljs.core.__destructure_map(map__10680);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10680__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var _y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10680__$1,new cljs.core.Keyword(null,"_y","_y",415925162));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10680__$1,new cljs.core.Keyword(null,"z","z",-789527183));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(zombie.state.databases.scene,cljs.core.assoc,new cljs.core.Keyword(null,"boxes","boxes",-420813822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(0),z], null)], null));
})], null),new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.Keyword("material","tile","material/tile",1524419497).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(zombie.state.databases.assets))], null)], null)], null);
});
zombie.scene.map.room = (function zombie$scene$map$room(){
var cleared_QMARK_ = (threeagent.core.atom.cljs$core$IFn$_invoke$arity$1 ? threeagent.core.atom.cljs$core$IFn$_invoke$arity$1(false) : threeagent.core.atom.call(null,false));
var on_clear = (function (){
return cljs.core.reset_BANG_(cleared_QMARK_,true);
});
var entity_db = (function (){var G__10685 = cljs.core.PersistentArrayMap.EMPTY;
return (threeagent.core.atom.cljs$core$IFn$_invoke$arity$1 ? threeagent.core.atom.cljs$core$IFn$_invoke$arity$1(G__10685) : threeagent.core.atom.call(null,G__10685));
})();
var door_tween = (threeagent.core.atom.cljs$core$IFn$_invoke$arity$1 ? threeagent.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : threeagent.core.atom.call(null,(0)));
return (function (id,x,y,active_QMARK_,visible_QMARK_,lot_fn,doors){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390),entity_db,new cljs.core.Keyword(null,"room","room",536484922),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"enemies","enemies",2114285722),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"room","room",536484922),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"outro-tween","outro-tween",1970374123),door_tween,new cljs.core.Keyword(null,"on-clear","on-clear",2009781891),on_clear], null)], null)], null),(cljs.core.truth_(active_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.entity.render,entity_db], null)], null):null),(cljs.core.truth_(visible_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x * zombie.scene.map.lot_size),(0),(y * zombie.scene.map.lot_size)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.map.bounds,(cljs.core.truth_(active_QMARK_)?door_tween:cljs.core.atom.cljs$core$IFn$_invoke$arity$1((1))),doors], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [lot_fn,id,active_QMARK_,cleared_QMARK_], null)], null):null)], null)], null);
});
});
zombie.scene.map.player_cell_position = (function zombie$scene$map$player_cell_position(){
var vec__10692 = cljs.core.deref((function (){var G__10695 = zombie.state.databases.player;
var G__10696 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world-position","world-position",-486434797)], null);
return (threeagent.core.cursor.cljs$core$IFn$_invoke$arity$2 ? threeagent.core.cursor.cljs$core$IFn$_invoke$arity$2(G__10695,G__10696) : threeagent.core.cursor.call(null,G__10695,G__10696));
})());
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10692,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10692,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10692,(2),null);
var norm_x = ((x + zombie.scene.map.half_lot_size) / zombie.scene.map.lot_size);
var norm_z = ((z + zombie.scene.map.half_lot_size) / zombie.scene.map.lot_size);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.floor(norm_x),Math.floor(norm_z)], null);
});
zombie.scene.map.get_bounds_for_cell = (function zombie$scene$map$get_bounds_for_cell(map_size,cell_x,cell_z){
var G__10701 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"n","n",562130025),null,new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"e","e",1381269198),null,new cljs.core.Keyword(null,"s","s",1705939918),null], null), null);
var G__10701__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cell_x))?cljs.core.disj.cljs$core$IFn$_invoke$arity$2(G__10701,new cljs.core.Keyword(null,"e","e",1381269198)):G__10701);
var G__10701__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cell_z))?cljs.core.disj.cljs$core$IFn$_invoke$arity$2(G__10701__$1,new cljs.core.Keyword(null,"s","s",1705939918)):G__10701__$1);
var G__10701__$3 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((map_size - (1)),cell_x))?cljs.core.disj.cljs$core$IFn$_invoke$arity$2(G__10701__$2,new cljs.core.Keyword(null,"w","w",354169001)):G__10701__$2);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((map_size - (1)),cell_z)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(G__10701__$3,new cljs.core.Keyword(null,"n","n",562130025));
} else {
return G__10701__$3;
}
});
zombie.scene.map.render = (function zombie$scene$map$render(){
var vec__10708 = cljs.core.deref((threeagent.core.track.cljs$core$IFn$_invoke$arity$1 ? threeagent.core.track.cljs$core$IFn$_invoke$arity$1(zombie.scene.map.player_cell_position) : threeagent.core.track.call(null,zombie.scene.map.player_cell_position)));
var cell_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10708,(0),null);
var cell_z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10708,(1),null);
var map_size = (3);
var sight_range = (2);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),(function (){var iter__4611__auto__ = (function zombie$scene$map$render_$_iter__10711(s__10712){
return (new cljs.core.LazySeq(null,(function (){
var s__10712__$1 = s__10712;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__10712__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var x = cljs.core.first(xs__6308__auto__);
var iterys__4607__auto__ = ((function (s__10712__$1,x,xs__6308__auto__,temp__5753__auto__,vec__10708,cell_x,cell_z,map_size,sight_range){
return (function zombie$scene$map$render_$_iter__10711_$_iter__10713(s__10714){
return (new cljs.core.LazySeq(null,((function (s__10712__$1,x,xs__6308__auto__,temp__5753__auto__,vec__10708,cell_x,cell_z,map_size,sight_range){
return (function (){
var s__10714__$1 = s__10714;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__10714__$1);
if(temp__5753__auto____$1){
var s__10714__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10714__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__10714__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__10716 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__10715 = (0);
while(true){
if((i__10715 < size__4610__auto__)){
var y = cljs.core._nth(c__4609__auto__,i__10715);
cljs.core.chunk_append(b__10716,(function (){var room_id = ["room-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('');
var x__$1 = (- x);
var active_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,cell_x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,cell_z)));
var visible_QMARK_ = (((sight_range > ((function (){var x__4295__auto__ = x__$1;
var y__4296__auto__ = cell_x;
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})() - (function (){var x__4298__auto__ = x__$1;
var y__4299__auto__ = cell_x;
return ((x__4298__auto__ < y__4299__auto__) ? x__4298__auto__ : y__4299__auto__);
})()))) && ((sight_range > ((function (){var x__4295__auto__ = y;
var y__4296__auto__ = cell_z;
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})() - (function (){var x__4298__auto__ = y;
var y__4299__auto__ = cell_z;
return ((x__4298__auto__ < y__4299__auto__) ? x__4298__auto__ : y__4299__auto__);
})()))));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.map.room,room_id,x__$1,y,active_QMARK_,visible_QMARK_,zombie.scene.map.lot1,zombie.scene.map.get_bounds_for_cell(map_size,(- x__$1),y)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),room_id], null));
})());

var G__10735 = (i__10715 + (1));
i__10715 = G__10735;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10716),zombie$scene$map$render_$_iter__10711_$_iter__10713(cljs.core.chunk_rest(s__10714__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10716),null);
}
} else {
var y = cljs.core.first(s__10714__$2);
return cljs.core.cons((function (){var room_id = ["room-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('');
var x__$1 = (- x);
var active_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,cell_x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,cell_z)));
var visible_QMARK_ = (((sight_range > ((function (){var x__4295__auto__ = x__$1;
var y__4296__auto__ = cell_x;
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})() - (function (){var x__4298__auto__ = x__$1;
var y__4299__auto__ = cell_x;
return ((x__4298__auto__ < y__4299__auto__) ? x__4298__auto__ : y__4299__auto__);
})()))) && ((sight_range > ((function (){var x__4295__auto__ = y;
var y__4296__auto__ = cell_z;
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
})() - (function (){var x__4298__auto__ = y;
var y__4299__auto__ = cell_z;
return ((x__4298__auto__ < y__4299__auto__) ? x__4298__auto__ : y__4299__auto__);
})()))));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.map.room,room_id,x__$1,y,active_QMARK_,visible_QMARK_,zombie.scene.map.lot1,zombie.scene.map.get_bounds_for_cell(map_size,(- x__$1),y)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),room_id], null));
})(),zombie$scene$map$render_$_iter__10711_$_iter__10713(cljs.core.rest(s__10714__$2)));
}
} else {
return null;
}
break;
}
});})(s__10712__$1,x,xs__6308__auto__,temp__5753__auto__,vec__10708,cell_x,cell_z,map_size,sight_range))
,null,null));
});})(s__10712__$1,x,xs__6308__auto__,temp__5753__auto__,vec__10708,cell_x,cell_z,map_size,sight_range))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(map_size)));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,zombie$scene$map$render_$_iter__10711(cljs.core.rest(s__10712__$1)));
} else {
var G__10736 = cljs.core.rest(s__10712__$1);
s__10712__$1 = G__10736;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(map_size));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.map.ground], null)], null);
});

//# sourceMappingURL=zombie.scene.map.js.map
