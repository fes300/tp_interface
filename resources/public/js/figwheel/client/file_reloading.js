// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16785__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16785__auto__){
return or__16785__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16785__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__24853_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__24853_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__24858 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__24859 = null;
var count__24860 = (0);
var i__24861 = (0);
while(true){
if((i__24861 < count__24860)){
var n = cljs.core._nth.call(null,chunk__24859,i__24861);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24862 = seq__24858;
var G__24863 = chunk__24859;
var G__24864 = count__24860;
var G__24865 = (i__24861 + (1));
seq__24858 = G__24862;
chunk__24859 = G__24863;
count__24860 = G__24864;
i__24861 = G__24865;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24858);
if(temp__4425__auto__){
var seq__24858__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24858__$1)){
var c__17588__auto__ = cljs.core.chunk_first.call(null,seq__24858__$1);
var G__24866 = cljs.core.chunk_rest.call(null,seq__24858__$1);
var G__24867 = c__17588__auto__;
var G__24868 = cljs.core.count.call(null,c__17588__auto__);
var G__24869 = (0);
seq__24858 = G__24866;
chunk__24859 = G__24867;
count__24860 = G__24868;
i__24861 = G__24869;
continue;
} else {
var n = cljs.core.first.call(null,seq__24858__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24870 = cljs.core.next.call(null,seq__24858__$1);
var G__24871 = null;
var G__24872 = (0);
var G__24873 = (0);
seq__24858 = G__24870;
chunk__24859 = G__24871;
count__24860 = G__24872;
i__24861 = G__24873;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__24912_24919 = cljs.core.seq.call(null,deps);
var chunk__24913_24920 = null;
var count__24914_24921 = (0);
var i__24915_24922 = (0);
while(true){
if((i__24915_24922 < count__24914_24921)){
var dep_24923 = cljs.core._nth.call(null,chunk__24913_24920,i__24915_24922);
topo_sort_helper_STAR_.call(null,dep_24923,(depth + (1)),state);

var G__24924 = seq__24912_24919;
var G__24925 = chunk__24913_24920;
var G__24926 = count__24914_24921;
var G__24927 = (i__24915_24922 + (1));
seq__24912_24919 = G__24924;
chunk__24913_24920 = G__24925;
count__24914_24921 = G__24926;
i__24915_24922 = G__24927;
continue;
} else {
var temp__4425__auto___24928 = cljs.core.seq.call(null,seq__24912_24919);
if(temp__4425__auto___24928){
var seq__24912_24929__$1 = temp__4425__auto___24928;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24912_24929__$1)){
var c__17588__auto___24930 = cljs.core.chunk_first.call(null,seq__24912_24929__$1);
var G__24931 = cljs.core.chunk_rest.call(null,seq__24912_24929__$1);
var G__24932 = c__17588__auto___24930;
var G__24933 = cljs.core.count.call(null,c__17588__auto___24930);
var G__24934 = (0);
seq__24912_24919 = G__24931;
chunk__24913_24920 = G__24932;
count__24914_24921 = G__24933;
i__24915_24922 = G__24934;
continue;
} else {
var dep_24935 = cljs.core.first.call(null,seq__24912_24929__$1);
topo_sort_helper_STAR_.call(null,dep_24935,(depth + (1)),state);

var G__24936 = cljs.core.next.call(null,seq__24912_24929__$1);
var G__24937 = null;
var G__24938 = (0);
var G__24939 = (0);
seq__24912_24919 = G__24936;
chunk__24913_24920 = G__24937;
count__24914_24921 = G__24938;
i__24915_24922 = G__24939;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__24916){
var vec__24918 = p__24916;
var x = cljs.core.nth.call(null,vec__24918,(0),null);
var xs = cljs.core.nthnext.call(null,vec__24918,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__24918,x,xs,get_deps__$1){
return (function (p1__24874_SHARP_){
return clojure.set.difference.call(null,p1__24874_SHARP_,x);
});})(vec__24918,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__24952 = cljs.core.seq.call(null,provides);
var chunk__24953 = null;
var count__24954 = (0);
var i__24955 = (0);
while(true){
if((i__24955 < count__24954)){
var prov = cljs.core._nth.call(null,chunk__24953,i__24955);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24956_24964 = cljs.core.seq.call(null,requires);
var chunk__24957_24965 = null;
var count__24958_24966 = (0);
var i__24959_24967 = (0);
while(true){
if((i__24959_24967 < count__24958_24966)){
var req_24968 = cljs.core._nth.call(null,chunk__24957_24965,i__24959_24967);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24968,prov);

var G__24969 = seq__24956_24964;
var G__24970 = chunk__24957_24965;
var G__24971 = count__24958_24966;
var G__24972 = (i__24959_24967 + (1));
seq__24956_24964 = G__24969;
chunk__24957_24965 = G__24970;
count__24958_24966 = G__24971;
i__24959_24967 = G__24972;
continue;
} else {
var temp__4425__auto___24973 = cljs.core.seq.call(null,seq__24956_24964);
if(temp__4425__auto___24973){
var seq__24956_24974__$1 = temp__4425__auto___24973;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24956_24974__$1)){
var c__17588__auto___24975 = cljs.core.chunk_first.call(null,seq__24956_24974__$1);
var G__24976 = cljs.core.chunk_rest.call(null,seq__24956_24974__$1);
var G__24977 = c__17588__auto___24975;
var G__24978 = cljs.core.count.call(null,c__17588__auto___24975);
var G__24979 = (0);
seq__24956_24964 = G__24976;
chunk__24957_24965 = G__24977;
count__24958_24966 = G__24978;
i__24959_24967 = G__24979;
continue;
} else {
var req_24980 = cljs.core.first.call(null,seq__24956_24974__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24980,prov);

var G__24981 = cljs.core.next.call(null,seq__24956_24974__$1);
var G__24982 = null;
var G__24983 = (0);
var G__24984 = (0);
seq__24956_24964 = G__24981;
chunk__24957_24965 = G__24982;
count__24958_24966 = G__24983;
i__24959_24967 = G__24984;
continue;
}
} else {
}
}
break;
}

var G__24985 = seq__24952;
var G__24986 = chunk__24953;
var G__24987 = count__24954;
var G__24988 = (i__24955 + (1));
seq__24952 = G__24985;
chunk__24953 = G__24986;
count__24954 = G__24987;
i__24955 = G__24988;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24952);
if(temp__4425__auto__){
var seq__24952__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24952__$1)){
var c__17588__auto__ = cljs.core.chunk_first.call(null,seq__24952__$1);
var G__24989 = cljs.core.chunk_rest.call(null,seq__24952__$1);
var G__24990 = c__17588__auto__;
var G__24991 = cljs.core.count.call(null,c__17588__auto__);
var G__24992 = (0);
seq__24952 = G__24989;
chunk__24953 = G__24990;
count__24954 = G__24991;
i__24955 = G__24992;
continue;
} else {
var prov = cljs.core.first.call(null,seq__24952__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24960_24993 = cljs.core.seq.call(null,requires);
var chunk__24961_24994 = null;
var count__24962_24995 = (0);
var i__24963_24996 = (0);
while(true){
if((i__24963_24996 < count__24962_24995)){
var req_24997 = cljs.core._nth.call(null,chunk__24961_24994,i__24963_24996);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24997,prov);

var G__24998 = seq__24960_24993;
var G__24999 = chunk__24961_24994;
var G__25000 = count__24962_24995;
var G__25001 = (i__24963_24996 + (1));
seq__24960_24993 = G__24998;
chunk__24961_24994 = G__24999;
count__24962_24995 = G__25000;
i__24963_24996 = G__25001;
continue;
} else {
var temp__4425__auto___25002__$1 = cljs.core.seq.call(null,seq__24960_24993);
if(temp__4425__auto___25002__$1){
var seq__24960_25003__$1 = temp__4425__auto___25002__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24960_25003__$1)){
var c__17588__auto___25004 = cljs.core.chunk_first.call(null,seq__24960_25003__$1);
var G__25005 = cljs.core.chunk_rest.call(null,seq__24960_25003__$1);
var G__25006 = c__17588__auto___25004;
var G__25007 = cljs.core.count.call(null,c__17588__auto___25004);
var G__25008 = (0);
seq__24960_24993 = G__25005;
chunk__24961_24994 = G__25006;
count__24962_24995 = G__25007;
i__24963_24996 = G__25008;
continue;
} else {
var req_25009 = cljs.core.first.call(null,seq__24960_25003__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25009,prov);

var G__25010 = cljs.core.next.call(null,seq__24960_25003__$1);
var G__25011 = null;
var G__25012 = (0);
var G__25013 = (0);
seq__24960_24993 = G__25010;
chunk__24961_24994 = G__25011;
count__24962_24995 = G__25012;
i__24963_24996 = G__25013;
continue;
}
} else {
}
}
break;
}

