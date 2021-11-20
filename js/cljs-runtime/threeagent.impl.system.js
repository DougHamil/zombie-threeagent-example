goog.provide('threeagent.impl.system');
threeagent.impl.system.dispatch_on_added = (function threeagent$impl$system$dispatch_on_added(context,entity_context,entity_id,entity_obj,entity_config){
var systems = context.systems;
var callbacks = [];
var seq__10005_10093 = cljs.core.seq(entity_config);
var chunk__10006_10094 = null;
var count__10007_10095 = (0);
var i__10008_10096 = (0);
while(true){
if((i__10008_10096 < count__10007_10095)){
var vec__10015_10097 = chunk__10006_10094.cljs$core$IIndexed$_nth$arity$2(null,i__10008_10096);
var k_10098 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10015_10097,(0),null);
var v_10099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10015_10097,(1),null);
var temp__5753__auto___10100 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(systems,k_10098);
if(cljs.core.truth_(temp__5753__auto___10100)){
var sys_10101 = temp__5753__auto___10100;
var cb_10102 = threeagent.system.on_entity_added(sys_10101,entity_context,entity_id,entity_obj,v_10099);
if(cljs.core.fn_QMARK_(cb_10102)){
callbacks.push(cb_10102);
} else {
}
} else {
}


var G__10103 = seq__10005_10093;
var G__10104 = chunk__10006_10094;
var G__10105 = count__10007_10095;
var G__10106 = (i__10008_10096 + (1));
seq__10005_10093 = G__10103;
chunk__10006_10094 = G__10104;
count__10007_10095 = G__10105;
i__10008_10096 = G__10106;
continue;
} else {
var temp__5753__auto___10107 = cljs.core.seq(seq__10005_10093);
if(temp__5753__auto___10107){
var seq__10005_10108__$1 = temp__5753__auto___10107;
if(cljs.core.chunked_seq_QMARK_(seq__10005_10108__$1)){
var c__4638__auto___10109 = cljs.core.chunk_first(seq__10005_10108__$1);
var G__10110 = cljs.core.chunk_rest(seq__10005_10108__$1);
var G__10111 = c__4638__auto___10109;
var G__10112 = cljs.core.count(c__4638__auto___10109);
var G__10113 = (0);
seq__10005_10093 = G__10110;
chunk__10006_10094 = G__10111;
count__10007_10095 = G__10112;
i__10008_10096 = G__10113;
continue;
} else {
var vec__10018_10114 = cljs.core.first(seq__10005_10108__$1);
var k_10115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10018_10114,(0),null);
var v_10116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10018_10114,(1),null);
var temp__5753__auto___10117__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(systems,k_10115);
if(cljs.core.truth_(temp__5753__auto___10117__$1)){
var sys_10118 = temp__5753__auto___10117__$1;
var cb_10119 = threeagent.system.on_entity_added(sys_10118,entity_context,entity_id,entity_obj,v_10116);
if(cljs.core.fn_QMARK_(cb_10119)){
callbacks.push(cb_10119);
} else {
}
} else {
}


var G__10120 = cljs.core.next(seq__10005_10108__$1);
var G__10121 = null;
var G__10122 = (0);
var G__10123 = (0);
seq__10005_10093 = G__10120;
chunk__10006_10094 = G__10121;
count__10007_10095 = G__10122;
i__10008_10096 = G__10123;
continue;
}
} else {
}
}
break;
}

