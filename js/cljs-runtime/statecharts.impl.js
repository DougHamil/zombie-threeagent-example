goog.provide('statecharts.impl');
statecharts.impl.canon_one_transition = (function statecharts$impl$canon_one_transition(x){
if(cljs.core.map_QMARK_(x)){
return x;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),x], null);
}
});
statecharts.impl.canon_transitions = (function statecharts$impl$canon_transitions(x){
if(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.vector_QMARK_(x);
if(and__4210__auto__){
return cljs.core.some(cljs.core.map_QMARK_,x);
} else {
return and__4210__auto__;
}
})())){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(statecharts.impl.canon_one_transition,x);
} else {
if(cljs.core.map_QMARK_(x)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),x], null)], null);

}
}
});
statecharts.impl.canon_actions = (function statecharts$impl$canon_actions(x){
if(cljs.core.vector_QMARK_(x)){
return x;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
});
statecharts.impl.canon_event = (function statecharts$impl$canon_event(x){
if(cljs.core.map_QMARK_(x)){
return x;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),x], null);
}
});
statecharts.impl.T_Actions = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("decode","fsm","decode/fsm",-401998012),statecharts.impl.canon_actions], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.ifn_QMARK_], null)], null);
/**
 * See `resolve-target` for the synatx of target definition.
 */
statecharts.impl.T_Target = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.keyword_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.core.keyword_QMARK_], null)], null);
statecharts.impl.T_Transition = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("decode","fsm","decode/fsm",-401998012),statecharts.impl.canon_transitions], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"closed","closed",-919675359),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),statecharts.impl.T_Target], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"guard","guard",-873147811),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.ifn_QMARK_], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),statecharts.impl.T_Actions], null)], null)], null);
statecharts.impl.T_Entry = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entry","entry",505168823),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),statecharts.impl.T_Actions], null);
statecharts.impl.T_Exit = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exit","exit",351849638),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),statecharts.impl.T_Actions], null);
statecharts.impl.T_DelayExpression = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.int_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.ifn_QMARK_], null)], null);
/**
 * Generated internal event for delayed transitions.
 */
statecharts.impl.T_DelayedEvent = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),cljs.core.keyword_QMARK_,statecharts.impl.T_Target,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.int_QMARK_,new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null);
statecharts.impl.T_Event = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.keyword_QMARK_,statecharts.impl.T_DelayedEvent], null);
statecharts.impl.T_Transitions = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),statecharts.impl.T_Event,statecharts.impl.T_Transition], null)], null);
statecharts.impl.T_Initial = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),statecharts.impl.T_Target], null);
statecharts.impl.decode_delayed_map = (function statecharts$impl$decode_delayed_map(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__12602){
var vec__12603 = p__12602;
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12603,(0),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12603,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12601_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12601_SHARP_,new cljs.core.Keyword(null,"delay","delay",-574225219),ms);
}),statecharts.impl.canon_transitions(target));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0)));
});
statecharts.impl.decode_delayed_transitions = (function statecharts$impl$decode_delayed_transitions(x){
if(cljs.core.map_QMARK_(x)){
return statecharts.impl.decode_delayed_map(x);
} else {
return x;
}
});
statecharts.impl.T_DelayedTransition = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"closed","closed",-919675359),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delay","delay",-574225219),statecharts.impl.T_DelayExpression], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),statecharts.impl.T_Target], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"guard","guard",-873147811),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.ifn_QMARK_], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),statecharts.impl.T_Actions], null)], null);
statecharts.impl.T_DelayedTransitions = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("decode","fsm","decode/fsm",-401998012),statecharts.impl.decode_delayed_transitions], null),statecharts.impl.T_DelayedTransition], null);
statecharts.impl.T_After = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),statecharts.impl.T_DelayedTransitions], null);
statecharts.impl.T_EventlessTransitions = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"always","always",-1772028770),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),statecharts.impl.T_Transition], null);
statecharts.impl.insert_eventless_transitions = (function statecharts$impl$insert_eventless_transitions(node){
var always = new cljs.core.Keyword(null,"always","always",-1772028770).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.not(always)){
return node;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(node,new cljs.core.Keyword(null,"on","on",173873944),cljs.core.assoc,new cljs.core.Keyword("fsm","always","fsm/always",-1771917474),always);
}
});
statecharts.impl.T_Type = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"parallel","parallel",-1863607128)], null)], null);
statecharts.impl.T_States = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"registry","registry",1021159018),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("statecharts.impl","state","statecharts.impl/state",843464117),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"closed","closed",-919675359),true,new cljs.core.Keyword("decode","fsm","decode/fsm",-401998012),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"leave","leave",1022579443),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(statecharts.impl.insert_eventless_transitions,statecharts.delayed.insert_delayed_transitions)], null)], null),statecharts.impl.T_After,statecharts.impl.T_Entry,statecharts.impl.T_Exit,statecharts.impl.T_EventlessTransitions,statecharts.impl.T_Transitions,statecharts.impl.T_Initial,statecharts.impl.T_Type,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),cljs.core.keyword_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("statecharts.impl","state","statecharts.impl/state",843464117)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"regions","regions",-1023815958),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),cljs.core.keyword_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("statecharts.impl","state","statecharts.impl/state",843464117)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),cljs.core.keyword_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("statecharts.impl","state","statecharts.impl/state",843464117)], null)], null)], null);
statecharts.impl.T_Integrations = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"integrations","integrations",1844532423),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"closed","closed",-919675359),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"re-frame","re-frame",-1039473033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transition-event","transition-event",-127562483),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),cljs.core.keyword_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-event","initialize-event",-1064386772),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),cljs.core.keyword_QMARK_], null)], null)], null)], null)], null);
statecharts.impl.T_Machine = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("decode","fsm","decode/fsm",-401998012),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"leave","leave",1022579443),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(statecharts.delayed.replace_delayed_place_holder,statecharts.delayed.insert_delayed_transitions)], null)], null),statecharts.impl.T_Integrations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduler","scheduler",-1882870208),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),statecharts.delayed.scheduler_QMARK_], null)], null),statecharts.impl.T_Transitions,statecharts.impl.T_After,statecharts.impl.T_Entry,statecharts.impl.T_Exit,statecharts.impl.T_Initial,statecharts.impl.T_Type,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),statecharts.impl.T_States], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"regions","regions",-1023815958),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),statecharts.impl.T_States], null)], null);
/**
 * Create a canonical presentation of the machine using malli.
 */
statecharts.impl.machine = (function statecharts$impl$machine(orig){
var conformed = malli.core.decode.cljs$core$IFn$_invoke$arity$3(statecharts.impl.T_Machine,orig,malli.transform.transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([malli.transform.default_value_transformer,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"fsm","fsm",937922990)], null)], 0)));
if(cljs.core.truth_(malli.core.validate.cljs$core$IFn$_invoke$arity$2(statecharts.impl.T_Machine,conformed))){
} else {
var reason_12784 = malli.error.humanize.cljs$core$IFn$_invoke$arity$1(malli.core.explain.cljs$core$IFn$_invoke$arity$2(statecharts.impl.T_Machine,conformed));
var machine_id_12785 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(conformed);
var msg_12786 = (function (){var G__12606 = "Invalid fsm machine spec:";
if(cljs.core.truth_(machine_id_12785)){
return [G__12606," machine-id=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(machine_id_12785)].join('');
} else {
return G__12606;
}
})();
console.warn(msg_12786,JSON.stringify(cljs.core.clj__GT_js(reason_12784)));

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg_12786,reason_12784);
}

(statecharts.impl.validate_targets.cljs$core$IFn$_invoke$arity$1 ? statecharts.impl.validate_targets.cljs$core$IFn$_invoke$arity$1(conformed) : statecharts.impl.validate_targets.call(null,conformed));

return conformed;
});

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
statecharts.impl.ContextAssignment = (function (v,__meta,__extmap,__hash){
this.v = v;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(statecharts.impl.ContextAssignment.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(statecharts.impl.ContextAssignment.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k12608,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__12612 = k12608;
var G__12612__$1 = (((G__12612 instanceof cljs.core.Keyword))?G__12612.fqn:null);
switch (G__12612__$1) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12608,else__4464__auto__);

}
}));

