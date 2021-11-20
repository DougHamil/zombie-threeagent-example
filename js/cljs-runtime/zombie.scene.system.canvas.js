goog.provide('zombie.scene.system.canvas');
zombie.scene.system.canvas.resize_canvas_BANG_ = (function zombie$scene$system$canvas$resize_canvas_BANG_(canvas,threejs_renderer){
var w = window.innerWidth;
var h = window.innerHeight;
var pixel_ratio = window.devicePixelRatio;
(canvas.width = w);

(canvas.height = h);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(zombie.state.databases.scene,cljs.core.assoc,new cljs.core.Keyword(null,"screen-aspect-ratio","screen-aspect-ratio",-1045134019),(w / h));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(zombie.state.databases.scene,cljs.core.assoc,new cljs.core.Keyword(null,"screen-pixel-ratio","screen-pixel-ratio",-1945121594),pixel_ratio);

threejs_renderer.setPixelRatio();


return threejs_renderer.setSize(w,h);
});

/**
* @constructor
 * @implements {threeagent.system.ISystem}
*/
zombie.scene.system.canvas.CanvasSystem = (function (local_state){
this.local_state = local_state;
});
(zombie.scene.system.canvas.CanvasSystem.prototype.threeagent$system$ISystem$ = cljs.core.PROTOCOL_SENTINEL);

(zombie.scene.system.canvas.CanvasSystem.prototype.threeagent$system$ISystem$init$arity$2 = (function (_,p__10983){
var self__ = this;
var map__10984 = p__10983;
var map__10984__$1 = cljs.core.__destructure_map(map__10984);
var canvas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10984__$1,new cljs.core.Keyword(null,"canvas","canvas",-1798817489));
var threejs_renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10984__$1,new cljs.core.Keyword(null,"threejs-renderer","threejs-renderer",468746733));
var ___$1 = this;
var listener_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(zombie.scene.system.canvas.resize_canvas_BANG_,canvas,threejs_renderer);
window.addEventListener("resize",listener_fn);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.local_state,cljs.core.assoc,new cljs.core.Keyword(null,"resize-listener","resize-listener",-2116629784),listener_fn);

return listener_fn();
}));

(zombie.scene.system.canvas.CanvasSystem.prototype.threeagent$system$ISystem$destroy$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return window.removeEventListener("resize",new cljs.core.Keyword(null,"resize-listener","resize-listener",-2116629784).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.local_state)));
}));

(zombie.scene.system.canvas.CanvasSystem.prototype.threeagent$system$ISystem$on_entity_added$arity$5 = (function (_,___$1,_key,_obj,_config){
var self__ = this;
var ___$2 = this;
return null;
}));

(zombie.scene.system.canvas.CanvasSystem.prototype.threeagent$system$ISystem$on_entity_removed$arity$5 = (function (_,___$1,_key,_obj,_config){
var self__ = this;
var ___$2 = this;
return null;
}));

(zombie.scene.system.canvas.CanvasSystem.prototype.threeagent$system$ISystem$tick$arity$2 = (function (_,_delta_time){
var self__ = this;
var ___$1 = this;
return null;
}));

(zombie.scene.system.canvas.CanvasSystem.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"local-state","local-state",1358388003,null)], null);
}));

(zombie.scene.system.canvas.CanvasSystem.cljs$lang$type = true);

(zombie.scene.system.canvas.CanvasSystem.cljs$lang$ctorStr = "zombie.scene.system.canvas/CanvasSystem");

(zombie.scene.system.canvas.CanvasSystem.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"zombie.scene.system.canvas/CanvasSystem");
}));

/**
 * Positional factory function for zombie.scene.system.canvas/CanvasSystem.
 */
zombie.scene.system.canvas.__GT_CanvasSystem = (function zombie$scene$system$canvas$__GT_CanvasSystem(local_state){
return (new zombie.scene.system.canvas.CanvasSystem(local_state));
});

zombie.scene.system.canvas.create = (function zombie$scene$system$canvas$create(){
return zombie.scene.system.canvas.__GT_CanvasSystem(cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=zombie.scene.system.canvas.js.map
