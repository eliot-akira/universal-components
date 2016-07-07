!function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var t={};return n.m=e,n.c=t,n.p="",n(0)}([function(e,n,t){(function(e){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var r=t(3),o=t(5),i=n(o),a=document.getElementById("preact");(0,r.render)(e(i["default"],{lib:"Preact"}),a)}).call(n,t(1))},function(e,n,t){"use strict";var r=t(3).h;e.exports=r},function(e,n,t){(function(e,r){function o(e,n){this._id=e,this._clearFn=n}var i=t(6).nextTick,a=Function.prototype.apply,c=Array.prototype.slice,u={},l=0;n.setTimeout=function(){return new o(a.call(setTimeout,window,arguments),clearTimeout)},n.setInterval=function(){return new o(a.call(setInterval,window,arguments),clearInterval)},n.clearTimeout=n.clearInterval=function(e){e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(window,this._id)},n.enroll=function(e,n){clearTimeout(e._idleTimeoutId),e._idleTimeout=n},n.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},n._unrefActive=n.active=function(e){clearTimeout(e._idleTimeoutId);var n=e._idleTimeout;n>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},n))},n.setImmediate="function"==typeof e?e:function(e){var t=l++,r=!(arguments.length<2)&&c.call(arguments,1);return u[t]=!0,i(function(){u[t]&&(r?e.apply(null,r):e.call(null),n.clearImmediate(t))}),t},n.clearImmediate="function"==typeof r?r:function(e){delete u[e]}}).call(n,t(2).setImmediate,t(2).clearImmediate)},function(e,n,t){(function(n){!function(n,t){e.exports=t()}(this,function(){"use strict";function e(e,n,t){this.nodeName=e,this.attributes=n,this.children=t}function n(e,n){for(var t in n)ce.call(n,t)&&(e[t]=n[t]);return e}function t(e){var n={};for(var t in e)n[t]=e[t];return n}function r(e,n){return n=n||{},function(t){return ce.call(n,t)?n[t]:n[t]=e(t)}}function o(e,n){for(var t=n.split("."),r=0;r<t.length&&e;r++)e=e[t[r]];return e}function i(e){for(var n=[],t=e.length;t--;)n[t]=e[t];return n}function a(e){var n="";for(var t in e){var r=e[t];ue(r)||(n&&(n+=" "),n+=se(t),n+=": ",n+=r,"number"!=typeof r||oe[t]||(n+="px"),n+=";")}return n}function c(e){var n="";for(var t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function u(e,n,t){var r=e[n];r&&!ae(r)&&(e[n]=t(r))}function l(e,n,t){return s(me,e,n,t)}function s(e,n,t,r,o){if(e[n])return e[n](t,r,o)}function f(e,n){do s(e,n);while(e=e._component)}function d(n,t){var r=arguments.length,o=t&&t.children,i=void 0,a=void 0,c=void 0;if(o&&(delete t.children,3>r))return d(n,t,o);for(var u=2;r>u;u++){var s=arguments[u];if(!le(s)){i||(i=[]),s.join?a=s:(a=he,a[0]=s);for(var f=0;f<a.length;f++){var p=a[f],v=!(le(p)||p instanceof e);v&&(p=String(p)),v&&c?i[i.length-1]+=p:le(p)||i.push(p),c=v}}}var m=new e(n,t||void 0,i||void 0);return l("vnode",m),m}function p(e,n,t){var r=n.split("."),i=r[0],a=r.length;return function(n){var c,u=this,l=e.state,s=l,f=void 0,d=void 0;if(ae(t)?(f=o(n,t),ue(f)&&(u=u._component)&&(f=o(u,t))):f=(u.nodeName+u.type).match(/^input(check|rad)/i)?u.checked:u.value,ie(f)&&(f=f.call(u)),a>1){for(d=0;a-1>d;d++)s=s[r[d]]||(s[r[d]]={});s[r[d]]=f,f=l[i]}e.setState((c={},c[i]=f,c))}}function v(e){1===_e.push(e)&&(me.debounceRendering||ve)(m)}function m(){if(_e.length){var e=_e,n=void 0;for(_e=ye,ye=e;n=e.pop();)n._dirty&&z(n)}}function h(e){var n=e.nodeName;return ie(n)&&!(n.prototype&&n.prototype.render)}function _(e,n){return e.nodeName(P(e),n||X)||Y}function y(e){return e[te]||(e[te]={})}function b(e){return e.nodeType}function g(e,n){for(var t=n.length,r=t>2,o=r?document.createDocumentFragment():e,i=0;t>i;i++)o.appendChild(n[i]);r&&e.appendChild(o)}function x(e){var n=e.parentNode;n&&n.removeChild(e)}function C(e,n,t,r){if("type"!==n&&"style"!==n&&n in e)return e[n];var o=e[te];return r!==!1&&o&&ce.call(o,n)?o[n]:"class"===n?e.className:"style"===n?e.style.cssText:t}function w(e,n,t){"class"===n?e.className=t||"":"style"===n?e.style.cssText=t||"":"dangerouslySetInnerHTML"===n?t&&t.__html&&(e.innerHTML=t.__html):"key"===n||n in e&&"type"!==n?(e[n]=t,le(t)&&e.removeAttribute(n)):N(e,n,t),y(e)[n]=t}function N(e,n,t){if("on"!==n.substring(0,2)){var r=typeof t;le(t)?e.removeAttribute(n):"function"!==r&&"object"!==r&&e.setAttribute(n,t)}else{var o=be(n),i=e._listeners||(e._listeners={}),a=i[o]?t?null:"remove":"add";a&&e[a+"EventListener"](o,k),i[o]=t}}function k(e){var n=this._listeners[be(e.type)];if(n)return n.call(this,l("event",e)||e)}function T(e){return e[te]||S(e)||X}function S(e){var n=e.attributes;return n&&n.getNamedItem?I(n):n}function I(e){for(var n=void 0,t=e.length;t--;){var r=e[t];n||(n={}),n[r.name]=r.value}return n}function M(e,n){if(h(n))return!0;var t=n.nodeName;return ie(t)?e._componentConstructor===t:3===b(e)?ae(n):fe(e.nodeName)===t}function P(e){var n=t(e.attributes),r=e.children;r&&(n.children=r);var o=e.nodeName.defaultProps;if(o)for(var i in o)!ce.call(o,i)||i in n||(n[i]=o[i]);return n}function O(e){L(e);var n=xe(e.nodeName),t=ge[n];t?t.push(e):ge[n]=[e]}function A(e){var n=xe(e),t=ge[n],r=t&&t.pop()||document.createElement(e);return y(r),r}function L(e){x(e),3!==b(e)&&(e[te]||(e[te]=S(e)),e._component=e._componentConstructor=null)}function R(e,n,t){for(var r=n.attributes;h(n);)n=_(n,t);if(ie(n.nodeName))return G(e,n,t);if(ae(n)){if(e){var o=b(e);if(3===o)return e[ne]=n,e;1===o&&O(e)}return document.createTextNode(n)}var a=e,c=n.nodeName||re;return e?fe(e.nodeName)!==c&&(a=A(c),g(a,i(e.childNodes)),j(e)):a=A(c),U(a,n,t),E(a,n),r&&r.ref&&(a[te].ref=r.ref)(a),a}function U(e,n,t){var r=void 0,o=void 0,i=0,a=e.childNodes.length,c=0;if(a){r=[];for(var u=0;a>u;u++){var l=e.childNodes[u],s=l._component?l._component.__key:C(l,"key");ue(s)?r[c++]=l:(o||(o={}),o[s]=l,i++)}}var d=n.children,p=d&&d.length,v=0;if(p)for(var u=0;p>u;u++){var m=d[u],l=void 0;if(i){var h=m.attributes,s=h&&h.key;!ue(s)&&ce.call(o,s)&&(l=o[s],o[s]=null,i--)}if(!l&&c>v)for(var _=v;c>_;_++){var y=r[_];if(y&&M(y,m)){l=y,r[_]=null,_===c-1&&c--,_===v&&v++;break}}if(l=R(l,m,t),e.childNodes[u]!==l){var y=l.parentNode!==e&&l._component,b=e.childNodes[u+1];y&&f(y,"componentWillMount"),b?e.insertBefore(l,b):e.appendChild(l),y&&f(y,"componentDidMount")}}if(i)for(var u in o)ce.call(o,u)&&o[u]&&(r[v=c++]=o[u]);c>v&&W(r)}function W(e,n){for(var t=e.length;t--;){var r=e[t];r&&j(r,n)}}function j(e,n){var t=e[te];t&&s(t,"ref",null);var r=e._component;if(r)Z(r,!n);else{if(!n){if(1!==b(e))return void x(e);O(e)}var o=e.childNodes;o&&o.length&&W(o,n)}}function E(e,n){var t=T(e)||X,r=n.attributes||X,o=void 0,i=void 0;for(o in t)ue(r[o])&&w(e,o,null);if(r!==X)for(o in r)ce.call(r,o)&&(i=r[o],ue(i)||i==C(e,o)||w(e,o,i))}function F(e){var n=e.constructor.name,t=Ce[n];t?t.push(e):Ce[n]=[e]}function B(e,n,t){for(var r=Ce[e.name],o=r&&r.length,i=void 0,a=0;o>a;a++)if(i=r[a],i.constructor===e){r.splice(a,1);var c=new e(n,t);return c.nextBase=i.base,c}return new e(n,t)}function D(e){e._dirty||(e._dirty=!0,v(e))}function H(e,n,t,r){var o=e._disableRendering;e.__ref=n.ref,e.__key=n.key,delete n.ref,delete n.key,e._disableRendering=!0,r&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.base&&s(e,"componentWillReceiveProps",n,e.context),e.prevProps||(e.prevProps=e.props),e.props=n,e._disableRendering=o,t&&t.render===!1||(t&&t.renderSync||me.syncComponentUpdates!==!1?z(e):D(e)),s(e,"__ref",e)}function z(e,n){if(!e._disableRendering){var t=void 0,r=void 0,o=e.props,i=e.state,a=e.context,c=e.prevProps||o,u=e.prevState||i,l=e.prevContext||a,d=e.base,p=d||e.nextBase;if(d&&(e.props=c,e.state=u,e.context=l,s(e,"shouldComponentUpdate",o,i,a)===!1?t=!0:s(e,"componentWillUpdate",o,i,a),e.props=o,e.state=i,e.context=a),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!t){r=s(e,"render",o,i,a);var v=r&&r.nodeName,m=e.getChildContext?e.getChildContext():a,h=void 0,_=void 0;if(ie(v)&&v.prototype.render){var y=e._component;y&&y.constructor!==v&&(h=y,y=null);var b=P(r);y?H(y,b,K,m):(y=B(v,b,m),y._parentComponent=e,e._component=y,d&&f(y,"componentWillMount"),H(y,b,J,m),z(y,Q),d&&f(y,"componentDidMount")),_=y.base}else{var g=p;h=e._component,h&&(g=e._component=null),(p||n&&n.build)&&(_=R(g,r||Y,m))}if(p&&_!==p){var x=p.parentNode;x&&_!==x&&x.replaceChild(_,p)}if(h&&Z(h,!0),e.base=_,_){for(var C=e,w=e;w=w._parentComponent;)C=w;_._component=C,_._componentConstructor=C.constructor}d&&s(e,"componentDidUpdate",c,u,l)}var N=e._renderCallbacks,k=void 0;if(N)for(;k=N.pop();)k.call(e);return r}}function G(e,n,t){for(var r=e&&e._component,o=e,i=r&&e._componentConstructor===n.nodeName;r&&!i&&(r=r._parentComponent);)i=r.constructor===n.nodeName;return i?(H(r,P(n),K,t),e=r.base):(r&&(Z(r,!0),e=o=null),e=V(n,e,t),o&&e!==o&&(o._component=null,j(o))),e}function V(e,n,t){var r=P(e),o=B(e.nodeName,r,t);return n&&!o.base&&(o.base=n),H(o,r,J,t),z(o,Q),o.base}function Z(e,n){s(e,"__ref",null),s(e,"componentWillUnmount");var t=e._component;t&&(Z(t,n),n=!1);var r=e.base;r&&(n!==!1&&x(r),W(r.childNodes,!0)),n&&(e._parentComponent=null,F(e)),s(e,"componentDidUnmount")}function $(e,n){this._dirty=this._disableRendering=!1,this.prevState=this.prevProps=this.prevContext=this.base=this.nextBase=this._parentComponent=this._component=this.__ref=this.__key=this._linkedStates=this._renderCallbacks=null,this.context=n||{},this.props=e,this.state=s(this,"getInitialState")||{}}function q(e,n,t){var r=t&&t._component&&t._componentConstructor===e.nodeName,o=R(t,e),i=!r&&o._component;return i&&f(i,"componentWillMount"),o.parentNode!==n&&n.appendChild(o),i&&f(i,"componentDidMount"),o}var J={render:!1},K={renderSync:!0},Q={build:!0},X={},Y="",ee="undefined"!=typeof document,ne=!ee||"textContent"in document?"textContent":"nodeValue",te="undefined"!=typeof Symbol?Symbol["for"]("preactattr"):"__preactattr_",re="undefined",oe={boxFlex:1,boxFlexGroup:1,columnCount:1,fillOpacity:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,fontWeight:1,lineClamp:1,lineHeight:1,opacity:1,order:1,orphans:1,strokeOpacity:1,widows:1,zIndex:1,zoom:1},ie=function(e){return"function"==typeof e},ae=function(e){return"string"==typeof e},ce={}.hasOwnProperty,ue=function(e){return null==e},le=function(e){return e===!1||null==e},se=r(function(e){return e.replace(/([A-Z])/g,"-$1").toLowerCase()}),fe=r(function(e){return e.toLowerCase()}),de=void 0;try{de=new MessageChannel}catch(pe){}var ve=de?function(e){de.port1.onmessage=e,de.port2.postMessage("")}:setTimeout,me={vnode:function(e){var n=e.attributes;if(n&&!ie(e.nodeName)){var t=n.className;t&&(n["class"]=t,delete n.className),n["class"]&&u(n,"class",c),n.style&&u(n,"style",a)}}},he=[],_e=[],ye=[],be=r(function(e){return e.replace(/^on/i,"").toLowerCase()}),ge={},xe=r(function(e){return e.toUpperCase()}),Ce={};n($.prototype,{linkState:function(e,n){var t=this._linkedStates||(this._linkedStates={}),r=e+"|"+(n||"");return t[r]||(t[r]=p(this,e,n))},setState:function(e,r){var o=this.state;this.prevState||(this.prevState=t(o)),n(o,ie(e)?e(o,this.props):e),r&&(this._renderCallbacks=this._renderCallbacks||[]).push(r),D(this)},forceUpdate:function(){z(this)},render:function(){return null}});var we={h:d,Component:$,render:q,rerender:m,options:me,hooks:me};return we})}).call(n,t(2).setImmediate)},function(e,n,t){(function(e){"use strict";function t(e,n){var t={};for(var r in e)n.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}Object.defineProperty(n,"__esModule",{value:!0});var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o={fontFamily:"inherit",fontSize:14,display:"inline-block",padding:8,margin:0,color:"white",backgroundColor:"black",border:0,borderRadius:3,WebkitAppearance:"none",MozAppearance:"none",cursor:"pointer"},i=function(n){var i=t(n,[]);return e("button",r({},i,{style:o}))};n["default"]=i}).call(n,t(1))},function(e,n,t){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var o=t(4),i=r(o),a=function(e){return function(n){console.log("Hello",e),alert("Hello "+e)}},c=function(n){var t=n.lib,r={root:{padding:16,backgroundColor:"#f6f6f6"},heading:{marginTop:0}};return e("div",{className:t+"-root",style:r.root},e("h1",{style:r.heading},"Hello ",t),e(i["default"],{onClick:a(t)},"Click me"))};n["default"]=c}).call(n,t(1))},function(e,n){function t(){f&&l&&(f=!1,l.length?s=l.concat(s):d=-1,s.length&&r())}function r(){if(!f){var e=a(t);f=!0;for(var n=s.length;n;){for(l=s,s=[];++d<n;)l&&l[d].run();d=-1,n=s.length}l=null,f=!1,c(e)}}function o(e,n){this.fun=e,this.array=n}function i(){}var a,c,u=e.exports={};!function(){try{a=setTimeout}catch(e){a=function(){throw new Error("setTimeout is not defined")}}try{c=clearTimeout}catch(e){c=function(){throw new Error("clearTimeout is not defined")}}}();var l,s=[],f=!1,d=-1;u.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];s.push(new o(e,n)),1!==s.length||f||a(r,0)},o.prototype.run=function(){this.fun.apply(null,this.array)},u.title="browser",u.browser=!0,u.env={},u.argv=[],u.version="",u.versions={},u.on=i,u.addListener=i,u.once=i,u.off=i,u.removeListener=i,u.removeAllListeners=i,u.emit=i,u.binding=function(e){throw new Error("process.binding is not supported")},u.cwd=function(){return"/"},u.chdir=function(e){throw new Error("process.chdir is not supported")},u.umask=function(){return 0}}]);