goog.provide('threeagent.impl.virtual_scene');
if((typeof threeagent !== 'undefined') && (typeof threeagent.impl !== 'undefined') && (typeof threeagent.impl.virtual_scene !== 'undefined') && (typeof threeagent.impl.virtual_scene.non_component_keys !== 'undefined')){
} else {
threeagent.impl.virtual_scene.non_component_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),null,new cljs.core.Keyword(null,"scale","scale",-230427353),null,new cljs.core.Keyword(null,"position","position",-2011731912),null], null), null);
}
threeagent.impl.virtual_scene.print_tree = (function threeagent$impl$virtual_scene$print_tree(var_args){
var G__9596 = arguments.length;
switch (G__9596) {
case 1:
return threeagent.impl.virtual_scene.print_tree.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return threeagent.impl.virtual_scene.print_tree.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(threeagent.impl.virtual_scene.print_tree.cljs$core$IFn$_invoke$arity$1 = (function (node){
return threeagent.impl.virtual_scene.print_tree.cljs$core$IFn$_invoke$arity$2(node,"");
}));

(threeagent.impl.virtual_scene.print_tree.cljs$core$IFn$_invoke$arity$2 = (function (node,p){
var is_reactive = (((!((node.reactions == null)))) && (cljs.core.seq(node.reactions)));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p,"|-",node.key,["comp:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"component-key","component-key",1189239034).cljs$core$IFn$_invoke$arity$1(node.data))].join(''),["id:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node.data))].join(''),["dirty:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(node.dirty)].join(''),["reactive:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(is_reactive)].join('')], 0));

var seq__9597 = cljs.core.seq(cljs.core.es6_iterator_seq(node.children.values()));
var chunk__9598 = null;
var count__9599 = (0);
var i__9600 = (0);
while(true){
if((i__9600 < count__9599)){
var child = chunk__9598.cljs$core$IIndexed$_nth$arity$2(null,i__9600);
threeagent.impl.virtual_scene.print_tree.cljs$core$IFn$_invoke$arity$2(child,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p),"\t"].join(''));


var G__9706 = seq__9597;
var G__9707 = chunk__9598;
var G__9708 = count__9599;
var G__9709 = (i__9600 + (1));
seq__9597 = G__9706;
chunk__9598 = G__9707;
count__9599 = G__9708;
i__9600 = G__9709;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__9597);
if(temp__5753__auto__){
var seq__9597__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9597__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__9597__$1);
var G__9710 = cljs.core.chunk_rest(seq__9597__$1);
var G__9711 = c__4638__auto__;
var G__9712 = cljs.core.count(c__4638__auto__);
var G__9713 = (0);
seq__9597 = G__9710;
chunk__9598 = G__9711;
count__9599 = G__9712;
i__9600 = G__9713;
continue;
} else {
var child = cljs.core.first(seq__9597__$1);
threeagent.impl.virtual_scene.print_tree.cljs$core$IFn$_invoke$arity$2(child,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p),"\t"].join(''));


var G__9714 = cljs.core.next(seq__9597__$1);
var G__9715 = null;
var G__9716 = (0);
var G__9717 = (0);
seq__9597 = G__9714;
chunk__9598 = G__9715;
count__9599 = G__9716;
i__9600 = G__9717;
continue;
}
} else {
return null;
}
}
break;
}
}));

(threeagent.impl.virtual_scene.print_tree.cljs$lang$maxFixedArity = 2);

threeagent.impl.virtual_scene.node__GT_path = (function threeagent$impl$virtual_scene$node__GT_path(var_args){
var G__9602 = arguments.length;
switch (G__9602) {
case 1:
return threeagent.impl.virtual_scene.node__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return threeagent.impl.virtual_scene.node__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(threeagent.impl.virtual_scene.node__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (node){
return threeagent.impl.virtual_scene.node__GT_path.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,node);
}));

(threeagent.impl.virtual_scene.node__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (path,node){
while(true){
if(cljs.core.truth_(node)){
var G__9719 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,node.key);
var G__9720 = node.parent;
path = G__9719;
node = G__9720;
continue;
} else {
return cljs.core.reverse(path);
}
break;
}
}));

(threeagent.impl.virtual_scene.node__GT_path.cljs$lang$maxFixedArity = 2);

threeagent.impl.virtual_scene.get_key = (function threeagent$impl$virtual_scene$get_key(key,meta){
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$2(meta,key);
});

/**
* @constructor
*/
threeagent.impl.virtual_scene.RenderQueueEntry = (function (node,renderFn,forceReplace){
this.node = node;
this.renderFn = renderFn;
this.forceReplace = forceReplace;
});

(threeagent.impl.virtual_scene.RenderQueueEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"Node","Node",446032991,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"renderFn","renderFn",2125786427,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"js","js",-886355190,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"forceReplace","forceReplace",1215005148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"js","js",-886355190,null)], null))], null);
}));

(threeagent.impl.virtual_scene.RenderQueueEntry.cljs$lang$type = true);

(threeagent.impl.virtual_scene.RenderQueueEntry.cljs$lang$ctorStr = "threeagent.impl.virtual-scene/RenderQueueEntry");

(threeagent.impl.virtual_scene.RenderQueueEntry.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"threeagent.impl.virtual-scene/RenderQueueEntry");
}));

/**
 * Positional factory function for threeagent.impl.virtual-scene/RenderQueueEntry.
 */
threeagent.impl.virtual_scene.__GT_RenderQueueEntry = (function threeagent$impl$virtual_scene$__GT_RenderQueueEntry(node,renderFn,forceReplace){
return (new threeagent.impl.virtual_scene.RenderQueueEntry(node,renderFn,forceReplace));
});


/**
* @constructor
*/
threeagent.impl.virtual_scene.Node = (function (context,parent,depth,id,key,meta,data,dirty,render,reaction,children,portalPath){
this.context = context;
this.parent = parent;
this.depth = depth;
this.id = id;
this.key = key;
this.meta = meta;
this.data = data;
this.dirty = dirty;
this.render = render;
this.reaction = reaction;
this.children = children;
this.portalPath = portalPath;
});
(threeagent.impl.virtual_scene.Node.prototype.terminal_QMARK_ = (function (){
var self__ = this;
var _this = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),self__.children.size);
}));

