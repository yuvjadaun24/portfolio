var yE=Object.defineProperty;var SE=(s,e,t)=>e in s?yE(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var ut=(s,e,t)=>SE(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();var up={exports:{}},hu={},cp={exports:{}},Ut={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nv;function ME(){if(Nv)return Ut;Nv=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;function g(O){return O===null||typeof O!="object"?null:(O=m&&O[m]||O["@@iterator"],typeof O=="function"?O:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function x(O,ee,Ee){this.props=O,this.context=ee,this.refs=M,this.updater=Ee||v}x.prototype.isReactComponent={},x.prototype.setState=function(O,ee){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ee,"setState")},x.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function y(){}y.prototype=x.prototype;function P(O,ee,Ee){this.props=O,this.context=ee,this.refs=M,this.updater=Ee||v}var D=P.prototype=new y;D.constructor=P,E(D,x.prototype),D.isPureReactComponent=!0;var A=Array.isArray,R=Object.prototype.hasOwnProperty,L={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function k(O,ee,Ee){var be,Oe={},se=null,ce=null;if(ee!=null)for(be in ee.ref!==void 0&&(ce=ee.ref),ee.key!==void 0&&(se=""+ee.key),ee)R.call(ee,be)&&!N.hasOwnProperty(be)&&(Oe[be]=ee[be]);var _e=arguments.length-2;if(_e===1)Oe.children=Ee;else if(1<_e){for(var Ue=Array(_e),Fe=0;Fe<_e;Fe++)Ue[Fe]=arguments[Fe+2];Oe.children=Ue}if(O&&O.defaultProps)for(be in _e=O.defaultProps,_e)Oe[be]===void 0&&(Oe[be]=_e[be]);return{$$typeof:s,type:O,key:se,ref:ce,props:Oe,_owner:L.current}}function T(O,ee){return{$$typeof:s,type:O.type,key:ee,ref:O.ref,props:O.props,_owner:O._owner}}function b(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function V(O){var ee={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Ee){return ee[Ee]})}var z=/\/+/g;function G(O,ee){return typeof O=="object"&&O!==null&&O.key!=null?V(""+O.key):ee.toString(36)}function Q(O,ee,Ee,be,Oe){var se=typeof O;(se==="undefined"||se==="boolean")&&(O=null);var ce=!1;if(O===null)ce=!0;else switch(se){case"string":case"number":ce=!0;break;case"object":switch(O.$$typeof){case s:case e:ce=!0}}if(ce)return ce=O,Oe=Oe(ce),O=be===""?"."+G(ce,0):be,A(Oe)?(Ee="",O!=null&&(Ee=O.replace(z,"$&/")+"/"),Q(Oe,ee,Ee,"",function(Fe){return Fe})):Oe!=null&&(b(Oe)&&(Oe=T(Oe,Ee+(!Oe.key||ce&&ce.key===Oe.key?"":(""+Oe.key).replace(z,"$&/")+"/")+O)),ee.push(Oe)),1;if(ce=0,be=be===""?".":be+":",A(O))for(var _e=0;_e<O.length;_e++){se=O[_e];var Ue=be+G(se,_e);ce+=Q(se,ee,Ee,Ue,Oe)}else if(Ue=g(O),typeof Ue=="function")for(O=Ue.call(O),_e=0;!(se=O.next()).done;)se=se.value,Ue=be+G(se,_e++),ce+=Q(se,ee,Ee,Ue,Oe);else if(se==="object")throw ee=String(O),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.");return ce}function ne(O,ee,Ee){if(O==null)return O;var be=[],Oe=0;return Q(O,be,"","",function(se){return ee.call(Ee,se,Oe++)}),be}function Z(O){if(O._status===-1){var ee=O._result;ee=ee(),ee.then(function(Ee){(O._status===0||O._status===-1)&&(O._status=1,O._result=Ee)},function(Ee){(O._status===0||O._status===-1)&&(O._status=2,O._result=Ee)}),O._status===-1&&(O._status=0,O._result=ee)}if(O._status===1)return O._result.default;throw O._result}var Y={current:null},X={transition:null},re={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:X,ReactCurrentOwner:L};function U(){throw Error("act(...) is not supported in production builds of React.")}return Ut.Children={map:ne,forEach:function(O,ee,Ee){ne(O,function(){ee.apply(this,arguments)},Ee)},count:function(O){var ee=0;return ne(O,function(){ee++}),ee},toArray:function(O){return ne(O,function(ee){return ee})||[]},only:function(O){if(!b(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Ut.Component=x,Ut.Fragment=t,Ut.Profiler=r,Ut.PureComponent=P,Ut.StrictMode=n,Ut.Suspense=f,Ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=re,Ut.act=U,Ut.cloneElement=function(O,ee,Ee){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var be=E({},O.props),Oe=O.key,se=O.ref,ce=O._owner;if(ee!=null){if(ee.ref!==void 0&&(se=ee.ref,ce=L.current),ee.key!==void 0&&(Oe=""+ee.key),O.type&&O.type.defaultProps)var _e=O.type.defaultProps;for(Ue in ee)R.call(ee,Ue)&&!N.hasOwnProperty(Ue)&&(be[Ue]=ee[Ue]===void 0&&_e!==void 0?_e[Ue]:ee[Ue])}var Ue=arguments.length-2;if(Ue===1)be.children=Ee;else if(1<Ue){_e=Array(Ue);for(var Fe=0;Fe<Ue;Fe++)_e[Fe]=arguments[Fe+2];be.children=_e}return{$$typeof:s,type:O.type,key:Oe,ref:se,props:be,_owner:ce}},Ut.createContext=function(O){return O={$$typeof:l,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:a,_context:O},O.Consumer=O},Ut.createElement=k,Ut.createFactory=function(O){var ee=k.bind(null,O);return ee.type=O,ee},Ut.createRef=function(){return{current:null}},Ut.forwardRef=function(O){return{$$typeof:c,render:O}},Ut.isValidElement=b,Ut.lazy=function(O){return{$$typeof:p,_payload:{_status:-1,_result:O},_init:Z}},Ut.memo=function(O,ee){return{$$typeof:h,type:O,compare:ee===void 0?null:ee}},Ut.startTransition=function(O){var ee=X.transition;X.transition={};try{O()}finally{X.transition=ee}},Ut.unstable_act=U,Ut.useCallback=function(O,ee){return Y.current.useCallback(O,ee)},Ut.useContext=function(O){return Y.current.useContext(O)},Ut.useDebugValue=function(){},Ut.useDeferredValue=function(O){return Y.current.useDeferredValue(O)},Ut.useEffect=function(O,ee){return Y.current.useEffect(O,ee)},Ut.useId=function(){return Y.current.useId()},Ut.useImperativeHandle=function(O,ee,Ee){return Y.current.useImperativeHandle(O,ee,Ee)},Ut.useInsertionEffect=function(O,ee){return Y.current.useInsertionEffect(O,ee)},Ut.useLayoutEffect=function(O,ee){return Y.current.useLayoutEffect(O,ee)},Ut.useMemo=function(O,ee){return Y.current.useMemo(O,ee)},Ut.useReducer=function(O,ee,Ee){return Y.current.useReducer(O,ee,Ee)},Ut.useRef=function(O){return Y.current.useRef(O)},Ut.useState=function(O){return Y.current.useState(O)},Ut.useSyncExternalStore=function(O,ee,Ee){return Y.current.useSyncExternalStore(O,ee,Ee)},Ut.useTransition=function(){return Y.current.useTransition()},Ut.version="18.3.1",Ut}var Uv;function Pg(){return Uv||(Uv=1,cp.exports=ME()),cp.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fv;function EE(){if(Fv)return hu;Fv=1;var s=Pg(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,r=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(c,f,h){var p,m={},g=null,v=null;h!==void 0&&(g=""+h),f.key!==void 0&&(g=""+f.key),f.ref!==void 0&&(v=f.ref);for(p in f)n.call(f,p)&&!a.hasOwnProperty(p)&&(m[p]=f[p]);if(c&&c.defaultProps)for(p in f=c.defaultProps,f)m[p]===void 0&&(m[p]=f[p]);return{$$typeof:e,type:c,key:g,ref:v,props:m,_owner:r.current}}return hu.Fragment=t,hu.jsx=l,hu.jsxs=l,hu}var Ov;function TE(){return Ov||(Ov=1,up.exports=EE()),up.exports}var J=TE(),mf={},fp={exports:{}},ki={},dp={exports:{}},hp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kv;function wE(){return kv||(kv=1,(function(s){function e(X,re){var U=X.length;X.push(re);e:for(;0<U;){var O=U-1>>>1,ee=X[O];if(0<r(ee,re))X[O]=re,X[U]=ee,U=O;else break e}}function t(X){return X.length===0?null:X[0]}function n(X){if(X.length===0)return null;var re=X[0],U=X.pop();if(U!==re){X[0]=U;e:for(var O=0,ee=X.length,Ee=ee>>>1;O<Ee;){var be=2*(O+1)-1,Oe=X[be],se=be+1,ce=X[se];if(0>r(Oe,U))se<ee&&0>r(ce,Oe)?(X[O]=ce,X[se]=U,O=se):(X[O]=Oe,X[be]=U,O=be);else if(se<ee&&0>r(ce,U))X[O]=ce,X[se]=U,O=se;else break e}}return re}function r(X,re){var U=X.sortIndex-re.sortIndex;return U!==0?U:X.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;s.unstable_now=function(){return a.now()}}else{var l=Date,c=l.now();s.unstable_now=function(){return l.now()-c}}var f=[],h=[],p=1,m=null,g=3,v=!1,E=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(X){for(var re=t(h);re!==null;){if(re.callback===null)n(h);else if(re.startTime<=X)n(h),re.sortIndex=re.expirationTime,e(f,re);else break;re=t(h)}}function A(X){if(M=!1,D(X),!E)if(t(f)!==null)E=!0,Z(R);else{var re=t(h);re!==null&&Y(A,re.startTime-X)}}function R(X,re){E=!1,M&&(M=!1,y(k),k=-1),v=!0;var U=g;try{for(D(re),m=t(f);m!==null&&(!(m.expirationTime>re)||X&&!V());){var O=m.callback;if(typeof O=="function"){m.callback=null,g=m.priorityLevel;var ee=O(m.expirationTime<=re);re=s.unstable_now(),typeof ee=="function"?m.callback=ee:m===t(f)&&n(f),D(re)}else n(f);m=t(f)}if(m!==null)var Ee=!0;else{var be=t(h);be!==null&&Y(A,be.startTime-re),Ee=!1}return Ee}finally{m=null,g=U,v=!1}}var L=!1,N=null,k=-1,T=5,b=-1;function V(){return!(s.unstable_now()-b<T)}function z(){if(N!==null){var X=s.unstable_now();b=X;var re=!0;try{re=N(!0,X)}finally{re?G():(L=!1,N=null)}}else L=!1}var G;if(typeof P=="function")G=function(){P(z)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,ne=Q.port2;Q.port1.onmessage=z,G=function(){ne.postMessage(null)}}else G=function(){x(z,0)};function Z(X){N=X,L||(L=!0,G())}function Y(X,re){k=x(function(){X(s.unstable_now())},re)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(X){X.callback=null},s.unstable_continueExecution=function(){E||v||(E=!0,Z(R))},s.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<X?Math.floor(1e3/X):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return t(f)},s.unstable_next=function(X){switch(g){case 1:case 2:case 3:var re=3;break;default:re=g}var U=g;g=re;try{return X()}finally{g=U}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(X,re){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var U=g;g=X;try{return re()}finally{g=U}},s.unstable_scheduleCallback=function(X,re,U){var O=s.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?O+U:O):U=O,X){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=U+ee,X={id:p++,callback:re,priorityLevel:X,startTime:U,expirationTime:ee,sortIndex:-1},U>O?(X.sortIndex=U,e(h,X),t(f)===null&&X===t(h)&&(M?(y(k),k=-1):M=!0,Y(A,U-O))):(X.sortIndex=ee,e(f,X),E||v||(E=!0,Z(R))),X},s.unstable_shouldYield=V,s.unstable_wrapCallback=function(X){var re=g;return function(){var U=g;g=re;try{return X.apply(this,arguments)}finally{g=U}}}})(hp)),hp}var zv;function AE(){return zv||(zv=1,dp.exports=wE()),dp.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bv;function bE(){if(Bv)return ki;Bv=1;var s=Pg(),e=AE();function t(i){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+i,u=1;u<arguments.length;u++)o+="&args[]="+encodeURIComponent(arguments[u]);return"Minified React error #"+i+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=new Set,r={};function a(i,o){l(i,o),l(i+"Capture",o)}function l(i,o){for(r[i]=o,i=0;i<o.length;i++)n.add(o[i])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function g(i){return f.call(m,i)?!0:f.call(p,i)?!1:h.test(i)?m[i]=!0:(p[i]=!0,!1)}function v(i,o,u,d){if(u!==null&&u.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return d?!1:u!==null?!u.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function E(i,o,u,d){if(o===null||typeof o>"u"||v(i,o,u,d))return!0;if(d)return!1;if(u!==null)switch(u.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function M(i,o,u,d,_,S,C){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=d,this.attributeNamespace=_,this.mustUseProperty=u,this.propertyName=i,this.type=o,this.sanitizeURL=S,this.removeEmptyString=C}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){x[i]=new M(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var o=i[0];x[o]=new M(o,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){x[i]=new M(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){x[i]=new M(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){x[i]=new M(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){x[i]=new M(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){x[i]=new M(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){x[i]=new M(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){x[i]=new M(i,5,!1,i.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function P(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var o=i.replace(y,P);x[o]=new M(o,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var o=i.replace(y,P);x[o]=new M(o,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var o=i.replace(y,P);x[o]=new M(o,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){x[i]=new M(i,1,!1,i.toLowerCase(),null,!1,!1)}),x.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){x[i]=new M(i,1,!1,i.toLowerCase(),null,!0,!0)});function D(i,o,u,d){var _=x.hasOwnProperty(o)?x[o]:null;(_!==null?_.type!==0:d||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(E(o,u,_,d)&&(u=null),d||_===null?g(o)&&(u===null?i.removeAttribute(o):i.setAttribute(o,""+u)):_.mustUseProperty?i[_.propertyName]=u===null?_.type===3?!1:"":u:(o=_.attributeName,d=_.attributeNamespace,u===null?i.removeAttribute(o):(_=_.type,u=_===3||_===4&&u===!0?"":""+u,d?i.setAttributeNS(d,o,u):i.setAttribute(o,u))))}var A=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,R=Symbol.for("react.element"),L=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),V=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),Q=Symbol.for("react.suspense_list"),ne=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),X=Symbol.iterator;function re(i){return i===null||typeof i!="object"?null:(i=X&&i[X]||i["@@iterator"],typeof i=="function"?i:null)}var U=Object.assign,O;function ee(i){if(O===void 0)try{throw Error()}catch(u){var o=u.stack.trim().match(/\n( *(at )?)/);O=o&&o[1]||""}return`
`+O+i}var Ee=!1;function be(i,o){if(!i||Ee)return"";Ee=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(fe){var d=fe}Reflect.construct(i,[],o)}else{try{o.call()}catch(fe){d=fe}i.call(o.prototype)}else{try{throw Error()}catch(fe){d=fe}i()}}catch(fe){if(fe&&d&&typeof fe.stack=="string"){for(var _=fe.stack.split(`
`),S=d.stack.split(`
`),C=_.length-1,B=S.length-1;1<=C&&0<=B&&_[C]!==S[B];)B--;for(;1<=C&&0<=B;C--,B--)if(_[C]!==S[B]){if(C!==1||B!==1)do if(C--,B--,0>B||_[C]!==S[B]){var j=`
`+_[C].replace(" at new "," at ");return i.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",i.displayName)),j}while(1<=C&&0<=B);break}}}finally{Ee=!1,Error.prepareStackTrace=u}return(i=i?i.displayName||i.name:"")?ee(i):""}function Oe(i){switch(i.tag){case 5:return ee(i.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 2:case 15:return i=be(i.type,!1),i;case 11:return i=be(i.type.render,!1),i;case 1:return i=be(i.type,!0),i;default:return""}}function se(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case N:return"Fragment";case L:return"Portal";case T:return"Profiler";case k:return"StrictMode";case G:return"Suspense";case Q:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case V:return(i.displayName||"Context")+".Consumer";case b:return(i._context.displayName||"Context")+".Provider";case z:var o=i.render;return i=i.displayName,i||(i=o.displayName||o.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case ne:return o=i.displayName||null,o!==null?o:se(i.type)||"Memo";case Z:o=i._payload,i=i._init;try{return se(i(o))}catch{}}return null}function ce(i){var o=i.type;switch(i.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=o.render,i=i.displayName||i.name||"",o.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(o);case 8:return o===k?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function _e(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ue(i){var o=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function Fe(i){var o=Ue(i)?"checked":"value",u=Object.getOwnPropertyDescriptor(i.constructor.prototype,o),d=""+i[o];if(!i.hasOwnProperty(o)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var _=u.get,S=u.set;return Object.defineProperty(i,o,{configurable:!0,get:function(){return _.call(this)},set:function(C){d=""+C,S.call(this,C)}}),Object.defineProperty(i,o,{enumerable:u.enumerable}),{getValue:function(){return d},setValue:function(C){d=""+C},stopTracking:function(){i._valueTracker=null,delete i[o]}}}}function mt(i){i._valueTracker||(i._valueTracker=Fe(i))}function kt(i){if(!i)return!1;var o=i._valueTracker;if(!o)return!0;var u=o.getValue(),d="";return i&&(d=Ue(i)?i.checked?"true":"false":i.value),i=d,i!==u?(o.setValue(i),!0):!1}function Xe(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function dt(i,o){var u=o.checked;return U({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:u??i._wrapperState.initialChecked})}function Tt(i,o){var u=o.defaultValue==null?"":o.defaultValue,d=o.checked!=null?o.checked:o.defaultChecked;u=_e(o.value!=null?o.value:u),i._wrapperState={initialChecked:d,initialValue:u,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function ct(i,o){o=o.checked,o!=null&&D(i,"checked",o,!1)}function oe(i,o){ct(i,o);var u=_e(o.value),d=o.type;if(u!=null)d==="number"?(u===0&&i.value===""||i.value!=u)&&(i.value=""+u):i.value!==""+u&&(i.value=""+u);else if(d==="submit"||d==="reset"){i.removeAttribute("value");return}o.hasOwnProperty("value")?Gt(i,o.type,u):o.hasOwnProperty("defaultValue")&&Gt(i,o.type,_e(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(i.defaultChecked=!!o.defaultChecked)}function W(i,o,u){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var d=o.type;if(!(d!=="submit"&&d!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+i._wrapperState.initialValue,u||o===i.value||(i.value=o),i.defaultValue=o}u=i.name,u!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,u!==""&&(i.name=u)}function Gt(i,o,u){(o!=="number"||Xe(i.ownerDocument)!==i)&&(u==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+u&&(i.defaultValue=""+u))}var wt=Array.isArray;function ft(i,o,u,d){if(i=i.options,o){o={};for(var _=0;_<u.length;_++)o["$"+u[_]]=!0;for(u=0;u<i.length;u++)_=o.hasOwnProperty("$"+i[u].value),i[u].selected!==_&&(i[u].selected=_),_&&d&&(i[u].defaultSelected=!0)}else{for(u=""+_e(u),o=null,_=0;_<i.length;_++){if(i[_].value===u){i[_].selected=!0,d&&(i[_].defaultSelected=!0);return}o!==null||i[_].disabled||(o=i[_])}o!==null&&(o.selected=!0)}}function We(i,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return U({},o,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function F(i,o){var u=o.value;if(u==null){if(u=o.children,o=o.defaultValue,u!=null){if(o!=null)throw Error(t(92));if(wt(u)){if(1<u.length)throw Error(t(93));u=u[0]}o=u}o==null&&(o=""),u=o}i._wrapperState={initialValue:_e(u)}}function w(i,o){var u=_e(o.value),d=_e(o.defaultValue);u!=null&&(u=""+u,u!==i.value&&(i.value=u),o.defaultValue==null&&i.defaultValue!==u&&(i.defaultValue=u)),d!=null&&(i.defaultValue=""+d)}function q(i){var o=i.textContent;o===i._wrapperState.initialValue&&o!==""&&o!==null&&(i.value=o)}function pe(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function me(i,o){return i==null||i==="http://www.w3.org/1999/xhtml"?pe(o):i==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var de,He=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,u,d,_){MSApp.execUnsafeLocalFunction(function(){return i(o,u,d,_)})}:i})(function(i,o){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=o;else{for(de=de||document.createElement("div"),de.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=de.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;o.firstChild;)i.appendChild(o.firstChild)}});function we(i,o){if(o){var u=i.firstChild;if(u&&u===i.lastChild&&u.nodeType===3){u.nodeValue=o;return}}i.textContent=o}var je={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$e=["Webkit","ms","Moz","O"];Object.keys(je).forEach(function(i){$e.forEach(function(o){o=o+i.charAt(0).toUpperCase()+i.substring(1),je[o]=je[i]})});function Me(i,o,u){return o==null||typeof o=="boolean"||o===""?"":u||typeof o!="number"||o===0||je.hasOwnProperty(i)&&je[i]?(""+o).trim():o+"px"}function Ce(i,o){i=i.style;for(var u in o)if(o.hasOwnProperty(u)){var d=u.indexOf("--")===0,_=Me(u,o[u],d);u==="float"&&(u="cssFloat"),d?i.setProperty(u,_):i[u]=_}}var qe=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ke(i,o){if(o){if(qe[i]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function Ae(i,o){if(i.indexOf("-")===-1)return typeof o.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xt=null;function H(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Ne=null,xe=null,Ie=null;function ve(i){if(i=Ql(i)){if(typeof Ne!="function")throw Error(t(280));var o=i.stateNode;o&&(o=Rc(o),Ne(i.stateNode,i.type,o))}}function ge(i){xe?Ie?Ie.push(i):Ie=[i]:xe=i}function Pe(){if(xe){var i=xe,o=Ie;if(Ie=xe=null,ve(i),o)for(i=0;i<o.length;i++)ve(o[i])}}function lt(i,o){return i(o)}function Bt(){}var Be=!1;function it(i,o,u){if(Be)return i(o,u);Be=!0;try{return lt(i,o,u)}finally{Be=!1,(xe!==null||Ie!==null)&&(Bt(),Pe())}}function Mt(i,o){var u=i.stateNode;if(u===null)return null;var d=Rc(u);if(d===null)return null;u=d[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(i=i.type,d=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!d;break e;default:i=!1}if(i)return null;if(u&&typeof u!="function")throw Error(t(231,o,typeof u));return u}var ke=!1;if(c)try{var gt={};Object.defineProperty(gt,"passive",{get:function(){ke=!0}}),window.addEventListener("test",gt,gt),window.removeEventListener("test",gt,gt)}catch{ke=!1}function at(i,o,u,d,_,S,C,B,j){var fe=Array.prototype.slice.call(arguments,3);try{o.apply(u,fe)}catch(Se){this.onError(Se)}}var yt=!1,fn=null,Ct=!1,Wt=null,En={onError:function(i){yt=!0,fn=i}};function an(i,o,u,d,_,S,C,B,j){yt=!1,fn=null,at.apply(En,arguments)}function nn(i,o,u,d,_,S,C,B,j){if(an.apply(this,arguments),yt){if(yt){var fe=fn;yt=!1,fn=null}else throw Error(t(198));Ct||(Ct=!0,Wt=fe)}}function Pt(i){var o=i,u=i;if(i.alternate)for(;o.return;)o=o.return;else{i=o;do o=i,(o.flags&4098)!==0&&(u=o.return),i=o.return;while(i)}return o.tag===3?u:null}function ti(i){if(i.tag===13){var o=i.memoizedState;if(o===null&&(i=i.alternate,i!==null&&(o=i.memoizedState)),o!==null)return o.dehydrated}return null}function Zt(i){if(Pt(i)!==i)throw Error(t(188))}function Xn(i){var o=i.alternate;if(!o){if(o=Pt(i),o===null)throw Error(t(188));return o!==i?null:i}for(var u=i,d=o;;){var _=u.return;if(_===null)break;var S=_.alternate;if(S===null){if(d=_.return,d!==null){u=d;continue}break}if(_.child===S.child){for(S=_.child;S;){if(S===u)return Zt(_),i;if(S===d)return Zt(_),o;S=S.sibling}throw Error(t(188))}if(u.return!==d.return)u=_,d=S;else{for(var C=!1,B=_.child;B;){if(B===u){C=!0,u=_,d=S;break}if(B===d){C=!0,d=_,u=S;break}B=B.sibling}if(!C){for(B=S.child;B;){if(B===u){C=!0,u=S,d=_;break}if(B===d){C=!0,d=S,u=_;break}B=B.sibling}if(!C)throw Error(t(189))}}if(u.alternate!==d)throw Error(t(190))}if(u.tag!==3)throw Error(t(188));return u.stateNode.current===u?i:o}function ai(i){return i=Xn(i),i!==null?Tn(i):null}function Tn(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var o=Tn(i);if(o!==null)return o;i=i.sibling}return null}var wn=e.unstable_scheduleCallback,Cn=e.unstable_cancelCallback,Ar=e.unstable_shouldYield,ks=e.unstable_requestPaint,Dt=e.unstable_now,I=e.unstable_getCurrentPriorityLevel,K=e.unstable_ImmediatePriority,ue=e.unstable_UserBlockingPriority,le=e.unstable_NormalPriority,te=e.unstable_LowPriority,Re=e.unstable_IdlePriority,ze=null,De=null;function Ge(i){if(De&&typeof De.onCommitFiberRoot=="function")try{De.onCommitFiberRoot(ze,i,void 0,(i.current.flags&128)===128)}catch{}}var Qe=Math.clz32?Math.clz32:Lt,St=Math.log,ht=Math.LN2;function Lt(i){return i>>>=0,i===0?32:31-(St(i)/ht|0)|0}var Xt=64,ln=4194304;function sn(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function qt(i,o){var u=i.pendingLanes;if(u===0)return 0;var d=0,_=i.suspendedLanes,S=i.pingedLanes,C=u&268435455;if(C!==0){var B=C&~_;B!==0?d=sn(B):(S&=C,S!==0&&(d=sn(S)))}else C=u&~_,C!==0?d=sn(C):S!==0&&(d=sn(S));if(d===0)return 0;if(o!==0&&o!==d&&(o&_)===0&&(_=d&-d,S=o&-o,_>=S||_===16&&(S&4194240)!==0))return o;if((d&4)!==0&&(d|=u&16),o=i.entangledLanes,o!==0)for(i=i.entanglements,o&=d;0<o;)u=31-Qe(o),_=1<<u,d|=i[u],o&=~_;return d}function pt(i,o){switch(i){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qt(i,o){for(var u=i.suspendedLanes,d=i.pingedLanes,_=i.expirationTimes,S=i.pendingLanes;0<S;){var C=31-Qe(S),B=1<<C,j=_[C];j===-1?((B&u)===0||(B&d)!==0)&&(_[C]=pt(B,o)):j<=o&&(i.expiredLanes|=B),S&=~B}}function zt(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function li(){var i=Xt;return Xt<<=1,(Xt&4194240)===0&&(Xt=64),i}function Vr(i){for(var o=[],u=0;31>u;u++)o.push(i);return o}function kn(i,o,u){i.pendingLanes|=o,o!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,o=31-Qe(o),i[o]=u}function Ro(i,o){var u=i.pendingLanes&~o;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=o,i.mutableReadLanes&=o,i.entangledLanes&=o,o=i.entanglements;var d=i.eventTimes;for(i=i.expirationTimes;0<u;){var _=31-Qe(u),S=1<<_;o[_]=0,d[_]=-1,i[_]=-1,u&=~S}}function Jt(i,o){var u=i.entangledLanes|=o;for(i=i.entanglements;u;){var d=31-Qe(u),_=1<<d;_&o|i[d]&o&&(i[d]|=o),u&=~_}}var At=0;function Mi(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var jn,Yn,va,Hr,g0,Nd=!1,pc=[],zs=null,Bs=null,Vs=null,Fl=new Map,Ol=new Map,Hs=[],H1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _0(i,o){switch(i){case"focusin":case"focusout":zs=null;break;case"dragenter":case"dragleave":Bs=null;break;case"mouseover":case"mouseout":Vs=null;break;case"pointerover":case"pointerout":Fl.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ol.delete(o.pointerId)}}function kl(i,o,u,d,_,S){return i===null||i.nativeEvent!==S?(i={blockedOn:o,domEventName:u,eventSystemFlags:d,nativeEvent:S,targetContainers:[_]},o!==null&&(o=Ql(o),o!==null&&Yn(o)),i):(i.eventSystemFlags|=d,o=i.targetContainers,_!==null&&o.indexOf(_)===-1&&o.push(_),i)}function G1(i,o,u,d,_){switch(o){case"focusin":return zs=kl(zs,i,o,u,d,_),!0;case"dragenter":return Bs=kl(Bs,i,o,u,d,_),!0;case"mouseover":return Vs=kl(Vs,i,o,u,d,_),!0;case"pointerover":var S=_.pointerId;return Fl.set(S,kl(Fl.get(S)||null,i,o,u,d,_)),!0;case"gotpointercapture":return S=_.pointerId,Ol.set(S,kl(Ol.get(S)||null,i,o,u,d,_)),!0}return!1}function v0(i){var o=Po(i.target);if(o!==null){var u=Pt(o);if(u!==null){if(o=u.tag,o===13){if(o=ti(u),o!==null){i.blockedOn=o,g0(i.priority,function(){va(u)});return}}else if(o===3&&u.stateNode.current.memoizedState.isDehydrated){i.blockedOn=u.tag===3?u.stateNode.containerInfo:null;return}}}i.blockedOn=null}function mc(i){if(i.blockedOn!==null)return!1;for(var o=i.targetContainers;0<o.length;){var u=Fd(i.domEventName,i.eventSystemFlags,o[0],i.nativeEvent);if(u===null){u=i.nativeEvent;var d=new u.constructor(u.type,u);xt=d,u.target.dispatchEvent(d),xt=null}else return o=Ql(u),o!==null&&Yn(o),i.blockedOn=u,!1;o.shift()}return!0}function x0(i,o,u){mc(i)&&u.delete(o)}function W1(){Nd=!1,zs!==null&&mc(zs)&&(zs=null),Bs!==null&&mc(Bs)&&(Bs=null),Vs!==null&&mc(Vs)&&(Vs=null),Fl.forEach(x0),Ol.forEach(x0)}function zl(i,o){i.blockedOn===o&&(i.blockedOn=null,Nd||(Nd=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,W1)))}function Bl(i){function o(_){return zl(_,i)}if(0<pc.length){zl(pc[0],i);for(var u=1;u<pc.length;u++){var d=pc[u];d.blockedOn===i&&(d.blockedOn=null)}}for(zs!==null&&zl(zs,i),Bs!==null&&zl(Bs,i),Vs!==null&&zl(Vs,i),Fl.forEach(o),Ol.forEach(o),u=0;u<Hs.length;u++)d=Hs[u],d.blockedOn===i&&(d.blockedOn=null);for(;0<Hs.length&&(u=Hs[0],u.blockedOn===null);)v0(u),u.blockedOn===null&&Hs.shift()}var xa=A.ReactCurrentBatchConfig,gc=!0;function X1(i,o,u,d){var _=At,S=xa.transition;xa.transition=null;try{At=1,Ud(i,o,u,d)}finally{At=_,xa.transition=S}}function j1(i,o,u,d){var _=At,S=xa.transition;xa.transition=null;try{At=4,Ud(i,o,u,d)}finally{At=_,xa.transition=S}}function Ud(i,o,u,d){if(gc){var _=Fd(i,o,u,d);if(_===null)Jd(i,o,d,_c,u),_0(i,d);else if(G1(_,i,o,u,d))d.stopPropagation();else if(_0(i,d),o&4&&-1<H1.indexOf(i)){for(;_!==null;){var S=Ql(_);if(S!==null&&jn(S),S=Fd(i,o,u,d),S===null&&Jd(i,o,d,_c,u),S===_)break;_=S}_!==null&&d.stopPropagation()}else Jd(i,o,d,null,u)}}var _c=null;function Fd(i,o,u,d){if(_c=null,i=H(d),i=Po(i),i!==null)if(o=Pt(i),o===null)i=null;else if(u=o.tag,u===13){if(i=ti(o),i!==null)return i;i=null}else if(u===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null);return _c=i,null}function y0(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(I()){case K:return 1;case ue:return 4;case le:case te:return 16;case Re:return 536870912;default:return 16}default:return 16}}var Gs=null,Od=null,vc=null;function S0(){if(vc)return vc;var i,o=Od,u=o.length,d,_="value"in Gs?Gs.value:Gs.textContent,S=_.length;for(i=0;i<u&&o[i]===_[i];i++);var C=u-i;for(d=1;d<=C&&o[u-d]===_[S-d];d++);return vc=_.slice(i,1<d?1-d:void 0)}function xc(i){var o=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&o===13&&(i=13)):i=o,i===10&&(i=13),32<=i||i===13?i:0}function yc(){return!0}function M0(){return!1}function qi(i){function o(u,d,_,S,C){this._reactName=u,this._targetInst=_,this.type=d,this.nativeEvent=S,this.target=C,this.currentTarget=null;for(var B in i)i.hasOwnProperty(B)&&(u=i[B],this[B]=u?u(S):S[B]);return this.isDefaultPrevented=(S.defaultPrevented!=null?S.defaultPrevented:S.returnValue===!1)?yc:M0,this.isPropagationStopped=M0,this}return U(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var u=this.nativeEvent;u&&(u.preventDefault?u.preventDefault():typeof u.returnValue!="unknown"&&(u.returnValue=!1),this.isDefaultPrevented=yc)},stopPropagation:function(){var u=this.nativeEvent;u&&(u.stopPropagation?u.stopPropagation():typeof u.cancelBubble!="unknown"&&(u.cancelBubble=!0),this.isPropagationStopped=yc)},persist:function(){},isPersistent:yc}),o}var ya={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kd=qi(ya),Vl=U({},ya,{view:0,detail:0}),Y1=qi(Vl),zd,Bd,Hl,Sc=U({},Vl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hd,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Hl&&(Hl&&i.type==="mousemove"?(zd=i.screenX-Hl.screenX,Bd=i.screenY-Hl.screenY):Bd=zd=0,Hl=i),zd)},movementY:function(i){return"movementY"in i?i.movementY:Bd}}),E0=qi(Sc),q1=U({},Sc,{dataTransfer:0}),$1=qi(q1),K1=U({},Vl,{relatedTarget:0}),Vd=qi(K1),Z1=U({},ya,{animationName:0,elapsedTime:0,pseudoElement:0}),Q1=qi(Z1),J1=U({},ya,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),eM=qi(J1),tM=U({},ya,{data:0}),T0=qi(tM),nM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sM(i){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(i):(i=rM[i])?!!o[i]:!1}function Hd(){return sM}var oM=U({},Vl,{key:function(i){if(i.key){var o=nM[i.key]||i.key;if(o!=="Unidentified")return o}return i.type==="keypress"?(i=xc(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?iM[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hd,charCode:function(i){return i.type==="keypress"?xc(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?xc(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),aM=qi(oM),lM=U({},Sc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w0=qi(lM),uM=U({},Vl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hd}),cM=qi(uM),fM=U({},ya,{propertyName:0,elapsedTime:0,pseudoElement:0}),dM=qi(fM),hM=U({},Sc,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),pM=qi(hM),mM=[9,13,27,32],Gd=c&&"CompositionEvent"in window,Gl=null;c&&"documentMode"in document&&(Gl=document.documentMode);var gM=c&&"TextEvent"in window&&!Gl,A0=c&&(!Gd||Gl&&8<Gl&&11>=Gl),b0=" ",C0=!1;function R0(i,o){switch(i){case"keyup":return mM.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function P0(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Sa=!1;function _M(i,o){switch(i){case"compositionend":return P0(o);case"keypress":return o.which!==32?null:(C0=!0,b0);case"textInput":return i=o.data,i===b0&&C0?null:i;default:return null}}function vM(i,o){if(Sa)return i==="compositionend"||!Gd&&R0(i,o)?(i=S0(),vc=Od=Gs=null,Sa=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return A0&&o.locale!=="ko"?null:o.data;default:return null}}var xM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function D0(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o==="input"?!!xM[i.type]:o==="textarea"}function L0(i,o,u,d){ge(d),o=Ac(o,"onChange"),0<o.length&&(u=new kd("onChange","change",null,u,d),i.push({event:u,listeners:o}))}var Wl=null,Xl=null;function yM(i){K0(i,0)}function Mc(i){var o=Aa(i);if(kt(o))return i}function SM(i,o){if(i==="change")return o}var I0=!1;if(c){var Wd;if(c){var Xd="oninput"in document;if(!Xd){var N0=document.createElement("div");N0.setAttribute("oninput","return;"),Xd=typeof N0.oninput=="function"}Wd=Xd}else Wd=!1;I0=Wd&&(!document.documentMode||9<document.documentMode)}function U0(){Wl&&(Wl.detachEvent("onpropertychange",F0),Xl=Wl=null)}function F0(i){if(i.propertyName==="value"&&Mc(Xl)){var o=[];L0(o,Xl,i,H(i)),it(yM,o)}}function MM(i,o,u){i==="focusin"?(U0(),Wl=o,Xl=u,Wl.attachEvent("onpropertychange",F0)):i==="focusout"&&U0()}function EM(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Mc(Xl)}function TM(i,o){if(i==="click")return Mc(o)}function wM(i,o){if(i==="input"||i==="change")return Mc(o)}function AM(i,o){return i===o&&(i!==0||1/i===1/o)||i!==i&&o!==o}var br=typeof Object.is=="function"?Object.is:AM;function jl(i,o){if(br(i,o))return!0;if(typeof i!="object"||i===null||typeof o!="object"||o===null)return!1;var u=Object.keys(i),d=Object.keys(o);if(u.length!==d.length)return!1;for(d=0;d<u.length;d++){var _=u[d];if(!f.call(o,_)||!br(i[_],o[_]))return!1}return!0}function O0(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function k0(i,o){var u=O0(i);i=0;for(var d;u;){if(u.nodeType===3){if(d=i+u.textContent.length,i<=o&&d>=o)return{node:u,offset:o-i};i=d}e:{for(;u;){if(u.nextSibling){u=u.nextSibling;break e}u=u.parentNode}u=void 0}u=O0(u)}}function z0(i,o){return i&&o?i===o?!0:i&&i.nodeType===3?!1:o&&o.nodeType===3?z0(i,o.parentNode):"contains"in i?i.contains(o):i.compareDocumentPosition?!!(i.compareDocumentPosition(o)&16):!1:!1}function B0(){for(var i=window,o=Xe();o instanceof i.HTMLIFrameElement;){try{var u=typeof o.contentWindow.location.href=="string"}catch{u=!1}if(u)i=o.contentWindow;else break;o=Xe(i.document)}return o}function jd(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o&&(o==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||o==="textarea"||i.contentEditable==="true")}function bM(i){var o=B0(),u=i.focusedElem,d=i.selectionRange;if(o!==u&&u&&u.ownerDocument&&z0(u.ownerDocument.documentElement,u)){if(d!==null&&jd(u)){if(o=d.start,i=d.end,i===void 0&&(i=o),"selectionStart"in u)u.selectionStart=o,u.selectionEnd=Math.min(i,u.value.length);else if(i=(o=u.ownerDocument||document)&&o.defaultView||window,i.getSelection){i=i.getSelection();var _=u.textContent.length,S=Math.min(d.start,_);d=d.end===void 0?S:Math.min(d.end,_),!i.extend&&S>d&&(_=d,d=S,S=_),_=k0(u,S);var C=k0(u,d);_&&C&&(i.rangeCount!==1||i.anchorNode!==_.node||i.anchorOffset!==_.offset||i.focusNode!==C.node||i.focusOffset!==C.offset)&&(o=o.createRange(),o.setStart(_.node,_.offset),i.removeAllRanges(),S>d?(i.addRange(o),i.extend(C.node,C.offset)):(o.setEnd(C.node,C.offset),i.addRange(o)))}}for(o=[],i=u;i=i.parentNode;)i.nodeType===1&&o.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<o.length;u++)i=o[u],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var CM=c&&"documentMode"in document&&11>=document.documentMode,Ma=null,Yd=null,Yl=null,qd=!1;function V0(i,o,u){var d=u.window===u?u.document:u.nodeType===9?u:u.ownerDocument;qd||Ma==null||Ma!==Xe(d)||(d=Ma,"selectionStart"in d&&jd(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Yl&&jl(Yl,d)||(Yl=d,d=Ac(Yd,"onSelect"),0<d.length&&(o=new kd("onSelect","select",null,o,u),i.push({event:o,listeners:d}),o.target=Ma)))}function Ec(i,o){var u={};return u[i.toLowerCase()]=o.toLowerCase(),u["Webkit"+i]="webkit"+o,u["Moz"+i]="moz"+o,u}var Ea={animationend:Ec("Animation","AnimationEnd"),animationiteration:Ec("Animation","AnimationIteration"),animationstart:Ec("Animation","AnimationStart"),transitionend:Ec("Transition","TransitionEnd")},$d={},H0={};c&&(H0=document.createElement("div").style,"AnimationEvent"in window||(delete Ea.animationend.animation,delete Ea.animationiteration.animation,delete Ea.animationstart.animation),"TransitionEvent"in window||delete Ea.transitionend.transition);function Tc(i){if($d[i])return $d[i];if(!Ea[i])return i;var o=Ea[i],u;for(u in o)if(o.hasOwnProperty(u)&&u in H0)return $d[i]=o[u];return i}var G0=Tc("animationend"),W0=Tc("animationiteration"),X0=Tc("animationstart"),j0=Tc("transitionend"),Y0=new Map,q0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ws(i,o){Y0.set(i,o),a(o,[i])}for(var Kd=0;Kd<q0.length;Kd++){var Zd=q0[Kd],RM=Zd.toLowerCase(),PM=Zd[0].toUpperCase()+Zd.slice(1);Ws(RM,"on"+PM)}Ws(G0,"onAnimationEnd"),Ws(W0,"onAnimationIteration"),Ws(X0,"onAnimationStart"),Ws("dblclick","onDoubleClick"),Ws("focusin","onFocus"),Ws("focusout","onBlur"),Ws(j0,"onTransitionEnd"),l("onMouseEnter",["mouseout","mouseover"]),l("onMouseLeave",["mouseout","mouseover"]),l("onPointerEnter",["pointerout","pointerover"]),l("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ql="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),DM=new Set("cancel close invalid load scroll toggle".split(" ").concat(ql));function $0(i,o,u){var d=i.type||"unknown-event";i.currentTarget=u,nn(d,o,void 0,i),i.currentTarget=null}function K0(i,o){o=(o&4)!==0;for(var u=0;u<i.length;u++){var d=i[u],_=d.event;d=d.listeners;e:{var S=void 0;if(o)for(var C=d.length-1;0<=C;C--){var B=d[C],j=B.instance,fe=B.currentTarget;if(B=B.listener,j!==S&&_.isPropagationStopped())break e;$0(_,B,fe),S=j}else for(C=0;C<d.length;C++){if(B=d[C],j=B.instance,fe=B.currentTarget,B=B.listener,j!==S&&_.isPropagationStopped())break e;$0(_,B,fe),S=j}}}if(Ct)throw i=Wt,Ct=!1,Wt=null,i}function pn(i,o){var u=o[sh];u===void 0&&(u=o[sh]=new Set);var d=i+"__bubble";u.has(d)||(Z0(o,i,2,!1),u.add(d))}function Qd(i,o,u){var d=0;o&&(d|=4),Z0(u,i,d,o)}var wc="_reactListening"+Math.random().toString(36).slice(2);function $l(i){if(!i[wc]){i[wc]=!0,n.forEach(function(u){u!=="selectionchange"&&(DM.has(u)||Qd(u,!1,i),Qd(u,!0,i))});var o=i.nodeType===9?i:i.ownerDocument;o===null||o[wc]||(o[wc]=!0,Qd("selectionchange",!1,o))}}function Z0(i,o,u,d){switch(y0(o)){case 1:var _=X1;break;case 4:_=j1;break;default:_=Ud}u=_.bind(null,o,u,i),_=void 0,!ke||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(_=!0),d?_!==void 0?i.addEventListener(o,u,{capture:!0,passive:_}):i.addEventListener(o,u,!0):_!==void 0?i.addEventListener(o,u,{passive:_}):i.addEventListener(o,u,!1)}function Jd(i,o,u,d,_){var S=d;if((o&1)===0&&(o&2)===0&&d!==null)e:for(;;){if(d===null)return;var C=d.tag;if(C===3||C===4){var B=d.stateNode.containerInfo;if(B===_||B.nodeType===8&&B.parentNode===_)break;if(C===4)for(C=d.return;C!==null;){var j=C.tag;if((j===3||j===4)&&(j=C.stateNode.containerInfo,j===_||j.nodeType===8&&j.parentNode===_))return;C=C.return}for(;B!==null;){if(C=Po(B),C===null)return;if(j=C.tag,j===5||j===6){d=S=C;continue e}B=B.parentNode}}d=d.return}it(function(){var fe=S,Se=H(u),Te=[];e:{var ye=Y0.get(i);if(ye!==void 0){var Ze=kd,nt=i;switch(i){case"keypress":if(xc(u)===0)break e;case"keydown":case"keyup":Ze=aM;break;case"focusin":nt="focus",Ze=Vd;break;case"focusout":nt="blur",Ze=Vd;break;case"beforeblur":case"afterblur":Ze=Vd;break;case"click":if(u.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ze=E0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ze=$1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ze=cM;break;case G0:case W0:case X0:Ze=Q1;break;case j0:Ze=dM;break;case"scroll":Ze=Y1;break;case"wheel":Ze=pM;break;case"copy":case"cut":case"paste":Ze=eM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ze=w0}var rt=(o&4)!==0,Rn=!rt&&i==="scroll",ie=rt?ye!==null?ye+"Capture":null:ye;rt=[];for(var $=fe,ae;$!==null;){ae=$;var Le=ae.stateNode;if(ae.tag===5&&Le!==null&&(ae=Le,ie!==null&&(Le=Mt($,ie),Le!=null&&rt.push(Kl($,Le,ae)))),Rn)break;$=$.return}0<rt.length&&(ye=new Ze(ye,nt,null,u,Se),Te.push({event:ye,listeners:rt}))}}if((o&7)===0){e:{if(ye=i==="mouseover"||i==="pointerover",Ze=i==="mouseout"||i==="pointerout",ye&&u!==xt&&(nt=u.relatedTarget||u.fromElement)&&(Po(nt)||nt[us]))break e;if((Ze||ye)&&(ye=Se.window===Se?Se:(ye=Se.ownerDocument)?ye.defaultView||ye.parentWindow:window,Ze?(nt=u.relatedTarget||u.toElement,Ze=fe,nt=nt?Po(nt):null,nt!==null&&(Rn=Pt(nt),nt!==Rn||nt.tag!==5&&nt.tag!==6)&&(nt=null)):(Ze=null,nt=fe),Ze!==nt)){if(rt=E0,Le="onMouseLeave",ie="onMouseEnter",$="mouse",(i==="pointerout"||i==="pointerover")&&(rt=w0,Le="onPointerLeave",ie="onPointerEnter",$="pointer"),Rn=Ze==null?ye:Aa(Ze),ae=nt==null?ye:Aa(nt),ye=new rt(Le,$+"leave",Ze,u,Se),ye.target=Rn,ye.relatedTarget=ae,Le=null,Po(Se)===fe&&(rt=new rt(ie,$+"enter",nt,u,Se),rt.target=ae,rt.relatedTarget=Rn,Le=rt),Rn=Le,Ze&&nt)t:{for(rt=Ze,ie=nt,$=0,ae=rt;ae;ae=Ta(ae))$++;for(ae=0,Le=ie;Le;Le=Ta(Le))ae++;for(;0<$-ae;)rt=Ta(rt),$--;for(;0<ae-$;)ie=Ta(ie),ae--;for(;$--;){if(rt===ie||ie!==null&&rt===ie.alternate)break t;rt=Ta(rt),ie=Ta(ie)}rt=null}else rt=null;Ze!==null&&Q0(Te,ye,Ze,rt,!1),nt!==null&&Rn!==null&&Q0(Te,Rn,nt,rt,!0)}}e:{if(ye=fe?Aa(fe):window,Ze=ye.nodeName&&ye.nodeName.toLowerCase(),Ze==="select"||Ze==="input"&&ye.type==="file")var st=SM;else if(D0(ye))if(I0)st=wM;else{st=EM;var _t=MM}else(Ze=ye.nodeName)&&Ze.toLowerCase()==="input"&&(ye.type==="checkbox"||ye.type==="radio")&&(st=TM);if(st&&(st=st(i,fe))){L0(Te,st,u,Se);break e}_t&&_t(i,ye,fe),i==="focusout"&&(_t=ye._wrapperState)&&_t.controlled&&ye.type==="number"&&Gt(ye,"number",ye.value)}switch(_t=fe?Aa(fe):window,i){case"focusin":(D0(_t)||_t.contentEditable==="true")&&(Ma=_t,Yd=fe,Yl=null);break;case"focusout":Yl=Yd=Ma=null;break;case"mousedown":qd=!0;break;case"contextmenu":case"mouseup":case"dragend":qd=!1,V0(Te,u,Se);break;case"selectionchange":if(CM)break;case"keydown":case"keyup":V0(Te,u,Se)}var vt;if(Gd)e:{switch(i){case"compositionstart":var Et="onCompositionStart";break e;case"compositionend":Et="onCompositionEnd";break e;case"compositionupdate":Et="onCompositionUpdate";break e}Et=void 0}else Sa?R0(i,u)&&(Et="onCompositionEnd"):i==="keydown"&&u.keyCode===229&&(Et="onCompositionStart");Et&&(A0&&u.locale!=="ko"&&(Sa||Et!=="onCompositionStart"?Et==="onCompositionEnd"&&Sa&&(vt=S0()):(Gs=Se,Od="value"in Gs?Gs.value:Gs.textContent,Sa=!0)),_t=Ac(fe,Et),0<_t.length&&(Et=new T0(Et,i,null,u,Se),Te.push({event:Et,listeners:_t}),vt?Et.data=vt:(vt=P0(u),vt!==null&&(Et.data=vt)))),(vt=gM?_M(i,u):vM(i,u))&&(fe=Ac(fe,"onBeforeInput"),0<fe.length&&(Se=new T0("onBeforeInput","beforeinput",null,u,Se),Te.push({event:Se,listeners:fe}),Se.data=vt))}K0(Te,o)})}function Kl(i,o,u){return{instance:i,listener:o,currentTarget:u}}function Ac(i,o){for(var u=o+"Capture",d=[];i!==null;){var _=i,S=_.stateNode;_.tag===5&&S!==null&&(_=S,S=Mt(i,u),S!=null&&d.unshift(Kl(i,S,_)),S=Mt(i,o),S!=null&&d.push(Kl(i,S,_))),i=i.return}return d}function Ta(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function Q0(i,o,u,d,_){for(var S=o._reactName,C=[];u!==null&&u!==d;){var B=u,j=B.alternate,fe=B.stateNode;if(j!==null&&j===d)break;B.tag===5&&fe!==null&&(B=fe,_?(j=Mt(u,S),j!=null&&C.unshift(Kl(u,j,B))):_||(j=Mt(u,S),j!=null&&C.push(Kl(u,j,B)))),u=u.return}C.length!==0&&i.push({event:o,listeners:C})}var LM=/\r\n?/g,IM=/\u0000|\uFFFD/g;function J0(i){return(typeof i=="string"?i:""+i).replace(LM,`
`).replace(IM,"")}function bc(i,o,u){if(o=J0(o),J0(i)!==o&&u)throw Error(t(425))}function Cc(){}var eh=null,th=null;function nh(i,o){return i==="textarea"||i==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var ih=typeof setTimeout=="function"?setTimeout:void 0,NM=typeof clearTimeout=="function"?clearTimeout:void 0,e_=typeof Promise=="function"?Promise:void 0,UM=typeof queueMicrotask=="function"?queueMicrotask:typeof e_<"u"?function(i){return e_.resolve(null).then(i).catch(FM)}:ih;function FM(i){setTimeout(function(){throw i})}function rh(i,o){var u=o,d=0;do{var _=u.nextSibling;if(i.removeChild(u),_&&_.nodeType===8)if(u=_.data,u==="/$"){if(d===0){i.removeChild(_),Bl(o);return}d--}else u!=="$"&&u!=="$?"&&u!=="$!"||d++;u=_}while(u);Bl(o)}function Xs(i){for(;i!=null;i=i.nextSibling){var o=i.nodeType;if(o===1||o===3)break;if(o===8){if(o=i.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return i}function t_(i){i=i.previousSibling;for(var o=0;i;){if(i.nodeType===8){var u=i.data;if(u==="$"||u==="$!"||u==="$?"){if(o===0)return i;o--}else u==="/$"&&o++}i=i.previousSibling}return null}var wa=Math.random().toString(36).slice(2),Gr="__reactFiber$"+wa,Zl="__reactProps$"+wa,us="__reactContainer$"+wa,sh="__reactEvents$"+wa,OM="__reactListeners$"+wa,kM="__reactHandles$"+wa;function Po(i){var o=i[Gr];if(o)return o;for(var u=i.parentNode;u;){if(o=u[us]||u[Gr]){if(u=o.alternate,o.child!==null||u!==null&&u.child!==null)for(i=t_(i);i!==null;){if(u=i[Gr])return u;i=t_(i)}return o}i=u,u=i.parentNode}return null}function Ql(i){return i=i[Gr]||i[us],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Aa(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Rc(i){return i[Zl]||null}var oh=[],ba=-1;function js(i){return{current:i}}function mn(i){0>ba||(i.current=oh[ba],oh[ba]=null,ba--)}function dn(i,o){ba++,oh[ba]=i.current,i.current=o}var Ys={},ui=js(Ys),Ii=js(!1),Do=Ys;function Ca(i,o){var u=i.type.contextTypes;if(!u)return Ys;var d=i.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===o)return d.__reactInternalMemoizedMaskedChildContext;var _={},S;for(S in u)_[S]=o[S];return d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=o,i.__reactInternalMemoizedMaskedChildContext=_),_}function Ni(i){return i=i.childContextTypes,i!=null}function Pc(){mn(Ii),mn(ui)}function n_(i,o,u){if(ui.current!==Ys)throw Error(t(168));dn(ui,o),dn(Ii,u)}function i_(i,o,u){var d=i.stateNode;if(o=o.childContextTypes,typeof d.getChildContext!="function")return u;d=d.getChildContext();for(var _ in d)if(!(_ in o))throw Error(t(108,ce(i)||"Unknown",_));return U({},u,d)}function Dc(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Ys,Do=ui.current,dn(ui,i),dn(Ii,Ii.current),!0}function r_(i,o,u){var d=i.stateNode;if(!d)throw Error(t(169));u?(i=i_(i,o,Do),d.__reactInternalMemoizedMergedChildContext=i,mn(Ii),mn(ui),dn(ui,i)):mn(Ii),dn(Ii,u)}var cs=null,Lc=!1,ah=!1;function s_(i){cs===null?cs=[i]:cs.push(i)}function zM(i){Lc=!0,s_(i)}function qs(){if(!ah&&cs!==null){ah=!0;var i=0,o=At;try{var u=cs;for(At=1;i<u.length;i++){var d=u[i];do d=d(!0);while(d!==null)}cs=null,Lc=!1}catch(_){throw cs!==null&&(cs=cs.slice(i+1)),wn(K,qs),_}finally{At=o,ah=!1}}return null}var Ra=[],Pa=0,Ic=null,Nc=0,dr=[],hr=0,Lo=null,fs=1,ds="";function Io(i,o){Ra[Pa++]=Nc,Ra[Pa++]=Ic,Ic=i,Nc=o}function o_(i,o,u){dr[hr++]=fs,dr[hr++]=ds,dr[hr++]=Lo,Lo=i;var d=fs;i=ds;var _=32-Qe(d)-1;d&=~(1<<_),u+=1;var S=32-Qe(o)+_;if(30<S){var C=_-_%5;S=(d&(1<<C)-1).toString(32),d>>=C,_-=C,fs=1<<32-Qe(o)+_|u<<_|d,ds=S+i}else fs=1<<S|u<<_|d,ds=i}function lh(i){i.return!==null&&(Io(i,1),o_(i,1,0))}function uh(i){for(;i===Ic;)Ic=Ra[--Pa],Ra[Pa]=null,Nc=Ra[--Pa],Ra[Pa]=null;for(;i===Lo;)Lo=dr[--hr],dr[hr]=null,ds=dr[--hr],dr[hr]=null,fs=dr[--hr],dr[hr]=null}var $i=null,Ki=null,gn=!1,Cr=null;function a_(i,o){var u=_r(5,null,null,0);u.elementType="DELETED",u.stateNode=o,u.return=i,o=i.deletions,o===null?(i.deletions=[u],i.flags|=16):o.push(u)}function l_(i,o){switch(i.tag){case 5:var u=i.type;return o=o.nodeType!==1||u.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(i.stateNode=o,$i=i,Ki=Xs(o.firstChild),!0):!1;case 6:return o=i.pendingProps===""||o.nodeType!==3?null:o,o!==null?(i.stateNode=o,$i=i,Ki=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(u=Lo!==null?{id:fs,overflow:ds}:null,i.memoizedState={dehydrated:o,treeContext:u,retryLane:1073741824},u=_r(18,null,null,0),u.stateNode=o,u.return=i,i.child=u,$i=i,Ki=null,!0):!1;default:return!1}}function ch(i){return(i.mode&1)!==0&&(i.flags&128)===0}function fh(i){if(gn){var o=Ki;if(o){var u=o;if(!l_(i,o)){if(ch(i))throw Error(t(418));o=Xs(u.nextSibling);var d=$i;o&&l_(i,o)?a_(d,u):(i.flags=i.flags&-4097|2,gn=!1,$i=i)}}else{if(ch(i))throw Error(t(418));i.flags=i.flags&-4097|2,gn=!1,$i=i}}}function u_(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;$i=i}function Uc(i){if(i!==$i)return!1;if(!gn)return u_(i),gn=!0,!1;var o;if((o=i.tag!==3)&&!(o=i.tag!==5)&&(o=i.type,o=o!=="head"&&o!=="body"&&!nh(i.type,i.memoizedProps)),o&&(o=Ki)){if(ch(i))throw c_(),Error(t(418));for(;o;)a_(i,o),o=Xs(o.nextSibling)}if(u_(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,o=0;i;){if(i.nodeType===8){var u=i.data;if(u==="/$"){if(o===0){Ki=Xs(i.nextSibling);break e}o--}else u!=="$"&&u!=="$!"&&u!=="$?"||o++}i=i.nextSibling}Ki=null}}else Ki=$i?Xs(i.stateNode.nextSibling):null;return!0}function c_(){for(var i=Ki;i;)i=Xs(i.nextSibling)}function Da(){Ki=$i=null,gn=!1}function dh(i){Cr===null?Cr=[i]:Cr.push(i)}var BM=A.ReactCurrentBatchConfig;function Jl(i,o,u){if(i=u.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(u._owner){if(u=u._owner,u){if(u.tag!==1)throw Error(t(309));var d=u.stateNode}if(!d)throw Error(t(147,i));var _=d,S=""+i;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===S?o.ref:(o=function(C){var B=_.refs;C===null?delete B[S]:B[S]=C},o._stringRef=S,o)}if(typeof i!="string")throw Error(t(284));if(!u._owner)throw Error(t(290,i))}return i}function Fc(i,o){throw i=Object.prototype.toString.call(o),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":i))}function f_(i){var o=i._init;return o(i._payload)}function d_(i){function o(ie,$){if(i){var ae=ie.deletions;ae===null?(ie.deletions=[$],ie.flags|=16):ae.push($)}}function u(ie,$){if(!i)return null;for(;$!==null;)o(ie,$),$=$.sibling;return null}function d(ie,$){for(ie=new Map;$!==null;)$.key!==null?ie.set($.key,$):ie.set($.index,$),$=$.sibling;return ie}function _(ie,$){return ie=no(ie,$),ie.index=0,ie.sibling=null,ie}function S(ie,$,ae){return ie.index=ae,i?(ae=ie.alternate,ae!==null?(ae=ae.index,ae<$?(ie.flags|=2,$):ae):(ie.flags|=2,$)):(ie.flags|=1048576,$)}function C(ie){return i&&ie.alternate===null&&(ie.flags|=2),ie}function B(ie,$,ae,Le){return $===null||$.tag!==6?($=ip(ae,ie.mode,Le),$.return=ie,$):($=_($,ae),$.return=ie,$)}function j(ie,$,ae,Le){var st=ae.type;return st===N?Se(ie,$,ae.props.children,Le,ae.key):$!==null&&($.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===Z&&f_(st)===$.type)?(Le=_($,ae.props),Le.ref=Jl(ie,$,ae),Le.return=ie,Le):(Le=af(ae.type,ae.key,ae.props,null,ie.mode,Le),Le.ref=Jl(ie,$,ae),Le.return=ie,Le)}function fe(ie,$,ae,Le){return $===null||$.tag!==4||$.stateNode.containerInfo!==ae.containerInfo||$.stateNode.implementation!==ae.implementation?($=rp(ae,ie.mode,Le),$.return=ie,$):($=_($,ae.children||[]),$.return=ie,$)}function Se(ie,$,ae,Le,st){return $===null||$.tag!==7?($=Vo(ae,ie.mode,Le,st),$.return=ie,$):($=_($,ae),$.return=ie,$)}function Te(ie,$,ae){if(typeof $=="string"&&$!==""||typeof $=="number")return $=ip(""+$,ie.mode,ae),$.return=ie,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case R:return ae=af($.type,$.key,$.props,null,ie.mode,ae),ae.ref=Jl(ie,null,$),ae.return=ie,ae;case L:return $=rp($,ie.mode,ae),$.return=ie,$;case Z:var Le=$._init;return Te(ie,Le($._payload),ae)}if(wt($)||re($))return $=Vo($,ie.mode,ae,null),$.return=ie,$;Fc(ie,$)}return null}function ye(ie,$,ae,Le){var st=$!==null?$.key:null;if(typeof ae=="string"&&ae!==""||typeof ae=="number")return st!==null?null:B(ie,$,""+ae,Le);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case R:return ae.key===st?j(ie,$,ae,Le):null;case L:return ae.key===st?fe(ie,$,ae,Le):null;case Z:return st=ae._init,ye(ie,$,st(ae._payload),Le)}if(wt(ae)||re(ae))return st!==null?null:Se(ie,$,ae,Le,null);Fc(ie,ae)}return null}function Ze(ie,$,ae,Le,st){if(typeof Le=="string"&&Le!==""||typeof Le=="number")return ie=ie.get(ae)||null,B($,ie,""+Le,st);if(typeof Le=="object"&&Le!==null){switch(Le.$$typeof){case R:return ie=ie.get(Le.key===null?ae:Le.key)||null,j($,ie,Le,st);case L:return ie=ie.get(Le.key===null?ae:Le.key)||null,fe($,ie,Le,st);case Z:var _t=Le._init;return Ze(ie,$,ae,_t(Le._payload),st)}if(wt(Le)||re(Le))return ie=ie.get(ae)||null,Se($,ie,Le,st,null);Fc($,Le)}return null}function nt(ie,$,ae,Le){for(var st=null,_t=null,vt=$,Et=$=0,Kn=null;vt!==null&&Et<ae.length;Et++){vt.index>Et?(Kn=vt,vt=null):Kn=vt.sibling;var $t=ye(ie,vt,ae[Et],Le);if($t===null){vt===null&&(vt=Kn);break}i&&vt&&$t.alternate===null&&o(ie,vt),$=S($t,$,Et),_t===null?st=$t:_t.sibling=$t,_t=$t,vt=Kn}if(Et===ae.length)return u(ie,vt),gn&&Io(ie,Et),st;if(vt===null){for(;Et<ae.length;Et++)vt=Te(ie,ae[Et],Le),vt!==null&&($=S(vt,$,Et),_t===null?st=vt:_t.sibling=vt,_t=vt);return gn&&Io(ie,Et),st}for(vt=d(ie,vt);Et<ae.length;Et++)Kn=Ze(vt,ie,Et,ae[Et],Le),Kn!==null&&(i&&Kn.alternate!==null&&vt.delete(Kn.key===null?Et:Kn.key),$=S(Kn,$,Et),_t===null?st=Kn:_t.sibling=Kn,_t=Kn);return i&&vt.forEach(function(io){return o(ie,io)}),gn&&Io(ie,Et),st}function rt(ie,$,ae,Le){var st=re(ae);if(typeof st!="function")throw Error(t(150));if(ae=st.call(ae),ae==null)throw Error(t(151));for(var _t=st=null,vt=$,Et=$=0,Kn=null,$t=ae.next();vt!==null&&!$t.done;Et++,$t=ae.next()){vt.index>Et?(Kn=vt,vt=null):Kn=vt.sibling;var io=ye(ie,vt,$t.value,Le);if(io===null){vt===null&&(vt=Kn);break}i&&vt&&io.alternate===null&&o(ie,vt),$=S(io,$,Et),_t===null?st=io:_t.sibling=io,_t=io,vt=Kn}if($t.done)return u(ie,vt),gn&&Io(ie,Et),st;if(vt===null){for(;!$t.done;Et++,$t=ae.next())$t=Te(ie,$t.value,Le),$t!==null&&($=S($t,$,Et),_t===null?st=$t:_t.sibling=$t,_t=$t);return gn&&Io(ie,Et),st}for(vt=d(ie,vt);!$t.done;Et++,$t=ae.next())$t=Ze(vt,ie,Et,$t.value,Le),$t!==null&&(i&&$t.alternate!==null&&vt.delete($t.key===null?Et:$t.key),$=S($t,$,Et),_t===null?st=$t:_t.sibling=$t,_t=$t);return i&&vt.forEach(function(xE){return o(ie,xE)}),gn&&Io(ie,Et),st}function Rn(ie,$,ae,Le){if(typeof ae=="object"&&ae!==null&&ae.type===N&&ae.key===null&&(ae=ae.props.children),typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case R:e:{for(var st=ae.key,_t=$;_t!==null;){if(_t.key===st){if(st=ae.type,st===N){if(_t.tag===7){u(ie,_t.sibling),$=_(_t,ae.props.children),$.return=ie,ie=$;break e}}else if(_t.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===Z&&f_(st)===_t.type){u(ie,_t.sibling),$=_(_t,ae.props),$.ref=Jl(ie,_t,ae),$.return=ie,ie=$;break e}u(ie,_t);break}else o(ie,_t);_t=_t.sibling}ae.type===N?($=Vo(ae.props.children,ie.mode,Le,ae.key),$.return=ie,ie=$):(Le=af(ae.type,ae.key,ae.props,null,ie.mode,Le),Le.ref=Jl(ie,$,ae),Le.return=ie,ie=Le)}return C(ie);case L:e:{for(_t=ae.key;$!==null;){if($.key===_t)if($.tag===4&&$.stateNode.containerInfo===ae.containerInfo&&$.stateNode.implementation===ae.implementation){u(ie,$.sibling),$=_($,ae.children||[]),$.return=ie,ie=$;break e}else{u(ie,$);break}else o(ie,$);$=$.sibling}$=rp(ae,ie.mode,Le),$.return=ie,ie=$}return C(ie);case Z:return _t=ae._init,Rn(ie,$,_t(ae._payload),Le)}if(wt(ae))return nt(ie,$,ae,Le);if(re(ae))return rt(ie,$,ae,Le);Fc(ie,ae)}return typeof ae=="string"&&ae!==""||typeof ae=="number"?(ae=""+ae,$!==null&&$.tag===6?(u(ie,$.sibling),$=_($,ae),$.return=ie,ie=$):(u(ie,$),$=ip(ae,ie.mode,Le),$.return=ie,ie=$),C(ie)):u(ie,$)}return Rn}var La=d_(!0),h_=d_(!1),Oc=js(null),kc=null,Ia=null,hh=null;function ph(){hh=Ia=kc=null}function mh(i){var o=Oc.current;mn(Oc),i._currentValue=o}function gh(i,o,u){for(;i!==null;){var d=i.alternate;if((i.childLanes&o)!==o?(i.childLanes|=o,d!==null&&(d.childLanes|=o)):d!==null&&(d.childLanes&o)!==o&&(d.childLanes|=o),i===u)break;i=i.return}}function Na(i,o){kc=i,hh=Ia=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&o)!==0&&(Ui=!0),i.firstContext=null)}function pr(i){var o=i._currentValue;if(hh!==i)if(i={context:i,memoizedValue:o,next:null},Ia===null){if(kc===null)throw Error(t(308));Ia=i,kc.dependencies={lanes:0,firstContext:i}}else Ia=Ia.next=i;return o}var No=null;function _h(i){No===null?No=[i]:No.push(i)}function p_(i,o,u,d){var _=o.interleaved;return _===null?(u.next=u,_h(o)):(u.next=_.next,_.next=u),o.interleaved=u,hs(i,d)}function hs(i,o){i.lanes|=o;var u=i.alternate;for(u!==null&&(u.lanes|=o),u=i,i=i.return;i!==null;)i.childLanes|=o,u=i.alternate,u!==null&&(u.childLanes|=o),u=i,i=i.return;return u.tag===3?u.stateNode:null}var $s=!1;function vh(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function m_(i,o){i=i.updateQueue,o.updateQueue===i&&(o.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function ps(i,o){return{eventTime:i,lane:o,tag:0,payload:null,callback:null,next:null}}function Ks(i,o,u){var d=i.updateQueue;if(d===null)return null;if(d=d.shared,(jt&2)!==0){var _=d.pending;return _===null?o.next=o:(o.next=_.next,_.next=o),d.pending=o,hs(i,u)}return _=d.interleaved,_===null?(o.next=o,_h(d)):(o.next=_.next,_.next=o),d.interleaved=o,hs(i,u)}function zc(i,o,u){if(o=o.updateQueue,o!==null&&(o=o.shared,(u&4194240)!==0)){var d=o.lanes;d&=i.pendingLanes,u|=d,o.lanes=u,Jt(i,u)}}function g_(i,o){var u=i.updateQueue,d=i.alternate;if(d!==null&&(d=d.updateQueue,u===d)){var _=null,S=null;if(u=u.firstBaseUpdate,u!==null){do{var C={eventTime:u.eventTime,lane:u.lane,tag:u.tag,payload:u.payload,callback:u.callback,next:null};S===null?_=S=C:S=S.next=C,u=u.next}while(u!==null);S===null?_=S=o:S=S.next=o}else _=S=o;u={baseState:d.baseState,firstBaseUpdate:_,lastBaseUpdate:S,shared:d.shared,effects:d.effects},i.updateQueue=u;return}i=u.lastBaseUpdate,i===null?u.firstBaseUpdate=o:i.next=o,u.lastBaseUpdate=o}function Bc(i,o,u,d){var _=i.updateQueue;$s=!1;var S=_.firstBaseUpdate,C=_.lastBaseUpdate,B=_.shared.pending;if(B!==null){_.shared.pending=null;var j=B,fe=j.next;j.next=null,C===null?S=fe:C.next=fe,C=j;var Se=i.alternate;Se!==null&&(Se=Se.updateQueue,B=Se.lastBaseUpdate,B!==C&&(B===null?Se.firstBaseUpdate=fe:B.next=fe,Se.lastBaseUpdate=j))}if(S!==null){var Te=_.baseState;C=0,Se=fe=j=null,B=S;do{var ye=B.lane,Ze=B.eventTime;if((d&ye)===ye){Se!==null&&(Se=Se.next={eventTime:Ze,lane:0,tag:B.tag,payload:B.payload,callback:B.callback,next:null});e:{var nt=i,rt=B;switch(ye=o,Ze=u,rt.tag){case 1:if(nt=rt.payload,typeof nt=="function"){Te=nt.call(Ze,Te,ye);break e}Te=nt;break e;case 3:nt.flags=nt.flags&-65537|128;case 0:if(nt=rt.payload,ye=typeof nt=="function"?nt.call(Ze,Te,ye):nt,ye==null)break e;Te=U({},Te,ye);break e;case 2:$s=!0}}B.callback!==null&&B.lane!==0&&(i.flags|=64,ye=_.effects,ye===null?_.effects=[B]:ye.push(B))}else Ze={eventTime:Ze,lane:ye,tag:B.tag,payload:B.payload,callback:B.callback,next:null},Se===null?(fe=Se=Ze,j=Te):Se=Se.next=Ze,C|=ye;if(B=B.next,B===null){if(B=_.shared.pending,B===null)break;ye=B,B=ye.next,ye.next=null,_.lastBaseUpdate=ye,_.shared.pending=null}}while(!0);if(Se===null&&(j=Te),_.baseState=j,_.firstBaseUpdate=fe,_.lastBaseUpdate=Se,o=_.shared.interleaved,o!==null){_=o;do C|=_.lane,_=_.next;while(_!==o)}else S===null&&(_.shared.lanes=0);Oo|=C,i.lanes=C,i.memoizedState=Te}}function __(i,o,u){if(i=o.effects,o.effects=null,i!==null)for(o=0;o<i.length;o++){var d=i[o],_=d.callback;if(_!==null){if(d.callback=null,d=u,typeof _!="function")throw Error(t(191,_));_.call(d)}}}var eu={},Wr=js(eu),tu=js(eu),nu=js(eu);function Uo(i){if(i===eu)throw Error(t(174));return i}function xh(i,o){switch(dn(nu,o),dn(tu,i),dn(Wr,eu),i=o.nodeType,i){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:me(null,"");break;default:i=i===8?o.parentNode:o,o=i.namespaceURI||null,i=i.tagName,o=me(o,i)}mn(Wr),dn(Wr,o)}function Ua(){mn(Wr),mn(tu),mn(nu)}function v_(i){Uo(nu.current);var o=Uo(Wr.current),u=me(o,i.type);o!==u&&(dn(tu,i),dn(Wr,u))}function yh(i){tu.current===i&&(mn(Wr),mn(tu))}var vn=js(0);function Vc(i){for(var o=i;o!==null;){if(o.tag===13){var u=o.memoizedState;if(u!==null&&(u=u.dehydrated,u===null||u.data==="$?"||u.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var Sh=[];function Mh(){for(var i=0;i<Sh.length;i++)Sh[i]._workInProgressVersionPrimary=null;Sh.length=0}var Hc=A.ReactCurrentDispatcher,Eh=A.ReactCurrentBatchConfig,Fo=0,xn=null,zn=null,qn=null,Gc=!1,iu=!1,ru=0,VM=0;function ci(){throw Error(t(321))}function Th(i,o){if(o===null)return!1;for(var u=0;u<o.length&&u<i.length;u++)if(!br(i[u],o[u]))return!1;return!0}function wh(i,o,u,d,_,S){if(Fo=S,xn=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,Hc.current=i===null||i.memoizedState===null?XM:jM,i=u(d,_),iu){S=0;do{if(iu=!1,ru=0,25<=S)throw Error(t(301));S+=1,qn=zn=null,o.updateQueue=null,Hc.current=YM,i=u(d,_)}while(iu)}if(Hc.current=jc,o=zn!==null&&zn.next!==null,Fo=0,qn=zn=xn=null,Gc=!1,o)throw Error(t(300));return i}function Ah(){var i=ru!==0;return ru=0,i}function Xr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qn===null?xn.memoizedState=qn=i:qn=qn.next=i,qn}function mr(){if(zn===null){var i=xn.alternate;i=i!==null?i.memoizedState:null}else i=zn.next;var o=qn===null?xn.memoizedState:qn.next;if(o!==null)qn=o,zn=i;else{if(i===null)throw Error(t(310));zn=i,i={memoizedState:zn.memoizedState,baseState:zn.baseState,baseQueue:zn.baseQueue,queue:zn.queue,next:null},qn===null?xn.memoizedState=qn=i:qn=qn.next=i}return qn}function su(i,o){return typeof o=="function"?o(i):o}function bh(i){var o=mr(),u=o.queue;if(u===null)throw Error(t(311));u.lastRenderedReducer=i;var d=zn,_=d.baseQueue,S=u.pending;if(S!==null){if(_!==null){var C=_.next;_.next=S.next,S.next=C}d.baseQueue=_=S,u.pending=null}if(_!==null){S=_.next,d=d.baseState;var B=C=null,j=null,fe=S;do{var Se=fe.lane;if((Fo&Se)===Se)j!==null&&(j=j.next={lane:0,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),d=fe.hasEagerState?fe.eagerState:i(d,fe.action);else{var Te={lane:Se,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null};j===null?(B=j=Te,C=d):j=j.next=Te,xn.lanes|=Se,Oo|=Se}fe=fe.next}while(fe!==null&&fe!==S);j===null?C=d:j.next=B,br(d,o.memoizedState)||(Ui=!0),o.memoizedState=d,o.baseState=C,o.baseQueue=j,u.lastRenderedState=d}if(i=u.interleaved,i!==null){_=i;do S=_.lane,xn.lanes|=S,Oo|=S,_=_.next;while(_!==i)}else _===null&&(u.lanes=0);return[o.memoizedState,u.dispatch]}function Ch(i){var o=mr(),u=o.queue;if(u===null)throw Error(t(311));u.lastRenderedReducer=i;var d=u.dispatch,_=u.pending,S=o.memoizedState;if(_!==null){u.pending=null;var C=_=_.next;do S=i(S,C.action),C=C.next;while(C!==_);br(S,o.memoizedState)||(Ui=!0),o.memoizedState=S,o.baseQueue===null&&(o.baseState=S),u.lastRenderedState=S}return[S,d]}function x_(){}function y_(i,o){var u=xn,d=mr(),_=o(),S=!br(d.memoizedState,_);if(S&&(d.memoizedState=_,Ui=!0),d=d.queue,Rh(E_.bind(null,u,d,i),[i]),d.getSnapshot!==o||S||qn!==null&&qn.memoizedState.tag&1){if(u.flags|=2048,ou(9,M_.bind(null,u,d,_,o),void 0,null),$n===null)throw Error(t(349));(Fo&30)!==0||S_(u,o,_)}return _}function S_(i,o,u){i.flags|=16384,i={getSnapshot:o,value:u},o=xn.updateQueue,o===null?(o={lastEffect:null,stores:null},xn.updateQueue=o,o.stores=[i]):(u=o.stores,u===null?o.stores=[i]:u.push(i))}function M_(i,o,u,d){o.value=u,o.getSnapshot=d,T_(o)&&w_(i)}function E_(i,o,u){return u(function(){T_(o)&&w_(i)})}function T_(i){var o=i.getSnapshot;i=i.value;try{var u=o();return!br(i,u)}catch{return!0}}function w_(i){var o=hs(i,1);o!==null&&Lr(o,i,1,-1)}function A_(i){var o=Xr();return typeof i=="function"&&(i=i()),o.memoizedState=o.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:su,lastRenderedState:i},o.queue=i,i=i.dispatch=WM.bind(null,xn,i),[o.memoizedState,i]}function ou(i,o,u,d){return i={tag:i,create:o,destroy:u,deps:d,next:null},o=xn.updateQueue,o===null?(o={lastEffect:null,stores:null},xn.updateQueue=o,o.lastEffect=i.next=i):(u=o.lastEffect,u===null?o.lastEffect=i.next=i:(d=u.next,u.next=i,i.next=d,o.lastEffect=i)),i}function b_(){return mr().memoizedState}function Wc(i,o,u,d){var _=Xr();xn.flags|=i,_.memoizedState=ou(1|o,u,void 0,d===void 0?null:d)}function Xc(i,o,u,d){var _=mr();d=d===void 0?null:d;var S=void 0;if(zn!==null){var C=zn.memoizedState;if(S=C.destroy,d!==null&&Th(d,C.deps)){_.memoizedState=ou(o,u,S,d);return}}xn.flags|=i,_.memoizedState=ou(1|o,u,S,d)}function C_(i,o){return Wc(8390656,8,i,o)}function Rh(i,o){return Xc(2048,8,i,o)}function R_(i,o){return Xc(4,2,i,o)}function P_(i,o){return Xc(4,4,i,o)}function D_(i,o){if(typeof o=="function")return i=i(),o(i),function(){o(null)};if(o!=null)return i=i(),o.current=i,function(){o.current=null}}function L_(i,o,u){return u=u!=null?u.concat([i]):null,Xc(4,4,D_.bind(null,o,i),u)}function Ph(){}function I_(i,o){var u=mr();o=o===void 0?null:o;var d=u.memoizedState;return d!==null&&o!==null&&Th(o,d[1])?d[0]:(u.memoizedState=[i,o],i)}function N_(i,o){var u=mr();o=o===void 0?null:o;var d=u.memoizedState;return d!==null&&o!==null&&Th(o,d[1])?d[0]:(i=i(),u.memoizedState=[i,o],i)}function U_(i,o,u){return(Fo&21)===0?(i.baseState&&(i.baseState=!1,Ui=!0),i.memoizedState=u):(br(u,o)||(u=li(),xn.lanes|=u,Oo|=u,i.baseState=!0),o)}function HM(i,o){var u=At;At=u!==0&&4>u?u:4,i(!0);var d=Eh.transition;Eh.transition={};try{i(!1),o()}finally{At=u,Eh.transition=d}}function F_(){return mr().memoizedState}function GM(i,o,u){var d=eo(i);if(u={lane:d,action:u,hasEagerState:!1,eagerState:null,next:null},O_(i))k_(o,u);else if(u=p_(i,o,u,d),u!==null){var _=Ti();Lr(u,i,d,_),z_(u,o,d)}}function WM(i,o,u){var d=eo(i),_={lane:d,action:u,hasEagerState:!1,eagerState:null,next:null};if(O_(i))k_(o,_);else{var S=i.alternate;if(i.lanes===0&&(S===null||S.lanes===0)&&(S=o.lastRenderedReducer,S!==null))try{var C=o.lastRenderedState,B=S(C,u);if(_.hasEagerState=!0,_.eagerState=B,br(B,C)){var j=o.interleaved;j===null?(_.next=_,_h(o)):(_.next=j.next,j.next=_),o.interleaved=_;return}}catch{}finally{}u=p_(i,o,_,d),u!==null&&(_=Ti(),Lr(u,i,d,_),z_(u,o,d))}}function O_(i){var o=i.alternate;return i===xn||o!==null&&o===xn}function k_(i,o){iu=Gc=!0;var u=i.pending;u===null?o.next=o:(o.next=u.next,u.next=o),i.pending=o}function z_(i,o,u){if((u&4194240)!==0){var d=o.lanes;d&=i.pendingLanes,u|=d,o.lanes=u,Jt(i,u)}}var jc={readContext:pr,useCallback:ci,useContext:ci,useEffect:ci,useImperativeHandle:ci,useInsertionEffect:ci,useLayoutEffect:ci,useMemo:ci,useReducer:ci,useRef:ci,useState:ci,useDebugValue:ci,useDeferredValue:ci,useTransition:ci,useMutableSource:ci,useSyncExternalStore:ci,useId:ci,unstable_isNewReconciler:!1},XM={readContext:pr,useCallback:function(i,o){return Xr().memoizedState=[i,o===void 0?null:o],i},useContext:pr,useEffect:C_,useImperativeHandle:function(i,o,u){return u=u!=null?u.concat([i]):null,Wc(4194308,4,D_.bind(null,o,i),u)},useLayoutEffect:function(i,o){return Wc(4194308,4,i,o)},useInsertionEffect:function(i,o){return Wc(4,2,i,o)},useMemo:function(i,o){var u=Xr();return o=o===void 0?null:o,i=i(),u.memoizedState=[i,o],i},useReducer:function(i,o,u){var d=Xr();return o=u!==void 0?u(o):o,d.memoizedState=d.baseState=o,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:o},d.queue=i,i=i.dispatch=GM.bind(null,xn,i),[d.memoizedState,i]},useRef:function(i){var o=Xr();return i={current:i},o.memoizedState=i},useState:A_,useDebugValue:Ph,useDeferredValue:function(i){return Xr().memoizedState=i},useTransition:function(){var i=A_(!1),o=i[0];return i=HM.bind(null,i[1]),Xr().memoizedState=i,[o,i]},useMutableSource:function(){},useSyncExternalStore:function(i,o,u){var d=xn,_=Xr();if(gn){if(u===void 0)throw Error(t(407));u=u()}else{if(u=o(),$n===null)throw Error(t(349));(Fo&30)!==0||S_(d,o,u)}_.memoizedState=u;var S={value:u,getSnapshot:o};return _.queue=S,C_(E_.bind(null,d,S,i),[i]),d.flags|=2048,ou(9,M_.bind(null,d,S,u,o),void 0,null),u},useId:function(){var i=Xr(),o=$n.identifierPrefix;if(gn){var u=ds,d=fs;u=(d&~(1<<32-Qe(d)-1)).toString(32)+u,o=":"+o+"R"+u,u=ru++,0<u&&(o+="H"+u.toString(32)),o+=":"}else u=VM++,o=":"+o+"r"+u.toString(32)+":";return i.memoizedState=o},unstable_isNewReconciler:!1},jM={readContext:pr,useCallback:I_,useContext:pr,useEffect:Rh,useImperativeHandle:L_,useInsertionEffect:R_,useLayoutEffect:P_,useMemo:N_,useReducer:bh,useRef:b_,useState:function(){return bh(su)},useDebugValue:Ph,useDeferredValue:function(i){var o=mr();return U_(o,zn.memoizedState,i)},useTransition:function(){var i=bh(su)[0],o=mr().memoizedState;return[i,o]},useMutableSource:x_,useSyncExternalStore:y_,useId:F_,unstable_isNewReconciler:!1},YM={readContext:pr,useCallback:I_,useContext:pr,useEffect:Rh,useImperativeHandle:L_,useInsertionEffect:R_,useLayoutEffect:P_,useMemo:N_,useReducer:Ch,useRef:b_,useState:function(){return Ch(su)},useDebugValue:Ph,useDeferredValue:function(i){var o=mr();return zn===null?o.memoizedState=i:U_(o,zn.memoizedState,i)},useTransition:function(){var i=Ch(su)[0],o=mr().memoizedState;return[i,o]},useMutableSource:x_,useSyncExternalStore:y_,useId:F_,unstable_isNewReconciler:!1};function Rr(i,o){if(i&&i.defaultProps){o=U({},o),i=i.defaultProps;for(var u in i)o[u]===void 0&&(o[u]=i[u]);return o}return o}function Dh(i,o,u,d){o=i.memoizedState,u=u(d,o),u=u==null?o:U({},o,u),i.memoizedState=u,i.lanes===0&&(i.updateQueue.baseState=u)}var Yc={isMounted:function(i){return(i=i._reactInternals)?Pt(i)===i:!1},enqueueSetState:function(i,o,u){i=i._reactInternals;var d=Ti(),_=eo(i),S=ps(d,_);S.payload=o,u!=null&&(S.callback=u),o=Ks(i,S,_),o!==null&&(Lr(o,i,_,d),zc(o,i,_))},enqueueReplaceState:function(i,o,u){i=i._reactInternals;var d=Ti(),_=eo(i),S=ps(d,_);S.tag=1,S.payload=o,u!=null&&(S.callback=u),o=Ks(i,S,_),o!==null&&(Lr(o,i,_,d),zc(o,i,_))},enqueueForceUpdate:function(i,o){i=i._reactInternals;var u=Ti(),d=eo(i),_=ps(u,d);_.tag=2,o!=null&&(_.callback=o),o=Ks(i,_,d),o!==null&&(Lr(o,i,d,u),zc(o,i,d))}};function B_(i,o,u,d,_,S,C){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(d,S,C):o.prototype&&o.prototype.isPureReactComponent?!jl(u,d)||!jl(_,S):!0}function V_(i,o,u){var d=!1,_=Ys,S=o.contextType;return typeof S=="object"&&S!==null?S=pr(S):(_=Ni(o)?Do:ui.current,d=o.contextTypes,S=(d=d!=null)?Ca(i,_):Ys),o=new o(u,S),i.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Yc,i.stateNode=o,o._reactInternals=i,d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=_,i.__reactInternalMemoizedMaskedChildContext=S),o}function H_(i,o,u,d){i=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(u,d),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(u,d),o.state!==i&&Yc.enqueueReplaceState(o,o.state,null)}function Lh(i,o,u,d){var _=i.stateNode;_.props=u,_.state=i.memoizedState,_.refs={},vh(i);var S=o.contextType;typeof S=="object"&&S!==null?_.context=pr(S):(S=Ni(o)?Do:ui.current,_.context=Ca(i,S)),_.state=i.memoizedState,S=o.getDerivedStateFromProps,typeof S=="function"&&(Dh(i,o,S,u),_.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof _.getSnapshotBeforeUpdate=="function"||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(o=_.state,typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount(),o!==_.state&&Yc.enqueueReplaceState(_,_.state,null),Bc(i,u,_,d),_.state=i.memoizedState),typeof _.componentDidMount=="function"&&(i.flags|=4194308)}function Fa(i,o){try{var u="",d=o;do u+=Oe(d),d=d.return;while(d);var _=u}catch(S){_=`
Error generating stack: `+S.message+`
`+S.stack}return{value:i,source:o,stack:_,digest:null}}function Ih(i,o,u){return{value:i,source:null,stack:u??null,digest:o??null}}function Nh(i,o){try{console.error(o.value)}catch(u){setTimeout(function(){throw u})}}var qM=typeof WeakMap=="function"?WeakMap:Map;function G_(i,o,u){u=ps(-1,u),u.tag=3,u.payload={element:null};var d=o.value;return u.callback=function(){ef||(ef=!0,$h=d),Nh(i,o)},u}function W_(i,o,u){u=ps(-1,u),u.tag=3;var d=i.type.getDerivedStateFromError;if(typeof d=="function"){var _=o.value;u.payload=function(){return d(_)},u.callback=function(){Nh(i,o)}}var S=i.stateNode;return S!==null&&typeof S.componentDidCatch=="function"&&(u.callback=function(){Nh(i,o),typeof d!="function"&&(Qs===null?Qs=new Set([this]):Qs.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})}),u}function X_(i,o,u){var d=i.pingCache;if(d===null){d=i.pingCache=new qM;var _=new Set;d.set(o,_)}else _=d.get(o),_===void 0&&(_=new Set,d.set(o,_));_.has(u)||(_.add(u),i=lE.bind(null,i,o,u),o.then(i,i))}function j_(i){do{var o;if((o=i.tag===13)&&(o=i.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return i;i=i.return}while(i!==null);return null}function Y_(i,o,u,d,_){return(i.mode&1)===0?(i===o?i.flags|=65536:(i.flags|=128,u.flags|=131072,u.flags&=-52805,u.tag===1&&(u.alternate===null?u.tag=17:(o=ps(-1,1),o.tag=2,Ks(u,o,1))),u.lanes|=1),i):(i.flags|=65536,i.lanes=_,i)}var $M=A.ReactCurrentOwner,Ui=!1;function Ei(i,o,u,d){o.child=i===null?h_(o,null,u,d):La(o,i.child,u,d)}function q_(i,o,u,d,_){u=u.render;var S=o.ref;return Na(o,_),d=wh(i,o,u,d,S,_),u=Ah(),i!==null&&!Ui?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~_,ms(i,o,_)):(gn&&u&&lh(o),o.flags|=1,Ei(i,o,d,_),o.child)}function $_(i,o,u,d,_){if(i===null){var S=u.type;return typeof S=="function"&&!np(S)&&S.defaultProps===void 0&&u.compare===null&&u.defaultProps===void 0?(o.tag=15,o.type=S,K_(i,o,S,d,_)):(i=af(u.type,null,d,o,o.mode,_),i.ref=o.ref,i.return=o,o.child=i)}if(S=i.child,(i.lanes&_)===0){var C=S.memoizedProps;if(u=u.compare,u=u!==null?u:jl,u(C,d)&&i.ref===o.ref)return ms(i,o,_)}return o.flags|=1,i=no(S,d),i.ref=o.ref,i.return=o,o.child=i}function K_(i,o,u,d,_){if(i!==null){var S=i.memoizedProps;if(jl(S,d)&&i.ref===o.ref)if(Ui=!1,o.pendingProps=d=S,(i.lanes&_)!==0)(i.flags&131072)!==0&&(Ui=!0);else return o.lanes=i.lanes,ms(i,o,_)}return Uh(i,o,u,d,_)}function Z_(i,o,u){var d=o.pendingProps,_=d.children,S=i!==null?i.memoizedState:null;if(d.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},dn(ka,Zi),Zi|=u;else{if((u&1073741824)===0)return i=S!==null?S.baseLanes|u:u,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:i,cachePool:null,transitions:null},o.updateQueue=null,dn(ka,Zi),Zi|=i,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=S!==null?S.baseLanes:u,dn(ka,Zi),Zi|=d}else S!==null?(d=S.baseLanes|u,o.memoizedState=null):d=u,dn(ka,Zi),Zi|=d;return Ei(i,o,_,u),o.child}function Q_(i,o){var u=o.ref;(i===null&&u!==null||i!==null&&i.ref!==u)&&(o.flags|=512,o.flags|=2097152)}function Uh(i,o,u,d,_){var S=Ni(u)?Do:ui.current;return S=Ca(o,S),Na(o,_),u=wh(i,o,u,d,S,_),d=Ah(),i!==null&&!Ui?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~_,ms(i,o,_)):(gn&&d&&lh(o),o.flags|=1,Ei(i,o,u,_),o.child)}function J_(i,o,u,d,_){if(Ni(u)){var S=!0;Dc(o)}else S=!1;if(Na(o,_),o.stateNode===null)$c(i,o),V_(o,u,d),Lh(o,u,d,_),d=!0;else if(i===null){var C=o.stateNode,B=o.memoizedProps;C.props=B;var j=C.context,fe=u.contextType;typeof fe=="object"&&fe!==null?fe=pr(fe):(fe=Ni(u)?Do:ui.current,fe=Ca(o,fe));var Se=u.getDerivedStateFromProps,Te=typeof Se=="function"||typeof C.getSnapshotBeforeUpdate=="function";Te||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(B!==d||j!==fe)&&H_(o,C,d,fe),$s=!1;var ye=o.memoizedState;C.state=ye,Bc(o,d,C,_),j=o.memoizedState,B!==d||ye!==j||Ii.current||$s?(typeof Se=="function"&&(Dh(o,u,Se,d),j=o.memoizedState),(B=$s||B_(o,u,B,d,ye,j,fe))?(Te||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount()),typeof C.componentDidMount=="function"&&(o.flags|=4194308)):(typeof C.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=d,o.memoizedState=j),C.props=d,C.state=j,C.context=fe,d=B):(typeof C.componentDidMount=="function"&&(o.flags|=4194308),d=!1)}else{C=o.stateNode,m_(i,o),B=o.memoizedProps,fe=o.type===o.elementType?B:Rr(o.type,B),C.props=fe,Te=o.pendingProps,ye=C.context,j=u.contextType,typeof j=="object"&&j!==null?j=pr(j):(j=Ni(u)?Do:ui.current,j=Ca(o,j));var Ze=u.getDerivedStateFromProps;(Se=typeof Ze=="function"||typeof C.getSnapshotBeforeUpdate=="function")||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(B!==Te||ye!==j)&&H_(o,C,d,j),$s=!1,ye=o.memoizedState,C.state=ye,Bc(o,d,C,_);var nt=o.memoizedState;B!==Te||ye!==nt||Ii.current||$s?(typeof Ze=="function"&&(Dh(o,u,Ze,d),nt=o.memoizedState),(fe=$s||B_(o,u,fe,d,ye,nt,j)||!1)?(Se||typeof C.UNSAFE_componentWillUpdate!="function"&&typeof C.componentWillUpdate!="function"||(typeof C.componentWillUpdate=="function"&&C.componentWillUpdate(d,nt,j),typeof C.UNSAFE_componentWillUpdate=="function"&&C.UNSAFE_componentWillUpdate(d,nt,j)),typeof C.componentDidUpdate=="function"&&(o.flags|=4),typeof C.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof C.componentDidUpdate!="function"||B===i.memoizedProps&&ye===i.memoizedState||(o.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||B===i.memoizedProps&&ye===i.memoizedState||(o.flags|=1024),o.memoizedProps=d,o.memoizedState=nt),C.props=d,C.state=nt,C.context=j,d=fe):(typeof C.componentDidUpdate!="function"||B===i.memoizedProps&&ye===i.memoizedState||(o.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||B===i.memoizedProps&&ye===i.memoizedState||(o.flags|=1024),d=!1)}return Fh(i,o,u,d,S,_)}function Fh(i,o,u,d,_,S){Q_(i,o);var C=(o.flags&128)!==0;if(!d&&!C)return _&&r_(o,u,!1),ms(i,o,S);d=o.stateNode,$M.current=o;var B=C&&typeof u.getDerivedStateFromError!="function"?null:d.render();return o.flags|=1,i!==null&&C?(o.child=La(o,i.child,null,S),o.child=La(o,null,B,S)):Ei(i,o,B,S),o.memoizedState=d.state,_&&r_(o,u,!0),o.child}function ev(i){var o=i.stateNode;o.pendingContext?n_(i,o.pendingContext,o.pendingContext!==o.context):o.context&&n_(i,o.context,!1),xh(i,o.containerInfo)}function tv(i,o,u,d,_){return Da(),dh(_),o.flags|=256,Ei(i,o,u,d),o.child}var Oh={dehydrated:null,treeContext:null,retryLane:0};function kh(i){return{baseLanes:i,cachePool:null,transitions:null}}function nv(i,o,u){var d=o.pendingProps,_=vn.current,S=!1,C=(o.flags&128)!==0,B;if((B=C)||(B=i!==null&&i.memoizedState===null?!1:(_&2)!==0),B?(S=!0,o.flags&=-129):(i===null||i.memoizedState!==null)&&(_|=1),dn(vn,_&1),i===null)return fh(o),i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((o.mode&1)===0?o.lanes=1:i.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(C=d.children,i=d.fallback,S?(d=o.mode,S=o.child,C={mode:"hidden",children:C},(d&1)===0&&S!==null?(S.childLanes=0,S.pendingProps=C):S=lf(C,d,0,null),i=Vo(i,d,u,null),S.return=o,i.return=o,S.sibling=i,o.child=S,o.child.memoizedState=kh(u),o.memoizedState=Oh,i):zh(o,C));if(_=i.memoizedState,_!==null&&(B=_.dehydrated,B!==null))return KM(i,o,C,d,B,_,u);if(S){S=d.fallback,C=o.mode,_=i.child,B=_.sibling;var j={mode:"hidden",children:d.children};return(C&1)===0&&o.child!==_?(d=o.child,d.childLanes=0,d.pendingProps=j,o.deletions=null):(d=no(_,j),d.subtreeFlags=_.subtreeFlags&14680064),B!==null?S=no(B,S):(S=Vo(S,C,u,null),S.flags|=2),S.return=o,d.return=o,d.sibling=S,o.child=d,d=S,S=o.child,C=i.child.memoizedState,C=C===null?kh(u):{baseLanes:C.baseLanes|u,cachePool:null,transitions:C.transitions},S.memoizedState=C,S.childLanes=i.childLanes&~u,o.memoizedState=Oh,d}return S=i.child,i=S.sibling,d=no(S,{mode:"visible",children:d.children}),(o.mode&1)===0&&(d.lanes=u),d.return=o,d.sibling=null,i!==null&&(u=o.deletions,u===null?(o.deletions=[i],o.flags|=16):u.push(i)),o.child=d,o.memoizedState=null,d}function zh(i,o){return o=lf({mode:"visible",children:o},i.mode,0,null),o.return=i,i.child=o}function qc(i,o,u,d){return d!==null&&dh(d),La(o,i.child,null,u),i=zh(o,o.pendingProps.children),i.flags|=2,o.memoizedState=null,i}function KM(i,o,u,d,_,S,C){if(u)return o.flags&256?(o.flags&=-257,d=Ih(Error(t(422))),qc(i,o,C,d)):o.memoizedState!==null?(o.child=i.child,o.flags|=128,null):(S=d.fallback,_=o.mode,d=lf({mode:"visible",children:d.children},_,0,null),S=Vo(S,_,C,null),S.flags|=2,d.return=o,S.return=o,d.sibling=S,o.child=d,(o.mode&1)!==0&&La(o,i.child,null,C),o.child.memoizedState=kh(C),o.memoizedState=Oh,S);if((o.mode&1)===0)return qc(i,o,C,null);if(_.data==="$!"){if(d=_.nextSibling&&_.nextSibling.dataset,d)var B=d.dgst;return d=B,S=Error(t(419)),d=Ih(S,d,void 0),qc(i,o,C,d)}if(B=(C&i.childLanes)!==0,Ui||B){if(d=$n,d!==null){switch(C&-C){case 4:_=2;break;case 16:_=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:_=32;break;case 536870912:_=268435456;break;default:_=0}_=(_&(d.suspendedLanes|C))!==0?0:_,_!==0&&_!==S.retryLane&&(S.retryLane=_,hs(i,_),Lr(d,i,_,-1))}return tp(),d=Ih(Error(t(421))),qc(i,o,C,d)}return _.data==="$?"?(o.flags|=128,o.child=i.child,o=uE.bind(null,i),_._reactRetry=o,null):(i=S.treeContext,Ki=Xs(_.nextSibling),$i=o,gn=!0,Cr=null,i!==null&&(dr[hr++]=fs,dr[hr++]=ds,dr[hr++]=Lo,fs=i.id,ds=i.overflow,Lo=o),o=zh(o,d.children),o.flags|=4096,o)}function iv(i,o,u){i.lanes|=o;var d=i.alternate;d!==null&&(d.lanes|=o),gh(i.return,o,u)}function Bh(i,o,u,d,_){var S=i.memoizedState;S===null?i.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:d,tail:u,tailMode:_}:(S.isBackwards=o,S.rendering=null,S.renderingStartTime=0,S.last=d,S.tail=u,S.tailMode=_)}function rv(i,o,u){var d=o.pendingProps,_=d.revealOrder,S=d.tail;if(Ei(i,o,d.children,u),d=vn.current,(d&2)!==0)d=d&1|2,o.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=o.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&iv(i,u,o);else if(i.tag===19)iv(i,u,o);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===o)break e;for(;i.sibling===null;){if(i.return===null||i.return===o)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}d&=1}if(dn(vn,d),(o.mode&1)===0)o.memoizedState=null;else switch(_){case"forwards":for(u=o.child,_=null;u!==null;)i=u.alternate,i!==null&&Vc(i)===null&&(_=u),u=u.sibling;u=_,u===null?(_=o.child,o.child=null):(_=u.sibling,u.sibling=null),Bh(o,!1,_,u,S);break;case"backwards":for(u=null,_=o.child,o.child=null;_!==null;){if(i=_.alternate,i!==null&&Vc(i)===null){o.child=_;break}i=_.sibling,_.sibling=u,u=_,_=i}Bh(o,!0,u,null,S);break;case"together":Bh(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function $c(i,o){(o.mode&1)===0&&i!==null&&(i.alternate=null,o.alternate=null,o.flags|=2)}function ms(i,o,u){if(i!==null&&(o.dependencies=i.dependencies),Oo|=o.lanes,(u&o.childLanes)===0)return null;if(i!==null&&o.child!==i.child)throw Error(t(153));if(o.child!==null){for(i=o.child,u=no(i,i.pendingProps),o.child=u,u.return=o;i.sibling!==null;)i=i.sibling,u=u.sibling=no(i,i.pendingProps),u.return=o;u.sibling=null}return o.child}function ZM(i,o,u){switch(o.tag){case 3:ev(o),Da();break;case 5:v_(o);break;case 1:Ni(o.type)&&Dc(o);break;case 4:xh(o,o.stateNode.containerInfo);break;case 10:var d=o.type._context,_=o.memoizedProps.value;dn(Oc,d._currentValue),d._currentValue=_;break;case 13:if(d=o.memoizedState,d!==null)return d.dehydrated!==null?(dn(vn,vn.current&1),o.flags|=128,null):(u&o.child.childLanes)!==0?nv(i,o,u):(dn(vn,vn.current&1),i=ms(i,o,u),i!==null?i.sibling:null);dn(vn,vn.current&1);break;case 19:if(d=(u&o.childLanes)!==0,(i.flags&128)!==0){if(d)return rv(i,o,u);o.flags|=128}if(_=o.memoizedState,_!==null&&(_.rendering=null,_.tail=null,_.lastEffect=null),dn(vn,vn.current),d)break;return null;case 22:case 23:return o.lanes=0,Z_(i,o,u)}return ms(i,o,u)}var sv,Vh,ov,av;sv=function(i,o){for(var u=o.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===o)break;for(;u.sibling===null;){if(u.return===null||u.return===o)return;u=u.return}u.sibling.return=u.return,u=u.sibling}},Vh=function(){},ov=function(i,o,u,d){var _=i.memoizedProps;if(_!==d){i=o.stateNode,Uo(Wr.current);var S=null;switch(u){case"input":_=dt(i,_),d=dt(i,d),S=[];break;case"select":_=U({},_,{value:void 0}),d=U({},d,{value:void 0}),S=[];break;case"textarea":_=We(i,_),d=We(i,d),S=[];break;default:typeof _.onClick!="function"&&typeof d.onClick=="function"&&(i.onclick=Cc)}Ke(u,d);var C;u=null;for(fe in _)if(!d.hasOwnProperty(fe)&&_.hasOwnProperty(fe)&&_[fe]!=null)if(fe==="style"){var B=_[fe];for(C in B)B.hasOwnProperty(C)&&(u||(u={}),u[C]="")}else fe!=="dangerouslySetInnerHTML"&&fe!=="children"&&fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&fe!=="autoFocus"&&(r.hasOwnProperty(fe)?S||(S=[]):(S=S||[]).push(fe,null));for(fe in d){var j=d[fe];if(B=_!=null?_[fe]:void 0,d.hasOwnProperty(fe)&&j!==B&&(j!=null||B!=null))if(fe==="style")if(B){for(C in B)!B.hasOwnProperty(C)||j&&j.hasOwnProperty(C)||(u||(u={}),u[C]="");for(C in j)j.hasOwnProperty(C)&&B[C]!==j[C]&&(u||(u={}),u[C]=j[C])}else u||(S||(S=[]),S.push(fe,u)),u=j;else fe==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,B=B?B.__html:void 0,j!=null&&B!==j&&(S=S||[]).push(fe,j)):fe==="children"?typeof j!="string"&&typeof j!="number"||(S=S||[]).push(fe,""+j):fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&(r.hasOwnProperty(fe)?(j!=null&&fe==="onScroll"&&pn("scroll",i),S||B===j||(S=[])):(S=S||[]).push(fe,j))}u&&(S=S||[]).push("style",u);var fe=S;(o.updateQueue=fe)&&(o.flags|=4)}},av=function(i,o,u,d){u!==d&&(o.flags|=4)};function au(i,o){if(!gn)switch(i.tailMode){case"hidden":o=i.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i.tail=null:u.sibling=null;break;case"collapsed":u=i.tail;for(var d=null;u!==null;)u.alternate!==null&&(d=u),u=u.sibling;d===null?o||i.tail===null?i.tail=null:i.tail.sibling=null:d.sibling=null}}function fi(i){var o=i.alternate!==null&&i.alternate.child===i.child,u=0,d=0;if(o)for(var _=i.child;_!==null;)u|=_.lanes|_.childLanes,d|=_.subtreeFlags&14680064,d|=_.flags&14680064,_.return=i,_=_.sibling;else for(_=i.child;_!==null;)u|=_.lanes|_.childLanes,d|=_.subtreeFlags,d|=_.flags,_.return=i,_=_.sibling;return i.subtreeFlags|=d,i.childLanes=u,o}function QM(i,o,u){var d=o.pendingProps;switch(uh(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fi(o),null;case 1:return Ni(o.type)&&Pc(),fi(o),null;case 3:return d=o.stateNode,Ua(),mn(Ii),mn(ui),Mh(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(i===null||i.child===null)&&(Uc(o)?o.flags|=4:i===null||i.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,Cr!==null&&(Qh(Cr),Cr=null))),Vh(i,o),fi(o),null;case 5:yh(o);var _=Uo(nu.current);if(u=o.type,i!==null&&o.stateNode!=null)ov(i,o,u,d,_),i.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!d){if(o.stateNode===null)throw Error(t(166));return fi(o),null}if(i=Uo(Wr.current),Uc(o)){d=o.stateNode,u=o.type;var S=o.memoizedProps;switch(d[Gr]=o,d[Zl]=S,i=(o.mode&1)!==0,u){case"dialog":pn("cancel",d),pn("close",d);break;case"iframe":case"object":case"embed":pn("load",d);break;case"video":case"audio":for(_=0;_<ql.length;_++)pn(ql[_],d);break;case"source":pn("error",d);break;case"img":case"image":case"link":pn("error",d),pn("load",d);break;case"details":pn("toggle",d);break;case"input":Tt(d,S),pn("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!S.multiple},pn("invalid",d);break;case"textarea":F(d,S),pn("invalid",d)}Ke(u,S),_=null;for(var C in S)if(S.hasOwnProperty(C)){var B=S[C];C==="children"?typeof B=="string"?d.textContent!==B&&(S.suppressHydrationWarning!==!0&&bc(d.textContent,B,i),_=["children",B]):typeof B=="number"&&d.textContent!==""+B&&(S.suppressHydrationWarning!==!0&&bc(d.textContent,B,i),_=["children",""+B]):r.hasOwnProperty(C)&&B!=null&&C==="onScroll"&&pn("scroll",d)}switch(u){case"input":mt(d),W(d,S,!0);break;case"textarea":mt(d),q(d);break;case"select":case"option":break;default:typeof S.onClick=="function"&&(d.onclick=Cc)}d=_,o.updateQueue=d,d!==null&&(o.flags|=4)}else{C=_.nodeType===9?_:_.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=pe(u)),i==="http://www.w3.org/1999/xhtml"?u==="script"?(i=C.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof d.is=="string"?i=C.createElement(u,{is:d.is}):(i=C.createElement(u),u==="select"&&(C=i,d.multiple?C.multiple=!0:d.size&&(C.size=d.size))):i=C.createElementNS(i,u),i[Gr]=o,i[Zl]=d,sv(i,o,!1,!1),o.stateNode=i;e:{switch(C=Ae(u,d),u){case"dialog":pn("cancel",i),pn("close",i),_=d;break;case"iframe":case"object":case"embed":pn("load",i),_=d;break;case"video":case"audio":for(_=0;_<ql.length;_++)pn(ql[_],i);_=d;break;case"source":pn("error",i),_=d;break;case"img":case"image":case"link":pn("error",i),pn("load",i),_=d;break;case"details":pn("toggle",i),_=d;break;case"input":Tt(i,d),_=dt(i,d),pn("invalid",i);break;case"option":_=d;break;case"select":i._wrapperState={wasMultiple:!!d.multiple},_=U({},d,{value:void 0}),pn("invalid",i);break;case"textarea":F(i,d),_=We(i,d),pn("invalid",i);break;default:_=d}Ke(u,_),B=_;for(S in B)if(B.hasOwnProperty(S)){var j=B[S];S==="style"?Ce(i,j):S==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,j!=null&&He(i,j)):S==="children"?typeof j=="string"?(u!=="textarea"||j!=="")&&we(i,j):typeof j=="number"&&we(i,""+j):S!=="suppressContentEditableWarning"&&S!=="suppressHydrationWarning"&&S!=="autoFocus"&&(r.hasOwnProperty(S)?j!=null&&S==="onScroll"&&pn("scroll",i):j!=null&&D(i,S,j,C))}switch(u){case"input":mt(i),W(i,d,!1);break;case"textarea":mt(i),q(i);break;case"option":d.value!=null&&i.setAttribute("value",""+_e(d.value));break;case"select":i.multiple=!!d.multiple,S=d.value,S!=null?ft(i,!!d.multiple,S,!1):d.defaultValue!=null&&ft(i,!!d.multiple,d.defaultValue,!0);break;default:typeof _.onClick=="function"&&(i.onclick=Cc)}switch(u){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return fi(o),null;case 6:if(i&&o.stateNode!=null)av(i,o,i.memoizedProps,d);else{if(typeof d!="string"&&o.stateNode===null)throw Error(t(166));if(u=Uo(nu.current),Uo(Wr.current),Uc(o)){if(d=o.stateNode,u=o.memoizedProps,d[Gr]=o,(S=d.nodeValue!==u)&&(i=$i,i!==null))switch(i.tag){case 3:bc(d.nodeValue,u,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&bc(d.nodeValue,u,(i.mode&1)!==0)}S&&(o.flags|=4)}else d=(u.nodeType===9?u:u.ownerDocument).createTextNode(d),d[Gr]=o,o.stateNode=d}return fi(o),null;case 13:if(mn(vn),d=o.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(gn&&Ki!==null&&(o.mode&1)!==0&&(o.flags&128)===0)c_(),Da(),o.flags|=98560,S=!1;else if(S=Uc(o),d!==null&&d.dehydrated!==null){if(i===null){if(!S)throw Error(t(318));if(S=o.memoizedState,S=S!==null?S.dehydrated:null,!S)throw Error(t(317));S[Gr]=o}else Da(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;fi(o),S=!1}else Cr!==null&&(Qh(Cr),Cr=null),S=!0;if(!S)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=u,o):(d=d!==null,d!==(i!==null&&i.memoizedState!==null)&&d&&(o.child.flags|=8192,(o.mode&1)!==0&&(i===null||(vn.current&1)!==0?Bn===0&&(Bn=3):tp())),o.updateQueue!==null&&(o.flags|=4),fi(o),null);case 4:return Ua(),Vh(i,o),i===null&&$l(o.stateNode.containerInfo),fi(o),null;case 10:return mh(o.type._context),fi(o),null;case 17:return Ni(o.type)&&Pc(),fi(o),null;case 19:if(mn(vn),S=o.memoizedState,S===null)return fi(o),null;if(d=(o.flags&128)!==0,C=S.rendering,C===null)if(d)au(S,!1);else{if(Bn!==0||i!==null&&(i.flags&128)!==0)for(i=o.child;i!==null;){if(C=Vc(i),C!==null){for(o.flags|=128,au(S,!1),d=C.updateQueue,d!==null&&(o.updateQueue=d,o.flags|=4),o.subtreeFlags=0,d=u,u=o.child;u!==null;)S=u,i=d,S.flags&=14680066,C=S.alternate,C===null?(S.childLanes=0,S.lanes=i,S.child=null,S.subtreeFlags=0,S.memoizedProps=null,S.memoizedState=null,S.updateQueue=null,S.dependencies=null,S.stateNode=null):(S.childLanes=C.childLanes,S.lanes=C.lanes,S.child=C.child,S.subtreeFlags=0,S.deletions=null,S.memoizedProps=C.memoizedProps,S.memoizedState=C.memoizedState,S.updateQueue=C.updateQueue,S.type=C.type,i=C.dependencies,S.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),u=u.sibling;return dn(vn,vn.current&1|2),o.child}i=i.sibling}S.tail!==null&&Dt()>za&&(o.flags|=128,d=!0,au(S,!1),o.lanes=4194304)}else{if(!d)if(i=Vc(C),i!==null){if(o.flags|=128,d=!0,u=i.updateQueue,u!==null&&(o.updateQueue=u,o.flags|=4),au(S,!0),S.tail===null&&S.tailMode==="hidden"&&!C.alternate&&!gn)return fi(o),null}else 2*Dt()-S.renderingStartTime>za&&u!==1073741824&&(o.flags|=128,d=!0,au(S,!1),o.lanes=4194304);S.isBackwards?(C.sibling=o.child,o.child=C):(u=S.last,u!==null?u.sibling=C:o.child=C,S.last=C)}return S.tail!==null?(o=S.tail,S.rendering=o,S.tail=o.sibling,S.renderingStartTime=Dt(),o.sibling=null,u=vn.current,dn(vn,d?u&1|2:u&1),o):(fi(o),null);case 22:case 23:return ep(),d=o.memoizedState!==null,i!==null&&i.memoizedState!==null!==d&&(o.flags|=8192),d&&(o.mode&1)!==0?(Zi&1073741824)!==0&&(fi(o),o.subtreeFlags&6&&(o.flags|=8192)):fi(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function JM(i,o){switch(uh(o),o.tag){case 1:return Ni(o.type)&&Pc(),i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 3:return Ua(),mn(Ii),mn(ui),Mh(),i=o.flags,(i&65536)!==0&&(i&128)===0?(o.flags=i&-65537|128,o):null;case 5:return yh(o),null;case 13:if(mn(vn),i=o.memoizedState,i!==null&&i.dehydrated!==null){if(o.alternate===null)throw Error(t(340));Da()}return i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 19:return mn(vn),null;case 4:return Ua(),null;case 10:return mh(o.type._context),null;case 22:case 23:return ep(),null;case 24:return null;default:return null}}var Kc=!1,di=!1,eE=typeof WeakSet=="function"?WeakSet:Set,Je=null;function Oa(i,o){var u=i.ref;if(u!==null)if(typeof u=="function")try{u(null)}catch(d){An(i,o,d)}else u.current=null}function Hh(i,o,u){try{u()}catch(d){An(i,o,d)}}var lv=!1;function tE(i,o){if(eh=gc,i=B0(),jd(i)){if("selectionStart"in i)var u={start:i.selectionStart,end:i.selectionEnd};else e:{u=(u=i.ownerDocument)&&u.defaultView||window;var d=u.getSelection&&u.getSelection();if(d&&d.rangeCount!==0){u=d.anchorNode;var _=d.anchorOffset,S=d.focusNode;d=d.focusOffset;try{u.nodeType,S.nodeType}catch{u=null;break e}var C=0,B=-1,j=-1,fe=0,Se=0,Te=i,ye=null;t:for(;;){for(var Ze;Te!==u||_!==0&&Te.nodeType!==3||(B=C+_),Te!==S||d!==0&&Te.nodeType!==3||(j=C+d),Te.nodeType===3&&(C+=Te.nodeValue.length),(Ze=Te.firstChild)!==null;)ye=Te,Te=Ze;for(;;){if(Te===i)break t;if(ye===u&&++fe===_&&(B=C),ye===S&&++Se===d&&(j=C),(Ze=Te.nextSibling)!==null)break;Te=ye,ye=Te.parentNode}Te=Ze}u=B===-1||j===-1?null:{start:B,end:j}}else u=null}u=u||{start:0,end:0}}else u=null;for(th={focusedElem:i,selectionRange:u},gc=!1,Je=o;Je!==null;)if(o=Je,i=o.child,(o.subtreeFlags&1028)!==0&&i!==null)i.return=o,Je=i;else for(;Je!==null;){o=Je;try{var nt=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(nt!==null){var rt=nt.memoizedProps,Rn=nt.memoizedState,ie=o.stateNode,$=ie.getSnapshotBeforeUpdate(o.elementType===o.type?rt:Rr(o.type,rt),Rn);ie.__reactInternalSnapshotBeforeUpdate=$}break;case 3:var ae=o.stateNode.containerInfo;ae.nodeType===1?ae.textContent="":ae.nodeType===9&&ae.documentElement&&ae.removeChild(ae.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Le){An(o,o.return,Le)}if(i=o.sibling,i!==null){i.return=o.return,Je=i;break}Je=o.return}return nt=lv,lv=!1,nt}function lu(i,o,u){var d=o.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var _=d=d.next;do{if((_.tag&i)===i){var S=_.destroy;_.destroy=void 0,S!==void 0&&Hh(o,u,S)}_=_.next}while(_!==d)}}function Zc(i,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var u=o=o.next;do{if((u.tag&i)===i){var d=u.create;u.destroy=d()}u=u.next}while(u!==o)}}function Gh(i){var o=i.ref;if(o!==null){var u=i.stateNode;switch(i.tag){case 5:i=u;break;default:i=u}typeof o=="function"?o(i):o.current=i}}function uv(i){var o=i.alternate;o!==null&&(i.alternate=null,uv(o)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(o=i.stateNode,o!==null&&(delete o[Gr],delete o[Zl],delete o[sh],delete o[OM],delete o[kM])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function cv(i){return i.tag===5||i.tag===3||i.tag===4}function fv(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||cv(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Wh(i,o,u){var d=i.tag;if(d===5||d===6)i=i.stateNode,o?u.nodeType===8?u.parentNode.insertBefore(i,o):u.insertBefore(i,o):(u.nodeType===8?(o=u.parentNode,o.insertBefore(i,u)):(o=u,o.appendChild(i)),u=u._reactRootContainer,u!=null||o.onclick!==null||(o.onclick=Cc));else if(d!==4&&(i=i.child,i!==null))for(Wh(i,o,u),i=i.sibling;i!==null;)Wh(i,o,u),i=i.sibling}function Xh(i,o,u){var d=i.tag;if(d===5||d===6)i=i.stateNode,o?u.insertBefore(i,o):u.appendChild(i);else if(d!==4&&(i=i.child,i!==null))for(Xh(i,o,u),i=i.sibling;i!==null;)Xh(i,o,u),i=i.sibling}var ni=null,Pr=!1;function Zs(i,o,u){for(u=u.child;u!==null;)dv(i,o,u),u=u.sibling}function dv(i,o,u){if(De&&typeof De.onCommitFiberUnmount=="function")try{De.onCommitFiberUnmount(ze,u)}catch{}switch(u.tag){case 5:di||Oa(u,o);case 6:var d=ni,_=Pr;ni=null,Zs(i,o,u),ni=d,Pr=_,ni!==null&&(Pr?(i=ni,u=u.stateNode,i.nodeType===8?i.parentNode.removeChild(u):i.removeChild(u)):ni.removeChild(u.stateNode));break;case 18:ni!==null&&(Pr?(i=ni,u=u.stateNode,i.nodeType===8?rh(i.parentNode,u):i.nodeType===1&&rh(i,u),Bl(i)):rh(ni,u.stateNode));break;case 4:d=ni,_=Pr,ni=u.stateNode.containerInfo,Pr=!0,Zs(i,o,u),ni=d,Pr=_;break;case 0:case 11:case 14:case 15:if(!di&&(d=u.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){_=d=d.next;do{var S=_,C=S.destroy;S=S.tag,C!==void 0&&((S&2)!==0||(S&4)!==0)&&Hh(u,o,C),_=_.next}while(_!==d)}Zs(i,o,u);break;case 1:if(!di&&(Oa(u,o),d=u.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=u.memoizedProps,d.state=u.memoizedState,d.componentWillUnmount()}catch(B){An(u,o,B)}Zs(i,o,u);break;case 21:Zs(i,o,u);break;case 22:u.mode&1?(di=(d=di)||u.memoizedState!==null,Zs(i,o,u),di=d):Zs(i,o,u);break;default:Zs(i,o,u)}}function hv(i){var o=i.updateQueue;if(o!==null){i.updateQueue=null;var u=i.stateNode;u===null&&(u=i.stateNode=new eE),o.forEach(function(d){var _=cE.bind(null,i,d);u.has(d)||(u.add(d),d.then(_,_))})}}function Dr(i,o){var u=o.deletions;if(u!==null)for(var d=0;d<u.length;d++){var _=u[d];try{var S=i,C=o,B=C;e:for(;B!==null;){switch(B.tag){case 5:ni=B.stateNode,Pr=!1;break e;case 3:ni=B.stateNode.containerInfo,Pr=!0;break e;case 4:ni=B.stateNode.containerInfo,Pr=!0;break e}B=B.return}if(ni===null)throw Error(t(160));dv(S,C,_),ni=null,Pr=!1;var j=_.alternate;j!==null&&(j.return=null),_.return=null}catch(fe){An(_,o,fe)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)pv(o,i),o=o.sibling}function pv(i,o){var u=i.alternate,d=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Dr(o,i),jr(i),d&4){try{lu(3,i,i.return),Zc(3,i)}catch(rt){An(i,i.return,rt)}try{lu(5,i,i.return)}catch(rt){An(i,i.return,rt)}}break;case 1:Dr(o,i),jr(i),d&512&&u!==null&&Oa(u,u.return);break;case 5:if(Dr(o,i),jr(i),d&512&&u!==null&&Oa(u,u.return),i.flags&32){var _=i.stateNode;try{we(_,"")}catch(rt){An(i,i.return,rt)}}if(d&4&&(_=i.stateNode,_!=null)){var S=i.memoizedProps,C=u!==null?u.memoizedProps:S,B=i.type,j=i.updateQueue;if(i.updateQueue=null,j!==null)try{B==="input"&&S.type==="radio"&&S.name!=null&&ct(_,S),Ae(B,C);var fe=Ae(B,S);for(C=0;C<j.length;C+=2){var Se=j[C],Te=j[C+1];Se==="style"?Ce(_,Te):Se==="dangerouslySetInnerHTML"?He(_,Te):Se==="children"?we(_,Te):D(_,Se,Te,fe)}switch(B){case"input":oe(_,S);break;case"textarea":w(_,S);break;case"select":var ye=_._wrapperState.wasMultiple;_._wrapperState.wasMultiple=!!S.multiple;var Ze=S.value;Ze!=null?ft(_,!!S.multiple,Ze,!1):ye!==!!S.multiple&&(S.defaultValue!=null?ft(_,!!S.multiple,S.defaultValue,!0):ft(_,!!S.multiple,S.multiple?[]:"",!1))}_[Zl]=S}catch(rt){An(i,i.return,rt)}}break;case 6:if(Dr(o,i),jr(i),d&4){if(i.stateNode===null)throw Error(t(162));_=i.stateNode,S=i.memoizedProps;try{_.nodeValue=S}catch(rt){An(i,i.return,rt)}}break;case 3:if(Dr(o,i),jr(i),d&4&&u!==null&&u.memoizedState.isDehydrated)try{Bl(o.containerInfo)}catch(rt){An(i,i.return,rt)}break;case 4:Dr(o,i),jr(i);break;case 13:Dr(o,i),jr(i),_=i.child,_.flags&8192&&(S=_.memoizedState!==null,_.stateNode.isHidden=S,!S||_.alternate!==null&&_.alternate.memoizedState!==null||(qh=Dt())),d&4&&hv(i);break;case 22:if(Se=u!==null&&u.memoizedState!==null,i.mode&1?(di=(fe=di)||Se,Dr(o,i),di=fe):Dr(o,i),jr(i),d&8192){if(fe=i.memoizedState!==null,(i.stateNode.isHidden=fe)&&!Se&&(i.mode&1)!==0)for(Je=i,Se=i.child;Se!==null;){for(Te=Je=Se;Je!==null;){switch(ye=Je,Ze=ye.child,ye.tag){case 0:case 11:case 14:case 15:lu(4,ye,ye.return);break;case 1:Oa(ye,ye.return);var nt=ye.stateNode;if(typeof nt.componentWillUnmount=="function"){d=ye,u=ye.return;try{o=d,nt.props=o.memoizedProps,nt.state=o.memoizedState,nt.componentWillUnmount()}catch(rt){An(d,u,rt)}}break;case 5:Oa(ye,ye.return);break;case 22:if(ye.memoizedState!==null){_v(Te);continue}}Ze!==null?(Ze.return=ye,Je=Ze):_v(Te)}Se=Se.sibling}e:for(Se=null,Te=i;;){if(Te.tag===5){if(Se===null){Se=Te;try{_=Te.stateNode,fe?(S=_.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none"):(B=Te.stateNode,j=Te.memoizedProps.style,C=j!=null&&j.hasOwnProperty("display")?j.display:null,B.style.display=Me("display",C))}catch(rt){An(i,i.return,rt)}}}else if(Te.tag===6){if(Se===null)try{Te.stateNode.nodeValue=fe?"":Te.memoizedProps}catch(rt){An(i,i.return,rt)}}else if((Te.tag!==22&&Te.tag!==23||Te.memoizedState===null||Te===i)&&Te.child!==null){Te.child.return=Te,Te=Te.child;continue}if(Te===i)break e;for(;Te.sibling===null;){if(Te.return===null||Te.return===i)break e;Se===Te&&(Se=null),Te=Te.return}Se===Te&&(Se=null),Te.sibling.return=Te.return,Te=Te.sibling}}break;case 19:Dr(o,i),jr(i),d&4&&hv(i);break;case 21:break;default:Dr(o,i),jr(i)}}function jr(i){var o=i.flags;if(o&2){try{e:{for(var u=i.return;u!==null;){if(cv(u)){var d=u;break e}u=u.return}throw Error(t(160))}switch(d.tag){case 5:var _=d.stateNode;d.flags&32&&(we(_,""),d.flags&=-33);var S=fv(i);Xh(i,S,_);break;case 3:case 4:var C=d.stateNode.containerInfo,B=fv(i);Wh(i,B,C);break;default:throw Error(t(161))}}catch(j){An(i,i.return,j)}i.flags&=-3}o&4096&&(i.flags&=-4097)}function nE(i,o,u){Je=i,mv(i)}function mv(i,o,u){for(var d=(i.mode&1)!==0;Je!==null;){var _=Je,S=_.child;if(_.tag===22&&d){var C=_.memoizedState!==null||Kc;if(!C){var B=_.alternate,j=B!==null&&B.memoizedState!==null||di;B=Kc;var fe=di;if(Kc=C,(di=j)&&!fe)for(Je=_;Je!==null;)C=Je,j=C.child,C.tag===22&&C.memoizedState!==null?vv(_):j!==null?(j.return=C,Je=j):vv(_);for(;S!==null;)Je=S,mv(S),S=S.sibling;Je=_,Kc=B,di=fe}gv(i)}else(_.subtreeFlags&8772)!==0&&S!==null?(S.return=_,Je=S):gv(i)}}function gv(i){for(;Je!==null;){var o=Je;if((o.flags&8772)!==0){var u=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:di||Zc(5,o);break;case 1:var d=o.stateNode;if(o.flags&4&&!di)if(u===null)d.componentDidMount();else{var _=o.elementType===o.type?u.memoizedProps:Rr(o.type,u.memoizedProps);d.componentDidUpdate(_,u.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var S=o.updateQueue;S!==null&&__(o,S,d);break;case 3:var C=o.updateQueue;if(C!==null){if(u=null,o.child!==null)switch(o.child.tag){case 5:u=o.child.stateNode;break;case 1:u=o.child.stateNode}__(o,C,u)}break;case 5:var B=o.stateNode;if(u===null&&o.flags&4){u=B;var j=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":j.autoFocus&&u.focus();break;case"img":j.src&&(u.src=j.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var fe=o.alternate;if(fe!==null){var Se=fe.memoizedState;if(Se!==null){var Te=Se.dehydrated;Te!==null&&Bl(Te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}di||o.flags&512&&Gh(o)}catch(ye){An(o,o.return,ye)}}if(o===i){Je=null;break}if(u=o.sibling,u!==null){u.return=o.return,Je=u;break}Je=o.return}}function _v(i){for(;Je!==null;){var o=Je;if(o===i){Je=null;break}var u=o.sibling;if(u!==null){u.return=o.return,Je=u;break}Je=o.return}}function vv(i){for(;Je!==null;){var o=Je;try{switch(o.tag){case 0:case 11:case 15:var u=o.return;try{Zc(4,o)}catch(j){An(o,u,j)}break;case 1:var d=o.stateNode;if(typeof d.componentDidMount=="function"){var _=o.return;try{d.componentDidMount()}catch(j){An(o,_,j)}}var S=o.return;try{Gh(o)}catch(j){An(o,S,j)}break;case 5:var C=o.return;try{Gh(o)}catch(j){An(o,C,j)}}}catch(j){An(o,o.return,j)}if(o===i){Je=null;break}var B=o.sibling;if(B!==null){B.return=o.return,Je=B;break}Je=o.return}}var iE=Math.ceil,Qc=A.ReactCurrentDispatcher,jh=A.ReactCurrentOwner,gr=A.ReactCurrentBatchConfig,jt=0,$n=null,In=null,ii=0,Zi=0,ka=js(0),Bn=0,uu=null,Oo=0,Jc=0,Yh=0,cu=null,Fi=null,qh=0,za=1/0,gs=null,ef=!1,$h=null,Qs=null,tf=!1,Js=null,nf=0,fu=0,Kh=null,rf=-1,sf=0;function Ti(){return(jt&6)!==0?Dt():rf!==-1?rf:rf=Dt()}function eo(i){return(i.mode&1)===0?1:(jt&2)!==0&&ii!==0?ii&-ii:BM.transition!==null?(sf===0&&(sf=li()),sf):(i=At,i!==0||(i=window.event,i=i===void 0?16:y0(i.type)),i)}function Lr(i,o,u,d){if(50<fu)throw fu=0,Kh=null,Error(t(185));kn(i,u,d),((jt&2)===0||i!==$n)&&(i===$n&&((jt&2)===0&&(Jc|=u),Bn===4&&to(i,ii)),Oi(i,d),u===1&&jt===0&&(o.mode&1)===0&&(za=Dt()+500,Lc&&qs()))}function Oi(i,o){var u=i.callbackNode;Qt(i,o);var d=qt(i,i===$n?ii:0);if(d===0)u!==null&&Cn(u),i.callbackNode=null,i.callbackPriority=0;else if(o=d&-d,i.callbackPriority!==o){if(u!=null&&Cn(u),o===1)i.tag===0?zM(yv.bind(null,i)):s_(yv.bind(null,i)),UM(function(){(jt&6)===0&&qs()}),u=null;else{switch(Mi(d)){case 1:u=K;break;case 4:u=ue;break;case 16:u=le;break;case 536870912:u=Re;break;default:u=le}u=Cv(u,xv.bind(null,i))}i.callbackPriority=o,i.callbackNode=u}}function xv(i,o){if(rf=-1,sf=0,(jt&6)!==0)throw Error(t(327));var u=i.callbackNode;if(Ba()&&i.callbackNode!==u)return null;var d=qt(i,i===$n?ii:0);if(d===0)return null;if((d&30)!==0||(d&i.expiredLanes)!==0||o)o=of(i,d);else{o=d;var _=jt;jt|=2;var S=Mv();($n!==i||ii!==o)&&(gs=null,za=Dt()+500,zo(i,o));do try{oE();break}catch(B){Sv(i,B)}while(!0);ph(),Qc.current=S,jt=_,In!==null?o=0:($n=null,ii=0,o=Bn)}if(o!==0){if(o===2&&(_=zt(i),_!==0&&(d=_,o=Zh(i,_))),o===1)throw u=uu,zo(i,0),to(i,d),Oi(i,Dt()),u;if(o===6)to(i,d);else{if(_=i.current.alternate,(d&30)===0&&!rE(_)&&(o=of(i,d),o===2&&(S=zt(i),S!==0&&(d=S,o=Zh(i,S))),o===1))throw u=uu,zo(i,0),to(i,d),Oi(i,Dt()),u;switch(i.finishedWork=_,i.finishedLanes=d,o){case 0:case 1:throw Error(t(345));case 2:Bo(i,Fi,gs);break;case 3:if(to(i,d),(d&130023424)===d&&(o=qh+500-Dt(),10<o)){if(qt(i,0)!==0)break;if(_=i.suspendedLanes,(_&d)!==d){Ti(),i.pingedLanes|=i.suspendedLanes&_;break}i.timeoutHandle=ih(Bo.bind(null,i,Fi,gs),o);break}Bo(i,Fi,gs);break;case 4:if(to(i,d),(d&4194240)===d)break;for(o=i.eventTimes,_=-1;0<d;){var C=31-Qe(d);S=1<<C,C=o[C],C>_&&(_=C),d&=~S}if(d=_,d=Dt()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*iE(d/1960))-d,10<d){i.timeoutHandle=ih(Bo.bind(null,i,Fi,gs),d);break}Bo(i,Fi,gs);break;case 5:Bo(i,Fi,gs);break;default:throw Error(t(329))}}}return Oi(i,Dt()),i.callbackNode===u?xv.bind(null,i):null}function Zh(i,o){var u=cu;return i.current.memoizedState.isDehydrated&&(zo(i,o).flags|=256),i=of(i,o),i!==2&&(o=Fi,Fi=u,o!==null&&Qh(o)),i}function Qh(i){Fi===null?Fi=i:Fi.push.apply(Fi,i)}function rE(i){for(var o=i;;){if(o.flags&16384){var u=o.updateQueue;if(u!==null&&(u=u.stores,u!==null))for(var d=0;d<u.length;d++){var _=u[d],S=_.getSnapshot;_=_.value;try{if(!br(S(),_))return!1}catch{return!1}}}if(u=o.child,o.subtreeFlags&16384&&u!==null)u.return=o,o=u;else{if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function to(i,o){for(o&=~Yh,o&=~Jc,i.suspendedLanes|=o,i.pingedLanes&=~o,i=i.expirationTimes;0<o;){var u=31-Qe(o),d=1<<u;i[u]=-1,o&=~d}}function yv(i){if((jt&6)!==0)throw Error(t(327));Ba();var o=qt(i,0);if((o&1)===0)return Oi(i,Dt()),null;var u=of(i,o);if(i.tag!==0&&u===2){var d=zt(i);d!==0&&(o=d,u=Zh(i,d))}if(u===1)throw u=uu,zo(i,0),to(i,o),Oi(i,Dt()),u;if(u===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=o,Bo(i,Fi,gs),Oi(i,Dt()),null}function Jh(i,o){var u=jt;jt|=1;try{return i(o)}finally{jt=u,jt===0&&(za=Dt()+500,Lc&&qs())}}function ko(i){Js!==null&&Js.tag===0&&(jt&6)===0&&Ba();var o=jt;jt|=1;var u=gr.transition,d=At;try{if(gr.transition=null,At=1,i)return i()}finally{At=d,gr.transition=u,jt=o,(jt&6)===0&&qs()}}function ep(){Zi=ka.current,mn(ka)}function zo(i,o){i.finishedWork=null,i.finishedLanes=0;var u=i.timeoutHandle;if(u!==-1&&(i.timeoutHandle=-1,NM(u)),In!==null)for(u=In.return;u!==null;){var d=u;switch(uh(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&Pc();break;case 3:Ua(),mn(Ii),mn(ui),Mh();break;case 5:yh(d);break;case 4:Ua();break;case 13:mn(vn);break;case 19:mn(vn);break;case 10:mh(d.type._context);break;case 22:case 23:ep()}u=u.return}if($n=i,In=i=no(i.current,null),ii=Zi=o,Bn=0,uu=null,Yh=Jc=Oo=0,Fi=cu=null,No!==null){for(o=0;o<No.length;o++)if(u=No[o],d=u.interleaved,d!==null){u.interleaved=null;var _=d.next,S=u.pending;if(S!==null){var C=S.next;S.next=_,d.next=C}u.pending=d}No=null}return i}function Sv(i,o){do{var u=In;try{if(ph(),Hc.current=jc,Gc){for(var d=xn.memoizedState;d!==null;){var _=d.queue;_!==null&&(_.pending=null),d=d.next}Gc=!1}if(Fo=0,qn=zn=xn=null,iu=!1,ru=0,jh.current=null,u===null||u.return===null){Bn=1,uu=o,In=null;break}e:{var S=i,C=u.return,B=u,j=o;if(o=ii,B.flags|=32768,j!==null&&typeof j=="object"&&typeof j.then=="function"){var fe=j,Se=B,Te=Se.tag;if((Se.mode&1)===0&&(Te===0||Te===11||Te===15)){var ye=Se.alternate;ye?(Se.updateQueue=ye.updateQueue,Se.memoizedState=ye.memoizedState,Se.lanes=ye.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var Ze=j_(C);if(Ze!==null){Ze.flags&=-257,Y_(Ze,C,B,S,o),Ze.mode&1&&X_(S,fe,o),o=Ze,j=fe;var nt=o.updateQueue;if(nt===null){var rt=new Set;rt.add(j),o.updateQueue=rt}else nt.add(j);break e}else{if((o&1)===0){X_(S,fe,o),tp();break e}j=Error(t(426))}}else if(gn&&B.mode&1){var Rn=j_(C);if(Rn!==null){(Rn.flags&65536)===0&&(Rn.flags|=256),Y_(Rn,C,B,S,o),dh(Fa(j,B));break e}}S=j=Fa(j,B),Bn!==4&&(Bn=2),cu===null?cu=[S]:cu.push(S),S=C;do{switch(S.tag){case 3:S.flags|=65536,o&=-o,S.lanes|=o;var ie=G_(S,j,o);g_(S,ie);break e;case 1:B=j;var $=S.type,ae=S.stateNode;if((S.flags&128)===0&&(typeof $.getDerivedStateFromError=="function"||ae!==null&&typeof ae.componentDidCatch=="function"&&(Qs===null||!Qs.has(ae)))){S.flags|=65536,o&=-o,S.lanes|=o;var Le=W_(S,B,o);g_(S,Le);break e}}S=S.return}while(S!==null)}Tv(u)}catch(st){o=st,In===u&&u!==null&&(In=u=u.return);continue}break}while(!0)}function Mv(){var i=Qc.current;return Qc.current=jc,i===null?jc:i}function tp(){(Bn===0||Bn===3||Bn===2)&&(Bn=4),$n===null||(Oo&268435455)===0&&(Jc&268435455)===0||to($n,ii)}function of(i,o){var u=jt;jt|=2;var d=Mv();($n!==i||ii!==o)&&(gs=null,zo(i,o));do try{sE();break}catch(_){Sv(i,_)}while(!0);if(ph(),jt=u,Qc.current=d,In!==null)throw Error(t(261));return $n=null,ii=0,Bn}function sE(){for(;In!==null;)Ev(In)}function oE(){for(;In!==null&&!Ar();)Ev(In)}function Ev(i){var o=bv(i.alternate,i,Zi);i.memoizedProps=i.pendingProps,o===null?Tv(i):In=o,jh.current=null}function Tv(i){var o=i;do{var u=o.alternate;if(i=o.return,(o.flags&32768)===0){if(u=QM(u,o,Zi),u!==null){In=u;return}}else{if(u=JM(u,o),u!==null){u.flags&=32767,In=u;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{Bn=6,In=null;return}}if(o=o.sibling,o!==null){In=o;return}In=o=i}while(o!==null);Bn===0&&(Bn=5)}function Bo(i,o,u){var d=At,_=gr.transition;try{gr.transition=null,At=1,aE(i,o,u,d)}finally{gr.transition=_,At=d}return null}function aE(i,o,u,d){do Ba();while(Js!==null);if((jt&6)!==0)throw Error(t(327));u=i.finishedWork;var _=i.finishedLanes;if(u===null)return null;if(i.finishedWork=null,i.finishedLanes=0,u===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var S=u.lanes|u.childLanes;if(Ro(i,S),i===$n&&(In=$n=null,ii=0),(u.subtreeFlags&2064)===0&&(u.flags&2064)===0||tf||(tf=!0,Cv(le,function(){return Ba(),null})),S=(u.flags&15990)!==0,(u.subtreeFlags&15990)!==0||S){S=gr.transition,gr.transition=null;var C=At;At=1;var B=jt;jt|=4,jh.current=null,tE(i,u),pv(u,i),bM(th),gc=!!eh,th=eh=null,i.current=u,nE(u),ks(),jt=B,At=C,gr.transition=S}else i.current=u;if(tf&&(tf=!1,Js=i,nf=_),S=i.pendingLanes,S===0&&(Qs=null),Ge(u.stateNode),Oi(i,Dt()),o!==null)for(d=i.onRecoverableError,u=0;u<o.length;u++)_=o[u],d(_.value,{componentStack:_.stack,digest:_.digest});if(ef)throw ef=!1,i=$h,$h=null,i;return(nf&1)!==0&&i.tag!==0&&Ba(),S=i.pendingLanes,(S&1)!==0?i===Kh?fu++:(fu=0,Kh=i):fu=0,qs(),null}function Ba(){if(Js!==null){var i=Mi(nf),o=gr.transition,u=At;try{if(gr.transition=null,At=16>i?16:i,Js===null)var d=!1;else{if(i=Js,Js=null,nf=0,(jt&6)!==0)throw Error(t(331));var _=jt;for(jt|=4,Je=i.current;Je!==null;){var S=Je,C=S.child;if((Je.flags&16)!==0){var B=S.deletions;if(B!==null){for(var j=0;j<B.length;j++){var fe=B[j];for(Je=fe;Je!==null;){var Se=Je;switch(Se.tag){case 0:case 11:case 15:lu(8,Se,S)}var Te=Se.child;if(Te!==null)Te.return=Se,Je=Te;else for(;Je!==null;){Se=Je;var ye=Se.sibling,Ze=Se.return;if(uv(Se),Se===fe){Je=null;break}if(ye!==null){ye.return=Ze,Je=ye;break}Je=Ze}}}var nt=S.alternate;if(nt!==null){var rt=nt.child;if(rt!==null){nt.child=null;do{var Rn=rt.sibling;rt.sibling=null,rt=Rn}while(rt!==null)}}Je=S}}if((S.subtreeFlags&2064)!==0&&C!==null)C.return=S,Je=C;else e:for(;Je!==null;){if(S=Je,(S.flags&2048)!==0)switch(S.tag){case 0:case 11:case 15:lu(9,S,S.return)}var ie=S.sibling;if(ie!==null){ie.return=S.return,Je=ie;break e}Je=S.return}}var $=i.current;for(Je=$;Je!==null;){C=Je;var ae=C.child;if((C.subtreeFlags&2064)!==0&&ae!==null)ae.return=C,Je=ae;else e:for(C=$;Je!==null;){if(B=Je,(B.flags&2048)!==0)try{switch(B.tag){case 0:case 11:case 15:Zc(9,B)}}catch(st){An(B,B.return,st)}if(B===C){Je=null;break e}var Le=B.sibling;if(Le!==null){Le.return=B.return,Je=Le;break e}Je=B.return}}if(jt=_,qs(),De&&typeof De.onPostCommitFiberRoot=="function")try{De.onPostCommitFiberRoot(ze,i)}catch{}d=!0}return d}finally{At=u,gr.transition=o}}return!1}function wv(i,o,u){o=Fa(u,o),o=G_(i,o,1),i=Ks(i,o,1),o=Ti(),i!==null&&(kn(i,1,o),Oi(i,o))}function An(i,o,u){if(i.tag===3)wv(i,i,u);else for(;o!==null;){if(o.tag===3){wv(o,i,u);break}else if(o.tag===1){var d=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(Qs===null||!Qs.has(d))){i=Fa(u,i),i=W_(o,i,1),o=Ks(o,i,1),i=Ti(),o!==null&&(kn(o,1,i),Oi(o,i));break}}o=o.return}}function lE(i,o,u){var d=i.pingCache;d!==null&&d.delete(o),o=Ti(),i.pingedLanes|=i.suspendedLanes&u,$n===i&&(ii&u)===u&&(Bn===4||Bn===3&&(ii&130023424)===ii&&500>Dt()-qh?zo(i,0):Yh|=u),Oi(i,o)}function Av(i,o){o===0&&((i.mode&1)===0?o=1:(o=ln,ln<<=1,(ln&130023424)===0&&(ln=4194304)));var u=Ti();i=hs(i,o),i!==null&&(kn(i,o,u),Oi(i,u))}function uE(i){var o=i.memoizedState,u=0;o!==null&&(u=o.retryLane),Av(i,u)}function cE(i,o){var u=0;switch(i.tag){case 13:var d=i.stateNode,_=i.memoizedState;_!==null&&(u=_.retryLane);break;case 19:d=i.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(o),Av(i,u)}var bv;bv=function(i,o,u){if(i!==null)if(i.memoizedProps!==o.pendingProps||Ii.current)Ui=!0;else{if((i.lanes&u)===0&&(o.flags&128)===0)return Ui=!1,ZM(i,o,u);Ui=(i.flags&131072)!==0}else Ui=!1,gn&&(o.flags&1048576)!==0&&o_(o,Nc,o.index);switch(o.lanes=0,o.tag){case 2:var d=o.type;$c(i,o),i=o.pendingProps;var _=Ca(o,ui.current);Na(o,u),_=wh(null,o,d,i,_,u);var S=Ah();return o.flags|=1,typeof _=="object"&&_!==null&&typeof _.render=="function"&&_.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,Ni(d)?(S=!0,Dc(o)):S=!1,o.memoizedState=_.state!==null&&_.state!==void 0?_.state:null,vh(o),_.updater=Yc,o.stateNode=_,_._reactInternals=o,Lh(o,d,i,u),o=Fh(null,o,d,!0,S,u)):(o.tag=0,gn&&S&&lh(o),Ei(null,o,_,u),o=o.child),o;case 16:d=o.elementType;e:{switch($c(i,o),i=o.pendingProps,_=d._init,d=_(d._payload),o.type=d,_=o.tag=dE(d),i=Rr(d,i),_){case 0:o=Uh(null,o,d,i,u);break e;case 1:o=J_(null,o,d,i,u);break e;case 11:o=q_(null,o,d,i,u);break e;case 14:o=$_(null,o,d,Rr(d.type,i),u);break e}throw Error(t(306,d,""))}return o;case 0:return d=o.type,_=o.pendingProps,_=o.elementType===d?_:Rr(d,_),Uh(i,o,d,_,u);case 1:return d=o.type,_=o.pendingProps,_=o.elementType===d?_:Rr(d,_),J_(i,o,d,_,u);case 3:e:{if(ev(o),i===null)throw Error(t(387));d=o.pendingProps,S=o.memoizedState,_=S.element,m_(i,o),Bc(o,d,null,u);var C=o.memoizedState;if(d=C.element,S.isDehydrated)if(S={element:d,isDehydrated:!1,cache:C.cache,pendingSuspenseBoundaries:C.pendingSuspenseBoundaries,transitions:C.transitions},o.updateQueue.baseState=S,o.memoizedState=S,o.flags&256){_=Fa(Error(t(423)),o),o=tv(i,o,d,u,_);break e}else if(d!==_){_=Fa(Error(t(424)),o),o=tv(i,o,d,u,_);break e}else for(Ki=Xs(o.stateNode.containerInfo.firstChild),$i=o,gn=!0,Cr=null,u=h_(o,null,d,u),o.child=u;u;)u.flags=u.flags&-3|4096,u=u.sibling;else{if(Da(),d===_){o=ms(i,o,u);break e}Ei(i,o,d,u)}o=o.child}return o;case 5:return v_(o),i===null&&fh(o),d=o.type,_=o.pendingProps,S=i!==null?i.memoizedProps:null,C=_.children,nh(d,_)?C=null:S!==null&&nh(d,S)&&(o.flags|=32),Q_(i,o),Ei(i,o,C,u),o.child;case 6:return i===null&&fh(o),null;case 13:return nv(i,o,u);case 4:return xh(o,o.stateNode.containerInfo),d=o.pendingProps,i===null?o.child=La(o,null,d,u):Ei(i,o,d,u),o.child;case 11:return d=o.type,_=o.pendingProps,_=o.elementType===d?_:Rr(d,_),q_(i,o,d,_,u);case 7:return Ei(i,o,o.pendingProps,u),o.child;case 8:return Ei(i,o,o.pendingProps.children,u),o.child;case 12:return Ei(i,o,o.pendingProps.children,u),o.child;case 10:e:{if(d=o.type._context,_=o.pendingProps,S=o.memoizedProps,C=_.value,dn(Oc,d._currentValue),d._currentValue=C,S!==null)if(br(S.value,C)){if(S.children===_.children&&!Ii.current){o=ms(i,o,u);break e}}else for(S=o.child,S!==null&&(S.return=o);S!==null;){var B=S.dependencies;if(B!==null){C=S.child;for(var j=B.firstContext;j!==null;){if(j.context===d){if(S.tag===1){j=ps(-1,u&-u),j.tag=2;var fe=S.updateQueue;if(fe!==null){fe=fe.shared;var Se=fe.pending;Se===null?j.next=j:(j.next=Se.next,Se.next=j),fe.pending=j}}S.lanes|=u,j=S.alternate,j!==null&&(j.lanes|=u),gh(S.return,u,o),B.lanes|=u;break}j=j.next}}else if(S.tag===10)C=S.type===o.type?null:S.child;else if(S.tag===18){if(C=S.return,C===null)throw Error(t(341));C.lanes|=u,B=C.alternate,B!==null&&(B.lanes|=u),gh(C,u,o),C=S.sibling}else C=S.child;if(C!==null)C.return=S;else for(C=S;C!==null;){if(C===o){C=null;break}if(S=C.sibling,S!==null){S.return=C.return,C=S;break}C=C.return}S=C}Ei(i,o,_.children,u),o=o.child}return o;case 9:return _=o.type,d=o.pendingProps.children,Na(o,u),_=pr(_),d=d(_),o.flags|=1,Ei(i,o,d,u),o.child;case 14:return d=o.type,_=Rr(d,o.pendingProps),_=Rr(d.type,_),$_(i,o,d,_,u);case 15:return K_(i,o,o.type,o.pendingProps,u);case 17:return d=o.type,_=o.pendingProps,_=o.elementType===d?_:Rr(d,_),$c(i,o),o.tag=1,Ni(d)?(i=!0,Dc(o)):i=!1,Na(o,u),V_(o,d,_),Lh(o,d,_,u),Fh(null,o,d,!0,i,u);case 19:return rv(i,o,u);case 22:return Z_(i,o,u)}throw Error(t(156,o.tag))};function Cv(i,o){return wn(i,o)}function fE(i,o,u,d){this.tag=i,this.key=u,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _r(i,o,u,d){return new fE(i,o,u,d)}function np(i){return i=i.prototype,!(!i||!i.isReactComponent)}function dE(i){if(typeof i=="function")return np(i)?1:0;if(i!=null){if(i=i.$$typeof,i===z)return 11;if(i===ne)return 14}return 2}function no(i,o){var u=i.alternate;return u===null?(u=_r(i.tag,o,i.key,i.mode),u.elementType=i.elementType,u.type=i.type,u.stateNode=i.stateNode,u.alternate=i,i.alternate=u):(u.pendingProps=o,u.type=i.type,u.flags=0,u.subtreeFlags=0,u.deletions=null),u.flags=i.flags&14680064,u.childLanes=i.childLanes,u.lanes=i.lanes,u.child=i.child,u.memoizedProps=i.memoizedProps,u.memoizedState=i.memoizedState,u.updateQueue=i.updateQueue,o=i.dependencies,u.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},u.sibling=i.sibling,u.index=i.index,u.ref=i.ref,u}function af(i,o,u,d,_,S){var C=2;if(d=i,typeof i=="function")np(i)&&(C=1);else if(typeof i=="string")C=5;else e:switch(i){case N:return Vo(u.children,_,S,o);case k:C=8,_|=8;break;case T:return i=_r(12,u,o,_|2),i.elementType=T,i.lanes=S,i;case G:return i=_r(13,u,o,_),i.elementType=G,i.lanes=S,i;case Q:return i=_r(19,u,o,_),i.elementType=Q,i.lanes=S,i;case Y:return lf(u,_,S,o);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case b:C=10;break e;case V:C=9;break e;case z:C=11;break e;case ne:C=14;break e;case Z:C=16,d=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return o=_r(C,u,o,_),o.elementType=i,o.type=d,o.lanes=S,o}function Vo(i,o,u,d){return i=_r(7,i,d,o),i.lanes=u,i}function lf(i,o,u,d){return i=_r(22,i,d,o),i.elementType=Y,i.lanes=u,i.stateNode={isHidden:!1},i}function ip(i,o,u){return i=_r(6,i,null,o),i.lanes=u,i}function rp(i,o,u){return o=_r(4,i.children!==null?i.children:[],i.key,o),o.lanes=u,o.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},o}function hE(i,o,u,d,_){this.tag=o,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vr(0),this.expirationTimes=Vr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vr(0),this.identifierPrefix=d,this.onRecoverableError=_,this.mutableSourceEagerHydrationData=null}function sp(i,o,u,d,_,S,C,B,j){return i=new hE(i,o,u,B,j),o===1?(o=1,S===!0&&(o|=8)):o=0,S=_r(3,null,null,o),i.current=S,S.stateNode=i,S.memoizedState={element:d,isDehydrated:u,cache:null,transitions:null,pendingSuspenseBoundaries:null},vh(S),i}function pE(i,o,u){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:d==null?null:""+d,children:i,containerInfo:o,implementation:u}}function Rv(i){if(!i)return Ys;i=i._reactInternals;e:{if(Pt(i)!==i||i.tag!==1)throw Error(t(170));var o=i;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(Ni(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(i.tag===1){var u=i.type;if(Ni(u))return i_(i,u,o)}return o}function Pv(i,o,u,d,_,S,C,B,j){return i=sp(u,d,!0,i,_,S,C,B,j),i.context=Rv(null),u=i.current,d=Ti(),_=eo(u),S=ps(d,_),S.callback=o??null,Ks(u,S,_),i.current.lanes=_,kn(i,_,d),Oi(i,d),i}function uf(i,o,u,d){var _=o.current,S=Ti(),C=eo(_);return u=Rv(u),o.context===null?o.context=u:o.pendingContext=u,o=ps(S,C),o.payload={element:i},d=d===void 0?null:d,d!==null&&(o.callback=d),i=Ks(_,o,C),i!==null&&(Lr(i,_,C,S),zc(i,_,C)),C}function cf(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Dv(i,o){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var u=i.retryLane;i.retryLane=u!==0&&u<o?u:o}}function op(i,o){Dv(i,o),(i=i.alternate)&&Dv(i,o)}function mE(){return null}var Lv=typeof reportError=="function"?reportError:function(i){console.error(i)};function ap(i){this._internalRoot=i}ff.prototype.render=ap.prototype.render=function(i){var o=this._internalRoot;if(o===null)throw Error(t(409));uf(i,o,null,null)},ff.prototype.unmount=ap.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var o=i.containerInfo;ko(function(){uf(null,i,null,null)}),o[us]=null}};function ff(i){this._internalRoot=i}ff.prototype.unstable_scheduleHydration=function(i){if(i){var o=Hr();i={blockedOn:null,target:i,priority:o};for(var u=0;u<Hs.length&&o!==0&&o<Hs[u].priority;u++);Hs.splice(u,0,i),u===0&&v0(i)}};function lp(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function df(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Iv(){}function gE(i,o,u,d,_){if(_){if(typeof d=="function"){var S=d;d=function(){var fe=cf(C);S.call(fe)}}var C=Pv(o,d,i,0,null,!1,!1,"",Iv);return i._reactRootContainer=C,i[us]=C.current,$l(i.nodeType===8?i.parentNode:i),ko(),C}for(;_=i.lastChild;)i.removeChild(_);if(typeof d=="function"){var B=d;d=function(){var fe=cf(j);B.call(fe)}}var j=sp(i,0,!1,null,null,!1,!1,"",Iv);return i._reactRootContainer=j,i[us]=j.current,$l(i.nodeType===8?i.parentNode:i),ko(function(){uf(o,j,u,d)}),j}function hf(i,o,u,d,_){var S=u._reactRootContainer;if(S){var C=S;if(typeof _=="function"){var B=_;_=function(){var j=cf(C);B.call(j)}}uf(o,C,i,_)}else C=gE(u,o,i,_,d);return cf(C)}jn=function(i){switch(i.tag){case 3:var o=i.stateNode;if(o.current.memoizedState.isDehydrated){var u=sn(o.pendingLanes);u!==0&&(Jt(o,u|1),Oi(o,Dt()),(jt&6)===0&&(za=Dt()+500,qs()))}break;case 13:ko(function(){var d=hs(i,1);if(d!==null){var _=Ti();Lr(d,i,1,_)}}),op(i,1)}},Yn=function(i){if(i.tag===13){var o=hs(i,134217728);if(o!==null){var u=Ti();Lr(o,i,134217728,u)}op(i,134217728)}},va=function(i){if(i.tag===13){var o=eo(i),u=hs(i,o);if(u!==null){var d=Ti();Lr(u,i,o,d)}op(i,o)}},Hr=function(){return At},g0=function(i,o){var u=At;try{return At=i,o()}finally{At=u}},Ne=function(i,o,u){switch(o){case"input":if(oe(i,u),o=u.name,u.type==="radio"&&o!=null){for(u=i;u.parentNode;)u=u.parentNode;for(u=u.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<u.length;o++){var d=u[o];if(d!==i&&d.form===i.form){var _=Rc(d);if(!_)throw Error(t(90));kt(d),oe(d,_)}}}break;case"textarea":w(i,u);break;case"select":o=u.value,o!=null&&ft(i,!!u.multiple,o,!1)}},lt=Jh,Bt=ko;var _E={usingClientEntryPoint:!1,Events:[Ql,Aa,Rc,ge,Pe,Jh]},du={findFiberByHostInstance:Po,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vE={bundleType:du.bundleType,version:du.version,rendererPackageName:du.rendererPackageName,rendererConfig:du.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=ai(i),i===null?null:i.stateNode},findFiberByHostInstance:du.findFiberByHostInstance||mE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pf.isDisabled&&pf.supportsFiber)try{ze=pf.inject(vE),De=pf}catch{}}return ki.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_E,ki.createPortal=function(i,o){var u=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lp(o))throw Error(t(200));return pE(i,o,null,u)},ki.createRoot=function(i,o){if(!lp(i))throw Error(t(299));var u=!1,d="",_=Lv;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onRecoverableError!==void 0&&(_=o.onRecoverableError)),o=sp(i,1,!1,null,null,u,!1,d,_),i[us]=o.current,$l(i.nodeType===8?i.parentNode:i),new ap(o)},ki.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var o=i._reactInternals;if(o===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=ai(o),i=i===null?null:i.stateNode,i},ki.flushSync=function(i){return ko(i)},ki.hydrate=function(i,o,u){if(!df(o))throw Error(t(200));return hf(null,i,o,!0,u)},ki.hydrateRoot=function(i,o,u){if(!lp(i))throw Error(t(405));var d=u!=null&&u.hydratedSources||null,_=!1,S="",C=Lv;if(u!=null&&(u.unstable_strictMode===!0&&(_=!0),u.identifierPrefix!==void 0&&(S=u.identifierPrefix),u.onRecoverableError!==void 0&&(C=u.onRecoverableError)),o=Pv(o,null,i,1,u??null,_,!1,S,C),i[us]=o.current,$l(i),d)for(i=0;i<d.length;i++)u=d[i],_=u._getVersion,_=_(u._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[u,_]:o.mutableSourceEagerHydrationData.push(u,_);return new ff(o)},ki.render=function(i,o,u){if(!df(o))throw Error(t(200));return hf(null,i,o,!1,u)},ki.unmountComponentAtNode=function(i){if(!df(i))throw Error(t(40));return i._reactRootContainer?(ko(function(){hf(null,null,i,!1,function(){i._reactRootContainer=null,i[us]=null})}),!0):!1},ki.unstable_batchedUpdates=Jh,ki.unstable_renderSubtreeIntoContainer=function(i,o,u,d){if(!df(u))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return hf(i,o,u,!1,d)},ki.version="18.3.1-next-f1338f8080-20240426",ki}var Vv;function CE(){if(Vv)return fp.exports;Vv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),fp.exports=bE(),fp.exports}var Hv;function RE(){if(Hv)return mf;Hv=1;var s=CE();return mf.createRoot=s.createRoot,mf.hydrateRoot=s.hydrateRoot,mf}var PE=RE(),Ye=Pg(),DE="1.3.17";function Iy(s,e,t){return Math.max(s,Math.min(e,t))}function LE(s,e,t){return(1-t)*s+t*e}function IE(s,e,t,n){return LE(s,e,1-Math.exp(-t*n))}function NE(s,e){return(s%e+e)%e}var UE=class{constructor(){ut(this,"isRunning",!1);ut(this,"value",0);ut(this,"from",0);ut(this,"to",0);ut(this,"currentTime",0);ut(this,"lerp");ut(this,"duration");ut(this,"easing");ut(this,"onUpdate")}advance(s){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=s;const n=Iy(0,this.currentTime/this.duration,1);e=n>=1;const r=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=IE(this.value,this.to,this.lerp*60,s),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(s,e,{lerp:t,duration:n,easing:r,onStart:a,onUpdate:l}){this.from=this.value=s,this.to=e,this.lerp=t,this.duration=n,this.easing=r,this.currentTime=0,this.isRunning=!0,a==null||a(),this.onUpdate=l}};function FE(s,e){let t;return function(...n){let r=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,s.apply(r,n)},e)}}var OE=class{constructor(s,e,{autoResize:t=!0,debounce:n=250}={}){ut(this,"width",0);ut(this,"height",0);ut(this,"scrollHeight",0);ut(this,"scrollWidth",0);ut(this,"debouncedResize");ut(this,"wrapperResizeObserver");ut(this,"contentResizeObserver");ut(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});ut(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});ut(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=s,this.content=e,t&&(this.debouncedResize=FE(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var s,e;(s=this.wrapperResizeObserver)==null||s.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Ny=class{constructor(){ut(this,"events",{})}emit(s,...e){var n;let t=this.events[s]||[];for(let r=0,a=t.length;r<a;r++)(n=t[r])==null||n.call(t,...e)}on(s,e){var t;return(t=this.events[s])!=null&&t.push(e)||(this.events[s]=[e]),()=>{var n;this.events[s]=(n=this.events[s])==null?void 0:n.filter(r=>e!==r)}}off(s,e){var t;this.events[s]=(t=this.events[s])==null?void 0:t.filter(n=>e!==n)}destroy(){this.events={}}},Gv=100/6,ro={passive:!1},kE=class{constructor(s,e={wheelMultiplier:1,touchMultiplier:1}){ut(this,"touchStart",{x:0,y:0});ut(this,"lastDelta",{x:0,y:0});ut(this,"window",{width:0,height:0});ut(this,"emitter",new Ny);ut(this,"onTouchStart",s=>{const{clientX:e,clientY:t}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})});ut(this,"onTouchMove",s=>{const{clientX:e,clientY:t}=s.targetTouches?s.targetTouches[0]:s,n=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:r},this.emitter.emit("scroll",{deltaX:n,deltaY:r,event:s})});ut(this,"onTouchEnd",s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})});ut(this,"onWheel",s=>{let{deltaX:e,deltaY:t,deltaMode:n}=s;const r=n===1?Gv:n===2?this.window.width:1,a=n===1?Gv:n===2?this.window.height:1;e*=r,t*=a,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:s})});ut(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=s,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,ro),this.element.addEventListener("touchstart",this.onTouchStart,ro),this.element.addEventListener("touchmove",this.onTouchMove,ro),this.element.addEventListener("touchend",this.onTouchEnd,ro)}on(s,e){return this.emitter.on(s,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,ro),this.element.removeEventListener("touchstart",this.onTouchStart,ro),this.element.removeEventListener("touchmove",this.onTouchMove,ro),this.element.removeEventListener("touchend",this.onTouchEnd,ro)}},Wv=s=>Math.min(1,1.001-Math.pow(2,-10*s)),zE=class{constructor({wrapper:s=window,content:e=document.documentElement,eventsTarget:t=s,smoothWheel:n=!0,syncTouch:r=!1,syncTouchLerp:a=.075,touchInertiaExponent:l=1.7,duration:c,easing:f,lerp:h=.1,infinite:p=!1,orientation:m="vertical",gestureOrientation:g=m==="horizontal"?"both":"vertical",touchMultiplier:v=1,wheelMultiplier:E=1,autoResize:M=!0,prevent:x,virtualScroll:y,overscroll:P=!0,autoRaf:D=!1,anchors:A=!1,autoToggle:R=!1,allowNestedScroll:L=!1,__experimental__naiveDimensions:N=!1,naiveDimensions:k=N,stopInertiaOnNavigate:T=!1}={}){ut(this,"_isScrolling",!1);ut(this,"_isStopped",!1);ut(this,"_isLocked",!1);ut(this,"_preventNextNativeScrollEvent",!1);ut(this,"_resetVelocityTimeout",null);ut(this,"_rafId",null);ut(this,"isTouching");ut(this,"time",0);ut(this,"userData",{});ut(this,"lastVelocity",0);ut(this,"velocity",0);ut(this,"direction",0);ut(this,"options");ut(this,"targetScroll");ut(this,"animatedScroll");ut(this,"animate",new UE);ut(this,"emitter",new Ny);ut(this,"dimensions");ut(this,"virtualScroll");ut(this,"onScrollEnd",s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()});ut(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});ut(this,"onTransitionEnd",s=>{s.propertyName.includes("overflow")&&this.checkOverflow()});ut(this,"onClick",s=>{const t=s.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.getAttribute("href"));if(this.options.anchors){const n=t.find(r=>{var a;return(a=r.getAttribute("href"))==null?void 0:a.includes("#")});if(n){const r=n.getAttribute("href");if(r){const a=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,l=`#${r.split("#")[1]}`;this.scrollTo(l,a)}}}this.options.stopInertiaOnNavigate&&t.find(r=>r.host===window.location.host)&&this.reset()});ut(this,"onPointerDown",s=>{s.button===1&&this.reset()});ut(this,"onVirtualScroll",s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;const{deltaX:e,deltaY:t,event:n}=s;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const r=n.type.includes("touch"),a=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const l=e===0&&t===0;if(this.options.syncTouch&&r&&n.type==="touchstart"&&l&&!this.isStopped&&!this.isLocked){this.reset();return}const f=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(l||f)return;let h=n.composedPath();h=h.slice(0,h.indexOf(this.rootElement));const p=this.options.prevent;if(h.find(x=>{var y,P,D;return x instanceof HTMLElement&&(typeof p=="function"&&(p==null?void 0:p(x))||((y=x.hasAttribute)==null?void 0:y.call(x,"data-lenis-prevent"))||r&&((P=x.hasAttribute)==null?void 0:P.call(x,"data-lenis-prevent-touch"))||a&&((D=x.hasAttribute)==null?void 0:D.call(x,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.checkNestedScroll(x,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&a)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let g=t;this.options.gestureOrientation==="both"?g=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(g=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const v=r&&this.options.syncTouch,M=r&&n.type==="touchend";M&&(g=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+g,{programmatic:!1,...v?{lerp:M?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});ut(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});ut(this,"raf",s=>{const e=s-(this.time||s);this.time=s,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=DE,(!s||s===document.documentElement)&&(s=window),typeof c=="number"&&typeof f!="function"?f=Wv:typeof f=="function"&&typeof c!="number"&&(c=1),this.options={wrapper:s,content:e,eventsTarget:t,smoothWheel:n,syncTouch:r,syncTouchLerp:a,touchInertiaExponent:l,duration:c,easing:f,lerp:h,infinite:p,gestureOrientation:g,orientation:m,touchMultiplier:v,wheelMultiplier:E,autoResize:M,prevent:x,virtualScroll:y,overscroll:P,autoRaf:D,anchors:A,autoToggle:R,allowNestedScroll:L,naiveDimensions:k,stopInertiaOnNavigate:T},this.dimensions=new OE(s,e,{autoResize:M}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new kE(t,{touchMultiplier:v,wheelMultiplier:E}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0})),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(s,e){return this.emitter.on(s,e)}off(s,e){return this.emitter.off(s,e)}get overflow(){const s=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[s]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(s,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:r=!0,lerp:a=r?this.options.lerp:void 0,duration:l=r?this.options.duration:void 0,easing:c=r?this.options.easing:void 0,onStart:f,onComplete:h,force:p=!1,userData:m}={}){if(!((this.isStopped||this.isLocked)&&!p)){if(typeof s=="string"&&["top","left","start","#"].includes(s))s=0;else if(typeof s=="string"&&["bottom","right","end"].includes(s))s=this.limit;else{let g;if(typeof s=="string"?(g=document.querySelector(s),g||(s==="#top"?s=0:console.warn("Lenis: Target not found",s))):s instanceof HTMLElement&&(s!=null&&s.nodeType)&&(g=s),g){if(this.options.wrapper!==window){const E=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?E.left:E.top}const v=g.getBoundingClientRect();s=(this.isHorizontal?v.left:v.top)+this.animatedScroll}}if(typeof s=="number"){if(s+=e,s=Math.round(s),this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const g=s-this.animatedScroll;g>this.limit/2?s=s-this.limit:g<-this.limit/2&&(s=s+this.limit)}}else s=Iy(0,s,this.limit);if(s===this.targetScroll){f==null||f(this),h==null||h(this);return}if(this.userData=m??{},t){this.animatedScroll=this.targetScroll=s,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),h==null||h(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=s),typeof l=="number"&&typeof c!="function"?c=Wv:typeof c=="function"&&typeof l!="number"&&(l=1),this.animate.fromTo(this.animatedScroll,s,{duration:l,easing:c,lerp:a,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",f==null||f(this)},onUpdate:(g,v)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=g-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=g,this.setScroll(this.scroll),r&&(this.targetScroll=g),v||this.emit(),v&&(this.reset(),this.emit(),h==null||h(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(s,{deltaX:e,deltaY:t}){const n=Date.now(),r=s._lenis??(s._lenis={});let a,l,c,f,h,p,m,g;const v=this.options.gestureOrientation;if(n-(r.time??0)>2e3){r.time=Date.now();const R=window.getComputedStyle(s);r.computedStyle=R;const L=R.overflowX,N=R.overflowY;if(a=["auto","overlay","scroll"].includes(L),l=["auto","overlay","scroll"].includes(N),r.hasOverflowX=a,r.hasOverflowY=l,!a&&!l||v==="vertical"&&!l||v==="horizontal"&&!a)return!1;h=s.scrollWidth,p=s.scrollHeight,m=s.clientWidth,g=s.clientHeight,c=h>m,f=p>g,r.isScrollableX=c,r.isScrollableY=f,r.scrollWidth=h,r.scrollHeight=p,r.clientWidth=m,r.clientHeight=g}else c=r.isScrollableX,f=r.isScrollableY,a=r.hasOverflowX,l=r.hasOverflowY,h=r.scrollWidth,p=r.scrollHeight,m=r.clientWidth,g=r.clientHeight;if(!a&&!l||!c&&!f||v==="vertical"&&(!l||!f)||v==="horizontal"&&(!a||!c))return!1;let E;if(v==="horizontal")E="x";else if(v==="vertical")E="y";else{const R=e!==0,L=t!==0;R&&a&&c&&(E="x"),L&&l&&f&&(E="y")}if(!E)return!1;let M,x,y,P,D;if(E==="x")M=s.scrollLeft,x=h-m,y=e,P=a,D=c;else if(E==="y")M=s.scrollTop,x=p-g,y=t,P=l,D=f;else return!1;return(y>0?M<x:M>0)&&P&&D}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const s=this.options.wrapper;return this.isHorizontal?s.scrollX??s.scrollLeft:s.scrollY??s.scrollTop}get scroll(){return this.options.infinite?NE(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};function Ms(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Uy(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var lr={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Sl={duration:.5,overwrite:!1,delay:0},Dg,oi,_n,Er=1e8,cn=1/Er,um=Math.PI*2,BE=um/4,VE=0,Fy=Math.sqrt,HE=Math.cos,GE=Math.sin,ei=function(e){return typeof e=="string"},bn=function(e){return typeof e=="function"},Ls=function(e){return typeof e=="number"},Lg=function(e){return typeof e>"u"},os=function(e){return typeof e=="object"},Hi=function(e){return e!==!1},Ig=function(){return typeof window<"u"},gf=function(e){return bn(e)||ei(e)},Oy=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},yi=Array.isArray,WE=/random\([^)]+\)/g,XE=/,\s*/g,Xv=/(?:-?\.?\d|\.)+/gi,ky=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ul=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,pp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,zy=/[+-]=-?[.\d]+/,jE=/[^,'"\[\]\s]+/gi,YE=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Sn,qr,cm,Ng,cr={},fd={},By,Vy=function(e){return(fd=Ml(e,cr))&&Yi},Ug=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Yu=function(e,t){return!t&&console.warn(e)},Hy=function(e,t){return e&&(cr[e]=t)&&fd&&(fd[e]=t)||cr},qu=function(){return 0},qE={suppressEvents:!0,isStart:!0,kill:!1},Kf={suppressEvents:!0,kill:!1},$E={suppressEvents:!0},Fg={},yo=[],fm={},Gy,nr={},mp={},jv=30,Zf=[],Og="",kg=function(e){var t=e[0],n,r;if(os(t)||bn(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Zf.length;r--&&!Zf[r].targetTest(t););n=Zf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new hS(e[r],n)))||e.splice(r,1);return e},oa=function(e){return e._gsap||kg(Tr(e))[0]._gsap},Wy=function(e,t,n){return(n=e[t])&&bn(n)?e[t]():Lg(n)&&e.getAttribute&&e.getAttribute(t)||n},Gi=function(e,t){return(e=e.split(",")).forEach(t)||e},Pn=function(e){return Math.round(e*1e5)/1e5||0},yn=function(e){return Math.round(e*1e7)/1e7||0},hl=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},KE=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},dd=function(){var e=yo.length,t=yo.slice(0),n,r;for(fm={},yo.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},zg=function(e){return!!(e._initted||e._startAt||e.add)},Xy=function(e,t,n,r){yo.length&&!oi&&dd(),e.render(t,n,!!(oi&&t<0&&zg(e))),yo.length&&!oi&&dd()},jy=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(jE).length<2?t:ei(e)?e.trim():e},Yy=function(e){return e},fr=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ZE=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},Ml=function(e,t){for(var n in t)e[n]=t[n];return e},Yv=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=os(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},hd=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Nu=function(e){var t=e.parent||Sn,n=e.keyframes?ZE(yi(e.keyframes)):fr;if(Hi(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},QE=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},qy=function(e,t,n,r,a){var l=e[r],c;if(a)for(c=t[a];l&&l[a]>c;)l=l._prev;return l?(t._next=l._next,l._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=l,t.parent=t._dp=e,t},wd=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var a=t._prev,l=t._next;a?a._next=l:e[n]===t&&(e[n]=l),l?l._prev=a:e[r]===t&&(e[r]=a),t._next=t._prev=t.parent=null},Eo=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},aa=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},JE=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},dm=function(e,t,n,r){return e._startAt&&(oi?e._startAt.revert(Kf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},eT=function s(e){return!e||e._ts&&s(e.parent)},qv=function(e){return e._repeat?El(e._tTime,e=e.duration()+e._rDelay)*e:0},El=function(e,t){var n=Math.floor(e=yn(e/t));return e&&n===e?n-1:n},pd=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ad=function(e){return e._end=yn(e._start+(e._tDur/Math.abs(e._ts||e._rts||cn)||0))},bd=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=yn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ad(e),n._dirty||aa(n,e)),e},$y=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=pd(e.rawTime(),t),(!t._dur||lc(0,t.totalDuration(),n)-t._tTime>cn)&&t.render(n,!0)),aa(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-cn}},Zr=function(e,t,n,r){return t.parent&&Eo(t),t._start=yn((Ls(n)?n:n||e!==Sn?xr(e,n,t):e._time)+t._delay),t._end=yn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),qy(e,t,"_first","_last",e._sort?"_start":0),hm(t)||(e._recent=t),r||$y(e,t),e._ts<0&&bd(e,e._tTime),e},Ky=function(e,t){return(cr.ScrollTrigger||Ug("scrollTrigger",t))&&cr.ScrollTrigger.create(t,e)},Zy=function(e,t,n,r,a){if(Vg(e,t,a),!e._initted)return 1;if(!n&&e._pt&&!oi&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Gy!==rr.frame)return yo.push(e),e._lazy=[a,r],1},tT=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},hm=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},nT=function(e,t,n,r){var a=e.ratio,l=t<0||!t&&(!e._start&&tT(e)&&!(!e._initted&&hm(e))||(e._ts<0||e._dp._ts<0)&&!hm(e))?0:1,c=e._rDelay,f=0,h,p,m;if(c&&e._repeat&&(f=lc(0,e._tDur,t),p=El(f,c),e._yoyo&&p&1&&(l=1-l),p!==El(e._tTime,c)&&(a=1-l,e.vars.repeatRefresh&&e._initted&&e.invalidate())),l!==a||oi||r||e._zTime===cn||!t&&e._zTime){if(!e._initted&&Zy(e,t,r,n,f))return;for(m=e._zTime,e._zTime=t||(n?cn:0),n||(n=t&&!m),e.ratio=l,e._from&&(l=1-l),e._time=0,e._tTime=f,h=e._pt;h;)h.r(l,h.d),h=h._next;t<0&&dm(e,t,n,!0),e._onUpdate&&!n&&or(e,"onUpdate"),f&&e._repeat&&!n&&e.parent&&or(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===l&&(l&&Eo(e,1),!n&&!oi&&(or(e,l?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},iT=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Tl=function(e,t,n,r){var a=e._repeat,l=yn(t)||0,c=e._tTime/e._tDur;return c&&!r&&(e._time*=l/e._dur),e._dur=l,e._tDur=a?a<0?1e10:yn(l*(a+1)+e._rDelay*a):l,c>0&&!r&&bd(e,e._tTime=e._tDur*c),e.parent&&Ad(e),n||aa(e.parent,e),e},$v=function(e){return e instanceof Di?aa(e):Tl(e,e._dur)},rT={_start:0,endTime:qu,totalDuration:qu},xr=function s(e,t,n){var r=e.labels,a=e._recent||rT,l=e.duration()>=Er?a.endTime(!1):e._dur,c,f,h;return ei(t)&&(isNaN(t)||t in r)?(f=t.charAt(0),h=t.substr(-1)==="%",c=t.indexOf("="),f==="<"||f===">"?(c>=0&&(t=t.replace(/=/,"")),(f==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(t.substr(1))||0)*(h?(c<0?a:n).totalDuration()/100:1)):c<0?(t in r||(r[t]=l),r[t]):(f=parseFloat(t.charAt(c-1)+t.substr(c+1)),h&&n&&(f=f/100*(yi(n)?n[0]:n).totalDuration()),c>1?s(e,t.substr(0,c-1),n)+f:l+f)):t==null?l:+t},Uu=function(e,t,n){var r=Ls(t[1]),a=(r?2:1)+(e<2?0:1),l=t[a],c,f;if(r&&(l.duration=t[1]),l.parent=n,e){for(c=l,f=n;f&&!("immediateRender"in c);)c=f.vars.defaults||{},f=Hi(f.vars.inherit)&&f.parent;l.immediateRender=Hi(c.immediateRender),e<2?l.runBackwards=1:l.startAt=t[a-1]}return new Fn(t[0],l,t[a+1])},Co=function(e,t){return e||e===0?t(e):t},lc=function(e,t,n){return n<e?e:n>t?t:n},_i=function(e,t){return!ei(e)||!(t=YE.exec(e))?"":t[1]},sT=function(e,t,n){return Co(n,function(r){return lc(e,t,r)})},pm=[].slice,Qy=function(e,t){return e&&os(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&os(e[0]))&&!e.nodeType&&e!==qr},oT=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var a;return ei(r)&&!t||Qy(r,1)?(a=n).push.apply(a,Tr(r)):n.push(r)})||n},Tr=function(e,t,n){return _n&&!t&&_n.selector?_n.selector(e):ei(e)&&!n&&(cm||!wl())?pm.call((t||Ng).querySelectorAll(e),0):yi(e)?oT(e,n):Qy(e)?pm.call(e,0):e?[e]:[]},mm=function(e){return e=Tr(e)[0]||Yu("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Tr(t,n.querySelectorAll?n:n===e?Yu("Invalid scope")||Ng.createElement("div"):e)}},Jy=function(e){return e.sort(function(){return .5-Math.random()})},eS=function(e){if(bn(e))return e;var t=os(e)?e:{each:e},n=la(t.ease),r=t.from||0,a=parseFloat(t.base)||0,l={},c=r>0&&r<1,f=isNaN(r)||c,h=t.axis,p=r,m=r;return ei(r)?p=m={center:.5,edges:.5,end:1}[r]||0:!c&&f&&(p=r[0],m=r[1]),function(g,v,E){var M=(E||t).length,x=l[M],y,P,D,A,R,L,N,k,T;if(!x){if(T=t.grid==="auto"?0:(t.grid||[1,Er])[1],!T){for(N=-Er;N<(N=E[T++].getBoundingClientRect().left)&&T<M;);T<M&&T--}for(x=l[M]=[],y=f?Math.min(T,M)*p-.5:r%T,P=T===Er?0:f?M*m/T-.5:r/T|0,N=0,k=Er,L=0;L<M;L++)D=L%T-y,A=P-(L/T|0),x[L]=R=h?Math.abs(h==="y"?A:D):Fy(D*D+A*A),R>N&&(N=R),R<k&&(k=R);r==="random"&&Jy(x),x.max=N-k,x.min=k,x.v=M=(parseFloat(t.amount)||parseFloat(t.each)*(T>M?M-1:h?h==="y"?M/T:T:Math.max(T,M/T))||0)*(r==="edges"?-1:1),x.b=M<0?a-M:a,x.u=_i(t.amount||t.each)||0,n=n&&M<0?cS(n):n}return M=(x[g]-x.min)/x.max||0,yn(x.b+(n?n(M):M)*x.v)+x.u}},gm=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=yn(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Ls(n)?0:_i(n))}},tS=function(e,t){var n=yi(e),r,a;return!n&&os(e)&&(r=n=e.radius||Er,e.values?(e=Tr(e.values),(a=!Ls(e[0]))&&(r*=r)):e=gm(e.increment)),Co(t,n?bn(e)?function(l){return a=e(l),Math.abs(a-l)<=r?a:l}:function(l){for(var c=parseFloat(a?l.x:l),f=parseFloat(a?l.y:0),h=Er,p=0,m=e.length,g,v;m--;)a?(g=e[m].x-c,v=e[m].y-f,g=g*g+v*v):g=Math.abs(e[m]-c),g<h&&(h=g,p=m);return p=!r||h<=r?e[p]:l,a||p===l||Ls(l)?p:p+_i(l)}:gm(e))},nS=function(e,t,n,r){return Co(yi(e)?!t:n===!0?!!(n=0):!r,function(){return yi(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},aT=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(a,l){return l(a)},r)}},lT=function(e,t){return function(n){return e(parseFloat(n))+(t||_i(n))}},uT=function(e,t,n){return rS(e,t,0,1,n)},iS=function(e,t,n){return Co(n,function(r){return e[~~t(r)]})},cT=function s(e,t,n){var r=t-e;return yi(e)?iS(e,s(0,e.length),t):Co(n,function(a){return(r+(a-e)%r)%r+e})},fT=function s(e,t,n){var r=t-e,a=r*2;return yi(e)?iS(e,s(0,e.length-1),t):Co(n,function(l){return l=(a+(l-e)%a)%a||0,e+(l>r?a-l:l)})},$u=function(e){return e.replace(WE,function(t){var n=t.indexOf("[")+1,r=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(XE);return nS(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},rS=function(e,t,n,r,a){var l=t-e,c=r-n;return Co(a,function(f){return n+((f-e)/l*c||0)})},dT=function s(e,t,n,r){var a=isNaN(e+t)?0:function(v){return(1-v)*e+v*t};if(!a){var l=ei(e),c={},f,h,p,m,g;if(n===!0&&(r=1)&&(n=null),l)e={p:e},t={p:t};else if(yi(e)&&!yi(t)){for(p=[],m=e.length,g=m-2,h=1;h<m;h++)p.push(s(e[h-1],e[h]));m--,a=function(E){E*=m;var M=Math.min(g,~~E);return p[M](E-M)},n=t}else r||(e=Ml(yi(e)?[]:{},e));if(!p){for(f in t)Bg.call(c,e,f,"get",t[f]);a=function(E){return Wg(E,c)||(l?e.p:e)}}}return Co(n,a)},Kv=function(e,t,n){var r=e.labels,a=Er,l,c,f;for(l in r)c=r[l]-t,c<0==!!n&&c&&a>(c=Math.abs(c))&&(f=l,a=c);return f},or=function(e,t,n){var r=e.vars,a=r[t],l=_n,c=e._ctx,f,h,p;if(a)return f=r[t+"Params"],h=r.callbackScope||e,n&&yo.length&&dd(),c&&(_n=c),p=f?a.apply(h,f):a.call(h),_n=l,p},wu=function(e){return Eo(e),e.scrollTrigger&&e.scrollTrigger.kill(!!oi),e.progress()<1&&or(e,"onInterrupt"),e},cl,sS=[],oS=function(e){if(e)if(e=!e.name&&e.default||e,Ig()||e.headless){var t=e.name,n=bn(e),r=t&&!n&&e.init?function(){this._props=[]}:e,a={init:qu,render:Wg,add:Bg,kill:CT,modifier:bT,rawVars:0},l={targetTest:0,get:0,getSetter:Gg,aliases:{},register:0};if(wl(),e!==r){if(nr[t])return;fr(r,fr(hd(e,a),l)),Ml(r.prototype,Ml(a,hd(e,l))),nr[r.prop=t]=r,e.targetTest&&(Zf.push(r),Fg[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Hy(t,r),e.register&&e.register(Yi,r,Wi)}else sS.push(e)},un=255,Au={aqua:[0,un,un],lime:[0,un,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,un],navy:[0,0,128],white:[un,un,un],olive:[128,128,0],yellow:[un,un,0],orange:[un,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[un,0,0],pink:[un,192,203],cyan:[0,un,un],transparent:[un,un,un,0]},gp=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*un+.5|0},aS=function(e,t,n){var r=e?Ls(e)?[e>>16,e>>8&un,e&un]:0:Au.black,a,l,c,f,h,p,m,g,v,E;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Au[e])r=Au[e];else if(e.charAt(0)==="#"){if(e.length<6&&(a=e.charAt(1),l=e.charAt(2),c=e.charAt(3),e="#"+a+a+l+l+c+c+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&un,r&un,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&un,e&un]}else if(e.substr(0,3)==="hsl"){if(r=E=e.match(Xv),!t)f=+r[0]%360/360,h=+r[1]/100,p=+r[2]/100,l=p<=.5?p*(h+1):p+h-p*h,a=p*2-l,r.length>3&&(r[3]*=1),r[0]=gp(f+1/3,a,l),r[1]=gp(f,a,l),r[2]=gp(f-1/3,a,l);else if(~e.indexOf("="))return r=e.match(ky),n&&r.length<4&&(r[3]=1),r}else r=e.match(Xv)||Au.transparent;r=r.map(Number)}return t&&!E&&(a=r[0]/un,l=r[1]/un,c=r[2]/un,m=Math.max(a,l,c),g=Math.min(a,l,c),p=(m+g)/2,m===g?f=h=0:(v=m-g,h=p>.5?v/(2-m-g):v/(m+g),f=m===a?(l-c)/v+(l<c?6:0):m===l?(c-a)/v+2:(a-l)/v+4,f*=60),r[0]=~~(f+.5),r[1]=~~(h*100+.5),r[2]=~~(p*100+.5)),n&&r.length<4&&(r[3]=1),r},lS=function(e){var t=[],n=[],r=-1;return e.split(So).forEach(function(a){var l=a.match(ul)||[];t.push.apply(t,l),n.push(r+=l.length+1)}),t.c=n,t},Zv=function(e,t,n){var r="",a=(e+r).match(So),l=t?"hsla(":"rgba(",c=0,f,h,p,m;if(!a)return e;if(a=a.map(function(g){return(g=aS(g,t,1))&&l+(t?g[0]+","+g[1]+"%,"+g[2]+"%,"+g[3]:g.join(","))+")"}),n&&(p=lS(e),f=n.c,f.join(r)!==p.c.join(r)))for(h=e.replace(So,"1").split(ul),m=h.length-1;c<m;c++)r+=h[c]+(~f.indexOf(c)?a.shift()||l+"0,0,0,0)":(p.length?p:a.length?a:n).shift());if(!h)for(h=e.split(So),m=h.length-1;c<m;c++)r+=h[c]+a[c];return r+h[m]},So=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Au)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),hT=/hsl[a]?\(/,uS=function(e){var t=e.join(" "),n;if(So.lastIndex=0,So.test(t))return n=hT.test(t),e[1]=Zv(e[1],n),e[0]=Zv(e[0],n,lS(e[1])),!0},Ku,rr=(function(){var s=Date.now,e=500,t=33,n=s(),r=n,a=1e3/240,l=a,c=[],f,h,p,m,g,v,E=function M(x){var y=s()-r,P=x===!0,D,A,R,L;if((y>e||y<0)&&(n+=y-t),r+=y,R=r-n,D=R-l,(D>0||P)&&(L=++m.frame,g=R-m.time*1e3,m.time=R=R/1e3,l+=D+(D>=a?4:a-D),A=1),P||(f=h(M)),A)for(v=0;v<c.length;v++)c[v](R,g,L,x)};return m={time:0,frame:0,tick:function(){E(!0)},deltaRatio:function(x){return g/(1e3/(x||60))},wake:function(){By&&(!cm&&Ig()&&(qr=cm=window,Ng=qr.document||{},cr.gsap=Yi,(qr.gsapVersions||(qr.gsapVersions=[])).push(Yi.version),Vy(fd||qr.GreenSockGlobals||!qr.gsap&&qr||{}),sS.forEach(oS)),p=typeof requestAnimationFrame<"u"&&requestAnimationFrame,f&&m.sleep(),h=p||function(x){return setTimeout(x,l-m.time*1e3+1|0)},Ku=1,E(2))},sleep:function(){(p?cancelAnimationFrame:clearTimeout)(f),Ku=0,h=qu},lagSmoothing:function(x,y){e=x||1/0,t=Math.min(y||33,e)},fps:function(x){a=1e3/(x||240),l=m.time*1e3+a},add:function(x,y,P){var D=y?function(A,R,L,N){x(A,R,L,N),m.remove(D)}:x;return m.remove(x),c[P?"unshift":"push"](D),wl(),D},remove:function(x,y){~(y=c.indexOf(x))&&c.splice(y,1)&&v>=y&&v--},_listeners:c},m})(),wl=function(){return!Ku&&rr.wake()},Ht={},pT=/^[\d.\-M][\d.\-,\s]/,mT=/["']/g,gT=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],a=1,l=n.length,c,f,h;a<l;a++)f=n[a],c=a!==l-1?f.lastIndexOf(","):f.length,h=f.substr(0,c),t[r]=isNaN(h)?h.replace(mT,"").trim():+h,r=f.substr(c+1).trim();return t},_T=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},vT=function(e){var t=(e+"").split("("),n=Ht[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[gT(t[1])]:_T(e).split(",").map(jy)):Ht._CE&&pT.test(e)?Ht._CE("",e):n},cS=function(e){return function(t){return 1-e(1-t)}},fS=function s(e,t){for(var n=e._first,r;n;)n instanceof Di?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},la=function(e,t){return e&&(bn(e)?e:Ht[e]||vT(e))||t},_a=function(e,t,n,r){n===void 0&&(n=function(f){return 1-t(1-f)}),r===void 0&&(r=function(f){return f<.5?t(f*2)/2:1-t((1-f)*2)/2});var a={easeIn:t,easeOut:n,easeInOut:r},l;return Gi(e,function(c){Ht[c]=cr[c]=a,Ht[l=c.toLowerCase()]=n;for(var f in a)Ht[l+(f==="easeIn"?".in":f==="easeOut"?".out":".inOut")]=Ht[c+"."+f]=a[f]}),a},dS=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},_p=function s(e,t,n){var r=t>=1?t:1,a=(n||(e?.3:.45))/(t<1?t:1),l=a/um*(Math.asin(1/r)||0),c=function(p){return p===1?1:r*Math.pow(2,-10*p)*GE((p-l)*a)+1},f=e==="out"?c:e==="in"?function(h){return 1-c(1-h)}:dS(c);return a=um/a,f.config=function(h,p){return s(e,h,p)},f},vp=function s(e,t){t===void 0&&(t=1.70158);var n=function(l){return l?--l*l*((t+1)*l+t)+1:0},r=e==="out"?n:e==="in"?function(a){return 1-n(1-a)}:dS(n);return r.config=function(a){return s(e,a)},r};Gi("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;_a(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ht.Linear.easeNone=Ht.none=Ht.Linear.easeIn;_a("Elastic",_p("in"),_p("out"),_p());(function(s,e){var t=1/e,n=2*t,r=2.5*t,a=function(c){return c<t?s*c*c:c<n?s*Math.pow(c-1.5/e,2)+.75:c<r?s*(c-=2.25/e)*c+.9375:s*Math.pow(c-2.625/e,2)+.984375};_a("Bounce",function(l){return 1-a(1-l)},a)})(7.5625,2.75);_a("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});_a("Circ",function(s){return-(Fy(1-s*s)-1)});_a("Sine",function(s){return s===1?1:-HE(s*BE)+1});_a("Back",vp("in"),vp("out"),vp());Ht.SteppedEase=Ht.steps=cr.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),a=t?1:0,l=1-cn;return function(c){return((r*lc(0,l,c)|0)+a)*n}}};Sl.ease=Ht["quad.out"];Gi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Og+=s+","+s+"Params,"});var hS=function(e,t){this.id=VE++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Wy,this.set=t?t.getSetter:Gg},Zu=(function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Tl(this,+t.duration,1,1),this.data=t.data,_n&&(this._ctx=_n,_n.data.push(this)),Ku||rr.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Tl(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(wl(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(bd(this,n),!a._dp||a.parent||$y(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Zr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===cn||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Xy(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+qv(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+qv(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*a,r):this._repeat?El(this._tTime,a)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-cn?0:this._rts;if(this._rts===n)return this;var a=this.parent&&this._ts?pd(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-cn?0:this._rts,this.totalTime(lc(-Math.abs(this._delay),this.totalDuration(),a),r!==!1),Ad(this),JE(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(wl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==cn&&(this._tTime-=cn)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=yn(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Zr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Hi(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?pd(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=$E);var r=oi;return oi=n,zg(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),oi=r,this},e.globalTime=function(n){for(var r=this,a=arguments.length?n:r.rawTime();r;)a=r._start+a/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):a},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,$v(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,$v(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(xr(this,n),Hi(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Hi(r)),this._dur||(this._zTime=-cn),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-cn:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-cn,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,a;return!!(!n||this._ts&&this._initted&&n.isActive()&&(a=n.rawTime(!0))>=r&&a<this.endTime(!0)-cn)},e.eventCallback=function(n,r,a){var l=this.vars;return arguments.length>1?(r?(l[n]=r,a&&(l[n+"Params"]=a),n==="onUpdate"&&(this._onUpdate=r)):delete l[n],this):l[n]},e.then=function(n){var r=this,a=r._prom;return new Promise(function(l){var c=bn(n)?n:Yy,f=function(){var p=r.then;r.then=null,a&&a(),bn(c)&&(c=c(r))&&(c.then||c===r)&&(r.then=p),l(c),r.then=p};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?f():r._prom=f})},e.kill=function(){wu(this)},s})();fr(Zu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-cn,_prom:0,_ps:!1,_rts:1});var Di=(function(s){Uy(e,s);function e(n,r){var a;return n===void 0&&(n={}),a=s.call(this,n)||this,a.labels={},a.smoothChildTiming=!!n.smoothChildTiming,a.autoRemoveChildren=!!n.autoRemoveChildren,a._sort=Hi(n.sortChildren),Sn&&Zr(n.parent||Sn,Ms(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),n.scrollTrigger&&Ky(Ms(a),n.scrollTrigger),a}var t=e.prototype;return t.to=function(r,a,l){return Uu(0,arguments,this),this},t.from=function(r,a,l){return Uu(1,arguments,this),this},t.fromTo=function(r,a,l,c){return Uu(2,arguments,this),this},t.set=function(r,a,l){return a.duration=0,a.parent=this,Nu(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new Fn(r,a,xr(this,l),1),this},t.call=function(r,a,l){return Zr(this,Fn.delayedCall(0,r,a),l)},t.staggerTo=function(r,a,l,c,f,h,p){return l.duration=a,l.stagger=l.stagger||c,l.onComplete=h,l.onCompleteParams=p,l.parent=this,new Fn(r,l,xr(this,f)),this},t.staggerFrom=function(r,a,l,c,f,h,p){return l.runBackwards=1,Nu(l).immediateRender=Hi(l.immediateRender),this.staggerTo(r,a,l,c,f,h,p)},t.staggerFromTo=function(r,a,l,c,f,h,p,m){return c.startAt=l,Nu(c).immediateRender=Hi(c.immediateRender),this.staggerTo(r,a,c,f,h,p,m)},t.render=function(r,a,l){var c=this._time,f=this._dirty?this.totalDuration():this._tDur,h=this._dur,p=r<=0?0:yn(r),m=this._zTime<0!=r<0&&(this._initted||!h),g,v,E,M,x,y,P,D,A,R,L,N;if(this!==Sn&&p>f&&r>=0&&(p=f),p!==this._tTime||l||m){if(c!==this._time&&h&&(p+=this._time-c,r+=this._time-c),g=p,A=this._start,D=this._ts,y=!D,m&&(h||(c=this._zTime),(r||!a)&&(this._zTime=r)),this._repeat){if(L=this._yoyo,x=h+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(x*100+r,a,l);if(g=yn(p%x),p===f?(M=this._repeat,g=h):(R=yn(p/x),M=~~R,M&&M===R&&(g=h,M--),g>h&&(g=h)),R=El(this._tTime,x),!c&&this._tTime&&R!==M&&this._tTime-R*x-this._dur<=0&&(R=M),L&&M&1&&(g=h-g,N=1),M!==R&&!this._lock){var k=L&&R&1,T=k===(L&&M&1);if(M<R&&(k=!k),c=k?0:p%h?h:p,this._lock=1,this.render(c||(N?0:yn(M*x)),a,!h)._lock=0,this._tTime=p,!a&&this.parent&&or(this,"onRepeat"),this.vars.repeatRefresh&&!N&&(this.invalidate()._lock=1,R=M),c&&c!==this._time||y!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,f=this._tDur,T&&(this._lock=2,c=k?h:-1e-4,this.render(c,!0),this.vars.repeatRefresh&&!N&&this.invalidate()),this._lock=0,!this._ts&&!y)return this;fS(this,N)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(P=iT(this,yn(c),yn(g)),P&&(p-=g-(g=P._start))),this._tTime=p,this._time=g,this._act=!D,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,c=0),!c&&p&&h&&!a&&!R&&(or(this,"onStart"),this._tTime!==p))return this;if(g>=c&&r>=0)for(v=this._first;v;){if(E=v._next,(v._act||g>=v._start)&&v._ts&&P!==v){if(v.parent!==this)return this.render(r,a,l);if(v.render(v._ts>0?(g-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(g-v._start)*v._ts,a,l),g!==this._time||!this._ts&&!y){P=0,E&&(p+=this._zTime=-cn);break}}v=E}else{v=this._last;for(var b=r<0?r:g;v;){if(E=v._prev,(v._act||b<=v._end)&&v._ts&&P!==v){if(v.parent!==this)return this.render(r,a,l);if(v.render(v._ts>0?(b-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(b-v._start)*v._ts,a,l||oi&&zg(v)),g!==this._time||!this._ts&&!y){P=0,E&&(p+=this._zTime=b?-cn:cn);break}}v=E}}if(P&&!a&&(this.pause(),P.render(g>=c?0:-cn)._zTime=g>=c?1:-1,this._ts))return this._start=A,Ad(this),this.render(r,a,l);this._onUpdate&&!a&&or(this,"onUpdate",!0),(p===f&&this._tTime>=this.totalDuration()||!p&&c)&&(A===this._start||Math.abs(D)!==Math.abs(this._ts))&&(this._lock||((r||!h)&&(p===f&&this._ts>0||!p&&this._ts<0)&&Eo(this,1),!a&&!(r<0&&!c)&&(p||c||!f)&&(or(this,p===f&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(p<f&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,a){var l=this;if(Ls(a)||(a=xr(this,a,r)),!(r instanceof Zu)){if(yi(r))return r.forEach(function(c){return l.add(c,a)}),this;if(ei(r))return this.addLabel(r,a);if(bn(r))r=Fn.delayedCall(0,r);else return this}return this!==r?Zr(this,r,a):this},t.getChildren=function(r,a,l,c){r===void 0&&(r=!0),a===void 0&&(a=!0),l===void 0&&(l=!0),c===void 0&&(c=-Er);for(var f=[],h=this._first;h;)h._start>=c&&(h instanceof Fn?a&&f.push(h):(l&&f.push(h),r&&f.push.apply(f,h.getChildren(!0,a,l)))),h=h._next;return f},t.getById=function(r){for(var a=this.getChildren(1,1,1),l=a.length;l--;)if(a[l].vars.id===r)return a[l]},t.remove=function(r){return ei(r)?this.removeLabel(r):bn(r)?this.killTweensOf(r):(r.parent===this&&wd(this,r),r===this._recent&&(this._recent=this._last),aa(this))},t.totalTime=function(r,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=yn(rr.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),s.prototype.totalTime.call(this,r,a),this._forcing=0,this):this._tTime},t.addLabel=function(r,a){return this.labels[r]=xr(this,a),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,a,l){var c=Fn.delayedCall(0,a||qu,l);return c.data="isPause",this._hasPause=1,Zr(this,c,xr(this,r))},t.removePause=function(r){var a=this._first;for(r=xr(this,r);a;)a._start===r&&a.data==="isPause"&&Eo(a),a=a._next},t.killTweensOf=function(r,a,l){for(var c=this.getTweensOf(r,l),f=c.length;f--;)po!==c[f]&&c[f].kill(r,a);return this},t.getTweensOf=function(r,a){for(var l=[],c=Tr(r),f=this._first,h=Ls(a),p;f;)f instanceof Fn?KE(f._targets,c)&&(h?(!po||f._initted&&f._ts)&&f.globalTime(0)<=a&&f.globalTime(f.totalDuration())>a:!a||f.isActive())&&l.push(f):(p=f.getTweensOf(c,a)).length&&l.push.apply(l,p),f=f._next;return l},t.tweenTo=function(r,a){a=a||{};var l=this,c=xr(l,r),f=a,h=f.startAt,p=f.onStart,m=f.onStartParams,g=f.immediateRender,v,E=Fn.to(l,fr({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:c,overwrite:"auto",duration:a.duration||Math.abs((c-(h&&"time"in h?h.time:l._time))/l.timeScale())||cn,onStart:function(){if(l.pause(),!v){var x=a.duration||Math.abs((c-(h&&"time"in h?h.time:l._time))/l.timeScale());E._dur!==x&&Tl(E,x,0,1).render(E._time,!0,!0),v=1}p&&p.apply(E,m||[])}},a));return g?E.render(0):E},t.tweenFromTo=function(r,a,l){return this.tweenTo(a,fr({startAt:{time:xr(this,r)}},l))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Kv(this,xr(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Kv(this,xr(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+cn)},t.shiftChildren=function(r,a,l){l===void 0&&(l=0);var c=this._first,f=this.labels,h;for(r=yn(r);c;)c._start>=l&&(c._start+=r,c._end+=r),c=c._next;if(a)for(h in f)f[h]>=l&&(f[h]+=r);return aa(this)},t.invalidate=function(r){var a=this._first;for(this._lock=0;a;)a.invalidate(r),a=a._next;return s.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var a=this._first,l;a;)l=a._next,this.remove(a),a=l;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),aa(this)},t.totalDuration=function(r){var a=0,l=this,c=l._last,f=Er,h,p,m;if(arguments.length)return l.timeScale((l._repeat<0?l.duration():l.totalDuration())/(l.reversed()?-r:r));if(l._dirty){for(m=l.parent;c;)h=c._prev,c._dirty&&c.totalDuration(),p=c._start,p>f&&l._sort&&c._ts&&!l._lock?(l._lock=1,Zr(l,c,p-c._delay,1)._lock=0):f=p,p<0&&c._ts&&(a-=p,(!m&&!l._dp||m&&m.smoothChildTiming)&&(l._start+=yn(p/l._ts),l._time-=p,l._tTime-=p),l.shiftChildren(-p,!1,-1/0),f=0),c._end>a&&c._ts&&(a=c._end),c=h;Tl(l,l===Sn&&l._time>a?l._time:a,1,1),l._dirty=0}return l._tDur},e.updateRoot=function(r){if(Sn._ts&&(Xy(Sn,pd(r,Sn)),Gy=rr.frame),rr.frame>=jv){jv+=lr.autoSleep||120;var a=Sn._first;if((!a||!a._ts)&&lr.autoSleep&&rr._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||rr.sleep()}}},e})(Zu);fr(Di.prototype,{_lock:0,_hasPause:0,_forcing:0});var xT=function(e,t,n,r,a,l,c){var f=new Wi(this._pt,e,t,0,1,xS,null,a),h=0,p=0,m,g,v,E,M,x,y,P;for(f.b=n,f.e=r,n+="",r+="",(y=~r.indexOf("random("))&&(r=$u(r)),l&&(P=[n,r],l(P,e,t),n=P[0],r=P[1]),g=n.match(pp)||[];m=pp.exec(r);)E=m[0],M=r.substring(h,m.index),v?v=(v+1)%5:M.substr(-5)==="rgba("&&(v=1),E!==g[p++]&&(x=parseFloat(g[p-1])||0,f._pt={_next:f._pt,p:M||p===1?M:",",s:x,c:E.charAt(1)==="="?hl(x,E)-x:parseFloat(E)-x,m:v&&v<4?Math.round:0},h=pp.lastIndex);return f.c=h<r.length?r.substring(h,r.length):"",f.fp=c,(zy.test(r)||y)&&(f.e=0),this._pt=f,f},Bg=function(e,t,n,r,a,l,c,f,h,p){bn(r)&&(r=r(a||0,e,l));var m=e[t],g=n!=="get"?n:bn(m)?h?e[t.indexOf("set")||!bn(e["get"+t.substr(3)])?t:"get"+t.substr(3)](h):e[t]():m,v=bn(m)?h?TT:_S:Hg,E;if(ei(r)&&(~r.indexOf("random(")&&(r=$u(r)),r.charAt(1)==="="&&(E=hl(g,r)+(_i(g)||0),(E||E===0)&&(r=E))),!p||g!==r||_m)return!isNaN(g*r)&&r!==""?(E=new Wi(this._pt,e,t,+g||0,r-(g||0),typeof m=="boolean"?AT:vS,0,v),h&&(E.fp=h),c&&E.modifier(c,this,e),this._pt=E):(!m&&!(t in e)&&Ug(t,r),xT.call(this,e,t,g,r,v,f||lr.stringFilter,h))},yT=function(e,t,n,r,a){if(bn(e)&&(e=Fu(e,a,t,n,r)),!os(e)||e.style&&e.nodeType||yi(e)||Oy(e))return ei(e)?Fu(e,a,t,n,r):e;var l={},c;for(c in e)l[c]=Fu(e[c],a,t,n,r);return l},pS=function(e,t,n,r,a,l){var c,f,h,p;if(nr[e]&&(c=new nr[e]).init(a,c.rawVars?t[e]:yT(t[e],r,a,l,n),n,r,l)!==!1&&(n._pt=f=new Wi(n._pt,a,e,0,1,c.render,c,0,c.priority),n!==cl))for(h=n._ptLookup[n._targets.indexOf(a)],p=c._props.length;p--;)h[c._props[p]]=f;return c},po,_m,Vg=function s(e,t,n){var r=e.vars,a=r.ease,l=r.startAt,c=r.immediateRender,f=r.lazy,h=r.onUpdate,p=r.runBackwards,m=r.yoyoEase,g=r.keyframes,v=r.autoRevert,E=e._dur,M=e._startAt,x=e._targets,y=e.parent,P=y&&y.data==="nested"?y.vars.targets:x,D=e._overwrite==="auto"&&!Dg,A=e.timeline,R,L,N,k,T,b,V,z,G,Q,ne,Z,Y;if(A&&(!g||!a)&&(a="none"),e._ease=la(a,Sl.ease),e._yEase=m?cS(la(m===!0?a:m,Sl.ease)):0,m&&e._yoyo&&!e._repeat&&(m=e._yEase,e._yEase=e._ease,e._ease=m),e._from=!A&&!!r.runBackwards,!A||g&&!r.stagger){if(z=x[0]?oa(x[0]).harness:0,Z=z&&r[z.prop],R=hd(r,Fg),M&&(M._zTime<0&&M.progress(1),t<0&&p&&c&&!v?M.render(-1,!0):M.revert(p&&E?Kf:qE),M._lazy=0),l){if(Eo(e._startAt=Fn.set(x,fr({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!M&&Hi(f),startAt:null,delay:0,onUpdate:h&&function(){return or(e,"onUpdate")},stagger:0},l))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(oi||!c&&!v)&&e._startAt.revert(Kf),c&&E&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(p&&E&&!M){if(t&&(c=!1),N=fr({overwrite:!1,data:"isFromStart",lazy:c&&!M&&Hi(f),immediateRender:c,stagger:0,parent:y},R),Z&&(N[z.prop]=Z),Eo(e._startAt=Fn.set(x,N)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(oi?e._startAt.revert(Kf):e._startAt.render(-1,!0)),e._zTime=t,!c)s(e._startAt,cn,cn);else if(!t)return}for(e._pt=e._ptCache=0,f=E&&Hi(f)||f&&!E,L=0;L<x.length;L++){if(T=x[L],V=T._gsap||kg(x)[L]._gsap,e._ptLookup[L]=Q={},fm[V.id]&&yo.length&&dd(),ne=P===x?L:P.indexOf(T),z&&(G=new z).init(T,Z||R,e,ne,P)!==!1&&(e._pt=k=new Wi(e._pt,T,G.name,0,1,G.render,G,0,G.priority),G._props.forEach(function(X){Q[X]=k}),G.priority&&(b=1)),!z||Z)for(N in R)nr[N]&&(G=pS(N,R,e,ne,T,P))?G.priority&&(b=1):Q[N]=k=Bg.call(e,T,N,"get",R[N],ne,P,0,r.stringFilter);e._op&&e._op[L]&&e.kill(T,e._op[L]),D&&e._pt&&(po=e,Sn.killTweensOf(T,Q,e.globalTime(t)),Y=!e.parent,po=0),e._pt&&f&&(fm[V.id]=1)}b&&yS(e),e._onInit&&e._onInit(e)}e._onUpdate=h,e._initted=(!e._op||e._pt)&&!Y,g&&t<=0&&A.render(Er,!0,!0)},ST=function(e,t,n,r,a,l,c,f){var h=(e._pt&&e._ptCache||(e._ptCache={}))[t],p,m,g,v;if(!h)for(h=e._ptCache[t]=[],g=e._ptLookup,v=e._targets.length;v--;){if(p=g[v][t],p&&p.d&&p.d._pt)for(p=p.d._pt;p&&p.p!==t&&p.fp!==t;)p=p._next;if(!p)return _m=1,e.vars[t]="+=0",Vg(e,c),_m=0,f?Yu(t+" not eligible for reset"):1;h.push(p)}for(v=h.length;v--;)m=h[v],p=m._pt||m,p.s=(r||r===0)&&!a?r:p.s+(r||0)+l*p.c,p.c=n-p.s,m.e&&(m.e=Pn(n)+_i(m.e)),m.b&&(m.b=p.s+_i(m.b))},MT=function(e,t){var n=e[0]?oa(e[0]).harness:0,r=n&&n.aliases,a,l,c,f;if(!r)return t;a=Ml({},t);for(l in r)if(l in a)for(f=r[l].split(","),c=f.length;c--;)a[f[c]]=a[l];return a},ET=function(e,t,n,r){var a=t.ease||r||"power1.inOut",l,c;if(yi(t))c=n[e]||(n[e]=[]),t.forEach(function(f,h){return c.push({t:h/(t.length-1)*100,v:f,e:a})});else for(l in t)c=n[l]||(n[l]=[]),l==="ease"||c.push({t:parseFloat(e),v:t[l],e:a})},Fu=function(e,t,n,r,a){return bn(e)?e.call(t,n,r,a):ei(e)&&~e.indexOf("random(")?$u(e):e},mS=Og+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",gS={};Gi(mS+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return gS[s]=1});var Fn=(function(s){Uy(e,s);function e(n,r,a,l){var c;typeof r=="number"&&(a.duration=r,r=a,a=null),c=s.call(this,l?r:Nu(r))||this;var f=c.vars,h=f.duration,p=f.delay,m=f.immediateRender,g=f.stagger,v=f.overwrite,E=f.keyframes,M=f.defaults,x=f.scrollTrigger,y=f.yoyoEase,P=r.parent||Sn,D=(yi(n)||Oy(n)?Ls(n[0]):"length"in r)?[n]:Tr(n),A,R,L,N,k,T,b,V;if(c._targets=D.length?kg(D):Yu("GSAP target "+n+" not found. https://gsap.com",!lr.nullTargetWarn)||[],c._ptLookup=[],c._overwrite=v,E||g||gf(h)||gf(p)){if(r=c.vars,A=c.timeline=new Di({data:"nested",defaults:M||{},targets:P&&P.data==="nested"?P.vars.targets:D}),A.kill(),A.parent=A._dp=Ms(c),A._start=0,g||gf(h)||gf(p)){if(N=D.length,b=g&&eS(g),os(g))for(k in g)~mS.indexOf(k)&&(V||(V={}),V[k]=g[k]);for(R=0;R<N;R++)L=hd(r,gS),L.stagger=0,y&&(L.yoyoEase=y),V&&Ml(L,V),T=D[R],L.duration=+Fu(h,Ms(c),R,T,D),L.delay=(+Fu(p,Ms(c),R,T,D)||0)-c._delay,!g&&N===1&&L.delay&&(c._delay=p=L.delay,c._start+=p,L.delay=0),A.to(T,L,b?b(R,T,D):0),A._ease=Ht.none;A.duration()?h=p=0:c.timeline=0}else if(E){Nu(fr(A.vars.defaults,{ease:"none"})),A._ease=la(E.ease||r.ease||"none");var z=0,G,Q,ne;if(yi(E))E.forEach(function(Z){return A.to(D,Z,">")}),A.duration();else{L={};for(k in E)k==="ease"||k==="easeEach"||ET(k,E[k],L,E.easeEach);for(k in L)for(G=L[k].sort(function(Z,Y){return Z.t-Y.t}),z=0,R=0;R<G.length;R++)Q=G[R],ne={ease:Q.e,duration:(Q.t-(R?G[R-1].t:0))/100*h},ne[k]=Q.v,A.to(D,ne,z),z+=ne.duration;A.duration()<h&&A.to({},{duration:h-A.duration()})}}h||c.duration(h=A.duration())}else c.timeline=0;return v===!0&&!Dg&&(po=Ms(c),Sn.killTweensOf(D),po=0),Zr(P,Ms(c),a),r.reversed&&c.reverse(),r.paused&&c.paused(!0),(m||!h&&!E&&c._start===yn(P._time)&&Hi(m)&&eT(Ms(c))&&P.data!=="nested")&&(c._tTime=-cn,c.render(Math.max(0,-p)||0)),x&&Ky(Ms(c),x),c}var t=e.prototype;return t.render=function(r,a,l){var c=this._time,f=this._tDur,h=this._dur,p=r<0,m=r>f-cn&&!p?f:r<cn?0:r,g,v,E,M,x,y,P,D,A;if(!h)nT(this,r,a,l);else if(m!==this._tTime||!r||l||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==p||this._lazy){if(g=m,D=this.timeline,this._repeat){if(M=h+this._rDelay,this._repeat<-1&&p)return this.totalTime(M*100+r,a,l);if(g=yn(m%M),m===f?(E=this._repeat,g=h):(x=yn(m/M),E=~~x,E&&E===x?(g=h,E--):g>h&&(g=h)),y=this._yoyo&&E&1,y&&(A=this._yEase,g=h-g),x=El(this._tTime,M),g===c&&!l&&this._initted&&E===x)return this._tTime=m,this;E!==x&&(D&&this._yEase&&fS(D,y),this.vars.repeatRefresh&&!y&&!this._lock&&g!==M&&this._initted&&(this._lock=l=1,this.render(yn(M*E),!0).invalidate()._lock=0))}if(!this._initted){if(Zy(this,p?r:g,l,a,m))return this._tTime=0,this;if(c!==this._time&&!(l&&this.vars.repeatRefresh&&E!==x))return this;if(h!==this._dur)return this.render(r,a,l)}if(this._tTime=m,this._time=g,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=P=(A||this._ease)(g/h),this._from&&(this.ratio=P=1-P),!c&&m&&!a&&!x&&(or(this,"onStart"),this._tTime!==m))return this;for(v=this._pt;v;)v.r(P,v.d),v=v._next;D&&D.render(r<0?r:D._dur*D._ease(g/this._dur),a,l)||this._startAt&&(this._zTime=r),this._onUpdate&&!a&&(p&&dm(this,r,a,l),or(this,"onUpdate")),this._repeat&&E!==x&&this.vars.onRepeat&&!a&&this.parent&&or(this,"onRepeat"),(m===this._tDur||!m)&&this._tTime===m&&(p&&!this._onUpdate&&dm(this,r,!0,!0),(r||!h)&&(m===this._tDur&&this._ts>0||!m&&this._ts<0)&&Eo(this,1),!a&&!(p&&!c)&&(m||c||y)&&(or(this,m===f?"onComplete":"onReverseComplete",!0),this._prom&&!(m<f&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),s.prototype.invalidate.call(this,r)},t.resetTo=function(r,a,l,c,f){Ku||rr.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),p;return this._initted||Vg(this,h),p=this._ease(h/this._dur),ST(this,r,a,l,c,p,h,f)?this.resetTo(r,a,l,c,1):(bd(this,0),this.parent||qy(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,a){if(a===void 0&&(a="all"),!r&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?wu(this):this.scrollTrigger&&this.scrollTrigger.kill(!!oi),this;if(this.timeline){var l=this.timeline.totalDuration();return this.timeline.killTweensOf(r,a,po&&po.vars.overwrite!==!0)._first||wu(this),this.parent&&l!==this.timeline.totalDuration()&&Tl(this,this._dur*this.timeline._tDur/l,0,1),this}var c=this._targets,f=r?Tr(r):c,h=this._ptLookup,p=this._pt,m,g,v,E,M,x,y;if((!a||a==="all")&&QE(c,f))return a==="all"&&(this._pt=0),wu(this);for(m=this._op=this._op||[],a!=="all"&&(ei(a)&&(M={},Gi(a,function(P){return M[P]=1}),a=M),a=MT(c,a)),y=c.length;y--;)if(~f.indexOf(c[y])){g=h[y],a==="all"?(m[y]=a,E=g,v={}):(v=m[y]=m[y]||{},E=a);for(M in E)x=g&&g[M],x&&((!("kill"in x.d)||x.d.kill(M)===!0)&&wd(this,x,"_pt"),delete g[M]),v!=="all"&&(v[M]=1)}return this._initted&&!this._pt&&p&&wu(this),this},e.to=function(r,a){return new e(r,a,arguments[2])},e.from=function(r,a){return Uu(1,arguments)},e.delayedCall=function(r,a,l,c){return new e(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:a,onReverseComplete:a,onCompleteParams:l,onReverseCompleteParams:l,callbackScope:c})},e.fromTo=function(r,a,l){return Uu(2,arguments)},e.set=function(r,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new e(r,a)},e.killTweensOf=function(r,a,l){return Sn.killTweensOf(r,a,l)},e})(Zu);fr(Fn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Gi("staggerTo,staggerFrom,staggerFromTo",function(s){Fn[s]=function(){var e=new Di,t=pm.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Hg=function(e,t,n){return e[t]=n},_S=function(e,t,n){return e[t](n)},TT=function(e,t,n,r){return e[t](r.fp,n)},wT=function(e,t,n){return e.setAttribute(t,n)},Gg=function(e,t){return bn(e[t])?_S:Lg(e[t])&&e.setAttribute?wT:Hg},vS=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},AT=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},xS=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Wg=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},bT=function(e,t,n,r){for(var a=this._pt,l;a;)l=a._next,a.p===r&&a.modifier(e,t,n),a=l},CT=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?wd(this,t,"_pt"):t.dep||(n=1),t=r;return!n},RT=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},yS=function(e){for(var t=e._pt,n,r,a,l;t;){for(n=t._next,r=a;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:l)?t._prev._next=t:a=t,(t._next=r)?r._prev=t:l=t,t=n}e._pt=a},Wi=(function(){function s(t,n,r,a,l,c,f,h,p){this.t=n,this.s=a,this.c=l,this.p=r,this.r=c||vS,this.d=f||this,this.set=h||Hg,this.pr=p||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,r,a){this.mSet=this.mSet||this.set,this.set=RT,this.m=n,this.mt=a,this.tween=r},s})();Gi(Og+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Fg[s]=1});cr.TweenMax=cr.TweenLite=Fn;cr.TimelineLite=cr.TimelineMax=Di;Sn=new Di({sortChildren:!1,defaults:Sl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});lr.stringFilter=uS;var ua=[],Qf={},PT=[],Qv=0,DT=0,xp=function(e){return(Qf[e]||PT).map(function(t){return t()})},vm=function(){var e=Date.now(),t=[];e-Qv>2&&(xp("matchMediaInit"),ua.forEach(function(n){var r=n.queries,a=n.conditions,l,c,f,h;for(c in r)l=qr.matchMedia(r[c]).matches,l&&(f=1),l!==a[c]&&(a[c]=l,h=1);h&&(n.revert(),f&&t.push(n))}),xp("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Qv=e,xp("matchMedia"))},SS=(function(){function s(t,n){this.selector=n&&mm(n),this.data=[],this._r=[],this.isReverted=!1,this.id=DT++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,r,a){bn(n)&&(a=r,r=n,n=bn);var l=this,c=function(){var h=_n,p=l.selector,m;return h&&h!==l&&h.data.push(l),a&&(l.selector=mm(a)),_n=l,m=r.apply(l,arguments),bn(m)&&l._r.push(m),_n=h,l.selector=p,l.isReverted=!1,m};return l.last=c,n===bn?c(l,function(f){return l.add(null,f)}):n?l[n]=c:c},e.ignore=function(n){var r=_n;_n=null,n(this),_n=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof s?n.push.apply(n,r.getTweens()):r instanceof Fn&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var a=this;if(n?(function(){for(var c=a.getTweens(),f=a.data.length,h;f--;)h=a.data[f],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(p){return c.splice(c.indexOf(p),1)}));for(c.map(function(p){return{g:p._dur||p._delay||p._sat&&!p._sat.vars.immediateRender?p.globalTime(0):-1/0,t:p}}).sort(function(p,m){return m.g-p.g||-1/0}).forEach(function(p){return p.t.revert(n)}),f=a.data.length;f--;)h=a.data[f],h instanceof Di?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof Fn)&&h.revert&&h.revert(n);a._r.forEach(function(p){return p(n,a)}),a.isReverted=!0})():this.data.forEach(function(c){return c.kill&&c.kill()}),this.clear(),r)for(var l=ua.length;l--;)ua[l].id===this.id&&ua.splice(l,1)},e.revert=function(n){this.kill(n||{})},s})(),LT=(function(){function s(t){this.contexts=[],this.scope=t,_n&&_n.data.push(this)}var e=s.prototype;return e.add=function(n,r,a){os(n)||(n={matches:n});var l=new SS(0,a||this.scope),c=l.conditions={},f,h,p;_n&&!l.selector&&(l.selector=_n.selector),this.contexts.push(l),r=l.add("onMatch",r),l.queries=n;for(h in n)h==="all"?p=1:(f=qr.matchMedia(n[h]),f&&(ua.indexOf(l)<0&&ua.push(l),(c[h]=f.matches)&&(p=1),f.addListener?f.addListener(vm):f.addEventListener("change",vm)));return p&&r(l,function(m){return l.add(null,m)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},s})(),md={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return oS(r)})},timeline:function(e){return new Di(e)},getTweensOf:function(e,t){return Sn.getTweensOf(e,t)},getProperty:function(e,t,n,r){ei(e)&&(e=Tr(e)[0]);var a=oa(e||{}).get,l=n?Yy:jy;return n==="native"&&(n=""),e&&(t?l((nr[t]&&nr[t].get||a)(e,t,n,r)):function(c,f,h){return l((nr[c]&&nr[c].get||a)(e,c,f,h))})},quickSetter:function(e,t,n){if(e=Tr(e),e.length>1){var r=e.map(function(p){return Yi.quickSetter(p,t,n)}),a=r.length;return function(p){for(var m=a;m--;)r[m](p)}}e=e[0]||{};var l=nr[t],c=oa(e),f=c.harness&&(c.harness.aliases||{})[t]||t,h=l?function(p){var m=new l;cl._pt=0,m.init(e,n?p+n:p,cl,0,[e]),m.render(1,m),cl._pt&&Wg(1,cl)}:c.set(e,f);return l?h:function(p){return h(e,f,n?p+n:p,c,1)}},quickTo:function(e,t,n){var r,a=Yi.to(e,fr((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),l=function(f,h,p){return a.resetTo(t,f,h,p)};return l.tween=a,l},isTweening:function(e){return Sn.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=la(e.ease,Sl.ease)),Yv(Sl,e||{})},config:function(e){return Yv(lr,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,a=e.defaults,l=e.extendTimeline;(r||"").split(",").forEach(function(c){return c&&!nr[c]&&!cr[c]&&Yu(t+" effect requires "+c+" plugin.")}),mp[t]=function(c,f,h){return n(Tr(c),fr(f||{},a),h)},l&&(Di.prototype[t]=function(c,f,h){return this.add(mp[t](c,os(f)?f:(h=f)&&{},this),h)})},registerEase:function(e,t){Ht[e]=la(t)},parseEase:function(e,t){return arguments.length?la(e,t):Ht},getById:function(e){return Sn.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Di(e),r,a;for(n.smoothChildTiming=Hi(e.smoothChildTiming),Sn.remove(n),n._dp=0,n._time=n._tTime=Sn._time,r=Sn._first;r;)a=r._next,(t||!(!r._dur&&r instanceof Fn&&r.vars.onComplete===r._targets[0]))&&Zr(n,r,r._start-r._delay),r=a;return Zr(Sn,n,0),n},context:function(e,t){return e?new SS(e,t):_n},matchMedia:function(e){return new LT(e)},matchMediaRefresh:function(){return ua.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||vm()},addEventListener:function(e,t){var n=Qf[e]||(Qf[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Qf[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:cT,wrapYoyo:fT,distribute:eS,random:nS,snap:tS,normalize:uT,getUnit:_i,clamp:sT,splitColor:aS,toArray:Tr,selector:mm,mapRange:rS,pipe:aT,unitize:lT,interpolate:dT,shuffle:Jy},install:Vy,effects:mp,ticker:rr,updateRoot:Di.updateRoot,plugins:nr,globalTimeline:Sn,core:{PropTween:Wi,globals:Hy,Tween:Fn,Timeline:Di,Animation:Zu,getCache:oa,_removeLinkedListItem:wd,reverting:function(){return oi},context:function(e){return e&&_n&&(_n.data.push(e),e._ctx=_n),_n},suppressOverwrites:function(e){return Dg=e}}};Gi("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return md[s]=Fn[s]});rr.add(Di.updateRoot);cl=md.to({},{duration:0});var IT=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},NT=function(e,t){var n=e._targets,r,a,l;for(r in t)for(a=n.length;a--;)l=e._ptLookup[a][r],l&&(l=l.d)&&(l._pt&&(l=IT(l,r)),l&&l.modifier&&l.modifier(t[r],e,n[a],r))},yp=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,a,l){l._onInit=function(c){var f,h;if(ei(a)&&(f={},Gi(a,function(p){return f[p]=1}),a=f),t){f={};for(h in a)f[h]=t(a[h]);a=f}NT(c,a)}}}},Yi=md.registerPlugin({name:"attr",init:function(e,t,n,r,a){var l,c,f;this.tween=n;for(l in t)f=e.getAttribute(l)||"",c=this.add(e,"setAttribute",(f||0)+"",t[l],r,a,0,0,l),c.op=l,c.b=f,this._props.push(l)},render:function(e,t){for(var n=t._pt;n;)oi?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},yp("roundProps",gm),yp("modifiers"),yp("snap",tS))||md;Fn.version=Di.version=Yi.version="3.14.2";By=1;Ig()&&wl();Ht.Power0;Ht.Power1;Ht.Power2;Ht.Power3;Ht.Power4;Ht.Linear;Ht.Quad;Ht.Cubic;Ht.Quart;Ht.Quint;Ht.Strong;Ht.Elastic;Ht.Back;Ht.SteppedEase;Ht.Bounce;Ht.Sine;Ht.Expo;Ht.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Jv,mo,pl,Xg,na,ex,jg,UT=function(){return typeof window<"u"},Is={},Ko=180/Math.PI,ml=Math.PI/180,Va=Math.atan2,tx=1e8,Yg=/([A-Z])/g,FT=/(left|right|width|margin|padding|x)/i,OT=/[\s,\(]\S/,Qr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},xm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},kT=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},zT=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},BT=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},VT=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},MS=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},ES=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},HT=function(e,t,n){return e.style[t]=n},GT=function(e,t,n){return e.style.setProperty(t,n)},WT=function(e,t,n){return e._gsap[t]=n},XT=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},jT=function(e,t,n,r,a){var l=e._gsap;l.scaleX=l.scaleY=n,l.renderTransform(a,l)},YT=function(e,t,n,r,a){var l=e._gsap;l[t]=n,l.renderTransform(a,l)},Mn="transform",Xi=Mn+"Origin",qT=function s(e,t){var n=this,r=this.target,a=r.style,l=r._gsap;if(e in Is&&a){if(this.tfm=this.tfm||{},e!=="transform")e=Qr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(c){return n.tfm[c]=Es(r,c)}):this.tfm[e]=l.x?l[e]:Es(r,e),e===Xi&&(this.tfm.zOrigin=l.zOrigin);else return Qr.transform.split(",").forEach(function(c){return s.call(n,c,t)});if(this.props.indexOf(Mn)>=0)return;l.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Xi,t,"")),e=Mn}(a||t)&&this.props.push(e,t,a[e])},TS=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},$T=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,a,l;for(a=0;a<e.length;a+=3)e[a+1]?e[a+1]===2?t[e[a]](e[a+2]):t[e[a]]=e[a+2]:e[a+2]?n[e[a]]=e[a+2]:n.removeProperty(e[a].substr(0,2)==="--"?e[a]:e[a].replace(Yg,"-$1").toLowerCase());if(this.tfm){for(l in this.tfm)r[l]=this.tfm[l];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),a=jg(),(!a||!a.isStart)&&!n[Mn]&&(TS(n),r.zOrigin&&n[Xi]&&(n[Xi]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},wS=function(e,t){var n={target:e,props:[],revert:$T,save:qT};return e._gsap||Yi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},AS,ym=function(e,t){var n=mo.createElementNS?mo.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):mo.createElement(e);return n&&n.style?n:mo.createElement(e)},ar=function s(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Yg,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&s(e,Al(t)||t,1)||""},nx="O,Moz,ms,Ms,Webkit".split(","),Al=function(e,t,n){var r=t||na,a=r.style,l=5;if(e in a&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);l--&&!(nx[l]+e in a););return l<0?null:(l===3?"ms":l>=0?nx[l]:"")+e},Sm=function(){UT()&&window.document&&(Jv=window,mo=Jv.document,pl=mo.documentElement,na=ym("div")||{style:{}},ym("div"),Mn=Al(Mn),Xi=Mn+"Origin",na.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",AS=!!Al("perspective"),jg=Yi.core.reverting,Xg=1)},ix=function(e){var t=e.ownerSVGElement,n=ym("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),a;r.style.display="block",n.appendChild(r),pl.appendChild(n);try{a=r.getBBox()}catch{}return n.removeChild(r),pl.removeChild(n),a},rx=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},bS=function(e){var t,n;try{t=e.getBBox()}catch{t=ix(e),n=1}return t&&(t.width||t.height)||n||(t=ix(e)),t&&!t.width&&!t.x&&!t.y?{x:+rx(e,["x","cx","x1"])||0,y:+rx(e,["y","cy","y1"])||0,width:0,height:0}:t},CS=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&bS(e))},To=function(e,t){if(t){var n=e.style,r;t in Is&&t!==Xi&&(t=Mn),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(Yg,"-$1").toLowerCase())):n.removeAttribute(t)}},go=function(e,t,n,r,a,l){var c=new Wi(e._pt,t,n,0,1,l?ES:MS);return e._pt=c,c.b=r,c.e=a,e._props.push(n),c},sx={deg:1,rad:1,turn:1},KT={grid:1,flex:1},wo=function s(e,t,n,r){var a=parseFloat(n)||0,l=(n+"").trim().substr((a+"").length)||"px",c=na.style,f=FT.test(t),h=e.tagName.toLowerCase()==="svg",p=(h?"client":"offset")+(f?"Width":"Height"),m=100,g=r==="px",v=r==="%",E,M,x,y;if(r===l||!a||sx[r]||sx[l])return a;if(l!=="px"&&!g&&(a=s(e,t,n,"px")),y=e.getCTM&&CS(e),(v||l==="%")&&(Is[t]||~t.indexOf("adius")))return E=y?e.getBBox()[f?"width":"height"]:e[p],Pn(v?a/E*m:a/100*E);if(c[f?"width":"height"]=m+(g?l:r),M=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!h?e:e.parentNode,y&&(M=(e.ownerSVGElement||{}).parentNode),(!M||M===mo||!M.appendChild)&&(M=mo.body),x=M._gsap,x&&v&&x.width&&f&&x.time===rr.time&&!x.uncache)return Pn(a/x.width*m);if(v&&(t==="height"||t==="width")){var P=e.style[t];e.style[t]=m+r,E=e[p],P?e.style[t]=P:To(e,t)}else(v||l==="%")&&!KT[ar(M,"display")]&&(c.position=ar(e,"position")),M===e&&(c.position="static"),M.appendChild(na),E=na[p],M.removeChild(na),c.position="absolute";return f&&v&&(x=oa(M),x.time=rr.time,x.width=M[p]),Pn(g?E*a/m:E&&a?m/E*a:0)},Es=function(e,t,n,r){var a;return Xg||Sm(),t in Qr&&t!=="transform"&&(t=Qr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Is[t]&&t!=="transform"?(a=Ju(e,r),a=t!=="transformOrigin"?a[t]:a.svg?a.origin:_d(ar(e,Xi))+" "+a.zOrigin+"px"):(a=e.style[t],(!a||a==="auto"||r||~(a+"").indexOf("calc("))&&(a=gd[t]&&gd[t](e,t,n)||ar(e,t)||Wy(e,t)||(t==="opacity"?1:0))),n&&!~(a+"").trim().indexOf(" ")?wo(e,t,a,n)+n:a},ZT=function(e,t,n,r){if(!n||n==="none"){var a=Al(t,e,1),l=a&&ar(e,a,1);l&&l!==n?(t=a,n=l):t==="borderColor"&&(n=ar(e,"borderTopColor"))}var c=new Wi(this._pt,e.style,t,0,1,xS),f=0,h=0,p,m,g,v,E,M,x,y,P,D,A,R;if(c.b=n,c.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=ar(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(M=e.style[t],e.style[t]=r,r=ar(e,t)||r,M?e.style[t]=M:To(e,t)),p=[n,r],uS(p),n=p[0],r=p[1],g=n.match(ul)||[],R=r.match(ul)||[],R.length){for(;m=ul.exec(r);)x=m[0],P=r.substring(f,m.index),E?E=(E+1)%5:(P.substr(-5)==="rgba("||P.substr(-5)==="hsla(")&&(E=1),x!==(M=g[h++]||"")&&(v=parseFloat(M)||0,A=M.substr((v+"").length),x.charAt(1)==="="&&(x=hl(v,x)+A),y=parseFloat(x),D=x.substr((y+"").length),f=ul.lastIndex-D.length,D||(D=D||lr.units[t]||A,f===r.length&&(r+=D,c.e+=D)),A!==D&&(v=wo(e,t,M,D)||0),c._pt={_next:c._pt,p:P||h===1?P:",",s:v,c:y-v,m:E&&E<4||t==="zIndex"?Math.round:0});c.c=f<r.length?r.substring(f,r.length):""}else c.r=t==="display"&&r==="none"?ES:MS;return zy.test(r)&&(c.e=0),this._pt=c,c},ox={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},QT=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=ox[n]||n,t[1]=ox[r]||r,t.join(" ")},JT=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,a=t.u,l=n._gsap,c,f,h;if(a==="all"||a===!0)r.cssText="",f=1;else for(a=a.split(","),h=a.length;--h>-1;)c=a[h],Is[c]&&(f=1,c=c==="transformOrigin"?Xi:Mn),To(n,c);f&&(To(n,Mn),l&&(l.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Ju(n,1),l.uncache=1,TS(r)))}},gd={clearProps:function(e,t,n,r,a){if(a.data!=="isFromStart"){var l=e._pt=new Wi(e._pt,t,n,0,0,JT);return l.u=r,l.pr=-10,l.tween=a,e._props.push(n),1}}},Qu=[1,0,0,1,0,0],RS={},PS=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},ax=function(e){var t=ar(e,Mn);return PS(t)?Qu:t.substr(7).match(ky).map(Pn)},qg=function(e,t){var n=e._gsap||oa(e),r=e.style,a=ax(e),l,c,f,h;return n.svg&&e.getAttribute("transform")?(f=e.transform.baseVal.consolidate().matrix,a=[f.a,f.b,f.c,f.d,f.e,f.f],a.join(",")==="1,0,0,1,0,0"?Qu:a):(a===Qu&&!e.offsetParent&&e!==pl&&!n.svg&&(f=r.display,r.display="block",l=e.parentNode,(!l||!e.offsetParent&&!e.getBoundingClientRect().width)&&(h=1,c=e.nextElementSibling,pl.appendChild(e)),a=ax(e),f?r.display=f:To(e,"display"),h&&(c?l.insertBefore(e,c):l?l.appendChild(e):pl.removeChild(e))),t&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},Mm=function(e,t,n,r,a,l){var c=e._gsap,f=a||qg(e,!0),h=c.xOrigin||0,p=c.yOrigin||0,m=c.xOffset||0,g=c.yOffset||0,v=f[0],E=f[1],M=f[2],x=f[3],y=f[4],P=f[5],D=t.split(" "),A=parseFloat(D[0])||0,R=parseFloat(D[1])||0,L,N,k,T;n?f!==Qu&&(N=v*x-E*M)&&(k=A*(x/N)+R*(-M/N)+(M*P-x*y)/N,T=A*(-E/N)+R*(v/N)-(v*P-E*y)/N,A=k,R=T):(L=bS(e),A=L.x+(~D[0].indexOf("%")?A/100*L.width:A),R=L.y+(~(D[1]||D[0]).indexOf("%")?R/100*L.height:R)),r||r!==!1&&c.smooth?(y=A-h,P=R-p,c.xOffset=m+(y*v+P*M)-y,c.yOffset=g+(y*E+P*x)-P):c.xOffset=c.yOffset=0,c.xOrigin=A,c.yOrigin=R,c.smooth=!!r,c.origin=t,c.originIsAbsolute=!!n,e.style[Xi]="0px 0px",l&&(go(l,c,"xOrigin",h,A),go(l,c,"yOrigin",p,R),go(l,c,"xOffset",m,c.xOffset),go(l,c,"yOffset",g,c.yOffset)),e.setAttribute("data-svg-origin",A+" "+R)},Ju=function(e,t){var n=e._gsap||new hS(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,a=n.scaleX<0,l="px",c="deg",f=getComputedStyle(e),h=ar(e,Xi)||"0",p,m,g,v,E,M,x,y,P,D,A,R,L,N,k,T,b,V,z,G,Q,ne,Z,Y,X,re,U,O,ee,Ee,be,Oe;return p=m=g=M=x=y=P=D=A=0,v=E=1,n.svg=!!(e.getCTM&&CS(e)),f.translate&&((f.translate!=="none"||f.scale!=="none"||f.rotate!=="none")&&(r[Mn]=(f.translate!=="none"?"translate3d("+(f.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(f.rotate!=="none"?"rotate("+f.rotate+") ":"")+(f.scale!=="none"?"scale("+f.scale.split(" ").join(",")+") ":"")+(f[Mn]!=="none"?f[Mn]:"")),r.scale=r.rotate=r.translate="none"),N=qg(e,n.svg),n.svg&&(n.uncache?(X=e.getBBox(),h=n.xOrigin-X.x+"px "+(n.yOrigin-X.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),Mm(e,Y||h,!!Y||n.originIsAbsolute,n.smooth!==!1,N)),R=n.xOrigin||0,L=n.yOrigin||0,N!==Qu&&(V=N[0],z=N[1],G=N[2],Q=N[3],p=ne=N[4],m=Z=N[5],N.length===6?(v=Math.sqrt(V*V+z*z),E=Math.sqrt(Q*Q+G*G),M=V||z?Va(z,V)*Ko:0,P=G||Q?Va(G,Q)*Ko+M:0,P&&(E*=Math.abs(Math.cos(P*ml))),n.svg&&(p-=R-(R*V+L*G),m-=L-(R*z+L*Q))):(Oe=N[6],Ee=N[7],U=N[8],O=N[9],ee=N[10],be=N[11],p=N[12],m=N[13],g=N[14],k=Va(Oe,ee),x=k*Ko,k&&(T=Math.cos(-k),b=Math.sin(-k),Y=ne*T+U*b,X=Z*T+O*b,re=Oe*T+ee*b,U=ne*-b+U*T,O=Z*-b+O*T,ee=Oe*-b+ee*T,be=Ee*-b+be*T,ne=Y,Z=X,Oe=re),k=Va(-G,ee),y=k*Ko,k&&(T=Math.cos(-k),b=Math.sin(-k),Y=V*T-U*b,X=z*T-O*b,re=G*T-ee*b,be=Q*b+be*T,V=Y,z=X,G=re),k=Va(z,V),M=k*Ko,k&&(T=Math.cos(k),b=Math.sin(k),Y=V*T+z*b,X=ne*T+Z*b,z=z*T-V*b,Z=Z*T-ne*b,V=Y,ne=X),x&&Math.abs(x)+Math.abs(M)>359.9&&(x=M=0,y=180-y),v=Pn(Math.sqrt(V*V+z*z+G*G)),E=Pn(Math.sqrt(Z*Z+Oe*Oe)),k=Va(ne,Z),P=Math.abs(k)>2e-4?k*Ko:0,A=be?1/(be<0?-be:be):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!PS(ar(e,Mn)),Y&&e.setAttribute("transform",Y))),Math.abs(P)>90&&Math.abs(P)<270&&(a?(v*=-1,P+=M<=0?180:-180,M+=M<=0?180:-180):(E*=-1,P+=P<=0?180:-180)),t=t||n.uncache,n.x=p-((n.xPercent=p&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-p)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+l,n.y=m-((n.yPercent=m&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-m)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+l,n.z=g+l,n.scaleX=Pn(v),n.scaleY=Pn(E),n.rotation=Pn(M)+c,n.rotationX=Pn(x)+c,n.rotationY=Pn(y)+c,n.skewX=P+c,n.skewY=D+c,n.transformPerspective=A+l,(n.zOrigin=parseFloat(h.split(" ")[2])||!t&&n.zOrigin||0)&&(r[Xi]=_d(h)),n.xOffset=n.yOffset=0,n.force3D=lr.force3D,n.renderTransform=n.svg?tw:AS?DS:ew,n.uncache=0,n},_d=function(e){return(e=e.split(" "))[0]+" "+e[1]},Sp=function(e,t,n){var r=_i(t);return Pn(parseFloat(t)+parseFloat(wo(e,"x",n+"px",r)))+r},ew=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,DS(e,t)},Ho="0deg",pu="0px",Go=") ",DS=function(e,t){var n=t||this,r=n.xPercent,a=n.yPercent,l=n.x,c=n.y,f=n.z,h=n.rotation,p=n.rotationY,m=n.rotationX,g=n.skewX,v=n.skewY,E=n.scaleX,M=n.scaleY,x=n.transformPerspective,y=n.force3D,P=n.target,D=n.zOrigin,A="",R=y==="auto"&&e&&e!==1||y===!0;if(D&&(m!==Ho||p!==Ho)){var L=parseFloat(p)*ml,N=Math.sin(L),k=Math.cos(L),T;L=parseFloat(m)*ml,T=Math.cos(L),l=Sp(P,l,N*T*-D),c=Sp(P,c,-Math.sin(L)*-D),f=Sp(P,f,k*T*-D+D)}x!==pu&&(A+="perspective("+x+Go),(r||a)&&(A+="translate("+r+"%, "+a+"%) "),(R||l!==pu||c!==pu||f!==pu)&&(A+=f!==pu||R?"translate3d("+l+", "+c+", "+f+") ":"translate("+l+", "+c+Go),h!==Ho&&(A+="rotate("+h+Go),p!==Ho&&(A+="rotateY("+p+Go),m!==Ho&&(A+="rotateX("+m+Go),(g!==Ho||v!==Ho)&&(A+="skew("+g+", "+v+Go),(E!==1||M!==1)&&(A+="scale("+E+", "+M+Go),P.style[Mn]=A||"translate(0, 0)"},tw=function(e,t){var n=t||this,r=n.xPercent,a=n.yPercent,l=n.x,c=n.y,f=n.rotation,h=n.skewX,p=n.skewY,m=n.scaleX,g=n.scaleY,v=n.target,E=n.xOrigin,M=n.yOrigin,x=n.xOffset,y=n.yOffset,P=n.forceCSS,D=parseFloat(l),A=parseFloat(c),R,L,N,k,T;f=parseFloat(f),h=parseFloat(h),p=parseFloat(p),p&&(p=parseFloat(p),h+=p,f+=p),f||h?(f*=ml,h*=ml,R=Math.cos(f)*m,L=Math.sin(f)*m,N=Math.sin(f-h)*-g,k=Math.cos(f-h)*g,h&&(p*=ml,T=Math.tan(h-p),T=Math.sqrt(1+T*T),N*=T,k*=T,p&&(T=Math.tan(p),T=Math.sqrt(1+T*T),R*=T,L*=T)),R=Pn(R),L=Pn(L),N=Pn(N),k=Pn(k)):(R=m,k=g,L=N=0),(D&&!~(l+"").indexOf("px")||A&&!~(c+"").indexOf("px"))&&(D=wo(v,"x",l,"px"),A=wo(v,"y",c,"px")),(E||M||x||y)&&(D=Pn(D+E-(E*R+M*N)+x),A=Pn(A+M-(E*L+M*k)+y)),(r||a)&&(T=v.getBBox(),D=Pn(D+r/100*T.width),A=Pn(A+a/100*T.height)),T="matrix("+R+","+L+","+N+","+k+","+D+","+A+")",v.setAttribute("transform",T),P&&(v.style[Mn]=T)},nw=function(e,t,n,r,a){var l=360,c=ei(a),f=parseFloat(a)*(c&&~a.indexOf("rad")?Ko:1),h=f-r,p=r+h+"deg",m,g;return c&&(m=a.split("_")[1],m==="short"&&(h%=l,h!==h%(l/2)&&(h+=h<0?l:-l)),m==="cw"&&h<0?h=(h+l*tx)%l-~~(h/l)*l:m==="ccw"&&h>0&&(h=(h-l*tx)%l-~~(h/l)*l)),e._pt=g=new Wi(e._pt,t,n,r,h,kT),g.e=p,g.u="deg",e._props.push(n),g},lx=function(e,t){for(var n in t)e[n]=t[n];return e},iw=function(e,t,n){var r=lx({},n._gsap),a="perspective,force3D,transformOrigin,svgOrigin",l=n.style,c,f,h,p,m,g,v,E;r.svg?(h=n.getAttribute("transform"),n.setAttribute("transform",""),l[Mn]=t,c=Ju(n,1),To(n,Mn),n.setAttribute("transform",h)):(h=getComputedStyle(n)[Mn],l[Mn]=t,c=Ju(n,1),l[Mn]=h);for(f in Is)h=r[f],p=c[f],h!==p&&a.indexOf(f)<0&&(v=_i(h),E=_i(p),m=v!==E?wo(n,f,h,E):parseFloat(h),g=parseFloat(p),e._pt=new Wi(e._pt,c,f,m,g-m,xm),e._pt.u=E||0,e._props.push(f));lx(c,r)};Gi("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",r="Bottom",a="Left",l=(e<3?[t,n,r,a]:[t+a,t+n,r+n,r+a]).map(function(c){return e<2?s+c:"border"+c+s});gd[e>1?"border"+s:s]=function(c,f,h,p,m){var g,v;if(arguments.length<4)return g=l.map(function(E){return Es(c,E,h)}),v=g.join(" "),v.split(g[0]).length===5?g[0]:v;g=(p+"").split(" "),v={},l.forEach(function(E,M){return v[E]=g[M]=g[M]||g[(M-1)/2|0]}),c.init(f,v,m)}});var LS={name:"css",register:Sm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,a){var l=this._props,c=e.style,f=n.vars.startAt,h,p,m,g,v,E,M,x,y,P,D,A,R,L,N,k,T;Xg||Sm(),this.styles=this.styles||wS(e),k=this.styles.props,this.tween=n;for(M in t)if(M!=="autoRound"&&(p=t[M],!(nr[M]&&pS(M,t,n,r,e,a)))){if(v=typeof p,E=gd[M],v==="function"&&(p=p.call(n,r,e,a),v=typeof p),v==="string"&&~p.indexOf("random(")&&(p=$u(p)),E)E(this,e,M,p,n)&&(N=1);else if(M.substr(0,2)==="--")h=(getComputedStyle(e).getPropertyValue(M)+"").trim(),p+="",So.lastIndex=0,So.test(h)||(x=_i(h),y=_i(p),y?x!==y&&(h=wo(e,M,h,y)+y):x&&(p+=x)),this.add(c,"setProperty",h,p,r,a,0,0,M),l.push(M),k.push(M,0,c[M]);else if(v!=="undefined"){if(f&&M in f?(h=typeof f[M]=="function"?f[M].call(n,r,e,a):f[M],ei(h)&&~h.indexOf("random(")&&(h=$u(h)),_i(h+"")||h==="auto"||(h+=lr.units[M]||_i(Es(e,M))||""),(h+"").charAt(1)==="="&&(h=Es(e,M))):h=Es(e,M),g=parseFloat(h),P=v==="string"&&p.charAt(1)==="="&&p.substr(0,2),P&&(p=p.substr(2)),m=parseFloat(p),M in Qr&&(M==="autoAlpha"&&(g===1&&Es(e,"visibility")==="hidden"&&m&&(g=0),k.push("visibility",0,c.visibility),go(this,c,"visibility",g?"inherit":"hidden",m?"inherit":"hidden",!m)),M!=="scale"&&M!=="transform"&&(M=Qr[M],~M.indexOf(",")&&(M=M.split(",")[0]))),D=M in Is,D){if(this.styles.save(M),T=p,v==="string"&&p.substring(0,6)==="var(--"){if(p=ar(e,p.substring(4,p.indexOf(")"))),p.substring(0,5)==="calc("){var b=e.style.perspective;e.style.perspective=p,p=ar(e,"perspective"),b?e.style.perspective=b:To(e,"perspective")}m=parseFloat(p)}if(A||(R=e._gsap,R.renderTransform&&!t.parseTransform||Ju(e,t.parseTransform),L=t.smoothOrigin!==!1&&R.smooth,A=this._pt=new Wi(this._pt,c,Mn,0,1,R.renderTransform,R,0,-1),A.dep=1),M==="scale")this._pt=new Wi(this._pt,R,"scaleY",R.scaleY,(P?hl(R.scaleY,P+m):m)-R.scaleY||0,xm),this._pt.u=0,l.push("scaleY",M),M+="X";else if(M==="transformOrigin"){k.push(Xi,0,c[Xi]),p=QT(p),R.svg?Mm(e,p,0,L,0,this):(y=parseFloat(p.split(" ")[2])||0,y!==R.zOrigin&&go(this,R,"zOrigin",R.zOrigin,y),go(this,c,M,_d(h),_d(p)));continue}else if(M==="svgOrigin"){Mm(e,p,1,L,0,this);continue}else if(M in RS){nw(this,R,M,g,P?hl(g,P+p):p);continue}else if(M==="smoothOrigin"){go(this,R,"smooth",R.smooth,p);continue}else if(M==="force3D"){R[M]=p;continue}else if(M==="transform"){iw(this,p,e);continue}}else M in c||(M=Al(M)||M);if(D||(m||m===0)&&(g||g===0)&&!OT.test(p)&&M in c)x=(h+"").substr((g+"").length),m||(m=0),y=_i(p)||(M in lr.units?lr.units[M]:x),x!==y&&(g=wo(e,M,h,y)),this._pt=new Wi(this._pt,D?R:c,M,g,(P?hl(g,P+m):m)-g,!D&&(y==="px"||M==="zIndex")&&t.autoRound!==!1?VT:xm),this._pt.u=y||0,D&&T!==p?(this._pt.b=h,this._pt.e=T,this._pt.r=BT):x!==y&&y!=="%"&&(this._pt.b=h,this._pt.r=zT);else if(M in c)ZT.call(this,e,M,h,P?P+p:p);else if(M in e)this.add(e,M,h||e[M],P?P+p:p,r,a);else if(M!=="parseTransform"){Ug(M,p);continue}D||(M in c?k.push(M,0,c[M]):typeof e[M]=="function"?k.push(M,2,e[M]()):k.push(M,1,h||e[M])),l.push(M)}}N&&yS(this)},render:function(e,t){if(t.tween._time||!jg())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Es,aliases:Qr,getSetter:function(e,t,n){var r=Qr[t];return r&&r.indexOf(",")<0&&(t=r),t in Is&&t!==Xi&&(e._gsap.x||Es(e,"x"))?n&&ex===n?t==="scale"?XT:WT:(ex=n||{})&&(t==="scale"?jT:YT):e.style&&!Lg(e.style[t])?HT:~t.indexOf("-")?GT:Gg(e,t)},core:{_removeProperty:To,_getMatrix:qg}};Yi.utils.checkPrefix=Al;Yi.core.getStyleSaver=wS;(function(s,e,t,n){var r=Gi(s+","+e+","+t,function(a){Is[a]=1});Gi(e,function(a){lr.units[a]="deg",RS[a]=1}),Qr[r[13]]=s+","+e,Gi(n,function(a){var l=a.split(":");Qr[l[1]]=r[l[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Gi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){lr.units[s]="px"});Yi.registerPlugin(LS);var tt=Yi.registerPlugin(LS)||Yi;tt.core.Tween;function rw(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function sw(s,e,t){return e&&rw(s.prototype,e),s}/*!
 * Observer 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ri,Jf,sr,_o,vo,gl,IS,Zo,Ou,NS,As,Fr,US,FS=function(){return ri||typeof window<"u"&&(ri=window.gsap)&&ri.registerPlugin&&ri},OS=1,fl=[],Ot=[],ns=[],ku=Date.now,Em=function(e,t){return t},ow=function(){var e=Ou.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,Ot),r.push.apply(r,ns),Ot=n,ns=r,Em=function(l,c){return t[l](c)}},Mo=function(e,t){return~ns.indexOf(e)&&ns[ns.indexOf(e)+1][t]},zu=function(e){return!!~NS.indexOf(e)},Ai=function(e,t,n,r,a){return e.addEventListener(t,n,{passive:r!==!1,capture:!!a})},wi=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},_f="scrollLeft",vf="scrollTop",Tm=function(){return As&&As.isPressed||Ot.cache++},vd=function(e,t){var n=function r(a){if(a||a===0){OS&&(sr.history.scrollRestoration="manual");var l=As&&As.isPressed;a=r.v=Math.round(a)||(As&&As.iOS?1:0),e(a),r.cacheID=Ot.cache,l&&Em("ss",a)}else(t||Ot.cache!==r.cacheID||Em("ref"))&&(r.cacheID=Ot.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},Li={s:_f,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:vd(function(s){return arguments.length?sr.scrollTo(s,Hn.sc()):sr.pageXOffset||_o[_f]||vo[_f]||gl[_f]||0})},Hn={s:vf,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Li,sc:vd(function(s){return arguments.length?sr.scrollTo(Li.sc(),s):sr.pageYOffset||_o[vf]||vo[vf]||gl[vf]||0})},Bi=function(e,t){return(t&&t._ctx&&t._ctx.selector||ri.utils.toArray)(e)[0]||(typeof e=="string"&&ri.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},aw=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Ao=function(e,t){var n=t.s,r=t.sc;zu(e)&&(e=_o.scrollingElement||vo);var a=Ot.indexOf(e),l=r===Hn.sc?1:2;!~a&&(a=Ot.push(e)-1),Ot[a+l]||Ai(e,"scroll",Tm);var c=Ot[a+l],f=c||(Ot[a+l]=vd(Mo(e,n),!0)||(zu(e)?r:vd(function(h){return arguments.length?e[n]=h:e[n]})));return f.target=e,c||(f.smooth=ri.getProperty(e,"scrollBehavior")==="smooth"),f},wm=function(e,t,n){var r=e,a=e,l=ku(),c=l,f=t||50,h=Math.max(500,f*3),p=function(E,M){var x=ku();M||x-l>f?(a=r,r=E,c=l,l=x):n?r+=E:r=a+(E-a)/(x-c)*(l-c)},m=function(){a=r=n?0:r,c=l=0},g=function(E){var M=c,x=a,y=ku();return(E||E===0)&&E!==r&&p(E),l===c||y-c>h?0:(r+(n?x:-x))/((n?y:l)-M)*1e3};return{update:p,reset:m,getVelocity:g}},mu=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},ux=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},kS=function(){Ou=ri.core.globals().ScrollTrigger,Ou&&Ou.core&&ow()},zS=function(e){return ri=e||FS(),!Jf&&ri&&typeof document<"u"&&document.body&&(sr=window,_o=document,vo=_o.documentElement,gl=_o.body,NS=[sr,_o,vo,gl],ri.utils.clamp,US=ri.core.context||function(){},Zo="onpointerenter"in gl?"pointer":"mouse",IS=Ln.isTouch=sr.matchMedia&&sr.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in sr||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Fr=Ln.eventTypes=("ontouchstart"in vo?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in vo?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return OS=0},500),kS(),Jf=1),Jf};Li.op=Hn;Ot.cache=0;var Ln=(function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(n){Jf||zS(ri)||console.warn("Please gsap.registerPlugin(Observer)"),Ou||kS();var r=n.tolerance,a=n.dragMinimum,l=n.type,c=n.target,f=n.lineHeight,h=n.debounce,p=n.preventDefault,m=n.onStop,g=n.onStopDelay,v=n.ignore,E=n.wheelSpeed,M=n.event,x=n.onDragStart,y=n.onDragEnd,P=n.onDrag,D=n.onPress,A=n.onRelease,R=n.onRight,L=n.onLeft,N=n.onUp,k=n.onDown,T=n.onChangeX,b=n.onChangeY,V=n.onChange,z=n.onToggleX,G=n.onToggleY,Q=n.onHover,ne=n.onHoverEnd,Z=n.onMove,Y=n.ignoreCheck,X=n.isNormalizer,re=n.onGestureStart,U=n.onGestureEnd,O=n.onWheel,ee=n.onEnable,Ee=n.onDisable,be=n.onClick,Oe=n.scrollSpeed,se=n.capture,ce=n.allowClicks,_e=n.lockAxis,Ue=n.onLockAxis;this.target=c=Bi(c)||vo,this.vars=n,v&&(v=ri.utils.toArray(v)),r=r||1e-9,a=a||0,E=E||1,Oe=Oe||1,l=l||"wheel,touch,pointer",h=h!==!1,f||(f=parseFloat(sr.getComputedStyle(gl).lineHeight)||22);var Fe,mt,kt,Xe,dt,Tt,ct,oe=this,W=0,Gt=0,wt=n.passive||!p&&n.passive!==!1,ft=Ao(c,Li),We=Ao(c,Hn),F=ft(),w=We(),q=~l.indexOf("touch")&&!~l.indexOf("pointer")&&Fr[0]==="pointerdown",pe=zu(c),me=c.ownerDocument||_o,de=[0,0,0],He=[0,0,0],we=0,je=function(){return we=ku()},$e=function(it,Mt){return(oe.event=it)&&v&&aw(it.target,v)||Mt&&q&&it.pointerType!=="touch"||Y&&Y(it,Mt)},Me=function(){oe._vx.reset(),oe._vy.reset(),mt.pause(),m&&m(oe)},Ce=function(){var it=oe.deltaX=ux(de),Mt=oe.deltaY=ux(He),ke=Math.abs(it)>=r,gt=Math.abs(Mt)>=r;V&&(ke||gt)&&V(oe,it,Mt,de,He),ke&&(R&&oe.deltaX>0&&R(oe),L&&oe.deltaX<0&&L(oe),T&&T(oe),z&&oe.deltaX<0!=W<0&&z(oe),W=oe.deltaX,de[0]=de[1]=de[2]=0),gt&&(k&&oe.deltaY>0&&k(oe),N&&oe.deltaY<0&&N(oe),b&&b(oe),G&&oe.deltaY<0!=Gt<0&&G(oe),Gt=oe.deltaY,He[0]=He[1]=He[2]=0),(Xe||kt)&&(Z&&Z(oe),kt&&(x&&kt===1&&x(oe),P&&P(oe),kt=0),Xe=!1),Tt&&!(Tt=!1)&&Ue&&Ue(oe),dt&&(O(oe),dt=!1),Fe=0},qe=function(it,Mt,ke){de[ke]+=it,He[ke]+=Mt,oe._vx.update(it),oe._vy.update(Mt),h?Fe||(Fe=requestAnimationFrame(Ce)):Ce()},Ke=function(it,Mt){_e&&!ct&&(oe.axis=ct=Math.abs(it)>Math.abs(Mt)?"x":"y",Tt=!0),ct!=="y"&&(de[2]+=it,oe._vx.update(it,!0)),ct!=="x"&&(He[2]+=Mt,oe._vy.update(Mt,!0)),h?Fe||(Fe=requestAnimationFrame(Ce)):Ce()},Ae=function(it){if(!$e(it,1)){it=mu(it,p);var Mt=it.clientX,ke=it.clientY,gt=Mt-oe.x,at=ke-oe.y,yt=oe.isDragging;oe.x=Mt,oe.y=ke,(yt||(gt||at)&&(Math.abs(oe.startX-Mt)>=a||Math.abs(oe.startY-ke)>=a))&&(kt||(kt=yt?2:1),yt||(oe.isDragging=!0),Ke(gt,at))}},xt=oe.onPress=function(Be){$e(Be,1)||Be&&Be.button||(oe.axis=ct=null,mt.pause(),oe.isPressed=!0,Be=mu(Be),W=Gt=0,oe.startX=oe.x=Be.clientX,oe.startY=oe.y=Be.clientY,oe._vx.reset(),oe._vy.reset(),Ai(X?c:me,Fr[1],Ae,wt,!0),oe.deltaX=oe.deltaY=0,D&&D(oe))},H=oe.onRelease=function(Be){if(!$e(Be,1)){wi(X?c:me,Fr[1],Ae,!0);var it=!isNaN(oe.y-oe.startY),Mt=oe.isDragging,ke=Mt&&(Math.abs(oe.x-oe.startX)>3||Math.abs(oe.y-oe.startY)>3),gt=mu(Be);!ke&&it&&(oe._vx.reset(),oe._vy.reset(),p&&ce&&ri.delayedCall(.08,function(){if(ku()-we>300&&!Be.defaultPrevented){if(Be.target.click)Be.target.click();else if(me.createEvent){var at=me.createEvent("MouseEvents");at.initMouseEvent("click",!0,!0,sr,1,gt.screenX,gt.screenY,gt.clientX,gt.clientY,!1,!1,!1,!1,0,null),Be.target.dispatchEvent(at)}}})),oe.isDragging=oe.isGesturing=oe.isPressed=!1,m&&Mt&&!X&&mt.restart(!0),kt&&Ce(),y&&Mt&&y(oe),A&&A(oe,ke)}},Ne=function(it){return it.touches&&it.touches.length>1&&(oe.isGesturing=!0)&&re(it,oe.isDragging)},xe=function(){return(oe.isGesturing=!1)||U(oe)},Ie=function(it){if(!$e(it)){var Mt=ft(),ke=We();qe((Mt-F)*Oe,(ke-w)*Oe,1),F=Mt,w=ke,m&&mt.restart(!0)}},ve=function(it){if(!$e(it)){it=mu(it,p),O&&(dt=!0);var Mt=(it.deltaMode===1?f:it.deltaMode===2?sr.innerHeight:1)*E;qe(it.deltaX*Mt,it.deltaY*Mt,0),m&&!X&&mt.restart(!0)}},ge=function(it){if(!$e(it)){var Mt=it.clientX,ke=it.clientY,gt=Mt-oe.x,at=ke-oe.y;oe.x=Mt,oe.y=ke,Xe=!0,m&&mt.restart(!0),(gt||at)&&Ke(gt,at)}},Pe=function(it){oe.event=it,Q(oe)},lt=function(it){oe.event=it,ne(oe)},Bt=function(it){return $e(it)||mu(it,p)&&be(oe)};mt=oe._dc=ri.delayedCall(g||.25,Me).pause(),oe.deltaX=oe.deltaY=0,oe._vx=wm(0,50,!0),oe._vy=wm(0,50,!0),oe.scrollX=ft,oe.scrollY=We,oe.isDragging=oe.isGesturing=oe.isPressed=!1,US(this),oe.enable=function(Be){return oe.isEnabled||(Ai(pe?me:c,"scroll",Tm),l.indexOf("scroll")>=0&&Ai(pe?me:c,"scroll",Ie,wt,se),l.indexOf("wheel")>=0&&Ai(c,"wheel",ve,wt,se),(l.indexOf("touch")>=0&&IS||l.indexOf("pointer")>=0)&&(Ai(c,Fr[0],xt,wt,se),Ai(me,Fr[2],H),Ai(me,Fr[3],H),ce&&Ai(c,"click",je,!0,!0),be&&Ai(c,"click",Bt),re&&Ai(me,"gesturestart",Ne),U&&Ai(me,"gestureend",xe),Q&&Ai(c,Zo+"enter",Pe),ne&&Ai(c,Zo+"leave",lt),Z&&Ai(c,Zo+"move",ge)),oe.isEnabled=!0,oe.isDragging=oe.isGesturing=oe.isPressed=Xe=kt=!1,oe._vx.reset(),oe._vy.reset(),F=ft(),w=We(),Be&&Be.type&&xt(Be),ee&&ee(oe)),oe},oe.disable=function(){oe.isEnabled&&(fl.filter(function(Be){return Be!==oe&&zu(Be.target)}).length||wi(pe?me:c,"scroll",Tm),oe.isPressed&&(oe._vx.reset(),oe._vy.reset(),wi(X?c:me,Fr[1],Ae,!0)),wi(pe?me:c,"scroll",Ie,se),wi(c,"wheel",ve,se),wi(c,Fr[0],xt,se),wi(me,Fr[2],H),wi(me,Fr[3],H),wi(c,"click",je,!0),wi(c,"click",Bt),wi(me,"gesturestart",Ne),wi(me,"gestureend",xe),wi(c,Zo+"enter",Pe),wi(c,Zo+"leave",lt),wi(c,Zo+"move",ge),oe.isEnabled=oe.isPressed=oe.isDragging=!1,Ee&&Ee(oe))},oe.kill=oe.revert=function(){oe.disable();var Be=fl.indexOf(oe);Be>=0&&fl.splice(Be,1),As===oe&&(As=0)},fl.push(oe),X&&zu(c)&&(As=oe),oe.enable(M)},sw(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();Ln.version="3.14.2";Ln.create=function(s){return new Ln(s)};Ln.register=zS;Ln.getAll=function(){return fl.slice()};Ln.getById=function(s){return fl.filter(function(e){return e.vars.id===s})[0]};FS()&&ri.registerPlugin(Ln);/*!
 * ScrollTrigger 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var et,al,Ft,hn,ir,en,$g,xd,ec,Bu,bu,xf,mi,Cd,Am,Ri,cx,fx,ll,BS,Mp,VS,Ci,bm,HS,GS,fo,Cm,Kg,_l,Zg,Vu,Rm,Ep,yf=1,gi=Date.now,Tp=gi(),wr=0,Cu=0,dx=function(e,t,n){var r=tr(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},hx=function(e,t){return t&&(!tr(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},lw=function s(){return Cu&&requestAnimationFrame(s)},px=function(){return Cd=1},mx=function(){return Cd=0},$r=function(e){return e},Ru=function(e){return Math.round(e*1e5)/1e5||0},WS=function(){return typeof window<"u"},XS=function(){return et||WS()&&(et=window.gsap)&&et.registerPlugin&&et},ha=function(e){return!!~$g.indexOf(e)},jS=function(e){return(e==="Height"?Zg:Ft["inner"+e])||ir["client"+e]||en["client"+e]},YS=function(e){return Mo(e,"getBoundingClientRect")||(ha(e)?function(){return rd.width=Ft.innerWidth,rd.height=Zg,rd}:function(){return Ts(e)})},uw=function(e,t,n){var r=n.d,a=n.d2,l=n.a;return(l=Mo(e,"getBoundingClientRect"))?function(){return l()[r]}:function(){return(t?jS(a):e["client"+a])||0}},cw=function(e,t){return!t||~ns.indexOf(e)?YS(e):function(){return rd}},Jr=function(e,t){var n=t.s,r=t.d2,a=t.d,l=t.a;return Math.max(0,(n="scroll"+r)&&(l=Mo(e,n))?l()-YS(e)()[a]:ha(e)?(ir[n]||en[n])-jS(r):e[n]-e["offset"+r])},Sf=function(e,t){for(var n=0;n<ll.length;n+=3)(!t||~t.indexOf(ll[n+1]))&&e(ll[n],ll[n+1],ll[n+2])},tr=function(e){return typeof e=="string"},vi=function(e){return typeof e=="function"},Pu=function(e){return typeof e=="number"},Qo=function(e){return typeof e=="object"},gu=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},wp=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Ha=Math.abs,qS="left",$S="top",Qg="right",Jg="bottom",ca="width",fa="height",Hu="Right",Gu="Left",Wu="Top",Xu="Bottom",Un="padding",yr="margin",bl="Width",e0="Height",Vn="px",Sr=function(e){return Ft.getComputedStyle(e)},fw=function(e){var t=Sr(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},gx=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ts=function(e,t){var n=t&&Sr(e)[Am]!=="matrix(1, 0, 0, 1, 0, 0)"&&et.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return n&&n.progress(0).kill(),r},yd=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},KS=function(e){var t=[],n=e.labels,r=e.duration(),a;for(a in n)t.push(n[a]/r);return t},dw=function(e){return function(t){return et.utils.snap(KS(e),t)}},t0=function(e){var t=et.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,a){return r-a});return n?function(r,a,l){l===void 0&&(l=.001);var c;if(!a)return t(r);if(a>0){for(r-=l,c=0;c<n.length;c++)if(n[c]>=r)return n[c];return n[c-1]}else for(c=n.length,r+=l;c--;)if(n[c]<=r)return n[c];return n[0]}:function(r,a,l){l===void 0&&(l=.001);var c=t(r);return!a||Math.abs(c-r)<l||c-r<0==a<0?c:t(a<0?r-e:r+e)}},hw=function(e){return function(t,n){return t0(KS(e))(t,n.direction)}},Mf=function(e,t,n,r){return n.split(",").forEach(function(a){return e(t,a,r)})},Jn=function(e,t,n,r,a){return e.addEventListener(t,n,{passive:!r,capture:!!a})},Qn=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Ef=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},_x={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Tf={toggleActions:"play",anticipatePin:0},Sd={top:0,left:0,center:.5,bottom:1,right:1},ed=function(e,t){if(tr(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in Sd?Sd[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},wf=function(e,t,n,r,a,l,c,f){var h=a.startColor,p=a.endColor,m=a.fontSize,g=a.indent,v=a.fontWeight,E=hn.createElement("div"),M=ha(n)||Mo(n,"pinType")==="fixed",x=e.indexOf("scroller")!==-1,y=M?en:n,P=e.indexOf("start")!==-1,D=P?h:p,A="border-color:"+D+";font-size:"+m+";color:"+D+";font-weight:"+v+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return A+="position:"+((x||f)&&M?"fixed;":"absolute;"),(x||f||!M)&&(A+=(r===Hn?Qg:Jg)+":"+(l+parseFloat(g))+"px;"),c&&(A+="box-sizing:border-box;text-align:left;width:"+c.offsetWidth+"px;"),E._isStart=P,E.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),E.style.cssText=A,E.innerText=t||t===0?e+"-"+t:e,y.children[0]?y.insertBefore(E,y.children[0]):y.appendChild(E),E._offset=E["offset"+r.op.d2],td(E,0,r,P),E},td=function(e,t,n,r){var a={display:"block"},l=n[r?"os2":"p2"],c=n[r?"p2":"os2"];e._isFlipped=r,a[n.a+"Percent"]=r?-100:0,a[n.a]=r?"1px":0,a["border"+l+bl]=1,a["border"+c+bl]=0,a[n.p]=t+"px",et.set(e,a)},Nt=[],Pm={},tc,vx=function(){return gi()-wr>34&&(tc||(tc=requestAnimationFrame(Cs)))},Ga=function(){(!Ci||!Ci.isPressed||Ci.startX>en.clientWidth)&&(Ot.cache++,Ci?tc||(tc=requestAnimationFrame(Cs)):Cs(),wr||ma("scrollStart"),wr=gi())},Ap=function(){GS=Ft.innerWidth,HS=Ft.innerHeight},Du=function(e){Ot.cache++,(e===!0||!mi&&!VS&&!hn.fullscreenElement&&!hn.webkitFullscreenElement&&(!bm||GS!==Ft.innerWidth||Math.abs(Ft.innerHeight-HS)>Ft.innerHeight*.25))&&xd.restart(!0)},pa={},pw=[],ZS=function s(){return Qn(ot,"scrollEnd",s)||ia(!0)},ma=function(e){return pa[e]&&pa[e].map(function(t){return t()})||pw},er=[],QS=function(e){for(var t=0;t<er.length;t+=5)(!e||er[t+4]&&er[t+4].query===e)&&(er[t].style.cssText=er[t+1],er[t].getBBox&&er[t].setAttribute("transform",er[t+2]||""),er[t+3].uncache=1)},JS=function(){return Ot.forEach(function(e){return vi(e)&&++e.cacheID&&(e.rec=e())})},n0=function(e,t){var n;for(Ri=0;Ri<Nt.length;Ri++)n=Nt[Ri],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Vu=!0,t&&QS(t),t||ma("revert")},e1=function(e,t){Ot.cache++,(t||!Pi)&&Ot.forEach(function(n){return vi(n)&&n.cacheID++&&(n.rec=0)}),tr(e)&&(Ft.history.scrollRestoration=Kg=e)},Pi,da=0,xx,mw=function(){if(xx!==da){var e=xx=da;requestAnimationFrame(function(){return e===da&&ia(!0)})}},t1=function(){en.appendChild(_l),Zg=!Ci&&_l.offsetHeight||Ft.innerHeight,en.removeChild(_l)},yx=function(e){return ec(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},ia=function(e,t){if(ir=hn.documentElement,en=hn.body,$g=[Ft,hn,ir,en],wr&&!e&&!Vu){Jn(ot,"scrollEnd",ZS);return}t1(),Pi=ot.isRefreshing=!0,Vu||JS();var n=ma("refreshInit");BS&&ot.sort(),t||n0(),Ot.forEach(function(r){vi(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),Nt.slice(0).forEach(function(r){return r.refresh()}),Vu=!1,Nt.forEach(function(r){if(r._subPinOffset&&r.pin){var a=r.vars.horizontal?"offsetWidth":"offsetHeight",l=r.pin[a];r.revert(!0,1),r.adjustPinSpacing(r.pin[a]-l),r.refresh()}}),Rm=1,yx(!0),Nt.forEach(function(r){var a=Jr(r.scroller,r._dir),l=r.vars.end==="max"||r._endClamp&&r.end>a,c=r._startClamp&&r.start>=a;(l||c)&&r.setPositions(c?a-1:r.start,l?Math.max(c?a:r.start+1,a):r.end,!0)}),yx(!1),Rm=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),Ot.forEach(function(r){vi(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),e1(Kg,1),xd.pause(),da++,Pi=2,Cs(2),Nt.forEach(function(r){return vi(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Pi=ot.isRefreshing=!1,ma("refresh")},Dm=0,nd=1,ju,Cs=function(e){if(e===2||!Pi&&!Vu){ot.isUpdating=!0,ju&&ju.update(0);var t=Nt.length,n=gi(),r=n-Tp>=50,a=t&&Nt[0].scroll();if(nd=Dm>a?-1:1,Pi||(Dm=a),r&&(wr&&!Cd&&n-wr>200&&(wr=0,ma("scrollEnd")),bu=Tp,Tp=n),nd<0){for(Ri=t;Ri-- >0;)Nt[Ri]&&Nt[Ri].update(0,r);nd=1}else for(Ri=0;Ri<t;Ri++)Nt[Ri]&&Nt[Ri].update(0,r);ot.isUpdating=!1}tc=0},Lm=[qS,$S,Jg,Qg,yr+Xu,yr+Hu,yr+Wu,yr+Gu,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],id=Lm.concat([ca,fa,"boxSizing","max"+bl,"max"+e0,"position",yr,Un,Un+Wu,Un+Hu,Un+Xu,Un+Gu]),gw=function(e,t,n){vl(n);var r=e._gsap;if(r.spacerIsNative)vl(r.spacerState);else if(e._gsap.swappedIn){var a=t.parentNode;a&&(a.insertBefore(e,t),a.removeChild(t))}e._gsap.swappedIn=!1},bp=function(e,t,n,r){if(!e._gsap.swappedIn){for(var a=Lm.length,l=t.style,c=e.style,f;a--;)f=Lm[a],l[f]=n[f];l.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(l.display="inline-block"),c[Jg]=c[Qg]="auto",l.flexBasis=n.flexBasis||"auto",l.overflow="visible",l.boxSizing="border-box",l[ca]=yd(e,Li)+Vn,l[fa]=yd(e,Hn)+Vn,l[Un]=c[yr]=c[$S]=c[qS]="0",vl(r),c[ca]=c["max"+bl]=n[ca],c[fa]=c["max"+e0]=n[fa],c[Un]=n[Un],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},_w=/([A-Z])/g,vl=function(e){if(e){var t=e.t.style,n=e.length,r=0,a,l;for((e.t._gsap||et.core.getCache(e.t)).uncache=1;r<n;r+=2)l=e[r+1],a=e[r],l?t[a]=l:t[a]&&t.removeProperty(a.replace(_w,"-$1").toLowerCase())}},Af=function(e){for(var t=id.length,n=e.style,r=[],a=0;a<t;a++)r.push(id[a],n[id[a]]);return r.t=e,r},vw=function(e,t,n){for(var r=[],a=e.length,l=n?8:0,c;l<a;l+=2)c=e[l],r.push(c,c in t?t[c]:e[l+1]);return r.t=e.t,r},rd={left:0,top:0},Sx=function(e,t,n,r,a,l,c,f,h,p,m,g,v,E){vi(e)&&(e=e(f)),tr(e)&&e.substr(0,3)==="max"&&(e=g+(e.charAt(4)==="="?ed("0"+e.substr(3),n):0));var M=v?v.time():0,x,y,P;if(v&&v.seek(0),isNaN(e)||(e=+e),Pu(e))v&&(e=et.utils.mapRange(v.scrollTrigger.start,v.scrollTrigger.end,0,g,e)),c&&td(c,n,r,!0);else{vi(t)&&(t=t(f));var D=(e||"0").split(" "),A,R,L,N;P=Bi(t,f)||en,A=Ts(P)||{},(!A||!A.left&&!A.top)&&Sr(P).display==="none"&&(N=P.style.display,P.style.display="block",A=Ts(P),N?P.style.display=N:P.style.removeProperty("display")),R=ed(D[0],A[r.d]),L=ed(D[1]||"0",n),e=A[r.p]-h[r.p]-p+R+a-L,c&&td(c,L,r,n-L<20||c._isStart&&L>20),n-=n-L}if(E&&(f[E]=e||-.001,e<0&&(e=0)),l){var k=e+n,T=l._isStart;x="scroll"+r.d2,td(l,k,r,T&&k>20||!T&&(m?Math.max(en[x],ir[x]):l.parentNode[x])<=k+1),m&&(h=Ts(c),m&&(l.style[r.op.p]=h[r.op.p]-r.op.m-l._offset+Vn))}return v&&P&&(x=Ts(P),v.seek(g),y=Ts(P),v._caScrollDist=x[r.p]-y[r.p],e=e/v._caScrollDist*g),v&&v.seek(M),v?e:Math.round(e)},xw=/(webkit|moz|length|cssText|inset)/i,Mx=function(e,t,n,r){if(e.parentNode!==t){var a=e.style,l,c;if(t===en){e._stOrig=a.cssText,c=Sr(e);for(l in c)!+l&&!xw.test(l)&&c[l]&&typeof a[l]=="string"&&l!=="0"&&(a[l]=c[l]);a.top=n,a.left=r}else a.cssText=e._stOrig;et.core.getCache(e).uncache=1,t.appendChild(e)}},n1=function(e,t,n){var r=t,a=r;return function(l){var c=Math.round(e());return c!==r&&c!==a&&Math.abs(c-r)>3&&Math.abs(c-a)>3&&(l=c,n&&n()),a=r,r=Math.round(l),r}},bf=function(e,t,n){var r={};r[t.p]="+="+n,et.set(e,r)},Ex=function(e,t){var n=Ao(e,t),r="_scroll"+t.p2,a=function l(c,f,h,p,m){var g=l.tween,v=f.onComplete,E={};h=h||n();var M=n1(n,h,function(){g.kill(),l.tween=0});return m=p&&m||0,p=p||c-h,g&&g.kill(),f[r]=c,f.inherit=!1,f.modifiers=E,E[r]=function(){return M(h+p*g.ratio+m*g.ratio*g.ratio)},f.onUpdate=function(){Ot.cache++,l.tween&&Cs()},f.onComplete=function(){l.tween=0,v&&v.call(g)},g=l.tween=et.to(e,f),g};return e[r]=n,n.wheelHandler=function(){return a.tween&&a.tween.kill()&&(a.tween=0)},Jn(e,"wheel",n.wheelHandler),ot.isTouch&&Jn(e,"touchmove",n.wheelHandler),a},ot=(function(){function s(t,n){al||s.register(et)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Cm(this),this.init(t,n)}var e=s.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Cu){this.update=this.refresh=this.kill=$r;return}n=gx(tr(n)||Pu(n)||n.nodeType?{trigger:n}:n,Tf);var a=n,l=a.onUpdate,c=a.toggleClass,f=a.id,h=a.onToggle,p=a.onRefresh,m=a.scrub,g=a.trigger,v=a.pin,E=a.pinSpacing,M=a.invalidateOnRefresh,x=a.anticipatePin,y=a.onScrubComplete,P=a.onSnapComplete,D=a.once,A=a.snap,R=a.pinReparent,L=a.pinSpacer,N=a.containerAnimation,k=a.fastScrollEnd,T=a.preventOverlaps,b=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Li:Hn,V=!m&&m!==0,z=Bi(n.scroller||Ft),G=et.core.getCache(z),Q=ha(z),ne=("pinType"in n?n.pinType:Mo(z,"pinType")||Q&&"fixed")==="fixed",Z=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Y=V&&n.toggleActions.split(" "),X="markers"in n?n.markers:Tf.markers,re=Q?0:parseFloat(Sr(z)["border"+b.p2+bl])||0,U=this,O=n.onRefreshInit&&function(){return n.onRefreshInit(U)},ee=uw(z,Q,b),Ee=cw(z,Q),be=0,Oe=0,se=0,ce=Ao(z,b),_e,Ue,Fe,mt,kt,Xe,dt,Tt,ct,oe,W,Gt,wt,ft,We,F,w,q,pe,me,de,He,we,je,$e,Me,Ce,qe,Ke,Ae,xt,H,Ne,xe,Ie,ve,ge,Pe,lt;if(U._startClamp=U._endClamp=!1,U._dir=b,x*=45,U.scroller=z,U.scroll=N?N.time.bind(N):ce,mt=ce(),U.vars=n,r=r||n.animation,"refreshPriority"in n&&(BS=1,n.refreshPriority===-9999&&(ju=U)),G.tweenScroll=G.tweenScroll||{top:Ex(z,Hn),left:Ex(z,Li)},U.tweenTo=_e=G.tweenScroll[b.p],U.scrubDuration=function(ke){Ne=Pu(ke)&&ke,Ne?H?H.duration(ke):H=et.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ne,paused:!0,onComplete:function(){return y&&y(U)}}):(H&&H.progress(1).kill(),H=0)},r&&(r.vars.lazy=!1,r._initted&&!U.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),U.animation=r.pause(),r.scrollTrigger=U,U.scrubDuration(m),Ae=0,f||(f=r.vars.id)),A&&((!Qo(A)||A.push)&&(A={snapTo:A}),"scrollBehavior"in en.style&&et.set(Q?[en,ir]:z,{scrollBehavior:"auto"}),Ot.forEach(function(ke){return vi(ke)&&ke.target===(Q?hn.scrollingElement||ir:z)&&(ke.smooth=!1)}),Fe=vi(A.snapTo)?A.snapTo:A.snapTo==="labels"?dw(r):A.snapTo==="labelsDirectional"?hw(r):A.directional!==!1?function(ke,gt){return t0(A.snapTo)(ke,gi()-Oe<500?0:gt.direction)}:et.utils.snap(A.snapTo),xe=A.duration||{min:.1,max:2},xe=Qo(xe)?Bu(xe.min,xe.max):Bu(xe,xe),Ie=et.delayedCall(A.delay||Ne/2||.1,function(){var ke=ce(),gt=gi()-Oe<500,at=_e.tween;if((gt||Math.abs(U.getVelocity())<10)&&!at&&!Cd&&be!==ke){var yt=(ke-Xe)/ft,fn=r&&!V?r.totalProgress():yt,Ct=gt?0:(fn-xt)/(gi()-bu)*1e3||0,Wt=et.utils.clamp(-yt,1-yt,Ha(Ct/2)*Ct/.185),En=yt+(A.inertia===!1?0:Wt),an,nn,Pt=A,ti=Pt.onStart,Zt=Pt.onInterrupt,Xn=Pt.onComplete;if(an=Fe(En,U),Pu(an)||(an=En),nn=Math.max(0,Math.round(Xe+an*ft)),ke<=dt&&ke>=Xe&&nn!==ke){if(at&&!at._initted&&at.data<=Ha(nn-ke))return;A.inertia===!1&&(Wt=an-yt),_e(nn,{duration:xe(Ha(Math.max(Ha(En-fn),Ha(an-fn))*.185/Ct/.05||0)),ease:A.ease||"power3",data:Ha(nn-ke),onInterrupt:function(){return Ie.restart(!0)&&Zt&&Zt(U)},onComplete:function(){U.update(),be=ce(),r&&!V&&(H?H.resetTo("totalProgress",an,r._tTime/r._tDur):r.progress(an)),Ae=xt=r&&!V?r.totalProgress():U.progress,P&&P(U),Xn&&Xn(U)}},ke,Wt*ft,nn-ke-Wt*ft),ti&&ti(U,_e.tween)}}else U.isActive&&be!==ke&&Ie.restart(!0)}).pause()),f&&(Pm[f]=U),g=U.trigger=Bi(g||v!==!0&&v),lt=g&&g._gsap&&g._gsap.stRevert,lt&&(lt=lt(U)),v=v===!0?g:Bi(v),tr(c)&&(c={targets:g,className:c}),v&&(E===!1||E===yr||(E=!E&&v.parentNode&&v.parentNode.style&&Sr(v.parentNode).display==="flex"?!1:Un),U.pin=v,Ue=et.core.getCache(v),Ue.spacer?We=Ue.pinState:(L&&(L=Bi(L),L&&!L.nodeType&&(L=L.current||L.nativeElement),Ue.spacerIsNative=!!L,L&&(Ue.spacerState=Af(L))),Ue.spacer=q=L||hn.createElement("div"),q.classList.add("pin-spacer"),f&&q.classList.add("pin-spacer-"+f),Ue.pinState=We=Af(v)),n.force3D!==!1&&et.set(v,{force3D:!0}),U.spacer=q=Ue.spacer,Ke=Sr(v),je=Ke[E+b.os2],me=et.getProperty(v),de=et.quickSetter(v,b.a,Vn),bp(v,q,Ke),w=Af(v)),X){Gt=Qo(X)?gx(X,_x):_x,oe=wf("scroller-start",f,z,b,Gt,0),W=wf("scroller-end",f,z,b,Gt,0,oe),pe=oe["offset"+b.op.d2];var Bt=Bi(Mo(z,"content")||z);Tt=this.markerStart=wf("start",f,Bt,b,Gt,pe,0,N),ct=this.markerEnd=wf("end",f,Bt,b,Gt,pe,0,N),N&&(Pe=et.quickSetter([Tt,ct],b.a,Vn)),!ne&&!(ns.length&&Mo(z,"fixedMarkers")===!0)&&(fw(Q?en:z),et.set([oe,W],{force3D:!0}),Me=et.quickSetter(oe,b.a,Vn),qe=et.quickSetter(W,b.a,Vn))}if(N){var Be=N.vars.onUpdate,it=N.vars.onUpdateParams;N.eventCallback("onUpdate",function(){U.update(0,0,1),Be&&Be.apply(N,it||[])})}if(U.previous=function(){return Nt[Nt.indexOf(U)-1]},U.next=function(){return Nt[Nt.indexOf(U)+1]},U.revert=function(ke,gt){if(!gt)return U.kill(!0);var at=ke!==!1||!U.enabled,yt=mi;at!==U.isReverted&&(at&&(ve=Math.max(ce(),U.scroll.rec||0),se=U.progress,ge=r&&r.progress()),Tt&&[Tt,ct,oe,W].forEach(function(fn){return fn.style.display=at?"none":"block"}),at&&(mi=U,U.update(at)),v&&(!R||!U.isActive)&&(at?gw(v,q,We):bp(v,q,Sr(v),$e)),at||U.update(at),mi=yt,U.isReverted=at)},U.refresh=function(ke,gt,at,yt){if(!((mi||!U.enabled)&&!gt)){if(v&&ke&&wr){Jn(s,"scrollEnd",ZS);return}!Pi&&O&&O(U),mi=U,_e.tween&&!at&&(_e.tween.kill(),_e.tween=0),H&&H.pause(),M&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(Ge){return Ge.vars.immediateRender&&Ge.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),U.isReverted||U.revert(!0,!0),U._subPinOffset=!1;var fn=ee(),Ct=Ee(),Wt=N?N.duration():Jr(z,b),En=ft<=.01||!ft,an=0,nn=yt||0,Pt=Qo(at)?at.end:n.end,ti=n.endTrigger||g,Zt=Qo(at)?at.start:n.start||(n.start===0||!g?0:v?"0 0":"0 100%"),Xn=U.pinnedContainer=n.pinnedContainer&&Bi(n.pinnedContainer,U),ai=g&&Math.max(0,Nt.indexOf(U))||0,Tn=ai,wn,Cn,Ar,ks,Dt,I,K,ue,le,te,Re,ze,De;for(X&&Qo(at)&&(ze=et.getProperty(oe,b.p),De=et.getProperty(W,b.p));Tn-- >0;)I=Nt[Tn],I.end||I.refresh(0,1)||(mi=U),K=I.pin,K&&(K===g||K===v||K===Xn)&&!I.isReverted&&(te||(te=[]),te.unshift(I),I.revert(!0,!0)),I!==Nt[Tn]&&(ai--,Tn--);for(vi(Zt)&&(Zt=Zt(U)),Zt=dx(Zt,"start",U),Xe=Sx(Zt,g,fn,b,ce(),Tt,oe,U,Ct,re,ne,Wt,N,U._startClamp&&"_startClamp")||(v?-.001:0),vi(Pt)&&(Pt=Pt(U)),tr(Pt)&&!Pt.indexOf("+=")&&(~Pt.indexOf(" ")?Pt=(tr(Zt)?Zt.split(" ")[0]:"")+Pt:(an=ed(Pt.substr(2),fn),Pt=tr(Zt)?Zt:(N?et.utils.mapRange(0,N.duration(),N.scrollTrigger.start,N.scrollTrigger.end,Xe):Xe)+an,ti=g)),Pt=dx(Pt,"end",U),dt=Math.max(Xe,Sx(Pt||(ti?"100% 0":Wt),ti,fn,b,ce()+an,ct,W,U,Ct,re,ne,Wt,N,U._endClamp&&"_endClamp"))||-.001,an=0,Tn=ai;Tn--;)I=Nt[Tn]||{},K=I.pin,K&&I.start-I._pinPush<=Xe&&!N&&I.end>0&&(wn=I.end-(U._startClamp?Math.max(0,I.start):I.start),(K===g&&I.start-I._pinPush<Xe||K===Xn)&&isNaN(Zt)&&(an+=wn*(1-I.progress)),K===v&&(nn+=wn));if(Xe+=an,dt+=an,U._startClamp&&(U._startClamp+=an),U._endClamp&&!Pi&&(U._endClamp=dt||-.001,dt=Math.min(dt,Jr(z,b))),ft=dt-Xe||(Xe-=.01)&&.001,En&&(se=et.utils.clamp(0,1,et.utils.normalize(Xe,dt,ve))),U._pinPush=nn,Tt&&an&&(wn={},wn[b.a]="+="+an,Xn&&(wn[b.p]="-="+ce()),et.set([Tt,ct],wn)),v&&!(Rm&&U.end>=Jr(z,b)))wn=Sr(v),ks=b===Hn,Ar=ce(),He=parseFloat(me(b.a))+nn,!Wt&&dt>1&&(Re=(Q?hn.scrollingElement||ir:z).style,Re={style:Re,value:Re["overflow"+b.a.toUpperCase()]},Q&&Sr(en)["overflow"+b.a.toUpperCase()]!=="scroll"&&(Re.style["overflow"+b.a.toUpperCase()]="scroll")),bp(v,q,wn),w=Af(v),Cn=Ts(v,!0),ue=ne&&Ao(z,ks?Li:Hn)(),E?($e=[E+b.os2,ft+nn+Vn],$e.t=q,Tn=E===Un?yd(v,b)+ft+nn:0,Tn&&($e.push(b.d,Tn+Vn),q.style.flexBasis!=="auto"&&(q.style.flexBasis=Tn+Vn)),vl($e),Xn&&Nt.forEach(function(Ge){Ge.pin===Xn&&Ge.vars.pinSpacing!==!1&&(Ge._subPinOffset=!0)}),ne&&ce(ve)):(Tn=yd(v,b),Tn&&q.style.flexBasis!=="auto"&&(q.style.flexBasis=Tn+Vn)),ne&&(Dt={top:Cn.top+(ks?Ar-Xe:ue)+Vn,left:Cn.left+(ks?ue:Ar-Xe)+Vn,boxSizing:"border-box",position:"fixed"},Dt[ca]=Dt["max"+bl]=Math.ceil(Cn.width)+Vn,Dt[fa]=Dt["max"+e0]=Math.ceil(Cn.height)+Vn,Dt[yr]=Dt[yr+Wu]=Dt[yr+Hu]=Dt[yr+Xu]=Dt[yr+Gu]="0",Dt[Un]=wn[Un],Dt[Un+Wu]=wn[Un+Wu],Dt[Un+Hu]=wn[Un+Hu],Dt[Un+Xu]=wn[Un+Xu],Dt[Un+Gu]=wn[Un+Gu],F=vw(We,Dt,R),Pi&&ce(0)),r?(le=r._initted,Mp(1),r.render(r.duration(),!0,!0),we=me(b.a)-He+ft+nn,Ce=Math.abs(ft-we)>1,ne&&Ce&&F.splice(F.length-2,2),r.render(0,!0,!0),le||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Mp(0)):we=ft,Re&&(Re.value?Re.style["overflow"+b.a.toUpperCase()]=Re.value:Re.style.removeProperty("overflow-"+b.a));else if(g&&ce()&&!N)for(Cn=g.parentNode;Cn&&Cn!==en;)Cn._pinOffset&&(Xe-=Cn._pinOffset,dt-=Cn._pinOffset),Cn=Cn.parentNode;te&&te.forEach(function(Ge){return Ge.revert(!1,!0)}),U.start=Xe,U.end=dt,mt=kt=Pi?ve:ce(),!N&&!Pi&&(mt<ve&&ce(ve),U.scroll.rec=0),U.revert(!1,!0),Oe=gi(),Ie&&(be=-1,Ie.restart(!0)),mi=0,r&&V&&(r._initted||ge)&&r.progress()!==ge&&r.progress(ge||0,!0).render(r.time(),!0,!0),(En||se!==U.progress||N||M||r&&!r._initted)&&(r&&!V&&(r._initted||se||r.vars.immediateRender!==!1)&&r.totalProgress(N&&Xe<-.001&&!se?et.utils.normalize(Xe,dt,0):se,!0),U.progress=En||(mt-Xe)/ft===se?0:se),v&&E&&(q._pinOffset=Math.round(U.progress*we)),H&&H.invalidate(),isNaN(ze)||(ze-=et.getProperty(oe,b.p),De-=et.getProperty(W,b.p),bf(oe,b,ze),bf(Tt,b,ze-(yt||0)),bf(W,b,De),bf(ct,b,De-(yt||0))),En&&!Pi&&U.update(),p&&!Pi&&!wt&&(wt=!0,p(U),wt=!1)}},U.getVelocity=function(){return(ce()-kt)/(gi()-bu)*1e3||0},U.endAnimation=function(){gu(U.callbackAnimation),r&&(H?H.progress(1):r.paused()?V||gu(r,U.direction<0,1):gu(r,r.reversed()))},U.labelToScroll=function(ke){return r&&r.labels&&(Xe||U.refresh()||Xe)+r.labels[ke]/r.duration()*ft||0},U.getTrailing=function(ke){var gt=Nt.indexOf(U),at=U.direction>0?Nt.slice(0,gt).reverse():Nt.slice(gt+1);return(tr(ke)?at.filter(function(yt){return yt.vars.preventOverlaps===ke}):at).filter(function(yt){return U.direction>0?yt.end<=Xe:yt.start>=dt})},U.update=function(ke,gt,at){if(!(N&&!at&&!ke)){var yt=Pi===!0?ve:U.scroll(),fn=ke?0:(yt-Xe)/ft,Ct=fn<0?0:fn>1?1:fn||0,Wt=U.progress,En,an,nn,Pt,ti,Zt,Xn,ai;if(gt&&(kt=mt,mt=N?ce():yt,A&&(xt=Ae,Ae=r&&!V?r.totalProgress():Ct)),x&&v&&!mi&&!yf&&wr&&(!Ct&&Xe<yt+(yt-kt)/(gi()-bu)*x?Ct=1e-4:Ct===1&&dt>yt+(yt-kt)/(gi()-bu)*x&&(Ct=.9999)),Ct!==Wt&&U.enabled){if(En=U.isActive=!!Ct&&Ct<1,an=!!Wt&&Wt<1,Zt=En!==an,ti=Zt||!!Ct!=!!Wt,U.direction=Ct>Wt?1:-1,U.progress=Ct,ti&&!mi&&(nn=Ct&&!Wt?0:Ct===1?1:Wt===1?2:3,V&&(Pt=!Zt&&Y[nn+1]!=="none"&&Y[nn+1]||Y[nn],ai=r&&(Pt==="complete"||Pt==="reset"||Pt in r))),T&&(Zt||ai)&&(ai||m||!r)&&(vi(T)?T(U):U.getTrailing(T).forEach(function(Ar){return Ar.endAnimation()})),V||(H&&!mi&&!yf?(H._dp._time-H._start!==H._time&&H.render(H._dp._time-H._start),H.resetTo?H.resetTo("totalProgress",Ct,r._tTime/r._tDur):(H.vars.totalProgress=Ct,H.invalidate().restart())):r&&r.totalProgress(Ct,!!(mi&&(Oe||ke)))),v){if(ke&&E&&(q.style[E+b.os2]=je),!ne)de(Ru(He+we*Ct));else if(ti){if(Xn=!ke&&Ct>Wt&&dt+1>yt&&yt+1>=Jr(z,b),R)if(!ke&&(En||Xn)){var Tn=Ts(v,!0),wn=yt-Xe;Mx(v,en,Tn.top+(b===Hn?wn:0)+Vn,Tn.left+(b===Hn?0:wn)+Vn)}else Mx(v,q);vl(En||Xn?F:w),Ce&&Ct<1&&En||de(He+(Ct===1&&!Xn?we:0))}}A&&!_e.tween&&!mi&&!yf&&Ie.restart(!0),c&&(Zt||D&&Ct&&(Ct<1||!Ep))&&ec(c.targets).forEach(function(Ar){return Ar.classList[En||D?"add":"remove"](c.className)}),l&&!V&&!ke&&l(U),ti&&!mi?(V&&(ai&&(Pt==="complete"?r.pause().totalProgress(1):Pt==="reset"?r.restart(!0).pause():Pt==="restart"?r.restart(!0):r[Pt]()),l&&l(U)),(Zt||!Ep)&&(h&&Zt&&wp(U,h),Z[nn]&&wp(U,Z[nn]),D&&(Ct===1?U.kill(!1,1):Z[nn]=0),Zt||(nn=Ct===1?1:3,Z[nn]&&wp(U,Z[nn]))),k&&!En&&Math.abs(U.getVelocity())>(Pu(k)?k:2500)&&(gu(U.callbackAnimation),H?H.progress(1):gu(r,Pt==="reverse"?1:!Ct,1))):V&&l&&!mi&&l(U)}if(qe){var Cn=N?yt/N.duration()*(N._caScrollDist||0):yt;Me(Cn+(oe._isFlipped?1:0)),qe(Cn)}Pe&&Pe(-yt/N.duration()*(N._caScrollDist||0))}},U.enable=function(ke,gt){U.enabled||(U.enabled=!0,Jn(z,"resize",Du),Q||Jn(z,"scroll",Ga),O&&Jn(s,"refreshInit",O),ke!==!1&&(U.progress=se=0,mt=kt=be=ce()),gt!==!1&&U.refresh())},U.getTween=function(ke){return ke&&_e?_e.tween:H},U.setPositions=function(ke,gt,at,yt){if(N){var fn=N.scrollTrigger,Ct=N.duration(),Wt=fn.end-fn.start;ke=fn.start+Wt*ke/Ct,gt=fn.start+Wt*gt/Ct}U.refresh(!1,!1,{start:hx(ke,at&&!!U._startClamp),end:hx(gt,at&&!!U._endClamp)},yt),U.update()},U.adjustPinSpacing=function(ke){if($e&&ke){var gt=$e.indexOf(b.d)+1;$e[gt]=parseFloat($e[gt])+ke+Vn,$e[1]=parseFloat($e[1])+ke+Vn,vl($e)}},U.disable=function(ke,gt){if(ke!==!1&&U.revert(!0,!0),U.enabled&&(U.enabled=U.isActive=!1,gt||H&&H.pause(),ve=0,Ue&&(Ue.uncache=1),O&&Qn(s,"refreshInit",O),Ie&&(Ie.pause(),_e.tween&&_e.tween.kill()&&(_e.tween=0)),!Q)){for(var at=Nt.length;at--;)if(Nt[at].scroller===z&&Nt[at]!==U)return;Qn(z,"resize",Du),Q||Qn(z,"scroll",Ga)}},U.kill=function(ke,gt){U.disable(ke,gt),H&&!gt&&H.kill(),f&&delete Pm[f];var at=Nt.indexOf(U);at>=0&&Nt.splice(at,1),at===Ri&&nd>0&&Ri--,at=0,Nt.forEach(function(yt){return yt.scroller===U.scroller&&(at=1)}),at||Pi||(U.scroll.rec=0),r&&(r.scrollTrigger=null,ke&&r.revert({kill:!1}),gt||r.kill()),Tt&&[Tt,ct,oe,W].forEach(function(yt){return yt.parentNode&&yt.parentNode.removeChild(yt)}),ju===U&&(ju=0),v&&(Ue&&(Ue.uncache=1),at=0,Nt.forEach(function(yt){return yt.pin===v&&at++}),at||(Ue.spacer=0)),n.onKill&&n.onKill(U)},Nt.push(U),U.enable(!1,!1),lt&&lt(U),r&&r.add&&!ft){var Mt=U.update;U.update=function(){U.update=Mt,Ot.cache++,Xe||dt||U.refresh()},et.delayedCall(.01,U.update),ft=.01,Xe=dt=0}else U.refresh();v&&mw()},s.register=function(n){return al||(et=n||XS(),WS()&&window.document&&s.enable(),al=Cu),al},s.defaults=function(n){if(n)for(var r in n)Tf[r]=n[r];return Tf},s.disable=function(n,r){Cu=0,Nt.forEach(function(l){return l[r?"kill":"disable"](n)}),Qn(Ft,"wheel",Ga),Qn(hn,"scroll",Ga),clearInterval(xf),Qn(hn,"touchcancel",$r),Qn(en,"touchstart",$r),Mf(Qn,hn,"pointerdown,touchstart,mousedown",px),Mf(Qn,hn,"pointerup,touchend,mouseup",mx),xd.kill(),Sf(Qn);for(var a=0;a<Ot.length;a+=3)Ef(Qn,Ot[a],Ot[a+1]),Ef(Qn,Ot[a],Ot[a+2])},s.enable=function(){if(Ft=window,hn=document,ir=hn.documentElement,en=hn.body,et&&(ec=et.utils.toArray,Bu=et.utils.clamp,Cm=et.core.context||$r,Mp=et.core.suppressOverwrites||$r,Kg=Ft.history.scrollRestoration||"auto",Dm=Ft.pageYOffset||0,et.core.globals("ScrollTrigger",s),en)){Cu=1,_l=document.createElement("div"),_l.style.height="100vh",_l.style.position="absolute",t1(),lw(),Ln.register(et),s.isTouch=Ln.isTouch,fo=Ln.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),bm=Ln.isTouch===1,Jn(Ft,"wheel",Ga),$g=[Ft,hn,ir,en],et.matchMedia?(s.matchMedia=function(h){var p=et.matchMedia(),m;for(m in h)p.add(m,h[m]);return p},et.addEventListener("matchMediaInit",function(){JS(),n0()}),et.addEventListener("matchMediaRevert",function(){return QS()}),et.addEventListener("matchMedia",function(){ia(0,1),ma("matchMedia")}),et.matchMedia().add("(orientation: portrait)",function(){return Ap(),Ap})):console.warn("Requires GSAP 3.11.0 or later"),Ap(),Jn(hn,"scroll",Ga);var n=en.hasAttribute("style"),r=en.style,a=r.borderTopStyle,l=et.core.Animation.prototype,c,f;for(l.revert||Object.defineProperty(l,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",c=Ts(en),Hn.m=Math.round(c.top+Hn.sc())||0,Li.m=Math.round(c.left+Li.sc())||0,a?r.borderTopStyle=a:r.removeProperty("border-top-style"),n||(en.setAttribute("style",""),en.removeAttribute("style")),xf=setInterval(vx,250),et.delayedCall(.5,function(){return yf=0}),Jn(hn,"touchcancel",$r),Jn(en,"touchstart",$r),Mf(Jn,hn,"pointerdown,touchstart,mousedown",px),Mf(Jn,hn,"pointerup,touchend,mouseup",mx),Am=et.utils.checkPrefix("transform"),id.push(Am),al=gi(),xd=et.delayedCall(.2,ia).pause(),ll=[hn,"visibilitychange",function(){var h=Ft.innerWidth,p=Ft.innerHeight;hn.hidden?(cx=h,fx=p):(cx!==h||fx!==p)&&Du()},hn,"DOMContentLoaded",ia,Ft,"load",ia,Ft,"resize",Du],Sf(Jn),Nt.forEach(function(h){return h.enable(0,1)}),f=0;f<Ot.length;f+=3)Ef(Qn,Ot[f],Ot[f+1]),Ef(Qn,Ot[f],Ot[f+2])}},s.config=function(n){"limitCallbacks"in n&&(Ep=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(xf)||(xf=r)&&setInterval(vx,r),"ignoreMobileResize"in n&&(bm=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Sf(Qn)||Sf(Jn,n.autoRefreshEvents||"none"),VS=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,r){var a=Bi(n),l=Ot.indexOf(a),c=ha(a);~l&&Ot.splice(l,c?6:2),r&&(c?ns.unshift(Ft,r,en,r,ir,r):ns.unshift(a,r))},s.clearMatchMedia=function(n){Nt.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},s.isInViewport=function(n,r,a){var l=(tr(n)?Bi(n):n).getBoundingClientRect(),c=l[a?ca:fa]*r||0;return a?l.right-c>0&&l.left+c<Ft.innerWidth:l.bottom-c>0&&l.top+c<Ft.innerHeight},s.positionInViewport=function(n,r,a){tr(n)&&(n=Bi(n));var l=n.getBoundingClientRect(),c=l[a?ca:fa],f=r==null?c/2:r in Sd?Sd[r]*c:~r.indexOf("%")?parseFloat(r)*c/100:parseFloat(r)||0;return a?(l.left+f)/Ft.innerWidth:(l.top+f)/Ft.innerHeight},s.killAll=function(n){if(Nt.slice(0).forEach(function(a){return a.vars.id!=="ScrollSmoother"&&a.kill()}),n!==!0){var r=pa.killAll||[];pa={},r.forEach(function(a){return a()})}},s})();ot.version="3.14.2";ot.saveStyles=function(s){return s?ec(s).forEach(function(e){if(e&&e.style){var t=er.indexOf(e);t>=0&&er.splice(t,5),er.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),et.core.getCache(e),Cm())}}):er};ot.revert=function(s,e){return n0(!s,e)};ot.create=function(s,e){return new ot(s,e)};ot.refresh=function(s){return s?Du(!0):(al||ot.register())&&ia(!0)};ot.update=function(s){return++Ot.cache&&Cs(s===!0?2:0)};ot.clearScrollMemory=e1;ot.maxScroll=function(s,e){return Jr(s,e?Li:Hn)};ot.getScrollFunc=function(s,e){return Ao(Bi(s),e?Li:Hn)};ot.getById=function(s){return Pm[s]};ot.getAll=function(){return Nt.filter(function(s){return s.vars.id!=="ScrollSmoother"})};ot.isScrolling=function(){return!!wr};ot.snapDirectional=t0;ot.addEventListener=function(s,e){var t=pa[s]||(pa[s]=[]);~t.indexOf(e)||t.push(e)};ot.removeEventListener=function(s,e){var t=pa[s],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};ot.batch=function(s,e){var t=[],n={},r=e.interval||.016,a=e.batchMax||1e9,l=function(h,p){var m=[],g=[],v=et.delayedCall(r,function(){p(m,g),m=[],g=[]}).pause();return function(E){m.length||v.restart(!0),m.push(E.trigger),g.push(E),a<=m.length&&v.progress(1)}},c;for(c in e)n[c]=c.substr(0,2)==="on"&&vi(e[c])&&c!=="onRefreshInit"?l(c,e[c]):e[c];return vi(a)&&(a=a(),Jn(ot,"refresh",function(){return a=e.batchMax()})),ec(s).forEach(function(f){var h={};for(c in n)h[c]=n[c];h.trigger=f,t.push(ot.create(h))}),t};var Tx=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},Cp=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Ln.isTouch?" pinch-zoom":""):"none",e===ir&&s(en,t)},Cf={auto:1,scroll:1},yw=function(e){var t=e.event,n=e.target,r=e.axis,a=(t.changedTouches?t.changedTouches[0]:t).target,l=a._gsap||et.core.getCache(a),c=gi(),f;if(!l._isScrollT||c-l._isScrollT>2e3){for(;a&&a!==en&&(a.scrollHeight<=a.clientHeight&&a.scrollWidth<=a.clientWidth||!(Cf[(f=Sr(a)).overflowY]||Cf[f.overflowX]));)a=a.parentNode;l._isScroll=a&&a!==n&&!ha(a)&&(Cf[(f=Sr(a)).overflowY]||Cf[f.overflowX]),l._isScrollT=c}(l._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},i1=function(e,t,n,r){return Ln.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&yw,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&Jn(hn,Ln.eventTypes[0],Ax,!1,!0)},onDisable:function(){return Qn(hn,Ln.eventTypes[0],Ax,!0)}})},Sw=/(input|label|select|textarea)/i,wx,Ax=function(e){var t=Sw.test(e.target.tagName);(t||wx)&&(e._gsapAllow=!0,wx=t)},Mw=function(e){Qo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,r=t.momentum,a=t.allowNestedScroll,l=t.onRelease,c,f,h=Bi(e.target)||ir,p=et.core.globals().ScrollSmoother,m=p&&p.get(),g=fo&&(e.content&&Bi(e.content)||m&&e.content!==!1&&!m.smooth()&&m.content()),v=Ao(h,Hn),E=Ao(h,Li),M=1,x=(Ln.isTouch&&Ft.visualViewport?Ft.visualViewport.scale*Ft.visualViewport.width:Ft.outerWidth)/Ft.innerWidth,y=0,P=vi(r)?function(){return r(c)}:function(){return r||2.8},D,A,R=i1(h,e.type,!0,a),L=function(){return A=!1},N=$r,k=$r,T=function(){f=Jr(h,Hn),k=Bu(fo?1:0,f),n&&(N=Bu(0,Jr(h,Li))),D=da},b=function(){g._gsap.y=Ru(parseFloat(g._gsap.y)+v.offset)+"px",g.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(g._gsap.y)+", 0, 1)",v.offset=v.cacheID=0},V=function(){if(A){requestAnimationFrame(L);var X=Ru(c.deltaY/2),re=k(v.v-X);if(g&&re!==v.v+v.offset){v.offset=re-v.v;var U=Ru((parseFloat(g&&g._gsap.y)||0)-v.offset);g.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+U+", 0, 1)",g._gsap.y=U+"px",v.cacheID=Ot.cache,Cs()}return!0}v.offset&&b(),A=!0},z,G,Q,ne,Z=function(){T(),z.isActive()&&z.vars.scrollY>f&&(v()>f?z.progress(1)&&v(f):z.resetTo("scrollY",f))};return g&&et.set(g,{y:"+=0"}),e.ignoreCheck=function(Y){return fo&&Y.type==="touchmove"&&V()||M>1.05&&Y.type!=="touchstart"||c.isGesturing||Y.touches&&Y.touches.length>1},e.onPress=function(){A=!1;var Y=M;M=Ru((Ft.visualViewport&&Ft.visualViewport.scale||1)/x),z.pause(),Y!==M&&Cp(h,M>1.01?!0:n?!1:"x"),G=E(),Q=v(),T(),D=da},e.onRelease=e.onGestureStart=function(Y,X){if(v.offset&&b(),!X)ne.restart(!0);else{Ot.cache++;var re=P(),U,O;n&&(U=E(),O=U+re*.05*-Y.velocityX/.227,re*=Tx(E,U,O,Jr(h,Li)),z.vars.scrollX=N(O)),U=v(),O=U+re*.05*-Y.velocityY/.227,re*=Tx(v,U,O,Jr(h,Hn)),z.vars.scrollY=k(O),z.invalidate().duration(re).play(.01),(fo&&z.vars.scrollY>=f||U>=f-1)&&et.to({},{onUpdate:Z,duration:re})}l&&l(Y)},e.onWheel=function(){z._ts&&z.pause(),gi()-y>1e3&&(D=0,y=gi())},e.onChange=function(Y,X,re,U,O){if(da!==D&&T(),X&&n&&E(N(U[2]===X?G+(Y.startX-Y.x):E()+X-U[1])),re){v.offset&&b();var ee=O[2]===re,Ee=ee?Q+Y.startY-Y.y:v()+re-O[1],be=k(Ee);ee&&Ee!==be&&(Q+=be-Ee),v(be)}(re||X)&&Cs()},e.onEnable=function(){Cp(h,n?!1:"x"),ot.addEventListener("refresh",Z),Jn(Ft,"resize",Z),v.smooth&&(v.target.style.scrollBehavior="auto",v.smooth=E.smooth=!1),R.enable()},e.onDisable=function(){Cp(h,!0),Qn(Ft,"resize",Z),ot.removeEventListener("refresh",Z),R.kill()},e.lockAxis=e.lockAxis!==!1,c=new Ln(e),c.iOS=fo,fo&&!v()&&v(1),fo&&et.ticker.add($r),ne=c._dc,z=et.to(c,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:n1(v,v(),function(){return z.pause()})},onUpdate:Cs,onComplete:ne.vars.onComplete}),c};ot.sort=function(s){if(vi(s))return Nt.sort(s);var e=Ft.pageYOffset||0;return ot.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+Ft.innerHeight}),Nt.sort(s||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ot.observe=function(s){return new Ln(s)};ot.normalizeScroll=function(s){if(typeof s>"u")return Ci;if(s===!0&&Ci)return Ci.enable();if(s===!1){Ci&&Ci.kill(),Ci=s;return}var e=s instanceof Ln?s:Mw(s);return Ci&&Ci.target===e.target&&Ci.kill(),ha(e.target)&&(Ci=e),e};ot.core={_getVelocityProp:wm,_inputObserver:i1,_scrollers:Ot,_proxies:ns,bridge:{ss:function(){wr||ma("scrollStart"),wr=gi()},ref:function(){return mi}}};XS()&&et.registerPlugin(ot);tt.registerPlugin(ot);function Ew({children:s}){return Ye.useEffect(()=>{window.scrollTo(0,0);const e=new zE({lerp:.09,smoothWheel:!0});e.scrollTo(0,{immediate:!0}),ot.scrollerProxy(window,{scrollTop(n){return arguments.length&&e.scrollTo(n),e.scroll},getBoundingClientRect(){return{top:0,left:0,width:window.innerWidth,height:window.innerHeight}}}),e.on("scroll",ot.update);const t=n=>e.raf(n*1e3);return tt.ticker.add(t),tt.ticker.lagSmoothing(0),ot.refresh(),requestAnimationFrame(()=>{window.scrollTo(0,0),e.scrollTo(0,{immediate:!0})}),()=>{tt.ticker.remove(t),e.destroy()}},[]),J.jsx(J.Fragment,{children:s})}function Tw(){const s=Ye.useRef(null);return Ye.useEffect(()=>{if(typeof window>"u")return;let e=window.innerWidth/2,t=window.innerHeight/2,n=e,r=t,a=0,l=e,c;const f=v=>{e=v.clientX,t=v.clientY},h=()=>{n+=(e-n)*.14,r+=(t-r)*.14,a=e-l,l=e;const v=Math.max(1,Math.min(2.5,1+Math.abs(a)*.04)),E=1/v;tt.set(s.current,{x:n,y:r,scaleX:v,scaleY:E}),c=requestAnimationFrame(h)};window.addEventListener("mousemove",f),c=requestAnimationFrame(h);const p=()=>tt.to(s.current,{width:48,height:48,duration:.3,ease:"expo.out"}),m=()=>tt.to(s.current,{width:18,height:18,duration:.3,ease:"expo.out"}),g=v=>{v.target.closest("a, button, [data-hover]")?p():m()};return document.addEventListener("mouseover",g),()=>{window.removeEventListener("mousemove",f),document.removeEventListener("mouseover",g),cancelAnimationFrame(c)}},[]),J.jsx("div",{ref:s,className:"cursor-blob",style:{position:"fixed",top:0,left:0,width:18,height:18,borderRadius:"50%",background:"#ffffff",mixBlendMode:"difference",pointerEvents:"none",zIndex:99999,transform:"translate(-50%, -50%)",willChange:"transform"}})}tt.registerPlugin(ot);const bx=[{label:"Works",href:"#works"},{label:"About",href:"#about"},{label:"Skills",href:"#skills"},{label:"Contact",href:"#contact"}];function ww(){const s=Ye.useRef(null),e=Ye.useRef(null),[t,n]=Ye.useState(!1),[r,a]=Ye.useState(null);return Ye.useEffect(()=>{ot.create({start:"top -60",onEnter:()=>{var c;return(c=s.current)==null?void 0:c.classList.add("scrolled")},onLeaveBack:()=>{var c;return(c=s.current)==null?void 0:c.classList.remove("scrolled")}});const l=()=>{const c=document.documentElement.scrollHeight-window.innerHeight,f=c>0?window.scrollY/c:0;e.current&&(e.current.style.transform=`scaleX(${f})`)};return window.addEventListener("scroll",l,{passive:!0}),()=>window.removeEventListener("scroll",l)},[]),J.jsxs(J.Fragment,{children:[J.jsxs("nav",{ref:s,className:"navbar",style:{position:"fixed",top:0,left:0,width:"100%",zIndex:1e3,transition:"background 0.4s, backdrop-filter 0.4s"},children:[J.jsxs("div",{className:"nav-row",style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr 1.8fr",borderBottom:"1px solid var(--nav-border)"},children:[J.jsxs("div",{style:{padding:"17px 32px",borderRight:"1px solid var(--nav-border)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[J.jsx("a",{href:"/",style:{fontFamily:"var(--display)",fontSize:20,letterSpacing:"0.05em",color:"currentColor",textDecoration:"none",fontWeight:400},children:"YSJ"}),J.jsx("button",{className:"hamburger",onClick:()=>n(l=>!l),"aria-label":"Toggle menu",style:{background:"none",border:"none",cursor:"pointer",display:"none",flexDirection:"column",gap:5,padding:0},children:[0,1,2].map(l=>J.jsx("span",{style:{display:"block",width:26,height:1,background:"currentColor",transition:"all 0.3s",transform:t?l===0?"rotate(45deg) translateY(6px)":l===2?"rotate(-45deg) translateY(-6px)":"scaleX(0)":"none",opacity:t&&l===1?0:1}},l))})]}),bx.map(l=>J.jsxs("a",{href:l.href,className:"nav-cell",onMouseEnter:()=>a(l.href),onMouseLeave:()=>a(null),style:{display:"flex",alignItems:"center",gap:10,padding:"17px 24px",fontFamily:"var(--mono)",fontSize:10,letterSpacing:"0.2em",textDecoration:"none",color:"currentColor",borderRight:"1px solid var(--nav-border)",opacity:r!==null&&r!==l.href?.3:.75,transition:"opacity 0.25s",textTransform:"uppercase"},children:[J.jsx("span",{style:{width:22,height:22,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center"},children:J.jsx("span",{style:{width:r===l.href?20:6,height:r===l.href?20:6,borderRadius:"50%",border:r===l.href?"none":"1px solid currentColor",background:r===l.href?"currentColor":"transparent",display:"flex",alignItems:"center",justifyContent:"center",transition:"width 0.2s, height 0.2s, background 0.2s, border 0.2s",overflow:"hidden"},children:r===l.href&&J.jsx("svg",{width:"9",height:"9",viewBox:"0 0 9 9",fill:"none",style:{flexShrink:0},children:J.jsx("path",{d:"M1.5 7.5L7.5 1.5M7.5 1.5H2.5M7.5 1.5V6.5",stroke:"var(--nav-arrow-color)",strokeWidth:"1.3",strokeLinecap:"round",strokeLinejoin:"round"})})})}),l.label]},l.href)),J.jsx("a",{href:"mailto:yuvrajjadaun2@gmail.com",className:"nav-cell nav-email",style:{display:"flex",alignItems:"center",padding:"17px 24px",fontFamily:"var(--mono)",fontSize:10,letterSpacing:"0.1em",textDecoration:"none",color:"currentColor",opacity:.6,transition:"opacity 0.3s",textTransform:"uppercase"},onMouseEnter:l=>l.currentTarget.style.opacity="1",onMouseLeave:l=>l.currentTarget.style.opacity="0.6",children:"yuvrajjadaun2@gmail.com"})]}),J.jsx("div",{ref:e,style:{position:"absolute",bottom:0,left:0,width:"100%",height:1,background:"currentColor",transformOrigin:"left center",transform:"scaleX(0)",zIndex:2}})]}),J.jsxs("div",{style:{position:"fixed",inset:0,zIndex:999,background:"var(--black)",color:"var(--white)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:24,opacity:t?1:0,pointerEvents:t?"auto":"none",transition:"opacity 0.4s"},children:[bx.map(l=>J.jsx("a",{href:l.href,onClick:()=>n(!1),style:{fontFamily:"var(--display)",fontSize:"15vw",letterSpacing:"0.04em",textDecoration:"none",color:"var(--white)"},children:l.label},l.href)),J.jsx("a",{href:"mailto:yuvrajjadaun2@gmail.com",style:{fontFamily:"var(--mono)",fontSize:10,letterSpacing:"0.2em",color:"rgba(240,237,232,0.5)",textDecoration:"none"},children:"YUVRAJJADAUN2@GMAIL.COM"})]}),J.jsx("style",{children:`
        /* Scoped CSS vars so inline borders auto-flip in dark mode */
        .navbar { --nav-border: rgba(0,0,0,0.1); --nav-arrow-color: #f0ede8; }
        .navbar.dark { --nav-border: rgba(255,255,255,0.1); --nav-arrow-color: #0a0a0a; }

        .navbar.scrolled {
          background: rgba(240,237,232,0.92) !important;
          backdrop-filter: blur(16px);
        }
        .navbar.dark { color: #f0ede8 !important; }
        .navbar.dark.scrolled { background: rgba(10,10,10,0.92) !important; }

        @media (max-width: 768px) {
          .nav-cell { display: none !important; }
          .hamburger { display: flex !important; }
          .nav-row { grid-template-columns: 1fr !important; }
        }
      `})]})}const Aw="modulepreload",bw=function(s){return"/"+s},Cx={},Rd=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let l=function(h){return Promise.all(h.map(p=>Promise.resolve(p).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),f=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));r=l(t.map(h=>{if(h=bw(h),h in Cx)return;Cx[h]=!0;const p=h.endsWith(".css"),m=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${m}`))return;const g=document.createElement("link");if(g.rel=p?"stylesheet":Aw,p||(g.as="script"),g.crossOrigin="",g.href=h,f&&g.setAttribute("nonce",f),document.head.appendChild(g),p)return new Promise((v,E)=>{g.addEventListener("load",v),g.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${h}`)))})}))}function a(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return r.then(l=>{for(const c of l||[])c.status==="rejected"&&a(c.reason);return e().catch(a)})};/*!
 * SplitText 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2025, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
 * @author: Jack Doyle
 */let _u,Wa,Rx=typeof Symbol=="function"?Symbol():"_split",Im,Cw=()=>Im||Cl.register(window.gsap),Px=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,nc=s=>typeof s=="string"?nc(document.querySelectorAll(s)):"length"in s?Array.from(s).reduce((e,t)=>(typeof t=="string"?e.push(...nc(t)):e.push(t),e),[]):[s],Dx=s=>nc(s).filter(e=>e instanceof HTMLElement),Nm=[],Rp=function(){},Rw={add:s=>s()},Pw=/\s+/g,Lx=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),Md={left:0,top:0,width:0,height:0},Dw=(s,e)=>{for(;++e<s.length&&s[e]===Md;);return s[e]||Md},Ix=({element:s,html:e,ariaL:t,ariaH:n})=>{s.innerHTML=e,t?s.setAttribute("aria-label",t):s.removeAttribute("aria-label"),n?s.setAttribute("aria-hidden",n):s.removeAttribute("aria-hidden")},Nx=(s,e)=>{if(e){let t=new Set(s.join("").match(e)||Nm),n=s.length,r,a,l,c;if(t.size)for(;--n>-1;){a=s[n];for(l of t)if(l.startsWith(a)&&l.length>a.length){for(r=0,c=a;l.startsWith(c+=s[n+ ++r])&&c.length<l.length;);if(r&&c.length===l.length){s[n]=l,s.splice(n+1,r);break}}}}return s},Ux=s=>window.getComputedStyle(s).display==="inline"&&(s.style.display="inline-block"),Xa=(s,e,t)=>e.insertBefore(typeof s=="string"?document.createTextNode(s):s,t),Um=(s,e,t)=>{let n=e[s+"sClass"]||"",{tag:r="div",aria:a="auto",propIndex:l=!1}=e,c=s==="line"?"block":"inline-block",f=n.indexOf("++")>-1,h=p=>{let m=document.createElement(r),g=t.length+1;return n&&(m.className=n+(f?" "+n+g:"")),l&&m.style.setProperty("--"+s,g+""),a!=="none"&&m.setAttribute("aria-hidden","true"),r!=="span"&&(m.style.position="relative",m.style.display=c),m.textContent=p,t.push(m),m};return f&&(n=n.replace("++","")),h.collection=t,h},Lw=(s,e,t,n)=>{let r=Um("line",t,n),a=window.getComputedStyle(s).textAlign||"left";return(l,c)=>{let f=r("");for(f.style.textAlign=a,s.insertBefore(f,e[l]);l<c;l++)f.appendChild(e[l]);f.normalize()}},r1=(s,e,t,n,r,a,l,c,f,h)=>{var p;let m=Array.from(s.childNodes),g=0,{wordDelimiter:v,reduceWhiteSpace:E=!0,prepareText:M}=e,x=s.getBoundingClientRect(),y=x,P=!E&&window.getComputedStyle(s).whiteSpace.substring(0,3)==="pre",D=0,A=t.collection,R,L,N,k,T,b,V,z,G,Q,ne,Z,Y,X,re,U,O,ee;for(typeof v=="object"?(N=v.delimiter||v,L=v.replaceWith||""):L=v===""?"":v||" ",R=L!==" ";g<m.length;g++)if(k=m[g],k.nodeType===3){for(re=k.textContent||"",E?re=re.replace(Pw," "):P&&(re=re.replace(/\n/g,L+`
`)),M&&(re=M(re,s)),k.textContent=re,T=L||N?re.split(N||L):re.match(c)||Nm,O=T[T.length-1],z=R?O.slice(-1)===" ":!O,O||T.pop(),y=x,V=R?T[0].charAt(0)===" ":!T[0],V&&Xa(" ",s,k),T[0]||T.shift(),Nx(T,f),a&&h||(k.textContent=""),G=1;G<=T.length;G++)if(U=T[G-1],!E&&P&&U.charAt(0)===`
`&&((p=k.previousSibling)==null||p.remove(),Xa(document.createElement("br"),s,k),U=U.slice(1)),!E&&U==="")Xa(L,s,k);else if(U===" ")s.insertBefore(document.createTextNode(" "),k);else{if(R&&U.charAt(0)===" "&&Xa(" ",s,k),D&&G===1&&!V&&A.indexOf(D.parentNode)>-1?(b=A[A.length-1],b.appendChild(document.createTextNode(n?"":U))):(b=t(n?"":U),Xa(b,s,k),D&&G===1&&!V&&b.insertBefore(D,b.firstChild)),n)for(ne=Px?Nx([...Px.segment(U)].map(Ee=>Ee.segment),f):U.match(c)||Nm,ee=0;ee<ne.length;ee++)b.appendChild(ne[ee]===" "?document.createTextNode(" "):n(ne[ee]));if(a&&h){if(re=k.textContent=re.substring(U.length+1,re.length),Q=b.getBoundingClientRect(),Q.top>y.top&&Q.left<=y.left){for(Z=s.cloneNode(),Y=s.childNodes[0];Y&&Y!==b;)X=Y,Y=Y.nextSibling,Z.appendChild(X);s.parentNode.insertBefore(Z,s),r&&Ux(Z)}y=Q}(G<T.length||z)&&Xa(G>=T.length?" ":R&&U.slice(-1)===" "?" "+L:L,s,k)}s.removeChild(k),D=0}else k.nodeType===1&&(l&&l.indexOf(k)>-1?(A.indexOf(k.previousSibling)>-1&&A[A.length-1].appendChild(k),D=k):(r1(k,e,t,n,r,a,l,c,f,!0),D=0),r&&Ux(k))};const s1=class o1{constructor(e,t){this.isSplit=!1,Cw(),this.elements=Dx(e),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=t,this.elements.forEach(l=>{var c;t.overwrite!==!1&&((c=l[Rx])==null||c._data.orig.filter(({element:f})=>f===l).forEach(Ix)),l[Rx]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let n=[],r,a=()=>{let l=n.length,c;for(;l--;){c=n[l];let f=c.element.offsetWidth;if(f!==c.width){c.width=f,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(r),r=setTimeout(a,200)})},Rp(this),this.split(t)}split(e){return(this._ctx||Rw).add(()=>{this.isSplit&&this.revert(),this.vars=e=e||this.vars||{};let{type:t="chars,words,lines",aria:n="auto",deepSlice:r=!0,smartWrap:a,onSplit:l,autoSplit:c=!1,specialChars:f,mask:h}=this.vars,p=t.indexOf("lines")>-1,m=t.indexOf("chars")>-1,g=t.indexOf("words")>-1,v=m&&!g&&!p,E=f&&("push"in f?new RegExp("(?:"+f.join("|")+")","gu"):f),M=E?new RegExp(E.source+"|"+Lx.source,"gu"):Lx,x=!!e.ignore&&Dx(e.ignore),{orig:y,animTime:P,obs:D}=this._data,A;(m||g||p)&&(this.elements.forEach((R,L)=>{y[L]={element:R,html:R.innerHTML,ariaL:R.getAttribute("aria-label"),ariaH:R.getAttribute("aria-hidden")},n==="auto"?R.setAttribute("aria-label",(R.textContent||"").trim()):n==="hidden"&&R.setAttribute("aria-hidden","true");let N=[],k=[],T=[],b=m?Um("char",e,N):null,V=Um("word",e,k),z,G,Q,ne;if(r1(R,e,V,b,v,r&&(p||v),x,M,E,!1),p){let Z=nc(R.childNodes),Y=Lw(R,Z,e,T),X,re=[],U=0,O=Z.map(be=>be.nodeType===1?be.getBoundingClientRect():Md),ee=Md,Ee;for(z=0;z<Z.length;z++)X=Z[z],X.nodeType===1&&(X.nodeName==="BR"?((!z||Z[z-1].nodeName!=="BR")&&(re.push(X),Y(U,z+1)),U=z+1,ee=Dw(O,z)):(Ee=O[z],z&&Ee.top>ee.top&&Ee.left<ee.left+ee.width-1&&(Y(U,z),U=z),ee=Ee));U<z&&Y(U,z),re.forEach(be=>{var Oe;return(Oe=be.parentNode)==null?void 0:Oe.removeChild(be)})}if(!g){for(z=0;z<k.length;z++)if(G=k[z],m||!G.nextSibling||G.nextSibling.nodeType!==3)if(a&&!p){for(Q=document.createElement("span"),Q.style.whiteSpace="nowrap";G.firstChild;)Q.appendChild(G.firstChild);G.replaceWith(Q)}else G.replaceWith(...G.childNodes);else ne=G.nextSibling,ne&&ne.nodeType===3&&(ne.textContent=(G.textContent||"")+(ne.textContent||""),G.remove());k.length=0,R.normalize()}this.lines.push(...T),this.words.push(...k),this.chars.push(...N)}),h&&this[h]&&this.masks.push(...this[h].map(R=>{let L=R.cloneNode();return R.replaceWith(L),L.appendChild(R),R.className&&(L.className=R.className.trim()+"-mask"),L.style.overflow="clip",L}))),this.isSplit=!0,Wa&&p&&(c?Wa.addEventListener("loadingdone",this._split):Wa.status==="loading"&&console.warn("SplitText called before fonts loaded")),(A=l&&l(this))&&A.totalTime&&(this._data.anim=P?A.totalTime(P):A),p&&c&&this.elements.forEach((R,L)=>{y[L].width=R.offsetWidth,D&&D.observe(R)})}),this}kill(){let{obs:e}=this._data;e&&e.disconnect(),Wa==null||Wa.removeEventListener("loadingdone",this._split)}revert(){var e,t;if(this.isSplit){let{orig:n,anim:r}=this._data;this.kill(),n.forEach(Ix),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,r&&(this._data.animTime=r.totalTime(),r.revert()),(t=(e=this.vars).onRevert)==null||t.call(e,this)}return this}static create(e,t){return new o1(e,t)}static register(e){_u=_u||e||window.gsap,_u&&(nc=_u.utils.toArray,Rp=_u.core.context||Rp),!Im&&window.innerWidth>0&&(Wa=document.fonts,Im=!0)}};s1.version="3.14.2";let Cl=s1;tt.registerPlugin(ot,Cl);const Iw=Ye.lazy(()=>Rd(()=>import("./react-spline-B4gf8ceO.js").then(s=>s.r),[])),Nw=[{src:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=300&q=80",alt:"AI/ML Platform"},{src:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&q=80",alt:"FinTech"},{src:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&q=80",alt:"Dashboard"},{src:"https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&q=80",alt:"Responsive Web"},{src:"https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=300&q=80",alt:"Mobile"},{src:"https://images.unsplash.com/photo-1557838923-2985c318be48?w=300&q=80",alt:"Design System"},{src:"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&q=80",alt:"UX Research"},{src:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&q=80",alt:"Analytics"}];function Uw(){const s=Ye.useRef(null),e=Ye.useRef(null),t=Ye.useRef(null),n=Ye.useRef(null),r=Ye.useRef(null),a=Ye.useRef(null),l=Ye.useRef(null),c=Ye.useRef(null),f=Ye.useRef([]);return Ye.useEffect(()=>{if(!s.current||!e.current||!l.current)return;let h=!1,p,m=null,g=null;return p=requestAnimationFrame(()=>{h||document.fonts.ready.then(()=>{if(h||!s.current||!e.current||!l.current)return;const v=window.innerWidth,E=window.innerHeight,M=l.current.getBoundingClientRect(),x=M.top/E*100,y=(v-M.right)/v*100,P=(E-M.bottom)/E*100,D=M.left/v*100;tt.set(e.current,{clipPath:`inset(${x}% ${y}% ${P}% ${D}% round 2px)`}),tt.set(r.current,{opacity:0});let A=null;a.current&&(A=new Cl(a.current,{type:"lines",linesClass:"tl-line"}),A.lines.forEach(z=>{var Q;const G=document.createElement("div");G.style.overflow="hidden",G.style.display="block",(Q=z.parentNode)==null||Q.insertBefore(G,z),G.appendChild(z),tt.set(z,{y:"105%",opacity:0})}));const R=8,L=Math.floor((v-R*7)/8),N=L,k=L*8+R*7,T=Math.floor((v-k)/2),b=E/2-N/2-4;f.current.forEach((z,G)=>{if(!z)return;const Q=T+G*(L+R)-v/2+L/2;tt.set(z,{x:Q,y:-(E*.7),opacity:0,scale:1,width:L,height:N})}),g=tt.timeline({defaults:{ease:"none"}}),g.to(e.current,{clipPath:"inset(0% 0% 0% 0% round 0px)",duration:.35},0),g.to([t.current,n.current],{opacity:0,duration:.2},.05),f.current.forEach((z,G)=>{z&&g.to(z,{y:b,opacity:1,duration:.1,ease:"expo.out"},.52+G*.02)}),g.to(r.current,{opacity:1,duration:.01},.64),A!=null&&A.lines.length&&g.to(A.lines,{y:"0%",opacity:1,duration:.1,ease:"power3.out",stagger:.02},.65);const V=b+N+E*.15+20;g.to(r.current,{opacity:0,y:-30,duration:.06,ease:"power2.in"},.82),f.current.forEach((z,G)=>{z&&g.to(z,{y:V,opacity:0,duration:.06,ease:"power2.in"},.82+G*.01)}),g.to(c.current,{opacity:0,scale:.92,duration:.07,ease:"power2.inOut"},.9),m=ot.create({trigger:s.current,scroller:window,start:"top top",end:"+=500%",pin:!0,scrub:1,animation:g,onUpdate:z=>{const G=document.querySelector(".navbar");G&&(z.progress>.25&&z.progress<.95?G.classList.add("dark"):G.classList.remove("dark"))}}),ot.refresh()})}),()=>{h=!0,cancelAnimationFrame(p),g==null||g.kill(),m==null||m.kill()}},[]),J.jsxs("div",{ref:s,style:{position:"relative",width:"100%",height:"100vh",background:"var(--cream)",overflow:"hidden"},children:[J.jsxs("div",{ref:e,style:{position:"absolute",inset:0,background:"var(--black)",zIndex:10,willChange:"clip-path",clipPath:"inset(100%)"},children:[J.jsx("div",{ref:c,style:{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none"},children:J.jsx(Ye.Suspense,{fallback:null,children:J.jsx(Iw,{scene:"https://prod.spline.design/qIB3Yi6uopze8PhU/scene.splinecode"})})}),J.jsx("div",{ref:r,style:{position:"absolute",top:"12%",left:"50%",transform:"translateX(-50%)",width:"90%",maxWidth:1100,textAlign:"left",zIndex:20,pointerEvents:"none",opacity:0},children:J.jsxs("p",{ref:a,style:{fontFamily:"var(--serif)",fontSize:"clamp(28px, 3.8vw, 56px)",lineHeight:1.15,color:"var(--white)",fontWeight:400},children:["Crafting accessible & immersive experiences for"," ",J.jsx("em",{style:{fontStyle:"italic"},children:"bold products,"})," ",J.jsx("em",{style:{fontStyle:"italic"},children:"beautiful interfaces,"})," ","and digital journeys that actually matter."]})}),Nw.map((h,p)=>J.jsx("div",{ref:m=>{f.current[p]=m},style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:80,height:80,borderRadius:6,overflow:"hidden",flexShrink:0,zIndex:15,willChange:"transform"},children:J.jsx("img",{src:h.src,alt:h.alt,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}})},p))]}),J.jsx("div",{ref:t,style:{position:"absolute",bottom:"12%",left:0,right:0,paddingLeft:"3vw",zIndex:5,willChange:"opacity"},children:J.jsxs("h1",{style:{fontFamily:"var(--display)",fontSize:"clamp(80px, 13vw, 190px)",lineHeight:.9,color:"var(--black)",letterSpacing:"-0.01em",fontWeight:400,margin:0},children:[J.jsx("span",{style:{display:"block"},children:"YUVRAJ"}),J.jsx("span",{style:{display:"block",paddingLeft:"4vw"},children:"SINGH"}),J.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"2vw",paddingLeft:"1.5vw"},children:[J.jsx("span",{children:"JADAUN"}),J.jsx("div",{ref:l,id:"vortex-anchor",style:{width:"clamp(180px, 16vw, 260px)",height:"clamp(160px, 14vw, 240px)",background:"var(--black)",flexShrink:0,borderRadius:2}}),J.jsx("span",{children:"DESIGNER"})]})]})}),J.jsx("div",{ref:n,style:{position:"absolute",top:"14%",right:"3%",width:200,zIndex:5,willChange:"opacity"},children:J.jsx("p",{style:{fontFamily:"var(--mono)",fontSize:11,lineHeight:1.7,letterSpacing:"0.03em",color:"var(--black)",opacity:.75,textAlign:"justify"},children:"UI/UX Designer with 3.5+ years bridging design & technology. Specialising in accessible, data-driven digital experiences."})})]})}tt.registerPlugin(ot);const Fw=[{name:"WCAG Design System",year:"2023",tags:["USER RESEARCH","WCAG"]},{name:"Mobile UX Sprint",year:"2023",tags:["FIGMA","PROTOTYPING"]},{name:"E-commerce Redesign",year:"2022",tags:["UX/UI","USABILITY"]},{name:"SaaS Onboarding Flow",year:"2022",tags:["INTERACTION","FIGMA"]},{name:"Brand Identity System",year:"2021",tags:["DESIGN SYSTEMS","FIGMA"]},{name:"Analytics Dashboard",year:"2021",tags:["DATA VIZ","PROTOTYPING"]}],Pp=[{src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",rotation:-3,posStyle:{left:"6%",top:"20%",width:"clamp(240px,22vw,340px)",height:"clamp(160px,15vw,230px)"}},{src:"https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",rotation:0,posStyle:{left:"32%",top:"10%",width:"clamp(340px,33vw,500px)",height:"clamp(420px,42vw,640px)"}},{src:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",rotation:2,posStyle:{right:"4%",top:"48%",width:"clamp(280px,24vw,360px)",height:"clamp(180px,16vw,250px)"}}];function Ow(){const s=Ye.useRef(null),e=Ye.useRef(null),t=Ye.useRef(null),n=Ye.useRef(null);return Ye.useEffect(()=>{let r,a;return r=requestAnimationFrame(()=>{a=tt.context(()=>{const l=n.current?Array.from(n.current.children):[];tt.set(l,{opacity:0});const c=tt.timeline();c.to(t.current,{opacity:0,y:-20,duration:.2,ease:"power2.in"},.3),c.to(e.current,{backgroundColor:"#1a1a1a",duration:.1,ease:"none"},.3),c.to(e.current,{backgroundColor:"#2e2e2e",duration:.1,ease:"none"},.4),c.to(e.current,{backgroundColor:"#c8c4bf",duration:.15,ease:"power1.out"},.5),c.to(e.current,{backgroundColor:"#f0ede8",duration:.1,ease:"power2.out"},.65),l.forEach((f,h)=>{c.fromTo(f,{y:55,opacity:0,rotation:Pp[h].rotation},{y:0,opacity:1,rotation:Pp[h].rotation,duration:.25,ease:"expo.out"},.55+h*.08)}),ot.create({trigger:s.current,start:"top top",end:"+=400%",pin:!0,anticipatePin:1,scrub:1.2,animation:c,invalidateOnRefresh:!0,onUpdate:f=>{const h=document.querySelector(".navbar");h&&(f.progress<.55?(h.classList.add("dark"),h.classList.remove("scrolled")):h.classList.remove("dark"))}})})}),()=>{cancelAnimationFrame(r),a==null||a.revert()}},[]),J.jsxs("div",{ref:s,style:{position:"relative",height:"100vh",overflow:"hidden"},children:[J.jsx("div",{ref:e,style:{position:"absolute",inset:0,backgroundColor:"#0a0a0a",willChange:"background-color"}}),J.jsx("div",{ref:t,style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",justifyContent:"center",paddingBottom:"4vh",zIndex:2},children:Fw.map((r,a)=>J.jsxs("div",{className:"wlt-row",style:{display:"grid",gridTemplateColumns:"1fr auto auto",alignItems:"center",padding:"0 6vw",height:72,borderBottom:"1px solid rgba(255,255,255,0.07)",gap:"4vw"},children:[J.jsx("span",{style:{fontFamily:"var(--serif)",fontSize:"clamp(14px,1.4vw,20px)",fontWeight:500,color:"rgba(255,255,255,0.85)",letterSpacing:"0.01em"},children:r.name}),J.jsx("span",{style:{fontFamily:"var(--mono)",fontSize:11,letterSpacing:"0.2em",color:"rgba(255,255,255,0.3)"},children:r.year}),J.jsx("div",{style:{display:"flex",gap:16},children:r.tags.map(l=>J.jsx("span",{style:{fontFamily:"var(--mono)",fontSize:9,letterSpacing:"0.2em",color:"rgba(255,255,255,0.3)",textTransform:"uppercase"},children:l},l))})]},a))}),J.jsx("div",{ref:n,style:{position:"absolute",inset:0,zIndex:3},children:Pp.map((r,a)=>J.jsx("div",{style:{position:"absolute",overflow:"hidden",willChange:"transform, opacity",...r.posStyle},children:J.jsx("img",{src:r.src,alt:"Yuvraj",style:{width:"100%",height:"115%",objectFit:"cover",display:"block"}})},a))})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const i0="182",kw=0,Fx=1,zw=2,sd=1,Bw=2,Lu=3,bo=0,ji=1,ws=2,Rs=0,xl=1,Ox=2,kx=3,zx=4,Vw=5,ea=100,Hw=101,Gw=102,Ww=103,Xw=104,jw=200,Yw=201,qw=202,$w=203,Fm=204,Om=205,Kw=206,Zw=207,Qw=208,Jw=209,eA=210,tA=211,nA=212,iA=213,rA=214,km=0,zm=1,Bm=2,Rl=3,Vm=4,Hm=5,Gm=6,Wm=7,a1=0,sA=1,oA=2,is=0,l1=1,u1=2,c1=3,f1=4,d1=5,h1=6,p1=7,m1=300,ga=301,Pl=302,Xm=303,jm=304,Pd=306,Ym=1e3,bs=1001,qm=1002,si=1003,aA=1004,Rf=1005,xi=1006,Dp=1007,ra=1008,Mr=1009,g1=1010,_1=1011,ic=1012,r0=1013,as=1014,es=1015,Ns=1016,s0=1017,o0=1018,rc=1020,v1=35902,x1=35899,y1=1021,S1=1022,zr=1023,Us=1026,sa=1027,M1=1028,a0=1029,Dl=1030,l0=1031,u0=1033,od=33776,ad=33777,ld=33778,ud=33779,$m=35840,Km=35841,Zm=35842,Qm=35843,Jm=36196,eg=37492,tg=37496,ng=37488,ig=37489,rg=37490,sg=37491,og=37808,ag=37809,lg=37810,ug=37811,cg=37812,fg=37813,dg=37814,hg=37815,pg=37816,mg=37817,gg=37818,_g=37819,vg=37820,xg=37821,yg=36492,Sg=36494,Mg=36495,Eg=36283,Tg=36284,wg=36285,Ag=36286,lA=3200,uA=0,cA=1,ho="",Vi="srgb",Ll="srgb-linear",Ed="linear",rn="srgb",ja=7680,Bx=519,fA=512,dA=513,hA=514,c0=515,pA=516,mA=517,f0=518,gA=519,Vx=35044,Hx="300 es",ts=2e3,Td=2001;function E1(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function sc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function _A(){const s=sc("canvas");return s.style.display="block",s}const Gx={};function Wx(...s){const e="THREE."+s.shift();console.log(e,...s)}function bt(...s){const e="THREE."+s.shift();console.warn(e,...s)}function Kt(...s){const e="THREE."+s.shift();console.error(e,...s)}function oc(...s){const e=s.join(" ");e in Gx||(Gx[e]=!0,bt(...s))}function vA(s,e,t){return new Promise(function(n,r){function a(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:r();break;case s.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}class Nl{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,l=r.length;a<l;a++)r[a].call(this,e);e.target=null}}}const hi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lp=Math.PI/180,bg=180/Math.PI;function uc(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hi[s&255]+hi[s>>8&255]+hi[s>>16&255]+hi[s>>24&255]+"-"+hi[e&255]+hi[e>>8&255]+"-"+hi[e>>16&15|64]+hi[e>>24&255]+"-"+hi[t&63|128]+hi[t>>8&255]+"-"+hi[t>>16&255]+hi[t>>24&255]+hi[n&255]+hi[n>>8&255]+hi[n>>16&255]+hi[n>>24&255]).toLowerCase()}function Vt(s,e,t){return Math.max(e,Math.min(t,s))}function xA(s,e){return(s%e+e)%e}function Ip(s,e,t){return(1-t)*s+t*e}function vu(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function zi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class tn{constructor(e=0,t=0){tn.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Vt(this.x,e.x,t.x),this.y=Vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Vt(this.x,e,t),this.y=Vt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,l=this.y-e.y;return this.x=a*n-l*r+e.x,this.y=a*r+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class cc{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,l,c){let f=n[r+0],h=n[r+1],p=n[r+2],m=n[r+3],g=a[l+0],v=a[l+1],E=a[l+2],M=a[l+3];if(c<=0){e[t+0]=f,e[t+1]=h,e[t+2]=p,e[t+3]=m;return}if(c>=1){e[t+0]=g,e[t+1]=v,e[t+2]=E,e[t+3]=M;return}if(m!==M||f!==g||h!==v||p!==E){let x=f*g+h*v+p*E+m*M;x<0&&(g=-g,v=-v,E=-E,M=-M,x=-x);let y=1-c;if(x<.9995){const P=Math.acos(x),D=Math.sin(P);y=Math.sin(y*P)/D,c=Math.sin(c*P)/D,f=f*y+g*c,h=h*y+v*c,p=p*y+E*c,m=m*y+M*c}else{f=f*y+g*c,h=h*y+v*c,p=p*y+E*c,m=m*y+M*c;const P=1/Math.sqrt(f*f+h*h+p*p+m*m);f*=P,h*=P,p*=P,m*=P}}e[t]=f,e[t+1]=h,e[t+2]=p,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,r,a,l){const c=n[r],f=n[r+1],h=n[r+2],p=n[r+3],m=a[l],g=a[l+1],v=a[l+2],E=a[l+3];return e[t]=c*E+p*m+f*v-h*g,e[t+1]=f*E+p*g+h*m-c*v,e[t+2]=h*E+p*v+c*g-f*m,e[t+3]=p*E-c*m-f*g-h*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,l=e._order,c=Math.cos,f=Math.sin,h=c(n/2),p=c(r/2),m=c(a/2),g=f(n/2),v=f(r/2),E=f(a/2);switch(l){case"XYZ":this._x=g*p*m+h*v*E,this._y=h*v*m-g*p*E,this._z=h*p*E+g*v*m,this._w=h*p*m-g*v*E;break;case"YXZ":this._x=g*p*m+h*v*E,this._y=h*v*m-g*p*E,this._z=h*p*E-g*v*m,this._w=h*p*m+g*v*E;break;case"ZXY":this._x=g*p*m-h*v*E,this._y=h*v*m+g*p*E,this._z=h*p*E+g*v*m,this._w=h*p*m-g*v*E;break;case"ZYX":this._x=g*p*m-h*v*E,this._y=h*v*m+g*p*E,this._z=h*p*E-g*v*m,this._w=h*p*m+g*v*E;break;case"YZX":this._x=g*p*m+h*v*E,this._y=h*v*m+g*p*E,this._z=h*p*E-g*v*m,this._w=h*p*m-g*v*E;break;case"XZY":this._x=g*p*m-h*v*E,this._y=h*v*m-g*p*E,this._z=h*p*E+g*v*m,this._w=h*p*m+g*v*E;break;default:bt("Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],l=t[1],c=t[5],f=t[9],h=t[2],p=t[6],m=t[10],g=n+c+m;if(g>0){const v=.5/Math.sqrt(g+1);this._w=.25/v,this._x=(p-f)*v,this._y=(a-h)*v,this._z=(l-r)*v}else if(n>c&&n>m){const v=2*Math.sqrt(1+n-c-m);this._w=(p-f)/v,this._x=.25*v,this._y=(r+l)/v,this._z=(a+h)/v}else if(c>m){const v=2*Math.sqrt(1+c-n-m);this._w=(a-h)/v,this._x=(r+l)/v,this._y=.25*v,this._z=(f+p)/v}else{const v=2*Math.sqrt(1+m-n-c);this._w=(l-r)/v,this._x=(a+h)/v,this._y=(f+p)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,l=e._w,c=t._x,f=t._y,h=t._z,p=t._w;return this._x=n*p+l*c+r*h-a*f,this._y=r*p+l*f+a*c-n*h,this._z=a*p+l*h+n*f-r*c,this._w=l*p-n*c-r*f-a*h,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,r=e._y,a=e._z,l=e._w,c=this.dot(e);c<0&&(n=-n,r=-r,a=-a,l=-l,c=-c);let f=1-t;if(c<.9995){const h=Math.acos(c),p=Math.sin(h);f=Math.sin(f*h)/p,t=Math.sin(t*h)/p,this._x=this._x*f+n*t,this._y=this._y*f+r*t,this._z=this._z*f+a*t,this._w=this._w*f+l*t,this._onChangeCallback()}else this._x=this._x*f+n*t,this._y=this._y*f+r*t,this._z=this._z*f+a*t,this._w=this._w*f+l*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class he{constructor(e=0,t=0,n=0){he.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xx.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xx.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,l=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*l,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*l,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,l=e.y,c=e.z,f=e.w,h=2*(l*r-c*n),p=2*(c*t-a*r),m=2*(a*n-l*t);return this.x=t+f*h+l*m-c*p,this.y=n+f*p+c*h-a*m,this.z=r+f*m+a*p-l*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Vt(this.x,e.x,t.x),this.y=Vt(this.y,e.y,t.y),this.z=Vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Vt(this.x,e,t),this.y=Vt(this.y,e,t),this.z=Vt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,l=t.x,c=t.y,f=t.z;return this.x=r*f-a*c,this.y=a*l-n*f,this.z=n*c-r*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Np.copy(this).projectOnVector(e),this.sub(Np)}reflect(e){return this.sub(Np.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Np=new he,Xx=new cc;class Rt{constructor(e,t,n,r,a,l,c,f,h){Rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,c,f,h)}set(e,t,n,r,a,l,c,f,h){const p=this.elements;return p[0]=e,p[1]=r,p[2]=c,p[3]=t,p[4]=a,p[5]=f,p[6]=n,p[7]=l,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,l=n[0],c=n[3],f=n[6],h=n[1],p=n[4],m=n[7],g=n[2],v=n[5],E=n[8],M=r[0],x=r[3],y=r[6],P=r[1],D=r[4],A=r[7],R=r[2],L=r[5],N=r[8];return a[0]=l*M+c*P+f*R,a[3]=l*x+c*D+f*L,a[6]=l*y+c*A+f*N,a[1]=h*M+p*P+m*R,a[4]=h*x+p*D+m*L,a[7]=h*y+p*A+m*N,a[2]=g*M+v*P+E*R,a[5]=g*x+v*D+E*L,a[8]=g*y+v*A+E*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],c=e[5],f=e[6],h=e[7],p=e[8];return t*l*p-t*c*h-n*a*p+n*c*f+r*a*h-r*l*f}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],c=e[5],f=e[6],h=e[7],p=e[8],m=p*l-c*h,g=c*f-p*a,v=h*a-l*f,E=t*m+n*g+r*v;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=m*M,e[1]=(r*h-p*n)*M,e[2]=(c*n-r*l)*M,e[3]=g*M,e[4]=(p*t-r*f)*M,e[5]=(r*a-c*t)*M,e[6]=v*M,e[7]=(n*f-h*t)*M,e[8]=(l*t-n*a)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,l,c){const f=Math.cos(a),h=Math.sin(a);return this.set(n*f,n*h,-n*(f*l+h*c)+l+e,-r*h,r*f,-r*(-h*l+f*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Up.makeScale(e,t)),this}rotate(e){return this.premultiply(Up.makeRotation(-e)),this}translate(e,t){return this.premultiply(Up.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Up=new Rt,jx=new Rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yx=new Rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yA(){const s={enabled:!0,workingColorSpace:Ll,spaces:{},convert:function(r,a,l){return this.enabled===!1||a===l||!a||!l||(this.spaces[a].transfer===rn&&(r.r=Ps(r.r),r.g=Ps(r.g),r.b=Ps(r.b)),this.spaces[a].primaries!==this.spaces[l].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===rn&&(r.r=yl(r.r),r.g=yl(r.g),r.b=yl(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ho?Ed:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,l){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return oc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return oc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ll]:{primaries:e,whitePoint:n,transfer:Ed,toXYZ:jx,fromXYZ:Yx,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vi},outputColorSpaceConfig:{drawingBufferColorSpace:Vi}},[Vi]:{primaries:e,whitePoint:n,transfer:rn,toXYZ:jx,fromXYZ:Yx,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vi}}}),s}const Yt=yA();function Ps(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function yl(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ya;class SA{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ya===void 0&&(Ya=sc("canvas")),Ya.width=e.width,Ya.height=e.height;const r=Ya.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ya}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=sc("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let l=0;l<a.length;l++)a[l]=Ps(a[l]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ps(t[n]/255)*255):t[n]=Ps(t[n]);return{data:t,width:e.width,height:e.height}}else return bt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let MA=0;class d0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:MA++}),this.uuid=uc(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let l=0,c=r.length;l<c;l++)r[l].isDataTexture?a.push(Fp(r[l].image)):a.push(Fp(r[l]))}else a=Fp(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function Fp(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?SA.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(bt("Texture: Unable to serialize Texture."),{})}let EA=0;const Op=new he;class Si extends Nl{constructor(e=Si.DEFAULT_IMAGE,t=Si.DEFAULT_MAPPING,n=bs,r=bs,a=xi,l=ra,c=zr,f=Mr,h=Si.DEFAULT_ANISOTROPY,p=ho){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:EA++}),this.uuid=uc(),this.name="",this.source=new d0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=l,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=f,this.offset=new tn(0,0),this.repeat=new tn(1,1),this.center=new tn(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Op).x}get height(){return this.source.getSize(Op).y}get depth(){return this.source.getSize(Op).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){bt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){bt(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==m1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ym:e.x=e.x-Math.floor(e.x);break;case bs:e.x=e.x<0?0:1;break;case qm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ym:e.y=e.y-Math.floor(e.y);break;case bs:e.y=e.y<0?0:1;break;case qm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Si.DEFAULT_IMAGE=null;Si.DEFAULT_MAPPING=m1;Si.DEFAULT_ANISOTROPY=1;class Dn{constructor(e=0,t=0,n=0,r=1){Dn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*r+l[12]*a,this.y=l[1]*t+l[5]*n+l[9]*r+l[13]*a,this.z=l[2]*t+l[6]*n+l[10]*r+l[14]*a,this.w=l[3]*t+l[7]*n+l[11]*r+l[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const f=e.elements,h=f[0],p=f[4],m=f[8],g=f[1],v=f[5],E=f[9],M=f[2],x=f[6],y=f[10];if(Math.abs(p-g)<.01&&Math.abs(m-M)<.01&&Math.abs(E-x)<.01){if(Math.abs(p+g)<.1&&Math.abs(m+M)<.1&&Math.abs(E+x)<.1&&Math.abs(h+v+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(h+1)/2,A=(v+1)/2,R=(y+1)/2,L=(p+g)/4,N=(m+M)/4,k=(E+x)/4;return D>A&&D>R?D<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(D),r=L/n,a=N/n):A>R?A<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(A),n=L/r,a=k/r):R<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(R),n=N/a,r=k/a),this.set(n,r,a,t),this}let P=Math.sqrt((x-E)*(x-E)+(m-M)*(m-M)+(g-p)*(g-p));return Math.abs(P)<.001&&(P=1),this.x=(x-E)/P,this.y=(m-M)/P,this.z=(g-p)/P,this.w=Math.acos((h+v+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Vt(this.x,e.x,t.x),this.y=Vt(this.y,e.y,t.y),this.z=Vt(this.z,e.z,t.z),this.w=Vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Vt(this.x,e,t),this.y=Vt(this.y,e,t),this.z=Vt(this.z,e,t),this.w=Vt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class TA extends Nl{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Dn(0,0,e,t),this.scissorTest=!1,this.viewport=new Dn(0,0,e,t);const r={width:e,height:t,depth:n.depth},a=new Si(r);this.textures=[];const l=n.count;for(let c=0;c<l;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:xi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new d0(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rs extends TA{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class T1 extends Si{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=si,this.minFilter=si,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wA extends Si{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=si,this.minFilter=si,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fc{constructor(e=new he(1/0,1/0,1/0),t=new he(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ir.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ir.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ir.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let l=0,c=a.count;l<c;l++)e.isMesh===!0?e.getVertexPosition(l,Ir):Ir.fromBufferAttribute(a,l),Ir.applyMatrix4(e.matrixWorld),this.expandByPoint(Ir);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pf.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pf.copy(n.boundingBox)),Pf.applyMatrix4(e.matrixWorld),this.union(Pf)}const r=e.children;for(let a=0,l=r.length;a<l;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ir),Ir.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xu),Df.subVectors(this.max,xu),qa.subVectors(e.a,xu),$a.subVectors(e.b,xu),Ka.subVectors(e.c,xu),so.subVectors($a,qa),oo.subVectors(Ka,$a),Wo.subVectors(qa,Ka);let t=[0,-so.z,so.y,0,-oo.z,oo.y,0,-Wo.z,Wo.y,so.z,0,-so.x,oo.z,0,-oo.x,Wo.z,0,-Wo.x,-so.y,so.x,0,-oo.y,oo.x,0,-Wo.y,Wo.x,0];return!kp(t,qa,$a,Ka,Df)||(t=[1,0,0,0,1,0,0,0,1],!kp(t,qa,$a,Ka,Df))?!1:(Lf.crossVectors(so,oo),t=[Lf.x,Lf.y,Lf.z],kp(t,qa,$a,Ka,Df))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ir).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ir).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_s[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_s[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_s[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_s[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_s[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_s[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_s[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_s[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_s),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _s=[new he,new he,new he,new he,new he,new he,new he,new he],Ir=new he,Pf=new fc,qa=new he,$a=new he,Ka=new he,so=new he,oo=new he,Wo=new he,xu=new he,Df=new he,Lf=new he,Xo=new he;function kp(s,e,t,n,r){for(let a=0,l=s.length-3;a<=l;a+=3){Xo.fromArray(s,a);const c=r.x*Math.abs(Xo.x)+r.y*Math.abs(Xo.y)+r.z*Math.abs(Xo.z),f=e.dot(Xo),h=t.dot(Xo),p=n.dot(Xo);if(Math.max(-Math.max(f,h,p),Math.min(f,h,p))>c)return!1}return!0}const AA=new fc,yu=new he,zp=new he;class h0{constructor(e=new he,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):AA.setFromPoints(e).getCenter(n);let r=0;for(let a=0,l=e.length;a<l;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yu.subVectors(e,this.center);const t=yu.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(yu,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yu.copy(e.center).add(zp)),this.expandByPoint(yu.copy(e.center).sub(zp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const vs=new he,Bp=new he,If=new he,ao=new he,Vp=new he,Nf=new he,Hp=new he;class bA{constructor(e=new he,t=new he(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vs.copy(this.origin).addScaledVector(this.direction,t),vs.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Bp.copy(e).add(t).multiplyScalar(.5),If.copy(t).sub(e).normalize(),ao.copy(this.origin).sub(Bp);const a=e.distanceTo(t)*.5,l=-this.direction.dot(If),c=ao.dot(this.direction),f=-ao.dot(If),h=ao.lengthSq(),p=Math.abs(1-l*l);let m,g,v,E;if(p>0)if(m=l*f-c,g=l*c-f,E=a*p,m>=0)if(g>=-E)if(g<=E){const M=1/p;m*=M,g*=M,v=m*(m+l*g+2*c)+g*(l*m+g+2*f)+h}else g=a,m=Math.max(0,-(l*g+c)),v=-m*m+g*(g+2*f)+h;else g=-a,m=Math.max(0,-(l*g+c)),v=-m*m+g*(g+2*f)+h;else g<=-E?(m=Math.max(0,-(-l*a+c)),g=m>0?-a:Math.min(Math.max(-a,-f),a),v=-m*m+g*(g+2*f)+h):g<=E?(m=0,g=Math.min(Math.max(-a,-f),a),v=g*(g+2*f)+h):(m=Math.max(0,-(l*a+c)),g=m>0?a:Math.min(Math.max(-a,-f),a),v=-m*m+g*(g+2*f)+h);else g=l>0?-a:a,m=Math.max(0,-(l*g+c)),v=-m*m+g*(g+2*f)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(Bp).addScaledVector(If,g),v}intersectSphere(e,t){vs.subVectors(e.center,this.origin);const n=vs.dot(this.direction),r=vs.dot(vs)-n*n,a=e.radius*e.radius;if(r>a)return null;const l=Math.sqrt(a-r),c=n-l,f=n+l;return f<0?null:c<0?this.at(f,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,l,c,f;const h=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,g=this.origin;return h>=0?(n=(e.min.x-g.x)*h,r=(e.max.x-g.x)*h):(n=(e.max.x-g.x)*h,r=(e.min.x-g.x)*h),p>=0?(a=(e.min.y-g.y)*p,l=(e.max.y-g.y)*p):(a=(e.max.y-g.y)*p,l=(e.min.y-g.y)*p),n>l||a>r||((a>n||isNaN(n))&&(n=a),(l<r||isNaN(r))&&(r=l),m>=0?(c=(e.min.z-g.z)*m,f=(e.max.z-g.z)*m):(c=(e.max.z-g.z)*m,f=(e.min.z-g.z)*m),n>f||c>r)||((c>n||n!==n)&&(n=c),(f<r||r!==r)&&(r=f),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,vs)!==null}intersectTriangle(e,t,n,r,a){Vp.subVectors(t,e),Nf.subVectors(n,e),Hp.crossVectors(Vp,Nf);let l=this.direction.dot(Hp),c;if(l>0){if(r)return null;c=1}else if(l<0)c=-1,l=-l;else return null;ao.subVectors(this.origin,e);const f=c*this.direction.dot(Nf.crossVectors(ao,Nf));if(f<0)return null;const h=c*this.direction.dot(Vp.cross(ao));if(h<0||f+h>l)return null;const p=-c*ao.dot(Hp);return p<0?null:this.at(p/l,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class On{constructor(e,t,n,r,a,l,c,f,h,p,m,g,v,E,M,x){On.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,c,f,h,p,m,g,v,E,M,x)}set(e,t,n,r,a,l,c,f,h,p,m,g,v,E,M,x){const y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=r,y[1]=a,y[5]=l,y[9]=c,y[13]=f,y[2]=h,y[6]=p,y[10]=m,y[14]=g,y[3]=v,y[7]=E,y[11]=M,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new On().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Za.setFromMatrixColumn(e,0).length(),a=1/Za.setFromMatrixColumn(e,1).length(),l=1/Za.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,l=Math.cos(n),c=Math.sin(n),f=Math.cos(r),h=Math.sin(r),p=Math.cos(a),m=Math.sin(a);if(e.order==="XYZ"){const g=l*p,v=l*m,E=c*p,M=c*m;t[0]=f*p,t[4]=-f*m,t[8]=h,t[1]=v+E*h,t[5]=g-M*h,t[9]=-c*f,t[2]=M-g*h,t[6]=E+v*h,t[10]=l*f}else if(e.order==="YXZ"){const g=f*p,v=f*m,E=h*p,M=h*m;t[0]=g+M*c,t[4]=E*c-v,t[8]=l*h,t[1]=l*m,t[5]=l*p,t[9]=-c,t[2]=v*c-E,t[6]=M+g*c,t[10]=l*f}else if(e.order==="ZXY"){const g=f*p,v=f*m,E=h*p,M=h*m;t[0]=g-M*c,t[4]=-l*m,t[8]=E+v*c,t[1]=v+E*c,t[5]=l*p,t[9]=M-g*c,t[2]=-l*h,t[6]=c,t[10]=l*f}else if(e.order==="ZYX"){const g=l*p,v=l*m,E=c*p,M=c*m;t[0]=f*p,t[4]=E*h-v,t[8]=g*h+M,t[1]=f*m,t[5]=M*h+g,t[9]=v*h-E,t[2]=-h,t[6]=c*f,t[10]=l*f}else if(e.order==="YZX"){const g=l*f,v=l*h,E=c*f,M=c*h;t[0]=f*p,t[4]=M-g*m,t[8]=E*m+v,t[1]=m,t[5]=l*p,t[9]=-c*p,t[2]=-h*p,t[6]=v*m+E,t[10]=g-M*m}else if(e.order==="XZY"){const g=l*f,v=l*h,E=c*f,M=c*h;t[0]=f*p,t[4]=-m,t[8]=h*p,t[1]=g*m+M,t[5]=l*p,t[9]=v*m-E,t[2]=E*m-v,t[6]=c*p,t[10]=M*m+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(CA,e,RA)}lookAt(e,t,n){const r=this.elements;return Qi.subVectors(e,t),Qi.lengthSq()===0&&(Qi.z=1),Qi.normalize(),lo.crossVectors(n,Qi),lo.lengthSq()===0&&(Math.abs(n.z)===1?Qi.x+=1e-4:Qi.z+=1e-4,Qi.normalize(),lo.crossVectors(n,Qi)),lo.normalize(),Uf.crossVectors(Qi,lo),r[0]=lo.x,r[4]=Uf.x,r[8]=Qi.x,r[1]=lo.y,r[5]=Uf.y,r[9]=Qi.y,r[2]=lo.z,r[6]=Uf.z,r[10]=Qi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,l=n[0],c=n[4],f=n[8],h=n[12],p=n[1],m=n[5],g=n[9],v=n[13],E=n[2],M=n[6],x=n[10],y=n[14],P=n[3],D=n[7],A=n[11],R=n[15],L=r[0],N=r[4],k=r[8],T=r[12],b=r[1],V=r[5],z=r[9],G=r[13],Q=r[2],ne=r[6],Z=r[10],Y=r[14],X=r[3],re=r[7],U=r[11],O=r[15];return a[0]=l*L+c*b+f*Q+h*X,a[4]=l*N+c*V+f*ne+h*re,a[8]=l*k+c*z+f*Z+h*U,a[12]=l*T+c*G+f*Y+h*O,a[1]=p*L+m*b+g*Q+v*X,a[5]=p*N+m*V+g*ne+v*re,a[9]=p*k+m*z+g*Z+v*U,a[13]=p*T+m*G+g*Y+v*O,a[2]=E*L+M*b+x*Q+y*X,a[6]=E*N+M*V+x*ne+y*re,a[10]=E*k+M*z+x*Z+y*U,a[14]=E*T+M*G+x*Y+y*O,a[3]=P*L+D*b+A*Q+R*X,a[7]=P*N+D*V+A*ne+R*re,a[11]=P*k+D*z+A*Z+R*U,a[15]=P*T+D*G+A*Y+R*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],l=e[1],c=e[5],f=e[9],h=e[13],p=e[2],m=e[6],g=e[10],v=e[14],E=e[3],M=e[7],x=e[11],y=e[15],P=f*v-h*g,D=c*v-h*m,A=c*g-f*m,R=l*v-h*p,L=l*g-f*p,N=l*m-c*p;return t*(M*P-x*D+y*A)-n*(E*P-x*R+y*L)+r*(E*D-M*R+y*N)-a*(E*A-M*L+x*N)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],c=e[5],f=e[6],h=e[7],p=e[8],m=e[9],g=e[10],v=e[11],E=e[12],M=e[13],x=e[14],y=e[15],P=m*x*h-M*g*h+M*f*v-c*x*v-m*f*y+c*g*y,D=E*g*h-p*x*h-E*f*v+l*x*v+p*f*y-l*g*y,A=p*M*h-E*m*h+E*c*v-l*M*v-p*c*y+l*m*y,R=E*m*f-p*M*f-E*c*g+l*M*g+p*c*x-l*m*x,L=t*P+n*D+r*A+a*R;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/L;return e[0]=P*N,e[1]=(M*g*a-m*x*a-M*r*v+n*x*v+m*r*y-n*g*y)*N,e[2]=(c*x*a-M*f*a+M*r*h-n*x*h-c*r*y+n*f*y)*N,e[3]=(m*f*a-c*g*a-m*r*h+n*g*h+c*r*v-n*f*v)*N,e[4]=D*N,e[5]=(p*x*a-E*g*a+E*r*v-t*x*v-p*r*y+t*g*y)*N,e[6]=(E*f*a-l*x*a-E*r*h+t*x*h+l*r*y-t*f*y)*N,e[7]=(l*g*a-p*f*a+p*r*h-t*g*h-l*r*v+t*f*v)*N,e[8]=A*N,e[9]=(E*m*a-p*M*a-E*n*v+t*M*v+p*n*y-t*m*y)*N,e[10]=(l*M*a-E*c*a+E*n*h-t*M*h-l*n*y+t*c*y)*N,e[11]=(p*c*a-l*m*a-p*n*h+t*m*h+l*n*v-t*c*v)*N,e[12]=R*N,e[13]=(p*M*r-E*m*r+E*n*g-t*M*g-p*n*x+t*m*x)*N,e[14]=(E*c*r-l*M*r-E*n*f+t*M*f+l*n*x-t*c*x)*N,e[15]=(l*m*r-p*c*r+p*n*f-t*m*f-l*n*g+t*c*g)*N,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,l=e.x,c=e.y,f=e.z,h=a*l,p=a*c;return this.set(h*l+n,h*c-r*f,h*f+r*c,0,h*c+r*f,p*c+n,p*f-r*l,0,h*f-r*c,p*f+r*l,a*f*f+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,l){return this.set(1,n,a,0,e,1,l,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,l=t._y,c=t._z,f=t._w,h=a+a,p=l+l,m=c+c,g=a*h,v=a*p,E=a*m,M=l*p,x=l*m,y=c*m,P=f*h,D=f*p,A=f*m,R=n.x,L=n.y,N=n.z;return r[0]=(1-(M+y))*R,r[1]=(v+A)*R,r[2]=(E-D)*R,r[3]=0,r[4]=(v-A)*L,r[5]=(1-(g+y))*L,r[6]=(x+P)*L,r[7]=0,r[8]=(E+D)*N,r[9]=(x-P)*N,r[10]=(1-(g+M))*N,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let a=Za.set(r[0],r[1],r[2]).length();const l=Za.set(r[4],r[5],r[6]).length(),c=Za.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),Nr.copy(this);const h=1/a,p=1/l,m=1/c;return Nr.elements[0]*=h,Nr.elements[1]*=h,Nr.elements[2]*=h,Nr.elements[4]*=p,Nr.elements[5]*=p,Nr.elements[6]*=p,Nr.elements[8]*=m,Nr.elements[9]*=m,Nr.elements[10]*=m,t.setFromRotationMatrix(Nr),n.x=a,n.y=l,n.z=c,this}makePerspective(e,t,n,r,a,l,c=ts,f=!1){const h=this.elements,p=2*a/(t-e),m=2*a/(n-r),g=(t+e)/(t-e),v=(n+r)/(n-r);let E,M;if(f)E=a/(l-a),M=l*a/(l-a);else if(c===ts)E=-(l+a)/(l-a),M=-2*l*a/(l-a);else if(c===Td)E=-l/(l-a),M=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=m,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,r,a,l,c=ts,f=!1){const h=this.elements,p=2/(t-e),m=2/(n-r),g=-(t+e)/(t-e),v=-(n+r)/(n-r);let E,M;if(f)E=1/(l-a),M=l/(l-a);else if(c===ts)E=-2/(l-a),M=-(l+a)/(l-a);else if(c===Td)E=-1/(l-a),M=-a/(l-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=m,h[9]=0,h[13]=v,h[2]=0,h[6]=0,h[10]=E,h[14]=M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Za=new he,Nr=new On,CA=new he(0,0,0),RA=new he(1,1,1),lo=new he,Uf=new he,Qi=new he,qx=new On,$x=new cc;class Fs{constructor(e=0,t=0,n=0,r=Fs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],l=r[4],c=r[8],f=r[1],h=r[5],p=r[9],m=r[2],g=r[6],v=r[10];switch(t){case"XYZ":this._y=Math.asin(Vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,v),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,v),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-m,a),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-m,v),this._z=Math.atan2(-l,h)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-Vt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(g,v),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-l,h));break;case"YZX":this._z=Math.asin(Vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-m,a)):(this._x=0,this._y=Math.atan2(c,v));break;case"XZY":this._z=Math.asin(-Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-p,v),this._y=0);break;default:bt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qx,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $x.setFromEuler(this),this.setFromQuaternion($x,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fs.DEFAULT_ORDER="XYZ";class w1{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let PA=0;const Kx=new he,Qa=new cc,xs=new On,Ff=new he,Su=new he,DA=new he,LA=new cc,Zx=new he(1,0,0),Qx=new he(0,1,0),Jx=new he(0,0,1),ey={type:"added"},IA={type:"removed"},Ja={type:"childadded",child:null},Gp={type:"childremoved",child:null};class ur extends Nl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:PA++}),this.uuid=uc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ur.DEFAULT_UP.clone();const e=new he,t=new Fs,n=new cc,r=new he(1,1,1);function a(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new On},normalMatrix:{value:new Rt}}),this.matrix=new On,this.matrixWorld=new On,this.matrixAutoUpdate=ur.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ur.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new w1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qa.setFromAxisAngle(e,t),this.quaternion.multiply(Qa),this}rotateOnWorldAxis(e,t){return Qa.setFromAxisAngle(e,t),this.quaternion.premultiply(Qa),this}rotateX(e){return this.rotateOnAxis(Zx,e)}rotateY(e){return this.rotateOnAxis(Qx,e)}rotateZ(e){return this.rotateOnAxis(Jx,e)}translateOnAxis(e,t){return Kx.copy(e).applyQuaternion(this.quaternion),this.position.add(Kx.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zx,e)}translateY(e){return this.translateOnAxis(Qx,e)}translateZ(e){return this.translateOnAxis(Jx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ff.copy(e):Ff.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Su.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xs.lookAt(Su,Ff,this.up):xs.lookAt(Ff,Su,this.up),this.quaternion.setFromRotationMatrix(xs),r&&(xs.extractRotation(r.matrixWorld),Qa.setFromRotationMatrix(xs),this.quaternion.premultiply(Qa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Kt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ey),Ja.child=e,this.dispatchEvent(Ja),Ja.child=null):Kt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(IA),Gp.child=e,this.dispatchEvent(Gp),Gp.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xs.multiply(e.parent.matrixWorld)),e.applyMatrix4(xs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ey),Ja.child=e,this.dispatchEvent(Ja),Ja.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Su,e,DA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Su,LA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(c=>({...c})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(c,f){return c[f.uuid]===void 0&&(c[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const f=c.shapes;if(Array.isArray(f))for(let h=0,p=f.length;h<p;h++){const m=f[h];a(e.shapes,m)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let f=0,h=this.material.length;f<h;f++)c.push(a(e.materials,this.material[f]));r.material=c}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const f=this.animations[c];r.animations.push(a(e.animations,f))}}if(t){const c=l(e.geometries),f=l(e.materials),h=l(e.textures),p=l(e.images),m=l(e.shapes),g=l(e.skeletons),v=l(e.animations),E=l(e.nodes);c.length>0&&(n.geometries=c),f.length>0&&(n.materials=f),h.length>0&&(n.textures=h),p.length>0&&(n.images=p),m.length>0&&(n.shapes=m),g.length>0&&(n.skeletons=g),v.length>0&&(n.animations=v),E.length>0&&(n.nodes=E)}return n.object=r,n;function l(c){const f=[];for(const h in c){const p=c[h];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}ur.DEFAULT_UP=new he(0,1,0);ur.DEFAULT_MATRIX_AUTO_UPDATE=!0;ur.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ur=new he,ys=new he,Wp=new he,Ss=new he,el=new he,tl=new he,ty=new he,Xp=new he,jp=new he,Yp=new he,qp=new Dn,$p=new Dn,Kp=new Dn;class kr{constructor(e=new he,t=new he,n=new he){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ur.subVectors(e,t),r.cross(Ur);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){Ur.subVectors(r,t),ys.subVectors(n,t),Wp.subVectors(e,t);const l=Ur.dot(Ur),c=Ur.dot(ys),f=Ur.dot(Wp),h=ys.dot(ys),p=ys.dot(Wp),m=l*h-c*c;if(m===0)return a.set(0,0,0),null;const g=1/m,v=(h*f-c*p)*g,E=(l*p-c*f)*g;return a.set(1-v-E,E,v)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ss)===null?!1:Ss.x>=0&&Ss.y>=0&&Ss.x+Ss.y<=1}static getInterpolation(e,t,n,r,a,l,c,f){return this.getBarycoord(e,t,n,r,Ss)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,Ss.x),f.addScaledVector(l,Ss.y),f.addScaledVector(c,Ss.z),f)}static getInterpolatedAttribute(e,t,n,r,a,l){return qp.setScalar(0),$p.setScalar(0),Kp.setScalar(0),qp.fromBufferAttribute(e,t),$p.fromBufferAttribute(e,n),Kp.fromBufferAttribute(e,r),l.setScalar(0),l.addScaledVector(qp,a.x),l.addScaledVector($p,a.y),l.addScaledVector(Kp,a.z),l}static isFrontFacing(e,t,n,r){return Ur.subVectors(n,t),ys.subVectors(e,t),Ur.cross(ys).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ur.subVectors(this.c,this.b),ys.subVectors(this.a,this.b),Ur.cross(ys).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return kr.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return kr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let l,c;el.subVectors(r,n),tl.subVectors(a,n),Xp.subVectors(e,n);const f=el.dot(Xp),h=tl.dot(Xp);if(f<=0&&h<=0)return t.copy(n);jp.subVectors(e,r);const p=el.dot(jp),m=tl.dot(jp);if(p>=0&&m<=p)return t.copy(r);const g=f*m-p*h;if(g<=0&&f>=0&&p<=0)return l=f/(f-p),t.copy(n).addScaledVector(el,l);Yp.subVectors(e,a);const v=el.dot(Yp),E=tl.dot(Yp);if(E>=0&&v<=E)return t.copy(a);const M=v*h-f*E;if(M<=0&&h>=0&&E<=0)return c=h/(h-E),t.copy(n).addScaledVector(tl,c);const x=p*E-v*m;if(x<=0&&m-p>=0&&v-E>=0)return ty.subVectors(a,r),c=(m-p)/(m-p+(v-E)),t.copy(r).addScaledVector(ty,c);const y=1/(x+M+g);return l=M*y,c=g*y,t.copy(n).addScaledVector(el,l).addScaledVector(tl,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const A1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},uo={h:0,s:0,l:0},Of={h:0,s:0,l:0};function Zp(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class on{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Yt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Yt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Yt.workingColorSpace){if(e=xA(e,1),t=Vt(t,0,1),n=Vt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,l=2*n-a;this.r=Zp(l,a,e+1/3),this.g=Zp(l,a,e),this.b=Zp(l,a,e-1/3)}return Yt.colorSpaceToWorking(this,r),this}setStyle(e,t=Vi){function n(a){a!==void 0&&parseFloat(a)<1&&bt("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const l=r[1],c=r[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:bt("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(a,16),t);bt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vi){const n=A1[e.toLowerCase()];return n!==void 0?this.setHex(n,t):bt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}copyLinearToSRGB(e){return this.r=yl(e.r),this.g=yl(e.g),this.b=yl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vi){return Yt.workingToColorSpace(pi.copy(this),e),Math.round(Vt(pi.r*255,0,255))*65536+Math.round(Vt(pi.g*255,0,255))*256+Math.round(Vt(pi.b*255,0,255))}getHexString(e=Vi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Yt.workingColorSpace){Yt.workingToColorSpace(pi.copy(this),t);const n=pi.r,r=pi.g,a=pi.b,l=Math.max(n,r,a),c=Math.min(n,r,a);let f,h;const p=(c+l)/2;if(c===l)f=0,h=0;else{const m=l-c;switch(h=p<=.5?m/(l+c):m/(2-l-c),l){case n:f=(r-a)/m+(r<a?6:0);break;case r:f=(a-n)/m+2;break;case a:f=(n-r)/m+4;break}f/=6}return e.h=f,e.s=h,e.l=p,e}getRGB(e,t=Yt.workingColorSpace){return Yt.workingToColorSpace(pi.copy(this),t),e.r=pi.r,e.g=pi.g,e.b=pi.b,e}getStyle(e=Vi){Yt.workingToColorSpace(pi.copy(this),e);const t=pi.r,n=pi.g,r=pi.b;return e!==Vi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(uo),this.setHSL(uo.h+e,uo.s+t,uo.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(uo),e.getHSL(Of);const n=Ip(uo.h,Of.h,t),r=Ip(uo.s,Of.s,t),a=Ip(uo.l,Of.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pi=new on;on.NAMES=A1;let NA=0;class Dd extends Nl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:NA++}),this.uuid=uc(),this.name="",this.type="Material",this.blending=xl,this.side=bo,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fm,this.blendDst=Om,this.blendEquation=ea,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new on(0,0,0),this.blendAlpha=0,this.depthFunc=Rl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ja,this.stencilZFail=ja,this.stencilZPass=ja,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){bt(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){bt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xl&&(n.blending=this.blending),this.side!==bo&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fm&&(n.blendSrc=this.blendSrc),this.blendDst!==Om&&(n.blendDst=this.blendDst),this.blendEquation!==ea&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Rl&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bx&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ja&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ja&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ja&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}if(t){const a=r(e.textures),l=r(e.images);a.length>0&&(n.textures=a),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class b1 extends Dd{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new on(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fs,this.combine=a1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nn=new he,kf=new tn;let UA=0;class ss{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:UA++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Vx,this.updateRanges=[],this.gpuType=es,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)kf.fromBufferAttribute(this,t),kf.applyMatrix3(e),this.setXY(t,kf.x,kf.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nn.fromBufferAttribute(this,t),Nn.applyMatrix3(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nn.fromBufferAttribute(this,t),Nn.applyMatrix4(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nn.fromBufferAttribute(this,t),Nn.applyNormalMatrix(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nn.fromBufferAttribute(this,t),Nn.transformDirection(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vu(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=zi(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vu(t,this.array)),t}setX(e,t){return this.normalized&&(t=zi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vu(t,this.array)),t}setY(e,t){return this.normalized&&(t=zi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vu(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vu(t,this.array)),t}setW(e,t){return this.normalized&&(t=zi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=zi(t,this.array),n=zi(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=zi(t,this.array),n=zi(n,this.array),r=zi(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=zi(t,this.array),n=zi(n,this.array),r=zi(r,this.array),a=zi(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vx&&(e.usage=this.usage),e}}class C1 extends ss{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class R1 extends ss{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ds extends ss{constructor(e,t,n){super(new Float32Array(e),t,n)}}let FA=0;const vr=new On,Qp=new ur,nl=new he,Ji=new fc,Mu=new fc,Zn=new he;class Os extends Nl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:FA++}),this.uuid=uc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(E1(e)?R1:C1)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Rt().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vr.makeRotationFromQuaternion(e),this.applyMatrix4(vr),this}rotateX(e){return vr.makeRotationX(e),this.applyMatrix4(vr),this}rotateY(e){return vr.makeRotationY(e),this.applyMatrix4(vr),this}rotateZ(e){return vr.makeRotationZ(e),this.applyMatrix4(vr),this}translate(e,t,n){return vr.makeTranslation(e,t,n),this.applyMatrix4(vr),this}scale(e,t,n){return vr.makeScale(e,t,n),this.applyMatrix4(vr),this}lookAt(e){return Qp.lookAt(e),Qp.updateMatrix(),this.applyMatrix4(Qp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nl).negate(),this.translate(nl.x,nl.y,nl.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,a=e.length;r<a;r++){const l=e[r];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new Ds(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&bt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new he(-1/0,-1/0,-1/0),new he(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];Ji.setFromBufferAttribute(a),this.morphTargetsRelative?(Zn.addVectors(this.boundingBox.min,Ji.min),this.boundingBox.expandByPoint(Zn),Zn.addVectors(this.boundingBox.max,Ji.max),this.boundingBox.expandByPoint(Zn)):(this.boundingBox.expandByPoint(Ji.min),this.boundingBox.expandByPoint(Ji.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new h0);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new he,1/0);return}if(e){const n=this.boundingSphere.center;if(Ji.setFromBufferAttribute(e),t)for(let a=0,l=t.length;a<l;a++){const c=t[a];Mu.setFromBufferAttribute(c),this.morphTargetsRelative?(Zn.addVectors(Ji.min,Mu.min),Ji.expandByPoint(Zn),Zn.addVectors(Ji.max,Mu.max),Ji.expandByPoint(Zn)):(Ji.expandByPoint(Mu.min),Ji.expandByPoint(Mu.max))}Ji.getCenter(n);let r=0;for(let a=0,l=e.count;a<l;a++)Zn.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(Zn));if(t)for(let a=0,l=t.length;a<l;a++){const c=t[a],f=this.morphTargetsRelative;for(let h=0,p=c.count;h<p;h++)Zn.fromBufferAttribute(c,h),f&&(nl.fromBufferAttribute(e,h),Zn.add(nl)),r=Math.max(r,n.distanceToSquared(Zn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ss(new Float32Array(4*n.count),4));const l=this.getAttribute("tangent"),c=[],f=[];for(let k=0;k<n.count;k++)c[k]=new he,f[k]=new he;const h=new he,p=new he,m=new he,g=new tn,v=new tn,E=new tn,M=new he,x=new he;function y(k,T,b){h.fromBufferAttribute(n,k),p.fromBufferAttribute(n,T),m.fromBufferAttribute(n,b),g.fromBufferAttribute(a,k),v.fromBufferAttribute(a,T),E.fromBufferAttribute(a,b),p.sub(h),m.sub(h),v.sub(g),E.sub(g);const V=1/(v.x*E.y-E.x*v.y);isFinite(V)&&(M.copy(p).multiplyScalar(E.y).addScaledVector(m,-v.y).multiplyScalar(V),x.copy(m).multiplyScalar(v.x).addScaledVector(p,-E.x).multiplyScalar(V),c[k].add(M),c[T].add(M),c[b].add(M),f[k].add(x),f[T].add(x),f[b].add(x))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let k=0,T=P.length;k<T;++k){const b=P[k],V=b.start,z=b.count;for(let G=V,Q=V+z;G<Q;G+=3)y(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const D=new he,A=new he,R=new he,L=new he;function N(k){R.fromBufferAttribute(r,k),L.copy(R);const T=c[k];D.copy(T),D.sub(R.multiplyScalar(R.dot(T))).normalize(),A.crossVectors(L,T);const V=A.dot(f[k])<0?-1:1;l.setXYZW(k,D.x,D.y,D.z,V)}for(let k=0,T=P.length;k<T;++k){const b=P[k],V=b.start,z=b.count;for(let G=V,Q=V+z;G<Q;G+=3)N(e.getX(G+0)),N(e.getX(G+1)),N(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ss(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let g=0,v=n.count;g<v;g++)n.setXYZ(g,0,0,0);const r=new he,a=new he,l=new he,c=new he,f=new he,h=new he,p=new he,m=new he;if(e)for(let g=0,v=e.count;g<v;g+=3){const E=e.getX(g+0),M=e.getX(g+1),x=e.getX(g+2);r.fromBufferAttribute(t,E),a.fromBufferAttribute(t,M),l.fromBufferAttribute(t,x),p.subVectors(l,a),m.subVectors(r,a),p.cross(m),c.fromBufferAttribute(n,E),f.fromBufferAttribute(n,M),h.fromBufferAttribute(n,x),c.add(p),f.add(p),h.add(p),n.setXYZ(E,c.x,c.y,c.z),n.setXYZ(M,f.x,f.y,f.z),n.setXYZ(x,h.x,h.y,h.z)}else for(let g=0,v=t.count;g<v;g+=3)r.fromBufferAttribute(t,g+0),a.fromBufferAttribute(t,g+1),l.fromBufferAttribute(t,g+2),p.subVectors(l,a),m.subVectors(r,a),p.cross(m),n.setXYZ(g+0,p.x,p.y,p.z),n.setXYZ(g+1,p.x,p.y,p.z),n.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zn.fromBufferAttribute(e,t),Zn.normalize(),e.setXYZ(t,Zn.x,Zn.y,Zn.z)}toNonIndexed(){function e(c,f){const h=c.array,p=c.itemSize,m=c.normalized,g=new h.constructor(f.length*p);let v=0,E=0;for(let M=0,x=f.length;M<x;M++){c.isInterleavedBufferAttribute?v=f[M]*c.data.stride+c.offset:v=f[M]*p;for(let y=0;y<p;y++)g[E++]=h[v++]}return new ss(g,p,m)}if(this.index===null)return bt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Os,n=this.index.array,r=this.attributes;for(const c in r){const f=r[c],h=e(f,n);t.setAttribute(c,h)}const a=this.morphAttributes;for(const c in a){const f=[],h=a[c];for(let p=0,m=h.length;p<m;p++){const g=h[p],v=e(g,n);f.push(v)}t.morphAttributes[c]=f}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let c=0,f=l.length;c<f;c++){const h=l[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const f in n){const h=n[f];e.data.attributes[f]=h.toJSON(e.data)}const r={};let a=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],p=[];for(let m=0,g=h.length;m<g;m++){const v=h[m];p.push(v.toJSON(e.data))}p.length>0&&(r[f]=p,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const h in r){const p=r[h];this.setAttribute(h,p.clone(t))}const a=e.morphAttributes;for(const h in a){const p=[],m=a[h];for(let g=0,v=m.length;g<v;g++)p.push(m[g].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let h=0,p=l.length;h<p;h++){const m=l[h];this.addGroup(m.start,m.count,m.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ny=new On,jo=new bA,zf=new h0,iy=new he,Bf=new he,Vf=new he,Hf=new he,Jp=new he,Gf=new he,ry=new he,Wf=new he;class ls extends ur{constructor(e=new Os,t=new b1){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const c=this.morphTargetInfluences;if(a&&c){Gf.set(0,0,0);for(let f=0,h=a.length;f<h;f++){const p=c[f],m=a[f];p!==0&&(Jp.fromBufferAttribute(m,e),l?Gf.addScaledVector(Jp,p):Gf.addScaledVector(Jp.sub(t),p))}t.add(Gf)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zf.copy(n.boundingSphere),zf.applyMatrix4(a),jo.copy(e.ray).recast(e.near),!(zf.containsPoint(jo.origin)===!1&&(jo.intersectSphere(zf,iy)===null||jo.origin.distanceToSquared(iy)>(e.far-e.near)**2))&&(ny.copy(a).invert(),jo.copy(e.ray).applyMatrix4(ny),!(n.boundingBox!==null&&jo.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,jo)))}_computeIntersections(e,t,n){let r;const a=this.geometry,l=this.material,c=a.index,f=a.attributes.position,h=a.attributes.uv,p=a.attributes.uv1,m=a.attributes.normal,g=a.groups,v=a.drawRange;if(c!==null)if(Array.isArray(l))for(let E=0,M=g.length;E<M;E++){const x=g[E],y=l[x.materialIndex],P=Math.max(x.start,v.start),D=Math.min(c.count,Math.min(x.start+x.count,v.start+v.count));for(let A=P,R=D;A<R;A+=3){const L=c.getX(A),N=c.getX(A+1),k=c.getX(A+2);r=Xf(this,y,e,n,h,p,m,L,N,k),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const E=Math.max(0,v.start),M=Math.min(c.count,v.start+v.count);for(let x=E,y=M;x<y;x+=3){const P=c.getX(x),D=c.getX(x+1),A=c.getX(x+2);r=Xf(this,l,e,n,h,p,m,P,D,A),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(f!==void 0)if(Array.isArray(l))for(let E=0,M=g.length;E<M;E++){const x=g[E],y=l[x.materialIndex],P=Math.max(x.start,v.start),D=Math.min(f.count,Math.min(x.start+x.count,v.start+v.count));for(let A=P,R=D;A<R;A+=3){const L=A,N=A+1,k=A+2;r=Xf(this,y,e,n,h,p,m,L,N,k),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const E=Math.max(0,v.start),M=Math.min(f.count,v.start+v.count);for(let x=E,y=M;x<y;x+=3){const P=x,D=x+1,A=x+2;r=Xf(this,l,e,n,h,p,m,P,D,A),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}}function OA(s,e,t,n,r,a,l,c){let f;if(e.side===ji?f=n.intersectTriangle(l,a,r,!0,c):f=n.intersectTriangle(r,a,l,e.side===bo,c),f===null)return null;Wf.copy(c),Wf.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(Wf);return h<t.near||h>t.far?null:{distance:h,point:Wf.clone(),object:s}}function Xf(s,e,t,n,r,a,l,c,f,h){s.getVertexPosition(c,Bf),s.getVertexPosition(f,Vf),s.getVertexPosition(h,Hf);const p=OA(s,e,t,n,Bf,Vf,Hf,ry);if(p){const m=new he;kr.getBarycoord(ry,Bf,Vf,Hf,m),r&&(p.uv=kr.getInterpolatedAttribute(r,c,f,h,m,new tn)),a&&(p.uv1=kr.getInterpolatedAttribute(a,c,f,h,m,new tn)),l&&(p.normal=kr.getInterpolatedAttribute(l,c,f,h,m,new he),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const g={a:c,b:f,c:h,normal:new he,materialIndex:0};kr.getNormal(Bf,Vf,Hf,g.normal),p.face=g,p.barycoord=m}return p}class dc extends Os{constructor(e=1,t=1,n=1,r=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:l};const c=this;r=Math.floor(r),a=Math.floor(a),l=Math.floor(l);const f=[],h=[],p=[],m=[];let g=0,v=0;E("z","y","x",-1,-1,n,t,e,l,a,0),E("z","y","x",1,-1,n,t,-e,l,a,1),E("x","z","y",1,1,e,n,t,r,l,2),E("x","z","y",1,-1,e,n,-t,r,l,3),E("x","y","z",1,-1,e,t,n,r,a,4),E("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(f),this.setAttribute("position",new Ds(h,3)),this.setAttribute("normal",new Ds(p,3)),this.setAttribute("uv",new Ds(m,2));function E(M,x,y,P,D,A,R,L,N,k,T){const b=A/N,V=R/k,z=A/2,G=R/2,Q=L/2,ne=N+1,Z=k+1;let Y=0,X=0;const re=new he;for(let U=0;U<Z;U++){const O=U*V-G;for(let ee=0;ee<ne;ee++){const Ee=ee*b-z;re[M]=Ee*P,re[x]=O*D,re[y]=Q,h.push(re.x,re.y,re.z),re[M]=0,re[x]=0,re[y]=L>0?1:-1,p.push(re.x,re.y,re.z),m.push(ee/N),m.push(1-U/k),Y+=1}}for(let U=0;U<k;U++)for(let O=0;O<N;O++){const ee=g+O+ne*U,Ee=g+O+ne*(U+1),be=g+(O+1)+ne*(U+1),Oe=g+(O+1)+ne*U;f.push(ee,Ee,Oe),f.push(Ee,be,Oe),X+=6}c.addGroup(v,X,T),v+=X,g+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Il(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const r=s[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(bt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function bi(s){const e={};for(let t=0;t<s.length;t++){const n=Il(s[t]);for(const r in n)e[r]=n[r]}return e}function kA(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function P1(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Yt.workingColorSpace}const zA={clone:Il,merge:bi};var BA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,VA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Br extends Dd{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=BA,this.fragmentShader=VA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Il(e.uniforms),this.uniformsGroups=kA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?t.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[r]={type:"m4",value:l.toArray()}:t.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class D1 extends ur{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new On,this.projectionMatrix=new On,this.projectionMatrixInverse=new On,this.coordinateSystem=ts,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const co=new he,sy=new tn,oy=new tn;class Or extends D1{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bg*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Lp*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bg*2*Math.atan(Math.tan(Lp*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){co.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(co.x,co.y).multiplyScalar(-e/co.z),co.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(co.x,co.y).multiplyScalar(-e/co.z)}getViewSize(e,t){return this.getViewBounds(e,sy,oy),t.subVectors(oy,sy)}setViewOffset(e,t,n,r,a,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Lp*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const f=l.fullWidth,h=l.fullHeight;a+=l.offsetX*r/f,t-=l.offsetY*n/h,r*=l.width/f,n*=l.height/h}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const il=-90,rl=1;class HA extends ur{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Or(il,rl,e,t);r.layers=this.layers,this.add(r);const a=new Or(il,rl,e,t);a.layers=this.layers,this.add(a);const l=new Or(il,rl,e,t);l.layers=this.layers,this.add(l);const c=new Or(il,rl,e,t);c.layers=this.layers,this.add(c);const f=new Or(il,rl,e,t);f.layers=this.layers,this.add(f);const h=new Or(il,rl,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,l,c,f]=t;for(const h of t)this.remove(h);if(e===ts)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Td)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,l,c,f,h,p]=this.children,m=e.getRenderTarget(),g=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,l),e.setRenderTarget(n,2,r),e.render(t,c),e.setRenderTarget(n,3,r),e.render(t,f),e.setRenderTarget(n,4,r),e.render(t,h),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,r),e.render(t,p),e.setRenderTarget(m,g,v),e.xr.enabled=E,n.texture.needsPMREMUpdate=!0}}class L1 extends Si{constructor(e=[],t=ga,n,r,a,l,c,f,h,p){super(e,t,n,r,a,l,c,f,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class I1 extends rs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new L1(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new dc(5,5,5),a=new Br({name:"CubemapFromEquirect",uniforms:Il(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ji,blending:Rs});a.uniforms.tEquirect.value=t;const l=new ls(r,a),c=t.minFilter;return t.minFilter===ra&&(t.minFilter=xi),new HA(1,10,this).update(e,l),t.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const a=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,r);e.setRenderTarget(a)}}class jf extends ur{constructor(){super(),this.isGroup=!0,this.type="Group"}}const GA={type:"move"};class em{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jf,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jf,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new he,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new he),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jf,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new he,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new he),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,l=null;const c=this._targetRay,f=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){l=!0;for(const M of e.hand.values()){const x=t.getJointPose(M,n),y=this._getHandJoint(h,M);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const p=h.joints["index-finger-tip"],m=h.joints["thumb-tip"],g=p.position.distanceTo(m.position),v=.02,E=.005;h.inputState.pinching&&g>v+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=v-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1));c!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(GA)))}return c!==null&&(c.visible=r!==null),f!==null&&(f.visible=a!==null),h!==null&&(h.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new jf;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class WA extends ur{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fs,this.environmentIntensity=1,this.environmentRotation=new Fs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class XA extends Si{constructor(e=null,t=1,n=1,r,a,l,c,f,h=si,p=si,m,g){super(null,l,c,f,h,p,r,a,m,g),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const tm=new he,jA=new he,YA=new Rt;class Jo{constructor(e=new he(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=tm.subVectors(n,t).cross(jA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(tm),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||YA.getNormalMatrix(e),r=this.coplanarPoint(tm).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yo=new h0,qA=new tn(.5,.5),Yf=new he;class N1{constructor(e=new Jo,t=new Jo,n=new Jo,r=new Jo,a=new Jo,l=new Jo){this.planes=[e,t,n,r,a,l]}set(e,t,n,r,a,l){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(r),c[4].copy(a),c[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ts,n=!1){const r=this.planes,a=e.elements,l=a[0],c=a[1],f=a[2],h=a[3],p=a[4],m=a[5],g=a[6],v=a[7],E=a[8],M=a[9],x=a[10],y=a[11],P=a[12],D=a[13],A=a[14],R=a[15];if(r[0].setComponents(h-l,v-p,y-E,R-P).normalize(),r[1].setComponents(h+l,v+p,y+E,R+P).normalize(),r[2].setComponents(h+c,v+m,y+M,R+D).normalize(),r[3].setComponents(h-c,v-m,y-M,R-D).normalize(),n)r[4].setComponents(f,g,x,A).normalize(),r[5].setComponents(h-f,v-g,y-x,R-A).normalize();else if(r[4].setComponents(h-f,v-g,y-x,R-A).normalize(),t===ts)r[5].setComponents(h+f,v+g,y+x,R+A).normalize();else if(t===Td)r[5].setComponents(f,g,x,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yo)}intersectsSprite(e){Yo.center.set(0,0,0);const t=qA.distanceTo(e.center);return Yo.radius=.7071067811865476+t,Yo.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yo)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Yf.x=r.normal.x>0?e.max.x:e.min.x,Yf.y=r.normal.y>0?e.max.y:e.min.y,Yf.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Yf)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ac extends Si{constructor(e,t,n=as,r,a,l,c=si,f=si,h,p=Us,m=1){if(p!==Us&&p!==sa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:m};super(g,r,a,l,c,f,p,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new d0(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class $A extends ac{constructor(e,t=as,n=ga,r,a,l=si,c=si,f,h=Us){const p={width:e,height:e,depth:1},m=[p,p,p,p,p,p];super(e,e,t,n,r,a,l,c,f,h),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class U1 extends Si{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class hc extends Os{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,l=t/2,c=Math.floor(n),f=Math.floor(r),h=c+1,p=f+1,m=e/c,g=t/f,v=[],E=[],M=[],x=[];for(let y=0;y<p;y++){const P=y*g-l;for(let D=0;D<h;D++){const A=D*m-a;E.push(A,-P,0),M.push(0,0,1),x.push(D/c),x.push(1-y/f)}}for(let y=0;y<f;y++)for(let P=0;P<c;P++){const D=P+h*y,A=P+h*(y+1),R=P+1+h*(y+1),L=P+1+h*y;v.push(D,A,L),v.push(A,R,L)}this.setIndex(v),this.setAttribute("position",new Ds(E,3)),this.setAttribute("normal",new Ds(M,3)),this.setAttribute("uv",new Ds(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hc(e.width,e.height,e.widthSegments,e.heightSegments)}}class KA extends Br{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ZA extends Dd{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class QA extends Dd{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const nm={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class JA{constructor(e,t,n){const r=this;let a=!1,l=0,c=0,f;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(p){c++,a===!1&&r.onStart!==void 0&&r.onStart(p,l,c),a=!0},this.itemEnd=function(p){l++,r.onProgress!==void 0&&r.onProgress(p,l,c),l===c&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(p){r.onError!==void 0&&r.onError(p)},this.resolveURL=function(p){return f?f(p):p},this.setURLModifier=function(p){return f=p,this},this.addHandler=function(p,m){return h.push(p,m),this},this.removeHandler=function(p){const m=h.indexOf(p);return m!==-1&&h.splice(m,2),this},this.getHandler=function(p){for(let m=0,g=h.length;m<g;m+=2){const v=h[m],E=h[m+1];if(v.global&&(v.lastIndex=0),v.test(p))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const eb=new JA;class p0{constructor(e){this.manager=e!==void 0?e:eb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,a){n.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}p0.DEFAULT_MATERIAL_NAME="__DEFAULT";const sl=new WeakMap;class tb extends p0{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,l=nm.get(`image:${e}`);if(l!==void 0){if(l.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(l),a.manager.itemEnd(e)},0);else{let m=sl.get(l);m===void 0&&(m=[],sl.set(l,m)),m.push({onLoad:t,onError:r})}return l}const c=sc("img");function f(){p(),t&&t(this);const m=sl.get(this)||[];for(let g=0;g<m.length;g++){const v=m[g];v.onLoad&&v.onLoad(this)}sl.delete(this),a.manager.itemEnd(e)}function h(m){p(),r&&r(m),nm.remove(`image:${e}`);const g=sl.get(this)||[];for(let v=0;v<g.length;v++){const E=g[v];E.onError&&E.onError(m)}sl.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function p(){c.removeEventListener("load",f,!1),c.removeEventListener("error",h,!1)}return c.addEventListener("load",f,!1),c.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),nm.add(`image:${e}`,c),a.manager.itemStart(e),c.src=e,c}}class nb extends p0{constructor(e){super(e)}load(e,t,n,r){const a=new Si,l=new tb(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(c){a.image=c,a.needsUpdate=!0,t!==void 0&&t(a)},n,r),a}}class m0 extends D1{constructor(e=-1,t=1,n=1,r=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,l=n+e,c=r+t,f=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,l=a+h*this.view.width,c-=p*this.view.offsetY,f=c-p*this.view.height}this.projectionMatrix.makeOrthographic(a,l,c,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ib extends Or{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function ay(s,e,t,n){const r=rb(n);switch(t){case y1:return s*e;case M1:return s*e/r.components*r.byteLength;case a0:return s*e/r.components*r.byteLength;case Dl:return s*e*2/r.components*r.byteLength;case l0:return s*e*2/r.components*r.byteLength;case S1:return s*e*3/r.components*r.byteLength;case zr:return s*e*4/r.components*r.byteLength;case u0:return s*e*4/r.components*r.byteLength;case od:case ad:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ld:case ud:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Km:case Qm:return Math.max(s,16)*Math.max(e,8)/4;case $m:case Zm:return Math.max(s,8)*Math.max(e,8)/2;case Jm:case eg:case ng:case ig:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case tg:case rg:case sg:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case og:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ag:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case lg:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ug:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case cg:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case fg:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case dg:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case hg:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case pg:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case mg:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case gg:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case _g:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case vg:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case xg:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case yg:case Sg:case Mg:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Eg:case Tg:return Math.ceil(s/4)*Math.ceil(e/4)*8;case wg:case Ag:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function rb(s){switch(s){case Mr:case g1:return{byteLength:1,components:1};case ic:case _1:case Ns:return{byteLength:2,components:1};case s0:case o0:return{byteLength:2,components:4};case as:case r0:case es:return{byteLength:4,components:1};case v1:case x1:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:i0}}));typeof window<"u"&&(window.__THREE__?bt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=i0);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function F1(){let s=null,e=!1,t=null,n=null;function r(a,l){t(a,l),n=s.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(r),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){s=a}}}function sb(s){const e=new WeakMap;function t(c,f){const h=c.array,p=c.usage,m=h.byteLength,g=s.createBuffer();s.bindBuffer(f,g),s.bufferData(f,h,p),c.onUploadCallback();let v;if(h instanceof Float32Array)v=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)v=s.HALF_FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?v=s.HALF_FLOAT:v=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=s.SHORT;else if(h instanceof Uint32Array)v=s.UNSIGNED_INT;else if(h instanceof Int32Array)v=s.INT;else if(h instanceof Int8Array)v=s.BYTE;else if(h instanceof Uint8Array)v=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function n(c,f,h){const p=f.array,m=f.updateRanges;if(s.bindBuffer(h,c),m.length===0)s.bufferSubData(h,0,p);else{m.sort((v,E)=>v.start-E.start);let g=0;for(let v=1;v<m.length;v++){const E=m[g],M=m[v];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++g,m[g]=M)}m.length=g+1;for(let v=0,E=m.length;v<E;v++){const M=m[v];s.bufferSubData(h,M.start*p.BYTES_PER_ELEMENT,p,M.start,M.count)}f.clearUpdateRanges()}f.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=e.get(c);f&&(s.deleteBuffer(f.buffer),e.delete(c))}function l(c,f){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,f));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,c,f),h.version=c.version}}return{get:r,remove:a,update:l}}var ob=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ab=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ub=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,db=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,mb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_b=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Sb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Mb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Eb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ab=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Rb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Pb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Db=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Lb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ib=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ub=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ob=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Bb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Vb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$b=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Qb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Jb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eC=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nC=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rC=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sC=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,oC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,aC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mC=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_C=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SC=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,MC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,EC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,TC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,CC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,RC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,PC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,DC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,LC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,IC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,NC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,UC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,FC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,OC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,BC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,VC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,HC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,GC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,WC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,XC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,YC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$C=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,KC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ZC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,QC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,JC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,eR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,dR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,mR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_R=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ER=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,TR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,AR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,PR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,NR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,UR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,OR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,It={alphahash_fragment:ob,alphahash_pars_fragment:ab,alphamap_fragment:lb,alphamap_pars_fragment:ub,alphatest_fragment:cb,alphatest_pars_fragment:fb,aomap_fragment:db,aomap_pars_fragment:hb,batching_pars_vertex:pb,batching_vertex:mb,begin_vertex:gb,beginnormal_vertex:_b,bsdfs:vb,iridescence_fragment:xb,bumpmap_pars_fragment:yb,clipping_planes_fragment:Sb,clipping_planes_pars_fragment:Mb,clipping_planes_pars_vertex:Eb,clipping_planes_vertex:Tb,color_fragment:wb,color_pars_fragment:Ab,color_pars_vertex:bb,color_vertex:Cb,common:Rb,cube_uv_reflection_fragment:Pb,defaultnormal_vertex:Db,displacementmap_pars_vertex:Lb,displacementmap_vertex:Ib,emissivemap_fragment:Nb,emissivemap_pars_fragment:Ub,colorspace_fragment:Fb,colorspace_pars_fragment:Ob,envmap_fragment:kb,envmap_common_pars_fragment:zb,envmap_pars_fragment:Bb,envmap_pars_vertex:Vb,envmap_physical_pars_fragment:Qb,envmap_vertex:Hb,fog_vertex:Gb,fog_pars_vertex:Wb,fog_fragment:Xb,fog_pars_fragment:jb,gradientmap_pars_fragment:Yb,lightmap_pars_fragment:qb,lights_lambert_fragment:$b,lights_lambert_pars_fragment:Kb,lights_pars_begin:Zb,lights_toon_fragment:Jb,lights_toon_pars_fragment:eC,lights_phong_fragment:tC,lights_phong_pars_fragment:nC,lights_physical_fragment:iC,lights_physical_pars_fragment:rC,lights_fragment_begin:sC,lights_fragment_maps:oC,lights_fragment_end:aC,logdepthbuf_fragment:lC,logdepthbuf_pars_fragment:uC,logdepthbuf_pars_vertex:cC,logdepthbuf_vertex:fC,map_fragment:dC,map_pars_fragment:hC,map_particle_fragment:pC,map_particle_pars_fragment:mC,metalnessmap_fragment:gC,metalnessmap_pars_fragment:_C,morphinstance_vertex:vC,morphcolor_vertex:xC,morphnormal_vertex:yC,morphtarget_pars_vertex:SC,morphtarget_vertex:MC,normal_fragment_begin:EC,normal_fragment_maps:TC,normal_pars_fragment:wC,normal_pars_vertex:AC,normal_vertex:bC,normalmap_pars_fragment:CC,clearcoat_normal_fragment_begin:RC,clearcoat_normal_fragment_maps:PC,clearcoat_pars_fragment:DC,iridescence_pars_fragment:LC,opaque_fragment:IC,packing:NC,premultiplied_alpha_fragment:UC,project_vertex:FC,dithering_fragment:OC,dithering_pars_fragment:kC,roughnessmap_fragment:zC,roughnessmap_pars_fragment:BC,shadowmap_pars_fragment:VC,shadowmap_pars_vertex:HC,shadowmap_vertex:GC,shadowmask_pars_fragment:WC,skinbase_vertex:XC,skinning_pars_vertex:jC,skinning_vertex:YC,skinnormal_vertex:qC,specularmap_fragment:$C,specularmap_pars_fragment:KC,tonemapping_fragment:ZC,tonemapping_pars_fragment:QC,transmission_fragment:JC,transmission_pars_fragment:eR,uv_pars_fragment:tR,uv_pars_vertex:nR,uv_vertex:iR,worldpos_vertex:rR,background_vert:sR,background_frag:oR,backgroundCube_vert:aR,backgroundCube_frag:lR,cube_vert:uR,cube_frag:cR,depth_vert:fR,depth_frag:dR,distance_vert:hR,distance_frag:pR,equirect_vert:mR,equirect_frag:gR,linedashed_vert:_R,linedashed_frag:vR,meshbasic_vert:xR,meshbasic_frag:yR,meshlambert_vert:SR,meshlambert_frag:MR,meshmatcap_vert:ER,meshmatcap_frag:TR,meshnormal_vert:wR,meshnormal_frag:AR,meshphong_vert:bR,meshphong_frag:CR,meshphysical_vert:RR,meshphysical_frag:PR,meshtoon_vert:DR,meshtoon_frag:LR,points_vert:IR,points_frag:NR,shadow_vert:UR,shadow_frag:FR,sprite_vert:OR,sprite_frag:kR},Ve={common:{diffuse:{value:new on(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Rt}},envmap:{envMap:{value:null},envMapRotation:{value:new Rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Rt},normalScale:{value:new tn(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new on(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new on(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0},uvTransform:{value:new Rt}},sprite:{diffuse:{value:new on(16777215)},opacity:{value:1},center:{value:new tn(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}}},Kr={basic:{uniforms:bi([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:It.meshbasic_vert,fragmentShader:It.meshbasic_frag},lambert:{uniforms:bi([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new on(0)}}]),vertexShader:It.meshlambert_vert,fragmentShader:It.meshlambert_frag},phong:{uniforms:bi([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new on(0)},specular:{value:new on(1118481)},shininess:{value:30}}]),vertexShader:It.meshphong_vert,fragmentShader:It.meshphong_frag},standard:{uniforms:bi([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new on(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag},toon:{uniforms:bi([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new on(0)}}]),vertexShader:It.meshtoon_vert,fragmentShader:It.meshtoon_frag},matcap:{uniforms:bi([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:It.meshmatcap_vert,fragmentShader:It.meshmatcap_frag},points:{uniforms:bi([Ve.points,Ve.fog]),vertexShader:It.points_vert,fragmentShader:It.points_frag},dashed:{uniforms:bi([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:It.linedashed_vert,fragmentShader:It.linedashed_frag},depth:{uniforms:bi([Ve.common,Ve.displacementmap]),vertexShader:It.depth_vert,fragmentShader:It.depth_frag},normal:{uniforms:bi([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:It.meshnormal_vert,fragmentShader:It.meshnormal_frag},sprite:{uniforms:bi([Ve.sprite,Ve.fog]),vertexShader:It.sprite_vert,fragmentShader:It.sprite_frag},background:{uniforms:{uvTransform:{value:new Rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:It.background_vert,fragmentShader:It.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Rt}},vertexShader:It.backgroundCube_vert,fragmentShader:It.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:It.cube_vert,fragmentShader:It.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:It.equirect_vert,fragmentShader:It.equirect_frag},distance:{uniforms:bi([Ve.common,Ve.displacementmap,{referencePosition:{value:new he},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:It.distance_vert,fragmentShader:It.distance_frag},shadow:{uniforms:bi([Ve.lights,Ve.fog,{color:{value:new on(0)},opacity:{value:1}}]),vertexShader:It.shadow_vert,fragmentShader:It.shadow_frag}};Kr.physical={uniforms:bi([Kr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Rt},clearcoatNormalScale:{value:new tn(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Rt},sheen:{value:0},sheenColor:{value:new on(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Rt},transmissionSamplerSize:{value:new tn},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Rt},attenuationDistance:{value:0},attenuationColor:{value:new on(0)},specularColor:{value:new on(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Rt},anisotropyVector:{value:new tn},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Rt}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag};const qf={r:0,b:0,g:0},qo=new Fs,zR=new On;function BR(s,e,t,n,r,a,l){const c=new on(0);let f=a===!0?0:1,h,p,m=null,g=0,v=null;function E(D){let A=D.isScene===!0?D.background:null;return A&&A.isTexture&&(A=(D.backgroundBlurriness>0?t:e).get(A)),A}function M(D){let A=!1;const R=E(D);R===null?y(c,f):R&&R.isColor&&(y(R,1),A=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,l):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(s.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(D,A){const R=E(A);R&&(R.isCubeTexture||R.mapping===Pd)?(p===void 0&&(p=new ls(new dc(1,1,1),new Br({name:"BackgroundCubeMaterial",uniforms:Il(Kr.backgroundCube.uniforms),vertexShader:Kr.backgroundCube.vertexShader,fragmentShader:Kr.backgroundCube.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(L,N,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),qo.copy(A.backgroundRotation),qo.x*=-1,qo.y*=-1,qo.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(qo.y*=-1,qo.z*=-1),p.material.uniforms.envMap.value=R,p.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(zR.makeRotationFromEuler(qo)),p.material.toneMapped=Yt.getTransfer(R.colorSpace)!==rn,(m!==R||g!==R.version||v!==s.toneMapping)&&(p.material.needsUpdate=!0,m=R,g=R.version,v=s.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null)):R&&R.isTexture&&(h===void 0&&(h=new ls(new hc(2,2),new Br({name:"BackgroundMaterial",uniforms:Il(Kr.background.uniforms),vertexShader:Kr.background.vertexShader,fragmentShader:Kr.background.fragmentShader,side:bo,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=R,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.toneMapped=Yt.getTransfer(R.colorSpace)!==rn,R.matrixAutoUpdate===!0&&R.updateMatrix(),h.material.uniforms.uvTransform.value.copy(R.matrix),(m!==R||g!==R.version||v!==s.toneMapping)&&(h.material.needsUpdate=!0,m=R,g=R.version,v=s.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null))}function y(D,A){D.getRGB(qf,P1(s)),n.buffers.color.setClear(qf.r,qf.g,qf.b,A,l)}function P(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(D,A=1){c.set(D),f=A,y(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(D){f=D,y(c,f)},render:M,addToRenderList:x,dispose:P}}function VR(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},r=g(null);let a=r,l=!1;function c(b,V,z,G,Q){let ne=!1;const Z=m(G,z,V);a!==Z&&(a=Z,h(a.object)),ne=v(b,G,z,Q),ne&&E(b,G,z,Q),Q!==null&&e.update(Q,s.ELEMENT_ARRAY_BUFFER),(ne||l)&&(l=!1,A(b,V,z,G),Q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function f(){return s.createVertexArray()}function h(b){return s.bindVertexArray(b)}function p(b){return s.deleteVertexArray(b)}function m(b,V,z){const G=z.wireframe===!0;let Q=n[b.id];Q===void 0&&(Q={},n[b.id]=Q);let ne=Q[V.id];ne===void 0&&(ne={},Q[V.id]=ne);let Z=ne[G];return Z===void 0&&(Z=g(f()),ne[G]=Z),Z}function g(b){const V=[],z=[],G=[];for(let Q=0;Q<t;Q++)V[Q]=0,z[Q]=0,G[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:z,attributeDivisors:G,object:b,attributes:{},index:null}}function v(b,V,z,G){const Q=a.attributes,ne=V.attributes;let Z=0;const Y=z.getAttributes();for(const X in Y)if(Y[X].location>=0){const U=Q[X];let O=ne[X];if(O===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(O=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(O=b.instanceColor)),U===void 0||U.attribute!==O||O&&U.data!==O.data)return!0;Z++}return a.attributesNum!==Z||a.index!==G}function E(b,V,z,G){const Q={},ne=V.attributes;let Z=0;const Y=z.getAttributes();for(const X in Y)if(Y[X].location>=0){let U=ne[X];U===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(U=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(U=b.instanceColor));const O={};O.attribute=U,U&&U.data&&(O.data=U.data),Q[X]=O,Z++}a.attributes=Q,a.attributesNum=Z,a.index=G}function M(){const b=a.newAttributes;for(let V=0,z=b.length;V<z;V++)b[V]=0}function x(b){y(b,0)}function y(b,V){const z=a.newAttributes,G=a.enabledAttributes,Q=a.attributeDivisors;z[b]=1,G[b]===0&&(s.enableVertexAttribArray(b),G[b]=1),Q[b]!==V&&(s.vertexAttribDivisor(b,V),Q[b]=V)}function P(){const b=a.newAttributes,V=a.enabledAttributes;for(let z=0,G=V.length;z<G;z++)V[z]!==b[z]&&(s.disableVertexAttribArray(z),V[z]=0)}function D(b,V,z,G,Q,ne,Z){Z===!0?s.vertexAttribIPointer(b,V,z,Q,ne):s.vertexAttribPointer(b,V,z,G,Q,ne)}function A(b,V,z,G){M();const Q=G.attributes,ne=z.getAttributes(),Z=V.defaultAttributeValues;for(const Y in ne){const X=ne[Y];if(X.location>=0){let re=Q[Y];if(re===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(re=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(re=b.instanceColor)),re!==void 0){const U=re.normalized,O=re.itemSize,ee=e.get(re);if(ee===void 0)continue;const Ee=ee.buffer,be=ee.type,Oe=ee.bytesPerElement,se=be===s.INT||be===s.UNSIGNED_INT||re.gpuType===r0;if(re.isInterleavedBufferAttribute){const ce=re.data,_e=ce.stride,Ue=re.offset;if(ce.isInstancedInterleavedBuffer){for(let Fe=0;Fe<X.locationSize;Fe++)y(X.location+Fe,ce.meshPerAttribute);b.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Fe=0;Fe<X.locationSize;Fe++)x(X.location+Fe);s.bindBuffer(s.ARRAY_BUFFER,Ee);for(let Fe=0;Fe<X.locationSize;Fe++)D(X.location+Fe,O/X.locationSize,be,U,_e*Oe,(Ue+O/X.locationSize*Fe)*Oe,se)}else{if(re.isInstancedBufferAttribute){for(let ce=0;ce<X.locationSize;ce++)y(X.location+ce,re.meshPerAttribute);b.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ce=0;ce<X.locationSize;ce++)x(X.location+ce);s.bindBuffer(s.ARRAY_BUFFER,Ee);for(let ce=0;ce<X.locationSize;ce++)D(X.location+ce,O/X.locationSize,be,U,O*Oe,O/X.locationSize*ce*Oe,se)}}else if(Z!==void 0){const U=Z[Y];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(X.location,U);break;case 3:s.vertexAttrib3fv(X.location,U);break;case 4:s.vertexAttrib4fv(X.location,U);break;default:s.vertexAttrib1fv(X.location,U)}}}}P()}function R(){k();for(const b in n){const V=n[b];for(const z in V){const G=V[z];for(const Q in G)p(G[Q].object),delete G[Q];delete V[z]}delete n[b]}}function L(b){if(n[b.id]===void 0)return;const V=n[b.id];for(const z in V){const G=V[z];for(const Q in G)p(G[Q].object),delete G[Q];delete V[z]}delete n[b.id]}function N(b){for(const V in n){const z=n[V];if(z[b.id]===void 0)continue;const G=z[b.id];for(const Q in G)p(G[Q].object),delete G[Q];delete z[b.id]}}function k(){T(),l=!0,a!==r&&(a=r,h(a.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:k,resetDefaultState:T,dispose:R,releaseStatesOfGeometry:L,releaseStatesOfProgram:N,initAttributes:M,enableAttribute:x,disableUnusedAttributes:P}}function HR(s,e,t){let n;function r(h){n=h}function a(h,p){s.drawArrays(n,h,p),t.update(p,n,1)}function l(h,p,m){m!==0&&(s.drawArraysInstanced(n,h,p,m),t.update(p,n,m))}function c(h,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,p,0,m);let v=0;for(let E=0;E<m;E++)v+=p[E];t.update(v,n,1)}function f(h,p,m,g){if(m===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let E=0;E<h.length;E++)l(h[E],p[E],g[E]);else{v.multiDrawArraysInstancedWEBGL(n,h,0,p,0,g,0,m);let E=0;for(let M=0;M<m;M++)E+=p[M]*g[M];t.update(E,n,1)}}this.setMode=r,this.render=a,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function GR(s,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");r=s.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(N){return!(N!==zr&&n.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(N){const k=N===Ns&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Mr&&n.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==es&&!k)}function f(N){if(N==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=f(h);p!==h&&(bt("WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const m=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),v=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),P=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=s.getParameter(s.MAX_SAMPLES),L=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:f,textureFormatReadable:l,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:m,reversedDepthBuffer:g,maxTextures:v,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:P,maxVaryings:D,maxFragmentUniforms:A,maxSamples:R,samples:L}}function WR(s){const e=this;let t=null,n=0,r=!1,a=!1;const l=new Jo,c=new Rt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(m,g){const v=m.length!==0||g||n!==0||r;return r=g,n=m.length,v},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(m,g){t=p(m,g,0)},this.setState=function(m,g,v){const E=m.clippingPlanes,M=m.clipIntersection,x=m.clipShadows,y=s.get(m);if(!r||E===null||E.length===0||a&&!x)a?p(null):h();else{const P=a?0:n,D=P*4;let A=y.clippingState||null;f.value=A,A=p(E,g,D,v);for(let R=0;R!==D;++R)A[R]=t[R];y.clippingState=A,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=P}};function h(){f.value!==t&&(f.value=t,f.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(m,g,v,E){const M=m!==null?m.length:0;let x=null;if(M!==0){if(x=f.value,E!==!0||x===null){const y=v+M*4,P=g.matrixWorldInverse;c.getNormalMatrix(P),(x===null||x.length<y)&&(x=new Float32Array(y));for(let D=0,A=v;D!==M;++D,A+=4)l.copy(m[D]).applyMatrix4(P,c),l.normal.toArray(x,A),x[A+3]=l.constant}f.value=x,f.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,x}}function XR(s){let e=new WeakMap;function t(l,c){return c===Xm?l.mapping=ga:c===jm&&(l.mapping=Pl),l}function n(l){if(l&&l.isTexture){const c=l.mapping;if(c===Xm||c===jm)if(e.has(l)){const f=e.get(l).texture;return t(f,l.mapping)}else{const f=l.image;if(f&&f.height>0){const h=new I1(f.height);return h.fromEquirectangularTexture(s,l),e.set(l,h),l.addEventListener("dispose",r),t(h.texture,l.mapping)}else return null}}return l}function r(l){const c=l.target;c.removeEventListener("dispose",r);const f=e.get(c);f!==void 0&&(e.delete(c),f.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}const xo=4,ly=[.125,.215,.35,.446,.526,.582],ta=20,jR=256,Eu=new m0,uy=new on;let im=null,rm=0,sm=0,om=!1;const YR=new he;class cy{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,a={}){const{size:l=256,position:c=YR}=a;im=this._renderer.getRenderTarget(),rm=this._renderer.getActiveCubeFace(),sm=this._renderer.getActiveMipmapLevel(),om=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,n,r,f,c),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dy(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(im,rm,sm),this._renderer.xr.enabled=om,e.scissorTest=!1,ol(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ga||e.mapping===Pl?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),im=this._renderer.getRenderTarget(),rm=this._renderer.getActiveCubeFace(),sm=this._renderer.getActiveMipmapLevel(),om=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:Ns,format:zr,colorSpace:Ll,depthBuffer:!1},r=fy(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fy(e,t,n);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=qR(a)),this._blurMaterial=KR(a,e,t),this._ggxMaterial=$R(a,e,t)}return r}_compileMaterial(e){const t=new ls(new Os,e);this._renderer.compile(t,Eu)}_sceneToCubeUV(e,t,n,r,a){const f=new Or(90,1,t,n),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,v=m.toneMapping;m.getClearColor(uy),m.toneMapping=is,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(r),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ls(new dc,new b1({name:"PMREM.Background",side:ji,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,x=M.material;let y=!1;const P=e.background;P?P.isColor&&(x.color.copy(P),e.background=null,y=!0):(x.color.copy(uy),y=!0);for(let D=0;D<6;D++){const A=D%3;A===0?(f.up.set(0,h[D],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x+p[D],a.y,a.z)):A===1?(f.up.set(0,0,h[D]),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y+p[D],a.z)):(f.up.set(0,h[D],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y,a.z+p[D]));const R=this._cubeSize;ol(r,A*R,D>2?R:0,R,R),m.setRenderTarget(r),y&&m.render(M,f),m.render(e,f)}m.toneMapping=v,m.autoClear=g,e.background=P}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ga||e.mapping===Pl;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=hy()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dy());const a=r?this._cubemapMaterial:this._equirectMaterial,l=this._lodMeshes[0];l.material=a;const c=a.uniforms;c.envMap.value=e;const f=this._cubeSize;ol(t,0,0,3*f,2*f),n.setRenderTarget(t),n.render(l,Eu)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,a=this._pingPongRenderTarget,l=this._ggxMaterial,c=this._lodMeshes[n];c.material=l;const f=l.uniforms,h=n/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),m=Math.sqrt(h*h-p*p),g=0+h*1.25,v=m*g,{_lodMax:E}=this,M=this._sizeLods[n],x=3*M*(n>E-xo?n-E+xo:0),y=4*(this._cubeSize-M);f.envMap.value=e.texture,f.roughness.value=v,f.mipInt.value=E-t,ol(a,x,y,3*M,2*M),r.setRenderTarget(a),r.render(c,Eu),f.envMap.value=a.texture,f.roughness.value=0,f.mipInt.value=E-n,ol(e,x,y,3*M,2*M),r.setRenderTarget(e),r.render(c,Eu)}_blur(e,t,n,r,a){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,r,"latitudinal",a),this._halfBlur(l,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,l,c){const f=this._renderer,h=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&Kt("blur direction must be either latitudinal or longitudinal!");const p=3,m=this._lodMeshes[r];m.material=h;const g=h.uniforms,v=this._sizeLods[n]-1,E=isFinite(a)?Math.PI/(2*v):2*Math.PI/(2*ta-1),M=a/E,x=isFinite(a)?1+Math.floor(p*M):ta;x>ta&&bt(`sigmaRadians, ${a}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ta}`);const y=[];let P=0;for(let N=0;N<ta;++N){const k=N/M,T=Math.exp(-k*k/2);y.push(T),N===0?P+=T:N<x&&(P+=2*T)}for(let N=0;N<y.length;N++)y[N]=y[N]/P;g.envMap.value=e.texture,g.samples.value=x,g.weights.value=y,g.latitudinal.value=l==="latitudinal",c&&(g.poleAxis.value=c);const{_lodMax:D}=this;g.dTheta.value=E,g.mipInt.value=D-n;const A=this._sizeLods[r],R=3*A*(r>D-xo?r-D+xo:0),L=4*(this._cubeSize-A);ol(t,R,L,3*A,2*A),f.setRenderTarget(t),f.render(m,Eu)}}function qR(s){const e=[],t=[],n=[];let r=s;const a=s-xo+1+ly.length;for(let l=0;l<a;l++){const c=Math.pow(2,r);e.push(c);let f=1/c;l>s-xo?f=ly[l-s+xo-1]:l===0&&(f=0),t.push(f);const h=1/(c-2),p=-h,m=1+h,g=[p,p,m,p,m,m,p,p,m,m,p,m],v=6,E=6,M=3,x=2,y=1,P=new Float32Array(M*E*v),D=new Float32Array(x*E*v),A=new Float32Array(y*E*v);for(let L=0;L<v;L++){const N=L%3*2/3-1,k=L>2?0:-1,T=[N,k,0,N+2/3,k,0,N+2/3,k+1,0,N,k,0,N+2/3,k+1,0,N,k+1,0];P.set(T,M*E*L),D.set(g,x*E*L);const b=[L,L,L,L,L,L];A.set(b,y*E*L)}const R=new Os;R.setAttribute("position",new ss(P,M)),R.setAttribute("uv",new ss(D,x)),R.setAttribute("faceIndex",new ss(A,y)),n.push(new ls(R,null)),r>xo&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function fy(s,e,t){const n=new rs(s,e,t);return n.texture.mapping=Pd,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ol(s,e,t,n,r){s.viewport.set(e,t,n,r),s.scissor.set(e,t,n,r)}function $R(s,e,t){return new Br({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ld(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Rs,depthTest:!1,depthWrite:!1})}function KR(s,e,t){const n=new Float32Array(ta),r=new he(0,1,0);return new Br({name:"SphericalGaussianBlur",defines:{n:ta,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Rs,depthTest:!1,depthWrite:!1})}function dy(){return new Br({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Rs,depthTest:!1,depthWrite:!1})}function hy(){return new Br({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rs,depthTest:!1,depthWrite:!1})}function Ld(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ZR(s){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const f=c.mapping,h=f===Xm||f===jm,p=f===ga||f===Pl;if(h||p){let m=e.get(c);const g=m!==void 0?m.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==g)return t===null&&(t=new cy(s)),m=h?t.fromEquirectangular(c,m):t.fromCubemap(c,m),m.texture.pmremVersion=c.pmremVersion,e.set(c,m),m.texture;if(m!==void 0)return m.texture;{const v=c.image;return h&&v&&v.height>0||p&&v&&r(v)?(t===null&&(t=new cy(s)),m=h?t.fromEquirectangular(c):t.fromCubemap(c),m.texture.pmremVersion=c.pmremVersion,e.set(c,m),c.addEventListener("dispose",a),m.texture):null}}}return c}function r(c){let f=0;const h=6;for(let p=0;p<h;p++)c[p]!==void 0&&f++;return f===h}function a(c){const f=c.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function QR(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=s.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&oc("WebGLRenderer: "+n+" extension not supported."),r}}}function JR(s,e,t,n){const r={},a=new WeakMap;function l(m){const g=m.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",l),delete r[g.id];const v=a.get(g);v&&(e.remove(v),a.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(m,g){return r[g.id]===!0||(g.addEventListener("dispose",l),r[g.id]=!0,t.memory.geometries++),g}function f(m){const g=m.attributes;for(const v in g)e.update(g[v],s.ARRAY_BUFFER)}function h(m){const g=[],v=m.index,E=m.attributes.position;let M=0;if(v!==null){const P=v.array;M=v.version;for(let D=0,A=P.length;D<A;D+=3){const R=P[D+0],L=P[D+1],N=P[D+2];g.push(R,L,L,N,N,R)}}else if(E!==void 0){const P=E.array;M=E.version;for(let D=0,A=P.length/3-1;D<A;D+=3){const R=D+0,L=D+1,N=D+2;g.push(R,L,L,N,N,R)}}else return;const x=new(E1(g)?R1:C1)(g,1);x.version=M;const y=a.get(m);y&&e.remove(y),a.set(m,x)}function p(m){const g=a.get(m);if(g){const v=m.index;v!==null&&g.version<v.version&&h(m)}else h(m);return a.get(m)}return{get:c,update:f,getWireframeAttribute:p}}function e2(s,e,t){let n;function r(g){n=g}let a,l;function c(g){a=g.type,l=g.bytesPerElement}function f(g,v){s.drawElements(n,v,a,g*l),t.update(v,n,1)}function h(g,v,E){E!==0&&(s.drawElementsInstanced(n,v,a,g*l,E),t.update(v,n,E))}function p(g,v,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,v,0,a,g,0,E);let x=0;for(let y=0;y<E;y++)x+=v[y];t.update(x,n,1)}function m(g,v,E,M){if(E===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<g.length;y++)h(g[y]/l,v[y],M[y]);else{x.multiDrawElementsInstancedWEBGL(n,v,0,a,g,0,M,0,E);let y=0;for(let P=0;P<E;P++)y+=v[P]*M[P];t.update(y,n,1)}}this.setMode=r,this.setIndex=c,this.render=f,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function t2(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,l,c){switch(t.calls++,l){case s.TRIANGLES:t.triangles+=c*(a/3);break;case s.LINES:t.lines+=c*(a/2);break;case s.LINE_STRIP:t.lines+=c*(a-1);break;case s.LINE_LOOP:t.lines+=c*a;break;case s.POINTS:t.points+=c*a;break;default:Kt("WebGLInfo: Unknown draw mode:",l);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function n2(s,e,t){const n=new WeakMap,r=new Dn;function a(l,c,f){const h=l.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,m=p!==void 0?p.length:0;let g=n.get(c);if(g===void 0||g.count!==m){let T=function(){N.dispose(),n.delete(c),c.removeEventListener("dispose",T)};g!==void 0&&g.texture.dispose();const v=c.morphAttributes.position!==void 0,E=c.morphAttributes.normal!==void 0,M=c.morphAttributes.color!==void 0,x=c.morphAttributes.position||[],y=c.morphAttributes.normal||[],P=c.morphAttributes.color||[];let D=0;v===!0&&(D=1),E===!0&&(D=2),M===!0&&(D=3);let A=c.attributes.position.count*D,R=1;A>e.maxTextureSize&&(R=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const L=new Float32Array(A*R*4*m),N=new T1(L,A,R,m);N.type=es,N.needsUpdate=!0;const k=D*4;for(let b=0;b<m;b++){const V=x[b],z=y[b],G=P[b],Q=A*R*4*b;for(let ne=0;ne<V.count;ne++){const Z=ne*k;v===!0&&(r.fromBufferAttribute(V,ne),L[Q+Z+0]=r.x,L[Q+Z+1]=r.y,L[Q+Z+2]=r.z,L[Q+Z+3]=0),E===!0&&(r.fromBufferAttribute(z,ne),L[Q+Z+4]=r.x,L[Q+Z+5]=r.y,L[Q+Z+6]=r.z,L[Q+Z+7]=0),M===!0&&(r.fromBufferAttribute(G,ne),L[Q+Z+8]=r.x,L[Q+Z+9]=r.y,L[Q+Z+10]=r.z,L[Q+Z+11]=G.itemSize===4?r.w:1)}}g={count:m,texture:N,size:new tn(A,R)},n.set(c,g),c.addEventListener("dispose",T)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)f.getUniforms().setValue(s,"morphTexture",l.morphTexture,t);else{let v=0;for(let M=0;M<h.length;M++)v+=h[M];const E=c.morphTargetsRelative?1:1-v;f.getUniforms().setValue(s,"morphTargetBaseInfluence",E),f.getUniforms().setValue(s,"morphTargetInfluences",h)}f.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:a}}function i2(s,e,t,n){let r=new WeakMap;function a(f){const h=n.render.frame,p=f.geometry,m=e.get(f,p);if(r.get(m)!==h&&(e.update(m),r.set(m,h)),f.isInstancedMesh&&(f.hasEventListener("dispose",c)===!1&&f.addEventListener("dispose",c),r.get(f)!==h&&(t.update(f.instanceMatrix,s.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,s.ARRAY_BUFFER),r.set(f,h))),f.isSkinnedMesh){const g=f.skeleton;r.get(g)!==h&&(g.update(),r.set(g,h))}return m}function l(){r=new WeakMap}function c(f){const h=f.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:l}}const r2={[l1]:"LINEAR_TONE_MAPPING",[u1]:"REINHARD_TONE_MAPPING",[c1]:"CINEON_TONE_MAPPING",[f1]:"ACES_FILMIC_TONE_MAPPING",[h1]:"AGX_TONE_MAPPING",[p1]:"NEUTRAL_TONE_MAPPING",[d1]:"CUSTOM_TONE_MAPPING"};function s2(s,e,t,n,r){const a=new rs(e,t,{type:s,depthBuffer:n,stencilBuffer:r}),l=new rs(e,t,{type:Ns,depthBuffer:!1,stencilBuffer:!1}),c=new Os;c.setAttribute("position",new Ds([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ds([0,2,0,0,2,0],2));const f=new KA({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new ls(c,f),p=new m0(-1,1,1,-1,0,1);let m=null,g=null,v=!1,E,M=null,x=[],y=!1;this.setSize=function(P,D){a.setSize(P,D),l.setSize(P,D);for(let A=0;A<x.length;A++){const R=x[A];R.setSize&&R.setSize(P,D)}},this.setEffects=function(P){x=P,y=x.length>0&&x[0].isRenderPass===!0;const D=a.width,A=a.height;for(let R=0;R<x.length;R++){const L=x[R];L.setSize&&L.setSize(D,A)}},this.begin=function(P,D){if(v||P.toneMapping===is&&x.length===0)return!1;if(M=D,D!==null){const A=D.width,R=D.height;(a.width!==A||a.height!==R)&&this.setSize(A,R)}return y===!1&&P.setRenderTarget(a),E=P.toneMapping,P.toneMapping=is,!0},this.hasRenderPass=function(){return y},this.end=function(P,D){P.toneMapping=E,v=!0;let A=a,R=l;for(let L=0;L<x.length;L++){const N=x[L];if(N.enabled!==!1&&(N.render(P,R,A,D),N.needsSwap!==!1)){const k=A;A=R,R=k}}if(m!==P.outputColorSpace||g!==P.toneMapping){m=P.outputColorSpace,g=P.toneMapping,f.defines={},Yt.getTransfer(m)===rn&&(f.defines.SRGB_TRANSFER="");const L=r2[g];L&&(f.defines[L]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=A.texture,P.setRenderTarget(M),P.render(h,p),M=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),l.dispose(),c.dispose(),f.dispose()}}const O1=new Si,Cg=new ac(1,1),k1=new T1,z1=new wA,B1=new L1,py=[],my=[],gy=new Float32Array(16),_y=new Float32Array(9),vy=new Float32Array(4);function Ul(s,e,t){const n=s[0];if(n<=0||n>0)return s;const r=e*t;let a=py[r];if(a===void 0&&(a=new Float32Array(r),py[r]=a),e!==0){n.toArray(a,0);for(let l=1,c=0;l!==e;++l)c+=t,s[l].toArray(a,c)}return a}function Gn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Wn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Id(s,e){let t=my[e];t===void 0&&(t=new Int32Array(e),my[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function o2(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function a2(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gn(t,e))return;s.uniform2fv(this.addr,e),Wn(t,e)}}function l2(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gn(t,e))return;s.uniform3fv(this.addr,e),Wn(t,e)}}function u2(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gn(t,e))return;s.uniform4fv(this.addr,e),Wn(t,e)}}function c2(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Wn(t,e)}else{if(Gn(t,n))return;vy.set(n),s.uniformMatrix2fv(this.addr,!1,vy),Wn(t,n)}}function f2(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Wn(t,e)}else{if(Gn(t,n))return;_y.set(n),s.uniformMatrix3fv(this.addr,!1,_y),Wn(t,n)}}function d2(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Wn(t,e)}else{if(Gn(t,n))return;gy.set(n),s.uniformMatrix4fv(this.addr,!1,gy),Wn(t,n)}}function h2(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function p2(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gn(t,e))return;s.uniform2iv(this.addr,e),Wn(t,e)}}function m2(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gn(t,e))return;s.uniform3iv(this.addr,e),Wn(t,e)}}function g2(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gn(t,e))return;s.uniform4iv(this.addr,e),Wn(t,e)}}function _2(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function v2(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gn(t,e))return;s.uniform2uiv(this.addr,e),Wn(t,e)}}function x2(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gn(t,e))return;s.uniform3uiv(this.addr,e),Wn(t,e)}}function y2(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gn(t,e))return;s.uniform4uiv(this.addr,e),Wn(t,e)}}function S2(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r);let a;this.type===s.SAMPLER_2D_SHADOW?(Cg.compareFunction=t.isReversedDepthBuffer()?f0:c0,a=Cg):a=O1,t.setTexture2D(e||a,r)}function M2(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||z1,r)}function E2(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||B1,r)}function T2(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||k1,r)}function w2(s){switch(s){case 5126:return o2;case 35664:return a2;case 35665:return l2;case 35666:return u2;case 35674:return c2;case 35675:return f2;case 35676:return d2;case 5124:case 35670:return h2;case 35667:case 35671:return p2;case 35668:case 35672:return m2;case 35669:case 35673:return g2;case 5125:return _2;case 36294:return v2;case 36295:return x2;case 36296:return y2;case 35678:case 36198:case 36298:case 36306:case 35682:return S2;case 35679:case 36299:case 36307:return M2;case 35680:case 36300:case 36308:case 36293:return E2;case 36289:case 36303:case 36311:case 36292:return T2}}function A2(s,e){s.uniform1fv(this.addr,e)}function b2(s,e){const t=Ul(e,this.size,2);s.uniform2fv(this.addr,t)}function C2(s,e){const t=Ul(e,this.size,3);s.uniform3fv(this.addr,t)}function R2(s,e){const t=Ul(e,this.size,4);s.uniform4fv(this.addr,t)}function P2(s,e){const t=Ul(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function D2(s,e){const t=Ul(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function L2(s,e){const t=Ul(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function I2(s,e){s.uniform1iv(this.addr,e)}function N2(s,e){s.uniform2iv(this.addr,e)}function U2(s,e){s.uniform3iv(this.addr,e)}function F2(s,e){s.uniform4iv(this.addr,e)}function O2(s,e){s.uniform1uiv(this.addr,e)}function k2(s,e){s.uniform2uiv(this.addr,e)}function z2(s,e){s.uniform3uiv(this.addr,e)}function B2(s,e){s.uniform4uiv(this.addr,e)}function V2(s,e,t){const n=this.cache,r=e.length,a=Id(t,r);Gn(n,a)||(s.uniform1iv(this.addr,a),Wn(n,a));let l;this.type===s.SAMPLER_2D_SHADOW?l=Cg:l=O1;for(let c=0;c!==r;++c)t.setTexture2D(e[c]||l,a[c])}function H2(s,e,t){const n=this.cache,r=e.length,a=Id(t,r);Gn(n,a)||(s.uniform1iv(this.addr,a),Wn(n,a));for(let l=0;l!==r;++l)t.setTexture3D(e[l]||z1,a[l])}function G2(s,e,t){const n=this.cache,r=e.length,a=Id(t,r);Gn(n,a)||(s.uniform1iv(this.addr,a),Wn(n,a));for(let l=0;l!==r;++l)t.setTextureCube(e[l]||B1,a[l])}function W2(s,e,t){const n=this.cache,r=e.length,a=Id(t,r);Gn(n,a)||(s.uniform1iv(this.addr,a),Wn(n,a));for(let l=0;l!==r;++l)t.setTexture2DArray(e[l]||k1,a[l])}function X2(s){switch(s){case 5126:return A2;case 35664:return b2;case 35665:return C2;case 35666:return R2;case 35674:return P2;case 35675:return D2;case 35676:return L2;case 5124:case 35670:return I2;case 35667:case 35671:return N2;case 35668:case 35672:return U2;case 35669:case 35673:return F2;case 5125:return O2;case 36294:return k2;case 36295:return z2;case 36296:return B2;case 35678:case 36198:case 36298:case 36306:case 35682:return V2;case 35679:case 36299:case 36307:return H2;case 35680:case 36300:case 36308:case 36293:return G2;case 36289:case 36303:case 36311:case 36292:return W2}}class j2{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=w2(t.type)}}class Y2{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=X2(t.type)}}class q2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,l=r.length;a!==l;++a){const c=r[a];c.setValue(e,t[c.id],n)}}}const am=/(\w+)(\])?(\[|\.)?/g;function xy(s,e){s.seq.push(e),s.map[e.id]=e}function $2(s,e,t){const n=s.name,r=n.length;for(am.lastIndex=0;;){const a=am.exec(n),l=am.lastIndex;let c=a[1];const f=a[2]==="]",h=a[3];if(f&&(c=c|0),h===void 0||h==="["&&l+2===r){xy(t,h===void 0?new j2(c,s,e):new Y2(c,s,e));break}else{let m=t.map[c];m===void 0&&(m=new q2(c),xy(t,m)),t=m}}}class cd{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let l=0;l<n;++l){const c=e.getActiveUniform(t,l),f=e.getUniformLocation(t,c.name);$2(c,f,this)}const r=[],a=[];for(const l of this.seq)l.type===e.SAMPLER_2D_SHADOW||l.type===e.SAMPLER_CUBE_SHADOW||l.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(l):a.push(l);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,l=t.length;a!==l;++a){const c=t[a],f=n[c.id];f.needsUpdate!==!1&&c.setValue(e,f.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const l=e[r];l.id in t&&n.push(l)}return n}}function yy(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const K2=37297;let Z2=0;function Q2(s,e){const t=s.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let l=r;l<a;l++){const c=l+1;n.push(`${c===e?">":" "} ${c}: ${t[l]}`)}return n.join(`
`)}const Sy=new Rt;function J2(s){Yt._getMatrix(Sy,Yt.workingColorSpace,s);const e=`mat3( ${Sy.elements.map(t=>t.toFixed(4))} )`;switch(Yt.getTransfer(s)){case Ed:return[e,"LinearTransferOETF"];case rn:return[e,"sRGBTransferOETF"];default:return bt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function My(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),a=(s.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+Q2(s.getShaderSource(e),c)}else return a}function eP(s,e){const t=J2(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const tP={[l1]:"Linear",[u1]:"Reinhard",[c1]:"Cineon",[f1]:"ACESFilmic",[h1]:"AgX",[p1]:"Neutral",[d1]:"Custom"};function nP(s,e){const t=tP[e];return t===void 0?(bt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $f=new he;function iP(){Yt.getLuminanceCoefficients($f);const s=$f.x.toFixed(4),e=$f.y.toFixed(4),t=$f.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rP(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Iu).join(`
`)}function sP(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function oP(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=s.getActiveAttrib(e,r),l=a.name;let c=1;a.type===s.FLOAT_MAT2&&(c=2),a.type===s.FLOAT_MAT3&&(c=3),a.type===s.FLOAT_MAT4&&(c=4),t[l]={type:a.type,location:s.getAttribLocation(e,l),locationSize:c}}return t}function Iu(s){return s!==""}function Ey(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ty(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aP=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rg(s){return s.replace(aP,uP)}const lP=new Map;function uP(s,e){let t=It[e];if(t===void 0){const n=lP.get(e);if(n!==void 0)t=It[n],bt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Rg(t)}const cP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wy(s){return s.replace(cP,fP)}function fP(s,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Ay(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const dP={[sd]:"SHADOWMAP_TYPE_PCF",[Lu]:"SHADOWMAP_TYPE_VSM"};function hP(s){return dP[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const pP={[ga]:"ENVMAP_TYPE_CUBE",[Pl]:"ENVMAP_TYPE_CUBE",[Pd]:"ENVMAP_TYPE_CUBE_UV"};function mP(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":pP[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const gP={[Pl]:"ENVMAP_MODE_REFRACTION"};function _P(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":gP[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const vP={[a1]:"ENVMAP_BLENDING_MULTIPLY",[sA]:"ENVMAP_BLENDING_MIX",[oA]:"ENVMAP_BLENDING_ADD"};function xP(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":vP[s.combine]||"ENVMAP_BLENDING_NONE"}function yP(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function SP(s,e,t,n){const r=s.getContext(),a=t.defines;let l=t.vertexShader,c=t.fragmentShader;const f=hP(t),h=mP(t),p=_P(t),m=xP(t),g=yP(t),v=rP(t),E=sP(a),M=r.createProgram();let x,y,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Iu).join(`
`),x.length>0&&(x+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Iu).join(`
`),y.length>0&&(y+=`
`)):(x=[Ay(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Iu).join(`
`),y=[Ay(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==is?"#define TONE_MAPPING":"",t.toneMapping!==is?It.tonemapping_pars_fragment:"",t.toneMapping!==is?nP("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",It.colorspace_pars_fragment,eP("linearToOutputTexel",t.outputColorSpace),iP(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Iu).join(`
`)),l=Rg(l),l=Ey(l,t),l=Ty(l,t),c=Rg(c),c=Ey(c,t),c=Ty(c,t),l=wy(l),c=wy(c),t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,x=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",t.glslVersion===Hx?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const D=P+x+l,A=P+y+c,R=yy(r,r.VERTEX_SHADER,D),L=yy(r,r.FRAGMENT_SHADER,A);r.attachShader(M,R),r.attachShader(M,L),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function N(V){if(s.debug.checkShaderErrors){const z=r.getProgramInfoLog(M)||"",G=r.getShaderInfoLog(R)||"",Q=r.getShaderInfoLog(L)||"",ne=z.trim(),Z=G.trim(),Y=Q.trim();let X=!0,re=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(r,M,R,L);else{const U=My(r,R,"vertex"),O=My(r,L,"fragment");Kt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ne+`
`+U+`
`+O)}else ne!==""?bt("WebGLProgram: Program Info Log:",ne):(Z===""||Y==="")&&(re=!1);re&&(V.diagnostics={runnable:X,programLog:ne,vertexShader:{log:Z,prefix:x},fragmentShader:{log:Y,prefix:y}})}r.deleteShader(R),r.deleteShader(L),k=new cd(r,M),T=oP(r,M)}let k;this.getUniforms=function(){return k===void 0&&N(this),k};let T;this.getAttributes=function(){return T===void 0&&N(this),T};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(M,K2)),b},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Z2++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=R,this.fragmentShader=L,this}let MP=0;class EP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new TP(e),t.set(e,n)),n}}class TP{constructor(e){this.id=MP++,this.code=e,this.usedTimes=0}}function wP(s,e,t,n,r,a,l){const c=new w1,f=new EP,h=new Set,p=[],m=new Map,g=r.logarithmicDepthBuffer;let v=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return h.add(T),T===0?"uv":`uv${T}`}function x(T,b,V,z,G){const Q=z.fog,ne=G.geometry,Z=T.isMeshStandardMaterial?z.environment:null,Y=(T.isMeshStandardMaterial?t:e).get(T.envMap||Z),X=Y&&Y.mapping===Pd?Y.image.height:null,re=E[T.type];T.precision!==null&&(v=r.getMaxPrecision(T.precision),v!==T.precision&&bt("WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const U=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,O=U!==void 0?U.length:0;let ee=0;ne.morphAttributes.position!==void 0&&(ee=1),ne.morphAttributes.normal!==void 0&&(ee=2),ne.morphAttributes.color!==void 0&&(ee=3);let Ee,be,Oe,se;if(re){const Be=Kr[re];Ee=Be.vertexShader,be=Be.fragmentShader}else Ee=T.vertexShader,be=T.fragmentShader,f.update(T),Oe=f.getVertexShaderID(T),se=f.getFragmentShaderID(T);const ce=s.getRenderTarget(),_e=s.state.buffers.depth.getReversed(),Ue=G.isInstancedMesh===!0,Fe=G.isBatchedMesh===!0,mt=!!T.map,kt=!!T.matcap,Xe=!!Y,dt=!!T.aoMap,Tt=!!T.lightMap,ct=!!T.bumpMap,oe=!!T.normalMap,W=!!T.displacementMap,Gt=!!T.emissiveMap,wt=!!T.metalnessMap,ft=!!T.roughnessMap,We=T.anisotropy>0,F=T.clearcoat>0,w=T.dispersion>0,q=T.iridescence>0,pe=T.sheen>0,me=T.transmission>0,de=We&&!!T.anisotropyMap,He=F&&!!T.clearcoatMap,we=F&&!!T.clearcoatNormalMap,je=F&&!!T.clearcoatRoughnessMap,$e=q&&!!T.iridescenceMap,Me=q&&!!T.iridescenceThicknessMap,Ce=pe&&!!T.sheenColorMap,qe=pe&&!!T.sheenRoughnessMap,Ke=!!T.specularMap,Ae=!!T.specularColorMap,xt=!!T.specularIntensityMap,H=me&&!!T.transmissionMap,Ne=me&&!!T.thicknessMap,xe=!!T.gradientMap,Ie=!!T.alphaMap,ve=T.alphaTest>0,ge=!!T.alphaHash,Pe=!!T.extensions;let lt=is;T.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(lt=s.toneMapping);const Bt={shaderID:re,shaderType:T.type,shaderName:T.name,vertexShader:Ee,fragmentShader:be,defines:T.defines,customVertexShaderID:Oe,customFragmentShaderID:se,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:Fe,batchingColor:Fe&&G._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&G.instanceColor!==null,instancingMorph:Ue&&G.morphTexture!==null,outputColorSpace:ce===null?s.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Ll,alphaToCoverage:!!T.alphaToCoverage,map:mt,matcap:kt,envMap:Xe,envMapMode:Xe&&Y.mapping,envMapCubeUVHeight:X,aoMap:dt,lightMap:Tt,bumpMap:ct,normalMap:oe,displacementMap:W,emissiveMap:Gt,normalMapObjectSpace:oe&&T.normalMapType===cA,normalMapTangentSpace:oe&&T.normalMapType===uA,metalnessMap:wt,roughnessMap:ft,anisotropy:We,anisotropyMap:de,clearcoat:F,clearcoatMap:He,clearcoatNormalMap:we,clearcoatRoughnessMap:je,dispersion:w,iridescence:q,iridescenceMap:$e,iridescenceThicknessMap:Me,sheen:pe,sheenColorMap:Ce,sheenRoughnessMap:qe,specularMap:Ke,specularColorMap:Ae,specularIntensityMap:xt,transmission:me,transmissionMap:H,thicknessMap:Ne,gradientMap:xe,opaque:T.transparent===!1&&T.blending===xl&&T.alphaToCoverage===!1,alphaMap:Ie,alphaTest:ve,alphaHash:ge,combine:T.combine,mapUv:mt&&M(T.map.channel),aoMapUv:dt&&M(T.aoMap.channel),lightMapUv:Tt&&M(T.lightMap.channel),bumpMapUv:ct&&M(T.bumpMap.channel),normalMapUv:oe&&M(T.normalMap.channel),displacementMapUv:W&&M(T.displacementMap.channel),emissiveMapUv:Gt&&M(T.emissiveMap.channel),metalnessMapUv:wt&&M(T.metalnessMap.channel),roughnessMapUv:ft&&M(T.roughnessMap.channel),anisotropyMapUv:de&&M(T.anisotropyMap.channel),clearcoatMapUv:He&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:we&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:je&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:$e&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:qe&&M(T.sheenRoughnessMap.channel),specularMapUv:Ke&&M(T.specularMap.channel),specularColorMapUv:Ae&&M(T.specularColorMap.channel),specularIntensityMapUv:xt&&M(T.specularIntensityMap.channel),transmissionMapUv:H&&M(T.transmissionMap.channel),thicknessMapUv:Ne&&M(T.thicknessMap.channel),alphaMapUv:Ie&&M(T.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(oe||We),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!ne.attributes.uv&&(mt||Ie),fog:!!Q,useFog:T.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:_e,skinning:G.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:ee,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:lt,decodeVideoTexture:mt&&T.map.isVideoTexture===!0&&Yt.getTransfer(T.map.colorSpace)===rn,decodeVideoTextureEmissive:Gt&&T.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(T.emissiveMap.colorSpace)===rn,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ws,flipSided:T.side===ji,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Pe&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&T.extensions.multiDraw===!0||Fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Bt.vertexUv1s=h.has(1),Bt.vertexUv2s=h.has(2),Bt.vertexUv3s=h.has(3),h.clear(),Bt}function y(T){const b=[];if(T.shaderID?b.push(T.shaderID):(b.push(T.customVertexShaderID),b.push(T.customFragmentShaderID)),T.defines!==void 0)for(const V in T.defines)b.push(V),b.push(T.defines[V]);return T.isRawShaderMaterial===!1&&(P(b,T),D(b,T),b.push(s.outputColorSpace)),b.push(T.customProgramCacheKey),b.join()}function P(T,b){T.push(b.precision),T.push(b.outputColorSpace),T.push(b.envMapMode),T.push(b.envMapCubeUVHeight),T.push(b.mapUv),T.push(b.alphaMapUv),T.push(b.lightMapUv),T.push(b.aoMapUv),T.push(b.bumpMapUv),T.push(b.normalMapUv),T.push(b.displacementMapUv),T.push(b.emissiveMapUv),T.push(b.metalnessMapUv),T.push(b.roughnessMapUv),T.push(b.anisotropyMapUv),T.push(b.clearcoatMapUv),T.push(b.clearcoatNormalMapUv),T.push(b.clearcoatRoughnessMapUv),T.push(b.iridescenceMapUv),T.push(b.iridescenceThicknessMapUv),T.push(b.sheenColorMapUv),T.push(b.sheenRoughnessMapUv),T.push(b.specularMapUv),T.push(b.specularColorMapUv),T.push(b.specularIntensityMapUv),T.push(b.transmissionMapUv),T.push(b.thicknessMapUv),T.push(b.combine),T.push(b.fogExp2),T.push(b.sizeAttenuation),T.push(b.morphTargetsCount),T.push(b.morphAttributeCount),T.push(b.numDirLights),T.push(b.numPointLights),T.push(b.numSpotLights),T.push(b.numSpotLightMaps),T.push(b.numHemiLights),T.push(b.numRectAreaLights),T.push(b.numDirLightShadows),T.push(b.numPointLightShadows),T.push(b.numSpotLightShadows),T.push(b.numSpotLightShadowsWithMaps),T.push(b.numLightProbes),T.push(b.shadowMapType),T.push(b.toneMapping),T.push(b.numClippingPlanes),T.push(b.numClipIntersection),T.push(b.depthPacking)}function D(T,b){c.disableAll(),b.instancing&&c.enable(0),b.instancingColor&&c.enable(1),b.instancingMorph&&c.enable(2),b.matcap&&c.enable(3),b.envMap&&c.enable(4),b.normalMapObjectSpace&&c.enable(5),b.normalMapTangentSpace&&c.enable(6),b.clearcoat&&c.enable(7),b.iridescence&&c.enable(8),b.alphaTest&&c.enable(9),b.vertexColors&&c.enable(10),b.vertexAlphas&&c.enable(11),b.vertexUv1s&&c.enable(12),b.vertexUv2s&&c.enable(13),b.vertexUv3s&&c.enable(14),b.vertexTangents&&c.enable(15),b.anisotropy&&c.enable(16),b.alphaHash&&c.enable(17),b.batching&&c.enable(18),b.dispersion&&c.enable(19),b.batchingColor&&c.enable(20),b.gradientMap&&c.enable(21),T.push(c.mask),c.disableAll(),b.fog&&c.enable(0),b.useFog&&c.enable(1),b.flatShading&&c.enable(2),b.logarithmicDepthBuffer&&c.enable(3),b.reversedDepthBuffer&&c.enable(4),b.skinning&&c.enable(5),b.morphTargets&&c.enable(6),b.morphNormals&&c.enable(7),b.morphColors&&c.enable(8),b.premultipliedAlpha&&c.enable(9),b.shadowMapEnabled&&c.enable(10),b.doubleSided&&c.enable(11),b.flipSided&&c.enable(12),b.useDepthPacking&&c.enable(13),b.dithering&&c.enable(14),b.transmission&&c.enable(15),b.sheen&&c.enable(16),b.opaque&&c.enable(17),b.pointsUvs&&c.enable(18),b.decodeVideoTexture&&c.enable(19),b.decodeVideoTextureEmissive&&c.enable(20),b.alphaToCoverage&&c.enable(21),T.push(c.mask)}function A(T){const b=E[T.type];let V;if(b){const z=Kr[b];V=zA.clone(z.uniforms)}else V=T.uniforms;return V}function R(T,b){let V=m.get(b);return V!==void 0?++V.usedTimes:(V=new SP(s,b,T,a),p.push(V),m.set(b,V)),V}function L(T){if(--T.usedTimes===0){const b=p.indexOf(T);p[b]=p[p.length-1],p.pop(),m.delete(T.cacheKey),T.destroy()}}function N(T){f.remove(T)}function k(){f.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:A,acquireProgram:R,releaseProgram:L,releaseShaderCache:N,programs:p,dispose:k}}function AP(){let s=new WeakMap;function e(l){return s.has(l)}function t(l){let c=s.get(l);return c===void 0&&(c={},s.set(l,c)),c}function n(l){s.delete(l)}function r(l,c,f){s.get(l)[c]=f}function a(){s=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function bP(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function by(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Cy(){const s=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function l(m,g,v,E,M,x){let y=s[e];return y===void 0?(y={id:m.id,object:m,geometry:g,material:v,groupOrder:E,renderOrder:m.renderOrder,z:M,group:x},s[e]=y):(y.id=m.id,y.object=m,y.geometry=g,y.material=v,y.groupOrder=E,y.renderOrder=m.renderOrder,y.z=M,y.group=x),e++,y}function c(m,g,v,E,M,x){const y=l(m,g,v,E,M,x);v.transmission>0?n.push(y):v.transparent===!0?r.push(y):t.push(y)}function f(m,g,v,E,M,x){const y=l(m,g,v,E,M,x);v.transmission>0?n.unshift(y):v.transparent===!0?r.unshift(y):t.unshift(y)}function h(m,g){t.length>1&&t.sort(m||bP),n.length>1&&n.sort(g||by),r.length>1&&r.sort(g||by)}function p(){for(let m=e,g=s.length;m<g;m++){const v=s[m];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:c,unshift:f,finish:p,sort:h}}function CP(){let s=new WeakMap;function e(n,r){const a=s.get(n);let l;return a===void 0?(l=new Cy,s.set(n,[l])):r>=a.length?(l=new Cy,a.push(l)):l=a[r],l}function t(){s=new WeakMap}return{get:e,dispose:t}}function RP(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new he,color:new on};break;case"SpotLight":t={position:new he,direction:new he,color:new on,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new he,color:new on,distance:0,decay:0};break;case"HemisphereLight":t={direction:new he,skyColor:new on,groundColor:new on};break;case"RectAreaLight":t={color:new on,position:new he,halfWidth:new he,halfHeight:new he};break}return s[e.id]=t,t}}}function PP(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tn};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tn};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tn,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let DP=0;function LP(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function IP(s){const e=new RP,t=PP(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new he);const r=new he,a=new On,l=new On;function c(h){let p=0,m=0,g=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let v=0,E=0,M=0,x=0,y=0,P=0,D=0,A=0,R=0,L=0,N=0;h.sort(LP);for(let T=0,b=h.length;T<b;T++){const V=h[T],z=V.color,G=V.intensity,Q=V.distance;let ne=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Dl?ne=V.shadow.map.texture:ne=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)p+=z.r*G,m+=z.g*G,g+=z.b*G;else if(V.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(V.sh.coefficients[Z],G);N++}else if(V.isDirectionalLight){const Z=e.get(V);if(Z.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const Y=V.shadow,X=t.get(V);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,n.directionalShadow[v]=X,n.directionalShadowMap[v]=ne,n.directionalShadowMatrix[v]=V.shadow.matrix,P++}n.directional[v]=Z,v++}else if(V.isSpotLight){const Z=e.get(V);Z.position.setFromMatrixPosition(V.matrixWorld),Z.color.copy(z).multiplyScalar(G),Z.distance=Q,Z.coneCos=Math.cos(V.angle),Z.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),Z.decay=V.decay,n.spot[M]=Z;const Y=V.shadow;if(V.map&&(n.spotLightMap[R]=V.map,R++,Y.updateMatrices(V),V.castShadow&&L++),n.spotLightMatrix[M]=Y.matrix,V.castShadow){const X=t.get(V);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,n.spotShadow[M]=X,n.spotShadowMap[M]=ne,A++}M++}else if(V.isRectAreaLight){const Z=e.get(V);Z.color.copy(z).multiplyScalar(G),Z.halfWidth.set(V.width*.5,0,0),Z.halfHeight.set(0,V.height*.5,0),n.rectArea[x]=Z,x++}else if(V.isPointLight){const Z=e.get(V);if(Z.color.copy(V.color).multiplyScalar(V.intensity),Z.distance=V.distance,Z.decay=V.decay,V.castShadow){const Y=V.shadow,X=t.get(V);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,X.shadowCameraNear=Y.camera.near,X.shadowCameraFar=Y.camera.far,n.pointShadow[E]=X,n.pointShadowMap[E]=ne,n.pointShadowMatrix[E]=V.shadow.matrix,D++}n.point[E]=Z,E++}else if(V.isHemisphereLight){const Z=e.get(V);Z.skyColor.copy(V.color).multiplyScalar(G),Z.groundColor.copy(V.groundColor).multiplyScalar(G),n.hemi[y]=Z,y++}}x>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ve.LTC_FLOAT_1,n.rectAreaLTC2=Ve.LTC_FLOAT_2):(n.rectAreaLTC1=Ve.LTC_HALF_1,n.rectAreaLTC2=Ve.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=m,n.ambient[2]=g;const k=n.hash;(k.directionalLength!==v||k.pointLength!==E||k.spotLength!==M||k.rectAreaLength!==x||k.hemiLength!==y||k.numDirectionalShadows!==P||k.numPointShadows!==D||k.numSpotShadows!==A||k.numSpotMaps!==R||k.numLightProbes!==N)&&(n.directional.length=v,n.spot.length=M,n.rectArea.length=x,n.point.length=E,n.hemi.length=y,n.directionalShadow.length=P,n.directionalShadowMap.length=P,n.pointShadow.length=D,n.pointShadowMap.length=D,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=P,n.pointShadowMatrix.length=D,n.spotLightMatrix.length=A+R-L,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=N,k.directionalLength=v,k.pointLength=E,k.spotLength=M,k.rectAreaLength=x,k.hemiLength=y,k.numDirectionalShadows=P,k.numPointShadows=D,k.numSpotShadows=A,k.numSpotMaps=R,k.numLightProbes=N,n.version=DP++)}function f(h,p){let m=0,g=0,v=0,E=0,M=0;const x=p.matrixWorldInverse;for(let y=0,P=h.length;y<P;y++){const D=h[y];if(D.isDirectionalLight){const A=n.directional[m];A.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(x),m++}else if(D.isSpotLight){const A=n.spot[v];A.position.setFromMatrixPosition(D.matrixWorld),A.position.applyMatrix4(x),A.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(x),v++}else if(D.isRectAreaLight){const A=n.rectArea[E];A.position.setFromMatrixPosition(D.matrixWorld),A.position.applyMatrix4(x),l.identity(),a.copy(D.matrixWorld),a.premultiply(x),l.extractRotation(a),A.halfWidth.set(D.width*.5,0,0),A.halfHeight.set(0,D.height*.5,0),A.halfWidth.applyMatrix4(l),A.halfHeight.applyMatrix4(l),E++}else if(D.isPointLight){const A=n.point[g];A.position.setFromMatrixPosition(D.matrixWorld),A.position.applyMatrix4(x),g++}else if(D.isHemisphereLight){const A=n.hemi[M];A.direction.setFromMatrixPosition(D.matrixWorld),A.direction.transformDirection(x),M++}}}return{setup:c,setupView:f,state:n}}function Ry(s){const e=new IP(s),t=[],n=[];function r(p){h.camera=p,t.length=0,n.length=0}function a(p){t.push(p)}function l(p){n.push(p)}function c(){e.setup(t)}function f(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:h,setupLights:c,setupLightsView:f,pushLight:a,pushShadow:l}}function NP(s){let e=new WeakMap;function t(r,a=0){const l=e.get(r);let c;return l===void 0?(c=new Ry(s),e.set(r,[c])):a>=l.length?(c=new Ry(s),l.push(c)):c=l[a],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const UP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FP=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,OP=[new he(1,0,0),new he(-1,0,0),new he(0,1,0),new he(0,-1,0),new he(0,0,1),new he(0,0,-1)],kP=[new he(0,-1,0),new he(0,-1,0),new he(0,0,1),new he(0,0,-1),new he(0,-1,0),new he(0,-1,0)],Py=new On,Tu=new he,lm=new he;function zP(s,e,t){let n=new N1;const r=new tn,a=new tn,l=new Dn,c=new ZA,f=new QA,h={},p=t.maxTextureSize,m={[bo]:ji,[ji]:bo,[ws]:ws},g=new Br({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tn},radius:{value:4}},vertexShader:UP,fragmentShader:FP}),v=g.clone();v.defines.HORIZONTAL_PASS=1;const E=new Os;E.setAttribute("position",new ss(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ls(E,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sd;let y=this.type;this.render=function(L,N,k){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||L.length===0)return;L.type===Bw&&(bt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),L.type=sd);const T=s.getRenderTarget(),b=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),z=s.state;z.setBlending(Rs),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const G=y!==this.type;G&&N.traverse(function(Q){Q.material&&(Array.isArray(Q.material)?Q.material.forEach(ne=>ne.needsUpdate=!0):Q.material.needsUpdate=!0)});for(let Q=0,ne=L.length;Q<ne;Q++){const Z=L[Q],Y=Z.shadow;if(Y===void 0){bt("WebGLShadowMap:",Z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const X=Y.getFrameExtents();if(r.multiply(X),a.copy(Y.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(a.x=Math.floor(p/X.x),r.x=a.x*X.x,Y.mapSize.x=a.x),r.y>p&&(a.y=Math.floor(p/X.y),r.y=a.y*X.y,Y.mapSize.y=a.y)),Y.map===null||G===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Lu){if(Z.isPointLight){bt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new rs(r.x,r.y,{format:Dl,type:Ns,minFilter:xi,magFilter:xi,generateMipmaps:!1}),Y.map.texture.name=Z.name+".shadowMap",Y.map.depthTexture=new ac(r.x,r.y,es),Y.map.depthTexture.name=Z.name+".shadowMapDepth",Y.map.depthTexture.format=Us,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=si,Y.map.depthTexture.magFilter=si}else{Z.isPointLight?(Y.map=new I1(r.x),Y.map.depthTexture=new $A(r.x,as)):(Y.map=new rs(r.x,r.y),Y.map.depthTexture=new ac(r.x,r.y,as)),Y.map.depthTexture.name=Z.name+".shadowMap",Y.map.depthTexture.format=Us;const U=s.state.buffers.depth.getReversed();this.type===sd?(Y.map.depthTexture.compareFunction=U?f0:c0,Y.map.depthTexture.minFilter=xi,Y.map.depthTexture.magFilter=xi):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=si,Y.map.depthTexture.magFilter=si)}Y.camera.updateProjectionMatrix()}const re=Y.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<re;U++){if(Y.map.isWebGLCubeRenderTarget)s.setRenderTarget(Y.map,U),s.clear();else{U===0&&(s.setRenderTarget(Y.map),s.clear());const O=Y.getViewport(U);l.set(a.x*O.x,a.y*O.y,a.x*O.z,a.y*O.w),z.viewport(l)}if(Z.isPointLight){const O=Y.camera,ee=Y.matrix,Ee=Z.distance||O.far;Ee!==O.far&&(O.far=Ee,O.updateProjectionMatrix()),Tu.setFromMatrixPosition(Z.matrixWorld),O.position.copy(Tu),lm.copy(O.position),lm.add(OP[U]),O.up.copy(kP[U]),O.lookAt(lm),O.updateMatrixWorld(),ee.makeTranslation(-Tu.x,-Tu.y,-Tu.z),Py.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(Py,O.coordinateSystem,O.reversedDepth)}else Y.updateMatrices(Z);n=Y.getFrustum(),A(N,k,Y.camera,Z,this.type)}Y.isPointLightShadow!==!0&&this.type===Lu&&P(Y,k),Y.needsUpdate=!1}y=this.type,x.needsUpdate=!1,s.setRenderTarget(T,b,V)};function P(L,N){const k=e.update(M);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,v.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,v.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new rs(r.x,r.y,{format:Dl,type:Ns})),g.uniforms.shadow_pass.value=L.map.depthTexture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(N,null,k,g,M,null),v.uniforms.shadow_pass.value=L.mapPass.texture,v.uniforms.resolution.value=L.mapSize,v.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(N,null,k,v,M,null)}function D(L,N,k,T){let b=null;const V=k.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(V!==void 0)b=V;else if(b=k.isPointLight===!0?f:c,s.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const z=b.uuid,G=N.uuid;let Q=h[z];Q===void 0&&(Q={},h[z]=Q);let ne=Q[G];ne===void 0&&(ne=b.clone(),Q[G]=ne,N.addEventListener("dispose",R)),b=ne}if(b.visible=N.visible,b.wireframe=N.wireframe,T===Lu?b.side=N.shadowSide!==null?N.shadowSide:N.side:b.side=N.shadowSide!==null?N.shadowSide:m[N.side],b.alphaMap=N.alphaMap,b.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,b.map=N.map,b.clipShadows=N.clipShadows,b.clippingPlanes=N.clippingPlanes,b.clipIntersection=N.clipIntersection,b.displacementMap=N.displacementMap,b.displacementScale=N.displacementScale,b.displacementBias=N.displacementBias,b.wireframeLinewidth=N.wireframeLinewidth,b.linewidth=N.linewidth,k.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const z=s.properties.get(b);z.light=k}return b}function A(L,N,k,T,b){if(L.visible===!1)return;if(L.layers.test(N.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&b===Lu)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,L.matrixWorld);const G=e.update(L),Q=L.material;if(Array.isArray(Q)){const ne=G.groups;for(let Z=0,Y=ne.length;Z<Y;Z++){const X=ne[Z],re=Q[X.materialIndex];if(re&&re.visible){const U=D(L,re,T,b);L.onBeforeShadow(s,L,N,k,G,U,X),s.renderBufferDirect(k,null,G,U,L,X),L.onAfterShadow(s,L,N,k,G,U,X)}}}else if(Q.visible){const ne=D(L,Q,T,b);L.onBeforeShadow(s,L,N,k,G,ne,null),s.renderBufferDirect(k,null,G,ne,L,null),L.onAfterShadow(s,L,N,k,G,ne,null)}}const z=L.children;for(let G=0,Q=z.length;G<Q;G++)A(z[G],N,k,T,b)}function R(L){L.target.removeEventListener("dispose",R);for(const k in h){const T=h[k],b=L.target.uuid;b in T&&(T[b].dispose(),delete T[b])}}}const BP={[km]:zm,[Bm]:Gm,[Vm]:Wm,[Rl]:Hm,[zm]:km,[Gm]:Bm,[Wm]:Vm,[Hm]:Rl};function VP(s,e){function t(){let H=!1;const Ne=new Dn;let xe=null;const Ie=new Dn(0,0,0,0);return{setMask:function(ve){xe!==ve&&!H&&(s.colorMask(ve,ve,ve,ve),xe=ve)},setLocked:function(ve){H=ve},setClear:function(ve,ge,Pe,lt,Bt){Bt===!0&&(ve*=lt,ge*=lt,Pe*=lt),Ne.set(ve,ge,Pe,lt),Ie.equals(Ne)===!1&&(s.clearColor(ve,ge,Pe,lt),Ie.copy(Ne))},reset:function(){H=!1,xe=null,Ie.set(-1,0,0,0)}}}function n(){let H=!1,Ne=!1,xe=null,Ie=null,ve=null;return{setReversed:function(ge){if(Ne!==ge){const Pe=e.get("EXT_clip_control");ge?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),Ne=ge;const lt=ve;ve=null,this.setClear(lt)}},getReversed:function(){return Ne},setTest:function(ge){ge?ce(s.DEPTH_TEST):_e(s.DEPTH_TEST)},setMask:function(ge){xe!==ge&&!H&&(s.depthMask(ge),xe=ge)},setFunc:function(ge){if(Ne&&(ge=BP[ge]),Ie!==ge){switch(ge){case km:s.depthFunc(s.NEVER);break;case zm:s.depthFunc(s.ALWAYS);break;case Bm:s.depthFunc(s.LESS);break;case Rl:s.depthFunc(s.LEQUAL);break;case Vm:s.depthFunc(s.EQUAL);break;case Hm:s.depthFunc(s.GEQUAL);break;case Gm:s.depthFunc(s.GREATER);break;case Wm:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ie=ge}},setLocked:function(ge){H=ge},setClear:function(ge){ve!==ge&&(Ne&&(ge=1-ge),s.clearDepth(ge),ve=ge)},reset:function(){H=!1,xe=null,Ie=null,ve=null,Ne=!1}}}function r(){let H=!1,Ne=null,xe=null,Ie=null,ve=null,ge=null,Pe=null,lt=null,Bt=null;return{setTest:function(Be){H||(Be?ce(s.STENCIL_TEST):_e(s.STENCIL_TEST))},setMask:function(Be){Ne!==Be&&!H&&(s.stencilMask(Be),Ne=Be)},setFunc:function(Be,it,Mt){(xe!==Be||Ie!==it||ve!==Mt)&&(s.stencilFunc(Be,it,Mt),xe=Be,Ie=it,ve=Mt)},setOp:function(Be,it,Mt){(ge!==Be||Pe!==it||lt!==Mt)&&(s.stencilOp(Be,it,Mt),ge=Be,Pe=it,lt=Mt)},setLocked:function(Be){H=Be},setClear:function(Be){Bt!==Be&&(s.clearStencil(Be),Bt=Be)},reset:function(){H=!1,Ne=null,xe=null,Ie=null,ve=null,ge=null,Pe=null,lt=null,Bt=null}}}const a=new t,l=new n,c=new r,f=new WeakMap,h=new WeakMap;let p={},m={},g=new WeakMap,v=[],E=null,M=!1,x=null,y=null,P=null,D=null,A=null,R=null,L=null,N=new on(0,0,0),k=0,T=!1,b=null,V=null,z=null,G=null,Q=null;const ne=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,Y=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(X)[1]),Z=Y>=1):X.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Z=Y>=2);let re=null,U={};const O=s.getParameter(s.SCISSOR_BOX),ee=s.getParameter(s.VIEWPORT),Ee=new Dn().fromArray(O),be=new Dn().fromArray(ee);function Oe(H,Ne,xe,Ie){const ve=new Uint8Array(4),ge=s.createTexture();s.bindTexture(H,ge),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Pe=0;Pe<xe;Pe++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Ne,0,s.RGBA,1,1,Ie,0,s.RGBA,s.UNSIGNED_BYTE,ve):s.texImage2D(Ne+Pe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ve);return ge}const se={};se[s.TEXTURE_2D]=Oe(s.TEXTURE_2D,s.TEXTURE_2D,1),se[s.TEXTURE_CUBE_MAP]=Oe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[s.TEXTURE_2D_ARRAY]=Oe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),se[s.TEXTURE_3D]=Oe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ce(s.DEPTH_TEST),l.setFunc(Rl),ct(!1),oe(Fx),ce(s.CULL_FACE),dt(Rs);function ce(H){p[H]!==!0&&(s.enable(H),p[H]=!0)}function _e(H){p[H]!==!1&&(s.disable(H),p[H]=!1)}function Ue(H,Ne){return m[H]!==Ne?(s.bindFramebuffer(H,Ne),m[H]=Ne,H===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=Ne),H===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Fe(H,Ne){let xe=v,Ie=!1;if(H){xe=g.get(Ne),xe===void 0&&(xe=[],g.set(Ne,xe));const ve=H.textures;if(xe.length!==ve.length||xe[0]!==s.COLOR_ATTACHMENT0){for(let ge=0,Pe=ve.length;ge<Pe;ge++)xe[ge]=s.COLOR_ATTACHMENT0+ge;xe.length=ve.length,Ie=!0}}else xe[0]!==s.BACK&&(xe[0]=s.BACK,Ie=!0);Ie&&s.drawBuffers(xe)}function mt(H){return E!==H?(s.useProgram(H),E=H,!0):!1}const kt={[ea]:s.FUNC_ADD,[Hw]:s.FUNC_SUBTRACT,[Gw]:s.FUNC_REVERSE_SUBTRACT};kt[Ww]=s.MIN,kt[Xw]=s.MAX;const Xe={[jw]:s.ZERO,[Yw]:s.ONE,[qw]:s.SRC_COLOR,[Fm]:s.SRC_ALPHA,[eA]:s.SRC_ALPHA_SATURATE,[Qw]:s.DST_COLOR,[Kw]:s.DST_ALPHA,[$w]:s.ONE_MINUS_SRC_COLOR,[Om]:s.ONE_MINUS_SRC_ALPHA,[Jw]:s.ONE_MINUS_DST_COLOR,[Zw]:s.ONE_MINUS_DST_ALPHA,[tA]:s.CONSTANT_COLOR,[nA]:s.ONE_MINUS_CONSTANT_COLOR,[iA]:s.CONSTANT_ALPHA,[rA]:s.ONE_MINUS_CONSTANT_ALPHA};function dt(H,Ne,xe,Ie,ve,ge,Pe,lt,Bt,Be){if(H===Rs){M===!0&&(_e(s.BLEND),M=!1);return}if(M===!1&&(ce(s.BLEND),M=!0),H!==Vw){if(H!==x||Be!==T){if((y!==ea||A!==ea)&&(s.blendEquation(s.FUNC_ADD),y=ea,A=ea),Be)switch(H){case xl:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ox:s.blendFunc(s.ONE,s.ONE);break;case kx:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zx:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Kt("WebGLState: Invalid blending: ",H);break}else switch(H){case xl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ox:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case kx:Kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zx:Kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Kt("WebGLState: Invalid blending: ",H);break}P=null,D=null,R=null,L=null,N.set(0,0,0),k=0,x=H,T=Be}return}ve=ve||Ne,ge=ge||xe,Pe=Pe||Ie,(Ne!==y||ve!==A)&&(s.blendEquationSeparate(kt[Ne],kt[ve]),y=Ne,A=ve),(xe!==P||Ie!==D||ge!==R||Pe!==L)&&(s.blendFuncSeparate(Xe[xe],Xe[Ie],Xe[ge],Xe[Pe]),P=xe,D=Ie,R=ge,L=Pe),(lt.equals(N)===!1||Bt!==k)&&(s.blendColor(lt.r,lt.g,lt.b,Bt),N.copy(lt),k=Bt),x=H,T=!1}function Tt(H,Ne){H.side===ws?_e(s.CULL_FACE):ce(s.CULL_FACE);let xe=H.side===ji;Ne&&(xe=!xe),ct(xe),H.blending===xl&&H.transparent===!1?dt(Rs):dt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),l.setFunc(H.depthFunc),l.setTest(H.depthTest),l.setMask(H.depthWrite),a.setMask(H.colorWrite);const Ie=H.stencilWrite;c.setTest(Ie),Ie&&(c.setMask(H.stencilWriteMask),c.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),c.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Gt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ce(s.SAMPLE_ALPHA_TO_COVERAGE):_e(s.SAMPLE_ALPHA_TO_COVERAGE)}function ct(H){b!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),b=H)}function oe(H){H!==kw?(ce(s.CULL_FACE),H!==V&&(H===Fx?s.cullFace(s.BACK):H===zw?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):_e(s.CULL_FACE),V=H}function W(H){H!==z&&(Z&&s.lineWidth(H),z=H)}function Gt(H,Ne,xe){H?(ce(s.POLYGON_OFFSET_FILL),(G!==Ne||Q!==xe)&&(s.polygonOffset(Ne,xe),G=Ne,Q=xe)):_e(s.POLYGON_OFFSET_FILL)}function wt(H){H?ce(s.SCISSOR_TEST):_e(s.SCISSOR_TEST)}function ft(H){H===void 0&&(H=s.TEXTURE0+ne-1),re!==H&&(s.activeTexture(H),re=H)}function We(H,Ne,xe){xe===void 0&&(re===null?xe=s.TEXTURE0+ne-1:xe=re);let Ie=U[xe];Ie===void 0&&(Ie={type:void 0,texture:void 0},U[xe]=Ie),(Ie.type!==H||Ie.texture!==Ne)&&(re!==xe&&(s.activeTexture(xe),re=xe),s.bindTexture(H,Ne||se[H]),Ie.type=H,Ie.texture=Ne)}function F(){const H=U[re];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function w(){try{s.compressedTexImage2D(...arguments)}catch(H){Kt("WebGLState:",H)}}function q(){try{s.compressedTexImage3D(...arguments)}catch(H){Kt("WebGLState:",H)}}function pe(){try{s.texSubImage2D(...arguments)}catch(H){Kt("WebGLState:",H)}}function me(){try{s.texSubImage3D(...arguments)}catch(H){Kt("WebGLState:",H)}}function de(){try{s.compressedTexSubImage2D(...arguments)}catch(H){Kt("WebGLState:",H)}}function He(){try{s.compressedTexSubImage3D(...arguments)}catch(H){Kt("WebGLState:",H)}}function we(){try{s.texStorage2D(...arguments)}catch(H){Kt("WebGLState:",H)}}function je(){try{s.texStorage3D(...arguments)}catch(H){Kt("WebGLState:",H)}}function $e(){try{s.texImage2D(...arguments)}catch(H){Kt("WebGLState:",H)}}function Me(){try{s.texImage3D(...arguments)}catch(H){Kt("WebGLState:",H)}}function Ce(H){Ee.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),Ee.copy(H))}function qe(H){be.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),be.copy(H))}function Ke(H,Ne){let xe=h.get(Ne);xe===void 0&&(xe=new WeakMap,h.set(Ne,xe));let Ie=xe.get(H);Ie===void 0&&(Ie=s.getUniformBlockIndex(Ne,H.name),xe.set(H,Ie))}function Ae(H,Ne){const Ie=h.get(Ne).get(H);f.get(Ne)!==Ie&&(s.uniformBlockBinding(Ne,Ie,H.__bindingPointIndex),f.set(Ne,Ie))}function xt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),l.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),p={},re=null,U={},m={},g=new WeakMap,v=[],E=null,M=!1,x=null,y=null,P=null,D=null,A=null,R=null,L=null,N=new on(0,0,0),k=0,T=!1,b=null,V=null,z=null,G=null,Q=null,Ee.set(0,0,s.canvas.width,s.canvas.height),be.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ce,disable:_e,bindFramebuffer:Ue,drawBuffers:Fe,useProgram:mt,setBlending:dt,setMaterial:Tt,setFlipSided:ct,setCullFace:oe,setLineWidth:W,setPolygonOffset:Gt,setScissorTest:wt,activeTexture:ft,bindTexture:We,unbindTexture:F,compressedTexImage2D:w,compressedTexImage3D:q,texImage2D:$e,texImage3D:Me,updateUBOMapping:Ke,uniformBlockBinding:Ae,texStorage2D:we,texStorage3D:je,texSubImage2D:pe,texSubImage3D:me,compressedTexSubImage2D:de,compressedTexSubImage3D:He,scissor:Ce,viewport:qe,reset:xt}}function HP(s,e,t,n,r,a,l){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new tn,p=new WeakMap;let m;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(F,w){return v?new OffscreenCanvas(F,w):sc("canvas")}function M(F,w,q){let pe=1;const me=We(F);if((me.width>q||me.height>q)&&(pe=q/Math.max(me.width,me.height)),pe<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const de=Math.floor(pe*me.width),He=Math.floor(pe*me.height);m===void 0&&(m=E(de,He));const we=w?E(de,He):m;return we.width=de,we.height=He,we.getContext("2d").drawImage(F,0,0,de,He),bt("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+de+"x"+He+")."),we}else return"data"in F&&bt("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),F;return F}function x(F){return F.generateMipmaps}function y(F){s.generateMipmap(F)}function P(F){return F.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?s.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(F,w,q,pe,me=!1){if(F!==null){if(s[F]!==void 0)return s[F];bt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let de=w;if(w===s.RED&&(q===s.FLOAT&&(de=s.R32F),q===s.HALF_FLOAT&&(de=s.R16F),q===s.UNSIGNED_BYTE&&(de=s.R8)),w===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(de=s.R8UI),q===s.UNSIGNED_SHORT&&(de=s.R16UI),q===s.UNSIGNED_INT&&(de=s.R32UI),q===s.BYTE&&(de=s.R8I),q===s.SHORT&&(de=s.R16I),q===s.INT&&(de=s.R32I)),w===s.RG&&(q===s.FLOAT&&(de=s.RG32F),q===s.HALF_FLOAT&&(de=s.RG16F),q===s.UNSIGNED_BYTE&&(de=s.RG8)),w===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(de=s.RG8UI),q===s.UNSIGNED_SHORT&&(de=s.RG16UI),q===s.UNSIGNED_INT&&(de=s.RG32UI),q===s.BYTE&&(de=s.RG8I),q===s.SHORT&&(de=s.RG16I),q===s.INT&&(de=s.RG32I)),w===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(de=s.RGB8UI),q===s.UNSIGNED_SHORT&&(de=s.RGB16UI),q===s.UNSIGNED_INT&&(de=s.RGB32UI),q===s.BYTE&&(de=s.RGB8I),q===s.SHORT&&(de=s.RGB16I),q===s.INT&&(de=s.RGB32I)),w===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(de=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(de=s.RGBA16UI),q===s.UNSIGNED_INT&&(de=s.RGBA32UI),q===s.BYTE&&(de=s.RGBA8I),q===s.SHORT&&(de=s.RGBA16I),q===s.INT&&(de=s.RGBA32I)),w===s.RGB&&(q===s.UNSIGNED_INT_5_9_9_9_REV&&(de=s.RGB9_E5),q===s.UNSIGNED_INT_10F_11F_11F_REV&&(de=s.R11F_G11F_B10F)),w===s.RGBA){const He=me?Ed:Yt.getTransfer(pe);q===s.FLOAT&&(de=s.RGBA32F),q===s.HALF_FLOAT&&(de=s.RGBA16F),q===s.UNSIGNED_BYTE&&(de=He===rn?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(de=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(de=s.RGB5_A1)}return(de===s.R16F||de===s.R32F||de===s.RG16F||de===s.RG32F||de===s.RGBA16F||de===s.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function A(F,w){let q;return F?w===null||w===as||w===rc?q=s.DEPTH24_STENCIL8:w===es?q=s.DEPTH32F_STENCIL8:w===ic&&(q=s.DEPTH24_STENCIL8,bt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===as||w===rc?q=s.DEPTH_COMPONENT24:w===es?q=s.DEPTH_COMPONENT32F:w===ic&&(q=s.DEPTH_COMPONENT16),q}function R(F,w){return x(F)===!0||F.isFramebufferTexture&&F.minFilter!==si&&F.minFilter!==xi?Math.log2(Math.max(w.width,w.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?w.mipmaps.length:1}function L(F){const w=F.target;w.removeEventListener("dispose",L),k(w),w.isVideoTexture&&p.delete(w)}function N(F){const w=F.target;w.removeEventListener("dispose",N),b(w)}function k(F){const w=n.get(F);if(w.__webglInit===void 0)return;const q=F.source,pe=g.get(q);if(pe){const me=pe[w.__cacheKey];me.usedTimes--,me.usedTimes===0&&T(F),Object.keys(pe).length===0&&g.delete(q)}n.remove(F)}function T(F){const w=n.get(F);s.deleteTexture(w.__webglTexture);const q=F.source,pe=g.get(q);delete pe[w.__cacheKey],l.memory.textures--}function b(F){const w=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(w.__webglFramebuffer[pe]))for(let me=0;me<w.__webglFramebuffer[pe].length;me++)s.deleteFramebuffer(w.__webglFramebuffer[pe][me]);else s.deleteFramebuffer(w.__webglFramebuffer[pe]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[pe])}else{if(Array.isArray(w.__webglFramebuffer))for(let pe=0;pe<w.__webglFramebuffer.length;pe++)s.deleteFramebuffer(w.__webglFramebuffer[pe]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let pe=0;pe<w.__webglColorRenderbuffer.length;pe++)w.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[pe]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const q=F.textures;for(let pe=0,me=q.length;pe<me;pe++){const de=n.get(q[pe]);de.__webglTexture&&(s.deleteTexture(de.__webglTexture),l.memory.textures--),n.remove(q[pe])}n.remove(F)}let V=0;function z(){V=0}function G(){const F=V;return F>=r.maxTextures&&bt("WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+r.maxTextures),V+=1,F}function Q(F){const w=[];return w.push(F.wrapS),w.push(F.wrapT),w.push(F.wrapR||0),w.push(F.magFilter),w.push(F.minFilter),w.push(F.anisotropy),w.push(F.internalFormat),w.push(F.format),w.push(F.type),w.push(F.generateMipmaps),w.push(F.premultiplyAlpha),w.push(F.flipY),w.push(F.unpackAlignment),w.push(F.colorSpace),w.join()}function ne(F,w){const q=n.get(F);if(F.isVideoTexture&&wt(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&q.__version!==F.version){const pe=F.image;if(pe===null)bt("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)bt("WebGLRenderer: Texture marked for update but image is incomplete");else{se(q,F,w);return}}else F.isExternalTexture&&(q.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+w)}function Z(F,w){const q=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&q.__version!==F.version){se(q,F,w);return}else F.isExternalTexture&&(q.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+w)}function Y(F,w){const q=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&q.__version!==F.version){se(q,F,w);return}t.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+w)}function X(F,w){const q=n.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&q.__version!==F.version){ce(q,F,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+w)}const re={[Ym]:s.REPEAT,[bs]:s.CLAMP_TO_EDGE,[qm]:s.MIRRORED_REPEAT},U={[si]:s.NEAREST,[aA]:s.NEAREST_MIPMAP_NEAREST,[Rf]:s.NEAREST_MIPMAP_LINEAR,[xi]:s.LINEAR,[Dp]:s.LINEAR_MIPMAP_NEAREST,[ra]:s.LINEAR_MIPMAP_LINEAR},O={[fA]:s.NEVER,[gA]:s.ALWAYS,[dA]:s.LESS,[c0]:s.LEQUAL,[hA]:s.EQUAL,[f0]:s.GEQUAL,[pA]:s.GREATER,[mA]:s.NOTEQUAL};function ee(F,w){if(w.type===es&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===xi||w.magFilter===Dp||w.magFilter===Rf||w.magFilter===ra||w.minFilter===xi||w.minFilter===Dp||w.minFilter===Rf||w.minFilter===ra)&&bt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(F,s.TEXTURE_WRAP_S,re[w.wrapS]),s.texParameteri(F,s.TEXTURE_WRAP_T,re[w.wrapT]),(F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY)&&s.texParameteri(F,s.TEXTURE_WRAP_R,re[w.wrapR]),s.texParameteri(F,s.TEXTURE_MAG_FILTER,U[w.magFilter]),s.texParameteri(F,s.TEXTURE_MIN_FILTER,U[w.minFilter]),w.compareFunction&&(s.texParameteri(F,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(F,s.TEXTURE_COMPARE_FUNC,O[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===si||w.minFilter!==Rf&&w.minFilter!==ra||w.type===es&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(F,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Ee(F,w){let q=!1;F.__webglInit===void 0&&(F.__webglInit=!0,w.addEventListener("dispose",L));const pe=w.source;let me=g.get(pe);me===void 0&&(me={},g.set(pe,me));const de=Q(w);if(de!==F.__cacheKey){me[de]===void 0&&(me[de]={texture:s.createTexture(),usedTimes:0},l.memory.textures++,q=!0),me[de].usedTimes++;const He=me[F.__cacheKey];He!==void 0&&(me[F.__cacheKey].usedTimes--,He.usedTimes===0&&T(w)),F.__cacheKey=de,F.__webglTexture=me[de].texture}return q}function be(F,w,q){return Math.floor(Math.floor(F/q)/w)}function Oe(F,w,q,pe){const de=F.updateRanges;if(de.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,q,pe,w.data);else{de.sort((Me,Ce)=>Me.start-Ce.start);let He=0;for(let Me=1;Me<de.length;Me++){const Ce=de[He],qe=de[Me],Ke=Ce.start+Ce.count,Ae=be(qe.start,w.width,4),xt=be(Ce.start,w.width,4);qe.start<=Ke+1&&Ae===xt&&be(qe.start+qe.count-1,w.width,4)===Ae?Ce.count=Math.max(Ce.count,qe.start+qe.count-Ce.start):(++He,de[He]=qe)}de.length=He+1;const we=s.getParameter(s.UNPACK_ROW_LENGTH),je=s.getParameter(s.UNPACK_SKIP_PIXELS),$e=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let Me=0,Ce=de.length;Me<Ce;Me++){const qe=de[Me],Ke=Math.floor(qe.start/4),Ae=Math.ceil(qe.count/4),xt=Ke%w.width,H=Math.floor(Ke/w.width),Ne=Ae,xe=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,xt),s.pixelStorei(s.UNPACK_SKIP_ROWS,H),t.texSubImage2D(s.TEXTURE_2D,0,xt,H,Ne,xe,q,pe,w.data)}F.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,we),s.pixelStorei(s.UNPACK_SKIP_PIXELS,je),s.pixelStorei(s.UNPACK_SKIP_ROWS,$e)}}function se(F,w,q){let pe=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(pe=s.TEXTURE_3D);const me=Ee(F,w),de=w.source;t.bindTexture(pe,F.__webglTexture,s.TEXTURE0+q);const He=n.get(de);if(de.version!==He.__version||me===!0){t.activeTexture(s.TEXTURE0+q);const we=Yt.getPrimaries(Yt.workingColorSpace),je=w.colorSpace===ho?null:Yt.getPrimaries(w.colorSpace),$e=w.colorSpace===ho||we===je?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let Me=M(w.image,!1,r.maxTextureSize);Me=ft(w,Me);const Ce=a.convert(w.format,w.colorSpace),qe=a.convert(w.type);let Ke=D(w.internalFormat,Ce,qe,w.colorSpace,w.isVideoTexture);ee(pe,w);let Ae;const xt=w.mipmaps,H=w.isVideoTexture!==!0,Ne=He.__version===void 0||me===!0,xe=de.dataReady,Ie=R(w,Me);if(w.isDepthTexture)Ke=A(w.format===sa,w.type),Ne&&(H?t.texStorage2D(s.TEXTURE_2D,1,Ke,Me.width,Me.height):t.texImage2D(s.TEXTURE_2D,0,Ke,Me.width,Me.height,0,Ce,qe,null));else if(w.isDataTexture)if(xt.length>0){H&&Ne&&t.texStorage2D(s.TEXTURE_2D,Ie,Ke,xt[0].width,xt[0].height);for(let ve=0,ge=xt.length;ve<ge;ve++)Ae=xt[ve],H?xe&&t.texSubImage2D(s.TEXTURE_2D,ve,0,0,Ae.width,Ae.height,Ce,qe,Ae.data):t.texImage2D(s.TEXTURE_2D,ve,Ke,Ae.width,Ae.height,0,Ce,qe,Ae.data);w.generateMipmaps=!1}else H?(Ne&&t.texStorage2D(s.TEXTURE_2D,Ie,Ke,Me.width,Me.height),xe&&Oe(w,Me,Ce,qe)):t.texImage2D(s.TEXTURE_2D,0,Ke,Me.width,Me.height,0,Ce,qe,Me.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){H&&Ne&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Ke,xt[0].width,xt[0].height,Me.depth);for(let ve=0,ge=xt.length;ve<ge;ve++)if(Ae=xt[ve],w.format!==zr)if(Ce!==null)if(H){if(xe)if(w.layerUpdates.size>0){const Pe=ay(Ae.width,Ae.height,w.format,w.type);for(const lt of w.layerUpdates){const Bt=Ae.data.subarray(lt*Pe/Ae.data.BYTES_PER_ELEMENT,(lt+1)*Pe/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,lt,Ae.width,Ae.height,1,Ce,Bt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,0,Ae.width,Ae.height,Me.depth,Ce,Ae.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ve,Ke,Ae.width,Ae.height,Me.depth,0,Ae.data,0,0);else bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?xe&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,0,Ae.width,Ae.height,Me.depth,Ce,qe,Ae.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ve,Ke,Ae.width,Ae.height,Me.depth,0,Ce,qe,Ae.data)}else{H&&Ne&&t.texStorage2D(s.TEXTURE_2D,Ie,Ke,xt[0].width,xt[0].height);for(let ve=0,ge=xt.length;ve<ge;ve++)Ae=xt[ve],w.format!==zr?Ce!==null?H?xe&&t.compressedTexSubImage2D(s.TEXTURE_2D,ve,0,0,Ae.width,Ae.height,Ce,Ae.data):t.compressedTexImage2D(s.TEXTURE_2D,ve,Ke,Ae.width,Ae.height,0,Ae.data):bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?xe&&t.texSubImage2D(s.TEXTURE_2D,ve,0,0,Ae.width,Ae.height,Ce,qe,Ae.data):t.texImage2D(s.TEXTURE_2D,ve,Ke,Ae.width,Ae.height,0,Ce,qe,Ae.data)}else if(w.isDataArrayTexture)if(H){if(Ne&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Ke,Me.width,Me.height,Me.depth),xe)if(w.layerUpdates.size>0){const ve=ay(Me.width,Me.height,w.format,w.type);for(const ge of w.layerUpdates){const Pe=Me.data.subarray(ge*ve/Me.data.BYTES_PER_ELEMENT,(ge+1)*ve/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ge,Me.width,Me.height,1,Ce,qe,Pe)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Ce,qe,Me.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ke,Me.width,Me.height,Me.depth,0,Ce,qe,Me.data);else if(w.isData3DTexture)H?(Ne&&t.texStorage3D(s.TEXTURE_3D,Ie,Ke,Me.width,Me.height,Me.depth),xe&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Ce,qe,Me.data)):t.texImage3D(s.TEXTURE_3D,0,Ke,Me.width,Me.height,Me.depth,0,Ce,qe,Me.data);else if(w.isFramebufferTexture){if(Ne)if(H)t.texStorage2D(s.TEXTURE_2D,Ie,Ke,Me.width,Me.height);else{let ve=Me.width,ge=Me.height;for(let Pe=0;Pe<Ie;Pe++)t.texImage2D(s.TEXTURE_2D,Pe,Ke,ve,ge,0,Ce,qe,null),ve>>=1,ge>>=1}}else if(xt.length>0){if(H&&Ne){const ve=We(xt[0]);t.texStorage2D(s.TEXTURE_2D,Ie,Ke,ve.width,ve.height)}for(let ve=0,ge=xt.length;ve<ge;ve++)Ae=xt[ve],H?xe&&t.texSubImage2D(s.TEXTURE_2D,ve,0,0,Ce,qe,Ae):t.texImage2D(s.TEXTURE_2D,ve,Ke,Ce,qe,Ae);w.generateMipmaps=!1}else if(H){if(Ne){const ve=We(Me);t.texStorage2D(s.TEXTURE_2D,Ie,Ke,ve.width,ve.height)}xe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ce,qe,Me)}else t.texImage2D(s.TEXTURE_2D,0,Ke,Ce,qe,Me);x(w)&&y(pe),He.__version=de.version,w.onUpdate&&w.onUpdate(w)}F.__version=w.version}function ce(F,w,q){if(w.image.length!==6)return;const pe=Ee(F,w),me=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+q);const de=n.get(me);if(me.version!==de.__version||pe===!0){t.activeTexture(s.TEXTURE0+q);const He=Yt.getPrimaries(Yt.workingColorSpace),we=w.colorSpace===ho?null:Yt.getPrimaries(w.colorSpace),je=w.colorSpace===ho||He===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);const $e=w.isCompressedTexture||w.image[0].isCompressedTexture,Me=w.image[0]&&w.image[0].isDataTexture,Ce=[];for(let ge=0;ge<6;ge++)!$e&&!Me?Ce[ge]=M(w.image[ge],!0,r.maxCubemapSize):Ce[ge]=Me?w.image[ge].image:w.image[ge],Ce[ge]=ft(w,Ce[ge]);const qe=Ce[0],Ke=a.convert(w.format,w.colorSpace),Ae=a.convert(w.type),xt=D(w.internalFormat,Ke,Ae,w.colorSpace),H=w.isVideoTexture!==!0,Ne=de.__version===void 0||pe===!0,xe=me.dataReady;let Ie=R(w,qe);ee(s.TEXTURE_CUBE_MAP,w);let ve;if($e){H&&Ne&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,xt,qe.width,qe.height);for(let ge=0;ge<6;ge++){ve=Ce[ge].mipmaps;for(let Pe=0;Pe<ve.length;Pe++){const lt=ve[Pe];w.format!==zr?Ke!==null?H?xe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe,0,0,lt.width,lt.height,Ke,lt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe,xt,lt.width,lt.height,0,lt.data):bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe,0,0,lt.width,lt.height,Ke,Ae,lt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe,xt,lt.width,lt.height,0,Ke,Ae,lt.data)}}}else{if(ve=w.mipmaps,H&&Ne){ve.length>0&&Ie++;const ge=We(Ce[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,xt,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Me){H?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ce[ge].width,Ce[ge].height,Ke,Ae,Ce[ge].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,xt,Ce[ge].width,Ce[ge].height,0,Ke,Ae,Ce[ge].data);for(let Pe=0;Pe<ve.length;Pe++){const Bt=ve[Pe].image[ge].image;H?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe+1,0,0,Bt.width,Bt.height,Ke,Ae,Bt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe+1,xt,Bt.width,Bt.height,0,Ke,Ae,Bt.data)}}else{H?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ke,Ae,Ce[ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,xt,Ke,Ae,Ce[ge]);for(let Pe=0;Pe<ve.length;Pe++){const lt=ve[Pe];H?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe+1,0,0,Ke,Ae,lt.image[ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe+1,xt,Ke,Ae,lt.image[ge])}}}x(w)&&y(s.TEXTURE_CUBE_MAP),de.__version=me.version,w.onUpdate&&w.onUpdate(w)}F.__version=w.version}function _e(F,w,q,pe,me,de){const He=a.convert(q.format,q.colorSpace),we=a.convert(q.type),je=D(q.internalFormat,He,we,q.colorSpace),$e=n.get(w),Me=n.get(q);if(Me.__renderTarget=w,!$e.__hasExternalTextures){const Ce=Math.max(1,w.width>>de),qe=Math.max(1,w.height>>de);me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?t.texImage3D(me,de,je,Ce,qe,w.depth,0,He,we,null):t.texImage2D(me,de,je,Ce,qe,0,He,we,null)}t.bindFramebuffer(s.FRAMEBUFFER,F),Gt(w)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,me,Me.__webglTexture,0,W(w)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,me,Me.__webglTexture,de),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ue(F,w,q){if(s.bindRenderbuffer(s.RENDERBUFFER,F),w.depthBuffer){const pe=w.depthTexture,me=pe&&pe.isDepthTexture?pe.type:null,de=A(w.stencilBuffer,me),He=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Gt(w)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,W(w),de,w.width,w.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,W(w),de,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,de,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,He,s.RENDERBUFFER,F)}else{const pe=w.textures;for(let me=0;me<pe.length;me++){const de=pe[me],He=a.convert(de.format,de.colorSpace),we=a.convert(de.type),je=D(de.internalFormat,He,we,de.colorSpace);Gt(w)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,W(w),je,w.width,w.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,W(w),je,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,je,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Fe(F,w,q){const pe=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,F),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=n.get(w.depthTexture);if(me.__renderTarget=w,(!me.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),pe){if(me.__webglInit===void 0&&(me.__webglInit=!0,w.depthTexture.addEventListener("dispose",L)),me.__webglTexture===void 0){me.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),ee(s.TEXTURE_CUBE_MAP,w.depthTexture);const $e=a.convert(w.depthTexture.format),Me=a.convert(w.depthTexture.type);let Ce;w.depthTexture.format===Us?Ce=s.DEPTH_COMPONENT24:w.depthTexture.format===sa&&(Ce=s.DEPTH24_STENCIL8);for(let qe=0;qe<6;qe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+qe,0,Ce,w.width,w.height,0,$e,Me,null)}}else ne(w.depthTexture,0);const de=me.__webglTexture,He=W(w),we=pe?s.TEXTURE_CUBE_MAP_POSITIVE_X+q:s.TEXTURE_2D,je=w.depthTexture.format===sa?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(w.depthTexture.format===Us)Gt(w)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,je,we,de,0,He):s.framebufferTexture2D(s.FRAMEBUFFER,je,we,de,0);else if(w.depthTexture.format===sa)Gt(w)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,je,we,de,0,He):s.framebufferTexture2D(s.FRAMEBUFFER,je,we,de,0);else throw new Error("Unknown depthTexture format")}function mt(F){const w=n.get(F),q=F.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==F.depthTexture){const pe=F.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),pe){const me=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,pe.removeEventListener("dispose",me)};pe.addEventListener("dispose",me),w.__depthDisposeCallback=me}w.__boundDepthTexture=pe}if(F.depthTexture&&!w.__autoAllocateDepthBuffer)if(q)for(let pe=0;pe<6;pe++)Fe(w.__webglFramebuffer[pe],F,pe);else{const pe=F.texture.mipmaps;pe&&pe.length>0?Fe(w.__webglFramebuffer[0],F,0):Fe(w.__webglFramebuffer,F,0)}else if(q){w.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[pe]),w.__webglDepthbuffer[pe]===void 0)w.__webglDepthbuffer[pe]=s.createRenderbuffer(),Ue(w.__webglDepthbuffer[pe],F,!1);else{const me=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=w.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,de)}}else{const pe=F.texture.mipmaps;if(pe&&pe.length>0?t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),Ue(w.__webglDepthbuffer,F,!1);else{const me=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,de)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function kt(F,w,q){const pe=n.get(F);w!==void 0&&_e(pe.__webglFramebuffer,F,F.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&mt(F)}function Xe(F){const w=F.texture,q=n.get(F),pe=n.get(w);F.addEventListener("dispose",N);const me=F.textures,de=F.isWebGLCubeRenderTarget===!0,He=me.length>1;if(He||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=w.version,l.memory.textures++),de){q.__webglFramebuffer=[];for(let we=0;we<6;we++)if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer[we]=[];for(let je=0;je<w.mipmaps.length;je++)q.__webglFramebuffer[we][je]=s.createFramebuffer()}else q.__webglFramebuffer[we]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer=[];for(let we=0;we<w.mipmaps.length;we++)q.__webglFramebuffer[we]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(He)for(let we=0,je=me.length;we<je;we++){const $e=n.get(me[we]);$e.__webglTexture===void 0&&($e.__webglTexture=s.createTexture(),l.memory.textures++)}if(F.samples>0&&Gt(F)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let we=0;we<me.length;we++){const je=me[we];q.__webglColorRenderbuffer[we]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[we]);const $e=a.convert(je.format,je.colorSpace),Me=a.convert(je.type),Ce=D(je.internalFormat,$e,Me,je.colorSpace,F.isXRRenderTarget===!0),qe=W(F);s.renderbufferStorageMultisample(s.RENDERBUFFER,qe,Ce,F.width,F.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,q.__webglColorRenderbuffer[we])}s.bindRenderbuffer(s.RENDERBUFFER,null),F.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),Ue(q.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(de){t.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),ee(s.TEXTURE_CUBE_MAP,w);for(let we=0;we<6;we++)if(w.mipmaps&&w.mipmaps.length>0)for(let je=0;je<w.mipmaps.length;je++)_e(q.__webglFramebuffer[we][je],F,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,je);else _e(q.__webglFramebuffer[we],F,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);x(w)&&y(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(He){for(let we=0,je=me.length;we<je;we++){const $e=me[we],Me=n.get($e);let Ce=s.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ce=F.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ce,Me.__webglTexture),ee(Ce,$e),_e(q.__webglFramebuffer,F,$e,s.COLOR_ATTACHMENT0+we,Ce,0),x($e)&&y(Ce)}t.unbindTexture()}else{let we=s.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(we=F.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(we,pe.__webglTexture),ee(we,w),w.mipmaps&&w.mipmaps.length>0)for(let je=0;je<w.mipmaps.length;je++)_e(q.__webglFramebuffer[je],F,w,s.COLOR_ATTACHMENT0,we,je);else _e(q.__webglFramebuffer,F,w,s.COLOR_ATTACHMENT0,we,0);x(w)&&y(we),t.unbindTexture()}F.depthBuffer&&mt(F)}function dt(F){const w=F.textures;for(let q=0,pe=w.length;q<pe;q++){const me=w[q];if(x(me)){const de=P(F),He=n.get(me).__webglTexture;t.bindTexture(de,He),y(de),t.unbindTexture()}}}const Tt=[],ct=[];function oe(F){if(F.samples>0){if(Gt(F)===!1){const w=F.textures,q=F.width,pe=F.height;let me=s.COLOR_BUFFER_BIT;const de=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,He=n.get(F),we=w.length>1;if(we)for(let $e=0;$e<w.length;$e++)t.bindFramebuffer(s.FRAMEBUFFER,He.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,He.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer);const je=F.texture.mipmaps;je&&je.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let $e=0;$e<w.length;$e++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),we){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,He.__webglColorRenderbuffer[$e]);const Me=n.get(w[$e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Me,0)}s.blitFramebuffer(0,0,q,pe,0,0,q,pe,me,s.NEAREST),f===!0&&(Tt.length=0,ct.length=0,Tt.push(s.COLOR_ATTACHMENT0+$e),F.depthBuffer&&F.resolveDepthBuffer===!1&&(Tt.push(de),ct.push(de),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ct)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Tt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),we)for(let $e=0;$e<w.length;$e++){t.bindFramebuffer(s.FRAMEBUFFER,He.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.RENDERBUFFER,He.__webglColorRenderbuffer[$e]);const Me=n.get(w[$e]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,He.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.TEXTURE_2D,Me,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&f){const w=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function W(F){return Math.min(r.maxSamples,F.samples)}function Gt(F){const w=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function wt(F){const w=l.render.frame;p.get(F)!==w&&(p.set(F,w),F.update())}function ft(F,w){const q=F.colorSpace,pe=F.format,me=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||q!==Ll&&q!==ho&&(Yt.getTransfer(q)===rn?(pe!==zr||me!==Mr)&&bt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Kt("WebGLTextures: Unsupported texture color space:",q)),w}function We(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(h.width=F.naturalWidth||F.width,h.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(h.width=F.displayWidth,h.height=F.displayHeight):(h.width=F.width,h.height=F.height),h}this.allocateTextureUnit=G,this.resetTextureUnits=z,this.setTexture2D=ne,this.setTexture2DArray=Z,this.setTexture3D=Y,this.setTextureCube=X,this.rebindTextures=kt,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Gt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function GP(s,e){function t(n,r=ho){let a;const l=Yt.getTransfer(r);if(n===Mr)return s.UNSIGNED_BYTE;if(n===s0)return s.UNSIGNED_SHORT_4_4_4_4;if(n===o0)return s.UNSIGNED_SHORT_5_5_5_1;if(n===v1)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===x1)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===g1)return s.BYTE;if(n===_1)return s.SHORT;if(n===ic)return s.UNSIGNED_SHORT;if(n===r0)return s.INT;if(n===as)return s.UNSIGNED_INT;if(n===es)return s.FLOAT;if(n===Ns)return s.HALF_FLOAT;if(n===y1)return s.ALPHA;if(n===S1)return s.RGB;if(n===zr)return s.RGBA;if(n===Us)return s.DEPTH_COMPONENT;if(n===sa)return s.DEPTH_STENCIL;if(n===M1)return s.RED;if(n===a0)return s.RED_INTEGER;if(n===Dl)return s.RG;if(n===l0)return s.RG_INTEGER;if(n===u0)return s.RGBA_INTEGER;if(n===od||n===ad||n===ld||n===ud)if(l===rn)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===od)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ad)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ld)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ud)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===od)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ad)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ld)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ud)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$m||n===Km||n===Zm||n===Qm)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===$m)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Km)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qm)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jm||n===eg||n===tg||n===ng||n===ig||n===rg||n===sg)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Jm||n===eg)return l===rn?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===tg)return l===rn?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===ng)return a.COMPRESSED_R11_EAC;if(n===ig)return a.COMPRESSED_SIGNED_R11_EAC;if(n===rg)return a.COMPRESSED_RG11_EAC;if(n===sg)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===og||n===ag||n===lg||n===ug||n===cg||n===fg||n===dg||n===hg||n===pg||n===mg||n===gg||n===_g||n===vg||n===xg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===og)return l===rn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ag)return l===rn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===lg)return l===rn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ug)return l===rn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===cg)return l===rn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fg)return l===rn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===dg)return l===rn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===hg)return l===rn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pg)return l===rn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===mg)return l===rn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===gg)return l===rn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_g)return l===rn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vg)return l===rn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xg)return l===rn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yg||n===Sg||n===Mg)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===yg)return l===rn?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sg)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Mg)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Eg||n===Tg||n===wg||n===Ag)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Eg)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Tg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wg)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ag)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rc?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const WP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XP=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class jP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new U1(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Br({vertexShader:WP,fragmentShader:XP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ls(new hc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class YP extends Nl{constructor(e,t){super();const n=this;let r=null,a=1,l=null,c="local-floor",f=1,h=null,p=null,m=null,g=null,v=null,E=null;const M=typeof XRWebGLBinding<"u",x=new jP,y={},P=t.getContextAttributes();let D=null,A=null;const R=[],L=[],N=new tn;let k=null;const T=new Or;T.viewport=new Dn;const b=new Or;b.viewport=new Dn;const V=[T,b],z=new ib;let G=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let ce=R[se];return ce===void 0&&(ce=new em,R[se]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(se){let ce=R[se];return ce===void 0&&(ce=new em,R[se]=ce),ce.getGripSpace()},this.getHand=function(se){let ce=R[se];return ce===void 0&&(ce=new em,R[se]=ce),ce.getHandSpace()};function ne(se){const ce=L.indexOf(se.inputSource);if(ce===-1)return;const _e=R[ce];_e!==void 0&&(_e.update(se.inputSource,se.frame,h||l),_e.dispatchEvent({type:se.type,data:se.inputSource}))}function Z(){r.removeEventListener("select",ne),r.removeEventListener("selectstart",ne),r.removeEventListener("selectend",ne),r.removeEventListener("squeeze",ne),r.removeEventListener("squeezestart",ne),r.removeEventListener("squeezeend",ne),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",Y);for(let se=0;se<R.length;se++){const ce=L[se];ce!==null&&(L[se]=null,R[se].disconnect(ce))}G=null,Q=null,x.reset();for(const se in y)delete y[se];e.setRenderTarget(D),v=null,g=null,m=null,r=null,A=null,Oe.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){a=se,n.isPresenting===!0&&bt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){c=se,n.isPresenting===!0&&bt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||l},this.setReferenceSpace=function(se){h=se},this.getBaseLayer=function(){return g!==null?g:v},this.getBinding=function(){return m===null&&M&&(m=new XRWebGLBinding(r,t)),m},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function(se){if(r=se,r!==null){if(D=e.getRenderTarget(),r.addEventListener("select",ne),r.addEventListener("selectstart",ne),r.addEventListener("selectend",ne),r.addEventListener("squeeze",ne),r.addEventListener("squeezestart",ne),r.addEventListener("squeezeend",ne),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",Y),P.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(N),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Ue=null,Fe=null;P.depth&&(Fe=P.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=P.stencil?sa:Us,Ue=P.stencil?rc:as);const mt={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:a};m=this.getBinding(),g=m.createProjectionLayer(mt),r.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),A=new rs(g.textureWidth,g.textureHeight,{format:zr,type:Mr,depthTexture:new ac(g.textureWidth,g.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const _e={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:a};v=new XRWebGLLayer(r,t,_e),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),A=new rs(v.framebufferWidth,v.framebufferHeight,{format:zr,type:Mr,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(f),h=null,l=await r.requestReferenceSpace(c),Oe.setContext(r),Oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Y(se){for(let ce=0;ce<se.removed.length;ce++){const _e=se.removed[ce],Ue=L.indexOf(_e);Ue>=0&&(L[Ue]=null,R[Ue].disconnect(_e))}for(let ce=0;ce<se.added.length;ce++){const _e=se.added[ce];let Ue=L.indexOf(_e);if(Ue===-1){for(let mt=0;mt<R.length;mt++)if(mt>=L.length){L.push(_e),Ue=mt;break}else if(L[mt]===null){L[mt]=_e,Ue=mt;break}if(Ue===-1)break}const Fe=R[Ue];Fe&&Fe.connect(_e)}}const X=new he,re=new he;function U(se,ce,_e){X.setFromMatrixPosition(ce.matrixWorld),re.setFromMatrixPosition(_e.matrixWorld);const Ue=X.distanceTo(re),Fe=ce.projectionMatrix.elements,mt=_e.projectionMatrix.elements,kt=Fe[14]/(Fe[10]-1),Xe=Fe[14]/(Fe[10]+1),dt=(Fe[9]+1)/Fe[5],Tt=(Fe[9]-1)/Fe[5],ct=(Fe[8]-1)/Fe[0],oe=(mt[8]+1)/mt[0],W=kt*ct,Gt=kt*oe,wt=Ue/(-ct+oe),ft=wt*-ct;if(ce.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(ft),se.translateZ(wt),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),Fe[10]===-1)se.projectionMatrix.copy(ce.projectionMatrix),se.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const We=kt+wt,F=Xe+wt,w=W-ft,q=Gt+(Ue-ft),pe=dt*Xe/F*We,me=Tt*Xe/F*We;se.projectionMatrix.makePerspective(w,q,pe,me,We,F),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function O(se,ce){ce===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(ce.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(r===null)return;let ce=se.near,_e=se.far;x.texture!==null&&(x.depthNear>0&&(ce=x.depthNear),x.depthFar>0&&(_e=x.depthFar)),z.near=b.near=T.near=ce,z.far=b.far=T.far=_e,(G!==z.near||Q!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),G=z.near,Q=z.far),z.layers.mask=se.layers.mask|6,T.layers.mask=z.layers.mask&3,b.layers.mask=z.layers.mask&5;const Ue=se.parent,Fe=z.cameras;O(z,Ue);for(let mt=0;mt<Fe.length;mt++)O(Fe[mt],Ue);Fe.length===2?U(z,T,b):z.projectionMatrix.copy(T.projectionMatrix),ee(se,z,Ue)};function ee(se,ce,_e){_e===null?se.matrix.copy(ce.matrixWorld):(se.matrix.copy(_e.matrixWorld),se.matrix.invert(),se.matrix.multiply(ce.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(ce.projectionMatrix),se.projectionMatrixInverse.copy(ce.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=bg*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(g===null&&v===null))return f},this.setFoveation=function(se){f=se,g!==null&&(g.fixedFoveation=se),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=se)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(z)},this.getCameraTexture=function(se){return y[se]};let Ee=null;function be(se,ce){if(p=ce.getViewerPose(h||l),E=ce,p!==null){const _e=p.views;v!==null&&(e.setRenderTargetFramebuffer(A,v.framebuffer),e.setRenderTarget(A));let Ue=!1;_e.length!==z.cameras.length&&(z.cameras.length=0,Ue=!0);for(let Xe=0;Xe<_e.length;Xe++){const dt=_e[Xe];let Tt=null;if(v!==null)Tt=v.getViewport(dt);else{const oe=m.getViewSubImage(g,dt);Tt=oe.viewport,Xe===0&&(e.setRenderTargetTextures(A,oe.colorTexture,oe.depthStencilTexture),e.setRenderTarget(A))}let ct=V[Xe];ct===void 0&&(ct=new Or,ct.layers.enable(Xe),ct.viewport=new Dn,V[Xe]=ct),ct.matrix.fromArray(dt.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(dt.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),Xe===0&&(z.matrix.copy(ct.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ue===!0&&z.cameras.push(ct)}const Fe=r.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){m=n.getBinding();const Xe=m.getDepthInformation(_e[0]);Xe&&Xe.isValid&&Xe.texture&&x.init(Xe,r.renderState)}if(Fe&&Fe.includes("camera-access")&&M){e.state.unbindTexture(),m=n.getBinding();for(let Xe=0;Xe<_e.length;Xe++){const dt=_e[Xe].camera;if(dt){let Tt=y[dt];Tt||(Tt=new U1,y[dt]=Tt);const ct=m.getCameraImage(dt);Tt.sourceTexture=ct}}}}for(let _e=0;_e<R.length;_e++){const Ue=L[_e],Fe=R[_e];Ue!==null&&Fe!==void 0&&Fe.update(Ue,ce,h||l)}Ee&&Ee(se,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),E=null}const Oe=new F1;Oe.setAnimationLoop(be),this.setAnimationLoop=function(se){Ee=se},this.dispose=function(){}}}const $o=new Fs,qP=new On;function $P(s,e){function t(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function n(x,y){y.color.getRGB(x.fogColor.value,P1(s)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function r(x,y,P,D,A){y.isMeshBasicMaterial||y.isMeshLambertMaterial?a(x,y):y.isMeshToonMaterial?(a(x,y),m(x,y)):y.isMeshPhongMaterial?(a(x,y),p(x,y)):y.isMeshStandardMaterial?(a(x,y),g(x,y),y.isMeshPhysicalMaterial&&v(x,y,A)):y.isMeshMatcapMaterial?(a(x,y),E(x,y)):y.isMeshDepthMaterial?a(x,y):y.isMeshDistanceMaterial?(a(x,y),M(x,y)):y.isMeshNormalMaterial?a(x,y):y.isLineBasicMaterial?(l(x,y),y.isLineDashedMaterial&&c(x,y)):y.isPointsMaterial?f(x,y,P,D):y.isSpriteMaterial?h(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function a(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,t(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===ji&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,t(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===ji&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,t(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,t(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const P=e.get(y),D=P.envMap,A=P.envMapRotation;D&&(x.envMap.value=D,$o.copy(A),$o.x*=-1,$o.y*=-1,$o.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&($o.y*=-1,$o.z*=-1),x.envMapRotation.value.setFromMatrix4(qP.makeRotationFromEuler($o)),x.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap&&(x.lightMap.value=y.lightMap,x.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,x.lightMapTransform)),y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,x.aoMapTransform))}function l(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform))}function c(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function f(x,y,P,D){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*P,x.scale.value=D*.5,y.map&&(x.map.value=y.map,t(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function h(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function p(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function m(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function g(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,x.roughnessMapTransform)),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function v(x,y,P){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ji&&x.clearcoatNormalScale.value.negate())),y.dispersion>0&&(x.dispersion.value=y.dispersion),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=P.texture,x.transmissionSamplerSize.value.set(P.width,P.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,y){y.matcap&&(x.matcap.value=y.matcap)}function M(x,y){const P=e.get(y).light;x.referencePosition.value.setFromMatrixPosition(P.matrixWorld),x.nearDistance.value=P.shadow.camera.near,x.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function KP(s,e,t,n){let r={},a={},l=[];const c=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function f(P,D){const A=D.program;n.uniformBlockBinding(P,A)}function h(P,D){let A=r[P.id];A===void 0&&(E(P),A=p(P),r[P.id]=A,P.addEventListener("dispose",x));const R=D.program;n.updateUBOMapping(P,R);const L=e.render.frame;a[P.id]!==L&&(g(P),a[P.id]=L)}function p(P){const D=m();P.__bindingPointIndex=D;const A=s.createBuffer(),R=P.__size,L=P.usage;return s.bindBuffer(s.UNIFORM_BUFFER,A),s.bufferData(s.UNIFORM_BUFFER,R,L),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,A),A}function m(){for(let P=0;P<c;P++)if(l.indexOf(P)===-1)return l.push(P),P;return Kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(P){const D=r[P.id],A=P.uniforms,R=P.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let L=0,N=A.length;L<N;L++){const k=Array.isArray(A[L])?A[L]:[A[L]];for(let T=0,b=k.length;T<b;T++){const V=k[T];if(v(V,L,T,R)===!0){const z=V.__offset,G=Array.isArray(V.value)?V.value:[V.value];let Q=0;for(let ne=0;ne<G.length;ne++){const Z=G[ne],Y=M(Z);typeof Z=="number"||typeof Z=="boolean"?(V.__data[0]=Z,s.bufferSubData(s.UNIFORM_BUFFER,z+Q,V.__data)):Z.isMatrix3?(V.__data[0]=Z.elements[0],V.__data[1]=Z.elements[1],V.__data[2]=Z.elements[2],V.__data[3]=0,V.__data[4]=Z.elements[3],V.__data[5]=Z.elements[4],V.__data[6]=Z.elements[5],V.__data[7]=0,V.__data[8]=Z.elements[6],V.__data[9]=Z.elements[7],V.__data[10]=Z.elements[8],V.__data[11]=0):(Z.toArray(V.__data,Q),Q+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function v(P,D,A,R){const L=P.value,N=D+"_"+A;if(R[N]===void 0)return typeof L=="number"||typeof L=="boolean"?R[N]=L:R[N]=L.clone(),!0;{const k=R[N];if(typeof L=="number"||typeof L=="boolean"){if(k!==L)return R[N]=L,!0}else if(k.equals(L)===!1)return k.copy(L),!0}return!1}function E(P){const D=P.uniforms;let A=0;const R=16;for(let N=0,k=D.length;N<k;N++){const T=Array.isArray(D[N])?D[N]:[D[N]];for(let b=0,V=T.length;b<V;b++){const z=T[b],G=Array.isArray(z.value)?z.value:[z.value];for(let Q=0,ne=G.length;Q<ne;Q++){const Z=G[Q],Y=M(Z),X=A%R,re=X%Y.boundary,U=X+re;A+=re,U!==0&&R-U<Y.storage&&(A+=R-U),z.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=A,A+=Y.storage}}}const L=A%R;return L>0&&(A+=R-L),P.__size=A,P.__cache={},this}function M(P){const D={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(D.boundary=4,D.storage=4):P.isVector2?(D.boundary=8,D.storage=8):P.isVector3||P.isColor?(D.boundary=16,D.storage=12):P.isVector4?(D.boundary=16,D.storage=16):P.isMatrix3?(D.boundary=48,D.storage=48):P.isMatrix4?(D.boundary=64,D.storage=64):P.isTexture?bt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):bt("WebGLRenderer: Unsupported uniform value type.",P),D}function x(P){const D=P.target;D.removeEventListener("dispose",x);const A=l.indexOf(D.__bindingPointIndex);l.splice(A,1),s.deleteBuffer(r[D.id]),delete r[D.id],delete a[D.id]}function y(){for(const P in r)s.deleteBuffer(r[P]);l=[],r={},a={}}return{bind:f,update:h,dispose:y}}const ZP=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Yr=null;function QP(){return Yr===null&&(Yr=new XA(ZP,16,16,Dl,Ns),Yr.name="DFG_LUT",Yr.minFilter=xi,Yr.magFilter=xi,Yr.wrapS=bs,Yr.wrapT=bs,Yr.generateMipmaps=!1,Yr.needsUpdate=!0),Yr}class JP{constructor(e={}){const{canvas:t=_A(),context:n=null,depth:r=!0,stencil:a=!1,alpha:l=!1,antialias:c=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:g=!1,outputBufferType:v=Mr}=e;this.isWebGLRenderer=!0;let E;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=n.getContextAttributes().alpha}else E=l;const M=v,x=new Set([u0,l0,a0]),y=new Set([Mr,as,ic,rc,s0,o0]),P=new Uint32Array(4),D=new Int32Array(4);let A=null,R=null;const L=[],N=[];let k=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=is,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let b=!1;this._outputColorSpace=Vi;let V=0,z=0,G=null,Q=-1,ne=null;const Z=new Dn,Y=new Dn;let X=null;const re=new on(0);let U=0,O=t.width,ee=t.height,Ee=1,be=null,Oe=null;const se=new Dn(0,0,O,ee),ce=new Dn(0,0,O,ee);let _e=!1;const Ue=new N1;let Fe=!1,mt=!1;const kt=new On,Xe=new he,dt=new Dn,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function oe(){return G===null?Ee:1}let W=n;function Gt(I,K){return t.getContext(I,K)}try{const I={alpha:!0,depth:r,stencil:a,antialias:c,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${i0}`),t.addEventListener("webglcontextlost",lt,!1),t.addEventListener("webglcontextrestored",Bt,!1),t.addEventListener("webglcontextcreationerror",Be,!1),W===null){const K="webgl2";if(W=Gt(K,I),W===null)throw Gt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw Kt("WebGLRenderer: "+I.message),I}let wt,ft,We,F,w,q,pe,me,de,He,we,je,$e,Me,Ce,qe,Ke,Ae,xt,H,Ne,xe,Ie,ve;function ge(){wt=new QR(W),wt.init(),xe=new GP(W,wt),ft=new GR(W,wt,e,xe),We=new VP(W,wt),ft.reversedDepthBuffer&&g&&We.buffers.depth.setReversed(!0),F=new t2(W),w=new AP,q=new HP(W,wt,We,w,ft,xe,F),pe=new XR(T),me=new ZR(T),de=new sb(W),Ie=new VR(W,de),He=new JR(W,de,F,Ie),we=new i2(W,He,de,F),xt=new n2(W,ft,q),qe=new WR(w),je=new wP(T,pe,me,wt,ft,Ie,qe),$e=new $P(T,w),Me=new CP,Ce=new NP(wt),Ae=new BR(T,pe,me,We,we,E,f),Ke=new zP(T,we,ft),ve=new KP(W,F,ft,We),H=new HR(W,wt,F),Ne=new e2(W,wt,F),F.programs=je.programs,T.capabilities=ft,T.extensions=wt,T.properties=w,T.renderLists=Me,T.shadowMap=Ke,T.state=We,T.info=F}ge(),M!==Mr&&(k=new s2(M,t.width,t.height,r,a));const Pe=new YP(T,W);this.xr=Pe,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const I=wt.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=wt.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return Ee},this.setPixelRatio=function(I){I!==void 0&&(Ee=I,this.setSize(O,ee,!1))},this.getSize=function(I){return I.set(O,ee)},this.setSize=function(I,K,ue=!0){if(Pe.isPresenting){bt("WebGLRenderer: Can't change size while VR device is presenting.");return}O=I,ee=K,t.width=Math.floor(I*Ee),t.height=Math.floor(K*Ee),ue===!0&&(t.style.width=I+"px",t.style.height=K+"px"),k!==null&&k.setSize(t.width,t.height),this.setViewport(0,0,I,K)},this.getDrawingBufferSize=function(I){return I.set(O*Ee,ee*Ee).floor()},this.setDrawingBufferSize=function(I,K,ue){O=I,ee=K,Ee=ue,t.width=Math.floor(I*ue),t.height=Math.floor(K*ue),this.setViewport(0,0,I,K)},this.setEffects=function(I){if(M===Mr){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let K=0;K<I.length;K++)if(I[K].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(Z)},this.getViewport=function(I){return I.copy(se)},this.setViewport=function(I,K,ue,le){I.isVector4?se.set(I.x,I.y,I.z,I.w):se.set(I,K,ue,le),We.viewport(Z.copy(se).multiplyScalar(Ee).round())},this.getScissor=function(I){return I.copy(ce)},this.setScissor=function(I,K,ue,le){I.isVector4?ce.set(I.x,I.y,I.z,I.w):ce.set(I,K,ue,le),We.scissor(Y.copy(ce).multiplyScalar(Ee).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(I){We.setScissorTest(_e=I)},this.setOpaqueSort=function(I){be=I},this.setTransparentSort=function(I){Oe=I},this.getClearColor=function(I){return I.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(I=!0,K=!0,ue=!0){let le=0;if(I){let te=!1;if(G!==null){const Re=G.texture.format;te=x.has(Re)}if(te){const Re=G.texture.type,ze=y.has(Re),De=Ae.getClearColor(),Ge=Ae.getClearAlpha(),Qe=De.r,St=De.g,ht=De.b;ze?(P[0]=Qe,P[1]=St,P[2]=ht,P[3]=Ge,W.clearBufferuiv(W.COLOR,0,P)):(D[0]=Qe,D[1]=St,D[2]=ht,D[3]=Ge,W.clearBufferiv(W.COLOR,0,D))}else le|=W.COLOR_BUFFER_BIT}K&&(le|=W.DEPTH_BUFFER_BIT),ue&&(le|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",lt,!1),t.removeEventListener("webglcontextrestored",Bt,!1),t.removeEventListener("webglcontextcreationerror",Be,!1),Ae.dispose(),Me.dispose(),Ce.dispose(),w.dispose(),pe.dispose(),me.dispose(),we.dispose(),Ie.dispose(),ve.dispose(),je.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",fn),Pe.removeEventListener("sessionend",Ct),Wt.stop()};function lt(I){I.preventDefault(),Wx("WebGLRenderer: Context Lost."),b=!0}function Bt(){Wx("WebGLRenderer: Context Restored."),b=!1;const I=F.autoReset,K=Ke.enabled,ue=Ke.autoUpdate,le=Ke.needsUpdate,te=Ke.type;ge(),F.autoReset=I,Ke.enabled=K,Ke.autoUpdate=ue,Ke.needsUpdate=le,Ke.type=te}function Be(I){Kt("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function it(I){const K=I.target;K.removeEventListener("dispose",it),Mt(K)}function Mt(I){ke(I),w.remove(I)}function ke(I){const K=w.get(I).programs;K!==void 0&&(K.forEach(function(ue){je.releaseProgram(ue)}),I.isShaderMaterial&&je.releaseShaderCache(I))}this.renderBufferDirect=function(I,K,ue,le,te,Re){K===null&&(K=Tt);const ze=te.isMesh&&te.matrixWorld.determinant()<0,De=Tn(I,K,ue,le,te);We.setMaterial(le,ze);let Ge=ue.index,Qe=1;if(le.wireframe===!0){if(Ge=He.getWireframeAttribute(ue),Ge===void 0)return;Qe=2}const St=ue.drawRange,ht=ue.attributes.position;let Lt=St.start*Qe,Xt=(St.start+St.count)*Qe;Re!==null&&(Lt=Math.max(Lt,Re.start*Qe),Xt=Math.min(Xt,(Re.start+Re.count)*Qe)),Ge!==null?(Lt=Math.max(Lt,0),Xt=Math.min(Xt,Ge.count)):ht!=null&&(Lt=Math.max(Lt,0),Xt=Math.min(Xt,ht.count));const ln=Xt-Lt;if(ln<0||ln===1/0)return;Ie.setup(te,le,De,ue,Ge);let sn,qt=H;if(Ge!==null&&(sn=de.get(Ge),qt=Ne,qt.setIndex(sn)),te.isMesh)le.wireframe===!0?(We.setLineWidth(le.wireframeLinewidth*oe()),qt.setMode(W.LINES)):qt.setMode(W.TRIANGLES);else if(te.isLine){let pt=le.linewidth;pt===void 0&&(pt=1),We.setLineWidth(pt*oe()),te.isLineSegments?qt.setMode(W.LINES):te.isLineLoop?qt.setMode(W.LINE_LOOP):qt.setMode(W.LINE_STRIP)}else te.isPoints?qt.setMode(W.POINTS):te.isSprite&&qt.setMode(W.TRIANGLES);if(te.isBatchedMesh)if(te._multiDrawInstances!==null)oc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),qt.renderMultiDrawInstances(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount,te._multiDrawInstances);else if(wt.get("WEBGL_multi_draw"))qt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const pt=te._multiDrawStarts,Qt=te._multiDrawCounts,zt=te._multiDrawCount,li=Ge?de.get(Ge).bytesPerElement:1,Vr=w.get(le).currentProgram.getUniforms();for(let kn=0;kn<zt;kn++)Vr.setValue(W,"_gl_DrawID",kn),qt.render(pt[kn]/li,Qt[kn])}else if(te.isInstancedMesh)qt.renderInstances(Lt,ln,te.count);else if(ue.isInstancedBufferGeometry){const pt=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Qt=Math.min(ue.instanceCount,pt);qt.renderInstances(Lt,ln,Qt)}else qt.render(Lt,ln)};function gt(I,K,ue){I.transparent===!0&&I.side===ws&&I.forceSinglePass===!1?(I.side=ji,I.needsUpdate=!0,Zt(I,K,ue),I.side=bo,I.needsUpdate=!0,Zt(I,K,ue),I.side=ws):Zt(I,K,ue)}this.compile=function(I,K,ue=null){ue===null&&(ue=I),R=Ce.get(ue),R.init(K),N.push(R),ue.traverseVisible(function(te){te.isLight&&te.layers.test(K.layers)&&(R.pushLight(te),te.castShadow&&R.pushShadow(te))}),I!==ue&&I.traverseVisible(function(te){te.isLight&&te.layers.test(K.layers)&&(R.pushLight(te),te.castShadow&&R.pushShadow(te))}),R.setupLights();const le=new Set;return I.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const Re=te.material;if(Re)if(Array.isArray(Re))for(let ze=0;ze<Re.length;ze++){const De=Re[ze];gt(De,ue,te),le.add(De)}else gt(Re,ue,te),le.add(Re)}),R=N.pop(),le},this.compileAsync=function(I,K,ue=null){const le=this.compile(I,K,ue);return new Promise(te=>{function Re(){if(le.forEach(function(ze){w.get(ze).currentProgram.isReady()&&le.delete(ze)}),le.size===0){te(I);return}setTimeout(Re,10)}wt.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let at=null;function yt(I){at&&at(I)}function fn(){Wt.stop()}function Ct(){Wt.start()}const Wt=new F1;Wt.setAnimationLoop(yt),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(I){at=I,Pe.setAnimationLoop(I),I===null?Wt.stop():Wt.start()},Pe.addEventListener("sessionstart",fn),Pe.addEventListener("sessionend",Ct),this.render=function(I,K){if(K!==void 0&&K.isCamera!==!0){Kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;const ue=Pe.enabled===!0&&Pe.isPresenting===!0,le=k!==null&&(G===null||ue)&&k.begin(T,G);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(K),K=Pe.getCamera()),I.isScene===!0&&I.onBeforeRender(T,I,K,G),R=Ce.get(I,N.length),R.init(K),N.push(R),kt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Ue.setFromProjectionMatrix(kt,ts,K.reversedDepth),mt=this.localClippingEnabled,Fe=qe.init(this.clippingPlanes,mt),A=Me.get(I,L.length),A.init(),L.push(A),Pe.enabled===!0&&Pe.isPresenting===!0){const ze=T.xr.getDepthSensingMesh();ze!==null&&En(ze,K,-1/0,T.sortObjects)}En(I,K,0,T.sortObjects),A.finish(),T.sortObjects===!0&&A.sort(be,Oe),ct=Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1,ct&&Ae.addToRenderList(A,I),this.info.render.frame++,Fe===!0&&qe.beginShadows();const te=R.state.shadowsArray;if(Ke.render(te,I,K),Fe===!0&&qe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(le&&k.hasRenderPass())===!1){const ze=A.opaque,De=A.transmissive;if(R.setupLights(),K.isArrayCamera){const Ge=K.cameras;if(De.length>0)for(let Qe=0,St=Ge.length;Qe<St;Qe++){const ht=Ge[Qe];nn(ze,De,I,ht)}ct&&Ae.render(I);for(let Qe=0,St=Ge.length;Qe<St;Qe++){const ht=Ge[Qe];an(A,I,ht,ht.viewport)}}else De.length>0&&nn(ze,De,I,K),ct&&Ae.render(I),an(A,I,K)}G!==null&&z===0&&(q.updateMultisampleRenderTarget(G),q.updateRenderTargetMipmap(G)),le&&k.end(T),I.isScene===!0&&I.onAfterRender(T,I,K),Ie.resetDefaultState(),Q=-1,ne=null,N.pop(),N.length>0?(R=N[N.length-1],Fe===!0&&qe.setGlobalState(T.clippingPlanes,R.state.camera)):R=null,L.pop(),L.length>0?A=L[L.length-1]:A=null};function En(I,K,ue,le){if(I.visible===!1)return;if(I.layers.test(K.layers)){if(I.isGroup)ue=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(K);else if(I.isLight)R.pushLight(I),I.castShadow&&R.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||Ue.intersectsSprite(I)){le&&dt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(kt);const ze=we.update(I),De=I.material;De.visible&&A.push(I,ze,De,ue,dt.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||Ue.intersectsObject(I))){const ze=we.update(I),De=I.material;if(le&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),dt.copy(I.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),dt.copy(ze.boundingSphere.center)),dt.applyMatrix4(I.matrixWorld).applyMatrix4(kt)),Array.isArray(De)){const Ge=ze.groups;for(let Qe=0,St=Ge.length;Qe<St;Qe++){const ht=Ge[Qe],Lt=De[ht.materialIndex];Lt&&Lt.visible&&A.push(I,ze,Lt,ue,dt.z,ht)}}else De.visible&&A.push(I,ze,De,ue,dt.z,null)}}const Re=I.children;for(let ze=0,De=Re.length;ze<De;ze++)En(Re[ze],K,ue,le)}function an(I,K,ue,le){const{opaque:te,transmissive:Re,transparent:ze}=I;R.setupLightsView(ue),Fe===!0&&qe.setGlobalState(T.clippingPlanes,ue),le&&We.viewport(Z.copy(le)),te.length>0&&Pt(te,K,ue),Re.length>0&&Pt(Re,K,ue),ze.length>0&&Pt(ze,K,ue),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function nn(I,K,ue,le){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[le.id]===void 0){const Lt=wt.has("EXT_color_buffer_half_float")||wt.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[le.id]=new rs(1,1,{generateMipmaps:!0,type:Lt?Ns:Mr,minFilter:ra,samples:ft.samples,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace})}const Re=R.state.transmissionRenderTarget[le.id],ze=le.viewport||Z;Re.setSize(ze.z*T.transmissionResolutionScale,ze.w*T.transmissionResolutionScale);const De=T.getRenderTarget(),Ge=T.getActiveCubeFace(),Qe=T.getActiveMipmapLevel();T.setRenderTarget(Re),T.getClearColor(re),U=T.getClearAlpha(),U<1&&T.setClearColor(16777215,.5),T.clear(),ct&&Ae.render(ue);const St=T.toneMapping;T.toneMapping=is;const ht=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),R.setupLightsView(le),Fe===!0&&qe.setGlobalState(T.clippingPlanes,le),Pt(I,ue,le),q.updateMultisampleRenderTarget(Re),q.updateRenderTargetMipmap(Re),wt.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let Xt=0,ln=K.length;Xt<ln;Xt++){const sn=K[Xt],{object:qt,geometry:pt,material:Qt,group:zt}=sn;if(Qt.side===ws&&qt.layers.test(le.layers)){const li=Qt.side;Qt.side=ji,Qt.needsUpdate=!0,ti(qt,ue,le,pt,Qt,zt),Qt.side=li,Qt.needsUpdate=!0,Lt=!0}}Lt===!0&&(q.updateMultisampleRenderTarget(Re),q.updateRenderTargetMipmap(Re))}T.setRenderTarget(De,Ge,Qe),T.setClearColor(re,U),ht!==void 0&&(le.viewport=ht),T.toneMapping=St}function Pt(I,K,ue){const le=K.isScene===!0?K.overrideMaterial:null;for(let te=0,Re=I.length;te<Re;te++){const ze=I[te],{object:De,geometry:Ge,group:Qe}=ze;let St=ze.material;St.allowOverride===!0&&le!==null&&(St=le),De.layers.test(ue.layers)&&ti(De,K,ue,Ge,St,Qe)}}function ti(I,K,ue,le,te,Re){I.onBeforeRender(T,K,ue,le,te,Re),I.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),te.onBeforeRender(T,K,ue,le,I,Re),te.transparent===!0&&te.side===ws&&te.forceSinglePass===!1?(te.side=ji,te.needsUpdate=!0,T.renderBufferDirect(ue,K,le,te,I,Re),te.side=bo,te.needsUpdate=!0,T.renderBufferDirect(ue,K,le,te,I,Re),te.side=ws):T.renderBufferDirect(ue,K,le,te,I,Re),I.onAfterRender(T,K,ue,le,te,Re)}function Zt(I,K,ue){K.isScene!==!0&&(K=Tt);const le=w.get(I),te=R.state.lights,Re=R.state.shadowsArray,ze=te.state.version,De=je.getParameters(I,te.state,Re,K,ue),Ge=je.getProgramCacheKey(De);let Qe=le.programs;le.environment=I.isMeshStandardMaterial?K.environment:null,le.fog=K.fog,le.envMap=(I.isMeshStandardMaterial?me:pe).get(I.envMap||le.environment),le.envMapRotation=le.environment!==null&&I.envMap===null?K.environmentRotation:I.envMapRotation,Qe===void 0&&(I.addEventListener("dispose",it),Qe=new Map,le.programs=Qe);let St=Qe.get(Ge);if(St!==void 0){if(le.currentProgram===St&&le.lightsStateVersion===ze)return ai(I,De),St}else De.uniforms=je.getUniforms(I),I.onBeforeCompile(De,T),St=je.acquireProgram(De,Ge),Qe.set(Ge,St),le.uniforms=De.uniforms;const ht=le.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(ht.clippingPlanes=qe.uniform),ai(I,De),le.needsLights=Cn(I),le.lightsStateVersion=ze,le.needsLights&&(ht.ambientLightColor.value=te.state.ambient,ht.lightProbe.value=te.state.probe,ht.directionalLights.value=te.state.directional,ht.directionalLightShadows.value=te.state.directionalShadow,ht.spotLights.value=te.state.spot,ht.spotLightShadows.value=te.state.spotShadow,ht.rectAreaLights.value=te.state.rectArea,ht.ltc_1.value=te.state.rectAreaLTC1,ht.ltc_2.value=te.state.rectAreaLTC2,ht.pointLights.value=te.state.point,ht.pointLightShadows.value=te.state.pointShadow,ht.hemisphereLights.value=te.state.hemi,ht.directionalShadowMap.value=te.state.directionalShadowMap,ht.directionalShadowMatrix.value=te.state.directionalShadowMatrix,ht.spotShadowMap.value=te.state.spotShadowMap,ht.spotLightMatrix.value=te.state.spotLightMatrix,ht.spotLightMap.value=te.state.spotLightMap,ht.pointShadowMap.value=te.state.pointShadowMap,ht.pointShadowMatrix.value=te.state.pointShadowMatrix),le.currentProgram=St,le.uniformsList=null,St}function Xn(I){if(I.uniformsList===null){const K=I.currentProgram.getUniforms();I.uniformsList=cd.seqWithValue(K.seq,I.uniforms)}return I.uniformsList}function ai(I,K){const ue=w.get(I);ue.outputColorSpace=K.outputColorSpace,ue.batching=K.batching,ue.batchingColor=K.batchingColor,ue.instancing=K.instancing,ue.instancingColor=K.instancingColor,ue.instancingMorph=K.instancingMorph,ue.skinning=K.skinning,ue.morphTargets=K.morphTargets,ue.morphNormals=K.morphNormals,ue.morphColors=K.morphColors,ue.morphTargetsCount=K.morphTargetsCount,ue.numClippingPlanes=K.numClippingPlanes,ue.numIntersection=K.numClipIntersection,ue.vertexAlphas=K.vertexAlphas,ue.vertexTangents=K.vertexTangents,ue.toneMapping=K.toneMapping}function Tn(I,K,ue,le,te){K.isScene!==!0&&(K=Tt),q.resetTextureUnits();const Re=K.fog,ze=le.isMeshStandardMaterial?K.environment:null,De=G===null?T.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Ll,Ge=(le.isMeshStandardMaterial?me:pe).get(le.envMap||ze),Qe=le.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,St=!!ue.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),ht=!!ue.morphAttributes.position,Lt=!!ue.morphAttributes.normal,Xt=!!ue.morphAttributes.color;let ln=is;le.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(ln=T.toneMapping);const sn=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,qt=sn!==void 0?sn.length:0,pt=w.get(le),Qt=R.state.lights;if(Fe===!0&&(mt===!0||I!==ne)){const jn=I===ne&&le.id===Q;qe.setState(le,I,jn)}let zt=!1;le.version===pt.__version?(pt.needsLights&&pt.lightsStateVersion!==Qt.state.version||pt.outputColorSpace!==De||te.isBatchedMesh&&pt.batching===!1||!te.isBatchedMesh&&pt.batching===!0||te.isBatchedMesh&&pt.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&pt.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&pt.instancing===!1||!te.isInstancedMesh&&pt.instancing===!0||te.isSkinnedMesh&&pt.skinning===!1||!te.isSkinnedMesh&&pt.skinning===!0||te.isInstancedMesh&&pt.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&pt.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&pt.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&pt.instancingMorph===!1&&te.morphTexture!==null||pt.envMap!==Ge||le.fog===!0&&pt.fog!==Re||pt.numClippingPlanes!==void 0&&(pt.numClippingPlanes!==qe.numPlanes||pt.numIntersection!==qe.numIntersection)||pt.vertexAlphas!==Qe||pt.vertexTangents!==St||pt.morphTargets!==ht||pt.morphNormals!==Lt||pt.morphColors!==Xt||pt.toneMapping!==ln||pt.morphTargetsCount!==qt)&&(zt=!0):(zt=!0,pt.__version=le.version);let li=pt.currentProgram;zt===!0&&(li=Zt(le,K,te));let Vr=!1,kn=!1,Ro=!1;const Jt=li.getUniforms(),At=pt.uniforms;if(We.useProgram(li.program)&&(Vr=!0,kn=!0,Ro=!0),le.id!==Q&&(Q=le.id,kn=!0),Vr||ne!==I){We.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),Jt.setValue(W,"projectionMatrix",I.projectionMatrix),Jt.setValue(W,"viewMatrix",I.matrixWorldInverse);const Yn=Jt.map.cameraPosition;Yn!==void 0&&Yn.setValue(W,Xe.setFromMatrixPosition(I.matrixWorld)),ft.logarithmicDepthBuffer&&Jt.setValue(W,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Jt.setValue(W,"isOrthographic",I.isOrthographicCamera===!0),ne!==I&&(ne=I,kn=!0,Ro=!0)}if(pt.needsLights&&(Qt.state.directionalShadowMap.length>0&&Jt.setValue(W,"directionalShadowMap",Qt.state.directionalShadowMap,q),Qt.state.spotShadowMap.length>0&&Jt.setValue(W,"spotShadowMap",Qt.state.spotShadowMap,q),Qt.state.pointShadowMap.length>0&&Jt.setValue(W,"pointShadowMap",Qt.state.pointShadowMap,q)),te.isSkinnedMesh){Jt.setOptional(W,te,"bindMatrix"),Jt.setOptional(W,te,"bindMatrixInverse");const jn=te.skeleton;jn&&(jn.boneTexture===null&&jn.computeBoneTexture(),Jt.setValue(W,"boneTexture",jn.boneTexture,q))}te.isBatchedMesh&&(Jt.setOptional(W,te,"batchingTexture"),Jt.setValue(W,"batchingTexture",te._matricesTexture,q),Jt.setOptional(W,te,"batchingIdTexture"),Jt.setValue(W,"batchingIdTexture",te._indirectTexture,q),Jt.setOptional(W,te,"batchingColorTexture"),te._colorsTexture!==null&&Jt.setValue(W,"batchingColorTexture",te._colorsTexture,q));const Mi=ue.morphAttributes;if((Mi.position!==void 0||Mi.normal!==void 0||Mi.color!==void 0)&&xt.update(te,ue,li),(kn||pt.receiveShadow!==te.receiveShadow)&&(pt.receiveShadow=te.receiveShadow,Jt.setValue(W,"receiveShadow",te.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(At.envMap.value=Ge,At.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),le.isMeshStandardMaterial&&le.envMap===null&&K.environment!==null&&(At.envMapIntensity.value=K.environmentIntensity),At.dfgLUT!==void 0&&(At.dfgLUT.value=QP()),kn&&(Jt.setValue(W,"toneMappingExposure",T.toneMappingExposure),pt.needsLights&&wn(At,Ro),Re&&le.fog===!0&&$e.refreshFogUniforms(At,Re),$e.refreshMaterialUniforms(At,le,Ee,ee,R.state.transmissionRenderTarget[I.id]),cd.upload(W,Xn(pt),At,q)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(cd.upload(W,Xn(pt),At,q),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Jt.setValue(W,"center",te.center),Jt.setValue(W,"modelViewMatrix",te.modelViewMatrix),Jt.setValue(W,"normalMatrix",te.normalMatrix),Jt.setValue(W,"modelMatrix",te.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const jn=le.uniformsGroups;for(let Yn=0,va=jn.length;Yn<va;Yn++){const Hr=jn[Yn];ve.update(Hr,li),ve.bind(Hr,li)}}return li}function wn(I,K){I.ambientLightColor.needsUpdate=K,I.lightProbe.needsUpdate=K,I.directionalLights.needsUpdate=K,I.directionalLightShadows.needsUpdate=K,I.pointLights.needsUpdate=K,I.pointLightShadows.needsUpdate=K,I.spotLights.needsUpdate=K,I.spotLightShadows.needsUpdate=K,I.rectAreaLights.needsUpdate=K,I.hemisphereLights.needsUpdate=K}function Cn(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(I,K,ue){const le=w.get(I);le.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),w.get(I.texture).__webglTexture=K,w.get(I.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:ue,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,K){const ue=w.get(I);ue.__webglFramebuffer=K,ue.__useDefaultFramebuffer=K===void 0};const Ar=W.createFramebuffer();this.setRenderTarget=function(I,K=0,ue=0){G=I,V=K,z=ue;let le=null,te=!1,Re=!1;if(I){const De=w.get(I);if(De.__useDefaultFramebuffer!==void 0){We.bindFramebuffer(W.FRAMEBUFFER,De.__webglFramebuffer),Z.copy(I.viewport),Y.copy(I.scissor),X=I.scissorTest,We.viewport(Z),We.scissor(Y),We.setScissorTest(X),Q=-1;return}else if(De.__webglFramebuffer===void 0)q.setupRenderTarget(I);else if(De.__hasExternalTextures)q.rebindTextures(I,w.get(I.texture).__webglTexture,w.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const St=I.depthTexture;if(De.__boundDepthTexture!==St){if(St!==null&&w.has(St)&&(I.width!==St.image.width||I.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(I)}}const Ge=I.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Re=!0);const Qe=w.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Qe[K])?le=Qe[K][ue]:le=Qe[K],te=!0):I.samples>0&&q.useMultisampledRTT(I)===!1?le=w.get(I).__webglMultisampledFramebuffer:Array.isArray(Qe)?le=Qe[ue]:le=Qe,Z.copy(I.viewport),Y.copy(I.scissor),X=I.scissorTest}else Z.copy(se).multiplyScalar(Ee).floor(),Y.copy(ce).multiplyScalar(Ee).floor(),X=_e;if(ue!==0&&(le=Ar),We.bindFramebuffer(W.FRAMEBUFFER,le)&&We.drawBuffers(I,le),We.viewport(Z),We.scissor(Y),We.setScissorTest(X),te){const De=w.get(I.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+K,De.__webglTexture,ue)}else if(Re){const De=K;for(let Ge=0;Ge<I.textures.length;Ge++){const Qe=w.get(I.textures[Ge]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Ge,Qe.__webglTexture,ue,De)}}else if(I!==null&&ue!==0){const De=w.get(I.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,De.__webglTexture,ue)}Q=-1},this.readRenderTargetPixels=function(I,K,ue,le,te,Re,ze,De=0){if(!(I&&I.isWebGLRenderTarget)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=w.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&ze!==void 0&&(Ge=Ge[ze]),Ge){We.bindFramebuffer(W.FRAMEBUFFER,Ge);try{const Qe=I.textures[De],St=Qe.format,ht=Qe.type;if(!ft.textureFormatReadable(St)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(ht)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=I.width-le&&ue>=0&&ue<=I.height-te&&(I.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+De),W.readPixels(K,ue,le,te,xe.convert(St),xe.convert(ht),Re))}finally{const Qe=G!==null?w.get(G).__webglFramebuffer:null;We.bindFramebuffer(W.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(I,K,ue,le,te,Re,ze,De=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=w.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&ze!==void 0&&(Ge=Ge[ze]),Ge)if(K>=0&&K<=I.width-le&&ue>=0&&ue<=I.height-te){We.bindFramebuffer(W.FRAMEBUFFER,Ge);const Qe=I.textures[De],St=Qe.format,ht=Qe.type;if(!ft.textureFormatReadable(St))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Lt=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Lt),W.bufferData(W.PIXEL_PACK_BUFFER,Re.byteLength,W.STREAM_READ),I.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+De),W.readPixels(K,ue,le,te,xe.convert(St),xe.convert(ht),0);const Xt=G!==null?w.get(G).__webglFramebuffer:null;We.bindFramebuffer(W.FRAMEBUFFER,Xt);const ln=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await vA(W,ln,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Lt),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Re),W.deleteBuffer(Lt),W.deleteSync(ln),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,K=null,ue=0){const le=Math.pow(2,-ue),te=Math.floor(I.image.width*le),Re=Math.floor(I.image.height*le),ze=K!==null?K.x:0,De=K!==null?K.y:0;q.setTexture2D(I,0),W.copyTexSubImage2D(W.TEXTURE_2D,ue,0,0,ze,De,te,Re),We.unbindTexture()};const ks=W.createFramebuffer(),Dt=W.createFramebuffer();this.copyTextureToTexture=function(I,K,ue=null,le=null,te=0,Re=null){Re===null&&(te!==0?(oc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Re=te,te=0):Re=0);let ze,De,Ge,Qe,St,ht,Lt,Xt,ln;const sn=I.isCompressedTexture?I.mipmaps[Re]:I.image;if(ue!==null)ze=ue.max.x-ue.min.x,De=ue.max.y-ue.min.y,Ge=ue.isBox3?ue.max.z-ue.min.z:1,Qe=ue.min.x,St=ue.min.y,ht=ue.isBox3?ue.min.z:0;else{const Mi=Math.pow(2,-te);ze=Math.floor(sn.width*Mi),De=Math.floor(sn.height*Mi),I.isDataArrayTexture?Ge=sn.depth:I.isData3DTexture?Ge=Math.floor(sn.depth*Mi):Ge=1,Qe=0,St=0,ht=0}le!==null?(Lt=le.x,Xt=le.y,ln=le.z):(Lt=0,Xt=0,ln=0);const qt=xe.convert(K.format),pt=xe.convert(K.type);let Qt;K.isData3DTexture?(q.setTexture3D(K,0),Qt=W.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(q.setTexture2DArray(K,0),Qt=W.TEXTURE_2D_ARRAY):(q.setTexture2D(K,0),Qt=W.TEXTURE_2D),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,K.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,K.unpackAlignment);const zt=W.getParameter(W.UNPACK_ROW_LENGTH),li=W.getParameter(W.UNPACK_IMAGE_HEIGHT),Vr=W.getParameter(W.UNPACK_SKIP_PIXELS),kn=W.getParameter(W.UNPACK_SKIP_ROWS),Ro=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,sn.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,sn.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Qe),W.pixelStorei(W.UNPACK_SKIP_ROWS,St),W.pixelStorei(W.UNPACK_SKIP_IMAGES,ht);const Jt=I.isDataArrayTexture||I.isData3DTexture,At=K.isDataArrayTexture||K.isData3DTexture;if(I.isDepthTexture){const Mi=w.get(I),jn=w.get(K),Yn=w.get(Mi.__renderTarget),va=w.get(jn.__renderTarget);We.bindFramebuffer(W.READ_FRAMEBUFFER,Yn.__webglFramebuffer),We.bindFramebuffer(W.DRAW_FRAMEBUFFER,va.__webglFramebuffer);for(let Hr=0;Hr<Ge;Hr++)Jt&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,w.get(I).__webglTexture,te,ht+Hr),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,w.get(K).__webglTexture,Re,ln+Hr)),W.blitFramebuffer(Qe,St,ze,De,Lt,Xt,ze,De,W.DEPTH_BUFFER_BIT,W.NEAREST);We.bindFramebuffer(W.READ_FRAMEBUFFER,null),We.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(te!==0||I.isRenderTargetTexture||w.has(I)){const Mi=w.get(I),jn=w.get(K);We.bindFramebuffer(W.READ_FRAMEBUFFER,ks),We.bindFramebuffer(W.DRAW_FRAMEBUFFER,Dt);for(let Yn=0;Yn<Ge;Yn++)Jt?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Mi.__webglTexture,te,ht+Yn):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Mi.__webglTexture,te),At?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,jn.__webglTexture,Re,ln+Yn):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,jn.__webglTexture,Re),te!==0?W.blitFramebuffer(Qe,St,ze,De,Lt,Xt,ze,De,W.COLOR_BUFFER_BIT,W.NEAREST):At?W.copyTexSubImage3D(Qt,Re,Lt,Xt,ln+Yn,Qe,St,ze,De):W.copyTexSubImage2D(Qt,Re,Lt,Xt,Qe,St,ze,De);We.bindFramebuffer(W.READ_FRAMEBUFFER,null),We.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else At?I.isDataTexture||I.isData3DTexture?W.texSubImage3D(Qt,Re,Lt,Xt,ln,ze,De,Ge,qt,pt,sn.data):K.isCompressedArrayTexture?W.compressedTexSubImage3D(Qt,Re,Lt,Xt,ln,ze,De,Ge,qt,sn.data):W.texSubImage3D(Qt,Re,Lt,Xt,ln,ze,De,Ge,qt,pt,sn):I.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Re,Lt,Xt,ze,De,qt,pt,sn.data):I.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Re,Lt,Xt,sn.width,sn.height,qt,sn.data):W.texSubImage2D(W.TEXTURE_2D,Re,Lt,Xt,ze,De,qt,pt,sn);W.pixelStorei(W.UNPACK_ROW_LENGTH,zt),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,li),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Vr),W.pixelStorei(W.UNPACK_SKIP_ROWS,kn),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Ro),Re===0&&K.generateMipmaps&&W.generateMipmap(Qt),We.unbindTexture()},this.initRenderTarget=function(I){w.get(I).__webglFramebuffer===void 0&&q.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?q.setTextureCube(I,0):I.isData3DTexture?q.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?q.setTexture2DArray(I,0):q.setTexture2D(I,0),We.unbindTexture()},this.resetState=function(){V=0,z=0,G=null,We.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ts}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Yt._getUnpackColorSpace()}}tt.registerPlugin(ot);const dl={v:0,s:0},e3=tt.utils.clamp(-2e3,2e3);let Dy=!1;function t3(){Dy||(Dy=!0,ot.create({start:0,end:()=>document.documentElement.scrollHeight-window.innerHeight,onUpdate(s){const t=e3(s.getVelocity())/1e3,n=Math.min(1,Math.abs(t));Math.abs(n)>Math.abs(dl.s)&&(dl.v=t,dl.s=n,tt.to(dl,{v:0,s:0,duration:.8,ease:"sine.inOut",overwrite:!0}))}}))}t3();const n3=`
  varying vec2 vUv;
  varying vec2 vUvCover;
  uniform vec2 uTextureSize;
  uniform vec2 uQuadSize;

  void main() {
    vUv = uv;

    // "cover" mapping — preserves aspect ratio
    float texR  = uTextureSize.x / uTextureSize.y;
    float quadR = uQuadSize.x    / uQuadSize.y;
    vec2 s = vec2(1.0);
    if (quadR > texR) { s.y = texR / quadR; } else { s.x = quadR / texR; }
    vUvCover = vUv * s + (1.0 - s) * 0.5;

    gl_Position = vec4(position, 1.0);
  }
`,i3=`
  precision highp float;

  uniform sampler2D uTexture;
  uniform vec2      uTextureSize;
  uniform vec2      uQuadSize;
  uniform float     uTime;
  uniform float     uScrollVelocity;   // signed -1..1
  uniform float     uVelocityStrength; // 0..1, decays to 0

  varying vec2 vUv;
  varying vec2 vUvCover;

  void main() {
    vec2  texCoords = vUvCover;
    float amt = 0.03 * uVelocityStrength;
    float t   = uTime * 0.8;

    texCoords.y += sin((texCoords.x * 8.0) + t)          * amt;
    texCoords.x += cos((texCoords.y * 6.0) - t * 0.8)    * amt * 0.6;

    float dir = sign(uScrollVelocity);
    vec2  tc  = texCoords;

    float r = texture2D(uTexture, tc + vec2( amt * 0.50 * dir,  0.0)).r;
    float g = texture2D(uTexture, tc + vec2( amt * 0.25 * dir,  0.0)).g;
    float b = texture2D(uTexture, tc + vec2(-amt * 0.35 * dir,  0.0)).b;

    gl_FragColor = vec4(r, g, b, 1.0);
  }
`;function r3({src:s}){const e=Ye.useRef(null);return Ye.useEffect(()=>{const t=e.current;if(!t)return;const n=new JP({antialias:!0,alpha:!0});n.outputColorSpace=Vi,n.setPixelRatio(Math.min(window.devicePixelRatio??1,2));const r=n.domElement;r.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block;",t.appendChild(r);const a=new WA,l=new m0(-1,1,1,-1,0,1),c=new hc(2,2),f={uTexture:{value:null},uTextureSize:{value:new tn(1,1)},uQuadSize:{value:new tn(1,1)},uTime:{value:0},uScrollVelocity:{value:0},uVelocityStrength:{value:0}},h=new Br({uniforms:f,vertexShader:n3,fragmentShader:i3,transparent:!0}),p=new ls(c,h);a.add(p);const m=()=>{const{width:x,height:y}=t.getBoundingClientRect();!x||!y||(n.setSize(x,y,!1),f.uQuadSize.value.set(x,y))},g=new nb;g.setCrossOrigin("anonymous"),g.load(s,x=>{x.colorSpace=Vi,f.uTexture.value=x,f.uTextureSize.value.set(x.image.width,x.image.height),m()}),m();const v=new ResizeObserver(m);v.observe(t);let E=performance.now();const M=x=>{const y=(x-E)*.001;E=x,f.uTime.value,f.uTime.value=f.uTime.value+y,f.uScrollVelocity.value=dl.v,f.uVelocityStrength.value=dl.s,n.render(a,l)};return tt.ticker.add(M),()=>{tt.ticker.remove(M),v.disconnect(),t.contains(r)&&t.removeChild(r),n.dispose(),h.dispose(),c.dispose()}},[s]),J.jsx("div",{ref:e,style:{position:"absolute",inset:0,width:"100%",height:"100%"}})}tt.registerPlugin(ot);const s3=[{id:1,year:"2024–Present",client:"AI/ML Course Platform",desc:"Delivered a WCAG-aligned, responsive experience that boosted engagement 45% and retention 30% through A/B-tested UX iterations.",tags:["User Research","A/B Testing"],link:"#",image:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=85"},{id:2,year:"2021–2023",client:"FinTech Payment Gateway",desc:"Unified POS, web, and Android into one design language. Reduced bounce rates 25% with heuristic evaluation across 6 platforms.",tags:["Product Design","Design Systems"],link:"#",image:"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=85"},{id:3,year:"2024–Present",client:"Dashboard Modernisation",desc:"Modernised 8 dashboards with iterative feedback loops — 35% higher engagement and 40% surge in mobile usage.",tags:["Figma","Prototyping"],link:"#",image:"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=85"},{id:4,year:"2021–2023",client:"Responsive Web & Tablet",desc:"Delivered 12 high-fidelity screens across desktop and tablet, validated through 50+ participant usability studies.",tags:["Interaction Design","Usability"],link:"#",image:"https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=85"}],o3=[{gridColumn:"1 / 3",gridRow:"1 / 2"},{gridColumn:"3 / 4",gridRow:"1 / 3"},{gridColumn:"1 / 2",gridRow:"2 / 3"},{gridColumn:"2 / 3",gridRow:"2 / 3"}];function a3({project:s}){const e=Ye.useRef(null),t=Ye.useRef(null),n=Ye.useRef(null);return Ye.useEffect(()=>{const r=e.current,a=t.current,l=n.current;if(!r||!a||!l)return;tt.set(a,{xPercent:-50,yPercent:-50,x:"50%",y:"50%",width:44,height:44,borderRadius:"50%",opacity:0}),tt.set(l,{opacity:0,x:-8});const c=p=>{const m=r.getBoundingClientRect(),g=p.clientX-m.left,v=p.clientY-m.top;tt.to(a,{x:g,y:v,duration:.16,ease:"power2.out",overwrite:"auto"}),tt.to(r,{rotateY:(g/m.width-.5)*8,rotateX:-(v/m.height-.5)*6,transformPerspective:1200,duration:.45,ease:"power2.out",overwrite:"auto"})},f=p=>{const m=r.getBoundingClientRect();tt.set(a,{x:p.clientX-m.left,y:p.clientY-m.top}),tt.to(r,{scale:1.02,duration:.55,ease:"expo.out",overwrite:"auto"}),tt.to(a,{opacity:1,width:162,height:44,borderRadius:0,duration:.38,ease:"expo.out"}),tt.to(l,{opacity:1,x:0,duration:.22,ease:"power2.out",delay:.12})},h=()=>{tt.to(l,{opacity:0,x:-8,duration:.14,ease:"power2.in"}),tt.to(a,{width:44,height:44,borderRadius:"50%",opacity:0,duration:.38,ease:"expo.out",delay:.08}),tt.to(r,{rotateX:0,rotateY:0,scale:1,duration:.75,ease:"expo.out",overwrite:"auto"})};return r.addEventListener("mousemove",c),r.addEventListener("mouseenter",f),r.addEventListener("mouseleave",h),()=>{r.removeEventListener("mousemove",c),r.removeEventListener("mouseenter",f),r.removeEventListener("mouseleave",h)}},[]),J.jsxs("div",{ref:e,className:"bento-card",style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",background:"#111",willChange:"transform",cursor:"none"},children:[J.jsx(r3,{src:s.image}),J.jsx("div",{style:{position:"absolute",inset:0,zIndex:5,pointerEvents:"none",background:"linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.35) 40%, transparent 68%)"}}),J.jsx("div",{style:{position:"absolute",top:18,left:18,zIndex:10,background:"rgba(255,255,255,0.08)",backdropFilter:"blur(8px)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:100,padding:"5px 13px"},children:J.jsx("span",{style:{fontFamily:"var(--mono)",fontSize:10,letterSpacing:"0.1em",color:"rgba(255,255,255,0.7)"},children:s.year})}),J.jsxs("div",{style:{position:"absolute",bottom:0,left:0,right:0,padding:"0 22px 22px",zIndex:10},children:[J.jsx("div",{style:{display:"flex",gap:6,marginBottom:10,flexWrap:"wrap"},children:s.tags.map(r=>J.jsx("span",{style:{fontFamily:"var(--mono)",fontSize:9,letterSpacing:"0.18em",textTransform:"uppercase",border:"1px solid rgba(255,255,255,0.3)",color:"rgba(255,255,255,0.6)",padding:"4px 9px"},children:r},r))}),J.jsxs("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"space-between",gap:14},children:[J.jsxs("div",{style:{flex:1,minWidth:0},children:[J.jsx("p",{style:{fontFamily:"var(--mono)",fontSize:10,letterSpacing:"0.08em",color:"rgba(255,255,255,0.4)",marginBottom:5,textTransform:"uppercase"},children:s.client}),J.jsx("p",{style:{fontFamily:"var(--serif)",fontSize:"clamp(13px, 1vw, 18px)",lineHeight:1.3,color:"#fff",fontWeight:400,overflow:"hidden",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical"},children:s.desc})]}),J.jsx("a",{href:s.link,style:{width:40,height:40,borderRadius:"50%",background:"#fff",color:"#000",display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,flexShrink:0,textDecoration:"none",transition:"background 0.25s, transform 0.25s"},onMouseEnter:r=>{r.currentTarget.style.background="rgba(255,255,255,0.75)",r.currentTarget.style.transform="scale(1.12)"},onMouseLeave:r=>{r.currentTarget.style.background="#fff",r.currentTarget.style.transform="scale(1)"},children:"↗"})]})]}),J.jsxs("div",{ref:t,style:{position:"absolute",top:0,left:0,pointerEvents:"none",zIndex:20,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",background:"#fff",color:"#000",willChange:"transform, width, border-radius"},children:[J.jsx("span",{ref:n,style:{fontFamily:"var(--mono)",fontSize:10,letterSpacing:"0.2em",textTransform:"uppercase",whiteSpace:"nowrap",marginRight:8,flexShrink:0},children:"DISCOVER"}),J.jsx("span",{style:{fontSize:14,lineHeight:1,flexShrink:0},children:"↗"})]})]})}function l3(){const s=Ye.useRef(null);return Ye.useEffect(()=>{if(!s.current)return;const e=tt.context(()=>{s.current.querySelectorAll(".bento-cell").forEach((t,n)=>{tt.from(t,{y:50,opacity:0,duration:1.1,ease:"expo.out",delay:n*.09,scrollTrigger:{trigger:t,start:"top 90%",once:!0}})})},s);return()=>e.revert()},[]),J.jsxs("div",{id:"works",ref:s,style:{background:"#000"},children:[J.jsxs("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"space-between",padding:"80px 4vw 48px",borderBottom:"1px solid rgba(255,255,255,0.08)"},children:[J.jsx("div",{style:{background:"#1c1c1c",borderRadius:100,padding:"12px 24px",display:"inline-flex",alignItems:"center"},children:J.jsx("span",{style:{fontFamily:"var(--mono)",fontSize:13,letterSpacing:"0.05em",color:"#fff"},children:"Featured Work"})}),J.jsxs("p",{style:{fontFamily:"var(--serif)",fontSize:"clamp(18px, 2vw, 32px)",lineHeight:1.2,color:"#fff",fontWeight:500,margin:0,maxWidth:320,textAlign:"right"},children:["Handcrafted Experiences",J.jsx("br",{}),"for Brands of All Sizes,"," ",J.jsx("em",{style:{fontStyle:"italic",fontWeight:400},children:"Worldwide"})]})]}),J.jsx("div",{className:"bento-grid",style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"54vh 40vh",gap:"10px",padding:"10px 4vw 0"},children:s3.map((e,t)=>J.jsx("div",{className:"bento-cell",style:o3[t],children:J.jsx(a3,{project:e})},e.id))}),J.jsx("div",{style:{height:"8vh"}}),J.jsx("style",{children:`
        @media (max-width: 900px) {
          .bento-grid {
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: auto !important;
          }
          .bento-cell {
            grid-column: auto !important;
            grid-row: auto !important;
            aspect-ratio: 4/3;
          }
        }
        @media (max-width: 540px) {
          .bento-grid {
            grid-template-columns: 1fr !important;
          }
          .bento-cell { aspect-ratio: 3/4; }
        }
      `})]})}tt.registerPlugin(ot);const u3=[{name:"WCAG Design System",year:"2023",tags:["USER RESEARCH","WCAG"]},{name:"Mobile UX Sprint",year:"2023",tags:["FIGMA","PROTOTYPING"]},{name:"E-commerce Redesign",year:"2022",tags:["UX/UI","USABILITY"]},{name:"SaaS Onboarding Flow",year:"2022",tags:["INTERACTION","FIGMA"]},{name:"Brand Identity System",year:"2021",tags:["DESIGN SYSTEMS","FIGMA"]},{name:"Analytics Dashboard",year:"2021",tags:["DATA VIZ","PROTOTYPING"]}];function c3(){const s=Ye.useRef(null);return Ye.useEffect(()=>{const e=tt.context(()=>{tt.from(".wlt-row",{opacity:0,y:20,stagger:.07,duration:.9,ease:"expo.out",scrollTrigger:{trigger:s.current,start:"top 80%",once:!0}})},s);return()=>e.revert()},[]),J.jsx("div",{ref:s,style:{background:"var(--dark)",paddingBottom:"4vh"},children:u3.map((e,t)=>J.jsxs("div",{className:"wlt-row",style:{display:"grid",gridTemplateColumns:"1fr auto auto",alignItems:"center",padding:"0 6vw",height:72,borderBottom:"1px solid rgba(255,255,255,0.07)",gap:"4vw",transition:"background 0.3s"},onMouseEnter:n=>n.currentTarget.style.background="rgba(255,255,255,0.03)",onMouseLeave:n=>n.currentTarget.style.background="transparent",children:[J.jsx("span",{style:{fontFamily:"var(--serif)",fontSize:"clamp(14px,1.4vw,20px)",fontWeight:500,color:"rgba(255,255,255,0.85)",letterSpacing:"0.01em"},children:e.name}),J.jsx("span",{style:{fontFamily:"var(--mono)",fontSize:11,letterSpacing:"0.2em",color:"rgba(255,255,255,0.3)"},children:e.year}),J.jsx("div",{style:{display:"flex",gap:16},children:e.tags.map(n=>J.jsx("span",{style:{fontFamily:"var(--mono)",fontSize:9,letterSpacing:"0.2em",color:"rgba(255,255,255,0.3)",textTransform:"uppercase"},children:n},n))})]},t))})}const f3=[{src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",style:{left:"6%",top:"20%",width:"clamp(240px,22vw,340px)",height:"clamp(160px,15vw,230px)",transform:"rotate(-3deg)"}},{src:"https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",style:{left:"32%",top:"10%",width:"clamp(340px,33vw,500px)",height:"clamp(420px,42vw,640px)",transform:"rotate(0deg)"}},{src:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",style:{right:"4%",top:"48%",width:"clamp(280px,24vw,360px)",height:"clamp(180px,16vw,250px)",transform:"rotate(2deg)"}}];function d3({src:s,style:e}){const t=Ye.useRef(null),n=Ye.useRef(null);return Ye.useEffect(()=>{const r=t.current,a=n.current;if(!r||!a)return;const l=h=>{const p=r.getBoundingClientRect(),m=(h.clientX-p.left)/p.width,g=(h.clientY-p.top)/p.height;tt.to(a,{rotateY:(m-.5)*18,rotateX:-(g-.5)*14,transformPerspective:900,duration:.45,ease:"power2.out",overwrite:"auto"})},c=()=>tt.to(a,{scale:1.06,duration:.5,ease:"expo.out"}),f=()=>tt.to(a,{rotateX:0,rotateY:0,scale:1,duration:1,ease:"expo.out"});return r.addEventListener("mousemove",l),r.addEventListener("mouseenter",c),r.addEventListener("mouseleave",f),()=>{r.removeEventListener("mousemove",l),r.removeEventListener("mouseenter",c),r.removeEventListener("mouseleave",f)}},[]),J.jsx("div",{ref:t,style:{position:"absolute",overflow:"hidden",willChange:"transform",...e},children:J.jsx("img",{ref:n,src:s,alt:"Yuvraj",style:{width:"100%",height:"115%",objectFit:"cover",display:"block",transformOrigin:"center center",willChange:"transform"}})})}function h3(){return J.jsx("section",{id:"about",style:{position:"relative",height:"115vh",background:"var(--cream)",overflow:"hidden"},children:f3.map((s,e)=>J.jsx(d3,{src:s.src,style:s.style},e))})}tt.registerPlugin(ot,Cl);function p3(){const s=Ye.useRef(null),e=Ye.useRef(null),t=Ye.useRef(null);return Ye.useEffect(()=>{const n=tt.context(()=>{document.fonts.ready.then(()=>{if(!e.current||!t.current)return;const r=new Cl(e.current,{type:"words",wordsClass:"word-wrap"});r.words.forEach(l=>{l.style.overflow="hidden",l.style.display="inline-block"}),tt.from(r.words,{y:"108%",duration:1.1,ease:"expo.out",stagger:.06,scrollTrigger:{trigger:s.current,start:"top 72%",once:!0}});const a=new Cl(t.current,{type:"words"});tt.from(a.words,{y:22,opacity:0,duration:.7,ease:"expo.out",stagger:.022,delay:.25,scrollTrigger:{trigger:t.current,start:"top 78%",once:!0}})})},s);return()=>n.revert()},[]),J.jsxs("section",{ref:s,style:{background:"var(--cream)",padding:"8vh 4vw 10vh",overflow:"hidden"},children:[J.jsx("h2",{ref:e,style:{fontFamily:"var(--display)",fontSize:"clamp(64px, 13vw, 190px)",lineHeight:.88,color:"var(--black)",letterSpacing:"-0.01em",fontWeight:400,margin:"0 0 8vh"},children:"(USER) THINKER DIGITAL MAKER"}),J.jsx("div",{style:{display:"flex",justifyContent:"center"},children:J.jsx("p",{ref:t,style:{fontFamily:"var(--serif)",fontSize:"clamp(16px, 1.9vw, 26px)",lineHeight:1.5,color:"rgba(0,0,0,0.72)",textAlign:"center",maxWidth:680},children:"Pushing the limits of user-centred design, constantly exploring emerging tools to craft visually striking, accessible, and immersive experiences that captivate and convert."})})]})}tt.registerPlugin(ot);const Ly=["https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&q=70","https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=70","https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=900&q=70","https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=900&q=70","https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=900&q=70","https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=70","https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=900&q=70","https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=70"],m3=["Figma","Adobe XD","Sketch","InVision","Zeplin","Responsive Design","Accessibility (WCAG)","Interaction Design","Design Systems"],g3=["User Research","Information Architecture","Wireframing","Rapid Prototyping","Usability Testing","Heuristic Evaluation","Design Thinking","A/B Testing"];function _3(){const[s,e]=Ye.useState(0),[t,n]=Ye.useState(!1),r=Ye.useRef(null),a=Ye.useRef(null),l=Ye.useRef(null);return Ye.useEffect(()=>{const c=ot.create({trigger:r.current,start:"top 80%",once:!0,onEnter:()=>{n(!0),l.current=setInterval(()=>{e(h=>(h+1)%Ly.length)},110),setTimeout(()=>{l.current&&clearInterval(l.current),n(!1)},4e3)}}),f=tt.context(()=>{tt.from(".reel-text-item",{opacity:0,y:20,stagger:.04,duration:.6,ease:"expo.out",scrollTrigger:{trigger:a.current,start:"top 75%",once:!0}})},r);return()=>{f.revert(),c.kill(),l.current&&clearInterval(l.current)}},[]),J.jsxs("section",{ref:r,className:"reel-grid",style:{background:"var(--cream)",display:"grid",gridTemplateColumns:"40vw 1fr",minHeight:"80vh",borderTop:"1px solid rgba(0,0,0,0.08)"},children:[J.jsxs("div",{style:{background:"#1e1e1e",overflow:"hidden",position:"relative",minHeight:"70vh"},children:[J.jsx("img",{src:Ly[s],alt:"",style:{width:"100%",height:"100%",objectFit:"cover",display:"block",position:"absolute",inset:0}}),J.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.3)"}}),J.jsx("div",{style:{position:"absolute",top:20,right:20,width:8,height:8,borderRadius:"50%",background:t?"#ff3b30":"rgba(255,255,255,0.2)",animation:t?"flicker 0.3s infinite alternate":"none"}}),J.jsx("style",{children:"@keyframes flicker { 0% { opacity: 1; } 100% { opacity: 0.3; } }"})]}),J.jsxs("div",{ref:a,style:{display:"grid",gridTemplateColumns:"1fr 0.75fr 0.75fr",gap:"4vw",padding:"6vh 5vw",alignContent:"start"},children:[J.jsxs("div",{children:[J.jsx("p",{className:"reel-text-item",style:{fontFamily:"var(--serif)",fontSize:"clamp(18px,1.8vw,26px)",lineHeight:1.35,color:"var(--black)",marginBottom:"4vh"},children:"UI/UX Designer with 3.5+ years bridging design and technology, passionate about accessible and immersive digital experiences."}),J.jsx("p",{className:"reel-text-item",style:{fontFamily:"var(--mono)",fontSize:12,lineHeight:1.7,color:"rgba(0,0,0,0.5)"},children:"45% engagement uplift · 30% retention growth · 95% client satisfaction · 90% on-time delivery across 7+ projects."}),J.jsx("a",{className:"reel-text-item",href:"/resume.pdf",target:"_blank",rel:"noopener noreferrer",style:{display:"inline-block",marginTop:"3vh",fontFamily:"var(--mono)",fontSize:10,letterSpacing:"0.2em",color:"var(--black)",textDecoration:"none",border:"1px solid rgba(0,0,0,0.2)",padding:"10px 20px",transition:"background 0.3s, color 0.3s"},onMouseEnter:c=>{c.currentTarget.style.background="var(--black)",c.currentTarget.style.color="var(--cream)"},onMouseLeave:c=>{c.currentTarget.style.background="transparent",c.currentTarget.style.color="var(--black)"},children:"DOWNLOAD RÉSUMÉ"})]}),J.jsxs("div",{children:[J.jsx("p",{className:"reel-text-item",style:{fontFamily:"var(--mono)",fontSize:10,letterSpacing:"0.2em",color:"rgba(0,0,0,0.35)",marginBottom:20,textTransform:"uppercase"},children:"Design Tools"}),m3.map(c=>J.jsx("p",{className:"reel-text-item",style:{fontFamily:"var(--mono)",fontSize:12,lineHeight:1.9,color:"rgba(0,0,0,0.7)"},children:c},c))]}),J.jsxs("div",{children:[J.jsx("p",{className:"reel-text-item",style:{fontFamily:"var(--mono)",fontSize:10,letterSpacing:"0.2em",color:"rgba(0,0,0,0.35)",marginBottom:20,textTransform:"uppercase"},children:"Research & Strategy"}),g3.map(c=>J.jsx("p",{className:"reel-text-item",style:{fontFamily:"var(--mono)",fontSize:12,lineHeight:1.9,color:"rgba(0,0,0,0.7)"},children:c},c))]})]}),J.jsx("style",{children:`
        @media (max-width: 860px) {
          .reel-grid { grid-template-columns: 1fr !important; }
        }
      `})]})}tt.registerPlugin(ot);const v3=Ye.lazy(()=>Rd(()=>import("./react-spline-B4gf8ceO.js").then(s=>s.r),[]));function x3(){const s=Ye.useRef(null),e=Ye.useRef(null);return Ye.useEffect(()=>{const t=tt.context(()=>{tt.set(e.current,{clipPath:"inset(35% 30% 35% 30% round 4px)",opacity:0});const n=tt.timeline();n.to(e.current,{opacity:1,duration:.2,ease:"power2.out"}),n.to(e.current,{clipPath:"inset(0% 0% 0% 0% round 0px)",ease:"power2.inOut",duration:.8}),ot.create({trigger:s.current,start:"top top",end:"+=300%",pin:!0,anticipatePin:1,scrub:1.5,animation:n,onUpdate:r=>{const a=document.querySelector(".navbar");a&&(r.progress>.4?a.classList.add("dark"):a.classList.remove("dark"))},onLeave:()=>{var r;(r=document.querySelector(".navbar"))==null||r.classList.add("dark")}})});return()=>t.revert()},[]),J.jsx("div",{ref:s,style:{position:"relative",height:"100vh",background:"var(--cream)",overflow:"hidden"},children:J.jsx("div",{ref:e,style:{position:"absolute",inset:0,background:"var(--black)",willChange:"clip-path"},children:J.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"60vmin",height:"60vmin",pointerEvents:"none"},children:J.jsx(Ye.Suspense,{fallback:null,children:J.jsx(v3,{scene:"https://prod.spline.design/qIB3Yi6uopze8PhU/scene.splinecode"})})})})})}tt.registerPlugin(ot);function y3(){const s=Ye.useRef(null),e=Ye.useRef(null);return Ye.useEffect(()=>{const t=tt.context(()=>{tt.set(e.current,{x:"80vw"}),tt.to(e.current,{x:"-160vw",ease:"none",scrollTrigger:{trigger:s.current,start:"top top",end:"+=350%",pin:!0,anticipatePin:1,scrub:.8}})});return()=>t.revert()},[]),J.jsx("div",{ref:s,style:{position:"relative",height:"100vh",background:"var(--black)",overflow:"hidden",display:"flex",alignItems:"center"},children:J.jsx("div",{ref:e,style:{position:"absolute",top:"50%",transform:"translateY(-50%)",whiteSpace:"nowrap",zIndex:5,willChange:"transform"},children:J.jsx("span",{style:{fontFamily:"var(--display)",fontSize:"clamp(80px, 17vw, 230px)",lineHeight:1,color:"#ffffff",letterSpacing:"-0.01em",display:"block"},children:"LET'S TALK IDEAS"})})})}tt.registerPlugin(ot);const S3=Ye.lazy(()=>Rd(()=>import("./react-spline-B4gf8ceO.js").then(s=>s.r),[])),M3=["UI/UX Design","Front-End Dev","Full Design System","Branding & Identity","UX Research","Consultation","Other"];function E3(){const[s,e]=Ye.useState("init"),[t,n]=Ye.useState(""),[r,a]=Ye.useState({name:"",email:"",type:"",note:""}),[l,c]=Ye.useState([{from:"bot",text:`Hey there! I'm Yuvraj's contact bot. Ready to discuss your next project.

Shall we get started?  Hit Enter`}]),f=Ye.useRef(null),h=Ye.useRef(null),p=Ye.useRef(null),m=Ye.useRef(null),g=(M,x)=>c(y=>[...y,{from:M,text:x}]),v=()=>{if(s==="init")g("bot","Hi — what's your name?"),e("name");else if(s==="name"&&t.trim())a(M=>({...M,name:t})),g("user",t),g("bot",`Nice to meet you, ${t}! What's your email?`),e("email"),n("");else if(s==="email"&&t.trim())a(M=>({...M,email:t})),g("user",t),g("bot","What kind of project are you thinking?"),e("type"),n("");else if(s==="note"&&t.trim()){const M=t;a(x=>({...x,note:M})),g("user",M),e("done"),n(""),fetch("https://formspree.io/f/mdkoapzn",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...r,note:M})}),setTimeout(()=>g("bot","Message sent! I'll get back to you soon."),500)}},E=M=>{a(x=>({...x,type:M})),g("user",M),g("bot","Any additional notes or context?"),e("note")};return Ye.useEffect(()=>{f.current&&(f.current.scrollTop=f.current.scrollHeight),s!=="init"&&s!=="type"&&s!=="done"&&setTimeout(()=>{var M;return(M=h.current)==null?void 0:M.focus()},80)},[l,s]),Ye.useEffect(()=>{const M=tt.context(()=>{tt.from(m.current,{opacity:0,y:40,duration:1.2,ease:"expo.out",scrollTrigger:{trigger:p.current,start:"top 75%",once:!0}})},p);return()=>M.revert()},[]),J.jsxs("section",{ref:p,id:"contact",className:"contact-grid",style:{background:"var(--black)",minHeight:"100vh",display:"grid",gridTemplateColumns:"48% 52%",padding:"8vh 5vw",gap:"4vw",alignItems:"center"},children:[J.jsxs("div",{ref:m,style:{border:"1px solid rgba(255,255,255,0.15)",display:"flex",flexDirection:"column"},children:[J.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"16px 24px",borderBottom:"1px solid rgba(255,255,255,0.1)"},children:[J.jsx("span",{style:{fontFamily:"var(--mono)",fontSize:10,letterSpacing:"0.2em",color:"rgba(255,255,255,0.6)"},children:"TO: YUVRAJ"}),J.jsx("span",{style:{fontFamily:"var(--mono)",fontSize:10,letterSpacing:"0.15em",color:"rgba(255,255,255,0.4)"},children:"( YUVRAJJADAUN2@GMAIL.COM )"})]}),J.jsxs("div",{ref:f,style:{padding:"28px 24px",minHeight:320,maxHeight:420,overflowY:"auto",flex:1},children:[l.map((M,x)=>J.jsx("div",{style:{display:"flex",justifyContent:M.from==="user"?"flex-end":"flex-start",marginBottom:20},children:J.jsxs("p",{style:{fontFamily:"var(--serif)",fontSize:"clamp(16px, 1.6vw, 22px)",lineHeight:1.45,color:"#fff",whiteSpace:"pre-line",maxWidth:M.from==="user"?"75%":"100%",...M.from==="user"?{border:"1px solid rgba(255,255,255,0.2)",padding:"10px 16px"}:{}},children:[M.text,x===0&&J.jsx("button",{onClick:v,style:{display:"inline-block",marginLeft:12,border:"1px solid rgba(255,255,255,0.4)",background:"none",color:"#fff",fontFamily:"var(--mono)",fontSize:10,letterSpacing:"0.2em",padding:"6px 14px",verticalAlign:"middle"},children:"ENTER"})]})},x)),s==="type"&&J.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginTop:8},children:M3.map(M=>J.jsx("button",{onClick:()=>E(M),style:{background:"none",border:"1px solid rgba(255,255,255,0.2)",color:"rgba(255,255,255,0.7)",fontFamily:"var(--mono)",fontSize:10,letterSpacing:"0.15em",padding:"8px 16px",transition:"border-color 0.3s, color 0.3s"},onMouseEnter:x=>{x.currentTarget.style.borderColor="#fff",x.currentTarget.style.color="#fff"},onMouseLeave:x=>{x.currentTarget.style.borderColor="rgba(255,255,255,0.2)",x.currentTarget.style.color="rgba(255,255,255,0.7)"},children:M.toLowerCase()},M))})]}),J.jsxs("div",{style:{borderTop:"1px solid rgba(255,255,255,0.1)",padding:"14px 24px",display:"flex",alignItems:"center",gap:12},children:[s!=="type"&&s!=="done"&&J.jsx("input",{ref:h,value:t,onChange:M=>n(M.target.value),onKeyDown:M=>M.key==="Enter"&&v(),placeholder:s==="init"?"...":s==="name"?"Your name":s==="email"?"your@email.com":"Additional notes...",style:{flex:1,background:"none",border:"none",outline:"none",fontFamily:"var(--mono)",fontSize:12,color:"#fff",caretColor:"#fff"}}),s==="done"&&J.jsx("span",{style:{fontFamily:"var(--mono)",fontSize:11,color:"rgba(255,255,255,0.4)",letterSpacing:"0.1em"},children:"MESSAGE SENT — TALK SOON"}),J.jsx("button",{onClick:v,disabled:s==="done"||s==="type",style:{marginLeft:"auto",background:s==="done"?"transparent":"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",color:"rgba(255,255,255,0.6)",fontFamily:"var(--mono)",fontSize:10,letterSpacing:"0.2em",padding:"10px 20px",transition:"background 0.3s"},onMouseEnter:M=>M.currentTarget.style.background="rgba(255,255,255,0.2)",onMouseLeave:M=>M.currentTarget.style.background="rgba(255,255,255,0.1)",children:"SEND REQUEST"})]})]}),J.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"60vh"},children:J.jsx("div",{style:{width:"52vmin",height:"52vmin"},children:J.jsx(Ye.Suspense,{fallback:null,children:J.jsx(S3,{scene:"https://prod.spline.design/qIB3Yi6uopze8PhU/scene.splinecode"})})})}),J.jsx("style",{children:`
        @media (max-width: 860px) { .contact-grid { grid-template-columns: 1fr !important; } }
      `})]})}tt.registerPlugin(ot);const T3=Ye.lazy(()=>Rd(()=>import("./react-spline-B4gf8ceO.js").then(s=>s.r),[])),w3=[{label:"LinkedIn",href:"https://linkedin.com/in/yuvrajsinghjadaun"},{label:"Dribbble",href:"https://dribbble.com/Uiraj"},{label:"GitHub",href:"https://github.com/yuvrajjadaun"}];function A3(){const s=Ye.useRef(null);return Ye.useEffect(()=>{const e=tt.context(()=>{tt.from(".footer-inner",{opacity:0,y:50,duration:1.2,ease:"expo.out",scrollTrigger:{trigger:s.current,start:"top 80%",once:!0}})},s);return()=>e.revert()},[]),J.jsxs("footer",{ref:s,style:{background:"var(--black)",borderTop:"1px solid rgba(255,255,255,0.08)",padding:"80px 48px 40px"},children:[J.jsxs("div",{className:"footer-inner footer-main",style:{display:"grid",gridTemplateColumns:"1fr auto 1fr",alignItems:"start",gap:"4vw",marginBottom:80},children:[J.jsx("div",{children:J.jsxs("h2",{style:{fontFamily:"var(--display)",fontSize:"clamp(56px, 8.5vw, 122px)",lineHeight:1,color:"var(--white)",letterSpacing:"0.02em"},children:["DESIGNING &",J.jsx("br",{}),"BUILDING SINCE",J.jsx("br",{}),"'2021"]})}),J.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:J.jsx("div",{style:{width:"38vmin",height:"38vmin"},children:J.jsx(Ye.Suspense,{fallback:null,children:J.jsx(T3,{scene:"https://prod.spline.design/qIB3Yi6uopze8PhU/scene.splinecode"})})})}),J.jsxs("div",{style:{textAlign:"right",display:"flex",flexDirection:"column",gap:4},children:[J.jsx("span",{style:{fontFamily:"var(--mono)",fontSize:10,letterSpacing:"0.3em",color:"var(--gray)",marginBottom:8},children:"SOCIALS"}),w3.map(e=>J.jsx("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",style:{fontFamily:"var(--mono)",fontSize:11,letterSpacing:"0.2em",color:"var(--gray)",textDecoration:"none",transition:"color 0.3s",display:"block",lineHeight:2.4},onMouseEnter:t=>t.currentTarget.style.color="var(--white)",onMouseLeave:t=>t.currentTarget.style.color="var(--gray)",children:e.label},e.label))]})]}),J.jsxs("div",{style:{borderTop:"1px solid rgba(255,255,255,0.08)",paddingTop:24,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16},children:[J.jsx("span",{style:{fontFamily:"var(--mono)",fontSize:10,letterSpacing:"0.15em",color:"var(--gray)"},children:"©2026 YUVRAJ SINGH JADAUN. ALL RIGHTS RESERVED."}),J.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[J.jsx("span",{style:{fontFamily:"var(--mono)",fontSize:9,letterSpacing:"0.2em",color:"rgba(255,255,255,0.3)"},children:"BASED IN"}),J.jsx("span",{style:{fontFamily:"var(--mono)",fontSize:10,letterSpacing:"0.15em",color:"var(--gray)",border:"1px solid rgba(255,255,255,0.1)",padding:"4px 12px"},children:"FARIDABAD, IN"}),J.jsx("span",{style:{fontFamily:"var(--mono)",fontSize:10,letterSpacing:"0.15em",color:"var(--gray)",border:"1px solid rgba(255,255,255,0.1)",padding:"4px 12px"},children:"HARYANA"})]}),J.jsx("a",{href:"mailto:yuvrajjadaun2@gmail.com",style:{fontFamily:"var(--mono)",fontSize:10,letterSpacing:"0.15em",color:"var(--gray)",textDecoration:"none",transition:"color 0.3s"},onMouseEnter:e=>e.currentTarget.style.color="var(--white)",onMouseLeave:e=>e.currentTarget.style.color="var(--gray)",children:"YUVRAJJADAUN2@GMAIL.COM"})]}),J.jsx("style",{children:`
        @media (max-width: 860px) {
          .footer-main { grid-template-columns: 1fr !important; text-align: center !important; }
          .footer-main > div { text-align: center !important; }
        }
      `})]})}function b3(){return J.jsxs(Ew,{children:[J.jsx(Tw,{}),J.jsx(ww,{}),J.jsxs("main",{children:[J.jsx(Uw,{}),J.jsx(Ow,{}),J.jsx(l3,{}),J.jsx(c3,{}),J.jsx(h3,{}),J.jsx(p3,{}),J.jsx(_3,{}),J.jsx(x3,{}),J.jsx(y3,{}),J.jsx(E3,{})]}),J.jsx(A3,{})]})}history.scrollRestoration="manual";window.scrollTo(0,0);const V1=document.getElementById("root");if(!V1)throw new Error("Missing #root element");PE.createRoot(V1).render(J.jsx(b3,{}));export{Rd as _,J as j,Ye as r};