return callbacks;
});
threeagent.impl.system.dispatch_on_removed = (function threeagent$impl$system$dispatch_on_removed(context,entity_context,entity_id,entity_obj,entity_config){
var systems = context.systems;
var callbacks = [];
var seq__10021_10124 = cljs.core.seq(entity_config);
var chunk__10022_10125 = null;
var count__10023_10126 = (0);
var i__10024_10127 = (0);
while(true){
if((i__10024_10127 < count__10023_10126)){
var vec__10031_10128 = chunk__10022_10125.cljs$core$IIndexed$_nth$arity$2(null,i__10024_10127);
var k_10129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10031_10128,(0),null);
var v_10130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10031_10128,(1),null);
var temp__5753__auto___10131 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(systems,k_10129);
if(cljs.core.truth_(temp__5753__auto___10131)){
var sys_10132 = temp__5753__auto___10131;
var cb_10133 = threeagent.system.on_entity_removed(sys_10132,entity_context,entity_id,entity_obj,v_10130);
if(cljs.core.fn_QMARK_(cb_10133)){
callbacks.push(cb_10133);
} else {
}
} else {
}


var G__10134 = seq__10021_10124;
var G__10135 = chunk__10022_10125;
var G__10136 = count__10023_10126;
var G__10137 = (i__10024_10127 + (1));
seq__10021_10124 = G__10134;
chunk__10022_10125 = G__10135;
count__10023_10126 = G__10136;
i__10024_10127 = G__10137;
continue;
} else {
var temp__5753__auto___10138 = cljs.core.seq(seq__10021_10124);
if(temp__5753__auto___10138){
var seq__10021_10139__$1 = temp__5753__auto___10138;
if(cljs.core.chunked_seq_QMARK_(seq__10021_10139__$1)){
var c__4638__auto___10140 = cljs.core.chunk_first(seq__10021_10139__$1);
var G__10141 = cljs.core.chunk_rest(seq__10021_10139__$1);
var G__10142 = c__4638__auto___10140;
var G__10143 = cljs.core.count(c__4638__auto___10140);
var G__10144 = (0);
seq__10021_10124 = G__10141;
chunk__10022_10125 = G__10142;
count__10023_10126 = G__10143;
i__10024_10127 = G__10144;
continue;
} else {
var vec__10034_10145 = cljs.core.first(seq__10021_10139__$1);
var k_10146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10034_10145,(0),null);
var v_10147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10034_10145,(1),null);
var temp__5753__auto___10148__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(systems,k_10146);
if(cljs.core.truth_(temp__5753__auto___10148__$1)){
var sys_10149 = temp__5753__auto___10148__$1;
var cb_10150 = threeagent.system.on_entity_removed(sys_10149,entity_context,entity_id,entity_obj,v_10147);
if(cljs.core.fn_QMARK_(cb_10150)){
callbacks.push(cb_10150);
} else {
}
} else {
}


var G__10151 = cljs.core.next(seq__10021_10139__$1);
var G__10152 = null;
var G__10153 = (0);
var G__10154 = (0);
seq__10021_10124 = G__10151;
chunk__10022_10125 = G__10152;
count__10023_10126 = G__10153;
i__10024_10127 = G__10154;
continue;
}
} else {
}
}
break;
}

return callbacks;
});
threeagent.impl.system.dispatch_on_tick = (function threeagent$impl$system$dispatch_on_tick(context,delta_time){
var seq__10037 = cljs.core.seq(context.systems);
var chunk__10038 = null;
var count__10039 = (0);
var i__10040 = (0);
while(true){
if((i__10040 < count__10039)){
var vec__10047 = chunk__10038.cljs$core$IIndexed$_nth$arity$2(null,i__10040);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10047,(0),null);
var system = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10047,(1),null);
threeagent.system.tick(system,delta_time);


var G__10155 = seq__10037;
var G__10156 = chunk__10038;
var G__10157 = count__10039;
var G__10158 = (i__10040 + (1));
seq__10037 = G__10155;
chunk__10038 = G__10156;
count__10039 = G__10157;
i__10040 = G__10158;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__10037);
if(temp__5753__auto__){
var seq__10037__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10037__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__10037__$1);
var G__10159 = cljs.core.chunk_rest(seq__10037__$1);
var G__10160 = c__4638__auto__;
var G__10161 = cljs.core.count(c__4638__auto__);
var G__10162 = (0);
seq__10037 = G__10159;
chunk__10038 = G__10160;
count__10039 = G__10161;
i__10040 = G__10162;
continue;
} else {
var vec__10050 = cljs.core.first(seq__10037__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10050,(0),null);
var system = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10050,(1),null);
threeagent.system.tick(system,delta_time);


