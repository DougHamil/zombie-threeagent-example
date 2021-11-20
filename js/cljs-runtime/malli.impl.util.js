goog.provide('malli.impl.util');
malli.impl.util._PLUS_max_size_PLUS_ = Number.MAX_VALUE;
malli.impl.util._tagged = (function malli$impl$util$_tagged(k,v){
return (new cljs.core.MapEntry(k,v,null));
});
malli.impl.util._tagged_QMARK_ = (function malli$impl$util$_tagged_QMARK_(v){
return (v instanceof cljs.core.MapEntry);
});
malli.impl.util._invalid_QMARK_ = (function malli$impl$util$_invalid_QMARK_(x){
return cljs.core.keyword_identical_QMARK_(x,new cljs.core.Keyword("malli.core","invalid","malli.core/invalid",362080900));
});
malli.impl.util._map_valid = (function malli$impl$util$_map_valid(f,v){
if(malli.impl.util._invalid_QMARK_(v)){
return v;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v));
}
});
malli.impl.util._map_invalid = (function malli$impl$util$_map_invalid(f,v){
if(malli.impl.util._invalid_QMARK_(v)){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v));
} else {
return v;
}
});
malli.impl.util._fail_BANG_ = (function malli$impl$util$_fail_BANG_(var_args){
var G__11132 = arguments.length;
switch (G__11132) {
case 1:
return malli.impl.util._fail_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.impl.util._fail_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.impl.util._fail_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.impl.util._fail_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (type){
return malli.impl.util._fail_BANG_.cljs$core$IFn$_invoke$arity$2(type,null);
}));

(malli.impl.util._fail_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,data){
return malli.impl.util._fail_BANG_.cljs$core$IFn$_invoke$arity$3(type,null,data);
}));

(malli.impl.util._fail_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (type,message,data){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
}));

(malli.impl.util._fail_BANG_.cljs$lang$maxFixedArity = 3);


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
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
malli.impl.util.SchemaError = (function (path,in$,schema,value,type,message,__meta,__extmap,__hash){
this.path = path;
this.in$ = in$;
this.schema = schema;
this.value = value;
this.type = type;
this.message = message;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(malli.impl.util.SchemaError.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(malli.impl.util.SchemaError.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k11134,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__11138 = k11134;
var G__11138__$1 = (((G__11138 instanceof cljs.core.Keyword))?G__11138.fqn:null);
switch (G__11138__$1) {
case "path":
return self__.path;

break;
case "in":
return self__.in$;

break;
case "schema":
return self__.schema;

break;
case "value":
return self__.value;

break;
case "type":
return self__.type;

break;
case "message":
return self__.message;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k11134,else__4464__auto__);

}
}));

(malli.impl.util.SchemaError.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__11139){
var vec__11140 = p__11139;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11140,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11140,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(malli.impl.util.SchemaError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#malli.impl.util.SchemaError{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"message","message",-406056002),self__.message],null))], null),self__.__extmap));
}));

(malli.impl.util.SchemaError.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11133){
var self__ = this;
var G__11133__$1 = this;
return (new cljs.core.RecordIter((0),G__11133__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"message","message",-406056002)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(malli.impl.util.SchemaError.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(malli.impl.util.SchemaError.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new malli.impl.util.SchemaError(self__.path,self__.in$,self__.schema,self__.value,self__.type,self__.message,self__.__meta,self__.__extmap,self__.__hash));
}));

(malli.impl.util.SchemaError.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
}));

(malli.impl.util.SchemaError.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1568369823 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(malli.impl.util.SchemaError.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this11135,other11136){
var self__ = this;
var this11135__$1 = this;
return (((!((other11136 == null)))) && ((((this11135__$1.constructor === other11136.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11135__$1.path,other11136.path)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11135__$1.in,other11136.in)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11135__$1.schema,other11136.schema)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11135__$1.value,other11136.value)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11135__$1.type,other11136.type)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11135__$1.message,other11136.message)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11135__$1.__extmap,other11136.__extmap)))))))))))))))));
}));

(malli.impl.util.SchemaError.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"message","message",-406056002),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new malli.impl.util.SchemaError(self__.path,self__.in$,self__.schema,self__.value,self__.type,self__.message,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(malli.impl.util.SchemaError.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k11134){
var self__ = this;
var this__4468__auto____$1 = this;
var G__11143 = k11134;
var G__11143__$1 = (((G__11143 instanceof cljs.core.Keyword))?G__11143.fqn:null);
switch (G__11143__$1) {
case "path":
case "in":
case "schema":
case "value":
case "type":
case "message":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k11134);

}
}));

