goog.provide('zombie.scene.system.zombie');
var module$node_modules$three$build$three_module=shadow.js.require("module$node_modules$three$build$three_module", {});
zombie.scene.system.zombie.v1 = (new module$node_modules$three$build$three_module.Vector3());
zombie.scene.system.zombie.v2 = (new module$node_modules$three$build$three_module.Vector3());
zombie.scene.system.zombie.move_towards_BANG_ = (function zombie$scene$system$zombie$move_towards_BANG_(bus,entity_id,move_speed,obj,target_obj){
var target_pos = target_obj.getWorldPosition(zombie.scene.system.zombie.v1);
var heading = obj.getWorldPosition(zombie.scene.system.zombie.v2).sub(target_pos).normalize().multiplyScalar((- move_speed));
obj.lookAt(target_pos);

return zombie.util.messaging.send(bus,entity_id,new cljs.core.Keyword("physics","set-velocity","physics/set-velocity",-586483352),zombie.util.threejs.vector3__GT_tuple(heading));
});
zombie.scene.system.zombie.in_range_QMARK_ = (function zombie$scene$system$zombie$in_range_QMARK_(p__13309,_){
var map__13310 = p__13309;
var map__13310__$1 = cljs.core.__destructure_map(map__13310);
var object = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13310__$1,new cljs.core.Keyword(null,"object","object",1474613949));
var attacker_obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13310__$1,new cljs.core.Keyword(null,"attacker-obj","attacker-obj",266287014));
return ((2) > zombie.util.threejs.distance_between(object,attacker_obj));
});
zombie.scene.system.zombie._entry_idle = (function zombie$scene$system$zombie$_entry_idle(p__13311,_){
var map__13312 = p__13311;
var map__13312__$1 = cljs.core.__destructure_map(map__13312);
var bus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13312__$1,new cljs.core.Keyword(null,"bus","bus",-1090873603));
var entity_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13312__$1,new cljs.core.Keyword(null,"entity-id","entity-id",1485898093));
return zombie.util.messaging.send(bus,entity_id,new cljs.core.Keyword("animation","play","animation/play",416602782),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loop?","loop?",457687798),true,new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.Keyword("animation","character-idle","animation/character-idle",124331197)], null));
});
zombie.scene.system.zombie._entry_chasing = (function zombie$scene$system$zombie$_entry_chasing(p__13313,_){
var map__13314 = p__13313;
var map__13314__$1 = cljs.core.__destructure_map(map__13314);
var bus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13314__$1,new cljs.core.Keyword(null,"bus","bus",-1090873603));
var entity_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13314__$1,new cljs.core.Keyword(null,"entity-id","entity-id",1485898093));
return zombie.util.messaging.send(bus,entity_id,new cljs.core.Keyword("animation","play","animation/play",416602782),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loop?","loop?",457687798),true,new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.Keyword("animation","character-run","animation/character-run",-138340656)], null));
});
zombie.scene.system.zombie._entry_attacking_pre_hit = (function zombie$scene$system$zombie$_entry_attacking_pre_hit(p__13315,_){
var map__13316 = p__13315;
var map__13316__$1 = cljs.core.__destructure_map(map__13316);
var bus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13316__$1,new cljs.core.Keyword(null,"bus","bus",-1090873603));
var entity_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13316__$1,new cljs.core.Keyword(null,"entity-id","entity-id",1485898093));
zombie.util.messaging.send(bus,entity_id,new cljs.core.Keyword("physics","set-velocity","physics/set-velocity",-586483352),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null));

return zombie.util.messaging.send(bus,entity_id,new cljs.core.Keyword("animation","play","animation/play",416602782),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loop?","loop?",457687798),false,new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.Keyword("animation","character-attack","animation/character-attack",1067264953)], null));
});
zombie.scene.system.zombie._entry_dying = (function zombie$scene$system$zombie$_entry_dying(p__13317,_){
var map__13318 = p__13317;
var map__13318__$1 = cljs.core.__destructure_map(map__13318);
var bus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13318__$1,new cljs.core.Keyword(null,"bus","bus",-1090873603));
var entity_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13318__$1,new cljs.core.Keyword(null,"entity-id","entity-id",1485898093));
var object = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13318__$1,new cljs.core.Keyword(null,"object","object",1474613949));
zombie.util.messaging.send(bus,new cljs.core.Keyword("particles","spawn","particles/spawn",282676462),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"blood-fountain","blood-fountain",-442547275),new cljs.core.Keyword(null,"position","position",-2011731912),zombie.util.threejs.world_position_as_tuple(object)], null));

