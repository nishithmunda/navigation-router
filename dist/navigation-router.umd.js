(function(_,g){typeof exports=="object"&&typeof module<"u"?g(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],g):(_=typeof globalThis<"u"?globalThis:_||self,g(_["navigation-router"]={},_.React))})(this,function(_,g){"use strict";function ee(){let[i,l]=g.useState({hostname:"",port:"",pathname:"",search:"",hash:"",protocol:""});return g.useEffect(()=>{const{hostname:m,port:h,pathname:T,search:C,hash:S,protocol:w}=document.location;l({hostname:m,port:h,pathname:T,search:C,hash:S,protocol:w})},[document.location.pathname]),i}const re=g.createContext(null),te=g.createContext(null),je=()=>g.useContext(re),ke=()=>g.useContext(te);function De(){const{navigate:i}=ke();return i}function Fe(){const{state:i,visited:l}=je();return{state:i,visited:l}}var Y={},Ae={get exports(){return Y},set exports(i){Y=i}},A={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ne;function Ie(){if(ne)return A;ne=1;var i=g,l=Symbol.for("react.element"),m=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,T=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,C={key:!0,ref:!0,__self:!0,__source:!0};function S(w,y,f){var c,d={},P=null,V=null;f!==void 0&&(P=""+f),y.key!==void 0&&(P=""+y.key),y.ref!==void 0&&(V=y.ref);for(c in y)h.call(y,c)&&!C.hasOwnProperty(c)&&(d[c]=y[c]);if(w&&w.defaultProps)for(c in y=w.defaultProps,y)d[c]===void 0&&(d[c]=y[c]);return{$$typeof:l,type:w,key:P,ref:V,props:d,_owner:T.current}}return A.Fragment=m,A.jsx=S,A.jsxs=S,A}var I={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ae;function Le(){return ae||(ae=1,process.env.NODE_ENV!=="production"&&function(){var i=g,l=Symbol.for("react.element"),m=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),S=Symbol.for("react.provider"),w=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),c=Symbol.for("react.suspense_list"),d=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),V=Symbol.for("react.offscreen"),oe=Symbol.iterator,Ue="@@iterator";function Be(e){if(e===null||typeof e!="object")return null;var r=oe&&e[oe]||e[Ue];return typeof r=="function"?r:null}var k=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function E(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];qe("error",e,t)}}function qe(e,r,t){{var n=k.ReactDebugCurrentFrame,u=n.getStackAddendum();u!==""&&(r+="%s",t=t.concat([u]));var s=t.map(function(o){return String(o)});s.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,s)}}var Je=!1,Ge=!1,ze=!1,Ke=!1,He=!1,ie;ie=Symbol.for("react.module.reference");function Xe(e){return!!(typeof e=="string"||typeof e=="function"||e===h||e===C||He||e===T||e===f||e===c||Ke||e===V||Je||Ge||ze||typeof e=="object"&&e!==null&&(e.$$typeof===P||e.$$typeof===d||e.$$typeof===S||e.$$typeof===w||e.$$typeof===y||e.$$typeof===ie||e.getModuleId!==void 0))}function Ze(e,r,t){var n=e.displayName;if(n)return n;var u=r.displayName||r.name||"";return u!==""?t+"("+u+")":t}function ue(e){return e.displayName||"Context"}function O(e){if(e==null)return null;if(typeof e.tag=="number"&&E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case h:return"Fragment";case m:return"Portal";case C:return"Profiler";case T:return"StrictMode";case f:return"Suspense";case c:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case w:var r=e;return ue(r)+".Consumer";case S:var t=e;return ue(t._context)+".Provider";case y:return Ze(e,e.render,"ForwardRef");case d:var n=e.displayName||null;return n!==null?n:O(e.type)||"Memo";case P:{var u=e,s=u._payload,o=u._init;try{return O(o(s))}catch{return null}}}return null}var j=Object.assign,W=0,se,le,ce,fe,de,ve,pe;function he(){}he.__reactDisabledLog=!0;function Qe(){{if(W===0){se=console.log,le=console.info,ce=console.warn,fe=console.error,de=console.group,ve=console.groupCollapsed,pe=console.groupEnd;var e={configurable:!0,enumerable:!0,value:he,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}W++}}function er(){{if(W--,W===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:j({},e,{value:se}),info:j({},e,{value:le}),warn:j({},e,{value:ce}),error:j({},e,{value:fe}),group:j({},e,{value:de}),groupCollapsed:j({},e,{value:ve}),groupEnd:j({},e,{value:pe})})}W<0&&E("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var J=k.ReactCurrentDispatcher,G;function N(e,r,t){{if(G===void 0)try{throw Error()}catch(u){var n=u.stack.trim().match(/\n( *(at )?)/);G=n&&n[1]||""}return`
`+G+e}}var z=!1,M;{var rr=typeof WeakMap=="function"?WeakMap:Map;M=new rr}function ge(e,r){if(!e||z)return"";{var t=M.get(e);if(t!==void 0)return t}var n;z=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var s;s=J.current,J.current=null,Qe();try{if(r){var o=function(){throw Error()};if(Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(x){n=x}Reflect.construct(e,[],o)}else{try{o.call()}catch(x){n=x}e.call(o.prototype)}}else{try{throw Error()}catch(x){n=x}e()}}catch(x){if(x&&n&&typeof x.stack=="string"){for(var a=x.stack.split(`
`),b=n.stack.split(`
`),v=a.length-1,p=b.length-1;v>=1&&p>=0&&a[v]!==b[p];)p--;for(;v>=1&&p>=0;v--,p--)if(a[v]!==b[p]){if(v!==1||p!==1)do if(v--,p--,p<0||a[v]!==b[p]){var R=`
`+a[v].replace(" at new "," at ");return e.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",e.displayName)),typeof e=="function"&&M.set(e,R),R}while(v>=1&&p>=0);break}}}finally{z=!1,J.current=s,er(),Error.prepareStackTrace=u}var F=e?e.displayName||e.name:"",xe=F?N(F):"";return typeof e=="function"&&M.set(e,xe),xe}function tr(e,r,t){return ge(e,!1)}function nr(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function U(e,r,t){if(e==null)return"";if(typeof e=="function")return ge(e,nr(e));if(typeof e=="string")return N(e);switch(e){case f:return N("Suspense");case c:return N("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case y:return tr(e.render);case d:return U(e.type,r,t);case P:{var n=e,u=n._payload,s=n._init;try{return U(s(u),r,t)}catch{}}}return""}var B=Object.prototype.hasOwnProperty,me={},ye=k.ReactDebugCurrentFrame;function q(e){if(e){var r=e._owner,t=U(e.type,e._source,r?r.type:null);ye.setExtraStackFrame(t)}else ye.setExtraStackFrame(null)}function ar(e,r,t,n,u){{var s=Function.call.bind(B);for(var o in e)if(s(e,o)){var a=void 0;try{if(typeof e[o]!="function"){var b=Error((n||"React class")+": "+t+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[o]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw b.name="Invariant Violation",b}a=e[o](r,o,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(v){a=v}a&&!(a instanceof Error)&&(q(u),E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,o,typeof a),q(null)),a instanceof Error&&!(a.message in me)&&(me[a.message]=!0,q(u),E("Failed %s type: %s",t,a.message),q(null))}}}var or=Array.isArray;function K(e){return or(e)}function ir(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function ur(e){try{return Ee(e),!1}catch{return!0}}function Ee(e){return""+e}function be(e){if(ur(e))return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",ir(e)),Ee(e)}var $=k.ReactCurrentOwner,sr={key:!0,ref:!0,__self:!0,__source:!0},Re,_e,H;H={};function lr(e){if(B.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function cr(e){if(B.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function fr(e,r){if(typeof e.ref=="string"&&$.current&&r&&$.current.stateNode!==r){var t=O($.current.type);H[t]||(E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',O($.current.type),e.ref),H[t]=!0)}}function dr(e,r){{var t=function(){Re||(Re=!0,E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function vr(e,r){{var t=function(){_e||(_e=!0,E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var pr=function(e,r,t,n,u,s,o){var a={$$typeof:l,type:e,key:r,ref:t,props:o,_owner:s};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:u}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function hr(e,r,t,n,u){{var s,o={},a=null,b=null;t!==void 0&&(be(t),a=""+t),cr(r)&&(be(r.key),a=""+r.key),lr(r)&&(b=r.ref,fr(r,u));for(s in r)B.call(r,s)&&!sr.hasOwnProperty(s)&&(o[s]=r[s]);if(e&&e.defaultProps){var v=e.defaultProps;for(s in v)o[s]===void 0&&(o[s]=v[s])}if(a||b){var p=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&dr(o,p),b&&vr(o,p)}return pr(e,a,b,u,n,$.current,o)}}var X=k.ReactCurrentOwner,Te=k.ReactDebugCurrentFrame;function D(e){if(e){var r=e._owner,t=U(e.type,e._source,r?r.type:null);Te.setExtraStackFrame(t)}else Te.setExtraStackFrame(null)}var Z;Z=!1;function Q(e){return typeof e=="object"&&e!==null&&e.$$typeof===l}function we(){{if(X.current){var e=O(X.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function gr(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var Ce={};function mr(e){{var r=we();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Se(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=mr(r);if(Ce[t])return;Ce[t]=!0;var n="";e&&e._owner&&e._owner!==X.current&&(n=" It was passed a child from "+O(e._owner.type)+"."),D(e),E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),D(null)}}function Pe(e,r){{if(typeof e!="object")return;if(K(e))for(var t=0;t<e.length;t++){var n=e[t];Q(n)&&Se(n,r)}else if(Q(e))e._store&&(e._store.validated=!0);else if(e){var u=Be(e);if(typeof u=="function"&&u!==e.entries)for(var s=u.call(e),o;!(o=s.next()).done;)Q(o.value)&&Se(o.value,r)}}}function yr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===y||r.$$typeof===d))t=r.propTypes;else return;if(t){var n=O(r);ar(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!Z){Z=!0;var u=O(r);E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",u||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Er(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){D(e),E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),D(null);break}}e.ref!==null&&(D(e),E("Invalid attribute `ref` supplied to `React.Fragment`."),D(null))}}function Oe(e,r,t,n,u,s){{var o=Xe(e);if(!o){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var b=gr(u);b?a+=b:a+=we();var v;e===null?v="null":K(e)?v="array":e!==void 0&&e.$$typeof===l?(v="<"+(O(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):v=typeof e,E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",v,a)}var p=hr(e,r,t,u,s);if(p==null)return p;if(o){var R=r.children;if(R!==void 0)if(n)if(K(R)){for(var F=0;F<R.length;F++)Pe(R[F],e);Object.freeze&&Object.freeze(R)}else E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Pe(R,e)}return e===h?Er(p):yr(p),p}}function br(e,r,t){return Oe(e,r,t,!0)}function Rr(e,r,t){return Oe(e,r,t,!1)}var _r=Rr,Tr=br;I.Fragment=h,I.jsx=_r,I.jsxs=Tr}()),I}(function(i){process.env.NODE_ENV==="production"?i.exports=Ie():i.exports=Le()})(Ae);const We=Y.Fragment,L=Y.jsx,$e=(i,l)=>i.find(m=>m.path===l)||null;function Ye(i){let l=[];const m=f=>(l.push(f),()=>{l=f.filter(c=>c!==f)});let h={pathname:"/",routeDetail:null,loader:null,navigationInProgress:!1};const T=()=>{let f=window.navigation.entries(),c=f.length>0?new Set(f.map(d=>{var P;return(P=new URL(d==null?void 0:d.url))==null?void 0:P.pathname})):[];return Array.from(c)},C=f=>{h={...h,...f},l.forEach(c=>c(h))},S=async f=>{const{pathname:c}=new URL(f),d=$e(i,c);C({pathname:c,routeDetail:d,navigationInProgress:!1})},w=f=>{f.intercept({async handler(){await S(f.destination.url)}})};return window.navigation.addEventListener("navigate",w),S(window.location.href),{get state(){return h},get visited(){return T()},navigate:(f,c,d)=>{window.navigation.navigate(f,{history:d!=null&&d.replaceMode?"replace":"push",state:c,info:d==null?void 0:d.info})},subscribe:m}}const Ve=({router:i})=>{var m;const l=g.useSyncExternalStore(i==null?void 0:i.subscribe,()=>i==null?void 0:i.state);return L(re.Provider,{value:{state:l,visited:i.visited},children:L("div",{children:(m=l==null?void 0:l.routeDetail)==null?void 0:m.children})})};function Ne({children:i}){const[l,m]=g.useState([]);g.useEffect(()=>{let T=[];g.Children.forEach(i,C=>{T.push(C.props)}),m(T)},[i]);const h=Ye(l);return L(te.Provider,{value:{navigate:h==null?void 0:h.navigate},children:l.length>0&&L(Ve,{router:h})})}const Me=({children:i,path:l})=>{const m=ee();return L(We,{children:m.pathname===l?i:null})};_.Route=Me,_.RouterProvider=Ne,_.useLocation=ee,_.useNavigate=De,_.useRouterState=Fe,Object.defineProperty(_,Symbol.toStringTag,{value:"Module"})});