var G__10163 = cljs.core.next(seq__10037__$1);
var G__10164 = null;
var G__10165 = (0);
var G__10166 = (0);
seq__10037 = G__10163;
chunk__10038 = G__10164;
count__10039 = G__10165;
i__10040 = G__10166;
continue;
}
} else {
return null;
}
}
break;
}
});
threeagent.impl.system.dispatch_init = (function threeagent$impl$system$dispatch_init(systems,context){
var context__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"systems","systems",-1015374944),systems);
var callbacks = [];
var seq__10053_10167 = cljs.core.seq(systems);
var chunk__10054_10168 = null;
var count__10055_10169 = (0);
var i__10056_10170 = (0);
while(true){
if((i__10056_10170 < count__10055_10169)){
var vec__10063_10171 = chunk__10054_10168.cljs$core$IIndexed$_nth$arity$2(null,i__10056_10170);
var __10172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10063_10171,(0),null);
var system_10173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10063_10171,(1),null);
var cb_10174 = threeagent.system.init(system_10173,context__$1);
if(cljs.core.fn_QMARK_(cb_10174)){
callbacks.push(cb_10174);
} else {
}


var G__10175 = seq__10053_10167;
var G__10176 = chunk__10054_10168;
var G__10177 = count__10055_10169;
var G__10178 = (i__10056_10170 + (1));
seq__10053_10167 = G__10175;
chunk__10054_10168 = G__10176;
count__10055_10169 = G__10177;
i__10056_10170 = G__10178;
continue;
} else {
var temp__5753__auto___10179 = cljs.core.seq(seq__10053_10167);
if(temp__5753__auto___10179){
var seq__10053_10180__$1 = temp__5753__auto___10179;
if(cljs.core.chunked_seq_QMARK_(seq__10053_10180__$1)){
var c__4638__auto___10181 = cljs.core.chunk_first(seq__10053_10180__$1);
var G__10182 = cljs.core.chunk_rest(seq__10053_10180__$1);
var G__10183 = c__4638__auto___10181;
var G__10184 = cljs.core.count(c__4638__auto___10181);
var G__10185 = (0);
seq__10053_10167 = G__10182;
chunk__10054_10168 = G__10183;
count__10055_10169 = G__10184;
i__10056_10170 = G__10185;
continue;
} else {
var vec__10066_10186 = cljs.core.first(seq__10053_10180__$1);
var __10187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10066_10186,(0),null);
var system_10188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10066_10186,(1),null);
var cb_10189 = threeagent.system.init(system_10188,context__$1);
if(cljs.core.fn_QMARK_(cb_10189)){
callbacks.push(cb_10189);
} else {
}


var G__10190 = cljs.core.next(seq__10053_10180__$1);
var G__10191 = null;
var G__10192 = (0);
var G__10193 = (0);
seq__10053_10167 = G__10190;
chunk__10054_10168 = G__10191;
count__10055_10169 = G__10192;
i__10056_10170 = G__10193;
continue;
}
} else {
}
}
break;
}

var seq__10069 = cljs.core.seq(callbacks);
var chunk__10070 = null;
var count__10071 = (0);
var i__10072 = (0);
while(true){
if((i__10072 < count__10071)){
var cb = chunk__10070.cljs$core$IIndexed$_nth$arity$2(null,i__10072);
(cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));


var G__10194 = seq__10069;
var G__10195 = chunk__10070;
var G__10196 = count__10071;
var G__10197 = (i__10072 + (1));
seq__10069 = G__10194;
chunk__10070 = G__10195;
count__10071 = G__10196;
i__10072 = G__10197;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__10069);
if(temp__5753__auto__){
var seq__10069__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10069__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__10069__$1);
var G__10198 = cljs.core.chunk_rest(seq__10069__$1);
var G__10199 = c__4638__auto__;
var G__10200 = cljs.core.count(c__4638__auto__);
var G__10201 = (0);
seq__10069 = G__10198;
chunk__10070 = G__10199;
count__10071 = G__10200;
i__10072 = G__10201;
continue;
} else {
var cb = cljs.core.first(seq__10069__$1);
(cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));