zombie.util.messaging.send(bus,entity_id,new cljs.core.Keyword("physics","set-velocity","physics/set-velocity",-586483352),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null));

zombie.util.messaging.send(bus,entity_id,new cljs.core.Keyword("physics","disable","physics/disable",1232135877),cljs.core.PersistentArrayMap.EMPTY);

zombie.util.messaging.send(bus,entity_id,new cljs.core.Keyword("animation","stop-all","animation/stop-all",-1604963053),cljs.core.PersistentArrayMap.EMPTY);

return zombie.util.messaging.send(bus,entity_id,new cljs.core.Keyword("animation","play","animation/play",416602782),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"loop?","loop?",457687798),false,new cljs.core.Keyword(null,"clamp-when-finished?","clamp-when-finished?",1915888022),true,new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.Keyword("animation","character-death","animation/character-death",-1881305432)], null));
});
zombie.scene.system.zombie._entry_attacking_hit = (function zombie$scene$system$zombie$_entry_attacking_hit(p__13319,_){
var map__13320 = p__13319;
var map__13320__$1 = cljs.core.__destructure_map(map__13320);
var ctx = map__13320__$1;
var bus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13320__$1,new cljs.core.Keyword(null,"bus","bus",-1090873603));
var entity_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13320__$1,new cljs.core.Keyword(null,"entity-id","entity-id",1485898093));
var attacker_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13320__$1,new cljs.core.Keyword(null,"attacker-id","attacker-id",629894680));
if(zombie.scene.system.zombie.in_range_QMARK_(ctx,null)){
return zombie.util.messaging.send(bus,attacker_id,new cljs.core.Keyword("combat","hit","combat/hit",-1592659022),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"damage","damage",970520018),(10),new cljs.core.Keyword(null,"attack-direction","attack-direction",-750291677),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"hit-normal","hit-normal",929947402),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"hit-position","hit-position",1824962160),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"attacker-id","attacker-id",629894680),entity_id], null));
} else {
return null;
}
});
zombie.scene.system.zombie._entry_dead = (function zombie$scene$system$zombie$_entry_dead(p__13321,_){
var map__13322 = p__13321;
var map__13322__$1 = cljs.core.__destructure_map(map__13322);
var entity_db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13322__$1,new cljs.core.Keyword(null,"entity-db","entity-db",422060390));
var entity_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13322__$1,new cljs.core.Keyword(null,"entity-id","entity-id",1485898093));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(entity_db,cljs.core.dissoc,entity_id);
});
zombie.scene.system.zombie._action_idle_to_chasing = (function zombie$scene$system$zombie$_action_idle_to_chasing(p__13323,_){
var map__13324 = p__13323;
var map__13324__$1 = cljs.core.__destructure_map(map__13324);
var object = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13324__$1,new cljs.core.Keyword(null,"object","object",1474613949));
var bus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13324__$1,new cljs.core.Keyword(null,"bus","bus",-1090873603));
return zombie.util.messaging.send(bus,new cljs.core.Keyword("particles","spawn","particles/spawn",282676462),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"floating-text","floating-text",1601770399),new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(zombie.util.threejs.world_position_as_tuple(object),(1),(1)),new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"text","text",-1790561697),"BRAAINNS"], null));
});
if((typeof zombie !== 'undefined') && (typeof zombie.scene !== 'undefined') && (typeof zombie.scene.system !== 'undefined') && (typeof zombie.scene.system.zombie !== 'undefined') && (typeof zombie.scene.system.zombie.tick_ai_zombie !== 'undefined')){
} else {
zombie.scene.system.zombie.tick_ai_zombie = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__13325 = cljs.core.get_global_hierarchy;
return (fexpr__13325.cljs$core$IFn$_invoke$arity$0 ? fexpr__13325.cljs$core$IFn$_invoke$arity$0() : fexpr__13325.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("zombie.scene.system.zombie","tick-ai-zombie"),(function (state,_context){
return state;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
zombie.scene.system.zombie.tick_ai_zombie.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (){
return null;
}));
if((typeof zombie !== 'undefined') && (typeof zombie.scene !== 'undefined') && (typeof zombie.scene.system !== 'undefined') && (typeof zombie.scene.system.zombie !== 'undefined') && (typeof zombie.scene.system.zombie.tick_zombie !== 'undefined')){
} else {
zombie.scene.system.zombie.tick_zombie = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__13326 = cljs.core.get_global_hierarchy;
return (fexpr__13326.cljs$core$IFn$_invoke$arity$0 ? fexpr__13326.cljs$core$IFn$_invoke$arity$0() : fexpr__13326.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("zombie.scene.system.zombie","tick-zombie"),(function (state,_context){
return state;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
zombie.scene.system.zombie.tick_zombie.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"chasing","chasing",-1227472291),(function (_,p__13327){
var map__13328 = p__13327;
var map__13328__$1 = cljs.core.__destructure_map(map__13328);
var bus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13328__$1,new cljs.core.Keyword(null,"bus","bus",-1090873603));
var entity_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13328__$1,new cljs.core.Keyword(null,"entity-id","entity-id",1485898093));
var move_speed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13328__$1,new cljs.core.Keyword(null,"move-speed","move-speed",1817709482));
var attacker_obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13328__$1,new cljs.core.Keyword(null,"attacker-obj","attacker-obj",266287014));
var object = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13328__$1,new cljs.core.Keyword(null,"object","object",1474613949));
return zombie.scene.system.zombie.move_towards_BANG_(bus,entity_id,move_speed,object,attacker_obj);
}));
zombie.scene.system.zombie.tick_zombie.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (){
return null;
}));
zombie.scene.system.zombie.zombie_fsm = (function (){var G__13329 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"zombiezzzzzz","zombiezzzzzz",-233380522),new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.Keyword(null,"initialize","initialize",609952913),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"states","states",1389013542),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"initialize","initialize",609952913),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"idle","idle",-2007156861)], null)], null)], null),new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"damaged","damaged",944143521),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"chasing","chasing",-1227472291),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.system.zombie._action_idle_to_chasing], null)], null),new cljs.core.Keyword(null,"killed","killed",702860541),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"dying","dying",-157378881)], null)], null),new cljs.core.Keyword(null,"entry","entry",505168823),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.system.zombie._entry_idle], null)], null),new cljs.core.Keyword(null,"chasing","chasing",-1227472291),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tick","tick",-835886976),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"attacking","attacking",492336639),new cljs.core.Keyword(null,"guard","guard",-873147811),zombie.scene.system.zombie.in_range_QMARK_], null)], null),new cljs.core.Keyword(null,"killed","killed",702860541),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"dying","dying",-157378881)], null),new cljs.core.Keyword(null,"damaged","damaged",944143521),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"entry","entry",505168823),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.system.zombie._entry_chasing], null)], null),new cljs.core.Keyword(null,"attacking","attacking",492336639),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.Keyword(null,"pre-hit","pre-hit",-13468988),new cljs.core.Keyword(null,"states","states",1389013542),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pre-hit","pre-hit",-13468988),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"delay","delay",-574225219),(500),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"hit","hit",1909257382)], null)], null),new cljs.core.Keyword(null,"entry","entry",505168823),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.system.zombie._entry_attacking_pre_hit], null)], null),new cljs.core.Keyword(null,"hit","hit",1909257382),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"delay","delay",-574225219),(300),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"post-hit","post-hit",-725974747)], null)], null),new cljs.core.Keyword(null,"entry","entry",505168823),zombie.scene.system.zombie._entry_attacking_hit], null),new cljs.core.Keyword(null,"post-hit","post-hit",-725974747),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),zombie.scene.system.zombie.in_range_QMARK_,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"pre-hit","pre-hit",-13468988)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Keyword(null,"chasing","chasing",-1227472291)], null)], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"killed","killed",702860541),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"dying","dying",-157378881)], null),new cljs.core.Keyword(null,"damaged","damaged",944143521),cljs.core.PersistentArrayMap.EMPTY], null)], null),new cljs.core.Keyword(null,"dying","dying",-157378881),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"damaged","damaged",944143521),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"killed","killed",702860541),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"entry","entry",505168823),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.system.zombie._entry_dying], null),new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"delay","delay",-574225219),(2000),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"dead","dead",-1946604091)], null)], null)], null),new cljs.core.Keyword(null,"dead","dead",-1946604091),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entry","entry",505168823),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.system.zombie._entry_dead], null)], null)], null)], null);
return (statecharts.core.machine.cljs$core$IFn$_invoke$arity$1 ? statecharts.core.machine.cljs$core$IFn$_invoke$arity$1(G__13329) : statecharts.core.machine.call(null,G__13329));
})();
zombie.scene.system.zombie.on_damaged = (function zombie$scene$system$zombie$on_damaged(bus,local_state,entity_id,object,payload){
var map__13330 = payload;
var map__13330__$1 = cljs.core.__destructure_map(map__13330);
var attacker_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13330__$1,new cljs.core.Keyword(null,"attacker-id","attacker-id",629894680));
var damage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13330__$1,new cljs.core.Keyword(null,"damage","damage",970520018));
var attack_direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13330__$1,new cljs.core.Keyword(null,"attack-direction","attack-direction",-750291677));
var hit_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13330__$1,new cljs.core.Keyword(null,"hit-position","hit-position",1824962160));
var attacker_obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(zombie.state.databases.entity_objects),attacker_id);
var fsm = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(local_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,new cljs.core.Keyword(null,"fsm","fsm",937922990)], null));
statecharts.core.update_state.cljs$core$IFn$_invoke$arity$variadic(fsm,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"attacker-id","attacker-id",629894680),new cljs.core.Keyword(null,"attacker-id","attacker-id",629894680).cljs$core$IFn$_invoke$arity$1(payload),new cljs.core.Keyword(null,"attacker-obj","attacker-obj",266287014),attacker_obj], 0));