(threeagent.impl.virtual_scene.Node.prototype.for_each_child = (function (f){
var self__ = this;
var _this = this;
var seq__9603 = cljs.core.seq(cljs.core.es6_iterator_seq(self__.children.values()));
var chunk__9604 = null;
var count__9605 = (0);
var i__9606 = (0);
while(true){
if((i__9606 < count__9605)){
var child = chunk__9604.cljs$core$IIndexed$_nth$arity$2(null,i__9606);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(child) : f.call(null,child));


var G__9721 = seq__9603;
var G__9722 = chunk__9604;
var G__9723 = count__9605;
var G__9724 = (i__9606 + (1));
seq__9603 = G__9721;
chunk__9604 = G__9722;
count__9605 = G__9723;
i__9606 = G__9724;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__9603);
if(temp__5753__auto__){
var seq__9603__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9603__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__9603__$1);
var G__9725 = cljs.core.chunk_rest(seq__9603__$1);
var G__9726 = c__4638__auto__;
var G__9727 = cljs.core.count(c__4638__auto__);
var G__9728 = (0);
seq__9603 = G__9725;
chunk__9604 = G__9726;
count__9605 = G__9727;
i__9606 = G__9728;
continue;
} else {
var child = cljs.core.first(seq__9603__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(child) : f.call(null,child));


var G__9729 = cljs.core.next(seq__9603__$1);
var G__9730 = null;
var G__9731 = (0);
var G__9732 = (0);
seq__9603 = G__9729;
chunk__9604 = G__9730;
count__9605 = G__9731;
i__9606 = G__9732;
continue;
}
} else {
return null;
}
}
break;
}
}));

(threeagent.impl.virtual_scene.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"context","context",810340414,null),cljs.core.with_meta(new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"Node","Node",446032991,null)], null)),new cljs.core.Symbol(null,"depth","depth",-885772129,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"dirty","dirty",-1924882488,null),new cljs.core.Symbol(null,"render","render",232498073,null),new cljs.core.Symbol(null,"reaction","reaction",2131401315,null),new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"portalPath","portalPath",-1494948879,null)], null);
}));

(threeagent.impl.virtual_scene.Node.cljs$lang$type = true);

(threeagent.impl.virtual_scene.Node.cljs$lang$ctorStr = "threeagent.impl.virtual-scene/Node");

(threeagent.impl.virtual_scene.Node.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"threeagent.impl.virtual-scene/Node");
}));

/**
 * Positional factory function for threeagent.impl.virtual-scene/Node.
 */
threeagent.impl.virtual_scene.__GT_Node = (function threeagent$impl$virtual_scene$__GT_Node(context,parent,depth,id,key,meta,data,dirty,render,reaction,children,portalPath){
return (new threeagent.impl.virtual_scene.Node(context,parent,depth,id,key,meta,data,dirty,render,reaction,children,portalPath));
});


/**
* @constructor
*/
threeagent.impl.virtual_scene.Scene = (function (root,renderQueue){
this.root = root;
this.renderQueue = renderQueue;
});
(threeagent.impl.virtual_scene.Scene.prototype.enqueueForRender = (function (node,render_fn,force_replace_QMARK_){
var self__ = this;
var _ = this;
(node.dirty = true);

return self__.renderQueue.enqueue(node.depth,(new threeagent.impl.virtual_scene.RenderQueueEntry(node,render_fn,force_replace_QMARK_)));
}));

(threeagent.impl.virtual_scene.Scene.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.Symbol(null,"renderQueue","renderQueue",-1811767425,null)], null);
}));

(threeagent.impl.virtual_scene.Scene.cljs$lang$type = true);

(threeagent.impl.virtual_scene.Scene.cljs$lang$ctorStr = "threeagent.impl.virtual-scene/Scene");

(threeagent.impl.virtual_scene.Scene.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"threeagent.impl.virtual-scene/Scene");
}));

/**
 * Positional factory function for threeagent.impl.virtual-scene/Scene.
 */
threeagent.impl.virtual_scene.__GT_Scene = (function threeagent$impl$virtual_scene$__GT_Scene(root,renderQueue){
return (new threeagent.impl.virtual_scene.Scene(root,renderQueue));
});

