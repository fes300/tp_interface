// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args21955 = [];
var len__17843__auto___21961 = arguments.length;
var i__17844__auto___21962 = (0);
while(true){
if((i__17844__auto___21962 < len__17843__auto___21961)){
args21955.push((arguments[i__17844__auto___21962]));

var G__21963 = (i__17844__auto___21962 + (1));
i__17844__auto___21962 = G__21963;
continue;
} else {
}
break;
}

var G__21957 = args21955.length;
switch (G__21957) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21955.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async21958 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21958 = (function (f,blockable,meta21959){
this.f = f;
this.blockable = blockable;
this.meta21959 = meta21959;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21960,meta21959__$1){
var self__ = this;
var _21960__$1 = this;
return (new cljs.core.async.t_cljs$core$async21958(self__.f,self__.blockable,meta21959__$1));
});

cljs.core.async.t_cljs$core$async21958.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21960){
var self__ = this;
var _21960__$1 = this;
return self__.meta21959;
});

cljs.core.async.t_cljs$core$async21958.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21958.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21958.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21958.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21958.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21959","meta21959",-1620340374,null)], null);
});

cljs.core.async.t_cljs$core$async21958.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21958.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21958";

cljs.core.async.t_cljs$core$async21958.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async21958");
});

cljs.core.async.__GT_t_cljs$core$async21958 = (function cljs$core$async$__GT_t_cljs$core$async21958(f__$1,blockable__$1,meta21959){
return (new cljs.core.async.t_cljs$core$async21958(f__$1,blockable__$1,meta21959));
});

}

return (new cljs.core.async.t_cljs$core$async21958(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args21967 = [];
var len__17843__auto___21970 = arguments.length;
var i__17844__auto___21971 = (0);
while(true){
if((i__17844__auto___21971 < len__17843__auto___21970)){
args21967.push((arguments[i__17844__auto___21971]));

var G__21972 = (i__17844__auto___21971 + (1));
i__17844__auto___21971 = G__21972;
continue;
} else {
}
break;
}

var G__21969 = args21967.length;
switch (G__21969) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21967.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args21974 = [];
var len__17843__auto___21977 = arguments.length;
var i__17844__auto___21978 = (0);
while(true){
if((i__17844__auto___21978 < len__17843__auto___21977)){
args21974.push((arguments[i__17844__auto___21978]));

var G__21979 = (i__17844__auto___21978 + (1));
i__17844__auto___21978 = G__21979;
continue;
} else {
}
break;
}

var G__21976 = args21974.length;
switch (G__21976) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21974.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args21981 = [];
var len__17843__auto___21984 = arguments.length;
var i__17844__auto___21985 = (0);
while(true){
if((i__17844__auto___21985 < len__17843__auto___21984)){
args21981.push((arguments[i__17844__auto___21985]));

var G__21986 = (i__17844__auto___21985 + (1));
i__17844__auto___21985 = G__21986;
continue;
} else {
}
break;
}

var G__21983 = args21981.length;
switch (G__21983) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21981.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_21988 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21988);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21988,ret){
return (function (){
return fn1.call(null,val_21988);
});})(val_21988,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args21989 = [];
var len__17843__auto___21992 = arguments.length;
var i__17844__auto___21993 = (0);
while(true){
if((i__17844__auto___21993 < len__17843__auto___21992)){
args21989.push((arguments[i__17844__auto___21993]));

var G__21994 = (i__17844__auto___21993 + (1));
i__17844__auto___21993 = G__21994;
continue;
} else {
}
break;
}

var G__21991 = args21989.length;
switch (G__21991) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21989.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17688__auto___21996 = n;
var x_21997 = (0);
while(true){
if((x_21997 < n__17688__auto___21996)){
(a[x_21997] = (0));

var G__21998 = (x_21997 + (1));
x_21997 = G__21998;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__21999 = (i + (1));
i = G__21999;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async22003 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22003 = (function (alt_flag,flag,meta22004){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta22004 = meta22004;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22005,meta22004__$1){
var self__ = this;
var _22005__$1 = this;
return (new cljs.core.async.t_cljs$core$async22003(self__.alt_flag,self__.flag,meta22004__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22003.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22005){
var self__ = this;
var _22005__$1 = this;
return self__.meta22004;
});})(flag))
;

cljs.core.async.t_cljs$core$async22003.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22003.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22003.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22003.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22003.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22004","meta22004",135506286,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22003.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22003.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22003";

cljs.core.async.t_cljs$core$async22003.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async22003");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22003 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22003(alt_flag__$1,flag__$1,meta22004){
return (new cljs.core.async.t_cljs$core$async22003(alt_flag__$1,flag__$1,meta22004));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22003(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22009 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22009 = (function (alt_handler,flag,cb,meta22010){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta22010 = meta22010;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22011,meta22010__$1){
var self__ = this;
var _22011__$1 = this;
return (new cljs.core.async.t_cljs$core$async22009(self__.alt_handler,self__.flag,self__.cb,meta22010__$1));
});

cljs.core.async.t_cljs$core$async22009.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22011){
var self__ = this;
var _22011__$1 = this;
return self__.meta22010;
});

cljs.core.async.t_cljs$core$async22009.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22009.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22009.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22009.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22009.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22010","meta22010",983061978,null)], null);
});

cljs.core.async.t_cljs$core$async22009.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22009.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22009";

cljs.core.async.t_cljs$core$async22009.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async22009");
});

cljs.core.async.__GT_t_cljs$core$async22009 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22009(alt_handler__$1,flag__$1,cb__$1,meta22010){
return (new cljs.core.async.t_cljs$core$async22009(alt_handler__$1,flag__$1,cb__$1,meta22010));
});

}