(statecharts.impl.ContextAssignment.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__12613){
var vec__12614 = p__12613;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12614,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12614,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(statecharts.impl.ContextAssignment.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#statecharts.impl.ContextAssignment{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null))], null),self__.__extmap));
}));

(statecharts.impl.ContextAssignment.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12607){
var self__ = this;
var G__12607__$1 = this;
return (new cljs.core.RecordIter((0),G__12607__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(statecharts.impl.ContextAssignment.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(statecharts.impl.ContextAssignment.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new statecharts.impl.ContextAssignment(self__.v,self__.__meta,self__.__extmap,self__.__hash));
}));

(statecharts.impl.ContextAssignment.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(statecharts.impl.ContextAssignment.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-729162794 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(statecharts.impl.ContextAssignment.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12609,other12610){
var self__ = this;
var this12609__$1 = this;
return (((!((other12610 == null)))) && ((((this12609__$1.constructor === other12610.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12609__$1.v,other12610.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12609__$1.__extmap,other12610.__extmap)))))));
}));

(statecharts.impl.ContextAssignment.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new statecharts.impl.ContextAssignment(self__.v,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(statecharts.impl.ContextAssignment.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k12608){
var self__ = this;
var this__4468__auto____$1 = this;
var G__12617 = k12608;
var G__12617__$1 = (((G__12617 instanceof cljs.core.Keyword))?G__12617.fqn:null);
switch (G__12617__$1) {
case "v":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12608);

}
}));

(statecharts.impl.ContextAssignment.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__12607){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__12618 = cljs.core.keyword_identical_QMARK_;
var expr__12619 = k__4470__auto__;
if(cljs.core.truth_((pred__12618.cljs$core$IFn$_invoke$arity$2 ? pred__12618.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"v","v",21465059),expr__12619) : pred__12618.call(null,new cljs.core.Keyword(null,"v","v",21465059),expr__12619)))){
return (new statecharts.impl.ContextAssignment(G__12607,self__.__meta,self__.__extmap,null));
} else {
return (new statecharts.impl.ContextAssignment(self__.v,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__12607),null));
}
}));

(statecharts.impl.ContextAssignment.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"v","v",21465059),self__.v,null))], null),self__.__extmap));
}));

(statecharts.impl.ContextAssignment.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__12607){
var self__ = this;
var this__4460__auto____$1 = this;
return (new statecharts.impl.ContextAssignment(self__.v,G__12607,self__.__extmap,self__.__hash));
}));

(statecharts.impl.ContextAssignment.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(statecharts.impl.ContextAssignment.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null);
}));

(statecharts.impl.ContextAssignment.cljs$lang$type = true);

(statecharts.impl.ContextAssignment.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"statecharts.impl/ContextAssignment",null,(1),null));
}));

(statecharts.impl.ContextAssignment.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"statecharts.impl/ContextAssignment");
}));

/**
 * Positional factory function for statecharts.impl/ContextAssignment.
 */
statecharts.impl.__GT_ContextAssignment = (function statecharts$impl$__GT_ContextAssignment(v){
return (new statecharts.impl.ContextAssignment(v,null,null,null));
});

/**
 * Factory function for statecharts.impl/ContextAssignment, taking a map of keywords to field values.
 */
statecharts.impl.map__GT_ContextAssignment = (function statecharts$impl$map__GT_ContextAssignment(G__12611){
var extmap__4501__auto__ = (function (){var G__12621 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__12611,new cljs.core.Keyword(null,"v","v",21465059));
if(cljs.core.record_QMARK_(G__12611)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12621);
} else {
return G__12621;
}
})();
return (new statecharts.impl.ContextAssignment(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__12611),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

/**
 * Wrap a function into a context assignment function.
 */
statecharts.impl.assign = (function statecharts$impl$assign(f){
return (function() { 
var G__12789__delegate = function (args){
return (new statecharts.impl.ContextAssignment(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args),null,null,null));
};
var G__12789 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12790__i = 0, G__12790__a = new Array(arguments.length -  0);
while (G__12790__i < G__12790__a.length) {G__12790__a[G__12790__i] = arguments[G__12790__i + 0]; ++G__12790__i;}
  args = new cljs.core.IndexedSeq(G__12790__a,0,null);
} 
return G__12789__delegate.call(this,args);};
G__12789.cljs$lang$maxFixedArity = 0;
G__12789.cljs$lang$applyTo = (function (arglist__12791){
var args = cljs.core.seq(arglist__12791);
return G__12789__delegate(args);
});
G__12789.cljs$core$IFn$_invoke$arity$variadic = G__12789__delegate;
return G__12789;
})()
;
});
statecharts.impl.internal_action_QMARK_ = (function statecharts$impl$internal_action_QMARK_(action){
return ((cljs.core.map_QMARK_(action)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__12622 = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(action);
if((G__12622 == null)){
return null;
} else {
return cljs.core.namespace(G__12622);
}
})(),"fsm")));
});
statecharts.impl.execute_internal_action = (function statecharts$impl$execute_internal_action(p__12623,state,transition_event,p__12624){
var map__12625 = p__12623;
var map__12625__$1 = cljs.core.__destructure_map(map__12625);
var _fsm = map__12625__$1;
var scheduler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12625__$1,new cljs.core.Keyword(null,"scheduler","scheduler",-1882870208));
var map__12626 = p__12624;
var map__12626__$1 = cljs.core.__destructure_map(map__12626);
var internal_action = map__12626__$1;
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12626__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12626__$1,new cljs.core.Keyword(null,"event","event",301435442));
var event_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12626__$1,new cljs.core.Keyword(null,"event-delay","event-delay",-262476060));
if(cljs.core.truth_(scheduler)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Delayed fsm without scheduler configured",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),internal_action], null));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action,new cljs.core.Keyword("fsm","schedule-event","fsm/schedule-event",1735252958))){
var event_delay__$1 = ((cljs.core.int_QMARK_(event_delay))?event_delay:(event_delay.cljs$core$IFn$_invoke$arity$2 ? event_delay.cljs$core$IFn$_invoke$arity$2(state,transition_event) : event_delay.call(null,state,transition_event)));
return statecharts.delayed.schedule(scheduler,event,event_delay__$1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(action,new cljs.core.Keyword("fsm","unschedule-event","fsm/unschedule-event",-1330804273))){
return statecharts.delayed.unschedule(scheduler,event);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unknown internal action ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join(''),internal_action);

}
}
});
/**
 * Execute the actions/entry/exit functions when transitioning.
 */
statecharts.impl.execute = (function statecharts$impl$execute(var_args){
var G__12628 = arguments.length;
switch (G__12628) {
case 3:
return statecharts.impl.execute.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return statecharts.impl.execute.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(statecharts.impl.execute.cljs$core$IFn$_invoke$arity$3 = (function (fsm,state,event){
return statecharts.impl.execute.cljs$core$IFn$_invoke$arity$4(fsm,state,event,null);
}));

(statecharts.impl.execute.cljs$core$IFn$_invoke$arity$4 = (function (fsm,state,event,p__12629){
var map__12630 = p__12629;
var map__12630__$1 = cljs.core.__destructure_map(map__12630);
var debug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12630__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (new_state,action){
if(statecharts.impl.internal_action_QMARK_(action)){
statecharts.impl.execute_internal_action(fsm,new_state,event,action);

return new_state;
} else {
var retval = (action.cljs$core$IFn$_invoke$arity$2 ? action.cljs$core$IFn$_invoke$arity$2(new_state,event) : action.call(null,new_state,event));
if((retval instanceof statecharts.impl.ContextAssignment)){
return retval.v;
} else {
return new_state;
}
}
}),(function (){var G__12631 = state;
if(cljs.core.not(debug)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__12631,new cljs.core.Keyword(null,"_actions","_actions",882633086));
} else {
return G__12631;
}
})(),new cljs.core.Keyword(null,"_actions","_actions",882633086).cljs$core$IFn$_invoke$arity$1(state));
}));

(statecharts.impl.execute.cljs$lang$maxFixedArity = 4);

/**
 * Schema of an element of a expanded path. We need the
 *   transitions/exit/entry information to:
 *   1. transitions: in a compound node, decide which level handles
 *   the event
 *   2. :id of each level to resolve the target state node.
 *   3. entry/exit: collect the actions during a transtion transition.
 */