threeagent.impl.virtual_scene.get_in_node = (function threeagent$impl$virtual_scene$get_in_node(node,path){
while(true){
if(cljs.core.empty_QMARK_(path)){
return node;
} else {
var G__9733 = node.children.get(cljs.core.first(path));
var G__9734 = cljs.core.rest(path);
node = G__9733;
path = G__9734;
continue;
}
break;
}
});
threeagent.impl.virtual_scene.get_in_scene = (function threeagent$impl$virtual_scene$get_in_scene(scene,path){
return threeagent.impl.virtual_scene.get_in_node(scene.root,cljs.core.rest(path));
});
threeagent.impl.virtual_scene.on_react_BANG_ = (function threeagent$impl$virtual_scene$on_react_BANG_(render_fn,ctx){
var node = ctx.node;
var scene = ctx.scene;
return scene.enqueueForRender(node,render_fn,ctx.forceReplace);
});
threeagent.impl.virtual_scene.extract_comp_config = (function threeagent$impl$virtual_scene$extract_comp_config(config){
var c = cljs.core.transient$(config);
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__9607_SHARP_,p2__9608_SHARP_){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(p1__9607_SHARP_,p2__9608_SHARP_);
}),c,threeagent.impl.virtual_scene.non_component_keys));
});
threeagent.impl.virtual_scene.node_data = (function threeagent$impl$virtual_scene$node_data(comp_key,comp_config){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$2(comp_config,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null)),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$2(comp_config,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null)),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$2(comp_config,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,1.0,1.0], null)),new cljs.core.Keyword(null,"cast-shadow","cast-shadow",-446090219),new cljs.core.Keyword(null,"cast-shadow","cast-shadow",-446090219).cljs$core$IFn$_invoke$arity$2(comp_config,false),new cljs.core.Keyword(null,"receive-shadow","receive-shadow",-789712390),new cljs.core.Keyword(null,"receive-shadow","receive-shadow",-789712390).cljs$core$IFn$_invoke$arity$2(comp_config,false),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(comp_config),new cljs.core.Keyword(null,"component-key","component-key",1189239034),comp_key,new cljs.core.Keyword(null,"component-config","component-config",2000790546),threeagent.impl.virtual_scene.extract_comp_config(comp_config)], null);
});
if((typeof threeagent !== 'undefined') && (typeof threeagent.impl !== 'undefined') && (typeof threeagent.impl.virtual_scene !== 'undefined') && (typeof threeagent.impl.virtual_scene.__GT_node !== 'undefined')){
} else {
threeagent.impl.virtual_scene.__GT_node = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__9609 = cljs.core.get_global_hierarchy;
return (fexpr__9609.cljs$core$IFn$_invoke$arity$0 ? fexpr__9609.cljs$core$IFn$_invoke$arity$0() : fexpr__9609.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("threeagent.impl.virtual-scene","->node"),(function (_scene,_context,_parent,_key,p__9610){
var vec__9611 = p__9610;
var seq__9612 = cljs.core.seq(vec__9611);
var first__9613 = cljs.core.first(seq__9612);
var seq__9612__$1 = cljs.core.next(seq__9612);
var l = first__9613;
var r = seq__9612__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,">",">",-555517146),l)){
return new cljs.core.Keyword(null,"portal","portal",2002989957);
} else {
if((l instanceof cljs.core.Keyword)){
return new cljs.core.Keyword(null,"keyword","keyword",811389747);
} else {
if(cljs.core.fn_QMARK_(l)){
return new cljs.core.Keyword(null,"fn","fn",-1175266204);
} else {
if(cljs.core.map_QMARK_(l)){
return new cljs.core.Keyword(null,"context","context",-830191113);
} else {
if(cljs.core.sequential_QMARK_(l)){
return new cljs.core.Keyword(null,"seq","seq",-1817803783);
} else {
if((((l == null)) && ((r == null)))){
return new cljs.core.Keyword(null,"empty-list","empty-list",-1865196089);
} else {
return null;

}
}
}
}
}
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
threeagent.impl.virtual_scene.__GT_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_scene,_context,_parent,_key,form){
return console.error("Invalid object form:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(form));
}));
threeagent.impl.virtual_scene.__GT_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"empty-list","empty-list",-1865196089),(function (_scene,_context,_parent,_key,_form){
return null;
}));
threeagent.impl.virtual_scene.__GT_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"portal","portal",2002989957),(function (scene,context,parent,key,p__9614){
var vec__9615 = p__9614;
var seq__9616 = cljs.core.seq(vec__9615);
var first__9617 = cljs.core.first(seq__9616);
var seq__9616__$1 = cljs.core.next(seq__9616);
var _ = first__9617;
var first__9617__$1 = cljs.core.first(seq__9616__$1);
var seq__9616__$2 = cljs.core.next(seq__9616__$1);
var path = first__9617__$1;
var children = seq__9616__$2;
var form = vec__9615;
var depth = (cljs.core.truth_(parent)?(parent.depth + (1)):(0));
var children__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,children);
var children_map = (new Map());
var node = (new threeagent.impl.virtual_scene.Node(context,parent,depth,null,key,cljs.core.meta(form),null,false,null,null,children_map,path));
if((!(((typeof key === 'string') || (typeof key === 'number'))))){
throw ["^:key must be a string or number, found: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
} else {
}

var seq__9618_9735 = cljs.core.seq(medley.core.indexed.cljs$core$IFn$_invoke$arity$1(children__$1));
var chunk__9619_9736 = null;
var count__9620_9737 = (0);
var i__9621_9738 = (0);
while(true){
if((i__9621_9738 < count__9620_9737)){
var vec__9628_9739 = chunk__9619_9736.cljs$core$IIndexed$_nth$arity$2(null,i__9621_9738);
var idx_9740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9628_9739,(0),null);
var child_9741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9628_9739,(1),null);
var temp__5753__auto___9742 = threeagent.impl.virtual_scene.__GT_node.cljs$core$IFn$_invoke$arity$5(scene,context,node,idx_9740,child_9741);
if(cljs.core.truth_(temp__5753__auto___9742)){
var child_node_9743 = temp__5753__auto___9742;
children_map.set(child_node_9743.key,child_node_9743);
} else {
}


var G__9744 = seq__9618_9735;
var G__9745 = chunk__9619_9736;
var G__9746 = count__9620_9737;
var G__9747 = (i__9621_9738 + (1));
seq__9618_9735 = G__9744;
chunk__9619_9736 = G__9745;
count__9620_9737 = G__9746;
i__9621_9738 = G__9747;
continue;
} else {
var temp__5753__auto___9748 = cljs.core.seq(seq__9618_9735);
if(temp__5753__auto___9748){
var seq__9618_9749__$1 = temp__5753__auto___9748;
if(cljs.core.chunked_seq_QMARK_(seq__9618_9749__$1)){
var c__4638__auto___9750 = cljs.core.chunk_first(seq__9618_9749__$1);
var G__9751 = cljs.core.chunk_rest(seq__9618_9749__$1);
var G__9752 = c__4638__auto___9750;
var G__9753 = cljs.core.count(c__4638__auto___9750);
var G__9754 = (0);
seq__9618_9735 = G__9751;
chunk__9619_9736 = G__9752;
count__9620_9737 = G__9753;
i__9621_9738 = G__9754;
continue;
} else {
var vec__9631_9755 = cljs.core.first(seq__9618_9749__$1);
var idx_9756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9631_9755,(0),null);
var child_9757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9631_9755,(1),null);
var temp__5753__auto___9758__$1 = threeagent.impl.virtual_scene.__GT_node.cljs$core$IFn$_invoke$arity$5(scene,context,node,idx_9756,child_9757);
if(cljs.core.truth_(temp__5753__auto___9758__$1)){
var child_node_9759 = temp__5753__auto___9758__$1;
children_map.set(child_node_9759.key,child_node_9759);
} else {
}


var G__9760 = cljs.core.next(seq__9618_9749__$1);
var G__9761 = null;
var G__9762 = (0);
var G__9763 = (0);
seq__9618_9735 = G__9760;
chunk__9619_9736 = G__9761;
count__9620_9737 = G__9762;
i__9621_9738 = G__9763;
continue;
}
} else {
}
}
break;
}