var G__10202 = cljs.core.next(seq__10069__$1);
var G__10203 = null;
var G__10204 = (0);
var G__10205 = (0);
seq__10069 = G__10202;
chunk__10070 = G__10203;
count__10071 = G__10204;
i__10072 = G__10205;
continue;
}
} else {
return null;
}
}
break;
}
});
threeagent.impl.system.dispatch_destroy = (function threeagent$impl$system$dispatch_destroy(systems,context){
var context__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"systems","systems",-1015374944),systems);
var callbacks = [];
var seq__10073_10206 = cljs.core.seq(systems);
var chunk__10074_10207 = null;
var count__10075_10208 = (0);
var i__10076_10209 = (0);
while(true){
if((i__10076_10209 < count__10075_10208)){
var vec__10083_10210 = chunk__10074_10207.cljs$core$IIndexed$_nth$arity$2(null,i__10076_10209);
var __10211 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10083_10210,(0),null);
var system_10212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10083_10210,(1),null);
var cb_10213 = threeagent.system.destroy(system_10212,context__$1);
if(cljs.core.fn_QMARK_(cb_10213)){
callbacks.push(cb_10213);
} else {
}


var G__10214 = seq__10073_10206;
var G__10215 = chunk__10074_10207;
var G__10216 = count__10075_10208;
var G__10217 = (i__10076_10209 + (1));
seq__10073_10206 = G__10214;
chunk__10074_10207 = G__10215;
count__10075_10208 = G__10216;
i__10076_10209 = G__10217;
continue;
} else {
var temp__5753__auto___10218 = cljs.core.seq(seq__10073_10206);
if(temp__5753__auto___10218){
var seq__10073_10219__$1 = temp__5753__auto___10218;
if(cljs.core.chunked_seq_QMARK_(seq__10073_10219__$1)){
var c__4638__auto___10220 = cljs.core.chunk_first(seq__10073_10219__$1);
var G__10221 = cljs.core.chunk_rest(seq__10073_10219__$1);
var G__10222 = c__4638__auto___10220;
var G__10223 = cljs.core.count(c__4638__auto___10220);
var G__10224 = (0);
seq__10073_10206 = G__10221;
chunk__10074_10207 = G__10222;
count__10075_10208 = G__10223;
i__10076_10209 = G__10224;
continue;
} else {
var vec__10086_10225 = cljs.core.first(seq__10073_10219__$1);
var __10226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10086_10225,(0),null);
var system_10227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10086_10225,(1),null);
var cb_10228 = threeagent.system.destroy(system_10227,context__$1);
if(cljs.core.fn_QMARK_(cb_10228)){
callbacks.push(cb_10228);
} else {
}


var G__10229 = cljs.core.next(seq__10073_10219__$1);
var G__10230 = null;
var G__10231 = (0);
var G__10232 = (0);
seq__10073_10206 = G__10229;
chunk__10074_10207 = G__10230;
count__10075_10208 = G__10231;
i__10076_10209 = G__10232;
continue;
}
} else {
}
}
break;
}

var seq__10089 = cljs.core.seq(callbacks);
var chunk__10090 = null;
var count__10091 = (0);
var i__10092 = (0);
while(true){
if((i__10092 < count__10091)){
var cb = chunk__10090.cljs$core$IIndexed$_nth$arity$2(null,i__10092);
(cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));


var G__10233 = seq__10089;
var G__10234 = chunk__10090;
var G__10235 = count__10091;
var G__10236 = (i__10092 + (1));
seq__10089 = G__10233;
chunk__10090 = G__10234;
count__10091 = G__10235;
i__10092 = G__10236;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__10089);
if(temp__5753__auto__){
var seq__10089__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10089__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__10089__$1);
var G__10237 = cljs.core.chunk_rest(seq__10089__$1);
var G__10238 = c__4638__auto__;
var G__10239 = cljs.core.count(c__4638__auto__);
var G__10240 = (0);
seq__10089 = G__10237;
chunk__10090 = G__10238;
count__10091 = G__10239;
i__10092 = G__10240;
continue;
} else {
var cb = cljs.core.first(seq__10089__$1);
(cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));


var G__10241 = cljs.core.next(seq__10089__$1);
var G__10242 = null;
var G__10243 = (0);
var G__10244 = (0);
seq__10089 = G__10241;
chunk__10090 = G__10242;
count__10091 = G__10243;
i__10092 = G__10244;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=threeagent.impl.system.js.map
