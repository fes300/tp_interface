// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25877_25891 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25878_25892 = null;
var count__25879_25893 = (0);
var i__25880_25894 = (0);
while(true){
if((i__25880_25894 < count__25879_25893)){
var f_25895 = cljs.core._nth.call(null,chunk__25878_25892,i__25880_25894);
cljs.core.println.call(null,"  ",f_25895);

var G__25896 = seq__25877_25891;
var G__25897 = chunk__25878_25892;
var G__25898 = count__25879_25893;
var G__25899 = (i__25880_25894 + (1));
seq__25877_25891 = G__25896;
chunk__25878_25892 = G__25897;
count__25879_25893 = G__25898;
i__25880_25894 = G__25899;
continue;
} else {
var temp__4425__auto___25900 = cljs.core.seq.call(null,seq__25877_25891);
if(temp__4425__auto___25900){
var seq__25877_25901__$1 = temp__4425__auto___25900;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25877_25901__$1)){
var c__17588__auto___25902 = cljs.core.chunk_first.call(null,seq__25877_25901__$1);
var G__25903 = cljs.core.chunk_rest.call(null,seq__25877_25901__$1);
var G__25904 = c__17588__auto___25902;
var G__25905 = cljs.core.count.call(null,c__17588__auto___25902);
var G__25906 = (0);
seq__25877_25891 = G__25903;
chunk__25878_25892 = G__25904;
count__25879_25893 = G__25905;
i__25880_25894 = G__25906;
continue;
} else {
var f_25907 = cljs.core.first.call(null,seq__25877_25901__$1);
cljs.core.println.call(null,"  ",f_25907);

var G__25908 = cljs.core.next.call(null,seq__25877_25901__$1);
var G__25909 = null;
var G__25910 = (0);
var G__25911 = (0);
seq__25877_25891 = G__25908;
chunk__25878_25892 = G__25909;
count__25879_25893 = G__25910;
i__25880_25894 = G__25911;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25912 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16785__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25912);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25912)))?cljs.core.second.call(null,arglists_25912):arglists_25912));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25881 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25882 = null;
var count__25883 = (0);
var i__25884 = (0);
while(true){
if((i__25884 < count__25883)){
var vec__25885 = cljs.core._nth.call(null,chunk__25882,i__25884);
var name = cljs.core.nth.call(null,vec__25885,(0),null);
var map__25886 = cljs.core.nth.call(null,vec__25885,(1),null);
var map__25886__$1 = ((((!((map__25886 == null)))?((((map__25886.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25886.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25886):map__25886);
var doc = cljs.core.get.call(null,map__25886__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25886__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25913 = seq__25881;
var G__25914 = chunk__25882;
var G__25915 = count__25883;
var G__25916 = (i__25884 + (1));
seq__25881 = G__25913;
chunk__25882 = G__25914;
count__25883 = G__25915;
i__25884 = G__25916;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25881);
if(temp__4425__auto__){
var seq__25881__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25881__$1)){
var c__17588__auto__ = cljs.core.chunk_first.call(null,seq__25881__$1);
var G__25917 = cljs.core.chunk_rest.call(null,seq__25881__$1);
var G__25918 = c__17588__auto__;
var G__25919 = cljs.core.count.call(null,c__17588__auto__);
var G__25920 = (0);
seq__25881 = G__25917;
chunk__25882 = G__25918;
count__25883 = G__25919;
i__25884 = G__25920;
continue;
} else {
var vec__25888 = cljs.core.first.call(null,seq__25881__$1);
var name = cljs.core.nth.call(null,vec__25888,(0),null);
var map__25889 = cljs.core.nth.call(null,vec__25888,(1),null);
var map__25889__$1 = ((((!((map__25889 == null)))?((((map__25889.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25889.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25889):map__25889);
var doc = cljs.core.get.call(null,map__25889__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25889__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25921 = cljs.core.next.call(null,seq__25881__$1);
var G__25922 = null;
var G__25923 = (0);
var G__25924 = (0);
seq__25881 = G__25921;
chunk__25882 = G__25922;
count__25883 = G__25923;
i__25884 = G__25924;
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
}
});

//# sourceMappingURL=repl.js.map