goog.provide('zombie.scene.zombie');
zombie.scene.zombie.model = (function zombie$scene$zombie$model(id){
var s = 0.005;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("model","zombie","model/zombie",-2034700052),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,s,s], null),new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("animation","character-idle","animation/character-idle",124331197)], null)], null)], null);
});
zombie.scene.zombie.render = (function zombie$scene$zombie$render(_database,id,cfg){
var map__10631 = cfg;
var map__10631__$1 = cljs.core.__destructure_map(map__10631);
var initial_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10631__$1,new cljs.core.Keyword(null,"initial-position","initial-position",1055724056));
var initial_health = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10631__$1,new cljs.core.Keyword(null,"initial-health","initial-health",-207286926));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enemy?","enemy?",-772698281),true], null),new cljs.core.Keyword(null,"zombie","zombie",2142041507),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"move-speed","move-speed",1817709482),0.17], null),new cljs.core.Keyword(null,"entity","entity",-450970276),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"physics","physics",-1254209137),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hull","hull",-957096876),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"radius","radius",-2073122258),0.5,new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mass","mass",-2138950046),(100),new cljs.core.Keyword(null,"frictionAir","frictionAir",1279701012),0.5], null)], null)], null),new cljs.core.Keyword(null,"ignore-rotation?","ignore-rotation?",-683450086),true,new cljs.core.Keyword(null,"position-offset","position-offset",1257061411),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,(0),0.5], null),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),id], null),new cljs.core.Keyword(null,"spawner","spawner",804504391),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-death","on-death",2035139018),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"powerup","powerup",1561172438),new cljs.core.Keyword(null,"name","name",1843675177),"Speed+",new cljs.core.Keyword(null,"modifier","modifier",1634442788),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stat","stat",-1370599836),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"amount","amount",364489504),0.05], null)], null)], null)], null),new cljs.core.Keyword(null,"position","position",-2011731912),initial_position,new cljs.core.Keyword(null,"combat","combat",517558269),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"health","health",-295520649),initial_health], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.scene.zombie.model,id], null)], null);
});

//# sourceMappingURL=zombie.scene.zombie.js.map