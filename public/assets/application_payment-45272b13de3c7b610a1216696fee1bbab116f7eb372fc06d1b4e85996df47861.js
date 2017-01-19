function render_loading_invoice(e,t){var n=_.template(jQuery("#loading_invoice_template").html());jQuery(e).html(n(t))}function render_empty_invoice(e,t){var n=_.template(jQuery("#empty_invoice_template").html());jQuery(e).html(n(t))}function render_invoice_table(e,t){var n=_.template(jQuery("#invoice_table_template").html());jQuery(e).html(n(t))}function render_invoice_row(e,t){var n=_.template(jQuery("#invoice_row_template").html());jQuery(e).append(n({invoice:t}))}function render_payment_history(e,t){if(0==t.length)console.debug("Rendering empty invoices"),render_empty_invoice(e,{});else{var n="#invoice_table > tbody";console.debug("Rendering table"),render_invoice_table(e,{}),_.each(t,function(e){render_invoice_row(n,e)})}}function render_fail_invoice(e){var t=_.template(jQuery("#fail_invoice_template").html());jQuery(e).html(t({message:"Can not read payment history from Payment service"}))}(function(){function e(e){function t(t,n,r,o,a,i){for(;a>=0&&a<i;a+=e){var s=o?o[a]:a;r=n(r,t[s],s,t)}return r}return function(n,r,o,a){r=E(r,a,4);var i=!x(n)&&g.keys(n),s=(i||n).length,u=e>0?0:s-1;return arguments.length<3&&(o=n[i?i[u]:u],u+=e),t(n,r,o,i,u,s)}}function t(e){return function(t,n,r){n=C(n,r);for(var o=w(t),a=e>0?0:o-1;a>=0&&a<o;a+=e)if(n(t[a],a,t))return a;return-1}}function n(e,t,n){return function(r,o,a){var i=0,s=w(r);if("number"==typeof a)e>0?i=a>=0?a:Math.max(a+s,i):s=a>=0?Math.min(a+1,s):a+s+1;else if(n&&a&&s)return a=n(r,o),r[a]===o?a:-1;if(o!==o)return a=t(l.call(r,i,s),g.isNaN),a>=0?a+i:-1;for(a=e>0?i:s-1;a>=0&&a<s;a+=e)if(r[a]===o)return a;return-1}}function r(e,t){var n=I.length,r=e.constructor,o=g.isFunction(r)&&r.prototype||s,a="constructor";for(g.has(e,a)&&!g.contains(t,a)&&t.push(a);n--;)a=I[n],a in e&&e[a]!==o[a]&&!g.contains(t,a)&&t.push(a)}var o=this,a=o._,i=Array.prototype,s=Object.prototype,u=Function.prototype,c=i.push,l=i.slice,p=s.toString,d=s.hasOwnProperty,f=Array.isArray,h=Object.keys,m=u.bind,v=Object.create,y=function(){},g=function(e){return e instanceof g?e:this instanceof g?void(this._wrapped=e):new g(e)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=g),exports._=g):o._=g,g.VERSION="1.8.3";var E=function(e,t,n){if(void 0===t)return e;switch(null==n?3:n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)};case 4:return function(n,r,o,a){return e.call(t,n,r,o,a)}}return function(){return e.apply(t,arguments)}},C=function(e,t,n){return null==e?g.identity:g.isFunction(e)?E(e,t,n):g.isObject(e)?g.matcher(e):g.property(e)};g.iteratee=function(e,t){return C(e,t,1/0)};var R=function(e,t){return function(n){var r=arguments.length;if(r<2||null==n)return n;for(var o=1;o<r;o++)for(var a=arguments[o],i=e(a),s=i.length,u=0;u<s;u++){var c=i[u];t&&void 0!==n[c]||(n[c]=a[c])}return n}},b=function(e){if(!g.isObject(e))return{};if(v)return v(e);y.prototype=e;var t=new y;return y.prototype=null,t},_=function(e){return function(t){return null==t?void 0:t[e]}},M=Math.pow(2,53)-1,w=_("length"),x=function(e){var t=w(e);return"number"==typeof t&&t>=0&&t<=M};g.each=g.forEach=function(e,t,n){t=E(t,n);var r,o;if(x(e))for(r=0,o=e.length;r<o;r++)t(e[r],r,e);else{var a=g.keys(e);for(r=0,o=a.length;r<o;r++)t(e[a[r]],a[r],e)}return e},g.map=g.collect=function(e,t,n){t=C(t,n);for(var r=!x(e)&&g.keys(e),o=(r||e).length,a=Array(o),i=0;i<o;i++){var s=r?r[i]:i;a[i]=t(e[s],s,e)}return a},g.reduce=g.foldl=g.inject=e(1),g.reduceRight=g.foldr=e(-1),g.find=g.detect=function(e,t,n){var r;if(r=x(e)?g.findIndex(e,t,n):g.findKey(e,t,n),void 0!==r&&r!==-1)return e[r]},g.filter=g.select=function(e,t,n){var r=[];return t=C(t,n),g.each(e,function(e,n,o){t(e,n,o)&&r.push(e)}),r},g.reject=function(e,t,n){return g.filter(e,g.negate(C(t)),n)},g.every=g.all=function(e,t,n){t=C(t,n);for(var r=!x(e)&&g.keys(e),o=(r||e).length,a=0;a<o;a++){var i=r?r[a]:a;if(!t(e[i],i,e))return!1}return!0},g.some=g.any=function(e,t,n){t=C(t,n);for(var r=!x(e)&&g.keys(e),o=(r||e).length,a=0;a<o;a++){var i=r?r[a]:a;if(t(e[i],i,e))return!0}return!1},g.contains=g.includes=g.include=function(e,t,n,r){return x(e)||(e=g.values(e)),("number"!=typeof n||r)&&(n=0),g.indexOf(e,t,n)>=0},g.invoke=function(e,t){var n=l.call(arguments,2),r=g.isFunction(t);return g.map(e,function(e){var o=r?t:e[t];return null==o?o:o.apply(e,n)})},g.pluck=function(e,t){return g.map(e,g.property(t))},g.where=function(e,t){return g.filter(e,g.matcher(t))},g.findWhere=function(e,t){return g.find(e,g.matcher(t))},g.max=function(e,t,n){var r,o,a=-(1/0),i=-(1/0);if(null==t&&null!=e){e=x(e)?e:g.values(e);for(var s=0,u=e.length;s<u;s++)r=e[s],r>a&&(a=r)}else t=C(t,n),g.each(e,function(e,n,r){o=t(e,n,r),(o>i||o===-(1/0)&&a===-(1/0))&&(a=e,i=o)});return a},g.min=function(e,t,n){var r,o,a=1/0,i=1/0;if(null==t&&null!=e){e=x(e)?e:g.values(e);for(var s=0,u=e.length;s<u;s++)r=e[s],r<a&&(a=r)}else t=C(t,n),g.each(e,function(e,n,r){o=t(e,n,r),(o<i||o===1/0&&a===1/0)&&(a=e,i=o)});return a},g.shuffle=function(e){for(var t,n=x(e)?e:g.values(e),r=n.length,o=Array(r),a=0;a<r;a++)t=g.random(0,a),t!==a&&(o[a]=o[t]),o[t]=n[a];return o},g.sample=function(e,t,n){return null==t||n?(x(e)||(e=g.values(e)),e[g.random(e.length-1)]):g.shuffle(e).slice(0,Math.max(0,t))},g.sortBy=function(e,t,n){return t=C(t,n),g.pluck(g.map(e,function(e,n,r){return{value:e,index:n,criteria:t(e,n,r)}}).sort(function(e,t){var n=e.criteria,r=t.criteria;if(n!==r){if(n>r||void 0===n)return 1;if(n<r||void 0===r)return-1}return e.index-t.index}),"value")};var O=function(e){return function(t,n,r){var o={};return n=C(n,r),g.each(t,function(r,a){var i=n(r,a,t);e(o,r,i)}),o}};g.groupBy=O(function(e,t,n){g.has(e,n)?e[n].push(t):e[n]=[t]}),g.indexBy=O(function(e,t,n){e[n]=t}),g.countBy=O(function(e,t,n){g.has(e,n)?e[n]++:e[n]=1}),g.toArray=function(e){return e?g.isArray(e)?l.call(e):x(e)?g.map(e,g.identity):g.values(e):[]},g.size=function(e){return null==e?0:x(e)?e.length:g.keys(e).length},g.partition=function(e,t,n){t=C(t,n);var r=[],o=[];return g.each(e,function(e,n,a){(t(e,n,a)?r:o).push(e)}),[r,o]},g.first=g.head=g.take=function(e,t,n){if(null!=e)return null==t||n?e[0]:g.initial(e,e.length-t)},g.initial=function(e,t,n){return l.call(e,0,Math.max(0,e.length-(null==t||n?1:t)))},g.last=function(e,t,n){if(null!=e)return null==t||n?e[e.length-1]:g.rest(e,Math.max(0,e.length-t))},g.rest=g.tail=g.drop=function(e,t,n){return l.call(e,null==t||n?1:t)},g.compact=function(e){return g.filter(e,g.identity)};var D=function(e,t,n,r){for(var o=[],a=0,i=r||0,s=w(e);i<s;i++){var u=e[i];if(x(u)&&(g.isArray(u)||g.isArguments(u))){t||(u=D(u,t,n));var c=0,l=u.length;for(o.length+=l;c<l;)o[a++]=u[c++]}else n||(o[a++]=u)}return o};g.flatten=function(e,t){return D(e,t,!1)},g.without=function(e){return g.difference(e,l.call(arguments,1))},g.uniq=g.unique=function(e,t,n,r){g.isBoolean(t)||(r=n,n=t,t=!1),null!=n&&(n=C(n,r));for(var o=[],a=[],i=0,s=w(e);i<s;i++){var u=e[i],c=n?n(u,i,e):u;t?(i&&a===c||o.push(u),a=c):n?g.contains(a,c)||(a.push(c),o.push(u)):g.contains(o,u)||o.push(u)}return o},g.union=function(){return g.uniq(D(arguments,!0,!0))},g.intersection=function(e){for(var t=[],n=arguments.length,r=0,o=w(e);r<o;r++){var a=e[r];if(!g.contains(t,a)){for(var i=1;i<n&&g.contains(arguments[i],a);i++);i===n&&t.push(a)}}return t},g.difference=function(e){var t=D(arguments,!0,!0,1);return g.filter(e,function(e){return!g.contains(t,e)})},g.zip=function(){return g.unzip(arguments)},g.unzip=function(e){for(var t=e&&g.max(e,w).length||0,n=Array(t),r=0;r<t;r++)n[r]=g.pluck(e,r);return n},g.object=function(e,t){for(var n={},r=0,o=w(e);r<o;r++)t?n[e[r]]=t[r]:n[e[r][0]]=e[r][1];return n},g.findIndex=t(1),g.findLastIndex=t(-1),g.sortedIndex=function(e,t,n,r){n=C(n,r,1);for(var o=n(t),a=0,i=w(e);a<i;){var s=Math.floor((a+i)/2);n(e[s])<o?a=s+1:i=s}return a},g.indexOf=n(1,g.findIndex,g.sortedIndex),g.lastIndexOf=n(-1,g.findLastIndex),g.range=function(e,t,n){null==t&&(t=e||0,e=0),n=n||1;for(var r=Math.max(Math.ceil((t-e)/n),0),o=Array(r),a=0;a<r;a++,e+=n)o[a]=e;return o};var T=function(e,t,n,r,o){if(!(r instanceof t))return e.apply(n,o);var a=b(e.prototype),i=e.apply(a,o);return g.isObject(i)?i:a};g.bind=function(e,t){if(m&&e.bind===m)return m.apply(e,l.call(arguments,1));if(!g.isFunction(e))throw new TypeError("Bind must be called on a function");var n=l.call(arguments,2),r=function(){return T(e,r,t,this,n.concat(l.call(arguments)))};return r},g.partial=function(e){var t=l.call(arguments,1),n=function(){for(var r=0,o=t.length,a=Array(o),i=0;i<o;i++)a[i]=t[i]===g?arguments[r++]:t[i];for(;r<arguments.length;)a.push(arguments[r++]);return T(e,n,this,this,a)};return n},g.bindAll=function(e){var t,n,r=arguments.length;if(r<=1)throw new Error("bindAll must be passed function names");for(t=1;t<r;t++)n=arguments[t],e[n]=g.bind(e[n],e);return e},g.memoize=function(e,t){var n=function(r){var o=n.cache,a=""+(t?t.apply(this,arguments):r);return g.has(o,a)||(o[a]=e.apply(this,arguments)),o[a]};return n.cache={},n},g.delay=function(e,t){var n=l.call(arguments,2);return setTimeout(function(){return e.apply(null,n)},t)},g.defer=g.partial(g.delay,g,1),g.throttle=function(e,t,n){var r,o,a,i=null,s=0;n||(n={});var u=function(){s=n.leading===!1?0:g.now(),i=null,a=e.apply(r,o),i||(r=o=null)};return function(){var c=g.now();s||n.leading!==!1||(s=c);var l=t-(c-s);return r=this,o=arguments,l<=0||l>t?(i&&(clearTimeout(i),i=null),s=c,a=e.apply(r,o),i||(r=o=null)):i||n.trailing===!1||(i=setTimeout(u,l)),a}},g.debounce=function(e,t,n){var r,o,a,i,s,u=function(){var c=g.now()-i;c<t&&c>=0?r=setTimeout(u,t-c):(r=null,n||(s=e.apply(a,o),r||(a=o=null)))};return function(){a=this,o=arguments,i=g.now();var c=n&&!r;return r||(r=setTimeout(u,t)),c&&(s=e.apply(a,o),a=o=null),s}},g.wrap=function(e,t){return g.partial(t,e)},g.negate=function(e){return function(){return!e.apply(this,arguments)}},g.compose=function(){var e=arguments,t=e.length-1;return function(){for(var n=t,r=e[t].apply(this,arguments);n--;)r=e[n].call(this,r);return r}},g.after=function(e,t){return function(){if(--e<1)return t.apply(this,arguments)}},g.before=function(e,t){var n;return function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=null),n}},g.once=g.partial(g.before,2);var P=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];g.keys=function(e){if(!g.isObject(e))return[];if(h)return h(e);var t=[];for(var n in e)g.has(e,n)&&t.push(n);return P&&r(e,t),t},g.allKeys=function(e){if(!g.isObject(e))return[];var t=[];for(var n in e)t.push(n);return P&&r(e,t),t},g.values=function(e){for(var t=g.keys(e),n=t.length,r=Array(n),o=0;o<n;o++)r[o]=e[t[o]];return r},g.mapObject=function(e,t,n){t=C(t,n);for(var r,o=g.keys(e),a=o.length,i={},s=0;s<a;s++)r=o[s],i[r]=t(e[r],r,e);return i},g.pairs=function(e){for(var t=g.keys(e),n=t.length,r=Array(n),o=0;o<n;o++)r[o]=[t[o],e[t[o]]];return r},g.invert=function(e){for(var t={},n=g.keys(e),r=0,o=n.length;r<o;r++)t[e[n[r]]]=n[r];return t},g.functions=g.methods=function(e){var t=[];for(var n in e)g.isFunction(e[n])&&t.push(n);return t.sort()},g.extend=R(g.allKeys),g.extendOwn=g.assign=R(g.keys),g.findKey=function(e,t,n){t=C(t,n);for(var r,o=g.keys(e),a=0,i=o.length;a<i;a++)if(r=o[a],t(e[r],r,e))return r},g.pick=function(e,t,n){var r,o,a={},i=e;if(null==i)return a;g.isFunction(t)?(o=g.allKeys(i),r=E(t,n)):(o=D(arguments,!1,!1,1),r=function(e,t,n){return t in n},i=Object(i));for(var s=0,u=o.length;s<u;s++){var c=o[s],l=i[c];r(l,c,i)&&(a[c]=l)}return a},g.omit=function(e,t,n){if(g.isFunction(t))t=g.negate(t);else{var r=g.map(D(arguments,!1,!1,1),String);t=function(e,t){return!g.contains(r,t)}}return g.pick(e,t,n)},g.defaults=R(g.allKeys,!0),g.create=function(e,t){var n=b(e);return t&&g.extendOwn(n,t),n},g.clone=function(e){return g.isObject(e)?g.isArray(e)?e.slice():g.extend({},e):e},g.tap=function(e,t){return t(e),e},g.isMatch=function(e,t){var n=g.keys(t),r=n.length;if(null==e)return!r;for(var o=Object(e),a=0;a<r;a++){var i=n[a];if(t[i]!==o[i]||!(i in o))return!1}return!0};var N=function(e,t,n,r){if(e===t)return 0!==e||1/e===1/t;if(null==e||null==t)return e===t;e instanceof g&&(e=e._wrapped),t instanceof g&&(t=t._wrapped);var o=p.call(e);if(o!==p.call(t))return!1;switch(o){case"[object RegExp]":case"[object String]":return""+e==""+t;case"[object Number]":return+e!==+e?+t!==+t:0===+e?1/+e===1/t:+e===+t;case"[object Date]":case"[object Boolean]":return+e===+t}var a="[object Array]"===o;if(!a){if("object"!=typeof e||"object"!=typeof t)return!1;var i=e.constructor,s=t.constructor;if(i!==s&&!(g.isFunction(i)&&i instanceof i&&g.isFunction(s)&&s instanceof s)&&"constructor"in e&&"constructor"in t)return!1}n=n||[],r=r||[];for(var u=n.length;u--;)if(n[u]===e)return r[u]===t;if(n.push(e),r.push(t),a){if(u=e.length,u!==t.length)return!1;for(;u--;)if(!N(e[u],t[u],n,r))return!1}else{var c,l=g.keys(e);if(u=l.length,g.keys(t).length!==u)return!1;for(;u--;)if(c=l[u],!g.has(t,c)||!N(e[c],t[c],n,r))return!1}return n.pop(),r.pop(),!0};g.isEqual=function(e,t){return N(e,t)},g.isEmpty=function(e){return null==e||(x(e)&&(g.isArray(e)||g.isString(e)||g.isArguments(e))?0===e.length:0===g.keys(e).length)},g.isElement=function(e){return!(!e||1!==e.nodeType)},g.isArray=f||function(e){return"[object Array]"===p.call(e)},g.isObject=function(e){var t=typeof e;return"function"===t||"object"===t&&!!e},g.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(e){g["is"+e]=function(t){return p.call(t)==="[object "+e+"]"}}),g.isArguments(arguments)||(g.isArguments=function(e){return g.has(e,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(g.isFunction=function(e){return"function"==typeof e||!1}),g.isFinite=function(e){return isFinite(e)&&!isNaN(parseFloat(e))},g.isNaN=function(e){return g.isNumber(e)&&e!==+e},g.isBoolean=function(e){return e===!0||e===!1||"[object Boolean]"===p.call(e)},g.isNull=function(e){return null===e},g.isUndefined=function(e){return void 0===e},g.has=function(e,t){return null!=e&&d.call(e,t)},g.noConflict=function(){return o._=a,this},g.identity=function(e){return e},g.constant=function(e){return function(){return e}},g.noop=function(){},g.property=_,g.propertyOf=function(e){return null==e?function(){}:function(t){return e[t]}},g.matcher=g.matches=function(e){return e=g.extendOwn({},e),function(t){return g.isMatch(t,e)}},g.times=function(e,t,n){var r=Array(Math.max(0,e));t=E(t,n,1);for(var o=0;o<e;o++)r[o]=t(o);return r},g.random=function(e,t){return null==t&&(t=e,e=0),e+Math.floor(Math.random()*(t-e+1))},g.now=Date.now||function(){return(new Date).getTime()};var S={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},k=g.invert(S),A=function(e){var t=function(t){return e[t]},n="(?:"+g.keys(e).join("|")+")",r=RegExp(n),o=RegExp(n,"g");return function(e){return e=null==e?"":""+e,r.test(e)?e.replace(o,t):e}};g.escape=A(S),g.unescape=A(k),g.result=function(e,t,n){var r=null==e?void 0:e[t];return void 0===r&&(r=n),g.isFunction(r)?r.call(e):r};var U=0;g.uniqueId=function(e){var t=++U+"";return e?e+t:t},g.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var L=/(.)^/,j={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},F=/\\|'|\r|\n|\u2028|\u2029/g,B=function(e){return"\\"+j[e]};g.template=function(e,t,n){!t&&n&&(t=n),t=g.defaults({},t,g.templateSettings);var r=RegExp([(t.escape||L).source,(t.interpolate||L).source,(t.evaluate||L).source].join("|")+"|$","g"),o=0,a="__p+='";e.replace(r,function(t,n,r,i,s){return a+=e.slice(o,s).replace(F,B),o=s+t.length,n?a+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'":r?a+="'+\n((__t=("+r+"))==null?'':__t)+\n'":i&&(a+="';\n"+i+"\n__p+='"),t}),a+="';\n",t.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{var i=new Function(t.variable||"obj","_",a)}catch(e){throw e.source=a,e}var s=function(e){return i.call(this,e,g)},u=t.variable||"obj";return s.source="function("+u+"){\n"+a+"}",s},g.chain=function(e){var t=g(e);return t._chain=!0,t};var V=function(e,t){return e._chain?g(t).chain():t};g.mixin=function(e){g.each(g.functions(e),function(t){var n=g[t]=e[t];g.prototype[t]=function(){var e=[this._wrapped];return c.apply(e,arguments),V(this,n.apply(g,e))}})},g.mixin(g),g.each(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=i[e];g.prototype[e]=function(){var n=this._wrapped;return t.apply(n,arguments),"shift"!==e&&"splice"!==e||0!==n.length||delete n[0],V(this,n)}}),g.each(["concat","join","slice"],function(e){var t=i[e];g.prototype[e]=function(){return V(this,t.apply(this._wrapped,arguments))}}),g.prototype.value=function(){return this._wrapped},g.prototype.valueOf=g.prototype.toJSON=g.prototype.value,g.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return g})}).call(this),jQuery(document).ready(function(){if(jQuery("#payment_history").length){console.debug("Going to render payment history..."),_.templateSettings={interpolate:/\{\{\=(.+?)\}\}/g,evaluate:/\{\{(.+?)\}\}/g};var e="#payment_history";render_loading_invoice(e);var t=jQuery.getJSON("/settings/payments.json");t.done(function(t,n){console.debug("Got invoices: "+n),render_payment_history(e,t)}),t.fail(function(t,n){console.debug("Failed invoices: "+n),render_fail_invoice(e,t)})}});