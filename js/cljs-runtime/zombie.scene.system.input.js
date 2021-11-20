goog.provide('zombie.scene.system.input');
var module$node_modules$three$build$three_module=shadow.js.require("module$node_modules$three$build$three_module", {});
zombie.scene.system.input.v1 = (new module$node_modules$three$build$three_module.Vector3());
zombie.scene.system.input.v2 = (new module$node_modules$three$build$three_module.Vector3());
zombie.scene.system.input.r1 = (new module$node_modules$three$build$three_module.Ray());
zombie.scene.system.input.ground_plane = (new module$node_modules$three$build$three_module.Plane((new module$node_modules$three$build$three_module.Vector3((0),(1),(0)))));
zombie.scene.system.input.mouse_button__GT_action = new cljs.core.PersistentArrayMap(null, 2, [(0),new cljs.core.Keyword(null,"fire","fire",-144730624),(2),new cljs.core.Keyword(null,"aim","aim",-1211687229)], null);
zombie.scene.system.input.keycode__GT_axis = new cljs.core.PersistentArrayMap(null, 4, [(65),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)], null),(68),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null),(87),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null),(83),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)], null)], null);
zombie.scene.system.input.pick_at_position = (function zombie$scene$system$input$pick_at_position(raycaster,camera,pickables,position){
raycaster.setFromCamera(cljs.core.clj__GT_js(position),camera);

var temp__5753__auto__ = cljs.core.first(raycaster.intersectObjects(cljs.core.clj__GT_js(pickables),true));
if(cljs.core.truth_(temp__5753__auto__)){
var i = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i.object,i.point], null);
} else {
return null;
}
});
zombie.scene.system.input.normalized__GT_world_position = (function zombie$scene$system$input$normalized__GT_world_position(camera,p__10856){
var map__10861 = p__10856;
var map__10861__$1 = cljs.core.__destructure_map(map__10861);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10861__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10861__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var origin = zombie.scene.system.input.v1.set(x,y,(-1)).unproject(camera);
var dir = camera.getWorldDirection(zombie.scene.system.input.v2);
var ray = zombie.scene.system.input.r1.set(origin,dir);
var dist = ray.distanceToPlane(zombie.scene.system.input.ground_plane);
ray.at(dist,zombie.scene.system.input.v2);

return zombie.util.input.point__GT_map(zombie.scene.system.input.v2);
});
zombie.scene.system.input.get_click_handler = (function zombie$scene$system$input$get_click_handler(local_state,obj){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(local_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),obj], null));
});
zombie.scene.system.input.set_cursor_BANG_ = (function zombie$scene$system$input$set_cursor_BANG_(canvas,type){
return (canvas.style.cursor = type);
});
zombie.scene.system.input.get_cursor_type = (function zombie$scene$system$input$get_cursor_type(local_state,obj){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(local_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),obj], null),"default");
});
zombie.scene.system.input.on_mouse_move = (function zombie$scene$system$input$on_mouse_move(_local_state,canvas,evt){
var screen_pos = zombie.util.input.mouse_evt__GT_canvas_position(canvas,evt);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(zombie.state.databases.input,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"screen-position","screen-position",356064906)], null),screen_pos);
});
zombie.scene.system.input.try_click_at_position = (function zombie$scene$system$input$try_click_at_position(local_state,normalized_pos){
var map__10878 = cljs.core.deref(local_state);
var map__10878__$1 = cljs.core.__destructure_map(map__10878);
var raycaster = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10878__$1,new cljs.core.Keyword(null,"raycaster","raycaster",1968795888));
var pickables = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10878__$1,new cljs.core.Keyword(null,"pickables","pickables",626674775));
var pick_camera = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10878__$1,new cljs.core.Keyword(null,"pick-camera","pick-camera",1317801101));
var vec__10879 = zombie.scene.system.input.pick_at_position(raycaster,pick_camera,pickables,normalized_pos);
var picked_obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10879,(0),null);
var point = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10879,(1),null);
if(cljs.core.truth_(picked_obj)){
var temp__5753__auto__ = zombie.scene.system.input.get_click_handler(local_state,picked_obj);
if(cljs.core.truth_(temp__5753__auto__)){
var click_handler = temp__5753__auto__;
var G__10882 = zombie.util.input.point__GT_map(point);
return (click_handler.cljs$core$IFn$_invoke$arity$1 ? click_handler.cljs$core$IFn$_invoke$arity$1(G__10882) : click_handler.call(null,G__10882));
} else {
return null;
}
} else {
return null;
}
});
zombie.scene.system.input.on_mouse_down = (function zombie$scene$system$input$on_mouse_down(bus,local_state,canvas,evt){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),evt.button)){
var temp__5753__auto___10990 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(zombie.state.databases.input),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"screen-position","screen-position",356064906)], null));
if(cljs.core.truth_(temp__5753__auto___10990)){
var screen_pos_10991 = temp__5753__auto___10990;
var norm_pos_10992 = zombie.util.input.normalize_screen_position(canvas,screen_pos_10991);
zombie.scene.system.input.try_click_at_position(local_state,norm_pos_10992);
} else {
}
} else {
}

