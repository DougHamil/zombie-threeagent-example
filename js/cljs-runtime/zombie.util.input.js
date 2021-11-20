goog.provide('zombie.util.input');
zombie.util.input.mouse_evt__GT_canvas_position = (function zombie$util$input$mouse_evt__GT_canvas_position(canvas,mouse_evt){
var rect = canvas.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(((mouse_evt.clientX - rect.left) * canvas.width) / rect.width),new cljs.core.Keyword(null,"y","y",-1757859776),(((mouse_evt.clientY - rect.top) * canvas.height) / rect.height)], null);
});
zombie.util.input.normalize_screen_position = (function zombie$util$input$normalize_screen_position(canvas,p__10773){
var map__10774 = p__10773;
var map__10774__$1 = cljs.core.__destructure_map(map__10774);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10774__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10774__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(((x / canvas.width) * (2)) - (1)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y / canvas.height) * (-2)) + (1))], null);
});
zombie.util.input.point__GT_map = (function zombie$util$input$point__GT_map(point){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),point.x,new cljs.core.Keyword(null,"y","y",-1757859776),point.y,new cljs.core.Keyword(null,"z","z",-789527183),point.z], null);
});

//# sourceMappingURL=zombie.util.input.js.map
