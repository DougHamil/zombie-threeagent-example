goog.provide('threeagent.system');

/**
 * @interface
 */
threeagent.system.ISystem = function(){};

var threeagent$system$ISystem$init$dyn_10000 = (function (this$,threeagent_config){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (threeagent.system.init[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(this$,threeagent_config) : m__4510__auto__.call(null,this$,threeagent_config));
} else {
var m__4508__auto__ = (threeagent.system.init["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(this$,threeagent_config) : m__4508__auto__.call(null,this$,threeagent_config));
} else {
throw cljs.core.missing_protocol("ISystem.init",this$);
}
}
});
/**
 * 
 *   Called after threeagent initialization as part of `threeagent.core/render`
 *   `threeagent-config`: A map with the configuration for the threeagent instance: 
 *   ```clojure
 *    {:threejs-renderer <ThreeJS Renderer Instance>
 *     :threejs-scene <ThreeJS Scene>
 *     :systems <Map of all systems>
 *     :canvas <Canvas DOM Element>}
 * 
 *   If the returned value is a function, it will be invoked immediately after all remaining
 *   `ISystem/init` have initialized. Otherwise, the returned value is ignored.
 *   ```
 *  
 */
threeagent.system.init = (function threeagent$system$init(this$,threeagent_config){
if((((!((this$ == null)))) && ((!((this$.threeagent$system$ISystem$init$arity$2 == null)))))){
return this$.threeagent$system$ISystem$init$arity$2(this$,threeagent_config);
} else {
return threeagent$system$ISystem$init$dyn_10000(this$,threeagent_config);
}
});

var threeagent$system$ISystem$destroy$dyn_10001 = (function (this$,threeagent_config){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (threeagent.system.destroy[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(this$,threeagent_config) : m__4510__auto__.call(null,this$,threeagent_config));
} else {
var m__4508__auto__ = (threeagent.system.destroy["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(this$,threeagent_config) : m__4508__auto__.call(null,this$,threeagent_config));
} else {
throw cljs.core.missing_protocol("ISystem.destroy",this$);
}
}
});
/**
 * 
 *   Called immediately before the threeagent context is destroyed.
 *   This usually happens when `threeagent.core/render` is re-executed as part of a hot-reload.
 *   `threeagent-config`: A map with the configuration for the threeagent instance: 
 *   ```clojure
 *    {:threejs-renderer <ThreeJS Renderer Instance>
 *     :threejs-scene <ThreeJS Scene>
 *     :systems <Map of all systems>
 *     :canvas <Canvas DOM Element>}
 * 
 *   If the returned value is a function, it will be invoked immediately after all remaining
 *   `ISystem/destroy` have been invoked. Otherwise, the returned value is ignored.
 *   ```
 *  
 */
threeagent.system.destroy = (function threeagent$system$destroy(this$,threeagent_config){
if((((!((this$ == null)))) && ((!((this$.threeagent$system$ISystem$destroy$arity$2 == null)))))){
return this$.threeagent$system$ISystem$destroy$arity$2(this$,threeagent_config);
} else {
return threeagent$system$ISystem$destroy$dyn_10001(this$,threeagent_config);
}
});

var threeagent$system$ISystem$on_entity_added$dyn_10002 = (function (this$,entity_context,entity_id,threejs_obj,system_config){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (threeagent.system.on_entity_added[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$5 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$5(this$,entity_context,entity_id,threejs_obj,system_config) : m__4510__auto__.call(null,this$,entity_context,entity_id,threejs_obj,system_config));
} else {
var m__4508__auto__ = (threeagent.system.on_entity_added["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$5 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$5(this$,entity_context,entity_id,threejs_obj,system_config) : m__4508__auto__.call(null,this$,entity_context,entity_id,threejs_obj,system_config));
} else {
throw cljs.core.missing_protocol("ISystem.on-entity-added",this$);
}
}
});
/**
 * 
 *   Called when a new entity is added to the scene.
 *   `entity-context`: A map representing the inherited context for this entity
 *   `entity-id`: The ID of this entity, when specified via the `:id` property, `nil` otherwise
 *   `threejs-obj`: the ThreeJS object instance for this entity 
 *   `system-config`: this entity's configuration value for this system's key
 * 
 *   If the returned value is a function, it will be invoked after all remaining
 *   `ISystem/on-entity-added` have been invoked for this entity and it's children. 
 *   Otherwise, the returned value is ignored.
 *  
 */
threeagent.system.on_entity_added = (function threeagent$system$on_entity_added(this$,entity_context,entity_id,threejs_obj,system_config){
if((((!((this$ == null)))) && ((!((this$.threeagent$system$ISystem$on_entity_added$arity$5 == null)))))){
return this$.threeagent$system$ISystem$on_entity_added$arity$5(this$,entity_context,entity_id,threejs_obj,system_config);
} else {
return threeagent$system$ISystem$on_entity_added$dyn_10002(this$,entity_context,entity_id,threejs_obj,system_config);
}
});

var threeagent$system$ISystem$on_entity_removed$dyn_10003 = (function (this$,entity_context,entity_id,threejs_obj,system_config){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (threeagent.system.on_entity_removed[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$5 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$5(this$,entity_context,entity_id,threejs_obj,system_config) : m__4510__auto__.call(null,this$,entity_context,entity_id,threejs_obj,system_config));
} else {
var m__4508__auto__ = (threeagent.system.on_entity_removed["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$5 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$5(this$,entity_context,entity_id,threejs_obj,system_config) : m__4508__auto__.call(null,this$,entity_context,entity_id,threejs_obj,system_config));
} else {
throw cljs.core.missing_protocol("ISystem.on-entity-removed",this$);
}
}
});
/**
 * 
 *   Called when an entity is removed from the scene
 *   `entity-context`: A map representing the inherited context for this entity
 *   `entity-id`: The ID of this entity, when specified via the `:id` property, `nil` otherwise
 *   `threejs-obj`: the ThreeJS object instance for this entity 
 *   `system-config`: this entity's configuration value for this system's key
 * 
 *   If the returned value is a function, it will be invoked after all remaining
 *   `ISystem/on-entity-removed` have been invoked for this entity and it's children.
 *   Otherwise, the returned value is ignored.
 *  
 */
threeagent.system.on_entity_removed = (function threeagent$system$on_entity_removed(this$,entity_context,entity_id,threejs_obj,system_config){
if((((!((this$ == null)))) && ((!((this$.threeagent$system$ISystem$on_entity_removed$arity$5 == null)))))){
return this$.threeagent$system$ISystem$on_entity_removed$arity$5(this$,entity_context,entity_id,threejs_obj,system_config);
} else {
return threeagent$system$ISystem$on_entity_removed$dyn_10003(this$,entity_context,entity_id,threejs_obj,system_config);
}
});

var threeagent$system$ISystem$tick$dyn_10004 = (function (this$,delta_time){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (threeagent.system.tick[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(this$,delta_time) : m__4510__auto__.call(null,this$,delta_time));
} else {
var m__4508__auto__ = (threeagent.system.tick["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(this$,delta_time) : m__4508__auto__.call(null,this$,delta_time));
} else {
throw cljs.core.missing_protocol("ISystem.tick",this$);
}
}
});
/**
 * 
 *   Called each frame
 *   `delta-time`: The elapsed time (in seconds) since the last tick (0 for the initial tick)
 *  
 */
threeagent.system.tick = (function threeagent$system$tick(this$,delta_time){
if((((!((this$ == null)))) && ((!((this$.threeagent$system$ISystem$tick$arity$2 == null)))))){
return this$.threeagent$system$ISystem$tick$arity$2(this$,delta_time);
} else {
return threeagent$system$ISystem$tick$dyn_10004(this$,delta_time);
}
});


//# sourceMappingURL=threeagent.system.js.map
