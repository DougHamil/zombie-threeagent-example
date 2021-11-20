goog.provide('malli.registry');
/**
 * @define {string}
 */
malli.registry.type = goog.define("malli.registry.type","default");

/**
 * @interface
 */
malli.registry.Registry = function(){};

var malli$registry$Registry$_schema$dyn_11215 = (function (this$,type){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (malli.registry._schema[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__4510__auto__.call(null,this$,type));
} else {
var m__4508__auto__ = (malli.registry._schema["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__4508__auto__.call(null,this$,type));
} else {
throw cljs.core.missing_protocol("Registry.-schema",this$);
}
}
});
/**
 * returns the schema from a registry
 */
malli.registry._schema = (function malli$registry$_schema(this$,type){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schema$arity$2 == null)))))){
return this$.malli$registry$Registry$_schema$arity$2(this$,type);
} else {
return malli$registry$Registry$_schema$dyn_11215(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_11216 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (malli.registry._schemas[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (malli.registry._schemas["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Registry.-schemas",this$);
}
}
});
/**
 * returns all schemas from a registry
 */
malli.registry._schemas = (function malli$registry$_schemas(this$){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schemas$arity$1 == null)))))){
return this$.malli$registry$Registry$_schemas$arity$1(this$);
} else {
return malli$registry$Registry$_schemas$dyn_11216(this$);
}
});

malli.registry.simple_registry = (function malli$registry$simple_registry(schemas){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry11154 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry11154 = (function (schemas,meta11155){
this.schemas = schemas;
this.meta11155 = meta11155;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry11154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11156,meta11155__$1){
var self__ = this;
var _11156__$1 = this;
return (new malli.registry.t_malli$registry11154(self__.schemas,meta11155__$1));
}));

(malli.registry.t_malli$registry11154.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11156){
var self__ = this;
var _11156__$1 = this;
return self__.meta11155;
}));

(malli.registry.t_malli$registry11154.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry11154.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.schemas,type);
}));

(malli.registry.t_malli$registry11154.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.schemas;
}));

(malli.registry.t_malli$registry11154.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null),new cljs.core.Symbol(null,"meta11155","meta11155",2081124379,null)], null);
}));

(malli.registry.t_malli$registry11154.cljs$lang$type = true);

(malli.registry.t_malli$registry11154.cljs$lang$ctorStr = "malli.registry/t_malli$registry11154");

(malli.registry.t_malli$registry11154.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"malli.registry/t_malli$registry11154");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry11154.
 */
malli.registry.__GT_t_malli$registry11154 = (function malli$registry$simple_registry_$___GT_t_malli$registry11154(schemas__$1,meta11155){
return (new malli.registry.t_malli$registry11154(schemas__$1,meta11155));
});

}

return (new malli.registry.t_malli$registry11154(schemas,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.registry = (function malli$registry$registry(_QMARK_registry){
if((((!((_QMARK_registry == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === _QMARK_registry.malli$registry$Registry$))))?true:(((!_QMARK_registry.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry):false)):cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry))){
return _QMARK_registry;
} else {
if(cljs.core.map_QMARK_(_QMARK_registry)){
return malli.registry.simple_registry(_QMARK_registry);
} else {
return null;
}
}
});
malli.registry.registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(malli.registry.registry(cljs.core.PersistentArrayMap.EMPTY));
malli.registry.set_default_registry_BANG_ = (function malli$registry$set_default_registry_BANG_(_QMARK_registry){
if((malli.registry.type === "custom")){
return cljs.core.reset_BANG_(malli.registry.registry_STAR_,malli.registry.registry(_QMARK_registry));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("can't set default registry",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),malli.registry.type], null));
}
});
malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry11158 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry11158 = (function (meta11159){
this.meta11159 = meta11159;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry11158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11160,meta11159__$1){
var self__ = this;
var _11160__$1 = this;
return (new malli.registry.t_malli$registry11158(meta11159__$1));
}));

(malli.registry.t_malli$registry11158.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11160){
var self__ = this;
var _11160__$1 = this;
return self__.meta11159;
}));

(malli.registry.t_malli$registry11158.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry11158.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry11158.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry11158.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta11159","meta11159",1743190182,null)], null);
}));

(malli.registry.t_malli$registry11158.cljs$lang$type = true);

(malli.registry.t_malli$registry11158.cljs$lang$ctorStr = "malli.registry/t_malli$registry11158");

(malli.registry.t_malli$registry11158.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"malli.registry/t_malli$registry11158");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry11158.
 */
malli.registry.__GT_t_malli$registry11158 = (function malli$registry$custom_default_registry_$___GT_t_malli$registry11158(meta11159){
return (new malli.registry.t_malli$registry11158(meta11159));
});

}

return (new malli.registry.t_malli$registry11158(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__4824__auto__ = [];
var len__4818__auto___11226 = arguments.length;
var i__4819__auto___11227 = (0);
while(true){
if((i__4819__auto___11227 < len__4818__auto___11226)){
args__4824__auto__.push((arguments[i__4819__auto___11227]));

var G__11228 = (i__4819__auto___11227 + (1));
i__4819__auto___11227 = G__11228;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic = (function (_QMARK_registries){
var registries = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(malli.registry.registry,_QMARK_registries);
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry11163 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry11163 = (function (_QMARK_registries,registries,meta11164){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta11164 = meta11164;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry11163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11165,meta11164__$1){
var self__ = this;
var _11165__$1 = this;
return (new malli.registry.t_malli$registry11163(self__._QMARK_registries,self__.registries,meta11164__$1));
}));

(malli.registry.t_malli$registry11163.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11165){
var self__ = this;
var _11165__$1 = this;
return self__.meta11164;
}));

(malli.registry.t_malli$registry11163.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry11163.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__11161_SHARP_){
return malli.registry._schema(p1__11161_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry11163.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry11163.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta11164","meta11164",-692774102,null)], null);
}));

(malli.registry.t_malli$registry11163.cljs$lang$type = true);

(malli.registry.t_malli$registry11163.cljs$lang$ctorStr = "malli.registry/t_malli$registry11163");

(malli.registry.t_malli$registry11163.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"malli.registry/t_malli$registry11163");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry11163.
 */
malli.registry.__GT_t_malli$registry11163 = (function malli$registry$__GT_t_malli$registry11163(_QMARK_registries__$1,registries__$1,meta11164){
return (new malli.registry.t_malli$registry11163(_QMARK_registries__$1,registries__$1,meta11164));
});

}

return (new malli.registry.t_malli$registry11163(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq11162){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11162));
}));

malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry11178 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry11178 = (function (db,meta11179){
this.db = db;
this.meta11179 = meta11179;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry11178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11180,meta11179__$1){
var self__ = this;
var _11180__$1 = this;
return (new malli.registry.t_malli$registry11178(self__.db,meta11179__$1));
}));

(malli.registry.t_malli$registry11178.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11180){
var self__ = this;
var _11180__$1 = this;
return self__.meta11179;
}));

(malli.registry.t_malli$registry11178.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry11178.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.db),type);
}));

(malli.registry.t_malli$registry11178.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.db);
}));

(malli.registry.t_malli$registry11178.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta11179","meta11179",1175051852,null)], null);
}));

(malli.registry.t_malli$registry11178.cljs$lang$type = true);

(malli.registry.t_malli$registry11178.cljs$lang$ctorStr = "malli.registry/t_malli$registry11178");

(malli.registry.t_malli$registry11178.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"malli.registry/t_malli$registry11178");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry11178.
 */
malli.registry.__GT_t_malli$registry11178 = (function malli$registry$mutable_registry_$___GT_t_malli$registry11178(db__$1,meta11179){
return (new malli.registry.t_malli$registry11178(db__$1,meta11179));
});

}

return (new malli.registry.t_malli$registry11178(db,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry11189 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry11189 = (function (meta11190){
this.meta11190 = meta11190;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry11189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11191,meta11190__$1){
var self__ = this;
var _11191__$1 = this;
return (new malli.registry.t_malli$registry11189(meta11190__$1));
}));

(malli.registry.t_malli$registry11189.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11191){
var self__ = this;
var _11191__$1 = this;
return self__.meta11190;
}));

(malli.registry.t_malli$registry11189.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry11189.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(malli.registry._STAR_registry_STAR_,type);
}));

(malli.registry.t_malli$registry11189.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._STAR_registry_STAR_;
}));

(malli.registry.t_malli$registry11189.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta11190","meta11190",664499767,null)], null);
}));

(malli.registry.t_malli$registry11189.cljs$lang$type = true);

(malli.registry.t_malli$registry11189.cljs$lang$ctorStr = "malli.registry/t_malli$registry11189");

(malli.registry.t_malli$registry11189.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"malli.registry/t_malli$registry11189");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry11189.
 */
malli.registry.__GT_t_malli$registry11189 = (function malli$registry$dynamic_registry_$___GT_t_malli$registry11189(meta11190){
return (new malli.registry.t_malli$registry11189(meta11190));
});

}

return (new malli.registry.t_malli$registry11189(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(function (){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry11192 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry11192 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta11193){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta11193 = meta11193;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry11192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11194,meta11193__$1){
var self__ = this;
var _11194__$1 = this;
return (new malli.registry.t_malli$registry11192(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta11193__$1));
}));

(malli.registry.t_malli$registry11192.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11194){
var self__ = this;
var _11194__$1 = this;
return self__.meta11193;
}));

(malli.registry.t_malli$registry11192.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry11192.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__4212__auto__ = (function (){var fexpr__11195 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__11195.cljs$core$IFn$_invoke$arity$1 ? fexpr__11195.cljs$core$IFn$_invoke$arity$1(name) : fexpr__11195.call(null,name));
})();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var temp__5753__auto__ = (function (){var G__11201 = name;
var G__11202 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__11201,G__11202) : self__.provider.call(null,G__11201,G__11202));
})();
if(cljs.core.truth_(temp__5753__auto__)){
var schema = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cache_STAR_,cljs.core.assoc,name,schema);

return schema;
} else {
return null;
}
}
}));

(malli.registry.t_malli$registry11192.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry11192.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta11193","meta11193",-1952993565,null)], null);
}));

(malli.registry.t_malli$registry11192.cljs$lang$type = true);

(malli.registry.t_malli$registry11192.cljs$lang$ctorStr = "malli.registry/t_malli$registry11192");

(malli.registry.t_malli$registry11192.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"malli.registry/t_malli$registry11192");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry11192.
 */
malli.registry.__GT_t_malli$registry11192 = (function malli$registry$lazy_registry_$___GT_t_malli$registry11192(default_registry__$1,provider__$1,cache_STAR___$1,registry_STAR___$1,meta11193){
return (new malli.registry.t_malli$registry11192(default_registry__$1,provider__$1,cache_STAR___$1,registry_STAR___$1,meta11193));
});

}

return (new malli.registry.t_malli$registry11192(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY));
})()
], 0)));
});
/**
 * finds a schema from a registry
 */
malli.registry.schema = (function malli$registry$schema(registry,type){
return malli.registry._schema(registry,type);
});
/**
 * finds all schemas from a registry
 */
malli.registry.schemas = (function malli$registry$schemas(registry){
return malli.registry._schemas(registry);
});

//# sourceMappingURL=malli.registry.js.map