statecharts.impl.PathElement = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"closed","closed",-919675359),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),cljs.core.keyword_QMARK_], null)], null),statecharts.impl.T_Transitions,statecharts.impl.T_Entry,statecharts.impl.T_Exit], null);
statecharts.impl.parallel_QMARK_ = (function statecharts$impl$parallel_QMARK_(node){
var G__12632 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node);
if((G__12632 == null)){
return null;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__12632,new cljs.core.Keyword(null,"parallel","parallel",-1863607128));
}
});
statecharts.impl.compound_QMARK_ = (function statecharts$impl$compound_QMARK_(node){
return cljs.core.contains_QMARK_(node,new cljs.core.Keyword(null,"initial","initial",1854648214));
});
statecharts.impl.atomic_QMARK_ = (function statecharts$impl$atomic_QMARK_(node){
return ((cljs.core.not(statecharts.impl.parallel_QMARK_(node))) && ((!(statecharts.impl.compound_QMARK_(node)))));
});
/**
 * Calculate the _state value based on the node paths.
 * 
 *   In our internal code, we need to represent the current state as a series of
 *   nodes, but when presenting the current state to the user we need to extract the
 *   simplest form.
 */
statecharts.impl.path__GT__state = (function statecharts$impl$path__GT__state(xs){
var indexed_xs = statecharts.utils.with_index(cljs.core.rest(xs));
var ret = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (accu,p__12633){
var vec__12634 = p__12633;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12634,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12634,(1),null);
if(cljs.core.truth_(statecharts.impl.parallel_QMARK_(node))){
var para_state = statecharts.utils.map_vals(statecharts.impl.path__GT__state,new cljs.core.Keyword(null,"regions","regions",-1023815958).cljs$core$IFn$_invoke$arity$1(node));
if((i === (0))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [para_state], null);
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(accu,(i - (1)),(function (id){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([id,para_state]);
}));
}
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(accu,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node));
}
}),cljs.core.PersistentVector.EMPTY,indexed_xs);
return statecharts.utils.devectorize(ret);
});
statecharts.impl.check_or_throw = (function statecharts$impl$check_or_throw(var_args){
var args__4824__auto__ = [];
var len__4818__auto___12797 = arguments.length;
var i__4819__auto___12798 = (0);
while(true){
if((i__4819__auto___12798 < len__4818__auto___12797)){
args__4824__auto__.push((arguments[i__4819__auto___12798]));

var G__12799 = (i__4819__auto___12798 + (1));
i__4819__auto___12798 = G__12799;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return statecharts.impl.check_or_throw.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(statecharts.impl.check_or_throw.cljs$core$IFn$_invoke$arity$variadic = (function (x,k,v,p__12641){
var map__12642 = p__12641;
var map__12642__$1 = cljs.core.__destructure_map(map__12642);
var map = map__12642__$1;
if((x == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unknown fsm ",cljs.core.name(k)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(map,k,v));
} else {
return null;
}
}));

(statecharts.impl.check_or_throw.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(statecharts.impl.check_or_throw.cljs$lang$applyTo = (function (seq12637){
var G__12638 = cljs.core.first(seq12637);
var seq12637__$1 = cljs.core.next(seq12637);
var G__12639 = cljs.core.first(seq12637__$1);
var seq12637__$2 = cljs.core.next(seq12637__$1);
var G__12640 = cljs.core.first(seq12637__$2);
var seq12637__$3 = cljs.core.next(seq12637__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12638,G__12639,G__12640,seq12637__$3);
}));

/**
 * Resolve the given transition target given the current state context.
 * 
 *   Rules for resolving the target:
 *   - If the target is nil, it's the same as the current state, a.k.a self-transition
 * 
 *   - If the target is a vector and the first element is :>, it's an absolute path
 * 
 *  (f :whatever [:> :s2]) => [:s2]
 * 
 *   - If the target is a vector and the first element is not :>, it's an relative path
 * 
 *  (f [:s1] [:s2]) => :s2
 *  (f [:s1 :s1.1] [:s1.2]) => [:s1 :s1.2]
 * 
 *   - If the target is a keyword, it's the same as an one-element vector
 * 
 *  (f [:s1] :s2) => :s2
 *  (f [:s1 :s1.1] :s1.2) => [:s1 :s1.2]
 * 
 *   - If the target is a vector and the first element is :., it's a
 *  child state of current node:
 * 
 *  (f [:s1] [:. :s1.1]) => [:s1 :s1.1]
 * 
 *   E.g. given current state [:s1 :s1.1] and a target of :s1.2, it
 *   should resolve to [:s1 :s1.2]
 */
statecharts.impl.resolve_target = (function statecharts$impl$resolve_target(base,target){
var base__$1 = statecharts.utils.ensure_vector(base);
var parent = cljs.core.vec(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(base__$1));
if((target == null)){
return base__$1;
} else {
if((target instanceof cljs.core.Keyword)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parent,target);
} else {
if((!(cljs.core.sequential_QMARK_(target)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid fsm target",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),target], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(target),new cljs.core.Keyword(null,">",">",-555517146))){
return cljs.core.vec(cljs.core.next(target));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(target),new cljs.core.Keyword(null,".",".",335144435))){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(base__$1,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),target)));
} else {
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(parent,target));

}
}
}
}
}
});
statecharts.impl.absolute_target_QMARK_ = (function statecharts$impl$absolute_target_QMARK_(target){
return ((cljs.core.sequential_QMARK_(target)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(target),new cljs.core.Keyword(null,">",">",-555517146))));
});
statecharts.impl.is_prefix_QMARK_ = (function statecharts$impl$is_prefix_QMARK_(short$,long$){
var n = cljs.core.count(short$);
return (((n <= cljs.core.count(long$))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(short$,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,long$))));
});
/**
 * Calculate the actions for an external self-transition.
 * 
 *   if handler is on [:s1 :s1.1]
 *   and current state is [:s1 :s1.1 :s1.1.1]
 *   then we shall exit s1.1.1 s1.1 and entry s1.1 s1.1.1 again
 * 
 *   if handler is on [:s1]
 *   and current state is [:s1 :s1.1 :s1.1.1]
 *   then we shall exit s1.1.1 s1.1 s1 and entry s1 s1.1 s1.1.1 again
 * 
 *   if handler is on [:s2]
 *   and current state is [:s2]
 *   then we shall exit s2 and entry s2 again
 * 
 *   if handler is on []
 *   and current state is [:s2]
 *   then we shall exit s2 Machine and entry Machine s2 again
 *   
 */
statecharts.impl.external_self_transition_actions = (function statecharts$impl$external_self_transition_actions(handler,nodes){
return null;
});
statecharts.impl.has_eventless_transition_QMARK_ = (function statecharts$impl$has_eventless_transition_QMARK_(nodes){
return cljs.core.boolean$(cljs.core.some((function (p1__12643_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__12643_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.Keyword("fsm","always","fsm/always",-1771917474)], null));
}),nodes));
});
/**
 * Update the last element of a vector
 */