statecharts.core.send.cljs$core$IFn$_invoke$arity$2(fsm,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"damaged","damaged",944143521),new cljs.core.Keyword(null,"payload","payload",-383036092),payload], null));

zombie.util.messaging.send(bus,entity_id,new cljs.core.Keyword("animation","play","animation/play",416602782),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"loop?","loop?",457687798),false,new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"upper","upper",246243906),new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.Keyword("animation","character-hit-reaction-upper","animation/character-hit-reaction-upper",-1515929534)], null));

zombie.util.messaging.send(bus,new cljs.core.Keyword("particles","spawn","particles/spawn",282676462),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"blood-fountain","blood-fountain",-442547275),new cljs.core.Keyword(null,"scale","scale",-230427353),0.5,new cljs.core.Keyword(null,"position","position",-2011731912),hit_position], null));

zombie.util.messaging.send(bus,new cljs.core.Keyword("particles","spawn","particles/spawn",282676462),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"floating-text","floating-text",1601770399),new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(zombie.util.threejs.world_position_as_tuple(object),(1),(2)),new cljs.core.Keyword(null,"color","color",1011675173),"orange",new cljs.core.Keyword(null,"speed","speed",1257663751),(5),new cljs.core.Keyword(null,"spread","spread",862337191),(8),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.str.cljs$core$IFn$_invoke$arity$1(damage)], null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(local_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,new cljs.core.Keyword(null,"target-object","target-object",-1029869673)], null),attacker_obj);
});
zombie.scene.system.zombie.on_killed = (function zombie$scene$system$zombie$on_killed(_bus,local_state,entity_id,payload){
var fsm = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(local_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_id,new cljs.core.Keyword(null,"fsm","fsm",937922990)], null));
return statecharts.core.send.cljs$core$IFn$_invoke$arity$2(fsm,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"killed","killed",702860541),new cljs.core.Keyword(null,"payload","payload",-383036092),payload], null));
});
zombie.scene.system.zombie.tick_ai = (function zombie$scene$system$zombie$tick_ai(fsm){
statecharts.core.send.cljs$core$IFn$_invoke$arity$2(fsm,new cljs.core.Keyword(null,"tick","tick",-835886976));

return zombie.scene.system.zombie.tick_ai_zombie.cljs$core$IFn$_invoke$arity$2(statecharts.core.value(fsm),statecharts.core.state(fsm));
});
zombie.scene.system.zombie.register_listeners_BANG_ = (function zombie$scene$system$zombie$register_listeners_BANG_(bus,local_state,entity_id,object){
zombie.util.messaging.on(bus,entity_id,new cljs.core.Keyword("entity","damaged","entity/damaged",-942098362),cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(zombie.scene.system.zombie.on_damaged,bus,local_state,entity_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([object], 0)));

return zombie.util.messaging.on(bus,entity_id,new cljs.core.Keyword("entity","killed","entity/killed",-684013280),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(zombie.scene.system.zombie.on_killed,bus,local_state,entity_id));
});

