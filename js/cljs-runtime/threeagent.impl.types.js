goog.provide('threeagent.impl.types');

/**
* @constructor
*/
threeagent.impl.types.Context = (function (virtualScene,sceneRoot,domRoot,animateFn,canvas,camera,cameras,clock,renderer,beforeRenderCb,afterRenderCb,entityTypes,systems,defaultCamera){
this.virtualScene = virtualScene;
this.sceneRoot = sceneRoot;
this.domRoot = domRoot;
this.animateFn = animateFn;
this.canvas = canvas;
this.camera = camera;
this.cameras = cameras;
this.clock = clock;
this.renderer = renderer;
this.beforeRenderCb = beforeRenderCb;
this.afterRenderCb = afterRenderCb;
this.entityTypes = entityTypes;
this.systems = systems;
this.defaultCamera = defaultCamera;
});

(threeagent.impl.types.Context.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"virtualScene","virtualScene",992990126,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("vscene","Scene","vscene/Scene",658119375,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"sceneRoot","sceneRoot",1033417013,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"js","js",-886355190,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"domRoot","domRoot",-591277325,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"js","js",-886355190,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"animateFn","animateFn",1982297624,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"js","js",-886355190,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"canvas","canvas",-158285962,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"js","js",-886355190,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"camera","camera",450182942,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"js","js",-886355190,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"cameras","cameras",193986915,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"js","js",-886355190,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"clock","clock",746230400,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"js","js",-886355190,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"renderer","renderer",1977372598,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"js","js",-886355190,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"beforeRenderCb","beforeRenderCb",1113466702,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"js","js",-886355190,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"afterRenderCb","afterRenderCb",-28620285,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"js","js",-886355190,null)], null)),new cljs.core.Symbol(null,"entityTypes","entityTypes",2060234134,null),new cljs.core.Symbol(null,"systems","systems",625156583,null),cljs.core.with_meta(new cljs.core.Symbol(null,"defaultCamera","defaultCamera",-1109078025,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"js","js",-886355190,null)], null))], null);
}));

(threeagent.impl.types.Context.cljs$lang$type = true);

(threeagent.impl.types.Context.cljs$lang$ctorStr = "threeagent.impl.types/Context");

(threeagent.impl.types.Context.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"threeagent.impl.types/Context");
}));

/**
 * Positional factory function for threeagent.impl.types/Context.
 */
threeagent.impl.types.__GT_Context = (function threeagent$impl$types$__GT_Context(virtualScene,sceneRoot,domRoot,animateFn,canvas,camera,cameras,clock,renderer,beforeRenderCb,afterRenderCb,entityTypes,systems,defaultCamera){
return (new threeagent.impl.types.Context(virtualScene,sceneRoot,domRoot,animateFn,canvas,camera,cameras,clock,renderer,beforeRenderCb,afterRenderCb,entityTypes,systems,defaultCamera));
});


//# sourceMappingURL=threeagent.impl.types.js.map