statecharts.impl.updatev_last = (function statecharts$impl$updatev_last(var_args){
var args__4824__auto__ = [];
var len__4818__auto___12803 = arguments.length;
var i__4819__auto___12804 = (0);
while(true){
if((i__4819__auto___12804 < len__4818__auto___12803)){
args__4824__auto__.push((arguments[i__4819__auto___12804]));

var G__12806 = (i__4819__auto___12804 + (1));
i__4819__auto___12804 = G__12806;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return statecharts.impl.updatev_last.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(statecharts.impl.updatev_last.cljs$core$IFn$_invoke$arity$variadic = (function (v,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update,v,(cljs.core.count(v) - (1)),f,args);
}));

(statecharts.impl.updatev_last.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(statecharts.impl.updatev_last.cljs$lang$applyTo = (function (seq12644){
var G__12645 = cljs.core.first(seq12644);
var seq12644__$1 = cljs.core.next(seq12644);
var G__12646 = cljs.core.first(seq12644__$1);
var seq12644__$2 = cljs.core.next(seq12644__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12645,G__12646,seq12644__$2);
}));

statecharts.impl.RT_NodePath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null);
statecharts.impl.RT_Node = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),statecharts.impl.RT_NodePath], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"atomic","atomic",-120459460),new cljs.core.Keyword(null,"compound","compound",1539396613),new cljs.core.Keyword(null,"parallel","parallel",-1863607128)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entry","entry",505168823),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exit","exit",351849638),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null);
statecharts.impl.RT_TX = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"closed","closed",-919675359),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),statecharts.impl.RT_NodePath], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),statecharts.impl.RT_NodePath], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),statecharts.impl.RT_NodePath], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"guard","guard",-873147811),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null)], null)], null);
statecharts.impl.T_Configuration = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),statecharts.impl.RT_NodePath], null);
statecharts.impl.add_node_type = (function statecharts$impl$add_node_type(node){
var type = (cljs.core.truth_(statecharts.impl.parallel_QMARK_(node))?new cljs.core.Keyword(null,"parallel","parallel",-1863607128):((statecharts.impl.compound_QMARK_(node))?new cljs.core.Keyword(null,"compound","compound",1539396613):new cljs.core.Keyword(null,"atomic","atomic",-120459460)
));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"type","type",1174270348),type);
});
statecharts.impl.resolve_node = (function statecharts$impl$resolve_node(var_args){
var G__12648 = arguments.length;
switch (G__12648) {
case 2:
return statecharts.impl.resolve_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return statecharts.impl.resolve_node.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(statecharts.impl.resolve_node.cljs$core$IFn$_invoke$arity$2 = (function (root,path){
return statecharts.impl.resolve_node.cljs$core$IFn$_invoke$arity$3(root,path,false);
}));

(statecharts.impl.resolve_node.cljs$core$IFn$_invoke$arity$3 = (function (root,path,full_QMARK_){
var node = (function (){var path__$1 = statecharts.utils.ensure_vector(path);
var node = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (current_root,k){
if(cljs.core.truth_(statecharts.impl.parallel_QMARK_(current_root))){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(current_root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"regions","regions",-1023815958),k], null));
} else {
if(statecharts.impl.compound_QMARK_(current_root)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(current_root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),k], null));
} else {
return cljs.core.reduced(null);

}
}
}),root,path__$1);
var G__12649 = node;
var G__12649__$1 = (((G__12649 == null))?null:statecharts.impl.add_node_type(G__12649));
if((G__12649__$1 == null)){
return null;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__12649__$1,new cljs.core.Keyword(null,"path","path",-188191168),path__$1);
}
})();
if(cljs.core.truth_(full_QMARK_)){
return node;
} else {
var G__12650 = node;
if((G__12650 == null)){
return null;
} else {
return cljs.core.select_keys(G__12650,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.Keyword(null,"entry","entry",505168823),new cljs.core.Keyword(null,"exit","exit",351849638),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"path","path",-188191168)], null));
}
}
}));

(statecharts.impl.resolve_node.cljs$lang$maxFixedArity = 3);

statecharts.impl._state__GT_nodes = (function statecharts$impl$_state__GT_nodes(_state){
var G__12655 = statecharts.utils.ensure_vector(_state);
var vec__12656 = G__12655;
var seq__12657 = cljs.core.seq(vec__12656);
var first__12658 = cljs.core.first(seq__12657);
var seq__12657__$1 = cljs.core.next(seq__12657);
var head = first__12658;
var more = seq__12657__$1;
var prefix = cljs.core.PersistentVector.EMPTY;
var ret = cljs.core.sorted_set();
var G__12655__$1 = G__12655;
var prefix__$1 = prefix;
var ret__$1 = ret;
while(true){
var vec__12666 = G__12655__$1;
var seq__12667 = cljs.core.seq(vec__12666);
var first__12668 = cljs.core.first(seq__12667);
var seq__12667__$1 = cljs.core.next(seq__12667);
var head__$1 = first__12668;
var more__$1 = seq__12667__$1;
var prefix__$2 = prefix__$1;
var ret__$2 = ret__$1;
if((head__$1 instanceof cljs.core.Keyword)){
var current = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix__$2,head__$1);
var ret__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret__$2,current);
if(cljs.core.seq(more__$1)){
var G__12809 = more__$1;
var G__12810 = current;
var G__12811 = ret__$3;
G__12655__$1 = G__12809;
prefix__$1 = G__12810;
ret__$1 = G__12811;
continue;
} else {
return ret__$3;
}
} else {
if(cljs.core.map_QMARK_(head__$1)){
if(cljs.core.empty_QMARK_(more__$1)){
} else {
throw (new Error(["Assert failed: ","invalid _state, parallel state must be the last one","\n","(empty? more)"].join('')));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(ret__$2,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__12655__$1,prefix__$1,ret__$1,vec__12666,seq__12667,first__12668,seq__12667__$1,head__$1,more__$1,prefix__$2,ret__$2,G__12655,vec__12656,seq__12657,first__12658,seq__12657__$1,head,more,prefix,ret){
return (function (p__12669){
var vec__12670 = p__12669;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12670,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12670,(1),null);
var prefix__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix__$2,k);
return cljs.core.cons(prefix__$3,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__12655__$1,prefix__$1,ret__$1,prefix__$3,vec__12670,k,v,vec__12666,seq__12667,first__12668,seq__12667__$1,head__$1,more__$1,prefix__$2,ret__$2,G__12655,vec__12656,seq__12657,first__12658,seq__12657__$1,head,more,prefix,ret){
return (function (p1__12651_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(prefix__$3,p1__12651_SHARP_);
});})(G__12655__$1,prefix__$1,ret__$1,prefix__$3,vec__12670,k,v,vec__12666,seq__12667,first__12668,seq__12667__$1,head__$1,more__$1,prefix__$2,ret__$2,G__12655,vec__12656,seq__12657,first__12658,seq__12657__$1,head,more,prefix,ret))
,(statecharts.impl._state__GT_nodes.cljs$core$IFn$_invoke$arity$1 ? statecharts.impl._state__GT_nodes.cljs$core$IFn$_invoke$arity$1(v) : statecharts.impl._state__GT_nodes.call(null,v))));
});})(G__12655__$1,prefix__$1,ret__$1,vec__12666,seq__12667,first__12668,seq__12667__$1,head__$1,more__$1,prefix__$2,ret__$2,G__12655,vec__12656,seq__12657,first__12658,seq__12657__$1,head,more,prefix,ret))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([head__$1], 0)));
} else {
return null;
}
}
break;
}
});
statecharts.impl._state__GT_configuration = (function statecharts$impl$_state__GT_configuration(var_args){
var args__4824__auto__ = [];
var len__4818__auto___12812 = arguments.length;
var i__4819__auto___12813 = (0);
while(true){
if((i__4819__auto___12813 < len__4818__auto___12812)){
args__4824__auto__.push((arguments[i__4819__auto___12813]));

var G__12814 = (i__4819__auto___12813 + (1));
i__4819__auto___12813 = G__12814;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return statecharts.impl._state__GT_configuration.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(statecharts.impl._state__GT_configuration.cljs$core$IFn$_invoke$arity$variadic = (function (fsm,_state,p__12677){
var map__12678 = p__12677;
var map__12678__$1 = cljs.core.__destructure_map(map__12678);
var _opt = map__12678__$1;
var no_resolve_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12678__$1,new cljs.core.Keyword(null,"no-resolve?","no-resolve?",1149516037));
var _state__$1 = statecharts.utils.ensure_vector(_state);
var paths = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(statecharts.impl._state__GT_nodes(_state__$1),cljs.core.PersistentVector.EMPTY);
var nodes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__12673_SHARP_){
return statecharts.impl.resolve_node.cljs$core$IFn$_invoke$arity$2(fsm,p1__12673_SHARP_);
}),paths);
if(cljs.core.truth_(no_resolve_QMARK_)){
return paths;
} else {
return nodes;
}
}));

(statecharts.impl._state__GT_configuration.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(statecharts.impl._state__GT_configuration.cljs$lang$applyTo = (function (seq12674){
var G__12675 = cljs.core.first(seq12674);
var seq12674__$1 = cljs.core.next(seq12674);
var G__12676 = cljs.core.first(seq12674__$1);
var seq12674__$2 = cljs.core.next(seq12674__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12675,G__12676,seq12674__$2);
}));

/**
 * Return a (maybe lazy) sequence of the node path with all its ancestors, starting from the
 *   node and goes up.
 */
statecharts.impl.backtrack_ancestors_as_paths = (function statecharts$impl$backtrack_ancestors_as_paths(fsm,path){
return cljs.core.reductions.cljs$core$IFn$_invoke$arity$3((function (accu,_){
return cljs.core.vec(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(accu));
}),path,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(path)));
});
/**
 * Like backtrack-ancestors-as-paths but resolves the paths into nodes.
 */