/**
* @constructor
 * @implements {threeagent.system.ISystem}
*/
zombie.scene.system.zombie.ZombieSystem = (function (bus,local_state){
this.bus = bus;
this.local_state = local_state;
});
(zombie.scene.system.zombie.ZombieSystem.prototype.threeagent$system$ISystem$ = cljs.core.PROTOCOL_SENTINEL);

(zombie.scene.system.zombie.ZombieSystem.prototype.threeagent$system$ISystem$init$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(zombie.scene.system.zombie.ZombieSystem.prototype.threeagent$system$ISystem$destroy$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(zombie.scene.system.zombie.ZombieSystem.prototype.threeagent$system$ISystem$on_entity_added$arity$5 = (function (_,p__13331,id,obj,p__13332){
var self__ = this;
var map__13333 = p__13331;
var map__13333__$1 = cljs.core.__destructure_map(map__13333);
var entity_db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13333__$1,new cljs.core.Keyword(null,"entity-db","entity-db",422060390));
var map__13334 = p__13332;
var map__13334__$1 = cljs.core.__destructure_map(map__13334);
var move_speed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13334__$1,new cljs.core.Keyword(null,"move-speed","move-speed",1817709482));
var ___$1 = this;
zombie.scene.system.zombie.register_listeners_BANG_(self__.bus,self__.local_state,id,obj);

var context = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"object","object",1474613949),obj,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),entity_db,new cljs.core.Keyword(null,"move-speed","move-speed",1817709482),move_speed,new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state,new cljs.core.Keyword(null,"bus","bus",-1090873603),self__.bus,new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),id], null);
var fsm_service = (function (){var G__13335 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(zombie.scene.system.zombie.zombie_fsm,new cljs.core.Keyword(null,"context","context",-830191113),context);
return (statecharts.core.service.cljs$core$IFn$_invoke$arity$1 ? statecharts.core.service.cljs$core$IFn$_invoke$arity$1(G__13335) : statecharts.core.service.call(null,G__13335));
})();
statecharts.core.start(fsm_service);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.local_state,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ai-ticker","ai-ticker",1270692061),zombie.util.timer.jitter_ticker(0.2,0.25,(function (){
return zombie.scene.system.zombie.tick_ai(fsm_service);
})),new cljs.core.Keyword(null,"local-state","local-state",-282143524),self__.local_state,new cljs.core.Keyword(null,"fsm","fsm",937922990),fsm_service], null));

