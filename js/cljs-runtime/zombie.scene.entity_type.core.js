goog.provide('zombie.scene.entity_type.core');
var module$node_modules$three$build$three_module=shadow.js.require("module$node_modules$three$build$three_module", {});
var module$node_modules$troika_three_text$dist$troika_three_text_esm=shadow.js.require("module$node_modules$troika_three_text$dist$troika_three_text_esm", {});

/**
* @constructor
 * @implements {threeagent.entity.IEntityType}
*/
zombie.scene.entity_type.core.ModelEntity = (function (){
});
(zombie.scene.entity_type.core.ModelEntity.prototype.threeagent$entity$IEntityType$ = cljs.core.PROTOCOL_SENTINEL);

(zombie.scene.entity_type.core.ModelEntity.prototype.threeagent$entity$IEntityType$create$arity$3 = (function (_,___$1,p__13402){
var self__ = this;
var map__13403 = p__13402;
var map__13403__$1 = cljs.core.__destructure_map(map__13403);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13403__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var ___$2 = this;
var parent = (new module$node_modules$three$build$three_module.Object3D());
var pool = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(zombie.state.databases.assets),type);
var model = zombie.util.pooling.claim_BANG_(pool);
if(cljs.core.truth_(model)){
parent.add(model);

(parent.modelInstance = model);
} else {
}

return parent;
}));

(zombie.scene.entity_type.core.ModelEntity.prototype.threeagent$entity$IEntityType$destroy_BANG_$arity$4 = (function (_,___$1,obj,p__13404){
var self__ = this;
var map__13405 = p__13404;
var map__13405__$1 = cljs.core.__destructure_map(map__13405);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13405__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var ___$2 = this;
var model = obj.modelInstance;
if(cljs.core.truth_(model)){
var pool = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(zombie.state.databases.assets),type);
return zombie.util.pooling.return_BANG_(pool,model);
} else {
return null;
}
}));

(zombie.scene.entity_type.core.ModelEntity.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(zombie.scene.entity_type.core.ModelEntity.cljs$lang$type = true);

(zombie.scene.entity_type.core.ModelEntity.cljs$lang$ctorStr = "zombie.scene.entity-type.core/ModelEntity");

(zombie.scene.entity_type.core.ModelEntity.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"zombie.scene.entity-type.core/ModelEntity");
}));

/**
 * Positional factory function for zombie.scene.entity-type.core/ModelEntity.
 */
zombie.scene.entity_type.core.__GT_ModelEntity = (function zombie$scene$entity_type$core$__GT_ModelEntity(){
return (new zombie.scene.entity_type.core.ModelEntity());
});


/**
* @constructor
 * @implements {threeagent.entity.IEntityType}
*/
zombie.scene.entity_type.core.TextEntity = (function (){
});
(zombie.scene.entity_type.core.TextEntity.prototype.threeagent$entity$IEntityType$ = cljs.core.PROTOCOL_SENTINEL);

(zombie.scene.entity_type.core.TextEntity.prototype.threeagent$entity$IEntityType$create$arity$3 = (function (_,___$1,p__13406){
var self__ = this;
var map__13407 = p__13406;
var map__13407__$1 = cljs.core.__destructure_map(map__13407);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13407__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var font = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13407__$1,new cljs.core.Keyword(null,"font","font",-1506159249));
var anchor_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13407__$1,new cljs.core.Keyword(null,"anchor-x","anchor-x",-1597588837));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13407__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var ___$2 = this;
var parent = (new module$node_modules$three$build$three_module.Object3D());
var obj = (new module$node_modules$troika_three_text$dist$troika_three_text_esm.Text());
(obj.text = text);

(obj.font = (function (){var G__13409 = cljs.core.deref(zombie.state.databases.assets);
var fexpr__13408 = (function (){var or__4212__auto__ = font;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword("font","bebas","font/bebas",-324908376);
}
})();
return (fexpr__13408.cljs$core$IFn$_invoke$arity$1 ? fexpr__13408.cljs$core$IFn$_invoke$arity$1(G__13409) : fexpr__13408.call(null,G__13409));
})());

if(cljs.core.truth_(anchor_x)){
(obj.anchorX = anchor_x);
} else {
}

if(cljs.core.truth_(color)){
(obj.color = color);
} else {
}

obj.sync();

parent.add(obj);

return parent;
}));

(zombie.scene.entity_type.core.TextEntity.prototype.threeagent$entity$IEntityType$destroy_BANG_$arity$4 = (function (_,___$1,obj,___$2){
var self__ = this;
var ___$3 = this;
return (obj.children[(0)]).dispose();
}));

(zombie.scene.entity_type.core.TextEntity.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(zombie.scene.entity_type.core.TextEntity.cljs$lang$type = true);

(zombie.scene.entity_type.core.TextEntity.cljs$lang$ctorStr = "zombie.scene.entity-type.core/TextEntity");

(zombie.scene.entity_type.core.TextEntity.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"zombie.scene.entity-type.core/TextEntity");
}));

/**
 * Positional factory function for zombie.scene.entity-type.core/TextEntity.
 */
zombie.scene.entity_type.core.__GT_TextEntity = (function zombie$scene$entity_type$core$__GT_TextEntity(){
return (new zombie.scene.entity_type.core.TextEntity());
});

zombie.scene.entity_type.core.create = (function zombie$scene$entity_type$core$create(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),zombie.scene.entity_type.core.__GT_TextEntity(),new cljs.core.Keyword(null,"model","model",331153215),zombie.scene.entity_type.core.__GT_ModelEntity()], null);
});

//# sourceMappingURL=zombie.scene.entity_type.core.js.map