statecharts.impl.backtrack_ancestors_as_nodes = (function statecharts$impl$backtrack_ancestors_as_nodes(fsm,path){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12679_SHARP_){
return statecharts.impl.resolve_node.cljs$core$IFn$_invoke$arity$2(fsm,p1__12679_SHARP_);
}),statecharts.impl.backtrack_ancestors_as_paths(fsm,path));
});
statecharts.impl.find_least_common_compound_ancessor = (function statecharts$impl$find_least_common_compound_ancessor(fsm,path1,path2){
return statecharts.utils.find_first((function (anc){
return statecharts.impl.is_prefix_QMARK_(anc,path1);
}),statecharts.impl.backtrack_ancestors_as_paths(fsm,path2));
});
statecharts.impl.get_tx_domain = (function statecharts$impl$get_tx_domain(fsm,p__12680){
var map__12681 = p__12680;
var map__12681__$1 = cljs.core.__destructure_map(map__12681);
var tx = map__12681__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12681__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12681__$1,new cljs.core.Keyword(null,"target","target",253001721));
if((target == null)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(source,target)){
return source;
} else {
return statecharts.impl.find_least_common_compound_ancessor(fsm,source,target);

}
}
});
/**
 * Given an atomic node and an event, find the first satistifed transition by
 *   walking from the node and then its ancestors, until the root.
 * 
 *   Return a two-tuple:
 *   - The first element is the a boolean indicates whether any transition is found at
 *  all (regarding it's satisfied or not)
 *   - The second element is the found transition, if any.
 *   
 */
statecharts.impl.select_one_tx = (function statecharts$impl$select_one_tx(fsm,p__12682,state,p__12683,input_event){
var map__12684 = p__12682;
var map__12684__$1 = cljs.core.__destructure_map(map__12684);
var node = map__12684__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12684__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var map__12685 = p__12683;
var map__12685__$1 = cljs.core.__destructure_map(map__12685);
var event = map__12685__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12685__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var first_satisfied_tx = (function (txs){
return cljs.core.some((function (p__12686){
var map__12687 = p__12686;
var map__12687__$1 = cljs.core.__destructure_map(map__12687);
var tx = map__12687__$1;
var guard = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12687__$1,new cljs.core.Keyword(null,"guard","guard",-873147811));
if(cljs.core.truth_((function (){var or__4212__auto__ = cljs.core.not(guard);
if(or__4212__auto__){
return or__4212__auto__;
} else {
return (guard.cljs$core$IFn$_invoke$arity$2 ? guard.cljs$core$IFn$_invoke$arity$2(state,input_event) : guard.call(null,state,input_event));
}
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(tx,new cljs.core.Keyword(null,"guard","guard",-873147811));
} else {
return null;
}
}),txs);
});
var found = cljs.core.volatile_BANG_(false);
var tx = (function (){var temp__5753__auto__ = cljs.core.some((function (p__12688){
var map__12689 = p__12688;
var map__12689__$1 = cljs.core.__destructure_map(map__12689);
var node__$1 = map__12689__$1;
var path__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12689__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var temp__5753__auto__ = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on","on",173873944),type], null)));
if(temp__5753__auto__){
var txs = temp__5753__auto__;
cljs.core.vreset_BANG_(found,true);

var temp__5753__auto____$1 = first_satisfied_tx(txs);
if(cljs.core.truth_(temp__5753__auto____$1)){
var tx = temp__5753__auto____$1;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx,new cljs.core.Keyword(null,"source","source",-433931539),path__$1);
} else {
return null;
}
} else {
return null;
}
}),statecharts.impl.backtrack_ancestors_as_nodes(fsm,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(node)));
if(cljs.core.truth_(temp__5753__auto__)){
var map__12690 = temp__5753__auto__;
var map__12690__$1 = cljs.core.__destructure_map(map__12690);
var tx = map__12690__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12690__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12690__$1,new cljs.core.Keyword(null,"target","target",253001721));
var target_resolved = (cljs.core.truth_(target)?statecharts.impl.resolve_target(source,target):null);
var tx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx,new cljs.core.Keyword(null,"target","target",253001721),target_resolved),new cljs.core.Keyword(null,"external?","external?",579765478),((statecharts.impl.absolute_target_QMARK_(target)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target_resolved,source))));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx__$1,new cljs.core.Keyword(null,"domain","domain",1847214937),statecharts.impl.get_tx_domain(fsm,tx__$1));
} else {
return null;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(found),tx], null);
});
statecharts.impl.get_initial_path = (function statecharts$impl$get_initial_path(p__12691){
var map__12692 = p__12691;
var map__12692__$1 = cljs.core.__destructure_map(map__12692);
var _node = map__12692__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12692__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var initial = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12692__$1,new cljs.core.Keyword(null,"initial","initial",1854648214));
var initial__$1 = statecharts.utils.ensure_vector(initial);
var initial__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(initial__$1),new cljs.core.Keyword(null,".",".",335144435)))?cljs.core.next(initial__$1):initial__$1);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(path,initial__$2);
});
statecharts.impl.add_ancestors_to_entry_set = (function statecharts$impl$add_ancestors_to_entry_set(fsm,domain,path,external_QMARK_){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (path__$1){
var and__4210__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(path__$1,cljs.core.PersistentVector.EMPTY);
if(and__4210__auto__){
var and__4210__auto____$1 = (function (){var or__4212__auto__ = external_QMARK_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(domain,path__$1);
}
})();
if(cljs.core.truth_(and__4210__auto____$1)){
return statecharts.impl.is_prefix_QMARK_(domain,path__$1);
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
}),statecharts.impl.backtrack_ancestors_as_paths(fsm,path));
});
statecharts.impl.compute_entry_set = (function statecharts$impl$compute_entry_set(fsm,txs){
var get_tx_entry_set = (function (p__12696){
var map__12697 = p__12696;
var map__12697__$1 = cljs.core.__destructure_map(map__12697);
var _tx = map__12697__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12697__$1,new cljs.core.Keyword(null,"target","target",253001721));
var domain = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12697__$1,new cljs.core.Keyword(null,"domain","domain",1847214937));
var external_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12697__$1,new cljs.core.Keyword(null,"external?","external?",579765478));
if(cljs.core.truth_(target)){
var entry_set = cljs.core.PersistentHashSet.createAsIfByAssoc([target]);
var seeds = entry_set;
while(true){
var exist_QMARK_ = ((function (entry_set,seeds,map__12697,map__12697__$1,_tx,target,domain,external_QMARK_){
return (function (p1__12693_SHARP_){
return cljs.core.contains_QMARK_(entry_set,p1__12693_SHARP_);
});})(entry_set,seeds,map__12697,map__12697__$1,_tx,target,domain,external_QMARK_))
;
var new$ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (entry_set,seeds,exist_QMARK_,map__12697,map__12697__$1,_tx,target,domain,external_QMARK_){
return (function (p__12701){
var map__12702 = p__12701;
var map__12702__$1 = cljs.core.__destructure_map(map__12702);
var node = map__12702__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12702__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12702__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(exist_QMARK_,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(statecharts.impl.add_ancestors_to_entry_set(fsm,domain,path,external_QMARK_),(function (){var G__12703 = type;
var G__12703__$1 = (((G__12703 instanceof cljs.core.Keyword))?G__12703.fqn:null);
switch (G__12703__$1) {
case "parallel":
var regions = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (entry_set,seeds,G__12703,G__12703__$1,map__12702,map__12702__$1,node,type,path,exist_QMARK_,map__12697,map__12697__$1,_tx,target,domain,external_QMARK_){
return (function (p1__12695_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,p1__12695_SHARP_);
});})(entry_set,seeds,G__12703,G__12703__$1,map__12702,map__12702__$1,node,type,path,exist_QMARK_,map__12697,map__12697__$1,_tx,target,domain,external_QMARK_))
,cljs.core.keys(new cljs.core.Keyword(null,"regions","regions",-1023815958).cljs$core$IFn$_invoke$arity$1(node)));
return regions;

break;
case "compound":
if(cljs.core.truth_(cljs.core.some(((function (entry_set,seeds,G__12703,G__12703__$1,map__12702,map__12702__$1,node,type,path,exist_QMARK_,map__12697,map__12697__$1,_tx,target,domain,external_QMARK_){
return (function (x){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(path,x)) && (statecharts.impl.is_prefix_QMARK_(path,x)));
});})(entry_set,seeds,G__12703,G__12703__$1,map__12702,map__12702__$1,node,type,path,exist_QMARK_,map__12697,map__12697__$1,_tx,target,domain,external_QMARK_))
,entry_set))){
return null;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [statecharts.impl.get_initial_path(node)], null);
}

break;
default:
return null;

}
})()));
});})(entry_set,seeds,exist_QMARK_,map__12697,map__12697__$1,_tx,target,domain,external_QMARK_))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (entry_set,seeds,exist_QMARK_,map__12697,map__12697__$1,_tx,target,domain,external_QMARK_){
return (function (p1__12694_SHARP_){
return statecharts.impl.resolve_node.cljs$core$IFn$_invoke$arity$3(fsm,p1__12694_SHARP_,true);
});})(entry_set,seeds,exist_QMARK_,map__12697,map__12697__$1,_tx,target,domain,external_QMARK_))
,seeds)));
var new$__$1 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(new$),entry_set);
if((!(cljs.core.empty_QMARK_(new$__$1)))){
var G__12816 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(entry_set,new$__$1);
var G__12817 = new$__$1;
entry_set = G__12816;
seeds = G__12817;
continue;
} else {
return entry_set;
}
break;
}
} else {
return null;
}
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.sorted_set(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(get_tx_entry_set,txs));
});
statecharts.impl.get_actions = (function statecharts$impl$get_actions(fsm,path,k){
var node = statecharts.impl.resolve_node.cljs$core$IFn$_invoke$arity$2(fsm,path);
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(node) : k.call(null,node));
});
statecharts.impl.get_entry_actions = (function statecharts$impl$get_entry_actions(fsm,entry_set){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__12704_SHARP_){
return statecharts.impl.get_actions(fsm,p1__12704_SHARP_,new cljs.core.Keyword(null,"entry","entry",505168823));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entry_set], 0));
});
statecharts.impl.simple_state = (function statecharts$impl$simple_state(x){
if(((cljs.core.sequential_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),(1))))){
return cljs.core.first(x);
} else {
return x;
}
});
/**
 * Represent the current configuration in a user-friendly form. It's the reverse
 *   operation of `_state->configuration`.
 *   
 */