return node;
}));
threeagent.impl.virtual_scene.__GT_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"context","context",-830191113),(function (scene,context,parent,key,p__9634){
var vec__9635 = p__9634;
var seq__9636 = cljs.core.seq(vec__9635);
var first__9637 = cljs.core.first(seq__9636);
var seq__9636__$1 = cljs.core.next(seq__9636);
var subcontext = first__9637;
var rest = seq__9636__$1;
return threeagent.impl.virtual_scene.__GT_node.cljs$core$IFn$_invoke$arity$5(scene,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([context,subcontext], 0)),parent,key,rest);
}));
threeagent.impl.virtual_scene.__GT_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"seq","seq",-1817803783),(function (scene,context,parent,key,form){
return threeagent.impl.virtual_scene.__GT_node.cljs$core$IFn$_invoke$arity$5(scene,context,parent,key,cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949)], null),form),cljs.core.meta(form)));
}));
threeagent.impl.virtual_scene.__GT_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"keyword","keyword",811389747),(function (scene,context,parent,key,form){
var vec__9638 = form;
var seq__9639 = cljs.core.seq(vec__9638);
var first__9640 = cljs.core.first(seq__9639);
var seq__9639__$1 = cljs.core.next(seq__9639);
var comp_key = first__9640;
var rs = seq__9639__$1;
var first_child = cljs.core.first(rs);
var metadata = cljs.core.meta(form);
var key__$1 = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(metadata);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return key;
}
})();
var comp_config = ((cljs.core.map_QMARK_(first_child))?first_child:cljs.core.PersistentArrayMap.EMPTY);
var children = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,((cljs.core.map_QMARK_(first_child))?cljs.core.rest(rs):rs));
var children_map = (new Map());
var data = threeagent.impl.virtual_scene.node_data(comp_key,comp_config);
var depth = (cljs.core.truth_(parent)?(parent.depth + (1)):(0));
var node = (new threeagent.impl.virtual_scene.Node(context,parent,depth,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(comp_config),key__$1,metadata,data,false,null,null,children_map,null));
if((!(((typeof key__$1 === 'string') || (typeof key__$1 === 'number'))))){
throw ["^:key must be a string or number, found: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key__$1)].join('');
} else {
}

var seq__9641_9764 = cljs.core.seq(medley.core.indexed.cljs$core$IFn$_invoke$arity$1(children));
var chunk__9642_9765 = null;
var count__9643_9766 = (0);
var i__9644_9767 = (0);
while(true){
if((i__9644_9767 < count__9643_9766)){
var vec__9651_9768 = chunk__9642_9765.cljs$core$IIndexed$_nth$arity$2(null,i__9644_9767);
var idx_9769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9651_9768,(0),null);
var child_9770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9651_9768,(1),null);
var temp__5753__auto___9771 = threeagent.impl.virtual_scene.__GT_node.cljs$core$IFn$_invoke$arity$5(scene,context,node,idx_9769,child_9770);
if(cljs.core.truth_(temp__5753__auto___9771)){
var child_node_9772 = temp__5753__auto___9771;
children_map.set(child_node_9772.key,child_node_9772);
} else {
}


var G__9773 = seq__9641_9764;
var G__9774 = chunk__9642_9765;
var G__9775 = count__9643_9766;
var G__9776 = (i__9644_9767 + (1));
seq__9641_9764 = G__9773;
chunk__9642_9765 = G__9774;
count__9643_9766 = G__9775;
i__9644_9767 = G__9776;
continue;
} else {
var temp__5753__auto___9777 = cljs.core.seq(seq__9641_9764);
if(temp__5753__auto___9777){
var seq__9641_9778__$1 = temp__5753__auto___9777;
if(cljs.core.chunked_seq_QMARK_(seq__9641_9778__$1)){
var c__4638__auto___9779 = cljs.core.chunk_first(seq__9641_9778__$1);
var G__9780 = cljs.core.chunk_rest(seq__9641_9778__$1);
var G__9781 = c__4638__auto___9779;
var G__9782 = cljs.core.count(c__4638__auto___9779);
var G__9783 = (0);
seq__9641_9764 = G__9780;
chunk__9642_9765 = G__9781;
count__9643_9766 = G__9782;
i__9644_9767 = G__9783;
continue;
} else {
var vec__9654_9784 = cljs.core.first(seq__9641_9778__$1);
var idx_9785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9654_9784,(0),null);
var child_9786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9654_9784,(1),null);
var temp__5753__auto___9787__$1 = threeagent.impl.virtual_scene.__GT_node.cljs$core$IFn$_invoke$arity$5(scene,context,node,idx_9785,child_9786);
if(cljs.core.truth_(temp__5753__auto___9787__$1)){
var child_node_9788 = temp__5753__auto___9787__$1;
children_map.set(child_node_9788.key,child_node_9788);
} else {
}


var G__9789 = cljs.core.next(seq__9641_9778__$1);
var G__9790 = null;
var G__9791 = (0);
var G__9792 = (0);
seq__9641_9764 = G__9789;
chunk__9642_9765 = G__9790;
count__9643_9766 = G__9791;
i__9644_9767 = G__9792;
continue;
}
} else {
}
}
break;
}

