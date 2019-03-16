var requirejs,require,define;!function(global){var req,s,head,baseElement,dataMain,src,interactiveScript,currentlyAddingScript,mainScript,subPath,version="2.1.8",commentRegExp=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,cjsRequireRegExp=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,jsSuffixRegExp=/\.js$/,currDirRegExp=/^\.\//,op=Object.prototype,ostring=op.toString,hasOwn=op.hasOwnProperty,ap=Array.prototype,apsp=ap.splice,isBrowser=!("undefined"==typeof window||!navigator||!window.document),isWebWorker=!isBrowser&&"undefined"!=typeof importScripts,readyRegExp=isBrowser&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,defContextName="_",isOpera="undefined"!=typeof opera&&"[object Opera]"===opera.toString(),contexts={},cfg={},globalDefQueue=[],useInteractive=!1;function isFunction(e){return"[object Function]"===ostring.call(e)}function isArray(e){return"[object Array]"===ostring.call(e)}function each(e,t){var i;if(e)for(i=0;i<e.length&&(!e[i]||!t(e[i],i,e));i+=1);}function eachReverse(e,t){var i;if(e)for(i=e.length-1;i>-1&&(!e[i]||!t(e[i],i,e));i-=1);}function hasProp(e,t){return hasOwn.call(e,t)}function getOwn(e,t){return hasProp(e,t)&&e[t]}function eachProp(e,t){var i;for(i in e)if(hasProp(e,i)&&t(e[i],i))break}function mixin(e,t,i,r){return t&&eachProp(t,function(t,n){!i&&hasProp(e,n)||(r&&"string"!=typeof t?(e[n]||(e[n]={}),mixin(e[n],t,i,r)):e[n]=t)}),e}function bind(e,t){return function(){return t.apply(e,arguments)}}function scripts(){return document.getElementsByTagName("script")}function defaultOnError(e){throw e}function getGlobal(e){if(!e)return e;var t=global;return each(e.split("."),function(e){t=t[e]}),t}function makeError(e,t,i,r){var n=new Error(t+"\nhttp://requirejs.org/docs/errors.html#"+e);return n.requireType=e,n.requireModules=r,i&&(n.originalError=i),n}if(void 0===define){if(void 0!==requirejs){if(isFunction(requirejs))return;cfg=requirejs,requirejs=void 0}void 0===require||isFunction(require)||(cfg=require,require=void 0),req=requirejs=function(e,t,i,r){var n,a,o=defContextName;return isArray(e)||"string"==typeof e||(a=e,isArray(t)?(e=t,t=i,i=r):e=[]),a&&a.context&&(o=a.context),(n=getOwn(contexts,o))||(n=contexts[o]=req.s.newContext(o)),a&&n.configure(a),n.require(e,t,i)},req.config=function(e){return req(e)},req.nextTick="undefined"!=typeof setTimeout?function(e){setTimeout(e,4)}:function(e){e()},require||(require=req),req.version=version,req.jsExtRegExp=/^\/|:|\?|\.js$/,req.isBrowser=isBrowser,s=req.s={contexts:contexts,newContext:newContext},req({}),each(["toUrl","undef","defined","specified"],function(e){req[e]=function(){var t=contexts[defContextName];return t.require[e].apply(t,arguments)}}),isBrowser&&(head=s.head=document.getElementsByTagName("head")[0],baseElement=document.getElementsByTagName("base")[0],baseElement&&(head=s.head=baseElement.parentNode)),req.onError=defaultOnError,req.createNode=function(e,t,i){var r=e.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script");return r.type=e.scriptType||"text/javascript",r.charset="utf-8",r.async=!0,r},req.load=function(e,t,i){var r,n=e&&e.config||{};if(isBrowser)return(r=req.createNode(n,t,i)).setAttribute("data-requirecontext",e.contextName),r.setAttribute("data-requiremodule",t),!r.attachEvent||r.attachEvent.toString&&r.attachEvent.toString().indexOf("[native code")<0||isOpera?(r.addEventListener("load",e.onScriptLoad,!1),r.addEventListener("error",e.onScriptError,!1)):(useInteractive=!0,r.attachEvent("onreadystatechange",e.onScriptLoad)),r.src=i,currentlyAddingScript=r,baseElement?head.insertBefore(r,baseElement):head.appendChild(r),currentlyAddingScript=null,r;if(isWebWorker)try{importScripts(i),e.completeLoad(t)}catch(r){e.onError(makeError("importscripts","importScripts failed for "+t+" at "+i,r,[t]))}},isBrowser&&eachReverse(scripts(),function(e){if(head||(head=e.parentNode),dataMain=e.getAttribute("data-main"))return mainScript=dataMain,cfg.baseUrl||(src=mainScript.split("/"),mainScript=src.pop(),subPath=src.length?src.join("/")+"/":"./",cfg.baseUrl=subPath),mainScript=mainScript.replace(jsSuffixRegExp,""),req.jsExtRegExp.test(mainScript)&&(mainScript=dataMain),cfg.deps=cfg.deps?cfg.deps.concat(mainScript):[mainScript],!0}),define=function(e,t,i){var r,n;"string"!=typeof e&&(i=t,t=e,e=null),isArray(t)||(i=t,t=null),!t&&isFunction(i)&&(t=[],i.length&&(i.toString().replace(commentRegExp,"").replace(cjsRequireRegExp,function(e,i){t.push(i)}),t=(1===i.length?["require"]:["require","exports","module"]).concat(t))),useInteractive&&(r=currentlyAddingScript||getInteractiveScript())&&(e||(e=r.getAttribute("data-requiremodule")),n=contexts[r.getAttribute("data-requirecontext")]),(n?n.defQueue:globalDefQueue).push([e,t,i])},define.amd={jQuery:!0},req.exec=function(text){return eval(text)},req(cfg)}function newContext(e){var t,i,r,n,a,o={waitSeconds:7,baseUrl:"./",paths:{},pkgs:{},shim:{},config:{}},s={},c={},u={},p=[],d={},f={},l=1,h=1;function m(e,t,i){var r,n,a,s,c,u,p,d,f,l,h,m=t&&t.split("/"),g=o.map,v=g&&g["*"];if(e&&"."===e.charAt(0)&&(t?(function(e){var t,i;for(t=0;e[t];t+=1)if("."===(i=e[t]))e.splice(t,1),t-=1;else if(".."===i){if(1===t&&(".."===e[2]||".."===e[0]))break;t>0&&(e.splice(t-1,2),t-=2)}}(e=(getOwn(o.pkgs,t)?m=[t]:m.slice(0,m.length-1)).concat(e.split("/"))),n=getOwn(o.pkgs,r=e[0]),e=e.join("/"),n&&e===r+"/"+n.main&&(e=r)):0===e.indexOf("./")&&(e=e.substring(2))),i&&g&&(m||v)){for(c=(s=e.split("/")).length;c>0;c-=1){if(p=s.slice(0,c).join("/"),m)for(u=m.length;u>0;u-=1)if((a=getOwn(g,m.slice(0,u).join("/")))&&(a=getOwn(a,p))){d=a,f=c;break}if(d)break;!l&&v&&getOwn(v,p)&&(l=getOwn(v,p),h=c)}!d&&l&&(d=l,f=h),d&&(s.splice(0,f,d),e=s.join("/"))}return e}function g(e){isBrowser&&each(scripts(),function(t){if(t.getAttribute("data-requiremodule")===e&&t.getAttribute("data-requirecontext")===r.contextName)return t.parentNode.removeChild(t),!0})}function v(e){var t=getOwn(o.paths,e);if(t&&isArray(t)&&t.length>1)return g(e),t.shift(),r.require.undef(e),r.require([e]),!0}function x(e){var t,i=e?e.indexOf("!"):-1;return i>-1&&(t=e.substring(0,i),e=e.substring(i+1,e.length)),[t,e]}function b(e,t,i,n){var a,o,s,c,u=null,p=t?t.name:null,f=e,g=!0,v="";return e||(g=!1,e="_@r"+(l+=1)),u=(c=x(e))[0],e=c[1],u&&(u=m(u,p,n),o=getOwn(d,u)),e&&(u?v=o&&o.normalize?o.normalize(e,function(e){return m(e,p,n)}):m(e,p,n):(u=(c=x(v=m(e,p,n)))[0],v=c[1],i=!0,a=r.nameToUrl(v))),{prefix:u,name:v,parentMap:t,unnormalized:!!(s=!u||o||i?"":"_unnormalized"+(h+=1)),url:a,originalName:f,isDefine:g,id:(u?u+"!"+v:v)+s}}function q(e){var t=e.id,i=getOwn(s,t);return i||(i=s[t]=new r.Module(e)),i}function E(e,t,i){var r=e.id,n=getOwn(s,r);!hasProp(d,r)||n&&!n.defineEmitComplete?(n=q(e)).error&&"error"===t?i(n.error):n.on(t,i):"defined"===t&&i(d[r])}function w(e,t){var i=e.requireModules,r=!1;t?t(e):(each(i,function(t){var i=getOwn(s,t);i&&(i.error=e,i.events.error&&(r=!0,i.emit("error",e)))}),r||req.onError(e))}function y(){globalDefQueue.length&&(apsp.apply(p,[p.length-1,0].concat(globalDefQueue)),globalDefQueue=[])}function k(e){delete s[e],delete c[e]}function S(){var e,i,n,u,p=1e3*o.waitSeconds,f=p&&r.startTime+p<(new Date).getTime(),l=[],h=[],m=!1,x=!0;if(!t){if(t=!0,eachProp(c,function(t){if(e=t.map,i=e.id,t.enabled&&(e.isDefine||h.push(t),!t.error))if(!t.inited&&f)v(i)?(u=!0,m=!0):(l.push(i),g(i));else if(!t.inited&&t.fetched&&e.isDefine&&(m=!0,!e.prefix))return x=!1}),f&&l.length)return(n=makeError("timeout","Load timeout for modules: "+l,null,l)).contextName=r.contextName,w(n);x&&each(h,function(e){!function e(t,i,r){var n=t.map.id;t.error?t.emit("error",t.error):(i[n]=!0,each(t.depMaps,function(n,a){var o=n.id,c=getOwn(s,o);!c||t.depMatched[a]||r[o]||(getOwn(i,o)?(t.defineDep(a,d[o]),t.check()):e(c,i,r))}),r[n]=!0)}(e,{},{})}),f&&!u||!m||!isBrowser&&!isWebWorker||a||(a=setTimeout(function(){a=0,S()},50)),t=!1}}function O(e){hasProp(d,e[0])||q(b(e[0],null,!0)).init(e[1],e[2])}function M(e,t,i,r){e.detachEvent&&!isOpera?r&&e.detachEvent(r,t):e.removeEventListener(i,t,!1)}function j(e){var t=e.currentTarget||e.srcElement;return M(t,r.onScriptLoad,"load","onreadystatechange"),M(t,r.onScriptError,"error"),{node:t,id:t&&t.getAttribute("data-requiremodule")}}function P(){var e;for(y();p.length;){if(null===(e=p.shift())[0])return w(makeError("mismatch","Mismatched anonymous define() module: "+e[e.length-1]));O(e)}}return n={require:function(e){return e.require?e.require:e.require=r.makeRequire(e.map)},exports:function(e){if(e.usingExports=!0,e.map.isDefine)return e.exports?e.exports:e.exports=d[e.map.id]={}},module:function(e){return e.module?e.module:e.module={id:e.map.id,uri:e.map.url,config:function(){var t=getOwn(o.pkgs,e.map.id);return getOwn(o.config,t?e.map.id+"/"+t.main:e.map.id)||{}},exports:d[e.map.id]}}},(i=function(e){this.events=getOwn(u,e.id)||{},this.map=e,this.shim=getOwn(o.shim,e.id),this.depExports=[],this.depMaps=[],this.depMatched=[],this.pluginMaps={},this.depCount=0}).prototype={init:function(e,t,i,r){r=r||{},this.inited||(this.factory=t,i?this.on("error",i):this.events.error&&(i=bind(this,function(e){this.emit("error",e)})),this.depMaps=e&&e.slice(0),this.errback=i,this.inited=!0,this.ignore=r.ignore,r.enabled||this.enabled?this.enable():this.check())},defineDep:function(e,t){this.depMatched[e]||(this.depMatched[e]=!0,this.depCount-=1,this.depExports[e]=t)},fetch:function(){if(!this.fetched){this.fetched=!0,r.startTime=(new Date).getTime();var e=this.map;if(!this.shim)return e.prefix?this.callPlugin():this.load();r.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],bind(this,function(){return e.prefix?this.callPlugin():this.load()}))}},load:function(){var e=this.map.url;f[e]||(f[e]=!0,r.load(this.map.id,e))},check:function(){if(this.enabled&&!this.enabling){var e,t,i=this.map.id,n=this.depExports,a=this.exports,o=this.factory;if(this.inited){if(this.error)this.emit("error",this.error);else if(!this.defining){if(this.defining=!0,this.depCount<1&&!this.defined){if(isFunction(o)){if(this.events.error&&this.map.isDefine||req.onError!==defaultOnError)try{a=r.execCb(i,o,n,a)}catch(t){e=t}else a=r.execCb(i,o,n,a);if(this.map.isDefine&&((t=this.module)&&void 0!==t.exports&&t.exports!==this.exports?a=t.exports:void 0===a&&this.usingExports&&(a=this.exports)),e)return e.requireMap=this.map,e.requireModules=this.map.isDefine?[this.map.id]:null,e.requireType=this.map.isDefine?"define":"require",w(this.error=e)}else a=o;this.exports=a,this.map.isDefine&&!this.ignore&&(d[i]=a,req.onResourceLoad&&req.onResourceLoad(r,this.map,this.depMaps)),k(i),this.defined=!0}this.defining=!1,this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}else this.fetch()}},callPlugin:function(){var e=this.map,t=e.id,i=b(e.prefix);this.depMaps.push(i),E(i,"defined",bind(this,function(i){var n,a,c,u=this.map.name,p=this.map.parentMap?this.map.parentMap.name:null,d=r.makeRequire(e.parentMap,{enableBuildCallback:!0});if(this.map.unnormalized)return i.normalize&&(u=i.normalize(u,function(e){return m(e,p,!0)})||""),E(a=b(e.prefix+"!"+u,this.map.parentMap),"defined",bind(this,function(e){this.init([],function(){return e},null,{enabled:!0,ignore:!0})})),void((c=getOwn(s,a.id))&&(this.depMaps.push(a),this.events.error&&c.on("error",bind(this,function(e){this.emit("error",e)})),c.enable()));(n=bind(this,function(e){this.init([],function(){return e},null,{enabled:!0})})).error=bind(this,function(e){this.inited=!0,this.error=e,e.requireModules=[t],eachProp(s,function(e){0===e.map.id.indexOf(t+"_unnormalized")&&k(e.map.id)}),w(e)}),n.fromText=bind(this,function(i,a){var s=e.name,c=b(s),u=useInteractive;a&&(i=a),u&&(useInteractive=!1),q(c),hasProp(o.config,t)&&(o.config[s]=o.config[t]);try{req.exec(i)}catch(e){return w(makeError("fromtexteval","fromText eval for "+t+" failed: "+e,e,[t]))}u&&(useInteractive=!0),this.depMaps.push(c),r.completeLoad(s),d([s],n)}),i.load(e.name,d,n,o)})),r.enable(i,this),this.pluginMaps[i.id]=i},enable:function(){c[this.map.id]=this,this.enabled=!0,this.enabling=!0,each(this.depMaps,bind(this,function(e,t){var i,a,o;if("string"==typeof e){if(e=b(e,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap),this.depMaps[t]=e,o=getOwn(n,e.id))return void(this.depExports[t]=o(this));this.depCount+=1,E(e,"defined",bind(this,function(e){this.defineDep(t,e),this.check()})),this.errback&&E(e,"error",bind(this,this.errback))}i=e.id,a=s[i],hasProp(n,i)||!a||a.enabled||r.enable(e,this)})),eachProp(this.pluginMaps,bind(this,function(e){var t=getOwn(s,e.id);t&&!t.enabled&&r.enable(e,this)})),this.enabling=!1,this.check()},on:function(e,t){var i=this.events[e];i||(i=this.events[e]=[]),i.push(t)},emit:function(e,t){each(this.events[e],function(e){e(t)}),"error"===e&&delete this.events[e]}},(r={config:o,contextName:e,registry:s,defined:d,urlFetched:f,defQueue:p,Module:i,makeModuleMap:b,nextTick:req.nextTick,onError:w,configure:function(e){e.baseUrl&&"/"!==e.baseUrl.charAt(e.baseUrl.length-1)&&(e.baseUrl+="/");var t=o.pkgs,i=o.shim,n={paths:!0,config:!0,map:!0};eachProp(e,function(e,t){n[t]?"map"===t?(o.map||(o.map={}),mixin(o[t],e,!0,!0)):mixin(o[t],e,!0):o[t]=e}),e.shim&&(eachProp(e.shim,function(e,t){isArray(e)&&(e={deps:e}),!e.exports&&!e.init||e.exportsFn||(e.exportsFn=r.makeShimExports(e)),i[t]=e}),o.shim=i),e.packages&&(each(e.packages,function(e){var i;i=(e="string"==typeof e?{name:e}:e).location,t[e.name]={name:e.name,location:i||e.name,main:(e.main||"main").replace(currDirRegExp,"").replace(jsSuffixRegExp,"")}}),o.pkgs=t),eachProp(s,function(e,t){e.inited||e.map.unnormalized||(e.map=b(t))}),(e.deps||e.callback)&&r.require(e.deps||[],e.callback)},makeShimExports:function(e){return function(){var t;return e.init&&(t=e.init.apply(global,arguments)),t||e.exports&&getGlobal(e.exports)}},makeRequire:function(t,i){function a(o,c,u){var p,f;return i.enableBuildCallback&&c&&isFunction(c)&&(c.__requireJsBuild=!0),"string"==typeof o?isFunction(c)?w(makeError("requireargs","Invalid require call"),u):t&&hasProp(n,o)?n[o](s[t.id]):req.get?req.get(r,o,t,a):(p=b(o,t,!1,!0).id,hasProp(d,p)?d[p]:w(makeError("notloaded",'Module name "'+p+'" has not been loaded yet for context: '+e+(t?"":". Use require([])")))):(P(),r.nextTick(function(){P(),(f=q(b(null,t))).skipMap=i.skipMap,f.init(o,c,u,{enabled:!0}),S()}),a)}return i=i||{},mixin(a,{isBrowser:isBrowser,toUrl:function(e){var i,n=e.lastIndexOf("."),a=e.split("/")[0];return-1!==n&&(!("."===a||".."===a)||n>1)&&(i=e.substring(n,e.length),e=e.substring(0,n)),r.nameToUrl(m(e,t&&t.id,!0),i,!0)},defined:function(e){return hasProp(d,b(e,t,!1,!0).id)},specified:function(e){return e=b(e,t,!1,!0).id,hasProp(d,e)||hasProp(s,e)}}),t||(a.undef=function(e){y();var i=b(e,t,!0),r=getOwn(s,e);delete d[e],delete f[i.url],delete u[e],r&&(r.events.defined&&(u[e]=r.events),k(e))}),a},enable:function(e){getOwn(s,e.id)&&q(e).enable()},completeLoad:function(e){var t,i,r,n=getOwn(o.shim,e)||{},a=n.exports;for(y();p.length;){if(null===(i=p.shift())[0]){if(i[0]=e,t)break;t=!0}else i[0]===e&&(t=!0);O(i)}if(r=getOwn(s,e),!t&&!hasProp(d,e)&&r&&!r.inited){if(!(!o.enforceDefine||a&&getGlobal(a)))return v(e)?void 0:w(makeError("nodefine","No define call for "+e,null,[e]));O([e,n.deps||[],n.exportsFn])}S()},nameToUrl:function(e,t,i){var r,n,a,s,c,u,p,d,f;if(req.jsExtRegExp.test(e))d=e+(t||"");else{for(r=o.paths,n=o.pkgs,u=(c=e.split("/")).length;u>0;u-=1){if(a=getOwn(n,p=c.slice(0,u).join("/")),f=getOwn(r,p)){isArray(f)&&(f=f[0]),c.splice(0,u,f);break}if(a){s=e===a.name?a.location+"/"+a.main:a.location,c.splice(0,u,s);break}}d=c.join("/"),d=("/"===(d+=t||(/\?/.test(d)||i?"":".js")).charAt(0)||d.match(/^[\w\+\.\-]+:/)?"":o.baseUrl)+d}return o.urlArgs?d+(-1===d.indexOf("?")?"?":"&")+o.urlArgs:d},load:function(e,t){req.load(r,e,t)},execCb:function(e,t,i,r){return t.apply(r,i)},onScriptLoad:function(e){if("load"===e.type||readyRegExp.test((e.currentTarget||e.srcElement).readyState)){interactiveScript=null;var t=j(e);r.completeLoad(t.id)}},onScriptError:function(e){var t=j(e);if(!v(t.id))return w(makeError("scripterror","Script error for: "+t.id,e,[t.id]))}}).require=r.makeRequire(),r}function getInteractiveScript(){return interactiveScript&&"interactive"===interactiveScript.readyState?interactiveScript:(eachReverse(scripts(),function(e){if("interactive"===e.readyState)return interactiveScript=e}),interactiveScript)}}(this);