var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(zombie.scene.system.input.mouse_button__GT_action,evt.button);
if(cljs.core.truth_(temp__5753__auto__)){
var action_type = temp__5753__auto__;
return zombie.util.messaging.send(bus,new cljs.core.Keyword(null,"receiving-entities","receiving-entities",2110753592).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(local_state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("input","action","input/action",-1449044702),action_type], null),true);
} else {
return null;
}
});
zombie.scene.system.input.on_mouse_up = (function zombie$scene$system$input$on_mouse_up(bus,local_state,_canvas,evt){
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(zombie.scene.system.input.mouse_button__GT_action,evt.button);
if(cljs.core.truth_(temp__5753__auto__)){
var action_type = temp__5753__auto__;
return zombie.util.messaging.send(bus,new cljs.core.Keyword(null,"receiving-entities","receiving-entities",2110753592).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(local_state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("input","action","input/action",-1449044702),action_type], null),false);
} else {
return null;
}
});
zombie.scene.system.input.sum_axis = (function zombie$scene$system$input$sum_axis(axis_entries){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__10883,p__10884){
var vec__10885 = p__10883;
var ax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10885,(0),null);
var ay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10885,(1),null);
var vec__10888 = p__10884;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10888,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10888,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ax + x),(ay + y)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),axis_entries);
});
zombie.scene.system.input.inc_axis_BANG_ = (function zombie$scene$system$input$inc_axis_BANG_(local_state,axis_type,axis){
var acc = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(local_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"axis","axis",-1215390822),axis_type], null),cljs.core.PersistentHashSet.EMPTY),axis);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(local_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"axis","axis",-1215390822),axis_type], null),acc);

return zombie.scene.system.input.sum_axis(acc);
});
zombie.scene.system.input.dec_axis_BANG_ = (function zombie$scene$system$input$dec_axis_BANG_(local_state,axis_type,axis){
var acc = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(local_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"axis","axis",-1215390822),axis_type], null),cljs.core.PersistentHashSet.EMPTY),axis);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(local_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"axis","axis",-1215390822),axis_type], null),acc);

return zombie.scene.system.input.sum_axis(acc);
});
zombie.scene.system.input.on_key_down = (function zombie$scene$system$input$on_key_down(bus,local_state,_canvas,evt){
var key_code = evt.keyCode;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(zombie.scene.system.input.keycode__GT_axis,key_code);
if(cljs.core.truth_(temp__5753__auto__)){
var vec__10891 = temp__5753__auto__;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10891,(0),null);
var axis = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10891,(1),null);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(local_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698),key_code], null)))){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(local_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698),key_code], null),true);

return zombie.util.messaging.send(bus,new cljs.core.Keyword(null,"receiving-entities","receiving-entities",2110753592).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(local_state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("input","axis-update","input/axis-update",-159028349),type], null),zombie.scene.system.input.inc_axis_BANG_(local_state,type,axis));
}
} else {
return null;
}
});
zombie.scene.system.input.on_key_up = (function zombie$scene$system$input$on_key_up(bus,local_state,_canvas,evt){
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(zombie.scene.system.input.keycode__GT_axis,evt.keyCode);
if(cljs.core.truth_(temp__5753__auto__)){
var vec__10894 = temp__5753__auto__;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10894,(0),null);
var axis = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10894,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(local_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698),evt.keyCode], null),false);

