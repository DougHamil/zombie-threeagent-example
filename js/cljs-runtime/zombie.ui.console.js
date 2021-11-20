goog.provide('zombie.ui.console');
zombie.ui.console.commands = new cljs.core.PersistentArrayMap(null, 1, ["toggle-debug",(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(zombie.state.databases.ui,cljs.core.update,new cljs.core.Keyword(null,"show-debug?","show-debug?",-1274088080),cljs.core.not);
})], null);
zombie.ui.console.on_key = (function zombie$ui$console$on_key(state,evt){
var G__13416 = evt.charCode;
switch (G__13416) {
case (13):
var command = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var temp__5753__auto___13423 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(zombie.ui.console.commands,command);
if(cljs.core.truth_(temp__5753__auto___13423)){
var f_13424 = temp__5753__auto___13423;
(f_13424.cljs$core$IFn$_invoke$arity$0 ? f_13424.cljs$core$IFn$_invoke$arity$0() : f_13424.call(null));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update,new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([command], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"text","text",-1790561697),"");

break;
default:
return new cljs.core.Keyword(null,"else","else",-1508377146);

}
});
zombie.ui.console.output = (function zombie$ui$console$output(state){
var history = cljs.core.deref(reagent.core.cursor(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4611__auto__ = (function zombie$ui$console$output_$_iter__13417(s__13418){
return (new cljs.core.LazySeq(null,(function (){
var s__13418__$1 = s__13418;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__13418__$1);
if(temp__5753__auto__){
var s__13418__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13418__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__13418__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__13420 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__13419 = (0);
while(true){
if((i__13419 < size__4610__auto__)){
var i = cljs.core._nth(c__4609__auto__,i__13419);
cljs.core.chunk_append(b__13420,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),i], null));

var G__13425 = (i__13419 + (1));
i__13419 = G__13425;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13420),zombie$ui$console$output_$_iter__13417(cljs.core.chunk_rest(s__13418__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13420),null);
}
} else {
var i = cljs.core.first(s__13418__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),i], null),zombie$ui$console$output_$_iter__13417(cljs.core.rest(s__13418__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(history);
})()], null);
});
zombie.ui.console.render = (function zombie$ui$console$render(){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"",new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.PersistentVector.EMPTY], null));
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),"100vw",new cljs.core.Keyword(null,"height","height",1025178622),"50vh",new cljs.core.Keyword(null,"display","display",242065432),"grid",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace",new cljs.core.Keyword(null,"grid-template-rows","grid-template-rows",-372292629),"auto 20px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(0, 0, 0, 0.8)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [zombie.ui.console.output,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__13421_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"text","text",-1790561697),p1__13421_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zombie.ui.console.on_key,state),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace"], null)], null)], null)], null);
});
});

//# sourceMappingURL=zombie.ui.console.js.map
