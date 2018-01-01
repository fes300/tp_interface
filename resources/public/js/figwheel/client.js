// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__26296 = cljs.core._EQ_;
var expr__26297 = (function (){var or__16785__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__26296.call(null,"true",expr__26297))){
return true;
} else {
if(cljs.core.truth_(pred__26296.call(null,"false",expr__26297))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26297)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26299__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26299 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26300__i = 0, G__26300__a = new Array(arguments.length -  0);
while (G__26300__i < G__26300__a.length) {G__26300__a[G__26300__i] = arguments[G__26300__i + 0]; ++G__26300__i;}
  args = new cljs.core.IndexedSeq(G__26300__a,0);
} 
return G__26299__delegate.call(this,args);};
G__26299.cljs$lang$maxFixedArity = 0;
G__26299.cljs$lang$applyTo = (function (arglist__26301){
var args = cljs.core.seq(arglist__26301);
return G__26299__delegate(args);
});
G__26299.cljs$core$IFn$_invoke$arity$variadic = G__26299__delegate;
return G__26299;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26302){
var map__26305 = p__26302;
var map__26305__$1 = ((((!((map__26305 == null)))?((((map__26305.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26305.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26305):map__26305);
var message = cljs.core.get.call(null,map__26305__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26305__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16785__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16773__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16773__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16773__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21910__auto___26467 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21910__auto___26467,ch){
return (function (){
var f__21911__auto__ = (function (){var switch__21798__auto__ = ((function (c__21910__auto___26467,ch){
return (function (state_26436){
var state_val_26437 = (state_26436[(1)]);
if((state_val_26437 === (7))){
var inst_26432 = (state_26436[(2)]);
var state_26436__$1 = state_26436;
var statearr_26438_26468 = state_26436__$1;
(statearr_26438_26468[(2)] = inst_26432);

(statearr_26438_26468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26437 === (1))){
var state_26436__$1 = state_26436;
var statearr_26439_26469 = state_26436__$1;
(statearr_26439_26469[(2)] = null);

(statearr_26439_26469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26437 === (4))){
var inst_26389 = (state_26436[(7)]);
var inst_26389__$1 = (state_26436[(2)]);
var state_26436__$1 = (function (){var statearr_26440 = state_26436;
(statearr_26440[(7)] = inst_26389__$1);

return statearr_26440;
})();
if(cljs.core.truth_(inst_26389__$1)){
var statearr_26441_26470 = state_26436__$1;
(statearr_26441_26470[(1)] = (5));

} else {
var statearr_26442_26471 = state_26436__$1;
(statearr_26442_26471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26437 === (15))){
var inst_26396 = (state_26436[(8)]);
var inst_26411 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26396);
var inst_26412 = cljs.core.first.call(null,inst_26411);
var inst_26413 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26412);
var inst_26414 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_26413)].join('');
var inst_26415 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_26414);
var state_26436__$1 = state_26436;
var statearr_26443_26472 = state_26436__$1;
(statearr_26443_26472[(2)] = inst_26415);

(statearr_26443_26472[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26437 === (13))){
var inst_26420 = (state_26436[(2)]);
var state_26436__$1 = state_26436;
var statearr_26444_26473 = state_26436__$1;
(statearr_26444_26473[(2)] = inst_26420);

(statearr_26444_26473[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26437 === (6))){
var state_26436__$1 = state_26436;
var statearr_26445_26474 = state_26436__$1;
(statearr_26445_26474[(2)] = null);

(statearr_26445_26474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26437 === (17))){
var inst_26418 = (state_26436[(2)]);
var state_26436__$1 = state_26436;
var statearr_26446_26475 = state_26436__$1;
(statearr_26446_26475[(2)] = inst_26418);

(statearr_26446_26475[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26437 === (3))){
var inst_26434 = (state_26436[(2)]);
var state_26436__$1 = state_26436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26436__$1,inst_26434);
} else {
if((state_val_26437 === (12))){
var inst_26395 = (state_26436[(9)]);
var inst_26409 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26395,opts);
var state_26436__$1 = state_26436;
if(cljs.core.truth_(inst_26409)){
var statearr_26447_26476 = state_26436__$1;
(statearr_26447_26476[(1)] = (15));

} else {
var statearr_26448_26477 = state_26436__$1;
(statearr_26448_26477[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26437 === (2))){
var state_26436__$1 = state_26436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26436__$1,(4),ch);
} else {
if((state_val_26437 === (11))){
var inst_26396 = (state_26436[(8)]);
var inst_26401 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26402 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26396);
var inst_26403 = cljs.core.async.timeout.call(null,(1000));
var inst_26404 = [inst_26402,inst_26403];
var inst_26405 = (new cljs.core.PersistentVector(null,2,(5),inst_26401,inst_26404,null));
var state_26436__$1 = state_26436;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26436__$1,(14),inst_26405);
} else {
if((state_val_26437 === (9))){
var inst_26396 = (state_26436[(8)]);
var inst_26422 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_26423 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26396);
var inst_26424 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26423);
var inst_26425 = [cljs.core.str("Not loading: "),cljs.core.str(inst_26424)].join('');
var inst_26426 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_26425);
var state_26436__$1 = (function (){var statearr_26449 = state_26436;
(statearr_26449[(10)] = inst_26422);

return statearr_26449;
})();
var statearr_26450_26478 = state_26436__$1;
(statearr_26450_26478[(2)] = inst_26426);

(statearr_26450_26478[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26437 === (5))){
var inst_26389 = (state_26436[(7)]);
var inst_26391 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26392 = (new cljs.core.PersistentArrayMap(null,2,inst_26391,null));
var inst_26393 = (new cljs.core.PersistentHashSet(null,inst_26392,null));
var inst_26394 = figwheel.client.focus_msgs.call(null,inst_26393,inst_26389);
var inst_26395 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26394);
var inst_26396 = cljs.core.first.call(null,inst_26394);
var inst_26397 = figwheel.client.autoload_QMARK_.call(null);
var state_26436__$1 = (function (){var statearr_26451 = state_26436;
(statearr_26451[(8)] = inst_26396);

(statearr_26451[(9)] = inst_26395);

return statearr_26451;
})();
if(cljs.core.truth_(inst_26397)){
var statearr_26452_26479 = state_26436__$1;
(statearr_26452_26479[(1)] = (8));

} else {
var statearr_26453_26480 = state_26436__$1;
(statearr_26453_26480[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26437 === (14))){
var inst_26407 = (state_26436[(2)]);
var state_26436__$1 = state_26436;
var statearr_26454_26481 = state_26436__$1;
(statearr_26454_26481[(2)] = inst_26407);

(statearr_26454_26481[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26437 === (16))){
var state_26436__$1 = state_26436;
var statearr_26455_26482 = state_26436__$1;
(statearr_26455_26482[(2)] = null);

(statearr_26455_26482[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26437 === (10))){
var inst_26428 = (state_26436[(2)]);
var state_26436__$1 = (function (){var statearr_26456 = state_26436;
(statearr_26456[(11)] = inst_26428);

return statearr_26456;
})();
var statearr_26457_26483 = state_26436__$1;
(statearr_26457_26483[(2)] = null);

(statearr_26457_26483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26437 === (8))){
var inst_26395 = (state_26436[(9)]);
var inst_26399 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26395,opts);
var state_26436__$1 = state_26436;
if(cljs.core.truth_(inst_26399)){
var statearr_26458_26484 = state_26436__$1;
(statearr_26458_26484[(1)] = (11));

} else {
var statearr_26459_26485 = state_26436__$1;
(statearr_26459_26485[(1)] = (12));

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
});})(c__21910__auto___26467,ch))
;
return ((function (switch__21798__auto__,c__21910__auto___26467,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21799__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21799__auto____0 = (function (){
var statearr_26463 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26463[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21799__auto__);

(statearr_26463[(1)] = (1));

return statearr_26463;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21799__auto____1 = (function (state_26436){
while(true){
var ret_value__21800__auto__ = (function (){try{while(true){
var result__21801__auto__ = switch__21798__auto__.call(null,state_26436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21801__auto__;
}
break;
}
}catch (e26464){if((e26464 instanceof Object)){
var ex__21802__auto__ = e26464;
var statearr_26465_26486 = state_26436;
(statearr_26465_26486[(5)] = ex__21802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26487 = state_26436;
state_26436 = G__26487;
continue;
} else {
return ret_value__21800__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21799__auto__ = function(state_26436){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21799__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21799__auto____1.call(this,state_26436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21799__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21799__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21799__auto__;
})()
;})(switch__21798__auto__,c__21910__auto___26467,ch))
})();
var state__21912__auto__ = (function (){var statearr_26466 = f__21911__auto__.call(null);
(statearr_26466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21910__auto___26467);

return statearr_26466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21912__auto__);
});})(c__21910__auto___26467,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26488_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26488_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_26495 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26495){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_26493 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26494 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26493,_STAR_print_newline_STAR_26494,base_path_26495){
return (function() { 
var G__26496__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26496 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26497__i = 0, G__26497__a = new Array(arguments.length -  0);
while (G__26497__i < G__26497__a.length) {G__26497__a[G__26497__i] = arguments[G__26497__i + 0]; ++G__26497__i;}
  args = new cljs.core.IndexedSeq(G__26497__a,0);
} 
return G__26496__delegate.call(this,args);};
G__26496.cljs$lang$maxFixedArity = 0;
G__26496.cljs$lang$applyTo = (function (arglist__26498){
var args = cljs.core.seq(arglist__26498);
return G__26496__delegate(args);
});
G__26496.cljs$core$IFn$_invoke$arity$variadic = G__26496__delegate;
return G__26496;
})()
;})(_STAR_print_fn_STAR_26493,_STAR_print_newline_STAR_26494,base_path_26495))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26494;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26493;
}}catch (e26492){if((e26492 instanceof Error)){
var e = e26492;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26495], null));
} else {
var e = e26492;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26495))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26499){
var map__26506 = p__26499;
var map__26506__$1 = ((((!((map__26506 == null)))?((((map__26506.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26506.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26506):map__26506);
var opts = map__26506__$1;
var build_id = cljs.core.get.call(null,map__26506__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26506,map__26506__$1,opts,build_id){
return (function (p__26508){
var vec__26509 = p__26508;
var map__26510 = cljs.core.nth.call(null,vec__26509,(0),null);
var map__26510__$1 = ((((!((map__26510 == null)))?((((map__26510.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26510.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26510):map__26510);
var msg = map__26510__$1;
var msg_name = cljs.core.get.call(null,map__26510__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26509,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26509,map__26510,map__26510__$1,msg,msg_name,_,map__26506,map__26506__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26509,map__26510,map__26510__$1,msg,msg_name,_,map__26506,map__26506__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26506,map__26506__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26516){
var vec__26517 = p__26516;
var map__26518 = cljs.core.nth.call(null,vec__26517,(0),null);
var map__26518__$1 = ((((!((map__26518 == null)))?((((map__26518.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26518.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26518):map__26518);
var msg = map__26518__$1;
var msg_name = cljs.core.get.call(null,map__26518__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26517,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26520){
var map__26530 = p__26520;
var map__26530__$1 = ((((!((map__26530 == null)))?((((map__26530.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26530.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26530):map__26530);
var on_compile_warning = cljs.core.get.call(null,map__26530__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26530__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26530,map__26530__$1,on_compile_warning,on_compile_fail){
return (function (p__26532){
var vec__26533 = p__26532;
var map__26534 = cljs.core.nth.call(null,vec__26533,(0),null);
var map__26534__$1 = ((((!((map__26534 == null)))?((((map__26534.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26534.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26534):map__26534);
var msg = map__26534__$1;
var msg_name = cljs.core.get.call(null,map__26534__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26533,(1));
var pred__26536 = cljs.core._EQ_;
var expr__26537 = msg_name;
if(cljs.core.truth_(pred__26536.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26537))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26536.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26537))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26530,map__26530__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21910__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21910__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21911__auto__ = (function (){var switch__21798__auto__ = ((function (c__21910__auto__,msg_hist,msg_names,msg){
return (function (state_26753){
var state_val_26754 = (state_26753[(1)]);
if((state_val_26754 === (7))){
var inst_26677 = (state_26753[(2)]);
var state_26753__$1 = state_26753;
if(cljs.core.truth_(inst_26677)){
var statearr_26755_26801 = state_26753__$1;
(statearr_26755_26801[(1)] = (8));

} else {
var statearr_26756_26802 = state_26753__$1;
(statearr_26756_26802[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26754 === (20))){
var inst_26747 = (state_26753[(2)]);
var state_26753__$1 = state_26753;
var statearr_26757_26803 = state_26753__$1;
(statearr_26757_26803[(2)] = inst_26747);

(statearr_26757_26803[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26754 === (27))){
var inst_26743 = (state_26753[(2)]);
var state_26753__$1 = state_26753;
var statearr_26758_26804 = state_26753__$1;
(statearr_26758_26804[(2)] = inst_26743);

(statearr_26758_26804[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26754 === (1))){
var inst_26670 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26753__$1 = state_26753;
if(cljs.core.truth_(inst_26670)){
var statearr_26759_26805 = state_26753__$1;
(statearr_26759_26805[(1)] = (2));

} else {
var statearr_26760_26806 = state_26753__$1;
(statearr_26760_26806[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26754 === (24))){
var inst_26745 = (state_26753[(2)]);
var state_26753__$1 = state_26753;
var statearr_26761_26807 = state_26753__$1;
(statearr_26761_26807[(2)] = inst_26745);

(statearr_26761_26807[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26754 === (4))){
var inst_26751 = (state_26753[(2)]);
var state_26753__$1 = state_26753;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26753__$1,inst_26751);
} else {
if((state_val_26754 === (15))){
var inst_26749 = (state_26753[(2)]);
var state_26753__$1 = state_26753;
var statearr_26762_26808 = state_26753__$1;
(statearr_26762_26808[(2)] = inst_26749);

(statearr_26762_26808[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26754 === (21))){
var inst_26708 = (state_26753[(2)]);
var state_26753__$1 = state_26753;
var statearr_26763_26809 = state_26753__$1;
(statearr_26763_26809[(2)] = inst_26708);

(statearr_26763_26809[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26754 === (31))){
var inst_26732 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26753__$1 = state_26753;
if(cljs.core.truth_(inst_26732)){
var statearr_26764_26810 = state_26753__$1;
(statearr_26764_26810[(1)] = (34));

} else {
var statearr_26765_26811 = state_26753__$1;
(statearr_26765_26811[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26754 === (32))){
var inst_26741 = (state_26753[(2)]);
var state_26753__$1 = state_26753;
var statearr_26766_26812 = state_26753__$1;
(statearr_26766_26812[(2)] = inst_26741);

(statearr_26766_26812[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26754 === (33))){
var inst_26730 = (state_26753[(2)]);
var state_26753__$1 = state_26753;
var statearr_26767_26813 = state_26753__$1;
(statearr_26767_26813[(2)] = inst_26730);

(statearr_26767_26813[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26754 === (13))){
var inst_26691 = figwheel.client.heads_up.clear.call(null);
var state_26753__$1 = state_26753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26753__$1,(16),inst_26691);
} else {
if((state_val_26754 === (22))){
var inst_26712 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26713 = figwheel.client.heads_up.append_message.call(null,inst_26712);
var state_26753__$1 = state_26753;
var statearr_26768_26814 = state_26753__$1;
(statearr_26768_26814[(2)] = inst_26713);

(statearr_26768_26814[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26754 === (36))){
var inst_26739 = (state_26753[(2)]);
var state_26753__$1 = state_26753;
var statearr_26769_26815 = state_26753__$1;
(statearr_26769_26815[(2)] = inst_26739);

(statearr_26769_26815[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26754 === (29))){
var inst_26723 = (state_26753[(2)]);
var state_26753__$1 = state_26753;
var statearr_26770_26816 = state_26753__$1;
(statearr_26770_26816[(2)] = inst_26723);

(statearr_26770_26816[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26754 === (6))){
var inst_26672 = (state_26753[(7)]);
var state_26753__$1 = state_26753;
var statearr_26771_26817 = state_26753__$1;
(statearr_26771_26817[(2)] = inst_26672);

(statearr_26771_26817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26754 === (28))){
var inst_26719 = (state_26753[(2)]);
var inst_26720 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26721 = figwheel.client.heads_up.display_warning.call(null,inst_26720);
var state_26753__$1 = (function (){var statearr_26772 = state_26753;
(statearr_26772[(8)] = inst_26719);

return statearr_26772;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26753__$1,(29),inst_26721);
} else {
if((state_val_26754 === (25))){
var inst_26717 = figwheel.client.heads_up.clear.call(null);
var state_26753__$1 = state_26753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26753__$1,(28),inst_26717);
} else {
if((state_val_26754 === (34))){
var inst_26734 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26753__$1 = state_26753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26753__$1,(37),inst_26734);
} else {
if((state_val_26754 === (17))){
var inst_26699 = (state_26753[(2)]);
var state_26753__$1 = state_26753;
var statearr_26773_26818 = state_26753__$1;
(statearr_26773_26818[(2)] = inst_26699);

(statearr_26773_26818[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26754 === (3))){
var inst_26689 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26753__$1 = state_26753;
if(cljs.core.truth_(inst_26689)){
var statearr_26774_26819 = state_26753__$1;
(statearr_26774_26819[(1)] = (13));

} else {
var statearr_26775_26820 = state_26753__$1;
(statearr_26775_26820[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26754 === (12))){
var inst_26685 = (state_26753[(2)]);
var state_26753__$1 = state_26753;
var statearr_26776_26821 = state_26753__$1;
(statearr_26776_26821[(2)] = inst_26685);

(statearr_26776_26821[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26754 === (2))){
var inst_26672 = (state_26753[(7)]);
var inst_26672__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_26753__$1 = (function (){var statearr_26777 = state_26753;
(statearr_26777[(7)] = inst_26672__$1);

return statearr_26777;
})();
if(cljs.core.truth_(inst_26672__$1)){
var statearr_26778_26822 = state_26753__$1;
(statearr_26778_26822[(1)] = (5));

} else {
var statearr_26779_26823 = state_26753__$1;
(statearr_26779_26823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26754 === (23))){
var inst_26715 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26753__$1 = state_26753;
if(cljs.core.truth_(inst_26715)){
var statearr_26780_26824 = state_26753__$1;
(statearr_26780_26824[(1)] = (25));

} else {
var statearr_26781_26825 = state_26753__$1;
(statearr_26781_26825[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26754 === (35))){
var state_26753__$1 = state_26753;
var statearr_26782_26826 = state_26753__$1;
(statearr_26782_26826[(2)] = null);

(statearr_26782_26826[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26754 === (19))){
var inst_26710 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26753__$1 = state_26753;
if(cljs.core.truth_(inst_26710)){
var statearr_26783_26827 = state_26753__$1;
(statearr_26783_26827[(1)] = (22));

} else {
var statearr_26784_26828 = state_26753__$1;
(statearr_26784_26828[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26754 === (11))){
var inst_26681 = (state_26753[(2)]);
var state_26753__$1 = state_26753;
var statearr_26785_26829 = state_26753__$1;
(statearr_26785_26829[(2)] = inst_26681);

(statearr_26785_26829[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26754 === (9))){
var inst_26683 = figwheel.client.heads_up.clear.call(null);
var state_26753__$1 = state_26753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26753__$1,(12),inst_26683);
} else {
if((state_val_26754 === (5))){
var inst_26674 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26753__$1 = state_26753;
var statearr_26786_26830 = state_26753__$1;
(statearr_26786_26830[(2)] = inst_26674);

(statearr_26786_26830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26754 === (14))){
var inst_26701 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26753__$1 = state_26753;
if(cljs.core.truth_(inst_26701)){
var statearr_26787_26831 = state_26753__$1;
(statearr_26787_26831[(1)] = (18));

} else {
var statearr_26788_26832 = state_26753__$1;
(statearr_26788_26832[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26754 === (26))){
var inst_26725 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26753__$1 = state_26753;
if(cljs.core.truth_(inst_26725)){
var statearr_26789_26833 = state_26753__$1;
(statearr_26789_26833[(1)] = (30));

} else {
var statearr_26790_26834 = state_26753__$1;
(statearr_26790_26834[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26754 === (16))){
var inst_26693 = (state_26753[(2)]);
var inst_26694 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26695 = figwheel.client.format_messages.call(null,inst_26694);
var inst_26696 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26697 = figwheel.client.heads_up.display_error.call(null,inst_26695,inst_26696);
var state_26753__$1 = (function (){var statearr_26791 = state_26753;
(statearr_26791[(9)] = inst_26693);

return statearr_26791;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26753__$1,(17),inst_26697);
} else {
if((state_val_26754 === (30))){
var inst_26727 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26728 = figwheel.client.heads_up.display_warning.call(null,inst_26727);
var state_26753__$1 = state_26753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26753__$1,(33),inst_26728);
} else {
if((state_val_26754 === (10))){
var inst_26687 = (state_26753[(2)]);
var state_26753__$1 = state_26753;
var statearr_26792_26835 = state_26753__$1;
(statearr_26792_26835[(2)] = inst_26687);

(statearr_26792_26835[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26754 === (18))){
var inst_26703 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26704 = figwheel.client.format_messages.call(null,inst_26703);
var inst_26705 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26706 = figwheel.client.heads_up.display_error.call(null,inst_26704,inst_26705);
var state_26753__$1 = state_26753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26753__$1,(21),inst_26706);
} else {
if((state_val_26754 === (37))){
var inst_26736 = (state_26753[(2)]);
var state_26753__$1 = state_26753;
var statearr_26793_26836 = state_26753__$1;
(statearr_26793_26836[(2)] = inst_26736);

(statearr_26793_26836[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26754 === (8))){
var inst_26679 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26753__$1 = state_26753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26753__$1,(11),inst_26679);
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
});})(c__21910__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21798__auto__,c__21910__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21799__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21799__auto____0 = (function (){
var statearr_26797 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26797[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21799__auto__);

(statearr_26797[(1)] = (1));

return statearr_26797;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21799__auto____1 = (function (state_26753){
while(true){
var ret_value__21800__auto__ = (function (){try{while(true){
var result__21801__auto__ = switch__21798__auto__.call(null,state_26753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21801__auto__;
}
break;
}
}catch (e26798){if((e26798 instanceof Object)){
var ex__21802__auto__ = e26798;
var statearr_26799_26837 = state_26753;
(statearr_26799_26837[(5)] = ex__21802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26838 = state_26753;
state_26753 = G__26838;
continue;
} else {
return ret_value__21800__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21799__auto__ = function(state_26753){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21799__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21799__auto____1.call(this,state_26753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21799__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21799__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21799__auto__;
})()
;})(switch__21798__auto__,c__21910__auto__,msg_hist,msg_names,msg))
})();
var state__21912__auto__ = (function (){var statearr_26800 = f__21911__auto__.call(null);
(statearr_26800[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21910__auto__);

return statearr_26800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21912__auto__);
});})(c__21910__auto__,msg_hist,msg_names,msg))
);

return c__21910__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21910__auto___26901 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21910__auto___26901,ch){
return (function (){
var f__21911__auto__ = (function (){var switch__21798__auto__ = ((function (c__21910__auto___26901,ch){
return (function (state_26884){
var state_val_26885 = (state_26884[(1)]);
if((state_val_26885 === (1))){
var state_26884__$1 = state_26884;
var statearr_26886_26902 = state_26884__$1;
(statearr_26886_26902[(2)] = null);

(statearr_26886_26902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26885 === (2))){
var state_26884__$1 = state_26884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26884__$1,(4),ch);
} else {
if((state_val_26885 === (3))){
var inst_26882 = (state_26884[(2)]);
var state_26884__$1 = state_26884;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26884__$1,inst_26882);
} else {
if((state_val_26885 === (4))){
var inst_26872 = (state_26884[(7)]);
var inst_26872__$1 = (state_26884[(2)]);
var state_26884__$1 = (function (){var statearr_26887 = state_26884;
(statearr_26887[(7)] = inst_26872__$1);

return statearr_26887;
})();
if(cljs.core.truth_(inst_26872__$1)){
var statearr_26888_26903 = state_26884__$1;
(statearr_26888_26903[(1)] = (5));

} else {
var statearr_26889_26904 = state_26884__$1;
(statearr_26889_26904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26885 === (5))){
var inst_26872 = (state_26884[(7)]);
var inst_26874 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26872);
var state_26884__$1 = state_26884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26884__$1,(8),inst_26874);
} else {
if((state_val_26885 === (6))){
var state_26884__$1 = state_26884;
var statearr_26890_26905 = state_26884__$1;
(statearr_26890_26905[(2)] = null);

(statearr_26890_26905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26885 === (7))){
var inst_26880 = (state_26884[(2)]);
var state_26884__$1 = state_26884;
var statearr_26891_26906 = state_26884__$1;
(statearr_26891_26906[(2)] = inst_26880);

(statearr_26891_26906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26885 === (8))){
var inst_26876 = (state_26884[(2)]);
var state_26884__$1 = (function (){var statearr_26892 = state_26884;
(statearr_26892[(8)] = inst_26876);

return statearr_26892;
})();
var statearr_26893_26907 = state_26884__$1;
(statearr_26893_26907[(2)] = null);

(statearr_26893_26907[(1)] = (2));


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
});})(c__21910__auto___26901,ch))
;
return ((function (switch__21798__auto__,c__21910__auto___26901,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21799__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21799__auto____0 = (function (){
var statearr_26897 = [null,null,null,null,null,null,null,null,null];
(statearr_26897[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21799__auto__);

(statearr_26897[(1)] = (1));

return statearr_26897;
});
var figwheel$client$heads_up_plugin_$_state_machine__21799__auto____1 = (function (state_26884){
while(true){
var ret_value__21800__auto__ = (function (){try{while(true){
var result__21801__auto__ = switch__21798__auto__.call(null,state_26884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21801__auto__;
}
break;
}
}catch (e26898){if((e26898 instanceof Object)){
var ex__21802__auto__ = e26898;
var statearr_26899_26908 = state_26884;
(statearr_26899_26908[(5)] = ex__21802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26909 = state_26884;
state_26884 = G__26909;
continue;
} else {
return ret_value__21800__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21799__auto__ = function(state_26884){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21799__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21799__auto____1.call(this,state_26884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21799__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21799__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21799__auto__;
})()
;})(switch__21798__auto__,c__21910__auto___26901,ch))
})();
var state__21912__auto__ = (function (){var statearr_26900 = f__21911__auto__.call(null);
(statearr_26900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21910__auto___26901);

return statearr_26900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21912__auto__);
});})(c__21910__auto___26901,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21910__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21910__auto__){
return (function (){
var f__21911__auto__ = (function (){var switch__21798__auto__ = ((function (c__21910__auto__){
return (function (state_26930){
var state_val_26931 = (state_26930[(1)]);
if((state_val_26931 === (1))){
var inst_26925 = cljs.core.async.timeout.call(null,(3000));
var state_26930__$1 = state_26930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26930__$1,(2),inst_26925);
} else {
if((state_val_26931 === (2))){
var inst_26927 = (state_26930[(2)]);
var inst_26928 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26930__$1 = (function (){var statearr_26932 = state_26930;
(statearr_26932[(7)] = inst_26927);

return statearr_26932;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26930__$1,inst_26928);
} else {
return null;
}
}
});})(c__21910__auto__))
;
return ((function (switch__21798__auto__,c__21910__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21799__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21799__auto____0 = (function (){
var statearr_26936 = [null,null,null,null,null,null,null,null];
(statearr_26936[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21799__auto__);

(statearr_26936[(1)] = (1));

return statearr_26936;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21799__auto____1 = (function (state_26930){
while(true){
var ret_value__21800__auto__ = (function (){try{while(true){
var result__21801__auto__ = switch__21798__auto__.call(null,state_26930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21801__auto__;
}
break;
}
}catch (e26937){if((e26937 instanceof Object)){
var ex__21802__auto__ = e26937;
var statearr_26938_26940 = state_26930;
(statearr_26938_26940[(5)] = ex__21802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26941 = state_26930;
state_26930 = G__26941;
continue;
} else {
return ret_value__21800__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21799__auto__ = function(state_26930){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21799__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21799__auto____1.call(this,state_26930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21799__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21799__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21799__auto__;
})()
;})(switch__21798__auto__,c__21910__auto__))
})();
var state__21912__auto__ = (function (){var statearr_26939 = f__21911__auto__.call(null);
(statearr_26939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21910__auto__);

return statearr_26939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21912__auto__);
});})(c__21910__auto__))
);

return c__21910__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26942){
var map__26949 = p__26942;
var map__26949__$1 = ((((!((map__26949 == null)))?((((map__26949.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26949.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26949):map__26949);
var ed = map__26949__$1;
var formatted_exception = cljs.core.get.call(null,map__26949__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26949__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26949__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26951_26955 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26952_26956 = null;
var count__26953_26957 = (0);
var i__26954_26958 = (0);
while(true){
if((i__26954_26958 < count__26953_26957)){
var msg_26959 = cljs.core._nth.call(null,chunk__26952_26956,i__26954_26958);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26959);

var G__26960 = seq__26951_26955;
var G__26961 = chunk__26952_26956;
var G__26962 = count__26953_26957;
var G__26963 = (i__26954_26958 + (1));
seq__26951_26955 = G__26960;
chunk__26952_26956 = G__26961;
count__26953_26957 = G__26962;
i__26954_26958 = G__26963;
continue;
} else {
var temp__4425__auto___26964 = cljs.core.seq.call(null,seq__26951_26955);
if(temp__4425__auto___26964){
var seq__26951_26965__$1 = temp__4425__auto___26964;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26951_26965__$1)){
var c__17588__auto___26966 = cljs.core.chunk_first.call(null,seq__26951_26965__$1);
var G__26967 = cljs.core.chunk_rest.call(null,seq__26951_26965__$1);
var G__26968 = c__17588__auto___26966;
var G__26969 = cljs.core.count.call(null,c__17588__auto___26966);
var G__26970 = (0);
seq__26951_26955 = G__26967;
chunk__26952_26956 = G__26968;
count__26953_26957 = G__26969;
i__26954_26958 = G__26970;
continue;
} else {
var msg_26971 = cljs.core.first.call(null,seq__26951_26965__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26971);

var G__26972 = cljs.core.next.call(null,seq__26951_26965__$1);
var G__26973 = null;
var G__26974 = (0);
var G__26975 = (0);
seq__26951_26955 = G__26972;
chunk__26952_26956 = G__26973;
count__26953_26957 = G__26974;
i__26954_26958 = G__26975;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26976){
var map__26979 = p__26976;
var map__26979__$1 = ((((!((map__26979 == null)))?((((map__26979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26979):map__26979);
var w = map__26979__$1;
var message = cljs.core.get.call(null,map__26979__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16773__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16773__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16773__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__26987 = cljs.core.seq.call(null,plugins);
var chunk__26988 = null;
var count__26989 = (0);
var i__26990 = (0);
while(true){
if((i__26990 < count__26989)){
var vec__26991 = cljs.core._nth.call(null,chunk__26988,i__26990);
var k = cljs.core.nth.call(null,vec__26991,(0),null);
var plugin = cljs.core.nth.call(null,vec__26991,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26993 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26987,chunk__26988,count__26989,i__26990,pl_26993,vec__26991,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26993.call(null,msg_hist);
});})(seq__26987,chunk__26988,count__26989,i__26990,pl_26993,vec__26991,k,plugin))
);
} else {
}

var G__26994 = seq__26987;
var G__26995 = chunk__26988;
var G__26996 = count__26989;
var G__26997 = (i__26990 + (1));
seq__26987 = G__26994;
chunk__26988 = G__26995;
count__26989 = G__26996;
i__26990 = G__26997;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26987);
if(temp__4425__auto__){
var seq__26987__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26987__$1)){
var c__17588__auto__ = cljs.core.chunk_first.call(null,seq__26987__$1);
var G__26998 = cljs.core.chunk_rest.call(null,seq__26987__$1);
var G__26999 = c__17588__auto__;
var G__27000 = cljs.core.count.call(null,c__17588__auto__);
var G__27001 = (0);
seq__26987 = G__26998;
chunk__26988 = G__26999;
count__26989 = G__27000;
i__26990 = G__27001;
continue;
} else {
var vec__26992 = cljs.core.first.call(null,seq__26987__$1);
var k = cljs.core.nth.call(null,vec__26992,(0),null);
var plugin = cljs.core.nth.call(null,vec__26992,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27002 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26987,chunk__26988,count__26989,i__26990,pl_27002,vec__26992,k,plugin,seq__26987__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27002.call(null,msg_hist);
});})(seq__26987,chunk__26988,count__26989,i__26990,pl_27002,vec__26992,k,plugin,seq__26987__$1,temp__4425__auto__))
);
} else {
}

var G__27003 = cljs.core.next.call(null,seq__26987__$1);
var G__27004 = null;
var G__27005 = (0);
var G__27006 = (0);
seq__26987 = G__27003;
chunk__26988 = G__27004;
count__26989 = G__27005;
i__26990 = G__27006;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args27007 = [];
var len__17843__auto___27010 = arguments.length;
var i__17844__auto___27011 = (0);
while(true){
if((i__17844__auto___27011 < len__17843__auto___27010)){
args27007.push((arguments[i__17844__auto___27011]));

var G__27012 = (i__17844__auto___27011 + (1));
i__17844__auto___27011 = G__27012;
continue;
} else {
}
break;
}

var G__27009 = args27007.length;
switch (G__27009) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27007.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17850__auto__ = [];
var len__17843__auto___27018 = arguments.length;
var i__17844__auto___27019 = (0);
while(true){
if((i__17844__auto___27019 < len__17843__auto___27018)){
args__17850__auto__.push((arguments[i__17844__auto___27019]));

var G__27020 = (i__17844__auto___27019 + (1));
i__17844__auto___27019 = G__27020;
continue;
} else {
}
break;
}

var argseq__17851__auto__ = ((((0) < args__17850__auto__.length))?(new cljs.core.IndexedSeq(args__17850__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17851__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27015){
var map__27016 = p__27015;
var map__27016__$1 = ((((!((map__27016 == null)))?((((map__27016.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27016.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27016):map__27016);
var opts = map__27016__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27014){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27014));
});

//# sourceMappingURL=client.js.map