return zombie.util.messaging.send(bus,new cljs.core.Keyword(null,"receiving-entities","receiving-entities",2110753592).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(local_state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("input","axis-update","input/axis-update",-159028349),type], null),zombie.scene.system.input.dec_axis_BANG_(local_state,type,axis));
} else {
return null;
}
});
zombie.scene.system.input.add_listeners_BANG_ = (function zombie$scene$system$input$add_listeners_BANG_(bus,local_state,canvas){
var handler_map = new cljs.core.PersistentArrayMap(null, 6, ["mousemove",cljs.core.partial.cljs$core$IFn$_invoke$arity$3(zombie.scene.system.input.on_mouse_move,local_state,canvas),"mousedown",cljs.core.partial.cljs$core$IFn$_invoke$arity$4(zombie.scene.system.input.on_mouse_down,bus,local_state,canvas),"mouseup",cljs.core.partial.cljs$core$IFn$_invoke$arity$4(zombie.scene.system.input.on_mouse_up,bus,local_state,canvas),"keydown",cljs.core.partial.cljs$core$IFn$_invoke$arity$4(zombie.scene.system.input.on_key_down,bus,local_state,canvas),"keyup",cljs.core.partial.cljs$core$IFn$_invoke$arity$4(zombie.scene.system.input.on_key_up,bus,local_state,canvas),"contextmenu",(function (evt){
evt.preventDefault();

return false;
})], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(local_state,cljs.core.assoc,new cljs.core.Keyword(null,"handlers","handlers",79528781),handler_map);

var seq__10899 = cljs.core.seq(handler_map);
var chunk__10900 = null;
var count__10901 = (0);
var i__10902 = (0);
while(true){
if((i__10902 < count__10901)){
var vec__10929 = chunk__10900.cljs$core$IIndexed$_nth$arity$2(null,i__10902);
var event_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10929,(0),null);
var handler_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10929,(1),null);
canvas.addEventListener(event_name,handler_fn);


var G__10993 = seq__10899;
var G__10994 = chunk__10900;
var G__10995 = count__10901;
var G__10996 = (i__10902 + (1));
seq__10899 = G__10993;
chunk__10900 = G__10994;
count__10901 = G__10995;
i__10902 = G__10996;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__10899);
if(temp__5753__auto__){
var seq__10899__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10899__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__10899__$1);
var G__10997 = cljs.core.chunk_rest(seq__10899__$1);
var G__10998 = c__4638__auto__;
var G__10999 = cljs.core.count(c__4638__auto__);
var G__11000 = (0);
seq__10899 = G__10997;
chunk__10900 = G__10998;
count__10901 = G__10999;
i__10902 = G__11000;
continue;
} else {
var vec__10932 = cljs.core.first(seq__10899__$1);
var event_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10932,(0),null);
var handler_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10932,(1),null);
canvas.addEventListener(event_name,handler_fn);


