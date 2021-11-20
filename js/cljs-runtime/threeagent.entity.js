goog.provide('threeagent.entity');
var module$node_modules$three$build$three_module=shadow.js.require("module$node_modules$three$build$three_module", {});

/**
 * @interface
 */
threeagent.entity.IEntityType = function(){};

var threeagent$entity$IEntityType$create$dyn_9867 = (function (this$,context,entity_config){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (threeagent.entity.create[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(this$,context,entity_config) : m__4510__auto__.call(null,this$,context,entity_config));
} else {
var m__4508__auto__ = (threeagent.entity.create["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(this$,context,entity_config) : m__4508__auto__.call(null,this$,context,entity_config));
} else {
throw cljs.core.missing_protocol("IEntityType.create",this$);
}
}
});
/**
 * Returns a new instance of this entity type, based on the provided `entity-config` and `context`.
 *   The returned instance should be a ThreeJS `Object3D` or one of its sub-classes.
 */
threeagent.entity.create = (function threeagent$entity$create(this$,context,entity_config){
if((((!((this$ == null)))) && ((!((this$.threeagent$entity$IEntityType$create$arity$3 == null)))))){
return this$.threeagent$entity$IEntityType$create$arity$3(this$,context,entity_config);
} else {
return threeagent$entity$IEntityType$create$dyn_9867(this$,context,entity_config);
}
});

var threeagent$entity$IEntityType$destroy_BANG_$dyn_9868 = (function (this$,context,object,entity_config){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (threeagent.entity.destroy_BANG_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$4(this$,context,object,entity_config) : m__4510__auto__.call(null,this$,context,object,entity_config));
} else {
var m__4508__auto__ = (threeagent.entity.destroy_BANG_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$4(this$,context,object,entity_config) : m__4508__auto__.call(null,this$,context,object,entity_config));
} else {
throw cljs.core.missing_protocol("IEntityType.destroy!",this$);
}
}
});
/**
 * Destroys an existing instance of this entity type.
 */
threeagent.entity.destroy_BANG_ = (function threeagent$entity$destroy_BANG_(this$,context,object,entity_config){
if((((!((this$ == null)))) && ((!((this$.threeagent$entity$IEntityType$destroy_BANG_$arity$4 == null)))))){
return this$.threeagent$entity$IEntityType$destroy_BANG_$arity$4(this$,context,object,entity_config);
} else {
return threeagent$entity$IEntityType$destroy_BANG_$dyn_9868(this$,context,object,entity_config);
}
});


/**
 * @interface
 */
threeagent.entity.IUpdateableEntityType = function(){};

var threeagent$entity$IUpdateableEntityType$update_BANG_$dyn_9869 = (function (this$,context,object,new_entity_config){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (threeagent.entity.update_BANG_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$4(this$,context,object,new_entity_config) : m__4510__auto__.call(null,this$,context,object,new_entity_config));
} else {
var m__4508__auto__ = (threeagent.entity.update_BANG_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$4(this$,context,object,new_entity_config) : m__4508__auto__.call(null,this$,context,object,new_entity_config));
} else {
throw cljs.core.missing_protocol("IUpdateableEntityType.update!",this$);
}
}
});
/**
 * Updates an existing instance of this entity entity type in-place, based on the provided
 *  `new-entity-config` and `context`.
 */
threeagent.entity.update_BANG_ = (function threeagent$entity$update_BANG_(this$,context,object,new_entity_config){
if((((!((this$ == null)))) && ((!((this$.threeagent$entity$IUpdateableEntityType$update_BANG_$arity$4 == null)))))){
return this$.threeagent$entity$IUpdateableEntityType$update_BANG_$arity$4(this$,context,object,new_entity_config);
} else {
return threeagent$entity$IUpdateableEntityType$update_BANG_$dyn_9869(this$,context,object,new_entity_config);
}
});


//# sourceMappingURL=threeagent.entity.js.map
