goog.provide('borkdude.dynaload');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
borkdude.dynaload.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(borkdude.dynaload.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((!((self__.cached == null)))){
return self__.cached;
} else {
var x = (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
if((x == null)){
} else {
(self__.cached = x);
}

return x;
}
}));

(borkdude.dynaload.LazyVar.prototype.call = (function() {
var G__11128 = null;
var G__11128__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__11082 = cljs.core.deref(this$);
return (fexpr__11082.cljs$core$IFn$_invoke$arity$0 ? fexpr__11082.cljs$core$IFn$_invoke$arity$0() : fexpr__11082.call(null));
});
var G__11128__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__11083 = cljs.core.deref(this$);
return (fexpr__11083.cljs$core$IFn$_invoke$arity$1 ? fexpr__11083.cljs$core$IFn$_invoke$arity$1(a) : fexpr__11083.call(null,a));
});
var G__11128__3 = (function (self__,a,b){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__11084 = cljs.core.deref(this$);
return (fexpr__11084.cljs$core$IFn$_invoke$arity$2 ? fexpr__11084.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__11084.call(null,a,b));
});
var G__11128__4 = (function (self__,a,b,c){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__11085 = cljs.core.deref(this$);
return (fexpr__11085.cljs$core$IFn$_invoke$arity$3 ? fexpr__11085.cljs$core$IFn$_invoke$arity$3(a,b,c) : fexpr__11085.call(null,a,b,c));
});
var G__11128__5 = (function (self__,a,b,c,d){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__11086 = cljs.core.deref(this$);
return (fexpr__11086.cljs$core$IFn$_invoke$arity$4 ? fexpr__11086.cljs$core$IFn$_invoke$arity$4(a,b,c,d) : fexpr__11086.call(null,a,b,c,d));
});
var G__11128__6 = (function (self__,a,b,c,d,e){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__11087 = cljs.core.deref(this$);
return (fexpr__11087.cljs$core$IFn$_invoke$arity$5 ? fexpr__11087.cljs$core$IFn$_invoke$arity$5(a,b,c,d,e) : fexpr__11087.call(null,a,b,c,d,e));
});
var G__11128__7 = (function (self__,a,b,c,d,e,f__$1){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__11088 = cljs.core.deref(this$);
return (fexpr__11088.cljs$core$IFn$_invoke$arity$6 ? fexpr__11088.cljs$core$IFn$_invoke$arity$6(a,b,c,d,e,f__$1) : fexpr__11088.call(null,a,b,c,d,e,f__$1));
});
var G__11128__8 = (function (self__,a,b,c,d,e,f__$1,g){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__11089 = cljs.core.deref(this$);
return (fexpr__11089.cljs$core$IFn$_invoke$arity$7 ? fexpr__11089.cljs$core$IFn$_invoke$arity$7(a,b,c,d,e,f__$1,g) : fexpr__11089.call(null,a,b,c,d,e,f__$1,g));
});
var G__11128__9 = (function (self__,a,b,c,d,e,f__$1,g,h){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__11090 = cljs.core.deref(this$);
return (fexpr__11090.cljs$core$IFn$_invoke$arity$8 ? fexpr__11090.cljs$core$IFn$_invoke$arity$8(a,b,c,d,e,f__$1,g,h) : fexpr__11090.call(null,a,b,c,d,e,f__$1,g,h));
});
var G__11128__10 = (function (self__,a,b,c,d,e,f__$1,g,h,i){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__11091 = cljs.core.deref(this$);
return (fexpr__11091.cljs$core$IFn$_invoke$arity$9 ? fexpr__11091.cljs$core$IFn$_invoke$arity$9(a,b,c,d,e,f__$1,g,h,i) : fexpr__11091.call(null,a,b,c,d,e,f__$1,g,h,i));
});
var G__11128__11 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__11092 = cljs.core.deref(this$);
return (fexpr__11092.cljs$core$IFn$_invoke$arity$10 ? fexpr__11092.cljs$core$IFn$_invoke$arity$10(a,b,c,d,e,f__$1,g,h,i,j) : fexpr__11092.call(null,a,b,c,d,e,f__$1,g,h,i,j));
});
var G__11128__12 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__11093 = cljs.core.deref(this$);
return (fexpr__11093.cljs$core$IFn$_invoke$arity$11 ? fexpr__11093.cljs$core$IFn$_invoke$arity$11(a,b,c,d,e,f__$1,g,h,i,j,k) : fexpr__11093.call(null,a,b,c,d,e,f__$1,g,h,i,j,k));
});
var G__11128__13 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__11094 = cljs.core.deref(this$);
return (fexpr__11094.cljs$core$IFn$_invoke$arity$12 ? fexpr__11094.cljs$core$IFn$_invoke$arity$12(a,b,c,d,e,f__$1,g,h,i,j,k,l) : fexpr__11094.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l));
});
var G__11128__14 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__11095 = cljs.core.deref(this$);
return (fexpr__11095.cljs$core$IFn$_invoke$arity$13 ? fexpr__11095.cljs$core$IFn$_invoke$arity$13(a,b,c,d,e,f__$1,g,h,i,j,k,l,m) : fexpr__11095.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m));
});
var G__11128__15 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__11096 = cljs.core.deref(this$);
return (fexpr__11096.cljs$core$IFn$_invoke$arity$14 ? fexpr__11096.cljs$core$IFn$_invoke$arity$14(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n) : fexpr__11096.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n));
});
var G__11128__16 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__11097 = cljs.core.deref(this$);
return (fexpr__11097.cljs$core$IFn$_invoke$arity$15 ? fexpr__11097.cljs$core$IFn$_invoke$arity$15(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o) : fexpr__11097.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o));
});
var G__11128__17 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__11098 = cljs.core.deref(this$);
return (fexpr__11098.cljs$core$IFn$_invoke$arity$16 ? fexpr__11098.cljs$core$IFn$_invoke$arity$16(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p) : fexpr__11098.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p));
});
var G__11128__18 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__11099 = cljs.core.deref(this$);
return (fexpr__11099.cljs$core$IFn$_invoke$arity$17 ? fexpr__11099.cljs$core$IFn$_invoke$arity$17(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q) : fexpr__11099.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q));
});
var G__11128__19 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__11100 = cljs.core.deref(this$);
return (fexpr__11100.cljs$core$IFn$_invoke$arity$18 ? fexpr__11100.cljs$core$IFn$_invoke$arity$18(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r) : fexpr__11100.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r));
});
var G__11128__20 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__11101 = cljs.core.deref(this$);
return (fexpr__11101.cljs$core$IFn$_invoke$arity$19 ? fexpr__11101.cljs$core$IFn$_invoke$arity$19(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s) : fexpr__11101.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s));
});
var G__11128__21 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var fexpr__11102 = cljs.core.deref(this$);
return (fexpr__11102.cljs$core$IFn$_invoke$arity$20 ? fexpr__11102.cljs$core$IFn$_invoke$arity$20(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t) : fexpr__11102.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t));
});
var G__11128__22 = (function (self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(this$),a,b,c,d,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__11128 = function(self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__11128__1.call(this,self__);
case 2:
return G__11128__2.call(this,self__,a);
case 3:
return G__11128__3.call(this,self__,a,b);
case 4:
return G__11128__4.call(this,self__,a,b,c);
case 5:
return G__11128__5.call(this,self__,a,b,c,d);
case 6:
return G__11128__6.call(this,self__,a,b,c,d,e);
case 7:
return G__11128__7.call(this,self__,a,b,c,d,e,f__$1);
case 8:
return G__11128__8.call(this,self__,a,b,c,d,e,f__$1,g);
case 9:
return G__11128__9.call(this,self__,a,b,c,d,e,f__$1,g,h);
case 10:
return G__11128__10.call(this,self__,a,b,c,d,e,f__$1,g,h,i);
case 11:
return G__11128__11.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j);
case 12:
return G__11128__12.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k);
case 13:
return G__11128__13.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l);
case 14:
return G__11128__14.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m);
case 15:
return G__11128__15.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n);
case 16:
return G__11128__16.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o);
case 17:
return G__11128__17.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__11128__18.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__11128__19.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__11128__20.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__11128__21.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__11128__22.call(this,self__,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__11128.cljs$core$IFn$_invoke$arity$1 = G__11128__1;
G__11128.cljs$core$IFn$_invoke$arity$2 = G__11128__2;
G__11128.cljs$core$IFn$_invoke$arity$3 = G__11128__3;
G__11128.cljs$core$IFn$_invoke$arity$4 = G__11128__4;
G__11128.cljs$core$IFn$_invoke$arity$5 = G__11128__5;
G__11128.cljs$core$IFn$_invoke$arity$6 = G__11128__6;
G__11128.cljs$core$IFn$_invoke$arity$7 = G__11128__7;
G__11128.cljs$core$IFn$_invoke$arity$8 = G__11128__8;
G__11128.cljs$core$IFn$_invoke$arity$9 = G__11128__9;
G__11128.cljs$core$IFn$_invoke$arity$10 = G__11128__10;
G__11128.cljs$core$IFn$_invoke$arity$11 = G__11128__11;
G__11128.cljs$core$IFn$_invoke$arity$12 = G__11128__12;
G__11128.cljs$core$IFn$_invoke$arity$13 = G__11128__13;
G__11128.cljs$core$IFn$_invoke$arity$14 = G__11128__14;
G__11128.cljs$core$IFn$_invoke$arity$15 = G__11128__15;
G__11128.cljs$core$IFn$_invoke$arity$16 = G__11128__16;
G__11128.cljs$core$IFn$_invoke$arity$17 = G__11128__17;
G__11128.cljs$core$IFn$_invoke$arity$18 = G__11128__18;
G__11128.cljs$core$IFn$_invoke$arity$19 = G__11128__19;
G__11128.cljs$core$IFn$_invoke$arity$20 = G__11128__20;
G__11128.cljs$core$IFn$_invoke$arity$21 = G__11128__21;
G__11128.cljs$core$IFn$_invoke$arity$22 = G__11128__22;
return G__11128;
})()
);

