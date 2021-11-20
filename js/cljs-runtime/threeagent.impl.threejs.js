goog.provide('threeagent.impl.threejs');
var module$node_modules$three$build$three_module=shadow.js.require("module$node_modules$three$build$three_module", {});
threeagent.impl.threejs.mesh_phong_material = (function threeagent$impl$threejs$mesh_phong_material(c){
return (new module$node_modules$three$build$three_module.MeshPhongMaterial(cljs.core.clj__GT_js(c)));
});
threeagent.impl.threejs.euler = (function threeagent$impl$threejs$euler(x,y,z){
return (new module$node_modules$three$build$three_module.Euler(x,y,z,"XYZ"));
});
threeagent.impl.threejs.set_position_BANG_ = (function threeagent$impl$threejs$set_position_BANG_(obj,p__9870){
var vec__9871 = p__9870;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9871,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9871,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9871,(2),null);
obj.position.set(x,y,z);

return obj;
});
threeagent.impl.threejs.set_rotation_BANG_ = (function threeagent$impl$threejs$set_rotation_BANG_(obj,p__9874){
var vec__9875 = p__9874;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9875,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9875,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9875,(2),null);
obj.setRotationFromEuler(threeagent.impl.threejs.euler(x,y,z));

return obj;
});
threeagent.impl.threejs.set_scale_BANG_ = (function threeagent$impl$threejs$set_scale_BANG_(obj,p__9878){
var vec__9879 = p__9878;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9879,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9879,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9879,(2),null);
obj.scale.set(x,y,z);

return obj;
});
threeagent.impl.threejs.set_cast_shadow_BANG_ = (function threeagent$impl$threejs$set_cast_shadow_BANG_(obj,_QMARK_true){
(obj.castShadow = _QMARK_true);

return obj;
});
threeagent.impl.threejs.set_receive_shadow_BANG_ = (function threeagent$impl$threejs$set_receive_shadow_BANG_(obj,_QMARK_true){
(obj.receiveShadow = _QMARK_true);

return obj;
});
threeagent.impl.threejs.add_child_BANG_ = (function threeagent$impl$threejs$add_child_BANG_(parent,child){
return parent.add(child);
});
threeagent.impl.threejs.remove_child_BANG_ = (function threeagent$impl$threejs$remove_child_BANG_(parent,child){
return parent.remove(child);
});
threeagent.impl.threejs.remove_all_children_BANG_ = (function threeagent$impl$threejs$remove_all_children_BANG_(parent){
var iter__4611__auto___9886 = (function threeagent$impl$threejs$remove_all_children_BANG__$_iter__9882(s__9883){
return (new cljs.core.LazySeq(null,(function (){
var s__9883__$1 = s__9883;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__9883__$1);
if(temp__5753__auto__){
var s__9883__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__9883__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__9883__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__9885 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__9884 = (0);
while(true){
if((i__9884 < size__4610__auto__)){
var c = cljs.core._nth(c__4609__auto__,i__9884);
cljs.core.chunk_append(b__9885,threeagent.impl.threejs.remove_child_BANG_(parent,c));

var G__9887 = (i__9884 + (1));
i__9884 = G__9887;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9885),threeagent$impl$threejs$remove_all_children_BANG__$_iter__9882(cljs.core.chunk_rest(s__9883__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9885),null);
}
} else {
var c = cljs.core.first(s__9883__$2);
return cljs.core.cons(threeagent.impl.threejs.remove_child_BANG_(parent,c),threeagent$impl$threejs$remove_all_children_BANG__$_iter__9882(cljs.core.rest(s__9883__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
iter__4611__auto___9886(parent.children);

return parent;
});
threeagent.impl.threejs.get_in = (function threeagent$impl$threejs$get_in(parent,path){
while(true){
if(cljs.core.seq(path)){
var next = cljs.core.first(path);
if(typeof next === 'string'){
var G__9888 = parent.getObjectByName(next);
var G__9889 = cljs.core.rest(path);
parent = G__9888;
path = G__9889;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"..","..",-1941038947),next)){
var G__9890 = parent.parent;
var G__9891 = cljs.core.rest(path);
parent = G__9890;
path = G__9891;
continue;
} else {
var G__9892 = (parent.children[next]);
var G__9893 = cljs.core.rest(path);
parent = G__9892;
path = G__9893;
continue;
}
}
} else {
return parent;
}
break;
}
});

//# sourceMappingURL=threeagent.impl.threejs.js.map