var G__11001 = cljs.core.next(seq__10899__$1);
var G__11002 = null;
var G__11003 = (0);
var G__11004 = (0);
seq__10899 = G__11001;
chunk__10900 = G__11002;
count__10901 = G__11003;
i__10902 = G__11004;
continue;
}
} else {
return null;
}
}
break;
}
});
zombie.scene.system.input.remove_listeners_BANG_ = (function zombie$scene$system$input$remove_listeners_BANG_(local_state,canvas){
var temp__5753__auto__ = new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(local_state));
if(cljs.core.truth_(temp__5753__auto__)){
var handlers = temp__5753__auto__;
var seq__10943_11005 = cljs.core.seq(handlers);
var chunk__10944_11006 = null;
var count__10945_11007 = (0);
var i__10946_11008 = (0);
while(true){
if((i__10946_11008 < count__10945_11007)){
var vec__10957_11009 = chunk__10944_11006.cljs$core$IIndexed$_nth$arity$2(null,i__10946_11008);
var event_name_11010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10957_11009,(0),null);
var handler_fn_11011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10957_11009,(1),null);
canvas.removeEventListener(event_name_11010,handler_fn_11011);


var G__11012 = seq__10943_11005;
var G__11013 = chunk__10944_11006;
var G__11014 = count__10945_11007;
var G__11015 = (i__10946_11008 + (1));
seq__10943_11005 = G__11012;
chunk__10944_11006 = G__11013;
count__10945_11007 = G__11014;
i__10946_11008 = G__11015;
continue;
} else {
var temp__5753__auto___11016__$1 = cljs.core.seq(seq__10943_11005);
if(temp__5753__auto___11016__$1){
var seq__10943_11017__$1 = temp__5753__auto___11016__$1;
if(cljs.core.chunked_seq_QMARK_(seq__10943_11017__$1)){
var c__4638__auto___11018 = cljs.core.chunk_first(seq__10943_11017__$1);
var G__11019 = cljs.core.chunk_rest(seq__10943_11017__$1);
var G__11020 = c__4638__auto___11018;
var G__11021 = cljs.core.count(c__4638__auto___11018);
var G__11022 = (0);
seq__10943_11005 = G__11019;
chunk__10944_11006 = G__11020;
count__10945_11007 = G__11021;
i__10946_11008 = G__11022;
continue;
} else {
var vec__10960_11023 = cljs.core.first(seq__10943_11017__$1);
var event_name_11024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10960_11023,(0),null);
var handler_fn_11025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10960_11023,(1),null);
canvas.removeEventListener(event_name_11024,handler_fn_11025);


var G__11026 = cljs.core.next(seq__10943_11017__$1);
var G__11027 = null;
var G__11028 = (0);
var G__11029 = (0);
seq__10943_11005 = G__11026;
chunk__10944_11006 = G__11027;
count__10945_11007 = G__11028;
i__10946_11008 = G__11029;
continue;
}
} else {
}
}
break;
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(local_state,cljs.core.dissoc,new cljs.core.Keyword(null,"handlers","handlers",79528781));
} else {
return null;
}
});
zombie.scene.system.input.tick = (function zombie$scene$system$input$tick(local_state){
var temp__5753__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(zombie.state.databases.input),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"screen-position","screen-position",356064906)], null));
if(cljs.core.truth_(temp__5753__auto__)){
var screen_pos = temp__5753__auto__;
var map__10963 = cljs.core.deref(local_state);
var map__10963__$1 = cljs.core.__destructure_map(map__10963);
var raycaster = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10963__$1,new cljs.core.Keyword(null,"raycaster","raycaster",1968795888));
var pick_camera = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10963__$1,new cljs.core.Keyword(null,"pick-camera","pick-camera",1317801101));
var pickables = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10963__$1,new cljs.core.Keyword(null,"pickables","pickables",626674775));
var canvas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10963__$1,new cljs.core.Keyword(null,"canvas","canvas",-1798817489));
var norm_pos = zombie.util.input.normalize_screen_position(canvas,screen_pos);
var world_pos = zombie.scene.system.input.normalized__GT_world_position(pick_camera,norm_pos);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(zombie.state.databases.input,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"world-position","world-position",-486434797)], null),world_pos);

var temp__5751__auto__ = zombie.scene.system.input.pick_at_position(raycaster,pick_camera,pickables,norm_pos);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__10964 = temp__5751__auto__;
var picked_obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10964,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10964,(1),null);
return zombie.scene.system.input.set_cursor_BANG_(canvas,zombie.scene.system.input.get_cursor_type(local_state,picked_obj));
} else {
return zombie.scene.system.input.set_cursor_BANG_(canvas,"default");
}
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {threeagent.system.ISystem}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
zombie.scene.system.input.InputSystem = (function (event_bus,local_state,__meta,__extmap,__hash){
this.event_bus = event_bus;
this.local_state = local_state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(zombie.scene.system.input.InputSystem.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(zombie.scene.system.input.InputSystem.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k10968,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__10972 = k10968;
var G__10972__$1 = (((G__10972 instanceof cljs.core.Keyword))?G__10972.fqn:null);
switch (G__10972__$1) {
case "event-bus":
return self__.event_bus;

break;
case "local-state":
return self__.local_state;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k10968,else__4464__auto__);

}
}));