statecharts.impl.configuration__GT__state = (function statecharts$impl$configuration__GT__state(fsm,configuration){
return statecharts.impl.simple_state((function (){var paths = configuration;
var node = fsm;
var _state = cljs.core.PersistentVector.EMPTY;
var parent_compound_QMARK_ = false;
while(true){
var paths__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,paths));
if(cljs.core.truth_(statecharts.impl.parallel_QMARK_(node))){
var children = new cljs.core.Keyword(null,"regions","regions",-1023815958).cljs$core$IFn$_invoke$arity$1(node);
var groups = cljs.core.group_by(cljs.core.first,paths__$1);
var parallel_state = statecharts.utils.map_kv_vals(((function (paths,node,_state,parent_compound_QMARK_,children,groups,paths__$1){
return (function (k,region){
var G__12707 = region;
var G__12708 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.next,cljs.core.get.cljs$core$IFn$_invoke$arity$2(groups,k));
return (statecharts.impl.configuration__GT__state.cljs$core$IFn$_invoke$arity$2 ? statecharts.impl.configuration__GT__state.cljs$core$IFn$_invoke$arity$2(G__12707,G__12708) : statecharts.impl.configuration__GT__state.call(null,G__12707,G__12708));
});})(paths,node,_state,parent_compound_QMARK_,children,groups,paths__$1))
,children);
if(parent_compound_QMARK_){
return statecharts.impl.updatev_last(_state,((function (paths,node,_state,parent_compound_QMARK_,children,groups,parallel_state,paths__$1){
return (function (k){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,parallel_state]);
});})(paths,node,_state,parent_compound_QMARK_,children,groups,parallel_state,paths__$1))
);
} else {
return parallel_state;
}
} else {
if(statecharts.impl.compound_QMARK_(node)){
var ks = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,paths__$1));
var k = cljs.core.first(ks);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(ks),(1))){
} else {
throw (new Error(["Assert failed: ",["invalid paths: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(paths__$1)].join(''),"\n","(= (count ks) 1)"].join('')));
}

var paths__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.next,paths__$1));
if(cljs.core.seq(paths__$2)){
var G__12818 = paths__$2;
var G__12819 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),k], null));
var G__12820 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(_state,k);
var G__12821 = true;
paths = G__12818;
node = G__12819;
_state = G__12820;
parent_compound_QMARK_ = G__12821;
continue;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(_state,k);
}
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(_state,cljs.core.ffirst(paths__$1));

}
}
break;
}
})());
});
statecharts.impl._do_transition = (function statecharts$impl$_do_transition(fsm,p__12713,event,input_event,ignore_unknown_event_QMARK_){
var map__12714 = p__12713;
var map__12714__$1 = cljs.core.__destructure_map(map__12714);
var state = map__12714__$1;
var _state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12714__$1,new cljs.core.Keyword(null,"_state","_state",-791882382));
var configuration = statecharts.impl._state__GT_configuration(fsm,_state);
var atomic_nodes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12709_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__12709_SHARP_),new cljs.core.Keyword(null,"atomic","atomic",-120459460));
}),configuration);
var txs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12710_SHARP_){
return statecharts.impl.select_one_tx(fsm,p1__12710_SHARP_,state,event,input_event);
}),atomic_nodes);
var _ = (cljs.core.truth_(cljs.core.some(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,txs)))?null:(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["fsm ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(fsm))," got unknown event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(event))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"_state","_state",-791882382),_state], null))})());
var txs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,txs));
if((!(cljs.core.seq_QMARK_(txs__$1)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_state,cljs.core.PersistentVector.EMPTY,false], null);
} else {
var exit_set = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_set(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__12715){
var map__12716 = p__12715;
var map__12716__$1 = cljs.core.__destructure_map(map__12716);
var node = map__12716__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12716__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return cljs.core.some((function (p__12717){
var map__12718 = p__12717;
var map__12718__$1 = cljs.core.__destructure_map(map__12718);
var tx = map__12718__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12718__$1,new cljs.core.Keyword(null,"target","target",253001721));
var domain = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12718__$1,new cljs.core.Keyword(null,"domain","domain",1847214937));
var external_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12718__$1,new cljs.core.Keyword(null,"external?","external?",579765478));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentVector.EMPTY)){
var and__4210__auto__ = external_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target,cljs.core.PersistentVector.EMPTY);
} else {
return and__4210__auto__;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(domain,path)){
return external_QMARK_;
} else {
return statecharts.impl.is_prefix_QMARK_(domain,path);

}
}
}),txs__$1);
}),configuration)));
var entry_set = statecharts.impl.compute_entry_set(fsm,txs__$1);
var exit_actions = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__12711_SHARP_){
return statecharts.impl.get_actions(fsm,p1__12711_SHARP_,new cljs.core.Keyword(null,"exit","exit",351849638));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reverse(exit_set)], 0));
var entry_actions = statecharts.impl.get_entry_actions(fsm,entry_set);
var tx_actions = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"actions","actions",-812656882),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([txs__$1], 0));
var actions = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(exit_actions,tx_actions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entry_actions], 0));
var new_configuration = clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168),configuration)),exit_set),entry_set);
var new_value = statecharts.impl.configuration__GT__state(fsm,new_configuration);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_value,actions,statecharts.impl.has_eventless_transition_QMARK_(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12712_SHARP_){
return statecharts.impl.resolve_node.cljs$core$IFn$_invoke$arity$2(fsm,p1__12712_SHARP_);
}),entry_set))], null);
}
});
statecharts.impl._do_init = (function statecharts$impl$_do_init(fsm){
var tx = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"source","source",-433931539),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"target","target",253001721),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"external?","external?",579765478),true,new cljs.core.Keyword(null,"domain","domain",1847214937),cljs.core.PersistentVector.EMPTY], null);
var entry_set = statecharts.impl.compute_entry_set(fsm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx], null));
var entry_actions = statecharts.impl.get_entry_actions(fsm,entry_set);
var _state = statecharts.impl.configuration__GT__state(fsm,entry_set);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_state,entry_actions], null);
});
statecharts.impl.initialize = (function statecharts$impl$initialize(var_args){
var G__12720 = arguments.length;
switch (G__12720) {
case 1:
return statecharts.impl.initialize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return statecharts.impl.initialize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(statecharts.impl.initialize.cljs$core$IFn$_invoke$arity$1 = (function (fsm){
return statecharts.impl.initialize.cljs$core$IFn$_invoke$arity$2(fsm,null);
}));

(statecharts.impl.initialize.cljs$core$IFn$_invoke$arity$2 = (function (p__12721,p__12722){
var map__12723 = p__12721;
var map__12723__$1 = cljs.core.__destructure_map(map__12723);
var fsm = map__12723__$1;
var initial = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12723__$1,new cljs.core.Keyword(null,"initial","initial",1854648214));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12723__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var map__12724 = p__12722;
var map__12724__$1 = cljs.core.__destructure_map(map__12724);
var _opts = map__12724__$1;
var exec = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12724__$1,new cljs.core.Keyword(null,"exec","exec",1625568743),true);
var debug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12724__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12724__$1,new cljs.core.Keyword(null,"context","context",-830191113),null);
var context__$1 = (((!((context == null))))?context:new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(fsm));
var event = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("fsm","init","fsm/init",-1875649690)], null);
var vec__12725 = statecharts.impl._do_init(fsm);
var _state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12725,(0),null);
var actions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12725,(1),null);
var state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(context__$1,new cljs.core.Keyword(null,"_state","_state",-791882382),_state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"_actions","_actions",882633086),actions], 0));
if(cljs.core.truth_(exec)){
return statecharts.impl.execute.cljs$core$IFn$_invoke$arity$4(fsm,state,event,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"debug","debug",-1608172596),debug], null));
} else {
return state;
}
}));