return node;
}));
threeagent.impl.virtual_scene.fn__GT_render_fn = (function threeagent$impl$virtual_scene$fn__GT_render_fn(original_meta,f){
return (function() { 
var G__9793__delegate = function (args){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args)], null),original_meta);
};
var G__9793 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9794__i = 0, G__9794__a = new Array(arguments.length -  0);
while (G__9794__i < G__9794__a.length) {G__9794__a[G__9794__i] = arguments[G__9794__i + 0]; ++G__9794__i;}
  args = new cljs.core.IndexedSeq(G__9794__a,0,null);
} 
return G__9793__delegate.call(this,args);};
G__9793.cljs$lang$maxFixedArity = 0;
G__9793.cljs$lang$applyTo = (function (arglist__9795){
var args = cljs.core.seq(arglist__9795);
return G__9793__delegate(args);
});
G__9793.cljs$core$IFn$_invoke$arity$variadic = G__9793__delegate;
return G__9793;
})()
;
});
threeagent.impl.virtual_scene.__GT_node.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (scene,context,parent,key,form){
var key__$1 = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return key;
}
})();
var vec__9657 = form;
var seq__9658 = cljs.core.seq(vec__9657);
var first__9659 = cljs.core.first(seq__9658);
var seq__9658__$1 = cljs.core.next(seq__9658);
var f = first__9659;
var args = seq__9658__$1;
var original_meta = cljs.core.meta(form);
var outer_reaction_ctx = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"scene","scene",1523800415),null,new cljs.core.Keyword(null,"node","node",581201198),null,new cljs.core.Keyword(null,"reaction","reaction",490869788),null,new cljs.core.Keyword(null,"forceReplace","forceReplace",-425526379),false], null));
var inner_reaction_ctx = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"scene","scene",1523800415),null,new cljs.core.Keyword(null,"node","node",581201198),null,new cljs.core.Keyword(null,"reaction","reaction",490869788),null], null));
var outer_render_fn = threeagent.impl.virtual_scene.fn__GT_render_fn(original_meta,f);
var outer_result = reagent.ratom.run_in_reaction((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}),outer_reaction_ctx,"reaction",cljs.core.partial.cljs$core$IFn$_invoke$arity$2(threeagent.impl.virtual_scene.on_react_BANG_,outer_render_fn),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-cache","no-cache",1588056370),true], null));
var inner_render_fn = ((cljs.core.fn_QMARK_(outer_result))?threeagent.impl.virtual_scene.fn__GT_render_fn(original_meta,outer_result):null);
var inner_result = ((cljs.core.fn_QMARK_(outer_result))?reagent.ratom.run_in_reaction((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(outer_result,args);
}),inner_reaction_ctx,"reaction",cljs.core.partial.cljs$core$IFn$_invoke$arity$2(threeagent.impl.virtual_scene.on_react_BANG_,inner_render_fn),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-cache","no-cache",1588056370),true], null)):null);
var default_render_fn = (function (){var or__4212__auto__ = inner_render_fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return outer_render_fn;
}
})();
var result = (function (){var or__4212__auto__ = inner_result;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return outer_result;
}
})();
var node = threeagent.impl.virtual_scene.__GT_node.cljs$core$IFn$_invoke$arity$5(scene,context,parent,key__$1,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),result], null),original_meta));
if(cljs.core.truth_(inner_render_fn)){
(outer_reaction_ctx.forceReplace = true);
} else {
}

(node.originalFn = f);

(node.defaultRenderFn = default_render_fn);

(node.form = form);

(node.lastForm = form);

(node.reactions = []);

var temp__5753__auto___9796 = outer_reaction_ctx.reaction;
if(cljs.core.truth_(temp__5753__auto___9796)){
var reaction_9797 = temp__5753__auto___9796;
(outer_reaction_ctx.scene = scene);

(outer_reaction_ctx.node = node);

node.reactions.push(reaction_9797);
} else {
}

var temp__5753__auto___9798 = inner_reaction_ctx.reaction;
if(cljs.core.truth_(temp__5753__auto___9798)){
var reaction_9799 = temp__5753__auto___9798;
(inner_reaction_ctx.scene = scene);

(inner_reaction_ctx.node = node);

node.reactions.push(reaction_9799);
} else {
}

