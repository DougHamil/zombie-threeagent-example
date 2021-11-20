goog.provide('zombie.scene.system.entity');

/**
* @constructor
 * @implements {threeagent.system.ISystem}
*/
zombie.scene.system.entity.EntitySystem = (function (bus,local_state){
this.bus = bus;
this.local_state = local_state;
});
(zombie.scene.system.entity.EntitySystem.prototype.threeagent$system$ISystem$ = cljs.core.PROTOCOL_SENTINEL);

(zombie.scene.system.entity.EntitySystem.prototype.threeagent$system$ISystem$init$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.reset_BANG_(self__.local_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-db","current-db",213667882),zombie.state.databases.entity_objects], null));
}));

(zombie.scene.system.entity.EntitySystem.prototype.threeagent$system$ISystem$destroy$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(zombie.scene.system.entity.EntitySystem.prototype.threeagent$system$ISystem$on_entity_added$arity$5 = (function (_,___$1,id,obj,_cfg){
var self__ = this;
var ___$2 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(zombie.state.databases.entity_objects,cljs.core.assoc,id,obj);
}));

(zombie.scene.system.entity.EntitySystem.prototype.threeagent$system$ISystem$on_entity_removed$arity$5 = (function (_,___$1,id,obj,_cfg){
var self__ = this;
var ___$2 = this;
if((id == null)){
console.error(obj);
} else {
}

zombie.util.messaging.drop_all(self__.bus,id);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(zombie.state.databases.entity_objects,cljs.core.dissoc,id);
}));

(zombie.scene.system.entity.EntitySystem.prototype.threeagent$system$ISystem$tick$arity$2 = (function (_,_delta_time){
var self__ = this;
var ___$1 = this;
return null;
}));

(zombie.scene.system.entity.EntitySystem.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bus","bus",549657924,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null)], null);
}));

(zombie.scene.system.entity.EntitySystem.cljs$lang$type = true);

(zombie.scene.system.entity.EntitySystem.cljs$lang$ctorStr = "zombie.scene.system.entity/EntitySystem");

(zombie.scene.system.entity.EntitySystem.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"zombie.scene.system.entity/EntitySystem");
}));

/**
 * Positional factory function for zombie.scene.system.entity/EntitySystem.
 */
zombie.scene.system.entity.__GT_EntitySystem = (function zombie$scene$system$entity$__GT_EntitySystem(bus,local_state){
return (new zombie.scene.system.entity.EntitySystem(bus,local_state));
});

zombie.scene.system.entity.create = (function zombie$scene$system$entity$create(event_bus){
return zombie.scene.system.entity.__GT_EntitySystem(event_bus,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=zombie.scene.system.entity.js.map
