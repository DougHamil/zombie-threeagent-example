goog.provide('zombie.scene.system.camera');
var module$node_modules$three$build$three_module=shadow.js.require("module$node_modules$three$build$three_module", {});
zombie.scene.system.camera.v1 = (new module$node_modules$three$build$three_module.Vector3());
zombie.scene.system.camera.tick_camera_BANG_ = (function zombie$scene$system$camera$tick_camera_BANG_(_delta_time,p__10897){
var map__10898 = p__10897;
var map__10898__$1 = cljs.core.__destructure_map(map__10898);
var look_at_target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10898__$1,new cljs.core.Keyword(null,"look-at-target","look-at-target",1083230409));
var object = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10898__$1,new cljs.core.Keyword(null,"object","object",1474613949));
var temp__5753__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(zombie.state.databases.entity_objects),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [look_at_target], null));
if(cljs.core.truth_(temp__5753__auto__)){
var look_at_obj = temp__5753__auto__;
var pos = look_at_obj.getWorldPosition(zombie.scene.system.camera.v1);
return object.lookAt(pos);
} else {
return null;
}
});

/**
* @constructor
 * @implements {threeagent.system.ISystem}
*/
zombie.scene.system.camera.CameraSystem = (function (local_state){
this.local_state = local_state;
});
(zombie.scene.system.camera.CameraSystem.prototype.threeagent$system$ISystem$ = cljs.core.PROTOCOL_SENTINEL);

(zombie.scene.system.camera.CameraSystem.prototype.threeagent$system$ISystem$init$arity$2 = (function (_,p__10906){
var self__ = this;
var map__10907 = p__10906;
var map__10907__$1 = cljs.core.__destructure_map(map__10907);
var canvas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10907__$1,new cljs.core.Keyword(null,"canvas","canvas",-1798817489));
var threejs_renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10907__$1,new cljs.core.Keyword(null,"threejs-renderer","threejs-renderer",468746733));
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.local_state,cljs.core.assoc,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),canvas,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"renderer","renderer",336841071),threejs_renderer], 0));
}));

(zombie.scene.system.camera.CameraSystem.prototype.threeagent$system$ISystem$destroy$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(zombie.scene.system.camera.CameraSystem.prototype.threeagent$system$ISystem$on_entity_added$arity$5 = (function (_,___$1,id,obj,p__10911){
var self__ = this;
var map__10912 = p__10911;
var map__10912__$1 = cljs.core.__destructure_map(map__10912);
var look_at_target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10912__$1,new cljs.core.Keyword(null,"look-at-target","look-at-target",1083230409));
var ___$2 = this;
var ctx = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object","object",1474613949),obj,new cljs.core.Keyword(null,"look-at-target","look-at-target",1083230409),look_at_target], null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.local_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cameras","cameras",-1446544612),id], null),ctx);
}));

(zombie.scene.system.camera.CameraSystem.prototype.threeagent$system$ISystem$on_entity_removed$arity$5 = (function (_,___$1,_id,_obj,_config){
var self__ = this;
var ___$2 = this;
return null;
}));

(zombie.scene.system.camera.CameraSystem.prototype.threeagent$system$ISystem$tick$arity$2 = (function (_,delta_time){
var self__ = this;
var ___$1 = this;
var seq__10913 = cljs.core.seq(new cljs.core.Keyword(null,"cameras","cameras",-1446544612).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.local_state)));
var chunk__10914 = null;
var count__10915 = (0);
var i__10916 = (0);
while(true){
if((i__10916 < count__10915)){
var vec__10923 = chunk__10914.cljs$core$IIndexed$_nth$arity$2(null,i__10916);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10923,(0),null);
var cam = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10923,(1),null);
zombie.scene.system.camera.tick_camera_BANG_(delta_time,cam);


var G__10935 = seq__10913;
var G__10936 = chunk__10914;
var G__10937 = count__10915;
var G__10938 = (i__10916 + (1));
seq__10913 = G__10935;
chunk__10914 = G__10936;
count__10915 = G__10937;
i__10916 = G__10938;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__10913);
if(temp__5753__auto__){
var seq__10913__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10913__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__10913__$1);
var G__10939 = cljs.core.chunk_rest(seq__10913__$1);
var G__10940 = c__4638__auto__;
var G__10941 = cljs.core.count(c__4638__auto__);
var G__10942 = (0);
seq__10913 = G__10939;
chunk__10914 = G__10940;
count__10915 = G__10941;
i__10916 = G__10942;
continue;
} else {
var vec__10926 = cljs.core.first(seq__10913__$1);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10926,(0),null);
var cam = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10926,(1),null);
zombie.scene.system.camera.tick_camera_BANG_(delta_time,cam);


var G__10947 = cljs.core.next(seq__10913__$1);
var G__10948 = null;
var G__10949 = (0);
var G__10950 = (0);
seq__10913 = G__10947;
chunk__10914 = G__10948;
count__10915 = G__10949;
i__10916 = G__10950;
continue;
}
} else {
return null;
}
}
break;
}
}));

(zombie.scene.system.camera.CameraSystem.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"local-state","local-state",1358388003,null)], null);
}));

(zombie.scene.system.camera.CameraSystem.cljs$lang$type = true);

(zombie.scene.system.camera.CameraSystem.cljs$lang$ctorStr = "zombie.scene.system.camera/CameraSystem");

(zombie.scene.system.camera.CameraSystem.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"zombie.scene.system.camera/CameraSystem");
}));

/**
 * Positional factory function for zombie.scene.system.camera/CameraSystem.
 */
zombie.scene.system.camera.__GT_CameraSystem = (function zombie$scene$system$camera$__GT_CameraSystem(local_state){
return (new zombie.scene.system.camera.CameraSystem(local_state));
});

zombie.scene.system.camera.create = (function zombie$scene$system$camera$create(){
return zombie.scene.system.camera.__GT_CameraSystem(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=zombie.scene.system.camera.js.map