(zombie.scene.system.input.InputSystem.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__10973){
var vec__10974 = p__10973;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10974,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10974,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(zombie.scene.system.input.InputSystem.prototype.threeagent$system$ISystem$ = cljs.core.PROTOCOL_SENTINEL);

(zombie.scene.system.input.InputSystem.prototype.threeagent$system$ISystem$init$arity$2 = (function (_,p__10977){
var self__ = this;
var map__10978 = p__10977;
var map__10978__$1 = cljs.core.__destructure_map(map__10978);
var canvas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10978__$1,new cljs.core.Keyword(null,"canvas","canvas",-1798817489));
var threejs_scene = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10978__$1,new cljs.core.Keyword(null,"threejs-scene","threejs-scene",754266515));
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.local_state,cljs.core.assoc,new cljs.core.Keyword(null,"scene","scene",1523800415),threejs_scene,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"canvas","canvas",-1798817489),canvas,new cljs.core.Keyword(null,"raycaster","raycaster",1968795888),(new module$node_modules$three$build$three_module.Raycaster()),new cljs.core.Keyword(null,"receiving-entities","receiving-entities",2110753592),cljs.core.PersistentHashSet.EMPTY], 0));

return zombie.scene.system.input.add_listeners_BANG_(self__.event_bus,self__.local_state,canvas);
}));

(zombie.scene.system.input.InputSystem.prototype.threeagent$system$ISystem$destroy$arity$2 = (function (_,p__10979){
var self__ = this;
var map__10980 = p__10979;
var map__10980__$1 = cljs.core.__destructure_map(map__10980);
var canvas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10980__$1,new cljs.core.Keyword(null,"canvas","canvas",-1798817489));
var ___$1 = this;
return zombie.scene.system.input.remove_listeners_BANG_(self__.local_state,canvas);
}));

(zombie.scene.system.input.InputSystem.prototype.threeagent$system$ISystem$on_entity_added$arity$5 = (function (_,___$1,key,obj,p__10981){
var self__ = this;
var map__10982 = p__10981;
var map__10982__$1 = cljs.core.__destructure_map(map__10982);
var pick_camera = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10982__$1,new cljs.core.Keyword(null,"pick-camera","pick-camera",1317801101));
var receive_events_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10982__$1,new cljs.core.Keyword(null,"receive-events?","receive-events?",-2043515398));
var cursor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10982__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10982__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var ___$2 = this;
if(cljs.core.truth_(pick_camera)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.local_state,cljs.core.assoc,new cljs.core.Keyword(null,"pick-camera","pick-camera",1317801101),obj);
} else {
}

if(cljs.core.truth_(on_click)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.local_state,cljs.core.update,new cljs.core.Keyword(null,"pickables","pickables",626674775),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.local_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),obj], null),on_click);
} else {
}

if(cljs.core.truth_(receive_events_QMARK_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.local_state,cljs.core.update,new cljs.core.Keyword(null,"receiving-entities","receiving-entities",2110753592),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key], 0));
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.local_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),obj], null),cursor);
}));

(zombie.scene.system.input.InputSystem.prototype.threeagent$system$ISystem$on_entity_removed$arity$5 = (function (_,___$1,key,obj,_config){
var self__ = this;
var ___$2 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.local_state,cljs.core.update,new cljs.core.Keyword(null,"pickables","pickables",626674775),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.local_state,cljs.core.update,new cljs.core.Keyword(null,"receiving-entities","receiving-entities",2110753592),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key], 0));
}));

(zombie.scene.system.input.InputSystem.prototype.threeagent$system$ISystem$tick$arity$2 = (function (_,_delta_time){
var self__ = this;
var ___$1 = this;
return zombie.scene.system.input.tick(self__.local_state);
}));

(zombie.scene.system.input.InputSystem.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#zombie.scene.system.input.InputSystem{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-bus","event-bus",-1186609251),self__.event_bus],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state],null))], null),self__.__extmap));
}));

(zombie.scene.system.input.InputSystem.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10967){
var self__ = this;
var G__10967__$1 = this;
return (new cljs.core.RecordIter((0),G__10967__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event-bus","event-bus",-1186609251),new cljs.core.Keyword(null,"local-state","local-state",-282143524)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(zombie.scene.system.input.InputSystem.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(zombie.scene.system.input.InputSystem.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new zombie.scene.system.input.InputSystem(self__.event_bus,self__.local_state,self__.__meta,self__.__extmap,self__.__hash));
}));

(zombie.scene.system.input.InputSystem.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(zombie.scene.system.input.InputSystem.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (1744595902 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(zombie.scene.system.input.InputSystem.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this10969,other10970){
var self__ = this;
var this10969__$1 = this;
return (((!((other10970 == null)))) && ((((this10969__$1.constructor === other10970.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this10969__$1.event_bus,other10970.event_bus)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this10969__$1.local_state,other10970.local_state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this10969__$1.__extmap,other10970.__extmap)))))))));
}));