(statecharts.impl.initialize.cljs$lang$maxFixedArity = 2);

/**
 * Do the transition, but would not follow new eventless transitions defined on
 *   the target state.
 */
statecharts.impl._transition_once = (function statecharts$impl$_transition_once(fsm,state,event,p__12728){
var map__12729 = p__12728;
var map__12729__$1 = cljs.core.__destructure_map(map__12729);
var exec = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12729__$1,new cljs.core.Keyword(null,"exec","exec",1625568743),true);
var debug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12729__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));
var input_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12729__$1,new cljs.core.Keyword(null,"input-event","input-event",803933188));
var ignore_unknown_event_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12729__$1,new cljs.core.Keyword(null,"ignore-unknown-event?","ignore-unknown-event?",-1415682521));
var input_event__$1 = (function (){var or__4212__auto__ = input_event;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return event;
}
})();
var vec__12730 = statecharts.impl._do_transition(fsm,state,event,input_event__$1,ignore_unknown_event_QMARK_);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12730,(0),null);
var actions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12730,(1),null);
var _pending_eventless_tx_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12730,(2),null);
var new_state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"_state","_state",-791882382),new_value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"_pending-eventless-tx?","_pending-eventless-tx?",-880226589),_pending_eventless_tx_QMARK_,new cljs.core.Keyword(null,"_prev-state","_prev-state",1694374073),new cljs.core.Keyword(null,"_state","_state",-791882382).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"_actions","_actions",882633086),actions], 0));
if(cljs.core.truth_(exec)){
return statecharts.impl.execute.cljs$core$IFn$_invoke$arity$4(fsm,new_state,input_event__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"debug","debug",-1608172596),debug], null));
} else {
return new_state;
}
});
/**
 * Return the new state and the actions to execute.
 */
statecharts.impl._transition_impl = (function statecharts$impl$_transition_impl(fsm,state,input_event,opts){
var i = (0);
var state__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"_actions","_actions",882633086));
var actions = cljs.core.PersistentVector.EMPTY;
while(true){
if((i > (10))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Possible dead loop on event",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(input_event))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"_state","_state",-791882382).cljs$core$IFn$_invoke$arity$1(state__$1)], null));
} else {
}

var event = (((i === (0)))?input_event:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("fsm","always","fsm/always",-1771917474)], null));
var map__12734 = statecharts.impl._transition_once(fsm,state__$1,event,opts);
var map__12734__$1 = cljs.core.__destructure_map(map__12734);
var state__$2 = map__12734__$1;
var _actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12734__$1,new cljs.core.Keyword(null,"_actions","_actions",882633086));
var _pending_eventless_tx_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12734__$1,new cljs.core.Keyword(null,"_pending-eventless-tx?","_pending-eventless-tx?",-880226589));
var actions__$1 = (cljs.core.truth_(_actions)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(actions,_actions):actions);
if(cljs.core.truth_(_pending_eventless_tx_QMARK_)){
var G__12823 = (i + (1));
var G__12824 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state__$2,new cljs.core.Keyword(null,"_pending-eventless-tx?","_pending-eventless-tx?",-880226589));
var G__12825 = actions__$1;
i = G__12823;
state__$1 = G__12824;
actions = G__12825;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__$2,actions__$1], null);
}
break;
}
});
/**
 * Given a machine with its current state, trigger a transition to the
 *   next state based on the given event.
 * 
 *   The nature and purpose of the transition impl is to get two outputs:
 *   - the new state
 *   - the actions to execute
 * 
 *   By default it executes all actions, unless the `exec` opt is false,
 *   in which case it is a pure function.
 */
statecharts.impl.transition = (function statecharts$impl$transition(var_args){
var G__12736 = arguments.length;
switch (G__12736) {
case 3:
return statecharts.impl.transition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return statecharts.impl.transition.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(statecharts.impl.transition.cljs$core$IFn$_invoke$arity$3 = (function (fsm,state,event){
return statecharts.impl.transition.cljs$core$IFn$_invoke$arity$4(fsm,state,event,null);
}));

(statecharts.impl.transition.cljs$core$IFn$_invoke$arity$4 = (function (fsm,state,event,p__12737){
var map__12738 = p__12737;
var map__12738__$1 = cljs.core.__destructure_map(map__12738);
var opts = map__12738__$1;
var exec = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12738__$1,new cljs.core.Keyword(null,"exec","exec",1625568743),true);
var debug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12738__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));
var input_event = statecharts.impl.canon_event(event);
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"input-event","input-event",803933188),input_event);
var vec__12739 = statecharts.impl._transition_impl(fsm,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"_actions","_actions",882633086)),input_event,opts__$1);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12739,(0),null);
var actions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12739,(1),null);
var G__12742 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(new_state,new cljs.core.Keyword(null,"_pending-eventless-tx?","_pending-eventless-tx?",-880226589),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"_prev-state","_prev-state",1694374073)], 0));
if(cljs.core.truth_((function (){var or__4212__auto__ = cljs.core.not(exec);
if(or__4212__auto__){
return or__4212__auto__;
} else {
return debug;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__12742,new cljs.core.Keyword(null,"_actions","_actions",882633086),actions);
} else {
return G__12742;
}
}));

(statecharts.impl.transition.cljs$lang$maxFixedArity = 4);

statecharts.impl.valid_target_QMARK_ = (function statecharts$impl$valid_target_QMARK_(node,path){
try{if(cljs.core.truth_(statecharts.impl.resolve_node.cljs$core$IFn$_invoke$arity$2(node,path))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("node not found",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword("statecharts.impl","type","statecharts.impl/type",-2067516284),new cljs.core.Keyword(null,"invalid-path","invalid-path",1333291965)], null));
}

return true;
}catch (e12743){if((e12743 instanceof Error)){
var e = e12743;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("statecharts.impl","type","statecharts.impl/type",-2067516284).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(e)),new cljs.core.Keyword(null,"invalid-path","invalid-path",1333291965))){
return false;
} else {
throw e;
}
} else {
throw e12743;

}
}});
/**
 * Walk the fsm and try to resolve all transition targets. Raise an
 *   exception if any target is invalid.
 */