(malli.impl.util.SchemaError.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__11133){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__11144 = cljs.core.keyword_identical_QMARK_;
var expr__11145 = k__4470__auto__;
if(cljs.core.truth_((pred__11144.cljs$core$IFn$_invoke$arity$2 ? pred__11144.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168),expr__11145) : pred__11144.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__11145)))){
return (new malli.impl.util.SchemaError(G__11133,self__.in$,self__.schema,self__.value,self__.type,self__.message,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11144.cljs$core$IFn$_invoke$arity$2 ? pred__11144.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"in","in",-1531184865),expr__11145) : pred__11144.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__11145)))){
return (new malli.impl.util.SchemaError(self__.path,G__11133,self__.schema,self__.value,self__.type,self__.message,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11144.cljs$core$IFn$_invoke$arity$2 ? pred__11144.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__11145) : pred__11144.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__11145)))){
return (new malli.impl.util.SchemaError(self__.path,self__.in$,G__11133,self__.value,self__.type,self__.message,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11144.cljs$core$IFn$_invoke$arity$2 ? pred__11144.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__11145) : pred__11144.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__11145)))){
return (new malli.impl.util.SchemaError(self__.path,self__.in$,self__.schema,G__11133,self__.type,self__.message,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11144.cljs$core$IFn$_invoke$arity$2 ? pred__11144.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348),expr__11145) : pred__11144.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__11145)))){
return (new malli.impl.util.SchemaError(self__.path,self__.in$,self__.schema,self__.value,G__11133,self__.message,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11144.cljs$core$IFn$_invoke$arity$2 ? pred__11144.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"message","message",-406056002),expr__11145) : pred__11144.call(null,new cljs.core.Keyword(null,"message","message",-406056002),expr__11145)))){
return (new malli.impl.util.SchemaError(self__.path,self__.in$,self__.schema,self__.value,self__.type,G__11133,self__.__meta,self__.__extmap,null));
} else {
return (new malli.impl.util.SchemaError(self__.path,self__.in$,self__.schema,self__.value,self__.type,self__.message,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__11133),null));
}
}
}
}
}
}
}));

(malli.impl.util.SchemaError.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path","path",-188191168),self__.path,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type","type",1174270348),self__.type,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"message","message",-406056002),self__.message,null))], null),self__.__extmap));
}));

(malli.impl.util.SchemaError.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__11133){
var self__ = this;
var this__4460__auto____$1 = this;
return (new malli.impl.util.SchemaError(self__.path,self__.in$,self__.schema,self__.value,self__.type,self__.message,G__11133,self__.__extmap,self__.__hash));
}));

(malli.impl.util.SchemaError.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(malli.impl.util.SchemaError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"in","in",109346662,null),new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"message","message",1234475525,null)], null);
}));

(malli.impl.util.SchemaError.cljs$lang$type = true);

(malli.impl.util.SchemaError.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"malli.impl.util/SchemaError",null,(1),null));
}));

(malli.impl.util.SchemaError.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"malli.impl.util/SchemaError");
}));

/**
 * Positional factory function for malli.impl.util/SchemaError.
 */
malli.impl.util.__GT_SchemaError = (function malli$impl$util$__GT_SchemaError(path,in$,schema,value,type,message){
return (new malli.impl.util.SchemaError(path,in$,schema,value,type,message,null,null,null));
});

/**
 * Factory function for malli.impl.util/SchemaError, taking a map of keywords to field values.
 */
malli.impl.util.map__GT_SchemaError = (function malli$impl$util$map__GT_SchemaError(G__11137){
var extmap__4501__auto__ = (function (){var G__11147 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__11137,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"message","message",-406056002)], 0));
if(cljs.core.record_QMARK_(G__11137)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__11147);
} else {
return G__11147;
}
})();
return (new malli.impl.util.SchemaError(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__11137),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__11137),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__11137),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__11137),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__11137),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(G__11137),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

malli.impl.util._error = (function malli$impl$util$_error(var_args){
var G__11149 = arguments.length;
switch (G__11149) {
case 4:
return malli.impl.util._error.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return malli.impl.util._error.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.impl.util._error.cljs$core$IFn$_invoke$arity$4 = (function (path,in$,schema,value){
return malli.impl.util.__GT_SchemaError(path,in$,schema,value,null,null);
}));

(malli.impl.util._error.cljs$core$IFn$_invoke$arity$5 = (function (path,in$,schema,value,type){
return malli.impl.util.__GT_SchemaError(path,in$,schema,value,type,null);
}));

(malli.impl.util._error.cljs$lang$maxFixedArity = 5);


//# sourceMappingURL=malli.impl.util.js.map