var G__25014 = cljs.core.next.call(null,seq__24952__$1);
var G__25015 = null;
var G__25016 = (0);
var G__25017 = (0);
seq__24952 = G__25014;
chunk__24953 = G__25015;
count__24954 = G__25016;
i__24955 = G__25017;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__25022_25026 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__25023_25027 = null;
var count__25024_25028 = (0);
var i__25025_25029 = (0);
while(true){
if((i__25025_25029 < count__25024_25028)){
var ns_25030 = cljs.core._nth.call(null,chunk__25023_25027,i__25025_25029);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25030);

var G__25031 = seq__25022_25026;
var G__25032 = chunk__25023_25027;
var G__25033 = count__25024_25028;
var G__25034 = (i__25025_25029 + (1));
seq__25022_25026 = G__25031;
chunk__25023_25027 = G__25032;
count__25024_25028 = G__25033;
i__25025_25029 = G__25034;
continue;
} else {
var temp__4425__auto___25035 = cljs.core.seq.call(null,seq__25022_25026);
if(temp__4425__auto___25035){
var seq__25022_25036__$1 = temp__4425__auto___25035;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25022_25036__$1)){
var c__17588__auto___25037 = cljs.core.chunk_first.call(null,seq__25022_25036__$1);
var G__25038 = cljs.core.chunk_rest.call(null,seq__25022_25036__$1);
var G__25039 = c__17588__auto___25037;
var G__25040 = cljs.core.count.call(null,c__17588__auto___25037);
var G__25041 = (0);
seq__25022_25026 = G__25038;
chunk__25023_25027 = G__25039;
count__25024_25028 = G__25040;
i__25025_25029 = G__25041;
continue;
} else {
var ns_25042 = cljs.core.first.call(null,seq__25022_25036__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25042);

var G__25043 = cljs.core.next.call(null,seq__25022_25036__$1);
var G__25044 = null;
var G__25045 = (0);
var G__25046 = (0);
seq__25022_25026 = G__25043;
chunk__25023_25027 = G__25044;
count__25024_25028 = G__25045;
i__25025_25029 = G__25046;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16785__auto__ = goog.require__;
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__25047__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__25047 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25048__i = 0, G__25048__a = new Array(arguments.length -  0);
while (G__25048__i < G__25048__a.length) {G__25048__a[G__25048__i] = arguments[G__25048__i + 0]; ++G__25048__i;}
  args = new cljs.core.IndexedSeq(G__25048__a,0);
} 
return G__25047__delegate.call(this,args);};
G__25047.cljs$lang$maxFixedArity = 0;
G__25047.cljs$lang$applyTo = (function (arglist__25049){
var args = cljs.core.seq(arglist__25049);
return G__25047__delegate(args);
});
G__25047.cljs$core$IFn$_invoke$arity$variadic = G__25047__delegate;
return G__25047;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__25051 = cljs.core._EQ_;
var expr__25052 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__25051.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25052))){
var path_parts = ((function (pred__25051,expr__25052){
return (function (p1__25050_SHARP_){
return clojure.string.split.call(null,p1__25050_SHARP_,/[\/\\]/);
});})(pred__25051,expr__25052))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__25051,expr__25052){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e25054){if((e25054 instanceof Error)){
var e = e25054;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25054;

}
}})());
});
;})(path_parts,sep,root,pred__25051,expr__25052))
} else {
if(cljs.core.truth_(pred__25051.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__25052))){
return ((function (pred__25051,expr__25052){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__25051,expr__25052){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__25051,expr__25052))
);

return deferred.addErrback(((function (deferred,pred__25051,expr__25052){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__25051,expr__25052))
);
});
;})(pred__25051,expr__25052))
} else {
return ((function (pred__25051,expr__25052){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__25051,expr__25052))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25055,callback){
var map__25058 = p__25055;
var map__25058__$1 = ((((!((map__25058 == null)))?((((map__25058.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25058.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25058):map__25058);
var file_msg = map__25058__$1;
var request_url = cljs.core.get.call(null,map__25058__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__25058,map__25058__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25058,map__25058__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__21910__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21910__auto__){
return (function (){
var f__21911__auto__ = (function (){var switch__21798__auto__ = ((function (c__21910__auto__){
return (function (state_25082){
var state_val_25083 = (state_25082[(1)]);
if((state_val_25083 === (7))){
var inst_25078 = (state_25082[(2)]);
var state_25082__$1 = state_25082;
var statearr_25084_25104 = state_25082__$1;
(statearr_25084_25104[(2)] = inst_25078);

(statearr_25084_25104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (1))){
var state_25082__$1 = state_25082;
var statearr_25085_25105 = state_25082__$1;
(statearr_25085_25105[(2)] = null);

(statearr_25085_25105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (4))){
var inst_25062 = (state_25082[(7)]);
var inst_25062__$1 = (state_25082[(2)]);
var state_25082__$1 = (function (){var statearr_25086 = state_25082;
(statearr_25086[(7)] = inst_25062__$1);

return statearr_25086;
})();
if(cljs.core.truth_(inst_25062__$1)){
var statearr_25087_25106 = state_25082__$1;
(statearr_25087_25106[(1)] = (5));

} else {
var statearr_25088_25107 = state_25082__$1;
(statearr_25088_25107[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (6))){
var state_25082__$1 = state_25082;
var statearr_25089_25108 = state_25082__$1;
(statearr_25089_25108[(2)] = null);

(statearr_25089_25108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (3))){
var inst_25080 = (state_25082[(2)]);
var state_25082__$1 = state_25082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25082__$1,inst_25080);
} else {
if((state_val_25083 === (2))){
var state_25082__$1 = state_25082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25082__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_25083 === (11))){
var inst_25074 = (state_25082[(2)]);
var state_25082__$1 = (function (){var statearr_25090 = state_25082;
(statearr_25090[(8)] = inst_25074);

return statearr_25090;
})();
var statearr_25091_25109 = state_25082__$1;
(statearr_25091_25109[(2)] = null);

(statearr_25091_25109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (9))){
var inst_25068 = (state_25082[(9)]);
var inst_25066 = (state_25082[(10)]);
var inst_25070 = inst_25068.call(null,inst_25066);
var state_25082__$1 = state_25082;
var statearr_25092_25110 = state_25082__$1;
(statearr_25092_25110[(2)] = inst_25070);

(statearr_25092_25110[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (5))){
var inst_25062 = (state_25082[(7)]);
var inst_25064 = figwheel.client.file_reloading.blocking_load.call(null,inst_25062);
var state_25082__$1 = state_25082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25082__$1,(8),inst_25064);
} else {
if((state_val_25083 === (10))){
var inst_25066 = (state_25082[(10)]);
var inst_25072 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_25066);
var state_25082__$1 = state_25082;
var statearr_25093_25111 = state_25082__$1;
(statearr_25093_25111[(2)] = inst_25072);

(statearr_25093_25111[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25083 === (8))){
var inst_25068 = (state_25082[(9)]);
var inst_25062 = (state_25082[(7)]);
var inst_25066 = (state_25082[(2)]);
var inst_25067 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_25068__$1 = cljs.core.get.call(null,inst_25067,inst_25062);
var state_25082__$1 = (function (){var statearr_25094 = state_25082;
(statearr_25094[(9)] = inst_25068__$1);

(statearr_25094[(10)] = inst_25066);

return statearr_25094;
})();
if(cljs.core.truth_(inst_25068__$1)){
var statearr_25095_25112 = state_25082__$1;
(statearr_25095_25112[(1)] = (9));

} else {
var statearr_25096_25113 = state_25082__$1;
(statearr_25096_25113[(1)] = (10));

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
});})(c__21910__auto__))
;
return ((function (switch__21798__auto__,c__21910__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__21799__auto__ = null;
var figwheel$client$file_reloading$state_machine__21799__auto____0 = (function (){
var statearr_25100 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25100[(0)] = figwheel$client$file_reloading$state_machine__21799__auto__);

(statearr_25100[(1)] = (1));

return statearr_25100;
});
var figwheel$client$file_reloading$state_machine__21799__auto____1 = (function (state_25082){
while(true){
var ret_value__21800__auto__ = (function (){try{while(true){
var result__21801__auto__ = switch__21798__auto__.call(null,state_25082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21801__auto__;
}
break;
}
}catch (e25101){if((e25101 instanceof Object)){
var ex__21802__auto__ = e25101;
var statearr_25102_25114 = state_25082;
(statearr_25102_25114[(5)] = ex__21802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25115 = state_25082;
state_25082 = G__25115;
continue;
} else {
return ret_value__21800__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__21799__auto__ = function(state_25082){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__21799__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__21799__auto____1.call(this,state_25082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__21799__auto____0;
figwheel$client$file_reloading$state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__21799__auto____1;
return figwheel$client$file_reloading$state_machine__21799__auto__;
})()
;})(switch__21798__auto__,c__21910__auto__))
})();
var state__21912__auto__ = (function (){var statearr_25103 = f__21911__auto__.call(null);
(statearr_25103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21910__auto__);

return statearr_25103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21912__auto__);
});})(c__21910__auto__))
);

return c__21910__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__25116,callback){
var map__25119 = p__25116;
var map__25119__$1 = ((((!((map__25119 == null)))?((((map__25119.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25119.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25119):map__25119);
var file_msg = map__25119__$1;
var namespace = cljs.core.get.call(null,map__25119__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__25119,map__25119__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__25119,map__25119__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25121){
var map__25124 = p__25121;
var map__25124__$1 = ((((!((map__25124 == null)))?((((map__25124.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25124.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25124):map__25124);
var file_msg = map__25124__$1;
var namespace = cljs.core.get.call(null,map__25124__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16773__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16773__auto__){
var or__16785__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
var or__16785__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16785__auto____$1)){
return or__16785__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16773__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25126,callback){
var map__25129 = p__25126;
var map__25129__$1 = ((((!((map__25129 == null)))?((((map__25129.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25129.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25129):map__25129);
var file_msg = map__25129__$1;
var request_url = cljs.core.get.call(null,map__25129__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25129__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21910__auto___25217 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21910__auto___25217,out){
return (function (){
var f__21911__auto__ = (function (){var switch__21798__auto__ = ((function (c__21910__auto___25217,out){
return (function (state_25199){
var state_val_25200 = (state_25199[(1)]);
if((state_val_25200 === (1))){
var inst_25177 = cljs.core.nth.call(null,files,(0),null);
var inst_25178 = cljs.core.nthnext.call(null,files,(1));
var inst_25179 = files;
var state_25199__$1 = (function (){var statearr_25201 = state_25199;
(statearr_25201[(7)] = inst_25178);

(statearr_25201[(8)] = inst_25177);

(statearr_25201[(9)] = inst_25179);

return statearr_25201;
})();
var statearr_25202_25218 = state_25199__$1;
(statearr_25202_25218[(2)] = null);

(statearr_25202_25218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25200 === (2))){
var inst_25182 = (state_25199[(10)]);
var inst_25179 = (state_25199[(9)]);
var inst_25182__$1 = cljs.core.nth.call(null,inst_25179,(0),null);
var inst_25183 = cljs.core.nthnext.call(null,inst_25179,(1));
var inst_25184 = (inst_25182__$1 == null);
var inst_25185 = cljs.core.not.call(null,inst_25184);
var state_25199__$1 = (function (){var statearr_25203 = state_25199;
(statearr_25203[(10)] = inst_25182__$1);

(statearr_25203[(11)] = inst_25183);

return statearr_25203;
})();
if(inst_25185){
var statearr_25204_25219 = state_25199__$1;
(statearr_25204_25219[(1)] = (4));

} else {
var statearr_25205_25220 = state_25199__$1;
(statearr_25205_25220[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25200 === (3))){
var inst_25197 = (state_25199[(2)]);
var state_25199__$1 = state_25199;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25199__$1,inst_25197);
} else {
if((state_val_25200 === (4))){
var inst_25182 = (state_25199[(10)]);
var inst_25187 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25182);
var state_25199__$1 = state_25199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25199__$1,(7),inst_25187);
} else {
if((state_val_25200 === (5))){
var inst_25193 = cljs.core.async.close_BANG_.call(null,out);
var state_25199__$1 = state_25199;
var statearr_25206_25221 = state_25199__$1;
(statearr_25206_25221[(2)] = inst_25193);

(statearr_25206_25221[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25200 === (6))){
var inst_25195 = (state_25199[(2)]);
var state_25199__$1 = state_25199;
var statearr_25207_25222 = state_25199__$1;
(statearr_25207_25222[(2)] = inst_25195);

(statearr_25207_25222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25200 === (7))){
var inst_25183 = (state_25199[(11)]);
var inst_25189 = (state_25199[(2)]);
var inst_25190 = cljs.core.async.put_BANG_.call(null,out,inst_25189);
var inst_25179 = inst_25183;
var state_25199__$1 = (function (){var statearr_25208 = state_25199;
(statearr_25208[(12)] = inst_25190);

(statearr_25208[(9)] = inst_25179);

return statearr_25208;
})();
var statearr_25209_25223 = state_25199__$1;
(statearr_25209_25223[(2)] = null);

(statearr_25209_25223[(1)] = (2));


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
});})(c__21910__auto___25217,out))
;
return ((function (switch__21798__auto__,c__21910__auto___25217,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21799__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21799__auto____0 = (function (){
var statearr_25213 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25213[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21799__auto__);

(statearr_25213[(1)] = (1));

return statearr_25213;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21799__auto____1 = (function (state_25199){
while(true){
var ret_value__21800__auto__ = (function (){try{while(true){
var result__21801__auto__ = switch__21798__auto__.call(null,state_25199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21801__auto__;
}
break;
}
}catch (e25214){if((e25214 instanceof Object)){
var ex__21802__auto__ = e25214;
var statearr_25215_25224 = state_25199;
(statearr_25215_25224[(5)] = ex__21802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25225 = state_25199;
state_25199 = G__25225;
continue;
} else {
return ret_value__21800__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21799__auto__ = function(state_25199){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21799__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21799__auto____1.call(this,state_25199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21799__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21799__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21799__auto__;
})()
;})(switch__21798__auto__,c__21910__auto___25217,out))
})();
var state__21912__auto__ = (function (){var statearr_25216 = f__21911__auto__.call(null);
(statearr_25216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21910__auto___25217);

return statearr_25216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21912__auto__);
});})(c__21910__auto___25217,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25226,opts){
var map__25230 = p__25226;
var map__25230__$1 = ((((!((map__25230 == null)))?((((map__25230.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25230.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25230):map__25230);
var eval_body__$1 = cljs.core.get.call(null,map__25230__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25230__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16773__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16773__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16773__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e25232){var e = e25232;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__25233_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25233_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__25238){
var vec__25239 = p__25238;
var k = cljs.core.nth.call(null,vec__25239,(0),null);
var v = cljs.core.nth.call(null,vec__25239,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25240){
var vec__25241 = p__25240;
var k = cljs.core.nth.call(null,vec__25241,(0),null);
var v = cljs.core.nth.call(null,vec__25241,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25245,p__25246){
var map__25493 = p__25245;
var map__25493__$1 = ((((!((map__25493 == null)))?((((map__25493.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25493.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25493):map__25493);
var opts = map__25493__$1;
var before_jsload = cljs.core.get.call(null,map__25493__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25493__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25493__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25494 = p__25246;
var map__25494__$1 = ((((!((map__25494 == null)))?((((map__25494.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25494.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25494):map__25494);
var msg = map__25494__$1;
var files = cljs.core.get.call(null,map__25494__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25494__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25494__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21910__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21910__auto__,map__25493,map__25493__$1,opts,before_jsload,on_jsload,reload_dependents,map__25494,map__25494__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21911__auto__ = (function (){var switch__21798__auto__ = ((function (c__21910__auto__,map__25493,map__25493__$1,opts,before_jsload,on_jsload,reload_dependents,map__25494,map__25494__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_25647){
var state_val_25648 = (state_25647[(1)]);
if((state_val_25648 === (7))){
var inst_25509 = (state_25647[(7)]);
var inst_25508 = (state_25647[(8)]);
var inst_25510 = (state_25647[(9)]);
var inst_25511 = (state_25647[(10)]);
var inst_25516 = cljs.core._nth.call(null,inst_25509,inst_25511);
var inst_25517 = figwheel.client.file_reloading.eval_body.call(null,inst_25516,opts);
var inst_25518 = (inst_25511 + (1));
var tmp25649 = inst_25509;
var tmp25650 = inst_25508;
var tmp25651 = inst_25510;
var inst_25508__$1 = tmp25650;
var inst_25509__$1 = tmp25649;
var inst_25510__$1 = tmp25651;
var inst_25511__$1 = inst_25518;
var state_25647__$1 = (function (){var statearr_25652 = state_25647;
(statearr_25652[(7)] = inst_25509__$1);

(statearr_25652[(8)] = inst_25508__$1);

(statearr_25652[(9)] = inst_25510__$1);

(statearr_25652[(10)] = inst_25511__$1);

(statearr_25652[(11)] = inst_25517);

return statearr_25652;
})();
var statearr_25653_25739 = state_25647__$1;
(statearr_25653_25739[(2)] = null);

(statearr_25653_25739[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (20))){
var inst_25551 = (state_25647[(12)]);
var inst_25559 = figwheel.client.file_reloading.sort_files.call(null,inst_25551);
var state_25647__$1 = state_25647;
var statearr_25654_25740 = state_25647__$1;
(statearr_25654_25740[(2)] = inst_25559);

(statearr_25654_25740[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (27))){
var state_25647__$1 = state_25647;
var statearr_25655_25741 = state_25647__$1;
(statearr_25655_25741[(2)] = null);

(statearr_25655_25741[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (1))){
var inst_25500 = (state_25647[(13)]);
var inst_25497 = before_jsload.call(null,files);
var inst_25498 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25499 = (function (){return ((function (inst_25500,inst_25497,inst_25498,state_val_25648,c__21910__auto__,map__25493,map__25493__$1,opts,before_jsload,on_jsload,reload_dependents,map__25494,map__25494__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25242_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25242_SHARP_);
});
;})(inst_25500,inst_25497,inst_25498,state_val_25648,c__21910__auto__,map__25493,map__25493__$1,opts,before_jsload,on_jsload,reload_dependents,map__25494,map__25494__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25500__$1 = cljs.core.filter.call(null,inst_25499,files);
var inst_25501 = cljs.core.not_empty.call(null,inst_25500__$1);
var state_25647__$1 = (function (){var statearr_25656 = state_25647;
(statearr_25656[(13)] = inst_25500__$1);

(statearr_25656[(14)] = inst_25498);

(statearr_25656[(15)] = inst_25497);

return statearr_25656;
})();
if(cljs.core.truth_(inst_25501)){
var statearr_25657_25742 = state_25647__$1;
(statearr_25657_25742[(1)] = (2));

} else {
var statearr_25658_25743 = state_25647__$1;
(statearr_25658_25743[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (24))){
var state_25647__$1 = state_25647;
var statearr_25659_25744 = state_25647__$1;
(statearr_25659_25744[(2)] = null);

(statearr_25659_25744[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (39))){
var inst_25601 = (state_25647[(16)]);
var state_25647__$1 = state_25647;
var statearr_25660_25745 = state_25647__$1;
(statearr_25660_25745[(2)] = inst_25601);

(statearr_25660_25745[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (46))){
var inst_25642 = (state_25647[(2)]);
var state_25647__$1 = state_25647;
var statearr_25661_25746 = state_25647__$1;
(statearr_25661_25746[(2)] = inst_25642);

(statearr_25661_25746[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (4))){
var inst_25545 = (state_25647[(2)]);
var inst_25546 = cljs.core.List.EMPTY;
var inst_25547 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25546);
var inst_25548 = (function (){return ((function (inst_25545,inst_25546,inst_25547,state_val_25648,c__21910__auto__,map__25493,map__25493__$1,opts,before_jsload,on_jsload,reload_dependents,map__25494,map__25494__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25243_SHARP_){
var and__16773__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25243_SHARP_);
if(cljs.core.truth_(and__16773__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25243_SHARP_));
} else {
return and__16773__auto__;
}
});
;})(inst_25545,inst_25546,inst_25547,state_val_25648,c__21910__auto__,map__25493,map__25493__$1,opts,before_jsload,on_jsload,reload_dependents,map__25494,map__25494__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25549 = cljs.core.filter.call(null,inst_25548,files);
var inst_25550 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25551 = cljs.core.concat.call(null,inst_25549,inst_25550);
var state_25647__$1 = (function (){var statearr_25662 = state_25647;
(statearr_25662[(17)] = inst_25545);

(statearr_25662[(12)] = inst_25551);

(statearr_25662[(18)] = inst_25547);

return statearr_25662;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_25663_25747 = state_25647__$1;
(statearr_25663_25747[(1)] = (16));

} else {
var statearr_25664_25748 = state_25647__$1;
(statearr_25664_25748[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (15))){
var inst_25535 = (state_25647[(2)]);
var state_25647__$1 = state_25647;
var statearr_25665_25749 = state_25647__$1;
(statearr_25665_25749[(2)] = inst_25535);

(statearr_25665_25749[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (21))){
var inst_25561 = (state_25647[(19)]);
var inst_25561__$1 = (state_25647[(2)]);
var inst_25562 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25561__$1);
var state_25647__$1 = (function (){var statearr_25666 = state_25647;
(statearr_25666[(19)] = inst_25561__$1);

return statearr_25666;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25647__$1,(22),inst_25562);
} else {
if((state_val_25648 === (31))){
var inst_25645 = (state_25647[(2)]);
var state_25647__$1 = state_25647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25647__$1,inst_25645);
} else {
if((state_val_25648 === (32))){
var inst_25601 = (state_25647[(16)]);
var inst_25606 = inst_25601.cljs$lang$protocol_mask$partition0$;
var inst_25607 = (inst_25606 & (64));
var inst_25608 = inst_25601.cljs$core$ISeq$;
var inst_25609 = (inst_25607) || (inst_25608);
var state_25647__$1 = state_25647;
if(cljs.core.truth_(inst_25609)){
var statearr_25667_25750 = state_25647__$1;
(statearr_25667_25750[(1)] = (35));

} else {
var statearr_25668_25751 = state_25647__$1;
(statearr_25668_25751[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (40))){
var inst_25622 = (state_25647[(20)]);
var inst_25621 = (state_25647[(2)]);
var inst_25622__$1 = cljs.core.get.call(null,inst_25621,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25623 = cljs.core.get.call(null,inst_25621,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25624 = cljs.core.not_empty.call(null,inst_25622__$1);
var state_25647__$1 = (function (){var statearr_25669 = state_25647;
(statearr_25669[(20)] = inst_25622__$1);

(statearr_25669[(21)] = inst_25623);

return statearr_25669;
})();
if(cljs.core.truth_(inst_25624)){
var statearr_25670_25752 = state_25647__$1;
(statearr_25670_25752[(1)] = (41));

} else {
var statearr_25671_25753 = state_25647__$1;
(statearr_25671_25753[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (33))){
var state_25647__$1 = state_25647;
var statearr_25672_25754 = state_25647__$1;
(statearr_25672_25754[(2)] = false);

(statearr_25672_25754[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (13))){
var inst_25521 = (state_25647[(22)]);
var inst_25525 = cljs.core.chunk_first.call(null,inst_25521);
var inst_25526 = cljs.core.chunk_rest.call(null,inst_25521);
var inst_25527 = cljs.core.count.call(null,inst_25525);
var inst_25508 = inst_25526;
var inst_25509 = inst_25525;
var inst_25510 = inst_25527;
var inst_25511 = (0);
var state_25647__$1 = (function (){var statearr_25673 = state_25647;
(statearr_25673[(7)] = inst_25509);

(statearr_25673[(8)] = inst_25508);

(statearr_25673[(9)] = inst_25510);

(statearr_25673[(10)] = inst_25511);

return statearr_25673;
})();
var statearr_25674_25755 = state_25647__$1;
(statearr_25674_25755[(2)] = null);

(statearr_25674_25755[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (22))){
var inst_25569 = (state_25647[(23)]);
var inst_25564 = (state_25647[(24)]);
var inst_25565 = (state_25647[(25)]);
var inst_25561 = (state_25647[(19)]);
var inst_25564__$1 = (state_25647[(2)]);
var inst_25565__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25564__$1);
var inst_25566 = (function (){var all_files = inst_25561;
var res_SINGLEQUOTE_ = inst_25564__$1;
var res = inst_25565__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25569,inst_25564,inst_25565,inst_25561,inst_25564__$1,inst_25565__$1,state_val_25648,c__21910__auto__,map__25493,map__25493__$1,opts,before_jsload,on_jsload,reload_dependents,map__25494,map__25494__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25244_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25244_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25569,inst_25564,inst_25565,inst_25561,inst_25564__$1,inst_25565__$1,state_val_25648,c__21910__auto__,map__25493,map__25493__$1,opts,before_jsload,on_jsload,reload_dependents,map__25494,map__25494__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25567 = cljs.core.filter.call(null,inst_25566,inst_25564__$1);
var inst_25568 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25569__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25568);
var inst_25570 = cljs.core.not_empty.call(null,inst_25569__$1);
var state_25647__$1 = (function (){var statearr_25675 = state_25647;
(statearr_25675[(23)] = inst_25569__$1);

(statearr_25675[(26)] = inst_25567);

(statearr_25675[(24)] = inst_25564__$1);

(statearr_25675[(25)] = inst_25565__$1);

return statearr_25675;
})();
if(cljs.core.truth_(inst_25570)){
var statearr_25676_25756 = state_25647__$1;
(statearr_25676_25756[(1)] = (23));

} else {
var statearr_25677_25757 = state_25647__$1;
(statearr_25677_25757[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (36))){
var state_25647__$1 = state_25647;
var statearr_25678_25758 = state_25647__$1;
(statearr_25678_25758[(2)] = false);

(statearr_25678_25758[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (41))){
var inst_25622 = (state_25647[(20)]);
var inst_25626 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_25627 = cljs.core.map.call(null,inst_25626,inst_25622);
var inst_25628 = cljs.core.pr_str.call(null,inst_25627);
var inst_25629 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_25628)].join('');
var inst_25630 = figwheel.client.utils.log.call(null,inst_25629);
var state_25647__$1 = state_25647;
var statearr_25679_25759 = state_25647__$1;
(statearr_25679_25759[(2)] = inst_25630);

(statearr_25679_25759[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (43))){
var inst_25623 = (state_25647[(21)]);
var inst_25633 = (state_25647[(2)]);
var inst_25634 = cljs.core.not_empty.call(null,inst_25623);
var state_25647__$1 = (function (){var statearr_25680 = state_25647;
(statearr_25680[(27)] = inst_25633);

return statearr_25680;
})();
if(cljs.core.truth_(inst_25634)){
var statearr_25681_25760 = state_25647__$1;
(statearr_25681_25760[(1)] = (44));

} else {
var statearr_25682_25761 = state_25647__$1;
(statearr_25682_25761[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (29))){
var inst_25601 = (state_25647[(16)]);
var inst_25569 = (state_25647[(23)]);
var inst_25567 = (state_25647[(26)]);
var inst_25564 = (state_25647[(24)]);
var inst_25565 = (state_25647[(25)]);
var inst_25561 = (state_25647[(19)]);
var inst_25597 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25600 = (function (){var all_files = inst_25561;
var res_SINGLEQUOTE_ = inst_25564;
var res = inst_25565;
var files_not_loaded = inst_25567;
var dependencies_that_loaded = inst_25569;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25601,inst_25569,inst_25567,inst_25564,inst_25565,inst_25561,inst_25597,state_val_25648,c__21910__auto__,map__25493,map__25493__$1,opts,before_jsload,on_jsload,reload_dependents,map__25494,map__25494__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25599){
var map__25683 = p__25599;
var map__25683__$1 = ((((!((map__25683 == null)))?((((map__25683.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25683.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25683):map__25683);
var namespace = cljs.core.get.call(null,map__25683__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25601,inst_25569,inst_25567,inst_25564,inst_25565,inst_25561,inst_25597,state_val_25648,c__21910__auto__,map__25493,map__25493__$1,opts,before_jsload,on_jsload,reload_dependents,map__25494,map__25494__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25601__$1 = cljs.core.group_by.call(null,inst_25600,inst_25567);
var inst_25603 = (inst_25601__$1 == null);
var inst_25604 = cljs.core.not.call(null,inst_25603);
var state_25647__$1 = (function (){var statearr_25685 = state_25647;
(statearr_25685[(16)] = inst_25601__$1);

(statearr_25685[(28)] = inst_25597);

return statearr_25685;
})();
if(inst_25604){
var statearr_25686_25762 = state_25647__$1;
(statearr_25686_25762[(1)] = (32));

} else {
var statearr_25687_25763 = state_25647__$1;
(statearr_25687_25763[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (44))){
var inst_25623 = (state_25647[(21)]);
var inst_25636 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25623);
var inst_25637 = cljs.core.pr_str.call(null,inst_25636);
var inst_25638 = [cljs.core.str("not required: "),cljs.core.str(inst_25637)].join('');
var inst_25639 = figwheel.client.utils.log.call(null,inst_25638);
var state_25647__$1 = state_25647;
var statearr_25688_25764 = state_25647__$1;
(statearr_25688_25764[(2)] = inst_25639);

(statearr_25688_25764[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (6))){
var inst_25542 = (state_25647[(2)]);
var state_25647__$1 = state_25647;
var statearr_25689_25765 = state_25647__$1;
(statearr_25689_25765[(2)] = inst_25542);

(statearr_25689_25765[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (28))){
var inst_25567 = (state_25647[(26)]);
var inst_25594 = (state_25647[(2)]);
var inst_25595 = cljs.core.not_empty.call(null,inst_25567);
var state_25647__$1 = (function (){var statearr_25690 = state_25647;
(statearr_25690[(29)] = inst_25594);

return statearr_25690;
})();
if(cljs.core.truth_(inst_25595)){
var statearr_25691_25766 = state_25647__$1;
(statearr_25691_25766[(1)] = (29));

} else {
var statearr_25692_25767 = state_25647__$1;
(statearr_25692_25767[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (25))){
var inst_25565 = (state_25647[(25)]);
var inst_25581 = (state_25647[(2)]);
var inst_25582 = cljs.core.not_empty.call(null,inst_25565);
var state_25647__$1 = (function (){var statearr_25693 = state_25647;
(statearr_25693[(30)] = inst_25581);

return statearr_25693;
})();
if(cljs.core.truth_(inst_25582)){
var statearr_25694_25768 = state_25647__$1;
(statearr_25694_25768[(1)] = (26));

} else {
var statearr_25695_25769 = state_25647__$1;
(statearr_25695_25769[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (34))){
var inst_25616 = (state_25647[(2)]);
var state_25647__$1 = state_25647;
if(cljs.core.truth_(inst_25616)){
var statearr_25696_25770 = state_25647__$1;
(statearr_25696_25770[(1)] = (38));

} else {
var statearr_25697_25771 = state_25647__$1;
(statearr_25697_25771[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (17))){
var state_25647__$1 = state_25647;
var statearr_25698_25772 = state_25647__$1;
(statearr_25698_25772[(2)] = recompile_dependents);

(statearr_25698_25772[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (3))){
var state_25647__$1 = state_25647;
var statearr_25699_25773 = state_25647__$1;
(statearr_25699_25773[(2)] = null);

(statearr_25699_25773[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (12))){
var inst_25538 = (state_25647[(2)]);
var state_25647__$1 = state_25647;
var statearr_25700_25774 = state_25647__$1;
(statearr_25700_25774[(2)] = inst_25538);

(statearr_25700_25774[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (2))){
var inst_25500 = (state_25647[(13)]);
var inst_25507 = cljs.core.seq.call(null,inst_25500);
var inst_25508 = inst_25507;
var inst_25509 = null;
var inst_25510 = (0);
var inst_25511 = (0);
var state_25647__$1 = (function (){var statearr_25701 = state_25647;
(statearr_25701[(7)] = inst_25509);

(statearr_25701[(8)] = inst_25508);

(statearr_25701[(9)] = inst_25510);

(statearr_25701[(10)] = inst_25511);

return statearr_25701;
})();
var statearr_25702_25775 = state_25647__$1;
(statearr_25702_25775[(2)] = null);

(statearr_25702_25775[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (23))){
var inst_25569 = (state_25647[(23)]);
var inst_25567 = (state_25647[(26)]);
var inst_25564 = (state_25647[(24)]);
var inst_25565 = (state_25647[(25)]);
var inst_25561 = (state_25647[(19)]);
var inst_25572 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25574 = (function (){var all_files = inst_25561;
var res_SINGLEQUOTE_ = inst_25564;
var res = inst_25565;
var files_not_loaded = inst_25567;
var dependencies_that_loaded = inst_25569;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25569,inst_25567,inst_25564,inst_25565,inst_25561,inst_25572,state_val_25648,c__21910__auto__,map__25493,map__25493__$1,opts,before_jsload,on_jsload,reload_dependents,map__25494,map__25494__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25573){
var map__25703 = p__25573;
var map__25703__$1 = ((((!((map__25703 == null)))?((((map__25703.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25703.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25703):map__25703);
var request_url = cljs.core.get.call(null,map__25703__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25569,inst_25567,inst_25564,inst_25565,inst_25561,inst_25572,state_val_25648,c__21910__auto__,map__25493,map__25493__$1,opts,before_jsload,on_jsload,reload_dependents,map__25494,map__25494__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25575 = cljs.core.reverse.call(null,inst_25569);
var inst_25576 = cljs.core.map.call(null,inst_25574,inst_25575);
var inst_25577 = cljs.core.pr_str.call(null,inst_25576);
var inst_25578 = figwheel.client.utils.log.call(null,inst_25577);
var state_25647__$1 = (function (){var statearr_25705 = state_25647;
(statearr_25705[(31)] = inst_25572);

return statearr_25705;
})();
var statearr_25706_25776 = state_25647__$1;
(statearr_25706_25776[(2)] = inst_25578);

(statearr_25706_25776[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (35))){
var state_25647__$1 = state_25647;
var statearr_25707_25777 = state_25647__$1;
(statearr_25707_25777[(2)] = true);

(statearr_25707_25777[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (19))){
var inst_25551 = (state_25647[(12)]);
var inst_25557 = figwheel.client.file_reloading.expand_files.call(null,inst_25551);
var state_25647__$1 = state_25647;
var statearr_25708_25778 = state_25647__$1;
(statearr_25708_25778[(2)] = inst_25557);

(statearr_25708_25778[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (11))){
var state_25647__$1 = state_25647;
var statearr_25709_25779 = state_25647__$1;
(statearr_25709_25779[(2)] = null);

(statearr_25709_25779[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (9))){
var inst_25540 = (state_25647[(2)]);
var state_25647__$1 = state_25647;
var statearr_25710_25780 = state_25647__$1;
(statearr_25710_25780[(2)] = inst_25540);

(statearr_25710_25780[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (5))){
var inst_25510 = (state_25647[(9)]);
var inst_25511 = (state_25647[(10)]);
var inst_25513 = (inst_25511 < inst_25510);
var inst_25514 = inst_25513;
var state_25647__$1 = state_25647;
if(cljs.core.truth_(inst_25514)){
var statearr_25711_25781 = state_25647__$1;
(statearr_25711_25781[(1)] = (7));

} else {
var statearr_25712_25782 = state_25647__$1;
(statearr_25712_25782[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (14))){
var inst_25521 = (state_25647[(22)]);
var inst_25530 = cljs.core.first.call(null,inst_25521);
var inst_25531 = figwheel.client.file_reloading.eval_body.call(null,inst_25530,opts);
var inst_25532 = cljs.core.next.call(null,inst_25521);
var inst_25508 = inst_25532;
var inst_25509 = null;
var inst_25510 = (0);
var inst_25511 = (0);
var state_25647__$1 = (function (){var statearr_25713 = state_25647;
(statearr_25713[(32)] = inst_25531);

(statearr_25713[(7)] = inst_25509);

(statearr_25713[(8)] = inst_25508);

(statearr_25713[(9)] = inst_25510);

(statearr_25713[(10)] = inst_25511);

return statearr_25713;
})();
var statearr_25714_25783 = state_25647__$1;
(statearr_25714_25783[(2)] = null);

(statearr_25714_25783[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (45))){
var state_25647__$1 = state_25647;
var statearr_25715_25784 = state_25647__$1;
(statearr_25715_25784[(2)] = null);

(statearr_25715_25784[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (26))){
var inst_25569 = (state_25647[(23)]);
var inst_25567 = (state_25647[(26)]);
var inst_25564 = (state_25647[(24)]);
var inst_25565 = (state_25647[(25)]);
var inst_25561 = (state_25647[(19)]);
var inst_25584 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25586 = (function (){var all_files = inst_25561;
var res_SINGLEQUOTE_ = inst_25564;
var res = inst_25565;
var files_not_loaded = inst_25567;
var dependencies_that_loaded = inst_25569;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25569,inst_25567,inst_25564,inst_25565,inst_25561,inst_25584,state_val_25648,c__21910__auto__,map__25493,map__25493__$1,opts,before_jsload,on_jsload,reload_dependents,map__25494,map__25494__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25585){
var map__25716 = p__25585;
var map__25716__$1 = ((((!((map__25716 == null)))?((((map__25716.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25716.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25716):map__25716);
var namespace = cljs.core.get.call(null,map__25716__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__25716__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25569,inst_25567,inst_25564,inst_25565,inst_25561,inst_25584,state_val_25648,c__21910__auto__,map__25493,map__25493__$1,opts,before_jsload,on_jsload,reload_dependents,map__25494,map__25494__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25587 = cljs.core.map.call(null,inst_25586,inst_25565);
var inst_25588 = cljs.core.pr_str.call(null,inst_25587);
var inst_25589 = figwheel.client.utils.log.call(null,inst_25588);
var inst_25590 = (function (){var all_files = inst_25561;
var res_SINGLEQUOTE_ = inst_25564;
var res = inst_25565;
var files_not_loaded = inst_25567;
var dependencies_that_loaded = inst_25569;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25569,inst_25567,inst_25564,inst_25565,inst_25561,inst_25584,inst_25586,inst_25587,inst_25588,inst_25589,state_val_25648,c__21910__auto__,map__25493,map__25493__$1,opts,before_jsload,on_jsload,reload_dependents,map__25494,map__25494__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25569,inst_25567,inst_25564,inst_25565,inst_25561,inst_25584,inst_25586,inst_25587,inst_25588,inst_25589,state_val_25648,c__21910__auto__,map__25493,map__25493__$1,opts,before_jsload,on_jsload,reload_dependents,map__25494,map__25494__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25591 = setTimeout(inst_25590,(10));
var state_25647__$1 = (function (){var statearr_25718 = state_25647;
(statearr_25718[(33)] = inst_25584);

(statearr_25718[(34)] = inst_25589);

return statearr_25718;
})();
var statearr_25719_25785 = state_25647__$1;
(statearr_25719_25785[(2)] = inst_25591);

(statearr_25719_25785[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (16))){
var state_25647__$1 = state_25647;
var statearr_25720_25786 = state_25647__$1;
(statearr_25720_25786[(2)] = reload_dependents);

(statearr_25720_25786[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (38))){
var inst_25601 = (state_25647[(16)]);
var inst_25618 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25601);
var state_25647__$1 = state_25647;
var statearr_25721_25787 = state_25647__$1;
(statearr_25721_25787[(2)] = inst_25618);

(statearr_25721_25787[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (30))){
var state_25647__$1 = state_25647;
var statearr_25722_25788 = state_25647__$1;
(statearr_25722_25788[(2)] = null);

(statearr_25722_25788[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (10))){
var inst_25521 = (state_25647[(22)]);
var inst_25523 = cljs.core.chunked_seq_QMARK_.call(null,inst_25521);
var state_25647__$1 = state_25647;
if(inst_25523){
var statearr_25723_25789 = state_25647__$1;
(statearr_25723_25789[(1)] = (13));

} else {
var statearr_25724_25790 = state_25647__$1;
(statearr_25724_25790[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (18))){
var inst_25555 = (state_25647[(2)]);
var state_25647__$1 = state_25647;
if(cljs.core.truth_(inst_25555)){
var statearr_25725_25791 = state_25647__$1;
(statearr_25725_25791[(1)] = (19));

} else {
var statearr_25726_25792 = state_25647__$1;
(statearr_25726_25792[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (42))){
var state_25647__$1 = state_25647;
var statearr_25727_25793 = state_25647__$1;
(statearr_25727_25793[(2)] = null);

(statearr_25727_25793[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (37))){
var inst_25613 = (state_25647[(2)]);
var state_25647__$1 = state_25647;
var statearr_25728_25794 = state_25647__$1;
(statearr_25728_25794[(2)] = inst_25613);

(statearr_25728_25794[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25648 === (8))){
var inst_25521 = (state_25647[(22)]);
var inst_25508 = (state_25647[(8)]);
var inst_25521__$1 = cljs.core.seq.call(null,inst_25508);
var state_25647__$1 = (function (){var statearr_25729 = state_25647;
(statearr_25729[(22)] = inst_25521__$1);

return statearr_25729;
})();
if(inst_25521__$1){
var statearr_25730_25795 = state_25647__$1;
(statearr_25730_25795[(1)] = (10));

} else {
var statearr_25731_25796 = state_25647__$1;
(statearr_25731_25796[(1)] = (11));

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
}
});})(c__21910__auto__,map__25493,map__25493__$1,opts,before_jsload,on_jsload,reload_dependents,map__25494,map__25494__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__21798__auto__,c__21910__auto__,map__25493,map__25493__$1,opts,before_jsload,on_jsload,reload_dependents,map__25494,map__25494__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21799__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21799__auto____0 = (function (){
var statearr_25735 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25735[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21799__auto__);

(statearr_25735[(1)] = (1));

return statearr_25735;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21799__auto____1 = (function (state_25647){
while(true){
var ret_value__21800__auto__ = (function (){try{while(true){
var result__21801__auto__ = switch__21798__auto__.call(null,state_25647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21801__auto__;
}
break;
}
}catch (e25736){if((e25736 instanceof Object)){
var ex__21802__auto__ = e25736;
var statearr_25737_25797 = state_25647;
(statearr_25737_25797[(5)] = ex__21802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25736;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25798 = state_25647;
state_25647 = G__25798;
continue;
} else {
return ret_value__21800__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21799__auto__ = function(state_25647){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21799__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21799__auto____1.call(this,state_25647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21799__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21799__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21799__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21799__auto__;
})()
;})(switch__21798__auto__,c__21910__auto__,map__25493,map__25493__$1,opts,before_jsload,on_jsload,reload_dependents,map__25494,map__25494__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21912__auto__ = (function (){var statearr_25738 = f__21911__auto__.call(null);
(statearr_25738[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21910__auto__);

return statearr_25738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21912__auto__);
});})(c__21910__auto__,map__25493,map__25493__$1,opts,before_jsload,on_jsload,reload_dependents,map__25494,map__25494__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21910__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25801,link){
var map__25804 = p__25801;
var map__25804__$1 = ((((!((map__25804 == null)))?((((map__25804.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25804.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25804):map__25804);
var file = cljs.core.get.call(null,map__25804__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__25804,map__25804__$1,file){
return (function (p1__25799_SHARP_,p2__25800_SHARP_){
if(cljs.core._EQ_.call(null,p1__25799_SHARP_,p2__25800_SHARP_)){
return p1__25799_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__25804,map__25804__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25810){
var map__25811 = p__25810;
var map__25811__$1 = ((((!((map__25811 == null)))?((((map__25811.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25811.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25811):map__25811);
var match_length = cljs.core.get.call(null,map__25811__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25811__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25806_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25806_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args25813 = [];
var len__17843__auto___25816 = arguments.length;
var i__17844__auto___25817 = (0);
while(true){
if((i__17844__auto___25817 < len__17843__auto___25816)){
args25813.push((arguments[i__17844__auto___25817]));

var G__25818 = (i__17844__auto___25817 + (1));
i__17844__auto___25817 = G__25818;
continue;
} else {
}
break;
}

var G__25815 = args25813.length;
switch (G__25815) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25813.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__25820_SHARP_,p2__25821_SHARP_){
return cljs.core.assoc.call(null,p1__25820_SHARP_,cljs.core.get.call(null,p2__25821_SHARP_,key),p2__25821_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__25822){
var map__25825 = p__25822;
var map__25825__$1 = ((((!((map__25825 == null)))?((((map__25825.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25825.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25825):map__25825);
var f_data = map__25825__$1;
var file = cljs.core.get.call(null,map__25825__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25827,files_msg){
var map__25834 = p__25827;
var map__25834__$1 = ((((!((map__25834 == null)))?((((map__25834.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25834.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25834):map__25834);
var opts = map__25834__$1;
var on_cssload = cljs.core.get.call(null,map__25834__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__25836_25840 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25837_25841 = null;
var count__25838_25842 = (0);
var i__25839_25843 = (0);
while(true){
if((i__25839_25843 < count__25838_25842)){
var f_25844 = cljs.core._nth.call(null,chunk__25837_25841,i__25839_25843);
figwheel.client.file_reloading.reload_css_file.call(null,f_25844);

var G__25845 = seq__25836_25840;
var G__25846 = chunk__25837_25841;
var G__25847 = count__25838_25842;
var G__25848 = (i__25839_25843 + (1));
seq__25836_25840 = G__25845;
chunk__25837_25841 = G__25846;
count__25838_25842 = G__25847;
i__25839_25843 = G__25848;
continue;
} else {
var temp__4425__auto___25849 = cljs.core.seq.call(null,seq__25836_25840);
if(temp__4425__auto___25849){
var seq__25836_25850__$1 = temp__4425__auto___25849;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25836_25850__$1)){
var c__17588__auto___25851 = cljs.core.chunk_first.call(null,seq__25836_25850__$1);
var G__25852 = cljs.core.chunk_rest.call(null,seq__25836_25850__$1);
var G__25853 = c__17588__auto___25851;
var G__25854 = cljs.core.count.call(null,c__17588__auto___25851);
var G__25855 = (0);
seq__25836_25840 = G__25852;
chunk__25837_25841 = G__25853;
count__25838_25842 = G__25854;
i__25839_25843 = G__25855;
continue;
} else {
var f_25856 = cljs.core.first.call(null,seq__25836_25850__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_25856);

var G__25857 = cljs.core.next.call(null,seq__25836_25850__$1);
var G__25858 = null;
var G__25859 = (0);
var G__25860 = (0);
seq__25836_25840 = G__25857;
chunk__25837_25841 = G__25858;
count__25838_25842 = G__25859;
i__25839_25843 = G__25860;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__25834,map__25834__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__25834,map__25834__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map