return node;
}));
if((typeof threeagent !== 'undefined') && (typeof threeagent.impl !== 'undefined') && (typeof threeagent.impl.virtual_scene !== 'undefined') && (typeof threeagent.impl.virtual_scene.__GT_node_shallow !== 'undefined')){
} else {
threeagent.impl.virtual_scene.__GT_node_shallow = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__9660 = cljs.core.get_global_hierarchy;
return (fexpr__9660.cljs$core$IFn$_invoke$arity$0 ? fexpr__9660.cljs$core$IFn$_invoke$arity$0() : fexpr__9660.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("threeagent.impl.virtual-scene","->node-shallow"),(function (_key,_context,p__9661){
var vec__9662 = p__9661;
var seq__9663 = cljs.core.seq(vec__9662);
var first__9664 = cljs.core.first(seq__9663);
var seq__9663__$1 = cljs.core.next(seq__9663);
var l = first__9664;
var r = seq__9663__$1;
if(cljs.core.fn_QMARK_(l)){
return new cljs.core.Keyword(null,"fn","fn",-1175266204);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,">",">",-555517146),l)){
return new cljs.core.Keyword(null,"portal","portal",2002989957);
} else {
if((l instanceof cljs.core.Keyword)){
return new cljs.core.Keyword(null,"keyword","keyword",811389747);
} else {
if(cljs.core.map_QMARK_(l)){
return new cljs.core.Keyword(null,"context","context",-830191113);
} else {
if(cljs.core.sequential_QMARK_(l)){
return new cljs.core.Keyword(null,"seq","seq",-1817803783);
} else {
if((((l == null)) && ((r == null)))){
return new cljs.core.Keyword(null,"empty-list","empty-list",-1865196089);
} else {
return null;

}
}
}
}
}
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
threeagent.impl.virtual_scene.__GT_node_shallow.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"empty-list","empty-list",-1865196089),(function (_key,_context,_form){
return null;
}));
threeagent.impl.virtual_scene.__GT_node_shallow.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"context","context",-830191113),(function (key,context,p__9665){
var vec__9666 = p__9665;
var seq__9667 = cljs.core.seq(vec__9666);
var first__9668 = cljs.core.first(seq__9667);
var seq__9667__$1 = cljs.core.next(seq__9667);
var subcontext = first__9668;
var rest = seq__9667__$1;
return threeagent.impl.virtual_scene.__GT_node_shallow.cljs$core$IFn$_invoke$arity$3(key,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([context,subcontext], 0)),rest);
}));
threeagent.impl.virtual_scene.__GT_node_shallow.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (key,context,form){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"context","context",-830191113),context,new cljs.core.Keyword(null,"data","data",-232669377),threeagent.impl.virtual_scene.node_data(new cljs.core.Keyword(null,"object","object",1474613949),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"children-keys","children-keys",-1531120807),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),form], null)], null)], null);
}));
threeagent.impl.virtual_scene.__GT_node_shallow.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"seq","seq",-1817803783),(function (key,context,form){
if(cljs.core.empty_QMARK_(form)){
return null;
} else {
var m = cljs.core.meta(form);
return threeagent.impl.virtual_scene.__GT_node_shallow.cljs$core$IFn$_invoke$arity$3(threeagent.impl.virtual_scene.get_key(key,m),context,cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949)], null),form),m));
}
}));
threeagent.impl.virtual_scene.valid_child_QMARK_ = (function threeagent$impl$virtual_scene$valid_child_QMARK_(child){
return (((!((child == null)))) && (cljs.core.seq(child)));
});
threeagent.impl.virtual_scene.__GT_node_shallow.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"portal","portal",2002989957),(function (key,context,p__9671){
var vec__9672 = p__9671;
var seq__9673 = cljs.core.seq(vec__9672);
var first__9674 = cljs.core.first(seq__9673);
var seq__9673__$1 = cljs.core.next(seq__9673);
var _ = first__9674;
var first__9674__$1 = cljs.core.first(seq__9673__$1);
var seq__9673__$2 = cljs.core.next(seq__9673__$1);
var path = first__9674__$1;
var children = seq__9673__$2;
var form = vec__9672;
var children__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(threeagent.impl.virtual_scene.valid_child_QMARK_,children);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"context","context",-830191113),context,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"portal-path","portal-path",1722169330),path,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"children-keys","children-keys",-1531120807),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__9670_SHARP_,p2__9669_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var or__4212__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p2__9669_SHARP_));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return p1__9670_SHARP_;
}
})(),p2__9669_SHARP_],null));
}),children__$1)], null);
}));
threeagent.impl.virtual_scene.__GT_node_shallow.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"keyword","keyword",811389747),(function (key,context,form){
var vec__9677 = form;
var seq__9678 = cljs.core.seq(vec__9677);
var first__9679 = cljs.core.first(seq__9678);
var seq__9678__$1 = cljs.core.next(seq__9678);
var comp_key = first__9679;
var rs = seq__9678__$1;
var first_child = cljs.core.first(rs);
var comp_config = ((cljs.core.map_QMARK_(first_child))?first_child:cljs.core.PersistentArrayMap.EMPTY);
var children = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(threeagent.impl.virtual_scene.valid_child_QMARK_,((cljs.core.map_QMARK_(first_child))?cljs.core.rest(rs):rs));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"context","context",-830191113),context,new cljs.core.Keyword(null,"data","data",-232669377),threeagent.impl.virtual_scene.node_data(comp_key,comp_config),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"children-keys","children-keys",-1531120807),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__9676_SHARP_,p2__9675_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var or__4212__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p2__9675_SHARP_));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return p1__9676_SHARP_;
}
})(),p2__9675_SHARP_],null));
}),children)], null);
}));
threeagent.impl.virtual_scene.dispose_node_BANG_ = (function threeagent$impl$virtual_scene$dispose_node_BANG_(node){
(node.disposed = true);

var temp__5753__auto___9800 = node.reactions;
if(cljs.core.truth_(temp__5753__auto___9800)){
var reactions_9801 = temp__5753__auto___9800;
var seq__9680_9802 = cljs.core.seq(reactions_9801);
var chunk__9681_9803 = null;
var count__9682_9804 = (0);
var i__9683_9805 = (0);
while(true){
if((i__9683_9805 < count__9682_9804)){
var r_9806 = chunk__9681_9803.cljs$core$IIndexed$_nth$arity$2(null,i__9683_9805);
reagent.ratom.dispose_BANG_(r_9806);


var G__9807 = seq__9680_9802;
var G__9808 = chunk__9681_9803;
var G__9809 = count__9682_9804;
var G__9810 = (i__9683_9805 + (1));
seq__9680_9802 = G__9807;
chunk__9681_9803 = G__9808;
count__9682_9804 = G__9809;
i__9683_9805 = G__9810;
continue;
} else {
var temp__5753__auto___9811__$1 = cljs.core.seq(seq__9680_9802);
if(temp__5753__auto___9811__$1){
var seq__9680_9812__$1 = temp__5753__auto___9811__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9680_9812__$1)){
var c__4638__auto___9813 = cljs.core.chunk_first(seq__9680_9812__$1);
var G__9814 = cljs.core.chunk_rest(seq__9680_9812__$1);
var G__9815 = c__4638__auto___9813;
var G__9816 = cljs.core.count(c__4638__auto___9813);
var G__9817 = (0);
seq__9680_9802 = G__9814;
chunk__9681_9803 = G__9815;
count__9682_9804 = G__9816;
i__9683_9805 = G__9817;
continue;
} else {
var r_9818 = cljs.core.first(seq__9680_9812__$1);
reagent.ratom.dispose_BANG_(r_9818);


var G__9819 = cljs.core.next(seq__9680_9812__$1);
var G__9820 = null;
var G__9821 = (0);
var G__9822 = (0);
seq__9680_9802 = G__9819;
chunk__9681_9803 = G__9820;
count__9682_9804 = G__9821;
i__9683_9805 = G__9822;
continue;
}
} else {
}
}
break;
}
} else {
}