(zombie.scene.system.input.InputSystem.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"local-state","local-state",-282143524),null,new cljs.core.Keyword(null,"event-bus","event-bus",-1186609251),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new zombie.scene.system.input.InputSystem(self__.event_bus,self__.local_state,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(zombie.scene.system.input.InputSystem.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k10968){
var self__ = this;
var this__4468__auto____$1 = this;
var G__10985 = k10968;
var G__10985__$1 = (((G__10985 instanceof cljs.core.Keyword))?G__10985.fqn:null);
switch (G__10985__$1) {
case "event-bus":
case "local-state":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k10968);

}
}));

(zombie.scene.system.input.InputSystem.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__10967){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__10986 = cljs.core.keyword_identical_QMARK_;
var expr__10987 = k__4470__auto__;
if(cljs.core.truth_((pred__10986.cljs$core$IFn$_invoke$arity$2 ? pred__10986.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event-bus","event-bus",-1186609251),expr__10987) : pred__10986.call(null,new cljs.core.Keyword(null,"event-bus","event-bus",-1186609251),expr__10987)))){
return (new zombie.scene.system.input.InputSystem(G__10967,self__.local_state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__10986.cljs$core$IFn$_invoke$arity$2 ? pred__10986.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"local-state","local-state",-282143524),expr__10987) : pred__10986.call(null,new cljs.core.Keyword(null,"local-state","local-state",-282143524),expr__10987)))){
return (new zombie.scene.system.input.InputSystem(self__.event_bus,G__10967,self__.__meta,self__.__extmap,null));
} else {
return (new zombie.scene.system.input.InputSystem(self__.event_bus,self__.local_state,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__10967),null));
}
}
}));

(zombie.scene.system.input.InputSystem.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"event-bus","event-bus",-1186609251),self__.event_bus,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state,null))], null),self__.__extmap));
}));

(zombie.scene.system.input.InputSystem.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__10967){
var self__ = this;
var this__4460__auto____$1 = this;
return (new zombie.scene.system.input.InputSystem(self__.event_bus,self__.local_state,G__10967,self__.__extmap,self__.__hash));
}));

(zombie.scene.system.input.InputSystem.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(zombie.scene.system.input.InputSystem.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event-bus","event-bus",453922276,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null)], null);
}));

(zombie.scene.system.input.InputSystem.cljs$lang$type = true);

(zombie.scene.system.input.InputSystem.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"zombie.scene.system.input/InputSystem",null,(1),null));
}));

(zombie.scene.system.input.InputSystem.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"zombie.scene.system.input/InputSystem");
}));

/**
 * Positional factory function for zombie.scene.system.input/InputSystem.
 */
zombie.scene.system.input.__GT_InputSystem = (function zombie$scene$system$input$__GT_InputSystem(event_bus,local_state){
return (new zombie.scene.system.input.InputSystem(event_bus,local_state,null,null,null));
});

/**
 * Factory function for zombie.scene.system.input/InputSystem, taking a map of keywords to field values.
 */
zombie.scene.system.input.map__GT_InputSystem = (function zombie$scene$system$input$map__GT_InputSystem(G__10971){
var extmap__4501__auto__ = (function (){var G__10989 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__10971,new cljs.core.Keyword(null,"event-bus","event-bus",-1186609251),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"local-state","local-state",-282143524)], 0));
if(cljs.core.record_QMARK_(G__10971)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__10989);
} else {
return G__10989;
}
})();
return (new zombie.scene.system.input.InputSystem(new cljs.core.Keyword(null,"event-bus","event-bus",-1186609251).cljs$core$IFn$_invoke$arity$1(G__10971),new cljs.core.Keyword(null,"local-state","local-state",-282143524).cljs$core$IFn$_invoke$arity$1(G__10971),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

zombie.scene.system.input.create = (function zombie$scene$system$input$create(event_bus){
var local_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pickables","pickables",626674775),cljs.core.PersistentHashSet.EMPTY], null));
return zombie.scene.system.input.__GT_InputSystem(event_bus,local_state);
});

//# sourceMappingURL=zombie.scene.system.input.js.map