(borkdude.dynaload.LazyVar.prototype.apply = (function (self__,args11081){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args11081)));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
var fexpr__11103 = cljs.core.deref(this$);
return (fexpr__11103.cljs$core$IFn$_invoke$arity$0 ? fexpr__11103.cljs$core$IFn$_invoke$arity$0() : fexpr__11103.call(null));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var this$ = this;
var fexpr__11104 = cljs.core.deref(this$);
return (fexpr__11104.cljs$core$IFn$_invoke$arity$1 ? fexpr__11104.cljs$core$IFn$_invoke$arity$1(a) : fexpr__11104.call(null,a));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var this$ = this;
var fexpr__11105 = cljs.core.deref(this$);
return (fexpr__11105.cljs$core$IFn$_invoke$arity$2 ? fexpr__11105.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__11105.call(null,a,b));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var this$ = this;
var fexpr__11106 = cljs.core.deref(this$);
return (fexpr__11106.cljs$core$IFn$_invoke$arity$3 ? fexpr__11106.cljs$core$IFn$_invoke$arity$3(a,b,c) : fexpr__11106.call(null,a,b,c));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var this$ = this;
var fexpr__11107 = cljs.core.deref(this$);
return (fexpr__11107.cljs$core$IFn$_invoke$arity$4 ? fexpr__11107.cljs$core$IFn$_invoke$arity$4(a,b,c,d) : fexpr__11107.call(null,a,b,c,d));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var this$ = this;
var fexpr__11108 = cljs.core.deref(this$);
return (fexpr__11108.cljs$core$IFn$_invoke$arity$5 ? fexpr__11108.cljs$core$IFn$_invoke$arity$5(a,b,c,d,e) : fexpr__11108.call(null,a,b,c,d,e));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f__$1){
var self__ = this;
var this$ = this;
var fexpr__11109 = cljs.core.deref(this$);
return (fexpr__11109.cljs$core$IFn$_invoke$arity$6 ? fexpr__11109.cljs$core$IFn$_invoke$arity$6(a,b,c,d,e,f__$1) : fexpr__11109.call(null,a,b,c,d,e,f__$1));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f__$1,g){
var self__ = this;
var this$ = this;
var fexpr__11110 = cljs.core.deref(this$);
return (fexpr__11110.cljs$core$IFn$_invoke$arity$7 ? fexpr__11110.cljs$core$IFn$_invoke$arity$7(a,b,c,d,e,f__$1,g) : fexpr__11110.call(null,a,b,c,d,e,f__$1,g));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f__$1,g,h){
var self__ = this;
var this$ = this;
var fexpr__11111 = cljs.core.deref(this$);
return (fexpr__11111.cljs$core$IFn$_invoke$arity$8 ? fexpr__11111.cljs$core$IFn$_invoke$arity$8(a,b,c,d,e,f__$1,g,h) : fexpr__11111.call(null,a,b,c,d,e,f__$1,g,h));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f__$1,g,h,i){
var self__ = this;
var this$ = this;
var fexpr__11112 = cljs.core.deref(this$);
return (fexpr__11112.cljs$core$IFn$_invoke$arity$9 ? fexpr__11112.cljs$core$IFn$_invoke$arity$9(a,b,c,d,e,f__$1,g,h,i) : fexpr__11112.call(null,a,b,c,d,e,f__$1,g,h,i));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f__$1,g,h,i,j){
var self__ = this;
var this$ = this;
var fexpr__11113 = cljs.core.deref(this$);
return (fexpr__11113.cljs$core$IFn$_invoke$arity$10 ? fexpr__11113.cljs$core$IFn$_invoke$arity$10(a,b,c,d,e,f__$1,g,h,i,j) : fexpr__11113.call(null,a,b,c,d,e,f__$1,g,h,i,j));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f__$1,g,h,i,j,k){
var self__ = this;
var this$ = this;
var fexpr__11114 = cljs.core.deref(this$);
return (fexpr__11114.cljs$core$IFn$_invoke$arity$11 ? fexpr__11114.cljs$core$IFn$_invoke$arity$11(a,b,c,d,e,f__$1,g,h,i,j,k) : fexpr__11114.call(null,a,b,c,d,e,f__$1,g,h,i,j,k));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l){
var self__ = this;
var this$ = this;
var fexpr__11115 = cljs.core.deref(this$);
return (fexpr__11115.cljs$core$IFn$_invoke$arity$12 ? fexpr__11115.cljs$core$IFn$_invoke$arity$12(a,b,c,d,e,f__$1,g,h,i,j,k,l) : fexpr__11115.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m){
var self__ = this;
var this$ = this;
var fexpr__11116 = cljs.core.deref(this$);
return (fexpr__11116.cljs$core$IFn$_invoke$arity$13 ? fexpr__11116.cljs$core$IFn$_invoke$arity$13(a,b,c,d,e,f__$1,g,h,i,j,k,l,m) : fexpr__11116.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n){
var self__ = this;
var this$ = this;
var fexpr__11117 = cljs.core.deref(this$);
return (fexpr__11117.cljs$core$IFn$_invoke$arity$14 ? fexpr__11117.cljs$core$IFn$_invoke$arity$14(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n) : fexpr__11117.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o){
var self__ = this;
var this$ = this;
var fexpr__11118 = cljs.core.deref(this$);
return (fexpr__11118.cljs$core$IFn$_invoke$arity$15 ? fexpr__11118.cljs$core$IFn$_invoke$arity$15(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o) : fexpr__11118.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var this$ = this;
var fexpr__11119 = cljs.core.deref(this$);
return (fexpr__11119.cljs$core$IFn$_invoke$arity$16 ? fexpr__11119.cljs$core$IFn$_invoke$arity$16(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p) : fexpr__11119.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var this$ = this;
var fexpr__11120 = cljs.core.deref(this$);
return (fexpr__11120.cljs$core$IFn$_invoke$arity$17 ? fexpr__11120.cljs$core$IFn$_invoke$arity$17(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q) : fexpr__11120.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var this$ = this;
var fexpr__11121 = cljs.core.deref(this$);
return (fexpr__11121.cljs$core$IFn$_invoke$arity$18 ? fexpr__11121.cljs$core$IFn$_invoke$arity$18(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r) : fexpr__11121.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var this$ = this;
var fexpr__11122 = cljs.core.deref(this$);
return (fexpr__11122.cljs$core$IFn$_invoke$arity$19 ? fexpr__11122.cljs$core$IFn$_invoke$arity$19(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s) : fexpr__11122.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var this$ = this;
var fexpr__11123 = cljs.core.deref(this$);
return (fexpr__11123.cljs$core$IFn$_invoke$arity$20 ? fexpr__11123.cljs$core$IFn$_invoke$arity$20(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t) : fexpr__11123.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t));
}));

(borkdude.dynaload.LazyVar.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self__ = this;
var this$ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(this$),a,b,c,d,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
}));

(borkdude.dynaload.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(borkdude.dynaload.LazyVar.cljs$lang$type = true);

(borkdude.dynaload.LazyVar.cljs$lang$ctorStr = "borkdude.dynaload/LazyVar");

(borkdude.dynaload.LazyVar.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"borkdude.dynaload/LazyVar");
}));

/**
 * Positional factory function for borkdude.dynaload/LazyVar.
 */
borkdude.dynaload.__GT_LazyVar = (function borkdude$dynaload$__GT_LazyVar(f,cached){
return (new borkdude.dynaload.LazyVar(f,cached));
});


//# sourceMappingURL=borkdude.dynaload.js.map