return node.for_each_child(threeagent.impl.virtual_scene.dispose_node_BANG_);
});
threeagent.impl.virtual_scene.add_node_BANG_ = (function threeagent$impl$virtual_scene$add_node_BANG_(scene,context,parent_node,key,form,changelog){
var temp__5753__auto__ = threeagent.impl.virtual_scene.__GT_node.cljs$core$IFn$_invoke$arity$5(scene,context,parent_node,key,form);
if(cljs.core.truth_(temp__5753__auto__)){
var node = temp__5753__auto__;
changelog.push(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,new cljs.core.Keyword(null,"add","add",235287739),null,node.data], null));

return node;
} else {
return null;
}
});
threeagent.impl.virtual_scene.remove_node_BANG_ = (function threeagent$impl$virtual_scene$remove_node_BANG_(node,changelog){
changelog.push(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,new cljs.core.Keyword(null,"remove","remove",-131428414),node.data,null], null));

(node.dirty = false);

return threeagent.impl.virtual_scene.dispose_node_BANG_(node);
});
threeagent.impl.virtual_scene.replace_node_BANG_ = (function threeagent$impl$virtual_scene$replace_node_BANG_(scene,node,new_form,changelog){
var parent = node.parent;
var context = (cljs.core.truth_(parent)?parent.context:cljs.core.PersistentArrayMap.EMPTY);
var key = node.key;
threeagent.impl.virtual_scene.remove_node_BANG_(node,changelog);

var new_node = threeagent.impl.virtual_scene.add_node_BANG_(scene,context,parent,key,new_form,changelog);
return parent.children.set(key,new_node);
});
threeagent.impl.virtual_scene.diff_fn_QMARK_ = (function threeagent$impl$virtual_scene$diff_fn_QMARK_(node,new_form){
var original_fn = node.originalFn;
return (((!((original_fn == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(original_fn,cljs.core.first(new_form))));
});
threeagent.impl.virtual_scene.same_args_QMARK_ = (function threeagent$impl$virtual_scene$same_args_QMARK_(node,new_form){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node.lastForm,new_form);
});
threeagent.impl.virtual_scene.update_child_node_BANG_ = (function threeagent$impl$virtual_scene$update_child_node_BANG_(scene,node,new_form,changelog){
if(threeagent.impl.virtual_scene.diff_fn_QMARK_(node,new_form)){
return threeagent.impl.virtual_scene.replace_node_BANG_(scene,node,new_form,changelog);
} else {
var render_fn = node.defaultRenderFn;
return (threeagent.impl.virtual_scene.update_node_BANG_.cljs$core$IFn$_invoke$arity$6 ? threeagent.impl.virtual_scene.update_node_BANG_.cljs$core$IFn$_invoke$arity$6(scene,node,new_form,render_fn,changelog,false) : threeagent.impl.virtual_scene.update_node_BANG_.call(null,scene,node,new_form,render_fn,changelog,false));
}
});
threeagent.impl.virtual_scene.update_node_BANG_ = (function threeagent$impl$virtual_scene$update_node_BANG_(scene,node,new_form,render_fn,changelog,force_rerender_QMARK_){
if(cljs.core.truth_((function (){var or__4212__auto__ = force_rerender_QMARK_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (!(threeagent.impl.virtual_scene.same_args_QMARK_(node,new_form)));
}
})())){
var key = node.key;
var children = node.children;
var parent = node.parent;
var old_data = node.data;
var old_context = node.context;
var old_portal_path = node.portalPath;
var parent_context = (cljs.core.truth_(parent)?parent.context:cljs.core.PersistentArrayMap.EMPTY);
var current_keys = cljs.core.set(cljs.core.es6_iterator_seq(children.keys()));
var rendered_form = (cljs.core.truth_(render_fn)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_fn,cljs.core.rest(new_form)):new_form);
var shallow_node = threeagent.impl.virtual_scene.__GT_node_shallow.cljs$core$IFn$_invoke$arity$3(key,parent_context,rendered_form);
var map__9684 = shallow_node;
var map__9684__$1 = cljs.core.__destructure_map(map__9684);
var new_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9684__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var children_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9684__$1,new cljs.core.Keyword(null,"children-keys","children-keys",-1531120807));
var new_portal_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9684__$1,new cljs.core.Keyword(null,"portal-path","portal-path",1722169330));
var new_context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9684__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var new_keys = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,children_keys));
var dropped_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(current_keys,new_keys);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_context,old_context)){
return threeagent.impl.virtual_scene.replace_node_BANG_(scene,node,new_form,changelog);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_portal_path,old_portal_path)){
return threeagent.impl.virtual_scene.replace_node_BANG_(scene,node,new_form,changelog);
} else {
(node.data = new_data);

(node.meta = cljs.core.meta(new_form));

(node.lastForm = new_form);

changelog.push(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,new cljs.core.Keyword(null,"update","update",1045576396),old_data,new_data], null));

var seq__9685_9823 = cljs.core.seq(dropped_keys);
var chunk__9686_9824 = null;
var count__9687_9825 = (0);
var i__9688_9826 = (0);
while(true){
if((i__9688_9826 < count__9687_9825)){
var child_key_9827 = chunk__9686_9824.cljs$core$IIndexed$_nth$arity$2(null,i__9688_9826);
var child_node_9828 = children.get(child_key_9827);
threeagent.impl.virtual_scene.remove_node_BANG_(child_node_9828,changelog);

children.delete(child_key_9827);


var G__9829 = seq__9685_9823;
var G__9830 = chunk__9686_9824;
var G__9831 = count__9687_9825;
var G__9832 = (i__9688_9826 + (1));
seq__9685_9823 = G__9829;
chunk__9686_9824 = G__9830;
count__9687_9825 = G__9831;
i__9688_9826 = G__9832;
continue;
} else {
var temp__5753__auto___9833 = cljs.core.seq(seq__9685_9823);
if(temp__5753__auto___9833){
var seq__9685_9834__$1 = temp__5753__auto___9833;
if(cljs.core.chunked_seq_QMARK_(seq__9685_9834__$1)){
var c__4638__auto___9835 = cljs.core.chunk_first(seq__9685_9834__$1);
var G__9836 = cljs.core.chunk_rest(seq__9685_9834__$1);
var G__9837 = c__4638__auto___9835;
var G__9838 = cljs.core.count(c__4638__auto___9835);
var G__9839 = (0);
seq__9685_9823 = G__9836;
chunk__9686_9824 = G__9837;
count__9687_9825 = G__9838;
i__9688_9826 = G__9839;
continue;
} else {
var child_key_9840 = cljs.core.first(seq__9685_9834__$1);
var child_node_9841 = children.get(child_key_9840);
threeagent.impl.virtual_scene.remove_node_BANG_(child_node_9841,changelog);

children.delete(child_key_9840);


var G__9842 = cljs.core.next(seq__9685_9834__$1);
var G__9843 = null;
var G__9844 = (0);
var G__9845 = (0);
seq__9685_9823 = G__9842;
chunk__9686_9824 = G__9843;
count__9687_9825 = G__9844;
i__9688_9826 = G__9845;
continue;
}
} else {
}
}
break;
}

