/*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cu(a){if(!cj[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),b.appendChild(ck);if(!cl||!ck.createElement)cl=(ck.contentWindow||ck.contentDocument).document,cl.write((f.support.boxModel?"<!doctype html>":"")+"<html><body>"),cl.close();d=cl.createElement(a),cl.body.appendChild(d),e=f.css(d,"display"),b.removeChild(ck)}cj[a]=e}return cj[a]}function ct(a,b){var c={};f.each(cp.concat.apply([],cp.slice(0,b)),function(){c[this]=a});return c}function cs(){cq=b}function cr(){setTimeout(cs,0);return cq=f.now()}function ci(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ch(){try{return new a.XMLHttpRequest}catch(b){}}function cb(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function ca(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function b_(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bD.test(a)?d(a,e):b_(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&f.type(b)==="object")for(var e in b)b_(a+"["+e+"]",b[e],c,d);else d(a,b)}function b$(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function bZ(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bS,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bZ(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bZ(a,c,d,e,"*",g));return l}function bY(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bO),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bB(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?1:0,g=4;if(d>0){if(c!=="border")for(;e<g;e+=2)c||(d-=parseFloat(f.css(a,"padding"+bx[e]))||0),c==="margin"?d+=parseFloat(f.css(a,c+bx[e]))||0:d-=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0;return d+"px"}d=by(a,b);if(d<0||d==null)d=a.style[b];if(bt.test(d))return d;d=parseFloat(d)||0;if(c)for(;e<g;e+=2)d+=parseFloat(f.css(a,"padding"+bx[e]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+bx[e]))||0);return d+"px"}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;b.nodeType===1&&(b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?b.outerHTML=a.outerHTML:c!=="input"||a.type!=="checkbox"&&a.type!=="radio"?c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text):(a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value)),b.removeAttribute(f.expando),b.removeAttribute("_submit_attached"),b.removeAttribute("_change_attached"))}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c,i[c][d])}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?+d:j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){if(typeof c!="string"||!c)return null;var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h,i){var j,k=d==null,l=0,m=a.length;if(d&&typeof d=="object"){for(l in d)e.access(a,c,l,d[l],1,h,f);g=1}else if(f!==b){j=i===b&&e.isFunction(f),k&&(j?(j=c,c=function(a,b,c){return j.call(e(a),c)}):(c.call(a,f),c=null));if(c)for(;l<m;l++)c(a[l],d,j?f.call(a[l],l,c(a[l],d)):f,i);g=1}return g?a:k?c.call(a):m?c(a[0],d):h},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m,n=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?n(g):h==="function"&&(!a.unique||!p.has(g))&&c.push(g)},o=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,j=!0,m=k||0,k=0,l=c.length;for(;c&&m<l;m++)if(c[m].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}j=!1,c&&(a.once?e===!0?p.disable():c=[]:d&&d.length&&(e=d.shift(),p.fireWith(e[0],e[1])))},p={add:function(){if(c){var a=c.length;n(arguments),j?l=c.length:e&&e!==!0&&(k=a,o(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){j&&f<=l&&(l--,f<=m&&m--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&p.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(j?a.once||d.push([b,c]):(!a.once||!e)&&o(b,c));return this},fire:function(){p.fireWith(this,arguments);return this},fired:function(){return!!i}};return p};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p=c.createElement("div"),q=c.documentElement;p.setAttribute("className","t"),p.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=p.getElementsByTagName("*"),e=p.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=p.getElementsByTagName("input")[0],b={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:p.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0},f.boxModel=b.boxModel=c.compatMode==="CSS1Compat",i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete p.test}catch(r){b.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",function(){b.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),i.setAttribute("name","t"),p.appendChild(i),j=c.createDocumentFragment(),j.appendChild(p.lastChild),b.checkClone=j.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,j.removeChild(i),j.appendChild(p);if(p.attachEvent)for(n in{submit:1,change:1,focusin:1})m="on"+n,o=m in p,o||(p.setAttribute(m,"return;"),o=typeof p[m]=="function"),b[n+"Bubbles"]=o;j.removeChild(p),j=g=h=p=i=null,f(function(){var d,e,g,h,i,j,l,m,n,q,r,s,t,u=c.getElementsByTagName("body")[0];!u||(m=1,t="padding:0;margin:0;border:",r="position:absolute;top:0;left:0;width:1px;height:1px;",s=t+"0;visibility:hidden;",n="style='"+r+t+"5px solid #000;",q="<div "+n+"display:block;'><div style='"+t+"0;display:block;overflow:hidden;'></div></div>"+"<table "+n+"' cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",d=c.createElement("div"),d.style.cssText=s+"width:0;height:0;position:static;top:0;margin-top:"+m+"px",u.insertBefore(d,u.firstChild),p=c.createElement("div"),d.appendChild(p),p.innerHTML="<table><tr><td style='"+t+"0;display:none'></td><td>t</td></tr></table>",k=p.getElementsByTagName("td"),o=k[0].offsetHeight===0,k[0].style.display="",k[1].style.display="none",b.reliableHiddenOffsets=o&&k[0].offsetHeight===0,a.getComputedStyle&&(p.innerHTML="",l=c.createElement("div"),l.style.width="0",l.style.marginRight="0",p.style.width="2px",p.appendChild(l),b.reliableMarginRight=(parseInt((a.getComputedStyle(l,null)||{marginRight:0}).marginRight,10)||0)===0),typeof p.style.zoom!="undefined"&&(p.innerHTML="",p.style.width=p.style.padding="1px",p.style.border=0,p.style.overflow="hidden",p.style.display="inline",p.style.zoom=1,b.inlineBlockNeedsLayout=p.offsetWidth===3,p.style.display="block",p.style.overflow="visible",p.innerHTML="<div style='width:5px;'></div>",b.shrinkWrapBlocks=p.offsetWidth!==3),p.style.cssText=r+s,p.innerHTML=q,e=p.firstChild,g=e.firstChild,i=e.nextSibling.firstChild.firstChild,j={doesNotAddBorder:g.offsetTop!==5,doesAddBorderForTableAndCells:i.offsetTop===5},g.style.position="fixed",g.style.top="20px",j.fixedPosition=g.offsetTop===20||g.offsetTop===15,g.style.position=g.style.top="",e.style.overflow="hidden",e.style.position="relative",j.subtractsBorderForOverflowNotVisible=g.offsetTop===-5,j.doesNotIncludeMarginInBodyOffset=u.offsetTop!==m,a.getComputedStyle&&(p.style.marginTop="1%",b.pixelMargin=(a.getComputedStyle(p,null)||{marginTop:0}).marginTop!=="1%"),typeof d.style.zoom!="undefined"&&(d.style.zoom=1),u.removeChild(d),l=p=d=null,f.extend(b,j))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h,i,j=this[0],k=0,m=null;if(a===b){if(this.length){m=f.data(j);if(j.nodeType===1&&!f._data(j,"parsedAttrs")){g=j.attributes;for(i=g.length;k<i;k++)h=g[k].name,h.indexOf("data-")===0&&(h=f.camelCase(h.substring(5)),l(j,h,m[h]));f._data(j,"parsedAttrs",!0)}}return m}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!";return f.access(this,function(c){if(c===b){m=this.triggerHandler("getData"+e,[d[0]]),m===b&&j&&(m=f.data(j,a),m=l(j,a,m));return m===b&&d[1]?this.data(d[0]):m}d[1]=c,this.each(function(){var b=f(this);b.triggerHandler("setData"+e,d),f.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1)},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){var d=2;typeof a!="string"&&(c=a,a="fx",d--);if(arguments.length<d)return f.queue(this[0],a);return c===b?this:this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise(c)}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,f.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,f.prop,a,b,arguments.length>1)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.type]||f.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.type]||f.valHooks[g.nodeName.toLowerCase()];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h,i=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;i<g;i++)e=d[i],e&&(c=f.propFix[e]||e,h=u.test(e),h||f.attr(a,e,""),a.removeAttribute(v?e:c),h&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0,coords:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/(?:^|\s)hover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(
a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler,g=p.selector),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:g&&G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=f.event.special[c.type]||{},j=[],k,l,m,n,o,p,q,r,s,t,u;g[0]=c,c.delegateTarget=this;if(!i.preDispatch||i.preDispatch.call(this,c)!==!1){if(e&&(!c.button||c.type!=="click")){n=f(this),n.context=this.ownerDocument||this;for(m=c.target;m!=this;m=m.parentNode||this)if(m.disabled!==!0){p={},r=[],n[0]=m;for(k=0;k<e;k++)s=d[k],t=s.selector,p[t]===b&&(p[t]=s.quick?H(m,s.quick):n.is(t)),p[t]&&r.push(s);r.length&&j.push({elem:m,matches:r})}}d.length>e&&j.push({elem:this,matches:d.slice(e)});for(k=0;k<j.length&&!c.isPropagationStopped();k++){q=j[k],c.currentTarget=q.elem;for(l=0;l<q.matches.length&&!c.isImmediatePropagationStopped();l++){s=q.matches[l];if(h||!c.namespace&&!s.namespace||c.namespace_re&&c.namespace_re.test(s.namespace))c.data=s.data,c.handleObj=s,o=((f.event.special[s.origType]||{}).handle||s.handler).apply(q.elem,g),o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()))}}i.postDispatch&&i.postDispatch.call(this,c);return c.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),d._submit_attached=!0)})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9||d===11){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));o.match.globalPOS=p;var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.globalPOS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")[\\s/>]","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){return f.access(this,function(a){return a===b?f.text(this):this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f
.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){return f.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(f.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(g){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,function(a,b){b.src?f.ajax({type:"GET",global:!1,url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||f.isXMLDoc(a)||!bc.test("<"+a.nodeName+">")?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g,h,i,j=[];b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);for(var k=0,l;(l=a[k])!=null;k++){typeof l=="number"&&(l+="");if(!l)continue;if(typeof l=="string")if(!_.test(l))l=b.createTextNode(l);else{l=l.replace(Y,"<$1></$2>");var m=(Z.exec(l)||["",""])[1].toLowerCase(),n=bg[m]||bg._default,o=n[0],p=b.createElement("div"),q=bh.childNodes,r;b===c?bh.appendChild(p):U(b).appendChild(p),p.innerHTML=n[1]+l+n[2];while(o--)p=p.lastChild;if(!f.support.tbody){var s=$.test(l),t=m==="table"&&!s?p.firstChild&&p.firstChild.childNodes:n[1]==="<table>"&&!s?p.childNodes:[];for(i=t.length-1;i>=0;--i)f.nodeName(t[i],"tbody")&&!t[i].childNodes.length&&t[i].parentNode.removeChild(t[i])}!f.support.leadingWhitespace&&X.test(l)&&p.insertBefore(b.createTextNode(X.exec(l)[0]),p.firstChild),l=p.childNodes,p&&(p.parentNode.removeChild(p),q.length>0&&(r=q[q.length-1],r&&r.parentNode&&r.parentNode.removeChild(r)))}var u;if(!f.support.appendChecked)if(l[0]&&typeof (u=l.length)=="number")for(i=0;i<u;i++)bn(l[i]);else bn(l);l.nodeType?j.push(l):j=f.merge(j,l)}if(d){g=function(a){return!a.type||be.test(a.type)};for(k=0;j[k];k++){h=j[k];if(e&&f.nodeName(h,"script")&&(!h.type||be.test(h.type)))e.push(h.parentNode?h.parentNode.removeChild(h):h);else{if(h.nodeType===1){var v=f.grep(h.getElementsByTagName("script"),g);j.splice.apply(j,[k+1,0].concat(v))}d.appendChild(h)}}}return j},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bp=/alpha\([^)]*\)/i,bq=/opacity=([^)]*)/,br=/([A-Z]|^ms)/g,bs=/^[\-+]?(?:\d*\.)?\d+$/i,bt=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,bu=/^([\-+])=([\-+.\de]+)/,bv=/^margin/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Top","Right","Bottom","Left"],by,bz,bA;f.fn.css=function(a,c){return f.access(this,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)},a,c,arguments.length>1)},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=by(a,"opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bu.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(by)return by(a,c)},swap:function(a,b,c){var d={},e,f;for(f in b)d[f]=a.style[f],a.style[f]=b[f];e=c.call(a);for(f in b)a.style[f]=d[f];return e}}),f.curCSS=f.css,c.defaultView&&c.defaultView.getComputedStyle&&(bz=function(a,b){var c,d,e,g,h=a.style;b=b.replace(br,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b))),!f.support.pixelMargin&&e&&bv.test(b)&&bt.test(c)&&(g=h.width,h.width=c,c=e.width,h.width=g);return c}),c.documentElement.currentStyle&&(bA=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f==null&&g&&(e=g[b])&&(f=e),bt.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),by=bz||bA,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth!==0?bB(a,b,d):f.swap(a,bw,function(){return bB(a,b,d)})},set:function(a,b){return bs.test(b)?b+"px":b}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bq.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bp,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bp.test(g)?g.replace(bp,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){return f.swap(a,{display:"inline-block"},function(){return b?by(a,"margin-right"):a.style.marginRight})}})}),f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)}),f.each({margin:"",padding:"",border:"Width"},function(a,b){f.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bx[d]+b]=e[d]||e[d-2]||e[0];return f}}});var bC=/%20/g,bD=/\[\]$/,bE=/\r?\n/g,bF=/#.*$/,bG=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bH=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bI=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bJ=/^(?:GET|HEAD)$/,bK=/^\/\//,bL=/\?/,bM=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bN=/^(?:select|textarea)/i,bO=/\s+/,bP=/([?&])_=[^&]*/,bQ=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bR=f.fn.load,bS={},bT={},bU,bV,bW=["*/"]+["*"];try{bU=e.href}catch(bX){bU=c.createElement("a"),bU.href="",bU=bU.href}bV=bQ.exec(bU.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bR)return bR.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bM,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bN.test(this.nodeName)||bH.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bE,"\r\n")}}):{name:b.name,value:c.replace(bE,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b$(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b$(a,b);return a},ajaxSettings:{url:bU,isLocal:bI.test(bV[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bW},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bY(bS),ajaxTransport:bY(bT),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?ca(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cb(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bG.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bF,"").replace(bK,bV[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bO),d.crossDomain==null&&(r=bQ.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bV[1]&&r[2]==bV[2]&&(r[3]||(r[1]==="http:"?80:443))==(bV[3]||(bV[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),bZ(bS,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bJ.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bL.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bP,"$1_="+x);d.url=y+(y===d.url?(bL.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bW+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=bZ(bT,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)b_(g,a[g],c,e);return d.join("&").replace(bC,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cc=f.now(),cd=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cc++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=typeof b.data=="string"&&/^application\/x\-www\-form\-urlencoded/.test(b.contentType);if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cd.test(b.url)||e&&cd.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(cd,l),b.url===j&&(e&&(k=k.replace(cd,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ce=a.ActiveXObject?function(){for(var a in cg)cg[a](0,1)}:!1,cf=0,cg;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ch()||ci()}:ch,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ce&&delete cg[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n);try{m.text=h.responseText}catch(a){}try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cf,ce&&(cg||(cg={},f(a).unload(ce)),cg[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cj={},ck,cl,cm=/^(?:toggle|show|hide)$/,cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,co,cp=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cq;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(ct("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),(e===""&&f.css(d,"display")==="none"||!f.contains(d.ownerDocument.documentElement,d))&&f._data(d,"olddisplay",cu(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(ct("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(ct("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o,p,q;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]);if((k=f.cssHooks[g])&&"expand"in k){l=k.expand(a[g]),delete a[g];for(i in l)i in a||(a[i]=l[i])}}for(g in a){h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cu(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cm.test(h)?(q=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),q?(f._data(this,"toggle"+i,q==="show"?"hide":"show"),j[q]()):j[h]()):(m=cn.exec(h),n=j.cur(),m?(o=parseFloat(m[2]),p=m[3]||(f.cssNumber[i]?"":"px"),p!=="px"&&(f.style(this,i,(o||1)+p),n=(o||1)/j.cur()*n,f.style(this,i,n+p)),m[1]&&(o=(m[1]==="-="?-1:1)*o+n),j.custom(n,o,p)):j.custom(n,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:ct("show",1),slideUp:ct("hide",1),slideToggle:ct("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a){return a},swing:function(a){return-Math.cos(a*Math.PI)/2+.5}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cq||cr(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){f._data(e.elem,"fxshow"+e.prop)===b&&(e.options.hide?f._data(e.elem,"fxshow"+e.prop,e.start):e.options.show&&f._data(e.elem,"fxshow"+e.prop,e.end))},h()&&f.timers.push(h)&&!co&&(co=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cq||cr(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(co),co=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(cp.concat.apply([],cp),function(a,b){b.indexOf("margin")&&(f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)})}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cv,cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?cv=function(a,b,c,d){try{d=a.getBoundingClientRect()}catch(e){}if(!d||!f.contains(c,a))return d?{top:d.top,left:d.left}:{top:0,left:0};var g=b.body,h=cy(b),i=c.clientTop||g.clientTop||0,j=c.clientLeft||g.clientLeft||0,k=h.pageYOffset||f.support.boxModel&&c.scrollTop||g.scrollTop,l=h.pageXOffset||f.support.boxModel&&c.scrollLeft||g.scrollLeft,m=d.top+k-i,n=d.left+l-j;return{top:m,left:n}}:cv=function(a,b,c){var d,e=a.offsetParent,g=a,h=b.body,i=b.defaultView,j=i?i.getComputedStyle(a,null):a.currentStyle,k=a.offsetTop,l=a.offsetLeft;while((a=a.parentNode)&&a!==h&&a!==c){if(f.support.fixedPosition&&j.position==="fixed")break;d=i?i.getComputedStyle(a,null):a.currentStyle,k-=a.scrollTop,l-=a.scrollLeft,a===e&&(k+=a.offsetTop,l+=a.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(a.nodeName))&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),g=e,e=a.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&d.overflow!=="visible"&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),j=d}if(j.position==="relative"||j.position==="static")k+=h.offsetTop,l+=h.offsetLeft;f.support.fixedPosition&&j.position==="fixed"&&(k+=Math.max(c.scrollTop,h.scrollTop),l+=Math.max(c.scrollLeft,h.scrollLeft));return{top:k,left:l}},f.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){f.offset.setOffset(this,a,b)});var c=this[0],d=c&&c.ownerDocument;if(!d)return null;if(c===d.body)return f.offset.bodyOffset(c);return cv(c,d,d.documentElement)},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);f.fn[a]=function(e){return f.access(this,function(a,e,g){var h=cy(a);if(g===b)return h?c in h?h[c]:f.support.boxModel&&h.document.documentElement[e]||h.document.body[e]:a[e];h?h.scrollTo(d?f(h).scrollLeft():g,d?g:f(h).scrollTop()):a[e]=g},a,e,arguments.length,null)}}),f.each({Height:"height",Width:"width"},function(a,c){var d="client"+a,e="scroll"+a,g="offset"+a;f.fn["inner"+a]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,c,"padding")):this[c]():null},f.fn["outer"+a]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,c,a?"margin":"border")):this[c]():null},f.fn[c]=function(a){return f.access(this,function(a,c,h){var i,j,k,l;if(f.isWindow(a)){i=a.document,j=i.documentElement[d];return f.support.boxModel&&j||i.body&&i.body[d]||j}if(a.nodeType===9){i=a.documentElement;if(i[d]>=i[e])return i[d];return Math.max(a.body[e],i[e],a.body[g],i[g])}if(h===b){k=f.css(a,c),l=parseFloat(k);return f.isNumeric(l)?l:k}f(a).css(c,h)},c,a,arguments.length,null)}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);
/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version 3.0.1
 *
 * Requires jQuery >= 1.2.6
 */
(function(n){typeof define=="function"&&define.amd?define(["jquery"],n):typeof exports=="object"?module.exports=n:n(jQuery)})(function(n){function t(n){return n&&n.constructor===Number?n+"px":n}n.fn.bgiframe=function(i){var r,u;return i=n.extend({top:"auto",left:"auto",width:"auto",height:"auto",opacity:!0,src:"javascript:false;",conditional:/MSIE 6\.0/.test(navigator.userAgent)},i),n.isFunction(i.conditional)||(r=i.conditional,i.conditional=function(){return r}),u=n('<iframe class="bgiframe"frameborder="0"tabindex="-1"src="'+i.src+'"style="display:block;position:absolute;z-index:-1;"/>'),this.each(function(){var r=n(this),f,e;i.conditional(this)!==!1&&(f=r.children("iframe.bgiframe"),e=f.length===0?u.clone():f,e.css({top:i.top=="auto"?(parseInt(r.css("borderTopWidth"),10)||0)*-1+"px":t(i.top),left:i.left=="auto"?(parseInt(r.css("borderLeftWidth"),10)||0)*-1+"px":t(i.left),width:i.width=="auto"?this.offsetWidth+"px":t(i.width),height:i.height=="auto"?this.offsetHeight+"px":t(i.height),opacity:i.opacity===!0?0:undefined}),f.length===0&&r.prepend(e))})};n.fn.bgIframe=n.fn.bgiframe});
/*
//# sourceMappingURL=jquery.bgiframe.min.js.map
*/
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function(n){typeof define=="function"&&define.amd?define(["jquery"],n):typeof exports=="object"?n(require("jquery")):n(jQuery)})(function(n){function i(n){return t.raw?n:encodeURIComponent(n)}function f(n){return t.raw?n:decodeURIComponent(n)}function e(n){return i(t.json?JSON.stringify(n):String(n))}function o(n){n.indexOf('"')===0&&(n=n.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return n=decodeURIComponent(n.replace(u," ")),t.json?JSON.parse(n):n}catch(i){}}function r(i,r){var u=t.raw?i:o(i);return n.isFunction(r)?r(u):u}var u=/\+/g,t=n.cookie=function(u,o,s){var y,a,h,v,c,p;if(arguments.length>1&&!n.isFunction(o))return s=n.extend({},t.defaults,s),typeof s.expires=="number"&&(y=s.expires,a=s.expires=new Date,a.setTime(+a+y*864e5)),document.cookie=[i(u),"=",e(o),s.expires?"; expires="+s.expires.toUTCString():"",s.path?"; path="+s.path:"",s.domain?"; domain="+s.domain:"",s.secure?"; secure":""].join("");for(h=u?undefined:{},v=document.cookie?document.cookie.split("; "):[],c=0,p=v.length;c<p;c++){var w=v[c].split("="),b=f(w.shift()),l=w.join("=");if(u&&u===b){h=r(l,o);break}u||(l=r(l))===undefined||(h[b]=l)}return h};t.defaults={};n.removeCookie=function(t,i){return n.cookie(t)===undefined?!1:(n.cookie(t,"",n.extend({},i,{expires:-1})),!n.cookie(t))}});
$(function(){$(".site-nav li").removeClass("cur");$('.site-nav li a[data-type="'+(window.siteNav||"index")+'"]').parent().addClass("cur");window.SiteNavSlider=function(){var n=$(".site-nav"),i=57,t=function(t){var r=t.width();return t.offset().left-n.offset().left-(i-r)/2},r=function(){n.css({background:"url(http://js.jrjimg.cn/zqt-red-1000/images/v2/site-nav-slider.png) "+t(n.find("li.cur"))+"px 100% no-repeat"});n.find("li").mouseenter(function(){n.css({background:"url(http://js.jrjimg.cn/zqt-red-1000/images/v2/site-nav-slider.png) "+t($(this))+"px 100% no-repeat","-moz-transition":"all .2s","-o-transition":"all .2s","-webkit-transition":"all .2s",transition:"all .2s"})}).mouseleave(function(){n.css({background:"url(http://js.jrjimg.cn/zqt-red-1000/images/v2/site-nav-slider.png) "+t(n.find("li.cur"))+"px 100% no-repeat"})})};return{init:r}}();$(".site-nav-v2").length>0&&!$(".site-nav-v2").hasClass("noslider")&&window.SiteNavSlider.init(),function(){var n=null;$(".site-top .link-mobile").mouseenter(function(){var t=this;n=setTimeout(function(){$(t).find(".popup-mobile").show()},300)}).mouseleave(function(){window.clearTimeout(n);$(this).find(".popup-mobile").hide()})}();$(".site-top-v2-compact .site-search .txtbox-search").focus(function(){$(this).parent().addClass("site-search-focus")}).blur(function(){$(this).parent().removeClass("site-search-focus")})});
/*
//# sourceMappingURL=head-nav.min.js.map
*/
(function( win ){
	var _ua = win.navigator.userAgent.toLowerCase()
		,_local = win.localStorage;
		
	$.each({ weixin:_ua.match(/MicroMessenger/i)=="micromessenger"
			,isAndroid:_ua.indexOf("android") > -1
			,isIphone:_ua.indexOf("android") > -1
			,isIpad:_ua.indexOf("ipad") > -1
		},function( _key , _val ){
			$.browser[_key] = _val;
		}
	);
	
	win.$.extend($, {
		getScript: function(url, callback, charset){
			var head = document.getElementsByTagName("head")[0] || document.documentElement;
			var script = document.createElement("script");
			if ( charset ) {
				script.charset = charset;
			}
			script.src = url;

			// Attach handlers for all browsers
			script.onload = script.onreadystatechange = function() {
				if ( !this.readyState ||
						this.readyState === "loaded" || this.readyState === "complete" ) {
					callback();

					// Handle memory leak in IE
					script.onload = script.onreadystatechange = null;
					
					//remove the script tag
					if ( head && script.parentNode ) {
						//head.removeChild( script );
					}
				}
			};
			
			// Use insertBefore instead of appendChild  to circumvent an IE6 bug.
			head.insertBefore( script, head.firstChild );
		}
		,Cookie : {
			 set : function( _key , _val , _isc , _option ){
				_option = _option || {expires:99999,path:'/', domain:'jrj.com.cn'} //secure: true 为加密
				if(_local && _local.setItem && void 0 == _isc){
					_local.setItem( _key , _val )
				}else{
					$.cookie( _key , _val , _option )
				}
			 }
			,get : function( _val , _isc ){
				if(_local && _local.getItem && void 0 == _isc){
					return _local.getItem(_val);
				}else{
					return $.cookie(_val);
				}
			}
			,remove : function( _val , _isc ){
				if(_local && _local.removeItem && void 0 == _isc){ //判断用户是否点击事件
					_local.removeItem(_val)
				}else{
					$.removeCookie(_val);
				}
			}
		}
		,getByteLen : function(val) { //返回val的字节长度 
			var len = 0; 
			val = val.split('');
			for (var i = 0; i < val.length; i++) { 
				if (val[i].match(/[^\x00-\xff]/ig) != null) //全角 
					len += 2; 
				else 
					len += 1; 
			} 
			return len; 
		}
		,getByteVal : function(val, max) { //返回val在规定字节长度max内的值 
			var returnValue='',byteValLen = 0; 
			val = val.split('')
			for (var i = 0; i < val.length; i++) { 
				if (val[i].match(/[^\x00-\xff]/ig) != null) 
					byteValLen += 2; 
				else 
					byteValLen += 1; 
				if (byteValLen > max) 
				break; 
				returnValue += val[i]; 
			} 
			return returnValue; 
		}
	});
	var M = { //手机登录设置
		 href : ''
		,http : ''
		,init : function(){
			 this.getBrowser();
			 if( $.browser.isAndroid || $.browser.isIphone || $.browser.weixin ){
				M.journal();
			 }
		 }
		,getBrowser : function(){
			var _url = win.location.href;
			this.href = _url;
		}
		,journal : function(){ //日志
			var  str = M.http+'/view' , _mobile = '/m'
				,_url = M.href.substr(str.length)
			if(M.href.indexOf(str) >-1 ){
				win.location.href = str+_mobile+_url
			}
		}
	};
	// M.init();
})( window );

(function(){
    var _href = window.location.href, _itgurl = 'http://itougu.jrj.com.cn', _sso = 'http://sso.jrj.com.cn/sso'
	, URL = {
	    msg: _itgurl + '/message/num.jspa'  //消息 //1、系统通知；2、股价预警；3、回答；4、实盘直播；5、签约；6、提问；7、关注；8、评论；9、投顾群发；10、追答；11、追问；12、解约；13、投资组合
		, index: _itgurl
		, exit: _sso + '/passportLogin' //?RetrunURL=XXX&action=logout //之前是ssopassportlogin  //退出 passportLogin
		, userLink: 'http://i.jrj.com.cn/main' //个人中心
		, sendUserOnline: _sso + '/passport/userInfo.jsp' //
		, _reg: 'https://sso.jrj.com.cn/sso/passportRegister/register.jsp?fromId=TG&ReturnURL=' //注册页
		, noanswer: _itgurl + '/ques/invest/myanswernum.jspa'        // noanswer 未回答数 李琳
		, setUser: _itgurl + '/account/registerInfo.jspa'
		// , itg: _itgurl + '/view/myPointlist.jspa?tabid=1' //我的投顾空间
		, itg: _itgurl + '/account/ptann/list.jspa' //平台公告
		, _regitg: _itgurl + '/account/applyAdviser.jspa' //注册爱投顾
		, _regitgdr: _itgurl + '/account/applyExpert.jspa' //注册投资达人
		, _agency: _itgurl + '/account/applyOrg.jspa' //注册投资机构
		, _jggl: _itgurl + '/account/orgmanage/orgAdviser.jspa' //机构管理
		, userInfo: _itgurl + '/account/getBasicUserInfo.jspa' //
		, _switchable: 'http://js.jrjimg.cn/zqt-red-1000/js/jquery.switchable-1.0.min.js'
		, _clickLogin: _itgurl + '/statistics/RegStatus.gif' //
		, link: [
			 _itgurl + '/message/list/ask.jspa'                //回答
			, _itgurl + '/message/list/portfolio.jspa'         //操作
			, _itgurl + '/message/list/stockremind.jspa'       //提醒
			, _itgurl + '/message/list/sys.jspa'               //消息
			, _itgurl + '/message/list/nc.jspa'               //投资内参消息
			, _itgurl + '/message/list/comment.jspa'          //评论消息
		]
		,test_type : _itgurl+'/account/getEvaluationResult.jspa'
	}
	,T = {
		 login : {}
		,reg : {}
		,topState : 'null'
		,_userState : {}
		,getUserInfo : function(fn){
			$.getScript(URL.userInfo,fn) //杜标棋
		}
		,_init : function(){
			if(!T.form){
				var _reg = /relation=\w+&/
				if(_reg.test(_href)){
					_href = _href.replace(String(_href.match(_reg)[0]),'')
				}
				T.form = $('<form action='+URL.exit+' method="post">'
						+'<input type=text id="ReturnURL" name="ReturnURL" value='+_href+'>'
						+'<input type=text id="action" name="action" value="logout"></form>')
				T.form.css({display:'none'})
			}
			T._getHead();
		}
		,_login : function(fn){
			try{
				window.JRJ.ui.isLogin(fn)
			}catch(e){
				
			}
		}
		,getURLval : function( key , val ){
			if(key.test(_href)){
				return String((_href.match(key)[0]).match(val)[0]);
			}
		}
		,cookies : function(fn){
			var  pwd = $.cookie('JRJ.SSOPASSPORT')
				,userid = $.cookie('itg_passport_userid') //,md5 = $.cookie('itg_passport_md5')
				,auto_pwd = $.cookie('JRJ.SSOUser_PST') //选择自动登录时种的。
				,olduserid = Member.getUserInfo().userId
			//alert('pwd:'+pwd+':userid:'+userid+':auto_pwd+'+auto_pwd)
			//T.ajax(function(){
			if( userid && pwd ){//已登录
				if( olduserid && olduserid == userid ){
					fn();
				}else{ //用户名不一至
					T.getUserInfo(fn);
				}
			}else if( !pwd && !auto_pwd ){ //未登录
				if( olduserid ){//用户还存在，则更新页面
					window.basicUserInfo = {userId:null}
				}
				fn();
			}else if( !userid && pwd ){ //已登录 但用户名不存在，则更新
				T.getUserInfo(fn);
			}else if( !pwd && auto_pwd ){ //发送用户在线请求 pwd一搬为真，只有退出浏览器时，，此时需要发送请求
				T.ajax(function(_data){
					//alert(olduserid+':'+userid+':'+olduserid+':'+pwd)
					if( olduserid && userid && pwd && olduserid == userid ){
						location.reload();
					}else if(auto_pwd){
						/* setTimeout(function(){ //不刷新方式
							T.cookies(fn);
						},500); */
						setTimeout(function(){ //不刷新方式
							T.getUserInfo(fn);
						},500);
					}else{
						$.removeCookie('JRJ.SSOUser_PST')
						window.basicUserInfo = {userId:null}
						fn();
					}
					/* setTimeout(function(){ //不刷新方式
						T.getUserInfo(fn);
					},500); */
				},URL.sendUserOnline);
			}else{
				fn();
			}
			//},URL.sendUserOnline); //自动登录种cookie	
		}
		,ajax : function( fn , url , data , datatype , cntenttype , type ){
			datatype = datatype || "jsonp"
			cntenttype = cntenttype || "application/json"
			type = type || 'GET'
			$.ajax({
				type: type,
				url: url,
				async: true,
				contentType: cntenttype,
				dataType: datatype,
				data : data,
				success: function (_data) {
					fn(_data);
				},
				error: function (e) {
					if(window.console && console.log) console.log(e.message);
				}
			});
		}
		,_getHead : function(){
			var blank =  "<div style='float:left;width:10px; height:33px;'></div>"
			,Tool = {
				 isLogin : function(){
					if(T._topElemts) return;
					T._topElemts = $('<span class="site-top-v2-inner fr after-login">'
							+'<a href="" class="avatar fl" target="_blank"><img/></a>'
							+'<a href="" class="username fl" target="_blank"></a>'
							+blank
							+'<a class="fl test-type fx_pingche">稳健型</a>'
							+blank
							+'<a class="fl itougu_space">投顾空间</a>'
							+blank
							+'<a class="fl exit">退出</a>'
							+'<span class="site-top-v2-split">|</span>'
							+'<div class="userop-msg fl userop-msg-notify">'
								+'<div class="userop-msg-hover"></div>'
								+'<div class="userop-msg-block">'
									+'<ul>'
										+'<li>'
											+'<a href="'+URL.link[0]+'">'
												+'<span class="notify fr">0</span>'
												+'<span>问答提醒</span>'
											+'</a>'
										+'</li>'
										+'<li>'
											+'<a href="'+URL.link[1]+'">'
												+'<span class="notify fr">0</span>'
												+'<span>组合跟投消息</span>'
											+'</a>'
										+'</li>'
										+'<li>'
											+'<a href="'+URL.link[2]+'">'
												+'<span class="notify fr">0</span>'
												+'<span>自选股提醒</span>'
											+'</a>'
										+'</li>'
										+'<li>'
											+'<a href="'+URL.link[3]+'">'
												+'<span class="notify fr">0</span>'
												+'<span>系统消息</span>'
											+'</a>'
										+'</li>'
										+'<li>'
											+'<a href="'+URL.link[4]+'">'
												+'<span class="notify fr">0</span>'
												+'<span>投资内参消息</span>'
											+'</a>'
										+'</li>'
										+'<li>'
											+'<a href="'+URL.link[5]+'">'
												+'<span class="notify fr">0</span>'
												+'<span>评论消息</span>'
											+'</a>'
										+'</li>'
										+'<li class="more"><a href="'+URL.link[0]+'" class="link">查看全部</a></li>'
									+'</ul>'
								+'</div>'
							+'</div>'
						+'</span>');
					T._topElemts._info = {
						 _list : T._topElemts.find('.userop-msg-block li .notify')
						,_msg : T._topElemts.find('.userop-msg-notify')
					}
					T._topElemts.exit = T._topElemts.find('.exit');
					T._topElemts._img = T._topElemts.find('.avatar img');
					T._topElemts._username = T._topElemts.find('.username');
					T._topElemts.space = T._topElemts.find('.itougu_space');
				}
				,apply_itougu : function( isAdviser ){ //申请投顾入驻 【已登录】
					if(	isAdviser == 1 ){ //如果是投顾
						T._topElemts.space.unbind('click').text('投顾空间').attr({'href':URL.itg,'target':'_blank'});
					}else if( isAdviser == 2 ){ //如果是机构
						T._topElemts.space.unbind('click').text('机构管理后台').attr({'href':URL._jggl,'target':'_blank'});
					}else{//不是投顾 则需要申请投顾入驻
						T._topElemts.space.unbind('click').text('申请入驻').click(D.p);
					}
				}
			}
			,usability = { //测评
				init : function( _parent ){ //add 测评
					usability.update();
					if(Member.getUserInfo().userId){
						usability.isLogin();
					}else{
						usability.reg(_parent);
					}
					if(usability.usable){
						usability.usable.unbind('click').bind('click',function(){
							JRJ.usability.show();
						});
					}
				}
				,reg : function( _parent ){ //未登录
				    if (_parent.data('pingche') == 'true') return;

					_parent.data('pingche','true');
					var txt = $('<span><a class="fl fx_pingche">风险评测</a><span class="site-top-v2-split">|</span></span>');
					_parent.prepend(txt);
					usability.usable = _parent.find('.fx_pingche');
					window.membership.usability({ evaRet: $.cookie('TG_evaluation_type') });
				}
				,isLogin : function(){ //已登录
					usability.usable = T._topElemts.find('.test-type');
					$.ajax({
						url : URL.test_type
						,dataType : 'json'
						,success : function( _data ){
						    window.membership.usability(_data);
						}
						
					});
				}
				,update : function(){//更新 测试类型
				    if (window.membership.usability) return;

				    window.membership.usability = function (_data) {
						try{
							usability.usable.text(_data.evaRet||'风险评测');
						}catch(e){
							usability.usable.text('风险评测');
						}
					}
				}
			}
			,pub = {//公共版
				 Dome : null
				,init : function( elem ){
					pub.Dome = elem;
					$(function(){
						pub.shao_tel();
						if(Member.getUserInfo().userId){
							Tool.isLogin();
							pub.isLogin();
						}else{
							pub.reg();
						}
					});
				}
				,reg : function(){ //未登录
					T._login = pub.Dome.find('.before-login');
					usability.init(T._login) //风险评测
					//登录
					T._login.lg = T._login.find('.fl:eq(1)');
					//注册
					T._login.reg = T._login.find('.fl:eq(2)').attr('href','javascript:void(0)');
					//登录
					T._login.lg.unbind('click').click(window.JRJ.ui.isLogin);
					//注册
					T._login.reg.unbind('click').click(R._click_reg);
				}
				,isLogin : function(){ //已登录
					var  top = pub.Dome.find('.wrapper')
						,_ele = T._topElemts
						,_user = Member.getUserInfo()
						,isAdviser = parseInt(_user.isAdviser);
						
					if(_ele.parent().length<1){
						top.prepend(_ele);
					}
					top.find('.before-login').remove();
					T._topElemts.exit.unbind('click').click(Member.logout);
					_ele._img.attr('src',_user.headImage);  //头像
					_ele._username.text(_user.userName);   //用户名
					
					usability.init(); //更新评测
					Tool.apply_itougu(isAdviser); // 更新申请入驻
					
					if(	isAdviser == 1 ){ //如果是投顾
						_ele._img.parent().attr('href',URL.setUser);
						_ele._username.attr('href',URL.setUser);
					}else if( isAdviser == 2 ){ //如果是机构
						_ele._img.parent().attr('href',URL._jggl);
						_ele._username.attr('href',URL._jggl);
					}else{//不是投顾 则需要申请投顾入驻
						_ele._img.parent().attr('href',URL.userLink);
						_ele._username.attr('href',URL.userLink);
					}
					Member.setMsg(); //获取消息及消息事件
				}
				,shao_tel : function(){ //扫一扫 手机客户端 [未登录和已登录]
					var shao = pub.Dome.find('.mouseoverapp');
					shao.hover(function(){
						$(this).find('.popup-mobile').show();
					},function(){
						$(this).find('.popup-mobile').hide();
					});
				}
				
			}
			,simple = {//简版
				 Dome : null
				, init: function (elem) {
                   
					simple.Dome = elem;
					
					$(function(){
						if(Member.getUserInfo().userId){
							Tool.isLogin();
							simple.isLogin();
						}else{
							simple.reg();
						}
						//隐藏申请入驻
						var itougu_space = simple.Dome.find('.itougu_space');
						itougu_space.prev().remove();
						itougu_space.remove();
					});
				}
				,reg : function(){ //未登录
					T._login = simple.Dome.find('.before-login');
					usability.init(T._login)
					//登录
					T._login.lg = T._login.find('.fl:eq(1)');
					//注册
					T._login.reg = T._login.find('.fl:eq(2)').attr('href','javascript:void(0)');
					//登录
					T._login.lg.unbind('click').click(window.JRJ.ui.isLogin);
					//注册
					T._login.reg.unbind('click').click(R._click_reg);
				}
				,isLogin : function(){ //已登录
					var  top = simple.Dome.find('.wrapper')
						,_ele = T._topElemts
						,_user = Member.getUserInfo()
						,isAdviser = parseInt(_user.isAdviser);
						
					if(_ele.parent().length<1){
						top.prepend(_ele);
					}
					top.find('.before-login').remove();
					T._topElemts.exit.unbind('click').click(Member.logout);
					_ele._img.attr('src',_user.headImage);  //头像
					_ele._username.text(_user.userName);   //用户名
					
					usability.init(); //更新评测
					//Tool.apply_itougu(isAdviser); // 更新申请入驻
					
					if(	isAdviser == 1 ){ //如果是投顾
						_ele._img.parent().attr('href',URL.setUser);
						_ele._username.attr('href',URL.setUser);
					}else if( isAdviser == 2 ){ //如果是机构
						_ele._img.parent().attr('href',URL._jggl);
						_ele._username.attr('href',URL._jggl);
					}else{//不是投顾 则需要申请投顾入驻
						_ele._img.parent().attr('href',URL.userLink);
						_ele._username.attr('href',URL.userLink);
					}
					Member.setMsg(); //获取消息及消息事件
				}
			}
			
			var headInfo = $('.site-top-v2-compact');
			if(headInfo.length>0){ //有LOGO头部，简版
				simple.init(headInfo);
			}else{ //无logo 头部
				headInfo = $('.site-top-v2');
				pub.init(headInfo);
			}
			
			
		}
	}
	,M = { //msg处理
		 data : null
		,dealData : function( _data ){
			M.data = _data;
			var n1=0,n2=0,n3=0,n4=0,n5=0,n6=0;
			//_data = {'t_1':'1','t_2':'2','t_3':'3','t_4':'2','t_5':'4','t_6':'5','t_7':'6','t_8':'7','t_9':'8','t_10':'6','t_11':'0','t_12':'0',t_13,t_14,'t_15':'0','t_16':'0'}
			if(_data){
				for( var item in _data ){
					var value = parseInt(_data[item])
					
					if( item == 't_3' || item == 't_6' || item == 't_10' || item == 't_11' ){ //   ||您收到N个新回答
						n1 += value
					}
					if( item == 't_13' ){ //投资组合有N个新操作
						n2 += value
					}
					if( item == 't_2' ){ //自选股有N个新提醒
						n3 += value
					}
					if( item == 't_1' ||  item == 't_5' ||  item == 't_8' ||  item == 't_9' ||  item == 't_12' ||  item == 't_14' ||  item == 't_15' ){ //您收到N条系统信息
						n4 += value
					}
					if( item == 't_16' ){
						n5 += value
					}
					if( item == 't_22' ){ //评论消息
						n6 += value;
					}
				}
				n1 = n1>99?'99+':n1
				n2 = n2>99?'99+':n2
				n3 = n3>99?'99+':n3
				n4 = n4>99?'99+':n4
				n5 = n5>99?'99+':n5
				n6 = n6>99?'99+':n6
			}
			return [n1,n2,n3,n4,n5,n6];
		}
	}
	,D = {//申请入驻弹窗
		p : function(){ //投顾入驻
			window.JRJ.ui.isLogin(function(){
				var _id = Member.getUserInfo().userId
					,dialogSignupTempl_2nd = '<div class="dialog-cnt">'
												+'<div class="JQ_agency_box">'
													+'<ul class="JQ_agency">'
														+"<li class='dl-1'>"
															+'<h2>投资<strong>顾问</strong></h2><div class="bg"></div>'
															+'<div class="dl-content">'
																+'<h3>入驻条件</h3>'
																+'<ol>'
																	+'<li><i class="i-one"></i>持有证券执业资格证</li>'
																	+'<li><i class="i-two"></i>正在金融机构任职</li>'
																+'</ol>'
															+'</div>'
															+'<a class="btn" href='+URL._regitg+' target="_blank">立即申请<i class="i-right-jian"></i></a>'
														+"</li>"
														+"<li class='dl-2'>"
															+'<h2>投资<strong>达人</strong></h2><div class="bg"></div>'
															+'<div class="dl-content">'
																+'<h3>入驻条件</h3>'
																+'<ol>'
																	+'<li><i class="i-one"></i>具备专业证券投资知识</li>'
																	+'<li><i class="i-two"></i>具有丰富证券投资经验</li>'
																+'</ol>'
															+'</div>'
															+'<a class="btn" href='+URL._regitgdr+' target="_blank">立即申请<i class="i-right-jian"></i></a>'
														+"</li>"
														+"<li class='dl-3'>"
															+'<h2>投资<strong>机构</strong></h2><div class="bg"></div>'
															+'<div class="dl-content">'
																+'<h3>入驻机构类型</h3>'
																+'<ol>'
																	+'<li><i class="i-one"></i>证券公司</li>'
																	+'<li><i class="i-two"></i>证券投资咨询公司</li>'
																+'</ol>'
															+'</div>'
															+'<a class="btn" href='+URL._agency+' target="_blank">立即申请<i class="i-right-jian"></i></a>'
														+"</li>"
													+'</ul>'
												+'</div>'
											+'</div>';
					D.pop(dialogSignupTempl_2nd)
			   
				//申请入驻弹窗:end
			});
		}
		,pop : function( _cnt ){
			 JRJ.Dialogs.standardDialog({
                title: "",
                noTitle: true,
                customClass: 'dialog-signup',
                width: 730,
                content: _cnt,
                okBtnText: "确认",
                cancelBtnText: "取消",
                hasBtn: false,
                hasCloseBtn: true,
                hasOkBtn: true,
                hasCancelBtn: true,
                okCallback: function () { },
                cancelCallback: function () {
                   // $.cookie('JRJ_ITOUGU_SIGNUP_WIZARD', 1, { expires: 365, path: '/', domain: 'jrj.com.cn' });
                },
                isFixed: true
            });
			var _sing = $('#JQ_switchable_signup') , _hover = 'JQ_switchable_signup-hover';
            if(_sing.length>0){
				_sing.mouseenter(function () {
					$(this).addClass(_hover);
				}).mouseleave(function () {
					$(this).removeClass(_hover);
				});
				$.getScript(URL._switchable,function(){
					 _sing.switchable({
						effect: "fade",
						timer: 7000,
						autoPlay: false
					});
				});
			}
		}
	}
	,I = { //左测消息
		 msg : null
		,init : function(){
			I.msg = {
				 _mynews : $('.menu-list-services .mynews')
				,_group : $('.menu-list-services .group')
				,_myask : $('.menu-list-back .myask')
				,_useredit : $('.menu-list-back .useredit')
				,_nc : $('.menu-list-back .nc')
			}
			I.msg._mynews.hide()
			I.msg._group.hide()
			I.msg._myask.hide()
			I.msg._useredit.hide();
			I.msg._nc.hide();
			
		    //menu left 20160531
			(function () {
			    var menuLeftMapping = [
                    { 'account': ['https://t.jrj.com.cn/stock'] },
                    { 'mystock': ['/mystock/home.jspa'] },
                    { 'services': ['/account/dynamic.jspa', '/portfolio/user.jspa', '/tips/usrmy.jspa', '/ques/service/advice.jspa', '/account/myAdviser.jspa', '/portfolio/v2/mydyn.jspa', '/portfolio/v2/myfav.jspa', '/ques/service/advice2.jspa', '/portfolio/user11.jspa', '/portfolio/v3/bookTrade.jspa', '/portfolio/v3/myfav.jspa', '/account/recommendAdviser.jspa'] },
                    { 'myfav': ['/portfolio/v3/store.jspa'] },
                    { 'order': ['/order/orderList.jspa', '/order/refundList.jspa'] },
                    { 'coupon': ['/coupon/myCouponList.jspa', '/coupon/searchCouponLimit.jspa'] },
                    { 'invite': ['/account/invite/index.jspa', '/account/invite/list.jspa'] }
			    ],
                    menuLeftSubMapping = [
                    { 'news': ['account/dynamic.jspa', '/account/recommendAdviser.jspa'] },
                    { 'portfolio': ['/portfolio/user.jspa', '/portfolio/user11.jspa', '/portfolio/v2/mydyn.jspa', '/portfolio/v2/myfav.jspa', '/portfolio/v3/bookTrade.jspa', '/portfolio/v3/myfav.jspa', 'demoacc/web/my.jspa'] },
                    { 'refer': ['/tips/usrmy.jspa'] },
                    { 'ques': ['/ques/service/advice.jspa', '/ques/service/advice2.jspa'] },
                    { 'myadviser': ['/account/myAdviser.jspa'] }
                ],
                    menuLeftTGMapping = [
                    { 'announce': ['/account/ptann/list.jspa'] },
                    { 'profile': ['/account/adviser/'] },
                    { 'rstock': ['/rstock/mylist.jspa'] },
                    { 'vp': ['/view/myPointlist.jspa'] },
                    { 'ques': ['/ques/invest/myanswer.jspa', '/ques/invest/myanswer2.jspa'] },
                    { 'live': ['/xlive/home.jspa'] },
                    { 'portfolio': ['/portfolio/v3/my.jspa', '/portfolio/v2/my.jspa', '/portfolio/my.jspa', 'demoacc/tip.jspa','demoacc/myaccount.jspa'] },
                    { 'refer': ['/tips/tgmy.jspa'] },
                    { 'notify': ['/account/announcement.jspa'] },
                    { 'manage': ['/account/searchSignList.jspa', '/message/group/list.jspa','/account/usermgt/index.jspa'] },
                    { 'income': ['/account/income/introduction.jspa', 
                        '/account/income/index.jspa',
                        '/account/income/billDetail.jspa',
                        '/account/income/billIncomeDetail.jspa',
                        '/account/income/billOrderDetail.jspa',
                        '/account/income/bill.jspa',
                        '/account/income/detail.jspa',
                        '/account/income/dsHome.jspa',
                        '/account/income/giftHome.jspa',
                        '/account/income/help.jspa',
                        '/account/income/home.jspa',
                        '/account/income/indexV2.jspa',
                        '/account/income/insideHome.jspa',
                        '/account/income/portfolioHome.jspa'
                    ]},
                    { 'setting': ['/account/registerInfo.jspa'] },
                    { 'mzone': ['/account/m/index.jspa'] }
                ],
                    url = window.location.href;

			    //一级菜单
			    for (var i = 0; i < menuLeftMapping.length; i++) {
			        for (var key in menuLeftMapping[i]) {
			            var urls = menuLeftMapping[i][key];
			            for (var j = 0; j < urls.length; j++) {
			                if (url.indexOf(urls[j]) > 0) {
			                    $('.site-menu[data-index="' + key + '"]').addClass('site-menu-cur');
			                }
			            }
			        }
			    }

			    //二级菜单
			    for (var i = 0; i < menuLeftSubMapping.length; i++) {
			        for (var key in menuLeftSubMapping[i]) {
			            var urls = menuLeftSubMapping[i][key];
			            for (var j = 0; j < urls.length; j++) {
			                if (url.indexOf(urls[j]) > 0) {
			                    $('.site-menu-cnt ul li[data-index="' + key + '"]').addClass('cur');
			                }
			            }
			        }
			    }


			    //投顾端菜单
			    for (var i = 0; i < menuLeftTGMapping.length; i++) {
			        for (var key in menuLeftTGMapping[i]) {
			            var urls = menuLeftTGMapping[i][key];
			            for (var j = 0; j < urls.length; j++) {
			                if (url.indexOf(urls[j]) > 0) {
			                    $('.menu-list-back li[data-index="' + key + '"]').addClass('cur');
			                }
			            }
			        }
			    }

			    var _user = Member.getUserInfo();
			    $('.menu-list-back li[data-index="profile"] a').attr({ 'href': '/account/adviser/' + _user.userId + '/' });
			    $('.menu-list-back li[data-index="live"] a').attr({ 'href': '/account/adviser/' + _user.userId + '/3' });

			})();
			var menutit = $('.site-menu-title');
			if(menutit.length>0){
				//return;
				menutit.click(function () {
					if (!$(this).parent().hasClass('site-menu-expand')) {
						$(this).parent().addClass('site-menu-expand');
						$(this).parent().stop().animate({ height: $(this).parent().outerHeight() + $(this).next().outerHeight() + 'px' }, 200);
					} else {
						$(this).parent().removeClass('site-menu-expand');
						$(this).parent().stop().animate({ height: '47px' }, 200);
					}
				});
				$('.site-menu-title .stop').click(function (e) {
					e.stopPropagation();
				});
				$('.site-menu-cur').find('.site-menu-title').click();
				$('.site-menu').mouseenter(function () {
					$(this).addClass('site-menu-hover');
				}).mouseleave(function () {
					$(this).removeClass('site-menu-hover');
				});
				$('.menu-list li').mouseenter(function () {
					$(this).addClass('hover');
				}).mouseleave(function () {
					$(this).removeClass('hover');
				});
				//menu
			}
		}
		,getMsg : function( _data ){
			//1、系统通知；2、股价预警；3、回答；4、实盘直播；5、签约；6、提问；7、关注；8、评论；
			//9、投顾群发；10、追答；11、追问；12、解约；13、投资组合  

			
			var  zx = 0 //资讯
				,wd = 0 //问答
				,zh = 0 //组合
				,nc = 0  //内参
				,gl = 0 //管理
				,pl = 0 //评论

			if(_data ){
				for( var item in _data ){
					var value = parseInt(_data[item])
					//我的投顾 没有  //以下有 //我的资讯  //投资组合 13 //我的问答 //用户管理
					if( item == 't_3' ||  item == 't_10'){ //我的咨询 //3、回答 10、追答
						zx += value
					}
					if( item == 't_13' ){//组合
						zh += value;
					}
					if( item == 't_5' ){//管理
						gl += value;
					}
					if( item == 't_16' ){//管理
						nc += value;
					}
					if( item == 't_22' ){//评论
						pl += value;
					}
				}
				if(zx>0){
					I.msg._mynews.text(zx).show();
				}
				if (zh > 0) {
                    //20160601 组合跟投上线后 去掉消息数显示
					//I.msg._group.text(zh).show();
				}
				if(gl>0){
					I.msg._useredit.text(gl).show();
				}
				if(nc>0){
					I.msg._nc.text(nc).show();
				}
			}
			$.ajax({
				type: 'get',
				url: URL.noanswer,
				async: true,
				contentType: 'application/json',
				dataType: 'json',
				success: function (_data) {
					var value = 0 , _itougu = T._userState.itougu || null;
					if( _data && _data.noanswer ){
						value = parseInt(_data.noanswer)
					}
					if(value>0){
						_itougu && _itougu.addClass('icon-studio-on')
						I.msg._myask.css({display:'block'}).text(wd+value);
					}else{
						_itougu && _itougu.removeClass('icon-studio-on');
						I.msg._myask.hide();
					}
				}
			});
		}
	}
	,Member = { //判断用户是否已经登录
		init: function () {
			Member.update();
			
		}
		,update : function(){ //通过cookie 判断如果已退出刷新，如果 用户ID 不一样，则刷新 目前公共调用接口，李玲的 待解答咨询 和 标棋在调用。
			T.cookies(function(){
				Member.updateState(basicUserInfo);
			});
		}
		,getUserInfo : function(){
			if(!window.basicUserInfo){
				window.basicUserInfo = {userId:null}
				if(window.console && console.log) console.log('出错了，没有获取到用户信息')
			}
			return basicUserInfo;
		}
		,updateState: function (userInfo) {
			T._getHead();
		}
		,logout: function (callback) {//退出系统
			
			//$.removeCookie('JRJ.SSOUser_LID') //删除用户自动登录状态 id
			//$.removeCookie('JRJ.SSOUser_SDC') //删除用户自动登录状态 sdc
			$.removeCookie('JRJ.SSOUser_PST') //删除用户自动登录状态 pwd
			//$.removeCookie('JRJ.SSOPASSPORT', { path: '/' });
			$('body').append(T.form);
			T.form.submit();
			/* T.ajax(function(  ){
			},URL.exit+'?RetrunURL='+_href+'&action=logout&isPersist=0')  */
		}
		,isLogin: function (userInfo) {

			if (typeof (userInfo) != 'undefined' && userInfo != null && userInfo.userName && userInfo.userId && userInfo.userName != '' &&  userInfo.userName.length>1 ) {
				return true;
			}
			return false;
		}
		,setMsg : function( ){//更新用户头部消息信息提示      
			var _info = T._topElemts._info;
			 //查看全部
			T.ajax(function( _data ){
				I.getMsg(_data);
				var _d = M.dealData(_data) , newsmsg = false , all_num = 0;
				for(var i=0; i<_d.length;i++){
					(function(i){
						if( parseInt(_d[i]) > 0 ){ newsmsg=true; }
						all_num += parseInt(_d[i])
						_info._list.eq(i).text(_d[i]>99?'99+':_d[i]).show();
						if(parseInt(_d[i])<1){
							_info._list.eq(i).hide()
						}
					})(i);
				};
				var  cls = ['','']
					,_str = 'userop-msg-newmsg userop-msg-hover-newmsg'
					,_first = _info._msg.find('.userop-msg-hover');
				if(newsmsg){
					cls = ['userop-msg-newmsg','userop-msg-hover-newmsg']
				}
				_info._msg.removeClass(_str).addClass(cls[0]);
				_first.removeClass(_str).addClass(cls[1]);
				_info._msg.unbind().hover(function(){
					_first.addClass(cls[1]).show();
					$(this).addClass(cls[0]).find('.userop-msg-block').show();
				},function(){
					_first.removeClass(cls[1]).hide();
					$(this).find('.userop-msg-block').hide();
				});
			},URL.msg)
		}
	}
	/**
	A,点击注册的人数，B，注册成功的人数
	1、判断是否有cookie 如果有则不标记
	2、点注册 执行1  如果无则  记录 cookie 标记A
	3、再点注册 执行 1
	4、登录 判断有没有 cookie 有则更改cookie为登录状态 标记B 否则不算首次注册人
	**/
	,R = { //统计   登录注册功能  所有的登录统计功能
		_init : function(){
			R._getUrl();
			R._iframe = $('<iframe></iframe>').css({width:0,height:0,border:'none',position:'absolute',left:0,top:0,display:'none'});
			$(function(){
				R._iframe.appendTo($('body'));
				R._iframe.attr({src:URL._clickLogin});
			});
			
			//UV
			if(!$.Cookie.get( 'Statistics' , true )){
				var z = new Date()
					,_str
					,_rand;
				_str = z.getHours()+(z.getMinutes() * 60 + z.getSeconds()) * 1000 + z.getMilliseconds();
				_rand = Math.random()*999+_str;
				$.Cookie.set( 'Statistics' , _rand , true ); //注册页面
			}
		}
		,_getUrl : function(){
			var  _tgq = T.getURLval(/tgqdcode=\w+/,/\w+$/)
				,_tgyq = T.getURLval(/tgyqcode=\w+/,/\w+$/)
				,_channelCode = $.Cookie.get('channelCode',true)
				,_href = document.location.href;
				
			_channelCode = _channelCode?'&tgqdcode='+_channelCode:'';
			_tgq = _tgq ? '&tgqdcode='+_tgq:_channelCode;
			_tgyq = _tgyq?'&tgyqcode='+_tgyq:'';
			
			if(window.membership && window.membership.href){
				_href = window.membership.href;
			}
			URL._reg = 'https://sso.jrj.com.cn/sso/passportRegister/register.jsp?fromId=TG&ReturnURL='+ _href + _tgq+_tgyq;
		}
		,_click_reg : function(){
			R._getUrl();
			if(!$.Cookie.get('clickRegStatus')){
				$.Cookie.set( 'clickRegStatus' , 'reg' );
			}
			R._iframe.attr({src:URL._clickLogin+'?RegStatus=true'})
			$(this).attr('href',URL._reg);
			
		}
		,_click_login : function( fn ){ //如果是登录
			T.cookies(function(){
				var  _regcookie = $.Cookie.get('clickRegStatus') 
					,_logincookie = $.Cookie.get('clickLoginStatus') 
					,_user = Member.getUserInfo();
					
				if( _regcookie && _user.userName ){
					if( !_logincookie || String(_logincookie) != String(_user.userId) ){
						R._iframe.attr({src:URL._clickLogin+'?userId='+_user.userId+'&userName='+_user.userName+'&userType='+_user.isAdviser})
						$.Cookie.set('clickLoginStatus',_user.userId);
					}
				}
				fn();
			});
		}
	}
	T._init();
	R._init();
	
	window.membership = Member;
	window.membership.regClick = R._click_reg;
	window.membership.loginClick = R._click_login;
	window.membership.reg_itougu = D.p; //注册 投资顾问
	//window.membership.usability = T.usability; //更新 测评
	
	$(function(){
		I.init();
		Member.update();
		$(document).unbind().mouseenter(function( ){
			Member.update();
		});
	});
									
})();
/**
当用户登录或退出，或第一次打开浏览器且是选择自动登录则刷新页面。
此页公共方法
全局对像 membership
membership.init() // 更新用用户信息，标棋目前用到 init不推荐。
membership.update() // 更新用用户信息 目前公共调用接口，李玲的 待解答咨询 和 标棋在调用。 推荐用update
membership.getUserInfo() //获取用户信息，应用比较广
*/
if(typeof JRJ=="undefined" || !JRJ){
	var JRJ = {};
} 

if(typeof JRJ.ui=="undefined" || !JRJ.ui){
	JRJ.ui = {};
} 

/*JRJ.Mask*/
if (typeof JRJ == "undefined") { 
	JRJ = {};
};
(function ($) {
	var  width , height
		,mask = $('<div class="album-mask"></div>').css({ position: "absolute", top: "0px", left: "0px"});
		
	JRJ._Mask = {
		_init : function(config){
			var config = config || {}; 
			this.config = { opacity: 0.1, bgColor: "#000", zIndex: 9400 }; 
			$.extend(this.config, config);
		}
		,show: function () { 
			var self = this;
			mask.css({opacity:self.config.opacity,backgroundColor:self.config.bgColor,zIndex:self.config.zIndex});
			if( !mask.parent() || mask.parent().length<1 ) mask.appendTo("body"); 
			$(window).bind("resize", { obj: self }, self._resize);
			self._resize();
		}
		,close: function () { mask.remove(); $(window).unbind("resize", this._resize) }
		,_resize: function () {
			width = $(window).width(), height = $(document).height();
			mask.css({ width: width, height: height });
		}
	}
	JRJ._Mask._init();
})(jQuery);

(function($){
	var md5;
	(function(){
		var hexcase=0;
		var b64pad="";
		var chrsz=8;
		function hex_md5(s){return binl2hex(core_md5(str2binl(s),s.length*chrsz));}
		function b64_md5(s){return binl2b64(core_md5(str2binl(s),s.length*chrsz));}
		function str_md5(s){return binl2str(core_md5(str2binl(s),s.length*chrsz));}
		function hex_hmac_md5(key,data){return binl2hex(core_hmac_md5(key,data));}
		function b64_hmac_md5(key,data){return binl2b64(core_hmac_md5(key,data));}
		function str_hmac_md5(key,data){return binl2str(core_hmac_md5(key,data));}
		function md5_vm_test(){return hex_md5("abc")=="900150983cd24fb0d6963f7d28e17f72";}
		function core_md5(x,len){x[len>>5]|=0x80<<((len)%32);x[(((len+64)>>>9)<<4)+14]=len;var a=1732584193;var b=-271733879;var c=-1732584194;var d=271733878;for(var i=0;i<x.length;i+=16)
		{var olda=a;var oldb=b;var oldc=c;var oldd=d;a=md5_ff(a,b,c,d,x[i+0],7,-680876936);d=md5_ff(d,a,b,c,x[i+1],12,-389564586);c=md5_ff(c,d,a,b,x[i+2],17,606105819);b=md5_ff(b,c,d,a,x[i+3],22,-1044525330);a=md5_ff(a,b,c,d,x[i+4],7,-176418897);d=md5_ff(d,a,b,c,x[i+5],12,1200080426);c=md5_ff(c,d,a,b,x[i+6],17,-1473231341);b=md5_ff(b,c,d,a,x[i+7],22,-45705983);a=md5_ff(a,b,c,d,x[i+8],7,1770035416);d=md5_ff(d,a,b,c,x[i+9],12,-1958414417);c=md5_ff(c,d,a,b,x[i+10],17,-42063);b=md5_ff(b,c,d,a,x[i+11],22,-1990404162);a=md5_ff(a,b,c,d,x[i+12],7,1804603682);d=md5_ff(d,a,b,c,x[i+13],12,-40341101);c=md5_ff(c,d,a,b,x[i+14],17,-1502002290);b=md5_ff(b,c,d,a,x[i+15],22,1236535329);a=md5_gg(a,b,c,d,x[i+1],5,-165796510);d=md5_gg(d,a,b,c,x[i+6],9,-1069501632);c=md5_gg(c,d,a,b,x[i+11],14,643717713);b=md5_gg(b,c,d,a,x[i+0],20,-373897302);a=md5_gg(a,b,c,d,x[i+5],5,-701558691);d=md5_gg(d,a,b,c,x[i+10],9,38016083);c=md5_gg(c,d,a,b,x[i+15],14,-660478335);b=md5_gg(b,c,d,a,x[i+4],20,-405537848);a=md5_gg(a,b,c,d,x[i+9],5,568446438);d=md5_gg(d,a,b,c,x[i+14],9,-1019803690);c=md5_gg(c,d,a,b,x[i+3],14,-187363961);b=md5_gg(b,c,d,a,x[i+8],20,1163531501);a=md5_gg(a,b,c,d,x[i+13],5,-1444681467);d=md5_gg(d,a,b,c,x[i+2],9,-51403784);c=md5_gg(c,d,a,b,x[i+7],14,1735328473);b=md5_gg(b,c,d,a,x[i+12],20,-1926607734);a=md5_hh(a,b,c,d,x[i+5],4,-378558);d=md5_hh(d,a,b,c,x[i+8],11,-2022574463);c=md5_hh(c,d,a,b,x[i+11],16,1839030562);b=md5_hh(b,c,d,a,x[i+14],23,-35309556);a=md5_hh(a,b,c,d,x[i+1],4,-1530992060);d=md5_hh(d,a,b,c,x[i+4],11,1272893353);c=md5_hh(c,d,a,b,x[i+7],16,-155497632);b=md5_hh(b,c,d,a,x[i+10],23,-1094730640);a=md5_hh(a,b,c,d,x[i+13],4,681279174);d=md5_hh(d,a,b,c,x[i+0],11,-358537222);c=md5_hh(c,d,a,b,x[i+3],16,-722521979);b=md5_hh(b,c,d,a,x[i+6],23,76029189);a=md5_hh(a,b,c,d,x[i+9],4,-640364487);d=md5_hh(d,a,b,c,x[i+12],11,-421815835);c=md5_hh(c,d,a,b,x[i+15],16,530742520);b=md5_hh(b,c,d,a,x[i+2],23,-995338651);a=md5_ii(a,b,c,d,x[i+0],6,-198630844);d=md5_ii(d,a,b,c,x[i+7],10,1126891415);c=md5_ii(c,d,a,b,x[i+14],15,-1416354905);b=md5_ii(b,c,d,a,x[i+5],21,-57434055);a=md5_ii(a,b,c,d,x[i+12],6,1700485571);d=md5_ii(d,a,b,c,x[i+3],10,-1894986606);c=md5_ii(c,d,a,b,x[i+10],15,-1051523);b=md5_ii(b,c,d,a,x[i+1],21,-2054922799);a=md5_ii(a,b,c,d,x[i+8],6,1873313359);d=md5_ii(d,a,b,c,x[i+15],10,-30611744);c=md5_ii(c,d,a,b,x[i+6],15,-1560198380);b=md5_ii(b,c,d,a,x[i+13],21,1309151649);a=md5_ii(a,b,c,d,x[i+4],6,-145523070);d=md5_ii(d,a,b,c,x[i+11],10,-1120210379);c=md5_ii(c,d,a,b,x[i+2],15,718787259);b=md5_ii(b,c,d,a,x[i+9],21,-343485551);a=safe_add(a,olda);b=safe_add(b,oldb);c=safe_add(c,oldc);d=safe_add(d,oldd);}
		return Array(a,b,c,d);}
		function md5_cmn(q,a,b,x,s,t)
		{return safe_add(bit_rol(safe_add(safe_add(a,q),safe_add(x,t)),s),b);}
		function md5_ff(a,b,c,d,x,s,t)
		{return md5_cmn((b&c)|((~b)&d),a,b,x,s,t);}
		function md5_gg(a,b,c,d,x,s,t)
		{return md5_cmn((b&d)|(c&(~d)),a,b,x,s,t);}
		function md5_hh(a,b,c,d,x,s,t)
		{return md5_cmn(b^c^d,a,b,x,s,t);}
		function md5_ii(a,b,c,d,x,s,t)
		{return md5_cmn(c^(b|(~d)),a,b,x,s,t);}
		function core_hmac_md5(key,data)
		{var bkey=str2binl(key);if(bkey.length>16)bkey=core_md5(bkey,key.length*chrsz);var ipad=Array(16),opad=Array(16);for(var i=0;i<16;i++)
		{ipad[i]=bkey[i]^0x36363636;opad[i]=bkey[i]^0x5C5C5C5C;}
		var hash=core_md5(ipad.concat(str2binl(data)),512+data.length*chrsz);return core_md5(opad.concat(hash),512+128);}
		function safe_add(x,y)
		{var lsw=(x&0xFFFF)+(y&0xFFFF);var msw=(x>>16)+(y>>16)+(lsw>>16);return(msw<<16)|(lsw&0xFFFF);}
		function bit_rol(num,cnt)
		{return(num<<cnt)|(num>>>(32-cnt));}
		function str2binl(str)
		{var bin=Array();var mask=(1<<chrsz)-1;for(var i=0;i<str.length*chrsz;i+=chrsz)
		bin[i>>5]|=(str.charCodeAt(i/chrsz)&mask)<<(i%32);return bin;}
		function binl2str(bin)
		{var str="";var mask=(1<<chrsz)-1;for(var i=0;i<bin.length*32;i+=chrsz)
		str+=String.fromCharCode((bin[i>>5]>>>(i%32))&mask);return str;}
		function binl2hex(binarray)
		{var hex_tab=hexcase?"0123456789ABCDEF":"0123456789abcdef";var str="";for(var i=0;i<binarray.length*4;i++)
		{str+=hex_tab.charAt((binarray[i>>2]>>((i%4)*8+4))&0xF)+
		hex_tab.charAt((binarray[i>>2]>>((i%4)*8))&0xF);}
		return str;}
		function binl2b64(binarray)
		{var tab="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var str="";for(var i=0;i<binarray.length*4;i+=3)
		{var triplet=(((binarray[i>>2]>>8*(i%4))&0xFF)<<16)|(((binarray[i+1>>2]>>8*((i+1)%4))&0xFF)<<8)|((binarray[i+2>>2]>>8*((i+2)%4))&0xFF);for(var j=0;j<4;j++)
		{if(i*8+j*6>binarray.length*32)str+=b64pad;else str+=tab.charAt((triplet>>6*(3-j))&0x3F);}}
		return str;}
		md5 = hex_md5;
	})();
	/**
	 * 登录对话框
	 * @class 登录对话框
	 * @link <a target="_blank" href="../../src-new/ui/LoginDialog/example.html">例子</a>
	 * @param {string} spid 由SSO分配的应用id
	 * @param {string} lhref 当前页地址，心远说目前sso已不用此参数
	 * @param {string} isVerifyCode 图片验证码，应为false
	 * @param {string} returnUrl SSO返回认证结果时需要重定向到的URL
	 * @param {string} registerReturnUrl SSO注册成功重定向到的URL
	 * @param {boolean} isAddTicket 是否要票据，默认为true
	 * @param {string} formTarget form表单target属性，默认为_self
	 * @param {function} callback ajax登录的回调函数，有callback参数就认为启动ajax登录
	 * @param {string} sinaReturnUrl 新浪微博登录返回的url，默认不加返回地址
	 * @param {string} qqReturnUrl 腾讯微博登录返回的url，默认不加返回地址
	 * @param {string} charset 登录接口接收的编码
	 */
	var _href = window.location.href
	,_https = 'https://sso.jrj.com.cn/sso'
	,_http = 'http://sso.jrj.com.cn'
	,_itgurl = 'http://itougu.jrj.com.cn' 
	,URL  = {
		 //_regLink : _https+'/passportRegister/register.jsp?ReturnURL='+_href+'&fromId=TG'+($.Cookie.get('channelCode',true) ? '&tgqdcode='+$.Cookie.get('channelCode',true) : '')// 注册 
		_retPwd : _https+'/retrievePassport/retrieveByMobile.jsp' //重设密码
		,_login : _http+'/sso/passportLogin?LoginID=' //登录
		,_sina : _http+'/sina/sinalogin?fromId=TG_Sina&continueUrl=' + window.location.href //新浪登录
		,_weixin : _https+'/weixinlogin?backurl='+window.location.href+'&from=null&fromId=TG_WEIXIN&tgqdcode=null'
		,_tenxun : _http+'/sso/qqlogin?fromId=TG_QQ&ReturnURL=' + window.location.href //腾讯登录
		,_addUserInfo : _http+'/sso/passport/updatePassportNameOrPwd.jsp?passportId='  //补充用户信息 http://sso.jrjc.local/sso
		,_userAgreement : _itgurl+'/account/service/checkAgreeDeal.jspa?loginId=' //用户协仪
		,_userAgreementJs : 'http://js.jrjimg.cn/zqt-red-1000/js/itouguUserAgreement.js' //用户协仪js
		,_tel : _https+'/passport/sendVerifyCode.jsp' //发送手机验证码接口
		,_tel1 : _https+'/passport/mobileExist.jsp'  //是否是已注册的手机
		,_checktel : _https+'/passport/verifyCode.jsp' //输入验证码判断是否正常
		,_reg : _https+'/passport/addUserPassport.jsp'  //注册
		,_yzimg : 'http://i.jrj.com.cn/register/service/create'
	}
	,T  = {
		_f5 : function(){
			var _nav = navigator.userAgent;
			if(_nav.indexOf('Window')>0 || _nav.indexOf('Mac OS X')>0 || _nav.indexOf('Linux')>0){ //pc
				window.location.reload();
			}else{//ipad
				window.location.href = _href;
			}
		}
		,ajax : function( fn , url , data , datatype , cntenttype , type ){
			datatype = datatype || "jsonp";
			cntenttype = cntenttype || "application/json";
			type = type || 'GET';
			$.ajax({
				type: type,
				url: url,
				contentType: cntenttype,
				dataType: datatype,
				data : data,
				success: function (_data) {
					fn(_data);
				},
				error: function (e) {
					if(window.console && console.log) console.log(e.message);
				}
			});
		}
	}
	,_userAgreement = function(){//以下用于用户阅读功能。
		var _userId = membership.getUserInfo().userId , _item ;
			_item = $.Cookie.get('___I___'); //判断用户是否登录,登录则往下走
		if(_item && _userId){
			$.Cookie.remove('___I___');
			
			_item = $.Cookie.get('itouguUserAgreementClick_'+_userId); //判断用户是否点击事件
			if(!_item){//再获取张阳接口，如果还没有
				$.ajax({ //判断 数据是否存在，不存在调用弹出匡 ajax
					type: 'GET',                                                                    
					url: URL._userAgreement+_userId,   
					contentType: "application/json",                                                
					dataType: 'jsonp',
					callback : 'callback',
					success: function (_data) {
						_item = String(_data.retCode)=='1' ? true : false;
						if(!_item){
							$.getScript(URL._userAgreementJs,function(){
								//无
							});
						}else{
							setTimeout(function(){
								F && F.autoSingOrattention();
							},500);
							$.Cookie.set('itouguUserAgreementClick_'+_userId,'true');
						}
					}
				});
				window.itouguUserAgreementFn = function(){//ajax种入数据
					$.ajax({  //传送数据给张阳，告诉用户已同意协仪
						type: 'GET',
						url: URL._userAgreement+_userId+'&type=1',
						contentType: "application/json",
						dataType: 'jsonp',
						success: function () {}
					});
					setTimeout(function(){
						window.F && F.autoSingOrattention();
					},500);
					$.Cookie.set('itouguUserAgreementClick_'+_userId,'true');
				}
			}
		}else{
			setTimeout(function(){
				window.F && F.autoSingOrattention();
			},500);
		}
	};
	_userAgreement();
	var  _userInput  , _pwdclick = false //登录密码验证
		,_nameclick = false  //登录用户验证
		,_getUserInput = function ( self , val ){
			if(val==""){
				self._showPrompt(U._user._error2);
				return false;
			}
			else if($.getByteLen(val) < 2 ){
				self._showPrompt(U._user._error4);
				return false;
			}
			return true;
		}
		,U = { //完善用户名验证
			_all : {
				 _user_pwd : '用户名与密码均不能为空'
				,_error1 : '登录出错，请刷新页面重试！'
				,_error2 : '此帐户为黑名单'
			}
			,_user : {
				 _node : '长度限制在2-30位，不能使用邮箱或手机号'
				,_error1 : '用户名包含无效字符'
				,_error2 : '用户名不能为空'
				,_error3 : '用户不存在，请联系客服'
				,_error4 : '用户长度限制在2-30位'
				,_error5 : '不能使用手机号作为用户名'
				,_error6 : '不能使用邮箱作为用户名'
				,_error7 : '只能使用汉字、数字、字母、小数点、减号、下划线'
				,_error8 : '用户名不能带有空格'
				,_error9 : '用户名已经存在，请重新输入或直接登陆'
				,_error10 : '用户名不能使用，请重新输入'
				,_error11 : '对不起，查不到您的用户名，请联系客服'
				,_error12 : '完善信息失败，请联系客服'
				,_error13 : '请输入正确的手机号'
			}
			,_pwd : {
				 _node : '6-20个字符（字母、数字、符号），区分大小写 '
				,_error1 : '与登录密码填写不一致，请重新输入'
				,_error2 : '密码不正确'
				,_error3 : '密码不能为空'
				,_error4 : '密码长度限制在6-20位'
				,_error5 : '密码不一致'
				,_error6 : '密码正确'
				,_error7 : '请再次输入密码'
				,_error8 : '不能是小于9位的纯数字'
				,_error9 : '密码不能大于20位'
				,_error10 : '不能包含空格'
				,_error11 : '只能使用字母、数字、符号，区分大小写'
			}
			,_telnode : {
				 _error1 : '请输入正确的手机号'
				,_error2 : '该手机号已被注册'
			}
			,_yz : {
				 _error1 : '验证码错误'
				,_error2 : '验证码不能为空'
				,_error3 : '验证码不能小于4位'
			}
			,_init : function( _obj ){
				for( var key in _obj ){
					U[key] = _obj[key];
				}
				U._error_cls = _obj._error_cls||'';
				U._icon_error_cls = _obj._icon_error_cls||'';
				U._icon_right_cls = _obj._icon_right_cls||'';
				
				U._addEvent();
			}
			,_addEvent : function(){
				if(U._nameInput){
					U._nameInput.bind('focus',U._empty_submit_error);
					U._nameInput.bind('blur',U._checkName);
					U._nameInput.bind("click", U._empty_name);
				};
				if(U._pwdInput){
					U._pwdInput.bind('focus',U._empty_submit_error);
					U._pwdInput.bind('input propertychange',U._checkPwd);
				}
				if(U._pwdInput1){
					U._pwdInput1.bind('input propertychange',U._checkPwd1);
					U._pwdInput1.bind('focus',U._empty_submit_error);
				}
				if(U._tel){ //手机
					U._tel.bind('blur',U._checkTel);
				}
				if(U._yanzheng){//验证
					U._yanzheng.bind('focus',U._empty_yz);
				}
			}
			,_checkForm : function( _fn ){ 
				U._checkName() && U._checkPwd() && U._checkPwd1() && U._checkTel(_fn);
			}
			,_checkName : function(){ //判断用户名
				if(!U._nameInput ||U._nameInput.length<1 ) return true;
				var _str = U._nameInput.val()
					,_tel  = /^0?1[3|4|5|7|8|][0-9]\d{8}$/
					,_email = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
					,_len = $.getByteLen(_str)
					,_kong = /\s/g
					,_replace = _str.replace(/\s/gi,'')
					,_reg = /[^\u4E00-\uFA29|.|\w|_|-]+/g;
				
				if( '' == _replace ){
					U.error_user(U._user._error2);
					U._nameInput.val('');
				}else if(_kong.test(_str)){//用户名不能带有 空格
					U.error_user(U._user._error8);
				}else if( _reg.test(_str) ){ //只能使用汉字、数字、字母、小数点、减号、下划线
					U.error_user(U._user._error7);
				}else if(_len<2){ //用户名小于2
					U.error_user(U._user._error4);
				}else if(_len>30){ //用户名不能大于30
					U.error_user(U._user._error4);
				}else if(_email.test(_str)){//不能使用邮箱
					U.error_user(U._user._error6);
				}else if(_tel.test(_str)){//不能使用手机号
					U.error_user(U._user._error5);
				}else{
					return true;
				}
				return false;
			}
			,_checkPwd : function(){ //判断密码
				if(!U._pwdInput || U._pwdInput.length<1 ) return true;
				var _pwd = U._pwdInput.val()
					,_len = $.getByteLen(_pwd)
					,_reg = /[^\w|\x21-\x2f|\x3a-\x40|\x5b-\x60|\x7b-\x7e]+/g
					,_kong = /\s/g
					,_num = /\D/;
					
				if( '' == _pwd ){
					U.error_pwd1(U._pwd._error3);
				}else if(_kong.test(_pwd)){ //不能包含空格
					U.error_pwd1(U._pwd._error10);
				}else if( _reg.test(_pwd) ){//只允许使用”数字、字母、符号”，不能包含空格
					U.error_pwd1(U._pwd._error11);
				}else if( _len<6 ){ //密码
					U.error_pwd1(U._pwd._error4);
				}else if( _len<9 && _len>=6 && !_num.test(_pwd) ){//数字不能小于9位
					U.error_pwd1(U._pwd._error8);
				}else if( _len>=6 && _len<=20 ){
					U.correct_pwd1();
					return true;
				}else if( _len>20 ){ //密码不能大于20
					U.error_pwd1(U._pwd._error9);
				}else{
					return true;
				}
				return false;
			}
			,_checkPwd1 : function(){
				if(U._pwdInput1){
					var _pwd = U._pwdInput.val() , _pwd1 =  U._pwdInput1.val();
					if( _pwd1 !== _pwd ){
						U.error_pwd2(U._pwd._error5);
						U._pwd_icon2.show().removeClass(U._icon_right_cls).addClass(U._icon_error_cls);
						return false;
					}else{
						U._pwd_icon2.show().removeClass(U._icon_error_cls).addClass(U._icon_right_cls);
						U._empty_pwd1();
					}
				}
				return true;
			}
			,_checkTel : function( fn ){//电话
				if(U._tel && U._tel.length){
					var _tel  = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
					if(_tel.test(U._tel.val())){
						T.ajax(function( _data ){
							if(_data.resultCode == '1' ){
								U._error_tel(U._telnode._error2);
							}else if(_data.resultCode == '0' ){
								U._empty_tel();
								typeof fn == 'function' && fn();
							}else{
								U._error_tel(_data.resultMsg);
							}
						},URL._tel1+'?mobile='+U._tel.val());
					}else{
						U._error_tel(U._telnode._error1);
					}
				}else{
					typeof fn == 'function' && fn();
				}
			}
			,_time : 60
			,_yanzhen_time : function( _ele ){
				_ele.text(U._time+'秒后重发');
				if(U._time > 0 ){
					setTimeout(function(){
						U._yanzhen_time(_ele);
					},1000)
				}else{
					_ele.removeClass('gray').text('获取验证码');
					_ele.click(U._yanzhen);
				}
				U._time--;
			}
			,_yanzhen : function(){ //验证码
				var self = this;
				U._checkTel(function(){
					U._time = 60;
					$(self).addClass('gray').unbind();
					U._mobile(U._tel.val());
					U._yanzhen_time($(self));
				});
				
			}
			,_mobile : function( _tel ){ //发送手机验证码
				T.ajax(function(_data){
					if(String(_data.resultCode == '0')){
						
					}
				},URL._tel+'?mobile='+_tel+'&appParam=TG');
			}
			/* ,_checkMobile : function( _fn ){ //输入验证码判断是否正常
				if( U._tel && U._yanzheng && U._tel.length && U._yanzheng.length ){
					var  _tel = U._tel.val()
						,_code = U._yanzheng.val();
					T.ajax(function(_data){
						if(String(_data.resultCode) == '0'){
							_fn();
						}else{
							U._error_yz();
						}
					},URL._checktel+'?mobile='+_tel+'&code='+_code+'&appParam=TG');
				}else{
					_fn();
				}
			} */
			,correct_pwd1 : function(){ //密码正确
				U._pwd_icon1.show().removeClass(U._icon_error_cls).addClass(U._icon_right_cls);
				U._empty_pwd();
			}
			,error_pwd1 : function(_val){ //密码错误
				U._pwd_node.show().addClass(U._error_cls).text(_val);
				U._pwd_icon1.show().removeClass(U._icon_right_cls).addClass(U._icon_error_cls);
			}
			,error_pwd2 : function(_val){ //密码错误;
				U._pwd_node1.show().addClass(U._error_cls).text(_val);
			}
			,error_user : function( _val ){ //用户名错误
				U._user_node.addClass(U._error_cls).text(_val);
			}
			,_error_tel : function( _val ){ //手机号错误
				U._tel_node.addClass(U._error_cls).text(_val);
				U._tel_icon.show().removeClass(U._icon_right_cls).addClass(U._icon_error_cls);
			}
			,_error_yz : function(){ //验证码错误
				U._yanzheng_node.addClass(U._error_cls).text(U._yz._error1);
			}
			,_empty_name : function(){ //显示默认提示信息
				U._user_node.removeClass(U._error_cls).text(U._user._node);
			}
			,_empty_pwd : function(){ //显示默认提示信息
				U._pwd_node.removeClass(U._error_cls).hide();
			}
			,_empty_pwd1 : function(){ //显示默认提示信息
				U._pwd_node1.hide().removeClass(U._error_cls).text(U._pwd._error7);
			}
			,_empty_tel : function(){ //显示默认提示信息
				U._tel_icon.show().removeClass(U._icon_error_cls).addClass(U._icon_right_cls);
				U._tel_node.removeClass(U._error_cls).text('');
			}
			,_empty_yz : function(){
				U._yanzheng_node.removeClass(U._error_cls).text('');
			}
			,_empty_submit_error : function(){
				U._submit_error && U._submit_error.length && U._submit_error.text('');
			}
			,hasYZM : false
			,_login : function( obj ){
				var self = obj.self;
				/* P._isAddUser = '1';
				P._isResetPwd = '1';
				P._information(self.dialogDiv);
				return; */
				self.loginBtn && self.loginBtn.length && self.loginBtn.unbind('click');
				$.ajax({
					type: 'GET',
					url: URL._login+obj.user+'&Passwd='+obj.small_pwd+obj._autoStr+'&Passwd1='+obj.pwd+'&fromId=TG&ReturnURL='+_href,
					contentType: "application/json",
					dataType: 'jsonp',
					data : {
						 verifyCode:U.yzmValue
						,isVerifyCode : U.hasYZM
					},
					success: function (_data) {
						//self._hideAllPrompt && self._hideAllPrompt();
						if(!_data || _data.result== void 0 ){
							_data = {result:'error'};
						}
						if(_data.needVerifyCode && _data.needVerifyCode == '1' ){
							U.hasYZM = true; 
							self.yzmElement.show();
						}
						var result = String(_data.result);
						if(  result!= '0' ){
							self.loginBtn && self.loginBtn.length && self.loginBtn.text('登录').click(function(){
								self._submit();
							});
							self._refYzm();
							self._hideAllPrompt();
						}
						switch( result ){
							case '0' : { //成功 刷用户	
								var _isAddUser = String(_data.isComplete) , _isResetPwd = String(_data.isResetPwd);
								if( _isAddUser == '0' && _isResetPwd == '0' ){ //不需要完善用户名和密码
									$.Cookie.set('___I___','__');
									membership.loginClick(function(){ //登录监听事件
										if(!self.isLoginCallback){
											T._f5();
										}else{
											self.isLoginCallback();
										}
									});
								}else{ //需要完善用户名或密码
									P._isAddUser = _isAddUser;
									P._isResetPwd = _isResetPwd;
									P._information(self.dialogDiv);
								}
								break;
							}
							case '1' : { //1：用户名包含无效字符
								self._showPrompt(U._user._error1, self.loginBtn);
								break;
							}
							case '2' : { //2：用户名与密码均不能为空
								self._showPrompt(U._all._user_pwd, self.loginBtn);
								break;
							}
							case '3' : { //3：用户不存在
								self._showPrompt(U._user._error3, self.loginBtn);
								break;
							}
							case '4' : { //4：密码不正确
								self._showPrompt(U._pwd._error2, self.loginBtn);
								break;
							}
							case '5' : { //5：ip黑名单
								self._showPrompt(U._user._error2, self.loginBtn);
								break;
							}
							case '7' : {// 表示验证密码为空， 
								self._showPrompt(U._yz._error2, self.loginBtn);
								break;
							}
							case '8' : {//表示验证码不正确
								self._showPrompt(U._yz._error1, self.loginBtn);
								break;
							}
							default:{//登录出错，请刷新页面重试！
								self._showPrompt(U._all._error1, self.loginBtn);
							}
						}
					},
					error: function (e) {
						//console.log(e.message);
					}
				});
			}
		}
		,R = { //此对像为弹窗注册功能
			 _tel : /0?1[3|4|5|7|8|][0-9]\d{8}$/
			,_demo : null //
			,_reg_click : function( _tit ){
				R._html();
				R._tit = _tit || '免费注册爱投顾';
				R._clear_error();
				R._demo = JRJ._JRJ_LoginDialogHtml;
				R._demo.width(800);
				R._demo.tit.html(_tit);
				R._demo.cnt.html('').append(R._innerHTML);
			}
			,_clear_error : function(){

				U._pwdInput.unbind('input propertychange',U._checkPwd);
				U._pwdInput1.unbind('input propertychange',U._checkPwd1);
				
				R._tel_node.text('');
				R._tel_icon.hide();
				R._code_node.text('');
				R._pwd_node.show().removeClass(U._error_cls).text(U._pwd._node);
				R._pwd_node1.show().removeClass(U._error_cls).text(U._pwd._error7);
				R._user_node.removeClass(U._error_cls).text(U._user._node);
				R._pwd_icon1.hide();
				R._pwd_icon2.hide();
				
				R._tel.val('');
				R._code.val('');
				R._pwd.val('');
				R._pwd1.val('');
				R._user.val('');
				U._addEvent();
			}
			,_submit : function(){
				var self = this;
				self._hideAllPrompt = function(){};
				self._showPrompt = function(){};
				U._checkForm(function(){
					var  user = encodeURI(R._user.val())
						,tel = R._tel.val()
						,pwd = R._pwd.val()
						,code = R._code.val()
						,small_pwd = md5(pwd.toLocaleLowerCase())
						,pwd = md5(pwd)
						,_key = /tgqdcode=\w+/
						,_code;
					if(_key.test(_href)){
						_code = String((_href.match(_key)[0]).match(/\w+$/)[0]||'');
					}
					T.ajax(function( _data ){
							if( _data.resultCode == '0' ){ //成功
								//自动登录
								U._login({
									 self : self
									,user:encodeURI(user)
									,pwd:pwd
									,small_pwd:small_pwd
									,_autoStr :''
								});
							}else{
								R._submit_error.text(_data.resultMsg)
							}
						}
						,URL._reg
						,{
							 passportName:user
							//email:
							,mobile:tel
							,password:small_pwd
							,CRCPassword:pwd
							//from:
							,bizSource:'TG'
							,tgqdcode:_code
							,verifyCode:code
						}
					)
				})
			}
			,_cancel : function(){
				P.closePop(JRJ._JRJ_LoginDialogHtml);
			}
			
			,_html : function(){
			
					R._innerHTML = $('<div class="reg-content dialog-cnt add-userinfo">'
									+'<table width="100%">'
										+'<tr>'
											+'<td class="field">手机号：</td>'
											+'<td>'
												+'<div><input type="text" class="txtbox fl" maxlength="30" style="width:200px;"></div>'
												+'<span class="icon fl icon-right-3" style="display:none"></span><span class="note"></span>'
											+'</td>'
										+'</tr>'
										+'<tr class="yanzheng">'
											+'<td class="field">验证码：</td>'
											+'<td><div><input type="text" class="txtbox fl" maxlength="10" style="width:100px;"></div><div class="btn">获取验证码</div>'
											+'<span class="note"></span></td>'
										+'</tr>'
										+'<tr>'
											+'<td class="field">登录密码：</td>'
											+'<td><div><input type="password" class="txtbox fl" maxlength="20" style="width:200px;"></div>'
											+'<span class="icon fl icon-right-3" ></span><span class="note"></span></td>'
										+'</tr>'
										+'<tr>'
											+'<td class="field">确认密码：</td>'
											+'<td><div><input type="password" class="txtbox fl" maxlength="20" style="width:200px;"></div>'
											+'<span class="icon fl icon-right-3"></span><span class="note"></span></td>'
										+'</tr>'
										+'<tr><td colspan="2"><div class="line"></div></td></tr>'
										+'<tr>'
											+'<td class="field">用户名：</td>'
											+'<td>'
												+'<div><input type="text" class="txtbox fl" maxlength="30" style="width:250px;" /></div>'
												+'<div class="note"></div>'
											+'</td>'
										+'</tr>'
									+'</table>'
									+'<div class="md-btn-panel"><div><input class="md-ok" type="button" value="确定"><input class="md-cancel" type="button" value="取消"><span class="red"></span></div></div>'
									+'<div class="reg-login">已有金融界帐号，<a href="javascript:void(0)">直接去登录 > </a></div>'
								+'</div>');
				
				
				var  _ele = R._innerHTML
					,_input = _ele.find('tr td .txtbox');
					
				R._tel= _input.eq(0);
				R._tel_node = _ele.find('tr td .note:eq(0)');
				R._tel_icon = _ele.find('.icon:eq(0)');
				R._code = _input.eq(1);
				R._code_node = _ele.find('tr td .note:eq(1)');
				R._pwd = _input.eq(2);
				R._pwd_node = _ele.find('tr td .note:eq(2)');
				R._pwd1 = _input.eq(3);
				R._pwd_node1 = _ele.find('tr td .note:eq(3)');
				R._user = _input.eq(4);
				R._user_node = _ele.find('tr td .note:eq(4)');
				R._pwd_icon1 = _ele.find('.icon:eq(1)');
				R._pwd_icon2 = _ele.find('.icon:eq(2)');
				
				R._submit_error = _ele.find('.md-btn-panel .red');
				_ele.click(function(){
					R._submit_error.text('');
				})
					
				_ele.find('.md-ok').click(R._submit);
				_ele.find('.md-cancel').click(R._cancel);
				
				_ele.find('.yanzheng .btn').click(U._yanzhen);
				
				
				U._init({
					 _user_node : R._user_node
					,_pwd_node : R._pwd_node
					,_pwd_node1 : R._pwd_node1
					,_nameInput : R._user
					,_pwdInput : R._pwd
					,_pwdInput1 : R._pwd1
					,_error_cls : 'error-msg'  //提示信息 错误时样式
					,_pwd_icon1 : R._pwd_icon1 //密码对错图标
					,_pwd_icon2 : R._pwd_icon2
					,_icon_error_cls : 'icon-error-3'  //图片正确错误样式
					,_icon_right_cls : 'icon-right-3'
					,_tel : R._tel //手机
					,_tel_node : R._tel_node
					,_tel_icon : R._tel_icon
					,_yanzheng : R._code
					,_yanzheng_node : R._code_node
				});
			}
		}
		,P = { //此对像为 完善用户信息
			 _isAddUser : 0
			,_isResetPwd : 0
			,_isRestStatus : true //默认重置成功
			,_information : function( elem ){
				P._informationhtml = true;
				P._isRestStatus = false;
				var _userName ='' , _userPwd='';
				
				if(P._isAddUser=='1'){ //需要设置用户名1
					_userName = '<tr>'
									+'<td class="field">设置用户名</td>'
									+'<td>'
										+'<div><input type="text" class="txtbox fl" maxlength="30" style="width:300px;" /></div>'
										+'<div class="note">'+U._user._node+'</div>'
									+'</td>'
								+'</tr>';
				}
				if(P._isResetPwd=='1'){
					_userPwd = ['<tr>',
									'<td class="field">登录密码</td>',
									'<td>',
										'<div><input type="password" class="txtbox fl" style="width:300px;" maxlength="20" /><span class="icon icon-right-3 fl" style="display:none"></span></div>',
										'<div class="note">'+U._pwd._node+'</div>',
									'</td>',
								'</tr>',
								'<tr>',
									'<td class="field">确认密码</td>',
									'<td>',
										'<div><input type="password" class="txtbox fl" style="width:300px;" maxlength="20" /><span class="icon icon-right-3 fl" style="display:none"></span></div>',
										'<div class="note">'+U._pwd._error7+'</div>',
									'</td>',
								'</tr>'].join('');
				}
				var _elem = ['<div class="md-content md-content-nopadding">',
						'<div class="dialog-cnt add-userinfo">',
						'<p class="c_666">您的金融界和盈利宝账号已合并，为保证正常使用，需要您重新完善信息</p>',
						'<table class="mt30">'+_userName+_userPwd+'</table>',
					'</div>',
					'<div class="md-btn-panel">	<div><input class="md-ok" type="button" value="确定"><input class="md-cancel" type="button" value="取消"><div class="red"></div></div>	</div>',
				'</div>'].join('');
				elem.width(680);
				elem.cnt.html(_elem);
				elem.tit.text('信息完善');
				elem.find('.md-cancel').click(function(){P.closePop(elem)});
				var _tr = elem.cnt.find('tr')
					,_userNum = 9
					,_userNode = 9
					,_pwd1Num = 9
					,_pwd2Num = 9
					,_pwd1Node = 9
					,_pwd2Node = 9
					,_pwd1Icon = 9
					,_pwd2Icon = 9;
				P._tr = _tr;
				if(P._isAddUser=='1'){
					_userNum = 0;
					_userNode = 0;
					_pwd1Num = 1;
					_pwd2Num = 2;
					_pwd1Node = 1;
					_pwd2Node = 2;
					_pwd1Icon = 1;
					_pwd2Icon = 2;
				}else if(P._isAddUser == '0' && P._isResetPwd=='1'){
					_pwd1Num = 0;
					_pwd2Num = 1;
					_pwd1Icon = 0;
					_pwd2Icon = 1;
					_pwd1Node = 0;
					_pwd2Node = 1;
				}
				
				P._user = _tr.eq(_userNum).find('.txtbox');
				P._user_node = _tr.eq(_userNode).find('.note');
				P._pwd1 = _tr.eq(_pwd1Num).find('.txtbox');
				P._pwd2 = _tr.eq(_pwd2Num).find('.txtbox');
				P._pwd_node = _tr.eq(_pwd1Node).find('.note');
				P._pwd_node1 = _tr.eq(_pwd2Node).find('.note');
				P._pwd_icon1 = P._tr.eq(_pwd1Icon).find('.icon'); //密码对错图标
				P._pwd_icon2 = P._tr.eq(_pwd2Icon).find('.icon');
				
				
				elem.cnt.find('.md-ok').click(function(){
					P._information_submit();
				});
				U._init({
					 _user_node : P._user_node
					,_pwd_node : P._pwd_node
					,_pwd_node1 : P._pwd_node1
					,_nameInput : P._user
					,_pwdInput : P._pwd1
					,_pwdInput1 : P._pwd2
					,_error_cls : 'error-msg'  //提示信息 错误时样式
					,_pwd_icon1 : P._pwd_icon1 //密码对错图标
					,_pwd_icon2 : P._pwd_icon2
					,_icon_error_cls : 'icon-error-3'  //图片正确错误样式
					,_icon_right_cls : 'icon-right-3'
					,_submit_error : elem.cnt.find('.md-btn-panel .red')
				});
			}
			,_information_submit : function( ){
				//3种情况  1改用户名，2改密码，3：1，2
				U._checkForm(function(){
					var _userId ='' , _userPwd='' , _pwd_str, _pwd ,_small_pwd , _id = membership.getUserInfo().userId;
					if(P._isAddUser=='1'){ //需要设置用户名
						_userId = '&passportName='+encodeURI(encodeURI(P._user.val()));
					}
					if(P._isResetPwd=='1'){ //改密码
						_pwd_str = P._pwd2.val();
						_small_pwd = md5(_pwd_str.toLocaleLowerCase());
						_pwd = md5(_pwd_str);
						_userPwd = '&password='+_small_pwd+'&CRCPassword='+_pwd;
					}
					$.ajax({  
						type: 'GET',
						//url: 'http://sso.jrjc.local/sso/passport/updatePassport.jsp'+_userId+_userPwd,
						url: URL._addUserInfo+_id+_userId+_userPwd,
						contentType: "application/json",
						dataType: 'jsonp',
						success: function (_data) {
							if(!_data || void 0 == _data.resultCode ){
								_data.result = 'error';
							}
							switch(String(_data.resultCode)){//(0:成功 1:没有该用户 2:该用户名已被使用 3:用户名已被完善 -1:更新失败)
								case '0' : {//0:成功
									membership.loginClick(function(){ //登录监听事件
										T._f5();
									});
									break;
								}
								case '1' : {//1:没有该用户
									U._submit_error.text(U._user._error11);
									break;
								}
								case '2' : {//2:该用户名已被使用
									U._submit_error.text(U._user._error10);
									break;
								}
								case '3' : {//3:用户名已被完善
									U._submit_error.text(U._user._error9);
									setTimeout(T._f5,500);
									break;
								}
								case '7' : {//7:用户名不能为空
									U._submit_error.text(U._user._error2);
									break;
								}
								case '8' : {//8: 用户名长度需为2~30位字符
									U._submit_error.text(U._user._error4);
									break;
								}
								case '9' : {//9:该用户名不可用
									U._submit_error.text(U._user._error10);
									break;
								}
								case '10' : {//10:该用户名不可用
									U._submit_error.text(U._user._error10);
									break;
								}
								case '11' : {//11:用户名不允许使用手机号
									U._submit_error.text(U._user._error5);
									break;
								}
								case '-1' : {//-完善用户名失败
									U._submit_error.text(U._user._error12);
									break;
								}
								default:{//:更新失败 
									U._submit_error.text(_data.resultMsg);
								}
							}
						}
					})
				});
				
			}
			,closePop : function( elem ){
				if(P._isRestStatus==false){//如果没有重置密码或帐号
					membership.logout();
				}
				JRJ._Mask.close();
				elem.removeClass('album-dialog-show');
				elem.css({transform:'scale(.5)',marginTop:'150px',opacity:0});
				setTimeout(function () {elem.remove(); },300);
			}
		};
	
	JRJ.ui.LoginDialog = function(){}
	JRJ.ui.LoginDialog.prototype = {
		_init : function(){
			if(!JRJ._JRJ_LoginDialogHtml){
				var _ele = $('<div class="album-dialog dl_album" style="width: 490px; left:50%; margin-left:-320px; z-index:99999">'
								+'<div class="md-container" style="padding:13px 94px 30px 94px;">'
									+'<i id="ld-btnClose" class="md-close" title="关闭">&nbsp;</i><div class="md-titlebar dl_titlebar"></div>'
									+'<div class="md-body"></div>'
								+'</div>'
							+'</div>').css({transitionDuration:'.3s'});
				_ele.tit = _ele.find('.md-titlebar');
				_ele.cnt = _ele.find('.md-body');
				JRJ._JRJ_LoginDialogHtml = _ele;
			}
								
			var _html = this.dialogHtml();
			this.dialogDiv = JRJ._JRJ_LoginDialogHtml;
			this.dialogDiv.tit.html('欢迎登录爱投顾<span>可用金融界账户登录</span>');
			this.dialogDiv.cnt.html('');
			_html.appendTo(this.dialogDiv.cnt);
			
			//this._bindEvent();
		}
		,dialogHtml : function(){
			var _ele = $(['<div class="md-content dl_md">',
						'<div class="dlg-login clearfix">',
							 '<div class="login-content">',
									'<p class="dl_text">',
									   '<input id="dl_blur" type="text" name="LoginID" maxlength="100" placeholder="输入手机号/邮箱/用户名" value=""/>',
									'</p>',
									'<p class="dl_text">',
									   '<input id="pwd" type="password" name="Passwd" maxlength="22" placeholder="输入密码" value=""/>',
									'</p>',
									'<p class="dl_text yanzheng" style="display:none">',
									   '<input id="yz" type="text" value="" maxlength="4" placeholder="验证码" /> <img id="yzimg" src="'+URL._yzimg+'"/> <i id="yzf5" class="i-yz"></i>',
									'</p>',
									'<p id="ld-Alert" class="dl_red" style="border:none;"></p>',
									'<p class="dl_check">',
									   '<a href="'+URL._retPwd+'" title="">找回密码？</a>',
									   '<label><input name="login" type="checkbox" id="ld-auto-login" />自动登录</label>',
									'</p>',
									'<p class="dl_but">',
										'<a title="" id="ld-btnLogin">登 录</a>',
									'</p>',
							 '</div>',
							 "<div class='aside'>",
								'<h2>第三方登录</h2>',
								'<ul>',
									"<li><a class='i-sina-hover' href="+URL._sina+" title='新浪微博'><i class='i-sina'></i></a></li>",
									"<li><a class='i-weixin-hover' href="+URL._weixin+"><i class='i-weixin'></i></a></li>",
									"<li><a class='i-qq-hover' href="+URL._tenxun+" title='腾讯微博'><i class='i-qq'></i></a></li>",
								'</ul>',
								'<p class="tc"><a class="dl_id" href="javascript:void(0)">还没有账号？<em>立即注册</em></a></p>',
							 '</div>',
							 '<p style="position: absolute;font-size: 12px;left: 0;bottom: 5px;width: 100%;text-align: center;color: #999;padding: 10px 0;">平台内容仅代表个人观点，不构成投资建议，股市有风险，投资需谨慎！</p>',
						'</div>',
					'</div>'].join(''));
					
			this.form = _ele.find(".dlg-login");
			this.nameInput = this.form.find("input[name=LoginID]");			
			this.pwdInput = this.form.find("input[name=Passwd]");				
			this.loginBtn = _ele.find("#ld-btnLogin");	
			this.alertDiv = _ele.find("#ld-Alert");
			this.yzmElement = _ele.find(".yanzheng");
			this.yzmInput = _ele.find("#yz");
			this.yzmImg = _ele.find("#yzimg");
			this.yzmF5 = _ele.find("#yzf5");
			this.autoCheckbox = _ele.find("#ld-auto-login");
			
			//注册监听事件
			_ele.find('.dl_id,.dl_zhuc').attr('href','javascript:void(0)').click(this.registration);
			/* _ele.eq(1).find('.dl_id,.dl_zhuc').attr('href','javascript:void(0)').click(function(){
				self.registration('<em>5秒</em>完成注册，<em>实时</em>关注老师甄选牛股')
			}) */
			return _ele;
		}
		,_submit : function(){
			var  _user = this.nameInput.val().replace(' ','')
				,id = encodeURI(encodeURI(_user)) 
				,pwd = String(this.pwdInput.val())
				,small_pwd
				,isAutoLogin = this.autoCheckbox[0].checked
				,_autoStr = isAutoLogin?'&isPersist=1':'';
			
			small_pwd = md5(pwd.toLocaleLowerCase());
			pwd = md5(pwd);
			if(!this._checkForm()) return;
				
			this.loginBtn.text('登录中...');
			U._login({
				 self : this
				,user:id
				,pwd:pwd
				,small_pwd:small_pwd
				,_autoStr :_autoStr
				,yzm : this.yzmInput
			});
		}
		,_bindEvent: function(){
			var  self = this , isUser = false , isPwd = false , isYzm = false
			,userInfo = function(){ //验证用户名
				var val = self.nameInput.val();
				if(val==""){
					self._showPrompt(U._user._error2);
					return false;
				}
				else if($.getByteLen(val) < 2 ){
					self._showPrompt(U._user._error4);
					return false;
				}
				return true;
			}
			,pwdInfo = function(){
				var val = self.pwdInput.val();
				if(val==""){ //密码不能为空
					self._showPrompt(U._pwd._error3);
					return false;
				}else if($.getByteLen(val) < 6 ){//密码不能小于6位
					self._showPrompt(U._pwd._error4);
					return false;
				};
				return true;
			},yzmInfo = function(){
				var val = self.yzmInput.val();
				if(val==""){ //验证码不能为空
					self._showPrompt(U._yz._error2);
					return false;
				}else if($.getByteLen(val) < 4 ){//验证码不能小于4位
					self._showPrompt(U._yz._error3);
					return false;
				};
				return true;
			};
			
            self.nameInput.bind("click", function(){
				self._hidePrompt()
			});
			self.nameInput.bind("focus", function(event){
				if(_nameclick==true){//哪果输入匡里面有内容 则隐藏 错误提示
					self._hidePrompt();
					_nameclick = false;
				 }
            });
			
			self.pwdInput.bind("blur", function(event){
				isUser && (isPwd = pwdInfo());
            });
			self.pwdInput.bind("focus", function(event){
				isUser = userInfo();
				_nameclick = true;
            });
			self.pwdInput.bind('click',function(){
				isUser && self._hidePrompt();
			});
			
			self.yzmInput.bind('click',function(){
				isUser && isPwd && self._hidePrompt();
			});
			self.yzmInput.bind('focus',function(){
				isPwd = pwdInfo();
				isUser = userInfo();
			});
			self.yzmInput.bind('blur',function(){
				isUser && isPwd && (isYzm = yzmInfo() )
			});
			self.pwdInput.bind("keyup", function(event){
                if(event.keyCode == 13){
                   self._submit();
                }
            });
            self.yzmInput.bind("keyup", function(event){
                if(event.keyCode == 13){
                   self._submit();
                }
            });
			
			self.yzmF5.click(function(){
				self._refYzm();
			});
			
            self.loginBtn.bind("click",function(){self._submit()});
		}
		,popEvent : function(){ //添加事件
			var self = this ;
			this._bindEvent();
			self.closeBtn.bind("click", function(event){
                self.close();
                return false;
            });
			$(window).bind("resize", function(event){                 
                self._setPosition();
            });
            $(window).bind("scroll", function(event){
                self._setPosition();
            });
		}
		,show:function(){ //打开登录对话框
            var self = this;
			
			this._init();
			this.dialogDiv.appendTo($('body'));
			this.dialogDiv.width(490);
			this.closeBtn = this.dialogDiv.find("#ld-btnClose");
			this.popEvent();
			if( U.hasYZM == true ) self.yzmElement.show();
			JRJ._Mask.show();
			self.dialogDiv.css({transitionDuration:'0s',transform:'scale(.5)',marginTop:'-377px'});
			setTimeout(function(){
				self.dialogDiv.css({transitionDuration:'.3s',transform:'scale(1)',marginTop:'-177px',opacity:1});
			},50);
            self.dialogDiv.addClass('album-dialog-show');
			this.nameInput.focus();
			setTimeout(function(){self._setPosition();},100);
		},
		/**
		 * 关闭登录对话框
		 */
		close:function(){
			P.closePop(this.dialogDiv);
		},
		/**
		 * @private
		 */
		_checkForm:function( ){
			var  self = this
				,name = self.nameInput.val()
				,nameLength = $.getByteLen(name)
				,pwd = self.pwdInput.val()
				,pwdLength = $.getByteLen(pwd)
				,yzm = self.yzmInput.val();
			_nameclick = false;
			
			//if(name && nameLength >1 && pwd && pwdLength > 5 && yzm ) return true;
            if(name==""){
				self._showPrompt(U._user._error2, self.nameInput); //用户名不能为空
				return false;
			}else if(nameLength < 2 ){
				self._showPrompt(U._user._error4, self.nameInput);//用户名不能小于2位
				return false;
			}
            if(pwd==""){
				self._showPrompt(U._pwd._error3, self.nameInput);//密码不能为空
				return false;
			}else if(pwdLength < 6 ){
				self._showPrompt(U._pwd._error4, self.nameInput); //密码不能小于6位
				return false;
			}
			if(U.hasYZM == true){
				if(yzm==""){
					self._showPrompt(U._yz._error2, self.nameInput);//验证码不能为空
					return false;
				}
			}
			U.yzmValue = yzm;
			return true;
		},
		/**
		 * @private
		 */
		_showPrompt : function(msg, input){
			var self = this;
			this.alertDiv.html(msg).css({height:'24px',lineHeight:'24px',opacity:1,border:'1px solid #d1183e'});
/* 			setTimeout(function(){
				self.alertDiv.css({});
			},100); */
			if(input){	
                input.focus();
			}
		},
		_refYzm : function(){
			this.yzmImg && this.yzmImg.length>0 && this.yzmImg.attr({src:(URL._yzimg+'?v='+ new Date().getTime())});
		},
		/**
         * @private
         */
        _hidePrompt : function(){
            this.alertDiv.html("").css({height:0,lineHeight:0,opacity:0,border:'none'});
        },
		_hideAllPrompt: function(){
	        var self = this;
	        self._hidePrompt();
			//self.nameInput.val('');
			self.pwdInput.val('');
			self.yzmInput.val('');
	    },
		/**
		 * @private
		 */
		_setPosition: function() {
            var self = this;
			var top = (($(window).height() / 2) - (this.dialogDiv.outerHeight() / 2));
			if( top < 0 ) top = 0;
			// IE6 fix
			if ($.browser.msie && parseInt($.browser.version) <= 6) top = top + $(window).scrollTop();

			this.dialogDiv.css({ 'margin': '-' + this.dialogDiv.height()/2 + 'px 0 0 -' + this.dialogDiv.width() / 2 + 'px' });
			self.dialogDiv.css("position", "fixed");
		}
		,registration : function( ){ //注册功能
			membership.regClick.call( this );
			
			//R._reg_click( '<em>5秒</em>完成注册，<em>实时</em>关注老师甄选牛股' );
		}
	};
	JRJ.ui.isLogin = function( fn ){
		var userInfo = membership.getUserInfo(); //membership.js 接口
		if( fn != undefined && userInfo && userInfo.userId){
			fn && fn(userInfo);
		}else{
			var pop = new JRJ.ui.LoginDialog();
			pop.show();
			return pop;
		}
	};
	JRJ.ui.registration = R._reg_click;
	
	JRJ.ui.getUserInfo = function(){return membership.getUserInfo()}; //membership.js 接口}
})(jQuery);

      


/*
    http://www.JSON.org/json2.js
    2011-10-19

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, regexp: true */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

var JSON;
if (!JSON) {
    JSON = {};
}

(function () {
    'use strict';

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf())
                ? this.getUTCFullYear()     + '-' +
                    f(this.getUTCMonth() + 1) + '-' +
                    f(this.getUTCDate())      + 'T' +
                    f(this.getUTCHours())     + ':' +
                    f(this.getUTCMinutes())   + ':' +
                    f(this.getUTCSeconds())   + 'Z'
                : null;
        };

        String.prototype.toJSON      =
            Number.prototype.toJSON  =
            Boolean.prototype.toJSON = function (key) {
                return this.valueOf();
            };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string'
                ? c
                : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0
                    ? '[]'
                    : gap
                    ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
                    : '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0
                ? '{}'
                : gap
                ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
                : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/
                    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function'
                    ? walk({'': j}, '')
                    : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());

/*
	Watermark v3.1.3 (March 22, 2011) plugin for jQuery
	http://jquery-watermark.googlecode.com/
	Copyright (c) 2009-2011 Todd Northrop
	http://www.speednet.biz/
	Dual licensed under the MIT or GPL Version 2 licenses.
*/
(function(a,h,y){var w="function",v="password",j="maxLength",n="type",b="",c=true,u="placeholder",i=false,t="watermark",g=t,f="watermarkClass",q="watermarkFocus",l="watermarkSubmit",o="watermarkMaxLength",e="watermarkPassword",d="watermarkText",k=/\r/g,s="input:data("+g+"),textarea:data("+g+")",m="input:text,input:password,input[type=search],input:not([type]),textarea",p=["Page_ClientValidate"],r=i,x=u in document.createElement("input");a.watermark=a.watermark||{version:"3.1.3",runOnce:c,options:{className:t,useNative:c,hideBeforeUnload:c},hide:function(b){a(b).filter(s).each(function(){a.watermark._hide(a(this))})},_hide:function(a,r){var p=a[0],q=(p.value||b).replace(k,b),l=a.data(d)||b,m=a.data(o)||0,i=a.data(f);if(l.length&&q==l){p.value=b;if(a.data(e))if((a.attr(n)||b)==="text"){var g=a.data(e)||[],c=a.parent()||[];if(g.length&&c.length){c[0].removeChild(a[0]);c[0].appendChild(g[0]);a=g}}if(m){a.attr(j,m);a.removeData(o)}if(r){a.attr("autocomplete","off");h.setTimeout(function(){a.select()},1)}}i&&a.removeClass(i)},show:function(b){a(b).filter(s).each(function(){a.watermark._show(a(this))})},_show:function(g){var p=g[0],u=(p.value||b).replace(k,b),h=g.data(d)||b,s=g.attr(n)||b,t=g.data(f);if((u.length==0||u==h)&&!g.data(q)){r=c;if(g.data(e))if(s===v){var m=g.data(e)||[],l=g.parent()||[];if(m.length&&l.length){l[0].removeChild(g[0]);l[0].appendChild(m[0]);g=m;g.attr(j,h.length);p=g[0]}}if(s==="text"||s==="search"){var i=g.attr(j)||0;if(i>0&&h.length>i){g.data(o,i);g.attr(j,h.length)}}t&&g.addClass(t);p.value=h}else a.watermark._hide(g)},hideAll:function(){if(r){a.watermark.hide(m);r=i}},showAll:function(){a.watermark.show(m)}};a.fn.watermark=a.fn.watermark||function(p,o){var t="string";if(!this.length)return this;var s=i,r=typeof p===t;if(r)p=p.replace(k,b);if(typeof o==="object"){s=typeof o.className===t;o=a.extend({},a.watermark.options,o)}else if(typeof o===t){s=c;o=a.extend({},a.watermark.options,{className:o})}else o=a.watermark.options;if(typeof o.useNative!==w)o.useNative=o.useNative?function(){return c}:function(){return i};return this.each(function(){var B="dragleave",A="dragenter",z=this,i=a(z);if(!i.is(m))return;if(i.data(g)){if(r||s){a.watermark._hide(i);r&&i.data(d,p);s&&i.data(f,o.className)}}else{if(x&&o.useNative.call(z,i)&&(i.attr("tagName")||b)!=="TEXTAREA"){r&&i.attr(u,p);return}i.data(d,r?p:b);i.data(f,o.className);i.data(g,1);if((i.attr(n)||b)===v){var C=i.wrap("<span>").parent(),t=a(C.html().replace(/type=["']?password["']?/i,'type="text"'));t.data(d,i.data(d));t.data(f,i.data(f));t.data(g,1);t.attr(j,p.length);t.focus(function(){a.watermark._hide(t,c)}).bind(A,function(){a.watermark._hide(t)}).bind("dragend",function(){h.setTimeout(function(){t.blur()},1)});i.blur(function(){a.watermark._show(i)}).bind(B,function(){a.watermark._show(i)});t.data(e,i);i.data(e,t)}else i.focus(function(){i.data(q,1);a.watermark._hide(i,c)}).blur(function(){i.data(q,0);a.watermark._show(i)}).bind(A,function(){a.watermark._hide(i)}).bind(B,function(){a.watermark._show(i)}).bind("dragend",function(){h.setTimeout(function(){a.watermark._show(i)},1)}).bind("drop",function(e){var c=i[0],a=e.originalEvent.dataTransfer.getData("Text");if((c.value||b).replace(k,b).replace(a,b)===i.data(d))c.value=a;i.focus()});if(z.form){var w=z.form,y=a(w);if(!y.data(l)){y.submit(a.watermark.hideAll);if(w.submit){y.data(l,w.submit);w.submit=function(c,b){return function(){var d=b.data(l);a.watermark.hideAll();if(d.apply)d.apply(c,Array.prototype.slice.call(arguments));else d()}}(w,y)}else{y.data(l,1);w.submit=function(b){return function(){a.watermark.hideAll();delete b.submit;b.submit()}}(w)}}}}a.watermark._show(i)})};if(a.watermark.runOnce){a.watermark.runOnce=i;a.extend(a.expr[":"],{data:function(c,d,b){return!!a.data(c,b[3])}});(function(c){a.fn.val=function(){var e=this;if(!e.length)return arguments.length?e:y;if(!arguments.length)if(e.data(g)){var f=(e[0].value||b).replace(k,b);return f===(e.data(d)||b)?b:f}else return c.apply(e,arguments);else{c.apply(e,arguments);a.watermark.show(e);return e}}})(a.fn.val);p.length&&a(function(){for(var b,c,d=p.length-1;d>=0;d--){b=p[d];c=h[b];if(typeof c===w)h[b]=function(b){return function(){a.watermark.hideAll();return b.apply(null,Array.prototype.slice.call(arguments))}}(c)}});a(h).bind("beforeunload",function(){a.watermark.options.hideBeforeUnload&&a.watermark.hideAll()})}})(jQuery,window);
(function () {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame']
                                   || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function (callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function () { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
}());

if(typeof JRJ == "undefined"){
	JRJ = {}
}

(function($){
	JRJ.Mask = function(config){
		var config = config || {};
		this.config = {
			bgColor: "#000",
			zIndex: 9500
		}
		$.extend(this.config, config);
	}

	JRJ.Mask.prototype = {
		show: function(){
			var self = this, cfg = this.config;
			self.mask = $('<div class="album-mask"></div>');
			self.mask.css({
				position: "absolute",
				zIndex: cfg.zIndex,
				top: "0px",
				left: "0px",
				width: $(window).width()+'px',
				height: $(document).height()
			});

			if(navigator.appVersion.indexOf("MSIE 6.0") != -1){
				self.mask.bgiframe();
			}

			self.resizeHandler = function(event){
				event.data.obj._resize();
			}


			self.mask.appendTo("body");
			requestAnimationFrame(function () {
			    self.mask.addClass('album-mask-show');
			});

			//$('body').css({ 'overflow': 'hidden' });

			$(window).bind("resize", {obj: self}, self.resizeHandler);
		},
		close: function(){
			this.mask.remove();
			$(window).unbind("resize", this.resizeHandler);
			//$('body').css({ 'overflow': 'auto' });
		},
		_resize: function(){
			this.mask.css({
				width: $(window).width()+20+'px',
				height: $(document).height()
			});
		}
	}
})(jQuery);

(function($){
	JRJ.DialogBase = function(config){
		this.config = {
			opacity: 0.5,
			bgColor: "#000",
			className: null,
			html: null,
			hasMask: true,     //是否需要罩层
			isFixed: true,     //是否fixed定位
			isSetPosition: true,   //是否使用默认的方式设置位置
			zIndex: 9400
		}
		$.extend(this.config, config);
		this.init();
	}

	JRJ.DialogBase.prototype = {
		init: function(){
			var self = this, cfg = this.config;
			
			self.outerDiv = $('<div class="album-dialog"><div class="md-container"></div></div>');
			self.container = self.outerDiv.find(".md-container");
			if(cfg.className){
				self.outerDiv.addClass(cfg.className); 
			}
			if(cfg.html){
				self.container.html(cfg.html);
			}

			this.resetPositionHandler = function(event){
				event.data.obj.resetPosition();
			}

			if (cfg.isFixed) {
			    if ($.browser.msie && parseInt($.browser.version) <= 6) {
			        $(window).bind("scroll", { obj: self }, self.resetPositionHandler);
			    } else {
			        self.outerDiv.css("position", "fixed");
			    }
			    $(window).bind("resize", { obj: self }, self.resetPositionHandler);
			} else {
			    self.outerDiv.css({ 'position': 'absolute' });
			}

			if(cfg.hasMask){
				self.mask = new JRJ.Mask({opacity: cfg.opacity, bgColor: cfg.bgColor, zIndex: cfg.zIndex});	
			}
			
			self.outerDiv.appendTo("body");

			self.outerDiv.bind('mouseup',function (e) {
			    e.stopPropagation();
			});
			
			//是否设置位置
			if(cfg.isSetPosition || cfg.isFixed){
				self.resetPosition();
			}
		},
		show: function(){
		    var self = this;
		    if(self.mask){
		        self.mask.show();
		    }
		    self.outerDiv.addClass('album-dialog-show');
            //解决webkit模糊问题 - start
		    //self.getContainer().css({ '-webkit-filter': 'blur(0)' });
		    //setTimeout(function () { self.getContainer().css({ '-webkit-filter': 'none' }); }, 100);
		    //解决webkit模糊问题 - end

			setTimeout(function(){
			    self.resetPosition();
			},300);
		},
		close: function(){
		    var self = this;
		    self.container.css({ 'transition': 'all 0.3s cubic-bezier(.37,-0.04,.45,1.54)' });
			self.outerDiv.removeClass('album-dialog-show');
			setTimeout(function () {
			    self.container.css({ 'transition': 'none' });
			    self.outerDiv.remove();
			}, 300);
			if(self.mask){				
				self.mask.close();
			}
			if(self.isFixed){
				$(window).unbind(self.resetPositionHandler)
			}
			//$('body').css({ 'overflow': 'auto' });
		},
		getEntity: function(){
			return this.outerDiv;
		},
		getContainer: function(){
			return this.container;
		},
		setHTML: function(html){
			var self = this;
			self.container.html(html);
		},
		setPosition: function(left, top){		
		    this.outerDiv.css({
				top: top + 'px',
				left: left + 'px'
		    });

		
		},
		resetPosition: function (ele) {
		    var top = (($(window).height() / 2) - (this.outerDiv.outerHeight() / 2));
		    var left = ($(window).width() / 2) - (this.outerDiv.outerWidth() / 2);
		    // IE6 fixed
		    if ($.browser.msie && parseInt($.browser.version) <= 6) top = top + $(window).scrollTop();
		    if (this.config.isFixed) {
		        this.outerDiv.css({ 'margin': '-' + this.outerDiv.height() / 2 + 'px 0 0 -' + this.outerDiv.width() / 2 + 'px' });
		    } else {
		        this.outerDiv.css({ 'margin': '0 0 0 -' + this.outerDiv.width() / 2 + 'px',top:'100px' });
		    }

		    //if ($.browser.msie && parseInt($.browser.version) < 9) {
		    //    this.setPosition(left, top);
		    //}
		}
	}
})(jQuery);

(function($){
    var ALERT_TMPL = '<div class="md-content" style="padding:20px;">{content}</div><div class="md-btn-panel"><input class="md-ok" type="button" onfocus="blur()" value="确定" /></div>';
    var COMFIRM_TMPL = '<div class="md-content" style="padding:20px;">{content}</div><div class="md-btn-panel"><input class="md-ok" type="button" onfocus="blur()" value="确定" /><input class="md-cancel" type="button" value="取消" /></div>';
    var PROMPT_TMPL = '<div class="md-content" style="padding:20px;"><div class="md-content-prompt"><i></i>{content}</div></div>';

	var DEFAULT_CONFIG = {
		message: "",
		trigger: null,
		hasMask: false,
		isFixed: false,   
		isSetPosition: false,
		hasAnimate: true
	};	
	JRJ.MiniAlerts = {
		/*
		 * @param {object}
		   config{
				message: "",  //提示语
				trigger: null, //触发锚点DOM
				hasAnimate: true  //是否要show hide动画效果
		   }
		 **/
		alert: function(config){		
			var self = this;
			self.config = $.extend({}, DEFAULT_CONFIG, config);

			self.config.hasMask = false;  //确保alert没有mask
			self.config.className = "md-mini-alert";
			self.config.html = ALERT_TMPL.replace("{content}", self.config.message);

			self._init("alert");
		},
		/*
		 * @param {object}
		   config{
				message: "",  //提示语
				trigger: null, //触发锚点DOM
				hasAnimate: true  //是否要show hide动画效果
		   }
		 **/
		confirm: function(config){
			var self = this;
			self.config = $.extend({}, DEFAULT_CONFIG, config);

			self.config.hasMask = false;  //确保confirm没有mask
			self.config.className = "md-mini-confirm";
			self.config.html = COMFIRM_TMPL.replace("{content}", self.config.message);

			self._init("confirm");
		},
		/*
		 * @param {object}
		   config{
				message: "",  //提示语
				trigger: null, //触发锚点DOM
				hasMask: false, //是否要罩层，默认为false
				hasAnimate: true  //是否要show hide动画效果
		   }
		 **/
		prompt: function(config){
			var self = this;
			self.config = $.extend({}, DEFAULT_CONFIG, config);

			self.config.className = "md-mini-prompt";
			self.config.html = PROMPT_TMPL.replace("{content}", self.config.message);

			self._init("prompt");
		},
		_init: function(type){
			var self = this, cfg = self.config;

			self.trigger = cfg.trigger ? $(cfg.trigger) : null;

			if (self.isShow) {//防多次点击
			    self.close();
			}

			self.dlg = new JRJ.DialogBase( cfg );
			self.entity = self.dlg.getEntity();
			self.entity.find('.md-container').css({ 'padding': '0' });

			switch(type){
				case "alert":
					self.entity.find(".md-ok").click(function(){
						if( cfg.callback ) cfg.callback();
						self._hide();
					});
					break ;
				case "confirm":
					self.entity.find(".md-ok").click(function(){
						if(self.config.hasAnimate){
							self.entity.animate({top:self.animateArgs.startTop, height: 0}, 
								200,
								function(){
									self.close();
								});			
						}else{
							self.close();
						}
						
						if( cfg.callback ) cfg.callback();
					});
					self.entity.find(".md-cancel").click(function(){

						if(self.config.hasAnimate){
							self.entity.animate({top:self.animateArgs.startTop, height: 0}, 
								200,
								function(){
									self.close();
								});			
						}else{
							self.close();
						}
					});
					break ;
				case "prompt":

					break ;
			}
			
			self._show(type);
		},
		_show: function(type){
			var self = this, offset;

			if(self.timer){
				window.clearTimeout(self.timer);
				$('div.md-mini-prompt').remove();
				self.timer = null;
			}

			self.entity.addClass('album-dialog-show');

			if( type == "prompt" || type == "alert"){
				self.timer = setTimeout(function(){self._hide(type, false);}, 1500);
			}

			self.animateArgs = {};
			if (self.trigger) {
				offset = self.trigger.offset();
				self.animateArgs.height = self.entity.height();
			    //if ($.browser.msie && parseInt($.browser.version) < 9) {

				if (offset.left + self.entity.outerWidth() > $(window).width()) {
				    self.animateArgs.left = offset.left - self.entity.outerWidth() + self.trigger.outerWidth();
				} else {
				    self.animateArgs.left = offset.left - self.entity.outerWidth() / 2 + self.trigger.outerWidth() / 2;
				}
                    
				    self.animateArgs.top = offset.top  - $(window).scrollTop() - 50;
				//} else {
				//    self.animateArgs.left = offset.left - self.entity.outerWidth() / 2 + self.trigger.outerWidth() / 2 + self.trigger.outerWidth() / 2;
				//    self.animateArgs.top = offset.top - self.trigger.height()  - $(window).scrollTop() - 10;
				//}
				    self.animateArgs.startTop = offset.top - $(window).scrollTop();
			} else {
				self.animateArgs.height = self.entity.height();
				self.animateArgs.left = $(window).width() / 2 - self.entity.outerWidth()/2;
				self.animateArgs.top = $(window).height() / 2 - self.entity.outerHeight() / 2;
				self.animateArgs.startTop = $(window).height() / 2 + self.entity.outerHeight() / 2;
			}

            if (!self.config.isFixed) {
			    self.animateArgs.top += $(window).scrollTop();
			    self.animateArgs.startTop += $(window).scrollTop();
            }
			
			//特殊，覆盖至编辑区域
			if(self.trigger && self.config.bCover){
				self.animateArgs.height = self.entity.height();
				self.animateArgs.left = $(self.trigger).offset().left + $(self.trigger).width()/2 - self.entity.outerWidth()/2;
				self.animateArgs.top = $(self.trigger).height() / 2 - self.entity.outerHeight() / 2 + $(self.trigger).offset().top - $(window).scrollTop();
				self.animateArgs.startTop = $(self.trigger).height()/2 + self.entity.outerHeight()/2 + $(self.trigger).offset().top;
			}
			
			if(self.dlg.mask){
				self.dlg.mask.show();
			}

			if(self.config.hasAnimate){
			    self.dlg.setPosition(self.animateArgs.left, self.animateArgs.startTop);
				self.entity.css("height", 0).show();
				self.entity.animate({top: self.animateArgs.top, height: self.animateArgs.height}, 
					200,
					function(){});			
			}else{
				self.dlg.setPosition(self.animateArgs.left, self.animateArgs.top);
				self.entity.show();
			}
			self.isShow = true;
		},
		_hide: function(cfg, notDoCallback){
			var self = this;
			
			if(self.timer){
				self.timer = null;
			}

			if(self.config.hasAnimate){
				self.entity.animate({top:self.animateArgs.startTop, height: 0}, 
					200,
					function(){
						if(self.config && self.config.callback && !notDoCallback){
							self.config.callback();
						}
						self.close();
					});			
			}else{
				if(self.config && self.config.callback && !notDoCallback){
					self.config.callback();
				}
				self.close();
			}

			self.entity.removeClass('album-dialog-show');
			setTimeout(function () { self.entity.remove(); }, 300);
		},
		close: function(){
			var self = this;
			if(self.dlg){
				if(self.dlg.mask){
					self.dlg.mask.close();
				}
				self.dlg.close();
				self.isShow = false;	
				
				if(self.trigger && self.config.bCover){
					self.trigger.focus();
				}
			}
		}
	}
})(jQuery);


(function($){
	var ALERT_TMPL = '<i class="md-close" title="关闭">&nbsp;</i>'
			+'		<div class="md-titlebar">{title}</div>'
			+'		<div class="md-content" style="padding:20px;">{content}</div>'
			+'		<div class="md-btn-panel">'
			+'			<input class="md-ok" type="button" value="{sure}" />'
			+'		</div>'
			+'	</div>'
			+'</div>';
	var CONFIRM_TMPL = '<i class="md-close" title="关闭">&nbsp;</i>'
			+'		<div class="md-titlebar">{title}</div>'
			+ '		<div class="md-content" style="padding:20px;">{content}</div>'
			+'		<div class="md-btn-panel">'
			+ '			<input class="confirm-ok btn_confirm" type="button" onfocus="blur()" value="{sure}" /><input class="confirm-cancel btn_confirm" type="button" value="{cancel}" />'
			+'		</div>'
			+'	</div>'
			+'</div>';
	var DEFAULT_CONFIG = {
		title: "提示",
		message: "",  //提示语
		zIndex: 9500,
		okCallback: null, //ok回调
		cancelCallback: null //cancel回调，关闭时也触发
	}
	JRJ.Alerts = {
		/*
		 * @param {object}
		   config{
				title: "提示",  //标题
				message: ""      //提示语
				okCallback: null, //ok回调
				cancelCallback: null //cancel回调，关闭时也触发
		   }
		 **/
		alert: function(config){
			var self = this, temp;
			self.config = $.extend({}, DEFAULT_CONFIG, config);

			self.config.className = "md-alert";
			temp = ALERT_TMPL.replace("{title}", self.config.title || "提示")
								.replace("{sure}", self.config.okButton || "确定");

			self.config.html = temp.replace("{content}", self.config.message);

			self._init("alert", typeof self.config.autoClose == 'undefined' ? true : self.config.autoClose);
		},
		/*
		 * @param {object}
		   config{
				title: "提示框",  //标题
				message: "",      //提示语
				okCallback: null, //ok回调
				cancelCallback: null //cancel回调，关闭时也触发
		   }
		 **/
		confirm: function(config){
			var self = this, temp;
			self.config = $.extend({}, DEFAULT_CONFIG, config);

			self.config.className = "md-confirm";
			temp = CONFIRM_TMPL.replace("{title}", self.config.title || "确认提示")
								.replace("{sure}", self.config.okButton || "确定")
								.replace("{cancel}", self.config.cancelButton || "取消");

			
			self.config.html = temp.replace("{content}", self.config.message);

			self._init("confirm");
		},
		_init: function(type, bAutoclose){
			var self = this, cfg = self.config;
			

			self.dlg = new JRJ.DialogBase( cfg );
			self.entity = self.dlg.getEntity();

			var okBtn, cancelBtn, closeBtn;
			closeBtn = self.entity.find(".md-close");

			switch(type){
				case "alert":
					okBtn = self.entity.find(".md-ok");
					
					okBtn.click(function(){
						if( cfg.okCallback ) cfg.okCallback();
						self._hide();
					});
					okBtn.keypress( function(e) {
						//enter esc退出
						if( e.keyCode == 13 || e.keyCode == 27 ) okBtn.trigger('click');
					});
					break ;
				case "confirm":
					okBtn = self.entity.find(".confirm-ok");
					cancelBtn = self.entity.find(".confirm-cancel");
					
					okBtn.click(function(){
						if( cfg.okCallback ) cfg.okCallback();
						self._hide();
					});
					cancelBtn.click(function(){
						self.close();
					});
					okBtn.keypress( function(e) {
						if( e.keyCode == 13 ) okBtn.trigger('click');
						else if( e.keyCode == 27 ) cancelBtn.trigger('click');
					});
					cancelBtn.keypress( function(e) {
						if( e.keyCode == 13 || e.keyCode == 27 )
						  cancelBtn.trigger('click');
					});
					break;
			}

			closeBtn.click(function(){
				self.close();
			});

			
			self.dlg.show();
			//okBtn.focus();	
			
			if(type == "alert" && !!bAutoclose){
				setTimeout(function(){self._hide();}, 1500);
			}
		},
		_hide: function(){
			this.dlg.close();
		},
		close: function(){
			var self = this, cfg = self.config;
			if( cfg.cancelCallback ) cfg.cancelCallback();
			self.dlg.close();
		}
	}
})(jQuery);

(function($){
    var DEFAULT_CONFIG = {
        title: "对话框",
        noTitle:false,
        noPadding: false,
        closeIfShowed: true,
        width: 300,
        content: "",
        okBtnText: "确定",
        cancelBtnText: "取消",
        noteText: '',
        customClass: '',
        iframeWidth: null,
        iframeHeight:null,
		hasCloseBtn: true,
		hasOkBtn: true,
		hasCancelBtn: true,
		hasBtn: true,
		okCallback: null,
		cancelCallback: null,
		trigger: null,
		offsetLeft: 0,
		offsetTop: 0
	};
	JRJ.Dialogs = {
		/*
		 * @param {object}
		   config{
			    title: "对话框",
                width: 300,
				content: "",
				okBtnText: "确定",
				cancelBtnText: "取消",
				hasCloseBtn: true,
				hasOkBtn: true,
				hasCancelBtn: true,
				okCallback: function,
				cancelCallback: function,
				isFixed: false  //默认为true
		   }
		 **/
		standardDialog: function(config){
			var self = this;
			self.config = $.extend({}, DEFAULT_CONFIG, config);

			var html = '';
			if(self.config.hasCloseBtn){
				html += '<i class="md-close" title="关闭">&nbsp;</i>';
			}
			if (!self.config.noTitle) {
			    html += '<div class="md-titlebar">' + self.config.title + '</div>';
			}
			html += '<div class="md-body">';
			html += '	<div class="md-content ' + (self.config.noPadding ? ' md-content-nopadding' : '') + ' ' + (self.config.noTitle ? ' md-content-notitle' : '') + '">';
			html += self.config.content ;
			html += '	</div>';
			if (self.config.hasBtn) {

			    html += '	<div class="md-btn-panel">';
			    html += '	<div>';
			    if (self.config.hasOkBtn) {
			        html += '<input class="md-ok" type="button" value="' + self.config.okBtnText + '" />'
			    }
			    if (self.config.hasCancelBtn) {
			        html += '<input class="md-cancel" type="button" value="' + self.config.cancelBtnText + '" />'
			    }
			    html += '	</div>';
			}
			if (typeof self.config.noteText != 'undefined' && self.config.noteText != '') {
			    html += '<div class="note-text">' + self.config.noteText + '</div>';
			}

			html += '	</div>';
			html += '</div>';

			self.config.html = html;

			self._init("standard");
		},
		/*
		 * @param {object}
		   config{
				content: "",  //对话框内容
				hasCloseBtn: true,  //是否要关闭按钮
				isFixed: false  //是否fixed定位，默认为true
		   }
		 **/
		customDialog: function(config){
			var self = this;
			self.config = $.extend({}, DEFAULT_CONFIG, config);
			
			self.config.html = '<i class="md-close" title="关闭">&nbsp;</i><div class="md-content">'+ self.config.content +'</div>';

			self._init("custom");
		},
		/*
		 * @param {object}
		   config{
				content: "",  //对话框内容
				trigger: , //锚点DOM选择器
				offsetLeft: 0, //对话框定位的left偏移值
				offsetTop: 0   //对话框定位的top偏移值
		   }
		 **/
		miniDialog: function(config){
			var self = this;
			self.config = $.extend({}, DEFAULT_CONFIG, config);
			
			self.config.hasMask = false;
			self.config.isFixed = false;
			self.config.isSetPosition = false;
			self.config.html = '<div class="md-content">'+ self.config.content +'</div>';

			self._init("mini");
		},
		iframeDialog: function (config) {
		    var self = this;
		    self.config = $.extend({}, DEFAULT_CONFIG, config);

		    var html = '';
		    if (self.config.protocolHtml) {
		        html += ['<div class="md-protocol">',
		    	       '<a class="protocol-read has-read"></a>',
	    	       		'<h1>' + self.config.protocolHtml.title + '</h1>',
	    	       		'<div class="protocol-cnt">' + self.config.protocolHtml.content + '</div>',
	    	       		'<div class="jrj-tr mr30 protocol-btn"><a class="btn btn-4 has-read">已阅读</a></div>',
		    	       '</div>'].join('');
		    }
		    if (self.config.hasCloseBtn) {
		        html += '<i class="md-close" title="关闭">&nbsp;</i>';
		    }
		    if (!self.config.noTitle) {
		        html += '<div class="md-titlebar jrj-clear" style="width:' + (self.config.customClass == '' ? self.config.width - 20 + 'px' : 'auto') + '">';
		        html += '<span class="jrj-fl middle">' + self.config.title + '</span>';
		        html += '<div class="md-titlebar-r jrj-fr">' + self.config.titleRight + '</div>';
		        html += '</div>';
		    }
		    html += '<div class="md-body" style="width:' + (self.config.customClass == '' ? self.config.width + 'px' : 'auto') + '">';
		    html += '	<div class="md-content' + (self.config.noTitle ? ' md-content-notitle' : '') + '">';
		    html += '	<div class="md-content-inner">';
		    html += self.config.content;
		    html += '	</div>';
		    html += '	</div>';
		    if (self.config.hasBtn) {

		        html += '	<div class="md-btn-panel">';
		        if (self.config.hasCancelBtn) {
		            html += '<input class="md-cancel" type="button" value="' + self.config.cancelBtnText + '" />'
		        }
		        if (self.config.hasOkBtn) {
		            html += '<input class="md-ok" type="button" value="' + self.config.okBtnText + '" />'
		        }
		        html += '	</div>';
		    }
		    if (typeof self.config.noteText != 'undefined' && self.config.noteText != '') {
		        html += '<div class="note-text">' + self.config.noteText + '</div>';
		    }
		    html += '</div>';

		    self.config.html = html;

		    self._init("iframeDialog");
		},
		_init: function(type){
			var self = this, cfg = self.config, trigger, offset;
			
			if (self.isShow && cfg.closeIfShowed) {//防多次点击
			    self.close();
			}

			self.dlg = new JRJ.DialogBase( cfg );
			self.entity = self.dlg.getEntity();

			var okBtn, cancelBtn, closeBtn;
			okBtn = self.entity.find(".md-ok");
			cancelBtn = self.entity.find(".md-cancel");
			closeBtn = self.entity.find(".md-close");
			
			if (cfg.customClass != '') {
			    self.entity.addClass(cfg.customClass);
			}

			self.entity.css({ width: (self.config.width + 70) + 'px' });//70为dialog-effect中定义的padding:0 35px;
			self.entity.css({ 'margin': '-' + self.entity.height() / 2 + 'px 0 0 -' + self.entity.width() / 2 + 'px' });

			switch(type){
				case "standard":
					okBtn.click(function(){				
						var notClose = false;
						if( cfg.okCallback ) notClose = cfg.okCallback();
						//1.返回true不关闭对话框，2.无返回或返回false则关闭
						if(!notClose){
							self._hide();
						}
					});
					cancelBtn.click(function(){
						self.close();
					});
					okBtn.keypress( function(e) {
						if( e.keyCode == 13 ) okBtn.trigger('click');
						else if( e.keyCode == 27 ) cancelBtn.trigger('click');
					});
					cancelBtn.keypress( function(e) {
						if( e.keyCode == 13 || e.keyCode == 27 )
						  cancelBtn.trigger('click');
					});
					closeBtn.click(function(){
						self.close();
					});
					
					break ;
				case "custom": 
					closeBtn.click(function(){
						self.close();
					});
					break ;
				case "mini":
					trigger = $(cfg.trigger);
					offset = trigger.offset();
					self.dlg.setPosition(offset.left - self.entity.outerWidth()/2 + trigger.outerWidth()/2 + cfg.offsetLeft, offset.top - self.entity.outerHeight() + cfg.offsetTop);
					break;
			    case "iframeDialog":
			        //ie6设style="overflow-x: hidden; overflow-y: visible;"还是有横滚。
			        self.contentIframe = $('<iframe frameborder="0" allowtransparency="true"></iframe>');
			        //给iframe绑定this，供其子页调用对话框方法。
			        self.contentIframe[0]._thisDialog = self;
			        self.contentIframe.attr("scrolling", cfg.ifrScroll);
			        self.contentIframe.attr("src", cfg.ifrSrc);
			        self.contentIframe.css({ "width": (self.config.iframeWidth ? self.config.iframeWidth + 'px' : self.entity.find('.md-content').outerWidth()), backgroundColor: "transparent" });//, 'height': cfg.ifrHeight
			        if (self.config.iframeHeight) {
			            self.contentIframe.css({ "height": self.config.iframeHeight + 'px' });
			        }
			        //self.contentIframe[0].style[Modernizr.prefixed('transition')] = 'all .3s';
			        if (cfg.ifrClass) { self.contentIframe.addClass(cfg.ifrClass); }

			        if (cfg.ifrReHeight) {
			            this.contentIframe.bind("load", { obj: self }, function (event) {
			                var thisObj = event.data.obj;
			                if (!self.config.iframeHeight) {
			                    thisObj.resizeIfrH();
			                }
			                thisObj.dlg.resetPosition();
			            });
			        }
			        self.entity.find(".md-content-inner").append(self.contentIframe).append(self.config.bottomContent);

			        self.dlg.resetPosition();


			        okBtn.click(function () {
			            var notClose = false;
			            if (cfg.okCallback) notClose = cfg.okCallback();
			            //1.返回true不关闭对话框，2.无返回或返回false则关闭
			            if (!notClose) {
			                self._hide();
			            }
			        });
			        cancelBtn.click(function () {
			            self.close();
			        });
			        okBtn.keypress(function (e) {
			            if (e.keyCode == 13) okBtn.trigger('click');
			            else if (e.keyCode == 27) cancelBtn.trigger('click');
			        });
			        cancelBtn.keypress(function (e) {
			            if (e.keyCode == 13 || e.keyCode == 27)
			                cancelBtn.trigger('click');
			        });
			        closeBtn.click(function () {
			            self.close();
			        });

			        self.entity.find(".has-read").click(function () {
			            self.hideProtocol();
			        });

			        if (cfg.enableKeyCtrl) {
			            $(document).keyup(function (e) {
			                if (self.isShow) {
			                    if (e.keyCode == 27) { // esc keycode
			                        self.close();
			                    } else if (e.keyCode == 13) {// enter keycode
			                        okBtn.trigger('click');
			                    }
			                }
			            });
			        }

			        break;
			}

			if(cfg.isFixed){
				$('body').css({ 'overflow': 'hidden' });
			}
			self.dlg.show();
			self.isShow = true;
			okBtn.focus();
		},
		_hide: function(){
			this.dlg.close();
			$('body').css({ 'overflow': 'auto' });
			self.isShow = false;
		},
		close: function(condition){
		    var self = this,
                cfg = self.config,
		        _flag = true;

		    if (typeof condition != 'undefined' && condition != null) {
		        var _condition = $.extend({
		            execCancel: true
		        }, condition);

		        if (_condition.execCancel) {
		            _flag = true;
		        } else {
		            _flag = false;
		        }
		    }

		    if (cfg.cancelCallback && _flag) {
		        cfg.cancelCallback();
		    }

			$('body').css({ 'overflow': 'auto' });
			self.dlg.close();
			self.isShow = false;
		},
		setTitle: function(title){
			this.entity.find(".md-titlebar").html(title);
		},
		setContent: function(content){
			this.entity.find(".md-content").html(content);
		},
	    showLoading: function () {
	        var self = this;
	        this.entity.find(".md-mask").show();
	        this.entity.find(".md-mask .md-mask-inner-finish").hide();
	        setTimeout(function(){
	            self.entity.find(".md-mask span").removeClass('f14').text('正在提交,请稍候');
	            setTimeout(function(){
	                self.entity.find(".md-mask span").text('正在提交中,请继续等待');
	                setTimeout(function(){
	                    self.entity.find(".md-mask .md-mask-inner").hide();
	                    self.entity.find(".md-mask").css({top:0});
	                    self.entity.find(".md-mask .md-mask-inner-finish").show();
	                    self.setStep('last');
	                    self.entity.find(".md-mask .md-mask-inner-finish").find('#md-mask-btn').click(function(){
	                        self.close();
	                    });
	                },7000);
	            },5000);
	        },3000);
	    },
	    waiting: function () {
	        var self = this;
	        this.entity.find(".md-mask").show();
	        self.entity.find(".md-mask span").addClass('f14').html('信息已提交，请稍后。<br/>提交期间请勿刷新此页面。');
	    },
	    hideLoading: function () {
	        this.entity.find(".md-mask").hide();
	    },
	    showProtocol: function () {
	        var _div = this.entity.find(".md-protocol");
	        this.entity.find(".protocol-cnt").css({ height: this.entity.height() - 144 });
	        _div.css({ left: _div.width() }).show().animate({ left: 0 }, 1000, function () { });
	    },
	    hideProtocol: function () {
	        var _div = this.entity.find(".md-protocol");
	        _div.animate({ left: _div.width() }, 500, function () {
	            $(this).hide();
	        });
	    },
	    showTip: function () {
	        this.entity.find(".popup-note").show();
	    },
	    hideTip: function () {
	        this.entity.find(".popup-note").hide();
	    },
	    hideEle: function (selector) {
	        this.entity.find(selector).hide();
	    },
	    showEle: function (selector) {
	        this.entity.find(selector).show();
	    },
	    /**
		 * 自适应iframe对话框高度
		 */
	    resizeIfrH: function () {
	        var win = this.contentIframe[0].contentWindow;
	        var doc = win.document;
	        var height = "auto";
	        if (doc.compatMode == 'CSS1Compat') {
	            height = $(doc.documentElement).find('body').outerHeight();
	        }
	        else if (doc.body) { height = doc.body.scrollHeight; }

	        this.contentIframe.height(height);
	    },
	    /**
		 * 获取iframe对话框的iframe元素
		 */
	    getIfrDlgWin: function () {
	        if (this.type == "iframeDialog") {
	            return this.contentIframe;
	        }
	        return null;
	    }
	}
})(jQuery);
if(typeof JRJ=="undefined"||!JRJ)var JRJ={};typeof JRJ.ui!="undefined"&&JRJ.ui||(JRJ.ui={}),function(n){JRJ.ui.TabSwitch=function(n){this.args={menuPre:"",conPre:"",total:null,eventType:"mouseover",currTab:1,onClass:"",offClass:"",hoverClass:"",onSwitch:null,autoplay:!1,speed:2e3};for(property in n)this.args[property]=n[property];this.menuIdPre=this.args.menuPre;this.conIdPre=this.args.conPre;this.eventType=this.args.eventType;this.onClass=this.args.onClass;this.offClass=this.args.offClass;this.hoverClass=this.args.hoverClass;this.currTab=this.args.currTab;this.total=this.args.total;this.onSwitch=this.args.onSwitch;this.autoplay=this.args.autoplay;this.speed=this.args.speed;this.current=2;for(var t=1;t<=this.total;t++)this.addTab(t,this.onSwitch);this.args.autoplay&&this.auto()};JRJ.ui.TabSwitch.prototype={addTab:function(t,i){var r=this,u=n("#"+r.menuIdPre+t);r.installEvent(u[0],r.eventType,r.bind(r,r.show,[t,i]));r.eventType=="click"&&r.hoverClass!=""&&(u.mouseenter(function(){n(this).addClass(r.hoverClass)}),u.mouseleave(function(){n(this).removeClass(r.hoverClass)}));r.autoplay&&u.mouseenter(function(){r.eventType=="click"?u.click(function(){r.current=t+1}):r.current=t+1;clearInterval(r.timer)}).mouseleave(function(){r.auto()})},show:function(t,i){var r,u;this.currTab!=t&&(r=n("#"+this.menuIdPre+this.currTab),r.removeClass(this.onClass),r.addClass(this.offClass),u=n("#"+this.menuIdPre+t),u.removeClass(this.offClass),u.addClass(this.onClass),n("#"+this.conIdPre+this.currTab).hide(),n("#"+this.conIdPre+t).show(),this.currTab=t,i&&i.fcn&&i.fcn.apply(i.fcn,i.args))},bind:function(n,t,i){return function(){t.apply(n,i)}},installEvent:function(n,t,i){n.attachEvent?n.attachEvent("on"+t,function(n){i(n)}):n.addEventListener&&n.addEventListener(t,i,!1)},auto:function(){var t=this;this.timer=setInterval(function(){var i;t.current<=t.total?(i=n("#"+t.menuIdPre+t.current),i.siblings().removeClass(t.hoverClass),i.addClass(t.hoverClass),t.show(t.current,t.onSwitch),t.current++):(t.current=1,i=n("#"+t.menuIdPre+t.current),i.siblings().removeClass(t.hoverClass),i.addClass(t.hoverClass),t.show(t.current,t.onSwitch),t.current++)},this.speed)}}}(jQuery);
/*
//# sourceMappingURL=TabSwitch.2.0.min.js.map
*/
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */
(function(n,t){typeof exports=="object"&&exports&&typeof exports.nodeName!="string"?t(exports):typeof define=="function"&&define.amd?define(["exports"],t):(n.Mustache={},t(Mustache))})(this,function(n){function f(n){return typeof n=="function"}function l(n){return u(n)?"array":typeof n}function o(n){return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function s(n,t){return n!=null&&typeof n=="object"&&t in n}function v(n,t){return a.call(n,t)}function p(n){return!v(y,n)}function b(n){return String(n).replace(/[&<>"'\/]/g,function(n){return w[n]})}function tt(t,i){function lt(){if(ft&&!w)while(y.length)delete a[y.pop()];else y=[];ft=!1;w=!1}function ht(n){if(typeof n=="string"&&(n=n.split(d,2)),!u(n)||n.length!==2)throw new Error("Invalid tags: "+n);et=new RegExp(o(n[0])+"\\s*");v=new RegExp("\\s*"+o(n[1]));st=new RegExp("\\s*"+o("}"+n[1]))}var et,v,st,f,c,e,s,b,ot,l,tt,ct;if(!t)return[];var ut=[],a=[],y=[],ft=!1,w=!1;for(ht(i||n.tags),f=new r(t);!f.eos();){if(c=f.pos,s=f.scanUntil(et),s)for(tt=0,ct=s.length;tt<ct;++tt)b=s.charAt(tt),p(b)?y.push(a.length):w=!0,a.push(["text",b,c,c+1]),c+=1,b==="\n"&&lt();if(!f.scan(et))break;if(ft=!0,e=f.scan(nt)||"name",f.scan(k),e==="="?(s=f.scanUntil(h),f.scan(h),f.scanUntil(v)):e==="{"?(s=f.scanUntil(st),f.scan(g),f.scanUntil(v),e="&"):s=f.scanUntil(v),!f.scan(v))throw new Error("Unclosed tag at "+f.pos);if(ot=[e,s,c,f.pos],a.push(ot),e==="#"||e==="^")ut.push(ot);else if(e==="/"){if(l=ut.pop(),!l)throw new Error('Unopened section "'+s+'" at '+c);if(l[1]!==s)throw new Error('Unclosed section "'+l[1]+'" at '+c);}else e==="name"||e==="{"||e==="&"?w=!0:e==="="&&ht(s)}if(l=ut.pop(),l)throw new Error('Unclosed section "'+l[1]+'" at '+f.pos);return rt(it(a))}function it(n){for(var u=[],t,i,r=0,f=n.length;r<f;++r)t=n[r],t&&(t[0]==="text"&&i&&i[0]==="text"?(i[1]+=t[1],i[3]=t[3]):(u.push(t),i=t));return u}function rt(n){for(var u=[],r=u,i=[],t,e,f=0,o=n.length;f<o;++f){t=n[f];switch(t[0]){case"#":case"^":r.push(t);i.push(t);r=t[4]=[];break;case"/":e=i.pop();e[5]=t[2];r=i.length>0?i[i.length-1][4]:u;break;default:r.push(t)}}return u}function r(n){this.string=n;this.tail=n;this.pos=0}function i(n,t){this.view=n;this.cache={".":this.view};this.parent=t}function t(){this.cache={}}var c=Object.prototype.toString,u=Array.isArray||function(n){return c.call(n)==="[object Array]"},a=RegExp.prototype.test,y=/\S/,w={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},k=/\s*/,d=/\s+/,h=/\s*=/,g=/\s*\}/,nt=/#|\^|\/|>|\{|&|=|!/,e;r.prototype.eos=function(){return this.tail===""};r.prototype.scan=function(n){var i=this.tail.match(n),t;return!i||i.index!==0?"":(t=i[0],this.tail=this.tail.substring(t.length),this.pos+=t.length,t)};r.prototype.scanUntil=function(n){var i=this.tail.search(n),t;switch(i){case-1:t=this.tail;this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,i);this.tail=this.tail.substring(i)}return this.pos+=t.length,t};i.prototype.push=function(n){return new i(n,this)};i.prototype.lookup=function(n){var o=this.cache,t,i,r,u,e;if(o.hasOwnProperty(n))t=o[n];else{for(i=this,e=!1;i;){if(n.indexOf(".")>0)for(t=i.view,r=n.split("."),u=0;t!=null&&u<r.length;)u===r.length-1&&(e=s(t,r[u])),t=t[r[u++]];else t=i.view[n],e=s(i.view,n);if(e)break;i=i.parent}o[n]=t}return f(t)&&(t=t.call(this.view)),t};t.prototype.clearCache=function(){this.cache={}};t.prototype.parse=function(n,t){var r=this.cache,i=r[n];return i==null&&(i=r[n]=tt(n,t)),i};t.prototype.render=function(n,t,r){var u=this.parse(n),f=t instanceof i?t:new i(t);return this.renderTokens(u,f,r,n)};t.prototype.renderTokens=function(n,t,i,r){for(var s="",f,e,u,o=0,h=n.length;o<h;++o)u=undefined,f=n[o],e=f[0],e==="#"?u=this.renderSection(f,t,i,r):e==="^"?u=this.renderInverted(f,t,i,r):e===">"?u=this.renderPartial(f,t,i,r):e==="&"?u=this.unescapedValue(f,t):e==="name"?u=this.escapedValue(f,t):e==="text"&&(u=this.rawValue(f)),u!==undefined&&(s+=u);return s};t.prototype.renderSection=function(n,t,i,r){function l(n){return c.render(n,t,i)}var c=this,o="",e=t.lookup(n[1]),s,h;if(e){if(u(e))for(s=0,h=e.length;s<h;++s)o+=this.renderTokens(n[4],t.push(e[s]),i,r);else if(typeof e=="object"||typeof e=="string"||typeof e=="number")o+=this.renderTokens(n[4],t.push(e),i,r);else if(f(e)){if(typeof r!="string")throw new Error("Cannot use higher-order sections without the original template");e=e.call(t.view,r.slice(n[3],n[5]),l);e!=null&&(o+=e)}else o+=this.renderTokens(n[4],t,i,r);return o}};t.prototype.renderInverted=function(n,t,i,r){var f=t.lookup(n[1]);if(!f||u(f)&&f.length===0)return this.renderTokens(n[4],t,i,r)};t.prototype.renderPartial=function(n,t,i){if(i){var r=f(i)?i(n[1]):i[n[1]];if(r!=null)return this.renderTokens(this.parse(r),t,i,r)}};t.prototype.unescapedValue=function(n,t){var i=t.lookup(n[1]);if(i!=null)return i};t.prototype.escapedValue=function(t,i){var r=i.lookup(t[1]);if(r!=null)return n.escape(r)};t.prototype.rawValue=function(n){return n[1]};n.name="mustache.js";n.version="2.1.3";n.tags=["{{","}}"];e=new t;n.clearCache=function(){return e.clearCache()};n.parse=function(n,t){return e.parse(n,t)};n.render=function(n,t,i){if(typeof n!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+l(n)+'" was given as the first argument for mustache#render(template, view, partials)');return e.render(n,t,i)};n.to_html=function(t,i,r,u){var e=n.render(t,i,r);if(f(u))u(e);else return e};n.escape=b;n.Scanner=r;n.Context=i;n.Writer=t});
//# sourceMappingURL=mustache.min.js.map

$(function () {
    //search
    //$('.site-search-popup .btn-search').click(function (e) {
    //    e.stopPropagation();
    //    if (!$('.site-search-box').is(':visible')) {
    //        $('.site-search-box').css({ opacity: 0, top: '50px' }).show().animate({ opacity: 1, top: '71px' }, 300);
    //    } else {
    //        $('.site-search-box').animate({ opacity: 0, top: '50px' }, 300, function () {
    //            $(this).hide();
    //        });
    //    }
    //});
    //$(document).click(function (e) {
    //    if ($('.site-search-box').is(':visible')) {
    //        $('.site-search-box').animate({ opacity: 0, top: '50px' }, 300, function () {
    //            $(this).hide();
    //        });
    //    }
    //});
    //$('.site-search-box').click(function (e) {
    //    e.stopPropagation();
    //});

    var stockTagBox = new JRJ.ui.SearchBox("txtSearchBox", 'btnSearchBox', stockCodeListBox, "&item=5&type=cn&typepri=s.sa|i&areapri=cn&inc=utf8&otc=utf8", null, null, {
        hasTougu: true
    });//&otc=utf8&inc=utf8
    stockTagBox._enterHandler = function (event) {
        var items = this.container.getElementsByTagName("tr");
        this.updateInputAndClist(items[this.selectedIndex], true);
        if (!this.enterEffective) {
            this.hide();
            return;
        }
        //单只查询 
        if (!this.muti) {
            //提交查询或执行自定处理方法
            this._searchHandler(event);
            this.hide();
        } else {
            this.container.innerHTML = "";
            return;
        }
    };
    stockTagBox.clearInput = false;

    function stockCodeListBox(obj) {
        if (obj[0]) {
            if (/^s.\w*/.test(obj[0].type)) {
                //window.location.href = 'http://itougu.jrj.com.cn/search/?keyword={stockCode},{stockName}&is_stock=true'.replace('{stockCode}', obj[0].code).replace('{stockName}', encodeURIComponent(obj[0].name));
                window.location.href = 'http://itougu.jrj.com.cn/stock/{stockcode}.jspa'.replace('{stockcode}', obj[0].code);
            } else {
                window.location.href = 'http://itougu.jrj.com.cn/search/?keyword={stockCode},{stockName}'.replace('{stockCode}', obj[0].code).replace('{stockName}', encodeURIComponent(obj[0].name));
            }
        }
    }
    //search

});
/**
 * @fileOverview 新版股票基金查询框
 * @copyright (c) 2009 (jrj.com)
 * @author jianjun.wang@jrj.com.cn
 * @version 2.0
 * @change 2010.4.15 增加股指期货类型
 */

if (typeof JRJ == "undefined" || !JRJ) {
    var JRJ = {};
}
if (typeof JRJ.ui == "undefined" || !JRJ.ui) {
    JRJ.ui = {};
}
(function () {
    var defaultStyles = ".jrj_sb{position:absolute;margin:0;padding:0;border:1px solid #d6d6d6;background-color:#fff;font-size:12px;z-index:99999;overflow:hidden; width: 340px;visibility:hidden;display:none; }";// min-width: 340px; width:auto !important;
    defaultStyles += ".jrj_sb *{margin:0;padding:0;}";
    defaultStyles += ".jrj_sb_mask{display:block;position:absolute;z-index:-1;filter:Alpha(Opacity=\'0\');}";
    //defaultStyles += "   top:expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)||0)*-1)+\'px\');";
    //defaultStyles += "   left:expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth)||0)*-1)+\'px\');";
    //defaultStyles += "   width:expression(this.parentNode.offsetWidth+\'px\');";
    //defaultStyles += "   height:expression(this.parentNode.offsetHeight+\'px\');}";
    defaultStyles += ".jrj_sb tr{cursor:pointer;white-space:nowrap;}";
    defaultStyles += ".jrj_sb tr.jrj_sb_on{background:#f8f8f8;}";
    defaultStyles += ".jrj_sb td{padding:0 10px 0 8px;height:35px;line-height:35px; white-space:nowrap;}";
    defaultStyles += ".jrj_sb td .market-item{display:inline-block;height:20px;line-height:20px;background:#999;text-align:center;color:#fff;width:43px;}";
    defaultStyles += ".jrj_sb tr b{font-weight:bold;color:#000;}";
    defaultStyles += ".jrj_sb .sb_error{color:#ff0000;padding:3px 10px;line-height:12px}";
    defaultStyles += ".jrj_sb .no-result{height:30px;line-height:30px;font-size:14px;padding:0 20px;color:#999;text-align:center;}";
    defaultStyles += ".jrj_sb .sb_muti_prompt{border-top:1px solid #cee0f1;margin-top:5px;padding:8px 12px 4px;background-color:#f0f8ff;}";
    defaultStyles += ".jrj_sb .sb_muti_prompt .sb_muti_line1{color:#ff0000;line-height:12px}";
    defaultStyles += ".jrj_sb .sb_muti_prompt .sb_muti_line2{padding-top:3px;color:#c1c0c0;line-height:12px}";
    defaultStyles += ".jrj_sb table{margin:0;color:#666;border-collapse:collapse;border-spacing:0;line-height:21px;background-color:#fff;z-index:100;width:100%;}";
    defaultStyles += ".jrj_sb ul.jrj_sb_tougu_list li { float:left;height:36px; }";
    defaultStyles += ".jrj_sb ul.jrj_sb_tougu_list li a{ display:inline-block;width:340px;height:36px; }";
    defaultStyles += ".jrj_sb ul.jrj_sb_tougu_list li a:hover{ background:#f8f8f8; }";
    defaultStyles += ".jrj_sb ul.jrj_sb_tougu_list li a span{ display:inline-block;float:left;height:30px;line-height:30px;padding:3px 0;font-size:14px; }";
    defaultStyles += ".jrj_sb ul.jrj_sb_tougu_list li a span.col-1{ width:60px; padding-left: 10px;}";
    defaultStyles += ".jrj_sb ul.jrj_sb_tougu_list li a span.col-2{ width:60px; }";
    defaultStyles += ".jrj_sb ul.jrj_sb_tougu_list li a span.col-3{ width:200px;padding-right:10px; }";
    defaultStyles += ".jrj_sb img{margin-right:2px;border-radius:3px;}";
    defaultStyles += ".jrj_sb .jrj_sb_title{font-size:14px;margin:0 10px 0 0;background:url(http://i0.jrjimg.cn/zqt/line-491.png) 0 50% repeat-x;height:30px;line-height:30px;}";
    defaultStyles += ".jrj_sb .jrj_sb_title span{ display:inline-block;height:30px;padding:0 10px; background:#fff;}";
    /**
	 * 股票基金查询框
	 * @link <a target="_blank" href="../../src-new/ui/SearchBox/example.html">例子</a>
	 * @class 股票基金查询框
	 * @param {string} inputId input框id
	 * @param {string} btnId 查询按钮id
	 * @param {function} func 查询结果的处理函数，可以缺省
	 * @param {string} param 查询参数，可以缺省
	 * @param {string} patterns 自定义的匹配对象，可以缺省
	 * @param {string} styles 自定义的样式字符串，可以缺省
	 */
    JRJ.ui.SearchBox = function (inputId, btnId, func, param, patterns, styles, _config) {
        this.textInput = Tools.$(inputId);
        if (!this.textInput) {
            return;
        }
        this.button = btnId ? Tools.$(btnId) : null;
        /**
		 * @public
		 * @field 查询结果的处理函数
		 * @name func
		 * @type function
		 */
        this.func = func;
        /**
		 * 查询参数，创建对象后也可修改
		 * @type string
		 */
        this.param = param ? param : "&item=10";
        /**
		 * 市场类型和url匹配对象数组
		 * @type function
		 */
        this.patterns = patterns;
        this.defaultPatterns = [
			new JRJ.ui.Pattern("cn.i", "http://stock.jrj.com.cn/share,[stid].shtml"),//个股指数			
			new JRJ.ui.Pattern("cn.s", "http://stock.jrj.com.cn/share,[code].shtml"),//个股股票
			new JRJ.ui.Pattern("cn.f", "http://fund.jrj.com.cn/archives/[code]/index.shtml"),//基金
			new JRJ.ui.Pattern("cn.w", "http://warrant.jrj.com.cn/StockInfo.aspx?gpdm=[code]"),//权证
			new JRJ.ui.Pattern("cn.qh.if", "http://gzqh.jrj.com.cn/quote/[code]"),//股指期货 
			new JRJ.ui.Pattern("hk", "http://hk.jrj.com.cn/bmp/[code]/"),//港股
			new JRJ.ui.Pattern("us.s", "http://usstock.jrj.com.cn/share/search.shtml?stock=[code]"),//美股
			new JRJ.ui.Pattern("cn.bk.bk1", "http://summary.jrj.com.cn/zb/Agu_[code].shtml"),//证监会板块
			new JRJ.ui.Pattern("cn.bk.bk2", "http://summary.jrj.com.cn/gb/Agu_[code].shtml"),//全球行业
			new JRJ.ui.Pattern("cn.bk.bk3", "http://summary.jrj.com.cn/rb/Agu_[code].shtml"),//地域板块
			new JRJ.ui.Pattern("cn.bk.bk5", "http://summary.jrj.com.cn/cb/Agu_[code].shtml"),//概念板块
			new JRJ.ui.Pattern("cn.bk.bk7", "http://summary.jrj.com.cn/ib/Agu_[code].shtml")//新财富行业
        ];
        /**
		 * 查询数据源
		 * @type string
		 */
        this.url = "http://code.jrjimg.cn/code?1=1";  //url		
        this.url_tougu = 'http://itougu.jrj.com.cn/search/api?keyword={keyword}&type=adviser&size=5';//搜投顾
        this.url_search_direct = 'http://itougu.jrj.com.cn/search/?keyword={keyword}';
        this.query = ""; //查询字符串

        this.selectedItem = null; //当前选中列表项，为tr
        this.slist = new Array(); //返回的结果列表
        /**
		 * 已选中项，一个代码查询只取this.clist[0]<br/>
		 * 数据格式：[{stid:"sz200002",code:"200002",name:"万科B",shrt:"WKB",mrkt:"cn.sz",type:"s.sb",stat:"1"},{},{}]
		 * @type Array 
		 */
        this.clist = new Array();

        //请求相关 
        this.charset = null;
        this._dataCache = {};
        this._timer = null;
        this._isRunning = false;
        this.timerDelay = "50"; //查询延时
        this._latestScriptTime = "";  //最新script的时间戳，用于判断请求是否过时

        //配置项
        /**
             * 是否多选，默认为false
             * @type boolean
             */
        this.muti = false;
        this.adjustPos = false;
        this.topshow = false;  //在输入框上方显示弹出列表
        this.offsetLeft = 0; //left定位的偏移量
        this.offsetTop = 0;  //top定位的偏移量    
        /**
             * 弹出列表中的股票倒序排列(从下到上)，默认为false
             * @type boolean
             */
        this.reverse = false;
        /**
		 * 显示市场类型，默认为true
		 * @type boolean
		 */
        this.showMarket = true;
        /**
		 * 初始化后自动定焦	，默认为false
		 * @type boolean
		 */
        this.autoFocus = false;
        /**
		 * 查询后情况input，默认为true
		 * @type boolean
		 */
        this.clearInput = true;
        /**
		 * 设置输入框的有效性，true：有效，false：无效，false自动查询失效，默认为true
		 * @type boolean
		 */
        this.iptEffective = true;
        /**
		 * 设置查询按钮的有效性，true：有效，false：无效，点btn不进行结果处理，默认为true
		 * @type boolean
		 */
        this.btnEffective = true;
        /**
		 * 设置回车有效性，false：不执行股票查询框中的回车操作，默认为true
		 * @type boolean
		 */
        this.enterEffective = true;  //
        /**
		 * 设置鼠标点击列表项有效性，false：不执行点击查询股票操作，默认为true
		 * @type boolean
		 */
        this.clickEffective = true;

        //打开窗口处理
        /**
		 * 强制打开新窗口所用的form id
		 * @type string
		 */
        this.forceForm = null;
        this.submitForm = false;

        //提示
        this.input_prompt = this.textInput.value ? this.textInput.value : '搜索观点/投资品种/投资顾问...';//代码/简称/拼音	股票代码/简称/拼音	
        this.no_reslut_prompt = String.fromCharCode(27809, 26377, 31526, 21512, 26465, 20214, 30340, 32467, 26524);//没有符合条件的结果
        this.muti_choice_prompt = String.fromCharCode(35831, 20351, 29992, 36887, 21495, 8220, 44, 8221, 20998, 38548, 22810, 21482, 32929, 31080);//请使用逗号',' 分隔多只股票
        this.error_prompt = String.fromCharCode(35831, 36755, 20837, 27491, 30830, 30340, 20195, 30721, 25110, 31616, 31216);//请输入正确的代码或简称
        /**
		 * 回调函数执行时clist为空是否返回，某些特殊情况下使用
		 * @type boolean
		 */
        this.errorReturn = true;
        this.styles = styles ? styles : defaultStyles;
        /**
		 * input获得焦点后的class
		 * @type string
		 */
        this.inputFocusClass = null;
        /**
		 * input blur事件处理函数
		 * @type string
		 */
        this.blurFunc = null;

        /*
         * 用于延迟执行投顾搜索
         */
        this._delay = null;
        this.touguSearching = false;

        /*
         * 搜索投顾
         */
        this.titleTmpl = '<div class="jrj_sb_title"><span>{{{title}}}</span></div>',
        this.stockRowTmpl = '<tr><td style="display:none;">{{{col0}}}</td><td><span class="market-item">{{{col1}}}</span></td><td>{{{col2}}}</td><td>{{{col3}}}</td><td>{{{col4}}}</td></tr>',
        this.stockRowTmpl_US = '<tr><td style="display:none;">{{{col0}}}</td><td><span class="market-item">{{{{col1}}}</span></td><td colspan="2">{{{col2}}}</td><td>{{{col4}}}</td></tr>';

        this.config = $.extend({
            hasTougu: false,
            hasStock: true,
            enableKeyboard: true,
            customEvent: null
        }, _config);

        this.input_prompt = (this.config.watermark != null ? this.config.watermark : '代码/简称/拼音');

        this._init();
    }

    JRJ.ui.SearchBox.prototype = {
        /**
		 * @inner
		 */
        _init: function () {
            this._initInput();
            this._initContainer();
            var instance = this,
                self = this;

            if (this.button) {
                Event.on(this.button, "click", function (event) {
                    Event.stop(event);

                    if (!instance.btnEffective) {
                        return;
                    }

                    if ($(self.textInput).val() != self.input_prompt) {
                        if (typeof self.config.customEvent == 'function') {
                            self.config.customEvent({
                                inputText: $(self.textInput).val(),
                                clickObj: null
                            }, event);
                        } else {
                            window.location = self.url_search_direct.replace('{keyword}', encodeURIComponent($.trim($(self.textInput).val())));
                        }
                    } else {
                        //window.location = self.url_search_direct.replace('{keyword}', '');
                        self.textInput.focus();
                    }
                    //instance._searchHandler(event);
                });
            }
            //window event			

            Event.on(window, "load", function () {
                //ie刷页面时input不恢复成默认值，需要强设下
                //在body.onload里设没效果
                instance.textInput.value = instance.input_prompt;
            });
            //添加样式，不重复添加
            Tools.addStyle("jrj_sb_style", this.styles);
        },
        _initInput: function () {
            var instance = this;
            if (instance.config.watermark != null) {
                this.textInput.value = this.input_prompt;
            }
            this.textInput.setAttribute("autocomplete", "off");
            Event.on(this.textInput, "focus", function () {
                if (!instance.iptEffective) {
                    return;
                }
                if (Tools.trim(instance.textInput.value) == instance.input_prompt) {
                    instance.textInput.value = "";
                }
                //自定义input焦点样式
                if (instance.inputFocusClass) {
                    Tools.addClass(instance.textInput, instance.inputFocusClass);
                }
                instance.start();
            });

            Event.on(this.textInput, "blur", function () {
                if (!instance.iptEffective) {
                    return;
                }
                if (Tools.trim(instance.textInput.value) == "") {
                    instance.textInput.value = instance.input_prompt;
                }
                //删除焦点样式
                if (instance.inputFocusClass) {
                    Tools.removeClass(instance.textInput, instance.inputFocusClass);
                }

                instance.stop();
                instance.hide();
                if (instance.blurFunc) {
                    instance.blurFunc();
                }
            });
            if (this.config.hasStock && this.config.enableKeyboard) {
                var pressingCount = 0;
                Event.on(this.textInput, "input textInput keydown", function (event) { //propertychange 由于IE10以下会触发propertychange事件，所以会自动触发搜索，这里先注释掉。20160718
                    if (!instance.iptEffective) {
                        return;
                    }
                    var keyCode = event.keyCode;

                    switch (keyCode) {
                        case 27:
                            instance.hide();
                            break;
                        case 13:
                            instance._enterHandler(event);
                            break;
                        case 40://Down键
                        case 38://up键
                            //选择列表项，按住不动，延时处理
                            if (pressingCount++ == 0) {
                                if (instance._isRunning) instance.stop();
                                instance.selectItem(keyCode == 40);
                            } else if (pressingCount == 3) {
                                pressingCount = 0;
                            }
                            break;
                    }
                    if (keyCode != 40 && keyCode != 38) {
                        if (!instance._isRunning) {
                            // 1. 当网速较慢，js还未下载完时，用户可能就已经开始输入
                            //    这时，focus事件已经不会触发，需要在keydown里触发定时器
                            // 2. 非DOWN/UP键时，需要激活定时器
                            instance.start();
                        }
                    }
                });

                Event.on(this.textInput, "keyup", function (event) {
                    if (!instance.iptEffective) {
                        return;
                    }
                    //取消keydown延迟
                    pressingCount = 0;
                    //根据输入框中的数据，整理已选代码表，删除不匹配项
                    if (instance.muti) {
                        if (event.keyCode > 32 && event.keyCode < 46) {//这些keyup不需要整理
                            return;
                        }
                        var inputVal = Tools.trim(instance.textInput.value);
                        var valArr = inputVal.split(",");
                        var keyVal = valArr.pop();

                        for (var i = 0; i < instance.clist.length; i++) {
                            var tmp = instance.clist[i];
                            var j;
                            for (j = 0; j < valArr.length; j++) {
                                if (tmp.code == valArr[j] || tmp.name == valArr[j] || tmp.shrt == valArr[j]) {
                                    break;
                                }
                            }
                            if (j == valArr.length) {//如果没有比配，则从已选列表中删除
                                instance.clist.splice(i, 1);
                                i--;
                            }
                        }
                        //修复多选手动输入无效的bug  188 = ","
                        if (event.keyCode == 188) {
                            if (instance.slist && instance.slist.length > 0) {
                                var v = instance.textInput.value;
                                instance.textInput.value = v.substring(0, v.length - 1);
                                instance.chooseOne(instance.container.getElementsByTagName("tr")[0], true);
                            }
                        }
                    }
                });
            }

            if (this.autoFocus) {
                this.textInput.focus();
            }
        },
        _enterHandler: function (event) {
            var items = this.container.getElementsByTagName("tr");
            this.updateInputAndClist(items[this.selectedIndex], true);
            if (!this.enterEffective) {
                this.hide();
                return;
            }
            //单只查询 
            if (!this.muti) {
                //提交查询或执行自定处理方法
                this._searchHandler(event);
            } else {
                this.container.innerHTML = "";
                return;
            }
        },
        _searchHandler: function (event) {
            var self = this;

            if (!this.iptEffective) {//input不可用，不执行查询
                return;
            }
            //用户没有选择，把列表选中项作为默认查询代码
            if (this.clist.length == 0 && this.slist.length != 0) {
                this.clist[0] = this.slist[this.selectedIndex];
            }
            try{
                this.textInput.blur(); // 这一句还可以阻止掉浏览器的默认提交事件
            }catch(e){}
            if (this.clist.length == 0 && this.errorReturn) {
                if (self.config.hasTougu) {
                    if ($(self.textInput).val() != self.input_prompt) {
                        if (typeof self.config.customEvent == 'function') {
                            self.config.customEvent({
                                inputText: $(self.textInput).val(),
                                clickObj: this.clist[0]
                            }, event);
                        } else {
                            window.location = self.url_search_direct.replace('{keyword}', encodeURIComponent($.trim($(self.textInput).val())));
                        }
                    } else {
                        self.textInput.focus();
                        //window.location = self.url_search_direct.replace('{keyword}', '');
                    }
                }
                this.textInput.focus();
                //var content = '<p class="sb_error"><img src="http://i0.jrjimg.cn/lib/sb-alert.gif"/>' + this.error_prompt + '</p>';
                //this._fillContainer(content);
                //this._displayContainer();

                return false;
            }
            //设置cookie
            var ts = Tools.formatDate(new Date());
            var exp = new Date();
            exp.setTime(exp.getTime() + 30 * 1000);
            Tools.setCookie("JRJ_QUERY_COOKIE", ts + "," + this.textInput.id + "," + encodeURI(window.location), exp, "/", "jrj.com.cn");
            if (!this.muti) {
                if (typeof (this.func) == "function") {
                    this.func(this.clist, event);
                } else {
                    this._defaultSearch(this.clist[0], event);
                }
            } else {
                if (typeof (this.func) == "function") {
                    this.func(this.clist, event);
                }
                else {
                    //循环调用默认处理函数，打开多个窗口
                    for (var i = 0; i < this.clist.length; i++) {
                        this._defaultSearch(this.clist[i], event);
                    }
                }
            }
            this.reset(this.clearInput);
        },
        _defaultSearch: function (obj, event) {
            var long_kw = "." + obj.mrkt + "." + obj.type + "." + obj.stat + ".";
            var url = "";
            if (this.patterns) {
                url = this.matchPattern(obj, this.patterns);
            }
            if (url == "" && this.defaultPatterns) {
                url = this.matchPattern(obj, this.defaultPatterns);
            }
            if (url != "") {
                this.openWin(url, event);
            }
            return false;
        },
        _initContainer: function () {
            var container = Tools.createElement("div");
            container.className = "jrj_sb";
            container.style.visibility = "hidden";

            this.container = container;
            this._initContainerEvent();
            document.body.insertBefore(this.container, document.body.firstChild);
        },
        _setContainerPos: function () {
            try {
                var pos = Tools.getOffsetPosition(this.textInput);
                if (!this.topshow) {
                    //if ((pos.top + this.textInput.offsetHeight + this.offsetTop + $(this.container).height()) > $(window).height()) {
                    //Tools.setElementStyles(this.container, { "left": pos.left + this.offsetLeft + "px", "top": pos.top - $(this.container).height() + "px" });
                    //} else {
                    Tools.setElementStyles(this.container, { "left": pos.left + this.offsetLeft + "px", "top": pos.top + this.textInput.offsetHeight + this.offsetTop + "px" });
                    //}

                } else {
                    //Tools.setElementStyles(this.container,{"left":pos.left+this.offsetLeft+"px","top":pos.top-this.container.offsetHeight+this.offsetTop+"px"});
                    //修改muti时topshow定位问题
                    var doc = document, docEle = doc.documentElement;
                    var dh = docEle && docEle.clientHeight || doc.body.clientHeight;
                    var scrollTop = docEle && docEle.scrollTop || doc.body.scrollTop;
                    //$("#debug").html($("#debug").html()+"pos.top::"+ pos.top+"<br/>")
                    //$("#debug").html($("#debug").html()+"this.offsetTop::"+ this.offsetTop+"<br/>")
                    //$("#debug").html($("#debug").html()+"bottom::"+ (dh-pos.top-this.offsetTop)+"<br/>")
                    var b = dh - pos.top - this.offsetTop;
                    //Tools.$("debug").innerHTML = Tools.$("debug").innerHTML+"-----::"+ b+"<br/>"
                    b = Tools.ie6 ? b + scrollTop : b;
                    //Tools.$("debug").innerHTML = Tools.$("debug").innerHTML+"+++++::"+ b+"<br/>"
                    Tools.setElementStyles(this.container, { "left": pos.left + this.offsetLeft + "px", "bottom": b + "px" });
                    //Tools.$("debug").innerHTML = Tools.$("debug").innerHTML+this.container.style.bottom +"<br/>"
                }
            } catch (e) {

            }
        },
        _initContainerEvent: function () {
            var instance = this;
            /**
             * @ignore
             */
            function getTR(ele) {
                var tr = null;
                if (ele.tagName.toLowerCase() == "td") {
                    tr = ele.parentNode;
                }
                if (ele.tagName.toLowerCase() == "tr") {
                    tr = ele;
                }
                return tr;
            }
            Event.on(this.container, "mouseover", function (event) {
                Event.stop(event);
                var target = Event.getTarget(event);
                target = getTR(target);

                if (target && target != instance.selectedItem) {
                    instance._removeSelectedItem();
                    instance._setSelectedItem(target);
                }

            });

            var mouseDownItem = null;
            Event.on(this.container, "mousedown", function (event) {
                Event.stop(event);
                var target = Event.getTarget(event);
                mouseDownItem = getTR(target);
                //鼠标按下时输入框保持焦点
                // 1. for ie onbeforedeactive返回false，则不会激发目标元素的事件
                /** 
                     * @inner
                     */
                instance.textInput.onbeforedeactivate = function (event) {
                    window.event.returnValue = false;
                    instance.textInput.onbeforedeactivate = null;
                }
                // 2. for W3C
                Event.stop(event);
                return false;
            });
            Event.on(this.container, "mouseup", function (event) {
                Event.stop(event);

                var exy = Event.pageXY(event);
                var pos = Tools.getOffsetPosition($(instance.container).find('#jrj_sb_stock_block')[0]);
                var l = pos.left;
                var t = pos.top;
                var r = pos.left + $(instance.container).find('#jrj_sb_stock_block')[0].offsetWidth;
                var b = pos.top + $(instance.container).find('#jrj_sb_stock_block')[0].offsetHeight;
                //当mousedown在提示层内，up在提示层外，为无效点击
                if (!(exy.left >= l && exy.left <= r && exy.top >= t && exy.top <= b)) {
                    return;
                }
                var target = Event.getTarget(event);
                target = getTR(target);
                if (target != mouseDownItem) { return; }
                //更新input value
                //instance.updateInputAndClist(target,true);
                //单只查询，调用处理函数前 先隐藏提示层，停止计时器
                if (!instance.muti) {
                    //提交查询或执行自定处理方法

                    if (!instance.clickEffective) {
                        instance.hide();
                        return;
                    }
                    instance._searchHandler(event);
                }
            });
        },
        /**
           * @ignore
           */
        start: function () {
            JRJ.ui.SearchBox.focusInstance = this;

            var instance = this;
            this._timer = setTimeout(function () {
                instance.updateData();
                instance._timer = setTimeout(arguments.callee, instance.timerDelay);
            }, instance.timerDelay);

            this._isRunning = true;
        },
        /**
           * @ignore
           */
        stop: function () {
            JRJ.ui.SearchBox.focusInstance = null;
            if (this._timer) {
                clearTimeout(this._timer);
                this._timer = null;
            }
            this._isRunning = false;
        },
        /**
           * @ignore
           */
        updateInputAndClist: function (item, compart) {
            if (!item) { return; }
            if (this.muti) {
                //多选时compart:true 加逗号， false不加逗号	
                this.chooseOne(item, compart);
            } else {
                this.textInput.value = item.firstChild.innerHTML;
                this._setClist(this.slist[item.rowIndex]);
            }
            this.query = item.firstChild.innerHTML;
        },
        /**
           * @ignore
           */
        getInputQuery: function () {
            var query = "";
            //var val = this.textInput.value;
            var inputVal = Tools.toDBC(this.textInput.value);
            if (!this.muti) {
                query = inputVal;
            } else {
                query = inputVal.substr(inputVal.lastIndexOf(",") + 1);
            }
            return query;
        },
        /**
           * @ignore
           * 选中一项，点击 enter选择和down up选择不一样，确定选择最后要加"," 
           */
        chooseOne: function (item, compart) {
            var obj = this.slist[item.rowIndex];
            var inputValue = this.textInput.value;
            var keywords = inputValue.split(",");
            if (keywords.length > 0) {
                keywords.length--;
            }
            //排重
            var keyword = item.cells[0].innerHTML;
            if (compart) {
                var i;
                for (i = 0; i < this.clist.length; i++) {
                    var obj2 = this.clist[i];
                    if (obj.code == obj2.code && obj.name == obj2.name && obj.shrt == obj2.shrt) {
                        break;
                    }
                }
                if (i == this.clist.length) {
                    this._setClist(obj);
                    keywords.push(keyword);
                }
                this.textInput.value = keywords.join(",") + ",";
                this._setSelectedItem(null);
                this.query = "";
            } else {
                keywords.push(keyword);
                this.textInput.value = keywords.join(",");
            }
        },
        /**
           * @ignore
           * up down键盘选择
           */
        selectItem: function (down) {
            if (this.muti && this.getInputQuery() == "") {
                return;
            }

            var items = this.container.getElementsByTagName("tr");
            if (items.length == 0) {
                return;
            }
            if (this.container.style.visibility == "hidden") {
                this.show();
                return;
            }

            var newIndex = null;
            var len = items.length;
            var index = this.selectedIndex;
            if (down) {
                newIndex = (index == len - 1 ? 0 : index + 1);
            } else {
                newIndex = (index == 0 ? len - 1 : index - 1);
            }

            this._removeSelectedItem();
            var newSelectedItem = items[newIndex];
            if (newSelectedItem) {
                this._setSelectedItem(newSelectedItem);
                this.updateInputAndClist(newSelectedItem, false);
            }
        },
        _removeSelectedItem: function () {
            try {
                Tools.removeClass(this.selectedItem, "jrj_sb_on");
                this.selectedItem = null;
                this.selectedIndex = 0;
            } catch (e) { }
        },
        _setSelectedItem: function (item) {
            if (item) {
                Tools.addClass(item, "jrj_sb_on");
                this.selectedItem = item;
                this.selectedIndex = item.rowIndex;
            } else {
                this.selectedIndex = 0;
                this.selectedItem = null;
            }
        },
        _setClist: function (obj) {
            if (!this.muti) {
                this.clist[0] = obj;
            } else {
                this.clist.push(obj);
            }
        },
        /**
             * @ignore
             */
        show: function () {
            var instance = this;
            this.resizeHandler = Event.on(window, "resize", function () {
                instance._setContainerPos();
            });
            this.scrollHandler = Event.on(window, "scroll", function () {
                instance._setContainerPos();
            });
            instance.container.style.visibility = "visible";
            instance.container.style.display = "block";
        },
        /**
           * @ignore
           */
        hide: function () {
            this.container.style.visibility = "hidden";
            this.container.style.display = "none";
            if (this.resizeHandler && this.scrollHandler) {
                Event.remove(this.resizeHandler);
                Event.remove(this.scrollHandler);
            }
        },
        /**
           * @ignore
           */
        updateData: function () {
            var self = this;
            if (!this.iptEffective || !this.needUpdate()) {
                return;
            }
            //this.textInput.value = Tools.toDBC(this.textInput.value);
            this.query = this.getInputQuery();

            var q = Tools.trim(this.query);
            //去除空格后长度为0，不显示	
            if (q.length == 0) {
                this._fillContainer("");
                this.hide();
                return;
            }
            if (typeof this._dataCache[this.query] != "undefined") {
                this._fillContainer(this._dataCache[this.query].html);
                this.slist = this._dataCache[this.query].slist;
                this._setSelectedItem(this.container.getElementsByTagName("tr")[0]);
                this._createMutiPrompt();
                this._displayContainer();
            } else {
                clearTimeout(self._delay);
                self._delay = setTimeout(function () {
                    self.requestData();
                }, 500);
            }
        },
        /**
           * @ignore
           * 判断是否需要更新list
           */
        needUpdate: function () {
            var inputQuery = this.getInputQuery();
            //length>0且inputQuery为空说明是多选
            if (inputQuery == "" && this.textInput.value.length > 0) {
                this.hide();
                return false;
            }
            //如果用户选择过某项 ，后点空白出隐藏查询列表，再用键盘选择时，直接显示 	
            if (inputQuery != this.query) return true;
            return false;
        },
        /**
           * @ignore
           */
        requestData: function () {
            var script = document.createElement('script');
            script.setAttribute('type', 'text/javascript');

            if (this.charset) {
                script.setAttribute('charset', this.charset);
            }
            //encodeURIComponent
            var oSrc = this.url + this.param + "&key=" + this.query + "&d=" + Tools.createTimeStamp();
            script.setAttribute('src', oSrc);
            var t = new Date().getTime();
            this._latestScriptTime = t;
            script.setAttribute("time", t);
            var head = document.getElementsByTagName("head")[0] || document.documentElement;

            /** 
             * @ignore
             */
            script.onload = script.onreadystatechange = function () {
                if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
                    var obj = JRJ.ui.SearchBox.focusInstance;
                    if (!obj) return;
                    var scriptDataIsOut = script.getAttribute("time") != obj._latestScriptTime;
                    if (!scriptDataIsOut) {// 抛弃过期数据，否则会导致bug：1. 缓存key值不对； 2. 过期数据导致的闪屏
                        obj.handleResponse(SCodeData);
                    }
                    // Handle memory leak in IE
                    script.onload = script.onreadystatechange = null;
                    if (head && script.parentNode) {
                        head.removeChild(script);
                    }
                }
            }
            head.insertBefore(script, head.firstChild);
        },
        /**
             * @ignore
             */
        handleResponse: function (data) {
            var self = this;
            if (!JRJ.ui.SearchBox.focusInstance) return;
            if (!data) {
                return;
            }
            try {//把返回的结果保存在s.slist中
                this.slist = data.CodeData;
                if (this.reverse) {//倒序				
                    this.slist.reverse();
                }
            } catch (e) {
                this.slist = new Array();
            }
            var list = this.slist;
            

            //填充数据
            var content = "";
                
            
            if (list.length == 0) {
                content = $('<div></div>');
                content.append($(Mustache.render(this.titleTmpl, { title: '品种' })));
                content.append($('<div id="jrj_sb_stock_block"></div>'));
                content.find('#jrj_sb_stock_block').append('<div class="no-result">' + this.no_reslut_prompt + '</div>');
                //content = '<p class="sb_error"><img src="http://i0.jrjimg.cn/lib/sb-alert.gif"/>' + this.no_reslut_prompt + '</p>';
                this.selectedItem = null;
                this.selectedIndex = 0;
                this._fillContainer(content[0]);

            } else {
                content = $('<div></div>');
                content.append($(Mustache.render(this.titleTmpl, { title: '品种' })));
                content.append($('<div id="jrj_sb_stock_block"></div>'));
                content.find('#jrj_sb_stock_block').append($('<table></table>'));
                this.selectedIndex = 0;
                var q = this.query;
                for (var i = 0; i < list.length; i++) {
                    var item = list[i],
                        obj = { col0: '', col1: '', col2: '', col3: '', col4: '' },
                        keyItem = '';

                    if (Tools.contains(item.shrt, q)) {
                        keyItem = item.shrt;
                    } else if (Tools.contains(item.code, q)) {
                        keyItem = item.code;
                    } else if (Tools.contains(item.name, q)) {
                        keyItem = item.name;
                    }

                    obj.col0 = keyItem;
                    obj.col1 = Tools.getTag(item.mrkt, item.type);
                    obj.col2 = Tools.bold(item.name, q);
                    obj.col3 = Tools.bold(item.code, q);
                    obj.col4 = Tools.bold(item.shrt, q);

                    if (Tools.isUS(item.mrkt)) {
                        content.find('#jrj_sb_stock_block').find('table').append($(Mustache.render(this.stockRowTmpl_US, obj)));
                    } else {
                        content.find('#jrj_sb_stock_block').find('table').append($(Mustache.render(this.stockRowTmpl, obj)));
                    }
                }

                this._setSelectedItem(content.find('table tr:first')[0]);
                //this._setClist(this.slist[this.selectedIndex]);
                this._fillContainer(content[0]);
            }
            
            if (this.config.hasTougu) {
                //请求投资顾问数据
                self.fetchTougu();
            }

            if (!this.config.hasStock) {
                $('#jrj_sb_stock_block').hide();
                $('#jrj_sb_stock_block').prev().hide();
            }

            //如果缓存dom对象，IE下填充容器为空，innerHTML和slist都需要缓存
            //this._dataCache[this.query] = { html: this.container.innerHTML, slist: list };
            this._createMutiPrompt();
            this._displayContainer();
        },
        _fillContainer: function (content) {
            if (content.nodeType == 1) {
                this.container.innerHTML = "";
                this.container.appendChild(content);
            } else {
                this.container.innerHTML = content;
            }

            if (Tools.ie6) {
                this.container.insertBefore(Tools.createIframeMask(), this.container.firstChild);
            }
            //每次填充时重新定位，如果只在下方显示可以在_initContainer中初始化
            this._setContainerPos();
        },
        _displayContainer: function () {
            if (Tools.trim(this.container.innerHTML)) {
                this.show();
            } else {
                this.hide();
            }
        },
        _createMutiPrompt: function () {
            if (this.slist.length > 0 && this.muti) {
                var prompt = Tools.createElement("div");
                Tools.addClass(prompt, "sb_muti_prompt");
                prompt.innerHTML = "<p class='sb_muti_line1'><img src='http://i0.jrjimg.cn/lib/sb-alert.gif'/>[" + this.muti_choice_prompt + "]</p><p class='sb_muti_line2'><img src='http://i0.jrjimg.cn/lib/sb-dot.gif'/>" + String.fromCharCode(20363, 22914, 65306) + "601858,600123,000001</p>";
                this.container.appendChild(prompt);
            }
        },
        /*
         * 请求投资顾问数据
         */
        fetchTougu: function () {
            var self = this;
            var list = this.slist;

            $.ajax({
                url: self.url_tougu.replace('{keyword}', encodeURIComponent($.trim($(self.textInput).val()))),
                dataType: 'jsonp',
                type: 'get',
                cache: false,
                timeout: 5000,
                success: function (data) {
                    if (typeof data != 'undefined' && data != null && data.data.length > 0) {
                        var content = $('<div/>');
                        content.append($(Mustache.render(self.titleTmpl, { title: '投资顾问' })));
                        content.append($('<div id="jrj_sb_tougu_block"></div>'));
                        $(content.html()).insertAfter($('#jrj_sb_stock_block'));

                        var tougu_Tmpl = '<li class="clearfix"><a target="_blank" href="{{url}}" data-touguId="{{touguId}}"><span class="col-1"><img src="{{img}}" width="30" height="30" /></span><span class="col-2">{{{name}}}</span><span class="col-3">{{{comp}}}</span></a></li>',
                            content = '';

                        content = $('<ul class="jrj_sb_tougu_list"></ul>');

                        var _data = [];

                        for (var i = 0, len = data.data.length; i < len; i++) {
                            _data.push({ url: 'http://itougu.jrj.com.cn/account/adviser/' + data.data[i].userId + '/', img: data.data[i].headImage, name: data.data[i].userName, comp: data.data[i].company, touguId: data.data[i].userId });
                        }


                        for (var i = 0, len = _data.length; i < len; i++) {
                            content.append($(Mustache.render(tougu_Tmpl, _data[i])));
                        }

                        $('#jrj_sb_tougu_block').append(content);


                        /*
                         * 20160214
                         * 添加customEvent参数，使得投顾列表具有自定义点击事件
                         */
                        if (typeof self.config.customEvent == 'function') {
                            $('.jrj_sb_tougu_list li a').click(function (e) {
                                e.preventDefault();
                                self.config.customEvent({
                                    inputText: $(self.textInput).val(),
                                    clickObj: $(this)
                                }, event);
                                self.hide();
                            });
                        } else {
                            //window.location = self.url_search_direct.replace('{keyword}', encodeURIComponent($.trim($(self.textInput).val())));
                        }


                    } else {
                        $('#jrj_sb_tougu_block').append('<div class="no-result">' + self.no_reslut_prompt + '</div>');

                        if (list.length <= 0) {
                            setTimeout(function () {
                                self.hide();
                            }, 500);
                        }
                    }

                    //如果缓存dom对象，IE下填充容器为空，innerHTML和slist都需要缓存
                    self._dataCache[self.query] = { html: self.container.innerHTML, slist: list };
                },
                complete: function () {
                }
            });

        },
        /**
             * @ignore
             */
        reset: function (clearInput) {
            this.selectedItem = null;
            this.selectedIndex = 0;
            if (clearInput) {
                this.query = "";
                this.textInput.value = "";
            }
            this.slist = new Array();
            this.clist = new Array();
        },
        /**
		 * reset查询框，清除查询缓存，切换查询类型时应调用以便得到正确的数据
		 */
        clear: function () {
            this.reset(true);
            this.textInput.value = this.input_prompt;
            this._dataCache = {};
        },
        /**
		 * 删除查询框容器DOM，特殊情况使用。某一操作频繁创建查询框时清除不使用的div
		 */
        remove: function () {
            if (this.container && this.container.parentNode) {
                this.container.parentNode.removeChild(this.container);
            }
        },
        /**
		 * @ignore
		 */
        openWin: function (url, event) {
            //ie下window.open，无法带referer，所以都用submit
            //if(event.type=="mouseup"){				
            //	window.open(url);
            //}else{			
            try {
                this.submitForm = true;
                if (this.forceForm != null) {
                    var fw = new JRJ.ui.ForceWin(this.forceForm);
                    if (event.type == "mouseup") {	//			
                        fw.open2(url);
                    } else {
                        if (Tools.isWebkit) { //chrome safari使用submit提交不了
                            fw.open2(url);
                        } else {
                            fw.open(url);
                        }
                    }
                } else {
                    window.open(url);
                }
            } catch (e) {
                window.open(url);
            }
            //}
        },
        /**
		 * @ignore
		 * 使用checkSubmit是保证 enterEffective == false时，不提交表单
		 */
        checkSubmit: function () {
            try {
                if (this.submitForm) {
                    return true;
                } else {
                    return false;
                }
            } catch (e) {
                return false;
            } finally {
                this.submitForm = false;
            }
        },
        /**
		 * @ignore
		 */
        matchPattern: function (obj, patterns) {
            var url = "";
            for (var i = 0; i < patterns.length; i++) {
                if (typeof (patterns[i]) == "object") {
                    url = patterns[i].readURL(obj);
                    if (url != "") {
                        return url;
                    }
                }
            }
            return "";
        }
    }

    JRJ.ui.SearchBox.focusInstance = null;

    /**
	 * 查询类型关键字和其对应的url，在SearchBox中使用
	 * @class 查询类型关键字和其对应的url，在SearchBox中使用
	 * @param {string} kw 关键字
	 * @param {string} urlPattern 关键字对应的url
	 */
    JRJ.ui.Pattern = function (kw, urlPattern) {
        this.kw = kw;
        this.urlPattern = urlPattern;
    }
    JRJ.ui.Pattern.prototype = {
        /**
           * @ignore
           */
        readURL: function (obj) {
            if (!obj) return "";
            var longKeyWord = ".";
            for (var p in obj) {
                longKeyWord += obj[p] + ".";
            }
            var kwArray = this.kw.split(".");
            for (var i = 0; i < kwArray.length; i++) {
                var pos = Tools.trim(longKeyWord).indexOf("." + kwArray[i] + ".");
                if (pos == -1) {
                    return "";
                } else {
                    longKeyWord = longKeyWord.replace("." + kwArray[i] + ".", ".");
                }
            }
            return this.replaceURL(obj);
        },
        /**
		 * @ignore
		 */
        replaceURL: function (obj) {
            var url = this.urlPattern;
            if (obj) {
                for (var p in obj) {
                    var reg = new RegExp("\\[" + p + "\\]", "g");
                    url = url.replace(reg, obj[p]);
                }
            }
            return url;
        }
    }

    /**
	 * @ignore
	 * 强制打开窗口，用form提交打开窗口
	 */
    JRJ.ui.ForceWin = function (formId) {
        if (formId && document.getElementById(formId)) {
            this.forceForm = document.getElementById(formId);
            if (!this.forceForm.url) {
                return;
            }
            this.forceForm.target = "_blank";
            this.forceForm.method = "get";
            this.forceForm.action = "http://sq.share.jrj.com.cn/jump";
            this.btn = document.getElementById(formId + "_submitBtn");
        }
        /**
		 * @ignore
		 */
        this.open = function (sUrl) {
            this.forceForm.url.value = sUrl;
            this.btn.focus();
            //点击查询时用focus提交失败
            //focus和submit只能用一个，否则回车时ie6打开两个窗口
            //回车使用submit提交，ie还会触发查询框后的button的onclick
            //回车使用submit提交，ff抛异常
        }
        this.open2 = function (sUrl) {
            this.forceForm.url.value = sUrl;
            this.forceForm.submit();//firefox有时提交不了,why?
        }
    }

    var Event = {
        on: function (ele, evt, fcn) {
            if (Tools.isDefined(ele, "attachEvent")) {
                var evts = evt.split(' ');
                for (var i = 0, iLen = evts.length; i < iLen; i++) {
                    ele.attachEvent("on" + evts[i], function (event) { fcn(event); });
                }
            }

            else if (Tools.isDefined(ele, "addEventListener")) {
                var evts = evt.split(' ');
                for (var i = 0, iLen = evts.length; i < iLen; i++) {
                    ele.addEventListener(evts[i], fcn, false);
                }
            }
            return [ele, evt, fcn];
        },

        remove: function (args) {
            if (Tools.isDefined(args[0], "detachEvent"))
                args[0].detachEvent("on" + args[1], args[2]);
            else if (Tools.isDefined(args[0], "removeEventListener")) {
                args[0].removeEventListener(args[1], args[2], false);
            }
        },
        //on(ele, evt, bindAsEvent(object,method,param))
        //绑定事件注册，可传递参数
        bindAsEvent: function (object, method, param) {
            return function (event) {
                method.apply(object, [event || window.event].concat(param));
            }
        },

        //获取event对象目标元素
        getTarget: function (event) {
            if (event == null)
                return null;

            if (typeof (event.srcElement) != "undefined")
                return event.srcElement;
            else
                return event.target;
        },
        //停止事件冒泡
        stop: function (evt) {
            if (document.all) {
                evt.returnValue = false;
                evt.cancelBubble = true;
            }
            else {
                evt.preventDefault();
                evt.stopPropagation();
            }
        },
        pageXY: function (event) {
            var l = event.pageX || (event.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft));
            var t = event.pageY || (event.clientY + (document.documentElement.scrollTop || document.body.scrollTop));
            return { left: l, top: t };
        }
    };
    var userAgent = navigator.userAgent.toLowerCase();
    var Tools = {
        ie: /*@cc_on!@*/false,
        ie6: navigator.appVersion.indexOf("MSIE 6.0") != -1,
        isWebkit: /applewebkit/.test(userAgent),
        $: function (id, docObj) {
            if (!docObj) {
                var doc = document;
            }
            return doc.getElementById(id);
        },
        isDefined: function (obj, field) {
            return typeof (obj[field]) != "undefined";
        },
        createElement: function (tName, docObj) {
            if (!docObj) {
                var doc = document;
            }
            return doc.createElement(tName);
        },
        createIframeMask: function () {
            var mask = Tools.createElement("iframe");
            mask.src = "about:blank";
            mask.frameBorder = "0";
            mask.className = "jrj_sb_mask";
            mask.style.setExpression("top", 'eval("(parseInt(this.parentNode.currentStyle.borderTopWidth)||0)*-1") + "px"');
            mask.style.setExpression("left", 'eval("(parseInt(this.parentNode.currentStyle.borderLeftWidth)||0)*-1") + "px"');
            mask.style.setExpression("width", 'eval("this.parentNode.offsetWidth") + "px"');
            mask.style.setExpression("height", 'eval("this.parentNode.offsetHeight") + "px"');
            return mask;
        },
        setElementStyles: function (element, styles) {
            var style = element.style;
            for (var name in styles) {
                style[name] = styles[name];
            }
        },
        addStyle: function (id, css, doc) {
            var styleEl = this.$(id);
            if (styleEl) return; // 防止多个实例时重复添加
            var doc = doc || document;
            var style = doc.createElement("style");
            style.id = id;
            style.type = "text/css";
            var head = doc.getElementsByTagName("head")[0];
            head.insertBefore(style, head.firstChild);
            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(doc.createTextNode(css));
            }
        },
        getOffsetPosition: function (elem) {
            if (!elem) return { left: 0, top: 0 };
            var top = 0, left = 0;
            if ("getBoundingClientRect" in document.documentElement) {
                //jquery方法
                var box = elem.getBoundingClientRect(),
				doc = elem.ownerDocument,
				body = doc.body,
				docElem = doc.documentElement,
				clientTop = docElem.clientTop || body.clientTop || 0,
				clientLeft = docElem.clientLeft || body.clientLeft || 0,
				top = box.top + (self.pageYOffset || docElem && docElem.scrollTop || body.scrollTop) - clientTop,
				left = box.left + (self.pageXOffset || docElem && docElem.scrollLeft || body.scrollLeft) - clientLeft;
            } else {
                do {
                    top += elem.offsetTop || 0;
                    left += elem.offsetLeft || 0;
                    elem = elem.offsetParent;
                } while (elem);
            }
            return { left: left, top: top };
        },
        trim: function (str) {
            return str.replace(/(^\s*)|(\s*$)/g, "");
        },
        contains: function (str1, str2) {
            //按小写匹配
            return str1.toLowerCase().indexOf(str2.toLowerCase()) > -1;
        },
        hasClass: function (ele, cls) {
            return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
        },
        addClass: function (ele, cls) {
            if (!this.hasClass(ele, cls)) ele.className += " " + cls;
        },
        removeClass: function (ele, cls) {
            if (this.hasClass(ele, cls)) {
                var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
                ele.className = ele.className.replace(reg, ' ');
            }
        },
        isUS: function (mrkt) {
            return -1 != ("." + mrkt + ".").indexOf(".us.");
        },
        //加粗
        bold: function (str, key) {//如果str包含key，则加粗str匹配key的部分。
            if (this.contains(str, key)) {
                var begin = str.toLowerCase().indexOf(key.toLowerCase());
                return str.substring(0, begin) + "<b>" + str.substring(begin, key.length + begin) + "</b>" + str.substring(key.length + begin, str.length);
            } else {
                return str;
            }
        },
        //市场及类型
        getTag: function (market, type) {
            var tag = "";
            switch (market) {
                case "us.nys":
                case "us.nas":
                case "us.uss":
                case "us": {
                    tag = String.fromCharCode(32654, 32929);//美股
                    break;
                }
                case "hk": {
                    tag = String.fromCharCode(28207, 32929);//港股
                    break;
                }
                case "cn.sz": {
                    tag = String.fromCharCode(28145, 24066);//深市
                    break;
                }
                case "cn.sh": {
                    tag = String.fromCharCode(27818, 24066);//沪市
                    break;
                }
                case "cn": {
                    tag = String.fromCharCode(27818, 28145);//沪深
                    break;
                }
            }
            if (("." + type + ".").indexOf(".f.") >= 0) {
                tag = String.fromCharCode(22522, 37329);//基金
            }
            if (("." + type + ".").indexOf(".qh.") >= 0) {
                tag = String.fromCharCode(26399, 36135);//期货
            }
            return tag;
        },
        //全角转半角
        toDBC: function (str) {
            var DBCStr = "";
            for (var i = 0; i < str.length; i++) {
                var c = str.charCodeAt(i);  //指定位置处的字符的 Unicode 编码
                if (c == 12288) {
                    DBCStr += String.fromCharCode(32);  //全角空格转半角
                    continue;
                }
                if (c > 65280 && c < 65375) {
                    DBCStr += String.fromCharCode(c - 65248);
                    continue;
                }
                DBCStr += String.fromCharCode(c);
            }
            return DBCStr;
        },
        createTimeStamp: function () {
            var nowDate = new Date();
            var h = nowDate.getHours();
            var m = nowDate.getMinutes();
            var s = nowDate.getSeconds();
            if (h <= 9) { h = "0" + h }
            if (m <= 9) { m = "0" + m }
            if (s <= 9) { s = "0" + s }
            return h + "" + m + "" + s;
        },
        formatDate: function (d) {
            var str = "yyMMddhhmmss";
            var month = d.getMonth() + 1;

            str = str.replace(/yy/, (d.getYear() % 100) > 9 ? (d.getYear() % 100).toString() : '0' + (d.getYear() % 100));
            str = str.replace(/MM/, month > 9 ? month.toString() : '0' + month);
            str = str.replace(/dd/, d.getDate() > 9 ? d.getDate().toString() : '0' + d.getDate());
            str = str.replace(/hh/, d.getHours() > 9 ? d.getHours().toString() : '0' + d.getHours());
            str = str.replace(/mm/, d.getMinutes() > 9 ? d.getMinutes().toString() : '0' + d.getMinutes());
            str = str.replace(/ss/, d.getSeconds() > 9 ? d.getSeconds().toString() : '0' + d.getSeconds());

            return str;
        },
        setCookie: function (name, value, expires, path, domain, secure) {
            document.cookie = name + "=" + escape(value) +
		    ((expires) ? "; expires=" + expires.toGMTString() : "") +
		    ((path) ? "; path=" + path : "") +
		    ((domain) ? "; domain=" + domain : "") +
		    ((secure) ? "; secure" : "");
        }
    };
    window.SearchBox = JRJ.ui.SearchBox;
    window.Pattern = JRJ.ui.Pattern;
})();

/**
  后记：
      开始想的很完美，做的过程中要平衡复杂需求、浏览器兼容性，完美是不可能的，只能合理取舍尽量平衡处理。
    1.平衡取舍        
      1)  本来想把up down切换做成google suggest一样（input作为切换的起点终点），但加上多选股票，操作逻辑就复杂多了。
      最后去掉这一功能，默认选中结果列表第一项，如果用户没有手动选择，则默认以第一项查询，也符合股票软件用户使用习惯。      
      2)  去掉列表的最小宽度，ie6不支持。
      3)  暂时去掉列表在input上方的定位。
      4)  搜索时不去掉字符串首尾空格。
      5)  在对话框中的查询框，当页面滚动如何处理，最好是一起滚，但有点闪。
      6)  缓存已查询的结果，相同不再请求。判断是否需要请求要考虑多选和各种用户操作造成的变化。
      
    2.选择正确的事件做正确的事
      1)  input的focus/blur+键盘事件(输入键 esc enter up down)
      2)  列表的鼠标和键盘事件
      3)  window的scroll resize事件
      
    3.写case list，反复测试 疯狂测试
   
    未修复bug：
    1.直接点按钮的提示无法隐藏，问题在于用input blur事件来隐藏容器，正确应该用body的click事件
    
    曾今遇到的问题：
    1.按shift键等一些功能键时，重新查询
    2.input在fixed定位的元素里，页面滚动时如何定位偏差大。 
    3.判断是否需要更新很绕，最后简化了up down切换。
    
 */
(function(n){n.fn.cutoff=function(t){var i=n.extend({text:"",limit:0,ellipse:null},t),r,s;if(i.limit==0)return i.text;var u=i.text.replace(/[^\x00-\xff]/g,"**"),f=u.substring(0,i.limit),e=f.split("*").length-1,o=e/2;return i.limit=i.limit-o,r=i.text.substring(0,i.limit),s="",i.ellipse?i.limit<i.text.length?r+i.ellipse:r:r}})(jQuery);$(function(){$('[data-cutoff="true"]').each(function(){var n=$(this).cutoff({text:$(this).text(),limit:$(this).data("cutoff-limit"),ellipse:$(this).data("cutoff-ellipse")});$(this).attr({"data-cutoff-done":"yes"});$(this).text(n)});window.cutoffStandalone=function(){$('[data-cutoff="true"]').each(function(){if($(this).attr("data-cutoff-done")!="yes"){var n=$(this).cutoff({text:$(this).text(),limit:$(this).data("cutoff-limit"),ellipse:$(this).data("cutoff-ellipse")});$(this).attr({"data-cutoff-done":"yes"});$(this).text(n)}})}});
/*
//# sourceMappingURL=cutoff.min.js.map
*/
//适用性测试
JRJ.usability = {
	
	show: function( callback ){
	    this.createStyle('.clearfix:before,.clearfix:after{content:"\0020";display:block;height:0;overflow:hidden}.clearfix:after{clear:both}.clearfix{zoom:1}.dialog-usability{z-index:9600}.dialog-usability .md-container{padding:0;height:580px}.usability-eval,.usability-result{position:absolute;left:0;top:0;width:860px;height:580px;background:#fff}.dialog-usability .md-close{width:24px !important;height:24px !important;background:url(http://i0.jrjimg.cn/itougu-web/usability/close.png) 0 0 !important}.dialog-usability .md-close:hover{background:url(http://i0.jrjimg.cn/itougu-web/usability/close.png) 0 0 !important}.usability-eval .head{height:175px;background:url(http://i0.jrjimg.cn/itougu-web/usability/head.jpg)}.usability-eval .warp{margin:0 64px}.usability-eval .steps{position:relative;margin-top:12px}.usability-eval .steps dd{float:left;margin-left:64px;position:relative;z-index:10}.usability-eval .steps dd>a{display:block;width:94px;height:94px;background:url(http://i0.jrjimg.cn/itougu-web/usability/steps.png);}.usability-eval .steps dd.curr>a{background-position:0 100%}.usability-eval .steps dd>a[data-link="q2"]{background-position:25% 0}.usability-eval .steps dd>a[data-link="q3"]{background-position:50% 0}.usability-eval .steps dd>a[data-link="q4"]{background-position:75% 0}.usability-eval .steps dd>a[data-link="q5"]{background-position:100% 0}.usability-eval .steps dd.curr>a[data-link="q2"]{background-position:25% 100%}.usability-eval .steps dd.curr>a[data-link="q3"]{background-position:50% 100%}.usability-eval .steps dd.curr>a[data-link="q4"]{background-position:75% 100%}.usability-eval .steps dd.curr>a[data-link="q5"]{background-position:100% 100%}.usability-eval .steps dd:first-child{margin-left:0}.usability-eval .steps dt{position:absolute;left:5%;top:50%;width:90%;border-top:1px dotted #666;z-index:5}.usability-eval .questions{height:196px}.usability-eval .questions dl{display:none}.usability-eval .questions dl.curr{display:block}.usability-eval .questions dl>dt{color:#2b2b2b;font-size:18px;margin:12px 0}.usability-eval .questions dl>dd{font-size:14px;color:#666}.usability-eval .questions dl>dd label{cursor:pointer;line-height:28px}.usability-eval .questions dl>dd i{display:inline-block;width:13px;height:13px;background:url(http://i0.jrjimg.cn/itougu-web/usability/radio.png);margin-right:10px}.usability-eval .questions dl>dd.checked{color:#e93c35}.usability-eval .questions dl>dd.checked i{background-position:100% 0}.usability-eval .questions dl>dd>input{margin-left:-999999px}.usability-eval .submitbtn{text-align:center}.usability-eval .submitbtn>a{display:inline-block;width:122px;height:32px;line-height:32px;border-radius:18px;border:2px solid #d5d5d5;background-color:#d5d5d5;color:#fff;font-size:18px;text-decoration:none;cursor:default}.usability-eval .submitbtn>a.clickable{cursor:pointer;color:#f6554a;border:2px solid #f6554a;background-color:transparent}.usability-eval .submitbtn>a.clickable:hover{background-color:#f6554a;color:#fff}.usability-eval .foot{position: absolute;left: 0;bottom: 0;line-height: 20px;color: #fff;background-color: #767db3;width: 840px;font-size: 12px;padding: 3px 10px;}.usability-result .head{font-weight:lighter;height:117px;line-height:117px;text-align:center;font-size:26px;color:#fff;background:url(http://i0.jrjimg.cn/itougu-web/usability/result_head.png)}.usability-result .wrap{margin:0 70px;width:auto !important}.usability-result .desc{font-size:16px;margin:40px 0 32px;line-height:28px}.usability-result .point{position:relative;padding-top:80px;padding-bottom:16px;background:url(http://i0.jrjimg.cn/itougu-web/usability/point_bg.png) 0 bottom no-repeat}.usability-result .point>dd{float:left;width:60px;height:32px;line-height:32px;font-size:18px;text-align:center;margin-left:13px;color:#fff}.usability-result .point>dd:first-child{margin-left:0}.usability-result .point>dt{position:absolute;top:0;left:0;margin-left:-5px;width:70px;height:70px;text-align:center}.usability-result .point>dt>img{width:40px;margin-top:16px}.usability-result .point>dt>i{position:absolute;top:0;left:0;width:100%;height:100%;background:url(http://i0.jrjimg.cn/itougu-web/usability/avatar_bg.png) center}.usability-result .type>li{float:left;width:33.3333%;text-align:center;font-size:18px;line-height:28px}.usability-result .buttons{text-align:center;margin-top:84px}.usability-result .buttons>a{display:inline-block;width:126px;height:36px;line-height:36px;color:#f6554a;text-align:center;border:2px solid #f6554a;margin-left:40px;border-radius:20px;font-size:18px;text-decoration:none}.usability-result .buttons>a:hover{background-color:#f6554a;color:#fff}.usability-result .buttons>a:first-child{margin-left:0}');

		var dlgA = $.extend(true, {}, JRJ.Dialogs);
		dlgA.standardDialog({
			noTitle: true,
            customClass: 'dialog-usability',
            width: 790,
            content: '<div class="usability-result"><div class="head">基于您的回答，以下是你的风险等级</div><div class="wrap"><p class="desc"></p><dl class="point clearfix"><dd style="background:#2aebb5">1</dd><dd style="background:#68ed75">2</dd><dd style="background:#f9e53f">3</dd><dd style="background:#ffb933">4</dd><dd style="background:#fa842d">5</dd><dd style="background:#f66c54">6</dd><dd style="background:#ed4d30">7</dd><dd style="background:#e42c0c">8</dd><dd style="background:#d72000">9</dd><dd style="background:#be1d00">10</dd><dt><img src="http://i0.jrjimg.cn/zqt-red-1000/focus/logo_48_48.png" alt=""><i></i></dt></dl><ul class="type clearfix"><li style="width:20%">保守型</li><li style="width:46.66666%">稳健型</li><li>激进型</li></ul><p class="buttons"><a class="onemore" href="javascript:;">再测一次</a> <a class="close" href="javascript:;">关闭</a></p></div></div><div class="usability-eval"><div class="head"></div><div class="warp"><dl class="steps clearfix"><dd class="curr"><a data-link="q1" href="javascript:;"></a></dd><dd><a data-link="q2" href="javascript:;"></a></dd><dd><a data-link="q3" href="javascript:;"></a></dd><dd><a data-link="q4" href="javascript:;"></a></dd><dd><a data-link="q5" href="javascript:;"></a></dd><dt></dt></dl><form class="questions"><dl class="q1 curr"><dt>您的年龄是多少？</dt><dd><label for="age1"><i></i>30岁以下</label><input type="radio" value="1" name="ans1" id="age1"></dd><dd><label for="age2"><i></i>30-39岁</label><input type="radio" value="2" name="ans1" id="age2"></dd><dd><label for="age3"><i></i>40-49岁</label><input type="radio" value="3" name="ans1" id="age3"></dd><dd><label for="age4"><i></i>50-59岁</label><input type="radio" value="4" name="ans1" id="age4"></dd><dd><label for="age5"><i></i>60以上</label><input type="radio" value="5" name="ans1" id="age5"></dd></dl><dl class="q2"><dt>您有多少年投资股票、基金、外汇、金融衍生产品等风险投资品的经验？</dt><dd><label for="exp1"><i></i>8年以上</label><input type="radio" value="1" name="ans2" id="exp1"></dd><dd><label for="exp2"><i></i>5-8年</label><input type="radio" value="2" name="ans2" id="exp2"></dd><dd><label for="exp3"><i></i>2-5年</label><input type="radio" value="3" name="ans2" id="exp3"></dd><dd><label for="exp4"><i></i>少于2年</label><input type="radio" value="4" name="ans2" id="exp4"></dd><dd><label for="exp5"><i></i>没有经验</label><input type="radio" value="5" name="ans2" id="exp5"></dd></dl><dl class="q3"><dt>您的总流动资产（储蓄、理财等，固定资产除外）大概是多少？</dt><dd><label for="asset1"><i></i>100万以上</label><input type="radio" value="1" name="ans3" id="asset1"></dd><dd><label for="asset2"><i></i>50-100万</label><input type="radio" value="2" name="ans3" id="asset2"></dd><dd><label for="asset3"><i></i>20-50万</label><input type="radio" value="3" name="ans3" id="asset3"></dd><dd><label for="asset4"><i></i>5-20万</label><input type="radio" value="4" name="ans3" id="asset4"></dd><dd><label for="asset5"><i></i>5万以下</label><input type="radio" value="5" name="ans3" id="asset5"></dd></dl><dl class="q4"><dt>如果您的投资资产在一次市场震荡中损失了10%，您会怎么做？</dt><dd><label for="lost1"><i></i>买入更多</label><input type="radio" value="1" name="ans4" id="lost1"></dd><dd><label for="lost2"><i></i>继续持有</label><input type="radio" value="2" name="ans4" id="lost2"></dd><dd><label for="lost3"><i></i>部分卖出</label><input type="radio" value="3" name="ans4" id="lost3"></dd><dd><label for="lost4"><i></i>全部卖出</label><input type="radio" value="4" name="ans4" id="lost4"></dd></dl><dl class="q5"><dt>假设下面4种投资可能，您可能选择的投资是？</dt><dd><label for="inv1"><i></i>最大收益42.80%，最大损失-24%</label><input type="radio" value="1" name="ans5" id="inv1"></dd><dd><label for="inv2"><i></i>最大收益20.00%，最大损失-8%</label><input type="radio" value="2" name="ans5" id="inv2"></dd><dd><label for="inv3"><i></i>最大收益5%，最大损失0%</label><input type="radio" value="3" name="ans5" id="inv3"></dd><dd><label for="inv4"><i></i>固定收益4%</label><input type="radio" value="4" name="ans5" id="inv4"></dd></dl></form><p class="submitbtn"><a href="javascript:;">提交</a></p></div><p class="foot">应证监会要求，证券投资者在进行证券投资前须完成风险承受能力测评；在您选择投资咨询服务之前，我们也建议您做好测评工作，为了更好地了解自身风险偏好和风险承受能力，做出合适的选择。</p></div>',
            okBtnText: "确认",
            cancelBtnText: "取消",
            hasBtn: false,
            hasCloseBtn: true,
            hasOkBtn: false,
            hasCancelBtn: false,
            okCallback: function() {},
            cancelCallback: function () {
                if (window.dlgClone) {
                    window.dlgClone.close();
                }
            },
            isFixed: true
        });

		this.run( callback );
	},

	run: function( callback ){
		var form = $('.usability-eval .questions'),
			submitBtn = $('.usability-eval .submitbtn>a'),
			ueval = $('.usability-eval'),
			uresult = $('.usability-result'),
			avatar = $('.usability-result .point>dt'),
			avatarImg = membership.getUserInfo().headImage,
			_this = this;


		//点击选项
		$('body').on('click', '.usability-eval .questions label', function(){
			var self = $(this), dd = self.parent(), dl = dd.parent();
			dl.find('dd.checked').removeClass('checked');
			if( !dd.hasClass('checked') ) dd.addClass('checked');

			setTimeout(function(){
				_this.moveTo( dl.index()+1==form.find('dl').length ? dl.index() : dl.index()+1 );
					if( _this.isComplete() ) submitBtn.addClass('clickable');
				}
			, 300);
		});

		//点击步骤
		$('body').on('click', '.usability-eval .steps dd>a', function(){
			var self = $(this), dd = self.parent();
			if( dd.hasClass('curr') ) return;
			_this.moveTo(dd.index());	
		});

		//再测一次按钮
		$('body').on('click', '.usability-result .buttons>a.onemore', function(){
				ueval.fadeIn(); 
	            uresult.fadeOut();
	            avatar.css('left', 0);
		});

		//关闭按钮
		$('body').on('click', '.usability-result .buttons>a.close', function(){
			$('.album-dialog .md-close').click();
		});


		function showResult(res) {
			ueval.fadeOut(); 
        	uresult.fadeIn(function(){
        		var point = Math.floor(res.evaScore/10);
        		avatar.animate({'left': (point - 1) * 73 +'px'}, 1000);
        	});

        	$('.usability-result .desc').text(res.evaContent);
        	if( avatarImg ) avatar.find('img').attr('src', avatarImg);
		}


		//提交调查问卷
		$('body').on('click', '.usability-eval .submitbtn>a', function(){
			if( $(this).hasClass('clickable') ) {
				$.ajax({
	                type: 'POST',
	                //url: 'mock.json',
	                url: '/account/saveEvaluationResult.jspa',
	                data: form.serialize(),
	                dataType: 'json',
	                beforeSend: function(){
	                    submitBtn.removeClass('clickable').text('提交中...');
	                },
	                error: function (){
	                    submitBtn.addClass('clickable').text('提交');
	                    JRJ.MiniAlerts.prompt({message:'<p>抱歉，系统错误，请稍后再试</p>'})
	                },
	                success: function(data) {
	                    if( +data.retCode ){ //失败
	                    	submitBtn.addClass('clickable').text('提交');
	                    	JRJ.MiniAlerts.prompt({message:'<p>' + data.msg + '</p>'}) 
	                    } else { //成功
	                    	submitBtn.removeClass('clickable').text('提交');
	                    	form.find('dd.checked').removeClass('checked');
	                    	form.find('input').prop('checked', false);
	                    	_this.moveTo(0);

	                    	showResult(data);
	                    	membership.usability( data );
	                    	callback && callback();
	                    }
	                }
	            });
			}
		});

		

		// 登录后
		if( membership.getUserInfo().userId ) {
			membership.getUserInfo().evaRet && $.ajax({
		        type: 'GET',
		        //url: 'mock.json',
		        url: '/account/getEvaluationResult.jspa',
		        dataType: 'json',
		        error: function (){
		            JRJ.MiniAlerts.prompt({message:'<p>抱歉，系统错误，请稍后再试</p>'})
		        },
		        success: showResult
		    });
		} else {
			// 登录前
			+$.cookie('TG_evaluation_score') && showResult({
				evaContent: $.cookie('TG_evaluation_content'), evaRet: $.cookie('TG_evaluation_type'), evaScore: $.cookie('TG_evaluation_score')
			});
		}

	},

	moveTo: function(index){
		var form = $('.usability-eval .questions'), steps = $('.usability-eval .steps');
		form.find('dl.curr').removeClass('curr');
		form.find('dl').eq(index).addClass('curr');
		steps.find('dd.curr').removeClass('curr');
		steps.find('dd').eq(index).addClass('curr');
	},

	isComplete: function(){
		var form = $('.usability-eval .questions');
		return form.serialize().split('&').length == form.find('dl').length;
	},

	createStyle: function( cssText ){
		var resultStyle = document.getElementById( 'usability-css' ),
			head = document.getElementsByTagName( 'head' )[0];
		
		if( !resultStyle ){ 
			if( document.addEventListener ){
				resultStyle = document.createElement('style'); 
				resultStyle.type = 'text/css';
				resultStyle.id = 'usability-css';			
				resultStyle.media = 'screen';	
				head.appendChild( resultStyle );
				resultStyle.appendChild(document.createTextNode(cssText));
			} else { //IE7/8
				resultStyle = document.createElement('div');
				resultStyle.innerHTML = '_<style type=\"text/css\">' + cssText + '</style>';
				resultStyle.removeChild(resultStyle.firstChild);
				head.appendChild(resultStyle.firstChild);
			}
		}
	}
};