return (new cljs.core.async.t_cljs$core$async22009(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22012_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22012_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22013_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22013_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16785__auto__ = wport;
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22014 = (i + (1));
i = G__22014;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16785__auto__ = ret;
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16773__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16773__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16773__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17850__auto__ = [];
var len__17843__auto___22020 = arguments.length;
var i__17844__auto___22021 = (0);
while(true){
if((i__17844__auto___22021 < len__17843__auto___22020)){
args__17850__auto__.push((arguments[i__17844__auto___22021]));

var G__22022 = (i__17844__auto___22021 + (1));
i__17844__auto___22021 = G__22022;
continue;
} else {
}
break;
}

var argseq__17851__auto__ = ((((1) < args__17850__auto__.length))?(new cljs.core.IndexedSeq(args__17850__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17851__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22017){
var map__22018 = p__22017;
var map__22018__$1 = ((((!((map__22018 == null)))?((((map__22018.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22018.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22018):map__22018);
var opts = map__22018__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22015){
var G__22016 = cljs.core.first.call(null,seq22015);
var seq22015__$1 = cljs.core.next.call(null,seq22015);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22016,seq22015__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args22023 = [];
var len__17843__auto___22073 = arguments.length;
var i__17844__auto___22074 = (0);
while(true){
if((i__17844__auto___22074 < len__17843__auto___22073)){
args22023.push((arguments[i__17844__auto___22074]));

var G__22075 = (i__17844__auto___22074 + (1));
i__17844__auto___22074 = G__22075;
continue;
} else {
}
break;
}

var G__22025 = args22023.length;
switch (G__22025) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22023.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21910__auto___22077 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21910__auto___22077){
return (function (){
var f__21911__auto__ = (function (){var switch__21798__auto__ = ((function (c__21910__auto___22077){
return (function (state_22049){
var state_val_22050 = (state_22049[(1)]);
if((state_val_22050 === (7))){
var inst_22045 = (state_22049[(2)]);
var state_22049__$1 = state_22049;
var statearr_22051_22078 = state_22049__$1;
(statearr_22051_22078[(2)] = inst_22045);

(statearr_22051_22078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (1))){
var state_22049__$1 = state_22049;
var statearr_22052_22079 = state_22049__$1;
(statearr_22052_22079[(2)] = null);

(statearr_22052_22079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (4))){
var inst_22028 = (state_22049[(7)]);
var inst_22028__$1 = (state_22049[(2)]);
var inst_22029 = (inst_22028__$1 == null);
var state_22049__$1 = (function (){var statearr_22053 = state_22049;
(statearr_22053[(7)] = inst_22028__$1);

return statearr_22053;
})();
if(cljs.core.truth_(inst_22029)){
var statearr_22054_22080 = state_22049__$1;
(statearr_22054_22080[(1)] = (5));

} else {
var statearr_22055_22081 = state_22049__$1;
(statearr_22055_22081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (13))){
var state_22049__$1 = state_22049;
var statearr_22056_22082 = state_22049__$1;
(statearr_22056_22082[(2)] = null);

(statearr_22056_22082[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (6))){
var inst_22028 = (state_22049[(7)]);
var state_22049__$1 = state_22049;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22049__$1,(11),to,inst_22028);
} else {
if((state_val_22050 === (3))){
var inst_22047 = (state_22049[(2)]);
var state_22049__$1 = state_22049;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22049__$1,inst_22047);
} else {
if((state_val_22050 === (12))){
var state_22049__$1 = state_22049;
var statearr_22057_22083 = state_22049__$1;
(statearr_22057_22083[(2)] = null);

(statearr_22057_22083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (2))){
var state_22049__$1 = state_22049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22049__$1,(4),from);
} else {
if((state_val_22050 === (11))){
var inst_22038 = (state_22049[(2)]);
var state_22049__$1 = state_22049;
if(cljs.core.truth_(inst_22038)){
var statearr_22058_22084 = state_22049__$1;
(statearr_22058_22084[(1)] = (12));

} else {
var statearr_22059_22085 = state_22049__$1;
(statearr_22059_22085[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (9))){
var state_22049__$1 = state_22049;
var statearr_22060_22086 = state_22049__$1;
(statearr_22060_22086[(2)] = null);

(statearr_22060_22086[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (5))){
var state_22049__$1 = state_22049;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22061_22087 = state_22049__$1;
(statearr_22061_22087[(1)] = (8));

} else {
var statearr_22062_22088 = state_22049__$1;
(statearr_22062_22088[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (14))){
var inst_22043 = (state_22049[(2)]);
var state_22049__$1 = state_22049;
var statearr_22063_22089 = state_22049__$1;
(statearr_22063_22089[(2)] = inst_22043);

(statearr_22063_22089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (10))){
var inst_22035 = (state_22049[(2)]);
var state_22049__$1 = state_22049;
var statearr_22064_22090 = state_22049__$1;
(statearr_22064_22090[(2)] = inst_22035);

(statearr_22064_22090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22050 === (8))){
var inst_22032 = cljs.core.async.close_BANG_.call(null,to);
var state_22049__$1 = state_22049;
var statearr_22065_22091 = state_22049__$1;
(statearr_22065_22091[(2)] = inst_22032);

(statearr_22065_22091[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21910__auto___22077))
;
return ((function (switch__21798__auto__,c__21910__auto___22077){
return (function() {
var cljs$core$async$state_machine__21799__auto__ = null;
var cljs$core$async$state_machine__21799__auto____0 = (function (){
var statearr_22069 = [null,null,null,null,null,null,null,null];
(statearr_22069[(0)] = cljs$core$async$state_machine__21799__auto__);

(statearr_22069[(1)] = (1));

return statearr_22069;
});
var cljs$core$async$state_machine__21799__auto____1 = (function (state_22049){
while(true){
var ret_value__21800__auto__ = (function (){try{while(true){
var result__21801__auto__ = switch__21798__auto__.call(null,state_22049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21801__auto__;
}
break;
}
}catch (e22070){if((e22070 instanceof Object)){
var ex__21802__auto__ = e22070;
var statearr_22071_22092 = state_22049;
(statearr_22071_22092[(5)] = ex__21802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22093 = state_22049;
state_22049 = G__22093;
continue;
} else {
return ret_value__21800__auto__;
}
break;
}
});
cljs$core$async$state_machine__21799__auto__ = function(state_22049){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21799__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21799__auto____1.call(this,state_22049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21799__auto____0;
cljs$core$async$state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21799__auto____1;
return cljs$core$async$state_machine__21799__auto__;
})()
;})(switch__21798__auto__,c__21910__auto___22077))
})();
var state__21912__auto__ = (function (){var statearr_22072 = f__21911__auto__.call(null);
(statearr_22072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21910__auto___22077);

return statearr_22072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21912__auto__);
});})(c__21910__auto___22077))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__22277){
var vec__22278 = p__22277;
var v = cljs.core.nth.call(null,vec__22278,(0),null);
var p = cljs.core.nth.call(null,vec__22278,(1),null);
var job = vec__22278;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21910__auto___22460 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21910__auto___22460,res,vec__22278,v,p,job,jobs,results){
return (function (){
var f__21911__auto__ = (function (){var switch__21798__auto__ = ((function (c__21910__auto___22460,res,vec__22278,v,p,job,jobs,results){
return (function (state_22283){
var state_val_22284 = (state_22283[(1)]);
if((state_val_22284 === (1))){
var state_22283__$1 = state_22283;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22283__$1,(2),res,v);
} else {
if((state_val_22284 === (2))){
var inst_22280 = (state_22283[(2)]);
var inst_22281 = cljs.core.async.close_BANG_.call(null,res);
var state_22283__$1 = (function (){var statearr_22285 = state_22283;
(statearr_22285[(7)] = inst_22280);

return statearr_22285;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22283__$1,inst_22281);
} else {
return null;
}
}
});})(c__21910__auto___22460,res,vec__22278,v,p,job,jobs,results))
;
return ((function (switch__21798__auto__,c__21910__auto___22460,res,vec__22278,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21799__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21799__auto____0 = (function (){
var statearr_22289 = [null,null,null,null,null,null,null,null];
(statearr_22289[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21799__auto__);

(statearr_22289[(1)] = (1));

return statearr_22289;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21799__auto____1 = (function (state_22283){
while(true){
var ret_value__21800__auto__ = (function (){try{while(true){
var result__21801__auto__ = switch__21798__auto__.call(null,state_22283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21801__auto__;
}
break;
}
}catch (e22290){if((e22290 instanceof Object)){
var ex__21802__auto__ = e22290;
var statearr_22291_22461 = state_22283;
(statearr_22291_22461[(5)] = ex__21802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22462 = state_22283;
state_22283 = G__22462;
continue;
} else {
return ret_value__21800__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21799__auto__ = function(state_22283){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21799__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21799__auto____1.call(this,state_22283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21799__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21799__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21799__auto__;
})()
;})(switch__21798__auto__,c__21910__auto___22460,res,vec__22278,v,p,job,jobs,results))
})();
var state__21912__auto__ = (function (){var statearr_22292 = f__21911__auto__.call(null);
(statearr_22292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21910__auto___22460);

return statearr_22292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21912__auto__);
});})(c__21910__auto___22460,res,vec__22278,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22293){
var vec__22294 = p__22293;
var v = cljs.core.nth.call(null,vec__22294,(0),null);
var p = cljs.core.nth.call(null,vec__22294,(1),null);
var job = vec__22294;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17688__auto___22463 = n;
var __22464 = (0);
while(true){
if((__22464 < n__17688__auto___22463)){
var G__22295_22465 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22295_22465) {
case "compute":
var c__21910__auto___22467 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22464,c__21910__auto___22467,G__22295_22465,n__17688__auto___22463,jobs,results,process,async){
return (function (){
var f__21911__auto__ = (function (){var switch__21798__auto__ = ((function (__22464,c__21910__auto___22467,G__22295_22465,n__17688__auto___22463,jobs,results,process,async){
return (function (state_22308){
var state_val_22309 = (state_22308[(1)]);
if((state_val_22309 === (1))){
var state_22308__$1 = state_22308;
var statearr_22310_22468 = state_22308__$1;
(statearr_22310_22468[(2)] = null);

(statearr_22310_22468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22309 === (2))){
var state_22308__$1 = state_22308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22308__$1,(4),jobs);
} else {
if((state_val_22309 === (3))){
var inst_22306 = (state_22308[(2)]);
var state_22308__$1 = state_22308;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22308__$1,inst_22306);
} else {
if((state_val_22309 === (4))){
var inst_22298 = (state_22308[(2)]);
var inst_22299 = process.call(null,inst_22298);
var state_22308__$1 = state_22308;
if(cljs.core.truth_(inst_22299)){
var statearr_22311_22469 = state_22308__$1;
(statearr_22311_22469[(1)] = (5));

} else {
var statearr_22312_22470 = state_22308__$1;
(statearr_22312_22470[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22309 === (5))){
var state_22308__$1 = state_22308;
var statearr_22313_22471 = state_22308__$1;
(statearr_22313_22471[(2)] = null);

(statearr_22313_22471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22309 === (6))){
var state_22308__$1 = state_22308;
var statearr_22314_22472 = state_22308__$1;
(statearr_22314_22472[(2)] = null);

(statearr_22314_22472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22309 === (7))){
var inst_22304 = (state_22308[(2)]);
var state_22308__$1 = state_22308;
var statearr_22315_22473 = state_22308__$1;
(statearr_22315_22473[(2)] = inst_22304);

(statearr_22315_22473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__22464,c__21910__auto___22467,G__22295_22465,n__17688__auto___22463,jobs,results,process,async))
;
return ((function (__22464,switch__21798__auto__,c__21910__auto___22467,G__22295_22465,n__17688__auto___22463,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21799__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21799__auto____0 = (function (){
var statearr_22319 = [null,null,null,null,null,null,null];
(statearr_22319[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21799__auto__);

(statearr_22319[(1)] = (1));

return statearr_22319;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21799__auto____1 = (function (state_22308){
while(true){
var ret_value__21800__auto__ = (function (){try{while(true){
var result__21801__auto__ = switch__21798__auto__.call(null,state_22308);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21801__auto__;
}
break;
}
}catch (e22320){if((e22320 instanceof Object)){
var ex__21802__auto__ = e22320;
var statearr_22321_22474 = state_22308;
(statearr_22321_22474[(5)] = ex__21802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22475 = state_22308;
state_22308 = G__22475;
continue;
} else {
return ret_value__21800__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21799__auto__ = function(state_22308){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21799__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21799__auto____1.call(this,state_22308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21799__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21799__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21799__auto__;
})()
;})(__22464,switch__21798__auto__,c__21910__auto___22467,G__22295_22465,n__17688__auto___22463,jobs,results,process,async))
})();
var state__21912__auto__ = (function (){var statearr_22322 = f__21911__auto__.call(null);
(statearr_22322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21910__auto___22467);

return statearr_22322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21912__auto__);
});})(__22464,c__21910__auto___22467,G__22295_22465,n__17688__auto___22463,jobs,results,process,async))
);


break;
case "async":
var c__21910__auto___22476 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22464,c__21910__auto___22476,G__22295_22465,n__17688__auto___22463,jobs,results,process,async){
return (function (){
var f__21911__auto__ = (function (){var switch__21798__auto__ = ((function (__22464,c__21910__auto___22476,G__22295_22465,n__17688__auto___22463,jobs,results,process,async){
return (function (state_22335){
var state_val_22336 = (state_22335[(1)]);
if((state_val_22336 === (1))){
var state_22335__$1 = state_22335;
var statearr_22337_22477 = state_22335__$1;
(statearr_22337_22477[(2)] = null);

(statearr_22337_22477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22336 === (2))){
var state_22335__$1 = state_22335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22335__$1,(4),jobs);
} else {
if((state_val_22336 === (3))){
var inst_22333 = (state_22335[(2)]);
var state_22335__$1 = state_22335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22335__$1,inst_22333);
} else {
if((state_val_22336 === (4))){
var inst_22325 = (state_22335[(2)]);
var inst_22326 = async.call(null,inst_22325);
var state_22335__$1 = state_22335;
if(cljs.core.truth_(inst_22326)){
var statearr_22338_22478 = state_22335__$1;
(statearr_22338_22478[(1)] = (5));

} else {
var statearr_22339_22479 = state_22335__$1;
(statearr_22339_22479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22336 === (5))){
var state_22335__$1 = state_22335;
var statearr_22340_22480 = state_22335__$1;
(statearr_22340_22480[(2)] = null);

(statearr_22340_22480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22336 === (6))){
var state_22335__$1 = state_22335;
var statearr_22341_22481 = state_22335__$1;
(statearr_22341_22481[(2)] = null);

(statearr_22341_22481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22336 === (7))){
var inst_22331 = (state_22335[(2)]);
var state_22335__$1 = state_22335;
var statearr_22342_22482 = state_22335__$1;
(statearr_22342_22482[(2)] = inst_22331);

(statearr_22342_22482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__22464,c__21910__auto___22476,G__22295_22465,n__17688__auto___22463,jobs,results,process,async))
;
return ((function (__22464,switch__21798__auto__,c__21910__auto___22476,G__22295_22465,n__17688__auto___22463,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21799__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21799__auto____0 = (function (){
var statearr_22346 = [null,null,null,null,null,null,null];
(statearr_22346[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21799__auto__);

(statearr_22346[(1)] = (1));

return statearr_22346;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21799__auto____1 = (function (state_22335){
while(true){
var ret_value__21800__auto__ = (function (){try{while(true){
var result__21801__auto__ = switch__21798__auto__.call(null,state_22335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21801__auto__;
}
break;
}
}catch (e22347){if((e22347 instanceof Object)){
var ex__21802__auto__ = e22347;
var statearr_22348_22483 = state_22335;
(statearr_22348_22483[(5)] = ex__21802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22484 = state_22335;
state_22335 = G__22484;
continue;
} else {
return ret_value__21800__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21799__auto__ = function(state_22335){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21799__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21799__auto____1.call(this,state_22335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21799__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21799__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21799__auto__;
})()
;})(__22464,switch__21798__auto__,c__21910__auto___22476,G__22295_22465,n__17688__auto___22463,jobs,results,process,async))
})();
var state__21912__auto__ = (function (){var statearr_22349 = f__21911__auto__.call(null);
(statearr_22349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21910__auto___22476);

return statearr_22349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21912__auto__);
});})(__22464,c__21910__auto___22476,G__22295_22465,n__17688__auto___22463,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22485 = (__22464 + (1));
__22464 = G__22485;
continue;
} else {
}
break;
}

var c__21910__auto___22486 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21910__auto___22486,jobs,results,process,async){
return (function (){
var f__21911__auto__ = (function (){var switch__21798__auto__ = ((function (c__21910__auto___22486,jobs,results,process,async){
return (function (state_22371){
var state_val_22372 = (state_22371[(1)]);
if((state_val_22372 === (1))){
var state_22371__$1 = state_22371;
var statearr_22373_22487 = state_22371__$1;
(statearr_22373_22487[(2)] = null);

(statearr_22373_22487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22372 === (2))){
var state_22371__$1 = state_22371;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22371__$1,(4),from);
} else {
if((state_val_22372 === (3))){
var inst_22369 = (state_22371[(2)]);
var state_22371__$1 = state_22371;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22371__$1,inst_22369);
} else {
if((state_val_22372 === (4))){
var inst_22352 = (state_22371[(7)]);
var inst_22352__$1 = (state_22371[(2)]);
var inst_22353 = (inst_22352__$1 == null);
var state_22371__$1 = (function (){var statearr_22374 = state_22371;
(statearr_22374[(7)] = inst_22352__$1);

return statearr_22374;
})();
if(cljs.core.truth_(inst_22353)){
var statearr_22375_22488 = state_22371__$1;
(statearr_22375_22488[(1)] = (5));

} else {
var statearr_22376_22489 = state_22371__$1;
(statearr_22376_22489[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22372 === (5))){
var inst_22355 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22371__$1 = state_22371;
var statearr_22377_22490 = state_22371__$1;
(statearr_22377_22490[(2)] = inst_22355);

(statearr_22377_22490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22372 === (6))){
var inst_22357 = (state_22371[(8)]);
var inst_22352 = (state_22371[(7)]);
var inst_22357__$1 = cljs.core.async.chan.call(null,(1));
var inst_22358 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22359 = [inst_22352,inst_22357__$1];
var inst_22360 = (new cljs.core.PersistentVector(null,2,(5),inst_22358,inst_22359,null));
var state_22371__$1 = (function (){var statearr_22378 = state_22371;
(statearr_22378[(8)] = inst_22357__$1);

return statearr_22378;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22371__$1,(8),jobs,inst_22360);
} else {
if((state_val_22372 === (7))){
var inst_22367 = (state_22371[(2)]);
var state_22371__$1 = state_22371;
var statearr_22379_22491 = state_22371__$1;
(statearr_22379_22491[(2)] = inst_22367);

(statearr_22379_22491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22372 === (8))){
var inst_22357 = (state_22371[(8)]);
var inst_22362 = (state_22371[(2)]);
var state_22371__$1 = (function (){var statearr_22380 = state_22371;
(statearr_22380[(9)] = inst_22362);

return statearr_22380;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22371__$1,(9),results,inst_22357);
} else {
if((state_val_22372 === (9))){
var inst_22364 = (state_22371[(2)]);
var state_22371__$1 = (function (){var statearr_22381 = state_22371;
(statearr_22381[(10)] = inst_22364);

return statearr_22381;
})();
var statearr_22382_22492 = state_22371__$1;
(statearr_22382_22492[(2)] = null);

(statearr_22382_22492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__21910__auto___22486,jobs,results,process,async))
;
return ((function (switch__21798__auto__,c__21910__auto___22486,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21799__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21799__auto____0 = (function (){
var statearr_22386 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22386[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21799__auto__);

(statearr_22386[(1)] = (1));

return statearr_22386;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21799__auto____1 = (function (state_22371){
while(true){
var ret_value__21800__auto__ = (function (){try{while(true){
var result__21801__auto__ = switch__21798__auto__.call(null,state_22371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21801__auto__;
}
break;
}
}catch (e22387){if((e22387 instanceof Object)){
var ex__21802__auto__ = e22387;
var statearr_22388_22493 = state_22371;
(statearr_22388_22493[(5)] = ex__21802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22494 = state_22371;
state_22371 = G__22494;
continue;
} else {
return ret_value__21800__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21799__auto__ = function(state_22371){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21799__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21799__auto____1.call(this,state_22371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21799__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21799__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21799__auto__;
})()
;})(switch__21798__auto__,c__21910__auto___22486,jobs,results,process,async))
})();
var state__21912__auto__ = (function (){var statearr_22389 = f__21911__auto__.call(null);
(statearr_22389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21910__auto___22486);

return statearr_22389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21912__auto__);
});})(c__21910__auto___22486,jobs,results,process,async))
);


var c__21910__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21910__auto__,jobs,results,process,async){
return (function (){
var f__21911__auto__ = (function (){var switch__21798__auto__ = ((function (c__21910__auto__,jobs,results,process,async){
return (function (state_22427){
var state_val_22428 = (state_22427[(1)]);
if((state_val_22428 === (7))){
var inst_22423 = (state_22427[(2)]);
var state_22427__$1 = state_22427;
var statearr_22429_22495 = state_22427__$1;
(statearr_22429_22495[(2)] = inst_22423);

(statearr_22429_22495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22428 === (20))){
var state_22427__$1 = state_22427;
var statearr_22430_22496 = state_22427__$1;
(statearr_22430_22496[(2)] = null);

(statearr_22430_22496[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22428 === (1))){
var state_22427__$1 = state_22427;
var statearr_22431_22497 = state_22427__$1;
(statearr_22431_22497[(2)] = null);

(statearr_22431_22497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22428 === (4))){
var inst_22392 = (state_22427[(7)]);
var inst_22392__$1 = (state_22427[(2)]);
var inst_22393 = (inst_22392__$1 == null);
var state_22427__$1 = (function (){var statearr_22432 = state_22427;
(statearr_22432[(7)] = inst_22392__$1);

return statearr_22432;
})();
if(cljs.core.truth_(inst_22393)){
var statearr_22433_22498 = state_22427__$1;
(statearr_22433_22498[(1)] = (5));

} else {
var statearr_22434_22499 = state_22427__$1;
(statearr_22434_22499[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22428 === (15))){
var inst_22405 = (state_22427[(8)]);
var state_22427__$1 = state_22427;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22427__$1,(18),to,inst_22405);
} else {
if((state_val_22428 === (21))){
var inst_22418 = (state_22427[(2)]);
var state_22427__$1 = state_22427;
var statearr_22435_22500 = state_22427__$1;
(statearr_22435_22500[(2)] = inst_22418);

(statearr_22435_22500[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22428 === (13))){
var inst_22420 = (state_22427[(2)]);
var state_22427__$1 = (function (){var statearr_22436 = state_22427;
(statearr_22436[(9)] = inst_22420);

return statearr_22436;
})();
var statearr_22437_22501 = state_22427__$1;
(statearr_22437_22501[(2)] = null);

(statearr_22437_22501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22428 === (6))){
var inst_22392 = (state_22427[(7)]);
var state_22427__$1 = state_22427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22427__$1,(11),inst_22392);
} else {
if((state_val_22428 === (17))){
var inst_22413 = (state_22427[(2)]);
var state_22427__$1 = state_22427;
if(cljs.core.truth_(inst_22413)){
var statearr_22438_22502 = state_22427__$1;
(statearr_22438_22502[(1)] = (19));

} else {
var statearr_22439_22503 = state_22427__$1;
(statearr_22439_22503[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22428 === (3))){
var inst_22425 = (state_22427[(2)]);
var state_22427__$1 = state_22427;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22427__$1,inst_22425);
} else {
if((state_val_22428 === (12))){
var inst_22402 = (state_22427[(10)]);
var state_22427__$1 = state_22427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22427__$1,(14),inst_22402);
} else {
if((state_val_22428 === (2))){
var state_22427__$1 = state_22427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22427__$1,(4),results);
} else {
if((state_val_22428 === (19))){
var state_22427__$1 = state_22427;
var statearr_22440_22504 = state_22427__$1;
(statearr_22440_22504[(2)] = null);

(statearr_22440_22504[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22428 === (11))){
var inst_22402 = (state_22427[(2)]);
var state_22427__$1 = (function (){var statearr_22441 = state_22427;
(statearr_22441[(10)] = inst_22402);

return statearr_22441;
})();
var statearr_22442_22505 = state_22427__$1;
(statearr_22442_22505[(2)] = null);

(statearr_22442_22505[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22428 === (9))){
var state_22427__$1 = state_22427;
var statearr_22443_22506 = state_22427__$1;
(statearr_22443_22506[(2)] = null);

(statearr_22443_22506[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22428 === (5))){
var state_22427__$1 = state_22427;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22444_22507 = state_22427__$1;
(statearr_22444_22507[(1)] = (8));

} else {
var statearr_22445_22508 = state_22427__$1;
(statearr_22445_22508[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22428 === (14))){
var inst_22405 = (state_22427[(8)]);
var inst_22407 = (state_22427[(11)]);
var inst_22405__$1 = (state_22427[(2)]);
var inst_22406 = (inst_22405__$1 == null);
var inst_22407__$1 = cljs.core.not.call(null,inst_22406);
var state_22427__$1 = (function (){var statearr_22446 = state_22427;
(statearr_22446[(8)] = inst_22405__$1);

(statearr_22446[(11)] = inst_22407__$1);

return statearr_22446;
})();
if(inst_22407__$1){
var statearr_22447_22509 = state_22427__$1;
(statearr_22447_22509[(1)] = (15));

} else {
var statearr_22448_22510 = state_22427__$1;
(statearr_22448_22510[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22428 === (16))){
var inst_22407 = (state_22427[(11)]);
var state_22427__$1 = state_22427;
var statearr_22449_22511 = state_22427__$1;
(statearr_22449_22511[(2)] = inst_22407);

(statearr_22449_22511[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22428 === (10))){
var inst_22399 = (state_22427[(2)]);
var state_22427__$1 = state_22427;
var statearr_22450_22512 = state_22427__$1;
(statearr_22450_22512[(2)] = inst_22399);

(statearr_22450_22512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22428 === (18))){
var inst_22410 = (state_22427[(2)]);
var state_22427__$1 = state_22427;
var statearr_22451_22513 = state_22427__$1;
(statearr_22451_22513[(2)] = inst_22410);

(statearr_22451_22513[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22428 === (8))){
var inst_22396 = cljs.core.async.close_BANG_.call(null,to);
var state_22427__$1 = state_22427;
var statearr_22452_22514 = state_22427__$1;
(statearr_22452_22514[(2)] = inst_22396);

(statearr_22452_22514[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21910__auto__,jobs,results,process,async))
;
return ((function (switch__21798__auto__,c__21910__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21799__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21799__auto____0 = (function (){
var statearr_22456 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22456[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21799__auto__);

(statearr_22456[(1)] = (1));

return statearr_22456;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21799__auto____1 = (function (state_22427){
while(true){
var ret_value__21800__auto__ = (function (){try{while(true){
var result__21801__auto__ = switch__21798__auto__.call(null,state_22427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21801__auto__;
}
break;
}
}catch (e22457){if((e22457 instanceof Object)){
var ex__21802__auto__ = e22457;
var statearr_22458_22515 = state_22427;
(statearr_22458_22515[(5)] = ex__21802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22457;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22516 = state_22427;
state_22427 = G__22516;
continue;
} else {
return ret_value__21800__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21799__auto__ = function(state_22427){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21799__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21799__auto____1.call(this,state_22427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21799__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21799__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21799__auto__;
})()
;})(switch__21798__auto__,c__21910__auto__,jobs,results,process,async))
})();
var state__21912__auto__ = (function (){var statearr_22459 = f__21911__auto__.call(null);
(statearr_22459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21910__auto__);

return statearr_22459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21912__auto__);
});})(c__21910__auto__,jobs,results,process,async))
);

return c__21910__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args22517 = [];
var len__17843__auto___22520 = arguments.length;
var i__17844__auto___22521 = (0);
while(true){
if((i__17844__auto___22521 < len__17843__auto___22520)){
args22517.push((arguments[i__17844__auto___22521]));

var G__22522 = (i__17844__auto___22521 + (1));
i__17844__auto___22521 = G__22522;
continue;
} else {
}
break;
}

var G__22519 = args22517.length;
switch (G__22519) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22517.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args22524 = [];
var len__17843__auto___22527 = arguments.length;
var i__17844__auto___22528 = (0);
while(true){
if((i__17844__auto___22528 < len__17843__auto___22527)){
args22524.push((arguments[i__17844__auto___22528]));

var G__22529 = (i__17844__auto___22528 + (1));
i__17844__auto___22528 = G__22529;
continue;
} else {
}
break;
}

var G__22526 = args22524.length;
switch (G__22526) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22524.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args22531 = [];
var len__17843__auto___22584 = arguments.length;
var i__17844__auto___22585 = (0);
while(true){
if((i__17844__auto___22585 < len__17843__auto___22584)){
args22531.push((arguments[i__17844__auto___22585]));

var G__22586 = (i__17844__auto___22585 + (1));
i__17844__auto___22585 = G__22586;
continue;
} else {
}
break;
}

var G__22533 = args22531.length;
switch (G__22533) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22531.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21910__auto___22588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21910__auto___22588,tc,fc){
return (function (){
var f__21911__auto__ = (function (){var switch__21798__auto__ = ((function (c__21910__auto___22588,tc,fc){
return (function (state_22559){
var state_val_22560 = (state_22559[(1)]);
if((state_val_22560 === (7))){
var inst_22555 = (state_22559[(2)]);
var state_22559__$1 = state_22559;
var statearr_22561_22589 = state_22559__$1;
(statearr_22561_22589[(2)] = inst_22555);

(statearr_22561_22589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (1))){
var state_22559__$1 = state_22559;
var statearr_22562_22590 = state_22559__$1;
(statearr_22562_22590[(2)] = null);

(statearr_22562_22590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (4))){
var inst_22536 = (state_22559[(7)]);
var inst_22536__$1 = (state_22559[(2)]);
var inst_22537 = (inst_22536__$1 == null);
var state_22559__$1 = (function (){var statearr_22563 = state_22559;
(statearr_22563[(7)] = inst_22536__$1);

return statearr_22563;
})();
if(cljs.core.truth_(inst_22537)){
var statearr_22564_22591 = state_22559__$1;
(statearr_22564_22591[(1)] = (5));

} else {
var statearr_22565_22592 = state_22559__$1;
(statearr_22565_22592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (13))){
var state_22559__$1 = state_22559;
var statearr_22566_22593 = state_22559__$1;
(statearr_22566_22593[(2)] = null);

(statearr_22566_22593[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (6))){
var inst_22536 = (state_22559[(7)]);
var inst_22542 = p.call(null,inst_22536);
var state_22559__$1 = state_22559;
if(cljs.core.truth_(inst_22542)){
var statearr_22567_22594 = state_22559__$1;
(statearr_22567_22594[(1)] = (9));

} else {
var statearr_22568_22595 = state_22559__$1;
(statearr_22568_22595[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (3))){
var inst_22557 = (state_22559[(2)]);
var state_22559__$1 = state_22559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22559__$1,inst_22557);
} else {
if((state_val_22560 === (12))){
var state_22559__$1 = state_22559;
var statearr_22569_22596 = state_22559__$1;
(statearr_22569_22596[(2)] = null);

(statearr_22569_22596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (2))){
var state_22559__$1 = state_22559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22559__$1,(4),ch);
} else {
if((state_val_22560 === (11))){
var inst_22536 = (state_22559[(7)]);
var inst_22546 = (state_22559[(2)]);
var state_22559__$1 = state_22559;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22559__$1,(8),inst_22546,inst_22536);
} else {
if((state_val_22560 === (9))){
var state_22559__$1 = state_22559;
var statearr_22570_22597 = state_22559__$1;
(statearr_22570_22597[(2)] = tc);

(statearr_22570_22597[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (5))){
var inst_22539 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22540 = cljs.core.async.close_BANG_.call(null,fc);
var state_22559__$1 = (function (){var statearr_22571 = state_22559;
(statearr_22571[(8)] = inst_22539);

return statearr_22571;
})();
var statearr_22572_22598 = state_22559__$1;
(statearr_22572_22598[(2)] = inst_22540);

(statearr_22572_22598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (14))){
var inst_22553 = (state_22559[(2)]);
var state_22559__$1 = state_22559;
var statearr_22573_22599 = state_22559__$1;
(statearr_22573_22599[(2)] = inst_22553);

(statearr_22573_22599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (10))){
var state_22559__$1 = state_22559;
var statearr_22574_22600 = state_22559__$1;
(statearr_22574_22600[(2)] = fc);

(statearr_22574_22600[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (8))){
var inst_22548 = (state_22559[(2)]);
var state_22559__$1 = state_22559;
if(cljs.core.truth_(inst_22548)){
var statearr_22575_22601 = state_22559__$1;
(statearr_22575_22601[(1)] = (12));

} else {
var statearr_22576_22602 = state_22559__$1;
(statearr_22576_22602[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21910__auto___22588,tc,fc))
;
return ((function (switch__21798__auto__,c__21910__auto___22588,tc,fc){
return (function() {
var cljs$core$async$state_machine__21799__auto__ = null;
var cljs$core$async$state_machine__21799__auto____0 = (function (){
var statearr_22580 = [null,null,null,null,null,null,null,null,null];
(statearr_22580[(0)] = cljs$core$async$state_machine__21799__auto__);

(statearr_22580[(1)] = (1));

return statearr_22580;
});
var cljs$core$async$state_machine__21799__auto____1 = (function (state_22559){
while(true){
var ret_value__21800__auto__ = (function (){try{while(true){
var result__21801__auto__ = switch__21798__auto__.call(null,state_22559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21801__auto__;
}
break;
}
}catch (e22581){if((e22581 instanceof Object)){
var ex__21802__auto__ = e22581;
var statearr_22582_22603 = state_22559;
(statearr_22582_22603[(5)] = ex__21802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22604 = state_22559;
state_22559 = G__22604;
continue;
} else {
return ret_value__21800__auto__;
}
break;
}
});
cljs$core$async$state_machine__21799__auto__ = function(state_22559){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21799__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21799__auto____1.call(this,state_22559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21799__auto____0;
cljs$core$async$state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21799__auto____1;
return cljs$core$async$state_machine__21799__auto__;
})()
;})(switch__21798__auto__,c__21910__auto___22588,tc,fc))
})();
var state__21912__auto__ = (function (){var statearr_22583 = f__21911__auto__.call(null);
(statearr_22583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21910__auto___22588);

return statearr_22583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21912__auto__);
});})(c__21910__auto___22588,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21910__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21910__auto__){
return (function (){
var f__21911__auto__ = (function (){var switch__21798__auto__ = ((function (c__21910__auto__){
return (function (state_22668){
var state_val_22669 = (state_22668[(1)]);
if((state_val_22669 === (7))){
var inst_22664 = (state_22668[(2)]);
var state_22668__$1 = state_22668;
var statearr_22670_22691 = state_22668__$1;
(statearr_22670_22691[(2)] = inst_22664);

(statearr_22670_22691[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22669 === (1))){
var inst_22648 = init;
var state_22668__$1 = (function (){var statearr_22671 = state_22668;
(statearr_22671[(7)] = inst_22648);

return statearr_22671;
})();
var statearr_22672_22692 = state_22668__$1;
(statearr_22672_22692[(2)] = null);

(statearr_22672_22692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22669 === (4))){
var inst_22651 = (state_22668[(8)]);
var inst_22651__$1 = (state_22668[(2)]);
var inst_22652 = (inst_22651__$1 == null);
var state_22668__$1 = (function (){var statearr_22673 = state_22668;
(statearr_22673[(8)] = inst_22651__$1);

return statearr_22673;
})();
if(cljs.core.truth_(inst_22652)){
var statearr_22674_22693 = state_22668__$1;
(statearr_22674_22693[(1)] = (5));

} else {
var statearr_22675_22694 = state_22668__$1;
(statearr_22675_22694[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22669 === (6))){
var inst_22655 = (state_22668[(9)]);
var inst_22648 = (state_22668[(7)]);
var inst_22651 = (state_22668[(8)]);
var inst_22655__$1 = f.call(null,inst_22648,inst_22651);
var inst_22656 = cljs.core.reduced_QMARK_.call(null,inst_22655__$1);
var state_22668__$1 = (function (){var statearr_22676 = state_22668;
(statearr_22676[(9)] = inst_22655__$1);

return statearr_22676;
})();
if(inst_22656){
var statearr_22677_22695 = state_22668__$1;
(statearr_22677_22695[(1)] = (8));

} else {
var statearr_22678_22696 = state_22668__$1;
(statearr_22678_22696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22669 === (3))){
var inst_22666 = (state_22668[(2)]);
var state_22668__$1 = state_22668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22668__$1,inst_22666);
} else {
if((state_val_22669 === (2))){
var state_22668__$1 = state_22668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22668__$1,(4),ch);
} else {
if((state_val_22669 === (9))){
var inst_22655 = (state_22668[(9)]);
var inst_22648 = inst_22655;
var state_22668__$1 = (function (){var statearr_22679 = state_22668;
(statearr_22679[(7)] = inst_22648);

return statearr_22679;
})();
var statearr_22680_22697 = state_22668__$1;
(statearr_22680_22697[(2)] = null);

(statearr_22680_22697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22669 === (5))){
var inst_22648 = (state_22668[(7)]);
var state_22668__$1 = state_22668;
var statearr_22681_22698 = state_22668__$1;
(statearr_22681_22698[(2)] = inst_22648);

(statearr_22681_22698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22669 === (10))){
var inst_22662 = (state_22668[(2)]);
var state_22668__$1 = state_22668;
var statearr_22682_22699 = state_22668__$1;
(statearr_22682_22699[(2)] = inst_22662);

(statearr_22682_22699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22669 === (8))){
var inst_22655 = (state_22668[(9)]);
var inst_22658 = cljs.core.deref.call(null,inst_22655);
var state_22668__$1 = state_22668;
var statearr_22683_22700 = state_22668__$1;
(statearr_22683_22700[(2)] = inst_22658);

(statearr_22683_22700[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__21910__auto__))
;
return ((function (switch__21798__auto__,c__21910__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21799__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21799__auto____0 = (function (){
var statearr_22687 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22687[(0)] = cljs$core$async$reduce_$_state_machine__21799__auto__);

(statearr_22687[(1)] = (1));

return statearr_22687;
});
var cljs$core$async$reduce_$_state_machine__21799__auto____1 = (function (state_22668){
while(true){
var ret_value__21800__auto__ = (function (){try{while(true){
var result__21801__auto__ = switch__21798__auto__.call(null,state_22668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21801__auto__;
}
break;
}
}catch (e22688){if((e22688 instanceof Object)){
var ex__21802__auto__ = e22688;
var statearr_22689_22701 = state_22668;
(statearr_22689_22701[(5)] = ex__21802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22702 = state_22668;
state_22668 = G__22702;
continue;
} else {
return ret_value__21800__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21799__auto__ = function(state_22668){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21799__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21799__auto____1.call(this,state_22668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21799__auto____0;
cljs$core$async$reduce_$_state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21799__auto____1;
return cljs$core$async$reduce_$_state_machine__21799__auto__;
})()
;})(switch__21798__auto__,c__21910__auto__))
})();
var state__21912__auto__ = (function (){var statearr_22690 = f__21911__auto__.call(null);
(statearr_22690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21910__auto__);

return statearr_22690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21912__auto__);
});})(c__21910__auto__))
);

return c__21910__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args22703 = [];
var len__17843__auto___22755 = arguments.length;
var i__17844__auto___22756 = (0);
while(true){
if((i__17844__auto___22756 < len__17843__auto___22755)){
args22703.push((arguments[i__17844__auto___22756]));

var G__22757 = (i__17844__auto___22756 + (1));
i__17844__auto___22756 = G__22757;
continue;
} else {
}
break;
}

var G__22705 = args22703.length;
switch (G__22705) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22703.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21910__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21910__auto__){
return (function (){
var f__21911__auto__ = (function (){var switch__21798__auto__ = ((function (c__21910__auto__){
return (function (state_22730){
var state_val_22731 = (state_22730[(1)]);
if((state_val_22731 === (7))){
var inst_22712 = (state_22730[(2)]);
var state_22730__$1 = state_22730;
var statearr_22732_22759 = state_22730__$1;
(statearr_22732_22759[(2)] = inst_22712);

(statearr_22732_22759[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (1))){
var inst_22706 = cljs.core.seq.call(null,coll);
var inst_22707 = inst_22706;
var state_22730__$1 = (function (){var statearr_22733 = state_22730;
(statearr_22733[(7)] = inst_22707);

return statearr_22733;
})();
var statearr_22734_22760 = state_22730__$1;
(statearr_22734_22760[(2)] = null);

(statearr_22734_22760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (4))){
var inst_22707 = (state_22730[(7)]);
var inst_22710 = cljs.core.first.call(null,inst_22707);
var state_22730__$1 = state_22730;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22730__$1,(7),ch,inst_22710);
} else {
if((state_val_22731 === (13))){
var inst_22724 = (state_22730[(2)]);
var state_22730__$1 = state_22730;
var statearr_22735_22761 = state_22730__$1;
(statearr_22735_22761[(2)] = inst_22724);

(statearr_22735_22761[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (6))){
var inst_22715 = (state_22730[(2)]);
var state_22730__$1 = state_22730;
if(cljs.core.truth_(inst_22715)){
var statearr_22736_22762 = state_22730__$1;
(statearr_22736_22762[(1)] = (8));

} else {
var statearr_22737_22763 = state_22730__$1;
(statearr_22737_22763[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (3))){
var inst_22728 = (state_22730[(2)]);
var state_22730__$1 = state_22730;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22730__$1,inst_22728);
} else {
if((state_val_22731 === (12))){
var state_22730__$1 = state_22730;
var statearr_22738_22764 = state_22730__$1;
(statearr_22738_22764[(2)] = null);

(statearr_22738_22764[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (2))){
var inst_22707 = (state_22730[(7)]);
var state_22730__$1 = state_22730;
if(cljs.core.truth_(inst_22707)){
var statearr_22739_22765 = state_22730__$1;
(statearr_22739_22765[(1)] = (4));

} else {
var statearr_22740_22766 = state_22730__$1;
(statearr_22740_22766[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (11))){
var inst_22721 = cljs.core.async.close_BANG_.call(null,ch);
var state_22730__$1 = state_22730;
var statearr_22741_22767 = state_22730__$1;
(statearr_22741_22767[(2)] = inst_22721);

(statearr_22741_22767[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (9))){
var state_22730__$1 = state_22730;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22742_22768 = state_22730__$1;
(statearr_22742_22768[(1)] = (11));

} else {
var statearr_22743_22769 = state_22730__$1;
(statearr_22743_22769[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (5))){
var inst_22707 = (state_22730[(7)]);
var state_22730__$1 = state_22730;
var statearr_22744_22770 = state_22730__$1;
(statearr_22744_22770[(2)] = inst_22707);

(statearr_22744_22770[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (10))){
var inst_22726 = (state_22730[(2)]);
var state_22730__$1 = state_22730;
var statearr_22745_22771 = state_22730__$1;
(statearr_22745_22771[(2)] = inst_22726);

(statearr_22745_22771[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (8))){
var inst_22707 = (state_22730[(7)]);
var inst_22717 = cljs.core.next.call(null,inst_22707);
var inst_22707__$1 = inst_22717;
var state_22730__$1 = (function (){var statearr_22746 = state_22730;
(statearr_22746[(7)] = inst_22707__$1);

return statearr_22746;
})();
var statearr_22747_22772 = state_22730__$1;
(statearr_22747_22772[(2)] = null);

(statearr_22747_22772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21910__auto__))
;
return ((function (switch__21798__auto__,c__21910__auto__){
return (function() {
var cljs$core$async$state_machine__21799__auto__ = null;
var cljs$core$async$state_machine__21799__auto____0 = (function (){
var statearr_22751 = [null,null,null,null,null,null,null,null];
(statearr_22751[(0)] = cljs$core$async$state_machine__21799__auto__);

(statearr_22751[(1)] = (1));

return statearr_22751;
});
var cljs$core$async$state_machine__21799__auto____1 = (function (state_22730){
while(true){
var ret_value__21800__auto__ = (function (){try{while(true){
var result__21801__auto__ = switch__21798__auto__.call(null,state_22730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21801__auto__;
}
break;
}
}catch (e22752){if((e22752 instanceof Object)){
var ex__21802__auto__ = e22752;
var statearr_22753_22773 = state_22730;
(statearr_22753_22773[(5)] = ex__21802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22774 = state_22730;
state_22730 = G__22774;
continue;
} else {
return ret_value__21800__auto__;
}
break;
}
});
cljs$core$async$state_machine__21799__auto__ = function(state_22730){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21799__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21799__auto____1.call(this,state_22730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21799__auto____0;
cljs$core$async$state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21799__auto____1;
return cljs$core$async$state_machine__21799__auto__;
})()
;})(switch__21798__auto__,c__21910__auto__))
})();
var state__21912__auto__ = (function (){var statearr_22754 = f__21911__auto__.call(null);
(statearr_22754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21910__auto__);

return statearr_22754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21912__auto__);
});})(c__21910__auto__))
);

return c__21910__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17440__auto__ = (((_ == null))?null:_);
var m__17441__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,_);
} else {
var m__17441__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17441__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m,ch);
} else {
var m__17441__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m);
} else {
var m__17441__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22996 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22996 = (function (mult,ch,cs,meta22997){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta22997 = meta22997;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22998,meta22997__$1){
var self__ = this;
var _22998__$1 = this;
return (new cljs.core.async.t_cljs$core$async22996(self__.mult,self__.ch,self__.cs,meta22997__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async22996.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22998){
var self__ = this;
var _22998__$1 = this;
return self__.meta22997;
});})(cs))
;

cljs.core.async.t_cljs$core$async22996.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22996.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async22996.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async22996.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22996.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22996.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22996.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22997","meta22997",2012827401,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async22996.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22996.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22996";

cljs.core.async.t_cljs$core$async22996.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async22996");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async22996 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async22996(mult__$1,ch__$1,cs__$1,meta22997){
return (new cljs.core.async.t_cljs$core$async22996(mult__$1,ch__$1,cs__$1,meta22997));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async22996(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21910__auto___23217 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21910__auto___23217,cs,m,dchan,dctr,done){
return (function (){
var f__21911__auto__ = (function (){var switch__21798__auto__ = ((function (c__21910__auto___23217,cs,m,dchan,dctr,done){
return (function (state_23129){
var state_val_23130 = (state_23129[(1)]);
if((state_val_23130 === (7))){
var inst_23125 = (state_23129[(2)]);
var state_23129__$1 = state_23129;
var statearr_23131_23218 = state_23129__$1;
(statearr_23131_23218[(2)] = inst_23125);

(statearr_23131_23218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23130 === (20))){
var inst_23030 = (state_23129[(7)]);
var inst_23040 = cljs.core.first.call(null,inst_23030);
var inst_23041 = cljs.core.nth.call(null,inst_23040,(0),null);
var inst_23042 = cljs.core.nth.call(null,inst_23040,(1),null);
var state_23129__$1 = (function (){var statearr_23132 = state_23129;
(statearr_23132[(8)] = inst_23041);

return statearr_23132;
})();
if(cljs.core.truth_(inst_23042)){
var statearr_23133_23219 = state_23129__$1;
(statearr_23133_23219[(1)] = (22));

} else {
var statearr_23134_23220 = state_23129__$1;
(statearr_23134_23220[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23130 === (27))){
var inst_23070 = (state_23129[(9)]);
var inst_23072 = (state_23129[(10)]);
var inst_23001 = (state_23129[(11)]);
var inst_23077 = (state_23129[(12)]);
var inst_23077__$1 = cljs.core._nth.call(null,inst_23070,inst_23072);
var inst_23078 = cljs.core.async.put_BANG_.call(null,inst_23077__$1,inst_23001,done);
var state_23129__$1 = (function (){var statearr_23135 = state_23129;
(statearr_23135[(12)] = inst_23077__$1);

return statearr_23135;
})();
if(cljs.core.truth_(inst_23078)){
var statearr_23136_23221 = state_23129__$1;
(statearr_23136_23221[(1)] = (30));

} else {
var statearr_23137_23222 = state_23129__$1;
(statearr_23137_23222[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23130 === (1))){
var state_23129__$1 = state_23129;
var statearr_23138_23223 = state_23129__$1;
(statearr_23138_23223[(2)] = null);

(statearr_23138_23223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23130 === (24))){
var inst_23030 = (state_23129[(7)]);
var inst_23047 = (state_23129[(2)]);
var inst_23048 = cljs.core.next.call(null,inst_23030);
var inst_23010 = inst_23048;
var inst_23011 = null;
var inst_23012 = (0);
var inst_23013 = (0);
var state_23129__$1 = (function (){var statearr_23139 = state_23129;
(statearr_23139[(13)] = inst_23011);

(statearr_23139[(14)] = inst_23047);

(statearr_23139[(15)] = inst_23012);

(statearr_23139[(16)] = inst_23010);

(statearr_23139[(17)] = inst_23013);

return statearr_23139;
})();
var statearr_23140_23224 = state_23129__$1;
(statearr_23140_23224[(2)] = null);

(statearr_23140_23224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23130 === (39))){
var state_23129__$1 = state_23129;
var statearr_23144_23225 = state_23129__$1;
(statearr_23144_23225[(2)] = null);

(statearr_23144_23225[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23130 === (4))){
var inst_23001 = (state_23129[(11)]);
var inst_23001__$1 = (state_23129[(2)]);
var inst_23002 = (inst_23001__$1 == null);
var state_23129__$1 = (function (){var statearr_23145 = state_23129;
(statearr_23145[(11)] = inst_23001__$1);

return statearr_23145;
})();
if(cljs.core.truth_(inst_23002)){
var statearr_23146_23226 = state_23129__$1;
(statearr_23146_23226[(1)] = (5));

} else {
var statearr_23147_23227 = state_23129__$1;
(statearr_23147_23227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23130 === (15))){
var inst_23011 = (state_23129[(13)]);
var inst_23012 = (state_23129[(15)]);
var inst_23010 = (state_23129[(16)]);
var inst_23013 = (state_23129[(17)]);
var inst_23026 = (state_23129[(2)]);
var inst_23027 = (inst_23013 + (1));
var tmp23141 = inst_23011;
var tmp23142 = inst_23012;
var tmp23143 = inst_23010;
var inst_23010__$1 = tmp23143;
var inst_23011__$1 = tmp23141;
var inst_23012__$1 = tmp23142;
var inst_23013__$1 = inst_23027;
var state_23129__$1 = (function (){var statearr_23148 = state_23129;
(statearr_23148[(13)] = inst_23011__$1);

(statearr_23148[(15)] = inst_23012__$1);

(statearr_23148[(18)] = inst_23026);

(statearr_23148[(16)] = inst_23010__$1);

(statearr_23148[(17)] = inst_23013__$1);

return statearr_23148;
})();
var statearr_23149_23228 = state_23129__$1;
(statearr_23149_23228[(2)] = null);

(statearr_23149_23228[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23130 === (21))){
var inst_23051 = (state_23129[(2)]);
var state_23129__$1 = state_23129;
var statearr_23153_23229 = state_23129__$1;
(statearr_23153_23229[(2)] = inst_23051);

(statearr_23153_23229[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23130 === (31))){
var inst_23077 = (state_23129[(12)]);
var inst_23081 = done.call(null,null);
var inst_23082 = cljs.core.async.untap_STAR_.call(null,m,inst_23077);
var state_23129__$1 = (function (){var statearr_23154 = state_23129;
(statearr_23154[(19)] = inst_23081);

return statearr_23154;
})();
var statearr_23155_23230 = state_23129__$1;
(statearr_23155_23230[(2)] = inst_23082);

(statearr_23155_23230[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23130 === (32))){
var inst_23069 = (state_23129[(20)]);
var inst_23070 = (state_23129[(9)]);
var inst_23072 = (state_23129[(10)]);
var inst_23071 = (state_23129[(21)]);
var inst_23084 = (state_23129[(2)]);
var inst_23085 = (inst_23072 + (1));
var tmp23150 = inst_23069;
var tmp23151 = inst_23070;
var tmp23152 = inst_23071;
var inst_23069__$1 = tmp23150;
var inst_23070__$1 = tmp23151;
var inst_23071__$1 = tmp23152;
var inst_23072__$1 = inst_23085;
var state_23129__$1 = (function (){var statearr_23156 = state_23129;
(statearr_23156[(20)] = inst_23069__$1);

(statearr_23156[(9)] = inst_23070__$1);

(statearr_23156[(10)] = inst_23072__$1);

(statearr_23156[(22)] = inst_23084);

(statearr_23156[(21)] = inst_23071__$1);

return statearr_23156;
})();
var statearr_23157_23231 = state_23129__$1;
(statearr_23157_23231[(2)] = null);

(statearr_23157_23231[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23130 === (40))){
var inst_23097 = (state_23129[(23)]);
var inst_23101 = done.call(null,null);
var inst_23102 = cljs.core.async.untap_STAR_.call(null,m,inst_23097);
var state_23129__$1 = (function (){var statearr_23158 = state_23129;
(statearr_23158[(24)] = inst_23101);

return statearr_23158;
})();
var statearr_23159_23232 = state_23129__$1;
(statearr_23159_23232[(2)] = inst_23102);

(statearr_23159_23232[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23130 === (33))){
var inst_23088 = (state_23129[(25)]);
var inst_23090 = cljs.core.chunked_seq_QMARK_.call(null,inst_23088);
var state_23129__$1 = state_23129;
if(inst_23090){
var statearr_23160_23233 = state_23129__$1;
(statearr_23160_23233[(1)] = (36));

} else {
var statearr_23161_23234 = state_23129__$1;
(statearr_23161_23234[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23130 === (13))){
var inst_23020 = (state_23129[(26)]);
var inst_23023 = cljs.core.async.close_BANG_.call(null,inst_23020);
var state_23129__$1 = state_23129;
var statearr_23162_23235 = state_23129__$1;
(statearr_23162_23235[(2)] = inst_23023);

(statearr_23162_23235[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23130 === (22))){
var inst_23041 = (state_23129[(8)]);
var inst_23044 = cljs.core.async.close_BANG_.call(null,inst_23041);
var state_23129__$1 = state_23129;
var statearr_23163_23236 = state_23129__$1;
(statearr_23163_23236[(2)] = inst_23044);

(statearr_23163_23236[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23130 === (36))){
var inst_23088 = (state_23129[(25)]);
var inst_23092 = cljs.core.chunk_first.call(null,inst_23088);
var inst_23093 = cljs.core.chunk_rest.call(null,inst_23088);
var inst_23094 = cljs.core.count.call(null,inst_23092);
var inst_23069 = inst_23093;
var inst_23070 = inst_23092;
var inst_23071 = inst_23094;
var inst_23072 = (0);
var state_23129__$1 = (function (){var statearr_23164 = state_23129;
(statearr_23164[(20)] = inst_23069);

(statearr_23164[(9)] = inst_23070);

(statearr_23164[(10)] = inst_23072);

(statearr_23164[(21)] = inst_23071);

return statearr_23164;
})();
var statearr_23165_23237 = state_23129__$1;
(statearr_23165_23237[(2)] = null);

(statearr_23165_23237[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23130 === (41))){
var inst_23088 = (state_23129[(25)]);
var inst_23104 = (state_23129[(2)]);
var inst_23105 = cljs.core.next.call(null,inst_23088);
var inst_23069 = inst_23105;
var inst_23070 = null;
var inst_23071 = (0);
var inst_23072 = (0);
var state_23129__$1 = (function (){var statearr_23166 = state_23129;
(statearr_23166[(20)] = inst_23069);

(statearr_23166[(9)] = inst_23070);

(statearr_23166[(27)] = inst_23104);

(statearr_23166[(10)] = inst_23072);

(statearr_23166[(21)] = inst_23071);

return statearr_23166;
})();
var statearr_23167_23238 = state_23129__$1;
(statearr_23167_23238[(2)] = null);

(statearr_23167_23238[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23130 === (43))){
var state_23129__$1 = state_23129;
var statearr_23168_23239 = state_23129__$1;
(statearr_23168_23239[(2)] = null);

(statearr_23168_23239[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23130 === (29))){
var inst_23113 = (state_23129[(2)]);
var state_23129__$1 = state_23129;
var statearr_23169_23240 = state_23129__$1;
(statearr_23169_23240[(2)] = inst_23113);

(statearr_23169_23240[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23130 === (44))){
var inst_23122 = (state_23129[(2)]);
var state_23129__$1 = (function (){var statearr_23170 = state_23129;
(statearr_23170[(28)] = inst_23122);

return statearr_23170;
})();
var statearr_23171_23241 = state_23129__$1;
(statearr_23171_23241[(2)] = null);

(statearr_23171_23241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23130 === (6))){
var inst_23061 = (state_23129[(29)]);
var inst_23060 = cljs.core.deref.call(null,cs);
var inst_23061__$1 = cljs.core.keys.call(null,inst_23060);
var inst_23062 = cljs.core.count.call(null,inst_23061__$1);
var inst_23063 = cljs.core.reset_BANG_.call(null,dctr,inst_23062);
var inst_23068 = cljs.core.seq.call(null,inst_23061__$1);
var inst_23069 = inst_23068;
var inst_23070 = null;
var inst_23071 = (0);
var inst_23072 = (0);
var state_23129__$1 = (function (){var statearr_23172 = state_23129;
(statearr_23172[(20)] = inst_23069);

(statearr_23172[(9)] = inst_23070);

(statearr_23172[(10)] = inst_23072);

(statearr_23172[(30)] = inst_23063);

(statearr_23172[(29)] = inst_23061__$1);

(statearr_23172[(21)] = inst_23071);

return statearr_23172;
})();
var statearr_23173_23242 = state_23129__$1;
(statearr_23173_23242[(2)] = null);

(statearr_23173_23242[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23130 === (28))){
var inst_23069 = (state_23129[(20)]);
var inst_23088 = (state_23129[(25)]);
var inst_23088__$1 = cljs.core.seq.call(null,inst_23069);
var state_23129__$1 = (function (){var statearr_23174 = state_23129;
(statearr_23174[(25)] = inst_23088__$1);

return statearr_23174;
})();
if(inst_23088__$1){
var statearr_23175_23243 = state_23129__$1;
(statearr_23175_23243[(1)] = (33));

} else {
var statearr_23176_23244 = state_23129__$1;
(statearr_23176_23244[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23130 === (25))){
var inst_23072 = (state_23129[(10)]);
var inst_23071 = (state_23129[(21)]);
var inst_23074 = (inst_23072 < inst_23071);
var inst_23075 = inst_23074;
var state_23129__$1 = state_23129;
if(cljs.core.truth_(inst_23075)){
var statearr_23177_23245 = state_23129__$1;
(statearr_23177_23245[(1)] = (27));

} else {
var statearr_23178_23246 = state_23129__$1;
(statearr_23178_23246[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23130 === (34))){
var state_23129__$1 = state_23129;
var statearr_23179_23247 = state_23129__$1;
(statearr_23179_23247[(2)] = null);

(statearr_23179_23247[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23130 === (17))){
var state_23129__$1 = state_23129;
var statearr_23180_23248 = state_23129__$1;
(statearr_23180_23248[(2)] = null);

(statearr_23180_23248[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23130 === (3))){
var inst_23127 = (state_23129[(2)]);
var state_23129__$1 = state_23129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23129__$1,inst_23127);
} else {
if((state_val_23130 === (12))){
var inst_23056 = (state_23129[(2)]);
var state_23129__$1 = state_23129;
var statearr_23181_23249 = state_23129__$1;
(statearr_23181_23249[(2)] = inst_23056);

(statearr_23181_23249[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23130 === (2))){
var state_23129__$1 = state_23129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23129__$1,(4),ch);
} else {
if((state_val_23130 === (23))){
var state_23129__$1 = state_23129;
var statearr_23182_23250 = state_23129__$1;
(statearr_23182_23250[(2)] = null);

(statearr_23182_23250[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23130 === (35))){
var inst_23111 = (state_23129[(2)]);
var state_23129__$1 = state_23129;
var statearr_23183_23251 = state_23129__$1;
(statearr_23183_23251[(2)] = inst_23111);

(statearr_23183_23251[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23130 === (19))){
var inst_23030 = (state_23129[(7)]);
var inst_23034 = cljs.core.chunk_first.call(null,inst_23030);
var inst_23035 = cljs.core.chunk_rest.call(null,inst_23030);
var inst_23036 = cljs.core.count.call(null,inst_23034);
var inst_23010 = inst_23035;
var inst_23011 = inst_23034;
var inst_23012 = inst_23036;
var inst_23013 = (0);
var state_23129__$1 = (function (){var statearr_23184 = state_23129;
(statearr_23184[(13)] = inst_23011);

(statearr_23184[(15)] = inst_23012);

(statearr_23184[(16)] = inst_23010);

(statearr_23184[(17)] = inst_23013);

return statearr_23184;
})();
var statearr_23185_23252 = state_23129__$1;
(statearr_23185_23252[(2)] = null);

(statearr_23185_23252[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23130 === (11))){
var inst_23030 = (state_23129[(7)]);
var inst_23010 = (state_23129[(16)]);
var inst_23030__$1 = cljs.core.seq.call(null,inst_23010);
var state_23129__$1 = (function (){var statearr_23186 = state_23129;
(statearr_23186[(7)] = inst_23030__$1);

return statearr_23186;
})();
if(inst_23030__$1){
var statearr_23187_23253 = state_23129__$1;
(statearr_23187_23253[(1)] = (16));

} else {
var statearr_23188_23254 = state_23129__$1;
(statearr_23188_23254[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23130 === (9))){
var inst_23058 = (state_23129[(2)]);
var state_23129__$1 = state_23129;
var statearr_23189_23255 = state_23129__$1;
(statearr_23189_23255[(2)] = inst_23058);

(statearr_23189_23255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23130 === (5))){
var inst_23008 = cljs.core.deref.call(null,cs);
var inst_23009 = cljs.core.seq.call(null,inst_23008);
var inst_23010 = inst_23009;
var inst_23011 = null;
var inst_23012 = (0);
var inst_23013 = (0);
var state_23129__$1 = (function (){var statearr_23190 = state_23129;
(statearr_23190[(13)] = inst_23011);

(statearr_23190[(15)] = inst_23012);

(statearr_23190[(16)] = inst_23010);

(statearr_23190[(17)] = inst_23013);

return statearr_23190;
})();
var statearr_23191_23256 = state_23129__$1;
(statearr_23191_23256[(2)] = null);

(statearr_23191_23256[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23130 === (14))){
var state_23129__$1 = state_23129;
var statearr_23192_23257 = state_23129__$1;
(statearr_23192_23257[(2)] = null);

(statearr_23192_23257[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23130 === (45))){
var inst_23119 = (state_23129[(2)]);
var state_23129__$1 = state_23129;
var statearr_23193_23258 = state_23129__$1;
(statearr_23193_23258[(2)] = inst_23119);

(statearr_23193_23258[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23130 === (26))){
var inst_23061 = (state_23129[(29)]);
var inst_23115 = (state_23129[(2)]);
var inst_23116 = cljs.core.seq.call(null,inst_23061);
var state_23129__$1 = (function (){var statearr_23194 = state_23129;
(statearr_23194[(31)] = inst_23115);

return statearr_23194;
})();
if(inst_23116){
var statearr_23195_23259 = state_23129__$1;
(statearr_23195_23259[(1)] = (42));

} else {
var statearr_23196_23260 = state_23129__$1;
(statearr_23196_23260[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23130 === (16))){
var inst_23030 = (state_23129[(7)]);
var inst_23032 = cljs.core.chunked_seq_QMARK_.call(null,inst_23030);
var state_23129__$1 = state_23129;
if(inst_23032){
var statearr_23197_23261 = state_23129__$1;
(statearr_23197_23261[(1)] = (19));

} else {
var statearr_23198_23262 = state_23129__$1;
(statearr_23198_23262[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23130 === (38))){
var inst_23108 = (state_23129[(2)]);
var state_23129__$1 = state_23129;
var statearr_23199_23263 = state_23129__$1;
(statearr_23199_23263[(2)] = inst_23108);

(statearr_23199_23263[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23130 === (30))){
var state_23129__$1 = state_23129;
var statearr_23200_23264 = state_23129__$1;
(statearr_23200_23264[(2)] = null);

(statearr_23200_23264[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23130 === (10))){
var inst_23011 = (state_23129[(13)]);
var inst_23013 = (state_23129[(17)]);
var inst_23019 = cljs.core._nth.call(null,inst_23011,inst_23013);
var inst_23020 = cljs.core.nth.call(null,inst_23019,(0),null);
var inst_23021 = cljs.core.nth.call(null,inst_23019,(1),null);
var state_23129__$1 = (function (){var statearr_23201 = state_23129;
(statearr_23201[(26)] = inst_23020);

return statearr_23201;
})();
if(cljs.core.truth_(inst_23021)){
var statearr_23202_23265 = state_23129__$1;
(statearr_23202_23265[(1)] = (13));

} else {
var statearr_23203_23266 = state_23129__$1;
(statearr_23203_23266[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23130 === (18))){
var inst_23054 = (state_23129[(2)]);
var state_23129__$1 = state_23129;
var statearr_23204_23267 = state_23129__$1;
(statearr_23204_23267[(2)] = inst_23054);

(statearr_23204_23267[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23130 === (42))){
var state_23129__$1 = state_23129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23129__$1,(45),dchan);
} else {
if((state_val_23130 === (37))){
var inst_23001 = (state_23129[(11)]);
var inst_23097 = (state_23129[(23)]);
var inst_23088 = (state_23129[(25)]);
var inst_23097__$1 = cljs.core.first.call(null,inst_23088);
var inst_23098 = cljs.core.async.put_BANG_.call(null,inst_23097__$1,inst_23001,done);
var state_23129__$1 = (function (){var statearr_23205 = state_23129;
(statearr_23205[(23)] = inst_23097__$1);

return statearr_23205;
})();
if(cljs.core.truth_(inst_23098)){
var statearr_23206_23268 = state_23129__$1;
(statearr_23206_23268[(1)] = (39));

} else {
var statearr_23207_23269 = state_23129__$1;
(statearr_23207_23269[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23130 === (8))){
var inst_23012 = (state_23129[(15)]);
var inst_23013 = (state_23129[(17)]);
var inst_23015 = (inst_23013 < inst_23012);
var inst_23016 = inst_23015;
var state_23129__$1 = state_23129;
if(cljs.core.truth_(inst_23016)){
var statearr_23208_23270 = state_23129__$1;
(statearr_23208_23270[(1)] = (10));

} else {
var statearr_23209_23271 = state_23129__$1;
(statearr_23209_23271[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21910__auto___23217,cs,m,dchan,dctr,done))
;
return ((function (switch__21798__auto__,c__21910__auto___23217,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21799__auto__ = null;
var cljs$core$async$mult_$_state_machine__21799__auto____0 = (function (){
var statearr_23213 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23213[(0)] = cljs$core$async$mult_$_state_machine__21799__auto__);

(statearr_23213[(1)] = (1));

return statearr_23213;
});
var cljs$core$async$mult_$_state_machine__21799__auto____1 = (function (state_23129){
while(true){
var ret_value__21800__auto__ = (function (){try{while(true){
var result__21801__auto__ = switch__21798__auto__.call(null,state_23129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21801__auto__;
}
break;
}
}catch (e23214){if((e23214 instanceof Object)){
var ex__21802__auto__ = e23214;
var statearr_23215_23272 = state_23129;
(statearr_23215_23272[(5)] = ex__21802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23273 = state_23129;
state_23129 = G__23273;
continue;
} else {
return ret_value__21800__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21799__auto__ = function(state_23129){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21799__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21799__auto____1.call(this,state_23129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21799__auto____0;
cljs$core$async$mult_$_state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21799__auto____1;
return cljs$core$async$mult_$_state_machine__21799__auto__;
})()
;})(switch__21798__auto__,c__21910__auto___23217,cs,m,dchan,dctr,done))
})();
var state__21912__auto__ = (function (){var statearr_23216 = f__21911__auto__.call(null);
(statearr_23216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21910__auto___23217);

return statearr_23216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21912__auto__);
});})(c__21910__auto___23217,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args23274 = [];
var len__17843__auto___23277 = arguments.length;
var i__17844__auto___23278 = (0);
while(true){
if((i__17844__auto___23278 < len__17843__auto___23277)){
args23274.push((arguments[i__17844__auto___23278]));

var G__23279 = (i__17844__auto___23278 + (1));
i__17844__auto___23278 = G__23279;
continue;
} else {
}
break;
}

var G__23276 = args23274.length;
switch (G__23276) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23274.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m,ch);
} else {
var m__17441__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m,ch);
} else {
var m__17441__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m);
} else {
var m__17441__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m,state_map);
} else {
var m__17441__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m,mode);
} else {
var m__17441__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17850__auto__ = [];
var len__17843__auto___23291 = arguments.length;
var i__17844__auto___23292 = (0);
while(true){
if((i__17844__auto___23292 < len__17843__auto___23291)){
args__17850__auto__.push((arguments[i__17844__auto___23292]));

var G__23293 = (i__17844__auto___23292 + (1));
i__17844__auto___23292 = G__23293;
continue;
} else {
}
break;
}

var argseq__17851__auto__ = ((((3) < args__17850__auto__.length))?(new cljs.core.IndexedSeq(args__17850__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17851__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23285){
var map__23286 = p__23285;
var map__23286__$1 = ((((!((map__23286 == null)))?((((map__23286.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23286.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23286):map__23286);
var opts = map__23286__$1;
var statearr_23288_23294 = state;
(statearr_23288_23294[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__23286,map__23286__$1,opts){
return (function (val){
var statearr_23289_23295 = state;
(statearr_23289_23295[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23286,map__23286__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_23290_23296 = state;
(statearr_23290_23296[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23281){
var G__23282 = cljs.core.first.call(null,seq23281);
var seq23281__$1 = cljs.core.next.call(null,seq23281);
var G__23283 = cljs.core.first.call(null,seq23281__$1);
var seq23281__$2 = cljs.core.next.call(null,seq23281__$1);
var G__23284 = cljs.core.first.call(null,seq23281__$2);
var seq23281__$3 = cljs.core.next.call(null,seq23281__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23282,G__23283,G__23284,seq23281__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23460 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23460 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23461){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta23461 = meta23461;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23462,meta23461__$1){
var self__ = this;
var _23462__$1 = this;
return (new cljs.core.async.t_cljs$core$async23460(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23461__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23460.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23462){
var self__ = this;
var _23462__$1 = this;
return self__.meta23461;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23460.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23460.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23460.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async23460.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23460.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23460.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23460.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23460.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23460.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23461","meta23461",-110398078,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23460.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23460.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23460";

cljs.core.async.t_cljs$core$async23460.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async23460");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async23460 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23460(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23461){
return (new cljs.core.async.t_cljs$core$async23460(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23461));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23460(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21910__auto___23623 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21910__auto___23623,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21911__auto__ = (function (){var switch__21798__auto__ = ((function (c__21910__auto___23623,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23560){
var state_val_23561 = (state_23560[(1)]);
if((state_val_23561 === (7))){
var inst_23478 = (state_23560[(2)]);
var state_23560__$1 = state_23560;
var statearr_23562_23624 = state_23560__$1;
(statearr_23562_23624[(2)] = inst_23478);

(statearr_23562_23624[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (20))){
var inst_23490 = (state_23560[(7)]);
var state_23560__$1 = state_23560;
var statearr_23563_23625 = state_23560__$1;
(statearr_23563_23625[(2)] = inst_23490);

(statearr_23563_23625[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (27))){
var state_23560__$1 = state_23560;
var statearr_23564_23626 = state_23560__$1;
(statearr_23564_23626[(2)] = null);

(statearr_23564_23626[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (1))){
var inst_23466 = (state_23560[(8)]);
var inst_23466__$1 = calc_state.call(null);
var inst_23468 = (inst_23466__$1 == null);
var inst_23469 = cljs.core.not.call(null,inst_23468);
var state_23560__$1 = (function (){var statearr_23565 = state_23560;
(statearr_23565[(8)] = inst_23466__$1);

return statearr_23565;
})();
if(inst_23469){
var statearr_23566_23627 = state_23560__$1;
(statearr_23566_23627[(1)] = (2));

} else {
var statearr_23567_23628 = state_23560__$1;
(statearr_23567_23628[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (24))){
var inst_23520 = (state_23560[(9)]);
var inst_23534 = (state_23560[(10)]);
var inst_23513 = (state_23560[(11)]);
var inst_23534__$1 = inst_23513.call(null,inst_23520);
var state_23560__$1 = (function (){var statearr_23568 = state_23560;
(statearr_23568[(10)] = inst_23534__$1);

return statearr_23568;
})();
if(cljs.core.truth_(inst_23534__$1)){
var statearr_23569_23629 = state_23560__$1;
(statearr_23569_23629[(1)] = (29));

} else {
var statearr_23570_23630 = state_23560__$1;
(statearr_23570_23630[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (4))){
var inst_23481 = (state_23560[(2)]);
var state_23560__$1 = state_23560;
if(cljs.core.truth_(inst_23481)){
var statearr_23571_23631 = state_23560__$1;
(statearr_23571_23631[(1)] = (8));

} else {
var statearr_23572_23632 = state_23560__$1;
(statearr_23572_23632[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (15))){
var inst_23507 = (state_23560[(2)]);
var state_23560__$1 = state_23560;
if(cljs.core.truth_(inst_23507)){
var statearr_23573_23633 = state_23560__$1;
(statearr_23573_23633[(1)] = (19));

} else {
var statearr_23574_23634 = state_23560__$1;
(statearr_23574_23634[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (21))){
var inst_23512 = (state_23560[(12)]);
var inst_23512__$1 = (state_23560[(2)]);
var inst_23513 = cljs.core.get.call(null,inst_23512__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23514 = cljs.core.get.call(null,inst_23512__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23515 = cljs.core.get.call(null,inst_23512__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23560__$1 = (function (){var statearr_23575 = state_23560;
(statearr_23575[(13)] = inst_23514);

(statearr_23575[(12)] = inst_23512__$1);

(statearr_23575[(11)] = inst_23513);

return statearr_23575;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23560__$1,(22),inst_23515);
} else {
if((state_val_23561 === (31))){
var inst_23542 = (state_23560[(2)]);
var state_23560__$1 = state_23560;
if(cljs.core.truth_(inst_23542)){
var statearr_23576_23635 = state_23560__$1;
(statearr_23576_23635[(1)] = (32));

} else {
var statearr_23577_23636 = state_23560__$1;
(statearr_23577_23636[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (32))){
var inst_23519 = (state_23560[(14)]);
var state_23560__$1 = state_23560;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23560__$1,(35),out,inst_23519);
} else {
if((state_val_23561 === (33))){
var inst_23512 = (state_23560[(12)]);
var inst_23490 = inst_23512;
var state_23560__$1 = (function (){var statearr_23578 = state_23560;
(statearr_23578[(7)] = inst_23490);

return statearr_23578;
})();
var statearr_23579_23637 = state_23560__$1;
(statearr_23579_23637[(2)] = null);

(statearr_23579_23637[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (13))){
var inst_23490 = (state_23560[(7)]);
var inst_23497 = inst_23490.cljs$lang$protocol_mask$partition0$;
var inst_23498 = (inst_23497 & (64));
var inst_23499 = inst_23490.cljs$core$ISeq$;
var inst_23500 = (inst_23498) || (inst_23499);
var state_23560__$1 = state_23560;
if(cljs.core.truth_(inst_23500)){
var statearr_23580_23638 = state_23560__$1;
(statearr_23580_23638[(1)] = (16));

} else {
var statearr_23581_23639 = state_23560__$1;
(statearr_23581_23639[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (22))){
var inst_23520 = (state_23560[(9)]);
var inst_23519 = (state_23560[(14)]);
var inst_23518 = (state_23560[(2)]);
var inst_23519__$1 = cljs.core.nth.call(null,inst_23518,(0),null);
var inst_23520__$1 = cljs.core.nth.call(null,inst_23518,(1),null);
var inst_23521 = (inst_23519__$1 == null);
var inst_23522 = cljs.core._EQ_.call(null,inst_23520__$1,change);
var inst_23523 = (inst_23521) || (inst_23522);
var state_23560__$1 = (function (){var statearr_23582 = state_23560;
(statearr_23582[(9)] = inst_23520__$1);

(statearr_23582[(14)] = inst_23519__$1);

return statearr_23582;
})();
if(cljs.core.truth_(inst_23523)){
var statearr_23583_23640 = state_23560__$1;
(statearr_23583_23640[(1)] = (23));

} else {
var statearr_23584_23641 = state_23560__$1;
(statearr_23584_23641[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (36))){
var inst_23512 = (state_23560[(12)]);
var inst_23490 = inst_23512;
var state_23560__$1 = (function (){var statearr_23585 = state_23560;
(statearr_23585[(7)] = inst_23490);

return statearr_23585;
})();
var statearr_23586_23642 = state_23560__$1;
(statearr_23586_23642[(2)] = null);

(statearr_23586_23642[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (29))){
var inst_23534 = (state_23560[(10)]);
var state_23560__$1 = state_23560;
var statearr_23587_23643 = state_23560__$1;
(statearr_23587_23643[(2)] = inst_23534);

(statearr_23587_23643[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (6))){
var state_23560__$1 = state_23560;
var statearr_23588_23644 = state_23560__$1;
(statearr_23588_23644[(2)] = false);

(statearr_23588_23644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (28))){
var inst_23530 = (state_23560[(2)]);
var inst_23531 = calc_state.call(null);
var inst_23490 = inst_23531;
var state_23560__$1 = (function (){var statearr_23589 = state_23560;
(statearr_23589[(15)] = inst_23530);

(statearr_23589[(7)] = inst_23490);

return statearr_23589;
})();
var statearr_23590_23645 = state_23560__$1;
(statearr_23590_23645[(2)] = null);

(statearr_23590_23645[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (25))){
var inst_23556 = (state_23560[(2)]);
var state_23560__$1 = state_23560;
var statearr_23591_23646 = state_23560__$1;
(statearr_23591_23646[(2)] = inst_23556);

(statearr_23591_23646[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (34))){
var inst_23554 = (state_23560[(2)]);
var state_23560__$1 = state_23560;
var statearr_23592_23647 = state_23560__$1;
(statearr_23592_23647[(2)] = inst_23554);

(statearr_23592_23647[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (17))){
var state_23560__$1 = state_23560;
var statearr_23593_23648 = state_23560__$1;
(statearr_23593_23648[(2)] = false);

(statearr_23593_23648[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (3))){
var state_23560__$1 = state_23560;
var statearr_23594_23649 = state_23560__$1;
(statearr_23594_23649[(2)] = false);

(statearr_23594_23649[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (12))){
var inst_23558 = (state_23560[(2)]);
var state_23560__$1 = state_23560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23560__$1,inst_23558);
} else {
if((state_val_23561 === (2))){
var inst_23466 = (state_23560[(8)]);
var inst_23471 = inst_23466.cljs$lang$protocol_mask$partition0$;
var inst_23472 = (inst_23471 & (64));
var inst_23473 = inst_23466.cljs$core$ISeq$;
var inst_23474 = (inst_23472) || (inst_23473);
var state_23560__$1 = state_23560;
if(cljs.core.truth_(inst_23474)){
var statearr_23595_23650 = state_23560__$1;
(statearr_23595_23650[(1)] = (5));

} else {
var statearr_23596_23651 = state_23560__$1;
(statearr_23596_23651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (23))){
var inst_23519 = (state_23560[(14)]);
var inst_23525 = (inst_23519 == null);
var state_23560__$1 = state_23560;
if(cljs.core.truth_(inst_23525)){
var statearr_23597_23652 = state_23560__$1;
(statearr_23597_23652[(1)] = (26));

} else {
var statearr_23598_23653 = state_23560__$1;
(statearr_23598_23653[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (35))){
var inst_23545 = (state_23560[(2)]);
var state_23560__$1 = state_23560;
if(cljs.core.truth_(inst_23545)){
var statearr_23599_23654 = state_23560__$1;
(statearr_23599_23654[(1)] = (36));

} else {
var statearr_23600_23655 = state_23560__$1;
(statearr_23600_23655[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (19))){
var inst_23490 = (state_23560[(7)]);
var inst_23509 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23490);
var state_23560__$1 = state_23560;
var statearr_23601_23656 = state_23560__$1;
(statearr_23601_23656[(2)] = inst_23509);

(statearr_23601_23656[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (11))){
var inst_23490 = (state_23560[(7)]);
var inst_23494 = (inst_23490 == null);
var inst_23495 = cljs.core.not.call(null,inst_23494);
var state_23560__$1 = state_23560;
if(inst_23495){
var statearr_23602_23657 = state_23560__$1;
(statearr_23602_23657[(1)] = (13));

} else {
var statearr_23603_23658 = state_23560__$1;
(statearr_23603_23658[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (9))){
var inst_23466 = (state_23560[(8)]);
var state_23560__$1 = state_23560;
var statearr_23604_23659 = state_23560__$1;
(statearr_23604_23659[(2)] = inst_23466);

(statearr_23604_23659[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (5))){
var state_23560__$1 = state_23560;
var statearr_23605_23660 = state_23560__$1;
(statearr_23605_23660[(2)] = true);

(statearr_23605_23660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (14))){
var state_23560__$1 = state_23560;
var statearr_23606_23661 = state_23560__$1;
(statearr_23606_23661[(2)] = false);

(statearr_23606_23661[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (26))){
var inst_23520 = (state_23560[(9)]);
var inst_23527 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23520);
var state_23560__$1 = state_23560;
var statearr_23607_23662 = state_23560__$1;
(statearr_23607_23662[(2)] = inst_23527);

(statearr_23607_23662[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (16))){
var state_23560__$1 = state_23560;
var statearr_23608_23663 = state_23560__$1;
(statearr_23608_23663[(2)] = true);

(statearr_23608_23663[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (38))){
var inst_23550 = (state_23560[(2)]);
var state_23560__$1 = state_23560;
var statearr_23609_23664 = state_23560__$1;
(statearr_23609_23664[(2)] = inst_23550);

(statearr_23609_23664[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (30))){
var inst_23520 = (state_23560[(9)]);
var inst_23514 = (state_23560[(13)]);
var inst_23513 = (state_23560[(11)]);
var inst_23537 = cljs.core.empty_QMARK_.call(null,inst_23513);
var inst_23538 = inst_23514.call(null,inst_23520);
var inst_23539 = cljs.core.not.call(null,inst_23538);
var inst_23540 = (inst_23537) && (inst_23539);
var state_23560__$1 = state_23560;
var statearr_23610_23665 = state_23560__$1;
(statearr_23610_23665[(2)] = inst_23540);

(statearr_23610_23665[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (10))){
var inst_23466 = (state_23560[(8)]);
var inst_23486 = (state_23560[(2)]);
var inst_23487 = cljs.core.get.call(null,inst_23486,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23488 = cljs.core.get.call(null,inst_23486,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23489 = cljs.core.get.call(null,inst_23486,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23490 = inst_23466;
var state_23560__$1 = (function (){var statearr_23611 = state_23560;
(statearr_23611[(16)] = inst_23489);

(statearr_23611[(17)] = inst_23488);

(statearr_23611[(7)] = inst_23490);

(statearr_23611[(18)] = inst_23487);

return statearr_23611;
})();
var statearr_23612_23666 = state_23560__$1;
(statearr_23612_23666[(2)] = null);

(statearr_23612_23666[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (18))){
var inst_23504 = (state_23560[(2)]);
var state_23560__$1 = state_23560;
var statearr_23613_23667 = state_23560__$1;
(statearr_23613_23667[(2)] = inst_23504);

(statearr_23613_23667[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (37))){
var state_23560__$1 = state_23560;
var statearr_23614_23668 = state_23560__$1;
(statearr_23614_23668[(2)] = null);

(statearr_23614_23668[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23561 === (8))){
var inst_23466 = (state_23560[(8)]);
var inst_23483 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23466);
var state_23560__$1 = state_23560;
var statearr_23615_23669 = state_23560__$1;
(statearr_23615_23669[(2)] = inst_23483);

(statearr_23615_23669[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21910__auto___23623,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21798__auto__,c__21910__auto___23623,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21799__auto__ = null;
var cljs$core$async$mix_$_state_machine__21799__auto____0 = (function (){
var statearr_23619 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23619[(0)] = cljs$core$async$mix_$_state_machine__21799__auto__);

(statearr_23619[(1)] = (1));

return statearr_23619;
});
var cljs$core$async$mix_$_state_machine__21799__auto____1 = (function (state_23560){
while(true){
var ret_value__21800__auto__ = (function (){try{while(true){
var result__21801__auto__ = switch__21798__auto__.call(null,state_23560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21801__auto__;
}
break;
}
}catch (e23620){if((e23620 instanceof Object)){
var ex__21802__auto__ = e23620;
var statearr_23621_23670 = state_23560;
(statearr_23621_23670[(5)] = ex__21802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23620;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23671 = state_23560;
state_23560 = G__23671;
continue;
} else {
return ret_value__21800__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21799__auto__ = function(state_23560){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21799__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21799__auto____1.call(this,state_23560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21799__auto____0;
cljs$core$async$mix_$_state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21799__auto____1;
return cljs$core$async$mix_$_state_machine__21799__auto__;
})()
;})(switch__21798__auto__,c__21910__auto___23623,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21912__auto__ = (function (){var statearr_23622 = f__21911__auto__.call(null);
(statearr_23622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21910__auto___23623);

return statearr_23622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21912__auto__);
});})(c__21910__auto___23623,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17440__auto__ = (((p == null))?null:p);
var m__17441__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17441__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17440__auto__ = (((p == null))?null:p);
var m__17441__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,p,v,ch);
} else {
var m__17441__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args23672 = [];
var len__17843__auto___23675 = arguments.length;
var i__17844__auto___23676 = (0);
while(true){
if((i__17844__auto___23676 < len__17843__auto___23675)){
args23672.push((arguments[i__17844__auto___23676]));

var G__23677 = (i__17844__auto___23676 + (1));
i__17844__auto___23676 = G__23677;
continue;
} else {
}
break;
}

var G__23674 = args23672.length;
switch (G__23674) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23672.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17440__auto__ = (((p == null))?null:p);
var m__17441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,p);
} else {
var m__17441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17440__auto__ = (((p == null))?null:p);
var m__17441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,p,v);
} else {
var m__17441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args23680 = [];
var len__17843__auto___23805 = arguments.length;
var i__17844__auto___23806 = (0);
while(true){
if((i__17844__auto___23806 < len__17843__auto___23805)){
args23680.push((arguments[i__17844__auto___23806]));

var G__23807 = (i__17844__auto___23806 + (1));
i__17844__auto___23806 = G__23807;
continue;
} else {
}
break;
}

var G__23682 = args23680.length;
switch (G__23682) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23680.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16785__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16785__auto__,mults){
return (function (p1__23679_SHARP_){
if(cljs.core.truth_(p1__23679_SHARP_.call(null,topic))){
return p1__23679_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23679_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16785__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async23683 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23683 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23684){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23684 = meta23684;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23685,meta23684__$1){
var self__ = this;
var _23685__$1 = this;
return (new cljs.core.async.t_cljs$core$async23683(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23684__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23683.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23685){
var self__ = this;
var _23685__$1 = this;
return self__.meta23684;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23683.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23683.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23683.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async23683.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23683.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23683.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23683.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23683.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23684","meta23684",2106874446,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23683.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23683.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23683";

cljs.core.async.t_cljs$core$async23683.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async23683");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async23683 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23683(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23684){
return (new cljs.core.async.t_cljs$core$async23683(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23684));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23683(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21910__auto___23809 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21910__auto___23809,mults,ensure_mult,p){
return (function (){
var f__21911__auto__ = (function (){var switch__21798__auto__ = ((function (c__21910__auto___23809,mults,ensure_mult,p){
return (function (state_23757){
var state_val_23758 = (state_23757[(1)]);
if((state_val_23758 === (7))){
var inst_23753 = (state_23757[(2)]);
var state_23757__$1 = state_23757;
var statearr_23759_23810 = state_23757__$1;
(statearr_23759_23810[(2)] = inst_23753);

(statearr_23759_23810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (20))){
var state_23757__$1 = state_23757;
var statearr_23760_23811 = state_23757__$1;
(statearr_23760_23811[(2)] = null);

(statearr_23760_23811[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (1))){
var state_23757__$1 = state_23757;
var statearr_23761_23812 = state_23757__$1;
(statearr_23761_23812[(2)] = null);

(statearr_23761_23812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (24))){
var inst_23736 = (state_23757[(7)]);
var inst_23745 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23736);
var state_23757__$1 = state_23757;
var statearr_23762_23813 = state_23757__$1;
(statearr_23762_23813[(2)] = inst_23745);

(statearr_23762_23813[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (4))){
var inst_23688 = (state_23757[(8)]);
var inst_23688__$1 = (state_23757[(2)]);
var inst_23689 = (inst_23688__$1 == null);
var state_23757__$1 = (function (){var statearr_23763 = state_23757;
(statearr_23763[(8)] = inst_23688__$1);

return statearr_23763;
})();
if(cljs.core.truth_(inst_23689)){
var statearr_23764_23814 = state_23757__$1;
(statearr_23764_23814[(1)] = (5));

} else {
var statearr_23765_23815 = state_23757__$1;
(statearr_23765_23815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (15))){
var inst_23730 = (state_23757[(2)]);
var state_23757__$1 = state_23757;
var statearr_23766_23816 = state_23757__$1;
(statearr_23766_23816[(2)] = inst_23730);

(statearr_23766_23816[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (21))){
var inst_23750 = (state_23757[(2)]);
var state_23757__$1 = (function (){var statearr_23767 = state_23757;
(statearr_23767[(9)] = inst_23750);

return statearr_23767;
})();
var statearr_23768_23817 = state_23757__$1;
(statearr_23768_23817[(2)] = null);

(statearr_23768_23817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (13))){
var inst_23712 = (state_23757[(10)]);
var inst_23714 = cljs.core.chunked_seq_QMARK_.call(null,inst_23712);
var state_23757__$1 = state_23757;
if(inst_23714){
var statearr_23769_23818 = state_23757__$1;
(statearr_23769_23818[(1)] = (16));

} else {
var statearr_23770_23819 = state_23757__$1;
(statearr_23770_23819[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (22))){
var inst_23742 = (state_23757[(2)]);
var state_23757__$1 = state_23757;
if(cljs.core.truth_(inst_23742)){
var statearr_23771_23820 = state_23757__$1;
(statearr_23771_23820[(1)] = (23));

} else {
var statearr_23772_23821 = state_23757__$1;
(statearr_23772_23821[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (6))){
var inst_23688 = (state_23757[(8)]);
var inst_23736 = (state_23757[(7)]);
var inst_23738 = (state_23757[(11)]);
var inst_23736__$1 = topic_fn.call(null,inst_23688);
var inst_23737 = cljs.core.deref.call(null,mults);
var inst_23738__$1 = cljs.core.get.call(null,inst_23737,inst_23736__$1);
var state_23757__$1 = (function (){var statearr_23773 = state_23757;
(statearr_23773[(7)] = inst_23736__$1);

(statearr_23773[(11)] = inst_23738__$1);

return statearr_23773;
})();
if(cljs.core.truth_(inst_23738__$1)){
var statearr_23774_23822 = state_23757__$1;
(statearr_23774_23822[(1)] = (19));

} else {
var statearr_23775_23823 = state_23757__$1;
(statearr_23775_23823[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (25))){
var inst_23747 = (state_23757[(2)]);
var state_23757__$1 = state_23757;
var statearr_23776_23824 = state_23757__$1;
(statearr_23776_23824[(2)] = inst_23747);

(statearr_23776_23824[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (17))){
var inst_23712 = (state_23757[(10)]);
var inst_23721 = cljs.core.first.call(null,inst_23712);
var inst_23722 = cljs.core.async.muxch_STAR_.call(null,inst_23721);
var inst_23723 = cljs.core.async.close_BANG_.call(null,inst_23722);
var inst_23724 = cljs.core.next.call(null,inst_23712);
var inst_23698 = inst_23724;
var inst_23699 = null;
var inst_23700 = (0);
var inst_23701 = (0);
var state_23757__$1 = (function (){var statearr_23777 = state_23757;
(statearr_23777[(12)] = inst_23700);

(statearr_23777[(13)] = inst_23699);

(statearr_23777[(14)] = inst_23698);

(statearr_23777[(15)] = inst_23723);

(statearr_23777[(16)] = inst_23701);

return statearr_23777;
})();
var statearr_23778_23825 = state_23757__$1;
(statearr_23778_23825[(2)] = null);

(statearr_23778_23825[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (3))){
var inst_23755 = (state_23757[(2)]);
var state_23757__$1 = state_23757;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23757__$1,inst_23755);
} else {
if((state_val_23758 === (12))){
var inst_23732 = (state_23757[(2)]);
var state_23757__$1 = state_23757;
var statearr_23779_23826 = state_23757__$1;
(statearr_23779_23826[(2)] = inst_23732);

(statearr_23779_23826[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (2))){
var state_23757__$1 = state_23757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23757__$1,(4),ch);
} else {
if((state_val_23758 === (23))){
var state_23757__$1 = state_23757;
var statearr_23780_23827 = state_23757__$1;
(statearr_23780_23827[(2)] = null);

(statearr_23780_23827[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (19))){
var inst_23688 = (state_23757[(8)]);
var inst_23738 = (state_23757[(11)]);
var inst_23740 = cljs.core.async.muxch_STAR_.call(null,inst_23738);
var state_23757__$1 = state_23757;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23757__$1,(22),inst_23740,inst_23688);
} else {
if((state_val_23758 === (11))){
var inst_23712 = (state_23757[(10)]);
var inst_23698 = (state_23757[(14)]);
var inst_23712__$1 = cljs.core.seq.call(null,inst_23698);
var state_23757__$1 = (function (){var statearr_23781 = state_23757;
(statearr_23781[(10)] = inst_23712__$1);

return statearr_23781;
})();
if(inst_23712__$1){
var statearr_23782_23828 = state_23757__$1;
(statearr_23782_23828[(1)] = (13));

} else {
var statearr_23783_23829 = state_23757__$1;
(statearr_23783_23829[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (9))){
var inst_23734 = (state_23757[(2)]);
var state_23757__$1 = state_23757;
var statearr_23784_23830 = state_23757__$1;
(statearr_23784_23830[(2)] = inst_23734);

(statearr_23784_23830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (5))){
var inst_23695 = cljs.core.deref.call(null,mults);
var inst_23696 = cljs.core.vals.call(null,inst_23695);
var inst_23697 = cljs.core.seq.call(null,inst_23696);
var inst_23698 = inst_23697;
var inst_23699 = null;
var inst_23700 = (0);
var inst_23701 = (0);
var state_23757__$1 = (function (){var statearr_23785 = state_23757;
(statearr_23785[(12)] = inst_23700);

(statearr_23785[(13)] = inst_23699);

(statearr_23785[(14)] = inst_23698);

(statearr_23785[(16)] = inst_23701);

return statearr_23785;
})();
var statearr_23786_23831 = state_23757__$1;
(statearr_23786_23831[(2)] = null);

(statearr_23786_23831[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (14))){
var state_23757__$1 = state_23757;
var statearr_23790_23832 = state_23757__$1;
(statearr_23790_23832[(2)] = null);

(statearr_23790_23832[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (16))){
var inst_23712 = (state_23757[(10)]);
var inst_23716 = cljs.core.chunk_first.call(null,inst_23712);
var inst_23717 = cljs.core.chunk_rest.call(null,inst_23712);
var inst_23718 = cljs.core.count.call(null,inst_23716);
var inst_23698 = inst_23717;
var inst_23699 = inst_23716;
var inst_23700 = inst_23718;
var inst_23701 = (0);
var state_23757__$1 = (function (){var statearr_23791 = state_23757;
(statearr_23791[(12)] = inst_23700);

(statearr_23791[(13)] = inst_23699);

(statearr_23791[(14)] = inst_23698);

(statearr_23791[(16)] = inst_23701);

return statearr_23791;
})();
var statearr_23792_23833 = state_23757__$1;
(statearr_23792_23833[(2)] = null);

(statearr_23792_23833[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (10))){
var inst_23700 = (state_23757[(12)]);
var inst_23699 = (state_23757[(13)]);
var inst_23698 = (state_23757[(14)]);
var inst_23701 = (state_23757[(16)]);
var inst_23706 = cljs.core._nth.call(null,inst_23699,inst_23701);
var inst_23707 = cljs.core.async.muxch_STAR_.call(null,inst_23706);
var inst_23708 = cljs.core.async.close_BANG_.call(null,inst_23707);
var inst_23709 = (inst_23701 + (1));
var tmp23787 = inst_23700;
var tmp23788 = inst_23699;
var tmp23789 = inst_23698;
var inst_23698__$1 = tmp23789;
var inst_23699__$1 = tmp23788;
var inst_23700__$1 = tmp23787;
var inst_23701__$1 = inst_23709;
var state_23757__$1 = (function (){var statearr_23793 = state_23757;
(statearr_23793[(12)] = inst_23700__$1);

(statearr_23793[(17)] = inst_23708);

(statearr_23793[(13)] = inst_23699__$1);

(statearr_23793[(14)] = inst_23698__$1);

(statearr_23793[(16)] = inst_23701__$1);

return statearr_23793;
})();
var statearr_23794_23834 = state_23757__$1;
(statearr_23794_23834[(2)] = null);

(statearr_23794_23834[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (18))){
var inst_23727 = (state_23757[(2)]);
var state_23757__$1 = state_23757;
var statearr_23795_23835 = state_23757__$1;
(statearr_23795_23835[(2)] = inst_23727);

(statearr_23795_23835[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23758 === (8))){
var inst_23700 = (state_23757[(12)]);
var inst_23701 = (state_23757[(16)]);
var inst_23703 = (inst_23701 < inst_23700);
var inst_23704 = inst_23703;
var state_23757__$1 = state_23757;
if(cljs.core.truth_(inst_23704)){
var statearr_23796_23836 = state_23757__$1;
(statearr_23796_23836[(1)] = (10));

} else {
var statearr_23797_23837 = state_23757__$1;
(statearr_23797_23837[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21910__auto___23809,mults,ensure_mult,p))
;
return ((function (switch__21798__auto__,c__21910__auto___23809,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21799__auto__ = null;
var cljs$core$async$state_machine__21799__auto____0 = (function (){
var statearr_23801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23801[(0)] = cljs$core$async$state_machine__21799__auto__);

(statearr_23801[(1)] = (1));

return statearr_23801;
});
var cljs$core$async$state_machine__21799__auto____1 = (function (state_23757){
while(true){
var ret_value__21800__auto__ = (function (){try{while(true){
var result__21801__auto__ = switch__21798__auto__.call(null,state_23757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21801__auto__;
}
break;
}
}catch (e23802){if((e23802 instanceof Object)){
var ex__21802__auto__ = e23802;
var statearr_23803_23838 = state_23757;
(statearr_23803_23838[(5)] = ex__21802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23839 = state_23757;
state_23757 = G__23839;
continue;
} else {
return ret_value__21800__auto__;
}
break;
}
});
cljs$core$async$state_machine__21799__auto__ = function(state_23757){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21799__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21799__auto____1.call(this,state_23757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21799__auto____0;
cljs$core$async$state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21799__auto____1;
return cljs$core$async$state_machine__21799__auto__;
})()
;})(switch__21798__auto__,c__21910__auto___23809,mults,ensure_mult,p))
})();
var state__21912__auto__ = (function (){var statearr_23804 = f__21911__auto__.call(null);
(statearr_23804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21910__auto___23809);

return statearr_23804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21912__auto__);
});})(c__21910__auto___23809,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args23840 = [];
var len__17843__auto___23843 = arguments.length;
var i__17844__auto___23844 = (0);
while(true){
if((i__17844__auto___23844 < len__17843__auto___23843)){
args23840.push((arguments[i__17844__auto___23844]));

var G__23845 = (i__17844__auto___23844 + (1));
i__17844__auto___23844 = G__23845;
continue;
} else {
}
break;
}

var G__23842 = args23840.length;
switch (G__23842) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23840.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args23847 = [];
var len__17843__auto___23850 = arguments.length;
var i__17844__auto___23851 = (0);
while(true){
if((i__17844__auto___23851 < len__17843__auto___23850)){
args23847.push((arguments[i__17844__auto___23851]));

var G__23852 = (i__17844__auto___23851 + (1));
i__17844__auto___23851 = G__23852;
continue;
} else {
}
break;
}

var G__23849 = args23847.length;
switch (G__23849) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23847.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args23854 = [];
var len__17843__auto___23925 = arguments.length;
var i__17844__auto___23926 = (0);
while(true){
if((i__17844__auto___23926 < len__17843__auto___23925)){
args23854.push((arguments[i__17844__auto___23926]));

var G__23927 = (i__17844__auto___23926 + (1));
i__17844__auto___23926 = G__23927;
continue;
} else {
}
break;
}

var G__23856 = args23854.length;
switch (G__23856) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23854.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__21910__auto___23929 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21910__auto___23929,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21911__auto__ = (function (){var switch__21798__auto__ = ((function (c__21910__auto___23929,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23895){
var state_val_23896 = (state_23895[(1)]);
if((state_val_23896 === (7))){
var state_23895__$1 = state_23895;
var statearr_23897_23930 = state_23895__$1;
(statearr_23897_23930[(2)] = null);

(statearr_23897_23930[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (1))){
var state_23895__$1 = state_23895;
var statearr_23898_23931 = state_23895__$1;
(statearr_23898_23931[(2)] = null);

(statearr_23898_23931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (4))){
var inst_23859 = (state_23895[(7)]);
var inst_23861 = (inst_23859 < cnt);
var state_23895__$1 = state_23895;
if(cljs.core.truth_(inst_23861)){
var statearr_23899_23932 = state_23895__$1;
(statearr_23899_23932[(1)] = (6));

} else {
var statearr_23900_23933 = state_23895__$1;
(statearr_23900_23933[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (15))){
var inst_23891 = (state_23895[(2)]);
var state_23895__$1 = state_23895;
var statearr_23901_23934 = state_23895__$1;
(statearr_23901_23934[(2)] = inst_23891);

(statearr_23901_23934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (13))){
var inst_23884 = cljs.core.async.close_BANG_.call(null,out);
var state_23895__$1 = state_23895;
var statearr_23902_23935 = state_23895__$1;
(statearr_23902_23935[(2)] = inst_23884);

(statearr_23902_23935[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (6))){
var state_23895__$1 = state_23895;
var statearr_23903_23936 = state_23895__$1;
(statearr_23903_23936[(2)] = null);

(statearr_23903_23936[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (3))){
var inst_23893 = (state_23895[(2)]);
var state_23895__$1 = state_23895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23895__$1,inst_23893);
} else {
if((state_val_23896 === (12))){
var inst_23881 = (state_23895[(8)]);
var inst_23881__$1 = (state_23895[(2)]);
var inst_23882 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23881__$1);
var state_23895__$1 = (function (){var statearr_23904 = state_23895;
(statearr_23904[(8)] = inst_23881__$1);

return statearr_23904;
})();
if(cljs.core.truth_(inst_23882)){
var statearr_23905_23937 = state_23895__$1;
(statearr_23905_23937[(1)] = (13));

} else {
var statearr_23906_23938 = state_23895__$1;
(statearr_23906_23938[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (2))){
var inst_23858 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23859 = (0);
var state_23895__$1 = (function (){var statearr_23907 = state_23895;
(statearr_23907[(9)] = inst_23858);

(statearr_23907[(7)] = inst_23859);

return statearr_23907;
})();
var statearr_23908_23939 = state_23895__$1;
(statearr_23908_23939[(2)] = null);

(statearr_23908_23939[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (11))){
var inst_23859 = (state_23895[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23895,(10),Object,null,(9));
var inst_23868 = chs__$1.call(null,inst_23859);
var inst_23869 = done.call(null,inst_23859);
var inst_23870 = cljs.core.async.take_BANG_.call(null,inst_23868,inst_23869);
var state_23895__$1 = state_23895;
var statearr_23909_23940 = state_23895__$1;
(statearr_23909_23940[(2)] = inst_23870);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23895__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (9))){
var inst_23859 = (state_23895[(7)]);
var inst_23872 = (state_23895[(2)]);
var inst_23873 = (inst_23859 + (1));
var inst_23859__$1 = inst_23873;
var state_23895__$1 = (function (){var statearr_23910 = state_23895;
(statearr_23910[(10)] = inst_23872);

(statearr_23910[(7)] = inst_23859__$1);

return statearr_23910;
})();
var statearr_23911_23941 = state_23895__$1;
(statearr_23911_23941[(2)] = null);

(statearr_23911_23941[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (5))){
var inst_23879 = (state_23895[(2)]);
var state_23895__$1 = (function (){var statearr_23912 = state_23895;
(statearr_23912[(11)] = inst_23879);

return statearr_23912;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23895__$1,(12),dchan);
} else {
if((state_val_23896 === (14))){
var inst_23881 = (state_23895[(8)]);
var inst_23886 = cljs.core.apply.call(null,f,inst_23881);
var state_23895__$1 = state_23895;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23895__$1,(16),out,inst_23886);
} else {
if((state_val_23896 === (16))){
var inst_23888 = (state_23895[(2)]);
var state_23895__$1 = (function (){var statearr_23913 = state_23895;
(statearr_23913[(12)] = inst_23888);

return statearr_23913;
})();
var statearr_23914_23942 = state_23895__$1;
(statearr_23914_23942[(2)] = null);

(statearr_23914_23942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (10))){
var inst_23863 = (state_23895[(2)]);
var inst_23864 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23895__$1 = (function (){var statearr_23915 = state_23895;
(statearr_23915[(13)] = inst_23863);

return statearr_23915;
})();
var statearr_23916_23943 = state_23895__$1;
(statearr_23916_23943[(2)] = inst_23864);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23895__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23896 === (8))){
var inst_23877 = (state_23895[(2)]);
var state_23895__$1 = state_23895;
var statearr_23917_23944 = state_23895__$1;
(statearr_23917_23944[(2)] = inst_23877);

(statearr_23917_23944[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21910__auto___23929,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21798__auto__,c__21910__auto___23929,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21799__auto__ = null;
var cljs$core$async$state_machine__21799__auto____0 = (function (){
var statearr_23921 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23921[(0)] = cljs$core$async$state_machine__21799__auto__);

(statearr_23921[(1)] = (1));

return statearr_23921;
});
var cljs$core$async$state_machine__21799__auto____1 = (function (state_23895){
while(true){
var ret_value__21800__auto__ = (function (){try{while(true){
var result__21801__auto__ = switch__21798__auto__.call(null,state_23895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21801__auto__;
}
break;
}
}catch (e23922){if((e23922 instanceof Object)){
var ex__21802__auto__ = e23922;
var statearr_23923_23945 = state_23895;
(statearr_23923_23945[(5)] = ex__21802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23946 = state_23895;
state_23895 = G__23946;
continue;
} else {
return ret_value__21800__auto__;
}
break;
}
});
cljs$core$async$state_machine__21799__auto__ = function(state_23895){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21799__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21799__auto____1.call(this,state_23895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21799__auto____0;
cljs$core$async$state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21799__auto____1;
return cljs$core$async$state_machine__21799__auto__;
})()
;})(switch__21798__auto__,c__21910__auto___23929,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21912__auto__ = (function (){var statearr_23924 = f__21911__auto__.call(null);
(statearr_23924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21910__auto___23929);

return statearr_23924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21912__auto__);
});})(c__21910__auto___23929,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args23948 = [];
var len__17843__auto___24004 = arguments.length;
var i__17844__auto___24005 = (0);
while(true){
if((i__17844__auto___24005 < len__17843__auto___24004)){
args23948.push((arguments[i__17844__auto___24005]));

var G__24006 = (i__17844__auto___24005 + (1));
i__17844__auto___24005 = G__24006;
continue;
} else {
}
break;
}

var G__23950 = args23948.length;
switch (G__23950) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23948.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21910__auto___24008 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21910__auto___24008,out){
return (function (){
var f__21911__auto__ = (function (){var switch__21798__auto__ = ((function (c__21910__auto___24008,out){
return (function (state_23980){
var state_val_23981 = (state_23980[(1)]);
if((state_val_23981 === (7))){
var inst_23959 = (state_23980[(7)]);
var inst_23960 = (state_23980[(8)]);
var inst_23959__$1 = (state_23980[(2)]);
var inst_23960__$1 = cljs.core.nth.call(null,inst_23959__$1,(0),null);
var inst_23961 = cljs.core.nth.call(null,inst_23959__$1,(1),null);
var inst_23962 = (inst_23960__$1 == null);
var state_23980__$1 = (function (){var statearr_23982 = state_23980;
(statearr_23982[(7)] = inst_23959__$1);

(statearr_23982[(8)] = inst_23960__$1);

(statearr_23982[(9)] = inst_23961);

return statearr_23982;
})();
if(cljs.core.truth_(inst_23962)){
var statearr_23983_24009 = state_23980__$1;
(statearr_23983_24009[(1)] = (8));

} else {
var statearr_23984_24010 = state_23980__$1;
(statearr_23984_24010[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23981 === (1))){
var inst_23951 = cljs.core.vec.call(null,chs);
var inst_23952 = inst_23951;
var state_23980__$1 = (function (){var statearr_23985 = state_23980;
(statearr_23985[(10)] = inst_23952);

return statearr_23985;
})();
var statearr_23986_24011 = state_23980__$1;
(statearr_23986_24011[(2)] = null);

(statearr_23986_24011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23981 === (4))){
var inst_23952 = (state_23980[(10)]);
var state_23980__$1 = state_23980;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23980__$1,(7),inst_23952);
} else {
if((state_val_23981 === (6))){
var inst_23976 = (state_23980[(2)]);
var state_23980__$1 = state_23980;
var statearr_23987_24012 = state_23980__$1;
(statearr_23987_24012[(2)] = inst_23976);

(statearr_23987_24012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23981 === (3))){
var inst_23978 = (state_23980[(2)]);
var state_23980__$1 = state_23980;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23980__$1,inst_23978);
} else {
if((state_val_23981 === (2))){
var inst_23952 = (state_23980[(10)]);
var inst_23954 = cljs.core.count.call(null,inst_23952);
var inst_23955 = (inst_23954 > (0));
var state_23980__$1 = state_23980;
if(cljs.core.truth_(inst_23955)){
var statearr_23989_24013 = state_23980__$1;
(statearr_23989_24013[(1)] = (4));

} else {
var statearr_23990_24014 = state_23980__$1;
(statearr_23990_24014[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23981 === (11))){
var inst_23952 = (state_23980[(10)]);
var inst_23969 = (state_23980[(2)]);
var tmp23988 = inst_23952;
var inst_23952__$1 = tmp23988;
var state_23980__$1 = (function (){var statearr_23991 = state_23980;
(statearr_23991[(11)] = inst_23969);

(statearr_23991[(10)] = inst_23952__$1);

return statearr_23991;
})();
var statearr_23992_24015 = state_23980__$1;
(statearr_23992_24015[(2)] = null);

(statearr_23992_24015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23981 === (9))){
var inst_23960 = (state_23980[(8)]);
var state_23980__$1 = state_23980;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23980__$1,(11),out,inst_23960);
} else {
if((state_val_23981 === (5))){
var inst_23974 = cljs.core.async.close_BANG_.call(null,out);
var state_23980__$1 = state_23980;
var statearr_23993_24016 = state_23980__$1;
(statearr_23993_24016[(2)] = inst_23974);

(statearr_23993_24016[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23981 === (10))){
var inst_23972 = (state_23980[(2)]);
var state_23980__$1 = state_23980;
var statearr_23994_24017 = state_23980__$1;
(statearr_23994_24017[(2)] = inst_23972);

(statearr_23994_24017[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23981 === (8))){
var inst_23959 = (state_23980[(7)]);
var inst_23960 = (state_23980[(8)]);
var inst_23961 = (state_23980[(9)]);
var inst_23952 = (state_23980[(10)]);
var inst_23964 = (function (){var cs = inst_23952;
var vec__23957 = inst_23959;
var v = inst_23960;
var c = inst_23961;
return ((function (cs,vec__23957,v,c,inst_23959,inst_23960,inst_23961,inst_23952,state_val_23981,c__21910__auto___24008,out){
return (function (p1__23947_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23947_SHARP_);
});
;})(cs,vec__23957,v,c,inst_23959,inst_23960,inst_23961,inst_23952,state_val_23981,c__21910__auto___24008,out))
})();
var inst_23965 = cljs.core.filterv.call(null,inst_23964,inst_23952);
var inst_23952__$1 = inst_23965;
var state_23980__$1 = (function (){var statearr_23995 = state_23980;
(statearr_23995[(10)] = inst_23952__$1);

return statearr_23995;
})();
var statearr_23996_24018 = state_23980__$1;
(statearr_23996_24018[(2)] = null);

(statearr_23996_24018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__21910__auto___24008,out))
;
return ((function (switch__21798__auto__,c__21910__auto___24008,out){
return (function() {
var cljs$core$async$state_machine__21799__auto__ = null;
var cljs$core$async$state_machine__21799__auto____0 = (function (){
var statearr_24000 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24000[(0)] = cljs$core$async$state_machine__21799__auto__);

(statearr_24000[(1)] = (1));

return statearr_24000;
});
var cljs$core$async$state_machine__21799__auto____1 = (function (state_23980){
while(true){
var ret_value__21800__auto__ = (function (){try{while(true){
var result__21801__auto__ = switch__21798__auto__.call(null,state_23980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21801__auto__;
}
break;
}
}catch (e24001){if((e24001 instanceof Object)){
var ex__21802__auto__ = e24001;
var statearr_24002_24019 = state_23980;
(statearr_24002_24019[(5)] = ex__21802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24020 = state_23980;
state_23980 = G__24020;
continue;
} else {
return ret_value__21800__auto__;
}
break;
}
});
cljs$core$async$state_machine__21799__auto__ = function(state_23980){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21799__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21799__auto____1.call(this,state_23980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21799__auto____0;
cljs$core$async$state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21799__auto____1;
return cljs$core$async$state_machine__21799__auto__;
})()
;})(switch__21798__auto__,c__21910__auto___24008,out))
})();
var state__21912__auto__ = (function (){var statearr_24003 = f__21911__auto__.call(null);
(statearr_24003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21910__auto___24008);

return statearr_24003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21912__auto__);
});})(c__21910__auto___24008,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args24021 = [];
var len__17843__auto___24070 = arguments.length;
var i__17844__auto___24071 = (0);
while(true){
if((i__17844__auto___24071 < len__17843__auto___24070)){
args24021.push((arguments[i__17844__auto___24071]));

var G__24072 = (i__17844__auto___24071 + (1));
i__17844__auto___24071 = G__24072;
continue;
} else {
}
break;
}

var G__24023 = args24021.length;
switch (G__24023) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24021.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21910__auto___24074 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21910__auto___24074,out){
return (function (){
var f__21911__auto__ = (function (){var switch__21798__auto__ = ((function (c__21910__auto___24074,out){
return (function (state_24047){
var state_val_24048 = (state_24047[(1)]);
if((state_val_24048 === (7))){
var inst_24029 = (state_24047[(7)]);
var inst_24029__$1 = (state_24047[(2)]);
var inst_24030 = (inst_24029__$1 == null);
var inst_24031 = cljs.core.not.call(null,inst_24030);
var state_24047__$1 = (function (){var statearr_24049 = state_24047;
(statearr_24049[(7)] = inst_24029__$1);

return statearr_24049;
})();
if(inst_24031){
var statearr_24050_24075 = state_24047__$1;
(statearr_24050_24075[(1)] = (8));

} else {
var statearr_24051_24076 = state_24047__$1;
(statearr_24051_24076[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24048 === (1))){
var inst_24024 = (0);
var state_24047__$1 = (function (){var statearr_24052 = state_24047;
(statearr_24052[(8)] = inst_24024);

return statearr_24052;
})();
var statearr_24053_24077 = state_24047__$1;
(statearr_24053_24077[(2)] = null);

(statearr_24053_24077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24048 === (4))){
var state_24047__$1 = state_24047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24047__$1,(7),ch);
} else {
if((state_val_24048 === (6))){
var inst_24042 = (state_24047[(2)]);
var state_24047__$1 = state_24047;
var statearr_24054_24078 = state_24047__$1;
(statearr_24054_24078[(2)] = inst_24042);

(statearr_24054_24078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24048 === (3))){
var inst_24044 = (state_24047[(2)]);
var inst_24045 = cljs.core.async.close_BANG_.call(null,out);
var state_24047__$1 = (function (){var statearr_24055 = state_24047;
(statearr_24055[(9)] = inst_24044);

return statearr_24055;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24047__$1,inst_24045);
} else {
if((state_val_24048 === (2))){
var inst_24024 = (state_24047[(8)]);
var inst_24026 = (inst_24024 < n);
var state_24047__$1 = state_24047;
if(cljs.core.truth_(inst_24026)){
var statearr_24056_24079 = state_24047__$1;
(statearr_24056_24079[(1)] = (4));

} else {
var statearr_24057_24080 = state_24047__$1;
(statearr_24057_24080[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24048 === (11))){
var inst_24024 = (state_24047[(8)]);
var inst_24034 = (state_24047[(2)]);
var inst_24035 = (inst_24024 + (1));
var inst_24024__$1 = inst_24035;
var state_24047__$1 = (function (){var statearr_24058 = state_24047;
(statearr_24058[(10)] = inst_24034);

(statearr_24058[(8)] = inst_24024__$1);

return statearr_24058;
})();
var statearr_24059_24081 = state_24047__$1;
(statearr_24059_24081[(2)] = null);

(statearr_24059_24081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24048 === (9))){
var state_24047__$1 = state_24047;
var statearr_24060_24082 = state_24047__$1;
(statearr_24060_24082[(2)] = null);

(statearr_24060_24082[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24048 === (5))){
var state_24047__$1 = state_24047;
var statearr_24061_24083 = state_24047__$1;
(statearr_24061_24083[(2)] = null);

(statearr_24061_24083[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24048 === (10))){
var inst_24039 = (state_24047[(2)]);
var state_24047__$1 = state_24047;
var statearr_24062_24084 = state_24047__$1;
(statearr_24062_24084[(2)] = inst_24039);

(statearr_24062_24084[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24048 === (8))){
var inst_24029 = (state_24047[(7)]);
var state_24047__$1 = state_24047;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24047__$1,(11),out,inst_24029);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__21910__auto___24074,out))
;
return ((function (switch__21798__auto__,c__21910__auto___24074,out){
return (function() {
var cljs$core$async$state_machine__21799__auto__ = null;
var cljs$core$async$state_machine__21799__auto____0 = (function (){
var statearr_24066 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24066[(0)] = cljs$core$async$state_machine__21799__auto__);

(statearr_24066[(1)] = (1));

return statearr_24066;
});
var cljs$core$async$state_machine__21799__auto____1 = (function (state_24047){
while(true){
var ret_value__21800__auto__ = (function (){try{while(true){
var result__21801__auto__ = switch__21798__auto__.call(null,state_24047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21801__auto__;
}
break;
}
}catch (e24067){if((e24067 instanceof Object)){
var ex__21802__auto__ = e24067;
var statearr_24068_24085 = state_24047;
(statearr_24068_24085[(5)] = ex__21802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24086 = state_24047;
state_24047 = G__24086;
continue;
} else {
return ret_value__21800__auto__;
}
break;
}
});
cljs$core$async$state_machine__21799__auto__ = function(state_24047){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21799__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21799__auto____1.call(this,state_24047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21799__auto____0;
cljs$core$async$state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21799__auto____1;
return cljs$core$async$state_machine__21799__auto__;
})()
;})(switch__21798__auto__,c__21910__auto___24074,out))
})();
var state__21912__auto__ = (function (){var statearr_24069 = f__21911__auto__.call(null);
(statearr_24069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21910__auto___24074);

return statearr_24069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21912__auto__);
});})(c__21910__auto___24074,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24094 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24094 = (function (map_LT_,f,ch,meta24095){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24095 = meta24095;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24096,meta24095__$1){
var self__ = this;
var _24096__$1 = this;
return (new cljs.core.async.t_cljs$core$async24094(self__.map_LT_,self__.f,self__.ch,meta24095__$1));
});

cljs.core.async.t_cljs$core$async24094.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24096){
var self__ = this;
var _24096__$1 = this;
return self__.meta24095;
});

cljs.core.async.t_cljs$core$async24094.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24094.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24094.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24094.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24094.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24097 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24097 = (function (map_LT_,f,ch,meta24095,_,fn1,meta24098){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24095 = meta24095;
this._ = _;
this.fn1 = fn1;
this.meta24098 = meta24098;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24099,meta24098__$1){
var self__ = this;
var _24099__$1 = this;
return (new cljs.core.async.t_cljs$core$async24097(self__.map_LT_,self__.f,self__.ch,self__.meta24095,self__._,self__.fn1,meta24098__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24097.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24099){
var self__ = this;
var _24099__$1 = this;
return self__.meta24098;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24097.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24097.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24097.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24097.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24087_SHARP_){
return f1.call(null,(((p1__24087_SHARP_ == null))?null:self__.f.call(null,p1__24087_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24097.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24095","meta24095",146635240,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24094","cljs.core.async/t_cljs$core$async24094",-361889390,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24098","meta24098",-2115376422,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24097.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24097.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24097";

cljs.core.async.t_cljs$core$async24097.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async24097");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async24097 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24097(map_LT___$1,f__$1,ch__$1,meta24095__$1,___$2,fn1__$1,meta24098){
return (new cljs.core.async.t_cljs$core$async24097(map_LT___$1,f__$1,ch__$1,meta24095__$1,___$2,fn1__$1,meta24098));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24097(self__.map_LT_,self__.f,self__.ch,self__.meta24095,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16773__auto__ = ret;
if(cljs.core.truth_(and__16773__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16773__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24094.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24094.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24094.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24095","meta24095",146635240,null)], null);
});

cljs.core.async.t_cljs$core$async24094.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24094.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24094";

cljs.core.async.t_cljs$core$async24094.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async24094");
});

cljs.core.async.__GT_t_cljs$core$async24094 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24094(map_LT___$1,f__$1,ch__$1,meta24095){
return (new cljs.core.async.t_cljs$core$async24094(map_LT___$1,f__$1,ch__$1,meta24095));
});

}

return (new cljs.core.async.t_cljs$core$async24094(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24103 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24103 = (function (map_GT_,f,ch,meta24104){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta24104 = meta24104;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24105,meta24104__$1){
var self__ = this;
var _24105__$1 = this;
return (new cljs.core.async.t_cljs$core$async24103(self__.map_GT_,self__.f,self__.ch,meta24104__$1));
});

cljs.core.async.t_cljs$core$async24103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24105){
var self__ = this;
var _24105__$1 = this;
return self__.meta24104;
});

cljs.core.async.t_cljs$core$async24103.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24103.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24103.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24103.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24103.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24103.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24103.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24104","meta24104",478022618,null)], null);
});

cljs.core.async.t_cljs$core$async24103.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24103.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24103";

cljs.core.async.t_cljs$core$async24103.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async24103");
});

cljs.core.async.__GT_t_cljs$core$async24103 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24103(map_GT___$1,f__$1,ch__$1,meta24104){
return (new cljs.core.async.t_cljs$core$async24103(map_GT___$1,f__$1,ch__$1,meta24104));
});

}

return (new cljs.core.async.t_cljs$core$async24103(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24109 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24109 = (function (filter_GT_,p,ch,meta24110){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta24110 = meta24110;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24109.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24111,meta24110__$1){
var self__ = this;
var _24111__$1 = this;
return (new cljs.core.async.t_cljs$core$async24109(self__.filter_GT_,self__.p,self__.ch,meta24110__$1));
});

cljs.core.async.t_cljs$core$async24109.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24111){
var self__ = this;
var _24111__$1 = this;
return self__.meta24110;
});

cljs.core.async.t_cljs$core$async24109.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24109.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24109.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24109.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24109.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24109.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24109.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24109.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24110","meta24110",-1542279405,null)], null);
});

cljs.core.async.t_cljs$core$async24109.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24109.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24109";

cljs.core.async.t_cljs$core$async24109.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async24109");
});

cljs.core.async.__GT_t_cljs$core$async24109 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24109(filter_GT___$1,p__$1,ch__$1,meta24110){
return (new cljs.core.async.t_cljs$core$async24109(filter_GT___$1,p__$1,ch__$1,meta24110));
});

}

return (new cljs.core.async.t_cljs$core$async24109(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args24112 = [];
var len__17843__auto___24156 = arguments.length;
var i__17844__auto___24157 = (0);
while(true){
if((i__17844__auto___24157 < len__17843__auto___24156)){
args24112.push((arguments[i__17844__auto___24157]));

var G__24158 = (i__17844__auto___24157 + (1));
i__17844__auto___24157 = G__24158;
continue;
} else {
}
break;
}

var G__24114 = args24112.length;
switch (G__24114) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24112.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21910__auto___24160 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21910__auto___24160,out){
return (function (){
var f__21911__auto__ = (function (){var switch__21798__auto__ = ((function (c__21910__auto___24160,out){
return (function (state_24135){
var state_val_24136 = (state_24135[(1)]);
if((state_val_24136 === (7))){
var inst_24131 = (state_24135[(2)]);
var state_24135__$1 = state_24135;
var statearr_24137_24161 = state_24135__$1;
(statearr_24137_24161[(2)] = inst_24131);

(statearr_24137_24161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24136 === (1))){
var state_24135__$1 = state_24135;
var statearr_24138_24162 = state_24135__$1;
(statearr_24138_24162[(2)] = null);

(statearr_24138_24162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24136 === (4))){
var inst_24117 = (state_24135[(7)]);
var inst_24117__$1 = (state_24135[(2)]);
var inst_24118 = (inst_24117__$1 == null);
var state_24135__$1 = (function (){var statearr_24139 = state_24135;
(statearr_24139[(7)] = inst_24117__$1);

return statearr_24139;
})();
if(cljs.core.truth_(inst_24118)){
var statearr_24140_24163 = state_24135__$1;
(statearr_24140_24163[(1)] = (5));

} else {
var statearr_24141_24164 = state_24135__$1;
(statearr_24141_24164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24136 === (6))){
var inst_24117 = (state_24135[(7)]);
var inst_24122 = p.call(null,inst_24117);
var state_24135__$1 = state_24135;
if(cljs.core.truth_(inst_24122)){
var statearr_24142_24165 = state_24135__$1;
(statearr_24142_24165[(1)] = (8));

} else {
var statearr_24143_24166 = state_24135__$1;
(statearr_24143_24166[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24136 === (3))){
var inst_24133 = (state_24135[(2)]);
var state_24135__$1 = state_24135;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24135__$1,inst_24133);
} else {
if((state_val_24136 === (2))){
var state_24135__$1 = state_24135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24135__$1,(4),ch);
} else {
if((state_val_24136 === (11))){
var inst_24125 = (state_24135[(2)]);
var state_24135__$1 = state_24135;
var statearr_24144_24167 = state_24135__$1;
(statearr_24144_24167[(2)] = inst_24125);

(statearr_24144_24167[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24136 === (9))){
var state_24135__$1 = state_24135;
var statearr_24145_24168 = state_24135__$1;
(statearr_24145_24168[(2)] = null);

(statearr_24145_24168[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24136 === (5))){
var inst_24120 = cljs.core.async.close_BANG_.call(null,out);
var state_24135__$1 = state_24135;
var statearr_24146_24169 = state_24135__$1;
(statearr_24146_24169[(2)] = inst_24120);

(statearr_24146_24169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24136 === (10))){
var inst_24128 = (state_24135[(2)]);
var state_24135__$1 = (function (){var statearr_24147 = state_24135;
(statearr_24147[(8)] = inst_24128);

return statearr_24147;
})();
var statearr_24148_24170 = state_24135__$1;
(statearr_24148_24170[(2)] = null);

(statearr_24148_24170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24136 === (8))){
var inst_24117 = (state_24135[(7)]);
var state_24135__$1 = state_24135;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24135__$1,(11),out,inst_24117);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__21910__auto___24160,out))
;
return ((function (switch__21798__auto__,c__21910__auto___24160,out){
return (function() {
var cljs$core$async$state_machine__21799__auto__ = null;
var cljs$core$async$state_machine__21799__auto____0 = (function (){
var statearr_24152 = [null,null,null,null,null,null,null,null,null];
(statearr_24152[(0)] = cljs$core$async$state_machine__21799__auto__);

(statearr_24152[(1)] = (1));

return statearr_24152;
});
var cljs$core$async$state_machine__21799__auto____1 = (function (state_24135){
while(true){
var ret_value__21800__auto__ = (function (){try{while(true){
var result__21801__auto__ = switch__21798__auto__.call(null,state_24135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21801__auto__;
}
break;
}
}catch (e24153){if((e24153 instanceof Object)){
var ex__21802__auto__ = e24153;
var statearr_24154_24171 = state_24135;
(statearr_24154_24171[(5)] = ex__21802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24172 = state_24135;
state_24135 = G__24172;
continue;
} else {
return ret_value__21800__auto__;
}
break;
}
});
cljs$core$async$state_machine__21799__auto__ = function(state_24135){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21799__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21799__auto____1.call(this,state_24135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21799__auto____0;
cljs$core$async$state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21799__auto____1;
return cljs$core$async$state_machine__21799__auto__;
})()
;})(switch__21798__auto__,c__21910__auto___24160,out))
})();
var state__21912__auto__ = (function (){var statearr_24155 = f__21911__auto__.call(null);
(statearr_24155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21910__auto___24160);

return statearr_24155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21912__auto__);
});})(c__21910__auto___24160,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args24173 = [];
var len__17843__auto___24176 = arguments.length;
var i__17844__auto___24177 = (0);
while(true){
if((i__17844__auto___24177 < len__17843__auto___24176)){
args24173.push((arguments[i__17844__auto___24177]));

var G__24178 = (i__17844__auto___24177 + (1));
i__17844__auto___24177 = G__24178;
continue;
} else {
}
break;
}

var G__24175 = args24173.length;
switch (G__24175) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24173.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21910__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21910__auto__){
return (function (){
var f__21911__auto__ = (function (){var switch__21798__auto__ = ((function (c__21910__auto__){
return (function (state_24345){
var state_val_24346 = (state_24345[(1)]);
if((state_val_24346 === (7))){
var inst_24341 = (state_24345[(2)]);
var state_24345__$1 = state_24345;
var statearr_24347_24388 = state_24345__$1;
(statearr_24347_24388[(2)] = inst_24341);

(statearr_24347_24388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24346 === (20))){
var inst_24311 = (state_24345[(7)]);
var inst_24322 = (state_24345[(2)]);
var inst_24323 = cljs.core.next.call(null,inst_24311);
var inst_24297 = inst_24323;
var inst_24298 = null;
var inst_24299 = (0);
var inst_24300 = (0);
var state_24345__$1 = (function (){var statearr_24348 = state_24345;
(statearr_24348[(8)] = inst_24300);

(statearr_24348[(9)] = inst_24297);

(statearr_24348[(10)] = inst_24322);

(statearr_24348[(11)] = inst_24298);

(statearr_24348[(12)] = inst_24299);

return statearr_24348;
})();
var statearr_24349_24389 = state_24345__$1;
(statearr_24349_24389[(2)] = null);

(statearr_24349_24389[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24346 === (1))){
var state_24345__$1 = state_24345;
var statearr_24350_24390 = state_24345__$1;
(statearr_24350_24390[(2)] = null);

(statearr_24350_24390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24346 === (4))){
var inst_24286 = (state_24345[(13)]);
var inst_24286__$1 = (state_24345[(2)]);
var inst_24287 = (inst_24286__$1 == null);
var state_24345__$1 = (function (){var statearr_24351 = state_24345;
(statearr_24351[(13)] = inst_24286__$1);

return statearr_24351;
})();
if(cljs.core.truth_(inst_24287)){
var statearr_24352_24391 = state_24345__$1;
(statearr_24352_24391[(1)] = (5));

} else {
var statearr_24353_24392 = state_24345__$1;
(statearr_24353_24392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24346 === (15))){
var state_24345__$1 = state_24345;
var statearr_24357_24393 = state_24345__$1;
(statearr_24357_24393[(2)] = null);

(statearr_24357_24393[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24346 === (21))){
var state_24345__$1 = state_24345;
var statearr_24358_24394 = state_24345__$1;
(statearr_24358_24394[(2)] = null);

(statearr_24358_24394[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24346 === (13))){
var inst_24300 = (state_24345[(8)]);
var inst_24297 = (state_24345[(9)]);
var inst_24298 = (state_24345[(11)]);
var inst_24299 = (state_24345[(12)]);
var inst_24307 = (state_24345[(2)]);
var inst_24308 = (inst_24300 + (1));
var tmp24354 = inst_24297;
var tmp24355 = inst_24298;
var tmp24356 = inst_24299;
var inst_24297__$1 = tmp24354;
var inst_24298__$1 = tmp24355;
var inst_24299__$1 = tmp24356;
var inst_24300__$1 = inst_24308;
var state_24345__$1 = (function (){var statearr_24359 = state_24345;
(statearr_24359[(14)] = inst_24307);

(statearr_24359[(8)] = inst_24300__$1);

(statearr_24359[(9)] = inst_24297__$1);

(statearr_24359[(11)] = inst_24298__$1);

(statearr_24359[(12)] = inst_24299__$1);

return statearr_24359;
})();
var statearr_24360_24395 = state_24345__$1;
(statearr_24360_24395[(2)] = null);

(statearr_24360_24395[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24346 === (22))){
var state_24345__$1 = state_24345;
var statearr_24361_24396 = state_24345__$1;
(statearr_24361_24396[(2)] = null);

(statearr_24361_24396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24346 === (6))){
var inst_24286 = (state_24345[(13)]);
var inst_24295 = f.call(null,inst_24286);
var inst_24296 = cljs.core.seq.call(null,inst_24295);
var inst_24297 = inst_24296;
var inst_24298 = null;
var inst_24299 = (0);
var inst_24300 = (0);
var state_24345__$1 = (function (){var statearr_24362 = state_24345;
(statearr_24362[(8)] = inst_24300);

(statearr_24362[(9)] = inst_24297);

(statearr_24362[(11)] = inst_24298);

(statearr_24362[(12)] = inst_24299);

return statearr_24362;
})();
var statearr_24363_24397 = state_24345__$1;
(statearr_24363_24397[(2)] = null);

(statearr_24363_24397[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24346 === (17))){
var inst_24311 = (state_24345[(7)]);
var inst_24315 = cljs.core.chunk_first.call(null,inst_24311);
var inst_24316 = cljs.core.chunk_rest.call(null,inst_24311);
var inst_24317 = cljs.core.count.call(null,inst_24315);
var inst_24297 = inst_24316;
var inst_24298 = inst_24315;
var inst_24299 = inst_24317;
var inst_24300 = (0);
var state_24345__$1 = (function (){var statearr_24364 = state_24345;
(statearr_24364[(8)] = inst_24300);

(statearr_24364[(9)] = inst_24297);

(statearr_24364[(11)] = inst_24298);

(statearr_24364[(12)] = inst_24299);

return statearr_24364;
})();
var statearr_24365_24398 = state_24345__$1;
(statearr_24365_24398[(2)] = null);

(statearr_24365_24398[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24346 === (3))){
var inst_24343 = (state_24345[(2)]);
var state_24345__$1 = state_24345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24345__$1,inst_24343);
} else {
if((state_val_24346 === (12))){
var inst_24331 = (state_24345[(2)]);
var state_24345__$1 = state_24345;
var statearr_24366_24399 = state_24345__$1;
(statearr_24366_24399[(2)] = inst_24331);

(statearr_24366_24399[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24346 === (2))){
var state_24345__$1 = state_24345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24345__$1,(4),in$);
} else {
if((state_val_24346 === (23))){
var inst_24339 = (state_24345[(2)]);
var state_24345__$1 = state_24345;
var statearr_24367_24400 = state_24345__$1;
(statearr_24367_24400[(2)] = inst_24339);

(statearr_24367_24400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24346 === (19))){
var inst_24326 = (state_24345[(2)]);
var state_24345__$1 = state_24345;
var statearr_24368_24401 = state_24345__$1;
(statearr_24368_24401[(2)] = inst_24326);

(statearr_24368_24401[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24346 === (11))){
var inst_24311 = (state_24345[(7)]);
var inst_24297 = (state_24345[(9)]);
var inst_24311__$1 = cljs.core.seq.call(null,inst_24297);
var state_24345__$1 = (function (){var statearr_24369 = state_24345;
(statearr_24369[(7)] = inst_24311__$1);

return statearr_24369;
})();
if(inst_24311__$1){
var statearr_24370_24402 = state_24345__$1;
(statearr_24370_24402[(1)] = (14));

} else {
var statearr_24371_24403 = state_24345__$1;
(statearr_24371_24403[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24346 === (9))){
var inst_24333 = (state_24345[(2)]);
var inst_24334 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24345__$1 = (function (){var statearr_24372 = state_24345;
(statearr_24372[(15)] = inst_24333);

return statearr_24372;
})();
if(cljs.core.truth_(inst_24334)){
var statearr_24373_24404 = state_24345__$1;
(statearr_24373_24404[(1)] = (21));

} else {
var statearr_24374_24405 = state_24345__$1;
(statearr_24374_24405[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24346 === (5))){
var inst_24289 = cljs.core.async.close_BANG_.call(null,out);
var state_24345__$1 = state_24345;
var statearr_24375_24406 = state_24345__$1;
(statearr_24375_24406[(2)] = inst_24289);

(statearr_24375_24406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24346 === (14))){
var inst_24311 = (state_24345[(7)]);
var inst_24313 = cljs.core.chunked_seq_QMARK_.call(null,inst_24311);
var state_24345__$1 = state_24345;
if(inst_24313){
var statearr_24376_24407 = state_24345__$1;
(statearr_24376_24407[(1)] = (17));

} else {
var statearr_24377_24408 = state_24345__$1;
(statearr_24377_24408[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24346 === (16))){
var inst_24329 = (state_24345[(2)]);
var state_24345__$1 = state_24345;
var statearr_24378_24409 = state_24345__$1;
(statearr_24378_24409[(2)] = inst_24329);

(statearr_24378_24409[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24346 === (10))){
var inst_24300 = (state_24345[(8)]);
var inst_24298 = (state_24345[(11)]);
var inst_24305 = cljs.core._nth.call(null,inst_24298,inst_24300);
var state_24345__$1 = state_24345;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24345__$1,(13),out,inst_24305);
} else {
if((state_val_24346 === (18))){
var inst_24311 = (state_24345[(7)]);
var inst_24320 = cljs.core.first.call(null,inst_24311);
var state_24345__$1 = state_24345;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24345__$1,(20),out,inst_24320);
} else {
if((state_val_24346 === (8))){
var inst_24300 = (state_24345[(8)]);
var inst_24299 = (state_24345[(12)]);
var inst_24302 = (inst_24300 < inst_24299);
var inst_24303 = inst_24302;
var state_24345__$1 = state_24345;
if(cljs.core.truth_(inst_24303)){
var statearr_24379_24410 = state_24345__$1;
(statearr_24379_24410[(1)] = (10));

} else {
var statearr_24380_24411 = state_24345__$1;
(statearr_24380_24411[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21910__auto__))
;
return ((function (switch__21798__auto__,c__21910__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21799__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21799__auto____0 = (function (){
var statearr_24384 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24384[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21799__auto__);

(statearr_24384[(1)] = (1));

return statearr_24384;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21799__auto____1 = (function (state_24345){
while(true){
var ret_value__21800__auto__ = (function (){try{while(true){
var result__21801__auto__ = switch__21798__auto__.call(null,state_24345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21801__auto__;
}
break;
}
}catch (e24385){if((e24385 instanceof Object)){
var ex__21802__auto__ = e24385;
var statearr_24386_24412 = state_24345;
(statearr_24386_24412[(5)] = ex__21802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24413 = state_24345;
state_24345 = G__24413;
continue;
} else {
return ret_value__21800__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21799__auto__ = function(state_24345){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21799__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21799__auto____1.call(this,state_24345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21799__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21799__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21799__auto__;
})()
;})(switch__21798__auto__,c__21910__auto__))
})();
var state__21912__auto__ = (function (){var statearr_24387 = f__21911__auto__.call(null);
(statearr_24387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21910__auto__);

return statearr_24387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21912__auto__);
});})(c__21910__auto__))
);

return c__21910__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args24414 = [];
var len__17843__auto___24417 = arguments.length;
var i__17844__auto___24418 = (0);
while(true){
if((i__17844__auto___24418 < len__17843__auto___24417)){
args24414.push((arguments[i__17844__auto___24418]));

var G__24419 = (i__17844__auto___24418 + (1));
i__17844__auto___24418 = G__24419;
continue;
} else {
}
break;
}

var G__24416 = args24414.length;
switch (G__24416) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24414.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args24421 = [];
var len__17843__auto___24424 = arguments.length;
var i__17844__auto___24425 = (0);
while(true){
if((i__17844__auto___24425 < len__17843__auto___24424)){
args24421.push((arguments[i__17844__auto___24425]));

var G__24426 = (i__17844__auto___24425 + (1));
i__17844__auto___24425 = G__24426;
continue;
} else {
}
break;
}

var G__24423 = args24421.length;
switch (G__24423) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24421.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args24428 = [];
var len__17843__auto___24479 = arguments.length;
var i__17844__auto___24480 = (0);
while(true){
if((i__17844__auto___24480 < len__17843__auto___24479)){
args24428.push((arguments[i__17844__auto___24480]));

var G__24481 = (i__17844__auto___24480 + (1));
i__17844__auto___24480 = G__24481;
continue;
} else {
}
break;
}

var G__24430 = args24428.length;
switch (G__24430) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24428.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21910__auto___24483 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21910__auto___24483,out){
return (function (){
var f__21911__auto__ = (function (){var switch__21798__auto__ = ((function (c__21910__auto___24483,out){
return (function (state_24454){
var state_val_24455 = (state_24454[(1)]);
if((state_val_24455 === (7))){
var inst_24449 = (state_24454[(2)]);
var state_24454__$1 = state_24454;
var statearr_24456_24484 = state_24454__$1;
(statearr_24456_24484[(2)] = inst_24449);

(statearr_24456_24484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24455 === (1))){
var inst_24431 = null;
var state_24454__$1 = (function (){var statearr_24457 = state_24454;
(statearr_24457[(7)] = inst_24431);

return statearr_24457;
})();
var statearr_24458_24485 = state_24454__$1;
(statearr_24458_24485[(2)] = null);

(statearr_24458_24485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24455 === (4))){
var inst_24434 = (state_24454[(8)]);
var inst_24434__$1 = (state_24454[(2)]);
var inst_24435 = (inst_24434__$1 == null);
var inst_24436 = cljs.core.not.call(null,inst_24435);
var state_24454__$1 = (function (){var statearr_24459 = state_24454;
(statearr_24459[(8)] = inst_24434__$1);

return statearr_24459;
})();
if(inst_24436){
var statearr_24460_24486 = state_24454__$1;
(statearr_24460_24486[(1)] = (5));

} else {
var statearr_24461_24487 = state_24454__$1;
(statearr_24461_24487[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24455 === (6))){
var state_24454__$1 = state_24454;
var statearr_24462_24488 = state_24454__$1;
(statearr_24462_24488[(2)] = null);

(statearr_24462_24488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24455 === (3))){
var inst_24451 = (state_24454[(2)]);
var inst_24452 = cljs.core.async.close_BANG_.call(null,out);
var state_24454__$1 = (function (){var statearr_24463 = state_24454;
(statearr_24463[(9)] = inst_24451);

return statearr_24463;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24454__$1,inst_24452);
} else {
if((state_val_24455 === (2))){
var state_24454__$1 = state_24454;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24454__$1,(4),ch);
} else {
if((state_val_24455 === (11))){
var inst_24434 = (state_24454[(8)]);
var inst_24443 = (state_24454[(2)]);
var inst_24431 = inst_24434;
var state_24454__$1 = (function (){var statearr_24464 = state_24454;
(statearr_24464[(10)] = inst_24443);

(statearr_24464[(7)] = inst_24431);

return statearr_24464;
})();
var statearr_24465_24489 = state_24454__$1;
(statearr_24465_24489[(2)] = null);

(statearr_24465_24489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24455 === (9))){
var inst_24434 = (state_24454[(8)]);
var state_24454__$1 = state_24454;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24454__$1,(11),out,inst_24434);
} else {
if((state_val_24455 === (5))){
var inst_24431 = (state_24454[(7)]);
var inst_24434 = (state_24454[(8)]);
var inst_24438 = cljs.core._EQ_.call(null,inst_24434,inst_24431);
var state_24454__$1 = state_24454;
if(inst_24438){
var statearr_24467_24490 = state_24454__$1;
(statearr_24467_24490[(1)] = (8));

} else {
var statearr_24468_24491 = state_24454__$1;
(statearr_24468_24491[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24455 === (10))){
var inst_24446 = (state_24454[(2)]);
var state_24454__$1 = state_24454;
var statearr_24469_24492 = state_24454__$1;
(statearr_24469_24492[(2)] = inst_24446);

(statearr_24469_24492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24455 === (8))){
var inst_24431 = (state_24454[(7)]);
var tmp24466 = inst_24431;
var inst_24431__$1 = tmp24466;
var state_24454__$1 = (function (){var statearr_24470 = state_24454;
(statearr_24470[(7)] = inst_24431__$1);

return statearr_24470;
})();
var statearr_24471_24493 = state_24454__$1;
(statearr_24471_24493[(2)] = null);

(statearr_24471_24493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__21910__auto___24483,out))
;
return ((function (switch__21798__auto__,c__21910__auto___24483,out){
return (function() {
var cljs$core$async$state_machine__21799__auto__ = null;
var cljs$core$async$state_machine__21799__auto____0 = (function (){
var statearr_24475 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24475[(0)] = cljs$core$async$state_machine__21799__auto__);

(statearr_24475[(1)] = (1));

return statearr_24475;
});
var cljs$core$async$state_machine__21799__auto____1 = (function (state_24454){
while(true){
var ret_value__21800__auto__ = (function (){try{while(true){
var result__21801__auto__ = switch__21798__auto__.call(null,state_24454);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21801__auto__;
}
break;
}
}catch (e24476){if((e24476 instanceof Object)){
var ex__21802__auto__ = e24476;
var statearr_24477_24494 = state_24454;
(statearr_24477_24494[(5)] = ex__21802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24495 = state_24454;
state_24454 = G__24495;
continue;
} else {
return ret_value__21800__auto__;
}
break;
}
});
cljs$core$async$state_machine__21799__auto__ = function(state_24454){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21799__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21799__auto____1.call(this,state_24454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21799__auto____0;
cljs$core$async$state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21799__auto____1;
return cljs$core$async$state_machine__21799__auto__;
})()
;})(switch__21798__auto__,c__21910__auto___24483,out))
})();
var state__21912__auto__ = (function (){var statearr_24478 = f__21911__auto__.call(null);
(statearr_24478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21910__auto___24483);

return statearr_24478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21912__auto__);
});})(c__21910__auto___24483,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args24496 = [];
var len__17843__auto___24566 = arguments.length;
var i__17844__auto___24567 = (0);
while(true){
if((i__17844__auto___24567 < len__17843__auto___24566)){
args24496.push((arguments[i__17844__auto___24567]));

var G__24568 = (i__17844__auto___24567 + (1));
i__17844__auto___24567 = G__24568;
continue;
} else {
}
break;
}

var G__24498 = args24496.length;
switch (G__24498) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24496.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21910__auto___24570 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21910__auto___24570,out){
return (function (){
var f__21911__auto__ = (function (){var switch__21798__auto__ = ((function (c__21910__auto___24570,out){
return (function (state_24536){
var state_val_24537 = (state_24536[(1)]);
if((state_val_24537 === (7))){
var inst_24532 = (state_24536[(2)]);
var state_24536__$1 = state_24536;
var statearr_24538_24571 = state_24536__$1;
(statearr_24538_24571[(2)] = inst_24532);

(statearr_24538_24571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24537 === (1))){
var inst_24499 = (new Array(n));
var inst_24500 = inst_24499;
var inst_24501 = (0);
var state_24536__$1 = (function (){var statearr_24539 = state_24536;
(statearr_24539[(7)] = inst_24501);

(statearr_24539[(8)] = inst_24500);

return statearr_24539;
})();
var statearr_24540_24572 = state_24536__$1;
(statearr_24540_24572[(2)] = null);

(statearr_24540_24572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24537 === (4))){
var inst_24504 = (state_24536[(9)]);
var inst_24504__$1 = (state_24536[(2)]);
var inst_24505 = (inst_24504__$1 == null);
var inst_24506 = cljs.core.not.call(null,inst_24505);
var state_24536__$1 = (function (){var statearr_24541 = state_24536;
(statearr_24541[(9)] = inst_24504__$1);

return statearr_24541;
})();
if(inst_24506){
var statearr_24542_24573 = state_24536__$1;
(statearr_24542_24573[(1)] = (5));

} else {
var statearr_24543_24574 = state_24536__$1;
(statearr_24543_24574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24537 === (15))){
var inst_24526 = (state_24536[(2)]);
var state_24536__$1 = state_24536;
var statearr_24544_24575 = state_24536__$1;
(statearr_24544_24575[(2)] = inst_24526);

(statearr_24544_24575[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24537 === (13))){
var state_24536__$1 = state_24536;
var statearr_24545_24576 = state_24536__$1;
(statearr_24545_24576[(2)] = null);

(statearr_24545_24576[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24537 === (6))){
var inst_24501 = (state_24536[(7)]);
var inst_24522 = (inst_24501 > (0));
var state_24536__$1 = state_24536;
if(cljs.core.truth_(inst_24522)){
var statearr_24546_24577 = state_24536__$1;
(statearr_24546_24577[(1)] = (12));

} else {
var statearr_24547_24578 = state_24536__$1;
(statearr_24547_24578[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24537 === (3))){
var inst_24534 = (state_24536[(2)]);
var state_24536__$1 = state_24536;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24536__$1,inst_24534);
} else {
if((state_val_24537 === (12))){
var inst_24500 = (state_24536[(8)]);
var inst_24524 = cljs.core.vec.call(null,inst_24500);
var state_24536__$1 = state_24536;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24536__$1,(15),out,inst_24524);
} else {
if((state_val_24537 === (2))){
var state_24536__$1 = state_24536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24536__$1,(4),ch);
} else {
if((state_val_24537 === (11))){
var inst_24516 = (state_24536[(2)]);
var inst_24517 = (new Array(n));
var inst_24500 = inst_24517;
var inst_24501 = (0);
var state_24536__$1 = (function (){var statearr_24548 = state_24536;
(statearr_24548[(10)] = inst_24516);

(statearr_24548[(7)] = inst_24501);

(statearr_24548[(8)] = inst_24500);

return statearr_24548;
})();
var statearr_24549_24579 = state_24536__$1;
(statearr_24549_24579[(2)] = null);

(statearr_24549_24579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24537 === (9))){
var inst_24500 = (state_24536[(8)]);
var inst_24514 = cljs.core.vec.call(null,inst_24500);
var state_24536__$1 = state_24536;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24536__$1,(11),out,inst_24514);
} else {
if((state_val_24537 === (5))){
var inst_24509 = (state_24536[(11)]);
var inst_24501 = (state_24536[(7)]);
var inst_24504 = (state_24536[(9)]);
var inst_24500 = (state_24536[(8)]);
var inst_24508 = (inst_24500[inst_24501] = inst_24504);
var inst_24509__$1 = (inst_24501 + (1));
var inst_24510 = (inst_24509__$1 < n);
var state_24536__$1 = (function (){var statearr_24550 = state_24536;
(statearr_24550[(11)] = inst_24509__$1);

(statearr_24550[(12)] = inst_24508);

return statearr_24550;
})();
if(cljs.core.truth_(inst_24510)){
var statearr_24551_24580 = state_24536__$1;
(statearr_24551_24580[(1)] = (8));

} else {
var statearr_24552_24581 = state_24536__$1;
(statearr_24552_24581[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24537 === (14))){
var inst_24529 = (state_24536[(2)]);
var inst_24530 = cljs.core.async.close_BANG_.call(null,out);
var state_24536__$1 = (function (){var statearr_24554 = state_24536;
(statearr_24554[(13)] = inst_24529);

return statearr_24554;
})();
var statearr_24555_24582 = state_24536__$1;
(statearr_24555_24582[(2)] = inst_24530);

(statearr_24555_24582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24537 === (10))){
var inst_24520 = (state_24536[(2)]);
var state_24536__$1 = state_24536;
var statearr_24556_24583 = state_24536__$1;
(statearr_24556_24583[(2)] = inst_24520);

(statearr_24556_24583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24537 === (8))){
var inst_24509 = (state_24536[(11)]);
var inst_24500 = (state_24536[(8)]);
var tmp24553 = inst_24500;
var inst_24500__$1 = tmp24553;
var inst_24501 = inst_24509;
var state_24536__$1 = (function (){var statearr_24557 = state_24536;
(statearr_24557[(7)] = inst_24501);

(statearr_24557[(8)] = inst_24500__$1);

return statearr_24557;
})();
var statearr_24558_24584 = state_24536__$1;
(statearr_24558_24584[(2)] = null);

(statearr_24558_24584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21910__auto___24570,out))
;
return ((function (switch__21798__auto__,c__21910__auto___24570,out){
return (function() {
var cljs$core$async$state_machine__21799__auto__ = null;
var cljs$core$async$state_machine__21799__auto____0 = (function (){
var statearr_24562 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24562[(0)] = cljs$core$async$state_machine__21799__auto__);

(statearr_24562[(1)] = (1));

return statearr_24562;
});
var cljs$core$async$state_machine__21799__auto____1 = (function (state_24536){
while(true){
var ret_value__21800__auto__ = (function (){try{while(true){
var result__21801__auto__ = switch__21798__auto__.call(null,state_24536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21801__auto__;
}
break;
}
}catch (e24563){if((e24563 instanceof Object)){
var ex__21802__auto__ = e24563;
var statearr_24564_24585 = state_24536;
(statearr_24564_24585[(5)] = ex__21802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24563;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24586 = state_24536;
state_24536 = G__24586;
continue;
} else {
return ret_value__21800__auto__;
}
break;
}
});
cljs$core$async$state_machine__21799__auto__ = function(state_24536){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21799__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21799__auto____1.call(this,state_24536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21799__auto____0;
cljs$core$async$state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21799__auto____1;
return cljs$core$async$state_machine__21799__auto__;
})()
;})(switch__21798__auto__,c__21910__auto___24570,out))
})();
var state__21912__auto__ = (function (){var statearr_24565 = f__21911__auto__.call(null);
(statearr_24565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21910__auto___24570);

return statearr_24565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21912__auto__);
});})(c__21910__auto___24570,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args24587 = [];
var len__17843__auto___24661 = arguments.length;
var i__17844__auto___24662 = (0);
while(true){
if((i__17844__auto___24662 < len__17843__auto___24661)){
args24587.push((arguments[i__17844__auto___24662]));

var G__24663 = (i__17844__auto___24662 + (1));
i__17844__auto___24662 = G__24663;
continue;
} else {
}
break;
}

var G__24589 = args24587.length;
switch (G__24589) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24587.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21910__auto___24665 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21910__auto___24665,out){
return (function (){
var f__21911__auto__ = (function (){var switch__21798__auto__ = ((function (c__21910__auto___24665,out){
return (function (state_24631){
var state_val_24632 = (state_24631[(1)]);
if((state_val_24632 === (7))){
var inst_24627 = (state_24631[(2)]);
var state_24631__$1 = state_24631;
var statearr_24633_24666 = state_24631__$1;
(statearr_24633_24666[(2)] = inst_24627);

(statearr_24633_24666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24632 === (1))){
var inst_24590 = [];
var inst_24591 = inst_24590;
var inst_24592 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24631__$1 = (function (){var statearr_24634 = state_24631;
(statearr_24634[(7)] = inst_24591);

(statearr_24634[(8)] = inst_24592);

return statearr_24634;
})();
var statearr_24635_24667 = state_24631__$1;
(statearr_24635_24667[(2)] = null);

(statearr_24635_24667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24632 === (4))){
var inst_24595 = (state_24631[(9)]);
var inst_24595__$1 = (state_24631[(2)]);
var inst_24596 = (inst_24595__$1 == null);
var inst_24597 = cljs.core.not.call(null,inst_24596);
var state_24631__$1 = (function (){var statearr_24636 = state_24631;
(statearr_24636[(9)] = inst_24595__$1);

return statearr_24636;
})();
if(inst_24597){
var statearr_24637_24668 = state_24631__$1;
(statearr_24637_24668[(1)] = (5));

} else {
var statearr_24638_24669 = state_24631__$1;
(statearr_24638_24669[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24632 === (15))){
var inst_24621 = (state_24631[(2)]);
var state_24631__$1 = state_24631;
var statearr_24639_24670 = state_24631__$1;
(statearr_24639_24670[(2)] = inst_24621);

(statearr_24639_24670[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24632 === (13))){
var state_24631__$1 = state_24631;
var statearr_24640_24671 = state_24631__$1;
(statearr_24640_24671[(2)] = null);

(statearr_24640_24671[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24632 === (6))){
var inst_24591 = (state_24631[(7)]);
var inst_24616 = inst_24591.length;
var inst_24617 = (inst_24616 > (0));
var state_24631__$1 = state_24631;
if(cljs.core.truth_(inst_24617)){
var statearr_24641_24672 = state_24631__$1;
(statearr_24641_24672[(1)] = (12));

} else {
var statearr_24642_24673 = state_24631__$1;
(statearr_24642_24673[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24632 === (3))){
var inst_24629 = (state_24631[(2)]);
var state_24631__$1 = state_24631;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24631__$1,inst_24629);
} else {
if((state_val_24632 === (12))){
var inst_24591 = (state_24631[(7)]);
var inst_24619 = cljs.core.vec.call(null,inst_24591);
var state_24631__$1 = state_24631;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24631__$1,(15),out,inst_24619);
} else {
if((state_val_24632 === (2))){
var state_24631__$1 = state_24631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24631__$1,(4),ch);
} else {
if((state_val_24632 === (11))){
var inst_24599 = (state_24631[(10)]);
var inst_24595 = (state_24631[(9)]);
var inst_24609 = (state_24631[(2)]);
var inst_24610 = [];
var inst_24611 = inst_24610.push(inst_24595);
var inst_24591 = inst_24610;
var inst_24592 = inst_24599;
var state_24631__$1 = (function (){var statearr_24643 = state_24631;
(statearr_24643[(11)] = inst_24609);

(statearr_24643[(7)] = inst_24591);

(statearr_24643[(8)] = inst_24592);

(statearr_24643[(12)] = inst_24611);

return statearr_24643;
})();
var statearr_24644_24674 = state_24631__$1;
(statearr_24644_24674[(2)] = null);

(statearr_24644_24674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24632 === (9))){
var inst_24591 = (state_24631[(7)]);
var inst_24607 = cljs.core.vec.call(null,inst_24591);
var state_24631__$1 = state_24631;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24631__$1,(11),out,inst_24607);
} else {
if((state_val_24632 === (5))){
var inst_24592 = (state_24631[(8)]);
var inst_24599 = (state_24631[(10)]);
var inst_24595 = (state_24631[(9)]);
var inst_24599__$1 = f.call(null,inst_24595);
var inst_24600 = cljs.core._EQ_.call(null,inst_24599__$1,inst_24592);
var inst_24601 = cljs.core.keyword_identical_QMARK_.call(null,inst_24592,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24602 = (inst_24600) || (inst_24601);
var state_24631__$1 = (function (){var statearr_24645 = state_24631;
(statearr_24645[(10)] = inst_24599__$1);

return statearr_24645;
})();
if(cljs.core.truth_(inst_24602)){
var statearr_24646_24675 = state_24631__$1;
(statearr_24646_24675[(1)] = (8));

} else {
var statearr_24647_24676 = state_24631__$1;
(statearr_24647_24676[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24632 === (14))){
var inst_24624 = (state_24631[(2)]);
var inst_24625 = cljs.core.async.close_BANG_.call(null,out);
var state_24631__$1 = (function (){var statearr_24649 = state_24631;
(statearr_24649[(13)] = inst_24624);

return statearr_24649;
})();
var statearr_24650_24677 = state_24631__$1;
(statearr_24650_24677[(2)] = inst_24625);

(statearr_24650_24677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24632 === (10))){
var inst_24614 = (state_24631[(2)]);
var state_24631__$1 = state_24631;
var statearr_24651_24678 = state_24631__$1;
(statearr_24651_24678[(2)] = inst_24614);

(statearr_24651_24678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24632 === (8))){
var inst_24591 = (state_24631[(7)]);
var inst_24599 = (state_24631[(10)]);
var inst_24595 = (state_24631[(9)]);
var inst_24604 = inst_24591.push(inst_24595);
var tmp24648 = inst_24591;
var inst_24591__$1 = tmp24648;
var inst_24592 = inst_24599;
var state_24631__$1 = (function (){var statearr_24652 = state_24631;
(statearr_24652[(7)] = inst_24591__$1);

(statearr_24652[(8)] = inst_24592);

(statearr_24652[(14)] = inst_24604);

return statearr_24652;
})();
var statearr_24653_24679 = state_24631__$1;
(statearr_24653_24679[(2)] = null);

(statearr_24653_24679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21910__auto___24665,out))
;
return ((function (switch__21798__auto__,c__21910__auto___24665,out){
return (function() {
var cljs$core$async$state_machine__21799__auto__ = null;
var cljs$core$async$state_machine__21799__auto____0 = (function (){
var statearr_24657 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24657[(0)] = cljs$core$async$state_machine__21799__auto__);

(statearr_24657[(1)] = (1));

return statearr_24657;
});
var cljs$core$async$state_machine__21799__auto____1 = (function (state_24631){
while(true){
var ret_value__21800__auto__ = (function (){try{while(true){
var result__21801__auto__ = switch__21798__auto__.call(null,state_24631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21801__auto__;
}
break;
}
}catch (e24658){if((e24658 instanceof Object)){
var ex__21802__auto__ = e24658;
var statearr_24659_24680 = state_24631;
(statearr_24659_24680[(5)] = ex__21802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24681 = state_24631;
state_24631 = G__24681;
continue;
} else {
return ret_value__21800__auto__;
}
break;
}
});
cljs$core$async$state_machine__21799__auto__ = function(state_24631){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21799__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21799__auto____1.call(this,state_24631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21799__auto____0;
cljs$core$async$state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21799__auto____1;
return cljs$core$async$state_machine__21799__auto__;
})()
;})(switch__21798__auto__,c__21910__auto___24665,out))
})();
var state__21912__auto__ = (function (){var statearr_24660 = f__21911__auto__.call(null);
(statearr_24660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21910__auto___24665);

return statearr_24660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21912__auto__);
});})(c__21910__auto___24665,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map