var seq__9689 = cljs.core.seq(new cljs.core.Keyword(null,"children-keys","children-keys",-1531120807).cljs$core$IFn$_invoke$arity$1(shallow_node));
var chunk__9690 = null;
var count__9691 = (0);
var i__9692 = (0);
while(true){
if((i__9692 < count__9691)){
var vec__9699 = chunk__9690.cljs$core$IIndexed$_nth$arity$2(null,i__9692);
var child_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9699,(0),null);
var child_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9699,(1),null);
var temp__5751__auto___9846 = children.get(child_key);
if(cljs.core.truth_(temp__5751__auto___9846)){
var child_9847 = temp__5751__auto___9846;
threeagent.impl.virtual_scene.update_child_node_BANG_(scene,child_9847,child_form,changelog);
} else {
var temp__5753__auto___9848 = threeagent.impl.virtual_scene.add_node_BANG_(scene,old_context,node,child_key,child_form,changelog);
if(cljs.core.truth_(temp__5753__auto___9848)){
var child_node_9849 = temp__5753__auto___9848;
children.set(child_key,child_node_9849);
} else {
}
}


var G__9850 = seq__9689;
var G__9851 = chunk__9690;
var G__9852 = count__9691;
var G__9853 = (i__9692 + (1));
seq__9689 = G__9850;
chunk__9690 = G__9851;
count__9691 = G__9852;
i__9692 = G__9853;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__9689);
if(temp__5753__auto__){
var seq__9689__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9689__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__9689__$1);
var G__9854 = cljs.core.chunk_rest(seq__9689__$1);
var G__9855 = c__4638__auto__;
var G__9856 = cljs.core.count(c__4638__auto__);
var G__9857 = (0);
seq__9689 = G__9854;
chunk__9690 = G__9855;
count__9691 = G__9856;
i__9692 = G__9857;
continue;
} else {
var vec__9702 = cljs.core.first(seq__9689__$1);
var child_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9702,(0),null);
var child_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9702,(1),null);
var temp__5751__auto___9858 = children.get(child_key);
if(cljs.core.truth_(temp__5751__auto___9858)){
var child_9859 = temp__5751__auto___9858;
threeagent.impl.virtual_scene.update_child_node_BANG_(scene,child_9859,child_form,changelog);
} else {
var temp__5753__auto___9860__$1 = threeagent.impl.virtual_scene.add_node_BANG_(scene,old_context,node,child_key,child_form,changelog);
if(cljs.core.truth_(temp__5753__auto___9860__$1)){
var child_node_9861 = temp__5753__auto___9860__$1;
children.set(child_key,child_node_9861);
} else {
}
}


var G__9862 = cljs.core.next(seq__9689__$1);
var G__9863 = null;
var G__9864 = (0);
var G__9865 = (0);
seq__9689 = G__9862;
chunk__9690 = G__9863;
count__9691 = G__9864;
i__9692 = G__9865;
continue;
}
} else {
return null;
}
}
break;
}

}
}
} else {
return null;
}
});
threeagent.impl.virtual_scene.render_node_BANG_ = (function threeagent$impl$virtual_scene$render_node_BANG_(scene,node,render_fn,force_replace_QMARK_,changelog){
var new_form = node.form;
if(cljs.core.truth_((function (){var or__4212__auto__ = force_replace_QMARK_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return threeagent.impl.virtual_scene.diff_fn_QMARK_(node,new_form);
}
})())){
(node.dirty = false);

return threeagent.impl.virtual_scene.replace_node_BANG_(scene,node,new_form,changelog);
} else {
(node.dirty = false);

return threeagent.impl.virtual_scene.update_node_BANG_(scene,node,new_form,render_fn,changelog,true);
}
});
threeagent.impl.virtual_scene.render_BANG_ = (function threeagent$impl$virtual_scene$render_BANG_(scene,changelog){
reagent.core.flush();

var queue = scene.renderQueue;
var entry = queue.dequeue();
while(true){
if(cljs.core.truth_(entry)){
var temp__5753__auto__ = entry.node;
if(cljs.core.truth_(temp__5753__auto__)){
var node = temp__5753__auto__;
if(cljs.core.truth_(node.disposed)){
} else {
threeagent.impl.virtual_scene.render_node_BANG_(scene,node,entry.renderFn,entry.forceReplace,changelog);
}

var G__9866 = queue.dequeue();
entry = G__9866;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
threeagent.impl.virtual_scene.destroy_BANG_ = (function threeagent$impl$virtual_scene$destroy_BANG_(scene){
return threeagent.impl.virtual_scene.dispose_node_BANG_(scene.root);
});
threeagent.impl.virtual_scene.create = (function threeagent$impl$virtual_scene$create(root_fn){
var scene = (new threeagent.impl.virtual_scene.Scene(null,(new goog.structs.PriorityQueue())));
var root_node = threeagent.impl.virtual_scene.__GT_node.cljs$core$IFn$_invoke$arity$5(scene,cljs.core.PersistentArrayMap.EMPTY,null,(0),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [root_fn], null));
(scene.root = root_node);

return scene;
});

//# sourceMappingURL=threeagent.impl.virtual_scene.js.map