statecharts.impl.validate_targets = (function statecharts$impl$validate_targets(var_args){
var G__12745 = arguments.length;
switch (G__12745) {
case 1:
return statecharts.impl.validate_targets.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return statecharts.impl.validate_targets.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(statecharts.impl.validate_targets.cljs$core$IFn$_invoke$arity$1 = (function (root){
return statecharts.impl.validate_targets.cljs$core$IFn$_invoke$arity$3(root,root,cljs.core.PersistentVector.EMPTY);
}));

(statecharts.impl.validate_targets.cljs$core$IFn$_invoke$arity$3 = (function (root,node,current_path){
var transitions_12828 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$1(node))], 0));
var targets_12829 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"target","target",253001721),transitions_12828));
if(cljs.core.seq(targets_12829)){
var seq__12746_12830 = cljs.core.seq(targets_12829);
var chunk__12748_12831 = null;
var count__12749_12832 = (0);
var i__12750_12833 = (0);
while(true){
if((i__12750_12833 < count__12749_12832)){
var target_12834 = chunk__12748_12831.cljs$core$IIndexed$_nth$arity$2(null,i__12750_12833);
var target_12835__$1 = statecharts.impl.resolve_target(current_path,target_12834);
if(cljs.core.truth_(statecharts.impl.valid_target_QMARK_(root,target_12835__$1))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid target ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(target_12835__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),target_12835__$1,new cljs.core.Keyword(null,"state","state",-1988618099),current_path], null));
}


var G__12836 = seq__12746_12830;
var G__12837 = chunk__12748_12831;
var G__12838 = count__12749_12832;
var G__12839 = (i__12750_12833 + (1));
seq__12746_12830 = G__12836;
chunk__12748_12831 = G__12837;
count__12749_12832 = G__12838;
i__12750_12833 = G__12839;
continue;
} else {
var temp__5753__auto___12840 = cljs.core.seq(seq__12746_12830);
if(temp__5753__auto___12840){
var seq__12746_12842__$1 = temp__5753__auto___12840;
if(cljs.core.chunked_seq_QMARK_(seq__12746_12842__$1)){
var c__4638__auto___12843 = cljs.core.chunk_first(seq__12746_12842__$1);
var G__12844 = cljs.core.chunk_rest(seq__12746_12842__$1);
var G__12845 = c__4638__auto___12843;
var G__12846 = cljs.core.count(c__4638__auto___12843);
var G__12847 = (0);
seq__12746_12830 = G__12844;
chunk__12748_12831 = G__12845;
count__12749_12832 = G__12846;
i__12750_12833 = G__12847;
continue;
} else {
var target_12848 = cljs.core.first(seq__12746_12842__$1);
var target_12850__$1 = statecharts.impl.resolve_target(current_path,target_12848);
if(cljs.core.truth_(statecharts.impl.valid_target_QMARK_(root,target_12850__$1))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid target ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(target_12850__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),target_12850__$1,new cljs.core.Keyword(null,"state","state",-1988618099),current_path], null));
}


var G__12851 = cljs.core.next(seq__12746_12842__$1);
var G__12852 = null;
var G__12853 = (0);
var G__12854 = (0);
seq__12746_12830 = G__12851;
chunk__12748_12831 = G__12852;
count__12749_12832 = G__12853;
i__12750_12833 = G__12854;
continue;
}
} else {
}
}
break;
}
} else {
}

var temp__5753__auto___12855 = new cljs.core.Keyword(null,"initial","initial",1854648214).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(temp__5753__auto___12855)){
var initial_12856 = temp__5753__auto___12855;
var initial_node_12857 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"states","states",1389013542),initial_12856], null));
if(cljs.core.truth_(initial_node_12857)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid initial target ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(initial_12856)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial","initial",1854648214),initial_12856,new cljs.core.Keyword(null,"state","state",-1988618099),current_path], null));
}
} else {
}

var seq__12752_12858 = cljs.core.seq(new cljs.core.Keyword(null,"states","states",1389013542).cljs$core$IFn$_invoke$arity$1(node));
var chunk__12753_12859 = null;
var count__12754_12860 = (0);
var i__12755_12861 = (0);
while(true){
if((i__12755_12861 < count__12754_12860)){
var vec__12762_12862 = chunk__12753_12859.cljs$core$IIndexed$_nth$arity$2(null,i__12755_12861);
var name_12863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12762_12862,(0),null);
var child_12864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12762_12862,(1),null);
statecharts.impl.validate_targets.cljs$core$IFn$_invoke$arity$3(root,child_12864,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_path,name_12863));


var G__12865 = seq__12752_12858;
var G__12866 = chunk__12753_12859;
var G__12867 = count__12754_12860;
var G__12868 = (i__12755_12861 + (1));
seq__12752_12858 = G__12865;
chunk__12753_12859 = G__12866;
count__12754_12860 = G__12867;
i__12755_12861 = G__12868;
continue;
} else {
var temp__5753__auto___12869 = cljs.core.seq(seq__12752_12858);
if(temp__5753__auto___12869){
var seq__12752_12870__$1 = temp__5753__auto___12869;
if(cljs.core.chunked_seq_QMARK_(seq__12752_12870__$1)){
var c__4638__auto___12871 = cljs.core.chunk_first(seq__12752_12870__$1);
var G__12872 = cljs.core.chunk_rest(seq__12752_12870__$1);
var G__12873 = c__4638__auto___12871;
var G__12874 = cljs.core.count(c__4638__auto___12871);
var G__12875 = (0);
seq__12752_12858 = G__12872;
chunk__12753_12859 = G__12873;
count__12754_12860 = G__12874;
i__12755_12861 = G__12875;
continue;
} else {
var vec__12765_12876 = cljs.core.first(seq__12752_12870__$1);
var name_12877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12765_12876,(0),null);
var child_12878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12765_12876,(1),null);
statecharts.impl.validate_targets.cljs$core$IFn$_invoke$arity$3(root,child_12878,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_path,name_12877));


var G__12879 = cljs.core.next(seq__12752_12870__$1);
var G__12880 = null;
var G__12881 = (0);
var G__12882 = (0);
seq__12752_12858 = G__12879;
chunk__12753_12859 = G__12880;
count__12754_12860 = G__12881;
i__12755_12861 = G__12882;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(statecharts.impl.parallel_QMARK_(node))){
var seq__12768 = cljs.core.seq(new cljs.core.Keyword(null,"regions","regions",-1023815958).cljs$core$IFn$_invoke$arity$1(node));
var chunk__12769 = null;
var count__12770 = (0);
var i__12771 = (0);
while(true){
if((i__12771 < count__12770)){
var vec__12778 = chunk__12769.cljs$core$IIndexed$_nth$arity$2(null,i__12771);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12778,(0),null);
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12778,(1),null);
statecharts.impl.validate_targets.cljs$core$IFn$_invoke$arity$3(root,child,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_path,name));


var G__12883 = seq__12768;
var G__12884 = chunk__12769;
var G__12885 = count__12770;
var G__12886 = (i__12771 + (1));
seq__12768 = G__12883;
chunk__12769 = G__12884;
count__12770 = G__12885;
i__12771 = G__12886;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__12768);
if(temp__5753__auto__){
var seq__12768__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12768__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__12768__$1);
var G__12887 = cljs.core.chunk_rest(seq__12768__$1);
var G__12888 = c__4638__auto__;
var G__12889 = cljs.core.count(c__4638__auto__);
var G__12890 = (0);
seq__12768 = G__12887;
chunk__12769 = G__12888;
count__12770 = G__12889;
i__12771 = G__12890;
continue;
} else {
var vec__12781 = cljs.core.first(seq__12768__$1);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12781,(0),null);
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12781,(1),null);
statecharts.impl.validate_targets.cljs$core$IFn$_invoke$arity$3(root,child,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_path,name));


var G__12891 = cljs.core.next(seq__12768__$1);
var G__12892 = null;
var G__12893 = (0);
var G__12894 = (0);
seq__12768 = G__12891;
chunk__12769 = G__12892;
count__12770 = G__12893;
i__12771 = G__12894;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));

(statecharts.impl.validate_targets.cljs$lang$maxFixedArity = 3);

statecharts.impl.matches = (function statecharts$impl$matches(state,value){
var v1 = statecharts.utils.ensure_vector(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(state));
var v2 = statecharts.utils.ensure_vector(value);
return statecharts.impl.is_prefix_QMARK_(v2,v1);
});

//# sourceMappingURL=statecharts.impl.js.map