return (function (){
return statecharts.core.send.cljs$core$IFn$_invoke$arity$2(fsm_service,new cljs.core.Keyword(null,"start","start",-355208981));
});
}));

(zombie.scene.system.zombie.ZombieSystem.prototype.threeagent$system$ISystem$on_entity_removed$arity$5 = (function (_,___$1,id,_obj,_cfg){
var self__ = this;
var ___$2 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.local_state,cljs.core.dissoc,id);
}));

(zombie.scene.system.zombie.ZombieSystem.prototype.threeagent$system$ISystem$tick$arity$2 = (function (_,delta_time){
var self__ = this;
var ___$1 = this;
var seq__13336 = cljs.core.seq(cljs.core.deref(self__.local_state));
var chunk__13337 = null;
var count__13338 = (0);
var i__13339 = (0);
while(true){
if((i__13339 < count__13338)){
var vec__13348 = chunk__13337.cljs$core$IIndexed$_nth$arity$2(null,i__13339);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13348,(0),null);
var map__13351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13348,(1),null);
var map__13351__$1 = cljs.core.__destructure_map(map__13351);
var ai_ticker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13351__$1,new cljs.core.Keyword(null,"ai-ticker","ai-ticker",1270692061));
var fsm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13351__$1,new cljs.core.Keyword(null,"fsm","fsm",937922990));
zombie.util.timer.maybe_tick(ai_ticker,delta_time);

zombie.scene.system.zombie.tick_zombie.cljs$core$IFn$_invoke$arity$2(statecharts.core.value(fsm),statecharts.core.state(fsm));


var G__13369 = seq__13336;
var G__13370 = chunk__13337;
var G__13371 = count__13338;
var G__13372 = (i__13339 + (1));
seq__13336 = G__13369;
chunk__13337 = G__13370;
count__13338 = G__13371;
i__13339 = G__13372;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__13336);
if(temp__5753__auto__){
var seq__13336__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13336__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__13336__$1);
var G__13373 = cljs.core.chunk_rest(seq__13336__$1);
var G__13374 = c__4638__auto__;
var G__13375 = cljs.core.count(c__4638__auto__);
var G__13376 = (0);
seq__13336 = G__13373;
chunk__13337 = G__13374;
count__13338 = G__13375;
i__13339 = G__13376;
continue;
} else {
var vec__13352 = cljs.core.first(seq__13336__$1);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13352,(0),null);
var map__13355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13352,(1),null);
var map__13355__$1 = cljs.core.__destructure_map(map__13355);
var ai_ticker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13355__$1,new cljs.core.Keyword(null,"ai-ticker","ai-ticker",1270692061));
var fsm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13355__$1,new cljs.core.Keyword(null,"fsm","fsm",937922990));
zombie.util.timer.maybe_tick(ai_ticker,delta_time);

