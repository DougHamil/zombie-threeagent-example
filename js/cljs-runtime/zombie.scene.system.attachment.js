goog.provide('zombie.scene.system.attachment');
var module$node_modules$three$build$three_module=shadow.js.require("module$node_modules$three$build$three_module", {});

/**
* @constructor
 * @implements {threeagent.system.ISystem}
*/
zombie.scene.system.attachment.AttachmentSystem = (function (bus,local_state){
this.bus = bus;
this.local_state = local_state;
});
(zombie.scene.system.attachment.AttachmentSystem.prototype.threeagent$system$ISystem$ = cljs.core.PROTOCOL_SENTINEL);

(zombie.scene.system.attachment.AttachmentSystem.prototype.threeagent$system$ISystem$init$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(zombie.scene.system.attachment.AttachmentSystem.prototype.threeagent$system$ISystem$destroy$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return null;
}));

(zombie.scene.system.attachment.AttachmentSystem.prototype.threeagent$system$ISystem$on_entity_added$arity$5 = (function (_,___$1,_id,obj,p__13058){
var self__ = this;
var map__13063 = p__13058;
var map__13063__$1 = cljs.core.__destructure_map(map__13063);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13063__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var object = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13063__$1,new cljs.core.Keyword(null,"object","object",1474613949));
var visible_signal = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13063__$1,new cljs.core.Keyword(null,"visible-signal","visible-signal",1979539633));
var hidden_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13063__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
var ___$2 = this;
var new_parent_13077 = zombie.util.threejs.get_in_object(obj,path);
new_parent_13077.add(object);

if(cljs.core.truth_(hidden_QMARK_)){
(object.visible = false);
} else {
}

var temp__5753__auto__ = visible_signal;
if(cljs.core.truth_(temp__5753__auto__)){
var vec__13072 = temp__5753__auto__;
var entity_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13072,(0),null);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13072,(1),null);
return zombie.util.messaging.on(self__.bus,entity_id,event,(function (p1__13057_SHARP_){
return (object.visible = p1__13057_SHARP_);
}));
} else {
return null;
}
}));

(zombie.scene.system.attachment.AttachmentSystem.prototype.threeagent$system$ISystem$on_entity_removed$arity$5 = (function (_,___$1,_id,_obj,p__13075){
var self__ = this;
var map__13076 = p__13075;
var map__13076__$1 = cljs.core.__destructure_map(map__13076);
var object = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13076__$1,new cljs.core.Keyword(null,"object","object",1474613949));
var ___$2 = this;
return object.parent.remove(object);
}));

(zombie.scene.system.attachment.AttachmentSystem.prototype.threeagent$system$ISystem$tick$arity$2 = (function (_,_delta_time){
var self__ = this;
var ___$1 = this;
return null;
}));

(zombie.scene.system.attachment.AttachmentSystem.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bus","bus",549657924,null),new cljs.core.Symbol(null,"local-state","local-state",1358388003,null)], null);
}));

(zombie.scene.system.attachment.AttachmentSystem.cljs$lang$type = true);

(zombie.scene.system.attachment.AttachmentSystem.cljs$lang$ctorStr = "zombie.scene.system.attachment/AttachmentSystem");

(zombie.scene.system.attachment.AttachmentSystem.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"zombie.scene.system.attachment/AttachmentSystem");
}));

/**
 * Positional factory function for zombie.scene.system.attachment/AttachmentSystem.
 */
zombie.scene.system.attachment.__GT_AttachmentSystem = (function zombie$scene$system$attachment$__GT_AttachmentSystem(bus,local_state){
return (new zombie.scene.system.attachment.AttachmentSystem(bus,local_state));
});

zombie.scene.system.attachment.create = (function zombie$scene$system$attachment$create(event_bus){
return zombie.scene.system.attachment.__GT_AttachmentSystem(event_bus,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=zombie.scene.system.attachment.js.map
