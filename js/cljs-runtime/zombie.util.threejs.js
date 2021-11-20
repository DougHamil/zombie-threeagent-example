goog.provide('zombie.util.threejs');
var module$node_modules$three$build$three_module=shadow.js.require("module$node_modules$three$build$three_module", {});
zombie.util.threejs.v1 = (new module$node_modules$three$build$three_module.Vector3());
zombie.util.threejs.v2 = (new module$node_modules$three$build$three_module.Vector3());
zombie.util.threejs.o1 = (new module$node_modules$three$build$three_module.Object3D());
zombie.util.threejs.tuple__GT_vector3 = (function zombie$util$threejs$tuple__GT_vector3(p__10483){
var vec__10484 = p__10483;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10484,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10484,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10484,(2),null);
return (new module$node_modules$three$build$three_module.Vector3(x,y,z));
});
zombie.util.threejs.vector3__GT_map = (function zombie$util$threejs$vector3__GT_map(vec){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),vec.x,new cljs.core.Keyword(null,"y","y",-1757859776),vec.y,new cljs.core.Keyword(null,"z","z",-789527183),vec.z], null);
});
zombie.util.threejs.vector3__GT_tuple = (function zombie$util$threejs$vector3__GT_tuple(vec){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vec.x,vec.y,vec.z], null);
});
zombie.util.threejs.tuple__GT_into_vector3 = (function zombie$util$threejs$tuple__GT_into_vector3(p__10487,vec){
var vec__10488 = p__10487;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10488,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10488,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10488,(2),null);
return vec.set(x,y,z);
});
zombie.util.threejs.get_in_object = (function zombie$util$threejs$get_in_object(parent,path){
while(true){
if(cljs.core.seq(path)){
var next = cljs.core.first(path);
if(typeof next === 'string'){
var G__10491 = parent.getObjectByName(next);
var G__10492 = cljs.core.rest(path);
parent = G__10491;
path = G__10492;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"..","..",-1941038947),next)){
var G__10493 = parent.parent;
var G__10494 = cljs.core.rest(path);
parent = G__10493;
path = G__10494;
continue;
} else {
var G__10495 = (parent.children[next]);
var G__10496 = cljs.core.rest(path);
parent = G__10495;
path = G__10496;
continue;
}
}
} else {
return parent;
}
break;
}
});
zombie.util.threejs.center_at_origin_BANG_ = (function zombie$util$threejs$center_at_origin_BANG_(box){
var v1 = zombie.util.threejs.v1.copy(box.min);
var v1__$1 = v1.add(box.max);
var v1__$2 = v1__$1.multiplyScalar(-0.5);
box.translate(v1__$2);

return box.getCenter(v1__$2);
});
zombie.util.threejs.euler__GT_tuple = (function zombie$util$threejs$euler__GT_tuple(e){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.x,e.y,e.z], null);
});
zombie.util.threejs.direction_tuple__GT_rotation_tuple = (function zombie$util$threejs$direction_tuple__GT_rotation_tuple(dir_tuple){
var dir = zombie.util.threejs.tuple__GT_into_vector3(dir_tuple,zombie.util.threejs.v1);
var look_at_pos = zombie.util.threejs.v2.set((0),(0),(0)).addVectors(dir,zombie.util.threejs.o1.position);
zombie.util.threejs.o1.lookAt(look_at_pos);

return zombie.util.threejs.euler__GT_tuple(zombie.util.threejs.o1.rotation);
});
zombie.util.threejs.get_world_rotation = (function zombie$util$threejs$get_world_rotation(obj,eul){
var dir = obj.getWorldDirection(zombie.util.threejs.v1);
var look_at_pos = zombie.util.threejs.v2.set((0),(0),(0)).addVectors(dir,zombie.util.threejs.o1.position);
zombie.util.threejs.o1.lookAt(look_at_pos);

return eul.copy(zombie.util.threejs.o1.rotation);
});
zombie.util.threejs.world_position_as_tuple = (function zombie$util$threejs$world_position_as_tuple(obj){
var pos = obj.getWorldPosition(zombie.util.threejs.v1);
return zombie.util.threejs.vector3__GT_tuple(pos);
});
zombie.util.threejs.distance_between = (function zombie$util$threejs$distance_between(a,b){
var pos_a = a.getWorldPosition(zombie.util.threejs.v1);
var pos_b = b.getWorldPosition(zombie.util.threejs.v2);
return pos_b.sub(pos_a).length();
});

//# sourceMappingURL=zombie.util.threejs.js.map