zombie.scene.system.zombie.tick_zombie.cljs$core$IFn$_invoke$arity$2(statecharts.core.value(fsm),statecharts.core.state(fsm));


var G__13377 = cljs.core.next(seq__13336__$1);
var G__13378 = null;
var G__13379 = (0);
var G__13380 = (0);
seq__13336 = G__13377;
chunk__13337 = G__13378;
count__13338 = G__13379;
i__13339 = G__13380;
continue;
}
} else {
return null;
}
}
break;
}
}));

(zombie.scene.system.zombie.ZombieSystem.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bus","bus",549657924,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null)], null);
}));

(zombie.scene.system.zombie.ZombieSystem.cljs$lang$type = true);

(zombie.scene.system.zombie.ZombieSystem.cljs$lang$ctorStr = "zombie.scene.system.zombie/ZombieSystem");

(zombie.scene.system.zombie.ZombieSystem.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"zombie.scene.system.zombie/ZombieSystem");
}));

/**
 * Positional factory function for zombie.scene.system.zombie/ZombieSystem.
 */
zombie.scene.system.zombie.__GT_ZombieSystem = (function zombie$scene$system$zombie$__GT_ZombieSystem(bus,local_state){
return (new zombie.scene.system.zombie.ZombieSystem(bus,local_state));
});

zombie.scene.system.zombie.create = (function zombie$scene$system$zombie$create(event_bus){
return zombie.scene.system.zombie.__GT_ZombieSystem(event_bus,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=zombie.scene.system.zombie.js.map
