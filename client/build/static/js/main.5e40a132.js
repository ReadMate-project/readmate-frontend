/*! For license information please see main.5e40a132.js.LICENSE.txt */
(()=>{var e={135:()=>{},811:(e,t,n)=>{var r=n(347),o=n(303).each;function i(e,t){this.query=e,this.isUnconditional=t,this.handlers=[],this.mql=window.matchMedia(e);var n=this;this.listener=function(e){n.mql=e.currentTarget||e,n.assess()},this.mql.addListener(this.listener)}i.prototype={constuctor:i,addHandler:function(e){var t=new r(e);this.handlers.push(t),this.matches()&&t.on()},removeHandler:function(e){var t=this.handlers;o(t,(function(n,r){if(n.equals(e))return n.destroy(),!t.splice(r,1)}))},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){o(this.handlers,(function(e){e.destroy()})),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var e=this.matches()?"on":"off";o(this.handlers,(function(t){t[e]()}))}},e.exports=i},537:(e,t,n)=>{var r=n(811),o=n(303),i=o.each,a=o.isFunction,l=o.isArray;function s(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}s.prototype={constructor:s,register:function(e,t,n){var o=this.queries,s=n&&this.browserIsIncapable;return o[e]||(o[e]=new r(e,s)),a(t)&&(t={match:t}),l(t)||(t=[t]),i(t,(function(t){a(t)&&(t={match:t}),o[e].addHandler(t)})),this},unregister:function(e,t){var n=this.queries[e];return n&&(t?n.removeHandler(t):(n.clear(),delete this.queries[e])),this}},e.exports=s},347:e=>{function t(e){this.options=e,!e.deferSetup&&this.setup()}t.prototype={constructor:t,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(e){return this.options===e||this.options.match===e}},e.exports=t},303:e=>{e.exports={isFunction:function(e){return"function"===typeof e},isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},each:function(e,t){for(var n=0,r=e.length;n<r&&!1!==t(e[n],n);n++);}}},535:(e,t,n)=>{var r=n(537);e.exports=new r},270:(e,t,n)=>{var r=n(475),o=function(e){var t="",n=Object.keys(e);return n.forEach((function(o,i){var a=e[o];(function(e){return/[height|width]$/.test(e)})(o=r(o))&&"number"===typeof a&&(a+="px"),t+=!0===a?o:!1===a?"not "+o:"("+o+": "+a+")",i<n.length-1&&(t+=" and ")})),t};e.exports=function(e){var t="";return"string"===typeof e?e:e instanceof Array?(e.forEach((function(n,r){t+=o(n),r<e.length-1&&(t+=", ")})),t):o(e)}},446:(e,t,n)=>{var r=NaN,o="[object Symbol]",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt,u="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,d="object"==typeof self&&self&&self.Object===Object&&self,f=u||d||Function("return this")(),p=Object.prototype.toString,h=Math.max,g=Math.min,m=function(){return f.Date.now()};function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&p.call(e)==o}(e))return r;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=l.test(e);return n||s.test(e)?c(e.slice(2),n?2:8):a.test(e)?r:+e}e.exports=function(e,t,n){var r,o,i,a,l,s,c=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function y(e){var n=e-s;return void 0===s||n>=t||n<0||d&&e-c>=i}function x(){var e=m();if(y(e))return w(e);l=setTimeout(x,function(e){var n=t-(e-s);return d?g(n,i-(e-c)):n}(e))}function w(e){return l=void 0,f&&r?p(e):(r=o=void 0,a)}function k(){var e=m(),n=y(e);if(r=arguments,o=this,s=e,n){if(void 0===l)return function(e){return c=e,l=setTimeout(x,t),u?p(e):a}(s);if(d)return l=setTimeout(x,t),p(s)}return void 0===l&&(l=setTimeout(x,t)),a}return t=b(t)||0,v(n)&&(u=!!n.leading,i=(d="maxWait"in n)?h(b(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),k.cancel=function(){void 0!==l&&clearTimeout(l),c=0,r=s=o=l=void 0},k.flush=function(){return void 0===l?a:w(m())},k}},497:(e,t,n)=>{"use strict";var r=n(218);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},173:(e,t,n)=>{e.exports=n(497)()},218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},730:(e,t,n)=>{"use strict";var r=n(43),o=n(853);function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,l={};function s(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(l[e]=t,e=0;e<t.length;e++)a.add(t[e])}var u=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},h={};function g(e,t,n,r,o,i,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var m={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){m[e]=new g(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];m[t]=new g(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){m[e]=new g(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){m[e]=new g(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){m[e]=new g(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){m[e]=new g(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){m[e]=new g(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){m[e]=new g(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){m[e]=new g(e,5,!1,e.toLowerCase(),null,!1,!1)}));var v=/[\-:]([a-z])/g;function b(e){return e[1].toUpperCase()}function y(e,t,n,r){var o=m.hasOwnProperty(t)?m[t]:null;(null!==o?0!==o.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,o,r)&&(n=null),r||null===o?function(e){return!!d.call(h,e)||!d.call(p,e)&&(f.test(e)?h[e]=!0:(p[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=null===n?3!==o.type&&"":n:(t=o.attributeName,r=o.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(o=o.type)||4===o&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(v,b);m[t]=new g(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(v,b);m[t]=new g(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(v,b);m[t]=new g(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){m[e]=new g(e,1,!1,e.toLowerCase(),null,!1,!1)})),m.xlinkHref=new g("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){m[e]=new g(e,1,!1,e.toLowerCase(),null,!0,!0)}));var x=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),k=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),T=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),_=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),A=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var R=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var D=Symbol.iterator;function N(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=D&&e[D]||e["@@iterator"])?e:null}var I,B=Object.assign;function $(e){if(void 0===I)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);I=t&&t[1]||""}return"\n"+I+e}var z=!1;function M(e,t){if(!e||z)return"";z=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&"string"===typeof c.stack){for(var o=c.stack.split("\n"),i=r.stack.split("\n"),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(1!==a||1!==l)do{if(a--,0>--l||o[a]!==i[l]){var s="\n"+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=a&&0<=l);break}}}finally{z=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?$(e):""}function F(e){switch(e.tag){case 5:return $(e.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return e=M(e.type,!1);case 11:return e=M(e.type.render,!1);case 1:return e=M(e.type,!0);default:return""}}function U(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case S:return"Fragment";case k:return"Portal";case C:return"Profiler";case j:return"StrictMode";case O:return"Suspense";case _:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case T:return(e.displayName||"Context")+".Consumer";case E:return(e._context.displayName||"Context")+".Provider";case P:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case L:return null!==(t=e.displayName||null)?t:U(e.type)||"Memo";case A:t=e._payload,e=e._init;try{return U(e(t))}catch(n){}}return null}function H(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return U(t);case 8:return t===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function W(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function q(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function V(e){e._valueTracker||(e._valueTracker=function(e){var t=q(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){r=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function K(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=q(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Y(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function G(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Q(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=W(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function X(e,t){null!=(t=t.checked)&&y(e,"checked",t,!1)}function J(e,t){X(e,t);var n=W(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,W(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&Y(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+W(n),t=null,o=0;o<e.length;o++){if(e[o].value===n)return e[o].selected=!0,void(r&&(e[o].defaultSelected=!0));null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(i(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function oe(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(i(92));if(te(n)){if(1<n.length)throw Error(i(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:W(n)}}function ie(e,t){var n=W(t.value),r=W(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ae(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,ue,de=(ue=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ue(e,t)}))}:ue);function fe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function ge(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||pe.hasOwnProperty(e)&&pe[e]?(""+t).trim():t+"px"}function me(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),o=ge(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}Object.keys(pe).forEach((function(e){he.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]}))}));var ve=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function be(e,t){if(t){if(ve[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(i(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(i(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(i(62))}}function ye(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xe=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ke=null,Se=null,je=null;function Ce(e){if(e=xo(e)){if("function"!==typeof ke)throw Error(i(280));var t=e.stateNode;t&&(t=ko(t),ke(e.stateNode,e.type,t))}}function Ee(e){Se?je?je.push(e):je=[e]:Se=e}function Te(){if(Se){var e=Se,t=je;if(je=Se=null,Ce(e),t)for(e=0;e<t.length;e++)Ce(t[e])}}function Pe(e,t){return e(t)}function Oe(){}var _e=!1;function Le(e,t,n){if(_e)return e(t,n);_e=!0;try{return Pe(e,t,n)}finally{_e=!1,(null!==Se||null!==je)&&(Oe(),Te())}}function Ae(e,t){var n=e.stateNode;if(null===n)return null;var r=ko(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(i(231,t,typeof n));return n}var Re=!1;if(u)try{var De={};Object.defineProperty(De,"passive",{get:function(){Re=!0}}),window.addEventListener("test",De,De),window.removeEventListener("test",De,De)}catch(ue){Re=!1}function Ne(e,t,n,r,o,i,a,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var Ie=!1,Be=null,$e=!1,ze=null,Me={onError:function(e){Ie=!0,Be=e}};function Fe(e,t,n,r,o,i,a,l,s){Ie=!1,Be=null,Ne.apply(Me,arguments)}function Ue(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function He(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function We(e){if(Ue(e)!==e)throw Error(i(188))}function qe(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ue(e)))throw Error(i(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(null===o)break;var a=o.alternate;if(null===a){if(null!==(r=o.return)){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return We(o),e;if(a===r)return We(o),t;a=a.sibling}throw Error(i(188))}if(n.return!==r.return)n=o,r=a;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=a;break}if(s===r){l=!0,r=o,n=a;break}s=s.sibling}if(!l){for(s=a.child;s;){if(s===n){l=!0,n=a,r=o;break}if(s===r){l=!0,r=a,n=o;break}s=s.sibling}if(!l)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(3!==n.tag)throw Error(i(188));return n.stateNode.current===n?e:t}(e))?Ve(e):null}function Ve(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ve(e);if(null!==t)return t;e=e.sibling}return null}var Ke=o.unstable_scheduleCallback,Ye=o.unstable_cancelCallback,Ge=o.unstable_shouldYield,Qe=o.unstable_requestPaint,Xe=o.unstable_now,Je=o.unstable_getCurrentPriorityLevel,Ze=o.unstable_ImmediatePriority,et=o.unstable_UserBlockingPriority,tt=o.unstable_NormalPriority,nt=o.unstable_LowPriority,rt=o.unstable_IdlePriority,ot=null,it=null;var at=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/st|0)|0},lt=Math.log,st=Math.LN2;var ct=64,ut=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ft(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=268435455&n;if(0!==a){var l=a&~o;0!==l?r=dt(l):0!==(i&=a)&&(r=dt(i))}else 0!==(a=n&~o)?r=dt(a):0!==i&&(r=dt(i));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&o)&&((o=r&-r)>=(i=t&-t)||16===o&&0!==(4194240&i)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)o=1<<(n=31-at(t)),r|=e[n],t&=~o;return r}function pt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function gt(){var e=ct;return 0===(4194240&(ct<<=1))&&(ct=64),e}function mt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-at(t)]=n}function bt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var yt=0;function xt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,kt,St,jt,Ct,Et=!1,Tt=[],Pt=null,Ot=null,_t=null,Lt=new Map,At=new Map,Rt=[],Dt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nt(e,t){switch(e){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":Ot=null;break;case"mouseover":case"mouseout":_t=null;break;case"pointerover":case"pointerout":Lt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":At.delete(t.pointerId)}}function It(e,t,n,r,o,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},null!==t&&(null!==(t=xo(t))&&kt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==o&&-1===t.indexOf(o)&&t.push(o),e)}function Bt(e){var t=yo(e.target);if(null!==t){var n=Ue(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=He(n)))return e.blockedOn=t,void Ct(e.priority,(function(){St(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function $t(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=xo(n))&&kt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);xe=r,n.target.dispatchEvent(r),xe=null,t.shift()}return!0}function zt(e,t,n){$t(e)&&n.delete(t)}function Mt(){Et=!1,null!==Pt&&$t(Pt)&&(Pt=null),null!==Ot&&$t(Ot)&&(Ot=null),null!==_t&&$t(_t)&&(_t=null),Lt.forEach(zt),At.forEach(zt)}function Ft(e,t){e.blockedOn===t&&(e.blockedOn=null,Et||(Et=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Mt)))}function Ut(e){function t(t){return Ft(t,e)}if(0<Tt.length){Ft(Tt[0],e);for(var n=1;n<Tt.length;n++){var r=Tt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Pt&&Ft(Pt,e),null!==Ot&&Ft(Ot,e),null!==_t&&Ft(_t,e),Lt.forEach(t),At.forEach(t),n=0;n<Rt.length;n++)(r=Rt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Rt.length&&null===(n=Rt[0]).blockedOn;)Bt(n),null===n.blockedOn&&Rt.shift()}var Ht=x.ReactCurrentBatchConfig,Wt=!0;function qt(e,t,n,r){var o=yt,i=Ht.transition;Ht.transition=null;try{yt=1,Kt(e,t,n,r)}finally{yt=o,Ht.transition=i}}function Vt(e,t,n,r){var o=yt,i=Ht.transition;Ht.transition=null;try{yt=4,Kt(e,t,n,r)}finally{yt=o,Ht.transition=i}}function Kt(e,t,n,r){if(Wt){var o=Gt(e,t,n,r);if(null===o)Wr(e,t,r,Yt,n),Nt(e,r);else if(function(e,t,n,r,o){switch(t){case"focusin":return Pt=It(Pt,e,t,n,r,o),!0;case"dragenter":return Ot=It(Ot,e,t,n,r,o),!0;case"mouseover":return _t=It(_t,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Lt.set(i,It(Lt.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,At.set(i,It(At.get(i)||null,e,t,n,r,o)),!0}return!1}(o,e,t,n,r))r.stopPropagation();else if(Nt(e,r),4&t&&-1<Dt.indexOf(e)){for(;null!==o;){var i=xo(o);if(null!==i&&wt(i),null===(i=Gt(e,t,n,r))&&Wr(e,t,r,Yt,n),i===o)break;o=i}null!==o&&r.stopPropagation()}else Wr(e,t,r,null,n)}}var Yt=null;function Gt(e,t,n,r){if(Yt=null,null!==(e=yo(e=we(r))))if(null===(t=Ue(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=He(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yt=e,null}function Qt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Je()){case Ze:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Xt=null,Jt=null,Zt=null;function en(){if(Zt)return Zt;var e,t,n=Jt,r=n.length,o="value"in Xt?Xt.value:Xt.textContent,i=o.length;for(e=0;e<r&&n[e]===o[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===o[i-t];t++);return Zt=o.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function on(e){function t(t,n,r,o,i){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=o,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var an,ln,sn,cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},un=on(cn),dn=B({},cn,{view:0,detail:0}),fn=on(dn),pn=B({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&"mousemove"===e.type?(an=e.screenX-sn.screenX,ln=e.screenY-sn.screenY):ln=an=0,sn=e),an)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),hn=on(pn),gn=on(B({},pn,{dataTransfer:0})),mn=on(B({},dn,{relatedTarget:0})),vn=on(B({},cn,{animationName:0,elapsedTime:0,pseudoElement:0})),bn=B({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yn=on(bn),xn=on(B({},cn,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Sn[e])&&!!t[e]}function Cn(){return jn}var En=B({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?kn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cn,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Tn=on(En),Pn=on(B({},pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),On=on(B({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cn})),_n=on(B({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Ln=B({},pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),An=on(Ln),Rn=[9,13,27,32],Dn=u&&"CompositionEvent"in window,Nn=null;u&&"documentMode"in document&&(Nn=document.documentMode);var In=u&&"TextEvent"in window&&!Nn,Bn=u&&(!Dn||Nn&&8<Nn&&11>=Nn),$n=String.fromCharCode(32),zn=!1;function Mn(e,t){switch(e){case"keyup":return-1!==Rn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Un=!1;var Hn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Hn[e.type]:"textarea"===t}function qn(e,t,n,r){Ee(r),0<(t=Vr(t,"onChange")).length&&(n=new un("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Vn=null,Kn=null;function Yn(e){$r(e,0)}function Gn(e){if(K(wo(e)))return e}function Qn(e,t){if("change"===e)return t}var Xn=!1;if(u){var Jn;if(u){var Zn="oninput"in document;if(!Zn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Zn="function"===typeof er.oninput}Jn=Zn}else Jn=!1;Xn=Jn&&(!document.documentMode||9<document.documentMode)}function tr(){Vn&&(Vn.detachEvent("onpropertychange",nr),Kn=Vn=null)}function nr(e){if("value"===e.propertyName&&Gn(Kn)){var t=[];qn(t,Kn,e,we(e)),Le(Yn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Kn=n,(Vn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function or(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Gn(Kn)}function ir(e,t){if("click"===e)return Gn(t)}function ar(e,t){if("input"===e||"change"===e)return Gn(t)}var lr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function sr(e,t){if(lr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!d.call(t,o)||!lr(e[o],t[o]))return!1}return!0}function cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ur(e,t){var n,r=cr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=cr(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function fr(){for(var e=window,t=Y();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Y((e=t.contentWindow).document)}return t}function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=fr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&pr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=void 0===r.end?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=ur(n,i);var a=ur(n,r);o&&a&&(1!==e.rangeCount||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gr=u&&"documentMode"in document&&11>=document.documentMode,mr=null,vr=null,br=null,yr=!1;function xr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;yr||null==mr||mr!==Y(r)||("selectionStart"in(r=mr)&&pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},br&&sr(br,r)||(br=r,0<(r=Vr(vr,"onSelect")).length&&(t=new un("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=mr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},Sr={},jr={};function Cr(e){if(Sr[e])return Sr[e];if(!kr[e])return e;var t,n=kr[e];for(t in n)if(n.hasOwnProperty(t)&&t in jr)return Sr[e]=n[t];return e}u&&(jr=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);var Er=Cr("animationend"),Tr=Cr("animationiteration"),Pr=Cr("animationstart"),Or=Cr("transitionend"),_r=new Map,Lr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(e,t){_r.set(e,t),s(t,[e])}for(var Rr=0;Rr<Lr.length;Rr++){var Dr=Lr[Rr];Ar(Dr.toLowerCase(),"on"+(Dr[0].toUpperCase()+Dr.slice(1)))}Ar(Er,"onAnimationEnd"),Ar(Tr,"onAnimationIteration"),Ar(Pr,"onAnimationStart"),Ar("dblclick","onDoubleClick"),Ar("focusin","onFocus"),Ar("focusout","onBlur"),Ar(Or,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ir=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nr));function Br(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,o,a,l,s,c){if(Fe.apply(this,arguments),Ie){if(!Ie)throw Error(i(198));var u=Be;Ie=!1,Be=null,$e||($e=!0,ze=u)}}(r,t,void 0,e),e.currentTarget=null}function $r(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;Br(o,l,c),i=s}else for(a=0;a<r.length;a++){if(s=(l=r[a]).instance,c=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;Br(o,l,c),i=s}}}if($e)throw e=ze,$e=!1,ze=null,e}function zr(e,t){var n=t[mo];void 0===n&&(n=t[mo]=new Set);var r=e+"__bubble";n.has(r)||(Hr(t,e,2,!1),n.add(r))}function Mr(e,t,n){var r=0;t&&(r|=4),Hr(n,e,r,t)}var Fr="_reactListening"+Math.random().toString(36).slice(2);function Ur(e){if(!e[Fr]){e[Fr]=!0,a.forEach((function(t){"selectionchange"!==t&&(Ir.has(t)||Mr(t,!1,e),Mr(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Fr]||(t[Fr]=!0,Mr("selectionchange",!1,t))}}function Hr(e,t,n,r){switch(Qt(t)){case 1:var o=qt;break;case 4:o=Vt;break;default:o=Kt}n=o.bind(null,t,n,e),o=void 0,!Re||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(o=!0),r?void 0!==o?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):void 0!==o?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Wr(e,t,n,r,o){var i=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var l=r.stateNode.containerInfo;if(l===o||8===l.nodeType&&l.parentNode===o)break;if(4===a)for(a=r.return;null!==a;){var s=a.tag;if((3===s||4===s)&&((s=a.stateNode.containerInfo)===o||8===s.nodeType&&s.parentNode===o))return;a=a.return}for(;null!==l;){if(null===(a=yo(l)))return;if(5===(s=a.tag)||6===s){r=i=a;continue e}l=l.parentNode}}r=r.return}Le((function(){var r=i,o=we(n),a=[];e:{var l=_r.get(e);if(void 0!==l){var s=un,c=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":s=Tn;break;case"focusin":c="focus",s=mn;break;case"focusout":c="blur",s=mn;break;case"beforeblur":case"afterblur":s=mn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=gn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=On;break;case Er:case Tr:case Pr:s=vn;break;case Or:s=_n;break;case"scroll":s=fn;break;case"wheel":s=An;break;case"copy":case"cut":case"paste":s=yn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=Pn}var u=0!==(4&t),d=!u&&"scroll"===e,f=u?null!==l?l+"Capture":null:l;u=[];for(var p,h=r;null!==h;){var g=(p=h).stateNode;if(5===p.tag&&null!==g&&(p=g,null!==f&&(null!=(g=Ae(h,f))&&u.push(qr(h,g,p)))),d)break;h=h.return}0<u.length&&(l=new s(l,c,null,n,o),a.push({event:l,listeners:u}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===xe||!(c=n.relatedTarget||n.fromElement)||!yo(c)&&!c[go])&&(s||l)&&(l=o.window===o?o:(l=o.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(c=(c=n.relatedTarget||n.toElement)?yo(c):null)&&(c!==(d=Ue(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(s=null,c=r),s!==c)){if(u=hn,g="onMouseLeave",f="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(u=Pn,g="onPointerLeave",f="onPointerEnter",h="pointer"),d=null==s?l:wo(s),p=null==c?l:wo(c),(l=new u(g,h+"leave",s,n,o)).target=d,l.relatedTarget=p,g=null,yo(o)===r&&((u=new u(f,h+"enter",c,n,o)).target=p,u.relatedTarget=d,g=u),d=g,s&&c)e:{for(f=c,h=0,p=u=s;p;p=Kr(p))h++;for(p=0,g=f;g;g=Kr(g))p++;for(;0<h-p;)u=Kr(u),h--;for(;0<p-h;)f=Kr(f),p--;for(;h--;){if(u===f||null!==f&&u===f.alternate)break e;u=Kr(u),f=Kr(f)}u=null}else u=null;null!==s&&Yr(a,l,s,u,!1),null!==c&&null!==d&&Yr(a,d,c,u,!0)}if("select"===(s=(l=r?wo(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var m=Qn;else if(Wn(l))if(Xn)m=ar;else{m=or;var v=rr}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(m=ir);switch(m&&(m=m(e,r))?qn(a,m,n,o):(v&&v(e,l,r),"focusout"===e&&(v=l._wrapperState)&&v.controlled&&"number"===l.type&&ee(l,"number",l.value)),v=r?wo(r):window,e){case"focusin":(Wn(v)||"true"===v.contentEditable)&&(mr=v,vr=r,br=null);break;case"focusout":br=vr=mr=null;break;case"mousedown":yr=!0;break;case"contextmenu":case"mouseup":case"dragend":yr=!1,xr(a,n,o);break;case"selectionchange":if(gr)break;case"keydown":case"keyup":xr(a,n,o)}var b;if(Dn)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Un?Mn(e,n)&&(y="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(y="onCompositionStart");y&&(Bn&&"ko"!==n.locale&&(Un||"onCompositionStart"!==y?"onCompositionEnd"===y&&Un&&(b=en()):(Jt="value"in(Xt=o)?Xt.value:Xt.textContent,Un=!0)),0<(v=Vr(r,y)).length&&(y=new xn(y,e,null,n,o),a.push({event:y,listeners:v}),b?y.data=b:null!==(b=Fn(n))&&(y.data=b))),(b=In?function(e,t){switch(e){case"compositionend":return Fn(t);case"keypress":return 32!==t.which?null:(zn=!0,$n);case"textInput":return(e=t.data)===$n&&zn?null:e;default:return null}}(e,n):function(e,t){if(Un)return"compositionend"===e||!Dn&&Mn(e,t)?(e=en(),Zt=Jt=Xt=null,Un=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Bn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Vr(r,"onBeforeInput")).length&&(o=new xn("onBeforeInput","beforeinput",null,n,o),a.push({event:o,listeners:r}),o.data=b))}$r(a,t)}))}function qr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vr(e,t){for(var n=t+"Capture",r=[];null!==e;){var o=e,i=o.stateNode;5===o.tag&&null!==i&&(o=i,null!=(i=Ae(e,n))&&r.unshift(qr(e,i,o)),null!=(i=Ae(e,t))&&r.push(qr(e,i,o))),e=e.return}return r}function Kr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Yr(e,t,n,r,o){for(var i=t._reactName,a=[];null!==n&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(null!==s&&s===r)break;5===l.tag&&null!==c&&(l=c,o?null!=(s=Ae(n,i))&&a.unshift(qr(n,s,l)):o||null!=(s=Ae(n,i))&&a.push(qr(n,s,l))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var Gr=/\r\n?/g,Qr=/\u0000|\uFFFD/g;function Xr(e){return("string"===typeof e?e:""+e).replace(Gr,"\n").replace(Qr,"")}function Jr(e,t,n){if(t=Xr(t),Xr(e)!==t&&n)throw Error(i(425))}function Zr(){}var eo=null,to=null;function no(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ro="function"===typeof setTimeout?setTimeout:void 0,oo="function"===typeof clearTimeout?clearTimeout:void 0,io="function"===typeof Promise?Promise:void 0,ao="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof io?function(e){return io.resolve(null).then(e).catch(lo)}:ro;function lo(e){setTimeout((function(){throw e}))}function so(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&8===o.nodeType)if("/$"===(n=o.data)){if(0===r)return e.removeChild(o),void Ut(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=o}while(n);Ut(t)}function co(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function uo(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var fo=Math.random().toString(36).slice(2),po="__reactFiber$"+fo,ho="__reactProps$"+fo,go="__reactContainer$"+fo,mo="__reactEvents$"+fo,vo="__reactListeners$"+fo,bo="__reactHandles$"+fo;function yo(e){var t=e[po];if(t)return t;for(var n=e.parentNode;n;){if(t=n[go]||n[po]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=uo(e);null!==e;){if(n=e[po])return n;e=uo(e)}return t}n=(e=n).parentNode}return null}function xo(e){return!(e=e[po]||e[go])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function wo(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(i(33))}function ko(e){return e[ho]||null}var So=[],jo=-1;function Co(e){return{current:e}}function Eo(e){0>jo||(e.current=So[jo],So[jo]=null,jo--)}function To(e,t){jo++,So[jo]=e.current,e.current=t}var Po={},Oo=Co(Po),_o=Co(!1),Lo=Po;function Ao(e,t){var n=e.type.contextTypes;if(!n)return Po;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o,i={};for(o in n)i[o]=t[o];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ro(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Do(){Eo(_o),Eo(Oo)}function No(e,t,n){if(Oo.current!==Po)throw Error(i(168));To(Oo,t),To(_o,n)}function Io(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var o in r=r.getChildContext())if(!(o in t))throw Error(i(108,H(e)||"Unknown",o));return B({},n,r)}function Bo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Po,Lo=Oo.current,To(Oo,e),To(_o,_o.current),!0}function $o(e,t,n){var r=e.stateNode;if(!r)throw Error(i(169));n?(e=Io(e,t,Lo),r.__reactInternalMemoizedMergedChildContext=e,Eo(_o),Eo(Oo),To(Oo,e)):Eo(_o),To(_o,n)}var zo=null,Mo=!1,Fo=!1;function Uo(e){null===zo?zo=[e]:zo.push(e)}function Ho(){if(!Fo&&null!==zo){Fo=!0;var e=0,t=yt;try{var n=zo;for(yt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}zo=null,Mo=!1}catch(o){throw null!==zo&&(zo=zo.slice(e+1)),Ke(Ze,Ho),o}finally{yt=t,Fo=!1}}return null}var Wo=[],qo=0,Vo=null,Ko=0,Yo=[],Go=0,Qo=null,Xo=1,Jo="";function Zo(e,t){Wo[qo++]=Ko,Wo[qo++]=Vo,Vo=e,Ko=t}function ei(e,t,n){Yo[Go++]=Xo,Yo[Go++]=Jo,Yo[Go++]=Qo,Qo=e;var r=Xo;e=Jo;var o=32-at(r)-1;r&=~(1<<o),n+=1;var i=32-at(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Xo=1<<32-at(t)+o|n<<o|r,Jo=i+e}else Xo=1<<i|n<<o|r,Jo=e}function ti(e){null!==e.return&&(Zo(e,1),ei(e,1,0))}function ni(e){for(;e===Vo;)Vo=Wo[--qo],Wo[qo]=null,Ko=Wo[--qo],Wo[qo]=null;for(;e===Qo;)Qo=Yo[--Go],Yo[Go]=null,Jo=Yo[--Go],Yo[Go]=null,Xo=Yo[--Go],Yo[Go]=null}var ri=null,oi=null,ii=!1,ai=null;function li(e,t){var n=Lc(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function si(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ri=e,oi=co(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ri=e,oi=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Qo?{id:Xo,overflow:Jo}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Lc(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ri=e,oi=null,!0);default:return!1}}function ci(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function ui(e){if(ii){var t=oi;if(t){var n=t;if(!si(e,t)){if(ci(e))throw Error(i(418));t=co(n.nextSibling);var r=ri;t&&si(e,t)?li(r,n):(e.flags=-4097&e.flags|2,ii=!1,ri=e)}}else{if(ci(e))throw Error(i(418));e.flags=-4097&e.flags|2,ii=!1,ri=e}}}function di(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ri=e}function fi(e){if(e!==ri)return!1;if(!ii)return di(e),ii=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!no(e.type,e.memoizedProps)),t&&(t=oi)){if(ci(e))throw pi(),Error(i(418));for(;t;)li(e,t),t=co(t.nextSibling)}if(di(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){oi=co(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}oi=null}}else oi=ri?co(e.stateNode.nextSibling):null;return!0}function pi(){for(var e=oi;e;)e=co(e.nextSibling)}function hi(){oi=ri=null,ii=!1}function gi(e){null===ai?ai=[e]:ai.push(e)}var mi=x.ReactCurrentBatchConfig;function vi(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(i(309));var r=n.stateNode}if(!r)throw Error(i(147,e));var o=r,a=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===a?t.ref:(t=function(e){var t=o.refs;null===e?delete t[a]:t[a]=e},t._stringRef=a,t)}if("string"!==typeof e)throw Error(i(284));if(!n._owner)throw Error(i(290,e))}return e}function bi(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yi(e){return(0,e._init)(e._payload)}function xi(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function o(e,t){return(e=Rc(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Bc(n,e.mode,r)).return=e,t):((t=o(t,n)).return=e,t)}function c(e,t,n,r){var i=n.type;return i===S?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===i||"object"===typeof i&&null!==i&&i.$$typeof===A&&yi(i)===t.type)?((r=o(t,n.props)).ref=vi(e,t,n),r.return=e,r):((r=Dc(n.type,n.key,n.props,null,e.mode,r)).ref=vi(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=$c(n,e.mode,r)).return=e,t):((t=o(t,n.children||[])).return=e,t)}function d(e,t,n,r,i){return null===t||7!==t.tag?((t=Nc(n,e.mode,r,i)).return=e,t):((t=o(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Bc(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Dc(t.type,t.key,t.props,null,e.mode,n)).ref=vi(e,null,t),n.return=e,n;case k:return(t=$c(t,e.mode,n)).return=e,t;case A:return f(e,(0,t._init)(t._payload),n)}if(te(t)||N(t))return(t=Nc(t,e.mode,n,null)).return=e,t;bi(e,t)}return null}function p(e,t,n,r){var o=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==o?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===o?c(e,t,n,r):null;case k:return n.key===o?u(e,t,n,r):null;case A:return p(e,t,(o=n._init)(n._payload),r)}if(te(n)||N(n))return null!==o?null:d(e,t,n,r,null);bi(e,n)}return null}function h(e,t,n,r,o){if("string"===typeof r&&""!==r||"number"===typeof r)return s(t,e=e.get(n)||null,""+r,o);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return c(t,e=e.get(null===r.key?n:r.key)||null,r,o);case k:return u(t,e=e.get(null===r.key?n:r.key)||null,r,o);case A:return h(e,t,n,(0,r._init)(r._payload),o)}if(te(r)||N(r))return d(t,e=e.get(n)||null,r,o,null);bi(t,r)}return null}function g(o,i,l,s){for(var c=null,u=null,d=i,g=i=0,m=null;null!==d&&g<l.length;g++){d.index>g?(m=d,d=null):m=d.sibling;var v=p(o,d,l[g],s);if(null===v){null===d&&(d=m);break}e&&d&&null===v.alternate&&t(o,d),i=a(v,i,g),null===u?c=v:u.sibling=v,u=v,d=m}if(g===l.length)return n(o,d),ii&&Zo(o,g),c;if(null===d){for(;g<l.length;g++)null!==(d=f(o,l[g],s))&&(i=a(d,i,g),null===u?c=d:u.sibling=d,u=d);return ii&&Zo(o,g),c}for(d=r(o,d);g<l.length;g++)null!==(m=h(d,o,g,l[g],s))&&(e&&null!==m.alternate&&d.delete(null===m.key?g:m.key),i=a(m,i,g),null===u?c=m:u.sibling=m,u=m);return e&&d.forEach((function(e){return t(o,e)})),ii&&Zo(o,g),c}function m(o,l,s,c){var u=N(s);if("function"!==typeof u)throw Error(i(150));if(null==(s=u.call(s)))throw Error(i(151));for(var d=u=null,g=l,m=l=0,v=null,b=s.next();null!==g&&!b.done;m++,b=s.next()){g.index>m?(v=g,g=null):v=g.sibling;var y=p(o,g,b.value,c);if(null===y){null===g&&(g=v);break}e&&g&&null===y.alternate&&t(o,g),l=a(y,l,m),null===d?u=y:d.sibling=y,d=y,g=v}if(b.done)return n(o,g),ii&&Zo(o,m),u;if(null===g){for(;!b.done;m++,b=s.next())null!==(b=f(o,b.value,c))&&(l=a(b,l,m),null===d?u=b:d.sibling=b,d=b);return ii&&Zo(o,m),u}for(g=r(o,g);!b.done;m++,b=s.next())null!==(b=h(g,o,m,b.value,c))&&(e&&null!==b.alternate&&g.delete(null===b.key?m:b.key),l=a(b,l,m),null===d?u=b:d.sibling=b,d=b);return e&&g.forEach((function(e){return t(o,e)})),ii&&Zo(o,m),u}return function e(r,i,a,s){if("object"===typeof a&&null!==a&&a.type===S&&null===a.key&&(a=a.props.children),"object"===typeof a&&null!==a){switch(a.$$typeof){case w:e:{for(var c=a.key,u=i;null!==u;){if(u.key===c){if((c=a.type)===S){if(7===u.tag){n(r,u.sibling),(i=o(u,a.props.children)).return=r,r=i;break e}}else if(u.elementType===c||"object"===typeof c&&null!==c&&c.$$typeof===A&&yi(c)===u.type){n(r,u.sibling),(i=o(u,a.props)).ref=vi(r,u,a),i.return=r,r=i;break e}n(r,u);break}t(r,u),u=u.sibling}a.type===S?((i=Nc(a.props.children,r.mode,s,a.key)).return=r,r=i):((s=Dc(a.type,a.key,a.props,null,r.mode,s)).ref=vi(r,i,a),s.return=r,r=s)}return l(r);case k:e:{for(u=a.key;null!==i;){if(i.key===u){if(4===i.tag&&i.stateNode.containerInfo===a.containerInfo&&i.stateNode.implementation===a.implementation){n(r,i.sibling),(i=o(i,a.children||[])).return=r,r=i;break e}n(r,i);break}t(r,i),i=i.sibling}(i=$c(a,r.mode,s)).return=r,r=i}return l(r);case A:return e(r,i,(u=a._init)(a._payload),s)}if(te(a))return g(r,i,a,s);if(N(a))return m(r,i,a,s);bi(r,a)}return"string"===typeof a&&""!==a||"number"===typeof a?(a=""+a,null!==i&&6===i.tag?(n(r,i.sibling),(i=o(i,a)).return=r,r=i):(n(r,i),(i=Bc(a,r.mode,s)).return=r,r=i),l(r)):n(r,i)}}var wi=xi(!0),ki=xi(!1),Si=Co(null),ji=null,Ci=null,Ei=null;function Ti(){Ei=Ci=ji=null}function Pi(e){var t=Si.current;Eo(Si),e._currentValue=t}function Oi(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function _i(e,t){ji=e,Ei=Ci=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(yl=!0),e.firstContext=null)}function Li(e){var t=e._currentValue;if(Ei!==e)if(e={context:e,memoizedValue:t,next:null},null===Ci){if(null===ji)throw Error(i(308));Ci=e,ji.dependencies={lanes:0,firstContext:e}}else Ci=Ci.next=e;return t}var Ai=null;function Ri(e){null===Ai?Ai=[e]:Ai.push(e)}function Di(e,t,n,r){var o=t.interleaved;return null===o?(n.next=n,Ri(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ni(e,r)}function Ni(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Ii=!1;function Bi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $i(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function zi(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Mi(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Ps)){var o=r.pending;return null===o?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ni(e,n)}return null===(o=r.interleaved)?(t.next=t,Ri(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ni(e,n)}function Fi(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,bt(e,n)}}function Ui(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var o=null,i=null;if(null!==(n=n.firstBaseUpdate)){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===i?o=i=a:i=i.next=a,n=n.next}while(null!==n);null===i?o=i=t:i=i.next=t}else o=i=t;return n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Hi(e,t,n,r){var o=e.updateQueue;Ii=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(null!==l){o.shared.pending=null;var s=l,c=s.next;s.next=null,null===a?i=c:a.next=c,a=s;var u=e.alternate;null!==u&&((l=(u=u.updateQueue).lastBaseUpdate)!==a&&(null===l?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=s))}if(null!==i){var d=o.baseState;for(a=0,u=c=s=null,l=i;;){var f=l.lane,p=l.eventTime;if((r&f)===f){null!==u&&(u=u.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,g=l;switch(f=t,p=n,g.tag){case 1:if("function"===typeof(h=g.payload)){d=h.call(p,d,f);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(f="function"===typeof(h=g.payload)?h.call(p,d,f):h)||void 0===f)break e;d=B({},d,f);break e;case 2:Ii=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(f=o.effects)?o.effects=[l]:f.push(l))}else p={eventTime:p,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===u?(c=u=p,s=d):u=u.next=p,a|=f;if(null===(l=l.next)){if(null===(l=o.shared.pending))break;l=(f=l).next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}if(null===u&&(s=d),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=u,null!==(t=o.shared.interleaved)){o=t;do{a|=o.lane,o=o.next}while(o!==t)}else null===i&&(o.shared.lanes=0);Is|=a,e.lanes=a,e.memoizedState=d}}function Wi(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(null!==o){if(r.callback=null,r=n,"function"!==typeof o)throw Error(i(191,o));o.call(r)}}}var qi={},Vi=Co(qi),Ki=Co(qi),Yi=Co(qi);function Gi(e){if(e===qi)throw Error(i(174));return e}function Qi(e,t){switch(To(Yi,t),To(Ki,e),To(Vi,qi),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Eo(Vi),To(Vi,t)}function Xi(){Eo(Vi),Eo(Ki),Eo(Yi)}function Ji(e){Gi(Yi.current);var t=Gi(Vi.current),n=se(t,e.type);t!==n&&(To(Ki,e),To(Vi,n))}function Zi(e){Ki.current===e&&(Eo(Vi),Eo(Ki))}var ea=Co(0);function ta(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var na=[];function ra(){for(var e=0;e<na.length;e++)na[e]._workInProgressVersionPrimary=null;na.length=0}var oa=x.ReactCurrentDispatcher,ia=x.ReactCurrentBatchConfig,aa=0,la=null,sa=null,ca=null,ua=!1,da=!1,fa=0,pa=0;function ha(){throw Error(i(321))}function ga(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lr(e[n],t[n]))return!1;return!0}function ma(e,t,n,r,o,a){if(aa=a,la=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,oa.current=null===e||null===e.memoizedState?Za:el,e=n(r,o),da){a=0;do{if(da=!1,fa=0,25<=a)throw Error(i(301));a+=1,ca=sa=null,t.updateQueue=null,oa.current=tl,e=n(r,o)}while(da)}if(oa.current=Ja,t=null!==sa&&null!==sa.next,aa=0,ca=sa=la=null,ua=!1,t)throw Error(i(300));return e}function va(){var e=0!==fa;return fa=0,e}function ba(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ca?la.memoizedState=ca=e:ca=ca.next=e,ca}function ya(){if(null===sa){var e=la.alternate;e=null!==e?e.memoizedState:null}else e=sa.next;var t=null===ca?la.memoizedState:ca.next;if(null!==t)ca=t,sa=e;else{if(null===e)throw Error(i(310));e={memoizedState:(sa=e).memoizedState,baseState:sa.baseState,baseQueue:sa.baseQueue,queue:sa.queue,next:null},null===ca?la.memoizedState=ca=e:ca=ca.next=e}return ca}function xa(e,t){return"function"===typeof t?t(e):t}function wa(e){var t=ya(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=sa,o=r.baseQueue,a=n.pending;if(null!==a){if(null!==o){var l=o.next;o.next=a.next,a.next=l}r.baseQueue=o=a,n.pending=null}if(null!==o){a=o.next,r=r.baseState;var s=l=null,c=null,u=a;do{var d=u.lane;if((aa&d)===d)null!==c&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===c?(s=c=f,l=r):c=c.next=f,la.lanes|=d,Is|=d}u=u.next}while(null!==u&&u!==a);null===c?l=r:c.next=s,lr(r,t.memoizedState)||(yl=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=c,n.lastRenderedState=r}if(null!==(e=n.interleaved)){o=e;do{a=o.lane,la.lanes|=a,Is|=a,o=o.next}while(o!==e)}else null===o&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ka(e){var t=ya(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(null!==o){n.pending=null;var l=o=o.next;do{a=e(a,l.action),l=l.next}while(l!==o);lr(a,t.memoizedState)||(yl=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Sa(){}function ja(e,t){var n=la,r=ya(),o=t(),a=!lr(r.memoizedState,o);if(a&&(r.memoizedState=o,yl=!0),r=r.queue,Ia(Ta.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||null!==ca&&1&ca.memoizedState.tag){if(n.flags|=2048,La(9,Ea.bind(null,n,r,o,t),void 0,null),null===Os)throw Error(i(349));0!==(30&aa)||Ca(n,t,o)}return o}function Ca(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=la.updateQueue)?(t={lastEffect:null,stores:null},la.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Ea(e,t,n,r){t.value=n,t.getSnapshot=r,Pa(t)&&Oa(e)}function Ta(e,t,n){return n((function(){Pa(t)&&Oa(e)}))}function Pa(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lr(e,n)}catch(r){return!0}}function Oa(e){var t=Ni(e,1);null!==t&&nc(t,e,1,-1)}function _a(e){var t=ba();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:e},t.queue=e,e=e.dispatch=Ya.bind(null,la,e),[t.memoizedState,e]}function La(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=la.updateQueue)?(t={lastEffect:null,stores:null},la.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Aa(){return ya().memoizedState}function Ra(e,t,n,r){var o=ba();la.flags|=e,o.memoizedState=La(1|t,n,void 0,void 0===r?null:r)}function Da(e,t,n,r){var o=ya();r=void 0===r?null:r;var i=void 0;if(null!==sa){var a=sa.memoizedState;if(i=a.destroy,null!==r&&ga(r,a.deps))return void(o.memoizedState=La(t,n,i,r))}la.flags|=e,o.memoizedState=La(1|t,n,i,r)}function Na(e,t){return Ra(8390656,8,e,t)}function Ia(e,t){return Da(2048,8,e,t)}function Ba(e,t){return Da(4,2,e,t)}function $a(e,t){return Da(4,4,e,t)}function za(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Ma(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Da(4,4,za.bind(null,t,e),n)}function Fa(){}function Ua(e,t){var n=ya();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ga(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ha(e,t){var n=ya();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ga(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Wa(e,t,n){return 0===(21&aa)?(e.baseState&&(e.baseState=!1,yl=!0),e.memoizedState=n):(lr(n,t)||(n=gt(),la.lanes|=n,Is|=n,e.baseState=!0),t)}function qa(e,t){var n=yt;yt=0!==n&&4>n?n:4,e(!0);var r=ia.transition;ia.transition={};try{e(!1),t()}finally{yt=n,ia.transition=r}}function Va(){return ya().memoizedState}function Ka(e,t,n){var r=tc(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ga(e))Qa(t,n);else if(null!==(n=Di(e,t,n,r))){nc(n,e,r,ec()),Xa(n,t,r)}}function Ya(e,t,n){var r=tc(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ga(e))Qa(t,o);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var a=t.lastRenderedState,l=i(a,n);if(o.hasEagerState=!0,o.eagerState=l,lr(l,a)){var s=t.interleaved;return null===s?(o.next=o,Ri(t)):(o.next=s.next,s.next=o),void(t.interleaved=o)}}catch(c){}null!==(n=Di(e,t,o,r))&&(nc(n,e,r,o=ec()),Xa(n,t,r))}}function Ga(e){var t=e.alternate;return e===la||null!==t&&t===la}function Qa(e,t){da=ua=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xa(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,bt(e,n)}}var Ja={readContext:Li,useCallback:ha,useContext:ha,useEffect:ha,useImperativeHandle:ha,useInsertionEffect:ha,useLayoutEffect:ha,useMemo:ha,useReducer:ha,useRef:ha,useState:ha,useDebugValue:ha,useDeferredValue:ha,useTransition:ha,useMutableSource:ha,useSyncExternalStore:ha,useId:ha,unstable_isNewReconciler:!1},Za={readContext:Li,useCallback:function(e,t){return ba().memoizedState=[e,void 0===t?null:t],e},useContext:Li,useEffect:Na,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ra(4194308,4,za.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ra(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ra(4,2,e,t)},useMemo:function(e,t){var n=ba();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ba();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ka.bind(null,la,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},ba().memoizedState=e},useState:_a,useDebugValue:Fa,useDeferredValue:function(e){return ba().memoizedState=e},useTransition:function(){var e=_a(!1),t=e[0];return e=qa.bind(null,e[1]),ba().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=la,o=ba();if(ii){if(void 0===n)throw Error(i(407));n=n()}else{if(n=t(),null===Os)throw Error(i(349));0!==(30&aa)||Ca(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,Na(Ta.bind(null,r,a,e),[e]),r.flags|=2048,La(9,Ea.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=ba(),t=Os.identifierPrefix;if(ii){var n=Jo;t=":"+t+"R"+(n=(Xo&~(1<<32-at(Xo)-1)).toString(32)+n),0<(n=fa++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=pa++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},el={readContext:Li,useCallback:Ua,useContext:Li,useEffect:Ia,useImperativeHandle:Ma,useInsertionEffect:Ba,useLayoutEffect:$a,useMemo:Ha,useReducer:wa,useRef:Aa,useState:function(){return wa(xa)},useDebugValue:Fa,useDeferredValue:function(e){return Wa(ya(),sa.memoizedState,e)},useTransition:function(){return[wa(xa)[0],ya().memoizedState]},useMutableSource:Sa,useSyncExternalStore:ja,useId:Va,unstable_isNewReconciler:!1},tl={readContext:Li,useCallback:Ua,useContext:Li,useEffect:Ia,useImperativeHandle:Ma,useInsertionEffect:Ba,useLayoutEffect:$a,useMemo:Ha,useReducer:ka,useRef:Aa,useState:function(){return ka(xa)},useDebugValue:Fa,useDeferredValue:function(e){var t=ya();return null===sa?t.memoizedState=e:Wa(t,sa.memoizedState,e)},useTransition:function(){return[ka(xa)[0],ya().memoizedState]},useMutableSource:Sa,useSyncExternalStore:ja,useId:Va,unstable_isNewReconciler:!1};function nl(e,t){if(e&&e.defaultProps){for(var n in t=B({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:B({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var ol={isMounted:function(e){return!!(e=e._reactInternals)&&Ue(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ec(),o=tc(e),i=zi(r,o);i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=Mi(e,i,o))&&(nc(t,e,o,r),Fi(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ec(),o=tc(e),i=zi(r,o);i.tag=1,i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=Mi(e,i,o))&&(nc(t,e,o,r),Fi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ec(),r=tc(e),o=zi(n,r);o.tag=2,void 0!==t&&null!==t&&(o.callback=t),null!==(t=Mi(e,o,r))&&(nc(t,e,r,n),Fi(t,e,r))}};function il(e,t,n,r,o,i,a){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,i,a):!t.prototype||!t.prototype.isPureReactComponent||(!sr(n,r)||!sr(o,i))}function al(e,t,n){var r=!1,o=Po,i=t.contextType;return"object"===typeof i&&null!==i?i=Li(i):(o=Ro(t)?Lo:Oo.current,i=(r=null!==(r=t.contextTypes)&&void 0!==r)?Ao(e,o):Po),t=new t(n,i),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=ol,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function ll(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ol.enqueueReplaceState(t,t.state,null)}function sl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Bi(e);var i=t.contextType;"object"===typeof i&&null!==i?o.context=Li(i):(i=Ro(t)?Lo:Oo.current,o.context=Ao(e,i)),o.state=e.memoizedState,"function"===typeof(i=t.getDerivedStateFromProps)&&(rl(e,t,i,n),o.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof o.getSnapshotBeforeUpdate||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||(t=o.state,"function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount(),t!==o.state&&ol.enqueueReplaceState(o,o.state,null),Hi(e,n,o,r),o.state=e.memoizedState),"function"===typeof o.componentDidMount&&(e.flags|=4194308)}function cl(e,t){try{var n="",r=t;do{n+=F(r),r=r.return}while(r);var o=n}catch(i){o="\nError generating stack: "+i.message+"\n"+i.stack}return{value:e,source:t,stack:o,digest:null}}function ul(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function dl(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var fl="function"===typeof WeakMap?WeakMap:Map;function pl(e,t,n){(n=zi(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ws||(Ws=!0,qs=r),dl(0,t)},n}function hl(e,t,n){(n=zi(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){dl(0,t)}}var i=e.stateNode;return null!==i&&"function"===typeof i.componentDidCatch&&(n.callback=function(){dl(0,t),"function"!==typeof r&&(null===Vs?Vs=new Set([this]):Vs.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function gl(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new fl;var o=new Set;r.set(t,o)}else void 0===(o=r.get(t))&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Cc.bind(null,e,t,n),t.then(e,e))}function ml(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function vl(e,t,n,r,o){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=zi(-1,1)).tag=2,Mi(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var bl=x.ReactCurrentOwner,yl=!1;function xl(e,t,n,r){t.child=null===e?ki(t,null,n,r):wi(t,e.child,n,r)}function wl(e,t,n,r,o){n=n.render;var i=t.ref;return _i(t,o),r=ma(e,t,n,r,i,o),n=va(),null===e||yl?(ii&&n&&ti(t),t.flags|=1,xl(e,t,r,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Wl(e,t,o))}function kl(e,t,n,r,o){if(null===e){var i=n.type;return"function"!==typeof i||Ac(i)||void 0!==i.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Dc(n.type,null,r,t,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,Sl(e,t,i,r,o))}if(i=e.child,0===(e.lanes&o)){var a=i.memoizedProps;if((n=null!==(n=n.compare)?n:sr)(a,r)&&e.ref===t.ref)return Wl(e,t,o)}return t.flags|=1,(e=Rc(i,r)).ref=t.ref,e.return=t,t.child=e}function Sl(e,t,n,r,o){if(null!==e){var i=e.memoizedProps;if(sr(i,r)&&e.ref===t.ref){if(yl=!1,t.pendingProps=r=i,0===(e.lanes&o))return t.lanes=e.lanes,Wl(e,t,o);0!==(131072&e.flags)&&(yl=!0)}}return El(e,t,n,r,o)}function jl(e,t,n){var r=t.pendingProps,o=r.children,i=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},To(Rs,As),As|=n;else{if(0===(1073741824&n))return e=null!==i?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,To(Rs,As),As|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==i?i.baseLanes:n,To(Rs,As),As|=r}else null!==i?(r=i.baseLanes|n,t.memoizedState=null):r=n,To(Rs,As),As|=r;return xl(e,t,o,n),t.child}function Cl(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function El(e,t,n,r,o){var i=Ro(n)?Lo:Oo.current;return i=Ao(t,i),_i(t,o),n=ma(e,t,n,r,i,o),r=va(),null===e||yl?(ii&&r&&ti(t),t.flags|=1,xl(e,t,n,o),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Wl(e,t,o))}function Tl(e,t,n,r,o){if(Ro(n)){var i=!0;Bo(t)}else i=!1;if(_i(t,o),null===t.stateNode)Hl(e,t),al(t,n,r),sl(t,n,r,o),r=!0;else if(null===e){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,c=n.contextType;"object"===typeof c&&null!==c?c=Li(c):c=Ao(t,c=Ro(n)?Lo:Oo.current);var u=n.getDerivedStateFromProps,d="function"===typeof u||"function"===typeof a.getSnapshotBeforeUpdate;d||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(l!==r||s!==c)&&ll(t,a,r,c),Ii=!1;var f=t.memoizedState;a.state=f,Hi(t,r,a,o),s=t.memoizedState,l!==r||f!==s||_o.current||Ii?("function"===typeof u&&(rl(t,n,u,r),s=t.memoizedState),(l=Ii||il(t,n,l,r,f,s,c))?(d||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||("function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"===typeof a.componentDidMount&&(t.flags|=4194308)):("function"===typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=c,r=l):("function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,$i(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:nl(t.type,l),a.props=c,d=t.pendingProps,f=a.context,"object"===typeof(s=n.contextType)&&null!==s?s=Li(s):s=Ao(t,s=Ro(n)?Lo:Oo.current);var p=n.getDerivedStateFromProps;(u="function"===typeof p||"function"===typeof a.getSnapshotBeforeUpdate)||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(l!==d||f!==s)&&ll(t,a,r,s),Ii=!1,f=t.memoizedState,a.state=f,Hi(t,r,a,o);var h=t.memoizedState;l!==d||f!==h||_o.current||Ii?("function"===typeof p&&(rl(t,n,p,r),h=t.memoizedState),(c=Ii||il(t,n,c,r,f,h,s)||!1)?(u||"function"!==typeof a.UNSAFE_componentWillUpdate&&"function"!==typeof a.componentWillUpdate||("function"===typeof a.componentWillUpdate&&a.componentWillUpdate(r,h,s),"function"===typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,h,s)),"function"===typeof a.componentDidUpdate&&(t.flags|=4),"function"===typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof a.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),a.props=r,a.state=h,a.context=s,r=c):("function"!==typeof a.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Pl(e,t,n,r,i,o)}function Pl(e,t,n,r,o,i){Cl(e,t);var a=0!==(128&t.flags);if(!r&&!a)return o&&$o(t,n,!1),Wl(e,t,i);r=t.stateNode,bl.current=t;var l=a&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&a?(t.child=wi(t,e.child,null,i),t.child=wi(t,null,l,i)):xl(e,t,l,i),t.memoizedState=r.state,o&&$o(t,n,!0),t.child}function Ol(e){var t=e.stateNode;t.pendingContext?No(0,t.pendingContext,t.pendingContext!==t.context):t.context&&No(0,t.context,!1),Qi(e,t.containerInfo)}function _l(e,t,n,r,o){return hi(),gi(o),t.flags|=256,xl(e,t,n,r),t.child}var Ll,Al,Rl,Dl,Nl={dehydrated:null,treeContext:null,retryLane:0};function Il(e){return{baseLanes:e,cachePool:null,transitions:null}}function Bl(e,t,n){var r,o=t.pendingProps,a=ea.current,l=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&a)),r?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(a|=1),To(ea,1&a),null===e)return ui(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=o.children,e=o.fallback,l?(o=t.mode,l=t.child,s={mode:"hidden",children:s},0===(1&o)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Ic(s,o,0,null),e=Nc(e,o,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Il(n),t.memoizedState=Nl,e):$l(t,s));if(null!==(a=e.memoizedState)&&null!==(r=a.dehydrated))return function(e,t,n,r,o,a,l){if(n)return 256&t.flags?(t.flags&=-257,zl(e,t,l,r=ul(Error(i(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=Ic({mode:"visible",children:r.children},o,0,null),(a=Nc(a,o,l,null)).flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,0!==(1&t.mode)&&wi(t,e.child,null,l),t.child.memoizedState=Il(l),t.memoizedState=Nl,a);if(0===(1&t.mode))return zl(e,t,l,null);if("$!"===o.data){if(r=o.nextSibling&&o.nextSibling.dataset)var s=r.dgst;return r=s,zl(e,t,l,r=ul(a=Error(i(419)),r,void 0))}if(s=0!==(l&e.childLanes),yl||s){if(null!==(r=Os)){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}0!==(o=0!==(o&(r.suspendedLanes|l))?0:o)&&o!==a.retryLane&&(a.retryLane=o,Ni(e,o),nc(r,e,o,-1))}return gc(),zl(e,t,l,r=ul(Error(i(421))))}return"$?"===o.data?(t.flags|=128,t.child=e.child,t=Tc.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,oi=co(o.nextSibling),ri=t,ii=!0,ai=null,null!==e&&(Yo[Go++]=Xo,Yo[Go++]=Jo,Yo[Go++]=Qo,Xo=e.id,Jo=e.overflow,Qo=t),t=$l(t,r.children),t.flags|=4096,t)}(e,t,s,o,r,a,n);if(l){l=o.fallback,s=t.mode,r=(a=e.child).sibling;var c={mode:"hidden",children:o.children};return 0===(1&s)&&t.child!==a?((o=t.child).childLanes=0,o.pendingProps=c,t.deletions=null):(o=Rc(a,c)).subtreeFlags=14680064&a.subtreeFlags,null!==r?l=Rc(r,l):(l=Nc(l,s,n,null)).flags|=2,l.return=t,o.return=t,o.sibling=l,t.child=o,o=l,l=t.child,s=null===(s=e.child.memoizedState)?Il(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Nl,o}return e=(l=e.child).sibling,o=Rc(l,{mode:"visible",children:o.children}),0===(1&t.mode)&&(o.lanes=n),o.return=t,o.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function $l(e,t){return(t=Ic({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function zl(e,t,n,r){return null!==r&&gi(r),wi(t,e.child,null,n),(e=$l(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Ml(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Oi(e.return,t,n)}function Fl(e,t,n,r,o){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Ul(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(xl(e,t,r.children,n),0!==(2&(r=ea.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Ml(e,n,t);else if(19===e.tag)Ml(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(To(ea,r),0===(1&t.mode))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;null!==n;)null!==(e=n.alternate)&&null===ta(e)&&(o=n),n=n.sibling;null===(n=o)?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Fl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;null!==o;){if(null!==(e=o.alternate)&&null===ta(e)){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Fl(t,!0,n,null,i);break;case"together":Fl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hl(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Is|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(i(153));if(null!==t.child){for(n=Rc(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Rc(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function ql(e,t){if(!ii)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Vl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=14680064&o.subtreeFlags,r|=14680064&o.flags,o.return=e,o=o.sibling;else for(o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Kl(e,t,n){var r=t.pendingProps;switch(ni(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vl(t),null;case 1:case 17:return Ro(t.type)&&Do(),Vl(t),null;case 3:return r=t.stateNode,Xi(),Eo(_o),Eo(Oo),ra(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(fi(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==ai&&(ac(ai),ai=null))),Al(e,t),Vl(t),null;case 5:Zi(t);var o=Gi(Yi.current);if(n=t.type,null!==e&&null!=t.stateNode)Rl(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(i(166));return Vl(t),null}if(e=Gi(Vi.current),fi(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[po]=t,r[ho]=a,e=0!==(1&t.mode),n){case"dialog":zr("cancel",r),zr("close",r);break;case"iframe":case"object":case"embed":zr("load",r);break;case"video":case"audio":for(o=0;o<Nr.length;o++)zr(Nr[o],r);break;case"source":zr("error",r);break;case"img":case"image":case"link":zr("error",r),zr("load",r);break;case"details":zr("toggle",r);break;case"input":Q(r,a),zr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},zr("invalid",r);break;case"textarea":oe(r,a),zr("invalid",r)}for(var s in be(n,a),o=null,a)if(a.hasOwnProperty(s)){var c=a[s];"children"===s?"string"===typeof c?r.textContent!==c&&(!0!==a.suppressHydrationWarning&&Jr(r.textContent,c,e),o=["children",c]):"number"===typeof c&&r.textContent!==""+c&&(!0!==a.suppressHydrationWarning&&Jr(r.textContent,c,e),o=["children",""+c]):l.hasOwnProperty(s)&&null!=c&&"onScroll"===s&&zr("scroll",r)}switch(n){case"input":V(r),Z(r,a,!0);break;case"textarea":V(r),ae(r);break;case"select":case"option":break;default:"function"===typeof a.onClick&&(r.onclick=Zr)}r=o,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===o.nodeType?o:o.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[po]=t,e[ho]=r,Ll(e,t,!1,!1),t.stateNode=e;e:{switch(s=ye(n,r),n){case"dialog":zr("cancel",e),zr("close",e),o=r;break;case"iframe":case"object":case"embed":zr("load",e),o=r;break;case"video":case"audio":for(o=0;o<Nr.length;o++)zr(Nr[o],e);o=r;break;case"source":zr("error",e),o=r;break;case"img":case"image":case"link":zr("error",e),zr("load",e),o=r;break;case"details":zr("toggle",e),o=r;break;case"input":Q(e,r),o=G(e,r),zr("invalid",e);break;case"option":default:o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=B({},r,{value:void 0}),zr("invalid",e);break;case"textarea":oe(e,r),o=re(e,r),zr("invalid",e)}for(a in be(n,o),c=o)if(c.hasOwnProperty(a)){var u=c[a];"style"===a?me(e,u):"dangerouslySetInnerHTML"===a?null!=(u=u?u.__html:void 0)&&de(e,u):"children"===a?"string"===typeof u?("textarea"!==n||""!==u)&&fe(e,u):"number"===typeof u&&fe(e,""+u):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(l.hasOwnProperty(a)?null!=u&&"onScroll"===a&&zr("scroll",e):null!=u&&y(e,a,u,s))}switch(n){case"input":V(e),Z(e,r,!1);break;case"textarea":V(e),ae(e);break;case"option":null!=r.value&&e.setAttribute("value",""+W(r.value));break;case"select":e.multiple=!!r.multiple,null!=(a=r.value)?ne(e,!!r.multiple,a,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof o.onClick&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Vl(t),null;case 6:if(e&&null!=t.stateNode)Dl(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(i(166));if(n=Gi(Yi.current),Gi(Vi.current),fi(t)){if(r=t.stateNode,n=t.memoizedProps,r[po]=t,(a=r.nodeValue!==n)&&null!==(e=ri))switch(e.tag){case 3:Jr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Jr(r.nodeValue,n,0!==(1&e.mode))}a&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[po]=t,t.stateNode=r}return Vl(t),null;case 13:if(Eo(ea),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ii&&null!==oi&&0!==(1&t.mode)&&0===(128&t.flags))pi(),hi(),t.flags|=98560,a=!1;else if(a=fi(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(i(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(i(317));a[po]=t}else hi(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Vl(t),a=!1}else null!==ai&&(ac(ai),ai=null),a=!0;if(!a)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ea.current)?0===Ds&&(Ds=3):gc())),null!==t.updateQueue&&(t.flags|=4),Vl(t),null);case 4:return Xi(),Al(e,t),null===e&&Ur(t.stateNode.containerInfo),Vl(t),null;case 10:return Pi(t.type._context),Vl(t),null;case 19:if(Eo(ea),null===(a=t.memoizedState))return Vl(t),null;if(r=0!==(128&t.flags),null===(s=a.rendering))if(r)ql(a,!1);else{if(0!==Ds||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=ta(e))){for(t.flags|=128,ql(a,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(a=n).flags&=14680066,null===(s=a.alternate)?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return To(ea,1&ea.current|2),t.child}e=e.sibling}null!==a.tail&&Xe()>Us&&(t.flags|=128,r=!0,ql(a,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ta(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),ql(a,!0),null===a.tail&&"hidden"===a.tailMode&&!s.alternate&&!ii)return Vl(t),null}else 2*Xe()-a.renderingStartTime>Us&&1073741824!==n&&(t.flags|=128,r=!0,ql(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=a.last)?n.sibling=s:t.child=s,a.last=s)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Xe(),t.sibling=null,n=ea.current,To(ea,r?1&n|2:1&n),t):(Vl(t),null);case 22:case 23:return dc(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&As)&&(Vl(t),6&t.subtreeFlags&&(t.flags|=8192)):Vl(t),null;case 24:case 25:return null}throw Error(i(156,t.tag))}function Yl(e,t){switch(ni(t),t.tag){case 1:return Ro(t.type)&&Do(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Xi(),Eo(_o),Eo(Oo),ra(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Zi(t),null;case 13:if(Eo(ea),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(i(340));hi()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Eo(ea),null;case 4:return Xi(),null;case 10:return Pi(t.type._context),null;case 22:case 23:return dc(),null;default:return null}}Ll=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Al=function(){},Rl=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Gi(Vi.current);var i,a=null;switch(n){case"input":o=G(e,o),r=G(e,r),a=[];break;case"select":o=B({},o,{value:void 0}),r=B({},r,{value:void 0}),a=[];break;case"textarea":o=re(e,o),r=re(e,r),a=[];break;default:"function"!==typeof o.onClick&&"function"===typeof r.onClick&&(e.onclick=Zr)}for(u in be(n,r),n=null,o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&null!=o[u])if("style"===u){var s=o[u];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(l.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var c=r[u];if(s=null!=o?o[u]:void 0,r.hasOwnProperty(u)&&c!==s&&(null!=c||null!=s))if("style"===u)if(s){for(i in s)!s.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in c)c.hasOwnProperty(i)&&s[i]!==c[i]&&(n||(n={}),n[i]=c[i])}else n||(a||(a=[]),a.push(u,n)),n=c;else"dangerouslySetInnerHTML"===u?(c=c?c.__html:void 0,s=s?s.__html:void 0,null!=c&&s!==c&&(a=a||[]).push(u,c)):"children"===u?"string"!==typeof c&&"number"!==typeof c||(a=a||[]).push(u,""+c):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(l.hasOwnProperty(u)?(null!=c&&"onScroll"===u&&zr("scroll",e),a||s===c||(a=[])):(a=a||[]).push(u,c))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}},Dl=function(e,t,n,r){n!==r&&(t.flags|=4)};var Gl=!1,Ql=!1,Xl="function"===typeof WeakSet?WeakSet:Set,Jl=null;function Zl(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){jc(e,t,r)}else n.current=null}function es(e,t,n){try{n()}catch(r){jc(e,t,r)}}var ts=!1;function ns(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,void 0!==i&&es(t,n,i)}o=o.next}while(o!==r)}}function rs(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function os(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function is(e){var t=e.alternate;null!==t&&(e.alternate=null,is(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[po],delete t[ho],delete t[mo],delete t[vo],delete t[bo])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function as(e){return 5===e.tag||3===e.tag||4===e.tag}function ls(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||as(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ss(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Zr));else if(4!==r&&null!==(e=e.child))for(ss(e,t,n),e=e.sibling;null!==e;)ss(e,t,n),e=e.sibling}function cs(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(cs(e,t,n),e=e.sibling;null!==e;)cs(e,t,n),e=e.sibling}var us=null,ds=!1;function fs(e,t,n){for(n=n.child;null!==n;)ps(e,t,n),n=n.sibling}function ps(e,t,n){if(it&&"function"===typeof it.onCommitFiberUnmount)try{it.onCommitFiberUnmount(ot,n)}catch(l){}switch(n.tag){case 5:Ql||Zl(n,t);case 6:var r=us,o=ds;us=null,fs(e,t,n),ds=o,null!==(us=r)&&(ds?(e=us,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):us.removeChild(n.stateNode));break;case 18:null!==us&&(ds?(e=us,n=n.stateNode,8===e.nodeType?so(e.parentNode,n):1===e.nodeType&&so(e,n),Ut(e)):so(us,n.stateNode));break;case 4:r=us,o=ds,us=n.stateNode.containerInfo,ds=!0,fs(e,t,n),us=r,ds=o;break;case 0:case 11:case 14:case 15:if(!Ql&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,void 0!==a&&(0!==(2&i)||0!==(4&i))&&es(n,t,a),o=o.next}while(o!==r)}fs(e,t,n);break;case 1:if(!Ql&&(Zl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){jc(n,t,l)}fs(e,t,n);break;case 21:fs(e,t,n);break;case 22:1&n.mode?(Ql=(r=Ql)||null!==n.memoizedState,fs(e,t,n),Ql=r):fs(e,t,n);break;default:fs(e,t,n)}}function hs(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Xl),t.forEach((function(t){var r=Pc.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function gs(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:us=s.stateNode,ds=!1;break e;case 3:case 4:us=s.stateNode.containerInfo,ds=!0;break e}s=s.return}if(null===us)throw Error(i(160));ps(a,l,o),us=null,ds=!1;var c=o.alternate;null!==c&&(c.return=null),o.return=null}catch(u){jc(o,t,u)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)ms(t,e),t=t.sibling}function ms(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gs(t,e),vs(e),4&r){try{ns(3,e,e.return),rs(3,e)}catch(m){jc(e,e.return,m)}try{ns(5,e,e.return)}catch(m){jc(e,e.return,m)}}break;case 1:gs(t,e),vs(e),512&r&&null!==n&&Zl(n,n.return);break;case 5:if(gs(t,e),vs(e),512&r&&null!==n&&Zl(n,n.return),32&e.flags){var o=e.stateNode;try{fe(o,"")}catch(m){jc(e,e.return,m)}}if(4&r&&null!=(o=e.stateNode)){var a=e.memoizedProps,l=null!==n?n.memoizedProps:a,s=e.type,c=e.updateQueue;if(e.updateQueue=null,null!==c)try{"input"===s&&"radio"===a.type&&null!=a.name&&X(o,a),ye(s,l);var u=ye(s,a);for(l=0;l<c.length;l+=2){var d=c[l],f=c[l+1];"style"===d?me(o,f):"dangerouslySetInnerHTML"===d?de(o,f):"children"===d?fe(o,f):y(o,d,f,u)}switch(s){case"input":J(o,a);break;case"textarea":ie(o,a);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var h=a.value;null!=h?ne(o,!!a.multiple,h,!1):p!==!!a.multiple&&(null!=a.defaultValue?ne(o,!!a.multiple,a.defaultValue,!0):ne(o,!!a.multiple,a.multiple?[]:"",!1))}o[ho]=a}catch(m){jc(e,e.return,m)}}break;case 6:if(gs(t,e),vs(e),4&r){if(null===e.stateNode)throw Error(i(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(m){jc(e,e.return,m)}}break;case 3:if(gs(t,e),vs(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Ut(t.containerInfo)}catch(m){jc(e,e.return,m)}break;case 4:default:gs(t,e),vs(e);break;case 13:gs(t,e),vs(e),8192&(o=e.child).flags&&(a=null!==o.memoizedState,o.stateNode.isHidden=a,!a||null!==o.alternate&&null!==o.alternate.memoizedState||(Fs=Xe())),4&r&&hs(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Ql=(u=Ql)||d,gs(t,e),Ql=u):gs(t,e),vs(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!d&&0!==(1&e.mode))for(Jl=e,d=e.child;null!==d;){for(f=Jl=d;null!==Jl;){switch(h=(p=Jl).child,p.tag){case 0:case 11:case 14:case 15:ns(4,p,p.return);break;case 1:Zl(p,p.return);var g=p.stateNode;if("function"===typeof g.componentWillUnmount){r=p,n=p.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(m){jc(r,n,m)}}break;case 5:Zl(p,p.return);break;case 22:if(null!==p.memoizedState){ws(f);continue}}null!==h?(h.return=p,Jl=h):ws(f)}d=d.sibling}e:for(d=null,f=e;;){if(5===f.tag){if(null===d){d=f;try{o=f.stateNode,u?"function"===typeof(a=o.style).setProperty?a.setProperty("display","none","important"):a.display="none":(s=f.stateNode,l=void 0!==(c=f.memoizedProps.style)&&null!==c&&c.hasOwnProperty("display")?c.display:null,s.style.display=ge("display",l))}catch(m){jc(e,e.return,m)}}}else if(6===f.tag){if(null===d)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(m){jc(e,e.return,m)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:gs(t,e),vs(e),4&r&&hs(e);case 21:}}function vs(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(as(n)){var r=n;break e}n=n.return}throw Error(i(160))}switch(r.tag){case 5:var o=r.stateNode;32&r.flags&&(fe(o,""),r.flags&=-33),cs(e,ls(e),o);break;case 3:case 4:var a=r.stateNode.containerInfo;ss(e,ls(e),a);break;default:throw Error(i(161))}}catch(l){jc(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function bs(e,t,n){Jl=e,ys(e,t,n)}function ys(e,t,n){for(var r=0!==(1&e.mode);null!==Jl;){var o=Jl,i=o.child;if(22===o.tag&&r){var a=null!==o.memoizedState||Gl;if(!a){var l=o.alternate,s=null!==l&&null!==l.memoizedState||Ql;l=Gl;var c=Ql;if(Gl=a,(Ql=s)&&!c)for(Jl=o;null!==Jl;)s=(a=Jl).child,22===a.tag&&null!==a.memoizedState?ks(o):null!==s?(s.return=a,Jl=s):ks(o);for(;null!==i;)Jl=i,ys(i,t,n),i=i.sibling;Jl=o,Gl=l,Ql=c}xs(e)}else 0!==(8772&o.subtreeFlags)&&null!==i?(i.return=o,Jl=i):xs(e)}}function xs(e){for(;null!==Jl;){var t=Jl;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Ql||rs(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Ql)if(null===n)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:nl(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;null!==a&&Wi(t,a,r);break;case 3:var l=t.updateQueue;if(null!==l){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Wi(t,l,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var d=u.memoizedState;if(null!==d){var f=d.dehydrated;null!==f&&Ut(f)}}}break;default:throw Error(i(163))}Ql||512&t.flags&&os(t)}catch(p){jc(t,t.return,p)}}if(t===e){Jl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Jl=n;break}Jl=t.return}}function ws(e){for(;null!==Jl;){var t=Jl;if(t===e){Jl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Jl=n;break}Jl=t.return}}function ks(e){for(;null!==Jl;){var t=Jl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(s){jc(t,n,s)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var o=t.return;try{r.componentDidMount()}catch(s){jc(t,o,s)}}var i=t.return;try{os(t)}catch(s){jc(t,i,s)}break;case 5:var a=t.return;try{os(t)}catch(s){jc(t,a,s)}}}catch(s){jc(t,t.return,s)}if(t===e){Jl=null;break}var l=t.sibling;if(null!==l){l.return=t.return,Jl=l;break}Jl=t.return}}var Ss,js=Math.ceil,Cs=x.ReactCurrentDispatcher,Es=x.ReactCurrentOwner,Ts=x.ReactCurrentBatchConfig,Ps=0,Os=null,_s=null,Ls=0,As=0,Rs=Co(0),Ds=0,Ns=null,Is=0,Bs=0,$s=0,zs=null,Ms=null,Fs=0,Us=1/0,Hs=null,Ws=!1,qs=null,Vs=null,Ks=!1,Ys=null,Gs=0,Qs=0,Xs=null,Js=-1,Zs=0;function ec(){return 0!==(6&Ps)?Xe():-1!==Js?Js:Js=Xe()}function tc(e){return 0===(1&e.mode)?1:0!==(2&Ps)&&0!==Ls?Ls&-Ls:null!==mi.transition?(0===Zs&&(Zs=gt()),Zs):0!==(e=yt)?e:e=void 0===(e=window.event)?16:Qt(e.type)}function nc(e,t,n,r){if(50<Qs)throw Qs=0,Xs=null,Error(i(185));vt(e,n,r),0!==(2&Ps)&&e===Os||(e===Os&&(0===(2&Ps)&&(Bs|=n),4===Ds&&lc(e,Ls)),rc(e,r),1===n&&0===Ps&&0===(1&t.mode)&&(Us=Xe()+500,Mo&&Ho()))}function rc(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-at(i),l=1<<a,s=o[a];-1===s?0!==(l&n)&&0===(l&r)||(o[a]=pt(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}(e,t);var r=ft(e,e===Os?Ls:0);if(0===r)null!==n&&Ye(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Ye(n),1===t)0===e.tag?function(e){Mo=!0,Uo(e)}(sc.bind(null,e)):Uo(sc.bind(null,e)),ao((function(){0===(6&Ps)&&Ho()})),n=null;else{switch(xt(r)){case 1:n=Ze;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Oc(n,oc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function oc(e,t){if(Js=-1,Zs=0,0!==(6&Ps))throw Error(i(327));var n=e.callbackNode;if(kc()&&e.callbackNode!==n)return null;var r=ft(e,e===Os?Ls:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=mc(e,r);else{t=r;var o=Ps;Ps|=2;var a=hc();for(Os===e&&Ls===t||(Hs=null,Us=Xe()+500,fc(e,t));;)try{bc();break}catch(s){pc(e,s)}Ti(),Cs.current=a,Ps=o,null!==_s?t=0:(Os=null,Ls=0,t=Ds)}if(0!==t){if(2===t&&(0!==(o=ht(e))&&(r=o,t=ic(e,o))),1===t)throw n=Ns,fc(e,0),lc(e,r),rc(e,Xe()),n;if(6===t)lc(e,r);else{if(o=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!lr(i(),o))return!1}catch(l){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(o)&&(2===(t=mc(e,r))&&(0!==(a=ht(e))&&(r=a,t=ic(e,a))),1===t))throw n=Ns,fc(e,0),lc(e,r),rc(e,Xe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(i(345));case 2:case 5:wc(e,Ms,Hs);break;case 3:if(lc(e,r),(130023424&r)===r&&10<(t=Fs+500-Xe())){if(0!==ft(e,0))break;if(((o=e.suspendedLanes)&r)!==r){ec(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ro(wc.bind(null,e,Ms,Hs),t);break}wc(e,Ms,Hs);break;case 4:if(lc(e,r),(4194240&r)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-at(r);a=1<<l,(l=t[l])>o&&(o=l),r&=~a}if(r=o,10<(r=(120>(r=Xe()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*js(r/1960))-r)){e.timeoutHandle=ro(wc.bind(null,e,Ms,Hs),r);break}wc(e,Ms,Hs);break;default:throw Error(i(329))}}}return rc(e,Xe()),e.callbackNode===n?oc.bind(null,e):null}function ic(e,t){var n=zs;return e.current.memoizedState.isDehydrated&&(fc(e,t).flags|=256),2!==(e=mc(e,t))&&(t=Ms,Ms=n,null!==t&&ac(t)),e}function ac(e){null===Ms?Ms=e:Ms.push.apply(Ms,e)}function lc(e,t){for(t&=~$s,t&=~Bs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function sc(e){if(0!==(6&Ps))throw Error(i(327));kc();var t=ft(e,0);if(0===(1&t))return rc(e,Xe()),null;var n=mc(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=ic(e,r))}if(1===n)throw n=Ns,fc(e,0),lc(e,t),rc(e,Xe()),n;if(6===n)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wc(e,Ms,Hs),rc(e,Xe()),null}function cc(e,t){var n=Ps;Ps|=1;try{return e(t)}finally{0===(Ps=n)&&(Us=Xe()+500,Mo&&Ho())}}function uc(e){null!==Ys&&0===Ys.tag&&0===(6&Ps)&&kc();var t=Ps;Ps|=1;var n=Ts.transition,r=yt;try{if(Ts.transition=null,yt=1,e)return e()}finally{yt=r,Ts.transition=n,0===(6&(Ps=t))&&Ho()}}function dc(){As=Rs.current,Eo(Rs)}function fc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,oo(n)),null!==_s)for(n=_s.return;null!==n;){var r=n;switch(ni(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Do();break;case 3:Xi(),Eo(_o),Eo(Oo),ra();break;case 5:Zi(r);break;case 4:Xi();break;case 13:case 19:Eo(ea);break;case 10:Pi(r.type._context);break;case 22:case 23:dc()}n=n.return}if(Os=e,_s=e=Rc(e.current,null),Ls=As=t,Ds=0,Ns=null,$s=Bs=Is=0,Ms=zs=null,null!==Ai){for(t=0;t<Ai.length;t++)if(null!==(r=(n=Ai[t]).interleaved)){n.interleaved=null;var o=r.next,i=n.pending;if(null!==i){var a=i.next;i.next=o,r.next=a}n.pending=r}Ai=null}return e}function pc(e,t){for(;;){var n=_s;try{if(Ti(),oa.current=Ja,ua){for(var r=la.memoizedState;null!==r;){var o=r.queue;null!==o&&(o.pending=null),r=r.next}ua=!1}if(aa=0,ca=sa=la=null,da=!1,fa=0,Es.current=null,null===n||null===n.return){Ds=1,Ns=t,_s=null;break}e:{var a=e,l=n.return,s=n,c=t;if(t=Ls,s.flags|=32768,null!==c&&"object"===typeof c&&"function"===typeof c.then){var u=c,d=s,f=d.tag;if(0===(1&d.mode)&&(0===f||11===f||15===f)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=ml(l);if(null!==h){h.flags&=-257,vl(h,l,s,0,t),1&h.mode&&gl(a,u,t),c=u;var g=(t=h).updateQueue;if(null===g){var m=new Set;m.add(c),t.updateQueue=m}else g.add(c);break e}if(0===(1&t)){gl(a,u,t),gc();break e}c=Error(i(426))}else if(ii&&1&s.mode){var v=ml(l);if(null!==v){0===(65536&v.flags)&&(v.flags|=256),vl(v,l,s,0,t),gi(cl(c,s));break e}}a=c=cl(c,s),4!==Ds&&(Ds=2),null===zs?zs=[a]:zs.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t,Ui(a,pl(0,c,t));break e;case 1:s=c;var b=a.type,y=a.stateNode;if(0===(128&a.flags)&&("function"===typeof b.getDerivedStateFromError||null!==y&&"function"===typeof y.componentDidCatch&&(null===Vs||!Vs.has(y)))){a.flags|=65536,t&=-t,a.lanes|=t,Ui(a,hl(a,s,t));break e}}a=a.return}while(null!==a)}xc(n)}catch(x){t=x,_s===n&&null!==n&&(_s=n=n.return);continue}break}}function hc(){var e=Cs.current;return Cs.current=Ja,null===e?Ja:e}function gc(){0!==Ds&&3!==Ds&&2!==Ds||(Ds=4),null===Os||0===(268435455&Is)&&0===(268435455&Bs)||lc(Os,Ls)}function mc(e,t){var n=Ps;Ps|=2;var r=hc();for(Os===e&&Ls===t||(Hs=null,fc(e,t));;)try{vc();break}catch(o){pc(e,o)}if(Ti(),Ps=n,Cs.current=r,null!==_s)throw Error(i(261));return Os=null,Ls=0,Ds}function vc(){for(;null!==_s;)yc(_s)}function bc(){for(;null!==_s&&!Ge();)yc(_s)}function yc(e){var t=Ss(e.alternate,e,As);e.memoizedProps=e.pendingProps,null===t?xc(e):_s=t,Es.current=null}function xc(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Kl(n,t,As)))return void(_s=n)}else{if(null!==(n=Yl(n,t)))return n.flags&=32767,void(_s=n);if(null===e)return Ds=6,void(_s=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(_s=t);_s=t=e}while(null!==t);0===Ds&&(Ds=5)}function wc(e,t,n){var r=yt,o=Ts.transition;try{Ts.transition=null,yt=1,function(e,t,n,r){do{kc()}while(null!==Ys);if(0!==(6&Ps))throw Error(i(327));n=e.finishedWork;var o=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-at(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}(e,a),e===Os&&(_s=Os=null,Ls=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Ks||(Ks=!0,Oc(tt,(function(){return kc(),null}))),a=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||a){a=Ts.transition,Ts.transition=null;var l=yt;yt=1;var s=Ps;Ps|=4,Es.current=null,function(e,t){if(eo=Wt,pr(e=fr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch(w){n=null;break e}var l=0,s=-1,c=-1,u=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||0!==o&&3!==f.nodeType||(s=l+o),f!==a||0!==r&&3!==f.nodeType||(c=l+r),3===f.nodeType&&(l+=f.nodeValue.length),null!==(h=f.firstChild);)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++u===o&&(s=l),p===a&&++d===r&&(c=l),null!==(h=f.nextSibling))break;p=(f=p).parentNode}f=h}n=-1===s||-1===c?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(to={focusedElem:e,selectionRange:n},Wt=!1,Jl=t;null!==Jl;)if(e=(t=Jl).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Jl=e;else for(;null!==Jl;){t=Jl;try{var g=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==g){var m=g.memoizedProps,v=g.memoizedState,b=t.stateNode,y=b.getSnapshotBeforeUpdate(t.elementType===t.type?m:nl(t.type,m),v);b.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var x=t.stateNode.containerInfo;1===x.nodeType?x.textContent="":9===x.nodeType&&x.documentElement&&x.removeChild(x.documentElement);break;default:throw Error(i(163))}}catch(w){jc(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Jl=e;break}Jl=t.return}g=ts,ts=!1}(e,n),ms(n,e),hr(to),Wt=!!eo,to=eo=null,e.current=n,bs(n,e,o),Qe(),Ps=s,yt=l,Ts.transition=a}else e.current=n;if(Ks&&(Ks=!1,Ys=e,Gs=o),a=e.pendingLanes,0===a&&(Vs=null),function(e){if(it&&"function"===typeof it.onCommitFiberRoot)try{it.onCommitFiberRoot(ot,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),rc(e,Xe()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ws)throw Ws=!1,e=qs,qs=null,e;0!==(1&Gs)&&0!==e.tag&&kc(),a=e.pendingLanes,0!==(1&a)?e===Xs?Qs++:(Qs=0,Xs=e):Qs=0,Ho()}(e,t,n,r)}finally{Ts.transition=o,yt=r}return null}function kc(){if(null!==Ys){var e=xt(Gs),t=Ts.transition,n=yt;try{if(Ts.transition=null,yt=16>e?16:e,null===Ys)var r=!1;else{if(e=Ys,Ys=null,Gs=0,0!==(6&Ps))throw Error(i(331));var o=Ps;for(Ps|=4,Jl=e.current;null!==Jl;){var a=Jl,l=a.child;if(0!==(16&Jl.flags)){var s=a.deletions;if(null!==s){for(var c=0;c<s.length;c++){var u=s[c];for(Jl=u;null!==Jl;){var d=Jl;switch(d.tag){case 0:case 11:case 15:ns(8,d,a)}var f=d.child;if(null!==f)f.return=d,Jl=f;else for(;null!==Jl;){var p=(d=Jl).sibling,h=d.return;if(is(d),d===u){Jl=null;break}if(null!==p){p.return=h,Jl=p;break}Jl=h}}}var g=a.alternate;if(null!==g){var m=g.child;if(null!==m){g.child=null;do{var v=m.sibling;m.sibling=null,m=v}while(null!==m)}}Jl=a}}if(0!==(2064&a.subtreeFlags)&&null!==l)l.return=a,Jl=l;else e:for(;null!==Jl;){if(0!==(2048&(a=Jl).flags))switch(a.tag){case 0:case 11:case 15:ns(9,a,a.return)}var b=a.sibling;if(null!==b){b.return=a.return,Jl=b;break e}Jl=a.return}}var y=e.current;for(Jl=y;null!==Jl;){var x=(l=Jl).child;if(0!==(2064&l.subtreeFlags)&&null!==x)x.return=l,Jl=x;else e:for(l=y;null!==Jl;){if(0!==(2048&(s=Jl).flags))try{switch(s.tag){case 0:case 11:case 15:rs(9,s)}}catch(k){jc(s,s.return,k)}if(s===l){Jl=null;break e}var w=s.sibling;if(null!==w){w.return=s.return,Jl=w;break e}Jl=s.return}}if(Ps=o,Ho(),it&&"function"===typeof it.onPostCommitFiberRoot)try{it.onPostCommitFiberRoot(ot,e)}catch(k){}r=!0}return r}finally{yt=n,Ts.transition=t}}return!1}function Sc(e,t,n){e=Mi(e,t=pl(0,t=cl(n,t),1),1),t=ec(),null!==e&&(vt(e,1,t),rc(e,t))}function jc(e,t,n){if(3===e.tag)Sc(e,e,n);else for(;null!==t;){if(3===t.tag){Sc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Vs||!Vs.has(r))){t=Mi(t,e=hl(t,e=cl(n,e),1),1),e=ec(),null!==t&&(vt(t,1,e),rc(t,e));break}}t=t.return}}function Cc(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=ec(),e.pingedLanes|=e.suspendedLanes&n,Os===e&&(Ls&n)===n&&(4===Ds||3===Ds&&(130023424&Ls)===Ls&&500>Xe()-Fs?fc(e,0):$s|=n),rc(e,t)}function Ec(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ut,0===(130023424&(ut<<=1))&&(ut=4194304)));var n=ec();null!==(e=Ni(e,t))&&(vt(e,t,n),rc(e,n))}function Tc(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Ec(e,n)}function Pc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;null!==o&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(i(314))}null!==r&&r.delete(t),Ec(e,n)}function Oc(e,t){return Ke(e,t)}function _c(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lc(e,t,n,r){return new _c(e,t,n,r)}function Ac(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Rc(e,t){var n=e.alternate;return null===n?((n=Lc(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Dc(e,t,n,r,o,a){var l=2;if(r=e,"function"===typeof e)Ac(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case S:return Nc(n.children,o,a,t);case j:l=8,o|=8;break;case C:return(e=Lc(12,n,t,2|o)).elementType=C,e.lanes=a,e;case O:return(e=Lc(13,n,t,o)).elementType=O,e.lanes=a,e;case _:return(e=Lc(19,n,t,o)).elementType=_,e.lanes=a,e;case R:return Ic(n,o,a,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case E:l=10;break e;case T:l=9;break e;case P:l=11;break e;case L:l=14;break e;case A:l=16,r=null;break e}throw Error(i(130,null==e?e:typeof e,""))}return(t=Lc(l,n,t,o)).elementType=e,t.type=r,t.lanes=a,t}function Nc(e,t,n,r){return(e=Lc(7,e,r,t)).lanes=n,e}function Ic(e,t,n,r){return(e=Lc(22,e,r,t)).elementType=R,e.lanes=n,e.stateNode={isHidden:!1},e}function Bc(e,t,n){return(e=Lc(6,e,null,t)).lanes=n,e}function $c(e,t,n){return(t=Lc(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function zc(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mt(0),this.expirationTimes=mt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mt(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Mc(e,t,n,r,o,i,a,l,s){return e=new zc(e,t,n,l,s),1===t?(t=1,!0===i&&(t|=8)):t=0,i=Lc(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bi(i),e}function Fc(e){if(!e)return Po;e:{if(Ue(e=e._reactInternals)!==e||1!==e.tag)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ro(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(i(171))}if(1===e.tag){var n=e.type;if(Ro(n))return Io(e,n,t)}return t}function Uc(e,t,n,r,o,i,a,l,s){return(e=Mc(n,r,!0,e,0,i,0,l,s)).context=Fc(null),n=e.current,(i=zi(r=ec(),o=tc(n))).callback=void 0!==t&&null!==t?t:null,Mi(n,i,o),e.current.lanes=o,vt(e,o,r),rc(e,r),e}function Hc(e,t,n,r){var o=t.current,i=ec(),a=tc(o);return n=Fc(n),null===t.context?t.context=n:t.pendingContext=n,(t=zi(i,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Mi(o,t,a))&&(nc(e,o,a,i),Fi(e,o,a)),a}function Wc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function qc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Vc(e,t){qc(e,t),(e=e.alternate)&&qc(e,t)}Ss=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||_o.current)yl=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return yl=!1,function(e,t,n){switch(t.tag){case 3:Ol(t),hi();break;case 5:Ji(t);break;case 1:Ro(t.type)&&Bo(t);break;case 4:Qi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;To(Si,r._currentValue),r._currentValue=o;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(To(ea,1&ea.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Bl(e,t,n):(To(ea,1&ea.current),null!==(e=Wl(e,t,n))?e.sibling:null);To(ea,1&ea.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Ul(e,t,n);t.flags|=128}if(null!==(o=t.memoizedState)&&(o.rendering=null,o.tail=null,o.lastEffect=null),To(ea,ea.current),r)break;return null;case 22:case 23:return t.lanes=0,jl(e,t,n)}return Wl(e,t,n)}(e,t,n);yl=0!==(131072&e.flags)}else yl=!1,ii&&0!==(1048576&t.flags)&&ei(t,Ko,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Hl(e,t),e=t.pendingProps;var o=Ao(t,Oo.current);_i(t,n),o=ma(null,t,r,e,o,n);var a=va();return t.flags|=1,"object"===typeof o&&null!==o&&"function"===typeof o.render&&void 0===o.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ro(r)?(a=!0,Bo(t)):a=!1,t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,Bi(t),o.updater=ol,t.stateNode=o,o._reactInternals=t,sl(t,r,e,n),t=Pl(null,t,r,!0,a,n)):(t.tag=0,ii&&a&&ti(t),xl(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Hl(e,t),e=t.pendingProps,r=(o=r._init)(r._payload),t.type=r,o=t.tag=function(e){if("function"===typeof e)return Ac(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===P)return 11;if(e===L)return 14}return 2}(r),e=nl(r,e),o){case 0:t=El(null,t,r,e,n);break e;case 1:t=Tl(null,t,r,e,n);break e;case 11:t=wl(null,t,r,e,n);break e;case 14:t=kl(null,t,r,nl(r.type,e),n);break e}throw Error(i(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,El(e,t,r,o=t.elementType===r?o:nl(r,o),n);case 1:return r=t.type,o=t.pendingProps,Tl(e,t,r,o=t.elementType===r?o:nl(r,o),n);case 3:e:{if(Ol(t),null===e)throw Error(i(387));r=t.pendingProps,o=(a=t.memoizedState).element,$i(e,t),Hi(t,r,null,n);var l=t.memoizedState;if(r=l.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=_l(e,t,r,n,o=cl(Error(i(423)),t));break e}if(r!==o){t=_l(e,t,r,n,o=cl(Error(i(424)),t));break e}for(oi=co(t.stateNode.containerInfo.firstChild),ri=t,ii=!0,ai=null,n=ki(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(hi(),r===o){t=Wl(e,t,n);break e}xl(e,t,r,n)}t=t.child}return t;case 5:return Ji(t),null===e&&ui(t),r=t.type,o=t.pendingProps,a=null!==e?e.memoizedProps:null,l=o.children,no(r,o)?l=null:null!==a&&no(r,a)&&(t.flags|=32),Cl(e,t),xl(e,t,l,n),t.child;case 6:return null===e&&ui(t),null;case 13:return Bl(e,t,n);case 4:return Qi(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=wi(t,null,r,n):xl(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,wl(e,t,r,o=t.elementType===r?o:nl(r,o),n);case 7:return xl(e,t,t.pendingProps,n),t.child;case 8:case 12:return xl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,l=o.value,To(Si,r._currentValue),r._currentValue=l,null!==a)if(lr(a.value,l)){if(a.children===o.children&&!_o.current){t=Wl(e,t,n);break e}}else for(null!==(a=t.child)&&(a.return=t);null!==a;){var s=a.dependencies;if(null!==s){l=a.child;for(var c=s.firstContext;null!==c;){if(c.context===r){if(1===a.tag){(c=zi(-1,n&-n)).tag=2;var u=a.updateQueue;if(null!==u){var d=(u=u.shared).pending;null===d?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}a.lanes|=n,null!==(c=a.alternate)&&(c.lanes|=n),Oi(a.return,n,t),s.lanes|=n;break}c=c.next}}else if(10===a.tag)l=a.type===t.type?null:a.child;else if(18===a.tag){if(null===(l=a.return))throw Error(i(341));l.lanes|=n,null!==(s=l.alternate)&&(s.lanes|=n),Oi(l,n,t),l=a.sibling}else l=a.child;if(null!==l)l.return=a;else for(l=a;null!==l;){if(l===t){l=null;break}if(null!==(a=l.sibling)){a.return=l.return,l=a;break}l=l.return}a=l}xl(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,_i(t,n),r=r(o=Li(o)),t.flags|=1,xl(e,t,r,n),t.child;case 14:return o=nl(r=t.type,t.pendingProps),kl(e,t,r,o=nl(r.type,o),n);case 15:return Sl(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:nl(r,o),Hl(e,t),t.tag=1,Ro(r)?(e=!0,Bo(t)):e=!1,_i(t,n),al(t,r,o),sl(t,r,o,n),Pl(null,t,r,!0,e,n);case 19:return Ul(e,t,n);case 22:return jl(e,t,n)}throw Error(i(156,t.tag))};var Kc="function"===typeof reportError?reportError:function(e){console.error(e)};function Yc(e){this._internalRoot=e}function Gc(e){this._internalRoot=e}function Qc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Xc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Jc(){}function Zc(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if("function"===typeof o){var l=o;o=function(){var e=Wc(a);l.call(e)}}Hc(t,a,e,o)}else a=function(e,t,n,r,o){if(o){if("function"===typeof r){var i=r;r=function(){var e=Wc(a);i.call(e)}}var a=Uc(t,r,e,0,null,!1,0,"",Jc);return e._reactRootContainer=a,e[go]=a.current,Ur(8===e.nodeType?e.parentNode:e),uc(),a}for(;o=e.lastChild;)e.removeChild(o);if("function"===typeof r){var l=r;r=function(){var e=Wc(s);l.call(e)}}var s=Mc(e,0,!1,null,0,!1,0,"",Jc);return e._reactRootContainer=s,e[go]=s.current,Ur(8===e.nodeType?e.parentNode:e),uc((function(){Hc(t,s,n,r)})),s}(n,t,e,o,r);return Wc(a)}Gc.prototype.render=Yc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(i(409));Hc(e,t,null,null)},Gc.prototype.unmount=Yc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;uc((function(){Hc(null,e,null,null)})),t[go]=null}},Gc.prototype.unstable_scheduleHydration=function(e){if(e){var t=jt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rt.length&&0!==t&&t<Rt[n].priority;n++);Rt.splice(n,0,e),0===n&&Bt(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(bt(t,1|n),rc(t,Xe()),0===(6&Ps)&&(Us=Xe()+500,Ho()))}break;case 13:uc((function(){var t=Ni(e,1);if(null!==t){var n=ec();nc(t,e,1,n)}})),Vc(e,1)}},kt=function(e){if(13===e.tag){var t=Ni(e,134217728);if(null!==t)nc(t,e,134217728,ec());Vc(e,134217728)}},St=function(e){if(13===e.tag){var t=tc(e),n=Ni(e,t);if(null!==n)nc(n,e,t,ec());Vc(e,t)}},jt=function(){return yt},Ct=function(e,t){var n=yt;try{return yt=e,t()}finally{yt=n}},ke=function(e,t,n){switch(t){case"input":if(J(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ko(r);if(!o)throw Error(i(90));K(r),J(r,o)}}}break;case"textarea":ie(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Pe=cc,Oe=uc;var eu={usingClientEntryPoint:!1,Events:[xo,wo,ko,Ee,Te,cc]},tu={findFiberByHostInstance:yo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nu={bundleType:tu.bundleType,version:tu.version,rendererPackageName:tu.rendererPackageName,rendererConfig:tu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:x.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=qe(e))?null:e.stateNode},findFiberByHostInstance:tu.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{ot=ru.inject(nu),it=ru}catch(ue){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eu,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Qc(t))throw Error(i(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:k,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Qc(e))throw Error(i(299));var n=!1,r="",o=Kc;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(o=t.onRecoverableError)),t=Mc(e,1,!1,null,0,n,0,r,o),e[go]=t.current,Ur(8===e.nodeType?e.parentNode:e),new Yc(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(i(188));throw e=Object.keys(e).join(","),Error(i(268,e))}return e=null===(e=qe(t))?null:e.stateNode},t.flushSync=function(e){return uc(e)},t.hydrate=function(e,t,n){if(!Xc(t))throw Error(i(200));return Zc(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Qc(e))throw Error(i(405));var r=null!=n&&n.hydratedSources||null,o=!1,a="",l=Kc;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(o=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),t=Uc(t,null,e,1,null!=n?n:null,o,0,a,l),e[go]=t.current,Ur(e),r)for(e=0;e<r.length;e++)o=(o=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Gc(t)},t.render=function(e,t,n){if(!Xc(t))throw Error(i(200));return Zc(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Xc(e))throw Error(i(40));return!!e._reactRootContainer&&(uc((function(){Zc(null,null,e,!1,(function(){e._reactRootContainer=null,e[go]=null}))})),!0)},t.unstable_batchedUpdates=cc,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Xc(n))throw Error(i(200));if(null==e||void 0===e._reactInternals)throw Error(i(38));return Zc(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},391:(e,t,n)=>{"use strict";var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)},214:(e,t,n)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.PrevArrow=t.NextArrow=void 0;var o=l(n(43)),i=l(n(139)),a=n(200);function l(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return(t=g(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,g(r.key),r)}}function h(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function g(e){var t=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==r(t)?t:String(t)}function m(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function b(e){var t=y();return function(){var n,o=x(e);if(t){var i=x(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function y(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(y=function(){return!!e})()}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}t.PrevArrow=function(e){m(n,e);var t=b(n);function n(){return f(this,n),t.apply(this,arguments)}return h(n,[{key:"clickHandler",value:function(e,t){t&&t.preventDefault(),this.props.clickHandler(e,t)}},{key:"render",value:function(){var e={"slick-arrow":!0,"slick-prev":!0},t=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(0===this.props.currentSlide||this.props.slideCount<=this.props.slidesToShow)&&(e["slick-disabled"]=!0,t=null);var n={key:"0","data-role":"none",className:(0,i.default)(e),style:{display:"block"},onClick:t},r={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount};return this.props.prevArrow?o.default.cloneElement(this.props.prevArrow,u(u({},n),r)):o.default.createElement("button",s({key:"0",type:"button"},n)," ","Previous")}}]),n}(o.default.PureComponent),t.NextArrow=function(e){m(n,e);var t=b(n);function n(){return f(this,n),t.apply(this,arguments)}return h(n,[{key:"clickHandler",value:function(e,t){t&&t.preventDefault(),this.props.clickHandler(e,t)}},{key:"render",value:function(){var e={"slick-arrow":!0,"slick-next":!0},t=this.clickHandler.bind(this,{message:"next"});(0,a.canGoNext)(this.props)||(e["slick-disabled"]=!0,t=null);var n={key:"1","data-role":"none",className:(0,i.default)(e),style:{display:"block"},onClick:t},r={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount};return this.props.nextArrow?o.default.cloneElement(this.props.nextArrow,u(u({},n),r)):o.default.createElement("button",s({key:"1",type:"button"},n)," ","Next")}}]),n}(o.default.PureComponent)},112:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n(43))&&r.__esModule?r:{default:r};var i={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(e){return o.default.createElement("ul",{style:{display:"block"}},e)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(e){return o.default.createElement("button",null,e+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0,asNavFor:null};t.default=i},496:(e,t,n)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.Dots=void 0;var o=l(n(43)),i=l(n(139)),a=n(200);function l(e){return e&&e.__esModule?e:{default:e}}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e,t,n){return(t=d(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,d(r.key),r)}}function d(e){var t=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==r(t)?t:String(t)}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function p(e){var t=h();return function(){var n,o=g(e);if(t){var i=g(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function h(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(h=function(){return!!e})()}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}t.Dots=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(d,e);var t,n,r,l=p(d);function d(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),l.apply(this,arguments)}return t=d,n=[{key:"clickHandler",value:function(e,t){t.preventDefault(),this.props.clickHandler(e)}},{key:"render",value:function(){for(var e,t=this.props,n=t.onMouseEnter,r=t.onMouseOver,l=t.onMouseLeave,u=t.infinite,d=t.slidesToScroll,f=t.slidesToShow,p=t.slideCount,h=t.currentSlide,g=(e={slideCount:p,slidesToScroll:d,slidesToShow:f,infinite:u}).infinite?Math.ceil(e.slideCount/e.slidesToScroll):Math.ceil((e.slideCount-e.slidesToShow)/e.slidesToScroll)+1,m={onMouseEnter:n,onMouseOver:r,onMouseLeave:l},v=[],b=0;b<g;b++){var y=(b+1)*d-1,x=u?y:(0,a.clamp)(y,0,p-1),w=x-(d-1),k=u?w:(0,a.clamp)(w,0,p-1),S=(0,i.default)({"slick-active":u?h>=k&&h<=x:h===k}),j={message:"dots",index:b,slidesToScroll:d,currentSlide:h},C=this.clickHandler.bind(this,j);v=v.concat(o.default.createElement("li",{key:b,className:S},o.default.cloneElement(this.props.customPaging(b),{onClick:C})))}return o.default.cloneElement(this.props.appendDots(v),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({className:this.props.dotsClass},m))}}],n&&u(t.prototype,n),r&&u(t,r),Object.defineProperty(t,"prototype",{writable:!1}),d}(o.default.PureComponent)},382:(e,t,n)=>{"use strict";t.A=void 0;var r,o=(r=n(433))&&r.__esModule?r:{default:r};t.A=o.default},910:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0}},826:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.InnerSlider=void 0;var r=f(n(43)),o=f(n(910)),i=f(n(446)),a=f(n(139)),l=n(200),s=n(737),c=n(496),u=n(214),d=f(n(820));function f(e){return e&&e.__esModule?e:{default:e}}function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}function g(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,C(r.key),r)}}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function x(e){var t=k();return function(){var n,r=S(e);if(t){var o=S(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===p(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return w(e)}(this,n)}}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(k=function(){return!!e})()}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}function j(e,t,n){return(t=C(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e){var t=function(e,t){if("object"!=p(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==p(t)?t:String(t)}t.InnerSlider=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(k,e);var t,n,f,m=x(k);function k(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,k),j(w(t=m.call(this,e)),"listRefHandler",(function(e){return t.list=e})),j(w(t),"trackRefHandler",(function(e){return t.track=e})),j(w(t),"adaptHeight",(function(){if(t.props.adaptiveHeight&&t.list){var e=t.list.querySelector('[data-index="'.concat(t.state.currentSlide,'"]'));t.list.style.height=(0,l.getHeight)(e)+"px"}})),j(w(t),"componentDidMount",(function(){if(t.props.onInit&&t.props.onInit(),t.props.lazyLoad){var e=(0,l.getOnDemandLazySlides)(v(v({},t.props),t.state));e.length>0&&(t.setState((function(t){return{lazyLoadedList:t.lazyLoadedList.concat(e)}})),t.props.onLazyLoad&&t.props.onLazyLoad(e))}var n=v({listRef:t.list,trackRef:t.track},t.props);t.updateState(n,!0,(function(){t.adaptHeight(),t.props.autoplay&&t.autoPlay("update")})),"progressive"===t.props.lazyLoad&&(t.lazyLoadTimer=setInterval(t.progressiveLazyLoad,1e3)),t.ro=new d.default((function(){t.state.animating?(t.onWindowResized(!1),t.callbackTimers.push(setTimeout((function(){return t.onWindowResized()}),t.props.speed))):t.onWindowResized()})),t.ro.observe(t.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),(function(e){e.onfocus=t.props.pauseOnFocus?t.onSlideFocus:null,e.onblur=t.props.pauseOnFocus?t.onSlideBlur:null})),window.addEventListener?window.addEventListener("resize",t.onWindowResized):window.attachEvent("onresize",t.onWindowResized)})),j(w(t),"componentWillUnmount",(function(){t.animationEndCallback&&clearTimeout(t.animationEndCallback),t.lazyLoadTimer&&clearInterval(t.lazyLoadTimer),t.callbackTimers.length&&(t.callbackTimers.forEach((function(e){return clearTimeout(e)})),t.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",t.onWindowResized):window.detachEvent("onresize",t.onWindowResized),t.autoplayTimer&&clearInterval(t.autoplayTimer),t.ro.disconnect()})),j(w(t),"componentDidUpdate",(function(e){if(t.checkImagesLoad(),t.props.onReInit&&t.props.onReInit(),t.props.lazyLoad){var n=(0,l.getOnDemandLazySlides)(v(v({},t.props),t.state));n.length>0&&(t.setState((function(e){return{lazyLoadedList:e.lazyLoadedList.concat(n)}})),t.props.onLazyLoad&&t.props.onLazyLoad(n))}t.adaptHeight();var o=v(v({listRef:t.list,trackRef:t.track},t.props),t.state),i=t.didPropsChange(e);i&&t.updateState(o,i,(function(){t.state.currentSlide>=r.default.Children.count(t.props.children)&&t.changeSlide({message:"index",index:r.default.Children.count(t.props.children)-t.props.slidesToShow,currentSlide:t.state.currentSlide}),t.props.autoplay?t.autoPlay("update"):t.pause("paused")}))})),j(w(t),"onWindowResized",(function(e){t.debouncedResize&&t.debouncedResize.cancel(),t.debouncedResize=(0,i.default)((function(){return t.resizeWindow(e)}),50),t.debouncedResize()})),j(w(t),"resizeWindow",(function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(Boolean(t.track&&t.track.node)){var n=v(v({listRef:t.list,trackRef:t.track},t.props),t.state);t.updateState(n,e,(function(){t.props.autoplay?t.autoPlay("update"):t.pause("paused")})),t.setState({animating:!1}),clearTimeout(t.animationEndCallback),delete t.animationEndCallback}})),j(w(t),"updateState",(function(e,n,o){var i=(0,l.initializedState)(e);e=v(v(v({},e),i),{},{slideIndex:i.currentSlide});var a=(0,l.getTrackLeft)(e);e=v(v({},e),{},{left:a});var s=(0,l.getTrackCSS)(e);(n||r.default.Children.count(t.props.children)!==r.default.Children.count(e.children))&&(i.trackStyle=s),t.setState(i,o)})),j(w(t),"ssrInit",(function(){if(t.props.variableWidth){var e=0,n=0,o=[],i=(0,l.getPreClones)(v(v(v({},t.props),t.state),{},{slideCount:t.props.children.length})),a=(0,l.getPostClones)(v(v(v({},t.props),t.state),{},{slideCount:t.props.children.length}));t.props.children.forEach((function(t){o.push(t.props.style.width),e+=t.props.style.width}));for(var s=0;s<i;s++)n+=o[o.length-1-s],e+=o[o.length-1-s];for(var c=0;c<a;c++)e+=o[c];for(var u=0;u<t.state.currentSlide;u++)n+=o[u];var d={width:e+"px",left:-n+"px"};if(t.props.centerMode){var f="".concat(o[t.state.currentSlide],"px");d.left="calc(".concat(d.left," + (100% - ").concat(f,") / 2 ) ")}return{trackStyle:d}}var p=r.default.Children.count(t.props.children),h=v(v(v({},t.props),t.state),{},{slideCount:p}),g=(0,l.getPreClones)(h)+(0,l.getPostClones)(h)+p,m=100/t.props.slidesToShow*g,b=100/g,y=-b*((0,l.getPreClones)(h)+t.state.currentSlide)*m/100;return t.props.centerMode&&(y+=(100-b*m/100)/2),{slideWidth:b+"%",trackStyle:{width:m+"%",left:y+"%"}}})),j(w(t),"checkImagesLoad",(function(){var e=t.list&&t.list.querySelectorAll&&t.list.querySelectorAll(".slick-slide img")||[],n=e.length,r=0;Array.prototype.forEach.call(e,(function(e){var o=function(){return++r&&r>=n&&t.onWindowResized()};if(e.onclick){var i=e.onclick;e.onclick=function(t){i(t),e.parentNode.focus()}}else e.onclick=function(){return e.parentNode.focus()};e.onload||(t.props.lazyLoad?e.onload=function(){t.adaptHeight(),t.callbackTimers.push(setTimeout(t.onWindowResized,t.props.speed))}:(e.onload=o,e.onerror=function(){o(),t.props.onLazyLoadError&&t.props.onLazyLoadError()}))}))})),j(w(t),"progressiveLazyLoad",(function(){for(var e=[],n=v(v({},t.props),t.state),r=t.state.currentSlide;r<t.state.slideCount+(0,l.getPostClones)(n);r++)if(t.state.lazyLoadedList.indexOf(r)<0){e.push(r);break}for(var o=t.state.currentSlide-1;o>=-(0,l.getPreClones)(n);o--)if(t.state.lazyLoadedList.indexOf(o)<0){e.push(o);break}e.length>0?(t.setState((function(t){return{lazyLoadedList:t.lazyLoadedList.concat(e)}})),t.props.onLazyLoad&&t.props.onLazyLoad(e)):t.lazyLoadTimer&&(clearInterval(t.lazyLoadTimer),delete t.lazyLoadTimer)})),j(w(t),"slideHandler",(function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=t.props,o=r.asNavFor,i=r.beforeChange,a=r.onLazyLoad,s=r.speed,c=r.afterChange,u=t.state.currentSlide,d=(0,l.slideHandler)(v(v(v({index:e},t.props),t.state),{},{trackRef:t.track,useCSS:t.props.useCSS&&!n})),f=d.state,p=d.nextState;if(f){i&&i(u,f.currentSlide);var h=f.lazyLoadedList.filter((function(e){return t.state.lazyLoadedList.indexOf(e)<0}));a&&h.length>0&&a(h),!t.props.waitForAnimate&&t.animationEndCallback&&(clearTimeout(t.animationEndCallback),c&&c(u),delete t.animationEndCallback),t.setState(f,(function(){o&&t.asNavForIndex!==e&&(t.asNavForIndex=e,o.innerSlider.slideHandler(e)),p&&(t.animationEndCallback=setTimeout((function(){var e=p.animating,n=g(p,["animating"]);t.setState(n,(function(){t.callbackTimers.push(setTimeout((function(){return t.setState({animating:e})}),10)),c&&c(f.currentSlide),delete t.animationEndCallback}))}),s))}))}})),j(w(t),"changeSlide",(function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=v(v({},t.props),t.state),o=(0,l.changeSlide)(r,e);if((0===o||o)&&(!0===n?t.slideHandler(o,n):t.slideHandler(o),t.props.autoplay&&t.autoPlay("update"),t.props.focusOnSelect)){var i=t.list.querySelectorAll(".slick-current");i[0]&&i[0].focus()}})),j(w(t),"clickHandler",(function(e){!1===t.clickable&&(e.stopPropagation(),e.preventDefault()),t.clickable=!0})),j(w(t),"keyHandler",(function(e){var n=(0,l.keyHandler)(e,t.props.accessibility,t.props.rtl);""!==n&&t.changeSlide({message:n})})),j(w(t),"selectHandler",(function(e){t.changeSlide(e)})),j(w(t),"disableBodyScroll",(function(){window.ontouchmove=function(e){(e=e||window.event).preventDefault&&e.preventDefault(),e.returnValue=!1}})),j(w(t),"enableBodyScroll",(function(){window.ontouchmove=null})),j(w(t),"swipeStart",(function(e){t.props.verticalSwiping&&t.disableBodyScroll();var n=(0,l.swipeStart)(e,t.props.swipe,t.props.draggable);""!==n&&t.setState(n)})),j(w(t),"swipeMove",(function(e){var n=(0,l.swipeMove)(e,v(v(v({},t.props),t.state),{},{trackRef:t.track,listRef:t.list,slideIndex:t.state.currentSlide}));n&&(n.swiping&&(t.clickable=!1),t.setState(n))})),j(w(t),"swipeEnd",(function(e){var n=(0,l.swipeEnd)(e,v(v(v({},t.props),t.state),{},{trackRef:t.track,listRef:t.list,slideIndex:t.state.currentSlide}));if(n){var r=n.triggerSlideHandler;delete n.triggerSlideHandler,t.setState(n),void 0!==r&&(t.slideHandler(r),t.props.verticalSwiping&&t.enableBodyScroll())}})),j(w(t),"touchEnd",(function(e){t.swipeEnd(e),t.clickable=!0})),j(w(t),"slickPrev",(function(){t.callbackTimers.push(setTimeout((function(){return t.changeSlide({message:"previous"})}),0))})),j(w(t),"slickNext",(function(){t.callbackTimers.push(setTimeout((function(){return t.changeSlide({message:"next"})}),0))})),j(w(t),"slickGoTo",(function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e=Number(e),isNaN(e))return"";t.callbackTimers.push(setTimeout((function(){return t.changeSlide({message:"index",index:e,currentSlide:t.state.currentSlide},n)}),0))})),j(w(t),"play",(function(){var e;if(t.props.rtl)e=t.state.currentSlide-t.props.slidesToScroll;else{if(!(0,l.canGoNext)(v(v({},t.props),t.state)))return!1;e=t.state.currentSlide+t.props.slidesToScroll}t.slideHandler(e)})),j(w(t),"autoPlay",(function(e){t.autoplayTimer&&clearInterval(t.autoplayTimer);var n=t.state.autoplaying;if("update"===e){if("hovered"===n||"focused"===n||"paused"===n)return}else if("leave"===e){if("paused"===n||"focused"===n)return}else if("blur"===e&&("paused"===n||"hovered"===n))return;t.autoplayTimer=setInterval(t.play,t.props.autoplaySpeed+50),t.setState({autoplaying:"playing"})})),j(w(t),"pause",(function(e){t.autoplayTimer&&(clearInterval(t.autoplayTimer),t.autoplayTimer=null);var n=t.state.autoplaying;"paused"===e?t.setState({autoplaying:"paused"}):"focused"===e?"hovered"!==n&&"playing"!==n||t.setState({autoplaying:"focused"}):"playing"===n&&t.setState({autoplaying:"hovered"})})),j(w(t),"onDotsOver",(function(){return t.props.autoplay&&t.pause("hovered")})),j(w(t),"onDotsLeave",(function(){return t.props.autoplay&&"hovered"===t.state.autoplaying&&t.autoPlay("leave")})),j(w(t),"onTrackOver",(function(){return t.props.autoplay&&t.pause("hovered")})),j(w(t),"onTrackLeave",(function(){return t.props.autoplay&&"hovered"===t.state.autoplaying&&t.autoPlay("leave")})),j(w(t),"onSlideFocus",(function(){return t.props.autoplay&&t.pause("focused")})),j(w(t),"onSlideBlur",(function(){return t.props.autoplay&&"focused"===t.state.autoplaying&&t.autoPlay("blur")})),j(w(t),"render",(function(){var e,n,o,i=(0,a.default)("slick-slider",t.props.className,{"slick-vertical":t.props.vertical,"slick-initialized":!0}),d=v(v({},t.props),t.state),f=(0,l.extractObject)(d,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),p=t.props.pauseOnHover;if(f=v(v({},f),{},{onMouseEnter:p?t.onTrackOver:null,onMouseLeave:p?t.onTrackLeave:null,onMouseOver:p?t.onTrackOver:null,focusOnSelect:t.props.focusOnSelect&&t.clickable?t.selectHandler:null}),!0===t.props.dots&&t.state.slideCount>=t.props.slidesToShow){var g=(0,l.extractObject)(d,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),m=t.props.pauseOnDotsHover;g=v(v({},g),{},{clickHandler:t.changeSlide,onMouseEnter:m?t.onDotsLeave:null,onMouseOver:m?t.onDotsOver:null,onMouseLeave:m?t.onDotsLeave:null}),e=r.default.createElement(c.Dots,g)}var b=(0,l.extractObject)(d,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);b.clickHandler=t.changeSlide,t.props.arrows&&(n=r.default.createElement(u.PrevArrow,b),o=r.default.createElement(u.NextArrow,b));var y=null;t.props.vertical&&(y={height:t.state.listHeight});var x=null;!1===t.props.vertical?!0===t.props.centerMode&&(x={padding:"0px "+t.props.centerPadding}):!0===t.props.centerMode&&(x={padding:t.props.centerPadding+" 0px"});var w=v(v({},y),x),k=t.props.touchMove,S={className:"slick-list",style:w,onClick:t.clickHandler,onMouseDown:k?t.swipeStart:null,onMouseMove:t.state.dragging&&k?t.swipeMove:null,onMouseUp:k?t.swipeEnd:null,onMouseLeave:t.state.dragging&&k?t.swipeEnd:null,onTouchStart:k?t.swipeStart:null,onTouchMove:t.state.dragging&&k?t.swipeMove:null,onTouchEnd:k?t.touchEnd:null,onTouchCancel:t.state.dragging&&k?t.swipeEnd:null,onKeyDown:t.props.accessibility?t.keyHandler:null},j={className:i,dir:"ltr",style:t.props.style};return t.props.unslick&&(S={className:"slick-list"},j={className:i}),r.default.createElement("div",j,t.props.unslick?"":n,r.default.createElement("div",h({ref:t.listRefHandler},S),r.default.createElement(s.Track,h({ref:t.trackRefHandler},f),t.props.children)),t.props.unslick?"":o,t.props.unslick?"":e)})),t.list=null,t.track=null,t.state=v(v({},o.default),{},{currentSlide:t.props.initialSlide,targetSlide:t.props.initialSlide?t.props.initialSlide:0,slideCount:r.default.Children.count(t.props.children)}),t.callbackTimers=[],t.clickable=!0,t.debouncedResize=null;var n=t.ssrInit();return t.state=v(v({},t.state),n),t}return t=k,(n=[{key:"didPropsChange",value:function(e){for(var t=!1,n=0,o=Object.keys(this.props);n<o.length;n++){var i=o[n];if(!e.hasOwnProperty(i)){t=!0;break}if("object"!==p(e[i])&&"function"!==typeof e[i]&&!isNaN(e[i])&&e[i]!==this.props[i]){t=!0;break}}return t||r.default.Children.count(this.props.children)!==r.default.Children.count(e.children)}}])&&b(t.prototype,n),f&&b(t,f),Object.defineProperty(t,"prototype",{writable:!1}),k}(r.default.Component)},433:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(43)),o=n(826),i=s(n(270)),a=s(n(112)),l=n(200);function s(e){return e&&e.__esModule?e:{default:e}}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,x(r.key),r)}}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function g(e){var t=v();return function(){var n,r=b(e);if(t){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===c(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}(this,n)}}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(v=function(){return!!e})()}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function y(e,t,n){return(t=x(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e){var t=function(e,t){if("object"!=c(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==c(t)?t:String(t)}var w=(0,l.canUseDOM)()&&n(535);t.default=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(d,e);var t,n,s,c=g(d);function d(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),y(m(t=c.call(this,e)),"innerSliderRefHandler",(function(e){return t.innerSlider=e})),y(m(t),"slickPrev",(function(){return t.innerSlider.slickPrev()})),y(m(t),"slickNext",(function(){return t.innerSlider.slickNext()})),y(m(t),"slickGoTo",(function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t.innerSlider.slickGoTo(e,n)})),y(m(t),"slickPause",(function(){return t.innerSlider.pause("paused")})),y(m(t),"slickPlay",(function(){return t.innerSlider.autoPlay("play")})),t.state={breakpoint:null},t._responsiveMediaHandlers=[],t}return t=d,(n=[{key:"media",value:function(e,t){w.register(e,t),this._responsiveMediaHandlers.push({query:e,handler:t})}},{key:"componentDidMount",value:function(){var e=this;if(this.props.responsive){var t=this.props.responsive.map((function(e){return e.breakpoint}));t.sort((function(e,t){return e-t})),t.forEach((function(n,r){var o;o=0===r?(0,i.default)({minWidth:0,maxWidth:n}):(0,i.default)({minWidth:t[r-1]+1,maxWidth:n}),(0,l.canUseDOM)()&&e.media(o,(function(){e.setState({breakpoint:n})}))}));var n=(0,i.default)({minWidth:t.slice(-1)[0]});(0,l.canUseDOM)()&&this.media(n,(function(){e.setState({breakpoint:null})}))}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach((function(e){w.unregister(e.query,e.handler)}))}},{key:"render",value:function(){var e,t,n=this;(e=this.state.breakpoint?"unslick"===(t=this.props.responsive.filter((function(e){return e.breakpoint===n.state.breakpoint})))[0].settings?"unslick":f(f(f({},a.default),this.props),t[0].settings):f(f({},a.default),this.props)).centerMode&&(e.slidesToScroll,e.slidesToScroll=1),e.fade&&(e.slidesToShow,e.slidesToScroll,e.slidesToShow=1,e.slidesToScroll=1);var i=r.default.Children.toArray(this.props.children);i=i.filter((function(e){return"string"===typeof e?!!e.trim():!!e})),e.variableWidth&&(e.rows>1||e.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),e.variableWidth=!1);for(var s=[],c=null,d=0;d<i.length;d+=e.rows*e.slidesPerRow){for(var p=[],h=d;h<d+e.rows*e.slidesPerRow;h+=e.slidesPerRow){for(var g=[],m=h;m<h+e.slidesPerRow&&(e.variableWidth&&i[m].props.style&&(c=i[m].props.style.width),!(m>=i.length));m+=1)g.push(r.default.cloneElement(i[m],{key:100*d+10*h+m,tabIndex:-1,style:{width:"".concat(100/e.slidesPerRow,"%"),display:"inline-block"}}));p.push(r.default.createElement("div",{key:10*d+h},g))}e.variableWidth?s.push(r.default.createElement("div",{key:d,style:{width:c}},p)):s.push(r.default.createElement("div",{key:d},p))}if("unslick"===e){var v="regular slider "+(this.props.className||"");return r.default.createElement("div",{className:v},i)}return s.length<=e.slidesToShow&&!e.infinite&&(e.unslick=!0),r.default.createElement(o.InnerSlider,u({style:this.props.style,ref:this.innerSliderRefHandler},(0,l.filterSettings)(e)),s)}}])&&p(t.prototype,n),s&&p(t,s),Object.defineProperty(t,"prototype",{writable:!1}),d}(r.default.Component)},737:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Track=void 0;var r=a(n(43)),o=a(n(139)),i=n(200);function a(e){return e&&e.__esModule?e:{default:e}}function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,b(r.key),r)}}function u(e,t){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},u(e,t)}function d(e){var t=p();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===l(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return f(e)}(this,n)}}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(p=function(){return!!e})()}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t,n){return(t=b(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){var t=function(e,t){if("object"!=l(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==l(t)?t:String(t)}var y=function(e){var t,n,r,o,i;return r=(i=e.rtl?e.slideCount-1-e.index:e.index)<0||i>=e.slideCount,e.centerMode?(o=Math.floor(e.slidesToShow/2),n=(i-e.currentSlide)%e.slideCount===0,i>e.currentSlide-o-1&&i<=e.currentSlide+o&&(t=!0)):t=e.currentSlide<=i&&i<e.currentSlide+e.slidesToShow,{"slick-slide":!0,"slick-active":t,"slick-center":n,"slick-cloned":r,"slick-current":i===(e.targetSlide<0?e.targetSlide+e.slideCount:e.targetSlide>=e.slideCount?e.targetSlide-e.slideCount:e.targetSlide)}},x=function(e,t){return e.key||t},w=function(e){var t,n=[],a=[],l=[],s=r.default.Children.count(e.children),c=(0,i.lazyStartIndex)(e),u=(0,i.lazyEndIndex)(e);return r.default.Children.forEach(e.children,(function(d,f){var p,h={message:"children",index:f,slidesToScroll:e.slidesToScroll,currentSlide:e.currentSlide};p=!e.lazyLoad||e.lazyLoad&&e.lazyLoadedList.indexOf(f)>=0?d:r.default.createElement("div",null);var g=function(e){var t={};return void 0!==e.variableWidth&&!1!==e.variableWidth||(t.width=e.slideWidth),e.fade&&(t.position="relative",e.vertical?t.top=-e.index*parseInt(e.slideHeight):t.left=-e.index*parseInt(e.slideWidth),t.opacity=e.currentSlide===e.index?1:0,t.zIndex=e.currentSlide===e.index?999:998,e.useCSS&&(t.transition="opacity "+e.speed+"ms "+e.cssEase+", visibility "+e.speed+"ms "+e.cssEase)),t}(m(m({},e),{},{index:f})),v=p.props.className||"",b=y(m(m({},e),{},{index:f}));if(n.push(r.default.cloneElement(p,{key:"original"+x(p,f),"data-index":f,className:(0,o.default)(b,v),tabIndex:"-1","aria-hidden":!b["slick-active"],style:m(m({outline:"none"},p.props.style||{}),g),onClick:function(t){p.props&&p.props.onClick&&p.props.onClick(t),e.focusOnSelect&&e.focusOnSelect(h)}})),e.infinite&&!1===e.fade){var w=s-f;w<=(0,i.getPreClones)(e)&&((t=-w)>=c&&(p=d),b=y(m(m({},e),{},{index:t})),a.push(r.default.cloneElement(p,{key:"precloned"+x(p,t),"data-index":t,tabIndex:"-1",className:(0,o.default)(b,v),"aria-hidden":!b["slick-active"],style:m(m({},p.props.style||{}),g),onClick:function(t){p.props&&p.props.onClick&&p.props.onClick(t),e.focusOnSelect&&e.focusOnSelect(h)}}))),(t=s+f)<u&&(p=d),b=y(m(m({},e),{},{index:t})),l.push(r.default.cloneElement(p,{key:"postcloned"+x(p,t),"data-index":t,tabIndex:"-1",className:(0,o.default)(b,v),"aria-hidden":!b["slick-active"],style:m(m({},p.props.style||{}),g),onClick:function(t){p.props&&p.props.onClick&&p.props.onClick(t),e.focusOnSelect&&e.focusOnSelect(h)}}))}})),e.rtl?a.concat(n,l).reverse():a.concat(n,l)};t.Track=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(a,e);var t,n,o,i=d(a);function a(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return v(f(e=i.call.apply(i,[this].concat(n))),"node",null),v(f(e),"handleRef",(function(t){e.node=t})),e}return t=a,(n=[{key:"render",value:function(){var e=w(this.props),t=this.props,n={onMouseEnter:t.onMouseEnter,onMouseOver:t.onMouseOver,onMouseLeave:t.onMouseLeave};return r.default.createElement("div",s({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},n),e)}}])&&c(t.prototype,n),o&&c(t,o),Object.defineProperty(t,"prototype",{writable:!1}),a}(r.default.PureComponent)},200:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.checkSpecKeys=t.checkNavigable=t.changeSlide=t.canUseDOM=t.canGoNext=void 0,t.clamp=u,t.extractObject=void 0,t.filterSettings=function(e){return D.reduce((function(t,n){return e.hasOwnProperty(n)&&(t[n]=e[n]),t}),{})},t.validSettings=t.swipeStart=t.swipeMove=t.swipeEnd=t.slidesOnRight=t.slidesOnLeft=t.slideHandler=t.siblingDirection=t.safePreventDefault=t.lazyStartIndex=t.lazySlidesOnRight=t.lazySlidesOnLeft=t.lazyEndIndex=t.keyHandler=t.initializedState=t.getWidth=t.getTrackLeft=t.getTrackCSS=t.getTrackAnimateCSS=t.getTotalSlides=t.getSwipeDirection=t.getSlideCount=t.getRequiredLazySlides=t.getPreClones=t.getPostClones=t.getOnDemandLazySlides=t.getNavigableIndexes=t.getHeight=void 0;var r=i(n(43)),o=i(n(112));function i(e){return e&&e.__esModule?e:{default:e}}function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=a(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==a(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t,n){return Math.max(t,Math.min(e,n))}var d=t.safePreventDefault=function(e){["onTouchStart","onTouchMove","onWheel"].includes(e._reactName)||e.preventDefault()},f=t.getOnDemandLazySlides=function(e){for(var t=[],n=p(e),r=h(e),o=n;o<r;o++)e.lazyLoadedList.indexOf(o)<0&&t.push(o);return t},p=(t.getRequiredLazySlides=function(e){for(var t=[],n=p(e),r=h(e),o=n;o<r;o++)t.push(o);return t},t.lazyStartIndex=function(e){return e.currentSlide-g(e)}),h=t.lazyEndIndex=function(e){return e.currentSlide+m(e)},g=t.lazySlidesOnLeft=function(e){return e.centerMode?Math.floor(e.slidesToShow/2)+(parseInt(e.centerPadding)>0?1:0):0},m=t.lazySlidesOnRight=function(e){return e.centerMode?Math.floor((e.slidesToShow-1)/2)+1+(parseInt(e.centerPadding)>0?1:0):e.slidesToShow},v=t.getWidth=function(e){return e&&e.offsetWidth||0},b=t.getHeight=function(e){return e&&e.offsetHeight||0},y=t.getSwipeDirection=function(e){var t,n,r,o,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t=e.startX-e.curX,n=e.startY-e.curY,r=Math.atan2(n,t),(o=Math.round(180*r/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0||o<=360&&o>=315?"left":o>=135&&o<=225?"right":!0===i?o>=35&&o<=135?"up":"down":"vertical"},x=t.canGoNext=function(e){var t=!0;return e.infinite||(e.centerMode&&e.currentSlide>=e.slideCount-1||e.slideCount<=e.slidesToShow||e.currentSlide>=e.slideCount-e.slidesToShow)&&(t=!1),t},w=(t.extractObject=function(e,t){var n={};return t.forEach((function(t){return n[t]=e[t]})),n},t.initializedState=function(e){var t,n=r.default.Children.count(e.children),o=e.listRef,i=Math.ceil(v(o)),a=e.trackRef&&e.trackRef.node,l=Math.ceil(v(a));if(e.vertical)t=i;else{var c=e.centerMode&&2*parseInt(e.centerPadding);"string"===typeof e.centerPadding&&"%"===e.centerPadding.slice(-1)&&(c*=i/100),t=Math.ceil((i-c)/e.slidesToShow)}var u=o&&b(o.querySelector('[data-index="0"]')),d=u*e.slidesToShow,p=void 0===e.currentSlide?e.initialSlide:e.currentSlide;e.rtl&&void 0===e.currentSlide&&(p=n-1-e.initialSlide);var h=e.lazyLoadedList||[],g=f(s(s({},e),{},{currentSlide:p,lazyLoadedList:h})),m={slideCount:n,slideWidth:t,listWidth:i,trackWidth:l,currentSlide:p,slideHeight:u,listHeight:d,lazyLoadedList:h=h.concat(g)};return null===e.autoplaying&&e.autoplay&&(m.autoplaying="playing"),m},t.slideHandler=function(e){var t=e.waitForAnimate,n=e.animating,r=e.fade,o=e.infinite,i=e.index,a=e.slideCount,l=e.lazyLoad,c=e.currentSlide,d=e.centerMode,p=e.slidesToScroll,h=e.slidesToShow,g=e.useCSS,m=e.lazyLoadedList;if(t&&n)return{};var v,b,y,w=i,k={},S={},j=o?i:u(i,0,a-1);if(r){if(!o&&(i<0||i>=a))return{};i<0?w=i+a:i>=a&&(w=i-a),l&&m.indexOf(w)<0&&(m=m.concat(w)),k={animating:!0,currentSlide:w,lazyLoadedList:m,targetSlide:w},S={animating:!1,targetSlide:w}}else v=w,w<0?(v=w+a,o?a%p!==0&&(v=a-a%p):v=0):!x(e)&&w>c?w=v=c:d&&w>=a?(w=o?a:a-1,v=o?0:a-1):w>=a&&(v=w-a,o?a%p!==0&&(v=0):v=a-h),!o&&w+h>=a&&(v=a-h),b=T(s(s({},e),{},{slideIndex:w})),y=T(s(s({},e),{},{slideIndex:v})),o||(b===y&&(w=v),b=y),l&&(m=m.concat(f(s(s({},e),{},{currentSlide:w})))),g?(k={animating:!0,currentSlide:v,trackStyle:E(s(s({},e),{},{left:b})),lazyLoadedList:m,targetSlide:j},S={animating:!1,currentSlide:v,trackStyle:C(s(s({},e),{},{left:y})),swipeLeft:null,targetSlide:j}):k={currentSlide:v,trackStyle:C(s(s({},e),{},{left:y})),lazyLoadedList:m,targetSlide:j};return{state:k,nextState:S}},t.changeSlide=function(e,t){var n,r,o,i,a=e.slidesToScroll,l=e.slidesToShow,c=e.slideCount,u=e.currentSlide,d=e.targetSlide,f=e.lazyLoad,p=e.infinite;if(n=c%a!==0?0:(c-u)%a,"previous"===t.message)i=u-(o=0===n?a:l-n),f&&!p&&(i=-1===(r=u-o)?c-1:r),p||(i=d-a);else if("next"===t.message)i=u+(o=0===n?a:n),f&&!p&&(i=(u+a)%c+n),p||(i=d+a);else if("dots"===t.message)i=t.index*t.slidesToScroll;else if("children"===t.message){if(i=t.index,p){var h=L(s(s({},e),{},{targetSlide:i}));i>t.currentSlide&&"left"===h?i-=c:i<t.currentSlide&&"right"===h&&(i+=c)}}else"index"===t.message&&(i=Number(t.index));return i},t.keyHandler=function(e,t,n){return e.target.tagName.match("TEXTAREA|INPUT|SELECT")||!t?"":37===e.keyCode?n?"next":"previous":39===e.keyCode?n?"previous":"next":""},t.swipeStart=function(e,t,n){return"IMG"===e.target.tagName&&d(e),!t||!n&&-1!==e.type.indexOf("mouse")?"":{dragging:!0,touchObject:{startX:e.touches?e.touches[0].pageX:e.clientX,startY:e.touches?e.touches[0].pageY:e.clientY,curX:e.touches?e.touches[0].pageX:e.clientX,curY:e.touches?e.touches[0].pageY:e.clientY}}},t.swipeMove=function(e,t){var n=t.scrolling,r=t.animating,o=t.vertical,i=t.swipeToSlide,a=t.verticalSwiping,l=t.rtl,c=t.currentSlide,u=t.edgeFriction,f=t.edgeDragged,p=t.onEdge,h=t.swiped,g=t.swiping,m=t.slideCount,v=t.slidesToScroll,b=t.infinite,w=t.touchObject,k=t.swipeEvent,S=t.listHeight,j=t.listWidth;if(!n){if(r)return d(e);o&&i&&a&&d(e);var E,P={},O=T(t);w.curX=e.touches?e.touches[0].pageX:e.clientX,w.curY=e.touches?e.touches[0].pageY:e.clientY,w.swipeLength=Math.round(Math.sqrt(Math.pow(w.curX-w.startX,2)));var _=Math.round(Math.sqrt(Math.pow(w.curY-w.startY,2)));if(!a&&!g&&_>10)return{scrolling:!0};a&&(w.swipeLength=_);var L=(l?-1:1)*(w.curX>w.startX?1:-1);a&&(L=w.curY>w.startY?1:-1);var A=Math.ceil(m/v),R=y(t.touchObject,a),D=w.swipeLength;return b||(0===c&&("right"===R||"down"===R)||c+1>=A&&("left"===R||"up"===R)||!x(t)&&("left"===R||"up"===R))&&(D=w.swipeLength*u,!1===f&&p&&(p(R),P.edgeDragged=!0)),!h&&k&&(k(R),P.swiped=!0),E=o?O+D*(S/j)*L:l?O-D*L:O+D*L,a&&(E=O+D*L),P=s(s({},P),{},{touchObject:w,swipeLeft:E,trackStyle:C(s(s({},t),{},{left:E}))}),Math.abs(w.curX-w.startX)<.8*Math.abs(w.curY-w.startY)?P:(w.swipeLength>10&&(P.swiping=!0,d(e)),P)}},t.swipeEnd=function(e,t){var n=t.dragging,r=t.swipe,o=t.touchObject,i=t.listWidth,a=t.touchThreshold,l=t.verticalSwiping,c=t.listHeight,u=t.swipeToSlide,f=t.scrolling,p=t.onSwipe,h=t.targetSlide,g=t.currentSlide,m=t.infinite;if(!n)return r&&d(e),{};var v=l?c/a:i/a,b=y(o,l),x={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(f)return x;if(!o.swipeLength)return x;if(o.swipeLength>v){var w,j;d(e),p&&p(b);var C=m?g:h;switch(b){case"left":case"up":j=C+S(t),w=u?k(t,j):j,x.currentDirection=0;break;case"right":case"down":j=C-S(t),w=u?k(t,j):j,x.currentDirection=1;break;default:w=C}x.triggerSlideHandler=w}else{var P=T(t);x.trackStyle=E(s(s({},t),{},{left:P}))}return x},t.getNavigableIndexes=function(e){for(var t=e.infinite?2*e.slideCount:e.slideCount,n=e.infinite?-1*e.slidesToShow:0,r=e.infinite?-1*e.slidesToShow:0,o=[];n<t;)o.push(n),n=r+e.slidesToScroll,r+=Math.min(e.slidesToScroll,e.slidesToShow);return o}),k=t.checkNavigable=function(e,t){var n=w(e),r=0;if(t>n[n.length-1])t=n[n.length-1];else for(var o in n){if(t<n[o]){t=r;break}r=n[o]}return t},S=t.getSlideCount=function(e){var t=e.centerMode?e.slideWidth*Math.floor(e.slidesToShow/2):0;if(e.swipeToSlide){var n,r=e.listRef,o=r.querySelectorAll&&r.querySelectorAll(".slick-slide")||[];if(Array.from(o).every((function(r){if(e.vertical){if(r.offsetTop+b(r)/2>-1*e.swipeLeft)return n=r,!1}else if(r.offsetLeft-t+v(r)/2>-1*e.swipeLeft)return n=r,!1;return!0})),!n)return 0;var i=!0===e.rtl?e.slideCount-e.currentSlide:e.currentSlide;return Math.abs(n.dataset.index-i)||1}return e.slidesToScroll},j=t.checkSpecKeys=function(e,t){return t.reduce((function(t,n){return t&&e.hasOwnProperty(n)}),!0)?null:console.error("Keys Missing:",e)},C=t.getTrackCSS=function(e){var t,n;j(e,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var r=e.slideCount+2*e.slidesToShow;e.vertical?n=r*e.slideHeight:t=_(e)*e.slideWidth;var o={opacity:1,transition:"",WebkitTransition:""};if(e.useTransform){var i=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",a=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",l=e.vertical?"translateY("+e.left+"px)":"translateX("+e.left+"px)";o=s(s({},o),{},{WebkitTransform:i,transform:a,msTransform:l})}else e.vertical?o.top=e.left:o.left=e.left;return e.fade&&(o={opacity:1}),t&&(o.width=t),n&&(o.height=n),window&&!window.addEventListener&&window.attachEvent&&(e.vertical?o.marginTop=e.left+"px":o.marginLeft=e.left+"px"),o},E=t.getTrackAnimateCSS=function(e){j(e,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var t=C(e);return e.useTransform?(t.WebkitTransition="-webkit-transform "+e.speed+"ms "+e.cssEase,t.transition="transform "+e.speed+"ms "+e.cssEase):e.vertical?t.transition="top "+e.speed+"ms "+e.cssEase:t.transition="left "+e.speed+"ms "+e.cssEase,t},T=t.getTrackLeft=function(e){if(e.unslick)return 0;j(e,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var t,n,r=e.slideIndex,o=e.trackRef,i=e.infinite,a=e.centerMode,l=e.slideCount,s=e.slidesToShow,c=e.slidesToScroll,u=e.slideWidth,d=e.listWidth,f=e.variableWidth,p=e.slideHeight,h=e.fade,g=e.vertical;if(h||1===e.slideCount)return 0;var m=0;if(i?(m=-P(e),l%c!==0&&r+c>l&&(m=-(r>l?s-(r-l):l%c)),a&&(m+=parseInt(s/2))):(l%c!==0&&r+c>l&&(m=s-l%c),a&&(m=parseInt(s/2))),t=g?r*p*-1+m*p:r*u*-1+m*u,!0===f){var v,b=o&&o.node;if(v=r+P(e),t=(n=b&&b.childNodes[v])?-1*n.offsetLeft:0,!0===a){v=i?r+P(e):r,n=b&&b.children[v],t=0;for(var y=0;y<v;y++)t-=b&&b.children[y]&&b.children[y].offsetWidth;t-=parseInt(e.centerPadding),t+=n&&(d-n.offsetWidth)/2}}return t},P=t.getPreClones=function(e){return e.unslick||!e.infinite?0:e.variableWidth?e.slideCount:e.slidesToShow+(e.centerMode?1:0)},O=t.getPostClones=function(e){return e.unslick||!e.infinite?0:e.slideCount},_=t.getTotalSlides=function(e){return 1===e.slideCount?1:P(e)+e.slideCount+O(e)},L=t.siblingDirection=function(e){return e.targetSlide>e.currentSlide?e.targetSlide>e.currentSlide+A(e)?"left":"right":e.targetSlide<e.currentSlide-R(e)?"right":"left"},A=t.slidesOnRight=function(e){var t=e.slidesToShow,n=e.centerMode,r=e.rtl,o=e.centerPadding;if(n){var i=(t-1)/2+1;return parseInt(o)>0&&(i+=1),r&&t%2===0&&(i+=1),i}return r?0:t-1},R=t.slidesOnLeft=function(e){var t=e.slidesToShow,n=e.centerMode,r=e.rtl,o=e.centerPadding;if(n){var i=(t-1)/2+1;return parseInt(o)>0&&(i+=1),r||t%2!==0||(i+=1),i}return r?t-1:0},D=(t.canUseDOM=function(){return!("undefined"===typeof window||!window.document||!window.document.createElement)},t.validSettings=Object.keys(o.default))},153:(e,t,n)=>{"use strict";var r=n(43),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,i={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,r)&&!s.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:u,props:i,_owner:l.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,m={};function v(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}function b(){}function y(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=v.prototype;var x=y.prototype=new b;x.constructor=y,g(x,v.prototype),x.isPureReactComponent=!0;var w=Array.isArray,k=Object.prototype.hasOwnProperty,S={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var o,i={},a=null,l=null;if(null!=t)for(o in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(a=""+t.key),t)k.call(t,o)&&!j.hasOwnProperty(o)&&(i[o]=t[o]);var s=arguments.length-2;if(1===s)i.children=r;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===i[o]&&(i[o]=s[o]);return{$$typeof:n,type:e,key:a,ref:l,props:i,_owner:S.current}}function E(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var T=/\/+/g;function P(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,o,i,a){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return a=a(s=e),e=""===i?"."+P(s,0):i,w(a)?(o="",null!=e&&(o=e.replace(T,"$&/")+"/"),O(a,t,o,"",(function(e){return e}))):null!=a&&(E(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(T,"$&/")+"/")+e)),t.push(a)),1;if(s=0,i=""===i?".":i+":",w(e))for(var c=0;c<e.length;c++){var u=i+P(l=e[c],c);s+=O(l,t,o,u,a)}else if(u=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"===typeof u)for(e=u.call(e),c=0;!(l=e.next()).done;)s+=O(l=l.value,t,o,u=i+P(l,c++),a);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function _(e,t,n){if(null==e)return e;var r=[],o=0;return O(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function L(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var A={current:null},R={transition:null},D={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:R,ReactCurrentOwner:S};function N(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:_,forEach:function(e,t,n){_(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return _(e,(function(){t++})),t},toArray:function(e){return _(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=o,t.Profiler=a,t.PureComponent=y,t.StrictMode=i,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,t.act=N,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=g({},e.props),i=e.key,a=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,l=S.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)k.call(t,c)&&!j.hasOwnProperty(c)&&(o[c]=void 0===t[c]&&void 0!==s?s[c]:t[c])}var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];o.children=s}return{$$typeof:n,type:e.type,key:i,ref:a,props:o,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:L}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=R.transition;R.transition={};try{e()}finally{R.transition=t}},t.unstable_act=N,t.useCallback=function(e,t){return A.current.useCallback(e,t)},t.useContext=function(e){return A.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return A.current.useDeferredValue(e)},t.useEffect=function(e,t){return A.current.useEffect(e,t)},t.useId=function(){return A.current.useId()},t.useImperativeHandle=function(e,t,n){return A.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return A.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return A.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return A.current.useMemo(e,t)},t.useReducer=function(e,t,n){return A.current.useReducer(e,t,n)},t.useRef=function(e){return A.current.useRef(e)},t.useState=function(e){return A.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return A.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return A.current.useTransition()},t.version="18.3.1"},43:(e,t,n)=>{"use strict";e.exports=n(202)},579:(e,t,n)=>{"use strict";e.exports=n(153)},820:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>j});var r=function(){if("undefined"!==typeof Map)return Map;function e(e,t){var n=-1;return e.some((function(e,r){return e[0]===t&&(n=r,!0)})),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),r=this.__entries__[n];return r&&r[1]},t.prototype.set=function(t,n){var r=e(this.__entries__,t);~r?this.__entries__[r][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,r=e(n,t);~r&&n.splice(r,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var n=0,r=this.__entries__;n<r.length;n++){var o=r[n];e.call(t,o[1],o[0])}},t}()}(),o="undefined"!==typeof window&&"undefined"!==typeof document&&window.document===document,i="undefined"!==typeof n.g&&n.g.Math===Math?n.g:"undefined"!==typeof self&&self.Math===Math?self:"undefined"!==typeof window&&window.Math===Math?window:Function("return this")(),a="function"===typeof requestAnimationFrame?requestAnimationFrame.bind(i):function(e){return setTimeout((function(){return e(Date.now())}),1e3/60)};var l=["top","right","bottom","left","width","height","size","weight"],s="undefined"!==typeof MutationObserver,c=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var n=!1,r=!1,o=0;function i(){n&&(n=!1,e()),r&&s()}function l(){a(i)}function s(){var e=Date.now();if(n){if(e-o<2)return;r=!0}else n=!0,r=!1,setTimeout(l,t);o=e}return s}(this.refresh.bind(this),20)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter((function(e){return e.gatherActive(),e.hasActive()}));return e.forEach((function(e){return e.broadcastActive()})),e.length>0},e.prototype.connect_=function(){o&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),s?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){o&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=void 0===t?"":t;l.some((function(e){return!!~n.indexOf(e)}))&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),u=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var o=r[n];Object.defineProperty(e,o,{value:t[o],enumerable:!1,writable:!1,configurable:!0})}return e},d=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||i},f=b(0,0,0,0);function p(e){return parseFloat(e)||0}function h(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce((function(t,n){return t+p(e["border-"+n+"-width"])}),0)}function g(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return f;var r=d(e).getComputedStyle(e),o=function(e){for(var t={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var o=r[n],i=e["padding-"+o];t[o]=p(i)}return t}(r),i=o.left+o.right,a=o.top+o.bottom,l=p(r.width),s=p(r.height);if("border-box"===r.boxSizing&&(Math.round(l+i)!==t&&(l-=h(r,"left","right")+i),Math.round(s+a)!==n&&(s-=h(r,"top","bottom")+a)),!function(e){return e===d(e).document.documentElement}(e)){var c=Math.round(l+i)-t,u=Math.round(s+a)-n;1!==Math.abs(c)&&(l-=c),1!==Math.abs(u)&&(s-=u)}return b(o.left,o.top,l,s)}var m="undefined"!==typeof SVGGraphicsElement?function(e){return e instanceof d(e).SVGGraphicsElement}:function(e){return e instanceof d(e).SVGElement&&"function"===typeof e.getBBox};function v(e){return o?m(e)?function(e){var t=e.getBBox();return b(0,0,t.width,t.height)}(e):g(e):f}function b(e,t,n,r){return{x:e,y:t,width:n,height:r}}var y=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=b(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=v(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),x=function(e,t){var n=function(e){var t=e.x,n=e.y,r=e.width,o=e.height,i="undefined"!==typeof DOMRectReadOnly?DOMRectReadOnly:Object,a=Object.create(i.prototype);return u(a,{x:t,y:n,width:r,height:o,top:n,right:t+r,bottom:o+n,left:t}),a}(t);u(this,{target:e,contentRect:n})},w=function(){function e(e,t,n){if(this.activeObservations_=[],this.observations_=new r,"function"!==typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=n}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(e instanceof d(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new y(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(e instanceof d(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach((function(t){t.isActive()&&e.activeObservations_.push(t)}))},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map((function(e){return new x(e.target,e.broadcastRect())}));this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),k="undefined"!==typeof WeakMap?new WeakMap:new r,S=function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=c.getInstance(),r=new w(t,n,this);k.set(this,r)};["observe","unobserve","disconnect"].forEach((function(e){S.prototype[e]=function(){var t;return(t=k.get(this))[e].apply(t,arguments)}}));const j="undefined"!==typeof i.ResizeObserver?i.ResizeObserver:S},234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(!(0<i(o,t)))break e;e[r]=t,e[n]=o,n=r}}function r(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,a=o>>>1;r<a;){var l=2*(r+1)-1,s=e[l],c=l+1,u=e[c];if(0>i(s,n))c<o&&0>i(u,s)?(e[r]=u,e[c]=n,r=c):(e[r]=s,e[l]=n,r=l);else{if(!(c<o&&0>i(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var a=performance;t.unstable_now=function(){return a.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var c=[],u=[],d=1,f=null,p=3,h=!1,g=!1,m=!1,v="function"===typeof setTimeout?setTimeout:null,b="function"===typeof clearTimeout?clearTimeout:null,y="undefined"!==typeof setImmediate?setImmediate:null;function x(e){for(var t=r(u);null!==t;){if(null===t.callback)o(u);else{if(!(t.startTime<=e))break;o(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function w(e){if(m=!1,x(e),!g)if(null!==r(c))g=!0,R(k);else{var t=r(u);null!==t&&D(w,t.startTime-e)}}function k(e,n){g=!1,m&&(m=!1,b(E),E=-1),h=!0;var i=p;try{for(x(n),f=r(c);null!==f&&(!(f.expirationTime>n)||e&&!O());){var a=f.callback;if("function"===typeof a){f.callback=null,p=f.priorityLevel;var l=a(f.expirationTime<=n);n=t.unstable_now(),"function"===typeof l?f.callback=l:f===r(c)&&o(c),x(n)}else o(c);f=r(c)}if(null!==f)var s=!0;else{var d=r(u);null!==d&&D(w,d.startTime-n),s=!1}return s}finally{f=null,p=i,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var S,j=!1,C=null,E=-1,T=5,P=-1;function O(){return!(t.unstable_now()-P<T)}function _(){if(null!==C){var e=t.unstable_now();P=e;var n=!0;try{n=C(!0,e)}finally{n?S():(j=!1,C=null)}}else j=!1}if("function"===typeof y)S=function(){y(_)};else if("undefined"!==typeof MessageChannel){var L=new MessageChannel,A=L.port2;L.port1.onmessage=_,S=function(){A.postMessage(null)}}else S=function(){v(_,0)};function R(e){C=e,j||(j=!0,S())}function D(e,n){E=v((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){g||h||(g=!0,R(k))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,o,i){var a=t.unstable_now();switch("object"===typeof i&&null!==i?i="number"===typeof(i=i.delay)&&0<i?a+i:a:i=a,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:o,priorityLevel:e,startTime:i,expirationTime:l=i+l,sortIndex:-1},i>a?(e.sortIndex=i,n(u,e),null===r(c)&&e===r(u)&&(m?(b(E),E=-1):m=!0,D(w,i-a))):(e.sortIndex=l,n(c,e),g||h||(g=!0,R(k))),e},t.unstable_shouldYield=O,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},853:(e,t,n)=>{"use strict";e.exports=n(234)},324:e=>{e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<i.length;s++){var c=i[s];if(!l(c))return!1;var u=e[c],d=t[c];if(!1===(o=n?n.call(r,u,d,c):void 0)||void 0===o&&u!==d)return!1}return!0}},475:e=>{e.exports=function(e){return e.replace(/[A-Z]/g,(function(e){return"-"+e.toLowerCase()})).toLowerCase()}},252:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=a(e,i.call(this,n)))}return e}function i(e){if("string"===typeof e||"number"===typeof e)return this&&this[e]||e;if("object"!==typeof e)return"";if(Array.isArray(e))return o.apply(this,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=a(t,this&&this[n]||n));return t}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},139:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=a(e,i(n)))}return e}function i(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=a(t,n));return t}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var i=Object.create(null);n.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var l=2&o&&r;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>a[e]=()=>r[e]));return a.default=()=>r,n.d(i,a),i}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,(()=>{"use strict";var e={};n.r(e),n.d(e,{hasBrowserEnv:()=>du,hasStandardBrowserEnv:()=>pu,hasStandardBrowserWebWorkerEnv:()=>hu,navigator:()=>fu,origin:()=>gu});var t,r=n(43),o=n.t(r,2),i=n(391),a=n(950),l=n.t(a,2);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(t||(t={}));const c="popstate";function u(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function d(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function f(e,t){return{usr:e.state,key:e.key,idx:t}}function p(e,t,n,r){return void 0===n&&(n=null),s({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?g(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function h(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function g(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function m(e,n,r,o){void 0===o&&(o={});let{window:i=document.defaultView,v5Compat:a=!1}=o,l=i.history,d=t.Pop,g=null,m=v();function v(){return(l.state||{idx:null}).idx}function b(){d=t.Pop;let e=v(),n=null==e?null:e-m;m=e,g&&g({action:d,location:x.location,delta:n})}function y(e){let t="null"!==i.location.origin?i.location.origin:i.location.href,n="string"===typeof e?e:h(e);return n=n.replace(/ $/,"%20"),u(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==m&&(m=0,l.replaceState(s({},l.state,{idx:m}),""));let x={get action(){return d},get location(){return e(i,l)},listen(e){if(g)throw new Error("A history only accepts one active listener");return i.addEventListener(c,b),g=e,()=>{i.removeEventListener(c,b),g=null}},createHref:e=>n(i,e),createURL:y,encodeLocation(e){let t=y(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,n){d=t.Push;let o=p(x.location,e,n);r&&r(o,e),m=v()+1;let s=f(o,m),c=x.createHref(o);try{l.pushState(s,"",c)}catch(u){if(u instanceof DOMException&&"DataCloneError"===u.name)throw u;i.location.assign(c)}a&&g&&g({action:d,location:x.location,delta:1})},replace:function(e,n){d=t.Replace;let o=p(x.location,e,n);r&&r(o,e),m=v();let i=f(o,m),s=x.createHref(o);l.replaceState(i,"",s),a&&g&&g({action:d,location:x.location,delta:0})},go:e=>l.go(e)};return x}var v;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(v||(v={}));const b=new Set(["lazy","caseSensitive","path","id","index","children"]);function y(e,t,n,r){return void 0===n&&(n=[]),void 0===r&&(r={}),e.map(((e,o)=>{let i=[...n,String(o)],a="string"===typeof e.id?e.id:i.join("-");if(u(!0!==e.index||!e.children,"Cannot specify children on an index route"),u(!r[a],'Found a route id collision on id "'+a+"\".  Route id's must be globally unique within Data Router usages"),function(e){return!0===e.index}(e)){let n=s({},e,t(e),{id:a});return r[a]=n,n}{let n=s({},e,t(e),{id:a,children:void 0});return r[a]=n,e.children&&(n.children=y(e.children,t,i,r)),n}}))}function x(e,t,n){return void 0===n&&(n="/"),w(e,t,n,!1)}function w(e,t,n,r){let o=N(("string"===typeof t?g(t):t).pathname||"/",n);if(null==o)return null;let i=k(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(i);let a=null;for(let l=0;null==a&&l<i.length;++l){let e=D(o);a=A(i[l],e,r)}return a}function k(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let o=(e,o,i)=>{let a={relativePath:void 0===i?e.path||"":i,caseSensitive:!0===e.caseSensitive,childrenIndex:o,route:e};a.relativePath.startsWith("/")&&(u(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),a.relativePath=a.relativePath.slice(r.length));let l=M([r,a.relativePath]),s=n.concat(a);e.children&&e.children.length>0&&(u(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+l+'".'),k(e.children,t,s,l)),(null!=e.path||e.index)&&t.push({path:l,score:L(l,e.index),routesMeta:s})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of S(e.path))o(e,t,r);else o(e,t)})),t}function S(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(0===r.length)return o?[i,""]:[i];let a=S(r.join("/")),l=[];return l.push(...a.map((e=>""===e?i:[i,e].join("/")))),o&&l.push(...a),l.map((t=>e.startsWith("/")&&""===t?"/":t))}const j=/^:[\w-]+$/,C=3,E=2,T=1,P=10,O=-2,_=e=>"*"===e;function L(e,t){let n=e.split("/"),r=n.length;return n.some(_)&&(r+=O),t&&(r+=E),n.filter((e=>!_(e))).reduce(((e,t)=>e+(j.test(t)?C:""===t?T:P)),r)}function A(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,o={},i="/",a=[];for(let l=0;l<r.length;++l){let e=r[l],s=l===r.length-1,c="/"===i?t:t.slice(i.length)||"/",u=R({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},c),d=e.route;if(!u&&s&&n&&!r[r.length-1].route.index&&(u=R({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(o,u.params),a.push({params:o,pathname:M([i,u.pathname]),pathnameBase:F(M([i,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(i=M([i,u.pathnameBase]))}return a}function R(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);d("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),o+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":""!==e&&"/"!==e&&(o+="(?:(?=\\/|$))");let i=new RegExp(o,t?void 0:"i");return[i,r]}(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:o}=t;if("*"===r){let e=l[n]||"";a=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[n];return e[r]=o&&!s?void 0:(s||"").replace(/%2F/g,"/"),e}),{}),pathname:i,pathnameBase:a,pattern:e}}function D(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return d(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function N(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function I(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function B(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function $(e,t){let n=B(e);return t?n.map(((e,t)=>t===n.length-1?e.pathname:e.pathnameBase)):n.map((e=>e.pathnameBase))}function z(e,t,n,r){let o;void 0===r&&(r=!1),"string"===typeof e?o=g(e):(o=s({},e),u(!o.pathname||!o.pathname.includes("?"),I("?","pathname","search",o)),u(!o.pathname||!o.pathname.includes("#"),I("#","pathname","hash",o)),u(!o.search||!o.search.includes("#"),I("#","search","hash",o)));let i,a=""===e||""===o.pathname,l=a?"/":o.pathname;if(null==l)i=n;else{let e=t.length-1;if(!r&&l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;o.pathname=t.join("/")}i=e>=0?t[e]:"/"}let c=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:o=""}="string"===typeof e?g(e):e,i=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:i,search:U(r),hash:H(o)}}(o,i),d=l&&"/"!==l&&l.endsWith("/"),f=(a||"."===l)&&n.endsWith("/");return c.pathname.endsWith("/")||!d&&!f||(c.pathname+="/"),c}const M=e=>e.join("/").replace(/\/\/+/g,"/"),F=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),U=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",H=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;class W{constructor(e,t,n,r){void 0===r&&(r=!1),this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}}function q(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const V=["post","put","patch","delete"],K=new Set(V),Y=["get",...V],G=new Set(Y),Q=new Set([301,302,303,307,308]),X=new Set([307,308]),J={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Z={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ee={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},te=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ne=e=>({hasErrorBoundary:Boolean(e.hasErrorBoundary)}),re="remix-router-transitions";function oe(e){const n=e.window?e.window:"undefined"!==typeof window?window:void 0,r="undefined"!==typeof n&&"undefined"!==typeof n.document&&"undefined"!==typeof n.document.createElement,o=!r;let i;if(u(e.routes.length>0,"You must provide a non-empty routes array to createRouter"),e.mapRouteProperties)i=e.mapRouteProperties;else if(e.detectErrorBoundary){let t=e.detectErrorBoundary;i=e=>({hasErrorBoundary:t(e)})}else i=ne;let a,l,c,f={},h=y(e.routes,i,void 0,f),g=e.basename||"/",m=e.unstable_dataStrategy||pe,b=e.unstable_patchRoutesOnNavigation,k=s({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},e.future),S=null,j=new Set,C=1e3,E=new Set,T=null,P=null,O=null,_=null!=e.hydrationData,L=x(h,e.history.location,g),A=null;if(null==L&&!b){let t=Te(404,{pathname:e.history.location.pathname}),{matches:n,route:r}=Ee(h);L=n,A={[r.id]:t}}if(L&&!e.hydrationData){ft(L,h,e.history.location.pathname).active&&(L=null)}if(L)if(L.some((e=>e.route.lazy)))l=!1;else if(L.some((e=>e.route.loader)))if(k.v7_partialHydration){let t=e.hydrationData?e.hydrationData.loaderData:null,n=e.hydrationData?e.hydrationData.errors:null,r=e=>!e.route.loader||("function"!==typeof e.route.loader||!0!==e.route.loader.hydrate)&&(t&&void 0!==t[e.route.id]||n&&void 0!==n[e.route.id]);if(n){let e=L.findIndex((e=>void 0!==n[e.route.id]));l=L.slice(0,e+1).every(r)}else l=L.every(r)}else l=null!=e.hydrationData;else l=!0;else if(l=!1,L=[],k.v7_partialHydration){let t=ft(null,h,e.history.location.pathname);t.active&&t.matches&&(L=t.matches)}let R,D,I={historyAction:e.history.action,location:e.history.location,matches:L,initialized:l,navigation:J,restoreScrollPosition:null==e.hydrationData&&null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||A,fetchers:new Map,blockers:new Map},B=t.Pop,$=!1,z=!1,M=new Map,F=null,U=!1,H=!1,W=[],V=new Set,K=new Map,Y=0,G=-1,Q=new Map,oe=new Set,le=new Map,ce=new Map,ue=new Set,ye=new Map,xe=new Map,we=new Map;function Oe(e,t){void 0===t&&(t={}),I=s({},I,e);let n=[],r=[];k.v7_fetcherPersist&&I.fetchers.forEach(((e,t)=>{"idle"===e.state&&(ue.has(t)?r.push(t):n.push(t))})),[...j].forEach((e=>e(I,{deletedFetchers:r,unstable_viewTransitionOpts:t.viewTransitionOpts,unstable_flushSync:!0===t.flushSync}))),k.v7_fetcherPersist&&(n.forEach((e=>I.fetchers.delete(e))),r.forEach((e=>Ze(e))))}function De(n,r,o){var i,l;let c,{flushSync:u}=void 0===o?{}:o,d=null!=I.actionData&&null!=I.navigation.formMethod&&Be(I.navigation.formMethod)&&"loading"===I.navigation.state&&!0!==(null==(i=n.state)?void 0:i._isRedirect);c=r.actionData?Object.keys(r.actionData).length>0?r.actionData:null:d?I.actionData:null;let f=r.loaderData?Se(I.loaderData,r.loaderData,r.matches||[],r.errors):I.loaderData,p=I.blockers;p.size>0&&(p=new Map(p),p.forEach(((e,t)=>p.set(t,ee))));let g,m=!0===$||null!=I.navigation.formMethod&&Be(I.navigation.formMethod)&&!0!==(null==(l=n.state)?void 0:l._isRedirect);if(a&&(h=a,a=void 0),U||B===t.Pop||(B===t.Push?e.history.push(n,n.state):B===t.Replace&&e.history.replace(n,n.state)),B===t.Pop){let e=M.get(I.location.pathname);e&&e.has(n.pathname)?g={currentLocation:I.location,nextLocation:n}:M.has(n.pathname)&&(g={currentLocation:n,nextLocation:I.location})}else if(z){let e=M.get(I.location.pathname);e?e.add(n.pathname):(e=new Set([n.pathname]),M.set(I.location.pathname,e)),g={currentLocation:I.location,nextLocation:n}}Oe(s({},r,{actionData:c,loaderData:f,historyAction:B,location:n,initialized:!0,navigation:J,revalidation:"idle",restoreScrollPosition:dt(n,r.matches||I.matches),preventScrollReset:m,blockers:p}),{viewTransitionOpts:g,flushSync:!0===u}),B=t.Pop,$=!1,z=!1,U=!1,H=!1,W=[]}async function Ne(n,r,o){R&&R.abort(),R=null,B=n,U=!0===(o&&o.startUninterruptedRevalidation),function(e,t){if(T&&O){let n=ut(e,t);T[n]=O()}}(I.location,I.matches),$=!0===(o&&o.preventScrollReset),z=!0===(o&&o.enableViewTransition);let i=a||h,l=o&&o.overrideNavigation,c=x(i,r,g),u=!0===(o&&o.flushSync),d=ft(c,i,r.pathname);if(d.active&&d.matches&&(c=d.matches),!c){let{error:e,notFoundMatches:t,route:n}=lt(r.pathname);return void De(r,{matches:t,loaderData:{},errors:{[n.id]:e}},{flushSync:u})}if(I.initialized&&!H&&function(e,t){if(e.pathname!==t.pathname||e.search!==t.search)return!1;if(""===e.hash)return""!==t.hash;if(e.hash===t.hash)return!0;if(""!==t.hash)return!0;return!1}(I.location,r)&&!(o&&o.submission&&Be(o.submission.formMethod)))return void De(r,{matches:c},{flushSync:u});R=new AbortController;let f,p=be(e.history,r,R.signal,o&&o.submission);if(o&&o.pendingError)f=[Ce(c).route.id,{type:v.error,error:o.pendingError}];else if(o&&o.submission&&Be(o.submission.formMethod)){let n=await async function(e,n,r,o,i,a){void 0===a&&(a={});Ge();let l,s=function(e,t){let n={state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text};return n}(n,r);if(Oe({navigation:s},{flushSync:!0===a.flushSync}),i){let t=await pt(o,n.pathname,e.signal);if("aborted"===t.type)return{shortCircuited:!0};if("error"===t.type){let{boundaryId:e,error:r}=st(n.pathname,t);return{matches:t.partialMatches,pendingActionResult:[e,{type:v.error,error:r}]}}if(!t.matches){let{notFoundMatches:e,error:t,route:r}=lt(n.pathname);return{matches:e,pendingActionResult:[r.id,{type:v.error,error:t}]}}o=t.matches}let c=Ue(o,n);if(c.route.action||c.route.lazy){if(l=(await Ke("action",I,e,[c],o,null))[c.route.id],e.signal.aborted)return{shortCircuited:!0}}else l={type:v.error,error:Te(405,{method:e.method,pathname:n.pathname,routeId:c.route.id})};if(Re(l)){let t;if(a&&null!=a.replace)t=a.replace;else{t=ve(l.response.headers.get("Location"),new URL(e.url),g)===I.location.pathname+I.location.search}return await Fe(e,l,!0,{submission:r,replace:t}),{shortCircuited:!0}}if(Le(l))throw Te(400,{type:"defer-action"});if(Ae(l)){let e=Ce(o,c.route.id);return!0!==(a&&a.replace)&&(B=t.Push),{matches:o,pendingActionResult:[e.route.id,l]}}return{matches:o,pendingActionResult:[c.route.id,l]}}(p,r,o.submission,c,d.active,{replace:o.replace,flushSync:u});if(n.shortCircuited)return;if(n.pendingActionResult){let[e,t]=n.pendingActionResult;if(Ae(t)&&q(t.error)&&404===t.error.status)return R=null,void De(r,{matches:n.matches,loaderData:{},errors:{[e]:t.error}})}c=n.matches||c,f=n.pendingActionResult,l=We(r,o.submission),u=!1,d.active=!1,p=be(e.history,p.url,p.signal)}let{shortCircuited:m,matches:b,loaderData:y,errors:w}=await async function(t,n,r,o,i,l,c,u,d,f,p){let m=i||We(n,l),v=l||c||He(m),b=!U&&(!k.v7_partialHydration||!d);if(o){if(b){let e=Ie(p);Oe(s({navigation:m},void 0!==e?{actionData:e}:{}),{flushSync:f})}let e=await pt(r,n.pathname,t.signal);if("aborted"===e.type)return{shortCircuited:!0};if("error"===e.type){let{boundaryId:t,error:r}=st(n.pathname,e);return{matches:e.partialMatches,loaderData:{},errors:{[t]:r}}}if(!e.matches){let{error:e,notFoundMatches:t,route:r}=lt(n.pathname);return{matches:t,loaderData:{},errors:{[r.id]:e}}}r=e.matches}let y=a||h,[x,w]=se(e.history,I,r,v,n,k.v7_partialHydration&&!0===d,k.v7_skipActionErrorRevalidation,H,W,V,ue,le,oe,y,g,p);if(ct((e=>!(r&&r.some((t=>t.route.id===e)))||x&&x.some((t=>t.route.id===e)))),G=++Y,0===x.length&&0===w.length){let e=nt();return De(n,s({matches:r,loaderData:{},errors:p&&Ae(p[1])?{[p[0]]:p[1].error}:null},je(p),e?{fetchers:new Map(I.fetchers)}:{}),{flushSync:f}),{shortCircuited:!0}}if(b){let e={};if(!o){e.navigation=m;let t=Ie(p);void 0!==t&&(e.actionData=t)}w.length>0&&(e.fetchers=function(e){return e.forEach((e=>{let t=I.fetchers.get(e.key),n=qe(void 0,t?t.data:void 0);I.fetchers.set(e.key,n)})),new Map(I.fetchers)}(w)),Oe(e,{flushSync:f})}w.forEach((e=>{K.has(e.key)&&et(e.key),e.controller&&K.set(e.key,e.controller)}));let S=()=>w.forEach((e=>et(e.key)));R&&R.signal.addEventListener("abort",S);let{loaderResults:j,fetcherResults:C}=await Ye(I,r,x,w,t);if(t.signal.aborted)return{shortCircuited:!0};R&&R.signal.removeEventListener("abort",S);w.forEach((e=>K.delete(e.key)));let E=Pe(j);if(E)return await Fe(t,E.result,!0,{replace:u}),{shortCircuited:!0};if(E=Pe(C),E)return oe.add(E.key),await Fe(t,E.result,!0,{replace:u}),{shortCircuited:!0};let{loaderData:T,errors:P}=ke(I,r,x,j,p,w,C,ye);ye.forEach(((e,t)=>{e.subscribe((n=>{(n||e.done)&&ye.delete(t)}))})),k.v7_partialHydration&&d&&I.errors&&Object.entries(I.errors).filter((e=>{let[t]=e;return!x.some((e=>e.route.id===t))})).forEach((e=>{let[t,n]=e;P=Object.assign(P||{},{[t]:n})}));let O=nt(),_=rt(G),L=O||_||w.length>0;return s({matches:r,loaderData:T,errors:P},L?{fetchers:new Map(I.fetchers)}:{})}(p,r,c,d.active,l,o&&o.submission,o&&o.fetcherSubmission,o&&o.replace,o&&!0===o.initialHydration,u,f);m||(R=null,De(r,s({matches:b||c},je(f),{loaderData:y,errors:w})))}function Ie(e){return e&&!Ae(e[1])?{[e[0]]:e[1].data}:I.actionData?0===Object.keys(I.actionData).length?null:I.actionData:void 0}async function Fe(o,i,a,l){let{submission:c,fetcherSubmission:d,replace:f}=void 0===l?{}:l;i.response.headers.has("X-Remix-Revalidate")&&(H=!0);let h=i.response.headers.get("Location");u(h,"Expected a Location header on the redirect Response"),h=ve(h,new URL(o.url),g);let m=p(I.location,h,{_isRedirect:!0});if(r){let t=!1;if(i.response.headers.has("X-Remix-Reload-Document"))t=!0;else if(te.test(h)){const r=e.history.createURL(h);t=r.origin!==n.location.origin||null==N(r.pathname,g)}if(t)return void(f?n.location.replace(h):n.location.assign(h))}R=null;let v=!0===f||i.response.headers.has("X-Remix-Replace")?t.Replace:t.Push,{formMethod:b,formAction:y,formEncType:x}=I.navigation;!c&&!d&&b&&y&&x&&(c=He(I.navigation));let w=c||d;if(X.has(i.response.status)&&w&&Be(w.formMethod))await Ne(v,m,{submission:s({},w,{formAction:h}),preventScrollReset:$,enableViewTransition:a?z:void 0});else{let e=We(m,c);await Ne(v,m,{overrideNavigation:e,fetcherSubmission:d,preventScrollReset:$,enableViewTransition:a?z:void 0})}}async function Ke(e,t,n,r,o,a){let l,s={};try{l=await he(m,e,t,n,r,o,a,f,i)}catch(c){return r.forEach((e=>{s[e.route.id]={type:v.error,error:c}})),s}for(let[i,u]of Object.entries(l))if(_e(u)){let e=u.result;s[i]={type:v.redirect,response:me(e,n,i,o,g,k.v7_relativeSplatPath)}}else s[i]=await ge(u);return s}async function Ye(t,n,r,o,i){let a=t.matches,l=Ke("loader",t,i,r,n,null),s=Promise.all(o.map((async n=>{if(n.matches&&n.match&&n.controller){let r=(await Ke("loader",t,be(e.history,n.path,n.controller.signal),[n.match],n.matches,n.key))[n.match.route.id];return{[n.key]:r}}return Promise.resolve({[n.key]:{type:v.error,error:Te(404,{pathname:n.path})}})}))),c=await l,u=(await s).reduce(((e,t)=>Object.assign(e,t)),{});return await Promise.all([$e(n,c,i.signal,a,t.loaderData),ze(n,u,o)]),{loaderResults:c,fetcherResults:u}}function Ge(){H=!0,W.push(...ct()),le.forEach(((e,t)=>{K.has(t)&&(V.add(t),et(t))}))}function Qe(e,t,n){void 0===n&&(n={}),I.fetchers.set(e,t),Oe({fetchers:new Map(I.fetchers)},{flushSync:!0===(n&&n.flushSync)})}function Xe(e,t,n,r){void 0===r&&(r={});let o=Ce(I.matches,t);Ze(e),Oe({errors:{[o.route.id]:n},fetchers:new Map(I.fetchers)},{flushSync:!0===(r&&r.flushSync)})}function Je(e){return k.v7_fetcherPersist&&(ce.set(e,(ce.get(e)||0)+1),ue.has(e)&&ue.delete(e)),I.fetchers.get(e)||Z}function Ze(e){let t=I.fetchers.get(e);!K.has(e)||t&&"loading"===t.state&&Q.has(e)||et(e),le.delete(e),Q.delete(e),oe.delete(e),ue.delete(e),V.delete(e),I.fetchers.delete(e)}function et(e){let t=K.get(e);u(t,"Expected fetch controller: "+e),t.abort(),K.delete(e)}function tt(e){for(let t of e){let e=Ve(Je(t).data);I.fetchers.set(t,e)}}function nt(){let e=[],t=!1;for(let n of oe){let r=I.fetchers.get(n);u(r,"Expected fetcher: "+n),"loading"===r.state&&(oe.delete(n),e.push(n),t=!0)}return tt(e),t}function rt(e){let t=[];for(let[n,r]of Q)if(r<e){let e=I.fetchers.get(n);u(e,"Expected fetcher: "+n),"loading"===e.state&&(et(n),Q.delete(n),t.push(n))}return tt(t),t.length>0}function ot(e){I.blockers.delete(e),xe.delete(e)}function it(e,t){let n=I.blockers.get(e)||ee;u("unblocked"===n.state&&"blocked"===t.state||"blocked"===n.state&&"blocked"===t.state||"blocked"===n.state&&"proceeding"===t.state||"blocked"===n.state&&"unblocked"===t.state||"proceeding"===n.state&&"unblocked"===t.state,"Invalid blocker state transition: "+n.state+" -> "+t.state);let r=new Map(I.blockers);r.set(e,t),Oe({blockers:r})}function at(e){let{currentLocation:t,nextLocation:n,historyAction:r}=e;if(0===xe.size)return;xe.size>1&&d(!1,"A router only supports one blocker at a time");let o=Array.from(xe.entries()),[i,a]=o[o.length-1],l=I.blockers.get(i);return l&&"proceeding"===l.state?void 0:a({currentLocation:t,nextLocation:n,historyAction:r})?i:void 0}function lt(e){let t=Te(404,{pathname:e}),n=a||h,{matches:r,route:o}=Ee(n);return ct(),{notFoundMatches:r,route:o,error:t}}function st(e,t){return{boundaryId:Ce(t.partialMatches).route.id,error:Te(400,{type:"route-discovery",pathname:e,message:null!=t.error&&"message"in t.error?t.error:String(t.error)})}}function ct(e){let t=[];return ye.forEach(((n,r)=>{e&&!e(r)||(n.cancel(),t.push(r),ye.delete(r))})),t}function ut(e,t){if(P){let n=P(e,t.map((e=>function(e,t){let{route:n,pathname:r,params:o}=e;return{id:n.id,pathname:r,params:o,data:t[n.id],handle:n.handle}}(e,I.loaderData))));return n||e.key}return e.key}function dt(e,t){if(T){let n=ut(e,t),r=T[n];if("number"===typeof r)return r}return null}function ft(e,t,n){if(b){if(E.has(n))return{active:!1,matches:e};if(!e){return{active:!0,matches:w(t,n,g,!0)||[]}}if(Object.keys(e[0].params).length>0){return{active:!0,matches:w(t,n,g,!0)}}}return{active:!1,matches:null}}async function pt(e,t,n){let r=e;for(;;){let e=null==a,l=a||h;try{await de(b,t,r,l,f,i,we,n)}catch(o){return{type:"error",error:o,partialMatches:r}}finally{e&&(h=[...h])}if(n.aborted)return{type:"aborted"};let s=x(l,t,g);if(s)return ht(t,E),{type:"success",matches:s};let c=w(l,t,g,!0);if(!c||r.length===c.length&&r.every(((e,t)=>e.route.id===c[t].route.id)))return ht(t,E),{type:"success",matches:null};r=c}}function ht(e,t){if(t.size>=C){let e=t.values().next().value;t.delete(e)}t.add(e)}return c={get basename(){return g},get future(){return k},get state(){return I},get routes(){return h},get window(){return n},initialize:function(){if(S=e.history.listen((t=>{let{action:n,location:r,delta:o}=t;if(D)return D(),void(D=void 0);d(0===xe.size||null!=o,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let i=at({currentLocation:I.location,nextLocation:r,historyAction:n});if(i&&null!=o){let t=new Promise((e=>{D=e}));return e.history.go(-1*o),void it(i,{state:"blocked",location:r,proceed(){it(i,{state:"proceeding",proceed:void 0,reset:void 0,location:r}),t.then((()=>e.history.go(o)))},reset(){let e=new Map(I.blockers);e.set(i,ee),Oe({blockers:e})}})}return Ne(n,r)})),r){!function(e,t){try{let n=e.sessionStorage.getItem(re);if(n){let e=JSON.parse(n);for(let[n,r]of Object.entries(e||{}))r&&Array.isArray(r)&&t.set(n,new Set(r||[]))}}catch(n){}}(n,M);let e=()=>function(e,t){if(t.size>0){let r={};for(let[e,n]of t)r[e]=[...n];try{e.sessionStorage.setItem(re,JSON.stringify(r))}catch(n){d(!1,"Failed to save applied view transitions in sessionStorage ("+n+").")}}}(n,M);n.addEventListener("pagehide",e),F=()=>n.removeEventListener("pagehide",e)}return I.initialized||Ne(t.Pop,I.location,{initialHydration:!0}),c},subscribe:function(e){return j.add(e),()=>j.delete(e)},enableScrollRestoration:function(e,t,n){if(T=e,O=t,P=n||null,!_&&I.navigation===J){_=!0;let e=dt(I.location,I.matches);null!=e&&Oe({restoreScrollPosition:e})}return()=>{T=null,O=null,P=null}},navigate:async function n(r,o){if("number"===typeof r)return void e.history.go(r);let i=ie(I.location,I.matches,g,k.v7_prependBasename,r,k.v7_relativeSplatPath,null==o?void 0:o.fromRouteId,null==o?void 0:o.relative),{path:a,submission:l,error:c}=ae(k.v7_normalizeFormMethod,!1,i,o),u=I.location,d=p(I.location,a,o&&o.state);d=s({},d,e.history.encodeLocation(d));let f=o&&null!=o.replace?o.replace:void 0,h=t.Push;!0===f?h=t.Replace:!1===f||null!=l&&Be(l.formMethod)&&l.formAction===I.location.pathname+I.location.search&&(h=t.Replace);let m=o&&"preventScrollReset"in o?!0===o.preventScrollReset:void 0,v=!0===(o&&o.unstable_flushSync),b=at({currentLocation:u,nextLocation:d,historyAction:h});if(!b)return await Ne(h,d,{submission:l,pendingError:c,preventScrollReset:m,replace:o&&o.replace,enableViewTransition:o&&o.unstable_viewTransition,flushSync:v});it(b,{state:"blocked",location:d,proceed(){it(b,{state:"proceeding",proceed:void 0,reset:void 0,location:d}),n(r,o)},reset(){let e=new Map(I.blockers);e.set(b,ee),Oe({blockers:e})}})},fetch:function(t,n,r,i){if(o)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");K.has(t)&&et(t);let l=!0===(i&&i.unstable_flushSync),s=a||h,c=ie(I.location,I.matches,g,k.v7_prependBasename,r,k.v7_relativeSplatPath,n,null==i?void 0:i.relative),d=x(s,c,g),f=ft(d,s,c);if(f.active&&f.matches&&(d=f.matches),!d)return void Xe(t,n,Te(404,{pathname:c}),{flushSync:l});let{path:p,submission:m,error:v}=ae(k.v7_normalizeFormMethod,!0,c,i);if(v)return void Xe(t,n,v,{flushSync:l});let b=Ue(d,p);$=!0===(i&&i.preventScrollReset),m&&Be(m.formMethod)?async function(t,n,r,o,i,l,s,c){function d(e){if(!e.route.action&&!e.route.lazy){let e=Te(405,{method:c.formMethod,pathname:r,routeId:n});return Xe(t,n,e,{flushSync:s}),!0}return!1}if(Ge(),le.delete(t),!l&&d(o))return;let f=I.fetchers.get(t);Qe(t,function(e,t){let n={state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0};return n}(c,f),{flushSync:s});let p=new AbortController,m=be(e.history,r,p.signal,c);if(l){let e=await pt(i,r,m.signal);if("aborted"===e.type)return;if("error"===e.type){let{error:o}=st(r,e);return void Xe(t,n,o,{flushSync:s})}if(!e.matches)return void Xe(t,n,Te(404,{pathname:r}),{flushSync:s});if(d(o=Ue(i=e.matches,r)))return}K.set(t,p);let v=Y,b=await Ke("action",I,m,[o],i,t),y=b[o.route.id];if(m.signal.aborted)return void(K.get(t)===p&&K.delete(t));if(k.v7_fetcherPersist&&ue.has(t)){if(Re(y)||Ae(y))return void Qe(t,Ve(void 0))}else{if(Re(y))return K.delete(t),G>v?void Qe(t,Ve(void 0)):(oe.add(t),Qe(t,qe(c)),Fe(m,y,!1,{fetcherSubmission:c}));if(Ae(y))return void Xe(t,n,y.error)}if(Le(y))throw Te(400,{type:"defer-action"});let w=I.navigation.location||I.location,S=be(e.history,w,p.signal),j=a||h,C="idle"!==I.navigation.state?x(j,I.navigation.location,g):I.matches;u(C,"Didn't find any matches after fetcher action");let E=++Y;Q.set(t,E);let T=qe(c,y.data);I.fetchers.set(t,T);let[P,O]=se(e.history,I,C,c,w,!1,k.v7_skipActionErrorRevalidation,H,W,V,ue,le,oe,j,g,[o.route.id,y]);O.filter((e=>e.key!==t)).forEach((e=>{let t=e.key,n=I.fetchers.get(t),r=qe(void 0,n?n.data:void 0);I.fetchers.set(t,r),K.has(t)&&et(t),e.controller&&K.set(t,e.controller)})),Oe({fetchers:new Map(I.fetchers)});let _=()=>O.forEach((e=>et(e.key)));p.signal.addEventListener("abort",_);let{loaderResults:L,fetcherResults:A}=await Ye(I,C,P,O,S);if(p.signal.aborted)return;p.signal.removeEventListener("abort",_),Q.delete(t),K.delete(t),O.forEach((e=>K.delete(e.key)));let D=Pe(L);if(D)return Fe(S,D.result,!1);if(D=Pe(A),D)return oe.add(D.key),Fe(S,D.result,!1);let{loaderData:N,errors:$}=ke(I,C,P,L,void 0,O,A,ye);if(I.fetchers.has(t)){let e=Ve(y.data);I.fetchers.set(t,e)}rt(E),"loading"===I.navigation.state&&E>G?(u(B,"Expected pending action"),R&&R.abort(),De(I.navigation.location,{matches:C,loaderData:N,errors:$,fetchers:new Map(I.fetchers)})):(Oe({errors:$,loaderData:Se(I.loaderData,N,C,$),fetchers:new Map(I.fetchers)}),H=!1)}(t,n,p,b,d,f.active,l,m):(le.set(t,{routeId:n,path:p}),async function(t,n,r,o,i,a,l,s){let c=I.fetchers.get(t);Qe(t,qe(s,c?c.data:void 0),{flushSync:l});let d=new AbortController,f=be(e.history,r,d.signal);if(a){let e=await pt(i,r,f.signal);if("aborted"===e.type)return;if("error"===e.type){let{error:o}=st(r,e);return void Xe(t,n,o,{flushSync:l})}if(!e.matches)return void Xe(t,n,Te(404,{pathname:r}),{flushSync:l});o=Ue(i=e.matches,r)}K.set(t,d);let p=Y,h=await Ke("loader",I,f,[o],i,t),g=h[o.route.id];Le(g)&&(g=await Me(g,f.signal,!0)||g);K.get(t)===d&&K.delete(t);if(f.signal.aborted)return;if(ue.has(t))return void Qe(t,Ve(void 0));if(Re(g))return G>p?void Qe(t,Ve(void 0)):(oe.add(t),void await Fe(f,g,!1));if(Ae(g))return void Xe(t,n,g.error);u(!Le(g),"Unhandled fetcher deferred data"),Qe(t,Ve(g.data))}(t,n,p,b,d,f.active,l,m))},revalidate:function(){Ge(),Oe({revalidation:"loading"}),"submitting"!==I.navigation.state&&("idle"!==I.navigation.state?Ne(B||I.historyAction,I.navigation.location,{overrideNavigation:I.navigation,enableViewTransition:!0===z}):Ne(I.historyAction,I.location,{startUninterruptedRevalidation:!0}))},createHref:t=>e.history.createHref(t),encodeLocation:t=>e.history.encodeLocation(t),getFetcher:Je,deleteFetcher:function(e){if(k.v7_fetcherPersist){let t=(ce.get(e)||0)-1;t<=0?(ce.delete(e),ue.add(e)):ce.set(e,t)}else Ze(e);Oe({fetchers:new Map(I.fetchers)})},dispose:function(){S&&S(),F&&F(),j.clear(),R&&R.abort(),I.fetchers.forEach(((e,t)=>Ze(t))),I.blockers.forEach(((e,t)=>ot(t)))},getBlocker:function(e,t){let n=I.blockers.get(e)||ee;return xe.get(e)!==t&&xe.set(e,t),n},deleteBlocker:ot,patchRoutes:function(e,t){let n=null==a;fe(e,t,a||h,f,i),n&&(h=[...h],Oe({}))},_internalFetchControllers:K,_internalActiveDeferreds:ye,_internalSetRoutes:function(e){f={},a=y(e,i,void 0,f)}},c}Symbol("deferred");function ie(e,t,n,r,o,i,a,l){let s,c;if(a){s=[];for(let e of t)if(s.push(e),e.route.id===a){c=e;break}}else s=t,c=t[t.length-1];let u=z(o||".",$(s,i),N(e.pathname,n)||e.pathname,"path"===l);return null==o&&(u.search=e.search,u.hash=e.hash),null!=o&&""!==o&&"."!==o||!c||!c.route.index||Fe(u.search)||(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&"/"!==n&&(u.pathname="/"===u.pathname?n:M([n,u.pathname])),h(u)}function ae(e,t,n,r){if(!r||!function(e){return null!=e&&("formData"in e&&null!=e.formData||"body"in e&&void 0!==e.body)}(r))return{path:n};if(r.formMethod&&!Ie(r.formMethod))return{path:n,error:Te(405,{method:r.formMethod})};let o,i,a=()=>({path:n,error:Te(400,{type:"invalid-body"})}),l=r.formMethod||"get",s=e?l.toUpperCase():l.toLowerCase(),c=Oe(n);if(void 0!==r.body){if("text/plain"===r.formEncType){if(!Be(s))return a();let e="string"===typeof r.body?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce(((e,t)=>{let[n,r]=t;return""+e+n+"="+r+"\n"}),""):String(r.body);return{path:n,submission:{formMethod:s,formAction:c,formEncType:r.formEncType,formData:void 0,json:void 0,text:e}}}if("application/json"===r.formEncType){if(!Be(s))return a();try{let e="string"===typeof r.body?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:s,formAction:c,formEncType:r.formEncType,formData:void 0,json:e,text:void 0}}}catch(p){return a()}}}if(u("function"===typeof FormData,"FormData is not available in this environment"),r.formData)o=ye(r.formData),i=r.formData;else if(r.body instanceof FormData)o=ye(r.body),i=r.body;else if(r.body instanceof URLSearchParams)o=r.body,i=xe(o);else if(null==r.body)o=new URLSearchParams,i=new FormData;else try{o=new URLSearchParams(r.body),i=xe(o)}catch(p){return a()}let d={formMethod:s,formAction:c,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:i,json:void 0,text:void 0};if(Be(d.formMethod))return{path:n,submission:d};let f=g(n);return t&&f.search&&Fe(f.search)&&o.append("index",""),f.search="?"+o,{path:h(f),submission:d}}function le(e,t){let n=e;if(t){let r=e.findIndex((e=>e.route.id===t));r>=0&&(n=e.slice(0,r))}return n}function se(e,t,n,r,o,i,a,l,c,u,d,f,p,h,g,m){let v=m?Ae(m[1])?m[1].error:m[1].data:void 0,b=e.createURL(t.location),y=e.createURL(o),w=m&&Ae(m[1])?m[0]:void 0,k=w?le(n,w):n,S=m?m[1].statusCode:void 0,j=a&&S&&S>=400,C=k.filter(((e,n)=>{let{route:o}=e;if(o.lazy)return!0;if(null==o.loader)return!1;if(i)return!("function"===typeof o.loader&&!o.loader.hydrate)||void 0===t.loaderData[o.id]&&(!t.errors||void 0===t.errors[o.id]);if(function(e,t,n){let r=!t||n.route.id!==t.route.id,o=void 0===e[n.route.id];return r||o}(t.loaderData,t.matches[n],e)||c.some((t=>t===e.route.id)))return!0;let a=t.matches[n],u=e;return ue(e,s({currentUrl:b,currentParams:a.params,nextUrl:y,nextParams:u.params},r,{actionResult:v,actionStatus:S,defaultShouldRevalidate:!j&&(l||b.pathname+b.search===y.pathname+y.search||b.search!==y.search||ce(a,u))}))})),E=[];return f.forEach(((e,o)=>{if(i||!n.some((t=>t.route.id===e.routeId))||d.has(o))return;let a=x(h,e.path,g);if(!a)return void E.push({key:o,routeId:e.routeId,path:e.path,matches:null,match:null,controller:null});let c=t.fetchers.get(o),f=Ue(a,e.path),m=!1;p.has(o)?m=!1:u.has(o)?(u.delete(o),m=!0):m=c&&"idle"!==c.state&&void 0===c.data?l:ue(f,s({currentUrl:b,currentParams:t.matches[t.matches.length-1].params,nextUrl:y,nextParams:n[n.length-1].params},r,{actionResult:v,actionStatus:S,defaultShouldRevalidate:!j&&l})),m&&E.push({key:o,routeId:e.routeId,path:e.path,matches:a,match:f,controller:new AbortController})})),[C,E]}function ce(e,t){let n=e.route.path;return e.pathname!==t.pathname||null!=n&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function ue(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if("boolean"===typeof n)return n}return t.defaultShouldRevalidate}async function de(e,t,n,r,o,i,a,l){let s=[t,...n.map((e=>e.route.id))].join("-");try{let u=a.get(s);u||(u=e({path:t,matches:n,patch:(e,t)=>{l.aborted||fe(e,t,r,o,i)}}),a.set(s,u)),u&&("object"===typeof(c=u)&&null!=c&&"then"in c)&&await u}finally{a.delete(s)}var c}function fe(e,t,n,r,o){if(e){var i;let n=r[e];u(n,"No route found to patch children into: routeId = "+e);let a=y(t,o,[e,"patch",String((null==(i=n.children)?void 0:i.length)||"0")],r);n.children?n.children.push(...a):n.children=a}else{let e=y(t,o,["patch",String(n.length||"0")],r);n.push(...e)}}async function pe(e){let{matches:t}=e,n=t.filter((e=>e.shouldLoad)),r=await Promise.all(n.map((e=>e.resolve())));return r.reduce(((e,t,r)=>Object.assign(e,{[n[r].route.id]:t})),{})}async function he(e,t,n,r,o,i,a,l,c,f){let p=i.map((e=>e.route.lazy?async function(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let o=n[e.id];u(o,"No route found in manifest");let i={};for(let a in r){let e=void 0!==o[a]&&"hasErrorBoundary"!==a;d(!e,'Route "'+o.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. The lazy route property "'+a+'" will be ignored.'),e||b.has(a)||(i[a]=r[a])}Object.assign(o,i),Object.assign(o,s({},t(o),{lazy:void 0}))}(e.route,c,l):void 0)),h=i.map(((e,n)=>{let i=p[n],a=o.some((t=>t.route.id===e.route.id));return s({},e,{shouldLoad:a,resolve:async n=>(n&&"GET"===r.method&&(e.route.lazy||e.route.loader)&&(a=!0),a?async function(e,t,n,r,o,i){let a,l,s=r=>{let a,s=new Promise(((e,t)=>a=t));l=()=>a(),t.signal.addEventListener("abort",l);let c=o=>"function"!==typeof r?Promise.reject(new Error('You cannot call the handler for a route which defines a boolean "'+e+'" [routeId: '+n.route.id+"]")):r({request:t,params:n.params,context:i},...void 0!==o?[o]:[]),u=(async()=>{try{return{type:"data",result:await(o?o((e=>c(e))):c())}}catch(e){return{type:"error",result:e}}})();return Promise.race([u,s])};try{let o=n.route[e];if(r)if(o){let e,[t]=await Promise.all([s(o).catch((t=>{e=t})),r]);if(void 0!==e)throw e;a=t}else{if(await r,o=n.route[e],!o){if("action"===e){let e=new URL(t.url),r=e.pathname+e.search;throw Te(405,{method:t.method,pathname:r,routeId:n.route.id})}return{type:v.data,result:void 0}}a=await s(o)}else{if(!o){let e=new URL(t.url);throw Te(404,{pathname:e.pathname+e.search})}a=await s(o)}u(void 0!==a.result,"You defined "+("action"===e?"an action":"a loader")+' for route "'+n.route.id+"\" but didn't return anything from your `"+e+"` function. Please return a value or `null`.")}catch(c){return{type:v.error,result:c}}finally{l&&t.signal.removeEventListener("abort",l)}return a}(t,r,e,i,n,f):Promise.resolve({type:v.data,result:void 0}))})})),g=await e({matches:h,request:r,params:i[0].params,fetcherKey:a,context:f});try{await Promise.all(p)}catch(m){}return g}async function ge(e){let{result:t,type:n}=e;if(Ne(t)){let e;try{let n=t.headers.get("Content-Type");e=n&&/\bapplication\/json\b/.test(n)?null==t.body?null:await t.json():await t.text()}catch(c){return{type:v.error,error:c}}return n===v.error?{type:v.error,error:new W(t.status,t.statusText,e),statusCode:t.status,headers:t.headers}:{type:v.data,data:e,statusCode:t.status,headers:t.headers}}if(n===v.error){if(De(t)){var r,o;if(t.data instanceof Error)return{type:v.error,error:t.data,statusCode:null==(o=t.init)?void 0:o.status};t=new W((null==(r=t.init)?void 0:r.status)||500,void 0,t.data)}return{type:v.error,error:t,statusCode:q(t)?t.status:void 0}}var i,a,l,s;return function(e){let t=e;return t&&"object"===typeof t&&"object"===typeof t.data&&"function"===typeof t.subscribe&&"function"===typeof t.cancel&&"function"===typeof t.resolveData}(t)?{type:v.deferred,deferredData:t,statusCode:null==(i=t.init)?void 0:i.status,headers:(null==(a=t.init)?void 0:a.headers)&&new Headers(t.init.headers)}:De(t)?{type:v.data,data:t.data,statusCode:null==(l=t.init)?void 0:l.status,headers:null!=(s=t.init)&&s.headers?new Headers(t.init.headers):void 0}:{type:v.data,data:t}}function me(e,t,n,r,o,i){let a=e.headers.get("Location");if(u(a,"Redirects returned/thrown from loaders/actions must have a Location header"),!te.test(a)){let l=r.slice(0,r.findIndex((e=>e.route.id===n))+1);a=ie(new URL(t.url),l,o,!0,a,i),e.headers.set("Location",a)}return e}function ve(e,t,n){if(te.test(e)){let r=e,o=r.startsWith("//")?new URL(t.protocol+r):new URL(r),i=null!=N(o.pathname,n);if(o.origin===t.origin&&i)return o.pathname+o.search+o.hash}return e}function be(e,t,n,r){let o=e.createURL(Oe(t)).toString(),i={signal:n};if(r&&Be(r.formMethod)){let{formMethod:e,formEncType:t}=r;i.method=e.toUpperCase(),"application/json"===t?(i.headers=new Headers({"Content-Type":t}),i.body=JSON.stringify(r.json)):"text/plain"===t?i.body=r.text:"application/x-www-form-urlencoded"===t&&r.formData?i.body=ye(r.formData):i.body=r.formData}return new Request(o,i)}function ye(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,"string"===typeof r?r:r.name);return t}function xe(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function we(e,t,n,r,o){let i,a={},l=null,s=!1,c={},d=n&&Ae(n[1])?n[1].error:void 0;return e.forEach((n=>{if(!(n.route.id in t))return;let f=n.route.id,p=t[f];if(u(!Re(p),"Cannot handle redirect results in processLoaderData"),Ae(p)){let t=p.error;if(void 0!==d&&(t=d,d=void 0),l=l||{},o)l[f]=t;else{let n=Ce(e,f);null==l[n.route.id]&&(l[n.route.id]=t)}a[f]=void 0,s||(s=!0,i=q(p.error)?p.error.status:500),p.headers&&(c[f]=p.headers)}else Le(p)?(r.set(f,p.deferredData),a[f]=p.deferredData.data,null==p.statusCode||200===p.statusCode||s||(i=p.statusCode),p.headers&&(c[f]=p.headers)):(a[f]=p.data,p.statusCode&&200!==p.statusCode&&!s&&(i=p.statusCode),p.headers&&(c[f]=p.headers))})),void 0!==d&&n&&(l={[n[0]]:d},a[n[0]]=void 0),{loaderData:a,errors:l,statusCode:i||200,loaderHeaders:c}}function ke(e,t,n,r,o,i,a,l){let{loaderData:c,errors:d}=we(t,r,o,l,!1);return i.forEach((t=>{let{key:n,match:r,controller:o}=t,i=a[n];if(u(i,"Did not find corresponding fetcher result"),!o||!o.signal.aborted)if(Ae(i)){let t=Ce(e.matches,null==r?void 0:r.route.id);d&&d[t.route.id]||(d=s({},d,{[t.route.id]:i.error})),e.fetchers.delete(n)}else if(Re(i))u(!1,"Unhandled fetcher revalidation redirect");else if(Le(i))u(!1,"Unhandled fetcher deferred data");else{let t=Ve(i.data);e.fetchers.set(n,t)}})),{loaderData:c,errors:d}}function Se(e,t,n,r){let o=s({},t);for(let i of n){let n=i.route.id;if(t.hasOwnProperty(n)?void 0!==t[n]&&(o[n]=t[n]):void 0!==e[n]&&i.route.loader&&(o[n]=e[n]),r&&r.hasOwnProperty(n))break}return o}function je(e){return e?Ae(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function Ce(e,t){let n=t?e.slice(0,e.findIndex((e=>e.route.id===t))+1):[...e];return n.reverse().find((e=>!0===e.route.hasErrorBoundary))||e[0]}function Ee(e){let t=1===e.length?e[0]:e.find((e=>e.index||!e.path||"/"===e.path))||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Te(e,t){let{pathname:n,routeId:r,method:o,type:i,message:a}=void 0===t?{}:t,l="Unknown Server Error",s="Unknown @remix-run/router error";return 400===e?(l="Bad Request","route-discovery"===i?s='Unable to match URL "'+n+'" - the `unstable_patchRoutesOnNavigation()` function threw the following error:\n'+a:o&&n&&r?s="You made a "+o+' request to "'+n+'" but did not provide a `loader` for route "'+r+'", so there is no way to handle the request.':"defer-action"===i?s="defer() is not supported in actions":"invalid-body"===i&&(s="Unable to encode submission body")):403===e?(l="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):404===e?(l="Not Found",s='No route matches URL "'+n+'"'):405===e&&(l="Method Not Allowed",o&&n&&r?s="You made a "+o.toUpperCase()+' request to "'+n+'" but did not provide an `action` for route "'+r+'", so there is no way to handle the request.':o&&(s='Invalid request method "'+o.toUpperCase()+'"')),new W(e||500,l,new Error(s),!0)}function Pe(e){let t=Object.entries(e);for(let n=t.length-1;n>=0;n--){let[e,r]=t[n];if(Re(r))return{key:e,result:r}}}function Oe(e){return h(s({},"string"===typeof e?g(e):e,{hash:""}))}function _e(e){return Ne(e.result)&&Q.has(e.result.status)}function Le(e){return e.type===v.deferred}function Ae(e){return e.type===v.error}function Re(e){return(e&&e.type)===v.redirect}function De(e){return"object"===typeof e&&null!=e&&"type"in e&&"data"in e&&"init"in e&&"DataWithResponseInit"===e.type}function Ne(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"object"===typeof e.headers&&"undefined"!==typeof e.body}function Ie(e){return G.has(e.toLowerCase())}function Be(e){return K.has(e.toLowerCase())}async function $e(e,t,n,r,o){let i=Object.entries(t);for(let a=0;a<i.length;a++){let[l,s]=i[a],c=e.find((e=>(null==e?void 0:e.route.id)===l));if(!c)continue;let u=r.find((e=>e.route.id===c.route.id)),d=null!=u&&!ce(u,c)&&void 0!==(o&&o[c.route.id]);Le(s)&&d&&await Me(s,n,!1).then((e=>{e&&(t[l]=e)}))}}async function ze(e,t,n){for(let r=0;r<n.length;r++){let{key:o,routeId:i,controller:a}=n[r],l=t[o],s=e.find((e=>(null==e?void 0:e.route.id)===i));s&&(Le(l)&&(u(a,"Expected an AbortController for revalidating fetcher deferred result"),await Me(l,a.signal,!0).then((e=>{e&&(t[o]=e)}))))}}async function Me(e,t,n){if(void 0===n&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:v.data,data:e.deferredData.unwrappedData}}catch(r){return{type:v.error,error:r}}return{type:v.data,data:e.deferredData.data}}}function Fe(e){return new URLSearchParams(e).getAll("index").some((e=>""===e))}function Ue(e,t){let n="string"===typeof t?g(t).search:t.search;if(e[e.length-1].route.index&&Fe(n||""))return e[e.length-1];let r=B(e);return r[r.length-1]}function He(e){let{formMethod:t,formAction:n,formEncType:r,text:o,formData:i,json:a}=e;if(t&&n&&r)return null!=o?{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:o}:null!=i?{formMethod:t,formAction:n,formEncType:r,formData:i,json:void 0,text:void 0}:void 0!==a?{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:a,text:void 0}:void 0}function We(e,t){if(t){return{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}return{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function qe(e,t){if(e){return{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}}return{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function Ve(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function Ke(){return Ke=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ke.apply(this,arguments)}const Ye=r.createContext(null);const Ge=r.createContext(null);const Qe=r.createContext(null);const Xe=r.createContext(null);const Je=r.createContext({outlet:null,matches:[],isDataRoute:!1});const Ze=r.createContext(null);function et(){return null!=r.useContext(Xe)}function tt(){return et()||u(!1),r.useContext(Xe).location}function nt(e){r.useContext(Qe).static||r.useLayoutEffect(e)}function rt(){let{isDataRoute:e}=r.useContext(Je);return e?function(){let{router:e}=ht(ft.UseNavigateStable),t=mt(pt.UseNavigateStable),n=r.useRef(!1);nt((()=>{n.current=!0}));let o=r.useCallback((function(r,o){void 0===o&&(o={}),n.current&&("number"===typeof r?e.navigate(r):e.navigate(r,Ke({fromRouteId:t},o)))}),[e,t]);return o}():function(){et()||u(!1);let e=r.useContext(Ye),{basename:t,future:n,navigator:o}=r.useContext(Qe),{matches:i}=r.useContext(Je),{pathname:a}=tt(),l=JSON.stringify($(i,n.v7_relativeSplatPath)),s=r.useRef(!1);return nt((()=>{s.current=!0})),r.useCallback((function(n,r){if(void 0===r&&(r={}),!s.current)return;if("number"===typeof n)return void o.go(n);let i=z(n,JSON.parse(l),a,"path"===r.relative);null==e&&"/"!==t&&(i.pathname="/"===i.pathname?t:M([t,i.pathname])),(r.replace?o.replace:o.push)(i,r.state,r)}),[t,o,l,a,e])}()}const ot=r.createContext(null);function it(e,t){let{relative:n}=void 0===t?{}:t,{future:o}=r.useContext(Qe),{matches:i}=r.useContext(Je),{pathname:a}=tt(),l=JSON.stringify($(i,o.v7_relativeSplatPath));return r.useMemo((()=>z(e,JSON.parse(l),a,"path"===n)),[e,l,a,n])}function at(e,n,o,i){et()||u(!1);let{navigator:a}=r.useContext(Qe),{matches:l}=r.useContext(Je),s=l[l.length-1],c=s?s.params:{},d=(s&&s.pathname,s?s.pathnameBase:"/");s&&s.route;let f,p=tt();if(n){var h;let e="string"===typeof n?g(n):n;"/"===d||(null==(h=e.pathname)?void 0:h.startsWith(d))||u(!1),f=e}else f=p;let m=f.pathname||"/",v=m;if("/"!==d){let e=d.replace(/^\//,"").split("/");v="/"+m.replace(/^\//,"").split("/").slice(e.length).join("/")}let b=x(e,{pathname:v});let y=dt(b&&b.map((e=>Object.assign({},e,{params:Object.assign({},c,e.params),pathname:M([d,a.encodeLocation?a.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:M([d,a.encodeLocation?a.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),l,o,i);return n&&y?r.createElement(Xe.Provider,{value:{location:Ke({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:t.Pop}},y):y}function lt(){let e=function(){var e;let t=r.useContext(Ze),n=gt(pt.UseRouteError),o=mt(pt.UseRouteError);if(void 0!==t)return t;return null==(e=n.errors)?void 0:e[o]}(),t=q(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:o};return r.createElement(r.Fragment,null,r.createElement("h2",null,"Unexpected Application Error!"),r.createElement("h3",{style:{fontStyle:"italic"}},t),n?r.createElement("pre",{style:i},n):null,null)}const st=r.createElement(lt,null);class ct extends r.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?r.createElement(Je.Provider,{value:this.props.routeContext},r.createElement(Ze.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ut(e){let{routeContext:t,match:n,children:o}=e,i=r.useContext(Ye);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),r.createElement(Je.Provider,{value:t},o)}function dt(e,t,n,o){var i;if(void 0===t&&(t=[]),void 0===n&&(n=null),void 0===o&&(o=null),null==e){var a;if(!n)return null;if(n.errors)e=n.matches;else{if(!(null!=(a=o)&&a.v7_partialHydration&&0===t.length&&!n.initialized&&n.matches.length>0))return null;e=n.matches}}let l=e,s=null==(i=n)?void 0:i.errors;if(null!=s){let e=l.findIndex((e=>e.route.id&&void 0!==(null==s?void 0:s[e.route.id])));e>=0||u(!1),l=l.slice(0,Math.min(l.length,e+1))}let c=!1,d=-1;if(n&&o&&o.v7_partialHydration)for(let r=0;r<l.length;r++){let e=l[r];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(d=r),e.route.id){let{loaderData:t,errors:r}=n,o=e.route.loader&&void 0===t[e.route.id]&&(!r||void 0===r[e.route.id]);if(e.route.lazy||o){c=!0,l=d>=0?l.slice(0,d+1):[l[0]];break}}}return l.reduceRight(((e,o,i)=>{let a,u=!1,f=null,p=null;var h;n&&(a=s&&o.route.id?s[o.route.id]:void 0,f=o.route.errorElement||st,c&&(d<0&&0===i?(h="route-fallback",!1||vt[h]||(vt[h]=!0),u=!0,p=null):d===i&&(u=!0,p=o.route.hydrateFallbackElement||null)));let g=t.concat(l.slice(0,i+1)),m=()=>{let t;return t=a?f:u?p:o.route.Component?r.createElement(o.route.Component,null):o.route.element?o.route.element:e,r.createElement(ut,{match:o,routeContext:{outlet:e,matches:g,isDataRoute:null!=n},children:t})};return n&&(o.route.ErrorBoundary||o.route.errorElement||0===i)?r.createElement(ct,{location:n.location,revalidation:n.revalidation,component:f,error:a,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()}),null)}var ft=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ft||{}),pt=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(pt||{});function ht(e){let t=r.useContext(Ye);return t||u(!1),t}function gt(e){let t=r.useContext(Ge);return t||u(!1),t}function mt(e){let t=function(){let e=r.useContext(Je);return e||u(!1),e}(),n=t.matches[t.matches.length-1];return n.route.id||u(!1),n.route.id}const vt={};o.startTransition;function bt(e){let{to:t,replace:n,state:o,relative:i}=e;et()||u(!1);let{future:a,static:l}=r.useContext(Qe),{matches:s}=r.useContext(Je),{pathname:c}=tt(),d=rt(),f=z(t,$(s,a.v7_relativeSplatPath),c,"path"===i),p=JSON.stringify(f);return r.useEffect((()=>d(JSON.parse(p),{replace:n,state:o,relative:i})),[d,p,i,n,o]),null}function yt(e){return function(e){let t=r.useContext(Je).outlet;return t?r.createElement(ot.Provider,{value:e},t):t}(e.context)}function xt(e){let{basename:n="/",children:o=null,location:i,navigationType:a=t.Pop,navigator:l,static:s=!1,future:c}=e;et()&&u(!1);let d=n.replace(/^\/*/,"/"),f=r.useMemo((()=>({basename:d,navigator:l,static:s,future:Ke({v7_relativeSplatPath:!1},c)})),[d,c,l,s]);"string"===typeof i&&(i=g(i));let{pathname:p="/",search:h="",hash:m="",state:v=null,key:b="default"}=i,y=r.useMemo((()=>{let e=N(p,d);return null==e?null:{location:{pathname:e,search:h,hash:m,state:v,key:b},navigationType:a}}),[d,p,h,m,v,b,a]);return null==y?null:r.createElement(Qe.Provider,{value:f},r.createElement(Xe.Provider,{children:o,value:y}))}new Promise((()=>{}));r.Component;function wt(e){let t={hasErrorBoundary:null!=e.ErrorBoundary||null!=e.errorElement};return e.Component&&Object.assign(t,{element:r.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:r.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:r.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}function kt(){return kt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},kt.apply(this,arguments)}function St(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function jt(e){return void 0===e&&(e=""),new URLSearchParams("string"===typeof e||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce(((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map((e=>[n,e])):[[n,r]])}),[]))}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const Ct=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Et=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"];try{window.__reactRouterVersion="6"}catch(Mp){}function Tt(){var e;let t=null==(e=window)?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=kt({},t,{errors:Pt(t.errors)})),t}function Pt(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,o]of t)if(o&&"RouteErrorResponse"===o.__type)n[r]=new W(o.status,o.statusText,o.data,!0===o.internal);else if(o&&"Error"===o.__type){if(o.__subType){let e=window[o.__subType];if("function"===typeof e)try{let t=new e(o.message);t.stack="",n[r]=t}catch(Mp){}}if(null==n[r]){let e=new Error(o.message);e.stack="",n[r]=e}}else n[r]=o;return n}const Ot=r.createContext({isTransitioning:!1});const _t=r.createContext(new Map);const Lt=o.startTransition,At=l.flushSync;o.useId;function Rt(e){At?At(e):e()}class Dt{constructor(){this.status="pending",this.promise=new Promise(((e,t)=>{this.resolve=t=>{"pending"===this.status&&(this.status="resolved",e(t))},this.reject=e=>{"pending"===this.status&&(this.status="rejected",t(e))}}))}}function Nt(e){let{fallbackElement:t,router:n,future:o}=e,[i,a]=r.useState(n.state),[l,s]=r.useState(),[c,u]=r.useState({isTransitioning:!1}),[d,f]=r.useState(),[p,h]=r.useState(),[g,m]=r.useState(),v=r.useRef(new Map),{v7_startTransition:b}=o||{},y=r.useCallback((e=>{b?function(e){Lt?Lt(e):e()}(e):e()}),[b]),x=r.useCallback(((e,t)=>{let{deletedFetchers:r,unstable_flushSync:o,unstable_viewTransitionOpts:i}=t;r.forEach((e=>v.current.delete(e))),e.fetchers.forEach(((e,t)=>{void 0!==e.data&&v.current.set(t,e.data)}));let l=null==n.window||null==n.window.document||"function"!==typeof n.window.document.startViewTransition;if(i&&!l){if(o){Rt((()=>{p&&(d&&d.resolve(),p.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:i.currentLocation,nextLocation:i.nextLocation})}));let t=n.window.document.startViewTransition((()=>{Rt((()=>a(e)))}));return t.finished.finally((()=>{Rt((()=>{f(void 0),h(void 0),s(void 0),u({isTransitioning:!1})}))})),void Rt((()=>h(t)))}p?(d&&d.resolve(),p.skipTransition(),m({state:e,currentLocation:i.currentLocation,nextLocation:i.nextLocation})):(s(e),u({isTransitioning:!0,flushSync:!1,currentLocation:i.currentLocation,nextLocation:i.nextLocation}))}else o?Rt((()=>a(e))):y((()=>a(e)))}),[n.window,p,d,v,y]);r.useLayoutEffect((()=>n.subscribe(x)),[n,x]),r.useEffect((()=>{c.isTransitioning&&!c.flushSync&&f(new Dt)}),[c]),r.useEffect((()=>{if(d&&l&&n.window){let e=l,t=d.promise,r=n.window.document.startViewTransition((async()=>{y((()=>a(e))),await t}));r.finished.finally((()=>{f(void 0),h(void 0),s(void 0),u({isTransitioning:!1})})),h(r)}}),[y,l,d,n.window]),r.useEffect((()=>{d&&l&&i.location.key===l.location.key&&d.resolve()}),[d,p,i.location,l]),r.useEffect((()=>{!c.isTransitioning&&g&&(s(g.state),u({isTransitioning:!0,flushSync:!1,currentLocation:g.currentLocation,nextLocation:g.nextLocation}),m(void 0))}),[c.isTransitioning,g]),r.useEffect((()=>{}),[]);let w=r.useMemo((()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:e=>n.navigate(e),push:(e,t,r)=>n.navigate(e,{state:t,preventScrollReset:null==r?void 0:r.preventScrollReset}),replace:(e,t,r)=>n.navigate(e,{replace:!0,state:t,preventScrollReset:null==r?void 0:r.preventScrollReset})})),[n]),k=n.basename||"/",S=r.useMemo((()=>({router:n,navigator:w,static:!1,basename:k})),[n,w,k]),j=r.useMemo((()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath})),[n.future.v7_relativeSplatPath]);return r.createElement(r.Fragment,null,r.createElement(Ye.Provider,{value:S},r.createElement(Ge.Provider,{value:i},r.createElement(_t.Provider,{value:v.current},r.createElement(Ot.Provider,{value:c},r.createElement(xt,{basename:k,location:i.location,navigationType:i.historyAction,navigator:w,future:j},i.initialized||n.future.v7_partialHydration?r.createElement(It,{routes:n.routes,future:n.future,state:i}):t))))),null)}const It=r.memo(Bt);function Bt(e){let{routes:t,future:n,state:r}=e;return at(t,void 0,r,n)}const $t="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement,zt=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Mt=r.forwardRef((function(e,t){let n,{onClick:o,relative:i,reloadDocument:a,replace:l,state:s,target:c,to:d,preventScrollReset:f,unstable_viewTransition:p}=e,g=St(e,Ct),{basename:m}=r.useContext(Qe),v=!1;if("string"===typeof d&&zt.test(d)&&(n=d,$t))try{let e=new URL(window.location.href),t=d.startsWith("//")?new URL(e.protocol+d):new URL(d),n=N(t.pathname,m);t.origin===e.origin&&null!=n?d=n+t.search+t.hash:v=!0}catch(Mp){}let b=function(e,t){let{relative:n}=void 0===t?{}:t;et()||u(!1);let{basename:o,navigator:i}=r.useContext(Qe),{hash:a,pathname:l,search:s}=it(e,{relative:n}),c=l;return"/"!==o&&(c="/"===l?o:M([o,l])),i.createHref({pathname:c,search:s,hash:a})}(d,{relative:i}),y=function(e,t){let{target:n,replace:o,state:i,preventScrollReset:a,relative:l,unstable_viewTransition:s}=void 0===t?{}:t,c=rt(),u=tt(),d=it(e,{relative:l});return r.useCallback((t=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(t,n)){t.preventDefault();let n=void 0!==o?o:h(u)===h(d);c(e,{replace:n,state:i,preventScrollReset:a,relative:l,unstable_viewTransition:s})}}),[u,c,d,o,i,n,e,a,l,s])}(d,{replace:l,state:s,target:c,preventScrollReset:f,relative:i,unstable_viewTransition:p});return r.createElement("a",kt({},g,{href:n||b,onClick:v||a?o:function(e){o&&o(e),e.defaultPrevented||y(e)},ref:t,target:c}))}));const Ft=r.forwardRef((function(e,t){let{"aria-current":n="page",caseSensitive:o=!1,className:i="",end:a=!1,style:l,to:s,unstable_viewTransition:c,children:d}=e,f=St(e,Et),p=it(s,{relative:f.relative}),h=tt(),g=r.useContext(Ge),{navigator:m,basename:v}=r.useContext(Qe),b=null!=g&&function(e,t){void 0===t&&(t={});let n=r.useContext(Ot);null==n&&u(!1);let{basename:o}=Wt(Ut.useViewTransitionState),i=it(e,{relative:t.relative});if(!n.isTransitioning)return!1;let a=N(n.currentLocation.pathname,o)||n.currentLocation.pathname,l=N(n.nextLocation.pathname,o)||n.nextLocation.pathname;return null!=R(i.pathname,l)||null!=R(i.pathname,a)}(p)&&!0===c,y=m.encodeLocation?m.encodeLocation(p).pathname:p.pathname,x=h.pathname,w=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;o||(x=x.toLowerCase(),w=w?w.toLowerCase():null,y=y.toLowerCase()),w&&v&&(w=N(w,v)||w);const k="/"!==y&&y.endsWith("/")?y.length-1:y.length;let S,j=x===y||!a&&x.startsWith(y)&&"/"===x.charAt(k),C=null!=w&&(w===y||!a&&w.startsWith(y)&&"/"===w.charAt(y.length)),E={isActive:j,isPending:C,isTransitioning:b},T=j?n:void 0;S="function"===typeof i?i(E):[i,j?"active":null,C?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let P="function"===typeof l?l(E):l;return r.createElement(Mt,kt({},f,{"aria-current":T,className:S,ref:t,style:P,to:s,unstable_viewTransition:c}),"function"===typeof d?d(E):d)}));var Ut,Ht;function Wt(e){let t=r.useContext(Ye);return t||u(!1),t}function qt(e){let t=r.useRef(jt(e)),n=r.useRef(!1),o=tt(),i=r.useMemo((()=>function(e,t){let n=jt(e);return t&&t.forEach(((e,r)=>{n.has(r)||t.getAll(r).forEach((e=>{n.append(r,e)}))})),n}(o.search,n.current?null:t.current)),[o.search]),a=rt(),l=r.useCallback(((e,t)=>{const r=jt("function"===typeof e?e(i):e);n.current=!0,a("?"+r,t)}),[a,i]);return[i,l]}(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ut||(Ut={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(Ht||(Ht={}));var Vt=function(){return Vt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Vt.apply(this,arguments)};Object.create;function Kt(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var Yt=n(324),Gt=n.n(Yt),Qt="-ms-",Xt="-moz-",Jt="-webkit-",Zt="comm",en="rule",tn="decl",nn="@import",rn="@keyframes",on="@layer",an=Math.abs,ln=String.fromCharCode,sn=Object.assign;function cn(e){return e.trim()}function un(e,t){return(e=t.exec(e))?e[0]:e}function dn(e,t,n){return e.replace(t,n)}function fn(e,t,n){return e.indexOf(t,n)}function pn(e,t){return 0|e.charCodeAt(t)}function hn(e,t,n){return e.slice(t,n)}function gn(e){return e.length}function mn(e){return e.length}function vn(e,t){return t.push(e),e}function bn(e,t){return e.filter((function(e){return!un(e,t)}))}var yn=1,xn=1,wn=0,kn=0,Sn=0,jn="";function Cn(e,t,n,r,o,i,a,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:yn,column:xn,length:a,return:"",siblings:l}}function En(e,t){return sn(Cn("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Tn(e){for(;e.root;)e=En(e.root,{children:[e]});vn(e,e.siblings)}function Pn(){return Sn=kn>0?pn(jn,--kn):0,xn--,10===Sn&&(xn=1,yn--),Sn}function On(){return Sn=kn<wn?pn(jn,kn++):0,xn++,10===Sn&&(xn=1,yn++),Sn}function _n(){return pn(jn,kn)}function Ln(){return kn}function An(e,t){return hn(jn,e,t)}function Rn(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Dn(e){return yn=xn=1,wn=gn(jn=e),kn=0,[]}function Nn(e){return jn="",e}function In(e){return cn(An(kn-1,zn(91===e?e+2:40===e?e+1:e)))}function Bn(e){for(;(Sn=_n())&&Sn<33;)On();return Rn(e)>2||Rn(Sn)>3?"":" "}function $n(e,t){for(;--t&&On()&&!(Sn<48||Sn>102||Sn>57&&Sn<65||Sn>70&&Sn<97););return An(e,Ln()+(t<6&&32==_n()&&32==On()))}function zn(e){for(;On();)switch(Sn){case e:return kn;case 34:case 39:34!==e&&39!==e&&zn(Sn);break;case 40:41===e&&zn(e);break;case 92:On()}return kn}function Mn(e,t){for(;On()&&e+Sn!==57&&(e+Sn!==84||47!==_n()););return"/*"+An(t,kn-1)+"*"+ln(47===e?e:On())}function Fn(e){for(;!Rn(_n());)On();return An(e,kn)}function Un(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Hn(e,t,n,r){switch(e.type){case on:if(e.children.length)break;case nn:case tn:return e.return=e.return||e.value;case Zt:return"";case rn:return e.return=e.value+"{"+Un(e.children,r)+"}";case en:if(!gn(e.value=e.props.join(",")))return""}return gn(n=Un(e.children,r))?e.return=e.value+"{"+n+"}":""}function Wn(e,t,n){switch(function(e,t){return 45^pn(e,0)?(((t<<2^pn(e,0))<<2^pn(e,1))<<2^pn(e,2))<<2^pn(e,3):0}(e,t)){case 5103:return Jt+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Jt+e+e;case 4789:return Xt+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Jt+e+Xt+e+Qt+e+e;case 5936:switch(pn(e,t+11)){case 114:return Jt+e+Qt+dn(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Jt+e+Qt+dn(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Jt+e+Qt+dn(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Jt+e+Qt+e+e;case 6165:return Jt+e+Qt+"flex-"+e+e;case 5187:return Jt+e+dn(e,/(\w+).+(:[^]+)/,Jt+"box-$1$2"+Qt+"flex-$1$2")+e;case 5443:return Jt+e+Qt+"flex-item-"+dn(e,/flex-|-self/g,"")+(un(e,/flex-|baseline/)?"":Qt+"grid-row-"+dn(e,/flex-|-self/g,""))+e;case 4675:return Jt+e+Qt+"flex-line-pack"+dn(e,/align-content|flex-|-self/g,"")+e;case 5548:return Jt+e+Qt+dn(e,"shrink","negative")+e;case 5292:return Jt+e+Qt+dn(e,"basis","preferred-size")+e;case 6060:return Jt+"box-"+dn(e,"-grow","")+Jt+e+Qt+dn(e,"grow","positive")+e;case 4554:return Jt+dn(e,/([^-])(transform)/g,"$1"+Jt+"$2")+e;case 6187:return dn(dn(dn(e,/(zoom-|grab)/,Jt+"$1"),/(image-set)/,Jt+"$1"),e,"")+e;case 5495:case 3959:return dn(e,/(image-set\([^]*)/,Jt+"$1$`$1");case 4968:return dn(dn(e,/(.+:)(flex-)?(.*)/,Jt+"box-pack:$3"+Qt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Jt+e+e;case 4200:if(!un(e,/flex-|baseline/))return Qt+"grid-column-align"+hn(e,t)+e;break;case 2592:case 3360:return Qt+dn(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,un(e.props,/grid-\w+-end/)}))?~fn(e+(n=n[t].value),"span",0)?e:Qt+dn(e,"-start","")+e+Qt+"grid-row-span:"+(~fn(n,"span",0)?un(n,/\d+/):+un(n,/\d+/)-+un(e,/\d+/))+";":Qt+dn(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return un(e.props,/grid-\w+-start/)}))?e:Qt+dn(dn(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return dn(e,/(.+)-inline(.+)/,Jt+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(gn(e)-1-t>6)switch(pn(e,t+1)){case 109:if(45!==pn(e,t+4))break;case 102:return dn(e,/(.+:)(.+)-([^]+)/,"$1"+Jt+"$2-$3$1"+Xt+(108==pn(e,t+3)?"$3":"$2-$3"))+e;case 115:return~fn(e,"stretch",0)?Wn(dn(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return dn(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,o,i,a,l){return Qt+n+":"+r+l+(o?Qt+n+"-span:"+(i?a:+a-+r)+l:"")+e}));case 4949:if(121===pn(e,t+6))return dn(e,":",":"+Jt)+e;break;case 6444:switch(pn(e,45===pn(e,14)?18:11)){case 120:return dn(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Jt+(45===pn(e,14)?"inline-":"")+"box$3$1"+Jt+"$2$3$1"+Qt+"$2box$3")+e;case 100:return dn(e,":",":"+Qt)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return dn(e,"scroll-","scroll-snap-")+e}return e}function qn(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case tn:return void(e.return=Wn(e.value,e.length,n));case rn:return Un([En(e,{value:dn(e.value,"@","@"+Jt)})],r);case en:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(un(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Tn(En(e,{props:[dn(t,/:(read-\w+)/,":"+Xt+"$1")]})),Tn(En(e,{props:[t]})),sn(e,{props:bn(n,r)});break;case"::placeholder":Tn(En(e,{props:[dn(t,/:(plac\w+)/,":"+Jt+"input-$1")]})),Tn(En(e,{props:[dn(t,/:(plac\w+)/,":"+Xt+"$1")]})),Tn(En(e,{props:[dn(t,/:(plac\w+)/,Qt+"input-$1")]})),Tn(En(e,{props:[t]})),sn(e,{props:bn(n,r)})}return""}))}}function Vn(e){return Nn(Kn("",null,null,null,[""],e=Dn(e),0,[0],e))}function Kn(e,t,n,r,o,i,a,l,s){for(var c=0,u=0,d=a,f=0,p=0,h=0,g=1,m=1,v=1,b=0,y="",x=o,w=i,k=r,S=y;m;)switch(h=b,b=On()){case 40:if(108!=h&&58==pn(S,d-1)){-1!=fn(S+=dn(In(b),"&","&\f"),"&\f",an(c?l[c-1]:0))&&(v=-1);break}case 34:case 39:case 91:S+=In(b);break;case 9:case 10:case 13:case 32:S+=Bn(h);break;case 92:S+=$n(Ln()-1,7);continue;case 47:switch(_n()){case 42:case 47:vn(Gn(Mn(On(),Ln()),t,n,s),s);break;default:S+="/"}break;case 123*g:l[c++]=gn(S)*v;case 125*g:case 59:case 0:switch(b){case 0:case 125:m=0;case 59+u:-1==v&&(S=dn(S,/\f/g,"")),p>0&&gn(S)-d&&vn(p>32?Qn(S+";",r,n,d-1,s):Qn(dn(S," ","")+";",r,n,d-2,s),s);break;case 59:S+=";";default:if(vn(k=Yn(S,t,n,c,u,o,l,y,x=[],w=[],d,i),i),123===b)if(0===u)Kn(S,t,k,k,x,i,d,l,w);else switch(99===f&&110===pn(S,3)?100:f){case 100:case 108:case 109:case 115:Kn(e,k,k,r&&vn(Yn(e,k,k,0,0,o,l,y,o,x=[],d,w),w),o,w,d,l,r?x:w);break;default:Kn(S,k,k,k,[""],w,0,l,w)}}c=u=p=0,g=v=1,y=S="",d=a;break;case 58:d=1+gn(S),p=h;default:if(g<1)if(123==b)--g;else if(125==b&&0==g++&&125==Pn())continue;switch(S+=ln(b),b*g){case 38:v=u>0?1:(S+="\f",-1);break;case 44:l[c++]=(gn(S)-1)*v,v=1;break;case 64:45===_n()&&(S+=In(On())),f=_n(),u=d=gn(y=S+=Fn(Ln())),b++;break;case 45:45===h&&2==gn(S)&&(g=0)}}return i}function Yn(e,t,n,r,o,i,a,l,s,c,u,d){for(var f=o-1,p=0===o?i:[""],h=mn(p),g=0,m=0,v=0;g<r;++g)for(var b=0,y=hn(e,f+1,f=an(m=a[g])),x=e;b<h;++b)(x=cn(m>0?p[b]+" "+y:dn(y,/&\f/g,p[b])))&&(s[v++]=x);return Cn(e,t,n,0===o?en:l,s,c,u,d)}function Gn(e,t,n,r){return Cn(e,t,n,Zt,ln(Sn),hn(e,2,-2),0,r)}function Qn(e,t,n,r,o){return Cn(e,t,n,tn,hn(e,0,r),hn(e,r+1,-1),r,o)}var Xn={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Jn="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ALADIN_API_KEY:"ttbp_zo1251001",REACT_APP_REST_API_KEY:"9144a2e597b17e94ab66626e8690caf8"}&&({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ALADIN_API_KEY:"ttbp_zo1251001",REACT_APP_REST_API_KEY:"9144a2e597b17e94ab66626e8690caf8"}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ALADIN_API_KEY:"ttbp_zo1251001",REACT_APP_REST_API_KEY:"9144a2e597b17e94ab66626e8690caf8"}.SC_ATTR)||"data-styled",Zn="active",er="data-styled-version",tr="6.1.13",nr="/*!sc*/\n",rr="undefined"!=typeof window&&"HTMLElement"in window,or=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ALADIN_API_KEY:"ttbp_zo1251001",REACT_APP_REST_API_KEY:"9144a2e597b17e94ab66626e8690caf8"}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ALADIN_API_KEY:"ttbp_zo1251001",REACT_APP_REST_API_KEY:"9144a2e597b17e94ab66626e8690caf8"}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ALADIN_API_KEY:"ttbp_zo1251001",REACT_APP_REST_API_KEY:"9144a2e597b17e94ab66626e8690caf8"}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ALADIN_API_KEY:"ttbp_zo1251001",REACT_APP_REST_API_KEY:"9144a2e597b17e94ab66626e8690caf8"}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ALADIN_API_KEY:"ttbp_zo1251001",REACT_APP_REST_API_KEY:"9144a2e597b17e94ab66626e8690caf8"}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ALADIN_API_KEY:"ttbp_zo1251001",REACT_APP_REST_API_KEY:"9144a2e597b17e94ab66626e8690caf8"}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ALADIN_API_KEY:"ttbp_zo1251001",REACT_APP_REST_API_KEY:"9144a2e597b17e94ab66626e8690caf8"}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ALADIN_API_KEY:"ttbp_zo1251001",REACT_APP_REST_API_KEY:"9144a2e597b17e94ab66626e8690caf8"}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ALADIN_API_KEY:"ttbp_zo1251001",REACT_APP_REST_API_KEY:"9144a2e597b17e94ab66626e8690caf8"}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ALADIN_API_KEY:"ttbp_zo1251001",REACT_APP_REST_API_KEY:"9144a2e597b17e94ab66626e8690caf8"}.SC_DISABLE_SPEEDY)),ir={},ar=(new Set,Object.freeze([])),lr=Object.freeze({});function sr(e,t,n){return void 0===n&&(n=lr),e.theme!==n.theme&&e.theme||t||n.theme}var cr=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ur=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,dr=/(^-|-$)/g;function fr(e){return e.replace(ur,"-").replace(dr,"")}var pr=/(a)(d)/gi,hr=52,gr=function(e){return String.fromCharCode(e+(e>25?39:97))};function mr(e){var t,n="";for(t=Math.abs(e);t>hr;t=t/hr|0)n=gr(t%hr)+n;return(gr(t%hr)+n).replace(pr,"$1-$2")}var vr,br=5381,yr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},xr=function(e){return yr(br,e)};function wr(e){return mr(xr(e)>>>0)}function kr(e){return e.displayName||e.name||"Component"}function Sr(e){return"string"==typeof e&&!0}var jr="function"==typeof Symbol&&Symbol.for,Cr=jr?Symbol.for("react.memo"):60115,Er=jr?Symbol.for("react.forward_ref"):60112,Tr={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Pr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Or={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},_r=((vr={})[Er]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},vr[Cr]=Or,vr);function Lr(e){return("type"in(t=e)&&t.type.$$typeof)===Cr?Or:"$$typeof"in e?_r[e.$$typeof]:Tr;var t}var Ar=Object.defineProperty,Rr=Object.getOwnPropertyNames,Dr=Object.getOwnPropertySymbols,Nr=Object.getOwnPropertyDescriptor,Ir=Object.getPrototypeOf,Br=Object.prototype;function $r(e,t,n){if("string"!=typeof t){if(Br){var r=Ir(t);r&&r!==Br&&$r(e,r,n)}var o=Rr(t);Dr&&(o=o.concat(Dr(t)));for(var i=Lr(e),a=Lr(t),l=0;l<o.length;++l){var s=o[l];if(!(s in Pr||n&&n[s]||a&&s in a||i&&s in i)){var c=Nr(t,s);try{Ar(e,s,c)}catch(e){}}}}return e}function zr(e){return"function"==typeof e}function Mr(e){return"object"==typeof e&&"styledComponentId"in e}function Fr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ur(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Hr(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Wr(e,t,n){if(void 0===n&&(n=!1),!n&&!Hr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Wr(e[r],t[r]);else if(Hr(t))for(var r in t)e[r]=Wr(e[r],t[r]);return e}function qr(e,t){Object.defineProperty(e,"toString",{value:t})}function Vr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Kr=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)if((o<<=1)<0)throw Vr(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=r;i<o;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(e+1),l=(i=0,t.length);i<l;i++)this.tag.insertRule(a,t[i])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,i=r;i<o;i++)t+="".concat(this.tag.getRule(i)).concat(nr);return t},e}(),Yr=new Map,Gr=new Map,Qr=1,Xr=function(e){if(Yr.has(e))return Yr.get(e);for(;Gr.has(Qr);)Qr++;var t=Qr++;return Yr.set(e,t),Gr.set(t,e),t},Jr=function(e,t){Qr=t+1,Yr.set(e,t),Gr.set(t,e)},Zr="style[".concat(Jn,"][").concat(er,'="').concat(tr,'"]'),eo=new RegExp("^".concat(Jn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),to=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},no=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(nr),o=[],i=0,a=r.length;i<a;i++){var l=r[i].trim();if(l){var s=l.match(eo);if(s){var c=0|parseInt(s[1],10),u=s[2];0!==c&&(Jr(u,c),to(e,u,s[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(l)}}},ro=function(e){for(var t=document.querySelectorAll(Zr),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(Jn)!==Zn&&(no(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function oo(){return n.nc}var io=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(Jn,"]")));return t[t.length-1]}(n),i=void 0!==o?o.nextSibling:null;r.setAttribute(Jn,Zn),r.setAttribute(er,tr);var a=oo();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},ao=function(){function e(e){this.element=io(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}throw Vr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),lo=function(){function e(e){this.element=io(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),so=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),co=rr,uo={isServer:!rr,useCSSOMInjection:!or},fo=function(){function e(e,t,n){void 0===e&&(e=lr),void 0===t&&(t={});var r=this;this.options=Vt(Vt({},uo),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&rr&&co&&(co=!1,ro(this)),qr(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=function(n){var o=function(e){return Gr.get(e)}(n);if(void 0===o)return"continue";var i=e.names.get(o),a=t.getGroup(n);if(void 0===i||!i.size||0===a.length)return"continue";var l="".concat(Jn,".g").concat(n,'[id="').concat(o,'"]'),s="";void 0!==i&&i.forEach((function(e){e.length>0&&(s+="".concat(e,","))})),r+="".concat(a).concat(l,'{content:"').concat(s,'"}').concat(nr)},i=0;i<n;i++)o(i);return r}(r)}))}return e.registerId=function(e){return Xr(e)},e.prototype.rehydrate=function(){!this.server&&rr&&ro(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(Vt(Vt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new so(n):t?new ao(n):new lo(n)}(this.options),new Kr(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Xr(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Xr(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Xr(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),po=/&/g,ho=/^\s*\/\/.*$/gm;function go(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=go(e.children,t)),e}))}function mo(e){var t,n,r,o=void 0===e?lr:e,i=o.options,a=void 0===i?lr:i,l=o.plugins,s=void 0===l?ar:l,c=function(e,r,o){return o.startsWith(n)&&o.endsWith(n)&&o.replaceAll(n,"").length>0?".".concat(t):e},u=s.slice();u.push((function(e){e.type===en&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(po,n).replace(r,c))})),a.prefix&&u.push(qn),u.push(Hn);var d=function(e,o,i,l){void 0===o&&(o=""),void 0===i&&(i=""),void 0===l&&(l="&"),t=l,n=o,r=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(ho,""),c=Vn(i||o?"".concat(i," ").concat(o," { ").concat(s," }"):s);a.namespace&&(c=go(c,a.namespace));var d,f=[];return Un(c,function(e){var t=mn(e);return function(n,r,o,i){for(var a="",l=0;l<t;l++)a+=e[l](n,r,o,i)||"";return a}}(u.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),f};return d.hash=s.length?s.reduce((function(e,t){return t.name||Vr(15),yr(e,t.name)}),br).toString():"",d}var vo=new fo,bo=mo(),yo=r.createContext({shouldForwardProp:void 0,styleSheet:vo,stylis:bo}),xo=(yo.Consumer,r.createContext(void 0));function wo(){return(0,r.useContext)(yo)}function ko(e){var t=(0,r.useState)(e.stylisPlugins),n=t[0],o=t[1],i=wo().styleSheet,a=(0,r.useMemo)((function(){var t=i;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,i]),l=(0,r.useMemo)((function(){return mo({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})}),[e.enableVendorPrefixes,e.namespace,n]);(0,r.useEffect)((function(){Gt()(n,e.stylisPlugins)||o(e.stylisPlugins)}),[e.stylisPlugins]);var s=(0,r.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:a,stylis:l}}),[e.shouldForwardProp,a,l]);return r.createElement(yo.Provider,{value:s},r.createElement(xo.Provider,{value:l},e.children))}var So=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=bo);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,qr(this,(function(){throw Vr(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=bo),this.name+e.hash},e}(),jo=function(e){return e>="A"&&e<="Z"};function Co(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;jo(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Eo=function(e){return null==e||!1===e||""===e},To=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Eo(i)&&(Array.isArray(i)&&i.isCss||zr(i)?r.push("".concat(Co(o),":"),i,";"):Hr(i)?r.push.apply(r,Kt(Kt(["".concat(o," {")],To(i),!1),["}"],!1)):r.push("".concat(Co(o),": ").concat((t=o,null==(n=i)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in Xn||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Po(e,t,n,r){return Eo(e)?[]:Mr(e)?[".".concat(e.styledComponentId)]:zr(e)?!zr(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:Po(e(t),t,n,r):e instanceof So?n?(e.inject(n,r),[e.getName(r)]):[e]:Hr(e)?To(e):Array.isArray(e)?Array.prototype.concat.apply(ar,e.map((function(e){return Po(e,t,n,r)}))):[e.toString()];var o}function Oo(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(zr(n)&&!Mr(n))return!1}return!0}var _o=xr(tr),Lo=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Oo(e),this.componentId=t,this.baseHash=yr(_o,t),this.baseStyle=n,fo.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Fr(r,this.staticRulesId);else{var o=Ur(Po(this.rules,e,t,n)),i=mr(yr(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,i)){var a=n(o,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,a)}r=Fr(r,i),this.staticRulesId=i}else{for(var l=yr(this.baseHash,n.hash),s="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)s+=u;else if(u){var d=Ur(Po(u,e,t,n));l=yr(l,d+c),s+=d}}if(s){var f=mr(l>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(s,".".concat(f),void 0,this.componentId)),r=Fr(r,f)}}return r},e}(),Ao=r.createContext(void 0);Ao.Consumer;function Ro(e){var t=r.useContext(Ao),n=(0,r.useMemo)((function(){return function(e,t){if(!e)throw Vr(14);if(zr(e))return e(t);if(Array.isArray(e)||"object"!=typeof e)throw Vr(8);return t?Vt(Vt({},t),e):e}(e.theme,t)}),[e.theme,t]);return e.children?r.createElement(Ao.Provider,{value:n},e.children):null}var Do={};new Set;function No(e,t,n){var o=Mr(e),i=e,a=!Sr(e),l=t.attrs,s=void 0===l?ar:l,c=t.componentId,u=void 0===c?function(e,t){var n="string"!=typeof e?"sc":fr(e);Do[n]=(Do[n]||0)+1;var r="".concat(n,"-").concat(wr(tr+n+Do[n]));return t?"".concat(t,"-").concat(r):r}(t.displayName,t.parentComponentId):c,d=t.displayName,f=void 0===d?function(e){return Sr(e)?"styled.".concat(e):"Styled(".concat(kr(e),")")}(e):d,p=t.displayName&&t.componentId?"".concat(fr(t.displayName),"-").concat(t.componentId):t.componentId||u,h=o&&i.attrs?i.attrs.concat(s).filter(Boolean):s,g=t.shouldForwardProp;if(o&&i.shouldForwardProp){var m=i.shouldForwardProp;if(t.shouldForwardProp){var v=t.shouldForwardProp;g=function(e,t){return m(e,t)&&v(e,t)}}else g=m}var b=new Lo(n,p,o?i.componentStyle:void 0);function y(e,t){return function(e,t,n){var o=e.attrs,i=e.componentStyle,a=e.defaultProps,l=e.foldedComponentIds,s=e.styledComponentId,c=e.target,u=r.useContext(Ao),d=wo(),f=e.shouldForwardProp||d.shouldForwardProp,p=sr(t,u,a)||lr,h=function(e,t,n){for(var r,o=Vt(Vt({},t),{className:void 0,theme:n}),i=0;i<e.length;i+=1){var a=zr(r=e[i])?r(o):r;for(var l in a)o[l]="className"===l?Fr(o[l],a[l]):"style"===l?Vt(Vt({},o[l]),a[l]):a[l]}return t.className&&(o.className=Fr(o.className,t.className)),o}(o,t,p),g=h.as||c,m={};for(var v in h)void 0===h[v]||"$"===v[0]||"as"===v||"theme"===v&&h.theme===p||("forwardedAs"===v?m.as=h.forwardedAs:f&&!f(v,g)||(m[v]=h[v]));var b=function(e,t){var n=wo();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(i,h),y=Fr(l,s);return b&&(y+=" "+b),h.className&&(y+=" "+h.className),m[Sr(g)&&!cr.has(g)?"class":"className"]=y,m.ref=n,(0,r.createElement)(g,m)}(x,e,t)}y.displayName=f;var x=r.forwardRef(y);return x.attrs=h,x.componentStyle=b,x.displayName=f,x.shouldForwardProp=g,x.foldedComponentIds=o?Fr(i.foldedComponentIds,i.styledComponentId):"",x.styledComponentId=p,x.target=o?i.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=o?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,o=t;r<o.length;r++)Wr(e,o[r],!0);return e}({},i.defaultProps,e):e}}),qr(x,(function(){return".".concat(x.styledComponentId)})),a&&$r(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function Io(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Bo=function(e){return Object.assign(e,{isCss:!0})};function $o(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(zr(e)||Hr(e))return Bo(Po(Io(ar,Kt([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Po(r):Bo(Po(Io(r,t)))}function zo(e,t,n){if(void 0===n&&(n=lr),!t)throw Vr(1,t);var r=function(r){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return e(t,n,$o.apply(void 0,Kt([r],o,!1)))};return r.attrs=function(r){return zo(e,t,Vt(Vt({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return zo(e,t,Vt(Vt({},n),r))},r}var Mo=function(e){return zo(No,e)},Fo=Mo;cr.forEach((function(e){Fo[e]=Mo(e)}));var Uo=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Oo(e),fo.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var o=r(Ur(Po(this.rules,t,n,r)),""),i=this.componentId+e;n.insertRules(i,i,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&fo.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function Ho(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var o=$o.apply(void 0,Kt([e],t,!1)),i="sc-global-".concat(wr(JSON.stringify(o))),a=new Uo(o,i),l=function(e){var t=wo(),n=r.useContext(Ao),o=r.useRef(t.styleSheet.allocateGSInstance(i)).current;return t.styleSheet.server&&s(o,e,t.styleSheet,n,t.stylis),r.useLayoutEffect((function(){if(!t.styleSheet.server)return s(o,e,t.styleSheet,n,t.stylis),function(){return a.removeStyles(o,t.styleSheet)}}),[o,e,t.styleSheet,n,t.stylis]),null};function s(e,t,n,r,o){if(a.isStatic)a.renderStyles(e,ir,n,o);else{var i=Vt(Vt({},t),{theme:sr(t,r,l.defaultProps)});a.renderStyles(e,i,n,o)}}return r.memo(l)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=oo(),r=Ur([n&&'nonce="'.concat(n,'"'),"".concat(Jn,'="true"'),"".concat(er,'="').concat(tr,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw Vr(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw Vr(2);var n=e.instance.toString();if(!n)return[];var o=((t={})[Jn]="",t[er]=tr,t.dangerouslySetInnerHTML={__html:n},t),i=oo();return i&&(o.nonce=i),[r.createElement("style",Vt({},o,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new fo({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw Vr(2);return r.createElement(ko,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw Vr(3)}})(),"__sc-".concat(Jn,"__");const Wo={PALETTE:{background:"rgba(233, 232, 228, 1)",lightGreen:"rgba(207, 222, 200, 1)",green:"rgba(42, 168, 113, 1)",lightGray:"rgba(217, 217, 217, 1)",gray:"rgba(153, 153, 153, 1)",darkGray:"rgba(113, 113, 113, 1)"},FONT_SIZE:{logo:"2.08vw",h1:"1.81vw",h2:"1.67vw",h3:"1.39vw",b1:"1.39vw",b2:"1.18vw",b3:"1.04vw",b4:"1.04vw"},FONT_WEIGHT:{medium:"500",bold:"700",extraBold:"800"}},qo=Wo,Vo=$o`
    display: flex;
    justify-content: center;
    align-items: center;
`,Ko=$o`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,Yo=$o`
    font-family: 'TransformaScript';
    font-size: 2.08vw; //30px
    font-weight: 800;

`,Go=$o`
    font-family: 'Pretendard';
    font-size: 1.81vw; //26px
    font-weight: 800;

`,Qo=$o`
    font-family: 'Pretendard';
    font-size: 1.67vw; //24px
    font-weight: 700;

`,Xo=$o`
    font-family: 'Pretendard';
    font-size: 1.39vw; //20px
    font-weight: 700;

`,Jo=$o`
    font-family: 'Pretendard';
    font-size: 1.39vw; //20px
    font-weight: 500;

`,Zo=$o`
    font-family: 'Pretendard';
    font-size: 1.18vw; //17px
    font-weight: 500;

`,ei=$o`
    font-family: 'Pretendard';
    font-size: 1.04vw; //15px
    font-weight: 800;

`,ti=$o`
    font-family: 'Pretendard';
    font-size: 1.04vw; //15px
    font-weight: 500;

`,ni={};ni.Container=Fo.div`
    ${Ko};
    background-color: ${qo.PALETTE.background};
    height:auto;
    min-height: 100vh;
`,ni.Header=Fo.div`
    width: 100%;
    /* height: 5%; */
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
    padding: 1% 5% 1% 5%;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1); 

`,ni.Footer=Fo.div`
    width:100%;
    /* height:5%; */
    background-color: white;
    ${Xo}
    font-family: 'TransFormaScript';
    font-weight:500;
    padding-top:1.6%;
    padding-bottom: 1.4%;
    text-align: center;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1); 
`,ni.Main=Fo.main`
    width: 100%;
    flex-grow: 1; //main에 오는 페이지가 헤더와 푸터 사이의 남은 공간을 차지하도록 함
    /* min-height: 90%; */
    
   `,ni.Logo=Fo.div`
    width:16vw;
    ${Yo}
    font-weight:800;
    cursor:pointer;
    
`,ni.Nav=Fo.nav`
    ${Jo};
    display: flex;
    
    & a {
        
        margin:0 1.5vw;
        &.active {
            color: ${qo.PALETTE.green};
        }
    }
    
   
`,ni.SearchForm=Fo.form`
  display: flex;
  align-items: center;
  ::placeholder {
    color: #999999;
   
  }
`,ni.SearchInput=Fo.input`
  
  width: 15vw;
  padding: 1.5%;
  padding-left: 3%;
  border-radius: 10px;
  border:2px solid #999999;
  outline: none;
  ${Zo} 
  
`,ni.SearchButton=Fo.button`
  ${Jo};
  padding-left:2%;
  background-color: transparent;
  border: 1px solid transparent;
  display: flex;
  img {
    width: 2vw;
  }
  cursor: pointer;
  
  &:hover {
    background-color: transparent;
  }
`;const ri=ni;var oi=n(579);const ii=()=>(0,oi.jsx)(oi.Fragment,{children:(0,oi.jsxs)(ri.Nav,{children:[(0,oi.jsx)(Ft,{to:"/bookclubs",children:"\ubd81\ud074\ub7fd"}),(0,oi.jsx)(Ft,{to:"/posts",children:"\uac8c\uc2dc\ud310"}),(0,oi.jsx)(Ft,{to:"/books",children:"\ub3c4\uc11c"}),(0,oi.jsx)(Ft,{to:"/essay",children:"\uc5d0\uc138\uc774"}),(0,oi.jsx)(Ft,{to:"/myPage",children:"\ub9c8\uc774\ud398\uc774\uc9c0"})]})}),ai=e=>{let{onSearch:t}=e;const[n,o]=(0,r.useState)(""),i=rt();return(0,oi.jsxs)(ri.SearchForm,{onSubmit:e=>{e.preventDefault(),n.trim()&&(i(`/search?q=${encodeURIComponent(n)}`),t&&t(n))},children:[(0,oi.jsx)(ri.SearchInput,{type:"text",value:n,onChange:e=>o(e.target.value),placeholder:"\uac80\uc0c9\uc5b4 \uc785\ub825"}),(0,oi.jsx)(ri.SearchButton,{type:"submit",children:(0,oi.jsx)("img",{src:"./global/images/searchpage/search_icon.png",alt:"img"})})]})},li=()=>{const{pathname:e}=tt();return(0,r.useEffect)((()=>{window.scrollTo(0,0)}),[e]),null},si=()=>(0,oi.jsx)("div",{children:(0,oi.jsxs)(ri.Container,{children:[(0,oi.jsxs)(ri.Header,{children:[(0,oi.jsx)(Ft,{to:"/",children:(0,oi.jsx)(ri.Logo,{children:"Read mate"})}),(0,oi.jsx)(ii,{}),(0,oi.jsx)(ai,{})]}),(0,oi.jsxs)(ri.Main,{children:[(0,oi.jsx)(li,{}),(0,oi.jsx)(yt,{})]}),(0,oi.jsx)(ri.Footer,{children:"Read Mate"})]})});var ci=n(382);const ui={};ui.SliderContainer=Fo.div`
    width: 100%; 
    
    position:relative;
    overflow: hidden;
    
    .slick-dots {
        bottom: 15%;
    }

    .slick-dots li {
        
        margin:0 1%;
    }

    .slick-dots li button {
        position:relative;
        transform:translateX(-15%);
        padding:0;
        width: 1.9vw;
        height: 1.2vh;
        border-radius: 28px;
        background: rgba(255, 255, 255, 0.37);
        cursor: pointer;
    }
    
        .slick-dots li button:before {
        content: none;
        
    }

    .slick-dots li.slick-active button {
        background: white;
    }
`,ui.PageIndicator=Fo.div`
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    ${ti};
    color: white;
`,ui.Slider=Fo.div`
    width:100%;
    img {
        width: 100%; 
    }
    
`,ui.Container=Fo.div`
    width:100%;
    height:auto;
    overflow: hidden;
    background-color: ${qo.PALETTE.background};
    position:relative;
    padding: 5% 0% 5% 10%;
    
    &.lightGreenBg{
        background-color: ${qo.PALETTE.lightGreen};

    }
    &.hotpost{
        margin-bottom: 8%;
    }

`,ui.Title=Fo.div`
    /* padding:5% 0; */
    padding-bottom: 5%;
    img{
        width:20%;
    }
`,ui.Text=Fo.div`
    padding-bottom: 5%;
    line-height: 1.3;
    ${Jo};
    
`,ui.ShowMoreButton=Fo.div`
   img{
        position:relative;
        z-index: 10;
        width: 8.9%;
    }
`,ui.FB_Component=Fo.div`
    display: flex;
    justify-content: center; 
    align-items: center; 
    width: 100%;
    height: 100%;
    position:absolute;
    top:0%;
    left:15%;
    div {
        width: 15%; 
        height: 70%; 
        background-color: white;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1); 
        border-radius: 2vw; 
        margin-right: 3%;
        
    }
    

`,ui.Text2=Fo.div`
    position:absolute;
    top:30%;
    ${Jo}; 
`,ui.ShowMoreButton2=Fo.div`
    position:absolute;
    top:15%;
    left:83%;
    width:100%;
    img{
        position:relative;
        z-index: 10;
        width:8%;
    }
`,ui.BookClubClip=Fo.div`
    img{
        width:13%;
        display: block;
    }
    img:first-child {
        position:relative;
        /* padding-top:1%; */
        top:10%;
        transform: translate(0, -10%);
        left:-8%;
        z-index: 10;
    }
    img:nth-child(2) {
        width:11%;
        bottom:0%;
        left:85%; 
        position:relative;
        transform: translate(0, 55%);
        z-index: 10;
        /* margin-bottom: 5%; */
    }
`,ui.BC_Component=Fo.div`
    display: flex;
    justify-content: center; /* 자식 div들 사이의 간격 조정 */
    align-items: center; /* 수직 중앙 정렬 */
    width: 100%;
    height: 100%;
    position:absolute;
    top:15%;
    right:0%;
    div {
        width: 36%; 
        height:42%;
        background-color: white;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1); 
        border-radius: 2vw; 
        /* margin-right: 3%; */
        margin: 0px 5%;
    }

`;const di=ui,fi=()=>{const[e,t]=(0,r.useState)(0),n={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:2500,pauseOnHover:!1,pauseOnFocus:!1,pauseOnDotsHover:!1,beforeChange:(e,n)=>t(n)};return(0,oi.jsx)("div",{children:(0,oi.jsxs)(di.SliderContainer,{children:[(0,oi.jsxs)(ci.A,{...n,children:[(0,oi.jsx)(di.Slider,{children:(0,oi.jsx)("img",{src:"./global/images/mainpage/slider1.png"})}),(0,oi.jsx)(di.Slider,{children:(0,oi.jsx)("img",{src:"./global/images/mainpage/slider2.png"})}),(0,oi.jsx)(di.Slider,{children:(0,oi.jsx)("img",{src:"./global/images/mainpage/slider3.png"})}),(0,oi.jsx)(di.Slider,{children:(0,oi.jsx)("img",{src:"./global/images/mainpage/slider4.png"})})]}),(0,oi.jsx)(di.PageIndicator,{children:e+1})]})})},pi={green:$o`
        background-color: ${e=>{let{theme:t}=e;return t.PALETTE.green}};
        background-color: white;
        background-color: ${e=>{let{theme:t}=e;return t.PALETTE.darkGray}};
    `},hi={default:$o`
        border: none;
    `,green:$o`
    border: 1px solid ${e=>{let{theme:t}=e;return t.PALETTE.green}};
`},gi={small:$o`
        width: 93px;
        height: 35px;
    `,medium:$o`
    width: 132px;
    height: 53px;
    `,large:$o`
    width: 410px;
    height: 65px;
    `},mi={black:$o`
        color:black;
    `,white:$o`
        color:white;
    `,green:$o`
    color:${e=>{let{theme:t}=e;return t.PALETTE.green}};
`},vi=(Fo.button`
    ${e=>{let{variant:t}=e;return pi[t]}}
    ${e=>{let{border:t}=e;return hi[t]}}
    ${e=>{let{size:t}=e;return gi[t]}}
    ${e=>{let{color:t}=e;return mi[t]}}

    cursor: pointer;
`,()=>(0,oi.jsx)("div",{children:(0,oi.jsxs)(di.Container,{children:[(0,oi.jsx)(di.Title,{children:(0,oi.jsx)("img",{src:"./global/images/mainpage/featuredbooks.png"})}),(0,oi.jsxs)(di.Text,{children:[(0,oi.jsx)("div",{children:"\uc9c0\ub09c \uc77c\uc8fc\uc77c\uac04 \uc0ac\ub78c\ub4e4\uc774"}),(0,oi.jsx)("div",{children:"\ub9ce\uc774 \uc77d\uace0 \uc788\ub294 \ucc45\uc744"}),(0,oi.jsx)("div",{children:"\uc0b4\ud3b4\ubcf4\uc138\uc694!"})]}),(0,oi.jsx)(di.ShowMoreButton,{children:(0,oi.jsx)(Ft,{to:"/books",children:(0,oi.jsx)("img",{src:"./global/images/button/showmorebutton.png"})})}),(0,oi.jsxs)(di.FB_Component,{children:[(0,oi.jsx)("div",{}),(0,oi.jsx)("div",{}),(0,oi.jsx)("div",{})]})]})})),bi=()=>(0,oi.jsx)("div",{children:(0,oi.jsxs)(di.Container,{className:"lightGreenBg",children:[(0,oi.jsx)(di.Title,{children:(0,oi.jsx)("img",{src:"./global/images/mainpage/bookclub.png"})}),(0,oi.jsx)(di.Text2,{children:(0,oi.jsx)("div",{children:"\ud604\uc7ac \ubaa8\uc9d1 \uc911\uc778 \ubd81\ud074\ub7fd\uc774\uc5d0\uc694. \uad00\uc2ec\uc788\ub294 \ubd81\ud074\ub7fd\uc5d0 \ucc38\uc5ec\ud574\ubcf4\uc138\uc694!"})}),(0,oi.jsx)(di.ShowMoreButton2,{children:(0,oi.jsx)(Ft,{to:"/bookclubs",children:(0,oi.jsx)("img",{src:"./global/images/button/showmorebutton.png"})})}),(0,oi.jsxs)(di.BookClubClip,{children:[(0,oi.jsx)("img",{src:"./global/images/mainpage/bookclubclip1.png"}),(0,oi.jsx)("img",{src:"./global/images/mainpage/bookclubclip2.png"})]}),(0,oi.jsxs)(di.BC_Component,{children:[(0,oi.jsx)("div",{}),(0,oi.jsx)("div",{})]})]})}),yi={};yi.Container=Fo.div`
    width:100%;
    height:auto;
    overflow: hidden;
    background-color: ${qo.PALETTE.background};
    position:relative;
    padding: 5% 0% 5% 10%;
    
    &.lightGreenBg{
        background-color: ${qo.PALETTE.lightGreen};

    }
    &.hotpost{
        margin-bottom: 8%;
    }

`,yi.Title=Fo.div`
    /* padding:5% 0; */
    padding-bottom: 5%;
    img{
        width:20%;
    }
`,yi.Text3=Fo.div`
    position: absolute;
    ${Jo};
    top:30%;
    /* transform: translate(0, -100%); */
    margin-bottom: 30%;
`,yi.ShowMoreButton3=Fo.div`
    position:absolute;
    top:15%;
    left:83%;
    width:100%;
    img{
        position:relative;
        z-index: 10;
        width:8%;
    }
`,yi.HP_Component=Fo.div`
    display: flex;
    justify-content: center; /* 자식 div들 사이의 간격 조정 */
    align-items: center; /* 수직 중앙 정렬 */
    width: 100%;
    height: 100%;
    position:absolute;
    top:15%;
    right:0%;
    margin-top: 5%;
`,yi.BookClubClip2=Fo.div`
    img{
        width:13%;
        display: block;
        visibility: hidden;
    }
    img:first-child {
        position:relative;
        /* padding-top:1%; */
        top:10%;
        transform: translate(0, -10%);
        left:-8%;
        z-index: 10;
    }
    img:nth-child(2) {
        width:11%;
        bottom:0%;
        left:85%; 
        position:relative;
        transform: translate(0, 55%);
        z-index: 10;
        /* margin-bottom: 5%; */
    }
`,yi.Crown=Fo.div`
   width:7%;
   position: absolute;
   top:13%;
   left: 10%;
   &.crown1 { // 첫 번째 크라운
        left: 10%;
    }

    &.crown2 { // 두 번째 크라운
        left: 60%; // 오른쪽으로 옮기기
    }
    img{
        /* position: relative; */
        /* left: 60%; */
        width:100%;
    }
    
`,yi.Box=Fo.div`
        width: 36%; 
        height:42%;
        background-color: white;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1); 
        border-radius: 2vw; 
        margin: 0px 5%;
        padding:1.5%;
        padding-left: 2%;
        position: relative;
        cursor: pointer;
`,yi.FirstLine=Fo.div`
    position: absolute;
    top:15%;
    display: flex;
    align-items: center;
    width:50%;
    img{
        width:25%;
    }
`,yi.Title3=Fo.div`
    ${Qo}
    padding-left: 3%;
`,yi.UserInfo=Fo.div`
    position: absolute;
    top:42%;
    display: flex;
    align-items: center;
    ${Jo}
    white-space: nowrap;
    width:10%;
    justify-content: space-between;
    img {
        width: 40px;
        height:40px;
        border-radius: 50%;
        margin-right: 7px;
        @media (max-width: 1024px) {
            width: 30px; 
            height: 30px; 
        }

        @media (max-width: 768px) {
            width: 20px; 
            height: 20px; 
        }

        @media (max-width: 480px) {
            width: 15px; 
            height: 15px;
        }
    }
`,yi.InteractionContainer=Fo.div`
    position: absolute;
    top:75%;
    display: flex;
    align-items: center;
    width:55%;
    justify-content: space-between;
    ${Zo}
`,yi.LikeContainer=Fo.div`
    display: flex;
    align-items: center;
    gap: 3%;
   
`,yi.CommentContainer=Fo.div`
    display: flex;
    align-items: center;
    gap: 3%;
    
`,yi.TimeContainer=Fo.div`
    display: flex;
    align-items: center;
    gap: 3%;

`,yi.PostImage=Fo.div`
    width: 30%;
    height:80%;
    height: auto;
    position: absolute;
    right: 2%;
    top: 15%;
    
    img{
        width:140px;
        height:140px;
        border-radius: 1vw;
        object-fit: cover;
        
        @media (max-width: 1024px) {
            width:80px;
            height:80px;
        }

        @media (max-width: 768px) {
            width:50px;
            height:50px;
        }

        @media (max-width: 480px) {
            width:35px;
            height:35px;
        }
    }
`;const xi=yi,wi=()=>{};let ki={},Si={},ji=null,Ci={mark:wi,measure:wi};try{"undefined"!==typeof window&&(ki=window),"undefined"!==typeof document&&(Si=document),"undefined"!==typeof MutationObserver&&(ji=MutationObserver),"undefined"!==typeof performance&&(Ci=performance)}catch(Mp){}const{userAgent:Ei=""}=ki.navigator||{},Ti=ki,Pi=Si,Oi=ji,_i=Ci,Li=(Ti.document,!!Pi.documentElement&&!!Pi.head&&"function"===typeof Pi.addEventListener&&"function"===typeof Pi.createElement),Ai=~Ei.indexOf("MSIE")||~Ei.indexOf("Trident/");var Ri="classic",Di="duotone",Ni="sharp",Ii="sharp-duotone",Bi=[Ri,Di,Ni,Ii],$i={fak:"kit","fa-kit":"kit"},zi={fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"},Mi={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},Fi=[1,2,3,4,5,6,7,8,9,10],Ui=Fi.concat([11,12,13,14,15,16,17,18,19,20]),Hi={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Wi=[...Object.keys({classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]}),"solid","regular","light","thin","duotone","brands","2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Hi.GROUP,Hi.SWAP_OPACITY,Hi.PRIMARY,Hi.SECONDARY].concat(Fi.map((e=>"".concat(e,"x")))).concat(Ui.map((e=>"w-".concat(e)))),qi={kit:"fak"},Vi={"kit-duotone":"fakd"};const Ki="___FONT_AWESOME___",Yi=16,Gi="fa",Qi="svg-inline--fa",Xi="data-fa-i2svg",Ji="data-fa-pseudo-element",Zi="data-fa-pseudo-element-pending",ea="data-prefix",ta="data-icon",na="fontawesome-i2svg",ra="async",oa=["HTML","HEAD","STYLE","SCRIPT"],ia=(()=>{try{return!0}catch(e){return!1}})(),aa=[Ri,Ni,Ii];function la(e){return new Proxy(e,{get:(e,t)=>t in e?e[t]:e[Ri]})}const sa={...Mi};sa[Ri]={...Mi[Ri],...$i,...zi};const ca=la(sa),ua={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}};ua[Ri]={...ua[Ri],...qi,...Vi};const da=la(ua),fa={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}};fa[Ri]={...fa[Ri],fak:"fa-kit"};const pa=la(fa),ha={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}};ha[Ri]={...ha[Ri],"fa-kit":"fak"};const ga=la(ha),ma=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,va="fa-layers-text",ba=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,ya=(la({classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}}),["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"]),xa=Hi,wa=new Set;Object.keys(da[Ri]).map(wa.add.bind(wa)),Object.keys(da[Ni]).map(wa.add.bind(wa)),Object.keys(da[Ii]).map(wa.add.bind(wa));const ka=["kit",...Wi],Sa=Ti.FontAwesomeConfig||{};if(Pi&&"function"===typeof Pi.querySelector){[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((e=>{let[t,n]=e;const r=function(e){return""===e||"false"!==e&&("true"===e||e)}(function(e){var t=Pi.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}(t));void 0!==r&&null!==r&&(Sa[n]=r)}))}const ja={styleDefault:"solid",familyDefault:"classic",cssPrefix:Gi,replacementClass:Qi,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Sa.familyPrefix&&(Sa.cssPrefix=Sa.familyPrefix);const Ca={...ja,...Sa};Ca.autoReplaceSvg||(Ca.observeMutations=!1);const Ea={};Object.keys(ja).forEach((e=>{Object.defineProperty(Ea,e,{enumerable:!0,set:function(t){Ca[e]=t,Ta.forEach((e=>e(Ea)))},get:function(){return Ca[e]}})})),Object.defineProperty(Ea,"familyPrefix",{enumerable:!0,set:function(e){Ca.cssPrefix=e,Ta.forEach((e=>e(Ea)))},get:function(){return Ca.cssPrefix}}),Ti.FontAwesomeConfig=Ea;const Ta=[];const Pa=Yi,Oa={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};const _a="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function La(){let e=12,t="";for(;e-- >0;)t+=_a[62*Math.random()|0];return t}function Aa(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ra(e){return e.classList?Aa(e.classList):(e.getAttribute("class")||"").split(" ").filter((e=>e))}function Da(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Na(e){return Object.keys(e||{}).reduce(((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";")),"")}function Ia(e){return e.size!==Oa.size||e.x!==Oa.x||e.y!==Oa.y||e.rotate!==Oa.rotate||e.flipX||e.flipY}var Ba=':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    animation-delay: -1ms;\n    animation-duration: 1ms;\n    animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';function $a(){const e=Gi,t=Qi,n=Ea.cssPrefix,r=Ea.replacementClass;let o=Ba;if(n!==e||r!==t){const i=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");o=o.replace(i,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(l,".".concat(r))}return o}let za=!1;function Ma(){Ea.autoAddCss&&!za&&(!function(e){if(!e||!Li)return;const t=Pi.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=Pi.head.childNodes;let r=null;for(let o=n.length-1;o>-1;o--){const e=n[o],t=(e.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(t)>-1&&(r=e)}Pi.head.insertBefore(t,r)}($a()),za=!0)}var Fa={mixout:()=>({dom:{css:$a,insertCss:Ma}}),hooks:()=>({beforeDOMElementCreation(){Ma()},beforeI2svg(){Ma()}})};const Ua=Ti||{};Ua[Ki]||(Ua[Ki]={}),Ua[Ki].styles||(Ua[Ki].styles={}),Ua[Ki].hooks||(Ua[Ki].hooks={}),Ua[Ki].shims||(Ua[Ki].shims=[]);var Ha=Ua[Ki];const Wa=[],qa=function(){Pi.removeEventListener("DOMContentLoaded",qa),Va=1,Wa.map((e=>e()))};let Va=!1;function Ka(e){const{tag:t,attributes:n={},children:r=[]}=e;return"string"===typeof e?Da(e):"<".concat(t," ").concat(function(e){return Object.keys(e||{}).reduce(((t,n)=>t+"".concat(n,'="').concat(Da(e[n]),'" ')),"").trim()}(n),">").concat(r.map(Ka).join(""),"</").concat(t,">")}function Ya(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}Li&&(Va=(Pi.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Pi.readyState),Va||Pi.addEventListener("DOMContentLoaded",qa));var Ga=function(e,t,n,r){var o,i,a,l=Object.keys(e),s=l.length,c=void 0!==r?function(e,t){return function(n,r,o,i){return e.call(t,n,r,o,i)}}(t,r):t;for(void 0===n?(o=1,a=e[l[0]]):(o=0,a=n);o<s;o++)a=c(a,e[i=l[o]],i,e);return a};function Qa(e){const t=function(e){const t=[];let n=0;const r=e.length;for(;n<r;){const o=e.charCodeAt(n++);if(o>=55296&&o<=56319&&n<r){const r=e.charCodeAt(n++);56320==(64512&r)?t.push(((1023&o)<<10)+(1023&r)+65536):(t.push(o),n--)}else t.push(o)}return t}(e);return 1===t.length?t[0].toString(16):null}function Xa(e){return Object.keys(e).reduce(((t,n)=>{const r=e[n];return!!r.icon?t[r.iconName]=r.icon:t[n]=r,t}),{})}function Ja(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{skipHooks:r=!1}=n,o=Xa(t);"function"!==typeof Ha.hooks.addPack||r?Ha.styles[e]={...Ha.styles[e]||{},...o}:Ha.hooks.addPack(e,Xa(t)),"fas"===e&&Ja("fa",t)}const{styles:Za,shims:el}=Ha,tl={[Ri]:Object.values(pa[Ri]),[Ni]:Object.values(pa[Ni]),[Ii]:Object.values(pa[Ii])};let nl=null,rl={},ol={},il={},al={},ll={};const sl={[Ri]:Object.keys(ca[Ri]),[Ni]:Object.keys(ca[Ni]),[Ii]:Object.keys(ca[Ii])};function cl(e,t){const n=t.split("-"),r=n[0],o=n.slice(1).join("-");return r!==e||""===o||(i=o,~ka.indexOf(i))?null:o;var i}const ul=()=>{const e=e=>Ga(Za,((t,n,r)=>(t[r]=Ga(n,e,{}),t)),{});rl=e(((e,t,n)=>{if(t[3]&&(e[t[3]]=n),t[2]){t[2].filter((e=>"number"===typeof e)).forEach((t=>{e[t.toString(16)]=n}))}return e})),ol=e(((e,t,n)=>{if(e[n]=n,t[2]){t[2].filter((e=>"string"===typeof e)).forEach((t=>{e[t]=n}))}return e})),ll=e(((e,t,n)=>{const r=t[2];return e[n]=n,r.forEach((t=>{e[t]=n})),e}));const t="far"in Za||Ea.autoFetchSvg,n=Ga(el,((e,n)=>{const r=n[0];let o=n[1];const i=n[2];return"far"!==o||t||(o="fas"),"string"===typeof r&&(e.names[r]={prefix:o,iconName:i}),"number"===typeof r&&(e.unicodes[r.toString(16)]={prefix:o,iconName:i}),e}),{names:{},unicodes:{}});il=n.names,al=n.unicodes,nl=vl(Ea.styleDefault,{family:Ea.familyDefault})};var dl;function fl(e,t){return(rl[e]||{})[t]}function pl(e,t){return(ll[e]||{})[t]}function hl(e){return il[e]||{prefix:null,iconName:null}}function gl(){return nl}dl=e=>{nl=vl(e.styleDefault,{family:Ea.familyDefault})},Ta.push(dl),ul();const ml=()=>({prefix:null,iconName:null,rest:[]});function vl(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{family:n=Ri}=t,r=ca[n][e],o=da[n][e]||da[n][r],i=e in Ha.styles?e:null;return o||i||null}const bl={[Ri]:Object.keys(pa[Ri]),[Ni]:Object.keys(pa[Ni]),[Ii]:Object.keys(pa[Ii])};function yl(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{skipLookups:n=!1}=t,r={[Ri]:"".concat(Ea.cssPrefix,"-").concat(Ri),[Ni]:"".concat(Ea.cssPrefix,"-").concat(Ni),[Ii]:"".concat(Ea.cssPrefix,"-").concat(Ii)};let o=null,i=Ri;const a=Bi.filter((e=>e!==Di));a.forEach((t=>{(e.includes(r[t])||e.some((e=>bl[t].includes(e))))&&(i=t)}));const l=e.reduce(((e,t)=>{const l=cl(Ea.cssPrefix,t);if(Za[t]?(t=tl[i].includes(t)?ga[i][t]:t,o=t,e.prefix=t):sl[i].indexOf(t)>-1?(o=t,e.prefix=vl(t,{family:i})):l?e.iconName=l:t===Ea.replacementClass||a.some((e=>t===r[e]))||e.rest.push(t),!n&&e.prefix&&e.iconName){const t="fa"===o?hl(e.iconName):{},n=pl(e.prefix,e.iconName);t.prefix&&(o=null),e.iconName=t.iconName||n||e.iconName,e.prefix=t.prefix||e.prefix,"far"!==e.prefix||Za.far||!Za.fas||Ea.autoFetchSvg||(e.prefix="fas")}return e}),ml());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),l.prefix||i!==Ni||!Za.fass&&!Ea.autoFetchSvg||(l.prefix="fass",l.iconName=pl(l.prefix,l.iconName)||l.iconName),l.prefix||i!==Ii||!Za.fasds&&!Ea.autoFetchSvg||(l.prefix="fasds",l.iconName=pl(l.prefix,l.iconName)||l.iconName),"fa"!==l.prefix&&"fa"!==o||(l.prefix=gl()||"fas"),l}let xl=[],wl={};const kl={},Sl=Object.keys(kl);function jl(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return(wl[e]||[]).forEach((e=>{t=e.apply(null,[t,...r])})),t}function Cl(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];(wl[e]||[]).forEach((e=>{e.apply(null,n)}))}function El(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return kl[e]?kl[e].apply(null,t):void 0}function Tl(e){"fa"===e.prefix&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||gl();if(t)return t=pl(n,t)||t,Ya(Pl.definitions,n,t)||Ya(Ha.styles,n,t)}const Pl=new class{constructor(){this.definitions={}}add(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const r=t.reduce(this._pullDefinitions,{});Object.keys(r).forEach((e=>{this.definitions[e]={...this.definitions[e]||{},...r[e]},Ja(e,r[e]);const t=pa[Ri][e];t&&Ja(t,r[e]),ul()}))}reset(){this.definitions={}}_pullDefinitions(e,t){const n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map((t=>{const{prefix:r,iconName:o,icon:i}=n[t],a=i[2];e[r]||(e[r]={}),a.length>0&&a.forEach((t=>{"string"===typeof t&&(e[r][t]=i)})),e[r][o]=i})),e}},Ol={i2svg:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Li?(Cl("beforeI2svg",e),El("pseudoElements2svg",e),El("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;var n;!1===Ea.autoReplaceSvg&&(Ea.autoReplaceSvg=!0),Ea.observeMutations=!0,n=()=>{Al({autoReplaceSvgRoot:t}),Cl("watch",e)},Li&&(Va?setTimeout(n,0):Wa.push(n))}},_l={icon:e=>{if(null===e)return null;if("object"===typeof e&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:pl(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&2===e.length){const t=0===e[1].indexOf("fa-")?e[1].slice(3):e[1],n=vl(e[0]);return{prefix:n,iconName:pl(n,t)||t}}if("string"===typeof e&&(e.indexOf("".concat(Ea.cssPrefix,"-"))>-1||e.match(ma))){const t=yl(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||gl(),iconName:pl(t.prefix,t.iconName)||t.iconName}}if("string"===typeof e){const t=gl();return{prefix:t,iconName:pl(t,e)||e}}}},Ll={noAuto:()=>{Ea.autoReplaceSvg=!1,Ea.observeMutations=!1,Cl("noAuto")},config:Ea,dom:Ol,parse:_l,library:Pl,findIconDefinition:Tl,toHtml:Ka},Al=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{autoReplaceSvgRoot:t=Pi}=e;(Object.keys(Ha.styles).length>0||Ea.autoFetchSvg)&&Li&&Ea.autoReplaceSvg&&Ll.dom.i2svg({node:t})};function Rl(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map((e=>Ka(e)))}}),Object.defineProperty(e,"node",{get:function(){if(!Li)return;const t=Pi.createElement("div");return t.innerHTML=e.html,t.children}}),e}function Dl(e){const{icons:{main:t,mask:n},prefix:r,iconName:o,transform:i,symbol:a,title:l,maskId:s,titleId:c,extra:u,watchable:d=!1}=e,{width:f,height:p}=n.found?n:t,h="fak"===r,g=[Ea.replacementClass,o?"".concat(Ea.cssPrefix,"-").concat(o):""].filter((e=>-1===u.classes.indexOf(e))).filter((e=>""!==e||!!e)).concat(u.classes).join(" ");let m={children:[],attributes:{...u.attributes,"data-prefix":r,"data-icon":o,class:g,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(f," ").concat(p)}};const v=h&&!~u.classes.indexOf("fa-fw")?{width:"".concat(f/p*16*.0625,"em")}:{};d&&(m.attributes[Xi]=""),l&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(c||La())},children:[l]}),delete m.attributes.title);const b={...m,prefix:r,iconName:o,main:t,mask:n,maskId:s,transform:i,symbol:a,styles:{...v,...u.styles}},{children:y,attributes:x}=n.found&&t.found?El("generateAbstractMask",b)||{children:[],attributes:{}}:El("generateAbstractIcon",b)||{children:[],attributes:{}};return b.children=y,b.attributes=x,a?function(e){let{prefix:t,iconName:n,children:r,attributes:o,symbol:i}=e;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...o,id:!0===i?"".concat(t,"-").concat(Ea.cssPrefix,"-").concat(n):i},children:r}]}]}(b):function(e){let{children:t,main:n,mask:r,attributes:o,styles:i,transform:a}=e;if(Ia(a)&&n.found&&!r.found){const{width:e,height:t}=n,r={x:e/t/2,y:.5};o.style=Na({...i,"transform-origin":"".concat(r.x+a.x/16,"em ").concat(r.y+a.y/16,"em")})}return[{tag:"svg",attributes:o,children:t}]}(b)}function Nl(e){const{content:t,width:n,height:r,transform:o,title:i,extra:a,watchable:l=!1}=e,s={...a.attributes,...i?{title:i}:{},class:a.classes.join(" ")};l&&(s[Xi]="");const c={...a.styles};Ia(o)&&(c.transform=function(e){let{transform:t,width:n=Yi,height:r=Yi,startCentered:o=!1}=e,i="";return i+=o&&Ai?"translate(".concat(t.x/Pa-n/2,"em, ").concat(t.y/Pa-r/2,"em) "):o?"translate(calc(-50% + ".concat(t.x/Pa,"em), calc(-50% + ").concat(t.y/Pa,"em)) "):"translate(".concat(t.x/Pa,"em, ").concat(t.y/Pa,"em) "),i+="scale(".concat(t.size/Pa*(t.flipX?-1:1),", ").concat(t.size/Pa*(t.flipY?-1:1),") "),i+="rotate(".concat(t.rotate,"deg) "),i}({transform:o,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const u=Na(c);u.length>0&&(s.style=u);const d=[];return d.push({tag:"span",attributes:s,children:[t]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}const{styles:Il}=Ha;function Bl(e){const t=e[0],n=e[1],[r]=e.slice(4);let o=null;return o=Array.isArray(r)?{tag:"g",attributes:{class:"".concat(Ea.cssPrefix,"-").concat(xa.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Ea.cssPrefix,"-").concat(xa.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(Ea.cssPrefix,"-").concat(xa.PRIMARY),fill:"currentColor",d:r[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:t,height:n,icon:o}}const $l={found:!1,width:512,height:512};function zl(e,t){let n=t;return"fa"===t&&null!==Ea.styleDefault&&(t=gl()),new Promise(((r,o)=>{if("fa"===n){const n=hl(e)||{};e=n.iconName||e,t=n.prefix||t}if(e&&t&&Il[t]&&Il[t][e]){return r(Bl(Il[t][e]))}!function(e,t){ia||Ea.showMissingIcons||!e||console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}(e,t),r({...$l,icon:Ea.showMissingIcons&&e&&El("missingIconAbstract")||{}})}))}const Ml=()=>{},Fl=Ea.measurePerformance&&_i&&_i.mark&&_i.measure?_i:{mark:Ml,measure:Ml},Ul='FA "6.6.0"',Hl=e=>{Fl.mark("".concat(Ul," ").concat(e," ends")),Fl.measure("".concat(Ul," ").concat(e),"".concat(Ul," ").concat(e," begins"),"".concat(Ul," ").concat(e," ends"))};var Wl={begin:e=>(Fl.mark("".concat(Ul," ").concat(e," begins")),()=>Hl(e)),end:Hl};const ql=()=>{};function Vl(e){return"string"===typeof(e.getAttribute?e.getAttribute(Xi):null)}function Kl(e){return Pi.createElementNS("http://www.w3.org/2000/svg",e)}function Yl(e){return Pi.createElement(e)}function Gl(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{ceFn:n=("svg"===e.tag?Kl:Yl)}=t;if("string"===typeof e)return Pi.createTextNode(e);const r=n(e.tag);Object.keys(e.attributes||[]).forEach((function(t){r.setAttribute(t,e.attributes[t])}));return(e.children||[]).forEach((function(e){r.appendChild(Gl(e,{ceFn:n}))})),r}const Ql={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach((e=>{t.parentNode.insertBefore(Gl(e),t)})),null===t.getAttribute(Xi)&&Ea.keepOriginalSource){let e=Pi.createComment(function(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}(t));t.parentNode.replaceChild(e,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~Ra(t).indexOf(Ea.replacementClass))return Ql.replace(e);const r=new RegExp("".concat(Ea.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const e=n[0].attributes.class.split(" ").reduce(((e,t)=>(t===Ea.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e)),{toNode:[],toSvg:[]});n[0].attributes.class=e.toSvg.join(" "),0===e.toNode.length?t.removeAttribute("class"):t.setAttribute("class",e.toNode.join(" "))}const o=n.map((e=>Ka(e))).join("\n");t.setAttribute(Xi,""),t.innerHTML=o}};function Xl(e){e()}function Jl(e,t){const n="function"===typeof t?t:ql;if(0===e.length)n();else{let t=Xl;Ea.mutateApproach===ra&&(t=Ti.requestAnimationFrame||Xl),t((()=>{const t=!0===Ea.autoReplaceSvg?Ql.replace:Ql[Ea.autoReplaceSvg]||Ql.replace,r=Wl.begin("mutate");e.map(t),r(),n()}))}}let Zl=!1;function es(){Zl=!0}function ts(){Zl=!1}let ns=null;function rs(e){if(!Oi)return;if(!Ea.observeMutations)return;const{treeCallback:t=ql,nodeCallback:n=ql,pseudoElementsCallback:r=ql,observeMutationsRoot:o=Pi}=e;ns=new Oi((e=>{if(Zl)return;const o=gl();Aa(e).forEach((e=>{if("childList"===e.type&&e.addedNodes.length>0&&!Vl(e.addedNodes[0])&&(Ea.searchPseudoElements&&r(e.target),t(e.target)),"attributes"===e.type&&e.target.parentNode&&Ea.searchPseudoElements&&r(e.target.parentNode),"attributes"===e.type&&Vl(e.target)&&~ya.indexOf(e.attributeName))if("class"===e.attributeName&&function(e){const t=e.getAttribute?e.getAttribute(ea):null,n=e.getAttribute?e.getAttribute(ta):null;return t&&n}(e.target)){const{prefix:t,iconName:n}=yl(Ra(e.target));e.target.setAttribute(ea,t||o),n&&e.target.setAttribute(ta,n)}else(function(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(Ea.replacementClass)})(e.target)&&n(e.target)}))})),Li&&ns.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function os(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=void 0!==e.innerText?e.innerText.trim():"";let o=yl(Ra(e));return o.prefix||(o.prefix=gl()),t&&n&&(o.prefix=t,o.iconName=n),o.iconName&&o.prefix||(o.prefix&&r.length>0&&(o.iconName=function(e,t){return(ol[e]||{})[t]}(o.prefix,e.innerText)||fl(o.prefix,Qa(e.innerText))),!o.iconName&&Ea.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(o.iconName=e.firstChild.data)),o}function is(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:o}=os(e),i=function(e){const t=Aa(e.attributes).reduce(((e,t)=>("class"!==e.name&&"style"!==e.name&&(e[t.name]=t.value),e)),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return Ea.autoA11y&&(n?t["aria-labelledby"]="".concat(Ea.replacementClass,"-title-").concat(r||La()):(t["aria-hidden"]="true",t.focusable="false")),t}(e),a=jl("parseNodeAttributes",{},e);let l=t.styleParser?function(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce(((e,t)=>{const n=t.split(":"),r=n[0],o=n.slice(1);return r&&o.length>0&&(e[r]=o.join(":").trim()),e}),{})),n}(e):[];return{iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:Oa,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:i},...a}}const{styles:as}=Ha;function ls(e){const t="nest"===Ea.autoReplaceSvg?is(e,{styleParser:!1}):is(e);return~t.extra.classes.indexOf(va)?El("generateLayersText",e,t):El("generateSvgReplacementMutation",e,t)}let ss=new Set;function cs(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!Li)return Promise.resolve();const n=Pi.documentElement.classList,r=e=>n.add("".concat(na,"-").concat(e)),o=e=>n.remove("".concat(na,"-").concat(e)),i=Ea.autoFetchSvg?ss:aa.map((e=>"fa-".concat(e))).concat(Object.keys(as));i.includes("fa")||i.push("fa");const a=[".".concat(va,":not([").concat(Xi,"])")].concat(i.map((e=>".".concat(e,":not([").concat(Xi,"])")))).join(", ");if(0===a.length)return Promise.resolve();let l=[];try{l=Aa(e.querySelectorAll(a))}catch(u){}if(!(l.length>0))return Promise.resolve();r("pending"),o("complete");const s=Wl.begin("onTree"),c=l.reduce(((e,t)=>{try{const n=ls(t);n&&e.push(n)}catch(u){ia||"MissingIcon"===u.name&&console.error(u)}return e}),[]);return new Promise(((e,n)=>{Promise.all(c).then((n=>{Jl(n,(()=>{r("active"),r("complete"),o("pending"),"function"===typeof t&&t(),s(),e()}))})).catch((e=>{s(),n(e)}))}))}function us(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;ls(e).then((e=>{e&&Jl([e],t)}))}function ds(e){return function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=(t||{}).icon?t:Tl(t||{});let{mask:o}=n;return o&&(o=(o||{}).icon?o:Tl(o||{})),e(r,{...n,mask:o})}}aa.map((e=>{ss.add("fa-".concat(e))})),Object.keys(ca[Ri]).map(ss.add.bind(ss)),Object.keys(ca[Ni]).map(ss.add.bind(ss)),Object.keys(ca[Ii]).map(ss.add.bind(ss)),ss=[...ss];const fs=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{transform:n=Oa,symbol:r=!1,mask:o=null,maskId:i=null,title:a=null,titleId:l=null,classes:s=[],attributes:c={},styles:u={}}=t;if(!e)return;const{prefix:d,iconName:f,icon:p}=e;return Rl({type:"icon",...e},(()=>(Cl("beforeDOMElementCreation",{iconDefinition:e,params:t}),Ea.autoA11y&&(a?c["aria-labelledby"]="".concat(Ea.replacementClass,"-title-").concat(l||La()):(c["aria-hidden"]="true",c.focusable="false")),Dl({icons:{main:Bl(p),mask:o?Bl(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:f,transform:{...Oa,...n},symbol:r,title:a,maskId:i,titleId:l,extra:{attributes:c,styles:u,classes:s}}))))};var ps={mixout:()=>({icon:ds(fs)}),hooks:()=>({mutationObserverCallbacks:e=>(e.treeCallback=cs,e.nodeCallback=us,e)}),provides(e){e.i2svg=function(e){const{node:t=Pi,callback:n=()=>{}}=e;return cs(t,n)},e.generateSvgReplacementMutation=function(e,t){const{iconName:n,title:r,titleId:o,prefix:i,transform:a,symbol:l,mask:s,maskId:c,extra:u}=t;return new Promise(((t,d)=>{Promise.all([zl(n,i),s.iconName?zl(s.iconName,s.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then((s=>{let[d,f]=s;t([e,Dl({icons:{main:d,mask:f},prefix:i,iconName:n,transform:a,symbol:l,maskId:c,title:r,titleId:o,extra:u,watchable:!0})])})).catch(d)}))},e.generateAbstractIcon=function(e){let{children:t,attributes:n,main:r,transform:o,styles:i}=e;const a=Na(i);let l;return a.length>0&&(n.style=a),Ia(o)&&(l=El("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),t.push(l||r.icon),{children:t,attributes:n}}}},hs={mixout:()=>({layer(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{classes:n=[]}=t;return Rl({type:"layer"},(()=>{Cl("beforeDOMElementCreation",{assembler:e,params:t});let r=[];return e((e=>{Array.isArray(e)?e.map((e=>{r=r.concat(e.abstract)})):r=r.concat(e.abstract)})),[{tag:"span",attributes:{class:["".concat(Ea.cssPrefix,"-layers"),...n].join(" ")},children:r}]}))}})},gs={mixout:()=>({counter(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{title:n=null,classes:r=[],attributes:o={},styles:i={}}=t;return Rl({type:"counter",content:e},(()=>(Cl("beforeDOMElementCreation",{content:e,params:t}),function(e){const{content:t,title:n,extra:r}=e,o={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},i=Na(r.styles);i.length>0&&(o.style=i);const a=[];return a.push({tag:"span",attributes:o,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}({content:e.toString(),title:n,extra:{attributes:o,styles:i,classes:["".concat(Ea.cssPrefix,"-layers-counter"),...r]}}))))}})},ms={mixout:()=>({text(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{transform:n=Oa,title:r=null,classes:o=[],attributes:i={},styles:a={}}=t;return Rl({type:"text",content:e},(()=>(Cl("beforeDOMElementCreation",{content:e,params:t}),Nl({content:e,transform:{...Oa,...n},title:r,extra:{attributes:i,styles:a,classes:["".concat(Ea.cssPrefix,"-layers-text"),...o]}}))))}}),provides(e){e.generateLayersText=function(e,t){const{title:n,transform:r,extra:o}=t;let i=null,a=null;if(Ai){const t=parseInt(getComputedStyle(e).fontSize,10),n=e.getBoundingClientRect();i=n.width/t,a=n.height/t}return Ea.autoA11y&&!n&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,Nl({content:e.innerHTML,width:i,height:a,transform:r,title:n,extra:o,watchable:!0})])}}};const vs=new RegExp('"',"ug"),bs=[1105920,1112319],ys={FontAwesome:{normal:"fas",400:"fas"},"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"},"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"},"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},xs=Object.keys(ys).reduce(((e,t)=>(e[t.toLowerCase()]=ys[t],e)),{}),ws=Object.keys(xs).reduce(((e,t)=>{const n=xs[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e}),{});function ks(e,t){const n="".concat(Zi).concat(t.replace(":","-"));return new Promise(((r,o)=>{if(null!==e.getAttribute(n))return r();const i=Aa(e.children).filter((e=>e.getAttribute(Ji)===t))[0],a=Ti.getComputedStyle(e,t),l=a.getPropertyValue("font-family"),s=l.match(ba),c=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(i&&!s)return e.removeChild(i),r();if(s&&"none"!==u&&""!==u){const u=a.getPropertyValue("content");let d=function(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),o=isNaN(r)?"normal":r;return(xs[n]||{})[o]||ws[n]}(l,c);const{value:f,isSecondary:p}=function(e){const t=e.replace(vs,""),n=function(e,t){const n=e.length;let r,o=e.charCodeAt(t);return o>=55296&&o<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?1024*(o-55296)+r-56320+65536:o}(t,0),r=n>=bs[0]&&n<=bs[1],o=2===t.length&&t[0]===t[1];return{value:Qa(o?t[0]:t),isSecondary:r||o}}(u),h=s[0].startsWith("FontAwesome");let g=fl(d,f),m=g;if(h){const e=function(e){const t=al[e],n=fl("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}(f);e.iconName&&e.prefix&&(g=e.iconName,d=e.prefix)}if(!g||p||i&&i.getAttribute(ea)===d&&i.getAttribute(ta)===m)r();else{e.setAttribute(n,m),i&&e.removeChild(i);const a={iconName:null,title:null,titleId:null,prefix:null,transform:Oa,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}},{extra:l}=a;l.attributes[Ji]=t,zl(g,d).then((o=>{const i=Dl({...a,icons:{main:o,mask:ml()},prefix:d,iconName:m,extra:l,watchable:!0}),s=Pi.createElementNS("http://www.w3.org/2000/svg","svg");"::before"===t?e.insertBefore(s,e.firstChild):e.appendChild(s),s.outerHTML=i.map((e=>Ka(e))).join("\n"),e.removeAttribute(n),r()})).catch(o)}}else r()}))}function Ss(e){return Promise.all([ks(e,"::before"),ks(e,"::after")])}function js(e){return e.parentNode!==document.head&&!~oa.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ji)&&(!e.parentNode||"svg"!==e.parentNode.tagName)}function Cs(e){if(Li)return new Promise(((t,n)=>{const r=Aa(e.querySelectorAll("*")).filter(js).map(Ss),o=Wl.begin("searchPseudoElements");es(),Promise.all(r).then((()=>{o(),ts(),t()})).catch((()=>{o(),ts(),n()}))}))}var Es={hooks:()=>({mutationObserverCallbacks:e=>(e.pseudoElementsCallback=Cs,e)}),provides(e){e.pseudoElements2svg=function(e){const{node:t=Pi}=e;Ea.searchPseudoElements&&Cs(t)}}};let Ts=!1;var Ps={mixout:()=>({dom:{unwatch(){es(),Ts=!0}}}),hooks:()=>({bootstrap(){rs(jl("mutationObserverCallbacks",{}))},noAuto(){ns&&ns.disconnect()},watch(e){const{observeMutationsRoot:t}=e;Ts?ts():rs(jl("mutationObserverCallbacks",{observeMutationsRoot:t}))}})};const Os=e=>e.toLowerCase().split(" ").reduce(((e,t)=>{const n=t.toLowerCase().split("-"),r=n[0];let o=n.slice(1).join("-");if(r&&"h"===o)return e.flipX=!0,e;if(r&&"v"===o)return e.flipY=!0,e;if(o=parseFloat(o),isNaN(o))return e;switch(r){case"grow":e.size=e.size+o;break;case"shrink":e.size=e.size-o;break;case"left":e.x=e.x-o;break;case"right":e.x=e.x+o;break;case"up":e.y=e.y-o;break;case"down":e.y=e.y+o;break;case"rotate":e.rotate=e.rotate+o}return e}),{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0});var _s={mixout:()=>({parse:{transform:e=>Os(e)}}),hooks:()=>({parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=Os(n)),e}}),provides(e){e.generateAbstractTransformGrouping=function(e){let{main:t,transform:n,containerWidth:r,iconWidth:o}=e;const i={transform:"translate(".concat(r/2," 256)")},a="translate(".concat(32*n.x,", ").concat(32*n.y,") "),l="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),c={transform:"".concat(a," ").concat(l," ").concat(s)},u={transform:"translate(".concat(o/2*-1," -256)")};return{tag:"g",attributes:{...i},children:[{tag:"g",attributes:{...c},children:[{tag:t.icon.tag,children:t.icon.children,attributes:{...t.icon.attributes,...u}}]}]}}}};const Ls={x:0,y:0,width:"100%",height:"100%"};function As(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}var Rs={hooks:()=>({parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),r=n?yl(n.split(" ").map((e=>e.trim()))):ml();return r.prefix||(r.prefix=gl()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}),provides(e){e.generateAbstractMask=function(e){let{children:t,attributes:n,main:r,mask:o,maskId:i,transform:a}=e;const{width:l,icon:s}=r,{width:c,icon:u}=o,d=function(e){let{transform:t,containerWidth:n,iconWidth:r}=e;const o={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(32*t.x,", ").concat(32*t.y,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)");return{outer:o,inner:{transform:"".concat(i," ").concat(a," ").concat(l)},path:{transform:"translate(".concat(r/2*-1," -256)")}}}({transform:a,containerWidth:c,iconWidth:l}),f={tag:"rect",attributes:{...Ls,fill:"white"}},p=s.children?{children:s.children.map(As)}:{},h={tag:"g",attributes:{...d.inner},children:[As({tag:s.tag,attributes:{...s.attributes,...d.path},...p})]},g={tag:"g",attributes:{...d.outer},children:[h]},m="mask-".concat(i||La()),v="clip-".concat(i||La()),b={tag:"mask",attributes:{...Ls,id:m,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[f,g]},y={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:(x=u,"g"===x.tag?x.children:[x])},b]};var x;return t.push(y,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(m,")"),...Ls}}),{children:t,attributes:n}}}},Ds={provides(e){let t=!1;Ti.matchMedia&&(t=Ti.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const e=[],n={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:{...n,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const o={...r,attributeName:"opacity"},i={tag:"circle",attributes:{...n,cx:"256",cy:"364",r:"28"},children:[]};return t||i.children.push({tag:"animate",attributes:{...r,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...o,values:"1;0;1;1;0;1;"}}),e.push(i),e.push({tag:"path",attributes:{...n,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:t?[]:[{tag:"animate",attributes:{...o,values:"1;0;0;0;0;1;"}}]}),t||e.push({tag:"path",attributes:{...n,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...o,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},Ns={hooks:()=>({parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),r=null!==n&&(""===n||n);return e.symbol=r,e}})};!function(e,t){let{mixoutsTo:n}=t;xl=e,wl={},Object.keys(kl).forEach((e=>{-1===Sl.indexOf(e)&&delete kl[e]})),xl.forEach((e=>{const t=e.mixout?e.mixout():{};if(Object.keys(t).forEach((e=>{"function"===typeof t[e]&&(n[e]=t[e]),"object"===typeof t[e]&&Object.keys(t[e]).forEach((r=>{n[e]||(n[e]={}),n[e][r]=t[e][r]}))})),e.hooks){const t=e.hooks();Object.keys(t).forEach((e=>{wl[e]||(wl[e]=[]),wl[e].push(t[e])}))}e.provides&&e.provides(kl)}))}([Fa,ps,hs,gs,ms,Es,Ps,_s,Rs,Ds,Ns],{mixoutsTo:Ll});const Is=Ll.parse,Bs=Ll.icon;var $s=n(173),zs=n.n($s);function Ms(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Fs(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ms(Object(n),!0).forEach((function(t){Hs(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ms(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Us(e){return Us="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Us(e)}function Hs(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ws(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function qs(e){return function(e){if(Array.isArray(e))return Vs(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return Vs(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Vs(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Vs(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ks(e){return t=e,(t-=0)===t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var Ys=["style"];var Gs=!1;try{Gs=!0}catch(Mp){}function Qs(e){return e&&"object"===Us(e)&&e.prefix&&e.iconName&&e.icon?e:Is.icon?Is.icon(e):null===e?null:e&&"object"===Us(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function Xs(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Hs({},e,t):{}}var Js={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Zs=r.forwardRef((function(e,t){var n=Fs(Fs({},Js),e),r=n.icon,o=n.mask,i=n.symbol,a=n.className,l=n.title,s=n.titleId,c=n.maskId,u=Qs(r),d=Xs("classes",[].concat(qs(function(e){var t,n=e.beat,r=e.fade,o=e.beatFade,i=e.bounce,a=e.shake,l=e.flash,s=e.spin,c=e.spinPulse,u=e.spinReverse,d=e.pulse,f=e.fixedWidth,p=e.inverse,h=e.border,g=e.listItem,m=e.flip,v=e.size,b=e.rotation,y=e.pull,x=(Hs(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":o,"fa-bounce":i,"fa-shake":a,"fa-flash":l,"fa-spin":s,"fa-spin-reverse":u,"fa-spin-pulse":c,"fa-pulse":d,"fa-fw":f,"fa-inverse":p,"fa-border":h,"fa-li":g,"fa-flip":!0===m,"fa-flip-horizontal":"horizontal"===m||"both"===m,"fa-flip-vertical":"vertical"===m||"both"===m},"fa-".concat(v),"undefined"!==typeof v&&null!==v),Hs(t,"fa-rotate-".concat(b),"undefined"!==typeof b&&null!==b&&0!==b),Hs(t,"fa-pull-".concat(y),"undefined"!==typeof y&&null!==y),Hs(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(x).map((function(e){return x[e]?e:null})).filter((function(e){return e}))}(n)),qs((a||"").split(" ")))),f=Xs("transform","string"===typeof n.transform?Is.transform(n.transform):n.transform),p=Xs("mask",Qs(o)),h=Bs(u,Fs(Fs(Fs(Fs({},d),f),p),{},{symbol:i,title:l,titleId:s,maskId:c}));if(!h)return function(){var e;!Gs&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",u),null;var g=h.abstract,m={ref:t};return Object.keys(n).forEach((function(e){Js.hasOwnProperty(e)||(m[e]=n[e])})),ec(g[0],m)}));Zs.displayName="FontAwesomeIcon",Zs.propTypes={beat:zs().bool,border:zs().bool,beatFade:zs().bool,bounce:zs().bool,className:zs().string,fade:zs().bool,flash:zs().bool,mask:zs().oneOfType([zs().object,zs().array,zs().string]),maskId:zs().string,fixedWidth:zs().bool,inverse:zs().bool,flip:zs().oneOf([!0,!1,"horizontal","vertical","both"]),icon:zs().oneOfType([zs().object,zs().array,zs().string]),listItem:zs().bool,pull:zs().oneOf(["right","left"]),pulse:zs().bool,rotation:zs().oneOf([0,90,180,270]),shake:zs().bool,size:zs().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:zs().bool,spinPulse:zs().bool,spinReverse:zs().bool,symbol:zs().oneOfType([zs().bool,zs().string]),title:zs().string,titleId:zs().string,transform:zs().oneOfType([zs().string,zs().object]),swapOpacity:zs().bool};var ec=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof n)return n;var o=(n.children||[]).map((function(n){return e(t,n)})),i=Object.keys(n.attributes||{}).reduce((function(e,t){var r=n.attributes[t];switch(t){case"class":e.attrs.className=r,delete n.attributes.class;break;case"style":e.attrs.style=function(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n,r=t.indexOf(":"),o=Ks(t.slice(0,r)),i=t.slice(r+1).trim();return o.startsWith("webkit")?e[(n=o,n.charAt(0).toUpperCase()+n.slice(1))]=i:e[o]=i,e}),{})}(r);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[Ks(t)]=r}return e}),{attrs:{}}),a=r.style,l=void 0===a?{}:a,s=Ws(r,Ys);return i.attrs.style=Fs(Fs({},i.attrs.style),l),t.apply(void 0,[n.tag,Fs(Fs({},i.attrs),s)].concat(qs(o)))}.bind(null,r.createElement);const tc={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]};const nc={prefix:"far",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"]},rc={prefix:"far",iconName:"comment",icon:[512,512,[128489,61669],"f075","M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9l.3-.5z"]};function oc(e,t){return function(){return e.apply(t,arguments)}}const{toString:ic}=Object.prototype,{getPrototypeOf:ac}=Object,lc=(sc=Object.create(null),e=>{const t=ic.call(e);return sc[t]||(sc[t]=t.slice(8,-1).toLowerCase())});var sc;const cc=e=>(e=e.toLowerCase(),t=>lc(t)===e),uc=e=>t=>typeof t===e,{isArray:dc}=Array,fc=uc("undefined");const pc=cc("ArrayBuffer");const hc=uc("string"),gc=uc("function"),mc=uc("number"),vc=e=>null!==e&&"object"===typeof e,bc=e=>{if("object"!==lc(e))return!1;const t=ac(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},yc=cc("Date"),xc=cc("File"),wc=cc("Blob"),kc=cc("FileList"),Sc=cc("URLSearchParams"),[jc,Cc,Ec,Tc]=["ReadableStream","Request","Response","Headers"].map(cc);function Pc(e,t){let n,r,{allOwnKeys:o=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),dc(e))for(n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else{const r=o?Object.getOwnPropertyNames(e):Object.keys(e),i=r.length;let a;for(n=0;n<i;n++)a=r[n],t.call(null,e[a],a,e)}}function Oc(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const _c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:global,Lc=e=>!fc(e)&&e!==_c;const Ac=(Rc="undefined"!==typeof Uint8Array&&ac(Uint8Array),e=>Rc&&e instanceof Rc);var Rc;const Dc=cc("HTMLFormElement"),Nc=(e=>{let{hasOwnProperty:t}=e;return(e,n)=>t.call(e,n)})(Object.prototype),Ic=cc("RegExp"),Bc=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Pc(n,((n,o)=>{let i;!1!==(i=t(n,o,e))&&(r[o]=i||n)})),Object.defineProperties(e,r)},$c="abcdefghijklmnopqrstuvwxyz",zc="0123456789",Mc={DIGIT:zc,ALPHA:$c,ALPHA_DIGIT:$c+$c.toUpperCase()+zc};const Fc=cc("AsyncFunction"),Uc=(Hc="function"===typeof setImmediate,Wc=gc(_c.postMessage),Hc?setImmediate:Wc?((e,t)=>(_c.addEventListener("message",(n=>{let{source:r,data:o}=n;r===_c&&o===e&&t.length&&t.shift()()}),!1),n=>{t.push(n),_c.postMessage(e,"*")}))(`axios@${Math.random()}`,[]):e=>setTimeout(e));var Hc,Wc;const qc="undefined"!==typeof queueMicrotask?queueMicrotask.bind(_c):"undefined"!==typeof process&&process.nextTick||Uc,Vc={isArray:dc,isArrayBuffer:pc,isBuffer:function(e){return null!==e&&!fc(e)&&null!==e.constructor&&!fc(e.constructor)&&gc(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"===typeof FormData&&e instanceof FormData||gc(e.append)&&("formdata"===(t=lc(e))||"object"===t&&gc(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&pc(e.buffer),t},isString:hc,isNumber:mc,isBoolean:e=>!0===e||!1===e,isObject:vc,isPlainObject:bc,isReadableStream:jc,isRequest:Cc,isResponse:Ec,isHeaders:Tc,isUndefined:fc,isDate:yc,isFile:xc,isBlob:wc,isRegExp:Ic,isFunction:gc,isStream:e=>vc(e)&&gc(e.pipe),isURLSearchParams:Sc,isTypedArray:Ac,isFileList:kc,forEach:Pc,merge:function e(){const{caseless:t}=Lc(this)&&this||{},n={},r=(r,o)=>{const i=t&&Oc(n,o)||o;bc(n[i])&&bc(r)?n[i]=e(n[i],r):bc(r)?n[i]=e({},r):dc(r)?n[i]=r.slice():n[i]=r};for(let o=0,i=arguments.length;o<i;o++)arguments[o]&&Pc(arguments[o],r);return n},extend:function(e,t,n){let{allOwnKeys:r}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return Pc(t,((t,r)=>{n&&gc(t)?e[r]=oc(t,n):e[r]=t}),{allOwnKeys:r}),e},trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let o,i,a;const l={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],r&&!r(a,e,t)||l[a]||(t[a]=e[a],l[a]=!0);e=!1!==n&&ac(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:lc,kindOfTest:cc,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(dc(e))return e;let t=e.length;if(!mc(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:Dc,hasOwnProperty:Nc,hasOwnProp:Nc,reduceDescriptors:Bc,freezeMethods:e=>{Bc(e,((t,n)=>{if(gc(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];gc(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return dc(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:Oc,global:_c,isContextDefined:Lc,ALPHABET:Mc,generateString:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:16,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Mc.ALPHA_DIGIT,n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&gc(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(vc(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=dc(e)?[]:{};return Pc(e,((e,t)=>{const i=n(e,r+1);!fc(i)&&(o[t]=i)})),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:Fc,isThenable:e=>e&&(vc(e)||gc(e))&&gc(e.then)&&gc(e.catch),setImmediate:Uc,asap:qc};function Kc(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}Vc.inherits(Kc,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Vc.toJSONObject(this.config),code:this.code,status:this.status}}});const Yc=Kc.prototype,Gc={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{Gc[e]={value:e}})),Object.defineProperties(Kc,Gc),Object.defineProperty(Yc,"isAxiosError",{value:!0}),Kc.from=(e,t,n,r,o,i)=>{const a=Object.create(Yc);return Vc.toFlatObject(e,a,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),Kc.call(a,e.message,t,n,r,o),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};const Qc=Kc;function Xc(e){return Vc.isPlainObject(e)||Vc.isArray(e)}function Jc(e){return Vc.endsWith(e,"[]")?e.slice(0,-2):e}function Zc(e,t,n){return e?e.concat(t).map((function(e,t){return e=Jc(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const eu=Vc.toFlatObject(Vc,{},null,(function(e){return/^is[A-Z]/.test(e)}));const tu=function(e,t,n){if(!Vc.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=Vc.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!Vc.isUndefined(t[e])}))).metaTokens,o=n.visitor||c,i=n.dots,a=n.indexes,l=(n.Blob||"undefined"!==typeof Blob&&Blob)&&Vc.isSpecCompliantForm(t);if(!Vc.isFunction(o))throw new TypeError("visitor must be a function");function s(e){if(null===e)return"";if(Vc.isDate(e))return e.toISOString();if(!l&&Vc.isBlob(e))throw new Qc("Blob is not supported. Use a Buffer instead.");return Vc.isArrayBuffer(e)||Vc.isTypedArray(e)?l&&"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function c(e,n,o){let l=e;if(e&&!o&&"object"===typeof e)if(Vc.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(Vc.isArray(e)&&function(e){return Vc.isArray(e)&&!e.some(Xc)}(e)||(Vc.isFileList(e)||Vc.endsWith(n,"[]"))&&(l=Vc.toArray(e)))return n=Jc(n),l.forEach((function(e,r){!Vc.isUndefined(e)&&null!==e&&t.append(!0===a?Zc([n],r,i):null===a?n:n+"[]",s(e))})),!1;return!!Xc(e)||(t.append(Zc(o,n,i),s(e)),!1)}const u=[],d=Object.assign(eu,{defaultVisitor:c,convertValue:s,isVisitable:Xc});if(!Vc.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!Vc.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+r.join("."));u.push(n),Vc.forEach(n,(function(n,i){!0===(!(Vc.isUndefined(n)||null===n)&&o.call(t,n,Vc.isString(i)?i.trim():i,r,d))&&e(n,r?r.concat(i):[i])})),u.pop()}}(e),t};function nu(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function ru(e,t){this._pairs=[],e&&tu(e,this,t)}const ou=ru.prototype;ou.append=function(e,t){this._pairs.push([e,t])},ou.toString=function(e){const t=e?function(t){return e.call(this,t,nu)}:nu;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const iu=ru;function au(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function lu(e,t,n){if(!t)return e;const r=n&&n.encode||au,o=n&&n.serialize;let i;if(i=o?o(t,n):Vc.isURLSearchParams(t)?t.toString():new iu(t,n).toString(r),i){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}const su=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){Vc.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},cu={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},uu={isBrowser:!0,classes:{URLSearchParams:"undefined"!==typeof URLSearchParams?URLSearchParams:iu,FormData:"undefined"!==typeof FormData?FormData:null,Blob:"undefined"!==typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},du="undefined"!==typeof window&&"undefined"!==typeof document,fu="object"===typeof navigator&&navigator||void 0,pu=du&&(!fu||["ReactNative","NativeScript","NS"].indexOf(fu.product)<0),hu="undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts,gu=du&&window.location.href||"http://localhost",mu={...e,...uu};const vu=function(e){function t(e,n,r,o){let i=e[o++];if("__proto__"===i)return!0;const a=Number.isFinite(+i),l=o>=e.length;if(i=!i&&Vc.isArray(r)?r.length:i,l)return Vc.hasOwnProp(r,i)?r[i]=[r[i],n]:r[i]=n,!a;r[i]&&Vc.isObject(r[i])||(r[i]=[]);return t(e,n,r[i],o)&&Vc.isArray(r[i])&&(r[i]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}(r[i])),!a}if(Vc.isFormData(e)&&Vc.isFunction(e.entries)){const n={};return Vc.forEachEntry(e,((e,r)=>{t(function(e){return Vc.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null};const bu={transitional:cu,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=Vc.isObject(e);o&&Vc.isHTMLForm(e)&&(e=new FormData(e));if(Vc.isFormData(e))return r?JSON.stringify(vu(e)):e;if(Vc.isArrayBuffer(e)||Vc.isBuffer(e)||Vc.isStream(e)||Vc.isFile(e)||Vc.isBlob(e)||Vc.isReadableStream(e))return e;if(Vc.isArrayBufferView(e))return e.buffer;if(Vc.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let i;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return tu(e,new mu.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return mu.isNode&&Vc.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((i=Vc.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return tu(i?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(Vc.isString(e))try{return(t||JSON.parse)(e),Vc.trim(e)}catch(Mp){if("SyntaxError"!==Mp.name)throw Mp}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||bu.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(Vc.isResponse(e)||Vc.isReadableStream(e))return e;if(e&&Vc.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(Mp){if(n){if("SyntaxError"===Mp.name)throw Qc.from(Mp,Qc.ERR_BAD_RESPONSE,this,null,this.response);throw Mp}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:mu.classes.FormData,Blob:mu.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Vc.forEach(["delete","get","head","post","put","patch"],(e=>{bu.headers[e]={}}));const yu=bu,xu=Vc.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),wu=Symbol("internals");function ku(e){return e&&String(e).trim().toLowerCase()}function Su(e){return!1===e||null==e?e:Vc.isArray(e)?e.map(Su):String(e)}function ju(e,t,n,r,o){return Vc.isFunction(r)?r.call(this,t,n):(o&&(t=n),Vc.isString(t)?Vc.isString(r)?-1!==t.indexOf(r):Vc.isRegExp(r)?r.test(t):void 0:void 0)}class Cu{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=ku(t);if(!o)throw new Error("header name must be a non-empty string");const i=Vc.findKey(r,o);(!i||void 0===r[i]||!0===n||void 0===n&&!1!==r[i])&&(r[i||t]=Su(e))}const i=(e,t)=>Vc.forEach(e,((e,n)=>o(e,n,t)));if(Vc.isPlainObject(e)||e instanceof this.constructor)i(e,t);else if(Vc.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))i((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&xu[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t);else if(Vc.isHeaders(e))for(const[a,l]of e.entries())o(l,a,n);else null!=e&&o(t,e,n);return this}get(e,t){if(e=ku(e)){const n=Vc.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(Vc.isFunction(t))return t.call(this,e,n);if(Vc.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=ku(e)){const n=Vc.findKey(this,e);return!(!n||void 0===this[n]||t&&!ju(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=ku(e)){const o=Vc.findKey(n,e);!o||t&&!ju(0,n[o],o,t)||(delete n[o],r=!0)}}return Vc.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!ju(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return Vc.forEach(this,((r,o)=>{const i=Vc.findKey(n,o);if(i)return t[i]=Su(r),void delete t[o];const a=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();a!==o&&delete t[o],t[a]=Su(r),n[a]=!0})),this}concat(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.constructor.concat(this,...t)}toJSON(e){const t=Object.create(null);return Vc.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&Vc.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((e=>{let[t,n]=e;return t+": "+n})).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e){const t=new this(e);for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return r.forEach((e=>t.set(e))),t}static accessor(e){const t=(this[wu]=this[wu]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=ku(e);t[r]||(!function(e,t){const n=Vc.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return Vc.isArray(e)?e.forEach(r):r(e),this}}Cu.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),Vc.reduceDescriptors(Cu.prototype,((e,t)=>{let{value:n}=e,r=t[0].toUpperCase()+t.slice(1);return{get:()=>n,set(e){this[r]=e}}})),Vc.freezeMethods(Cu);const Eu=Cu;function Tu(e,t){const n=this||yu,r=t||n,o=Eu.from(r.headers);let i=r.data;return Vc.forEach(e,(function(e){i=e.call(n,i,o.normalize(),t?t.status:void 0)})),o.normalize(),i}function Pu(e){return!(!e||!e.__CANCEL__)}function Ou(e,t,n){Qc.call(this,null==e?"canceled":e,Qc.ERR_CANCELED,t,n),this.name="CanceledError"}Vc.inherits(Ou,Qc,{__CANCEL__:!0});const _u=Ou;function Lu(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new Qc("Request failed with status code "+n.status,[Qc.ERR_BAD_REQUEST,Qc.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}const Au=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,i=0,a=0;return t=void 0!==t?t:1e3,function(l){const s=Date.now(),c=r[a];o||(o=s),n[i]=l,r[i]=s;let u=a,d=0;for(;u!==i;)d+=n[u++],u%=e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),s-o<t)return;const f=c&&s-c;return f?Math.round(1e3*d/f):void 0}};const Ru=function(e,t){let n,r,o=0,i=1e3/t;const a=function(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now();o=i,n=null,r&&(clearTimeout(r),r=null),e.apply(null,t)};return[function(){const e=Date.now(),t=e-o;for(var l=arguments.length,s=new Array(l),c=0;c<l;c++)s[c]=arguments[c];t>=i?a(s,e):(n=s,r||(r=setTimeout((()=>{r=null,a(n)}),i-t)))},()=>n&&a(n)]},Du=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,r=0;const o=Au(50,250);return Ru((n=>{const i=n.loaded,a=n.lengthComputable?n.total:void 0,l=i-r,s=o(l);r=i;e({loaded:i,total:a,progress:a?i/a:void 0,bytes:l,rate:s||void 0,estimated:s&&a&&i<=a?(a-i)/s:void 0,event:n,lengthComputable:null!=a,[t?"download":"upload"]:!0})}),n)},Nu=(e,t)=>{const n=null!=e;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Iu=e=>function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return Vc.asap((()=>e(...n)))},Bu=mu.hasStandardBrowserEnv?function(){const e=mu.navigator&&/(msie|trident)/i.test(mu.navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=Vc.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0},$u=mu.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const a=[e+"="+encodeURIComponent(t)];Vc.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),Vc.isString(r)&&a.push("path="+r),Vc.isString(o)&&a.push("domain="+o),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function zu(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const Mu=e=>e instanceof Eu?{...e}:e;function Fu(e,t){t=t||{};const n={};function r(e,t,n){return Vc.isPlainObject(e)&&Vc.isPlainObject(t)?Vc.merge.call({caseless:n},e,t):Vc.isPlainObject(t)?Vc.merge({},t):Vc.isArray(t)?t.slice():t}function o(e,t,n){return Vc.isUndefined(t)?Vc.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function i(e,t){if(!Vc.isUndefined(t))return r(void 0,t)}function a(e,t){return Vc.isUndefined(t)?Vc.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function l(n,o,i){return i in t?r(n,o):i in e?r(void 0,n):void 0}const s={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l,headers:(e,t)=>o(Mu(e),Mu(t),!0)};return Vc.forEach(Object.keys(Object.assign({},e,t)),(function(r){const i=s[r]||o,a=i(e[r],t[r],r);Vc.isUndefined(a)&&i!==l||(n[r]=a)})),n}const Uu=e=>{const t=Fu({},e);let n,{data:r,withXSRFToken:o,xsrfHeaderName:i,xsrfCookieName:a,headers:l,auth:s}=t;if(t.headers=l=Eu.from(l),t.url=lu(zu(t.baseURL,t.url),e.params,e.paramsSerializer),s&&l.set("Authorization","Basic "+btoa((s.username||"")+":"+(s.password?unescape(encodeURIComponent(s.password)):""))),Vc.isFormData(r))if(mu.hasStandardBrowserEnv||mu.hasStandardBrowserWebWorkerEnv)l.setContentType(void 0);else if(!1!==(n=l.getContentType())){const[e,...t]=n?n.split(";").map((e=>e.trim())).filter(Boolean):[];l.setContentType([e||"multipart/form-data",...t].join("; "))}if(mu.hasStandardBrowserEnv&&(o&&Vc.isFunction(o)&&(o=o(t)),o||!1!==o&&Bu(t.url))){const e=i&&a&&$u.read(a);e&&l.set(i,e)}return t},Hu="undefined"!==typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){const r=Uu(e);let o=r.data;const i=Eu.from(r.headers).normalize();let a,l,s,c,u,{responseType:d,onUploadProgress:f,onDownloadProgress:p}=r;function h(){c&&c(),u&&u(),r.cancelToken&&r.cancelToken.unsubscribe(a),r.signal&&r.signal.removeEventListener("abort",a)}let g=new XMLHttpRequest;function m(){if(!g)return;const r=Eu.from("getAllResponseHeaders"in g&&g.getAllResponseHeaders());Lu((function(e){t(e),h()}),(function(e){n(e),h()}),{data:d&&"text"!==d&&"json"!==d?g.response:g.responseText,status:g.status,statusText:g.statusText,headers:r,config:e,request:g}),g=null}g.open(r.method.toUpperCase(),r.url,!0),g.timeout=r.timeout,"onloadend"in g?g.onloadend=m:g.onreadystatechange=function(){g&&4===g.readyState&&(0!==g.status||g.responseURL&&0===g.responseURL.indexOf("file:"))&&setTimeout(m)},g.onabort=function(){g&&(n(new Qc("Request aborted",Qc.ECONNABORTED,e,g)),g=null)},g.onerror=function(){n(new Qc("Network Error",Qc.ERR_NETWORK,e,g)),g=null},g.ontimeout=function(){let t=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const o=r.transitional||cu;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new Qc(t,o.clarifyTimeoutError?Qc.ETIMEDOUT:Qc.ECONNABORTED,e,g)),g=null},void 0===o&&i.setContentType(null),"setRequestHeader"in g&&Vc.forEach(i.toJSON(),(function(e,t){g.setRequestHeader(t,e)})),Vc.isUndefined(r.withCredentials)||(g.withCredentials=!!r.withCredentials),d&&"json"!==d&&(g.responseType=r.responseType),p&&([s,u]=Du(p,!0),g.addEventListener("progress",s)),f&&g.upload&&([l,c]=Du(f),g.upload.addEventListener("progress",l),g.upload.addEventListener("loadend",c)),(r.cancelToken||r.signal)&&(a=t=>{g&&(n(!t||t.type?new _u(null,e,g):t),g.abort(),g=null)},r.cancelToken&&r.cancelToken.subscribe(a),r.signal&&(r.signal.aborted?a():r.signal.addEventListener("abort",a)));const v=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(r.url);v&&-1===mu.protocols.indexOf(v)?n(new Qc("Unsupported protocol "+v+":",Qc.ERR_BAD_REQUEST,e)):g.send(o||null)}))},Wu=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let n,r=new AbortController;const o=function(e){if(!n){n=!0,a();const t=e instanceof Error?e:this.reason;r.abort(t instanceof Qc?t:new _u(t instanceof Error?t.message:t))}};let i=t&&setTimeout((()=>{i=null,o(new Qc(`timeout ${t} of ms exceeded`,Qc.ETIMEDOUT))}),t);const a=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach((e=>{e.unsubscribe?e.unsubscribe(o):e.removeEventListener("abort",o)})),e=null)};e.forEach((e=>e.addEventListener("abort",o)));const{signal:l}=r;return l.unsubscribe=()=>Vc.asap(a),l}},qu=function*(e,t){let n=e.byteLength;if(!t||n<t)return void(yield e);let r,o=0;for(;o<n;)r=o+t,yield e.slice(o,r),o=r},Vu=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},Ku=(e,t,n,r)=>{const o=async function*(e,t){for await(const n of Vu(e))yield*qu(n,t)}(e,t);let i,a=0,l=e=>{i||(i=!0,r&&r(e))};return new ReadableStream({async pull(e){try{const{done:t,value:r}=await o.next();if(t)return l(),void e.close();let i=r.byteLength;if(n){let e=a+=i;n(e)}e.enqueue(new Uint8Array(r))}catch(t){throw l(t),t}},cancel:e=>(l(e),o.return())},{highWaterMark:2})},Yu="function"===typeof fetch&&"function"===typeof Request&&"function"===typeof Response,Gu=Yu&&"function"===typeof ReadableStream,Qu=Yu&&("function"===typeof TextEncoder?(Xu=new TextEncoder,e=>Xu.encode(e)):async e=>new Uint8Array(await new Response(e).arrayBuffer()));var Xu;const Ju=function(e){try{for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return!!e(...n)}catch(Mp){return!1}},Zu=Gu&&Ju((()=>{let e=!1;const t=new Request(mu.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})),ed=Gu&&Ju((()=>Vc.isReadableStream(new Response("").body))),td={stream:ed&&(e=>e.body)};var nd;Yu&&(nd=new Response,["text","arrayBuffer","blob","formData","stream"].forEach((e=>{!td[e]&&(td[e]=Vc.isFunction(nd[e])?t=>t[e]():(t,n)=>{throw new Qc(`Response type '${e}' is not supported`,Qc.ERR_NOT_SUPPORT,n)})})));const rd=async(e,t)=>{const n=Vc.toFiniteNumber(e.getContentLength());return null==n?(async e=>{if(null==e)return 0;if(Vc.isBlob(e))return e.size;if(Vc.isSpecCompliantForm(e)){const t=new Request(mu.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return Vc.isArrayBufferView(e)||Vc.isArrayBuffer(e)?e.byteLength:(Vc.isURLSearchParams(e)&&(e+=""),Vc.isString(e)?(await Qu(e)).byteLength:void 0)})(t):n},od=Yu&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:i,timeout:a,onDownloadProgress:l,onUploadProgress:s,responseType:c,headers:u,withCredentials:d="same-origin",fetchOptions:f}=Uu(e);c=c?(c+"").toLowerCase():"text";let p,h=Wu([o,i&&i.toAbortSignal()],a);const g=h&&h.unsubscribe&&(()=>{h.unsubscribe()});let m;try{if(s&&Zu&&"get"!==n&&"head"!==n&&0!==(m=await rd(u,r))){let e,n=new Request(t,{method:"POST",body:r,duplex:"half"});if(Vc.isFormData(r)&&(e=n.headers.get("content-type"))&&u.setContentType(e),n.body){const[e,t]=Nu(m,Du(Iu(s)));r=Ku(n.body,65536,e,t)}}Vc.isString(d)||(d=d?"include":"omit");const o="credentials"in Request.prototype;p=new Request(t,{...f,signal:h,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:o?d:void 0});let i=await fetch(p);const a=ed&&("stream"===c||"response"===c);if(ed&&(l||a&&g)){const e={};["status","statusText","headers"].forEach((t=>{e[t]=i[t]}));const t=Vc.toFiniteNumber(i.headers.get("content-length")),[n,r]=l&&Nu(t,Du(Iu(l),!0))||[];i=new Response(Ku(i.body,65536,n,(()=>{r&&r(),g&&g()})),e)}c=c||"text";let v=await td[Vc.findKey(td,c)||"text"](i,e);return!a&&g&&g(),await new Promise(((t,n)=>{Lu(t,n,{data:v,headers:Eu.from(i.headers),status:i.status,statusText:i.statusText,config:e,request:p})}))}catch(v){if(g&&g(),v&&"TypeError"===v.name&&/fetch/i.test(v.message))throw Object.assign(new Qc("Network Error",Qc.ERR_NETWORK,e,p),{cause:v.cause||v});throw Qc.from(v,v&&v.code,e,p)}}),id={http:null,xhr:Hu,fetch:od};Vc.forEach(id,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(Mp){}Object.defineProperty(e,"adapterName",{value:t})}}));const ad=e=>`- ${e}`,ld=e=>Vc.isFunction(e)||null===e||!1===e,sd=e=>{e=Vc.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){let t;if(n=e[i],r=n,!ld(n)&&(r=id[(t=String(n)).toLowerCase()],void 0===r))throw new Qc(`Unknown adapter '${t}'`);if(r)break;o[t||"#"+i]=r}if(!r){const e=Object.entries(o).map((e=>{let[t,n]=e;return`adapter ${t} `+(!1===n?"is not supported by the environment":"is not available in the build")}));let n=t?e.length>1?"since :\n"+e.map(ad).join("\n"):" "+ad(e[0]):"as no adapter specified";throw new Qc("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r};function cd(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new _u(null,e)}function ud(e){cd(e),e.headers=Eu.from(e.headers),e.data=Tu.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return sd(e.adapter||yu.adapter)(e).then((function(t){return cd(e),t.data=Tu.call(e,e.transformResponse,t),t.headers=Eu.from(t.headers),t}),(function(t){return Pu(t)||(cd(e),t&&t.response&&(t.response.data=Tu.call(e,e.transformResponse,t.response),t.response.headers=Eu.from(t.response.headers))),Promise.reject(t)}))}const dd="1.7.7",fd={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{fd[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const pd={};fd.transitional=function(e,t,n){function r(e,t){return"[Axios v1.7.7] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,i)=>{if(!1===e)throw new Qc(r(o," has been removed"+(t?" in "+t:"")),Qc.ERR_DEPRECATED);return t&&!pd[o]&&(pd[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,i)}};const hd={assertOptions:function(e,t,n){if("object"!==typeof e)throw new Qc("options must be an object",Qc.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],a=t[i];if(a){const t=e[i],n=void 0===t||a(t,i,e);if(!0!==n)throw new Qc("option "+i+" must be "+n,Qc.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new Qc("Unknown option "+i,Qc.ERR_BAD_OPTION)}},validators:fd},gd=hd.validators;class md{constructor(e){this.defaults=e,this.interceptors={request:new su,response:new su}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let e;Error.captureStackTrace?Error.captureStackTrace(e={}):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{n.stack?t&&!String(n.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(n.stack+="\n"+t):n.stack=t}catch(Mp){}}throw n}}_request(e,t){"string"===typeof e?(t=t||{}).url=e:t=e||{},t=Fu(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;void 0!==n&&hd.assertOptions(n,{silentJSONParsing:gd.transitional(gd.boolean),forcedJSONParsing:gd.transitional(gd.boolean),clarifyTimeoutError:gd.transitional(gd.boolean)},!1),null!=r&&(Vc.isFunction(r)?t.paramsSerializer={serialize:r}:hd.assertOptions(r,{encode:gd.function,serialize:gd.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let i=o&&Vc.merge(o.common,o[t.method]);o&&Vc.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=Eu.concat(i,o);const a=[];let l=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(l=l&&e.synchronous,a.unshift(e.fulfilled,e.rejected))}));const s=[];let c;this.interceptors.response.forEach((function(e){s.push(e.fulfilled,e.rejected)}));let u,d=0;if(!l){const e=[ud.bind(this),void 0];for(e.unshift.apply(e,a),e.push.apply(e,s),u=e.length,c=Promise.resolve(t);d<u;)c=c.then(e[d++],e[d++]);return c}u=a.length;let f=t;for(d=0;d<u;){const e=a[d++],t=a[d++];try{f=e(f)}catch(p){t.call(this,p);break}}try{c=ud.call(this,f)}catch(p){return Promise.reject(p)}for(d=0,u=s.length;d<u;)c=c.then(s[d++],s[d++]);return c}getUri(e){return lu(zu((e=Fu(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}Vc.forEach(["delete","get","head","options"],(function(e){md.prototype[e]=function(t,n){return this.request(Fu(n||{},{method:e,url:t,data:(n||{}).data}))}})),Vc.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(Fu(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}md.prototype[e]=t(),md.prototype[e+"Form"]=t(!0)}));const vd=md;class bd{constructor(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new _u(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new bd((function(t){e=t})),cancel:e}}}const yd=bd;const xd={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(xd).forEach((e=>{let[t,n]=e;xd[n]=t}));const wd=xd;const kd=function e(t){const n=new vd(t),r=oc(vd.prototype.request,n);return Vc.extend(r,vd.prototype,n,{allOwnKeys:!0}),Vc.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(Fu(t,n))},r}(yu);kd.Axios=vd,kd.CanceledError=_u,kd.CancelToken=yd,kd.isCancel=Pu,kd.VERSION=dd,kd.toFormData=tu,kd.AxiosError=Qc,kd.Cancel=kd.CanceledError,kd.all=function(e){return Promise.all(e)},kd.spread=function(e){return function(t){return e.apply(null,t)}},kd.isAxiosError=function(e){return Vc.isObject(e)&&!0===e.isAxiosError},kd.mergeConfig=Fu,kd.AxiosHeaders=Eu,kd.formToJSON=e=>vu(Vc.isHTMLForm(e)?new FormData(e):e),kd.getAdapter=sd,kd.HttpStatusCode=wd,kd.default=kd;const Sd=kd,jd=Sd.create({baseURL:"http://3.35.193.132:8080/api",headers:{"Content-Type":"application/json"}}),Cd=()=>{alert("\uc138\uc158\uc774 \ub9cc\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \ub85c\uadf8\uc778 \ud574\uc8fc\uc138\uc694."),localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),delete jd.defaults.headers.common.Authorization,window.location.href="/login"};jd.interceptors.response.use((e=>e),(async e=>{const t=e.config;if(e.response&&401===e.response.status&&!t._retry){t._retry=!0;const n=await(async()=>{try{const e=localStorage.getItem("refreshToken");if(!e)return Cd(),null;const t=await Sd.post("http://3.35.193.132:8080/api/v1/auth/user/refresh",{refreshToken:e});console.log("Response from refresh:",t);const n=t.data.accessToken;return n?(Ed(n),n):(Cd(),null)}catch(e){return console.error("Failed to refresh access token:",e),Cd(),null}})();if(n)return t.headers.Authorization=`Bearer ${n}`,jd(t)}return Promise.reject(e)})),jd.interceptors.request.use((e=>{const t=localStorage.getItem("accessToken");return t&&(e.headers.Authorization=`Bearer ${t}`),e}));const Ed=e=>{localStorage.setItem("accessToken",e),jd.defaults.headers.common.Authorization=`Bearer ${e}`},Td=jd,Pd=()=>{const e=rt(),[t,n]=(0,r.useState)([]);(0,r.useEffect)((()=>{Td.get("/v1/board/hotpost/board?page=0&size=2").then((e=>{console.log(e.data),n(e.data.data)})).catch((e=>{console.error("Error fetching hot posts:",e)}))}),[]);return(0,oi.jsx)("div",{children:(0,oi.jsxs)(xi.Container,{className:"hotpost",children:[(0,oi.jsx)(xi.Title,{children:(0,oi.jsx)("img",{src:"./global/images/mainpage/hotpost.png"})}),(0,oi.jsx)(xi.Text3,{children:(0,oi.jsx)("div",{children:"\uc2e4\uc2dc\uac04  \uc778\uae30 \uae00\uc744 \ud655\uc778\ud574\ubcf4\uc138\uc694!"})}),(0,oi.jsx)(xi.ShowMoreButton3,{children:(0,oi.jsx)(Ft,{to:"/posts",children:(0,oi.jsx)("img",{src:"./global/images/button/showmorebutton.png"})})}),(0,oi.jsxs)(xi.BookClubClip2,{children:[(0,oi.jsx)("img",{src:"./global/images/mainpage/bookclubclip1.png"}),(0,oi.jsx)("img",{src:"./global/images/mainpage/bookclubclip2.png"})]}),(0,oi.jsx)(xi.HP_Component,{children:t.slice(0,2).map(((t,n)=>{var o;return(0,oi.jsxs)(r.Fragment,{children:[(0,oi.jsx)(xi.Crown,{style:{left:1===n?"56%":"10%"},children:(0,oi.jsx)("img",{className:`crown${n+1}`,src:`./global/images/mainpage/Top${n+1}crown.png`})}),(0,oi.jsxs)(xi.Box,{onClick:()=>{return n=t.boardId,void e(`/posts/postdetail?boardId=${n}`);var n},children:[(0,oi.jsxs)(xi.FirstLine,{children:[(0,oi.jsx)("img",{src:"./global/images/mainpage/HOT.png"}),(0,oi.jsx)(xi.Title3,{children:t.title})]}),(0,oi.jsxs)(xi.UserInfo,{children:[(0,oi.jsx)("img",{src:t.profileImageUrl,alt:"User"}),(0,oi.jsx)("div",{children:t.nickname})]}),(0,oi.jsxs)(xi.InteractionContainer,{children:[(0,oi.jsxs)(xi.LikeContainer,{children:[(0,oi.jsx)(Zs,{icon:t.isLiked?tc:nc}),(0,oi.jsx)("div",{children:t.likeCount})]}),(0,oi.jsxs)(xi.CommentContainer,{children:[(0,oi.jsx)(Zs,{icon:rc}),(0,oi.jsx)("div",{children:t.commentCount})]}),(0,oi.jsx)(xi.TimeContainer,{children:(0,oi.jsx)("div",{style:{color:"#717171"},children:new Date(new Date(t.createdAt).getTime()+324e5).toLocaleString("ko-KR")})})]}),t.imageUrls[0]&&(0,oi.jsx)(xi.PostImage,{children:(0,oi.jsx)("img",{src:(null===(o=t.imageUrls)||void 0===o?void 0:o[0])||"https://via.placeholder.com/150",alt:"Post"})})]})]},t.boardId)}))})]})})},Od=()=>(0,oi.jsxs)("div",{children:[(0,oi.jsx)(fi,{}),(0,oi.jsx)(vi,{}),(0,oi.jsx)(bi,{}),(0,oi.jsx)(Pd,{})]}),_d={};_d.Background=Fo.div`
    /* width:100vw; 가로 스크롤바 생김*/
    width:100%;
    height:100%;
    /* height:100vh; */
    /* ${Ko} */
    
    

`,_d.LoginComponent=Fo.div`
    ${Ko};
    font-family: 'Pretandard';
    ${Xo};
    position:relative;
    width:600px;
    height:370px;
    margin:auto;
    transform: translate(0, 30%);
    border-radius: 1rem;
    background-color:white;  
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);

    @media (max-width: 1024px) {
        width: 400px; 
        height: 247px; 
    }

    @media (max-width: 768px) {
        width: 300px; 
        height: 185px; 
    }

    @media (max-width: 480px) {
        width: 270px; 
        height: 166.5px;
    }

    div:first-child {
        position: absolute;
        top:10%;
        font-size: ${qo.FONT_SIZE.h1};
        font-weight: 800;
        
    }
    div:nth-child(2) {
        position: absolute;
        top:20%;
        width:70%;
        height:2px;
        background-color: black;
    }
    div:nth-child(3) {
        position: absolute;
        top:40%;
        
    }
    div:nth-child(4) {
        position: absolute;
        top:50%;
        
    }
    span{
        font-family: 'TransformaScript';
    }
`,_d.kakaoLoginButton=Fo.div`
    position: absolute;
    top:70%;
    cursor: pointer;
    
    img {
        width: 25vw; 
        
        
    }
    
`,_d.SignUpText=Fo.div`
    position: absolute;
    top:88%;
    cursor: pointer;
    ${Zo}
    text-decoration: underline;
    color:#717171;
`,_d.NickNameComponent=Fo.div`
    ${Ko};
    font-family: 'Pretandard';
    position:relative;
    position:relative;
    width:600px;
    height:370px;
    margin:auto;
    transform: translate(0, 30%);
    /* transform: translate(0, -30%); */
    border-radius: 1rem;
    background-color:white;  
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);

    @media (max-width: 1024px) {
        width: 400px; 
        height: 247px; 
    }

    @media (max-width: 768px) {
        width: 300px; 
        height: 185px; 
    }

    @media (max-width: 480px) {
        width: 270px; 
        height: 166.5px;
    }
    border-radius: 20px;
    background-color:white;  
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
`,_d.Title=Fo.div`
    ${Ko};
     div:first-child {
        position: absolute;
        top:10%;
        ${Go};
    }
    div:nth-child(2) {
        position: absolute;
        top:20%;
        width:70%;
        height:2px;
        background-color: black;
    }

`,_d.NickName=Fo.div`
    width:70%;
    display:flex;
    ${Jo};
    font-weight: 700;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top:30%;
    input{
        position:relative;
        left: 5%;
        background-color: rgba(233, 232, 228, 0.55);  
        border: none;               
        padding: 1.5%;              
        width: 55%;                
        /* box-sizing: border-box;       */
        border-radius: 10px;          
        ${ei}
        outline: none;
    }
    div:nth-child(3) {
        ${ti};
        color:#717171;
        padding:2%;
        
    }
        

`,_d.SelectCategoryButton=Fo.div`
     ${Jo};
    font-weight: 700;
    border:2px solid ${qo.PALETTE.green};
    color:${qo.PALETTE.green};
    padding:2%;
    border-radius: 10px ;
    cursor: pointer;
`,_d.Category=Fo.div`
    width:70%;
    display:flex;
    ${Jo};
    font-weight: 700;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top:45%;

`,_d.SignUp=Fo.div`
    position: absolute;
    bottom:10%;
    width:70%;
    background-color: ${qo.PALETTE.green};
    text-align: center;
    ${Qo};
    color:white;
    border-radius: 5px;
    padding: 1.8%;
    cursor: pointer;
`,_d.CategoryButton=Fo.button`
    padding: 2px 7px;
    ${ti}
    background-color: ${e=>{let{isSelected:t}=e;return t?"green":"white"}};
    /* color: ${e=>{let{isSelected:t}=e;return t?"#fff":"#333"}}; */
    color:#717171;
    border: 1px solid #717171;
    
    border-radius: 30px;

    
`,_d.SelectedButton=Fo(_d.CategoryButton)`
    padding: 2px 7px;
    /* background-color:rgba(42, 168, 113, 0.09); */
    border: 1px solid #2AA871;
    color: #2AA871;
    /* border-radius: 10px; */
    cursor: pointer;
    margin:1%;
`,_d.SelectedContainer=Fo.div`
    position: relative;
    /* min-height: 35.7px; */
    /* padding: 1.5%;  */
    right:0.7%;
    display: flex;
    flex-wrap: wrap;
    width:55%;
    
    background-color: rgba(233, 232, 228, 0.55);
    /* background-color: white; */
    /* border:1px solid green; */
    border-radius: 10px; 
    height:1%;
    padding-left: 1%;
    overflow-y: auto;
    
`,_d.ErrorMessage=Fo.div`
    position: absolute;
    top:40%;
    left:35%;
    ${ti}
    color:#DF4545;
`,_d.ErrorMessage2=Fo.div`
    position: absolute;
    top:48.5%;
    left:35%;
    ${ti}
    color:#DF4545;
`;const Ld=_d,Ad=()=>{const e="9144a2e597b17e94ab66626e8690caf8",t="http://localhost:3000/api/v1/auth/oauth2/kakao/code";return(0,oi.jsx)(oi.Fragment,{children:(0,oi.jsx)(Ld.Background,{children:(0,oi.jsxs)(Ld.LoginComponent,{children:[(0,oi.jsx)("div",{children:"\ub85c\uadf8\uc778"}),(0,oi.jsx)("div",{}),(0,oi.jsx)("div",{children:"\uce74\uce74\uc624 \ub85c\uadf8\uc778\uc73c\ub85c \uc27d\uace0 \ube60\ub974\uac8c!"}),(0,oi.jsxs)("div",{children:[(0,oi.jsx)("span",{children:"Read Mate"})," \ud68c\uc6d0\uc774 \ub418\uc5b4 \ubd81\ud074\ub7fd\uc5d0 \ucc38\uc5ec\ud574\ubcf4\uc138\uc694!"]}),(0,oi.jsx)(Ld.kakaoLoginButton,{onClick:()=>{const n=`https://kauth.kakao.com/oauth/authorize?client_id=${e}&redirect_uri=${t}&response_type=code&state=get&prompt=login`;window.location.href=n},children:(0,oi.jsx)("img",{src:"./global/images/loginpage/kakaoLoginButton.png"})}),(0,oi.jsx)(Ld.SignUpText,{onClick:()=>{const n=`https://kauth.kakao.com/oauth/authorize?client_id=${e}&redirect_uri=${t}&response_type=code&state=post&prompt=login`;window.location.href=n},children:"\ub9ac\ub4dc\uba54\uc774\ud2b8\uc5d0 \ucc98\uc74c \uc624\uc168\ub098\uc694?"})]})})})},Rd=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"BestSeller",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20;const[o,i]=(0,r.useState)([]),[a,l]=(0,r.useState)(!0),[s,c]=(0,r.useState)(null);return(0,r.useEffect)((()=>{(async()=>{try{const r=await Sd.get("https://readmate-ridi.vercel.app//api/itemList",{params:{queryType:e,categoryId:t,maxResults:n}});console.log("API Response:",r.data);const o=r.data.object.item||[];i(Array.isArray(o)?o:[o])}catch(s){console.error("Error fetching books:",s),c("\ucc45 \ubaa9\ub85d\uc744 \uac00\uc838\uc624\ub294 \ub3d9\uc548 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.")}finally{l(!1)}})()}),[e,t,n]),{books:o,isLoading:a,error:s}},Dd={};Dd.Container=Fo.div`
    &.bestSeller {
      width: 100%;
      height: 100%;
      background-color: ${qo.PALETTE.background};
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    &.mostReview {
      width: 100%;
      height: 100%
      background-color: ${qo.PALETTE.background};
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    &.yourPicks {
      width: 100%;
      height: 100%;
      background-color: ${qo.PALETTE.background};
      display: flex;
      align-items: center;
      flex-direction: column;
    }
 
`,Dd.TitleHighlight=Fo.div`
    width: 100%;
    height: 100%;
    img {
        position: relative;
        width: 15%;
        margin-left: 10%;
        margin-top: 5%;
    }
`,Dd.TitleContainer=Fo.div`
    width: 100%;
    padding: 3% 10% 3% 10%;
    display: flex;
    justify-content: space-between;
    
`,Dd.BookListContainer=Fo.div`
  &.bestSeller{
    position: relative;
    top: 5vh;
    width: 80%;
    height: auto;
    border-radius: 0.5rem;
    padding: 2%;
    background-color: #CFDEC8;
    display: flex;
    justify-content: center;
    margin-bottom: 7%;
    }
    &.mostReview{
      position: relative;
      top: 5vh;
      width: 80%;
      height: auto;
      border-radius: 0.5rem;
      padding: 2%;
      background-color: #CFDEC8;
      display: flex;
      justify-content: center;
      margin-bottom: 7%;
    }
    &.yourPicks{
      position: relative;
      top: 5vh;
      width: 80%;
      height: auto;
      border-radius: 0.5rem;
      padding: 2%;
      background-color: #D9D9D9;
      display: flex;
      justify-content: center;
      margin-bottom: 7%;
      gap: 5%;
      
    }  
`,Dd.YourPicksContainer=Fo.div`
  width: 50%;
  height: 100%;
  background-color:#D9D9D9;
  display: flex;
  align-items: center;
  gap: 2vw;
  flex-direction: column;
  
  
`,Dd.BookList=Fo.div`
  &.bestSeller{
    padding: 1%;
    display: flex;
     /* 한 줄로 나열 */
    gap: 5%;
  }
  &.mostReview{
    padding: 1%;
    display: flex;
    gap: 1%;
  }
  &.yourPicks{
    padding: 1%;
    display: flex;
    gap: 1%;
    
  }
   `,Dd.BookSection=Fo.div`
  box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.1); /* drop shadow 효과 추가 */ 

  &.bestSeller {
    width: 33%;
    padding: 0.5%;
    border-radius: 2vw;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2%; /* 책 사이 간격 추가 */
  }
  &.mostReview {
    width: 20%;
    padding: 0.5%;
    border-radius: 2vw;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: row; 
    align-items: center;
    justify-content: center;
    margin-right: 2%; /* 책 사이 간격 추가 */
  }
  &.yourPicks {
    width: 100%;
    height: 100%;
    padding: 5%;
    border-radius: 2vw;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin: 0.5%; /* 책 사이 간격 추가 */
    gap: 5%;
  }  
`,Dd.BookImage=Fo.img`
  &.bestSeller{
    padding: 5%;
    width: 100%;
    border-radius: 2vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &.mostReview{
    padding: 5%;
    width: 100%;
    border-radius: 2vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }    
  &.yourPicks{
    width: 100%;
    height: 20vh;
    background-color: #D9D9D9;
    justify-content: center;
    align-items: center;
    display: flex;
  }
`,Dd.ImageSection=Fo.div`
  &.yourPicks{
  width: 20%;
  height: 20vh;
  background-color: #D9D9D9;
  justify-content: center;
  align-items: center;
  display: flex;
  }
  &.type2{
    width: 30%;
    height: 20vh;
    border-radius: 2vw;
    background-color: #D9D9D9;
    justify-content: center;
    align-items: center;
    display: flex;
  }  
`,Dd.BookCategoryList=Fo.div`
  width: 100%;
  margin-top: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 3%; /* 카테고리 간 간격 조정 */
`,Dd.BookCategory=Fo.div`
    padding: 0 0 0 0;
    margin: 0 0 0 0;
    font-size: 0.75vw;
    flex-direction: row;

    color: #2AA871;
    border:0.01vw solid #2AA871;
    border-radius: 0.25vw;  
    
`,Dd.BookContent=Fo.div`
  width: 100%;
  padding: 5% 5% 5% 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  font-weight: bold;
  font-family: 'Roboto';
  h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    padding: 0 0 0 0;
    margin: 0 0 10% 0;
    font-size: 1vw;
  }
  p {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75vw;
    color: #707070;
  }
  
`,Dd.Button=Fo.button`
  margin: 2%;
  background-color: transparent;
  border: transparent;
  cursor: pointer;
  
  &:disabled {
      
      opacity: 0.3; // Makes the button appear faded
      filter: grayscale(0%); // Makes the button grayscale when disabled
    }

    &:not(:disabled):hover {
      transform: scale(1.1); // Slight zoom effect on hover when enabled
    }
  `;const Nd=Dd,Id=()=>{const{books:e,isLoading:t,error:n}=Rd("BestSeller",0,21),[o,i]=(0,r.useState)(0);if(t)return(0,oi.jsx)("p",{children:"Loading..."});if(n)return(0,oi.jsx)("p",{children:n});if(!e||0===e.length)return(0,oi.jsx)("div",{children:"No books available."});const a=Math.ceil(e.length/3),l=3*o,s=e.slice(l,l+3);return(0,oi.jsx)("div",{children:(0,oi.jsxs)(Nd.Container,{className:"bestSeller",children:[(0,oi.jsx)(Nd.TitleHighlight,{children:(0,oi.jsx)("img",{src:"./global/images/librarypage/BESTSELLER.png",alt:"Library Board"})}),(0,oi.jsxs)(Nd.BookListContainer,{className:"bestSeller",children:[(0,oi.jsx)(Nd.Button,{onClick:()=>{i((e=>(e-1+a)%a))},disabled:0===o,children:(0,oi.jsx)("img",{src:"./global/images/librarypage/Left.png",alt:"Library Board"})}),(0,oi.jsx)(Nd.BookList,{className:"bestSeller",children:s.map(((e,t)=>{const{isbn13:n,cover:r,title:o,author:i,categoryName:a}=e,l=(e=>e.replace(/(\s*\(\uc9c0\uc740\uc774\)\s*|\s*\(\ubcf4\ud5d8\uc6a9\)\s*)/g,""))(i),s=["\uace0\ub4f1\ud559\uad50\ucc38\uace0\uc11c","\uace0\uc804","\uacfc\ud559","\uae08\uac15\uc0b0 \uc5ec\ud589 \uac00\ub294 \uc774\uc5d0\uac8c","\ub2ec\ub825/\uae30\ud0c0","\ub300\ud559\uad50\uc7ac/\uc804\ubb38\uc11c\uc801","\ub9cc\ud654","\uc0ac\ud68c\uacfc\ud559","\uc18c\uc124/\uc2dc/\ud76c\uace1","\uc218\ud5d8\uc11c/\uc790\uaca9\uc99d","\uc5b4\ub9b0\uc774","\uc5d0\uc138\uc774","\uc5ec\ud589","\uc5ed\uc0ac","\uc608\uc220/\ub300\uc911\ubb38\ud654","\uc678\uad6d\uc5b4","\uc720\uc544","\uc778\ubb38\ud559","\uc77c\ubcf8 \ub3c4\uc11c","\uc790\uae30\uacc4\ubc1c","\uc7a1\uc9c0","\uc7a5\ub974\uc18c\uc124","\uc804\uc9d1/\uc911\uace0\uc804\uc9d1","\uc885\uad50/\uc5ed\ud559","\uc88b\uc740\ubd80\ubaa8","\uc911\ud559\uad50\ucc38\uace0\uc11c","\uccad\uc18c\ub144","\uccad\uc18c\ub144_\ucd94\ucc9c\ub3c4\uc11c","\ucd08\ub4f1\ud559\uad50\ucc38\uace0\uc11c","\ucef4\ud4e8\ud130/\ubaa8\ubc14\uc77c","Gift","\uac00\uc694","\uad6d\uc545","\uc0c1\ud488\uad8c","\uc624\ub514\uc624\ud30c\uc77c","\uc6d4\ub4dc\ubba4\uc9c1","\uc7ac\uc988","\uc885\uad50/\uba85\uc0c1/\uae30\ud0c0","\uc99d\uc815\uc6a9 \uc74c\uc545\uc0c1\ud488\uad8c","\ud074\ub798\uc2dd","\ud31d","\ud574\uc678\uad6c\ub9e4","J-Pop","LP","O.S.T.","\uace0\uc804/\uba85\uc791","\uacf5\ud3ec/\uc2a4\ub9b4\ub7ec","\uad50\uc591/\ub2e4\ud050\uba58\ud130\ub9ac","\uad50\uc721\uc6a9 S/W","\ub4dc\ub77c\ub9c8/\ucf54\ubbf8\ub514","\ubc15\uc2a4\uc138\ud2b8","\ube14\ub8e8\ub808\uc774","\uc131\uc778","\uc560\ub2c8\uba54\uc774\uc158","\uc561\uc158/\uc5b4\ub4dc\ubca4\ucc98","\uc720\uc544/\uc544\ub3d9","\uc74c\uc545DVD","\uc81c\uc791\uad6d\uac00\ubcc4","\ucde8\ubbf8/\uc2a4\ud3ec\uce20","S.F/\ud310\ud0c0\uc9c0","TV \uc2dc\ub9ac\uc988","VCD","VHS (\ube44\ub514\uc624\ud14c\uc774\ud504)","\uac00\uc815/\uc6d0\uc608/\uc778\ud14c\ub9ac\uc5b4","\uac00\uc871/\uad00\uacc4","\uac74\uac15/\uc2a4\ud3ec\uce20","\uac74\ucd95/\ub514\uc790\uc778","\uac8c\uc784/\ud1a0\uc774","\uacf5\uc608/\ucde8\ubbf8/\uc218\uc9d1","\uad50\uc721/\uc790\ub8cc","\uae30\uc220\uacf5\ud559","\uae30\ud0c0","\uae30\ud0c0 \uc5b8\uc5b4\uad8c \ub3c4\uc11c","\ub2ec\ub825/\ub2e4\uc774\uc5b4\ub9ac/\uc5f0\uac10","\ub300\ub9cc\ub3c4\uc11c","\ub300\ud559\uad50\uc7ac","\ub3c5\uc77c \ub3c4\uc11c","\ubb38\uad6c/\ube44\ub3c4\uc11c","\ubc95\ub960","\uc218\ud5d8\uc11c","\uc2a4\ud398\uc778 \ub3c4\uc11c","\uc5b8\uc5b4\ud559","\uc624\ub514\uc624\ubd81","\uc694\ub9ac","\uc720\uba38","\uc758\ud559","\uc778\ubb38/\uc0ac\ud68c","\uc790\uc5f0\uacfc\ud559","\uc804\uae30/\uc790\uc11c\uc804","\uc885\uad50/\uba85\uc0c1/\uc810\uc220","\uc911\uad6d \ub3c4\uc11c","\ucef4\ud4e8\ud130","\ud55c\uad6d\uad00\ub828\ub3c4\uc11c","\ud574\uc678\uc7a1\uc9c0","ELT/\uc5b4\ud559/\uc0ac\uc804","19+","\uac00\uaca9\ub300\ubcc4 eBook","\uad6c\ud150\ubca0\ub974\ud06c \uc6d0\uc11c","\ub77c\uc774\ud2b8 \ub178\ubca8","\ub85c\ub9e8\uc2a4","\uc0ac\uc804/\uae30\ud0c0","\uc54c\ub77c\ub518\uc624\ub514\uc624\ubd81","\uc778\ubb3c/\ud3c9\uc804","\uc911\uace0\ub4f1\ucc38\uace0\uc11c","\ucd08\ub4f1\ucc38\uace0\uc11c","\ud310\ud0c0\uc9c0/\ubb34\ud611","\ud574\uc678\ub3c4\uc11c","BL"],c=a?Array.from(new Set(a.split(/>|\s+/).filter((e=>s.includes(e))))):[];return(0,oi.jsx)(Nd.BookSection,{className:"bestSeller",children:(0,oi.jsxs)(Mt,{to:`/books/bookinfo/${n}`,children:[(0,oi.jsx)(Nd.BookImage,{className:"bestSeller",src:r,alt:o,onError:e=>{e.target.src="/placeholder-book.png"}}),(0,oi.jsxs)(Nd.BookContent,{children:[(0,oi.jsx)("h3",{children:o}),(0,oi.jsx)("p",{children:l}),(0,oi.jsx)(Nd.BookCategoryList,{children:c.map(((e,t)=>(0,oi.jsx)(Nd.BookCategory,{children:e},t)))})]})]})},t)}))}),(0,oi.jsx)(Nd.Button,{onClick:()=>{i((e=>(e+1)%a))},disabled:o===a-1,children:(0,oi.jsx)("img",{src:"./global/images/librarypage/Right.png",alt:"Library Board"})})]})]})})},Bd=()=>{const{books:e,isLoading:t,error:n}=Rd("BlogBest",0,20),[o,i]=(0,r.useState)(0);if(t)return(0,oi.jsx)("p",{children:"Loading..."});if(n)return(0,oi.jsx)("p",{children:n});if(!e||0===e.length)return(0,oi.jsx)("div",{children:"No books available."});const a=Math.ceil(e.length/5),l=5*o,s=e.slice(l,l+5);return(0,oi.jsx)("div",{children:(0,oi.jsxs)(Nd.Container,{className:"mostReview",children:[(0,oi.jsx)(Nd.TitleHighlight,{children:(0,oi.jsx)("img",{src:"./global/images/librarypage/REVIEWS.png",alt:"Library Board"})}),(0,oi.jsxs)(Nd.BookListContainer,{className:"mostReview",children:[(0,oi.jsx)(Nd.Button,{onClick:()=>{i((e=>(e-1+a)%a))},disabled:0===o,children:(0,oi.jsx)("img",{src:"./global/images/librarypage/Left.png",alt:"Library Board"})}),(0,oi.jsx)(Nd.BookList,{className:"mostReview",children:s.map(((e,t)=>{const{isbn13:n,cover:r,title:o,author:i}=e,a=(e=>e.replace(/(\s*\(\uc9c0\uc740\uc774\)\s*|\s*\(\ubcf4\ud5d8\uc6a9\)\s*)/g,""))(i);return(0,oi.jsx)(Nd.BookSection,{className:"mostReview",children:(0,oi.jsxs)(Mt,{to:`/books/bookinfo/${n}`,children:[(0,oi.jsx)(Nd.BookImage,{className:"mostReview",src:r,alt:o,onError:e=>{e.target.src="/placeholder-book.png"}}),(0,oi.jsxs)(Nd.BookContent,{children:[(0,oi.jsx)("h3",{children:o}),(0,oi.jsx)("p",{children:a})]})]})},t)}))}),(0,oi.jsx)(Nd.Button,{onClick:()=>{i((e=>(e+1)%a))},disabled:o===a-1,children:(0,oi.jsx)("img",{src:"./global/images/librarypage/Right.png",alt:"Library Board"})})]})]})})},$d=e=>{let{categoryId1:t=1230,categoryId2:n=1108}=e;const{books:r,isLoading:o,error:i}=Rd("BestSeller",t,2),{books:a,isLoading:l,error:s}=Rd("BestSeller",n,2);if(o||l)return(0,oi.jsx)("p",{children:"Loading..."});if(i||s)return(0,oi.jsx)("p",{children:i||s});const c=e=>e.map(((e,t)=>{const{isbn13:n,cover:r,title:o,author:i,categoryName:a,description:l}=e,s=["\uace0\ub4f1\ud559\uad50\ucc38\uace0\uc11c","\uace0\uc804","\uacfc\ud559","\uae08\uac15\uc0b0 \uc5ec\ud589 \uac00\ub294 \uc774\uc5d0\uac8c","\ub2ec\ub825/\uae30\ud0c0","\ub300\ud559\uad50\uc7ac/\uc804\ubb38\uc11c\uc801","\ub9cc\ud654","\uc0ac\ud68c\uacfc\ud559","\uc18c\uc124/\uc2dc/\ud76c\uace1","\uc218\ud5d8\uc11c/\uc790\uaca9\uc99d","\uc5b4\ub9b0\uc774","\uc5d0\uc138\uc774","\uc5ec\ud589","\uc5ed\uc0ac","\uc608\uc220/\ub300\uc911\ubb38\ud654","\uc678\uad6d\uc5b4","\uc720\uc544","\uc778\ubb38\ud559","\uc77c\ubcf8 \ub3c4\uc11c","\uc790\uae30\uacc4\ubc1c","\uc7a1\uc9c0","\uc7a5\ub974\uc18c\uc124","\uc804\uc9d1/\uc911\uace0\uc804\uc9d1","\uc885\uad50/\uc5ed\ud559","\uc88b\uc740\ubd80\ubaa8","\uc911\ud559\uad50\ucc38\uace0\uc11c","\uccad\uc18c\ub144","\uccad\uc18c\ub144_\ucd94\ucc9c\ub3c4\uc11c","\ucd08\ub4f1\ud559\uad50\ucc38\uace0\uc11c","\ucef4\ud4e8\ud130/\ubaa8\ubc14\uc77c","Gift","\uac00\uc694","\uad6d\uc545","\uc0c1\ud488\uad8c","\uc624\ub514\uc624\ud30c\uc77c","\uc6d4\ub4dc\ubba4\uc9c1","\uc7ac\uc988","\uc885\uad50/\uba85\uc0c1/\uae30\ud0c0","\uc99d\uc815\uc6a9 \uc74c\uc545\uc0c1\ud488\uad8c","\ud074\ub798\uc2dd","\ud31d","\ud574\uc678\uad6c\ub9e4","J-Pop","LP","O.S.T.","\uace0\uc804/\uba85\uc791","\uacf5\ud3ec/\uc2a4\ub9b4\ub7ec","\uad50\uc591/\ub2e4\ud050\uba58\ud130\ub9ac","\uad50\uc721\uc6a9 S/W","\ub4dc\ub77c\ub9c8/\ucf54\ubbf8\ub514","\ubc15\uc2a4\uc138\ud2b8","\ube14\ub8e8\ub808\uc774","\uc131\uc778","\uc560\ub2c8\uba54\uc774\uc158","\uc561\uc158/\uc5b4\ub4dc\ubca4\ucc98","\uc720\uc544/\uc544\ub3d9","\uc74c\uc545DVD","\uc81c\uc791\uad6d\uac00\ubcc4","\ucde8\ubbf8/\uc2a4\ud3ec\uce20","S.F/\ud310\ud0c0\uc9c0","TV \uc2dc\ub9ac\uc988","VCD","VHS (\ube44\ub514\uc624\ud14c\uc774\ud504)","\uac00\uc815/\uc6d0\uc608/\uc778\ud14c\ub9ac\uc5b4","\uac00\uc871/\uad00\uacc4","\uac74\uac15/\uc2a4\ud3ec\uce20","\uac74\ucd95/\ub514\uc790\uc778","\uac8c\uc784/\ud1a0\uc774","\uacf5\uc608/\ucde8\ubbf8/\uc218\uc9d1","\uad50\uc721/\uc790\ub8cc","\uae30\uc220\uacf5\ud559","\uae30\ud0c0","\uae30\ud0c0 \uc5b8\uc5b4\uad8c \ub3c4\uc11c","\ub2ec\ub825/\ub2e4\uc774\uc5b4\ub9ac/\uc5f0\uac10","\ub300\ub9cc\ub3c4\uc11c","\ub300\ud559\uad50\uc7ac","\ub3c5\uc77c \ub3c4\uc11c","\ubb38\uad6c/\ube44\ub3c4\uc11c","\ubc95\ub960","\uc218\ud5d8\uc11c","\uc2a4\ud398\uc778 \ub3c4\uc11c","\uc5b8\uc5b4\ud559","\uc624\ub514\uc624\ubd81","\uc694\ub9ac","\uc720\uba38","\uc758\ud559","\uc778\ubb38/\uc0ac\ud68c","\uc790\uc5f0\uacfc\ud559","\uc804\uae30/\uc790\uc11c\uc804","\uc885\uad50/\uba85\uc0c1/\uc810\uc220","\uc911\uad6d \ub3c4\uc11c","\ucef4\ud4e8\ud130","\ud55c\uad6d\uad00\ub828\ub3c4\uc11c","\ud574\uc678\uc7a1\uc9c0","ELT/\uc5b4\ud559/\uc0ac\uc804","19+","\uac00\uaca9\ub300\ubcc4 eBook","\uad6c\ud150\ubca0\ub974\ud06c \uc6d0\uc11c","\ub77c\uc774\ud2b8 \ub178\ubca8","\ub85c\ub9e8\uc2a4","\uc0ac\uc804/\uae30\ud0c0","\uc54c\ub77c\ub518\uc624\ub514\uc624\ubd81","\uc778\ubb3c/\ud3c9\uc804","\uc911\uace0\ub4f1\ucc38\uace0\uc11c","\ucd08\ub4f1\ucc38\uace0\uc11c","\ud310\ud0c0\uc9c0/\ubb34\ud611","\ud574\uc678\ub3c4\uc11c","BL"],c=a?Array.from(new Set(a.split(/>|\s+/).filter((e=>s.includes(e))))):[];return(0,oi.jsxs)(Nd.BookSection,{className:"yourPicks",children:[(0,oi.jsx)(Nd.ImageSection,{className:"yourPicks",children:(0,oi.jsx)(Mt,{to:`/books/bookinfo/${n}`,children:(0,oi.jsx)(Nd.BookImage,{className:"yourPicks",src:r,alt:o,onError:e=>{e.target.src="/placeholder-book.png"}})})}),(0,oi.jsxs)(Nd.BookContent,{children:[(0,oi.jsx)("h3",{children:o}),(0,oi.jsx)("h3",{children:l}),(0,oi.jsx)("p",{children:i}),c.map(((e,t)=>(0,oi.jsx)("h5",{children:e},t)))]})]},t)}));return(0,oi.jsx)("div",{children:(0,oi.jsxs)(Nd.Container,{className:"yourPicks",children:[(0,oi.jsx)(Nd.TitleHighlight,{children:(0,oi.jsx)("img",{src:"./global/images/librarypage/yourPicks.png",alt:"Library Board"})}),(0,oi.jsxs)(Nd.BookListContainer,{className:"yourPicks",children:[(0,oi.jsx)(Nd.YourPicksContainer,{children:c(r)}),(0,oi.jsx)(Nd.YourPicksContainer,{children:c(a)})]})]})})},zd=()=>{const{books:e,isLoading:t,error:n}=Rd();return t?(0,oi.jsx)("div",{children:"Loading..."}):n?(0,oi.jsx)("div",{children:n}):(0,oi.jsxs)("div",{children:[(0,oi.jsx)(Id,{books:e}),(0,oi.jsx)(Bd,{books:e}),(0,oi.jsx)($d,{books:e})]})},Md={};Md.Container=Fo.div`
    &.bookDetails {
      width: 100%;
      height: 100%;
      background-color: ${qo.PALETTE.background};
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-bottom: 10%;
    }
    &.bookReviews {
      width: 100%;
      height: 100%;
      background-color: #CFDDC8;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    &.bookClubs {
      width: 100%;
      height: 100%;
      background-color: ${qo.PALETTE.background};
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-bottom: 10%;
    }
 
`,Md.TitleHighlight=Fo.div`
    &.bookDetails{
    width: 35%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5%;
    }
    &.bookReviews{
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5%;
    }
    &.bookClubs{
    width: 55%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5%;
    }
`,Md.TitleContainer=Fo.div`
     
    width: 80%; 
    display: flex;
    justify-content: flex;
    align-items: center;
    gap: 10%;
    margin-top: 10%;
    img {
        width: 100%;
        height: 100%;
    }
`,Md.TitleButtonContainer=Fo.div`
  &.bookDetails {
    width: 60%;
    display: flex;
    justify-content: flex-end;
    padding: 0% 5% 0% 5%;
    gap: 2%;
    /* top:5vh; */
  }  
  &.bookReviews {
    width: 60%;
    display: flex;
    justify-content: flex-end;
    padding: 0% 0% 0% 50%;
    gap: 2%;
  }
  &.bookClubs {
    width: 40%;
    display: flex;
    justify-content: flex-end;
    padding: 0% 0% 0% 30%;
  }  
    
    
`,Md.Button=Fo.button`
    width: 100%;
    border: none;
    cursor: pointer;
    background-color: transparent;
`,Md.TitleButton=Fo.div`
    display: flex;
    align-items: center;
    justify-content: center;
    ${Xo};
    width:100%;
    padding: 4%;
    border-radius: 0.5rem;
    color:white;
    background-color:#2AA871;
    border:2px solid ${qo.PALETTE.green};
    line-height: 130%;
    cursor: pointer;
    &.goToWrite{
        background-color: white;
        color:#2AA871;
        border:2px solid ${qo.PALETTE.green};

    }
`,Md.CardSection=Fo.div`
  &.BookInfoDetails{
  width: 80%;
  border-radius: 2vw;
  background-color: #FFFFFF;
  display: flex;
  margin-bottom: 1%;
  margin-top: 1%;
  }
  &.BookClubList {
    width: 80%;
    height: auto;
    justify-content: space-between;
    border-radius: 2vw;
    background-color: #D9D9D9;
  }
`,Md.Card=Fo.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 2vw;
  padding: 1%;
  background-color: #FFFFFF;
  
  &.BookClubList {
  margin: 3% 2% 3% 2%; /* 게시글 사이의 간격 */  
  }
  
`,Md.HeroSection=Fo.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 1%;
  padding: 1%;
`,Md.HeroSection2=Fo.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1%;
  gap: 2%;
  width: 100%;
`,Md.Image=Fo.img`
  
  width: 20%;
  display: flex;  
  align-items: center;
  justify-content: center;
  
`,Md.Image2=Fo.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20vh;
`,Md.HeroContent=Fo.div`

margin-right: 2%;    
padding-left: 2%;
font-weight: bold;
flex-direction: column;
justify-content: flex-start;
  
`,Md.HeroContent2=Fo.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  width: 900%;
`,Md.ContentTop=Fo.div`
  width: 100%;
  margin-bottom: 2%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Md.ContentTitle=Fo.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  ${Go};
  &.BookInfoDetails{
    display: inline;
    font-size: 1.5vw;
    background-color: #A5D1B6;
    padding: 1%;
    border-radius: 0.5vw;
  }
`,Md.ContentMore=Fo.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5%;
  ${Zo};  
`,Md.BookCategoryList=Fo.div`
  width: 70%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  gap: 3%; /* 카테고리 간 간격 조정 */
`,Md.BookCategory=Fo.div`
    
    flex-direction: row;
    padding: 1%;
    color: #2AA871;
    border:0.01vw solid #2AA871;
    border-radius: 0.5vw;  
    
`,Md.BookClubHost=Fo.div`
  
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #2AA871;
  ${ei};
`,Md.ContentMiddle=Fo.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 1%;
  ${ei};
`,Md.ContentFoot=Fo.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.5%;
  ${Zo};
`,Md.ContentPeriodContainer=Fo.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 0.5vh;
`,Md.ContentPeriod=Fo.div`
  display: flex;
  white-space: nowrap;
  background-color: #D9D9D9;
  border-radius: 0.3vw;
  align-items: center;
  
  ${Zo};
`,Md.ContentButtonContainer=Fo.div`
  justify-content: flex-end;
  display: flex;
  align-items: center;
  padding: 0% 0% 0% 0%;
`,Md.ContentSection=Fo.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 1%;
  padding: 2%;
  border-radius: 1.5vw;
  background-color:  ${qo.PALETTE.background};;
`,Md.PostList=Fo.div`
    width: 80%;
    margin-top: 1%;
    margin-bottom: 3%;
    display: flex;
    flex-direction: column;
    gap: 5vh; /* 게시글 사이의 간격 */
    margin-bottom: 5%;
`,Md.PostItem=Fo.div`
    padding: 1.5%;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 15px;
    position:relative;
`,Md.PostInfo=Fo.div`
    padding-left: 5%;
    /* width:50%; */
    ${ti}
    color: ${qo.PALETTE.darkGray};
    white-space: nowrap; 
`,Md.PostContainer=Fo.div`
    display: flex;
    justify-content: flex-start;
    width:100%;
`,Md.BookContainer=Fo.div`
    width:8%;
    line-height: 1.3;
`,Md.TextContainer=Fo.div`
    width:90%;
    display: flex;
    margin-left: 5%;
    padding:1% 0;
`,Md.BookImage=Fo.div`
    
    /* width:100%; */
    

    img{
        width:90px;
        height:140px;
        object-fit: cover;
        
        @media (max-width: 1024px) {
            width:50px;
            height:85px;
        }

        @media (max-width: 768px) {
            width:30px;
            height:50px;
        }

        @media (max-width: 480px) {
            width:20px;
            height:35px;
        }
    }
`,Md.TitleBody=Fo.div`
   
    
`,Md.PostTitle=Fo.div`
    ${Xo}; 
    font-weight: bold;
    color: #333;
    white-space: nowrap; 
`,Md.PostContent=Fo.div`
    ${ti}; 
    color: #717171;
    /* white-space: nowrap;  */
    overflow: hidden;
    text-overflow: ellipsis;
    max-height:40%;
    padding-left: 0.1%;
    padding-top: 1%;
    line-height: 1.3;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* 원하는 줄 수로 변경 가능 */
    -webkit-box-orient: vertical;
`,Md.UnderTitleContainer=Fo.div`
    display: flex;
    /* align-items: center;  */
    
    position:absolute;
    bottom:12.5%;
    
`,Md.LikeContainer=Fo.div`

    display: flex;
    align-items: center;
    gap: 5px; /* 아이콘과 좋아요 개수 사이 간격 */
    cursor: pointer;
    ${ti};
    color: ${qo.PALETTE.gray};
    svg {
        font-size: ${Zo};
        transition: color 0.3s ease;
    }
    span {
        font-size: 1rem;
        font-weight: bold;
    }

`,Md.CommentContainer=Fo.div`
  
    display: flex;
    align-items: center;
    margin-left: 7px;
    gap: 3px; /* 아이콘과 좋아요 개수 사이 간격 */
    font-size: ${ti};
    color: ${qo.PALETTE.gray};
    svg {
        font-size: ${Zo};
    }

`;const Fd=Md,Ud=e=>{let{bookDetails:t}=e;const[n,o]=(0,r.useState)([]),i=[{boardId:1,title:"\uc18c\ub144\uc774 \uc628\ub2e4\ub97c \uc77d\uace0",content:"\uccab \ubc88\uc9f8 \uc5d0\uc138\uc774 \ub0b4\uc6a9",userId:"user1",createdAt:"2024-09-30T20:09:59.989724",likeCount:10,comment:5,isbn13:"9788936434120",bookImage:"https://image.aladin.co.kr/product/33726/97/cover150/k442939542_2.jpg"},{boardId:2,title:"\ud55c\uac15\uc791\uac00\uc758 \ucc45",content:"\ub450 \ubc88\uc9f8 \uc5d0\uc138\uc774 \ub0b4\uc6a9",userId:"user2",createdAt:"2024-10-07T09:24:33.002345",likeCount:5,comment:5,isbn13:"9788936434120",bookImage:"https://image.aladin.co.kr/product/33726/97/cover150/k442939542_2.jpg"}],a=e=>{const t=new Date,n=new Date(e);return(new Date(t.getFullYear(),t.getMonth(),t.getDate())-new Date(n.getFullYear(),n.getMonth(),n.getDate()))/864e5<1?n.toLocaleString("ko-KR",{hour:"2-digit",minute:"2-digit",hour12:!1}):n.toLocaleString("ko-KR",{month:"numeric",day:"numeric"})};return(0,r.useEffect)((()=>{const e=i.filter((e=>e.isbn13===t.isbn13));o(e)}),[t.isbn13]),(0,oi.jsxs)(Fd.Container,{className:"bookReviews",children:[(0,oi.jsxs)(Fd.TitleContainer,{children:[(0,oi.jsx)(Fd.TitleHighlight,{className:"bookReviews",children:(0,oi.jsx)("img",{src:"./global/images/librarypage/REVIEWS.png"})}),(0,oi.jsx)(Fd.TitleButtonContainer,{className:"bookReviews",children:(0,oi.jsx)(Fd.Button,{children:(0,oi.jsx)("img",{src:"./global/images/librarypage/seeMore.png"})})})]}),0===n.length?(0,oi.jsx)("p",{children:"No reviews available for this book."}):(0,oi.jsx)(Fd.PostList,{children:n.map((e=>(0,oi.jsx)(Fd.PostItem,{children:(0,oi.jsxs)(Fd.PostContainer,{children:[(0,oi.jsx)(Fd.BookContainer,{children:(0,oi.jsx)(Fd.BookImage,{children:(0,oi.jsx)("img",{src:e.bookImage,alt:"BookCover"})})}),(0,oi.jsxs)(Fd.TextContainer,{children:[(0,oi.jsxs)(Fd.TitleBody,{children:[(0,oi.jsx)(Fd.PostTitle,{children:e.title}),(0,oi.jsx)(Fd.PostContent,{children:e.content})]}),(0,oi.jsxs)(Fd.UnderTitleContainer,{children:[(0,oi.jsxs)(Fd.LikeContainer,{children:[(0,oi.jsx)(Zs,{icon:e.isLiked?tc:nc,onClick:()=>(e.boardId,void e.isLiked)}),(0,oi.jsx)("div",{children:e.likeCount})]}),(0,oi.jsxs)(Fd.CommentContainer,{children:[(0,oi.jsx)(Zs,{icon:rc}),(0,oi.jsx)("div",{children:e.comment})]}),(0,oi.jsxs)(Fd.PostInfo,{children:[e.userId," | ",a(e.createdAt)]})]})]})]})},e.boardId)))})]})},Hd=e=>{let{bookDetails:t}=e;console.log("Rendering BookInfoDetails with:",t);const n=t.author.replace(/\s*\(\uc9c0\uc740\uc774\)\s*/,""),r=["\uace0\ub4f1\ud559\uad50\ucc38\uace0\uc11c","\uace0\uc804","\uacfc\ud559","\uae08\uac15\uc0b0 \uc5ec\ud589 \uac00\ub294 \uc774\uc5d0\uac8c","\ub2ec\ub825/\uae30\ud0c0","\ub300\ud559\uad50\uc7ac/\uc804\ubb38\uc11c\uc801","\ub9cc\ud654","\uc0ac\ud68c\uacfc\ud559","\uc18c\uc124/\uc2dc/\ud76c\uace1","\uc218\ud5d8\uc11c/\uc790\uaca9\uc99d","\uc5b4\ub9b0\uc774","\uc5d0\uc138\uc774","\uc5ec\ud589","\uc5ed\uc0ac","\uc608\uc220/\ub300\uc911\ubb38\ud654","\uc678\uad6d\uc5b4","\uc720\uc544","\uc778\ubb38\ud559","\uc77c\ubcf8 \ub3c4\uc11c","\uc790\uae30\uacc4\ubc1c","\uc7a1\uc9c0","\uc7a5\ub974\uc18c\uc124","\uc804\uc9d1/\uc911\uace0\uc804\uc9d1","\uc885\uad50/\uc5ed\ud559","\uc88b\uc740\ubd80\ubaa8","\uc911\ud559\uad50\ucc38\uace0\uc11c","\uccad\uc18c\ub144","\uccad\uc18c\ub144_\ucd94\ucc9c\ub3c4\uc11c","\ucd08\ub4f1\ud559\uad50\ucc38\uace0\uc11c","\ucef4\ud4e8\ud130/\ubaa8\ubc14\uc77c","Gift","\uac00\uc694","\uad6d\uc545","\uc0c1\ud488\uad8c","\uc624\ub514\uc624\ud30c\uc77c","\uc6d4\ub4dc\ubba4\uc9c1","\uc7ac\uc988","\uc885\uad50/\uba85\uc0c1/\uae30\ud0c0","\uc99d\uc815\uc6a9 \uc74c\uc545\uc0c1\ud488\uad8c","\ud074\ub798\uc2dd","\ud31d","\ud574\uc678\uad6c\ub9e4","J-Pop","LP","O.S.T.","\uace0\uc804/\uba85\uc791","\uacf5\ud3ec/\uc2a4\ub9b4\ub7ec","\uad50\uc591/\ub2e4\ud050\uba58\ud130\ub9ac","\uad50\uc721\uc6a9 S/W","\ub4dc\ub77c\ub9c8/\ucf54\ubbf8\ub514","\ubc15\uc2a4\uc138\ud2b8","\ube14\ub8e8\ub808\uc774","\uc131\uc778","\uc560\ub2c8\uba54\uc774\uc158","\uc561\uc158/\uc5b4\ub4dc\ubca4\ucc98","\uc720\uc544/\uc544\ub3d9","\uc74c\uc545DVD","\uc81c\uc791\uad6d\uac00\ubcc4","\ucde8\ubbf8/\uc2a4\ud3ec\uce20","S.F/\ud310\ud0c0\uc9c0","TV \uc2dc\ub9ac\uc988","VCD","VHS (\ube44\ub514\uc624\ud14c\uc774\ud504)","\uac00\uc815/\uc6d0\uc608/\uc778\ud14c\ub9ac\uc5b4","\uac00\uc871/\uad00\uacc4","\uac74\uac15/\uc2a4\ud3ec\uce20","\uac74\ucd95/\ub514\uc790\uc778","\uac8c\uc784/\ud1a0\uc774","\uacf5\uc608/\ucde8\ubbf8/\uc218\uc9d1","\uad50\uc721/\uc790\ub8cc","\uae30\uc220\uacf5\ud559","\uae30\ud0c0","\uae30\ud0c0 \uc5b8\uc5b4\uad8c \ub3c4\uc11c","\ub2ec\ub825/\ub2e4\uc774\uc5b4\ub9ac/\uc5f0\uac10","\ub300\ub9cc\ub3c4\uc11c","\ub300\ud559\uad50\uc7ac","\ub3c5\uc77c \ub3c4\uc11c","\ubb38\uad6c/\ube44\ub3c4\uc11c","\ubc95\ub960","\uc218\ud5d8\uc11c","\uc2a4\ud398\uc778 \ub3c4\uc11c","\uc5b8\uc5b4\ud559","\uc624\ub514\uc624\ubd81","\uc694\ub9ac","\uc720\uba38","\uc758\ud559","\uc778\ubb38/\uc0ac\ud68c","\uc790\uc5f0\uacfc\ud559","\uc804\uae30/\uc790\uc11c\uc804","\uc885\uad50/\uba85\uc0c1/\uc810\uc220","\uc911\uad6d \ub3c4\uc11c","\ucef4\ud4e8\ud130","\ud55c\uad6d\uad00\ub828\ub3c4\uc11c","\ud574\uc678\uc7a1\uc9c0","ELT/\uc5b4\ud559/\uc0ac\uc804","19+","\uac00\uaca9\ub300\ubcc4 eBook","\uad6c\ud150\ubca0\ub974\ud06c \uc6d0\uc11c","\ub77c\uc774\ud2b8 \ub178\ubca8","\ub85c\ub9e8\uc2a4","\uc0ac\uc804/\uae30\ud0c0","\uc54c\ub77c\ub518\uc624\ub514\uc624\ubd81","\uc778\ubb3c/\ud3c9\uc804","\uc911\uace0\ub4f1\ucc38\uace0\uc11c","\ucd08\ub4f1\ucc38\uace0\uc11c","\ud310\ud0c0\uc9c0/\ubb34\ud611","\ud574\uc678\ub3c4\uc11c","BL"],o=t.categoryName?Array.from(new Set(t.categoryName.split(/>|\s+/).filter((e=>r.includes(e))))):[],i=(e=>{const t=new Date(e);return`${t.getFullYear()}\ub144 ${String(t.getMonth()+1).padStart(2,"0")}\uc6d4 ${String(t.getDate()).padStart(2,"0")}\uc77c`})(t.pubDate);return t.pubDate=i,(0,oi.jsx)("div",{children:(0,oi.jsxs)(Fd.Container,{className:"bookDetails",children:[(0,oi.jsxs)(Fd.TitleContainer,{children:[(0,oi.jsx)(Fd.TitleHighlight,{className:"bookDetails",children:(0,oi.jsx)("img",{src:"./global/images/librarypage/bookdetails.png"})}),(0,oi.jsxs)(Fd.TitleButtonContainer,{className:"bookDetails",children:[(0,oi.jsx)(Fd.Button,{onClick:()=>{window.location.href=t.link},children:(0,oi.jsx)("img",{src:"./global/images/librarypage/Purchase.png"})}),(0,oi.jsx)(Fd.Button,{children:(0,oi.jsx)("img",{src:"./global/images/librarypage/writeEssay.png",onclick:!0})}),(0,oi.jsx)(Fd.Button,{children:(0,oi.jsx)("img",{src:"./global/images/librarypage/addbook.png"})})]})]}),(0,oi.jsx)(Fd.CardSection,{className:"BookInfoDetails",children:(0,oi.jsxs)(Fd.HeroSection,{children:[(0,oi.jsx)(Fd.Image,{src:t.cover,alt:t.title}),(0,oi.jsxs)(Fd.HeroContent,{children:[(0,oi.jsxs)(Fd.ContentTop,{children:[(0,oi.jsx)(Fd.ContentTitle,{className:"BookInfoDetails",children:t.title}),(0,oi.jsx)(Fd.ContentMore,{children:(0,oi.jsx)(Fd.BookCategoryList,{children:o.map(((e,t)=>(0,oi.jsx)(Fd.BookCategory,{children:e},t)))})})]}),(0,oi.jsxs)(Fd.ContentMiddle,{children:[n," \uc800  |  ",t.publisher,"  |  ",t.pubDate]}),(0,oi.jsxs)(Fd.ContentMiddle,{children:["\uc815\uac00  ",t.priceStandard,"\uc6d0"]}),(0,oi.jsx)(Fd.ContentFoot,{children:(0,oi.jsx)(Fd.ContentSection,{children:t.description})})]})]})})]})})},Wd=e=>{const[t,n]=(0,r.useState)(null),[o,i]=(0,r.useState)(!0),[a,l]=(0,r.useState)(null);return(0,r.useEffect)((()=>{i(!0),l(null),(async()=>{try{console.log(`Requesting book details for ISBN: ${e}`);const t=await Sd.get("https://readmate-ridi.vercel.app//api/itemLookUp",{params:{isbn:e}});if(console.log("API Response:",t.data),!t.data.object||!t.data.object.item)throw new Error("Invalid response structure");{const e=t.data.object.item;console.log("Book Data:",e),n(e)}i(!1)}catch(a){console.error("Error fetching book details:",a),l("\ucc45 \uc815\ubcf4\ub97c \uac00\uc838\uc624\ub294 \ub3d9\uc548 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4."),i(!1)}})()}),[e]),{bookDetails:t,isLoading:o,error:a}},qd=e=>(0,oi.jsxs)(Fd.Container,{className:"bookClubs",children:[(0,oi.jsxs)(Fd.TitleContainer,{children:[(0,oi.jsx)(Fd.TitleHighlight,{className:"bookClubs",children:(0,oi.jsx)("img",{src:"./global/images/librarypage/bookClubRecommendation.png"})}),(0,oi.jsx)(Fd.TitleButtonContainer,{className:"bookClubs",children:(0,oi.jsx)(Fd.Button,{children:(0,oi.jsx)("img",{src:"./global/images/librarypage/seeMore.png"})})})]}),(0,oi.jsx)(Fd.CardSection,{className:"BookClubList",children:[{title:"\uc5ec\ub984\uc758 \uae30\uc5b5\uc744 \ub9cc\ub4e4\uc5b4\ubcfc\uae4c\uc694?",text:'\uc5ec\ub984\uc740 \ucc45 \uc18d\uc5d0\uc11c \uc0c8\ub85c\uc6b4 \uc138\uacc4\ub97c \ubc1c\uacac\ud558\uace0, \uc78a\uc9c0 \ubabb\ud560 \uc21c\uac04\ub4e4\uc744 \ub9cc\ub4e4\uae30\uc5d0 \uc644\ubcbd\ud55c \uacc4\uc808\uc785\ub2c8\ub2e4. "\uc5ec\ub984\uc758 \uae30\uc5b5\uc744 \ub9cc\ub4e4\uc5b4 \ubcfc\uae4c\uc694?" \ubd81\ud074\ub7fd\uc740 \ub2e4\uc591\ud55c \uc7a5\ub974\uc758 \ucc45\uc744 \ud568\uaed8 \uc77d\uace0, \uc11c\ub85c\uc758 \uc0dd\uac01\uc744 \ub098\ub204\uba70 \ud2b9\ubcc4\ud55c \uc5ec\ub984\uc758 \ucd94\uc5b5\uc744 \ub9cc\ub4e4\uc5b4\uac00\ub294 \uacf5\uac04\uc785\ub2c8\ub2e4.',image:"/global/images/bookclubpage/DefaultLogo.png",categories:["\ud55c\uad6d\uc18c\uc124","SF"],host:"\ub3c5\uc11c\ud551"},{title:"\uc5ec\ub984\uc758 \uae30\uc5b5\uc744 \ub9cc\ub4e4\uc5b4\ubcfc\uae4c\uc694?",text:'\uc5ec\ub984\uc740 \ucc45 \uc18d\uc5d0\uc11c \uc0c8\ub85c\uc6b4 \uc138\uacc4\ub97c \ubc1c\uacac\ud558\uace0, \uc78a\uc9c0 \ubabb\ud560 \uc21c\uac04\ub4e4\uc744 \ub9cc\ub4e4\uae30\uc5d0 \uc644\ubcbd\ud55c \uacc4\uc808\uc785\ub2c8\ub2e4. "\uc5ec\ub984\uc758 \uae30\uc5b5\uc744 \ub9cc\ub4e4\uc5b4 \ubcfc\uae4c\uc694?" \ubd81\ud074\ub7fd\uc740 \ub2e4\uc591\ud55c \uc7a5\ub974\uc758 \ucc45\uc744 \ud568\uaed8 \uc77d\uace0, \uc11c\ub85c\uc758 \uc0dd\uac01\uc744 \ub098\ub204\uba70 \ud2b9\ubcc4\ud55c \uc5ec\ub984\uc758 \ucd94\uc5b5\uc744 \ub9cc\ub4e4\uc5b4\uac00\ub294 \uacf5\uac04\uc785\ub2c8\ub2e4.',image:"/global/images/bookclubpage/DefaultLogo.png",categories:["\ud55c\uad6d\uc18c\uc124","SF"],host:"\ub3c5\uc11c\ud551"}].map(((e,t)=>(0,oi.jsx)(Fd.Card,{className:"BookClubList",children:(0,oi.jsxs)(Fd.HeroSection2,{children:[(0,oi.jsx)(Fd.Image2,{src:e.image,alt:"Book Club Hero"}),(0,oi.jsxs)(Fd.HeroContent2,{children:[(0,oi.jsxs)(Fd.ContentTop,{children:[(0,oi.jsx)(Fd.ContentTitle,{children:e.title}),(0,oi.jsxs)(Fd.ContentMore,{children:[(0,oi.jsx)(Fd.BookCategoryList,{children:e.categories.map(((e,t)=>(0,oi.jsx)(Fd.BookCategory,{children:e},t)))}),(0,oi.jsxs)(Fd.BookClubHost,{children:["\ud074\ub7fd\uc7a5 | ",e.host]})]})]}),(0,oi.jsx)(Fd.ContentMiddle,{children:e.text}),(0,oi.jsxs)(Fd.ContentFoot,{children:[(0,oi.jsxs)(Fd.ContentPeriodContainer,{children:[(0,oi.jsx)(Fd.ContentPeriod,{children:"\uc9c4\ud589 \uae30\uac04 2024.10.31 ~ 2024.12.31"}),(0,oi.jsx)(Fd.ContentPeriod,{children:"\ubaa8\uc9d1 \uae30\uac04 2024.10.31 ~ 2024.11.11"})]}),(0,oi.jsx)(Fd.ContentButtonContainer,{children:(0,oi.jsx)(Fd.Button,{children:(0,oi.jsx)("img",{src:"./global/images/bookclubpage/JoinBookClub.png"})})})]})]})]})},t)))})]}),Vd=()=>{const{isbn:e}=function(){let{matches:e}=r.useContext(Je),t=e[e.length-1];return t?t.params:{}}(),{bookDetails:t,isLoading:n,error:o}=Wd(e);return n?(0,oi.jsx)("div",{children:"Loading..."}):o?(0,oi.jsx)("div",{children:o}):(0,oi.jsxs)("div",{children:[(0,oi.jsx)(Hd,{bookDetails:t}),(0,oi.jsx)(Ud,{bookDetails:t}),(0,oi.jsx)(qd,{bookDetails:t})]})},Kd={};Kd.Container=Fo.div`
    &.HotBookclub {
      width: 100%;
      height: 100%;
      background-color: ${qo.PALETTE.background};
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-bottom: 10%;
    }
    &.BookClubList {
      width: 100%;
      height: 100%;
      background-color: ${qo.PALETTE.background};
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-bottom: 10%;

    }
    &.Notice {
      width: 100%;
      height: 100%;
      background-color: ${qo.PALETTE.background};
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-bottom: 10%;
    }
 
`,Kd.TitleHighlight=Fo.div`
  &.main{  
  width: 35%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5%;
  }
  &.sub{ 
  display: flex;
  width: 25%;
  background-color: #86A789;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);
  ${Go};
  padding: 2%;
  }
`,Kd.TitleContainer=Fo.div`
  &.main{
    width: 80%; 
    display: flex;
    justify-content: flex;
    align-items: center;
    gap: 10%;
    margin-top: 10%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &.sub{
    margin-left:6%;
    width: 80%; 
    display: flex;
    justify-content: flex;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
    }
  }   
`,Kd.TitleButtonContainer=Fo.div`
    
  width: 65%;
  display: flex;
  justify-content: flex-end;
  padding: 0% 0% 0.5% 50%;
  gap: 1%; 
`,Kd.Button=Fo.button`
    width: 100%;
    border: none;
    cursor: pointer;
    background-color: transparent;
`,Kd.HeroSection=Fo.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1%;
  gap: 2%;
  width: 100%;
`,Kd.Image=Fo.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20vh;
`,Kd.HeroContent=Fo.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  width: 900%;
`,Kd.ContentTop=Fo.div`
  width: 100%;
  margin-bottom: 2%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Kd.ContentTitle=Fo.div`
  width:50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  ${Go};
`,Kd.ContentMore=Fo.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5%;
  ${Zo};  
`,Kd.BookCategoryList=Fo.div`
  width: 70%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  gap: 3%; /* 카테고리 간 간격 조정 */
`,Kd.BookCategory=Fo.div`
    
    flex-direction: row;
    padding: 1%;
    color: #2AA871;
    border:0.01vw solid #2AA871;
    border-radius: 0.5vw;  
    
`,Kd.BookClubHost=Fo.div`
  
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #2AA871;
  ${ei};
`,Kd.ContentMiddle=Fo.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2%;
  ${ei};
`,Kd.ContentFoot=Fo.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2%;
  ${Zo};
`,Kd.ContentPeriodContainer=Fo.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 0.5vh;
`,Kd.ContentPeriod=Fo.div`
  display: flex;
  white-space: nowrap;
  background-color: #D9D9D9;
  border-radius: 0.3vw;
  align-items: center;
  ${Zo};
`,Kd.ContentButtonContainer=Fo.div`
  justify-content: flex-end;
  display: flex;
  align-items: center;
  padding: 0% 0% 0% 0%;
`,Kd.CardSection=Fo.div`
  &.HotBookclub {
    width: 80%;
    height: auto;
    justify-content: space-between;
    border-radius: 4vw;
    background-color: #CFDDC8;
  }
  &.BookClubList {
    width: 80%;
    height: auto;
    justify-content: space-between;
    border-radius: 2vw;
    background-color: #D9D9D9;
  }
  
`,Kd.Card=Fo.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 2vw;
  padding: 1%;
  background-color: #FFFFFF;
  
  &.HotBookclub {
  margin: 3% 2% 3% 2%; /* 게시글 사이의 간격 */  
  }
  &.BookClubList {
  margin: 3% 2% 3% 2%; /* 게시글 사이의 간격 */  
  }
  
`,Kd.PaginationContainer=Fo.div`
    position: relative;
    display: flex;
    justify-content: center;
    left:45%;
    margin:5% 0;
    width:10%;
`,Kd.PageButton=Fo.button`
    ${Zo}
    padding: 0% 7%;
    border-radius: 50%;
    border: none;
    background-color: #D9D9D9;
    color: black;
    cursor: pointer;
     background-color: ${e=>{let{isActive:t}=e;return t?"#717171":"transparent"}};
    color: ${e=>{let{isActive:t}=e;return t?"white":"black"}};
    
`,Kd.DropdownContainer=Fo.div`
    width: 80%;
    margin-bottom: 2%;
    display: inline-block;
    ${Zo};
`,Kd.SelectedOption=Fo.div`
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1%;
    color: #717171;
    border: 1px solid #717171;
    background-color: #FFFFFF;
    border-radius: 0.5vw;
    cursor: pointer;

`,Kd.OptionsContainer=Fo.div`
    position: relative;
    width: 20%;
    border: 1px solid #717171;
    border-radius: 0.5vw;
    background-color: #ffffff;
    z-index: 1;
`,Kd.Option=Fo.div`
    padding: 3%;
    cursor: pointer;
    color: #717171;

    &:hover {
        background-color: #CFDDC8;
        color: #2AA871;
    }
`;const Yd={};Yd.Container=Fo.div`
  &.BookClubDetail {
    width: 100%;
    height: 100%;
    background-color: ${qo.PALETTE.background};
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10%;
  }
  &.BookList {
    width: 100%;
    height: 100%;
    background-color: ${qo.PALETTE.background};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 10%;
  }
  &.Challenge {
    width: 100%;
    height: 100%;
    background-color: ${qo.PALETTE.background};
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 10%;
  }
  &.JoinRequest {
    width: 100%;
    height: 100%;
    background-color: ${qo.PALETTE.background};
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10%;
  }
`,Yd.TitleHighlight=Fo.div`
  &.main {
    width: 35%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5%;
  }
  &.sub {
    display: flex;
    width: 25%;
    background-color: #86a789;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);
    ${Xo};
    padding: 2%; /* 사다리꼴 크게하기 */
  }
  &.sub2 {
    display: flex;
    width: 25%;
    background-color: #dcbc9e;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);
    ${Xo};
    padding: 1.5%; /* 사다리꼴 크게하기 */
  }
  &.sub3 {
    display: flex;
    width: 25%;
    background-color: #cfddc8;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);
    ${Xo};
    padding: 1.5%; /* 사다리꼴 크게하기 */
  }
  &.sub4 {
    display: flex;
    width: 100%;
    background-color: #transparent;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    ${Go};
    padding: 2%; /* 사다리꼴 크게하기 */
  }
`,Yd.TitleContainer=Fo.div`
  &.main {
    width: 80%;
    display: flex;
    justify-content: flex;
    align-items: center;
    gap: 10%;
    margin-top: 10%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &.sub {
    margin-left: 6%;
    width: 80%;
    display: flex;
    justify-content: flex;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &.sub4 {
    width: 80%;
    display: flex;
    justify-content: flex;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
    }
  }  
`,Yd.TitleButtonContainer=Fo.div`
  &.Host {
    width: 70%;
    display: flex;
    justify-content: flex-end;
    padding: 0% 0% 0% 35%;
    gap: 1%;
  }
  &.Member {
    width: 70%;
    display: flex;
    justify-content: flex-start;
    padding: 0% 0% 0% 45%;
    gap: 1%;
  }
  &.Guest {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 0% 0% 0% 70%;
    gap: 1%; 
  }
`,Yd.Button=Fo.button`
  width: 100%;
  border: none;
  cursor: pointer;
  background-color: transparent;
`,Yd.HeroSection=Fo.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3% 3% 1% 3%;
  width: 100%;
  gap: 5%;
  ${Zo};
`,Yd.Image=Fo.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 20vh;
  &.Challenge{
    width: 25%;
    height: 30vh;
  }
`,Yd.HeroContent=Fo.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
`,Yd.ContentTop=Fo.div`
  width: 100%;
  margin-bottom: 2%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Yd.ContentTitle=Fo.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  &.BookClubDetail {
    ${Zo};
  }

  &.BookList {
    ${ei};
  }

  &.Challenge {
    ${Go};
  }

  p {
    ${ti};
  }
`,Yd.ContentMore=Fo.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5%;
  ${Zo}; 
`,Yd.Content=Fo.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  ${ti}
  &.UnderLine{
    ${Go};
    position: relative;
    &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.5vw; /* 텍스트 아래에 언더라인 위치 */
    width: 100%;
    height:1vh; /* 언더라인 두께 */
    background-color: #CFDDC8; /* 언더라인 색상 */
    border-radius: 0.1vw;
    box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.1); /* drop shadow 효과 추가 */
    
  }  
`,Yd.BookCategoryList=Fo.div`
  width: 70%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 3%; /* 카테고리 간 간격 조정 */
`,Yd.BookCategory=Fo.div`
    
    flex-direction: row;
    padding: 1%;
    color: #2AA871;
    border:0.01vw solid #2AA871;
    border-radius: 0.5vw;  
    
`,Yd.BookClubHost=Fo.div`
  
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #2AA871;
  ${ei};
`,Yd.ContentMiddle=Fo.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1%;
  margin-bottom: 2%;
  &.BookClubDetail{
  ${ei};
  }
  &.BookList{
  ${ti};
  }
`,Yd.ContentFoot=Fo.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2%;
  ${Zo};
`,Yd.ContentPeriodContainer=Fo.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5vh;
  gap: 2%;
  &.BookClubDetail{
  width: 30%;
  flex-direction: column;
  }
  &.BookList{
  width: 100%;
  }
  &.Challenge{
  width: 100%;
  }
`,Yd.ContentPeriod=Fo.div`
  display: flex;
  white-space: nowrap;
  background-color: #D9D9D9;
  border-radius: 0.3vw;
  padding: 0.5% 1% 0.5% 1%;
  margin:2%;
  align-items: center;
  ${Zo};
  &.white{
  background-color: #ffffff;
  }
  &.Whiteh3{
  background-color: #ffffff;
  ${Zo};
  }
`,Yd.ContentButtonContainer=Fo.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0% 0% 0% 0%;
`,Yd.left=Fo.p`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 90%;
  margin-left: 7%;
  margin-bottom: 1%;
  ${Jo}
`,Yd.CardSection=Fo.div`
  &.BookClubDetail {
    width: 80%;
    height: auto;
    justify-content: space-between;
    border-radius: 4vw;
    background-color: #fafef8;
  }
  &.BookList {
    width: 80%;
    padding: 0.5%;
    border-radius: 4vw;
    background-color: #ded0b6;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2%; /* 책 사이 간격 추가 */
  }
  &.Challenge {
    width: 80%;
    height: auto;
    align-items: center;
    justify-content: center;
    border-radius: 4vw;
    background-color: #ffffff;
  }
  &.Challenger {
    width: 90%;
    padding: 0.5%;
    margin-bottom: 2%;
    margin-left:5%;
    border-radius: 3vw;
    border: 1px solid #999999;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    img{
      padding: 2%;
      width: 10%;
    }
  }
  &.JoinRequest{
  
    width: 80%;
    padding: 0.5%;
    border-radius: 4vw;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`,Yd.Card=Fo.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2vw;
  &.BookClubDetail {
    margin: 1%; /* 게시글 사이의 간격 */
    background-color: #fafef8;
  }
  &.BookList {
    margin: 3%; /* 게시글 사이의 간격 */
    background-color: #ffffff;
    box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.1); /* drop shadow 효과 추가 */ 

  }
  &.Challenge {
    margin: 0.1%; /* 게시글 사이의 간격 */
    background-color: #ffffff;
  }
  &.JoinRequest {
    padding: 3%;
    width: 100%;
    flex-direction: column;
    margin: 2%; /* 게시글 사이의 간격 */
    background-color: #ffffff;
  }  
`,Yd.Button=Fo.button`
  margin: 2%;
  background-color: transparent;
  border: transparent;
  cursor: pointer;

  &:disabled {
    opacity: 0.3; // Makes the button appear faded
    filter: grayscale(0%); // Makes the button grayscale when disabled
  }

  &:not(:disabled):hover {
    transform: scale(1.1); // Slight zoom effect on hover when enabled
  }
`,Yd.ProgressBarContainer=Fo.div`
  width: 100%;
  height: 4vh;
  background-color: #e0e0df;
  border-radius: 2vw;
  border: 1px solid #999999;
  overflow: hidden;
  position: relative;
  background-image: repeating-linear-gradient(
    90deg,
    #D9D9D9 0,
    #D9D9D9 0.9vw,
    #999999 1vw,
    #999999 1vw
  );
`,Yd.Filler=Fo.div`
  height: 100%;
  width: ${e=>e.percentage}%;
  background-color: transparent;
  text-align: right;
  position: relative;
  background-color: #FEBE98;

`,Yd.TextArea=Fo.textarea`
  width: 100%;
  height: 40px;
  border: none;
  resize: none;
  outline: none;
  scrollbar-width: none;
  background-color: transparent;
  ${Qo};
  color: #999999;
  &::placeholder {
    color: #999999;
  }
`,Yd.CharCount=Fo.div`
  width: 100%;
  height: auto;
  margin-top: 1%;
  text-align: right;
  color: #999999;
  ${Xo};
`,Yd.Label=Fo.span`
  color: transparent;
`;const Gd={};Gd.Container=Fo.div`
  &.BookClubMVP {
    width: 100%;
    height: 100%;
    background-color: ${qo.PALETTE.background};
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 5%;
  }
  &.PostList {
    width: 100%;
    height:auto;
    background-color:${qo.PALETTE.background};
    /* height:100%; */
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-x: hidden;
  }
  &.Noti {
    width: 100%;
    height: 100%;
    background-color: ${qo.PALETTE.background};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,Gd.TitleHighlight=Fo.div`
  &.main {
    width: 35%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5%;
  }
  &.sub {
    display: flex;
    width: 25%;
    background-color: #86a789;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);
    ${Go};
    padding: 2%; /* 사다리꼴 크게하기 */
  }
  &.sub2 {
    display: flex;
    width: 25%;
    background-color: #dcbc9e;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);
    ${Go};
    padding: 1.5%; /* 사다리꼴 크게하기 */
  }
  &.sub3 {
    display: flex;
    width: 25%;
    background-color: #cfddc8;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);
    ${Go};
    padding: 1.5%; /* 사다리꼴 크게하기 */
  }
`,Gd.TitleContainer=Fo.div`
  &.main {
    width: 80%;
    display: flex;
    justify-content: flex;
    align-items: center;
    gap: 10%;
    margin-top: 10%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &.sub {
    margin-left: 6%;
    width: 80%;
    display: flex;
    justify-content: flex;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
    }
  }
`,Gd.TitleButtonContainer=Fo.div`
  &.Host {
    width: 70%;
    display: flex;
    justify-content: flex-end;
    padding: 0% 0% 0% 35%;
    gap: 2%;
  }
  &.Guest {
    width: 70%;
    display: flex;
    justify-content: flex-start;
    padding: 0% 0% 0% 45%;
    gap: 6%;
  }
`,Gd.Button=Fo.button`
  width: 100%;
  border: none;
  cursor: pointer;
  background-color: transparent;
`,Gd.CardSection=Fo.div`
  &.BookClubMVP {
    width: 80%;
    height: auto;
    display: flex;
    justify-content: space-between;
    border-radius: 4vw;
    background-color: #fafef8;
  }
  &.BookList {
    width: 80%;
    padding: 0.5%;
    border-radius: 4vw;
    background-color: #ded0b6;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2%; /* 책 사이 간격 추가 */
  }
  &.Challenge {
    width: 80%;
    padding: 0.5%;
    border-radius: 4vw;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-right: 2%; /* 책 사이 간격 추가 */
  }
  &.Challenger {
    width: 95%;
    
    border-radius: 2vw;
    border: 1px solid #999999;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2%;
    img{
      padding: 2%;
    }
  }
`,Gd.Card=Fo.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2vw;
  &.BookClubDetail {
    margin: 1%; /* 게시글 사이의 간격 */
    background-color: #fafef8;
  }
  &.BookList {
    margin: 3%; /* 게시글 사이의 간격 */
    background-color: #ffffff;
  }
  &.Challenge {
    margin: 1%; /* 게시글 사이의 간격 */
    background-color: #ffffff;
  }
`,Gd.HeroSection=Fo.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5vw;
  padding: 1%;
  margin: 3%;
  margin-left: 10%;
  margin-right:10%;
  width: 30%;
  height: 15vh;
  background-color: #FFFFFF;
  position: relative;
`,Gd.Image=Fo.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 15vh;
  padding: 5%;
`,Gd.Rank=Fo.img`
  position: absolute;
  width: 30%;
  top: 0;
  left: 0;
`,Gd.PostList=Fo.div`
    width: 100%;
    margin-top: 2%;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    gap: 15px; /* 게시글 사이의 간격 */
`,Gd.PostItem=Fo.div`
    padding: 1.5%;
    padding-right: 7%;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    /* height:100%; */
    display: flex;
    flex-direction: column;
    gap: 15px;
    position: relative;
`,Gd.TitleBody=Fo.div`
    display: flex; 
    gap: 3px;
    flex-direction: column;
`,Gd.PostTitle=Fo.div`
    ${Qo}; 
    font-weight: bold;
    color: #333;
    display: flex;
    align-items: center;
    flex-direction: row;
    p{
      font-size: ${Xo};
      color: ${qo.PALETTE.gray};
      margin-left: 1%;
    }
     

`,Gd.PostContent=Fo.div`
    ${ti}; 
    padding-left: 0.5%;
    color: #717171;
    overflow: hidden;
    text-overflow: ellipsis;
    &.DoNowrap{
      white-space: nowrap;
    } 
`,Gd.UnderTitleContainer=Fo.div`
    display: flex;
    align-items: center; 
    position:relative;
    
`,Gd.PostInfo=Fo.div`
    padding-left: 1%;
    font-size: ${ti};
    color: ${qo.PALETTE.darkGray};
`,Gd.LikeContainer=Fo.div`

  display: flex;
  align-items: center;
  gap: 3px; /* 아이콘과 좋아요 개수 사이 간격 */
    cursor: pointer;
  font-size: ${ti};
  color: ${qo.PALETTE.gray};
  svg {
    font-size: ${Zo};
    transition: color 0.3s ease;
  }

  span {
    font-size: 1rem;
    font-weight: bold;
  }

`,Gd.CommentContainer=Fo.div`
  
  display: flex;
  align-items: center;
  margin-left: 7px;
  gap: 3px; /* 아이콘과 좋아요 개수 사이 간격 */
  font-size: ${ti};
  color: ${qo.PALETTE.gray};
  svg {
    font-size: ${Zo};
  }

`,Gd.NotificationContainer=Fo.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #999999;
  border-radius: 0.5rem;
  flex-direction: column;
`,Gd.NotiSection=Fo.div`
  width: 90%;
  margin-bottom:2%;
`,Gd.NotiTitle=Fo.div`
  width: 90%;
  font-weight: bold;
  display: flex;
  padding-top: 2%;
  flex-direction:row;
  color: #FFFFFF;
  position: relative;
  font-size: ${Xo};
`,Gd.NotiImg=Fo.img`
  display: flex;
  width: 2%;
  margin-right: 1%;
`,Gd.PostImage=Fo.div`
    position: absolute;
    border:none;
    right:1.5%;
    
    img{
        width:60px;
        height:55px;
        object-fit: cover;
        
        @media (max-width: 1024px) {
            width:35px;
            height:35px;
        }

        @media (max-width: 768px) {
            width:25px;
            height:25px;
        }

        @media (max-width: 480px) {
            width:20px;
            height:20px;
        }
    }
`,Gd.LatestPostContainer=Fo.div`
    top:5vh;
    width: 80%;
    height:auto;
    margin-bottom: 10%;
    padding: 2%;
    background-color: #D9D9D9;
    border-radius: 0.5rem;
  
`,Gd.PaginationContainer=Fo.div`
    position: relative;
    display: flex;
    justify-content: center;
    left:45%;
    /* gap: 10px; */
    margin:3% 0;
    width:10%;
`,Gd.PageButton=Fo.button`
    ${Zo}
    padding: 0% 7%;
    border-radius: 50%;
    border: none;
    background-color: #D9D9D9;
    color: black;
    cursor: pointer;
     background-color: ${e=>{let{isActive:t}=e;return t?"#717171":"transparent"}};
    color: ${e=>{let{isActive:t}=e;return t?"white":"black"}};
    
`;const Qd={};Qd.Container=Fo.div`
  &.BookClubCU {
    width: 100%;
    height: 100%;
    background-color: ${qo.PALETTE.background};
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 5%;
  }
  &.BookList {
    width: 100%;
    height: 100%;
    background-color: ${qo.PALETTE.background};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 5%;
  }
  
`,Qd.TitleHighlight=Fo.div`
  &.main {
    width: 35%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5%;
  }
  &.sub {
    display: flex;
    width: 25%;
    background-color: #86a789;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);
    ${Xo};
    padding: 2%; /* 사다리꼴 크게하기 */
  }
  &.sub2 {
    display: flex;
    width: 25%;
    background-color: #dcbc9e;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);
    ${Xo};
    padding: 1.5%; /* 사다리꼴 크게하기 */
  }
  &.sub3 {
    display: flex;
    width: 25%;
    background-color: #cfddc8;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);
    ${Xo};
    padding: 1.5%; /* 사다리꼴 크게하기 */
  }
  &.sub4 {
    display: flex;
    width: 100%;
    background-color: #transparent;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    ${Go};
    padding: 1%; /* 사다리꼴 크게하기 */
  }
  &.sub5 {
    display: flex;
    width: 25%;
    background-color: #transparent;
    overflow: hidden;
    align-items: center;
    justify-content: flex-start;
    ${Go};
    padding: 1.5%; /* 사다리꼴 크게하기 */
  }

`,Qd.TitleContainer=Fo.div`
  &.main {
    width: 80%;
    display: flex;
    justify-content: flex;
    align-items: center;
    gap: 10%;
    margin-top: 10%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &.sub {
    margin-left: 6%;
    width: 80%;
    display: flex;
    justify-content: flex;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &.sub4 {
    width: 80%;
    display: flex;
    justify-content: flex;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
    }
  }  
`,Qd.TitleButtonContainer=Fo.div`
  &.CU {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1% 3% 1% 70%;
    gap: 1%; 
  }
`,Qd.Button=Fo.button`
  width: 100%;
  border: none;
  cursor: pointer;
  background-color: transparent;
`,Qd.HeroSection=Fo.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3%;
  width: 100%;
  gap: 5%;
  ${Zo};
`,Qd.Image=Fo.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 20vh;
`,Qd.HeroContent=Fo.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
`,Qd.ContentTop=Fo.div`
  width: 100%;
  margin-bottom: 2%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Qd.ContentTitle=Fo.div`
  width:100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  &.BookClubDetail{
  ${Zo};
  }
  &.BookList{
  ${ei};
  }
  p {
  ${ti};
  }
`,Qd.ContentMore=Fo.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5%;
  ${Zo};  
`,Qd.BookCategoryList=Fo.div`
  width: 70%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 3%; /* 카테고리 간 간격 조정 */
`,Qd.BookCategory=Fo.div`
    
    flex-direction: row;
    padding: 1%;
    color: #2AA871;
    border:0.01vw solid #2AA871;
    border-radius: 0.5vw;  
    
`,Qd.BookClubHost=Fo.div`
  
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #2AA871;
  ${ei};
`,Qd.ContentMiddle=Fo.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1%;
  margin-bottom: 2%;
  &.BookClubDetail{
  ${ei};
  }
  &.BookList{
  ${ti};
  }
`,Qd.ContentFoot=Fo.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2%;
  ${Zo};
`,Qd.ContentPeriodContainer=Fo.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5vh;
  &.BookClubDetail{
  width: 30%;
  flex-direction: column;
  }
  &.BookList{
  width: 100%;
  }
`,Qd.ContentPeriod=Fo.div`
  display: flex;
  white-space: nowrap;
  background-color: #D9D9D9;
  border-radius: 0.3vw;
  align-items: center;
  ${ti};
  &.white{
  background-color: #ffffff;
  }
`,Qd.ContentButtonContainer=Fo.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0% 0% 0% 0%;
`,Qd.left=Fo.p`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 90%;
  
`,Qd.CardSection=Fo.div`
  &.BookClubCU {
    width: 80%;
    height: auto;
    justify-content: space-between;
    border-radius: 4vw;
    background-color: #fafef8;
  }
  &.BookList {
    width: 80%;
    padding: 0.5%;
    border-radius: 4vw;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2%; /* 책 사이 간격 추가 */
  }
  
`,Qd.Card=Fo.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2vw;
  &.BookClubCU {
    margin: 1%; /* 게시글 사이의 간격 */
    background-color: #fafef8;
  }
  &.BookList {
    margin: 3%; /* 게시글 사이의 간격 */
    background-color: #ffffff;
    box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.1); /* drop shadow 효과 추가 */ 
    }  
`,Qd.Button=Fo.button`
  margin: 1%;
  background-color: transparent;
  border: transparent;
  cursor: pointer;

  &:disabled {
    opacity: 0.3; // Makes the button appear faded
    filter: grayscale(0%); // Makes the button grayscale when disabled
  }

  &:not(:disabled):hover {
    transform: scale(1.1); // Slight zoom effect on hover when enabled
  }
`,Qd.Label=Fo.span`
  color: transparent;
`;const Xd=Qd,Jd=()=>(0,oi.jsxs)(Xd.Container,{className:"BookClubCU",children:[(0,oi.jsx)(Xd.TitleContainer,{className:"main",children:(0,oi.jsx)(Xd.TitleHighlight,{className:"main",children:(0,oi.jsx)("img",{src:"./global/images/bookclubpage/BookClub.png"})})}),(0,oi.jsx)(Xd.TitleContainer,{className:"sub4",children:(0,oi.jsx)(Xd.TitleHighlight,{className:"sub5",children:"\ubd81\ud074\ub7fd \uc0dd\uc131"})}),(0,oi.jsx)(Xd.CardSection,{className:"BookClubCU",children:(0,oi.jsx)(Xd.Card,{className:"BookClubCU",children:(0,oi.jsxs)(Xd.HeroSection,{children:[(0,oi.jsx)(Xd.Image,{className:"type1",src:"/global/images/bookclubpage/DefaultLogo.png",alt:"Book Club Hero"}),(0,oi.jsxs)(Xd.HeroContent,{children:[(0,oi.jsx)("h1",{children:"\ucc45 \ud55c \uad8c\uc73c\ub85c \ub5a0\ub098\ub294 \uc138\uacc4 \uc5ec\ud589, \ud568\uaed8 \ud574\uc694."}),(0,oi.jsx)("p",{children:"Join our community of book lovers! Discover new books, engage in thoughtful discussions, and connect with fellow readers from around the world."}),(0,oi.jsx)("a",{href:"#!",children:"Join Now!"})]})]})})})]}),Zd=()=>(0,oi.jsx)("div",{children:(0,oi.jsx)(Jd,{})});var ef=n(135),tf=n.n(ef);const nf={};nf.Container=Fo.div`
    width: 100%;
    height:auto;
    background-color:${qo.PALETTE.background};
    /* height:100%; */
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-x: hidden;
`,nf.TitleContainer=Fo.div`
     
    width: 100%;
    padding: 3% 10% 3% 10%;
    display: flex;
    justify-content: space-between;
               
`,nf.TitleHightlight=Fo.div`
   
    width:100%;
    height:100%;
    img{
        position:relative;
        
        width:15%;
        margin-left:10%;
        margin-top: 5%;
    }             
`,nf.TitleButtonContainer=Fo.div`
    display: flex;
    justify-content: space-between;
    width:20%;
    position: absolute;
    right:10%;
    /* top:5vh; */
`,nf.TitleButton=Fo.div`
    display: flex;
    align-items: center;
    justify-content: center;
    ${Xo};
    width:45%;
    padding: 4%;
    border-radius: 0.5rem;
    color:white;
    background-color:#2AA871;
    border:2px solid ${qo.PALETTE.green};
    line-height: 130%;
    cursor: pointer;
    &.goToWrite{
        background-color: white;
        color:#2AA871;
        border:2px solid ${qo.PALETTE.green};

    }
`,nf.HotPostContainer=Fo.div`
    position: relative;
    top:5vh;
    width:80%;
    height:auto;
    border-radius:0.5rem;
    /* border-radius: 20px; */
    padding:2%;
    background-color: #CFDEC8 ;
`,nf.HotPostTitle=Fo.div`
    position:relative;
    width:100%;
    height:100%;
    left: 10.5%;
    top:5.3vh;
    
    img{
        width:20%;
    }
    
`,nf.PostList=Fo.div`
    width: 100%;
    margin-top: 2%;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    gap: 15px; /* 게시글 사이의 간격 */
`,nf.PostItem=Fo.div`
    padding: 1.5%;
    padding-right: 7%;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    /* height:100%; */
    display: flex;
    flex-direction: column;
    gap: 15px;
    position: relative;
`,nf.TitleBody=Fo.div`
    display: flex;
    align-items: center;
    
`,nf.PostTitle=Fo.div`
    ${Xo}; 
    font-weight: bold;
    color: #333;
    white-space: nowrap; 
`,nf.PostContent=Fo.div`
    ${ti}; 
    padding-left: 0.5%;
    color: #717171;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis; 
`,nf.UnderTitleContainer=Fo.div`
    display: flex;
    align-items: center; 
    position:relative;
    
`,nf.PostInfo=Fo.div`
    padding-left: 1%;
    font-size: ${ti};
    color: ${qo.PALETTE.darkGray};
`,nf.LikeContainer=Fo.div`

  display: flex;
  align-items: center;
  gap: 3px; /* 아이콘과 좋아요 개수 사이 간격 */
    cursor: pointer;
  font-size: ${ti};
  color: ${qo.PALETTE.gray};
  svg {
    font-size: ${Zo};
    transition: color 0.3s ease;
  }

  span {
    font-size: 1rem;
    font-weight: bold;
  }

`,nf.CommentContainer=Fo.div`
  
  display: flex;
  align-items: center;
  margin-left: 7px;
  gap: 3px; /* 아이콘과 좋아요 개수 사이 간격 */
  font-size: ${ti};
  color: ${qo.PALETTE.gray};
  svg {
    font-size: ${Zo};
  }

`,nf.PostImage=Fo.div`
    position: absolute;
    border:none;
    right:1.5%;
    
    img{
        width:60px;
        height:55px;
        object-fit: cover;
        
        @media (max-width: 1024px) {
            width:35px;
            height:35px;
        }

        @media (max-width: 768px) {
            width:25px;
            height:25px;
        }

        @media (max-width: 480px) {
            width:20px;
            height:20px;
        }
    }
`,nf.LatestPostContainer=Fo.div`
    position: relative;
    top:5vh;
    width: 80%;
    height:auto;
    margin-top: 3%;
    margin-bottom: 10%;
    padding: 2%;
    background-color: #D9D9D9;
    border-radius: 0.5rem;
  
`,nf.PaginationContainer=Fo.div`
    position: relative;
    display: flex;
    justify-content: center;
    left:45%;
    /* gap: 10px; */
    margin:3% 0;
    width:10%;
`,nf.PageButton=Fo.button`
    ${Zo}
    padding: 0% 7%;
    border-radius: 50%;
    border: none;
    background-color: #D9D9D9;
    color: black;
    cursor: pointer;
     background-color: ${e=>{let{isActive:t}=e;return t?"#717171":"transparent"}};
    color: ${e=>{let{isActive:t}=e;return t?"white":"black"}};
    
`;const rf=nf,of=()=>{const e=rt(),[t,n]=(0,r.useState)([]),[o,i]=(0,r.useState)([]),[a,l]=(0,r.useState)(0),[s,c]=(0,r.useState)(1),[u,d]=(0,r.useState)(0);(0,r.useEffect)((()=>{var e;e=a,Td.get(`/v1/board/?boardType=BOARD&page=${e}&size=10`).then((e=>{i(e.data.data),c(e.data.pageInfo.totalPages)})).catch((e=>{console.error("Error fetching posts:",e)}))}),[a]);(0,r.useEffect)((()=>{Td.get("/v1/board/hotpost/board?page=0&size=3").then((e=>{console.log(e.data),n(e.data.data)})).catch((e=>{console.error("Error fetching hot posts:",e)}))}),[a]);const f=(e,t)=>{Td.post(`/v1/like/${e}`).then((()=>{i((n=>n.map((n=>n.boardId===e?{...n,isLiked:!t,likeCount:t?n.likeCount-1:n.likeCount+1}:n))))})).catch((e=>{console.error("Error liking post:",e)}))},p=5*u,h=Math.min(p+5,s),g=t=>{e(`/posts/postdetail?boardId=${t}`)};return(0,oi.jsx)("div",{children:(0,oi.jsxs)(rf.Container,{children:[(0,oi.jsx)(rf.TitleHightlight,{children:(0,oi.jsx)("img",{src:"./global/images/postpage/board.png",alt:"\uac8c\uc2dc\ud310"})}),(0,oi.jsx)(rf.TitleContainer,{children:(0,oi.jsxs)(rf.TitleButtonContainer,{children:[(0,oi.jsx)(rf.TitleButton,{className:"goToWrite",onClick:()=>{e("/posts/createPost")},children:"\uae00\uc4f0\uae30"}),(0,oi.jsx)(rf.TitleButton,{onClick:()=>{e("/posts/myPost")},children:"\ub0b4\uac00 \uc4f4 \uae00"})]})}),(0,oi.jsx)(rf.HotPostTitle,{children:(0,oi.jsx)("img",{src:"./global/images/postpage/hotboard.png",alt:"\uac8c\uc2dc\ud310"})}),(0,oi.jsx)(rf.HotPostContainer,{children:(0,oi.jsx)(rf.PostList,{children:t.map((e=>(0,oi.jsxs)(rf.PostItem,{onClick:()=>g(e.boardId),children:[(0,oi.jsxs)(rf.TitleBody,{children:[(0,oi.jsx)(rf.PostTitle,{children:e.title}),(0,oi.jsx)(rf.PostContent,{children:e.content})]}),e.imageUrls[0]&&(0,oi.jsx)(rf.PostImage,{children:(0,oi.jsx)("img",{src:e.imageUrls[0]})}),(0,oi.jsxs)(rf.UnderTitleContainer,{children:[(0,oi.jsxs)(rf.LikeContainer,{children:[(0,oi.jsx)(Zs,{icon:e.isLiked?tc:nc,onClick:()=>f(e.boardId,e.isLiked),style:{cursor:"pointer",color:e.isLiked?"red":"gray"}}),(0,oi.jsx)("div",{children:e.likeCount})]}),(0,oi.jsxs)(rf.CommentContainer,{children:[(0,oi.jsx)(Zs,{icon:rc}),(0,oi.jsx)("div",{children:e.commentCount})]}),(0,oi.jsxs)(rf.PostInfo,{children:[e.nickname," |"," ",new Date(new Date(e.createdAt).getTime()+324e5).toLocaleString("ko-KR")]})]})]},e.boardId)))})}),(0,oi.jsxs)(rf.LatestPostContainer,{children:[(0,oi.jsx)(rf.PostList,{children:o.map((e=>{var t;return(0,oi.jsxs)(rf.PostItem,{onClick:()=>g(e.boardId),children:[(0,oi.jsxs)(rf.TitleBody,{children:[(0,oi.jsx)(rf.PostTitle,{children:e.title}),(0,oi.jsx)(rf.PostContent,{children:e.content})]}),(null===(t=e.imageUrls)||void 0===t?void 0:t[0])&&(0,oi.jsx)(rf.PostImage,{children:(0,oi.jsx)("img",{src:e.imageUrls[0]})}),(0,oi.jsxs)(rf.UnderTitleContainer,{children:[(0,oi.jsxs)(rf.LikeContainer,{children:[(0,oi.jsx)(Zs,{icon:e.isLiked?tc:nc,onClick:()=>f(e.boardId,e.isLiked)}),(0,oi.jsx)("div",{children:e.likeCount})]}),(0,oi.jsxs)(rf.CommentContainer,{children:[(0,oi.jsx)(Zs,{icon:rc}),(0,oi.jsx)("div",{children:e.commentCount})]}),(0,oi.jsx)(rf.PostInfo,{children:new Date(new Date(e.createdAt).getTime()+324e5).toLocaleString("ko-KR")})]})]},e.boardId)}))}),(0,oi.jsxs)(rf.PaginationContainer,{children:[(0,oi.jsx)(rf.PageButton,{onClick:()=>{u>0&&(d(u-1),l(5*(u-1)))},disabled:0===u,children:"<"}),Array.from({length:h-p},((e,t)=>(0,oi.jsx)(rf.PageButton,{onClick:()=>{l(p+t)},isActive:a===p+t,children:p+t+1},t))),(0,oi.jsx)(rf.PageButton,{onClick:()=>{5*(u+1)<s&&(d(u+1),l(5*(u+1)))},disabled:h>=s,children:">"})]})]})]})})},af={};af.Container=Fo.div`
    width: 80%;
    height:auto;
    background-color: ${qo.PALETTE.background};
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    padding-bottom: 10%;
    margin: 0 auto;
`,af.TitleHightlight=Fo.div`
    position:relative;
    width:100%;
    height:100%;
    img{
        position:relative;
        /* top:-3vh; */
        width:25%;
        
    }          
`,af.TitleContainer=Fo.div`
    
    ${Yo};
    width: 100%;
    padding: 7% 10% 0% 10%;
               
`,af.UserInfo=Fo.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    line-height: 1.3;
`,af.UserName=Fo.div`
    ${Zo}
`,af.CreatedAt=Fo.div`
    ${ti}
    color:#717171;
`,af.TitleHeader=Fo.div`
    position:relative;
    top:7vh;
    padding:1%;
    display: flex;
    align-items: center;
    gap:1%;
    span{
        width:7%;
        img{
            width:100%;
            border-radius: 50%;
        }
    }
`,af.Line=Fo.div`
    width:80%;
    height:1px;
    margin-bottom: 2%;
    background-color:black;
    position:relative;
    top:7vh;
    &.line2{
        top:8vh;
    }
`,af.BodyContainer=Fo.div`
    width: 80%;
    /* height:120vh; */
    height: auto;
    min-height: 300px;
    background-color: white;
    margin-bottom: 2%;
    border-radius: 1rem;
    padding:2%;
    position:relative;
    top:7vh;
    
    
`,af.PostTitle=Fo.div`
    ${Go}
    padding-top: 1%;
    padding-bottom: 4%;
`,af.PostContent=Fo.div`
    ${Jo}
    max-width: 100%;
    padding-bottom: 4%;
    word-wrap: break-word; /* 텍스트가 박스를 벗어나지 않게 함 */
    word-break: break-word; /* 긴 단어가 있을 경우 자동으로 줄바꿈 */
    overflow-wrap: break-word; /* 텍스트가 영역을 넘어가면 줄바꿈 */
`,af.ImageContainer=Fo.div`
    width:100%;
    
    img{
        width:100%;
        padding-bottom: 1%;
    }
`,af.ButtonContainer=Fo.div`
    display: flex;
    width:25%;
    text-align: center;
    position:absolute;
    /* top:15%; */
    right:0%;
`,af.Button=Fo.div`
    ${Xo};
    width:80%;
    padding:4% 0;
    margin-left: 10%;
    ${Vo}
    height:70%;
    text-align: center;
    border-radius: 0.5rem;
    color:white;
    background-color:${qo.PALETTE.darkGray};
    cursor: pointer;
`,af.IconContainer=Fo.div`
    display: flex;
    align-self: flex-start;
    position:relative;
    top:7vh;
    left:10%;
    gap:8px;
`,af.LikeContainer=Fo.div`

    display: flex;
    align-items: center;
    gap: 3px; 
    cursor: pointer;
    font-size: ${Zo};
    svg {
    font-size: ${Qo};
    }
    svg path {
        fill: red ;
    }
    span {
        color: ${qo.PALETTE.gray};
        font-size: 1rem;
        font-weight: bold;
    }
    
`,af.CommentContainer=Fo.div`
  
  display: flex;
  align-items: center;
  margin-left: 7px;
  gap: 3px; 
  font-size: ${Zo};
  color: ${qo.PALETTE.gray};
  svg {
    font-size: ${Qo};
  }

`,af.DeleteAccountContainer=Fo.div`
    position:absolute;
    z-index: 999;
    width:50%;
    height:20%;
    min-height: 200px;
    background-color:#E9E8E4 ;
    left:25%;
    /* bottom:5%; */
    ${Ko}
    border-radius: 1rem;

`,af.DeleteText=Fo.div`
    position:absolute;
    top:30%;
    ${Xo}
    text-align: center;
`,af.DeleteButtonContainer=Fo.div`
    position:absolute;
    top:65%;    
    display: flex;
    justify-content: center;
    width:50%;
    position: absolute;

    /* right:10%; */
`,af.CancelButton=Fo.div`
    ${Vo}
    ${Xo};
    width:30%;
    padding: 2%;
    margin:3%;
    border-radius: 0.5rem;
    background-color: white;
    color:#2AA871;
    border:2px solid ${qo.PALETTE.green};
    line-height: 130%;
    cursor: pointer;
`,af.DeleteButton=Fo.div`
    ${Vo}
    ${Xo};
    width:30%;
    padding: 2%;
    margin:3%;
    border-radius: 0.5rem;
    color:white;
    background-color:#2AA871;
    border:2px solid ${qo.PALETTE.green};
    line-height: 130%;
    cursor: pointer;
`;const lf=af,sf={};sf.Background1=Fo.div`
    width:80%;
    height:auto;
    background-color:#D9D9D9;
    position: relative;
    top:7vh;
    margin-bottom: 2%;
    border-radius: 5px;
    padding:2%;
`,sf.Profile=Fo.div`
  display: flex;
  align-items: center;
  gap:0.5%;

  span{
    width:4%;
    img {
        width: 100%;
        /* border:0.5px solid black; */
        border-radius: 50%;
    
    }
  }
  
`,sf.Username=Fo.div`
  ${ti}
`,sf.CommentInput=Fo.textarea`
  width: 100%;
  height: 100px;
  padding: 8px;
  margin-top: 8px;
  border-radius: 5px;
  resize: none;
  outline: none;
  &::placeholder{
    ${ti}
  }
`,sf.CommentFooter=Fo.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2%;
`,sf.CharacterCount=Fo.div`
    color: #717171;
    ${ti}
`,sf.RegisterButton=Fo.button`
    padding: 0.5% 1.5%;
    color: white;
    background-color: #717171;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    ${ti}
`,sf.Background2=Fo.div`
    width:80%;
    height:auto;
    background-color: white;
    position: relative;
    top:7vh;
    margin-bottom: 2%;
    border-radius: 1rem;
    padding:2%;
`,sf.CommentToggle=Fo.div`
    display: flex;
    gap:2%;
    ${Jo}
    margin-bottom: 10px;
   
`,sf.CommentContainer=Fo.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,sf.Comment=Fo.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 10px;
  border-bottom: 1px solid #717171;
  span{
    width:5%;
    min-width: 5%;
    img{
        width:100%;
        border-radius: 50%;
    }
  }
  
`,sf.Username=Fo.div`
    ${Zo}
    font-weight: bold;
`,sf.CommentContent=Fo.div`
    ${Zo}
    margin-top: 4px;
    line-height: 1.2;
`,sf.CommentTime=Fo.div`
    ${ti}
    color:#717171;
    margin-top: 4px;
`,sf.ButtonContainer=Fo.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  text-align: center;
`,sf.Button=Fo.button`
  ${ti}
  padding: 0 7px;
  background-color: #717171;
  color: white;
  border: none;
  border-radius: 0.5vw;
  cursor: pointer;
  
 
`,sf.EditInput=Fo.textarea`
  ${Zo}
  width: 100%;
  /* min-height: 10px; 최소 높이 설정 */
  resize: none; 
  outline: none;
  /* overflow: hidden;  */
`,sf.PaginationContainer=Fo.div`
    position: relative;
    display: flex;
    justify-content: center;
    left:45%;
    /* gap: 10px; */
    margin:3% 0;
    width:10%;
`,sf.PageButton=Fo.button`
    ${Zo}
    padding: 0% 8%;
    border-radius: 50%;
    border: none;
    background-color: #D9D9D9;
    color: black;
    cursor: pointer;
     background-color: ${e=>{let{isActive:t}=e;return t?"#717171":"transparent"}};
    color: ${e=>{let{isActive:t}=e;return t?"white":"black"}};
    
`,sf.EmptyMessage=Fo.div`
  ${Jo}
  margin-top: 2%;
`;const cf=sf,uf=(0,r.createContext)(null),df=e=>{let{children:t}=e;const[n,o]=(0,r.useState)(null),i=localStorage.getItem("accessToken"),a=async()=>{try{const e=await Td.post("/token/user",{accessToken:i});console.log(e.data);const t=e.data.data;o({userId:t.userId,profileImageUrl:t.profileImageUrl,nickname:t.nickname,favoriteGenre:t.favoriteGenre,content:t.content})}catch(e){console.error("Error fetching user info:",e)}};(0,r.useEffect)((()=>{i&&a()}),[]);return(0,oi.jsx)(uf.Provider,{value:{user:n,setUser:o,logout:()=>{o(null),localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),localStorage.removeItem("isMember"),delete Td.defaults.headers.common.Authorization},fetchUserInfo:a},children:t})},ff=()=>(0,r.useContext)(uf),pf=e=>{let{post:t,setPost:n}=e;const o=tt(),i=rt(),a=new URLSearchParams(o.search).get("boardId"),{user:l}=ff(),[s,c]=(0,r.useState)(""),[u,d]=(0,r.useState)([]),[f,p]=(0,r.useState)(0),[h,g]=(0,r.useState)(1),[m,v]=(0,r.useState)(0),[b,y]=(0,r.useState)("\ucd5c\uc2e0\uc21c"),[x,w]=(0,r.useState)(null),[k,S]=(0,r.useState)(""),[j,C]=(0,r.useState)(new Set),E=e=>{const t="\ucd5c\uc2e0\uc21c"===b?"latest":"registered";Td.get(`/v1/comment/${a}/comments?sort=${t}&page=${e}&size=5`).then((e=>{console.log(e.data.data),d(e.data.data.comments),g(e.data.data.pageInfo.totalPages)})).catch((e=>{console.error("Error fetching comments:",e)}))};(0,r.useEffect)((()=>{E(f)}),[f,b]);const T=()=>{w(null),S("")},P=5*m,O=Math.min(P+5,h),_=()=>{y((e=>"\ub4f1\ub85d\uc21c"===e?"\ucd5c\uc2e0\uc21c":"\ub4f1\ub85d\uc21c")),p(0)};return(0,oi.jsxs)(oi.Fragment,{children:[(0,oi.jsx)(cf.Background1,{children:l?(0,oi.jsxs)(oi.Fragment,{children:[(0,oi.jsxs)(cf.Profile,{children:[(0,oi.jsxs)("span",{children:[(0,oi.jsx)("img",{src:l.profileImageUrl,alt:"\ud504\ub85c\ud544 \uc774\ubbf8\uc9c0"})," "]}),(0,oi.jsx)(cf.Username,{children:l.nickname})]}),(0,oi.jsx)(cf.CommentInput,{value:s,onChange:e=>{c(e.target.value)},placeholder:"\ub313\uae00\uc744 \uc791\uc131\ud558\uc138\uc694",maxLength:250}),(0,oi.jsxs)(cf.CommentFooter,{children:[(0,oi.jsx)(cf.CharacterCount,{children:`${s.length}/250`}),(0,oi.jsx)(cf.RegisterButton,{onClick:async()=>{const e=localStorage.getItem("accessToken");if(!e)return alert("\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),void i("/login");if(!s.trim())return void alert("\ub313\uae00\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.");const t={content:s};try{await Td.post(`/v1/comment/${a}`,t,{headers:{Authorization:`Bearer ${e}`}}),c(""),y("\ucd5c\uc2e0\uc21c"),p(0),E(0),n((e=>({...e,commentCount:e.commentCount+1})))}catch(r){console.error("Error posting comment:",r),alert("\ub313\uae00 \uc791\uc131\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.")}},children:"\ub4f1\ub85d"})]})]}):(0,oi.jsx)("div",{children:"\ub85c\uadf8\uc778 \ud6c4 \ub313\uae00\uc744 \uc791\uc131\ud574\ubcf4\uc138\uc694!"})}),(0,oi.jsxs)(cf.Background2,{children:[(0,oi.jsxs)(cf.CommentToggle,{children:[(0,oi.jsx)("div",{onClick:_,style:{cursor:"pointer",color:"\ub4f1\ub85d\uc21c"===b?"#717171":"black"},children:"\ucd5c\uc2e0\uc21c"}),(0,oi.jsx)("div",{onClick:_,style:{cursor:"pointer",color:"\ucd5c\uc2e0\uc21c"===b?"#717171":"black"},children:"\ub4f1\ub85d\uc21c"})]}),(0,oi.jsx)(cf.CommentContainer,{children:u.map((e=>(0,oi.jsxs)(cf.Comment,{children:[(0,oi.jsx)("span",{children:(0,oi.jsx)("img",{src:e.profileImageUrl,alt:"\ud504\ub85c\ud544"})}),(0,oi.jsxs)("div",{style:{flex:1},children:[(0,oi.jsx)(cf.Username,{children:e.nickname}),x===e.commentId?(0,oi.jsx)(cf.EditInput,{value:k,onChange:e=>{e.target.value.length<=250&&(S(e.target.value),(e=>{e.target.style.height="auto",e.target.style.height=`${e.target.scrollHeight}px`})(e))}}):(0,oi.jsx)(cf.CommentContent,{children:e.content}),(0,oi.jsx)(cf.CommentTime,{children:new Date(new Date(e.createdAt).getTime()+324e5).toLocaleString("ko-KR")})]}),e.userId===(null===l||void 0===l?void 0:l.userId)&&(0,oi.jsx)(cf.ButtonContainer,{children:x===e.commentId?(0,oi.jsxs)(oi.Fragment,{children:[(0,oi.jsx)(cf.Button,{onClick:()=>(async e=>{const t=localStorage.getItem("accessToken");try{const n=await Td.patch(`/v1/comment/${e}`,{content:k,edited:!0},{headers:{Authorization:`Bearer ${t}`}});console.log(n),w(null),d((t=>t.map((t=>t.commentId===e?{...t,content:k,edited:!0}:t)))),C((t=>new Set(t).add(e)))}catch(n){console.error("Error updating comment:",n),alert("\ub313\uae00 \uc218\uc815\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.")}})(e.commentId),children:"\uc800\uc7a5"}),(0,oi.jsx)(cf.Button,{onClick:T,children:"\ucde8\uc18c"})]}):(0,oi.jsxs)(oi.Fragment,{children:[(0,oi.jsx)(cf.Button,{onClick:()=>{return t=e.commentId,n=e.content,w(t),void S(n);var t,n},children:"\uc218\uc815"}),(0,oi.jsx)(cf.Button,{onClick:()=>(async e=>{const t=localStorage.getItem("accessToken");try{await Td.delete(`/v1/comment/${e}`,{headers:{Authorization:`Bearer ${t}`}}),E(f),n((e=>({...e,commentCount:e.commentCount-1})))}catch(r){console.error("Error deleting comment:",r),alert("\ub313\uae00 \uc0ad\uc81c\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.")}})(e.commentId),children:"\uc0ad\uc81c"})]})})]},e.id)))}),u.length>0?(0,oi.jsxs)(cf.PaginationContainer,{children:[(0,oi.jsx)(cf.PageButton,{onClick:()=>{m>0&&(v(m-1),p(5*(m-1)))},disabled:0===m,children:"<"}),Array.from({length:O-P},((e,t)=>(0,oi.jsx)(cf.PageButton,{onClick:()=>{p(P+t)},isActive:f===P+t,children:P+t+1},t))),(0,oi.jsx)(cf.PageButton,{onClick:()=>{5*(m+1)<h&&(v(m+1),p(5*(m+1)))},disabled:O>=h,children:">"})]}):(0,oi.jsx)(cf.EmptyMessage,{children:"\uccab \ubc88\uc9f8 \ub313\uae00\uc744 \ub0a8\uaca8\ubcf4\uc138\uc694!"})]})]})},hf=e=>{let{visible:t,setVisible:n}=e;const r=tt(),o=new URLSearchParams(r.search).get("boardId"),i=rt();return(0,oi.jsx)("div",{children:t&&(0,oi.jsxs)(lf.DeleteAccountContainer,{children:[(0,oi.jsxs)(lf.DeleteText,{children:[(0,oi.jsx)("div",{children:"\uc815\ub9d0 \uac8c\uc2dc\ubb3c\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"}),(0,oi.jsx)("div",{children:" \uc0ad\uc81c\ud55c \uac8c\uc2dc\uae00\uc740 \ubcf5\uad6c\uac00 \ubd88\uac00\ub2a5\ud569\ub2c8\ub2e4."})]}),(0,oi.jsxs)(lf.DeleteButtonContainer,{children:[(0,oi.jsx)(lf.CancelButton,{onClick:()=>{n(!1)},children:"\ucde8\uc18c"}),(0,oi.jsx)(lf.DeleteButton,{onClick:async()=>{try{const e=await Td.delete(`/v1/board/${o}`,{headers:{Authorization:`Bearer ${localStorage.getItem("accessToken")}`}});console.log("Post deleted successfully:",e.data),n(!1),i(-1)}catch(e){console.error("Error deleting post:",e),alert("\uac8c\uc2dc\uae00 \uc0ad\uc81c\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.")}},children:"\uc0ad\uc81c"})]})]})})},gf=()=>{const e=tt(),t=new URLSearchParams(e.search).get("boardId"),[n,o]=(0,r.useState)(null),[i,a]=(0,r.useState)(!1),[l,s]=(0,r.useState)(!1),c=rt(),{user:u}=ff(),d=async()=>{try{const e=await Td.get(`/v1/board/${t}`);o(e.data)}catch(e){console.error("Error fetching post details:",e)}};(0,r.useEffect)((()=>{t&&u&&(d(),(async()=>{if(u)try{const e=await Td.get(`/v1/like/list/${t}`),n=e.data.data;console.log(e.data.data);const r=n.some((e=>e.userId===u.userId));a(r),console.log(r)}catch(e){console.error("Error fetching like status:",e)}})())}),[t,u]),(0,r.useEffect)((()=>{d()}),[i]);return n?(0,oi.jsx)("div",{children:(0,oi.jsxs)(lf.Container,{children:[(0,oi.jsxs)(lf.TitleContainer,{children:[(0,oi.jsx)(lf.TitleHightlight,{children:(0,oi.jsx)("img",{src:"./global/images/postpage/board.png",alt:"\uac8c\uc2dc\ud310"})}),(0,oi.jsxs)(lf.TitleHeader,{children:[(0,oi.jsx)("span",{children:(0,oi.jsx)("img",{src:n.profileImageUrl})}),(0,oi.jsxs)(lf.UserInfo,{children:[(0,oi.jsx)(lf.UserName,{children:n.nickname}),(0,oi.jsx)(lf.CreatedAt,{children:new Date(new Date(n.createdAt).getTime()+324e5).toLocaleString("ko-KR")})]}),(null===u||void 0===u?void 0:u.userId)===n.userId&&(0,oi.jsxs)(lf.ButtonContainer,{children:[(0,oi.jsx)(lf.Button,{onClick:()=>{c("/posts/postdetail/modifypost",{state:{post:n}})},children:"\uc218\uc815"}),(0,oi.jsx)(lf.Button,{onClick:()=>{s(!l)},children:"\uc0ad\uc81c"})]})]})]}),(0,oi.jsx)(lf.Line,{}),(0,oi.jsxs)(lf.BodyContainer,{children:[l&&(0,oi.jsx)(hf,{visible:l,setVisible:s}),(0,oi.jsx)(lf.PostTitle,{children:n.title}),(0,oi.jsx)(lf.PostContent,{children:n.content}),(0,oi.jsx)(lf.ImageContainer,{children:n.imageUrls.map(((e,t)=>(0,oi.jsx)("img",{src:e,alt:`\uc774\ubbf8\uc9c0 ${t+1}`},t)))})]}),(0,oi.jsxs)(lf.IconContainer,{children:[(0,oi.jsxs)(lf.LikeContainer,{children:[(0,oi.jsx)(Zs,{icon:i?tc:nc,onClick:async()=>{const e=localStorage.getItem("accessToken");if(!e)return alert("\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),void c("/login");try{const n=await Td.post(`/v1/like/${t}`,null,{headers:{Authorization:`Bearer ${e}`}});a(n.data.data.liked),o((e=>({...e,likeCount:n.data.data.likeCount})))}catch(n){console.error("Error liking the post:",n),alert("\uc88b\uc544\uc694 \uc694\uccad\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.")}}}),(0,oi.jsx)("div",{children:n.likeCount})]}),(0,oi.jsxs)(lf.CommentContainer,{children:[(0,oi.jsx)(Zs,{icon:rc}),(0,oi.jsx)("div",{children:n.commentCount})]})]}),(0,oi.jsx)(lf.Line,{className:"line2"}),(0,oi.jsx)(pf,{post:n,setPost:o})]})}):(0,oi.jsx)("div",{children:"Loading..."})},mf=e=>{let{books:t=[]}=e;return t&&0!==t.length?(0,oi.jsx)("div",{className:"search-results",children:t.map(((e,t)=>(0,oi.jsx)("div",{className:"book-item",children:(0,oi.jsxs)(Mt,{to:`/books/bookinfo/${e.isbn13}`,children:[(0,oi.jsx)("img",{src:e.cover,alt:e.title,onError:e=>{e.target.src="/placeholder-book.png"}}),(0,oi.jsxs)("div",{className:"book-info",children:[(0,oi.jsx)("h3",{children:e.title}),(0,oi.jsx)("p",{children:e.author}),(0,oi.jsx)("p",{children:e.publisher}),(0,oi.jsx)("p",{children:e.description})]})]})},t)))}):(0,oi.jsx)("div",{})},vf=()=>{const[e]=qt(),{searchResults:t,isLoading:n,error:o,handleSearch:i}=(()=>{const[e,t]=(0,r.useState)([]),[n,o]=(0,r.useState)(!1),[i,a]=(0,r.useState)(null);return{searchResults:e,isLoading:n,error:i,handleSearch:async e=>{o(!0),a(null);try{var n;const r=(null===(n=(await Sd.get("https://readmate-ridi.vercel.app//api/itemSearch",{params:{search:e.trim()}})).data.object)||void 0===n?void 0:n.item)||[];return t(r),0===r.length&&a("\uac80\uc0c9\uc5b4\uc640 \uc77c\uce58\ud558\ub294 \ucc45\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."),r}catch(r){throw console.error("Search error:",r),a("An error occurred while searching. Please try again."),t([]),r}finally{o(!1)}}}})();return(0,r.useEffect)((()=>{const t=e.get("q");t&&i(t)}),[e]),(0,oi.jsxs)("div",{children:[o&&(0,oi.jsx)("div",{className:"error-message",children:o}),n?(0,oi.jsx)("div",{className:"loading",children:"Searching..."}):(0,oi.jsx)(mf,{books:t})]})},bf={};bf.Background=Fo.div`
    width:100%;
    height:100%;
   
    & .grayBackground{
        background-color: #8C9094;
        height:100%;
        position:absolute;
        z-index: 1000;
        
    }

`,bf.GrayBackground=Fo.div`
    position:relative;
    z-index: 1000;
    /* width:800px; */
    width:100%;
    height:100%;
    position:absolute;
    /* .grayBackground{
        width:50%;
        background-color: #8C9094;
        height:100%;
        position:relative;
        z-index: 99;
        
    } */
`,bf.Component=Fo.div`
    position: relatve;
    z-index:1;
    font-family: 'Pretandard';
    ${Xo};
    position:relative;
    width:800px;
    height:550px;
    margin:auto;
    margin-bottom: 10%;
    margin-top: 5%;
    padding: 3% 5% 2% 5%;
    border-radius: 1rem;
    background-color:white;
    /* background-color: ${e=>{let{isOverlay:t}=e;return t?"rgba(0, 0, 0, 0.3)":"white"}}; */

    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);

    @media (max-width: 1024px) {
        width: 400px; 
        height: 247px; 
    }

    @media (max-width: 768px) {
        width: 300px; 
        height: 185px; 
    }

    @media (max-width: 480px) {
        width: 270px; 
        height: 166.5px;
    }
`,bf.Profile=Fo.div`
    width:100%;
    img{
        width:12%;
        border-radius: 50%;
    }
`,bf.NickNameContainer=Fo.div`
    display: flex;
    justify-content: space-between;
    width:62%;
    position:absolute ;
    /* right:5%; */
    top:12%;
    left:21%;
`,bf.NickName=Fo.div`
    ${Xo}
`,bf.Introduce=Fo.div`
    ${ti}
    position:absolute ;
    /* right:5%; */
    top:17%;
    left:21%;
`,bf.ModifyButton=Fo.span`
    /* width:13%; */
    ${ti}
    background-color: ${qo.PALETTE.lightGray};
    padding:1% 3%;
    border-radius: 1rem;
    cursor: pointer;
`,bf.ImageContainer=Fo.div`
    ${Vo}
    justify-content: space-evenly;
    width:100%;
    height:45%;
    margin: auto;
    padding:0 10%;
    margin-top: 5%;
    background-color: rgba(207, 221, 200, 0.3);
    border-radius: 1rem;
    /* box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25); */
`,bf.IconWrapper=Fo.div`
    ${Ko};
    cursor: pointer;
    img{
        margin-bottom:10%;
    }
    @media (max-width: 1024px) {
        img{
            width: 50px;
        }
        
    }

    @media (max-width: 768px) {
        img{
            width: 40px;
        }
    }

    @media (max-width: 480px) {
        img{
            width: 30px;
        }
    }
   

`,bf.ImageTitle=Fo.div`
    ${Zo}
    font-weight: bold;
    padding:3%;
`,bf.ImageCount=Fo.div`
    ${Zo}
    color:#717171;
`,bf.ButtonContainer=Fo.div`
    ${Vo}
    width:75%;
    text-align: center;
    position:relative;
    top:7%;
    left:12.5%;
`,bf.Button=Fo.div`
    ${Jo};
    width:80%;
    padding:4%;
    line-height: 25%;
    /* margin-left: 10%; */
    margin:0 10%;
    height:70%;
    text-align: center;
    border-radius: 0.5rem;
    color:white;
    background-color:${qo.PALETTE.darkGray};
    cursor: pointer;
`,bf.DeleteAccountContainer=Fo.div`
    position:absolute;
    z-index: 999;
    width:90%;
    height:90%;
    background-color:#E9E8E4 ;
    right:5%;
    bottom:5%;
    ${Ko}
    border-radius: 1rem;

`,bf.DeleteText=Fo.div`
    position:absolute;
    top:30%;
    ${Xo}
    text-align: center;
`,bf.DeleteButtonContainer=Fo.div`
    position:absolute;
    top:65%;    
    display: flex;
    justify-content: center;
    width:50%;
    position: absolute;

    /* right:10%; */
`,bf.CancelButton=Fo.div`
    ${Vo}
    ${Xo};
    width:30%;
    padding: 2%;
    margin:3%;
    border-radius: 0.5rem;
    background-color: white;
    color:#2AA871;
    border:2px solid ${qo.PALETTE.green};
    line-height: 130%;
    cursor: pointer;
`,bf.DeleteButton=Fo.div`
    ${Vo}
    ${Xo};
    width:30%;
    padding: 2%;
    margin:3%;
    border-radius: 0.5rem;
    color:white;
    background-color:#2AA871;
    border:2px solid ${qo.PALETTE.green};
    line-height: 130%;
    cursor: pointer;
`;const yf=bf,xf=e=>{let{visible:t,setVisible:n}=e;const{user:r,logout:o}=ff(),i=rt();return(0,oi.jsx)("div",{children:t&&(0,oi.jsxs)(yf.DeleteAccountContainer,{children:[(0,oi.jsxs)(yf.DeleteText,{children:[(0,oi.jsx)("div",{children:"\uc815\ub9d0 \ud68c\uc6d0\ud0c8\ud1f4\ub97c \uc9c4\ud589\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"}),(0,oi.jsx)("div",{children:" \ud0c8\ud1f4\ud55c \ud6c4 \uc815\ubcf4\ub294 \ubcf5\uad6c\uac00 \ubd88\uac00\ub2a5\ud569\ub2c8\ub2e4."})]}),(0,oi.jsxs)(yf.DeleteButtonContainer,{children:[(0,oi.jsx)(yf.CancelButton,{onClick:()=>{n(!1)},children:"\ucde8\uc18c"}),(0,oi.jsx)(yf.DeleteButton,{onClick:async()=>{try{await Sd.post("http://3.35.193.132:8080/api/v1/auth/withdraw",{},{headers:{userId:r.userId,"Content-Type":"application/json"}}),localStorage.removeItem("isMember"),o(),i("/")}catch(e){console.error("Error during account deletion:",e)}},children:"\ud0c8\ud1f4"})]})]})})},wf=()=>{const{user:e,logout:t}=ff(),[n,o]=(0,r.useState)(""),[i,a]=(0,r.useState)(""),[l,s]=(0,r.useState)(null),c=rt(),[u,d]=(0,r.useState)(!1),[f,p]=(0,r.useState)(!1);(0,r.useEffect)((()=>{e&&(s(e.profileImageUrl||"./global/images/mypage/defaultProfile.png"),o(e.content||""),a(e.nickname||""))}),[e]);return(0,oi.jsx)("div",{children:(0,oi.jsx)(yf.Background,{children:(0,oi.jsxs)(yf.Component,{children:[f&&(0,oi.jsx)(xf,{visible:f,setVisible:p}),(0,oi.jsx)(yf.Profile,{children:(0,oi.jsx)("img",{src:l})}),(0,oi.jsxs)(yf.NickNameContainer,{children:[(0,oi.jsx)(yf.NickName,{children:i}),(0,oi.jsx)(yf.ModifyButton,{onClick:()=>{c("/mypage/updateprofile")},children:"\uc218\uc815\ud558\uae30"})]}),(0,oi.jsx)(yf.Introduce,{children:n}),(0,oi.jsxs)(yf.ImageContainer,{children:[(0,oi.jsxs)(yf.IconWrapper,{onClick:()=>{c("/myLibrary")},children:[(0,oi.jsx)("img",{src:"./global/images/mypage/myLibrary.png"}),(0,oi.jsx)(yf.ImageTitle,{children:"\ub0b4 \uc11c\uc7ac"}),(0,oi.jsx)(yf.ImageCount,{children:"3"})]}),(0,oi.jsxs)(yf.IconWrapper,{children:[(0,oi.jsx)("img",{className:"myClub",src:"./global/images/mypage/myClub.png"}),(0,oi.jsx)(yf.ImageTitle,{children:"\ub0b4 \ud074\ub7fd"}),(0,oi.jsx)(yf.ImageCount,{children:"3"})]}),(0,oi.jsxs)(yf.IconWrapper,{onClick:()=>{c("/bookcalendar")},children:[(0,oi.jsx)("img",{src:"./global/images/mypage/bookCalendar.png"}),(0,oi.jsx)(yf.ImageTitle,{children:"\ubd81 \uce98\ub9b0\ub354"}),(0,oi.jsx)(yf.ImageCount,{children:"3"})]})]}),(0,oi.jsxs)(yf.ButtonContainer,{children:[(0,oi.jsx)(yf.Button,{onClick:async()=>{try{localStorage.getItem("accessToken");200===(await Sd.post("http://3.35.193.132:8080/api/v1/auth/logout",{})).status&&(t(),c("/"))}catch(e){console.error("Logout error:",e)}},children:"\ub85c\uadf8\uc544\uc6c3"}),(0,oi.jsx)(yf.Button,{onClick:()=>{p(!f)},children:"\ud0c8\ud1f4\ud558\uae30"})]}),u&&(0,oi.jsx)(xf,{onCancel:()=>{d(!1)}})]})})})},kf={};kf.Component=Fo.div`
    font-family: 'Pretandard';
    ${Xo};
    position:relative;
    width:800px;
    height:550px;
    margin:auto;
    margin-bottom: 10%;
    margin-top: 5%;
    padding: 3% 5% 2% 7%;
    border-radius: 1rem;
    background-color:white;
    /* background-color: ${e=>{let{isOverlay:t}=e;return t?"rgba(0, 0, 0, 0.3)":"white"}}; */

    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);

    @media (max-width: 1024px) {
        width: 400px; 
        height: 247px; 
    }

    @media (max-width: 768px) {
        width: 300px; 
        height: 185px; 
    }

    @media (max-width: 480px) {
        width: 270px; 
        height: 166.5px;
    }
`,kf.Title=Fo.div`
    /* ${Ko}; */
     div:first-child {
        position: absolute;
        top:10%;
        left:12.5%;
        ${Go};
    }
    div:nth-child(2) {
        position: absolute;
        top:20%;
        width:70%;
        height:2px;
        background-color: black;
      
    }

`,kf.Button=Fo.div`
    position:absolute;
    top:8%;
    right:17%;
    ${Jo};
    width:14%;
    padding:2.5%;
    line-height: 25%;
    text-align: center;
    border-radius: 0.5rem;
    color:white;
    background-color:${qo.PALETTE.darkGray};
    cursor: pointer;
`,kf.ProfilePicture=Fo.div`
    width:70%;
    display:flex;
    ${Jo};
    font-weight: 700;
    /* justify-content: space-between; */
    align-items: center;
    position: absolute;
    top:25%;
    white-space: nowrap;
    
`,kf.Profile=Fo.div`
    width: 60px;  
    height: 60px;  
    overflow: hidden; 
    border-radius: 50%; 
    margin: 0 7.5%;
    img {
        width: 100%;
        height: 100%; 
        object-fit: cover; 
    }
    @media (max-width: 1024px) {
        width: 40px;
        height: 40px;
    }

    @media (max-width: 768px) {
        width: 30px;
        height: 30px;
    }

    @media (max-width: 480px) {
        width: 20px;
        height: 20px;
    }
`,kf.ImageButtonContainer=Fo.div`

    @media (max-width: 1024px) {
        img {
            width: 60%;
            
        }
    }

    @media (max-width: 768px) {
        img {
            width: 40%;
            
        }
    }

    @media (max-width: 480px) {
        img {
            width: 20%;
        }
    }
`,kf.Introduce=Fo.div`
    width:70%;
    display:flex;
    ${Jo};
    font-weight: 700;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top:45%;
    
    input{
        position:relative;
        background-color: rgba(233, 232, 228, 0.55);  
        border: none;               
        padding: 1.5%;
        padding-left: 3%;              
        width: 60%;                
        border-radius: 0.5vw;           
        ${ti}
        outline: none;
        /* margin-left: 5%; */
        
    }
    & .count{
        ${ti}
        color: #999999;
    }
`,kf.NickName=Fo.div`
    width:70%;
    display:flex;
    ${Jo};
    font-weight: 700;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top:60%;
    input{
        position:relative;
        background-color: rgba(233, 232, 228, 0.55);  
        border: none;               
        padding: 1.5%;
        padding-left: 3%;              
        width: 60%;                
        border-radius: 0.5vw;           
        ${ti}
        outline: none;
        margin-left: 4.5%;
    }
    & .count{
        ${ti}
        color: #999999;
    }
        

`,kf.SelectCategoryButton=Fo.div`
     ${Jo};
    font-weight: 700;
    border:2px solid ${qo.PALETTE.green};
    color:${qo.PALETTE.green};
    padding:2%;
    border-radius: 1vw ;
    
    cursor: pointer;
`,kf.Category=Fo.div`
    width:70%;
    display:flex;
    ${Jo};
    font-weight: 700;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top:75%;

`,kf.CategoryButton=Fo.button`
    padding: 2px 7px;
    ${ti}
    background-color: ${e=>{let{isSelected:t}=e;return t?"green":"white"}};
    /* color: ${e=>{let{isSelected:t}=e;return t?"#fff":"#333"}}; */
    color:#717171;
    border: 1px solid #717171;
    
    border-radius: 30px;

    
`,kf.SelectedButton=Fo(kf.CategoryButton)`
    padding: 2px 7px;
    /* background-color:rgba(42, 168, 113, 0.09); */
    border: 1px solid #2AA871;
    color: #2AA871;
    /* border-radius: 10px; */
    cursor: pointer;
    margin:1%;
`,kf.SelectedContainer=Fo.div`
    position: relative;
    /* padding: 1.5%;  */
    /* right:0.7%; */
    display: flex;
    flex-wrap: wrap;
    width:60%;
    background-color: rgba(233, 232, 228, 0.55);
    border-radius: 0.5vw; 
    padding:0.5%;
    height:100%;
    min-height:40px;
    overflow-y: auto;
     @media (max-width: 1024px) {
        min-height:30px;
    }

    @media (max-width: 768px) {
        min-height:20px;
    }

    @media (max-width: 480px) {
        min-height:10px;
    }
    
`,kf.ErrorMessage=Fo.div`
    position: absolute;
    top:90%;
    ${ti}
    color:#DF4545;
`,kf.ErrorMessage2=Fo.div`
    position: absolute;
    top:90%;
    /* left:0%; */
    ${ti}
    color:#DF4545;
`;const Sf=kf,jf={};jf.Container=Fo.div`
    width: 100%;
    padding: 5%;
    box-sizing: border-box;
    width:600px;
    height:370px;
    border-radius: 1rem;
    background-color:white;  
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
    position: relative;
    z-index:999;
    @media (max-width: 1024px) {
        width: 400px; 
        height: 247px; 
    }

    @media (max-width: 768px) {
        width: 300px; 
        height: 350px; 
    }

    @media (max-width: 480px) {
        width: 270px; 
        height: 300px;
    }
`,jf.Title=Fo.h2`
    ${Qo}
    margin-bottom: 3%;
`,jf.ButtonContainer=Fo.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`,jf.CategoryButton=Fo.button`
    padding: 2px 7px;
    ${ti}
    background-color: ${e=>{let{isSelected:t}=e;return t?"green":"white"}};
    /* color: ${e=>{let{isSelected:t}=e;return t?"#fff":"#333"}}; */
    color:#717171;
    border: 1px solid #717171;
    cursor: pointer;
    border-radius: 30px;

    &:hover {
        background-color: ${e=>{let{isSelected:t}=e;return t?"green":"#e0e0e0"}};
    }
`,jf.SelectedButton=Fo(jf.CategoryButton)`
    padding: 2px 7px;
    background-color:rgba(42, 168, 113, 0.09);
    border: 1px solid #2AA871;
    color: #2AA871;
    border-radius: 30px;
    cursor: pointer;
`,jf.SelectedContainer=Fo.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;
`,jf.CloseButton=Fo.span`
    margin-left: 2px;
    color: #2AA871;
    cursor: pointer;
`,jf.ApplyButton=Fo.button`
    ${Jo}
    background-color: #2AA871;
    color: white;
    border: none;
    padding: 0.5% 2%;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 15px;
    position:absolute;
    bottom:5%;
    right:5%;
`,jf.ErrorMessage=Fo.div`
    ${ti}
    color:#DF4545;
    margin-bottom: 2%;
`;const Cf=jf,Ef=["\uac00\uc815\uc694\ub9ac\ubdf0\ud2f0","\uac74\uac15\ucde8\ubbf8\ub808\uc800","\uacbd\uc81c\uacbd\uc601","\uace0\uc804","\uacfc\ud559","\ub9cc\ud654","\uc0ac\ud68c\uacfc\ud559","\ubb38\ud559","\uc5d0\uc138\uc774","\uc5ec\ud589","\uc5ed\uc0ac","\uc608\uc220\ub300\uc911\ubb38\ud654","\uc678\uad6d\uc5b4","\uc720\uc544","\uc778\ubb38\ud559","\uc790\uae30\uacc4\ubc1c","\uc7a1\uc9c0","\uc7a5\ub974\uc18c\uc124","\uc885\uad50\uc5ed\ud559","\uccad\uc18c\ub144","\ucef4\ud4e8\ud130\ubaa8\ubc14\uc77c"],Tf=e=>{let{applySelectedCategories:t}=e;const[n,o]=(0,r.useState)([]),[i,a]=(0,r.useState)(""),l=e=>{if(n.includes(e))o(n.filter((t=>t!==e))),a("");else{if(n.length>=3)return void a("\ucd5c\ub300 3\uac1c \uce74\ud14c\uace0\ub9ac\uae4c\uc9c0\ub9cc \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.");o([...n,e])}},s=Ef.filter((e=>!n.includes(e)));return(0,oi.jsxs)(Cf.Container,{children:[(0,oi.jsx)(Cf.Title,{children:"\uce74\ud14c\uace0\ub9ac"}),(0,oi.jsx)(Cf.SelectedContainer,{children:n.map((e=>(0,oi.jsxs)(Cf.SelectedButton,{onClick:()=>l(e),children:[e," ",(0,oi.jsx)(Cf.CloseButton,{children:"X"})]},e)))}),i&&(0,oi.jsx)(Cf.ErrorMessage,{children:i}),(0,oi.jsx)(Cf.ButtonContainer,{children:s.map((e=>(0,oi.jsx)(Cf.CategoryButton,{onClick:()=>l(e),children:e},e)))}),(0,oi.jsx)(Cf.ApplyButton,{onClick:()=>{t(n)},children:"\uc801\uc6a9"})]})},Pf=()=>{const{user:e,setUser:t}=ff(),[n,o]=(0,r.useState)(null),i=(0,r.useRef)(null),[a,l]=(0,r.useState)(""),[s,c]=(0,r.useState)(""),[u,d]=(0,r.useState)([]),[f,p]=(0,r.useState)(!1),[h,g]=(0,r.useState)(""),[m,v]=(0,r.useState)(""),b=rt();(0,r.useEffect)((()=>{e&&(o(e.profileImageUrl||"./global/images/mypage/defaultProfile.png"),l(e.content||""),c(e.nickname||""),d(e.favoriteGenre||[]))}),[e]);return console.log(e),(0,oi.jsx)("div",{children:(0,oi.jsxs)(Sf.Component,{children:[(0,oi.jsx)(Sf.Button,{onClick:async()=>{if(s.trim())if(0!==u.length)try{const e=new FormData,r={nickname:s,favoriteGenre:u,content:a};e.append("userUpdateRequest",JSON.stringify(r)),n instanceof File&&e.append("profileImage",n);const o=localStorage.getItem("accessToken"),i=await Td.patch("/v1/auth/user/update",e,{headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${o}`}});console.log("User updated successfully:",i.data),t((e=>({...e,nickname:s,favoriteGenre:u,content:a,profileImageUrl:n instanceof File?URL.createObjectURL(n):n}))),b("/mypage")}catch(e){console.error("Error updating user info:",e),alert("\ud504\ub85c\ud544 \uc5c5\ub370\uc774\ud2b8\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.")}else g("\uce74\ud14c\uace0\ub9ac\ub97c \ud55c \uac1c \uc774\uc0c1 \uc120\ud0dd\ud574 \uc8fc\uc138\uc694.");else g("\ub2c9\ub124\uc784\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694.")},children:"\uc801\uc6a9"}),(0,oi.jsx)(Sf.Title,{children:(0,oi.jsx)("div",{children:"\ud504\ub85c\ud544 \uc218\uc815"})}),(0,oi.jsxs)(Sf.ProfilePicture,{children:[(0,oi.jsx)("div",{children:"\ud504\ub85c\ud544 \uc0ac\uc9c4"}),(0,oi.jsx)(Sf.Profile,{children:(0,oi.jsx)("img",{src:n instanceof File?URL.createObjectURL(n):n,alt:"Profile"})}),(0,oi.jsx)(Sf.ImageButtonContainer,{children:(0,oi.jsx)("div",{onClick:()=>{i.current.click()},style:{cursor:"pointer"},children:(0,oi.jsx)("img",{src:"./global/images/postpage/pictureButton.png",alt:"Upload"})})}),(0,oi.jsx)("input",{type:"file",accept:"image/png, image/jpeg, image/jpg",ref:i,onChange:e=>{const t=e.target.files[0];t&&o(t)},style:{display:"none"}})]}),(0,oi.jsxs)(Sf.Introduce,{children:[(0,oi.jsx)("div",{children:"\ud55c \uc904 \uc18c\uac1c"}),(0,oi.jsx)("input",{type:"text",value:a,onChange:e=>{const t=e.target.value;t.length<=20&&l(t)}}),(0,oi.jsxs)("div",{className:"count",children:[a.length,"/20"]})]}),(0,oi.jsxs)(Sf.NickName,{children:[(0,oi.jsx)("div",{children:"\ub2c9\ub124\uc784"}),(0,oi.jsx)("input",{type:"text",value:s,onChange:e=>{const t=e.target.value;/[!@#$%^&*(),.?":{}|<>]/g.test(t)?g("\ub2c9\ub124\uc784\uc5d0 \ud2b9\uc218 \ubb38\uc790\ub97c \ud3ec\ud568\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."):t.length>10?g("\ub2c9\ub124\uc784\uc740 10\uae00\uc790 \uc774\ud558\ub85c \uc124\uc815\ud574\uc8fc\uc138\uc694."):(g(""),c(t))}}),(0,oi.jsxs)("div",{className:"count",children:[s.length,"/10"]})]}),h&&(0,oi.jsx)(Sf.ErrorMessage,{children:h}),f&&(0,oi.jsx)(Tf,{applySelectedCategories:e=>{d(e),p(!1),v("")}}),(0,oi.jsxs)(Sf.Category,{children:[(0,oi.jsx)("div",{children:"\uad00\uc2ec \uce74\ud14c\uace0\ub9ac"}),(0,oi.jsx)(Sf.SelectedContainer,{children:u.map((e=>(0,oi.jsx)(Sf.SelectedButton,{children:e},e)))}),(0,oi.jsx)(Sf.SelectCategoryButton,{onClick:()=>{p(!f)},children:"\uc120\ud0dd"})]}),m&&(0,oi.jsx)(Sf.ErrorMessage,{children:h})]})})},Of=()=>(0,oi.jsx)("div",{children:(0,oi.jsx)(yt,{})}),_f={};_f.Background=Fo.div`
    width: 80%;
    height:100%;
    /* height:100vh; */
    background-color: ${qo.PALETTE.background};
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    padding-bottom: 10%;
    margin: 0 auto;
    & > :nth-child(3) {
        align-self: flex-end; 
    }
`,_f.TitleHightlight=Fo.div`
    position:relative;
    width:100%;
    height:100%;
    margin-top:7%;
    margin-bottom: 0.5%;
    img{
        position:relative;
        width:8%;
    }      
    & #essay{
        width:15%;
        margin-top:2%;
    }
`,_f.Line=Fo.div`
    width:100%;
    height:1px;
    margin-bottom: 1%;
    background-color:black;
    
`,_f.BookCount=Fo.div`
    color:#717171;
    ${Qo}
    position: relative;
    right: 5%;
    /* padding-right: 10%; */
 `,_f.Container=Fo.div`
    display: flex;
    justify-content: center;
 `,_f.BookShelf=Fo.div`
    margin-top: 3%;
    width:100%;
    position: relative; 
    display: flex;
    justify-content: center;
    img{
        width:90%;
    }
    
 `,_f.BookComponent=Fo.div`
    position:absolute;
    background-color: white;
    top:14.7%;
    box-shadow: 13px 12px 4px rgba(0,0,0,0.25);
    img{
        width:120px;
        height:171px;
        object-fit: cover;
        
        @media (max-width: 1024px) {
            width:50px;
            height:80px;
            /* width:12%; */
        }

        @media (max-width: 768px) {
            width:40px;
            height:65px;
        }

        @media (max-width: 480px) {
            width:20px;
            height:35px;
        }
    }
    &.book1{
        left:15%;
    }
    &.book2{
        left:35%;
    }
    &.book3{
        left:55%;
    }
    &.book4{
        left:75%;
    }
    &.book5{
        top: 57.4%;
        left:15%;
    }
    &.book6{
        top: 57.4%;
        left:35%;
    }
    &.book7{
        top: 57.4%;
        left:55%;
    }
    &.book8{
        top: 57.4%;
        left:75%;
    }
    
    
`,_f.NavigationButton=Fo.button`
    position: relative;
    align-self: center;
    border: none;
    color:  rgba(0, 0, 0, 0.5);
    font-size: 3vw;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
    background-color:${qo.PALETTE.background};
    margin:0px 2.5%;

  /* 왼쪽 버튼 */
  &.left {
    position: absolute;
    left: 10px;
  }

  /* 오른쪽 버튼 */
  &.right {
    right: 20px;
  }

  
`,_f.EssayTitleContainer=Fo.div`
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    width:100%;

`,_f.WriteEssayButton=Fo.div`
    margin-top:8%;
    display: flex;
    align-items: center;
    justify-content: center;
    ${Xo};
    width:12%;
    border-radius: 0.5rem;
    color:#2AA871;
    background-color:white;
    border:2px solid ${qo.PALETTE.green};
    cursor: pointer;
    
`,_f.EssayBodyContainer=Fo.div`
    position: relative;
    width:100%;
    height:auto;
    border-radius:0.5rem;
    /* border-radius: 20px; */
    padding:2%;
    margin-top: 3%;
    background-color: #CFDEC8 ;
`,_f.Essay=Fo.div`
    width: 100%;
    margin-top: 2%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`,_f.EssayItem=Fo.div`
    padding: 1.5%;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    /* height:100%; */
    display: flex;
    flex-direction: column;
    gap: 15px;
`;const Lf=_f,Af={};Af.Container=Fo.div`
    width: 100%;
    height:auto;
    background-color:${qo.PALETTE.background};
    /* height:100%; */
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-x: hidden;
`,Af.TitleContainer=Fo.div`
     
    width: 100%;
    padding: 3% 10% 3% 10%;
    display: flex;
    justify-content: space-between;
               
`,Af.TitleHightlight=Fo.div`
   
    width:100%;
    height:100%;
    img{
        position:relative;
        
        width:15%;
        margin-left:10%;
        margin-top: 5%;
    }             
`,Af.TitleButtonContainer=Fo.div`
    display: flex;
    justify-content: space-between;
    width:20%;
    position: absolute;
    right:0%;
    /* top:5vh; */
`,Af.TitleButton=Fo.div`
    display: flex;
    align-items: center;
    justify-content: center;
    ${Xo};
    width:50%;
    padding: 4%;
    border-radius: 0.5rem;
    background-color: white;
    color:#2AA871;
    border:2px solid ${qo.PALETTE.green};
    line-height: 130%;
    cursor: pointer;
`,Af.PostContainer=Fo.div`
    display: flex;
    justify-content: flex-start;
    width:100%;
`,Af.TextContainer=Fo.div`
    width:90%;
    margin-left: 2%;
    /* padding:1% 0; */
`,Af.BookContainer=Fo.div`
    width:8%;
    line-height: 1.3;
`,Af.BookImage=Fo.div`

    img{
        width:80px;
        height:120px;
        object-fit: cover;
        
        @media (max-width: 1024px) {
            width:50px;
            height:85px;
        }

        @media (max-width: 768px) {
            width:30px;
            height:50px;
        }

        @media (max-width: 480px) {
            width:20px;
            height:35px;
        }
    }
`,Af.BookTitle=Fo.div`
    ${Zo}
    padding-left: 3%;
`,Af.Writer=Fo.div`
    ${ti}
    padding-left: 3%;
    color:#717171;
`,Af.PostList=Fo.div`
    width: 100%;
    margin-top: 2%;
    display: flex;
    flex-direction: column;
    gap: 15px; /* 게시글 사이의 간격 */
`,Af.PostItem=Fo.div`
    padding: 1.5%;
    height:150px;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 15px;
    position:relative;
`,Af.TitleBody=Fo.div`
   
    
`,Af.PostTitle=Fo.div`
    ${Xo}; 
    font-weight: bold;
    color: #333;
    white-space: nowrap; 
`,Af.PostContent=Fo.div`
    ${ti}; 
    color: #717171;
    /* white-space: nowrap;  */
    overflow: hidden;
    text-overflow: ellipsis;
    max-height:50%;
    padding-left: 0.1%;
    padding-top:1%;
    padding-bottom:1.5%;
    line-height: 1.2;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* 원하는 줄 수로 변경 가능 */
    -webkit-box-orient: vertical;
`,Af.UnderTitleContainer=Fo.div`
    display: flex;
    position:absolute;
    bottom:12.5%;
    
`,Af.PostInfo=Fo.div`
    padding-left: 5%;
    /* width:50%; */
    ${ti}
    color: ${qo.PALETTE.darkGray};
    white-space: nowrap; 
`,Af.LikeContainer=Fo.div`

    display: flex;
    align-items: center;
    gap: 5px; /* 아이콘과 좋아요 개수 사이 간격 */
    cursor: pointer;
    ${ti};
    color: ${qo.PALETTE.gray};
    svg {
        font-size: ${Zo};
        transition: color 0.3s ease;
    }
    span {
        font-size: 1rem;
        font-weight: bold;
    }

`,Af.CommentContainer=Fo.div`
  
    display: flex;
    align-items: center;
    margin-left: 7px;
    gap: 3px; /* 아이콘과 좋아요 개수 사이 간격 */
    ${ti}
    color: ${qo.PALETTE.gray};
    svg {
        font-size: ${Zo};
    }

`,Af.LatestPostContainer=Fo.div`
    position: relative;
    top:5vh;
    width: 80%;
    height:auto;
    margin-top: 3%;
    margin-bottom: 10%;
    padding: 2%;
    background-color: #D9D9D9;
    border-radius: 0.5rem;
  
`,Af.PaginationContainer=Fo.div`
    position: relative;
    display: flex;
    justify-content: center;
    left:45%;
    /* gap: 10px; */
    margin:3% 0;
    width:10%;
`,Af.PageButton=Fo.button`
    ${Zo}
    padding: 0% 7%;
    border-radius: 50%;
    border: none;
    background-color: #D9D9D9;
    color: black;
    cursor: pointer;
     background-color: ${e=>{let{isActive:t}=e;return t?"#717171":"transparent"}};
    color: ${e=>{let{isActive:t}=e;return t?"white":"black"}};
    
`;const Rf=Af,Df=()=>{const e=rt(),[t,n]=(0,r.useState)([]),[o,i]=(0,r.useState)(0),[a,l]=(0,r.useState)(1),[s,c]=(0,r.useState)(0);(0,r.useEffect)((()=>{(e=>{const t=localStorage.getItem("accessToken");Td.get(`/v1/board/mypost?boardType=FEED&page=${e}&size=5`,{headers:{Authorization:`Bearer ${t}`}}).then((e=>{console.log(e.data),n(e.data.data),l(e.data.pageInfo.totalPages)})).catch((e=>{console.error("Error fetching posts:",e)}))})(o)}),[o]);const u=5*s,d=Math.min(u+5,a);return(0,oi.jsxs)("div",{children:[(0,oi.jsx)(Rf.PostList,{children:t.map((t=>(0,oi.jsx)(Rf.PostItem,{onClick:()=>{return n=t.boardId,void e(`/essay/essaydetail?boardId=${n}`);var n},children:(0,oi.jsxs)(Rf.PostContainer,{children:[(0,oi.jsx)(Rf.BookContainer,{children:(0,oi.jsx)(Rf.BookImage,{children:(0,oi.jsx)("img",{src:t.bookImage,alt:"BookCover"})})}),(0,oi.jsxs)(Rf.TextContainer,{children:[(0,oi.jsxs)(Rf.TitleBody,{children:[(0,oi.jsx)(Rf.PostTitle,{children:t.title}),(0,oi.jsx)(Rf.PostContent,{children:t.content})]}),(0,oi.jsxs)(Rf.UnderTitleContainer,{children:[(0,oi.jsxs)(Rf.LikeContainer,{children:[(0,oi.jsx)(Zs,{icon:t.isLiked?tc:nc}),(0,oi.jsx)("div",{children:t.likeCount})]}),(0,oi.jsxs)(Rf.CommentContainer,{children:[(0,oi.jsx)(Zs,{icon:rc}),(0,oi.jsx)("div",{children:t.commentCount})]}),(0,oi.jsxs)(Rf.PostInfo,{children:[t.nickname," |"," ",new Date(new Date(t.createdAt).getTime()+324e5).toLocaleString("ko-KR")]})]})]})]})},t.boardId)))}),(0,oi.jsxs)(Rf.PaginationContainer,{children:[(0,oi.jsx)(Rf.PageButton,{onClick:()=>{s>0&&(c(s-1),i(5*(s-1)))},disabled:0===s,children:"<"}),Array.from({length:d-u},((e,t)=>(0,oi.jsx)(Rf.PageButton,{onClick:()=>{i(u+t)},isActive:o===u+t,children:u+t+1},t))),(0,oi.jsx)(Rf.PageButton,{onClick:()=>{5*(s+1)<a&&(c(s+1),i(5*(s+1)))},disabled:d>=a,children:">"})]})]})},Nf=()=>{const e=rt(),[t,n]=(0,r.useState)([]),[o,i]=(0,r.useState)(0);(0,r.useEffect)((()=>{(async()=>{try{const e=localStorage.getItem("accessToken"),t=await Td.get("/v1/user/book",{headers:{Authorization:`Bearer ${e}`}});console.log("Books fetched successfully:",t.data.data),n(t.data.data)}catch(e){console.error("Error fetching books:",e)}})()}),[]);const a=t.slice(8*o,8*(o+1));return(0,oi.jsx)(oi.Fragment,{children:(0,oi.jsxs)(Lf.Background,{children:[(0,oi.jsx)(Lf.TitleHightlight,{children:(0,oi.jsx)("img",{src:"./global/images/mylibrarypage/hightlight.png",alt:"\uac8c\uc2dc\ud310"})}),(0,oi.jsx)(Lf.Line,{}),(0,oi.jsxs)(Lf.BookCount,{children:["\ucc45 \uac1c\uc218: ",t.length,"\uac1c"]}),(0,oi.jsxs)(Lf.BookShelf,{children:[(0,oi.jsx)(Lf.NavigationButton,{onClick:()=>{o>0&&i(o-1)},disabled:0===o,children:"<"}),(0,oi.jsx)("img",{src:"./global/images/mylibrarypage/bookShelf.png",alt:"\uac8c\uc2dc\ud310"}),a.map(((e,t)=>(0,oi.jsx)(Lf.BookComponent,{className:`book${t+1}`,children:(0,oi.jsx)("img",{src:e.book.bookCover,alt:`\ucc45 ${t+1}`})},t))),(0,oi.jsx)(Lf.NavigationButton,{onClick:()=>{8*(o+1)<t.length&&i(o+1)},disabled:8*(o+1)>=t.length,children:">"})]}),(0,oi.jsxs)(Lf.EssayTitleContainer,{children:[(0,oi.jsx)(Lf.TitleHightlight,{children:(0,oi.jsx)("img",{id:"essay",src:"./global/images/mylibrarypage/essayhightlight.png",alt:"\uac8c\uc2dc\ud310"})}),(0,oi.jsx)(Lf.WriteEssayButton,{onClick:()=>{e("/essay/createEssay")},children:"\uc5d0\uc138\uc774 \uc4f0\uae30"})]}),(0,oi.jsx)(Lf.EssayBodyContainer,{children:(0,oi.jsx)(Df,{})})]})})},If={};If.Container=Fo.div`
    width: 100%;
    padding:0 10%;
    height:auto;
    background-color: ${qo.PALETTE.background};
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    padding-bottom: 10%;
    margin: 0 auto;
    overflow-y: auto;
    overflow-x: hidden;
`,If.TitleHightlight=Fo.div`
    position:relative;
    width:100%;
    height:100%;
    img{
        position:relative;
        /* top:-3vh; */
        width:25%;
        
    }          
`,If.TitleContainer=Fo.div`
    
    ${Yo};
    width: 100%;
    padding: 7% 10% 0% 10%;
               
`,If.TitleText=Fo.div`
    position:relative;
    top:7vh;
    padding:1%;
           
`,If.Dropdown=Fo.div`
    display: flex;
    justify-content: flex-start;
    
`,If.Line=Fo.div`
    width:80%;
    height:1px;
    margin-bottom: 2%;
    background-color:black;
    position:relative;
    top:7vh;
`,If.BookContainer=Fo.div`
    /* width:120%; */
    position: relative;
    left:-55%;
    top:7.3vh;
`,If.BodyContainer=Fo.div`
    width: 80%;
    height:740px;
    @media (max-width: 1024px) {
        
        height: 400px; 
    }

    @media (max-width: 768px) {
        height: 300px;  
    }

    @media (max-width: 480px) {
        height: 200px; 
    }
    background-color: white;
    margin-bottom: 2%;
    border-radius: 20px;
    padding:2%;
    position:relative;
    top:7vh;
    overflow-y: auto;
    & #title{
        width:100%;
        height:15%;
        border: none; 
        outline: none;
        border-bottom: 1px solid gray;
        font-size:${qo.FONT_SIZE.h1};
        ${Qo}
    }

    & #body{
        width:100%;
        height:55%;
        resize: none;
        border: none; 
        border-bottom: 1px solid gray;
        outline: none;
        padding:2%;
        ${Jo};
    }
`,If.ImagePreviewContainer=Fo.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 10px;
    
`,If.ImageButtonContainer=Fo.div`
    width:100%;
    img{
        width:15%;
    }
`,If.ImagePreview=Fo.div`
    position: relative;
    /* margin:auto; */
    width:140px;
    height:140px;
    /* width:100%;
    height:100%; */
    img{
        position:absolute;
        /* top:-100%; */
        width:100%;
        height:100%;
        border-radius: 0.5rem;
    }
`,If.RemoveButton=Fo.button`
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: #717171;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    width: 25px;
    height: 25px;
    font-size: 12px;
`,If.ButtonContainer=Fo.div`
    display: flex;
    width:20%;
    text-align: center;
    position:relative;
    top:7vh;
    left:30%;
`,If.Button=Fo.div`
    ${Xo};
    width:80%;
    padding:4% 0;
    margin-left: 10%;
    ${Vo}
    height:70%;
    text-align: center;
    border-radius: 0.5rem;
    color:white;
    background-color:${qo.PALETTE.darkGray};
    cursor: pointer;
`;const Bf=If,$f={};$f.DropdownContainer=Fo.div`
  display: flex;
  width:100%;
  /* height:10%; */
  position:absolute;
  left:29vw;
`,$f.Dropdown=Fo.div`
  display: flex;
  justify-content: flex-start;
  ${Jo}
  width:17%;
  select {
    ${Jo}
    /* padding: 3%; */
    width:90%;
    background-color: #86A789;
    color:white;
    outline:none;
    border-radius:0.5rem;
    border:none;
    padding-left: 5px;
  }

  option{
    background-color: white;
    ${ti}
    color:#717171;
  }
  & .search{
    width:100%;
  }
`,$f.DropdownContainer3=Fo.div`
  position: absolute;
  left: 50%;
  width: 100px;
  margin: 0 auto;
`,$f.Input3=Fo.input`
width: 100%;
padding: 10px;
font-size: 1rem;
border: 1px solid #CCC;
border-radius: 0.5rem;
outline: none;
&:focus {
    border-color: #BBAB8C;
}
`,$f.ResultsContainer=Fo.div`
position: absolute;
top: 100%;
left: 0;
width: 100%;
background-color: #FFF;
border: 1px solid #CCC;
border-radius: 0.5rem;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
max-height: 200px;
overflow-y: auto;
z-index: 1000;
margin-top: 5px;
`,$f.ResultItem=Fo.div`
display: flex;
align-items: center;
padding: 10px;
cursor: pointer;
transition: background-color 0.2s;

&:hover {
    background-color: #F0F0F0;
}

img {
    width: 40px;
    height: 60px;
    object-fit: cover;
    border-radius: 0.25rem;
    margin-right: 10px;
}

div {
    display: flex;
    flex-direction: column;

    strong {
        font-size: 1rem;
        margin-bottom: 2px;
    }

    span {
        font-size: 0.9rem;
        color: #555;
    }
}
`;const zf=$f,Mf=()=>{const[e,t]=(0,r.useState)(""),[n,o]=(0,r.useState)([]),[i,a]=(0,r.useState)(null);return(0,oi.jsxs)(zf.DropdownContainer3,{children:[(0,oi.jsx)(zf.Input3,{type:"text",placeholder:"\ucc45 \uac80\uc0c9\ud558\uae30",value:e,onChange:e=>{const n=e.target.value;t(n),(async e=>{if(e)try{var t;const n=null===(t=(await Sd.get("http://localhost:5000/api/search",{params:{query:e.trim()}})).data.object)||void 0===t?void 0:t.item,r=(Array.isArray(n)?n:[n]).map((e=>({id:e.isbn13||e.isbn,title:e.title,author:e.author,cover:e.cover})));o(r),r.forEach((e=>console.log(e.id)))}catch(n){console.error("Error fetching search results:",n)}else o([])})(n)}}),n.length>0&&(0,oi.jsx)(zf.ResultsContainer,{children:n.map((e=>(0,oi.jsxs)(zf.ResultItem,{onClick:()=>(e=>{a(e),t(e.title),o([])})(e),children:[(0,oi.jsx)("img",{src:e.cover,alt:e.title,style:{width:"30px",height:"45px",marginRight:"10px"}}),(0,oi.jsxs)("div",{children:[(0,oi.jsx)("strong",{children:e.title}),(0,oi.jsx)("div",{style:{fontSize:"0.8rem"},children:e.author})]})]},e.id)))})]})},Ff=e=>{let{setSelectedBook:t}=e;const[n,o]=(0,r.useState)([]),[i,a]=(0,r.useState)("");return(0,r.useEffect)((()=>{(async()=>{try{const e=localStorage.getItem("accessToken"),t=await Td.get("/v1/user/book",{headers:{Authorization:`Bearer ${e}`}});console.log("Books fetched successfully:",t.data.data),o(t.data.data)}catch(e){console.error("Error fetching books:",e)}})()}),[]),(0,oi.jsxs)(zf.DropdownContainer,{children:[(0,oi.jsx)(zf.Dropdown,{children:(0,oi.jsxs)("select",{id:"libraryBookDropdown",onChange:e=>(e=>{const r=n.find((t=>t.myBookId===parseInt(e)));r&&(t(r),console.log("Selected Book:",r))})(e.target.value),children:[(0,oi.jsx)("option",{value:"",children:"\uc11c\uc7ac \ucc45 \uc120\ud0dd\ud558\uae30"}),n.length>0&&n.map((e=>(0,oi.jsx)("option",{value:e.myBookId,children:e.book.title},e.myBookId)))]})}),(0,oi.jsx)(zf.Dropdown,{children:(0,oi.jsxs)("select",{id:"challengeDropdown",value:i,onChange:e=>{return t=e.target.value,void a(t);var t},children:[(0,oi.jsx)("option",{value:"",children:"\ucc4c\ub9b0\uc9c0 \uc120\ud0dd\ud558\uae30"}),["bookclub1","bookclub2","bookclub3"].map((e=>(0,oi.jsx)("option",{value:e,children:e},e)))]})}),(0,oi.jsx)(Mf,{})]})},Uf={};Uf.BookComponent=Fo.div`
    ${Ko};
    background-color:white;
    padding: 20px;
    ${Zo}
    width:10vw;
    height:auto;
    border-radius: 1rem;
    position:absolute;
    img{
        width:100%;
        margin-bottom: 3%;
        object-fit: cover;
    }
    
    @media (max-width: 1024px) {
        padding: 15px;
        
    }

    @media (max-width: 768px) {
        padding: 10px;
         
    }

    @media (max-width: 480px) {
        padding: 5px;
        
    }
`,Uf.TextContianer=Fo.div`
    position:relative;
    width:100%;
    div:nth-child(1) {
        ${Zo}
        margin-bottom: 3%;
        
    }
    div:nth-child(2) {
        ${ti}
        color:#717171;
    }
`;const Hf=Uf,Wf=e=>{let{book:t}=e;return(0,oi.jsx)("div",{children:(0,oi.jsxs)(Hf.BookComponent,{children:[(0,oi.jsx)("img",{src:t.book.bookCover}),(0,oi.jsxs)(Hf.TextContianer,{children:[(0,oi.jsx)("div",{children:t.book.title}),(0,oi.jsx)("div",{children:t.book.author})]})]})})},qf=()=>{const[e,t]=(0,r.useState)([]),n=(0,r.useRef)(null),[o,i]=(0,r.useState)(""),[a,l]=(0,r.useState)(""),[s,c]=(0,r.useState)(null),{user:u}=ff(),d=rt();return(0,oi.jsx)("div",{children:(0,oi.jsxs)(Bf.Container,{children:[(0,oi.jsxs)(Bf.TitleContainer,{children:[(0,oi.jsx)(Bf.TitleHightlight,{children:(0,oi.jsx)("img",{src:"./global/images/mylibrarypage/essayhightlight.png",alt:"\uc5d0\uc138\uc774"})}),(0,oi.jsx)(Bf.TitleText,{children:"\uae00\uc4f0\uae30"}),(0,oi.jsx)(Ff,{setSelectedBook:c})]}),(0,oi.jsx)(Bf.Line,{}),(0,oi.jsx)(Bf.BookContainer,{children:s&&(0,oi.jsx)(Wf,{book:s})}),(0,oi.jsxs)(Bf.BodyContainer,{children:[(0,oi.jsx)("input",{type:"text",placeholder:"\uc81c\ubaa9",id:"title",value:o,onChange:e=>i(e.target.value)}),(0,oi.jsx)("textarea",{id:"body",value:a,onChange:e=>l(e.target.value)}),(0,oi.jsx)(Bf.ImageButtonContainer,{children:(0,oi.jsx)("div",{onClick:()=>{n.current.click()},style:{cursor:"pointer"},children:(0,oi.jsx)("img",{src:"./global/images/postpage/pictureButton.png",alt:"Upload"})})}),(0,oi.jsx)("input",{type:"file",accept:"image/png, image/jpeg",multiple:!0,ref:n,onChange:n=>{const r=Array.from(n.target.files);r.length+e.length>5?alert("\ucd5c\ub300 5\uac1c\uc758 \uc774\ubbf8\uc9c0\ub9cc \uc5c5\ub85c\ub4dc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."):t((e=>[...e,...r]))},style:{display:"none"}}),(0,oi.jsx)(Bf.ImagePreviewContainer,{children:e.map(((e,n)=>(0,oi.jsxs)(Bf.ImagePreview,{children:[(0,oi.jsx)("img",{src:URL.createObjectURL(e),alt:`\ubbf8\ub9ac\ubcf4\uae30 ${n+1}`}),(0,oi.jsx)(Bf.RemoveButton,{onClick:()=>(e=>{t((t=>t.filter(((t,n)=>n!==e))))})(n),children:"X"})]},n)))})]}),(0,oi.jsx)(Bf.Line,{}),(0,oi.jsxs)(Bf.ButtonContainer,{children:[(0,oi.jsx)(Bf.Button,{onClick:async()=>{if(!s)return void alert("\ucc45\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694.");if(!o.trim())return void alert("\uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.");const t={userId:u.userId,bookId:s.book.isbn13,content:a,title:o,boardType:"FEED"},n=new FormData;n.append("boardRequest",JSON.stringify(t)),e.forEach(((e,t)=>{n.append("images",e)}));try{const e=localStorage.getItem("accessToken");await Td.post("/v1/board",n,{headers:{Authorization:`Bearer ${e}`,"Content-Type":"multipart/form-data"}});d("/essay")}catch(r){console.error("\uac8c\uc2dc\ubb3c \uc0dd\uc131 \uc2e4\ud328:",r.response||r.message)}},children:"\uc800\uc7a5"}),(0,oi.jsx)(Bf.Button,{onClick:()=>{d("/posts")},children:"\ucde8\uc18c"})]})]})})},Vf=()=>(0,oi.jsx)("div",{children:(0,oi.jsx)("h1",{children:"My Book Clubs"})}),Kf=()=>(0,oi.jsx)("div",{children:(0,oi.jsx)("h1",{children:"Main Book Club Page"})}),Yf=()=>(0,oi.jsx)("h1",{children:"\ud398\uc774\uc9c0\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."}),Gf=e=>{let{userEmail:t}=e;const{setUser:n,fetchUserInfo:o}=ff(),[i,a]=(0,r.useState)(!1),[l,s]=(0,r.useState)([]),[c,u]=(0,r.useState)(""),[d,f]=(0,r.useState)(""),[p,h]=(0,r.useState)(""),g=rt();new URL(window.location.href).searchParams.get("code");return(0,oi.jsx)("div",{children:(0,oi.jsx)(Ld.Background,{children:(0,oi.jsxs)(Ld.NickNameComponent,{children:[(0,oi.jsxs)(Ld.Title,{children:[(0,oi.jsx)("div",{children:"\ub2c9\ub124\uc784 \uc0dd\uc131"}),(0,oi.jsx)("div",{})]}),(0,oi.jsxs)(Ld.NickName,{children:[(0,oi.jsx)("div",{children:"\ub2c9\ub124\uc784"}),(0,oi.jsx)("input",{type:"text",value:c,onChange:e=>{const t=e.target.value;/[!@#$%^&*(),.?":{}|<>]/g.test(t)?f("\ub2c9\ub124\uc784\uc5d0 \ud2b9\uc218 \ubb38\uc790\ub97c \ud3ec\ud568\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."):t.length>10?f("\ub2c9\ub124\uc784\uc740 10\uae00\uc790 \uc774\ud558\ub85c \uc124\uc815\ud574\uc8fc\uc138\uc694."):(f(""),u(t))}}),(0,oi.jsxs)("div",{children:[c.length,"/10"]})]}),d&&(0,oi.jsx)(Ld.ErrorMessage,{children:d}),i&&(0,oi.jsx)(Tf,{applySelectedCategories:e=>{s(e),a(!1),h("")}}),(0,oi.jsxs)(Ld.Category,{children:[(0,oi.jsx)("div",{children:"\uad00\uc2ec \uce74\ud14c\uace0\ub9ac"}),(0,oi.jsx)(Ld.SelectedContainer,{children:l.map((e=>(0,oi.jsx)(Ld.SelectedButton,{children:e},e)))}),(0,oi.jsx)(Ld.SelectCategoryButton,{onClick:()=>{a(!i)},children:"\uc120\ud0dd"})]}),p&&(0,oi.jsx)(Ld.ErrorMessage2,{children:p}),(0,oi.jsx)(Ld.SignUp,{onClick:async()=>{if(d||0===l.length)return void(0===l.length&&h("\uce74\ud14c\uace0\ub9ac\ub97c \ud55c \uac1c \uc774\uc0c1 \uc120\ud0dd\ud574\uc8fc\uc138\uc694."));console.log(t);const e={email:t,nickname:c,favoriteGenre:l};try{const t=await fetch("http://3.35.193.132:8080/api/v1/auth/signup/kakao/step1",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);console.log(t),console.log("\ud68c\uc6d0\uac00\uc785 \uc131\uacf5! \ub85c\uadf8\uc778 \ud398\uc774\uc9c0\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4."),localStorage.setItem("isMember","true"),g("/login")}catch(n){console.error("Error during account creation:",n)}},children:"\ub4f1\ub85d"})]})})})},Qf=()=>{const e=rt(),[t,n]=(tt(),(0,r.useState)(!1)),[o,i]=(0,r.useState)(null),a=new URL(window.location.href).searchParams.get("code"),l=new URL(window.location.href).searchParams.get("state");return(0,r.useEffect)((()=>{a&&(async()=>{try{var t,r;let e;"get"===l?e=await Td.get(`/v1/auth/login/kakao?code=${a}`):"post"===l&&(e=await Td.post(`/v1/auth/signup/kakao?code=${a}`)),console.log(e);const o=(null===(t=e)||void 0===t?void 0:t.data)||{};if(null!==o&&void 0!==o&&null!==(r=o.data)&&void 0!==r&&r.email)n(!0),i(e.data.data.email);else{const t=e.headers.authorization||e.headers.Authorization,[n,r]=t.split(", "),o=n.replace("Bearer ","").trim(),i=r.replace("Refresh ","").trim();localStorage.setItem("accessToken",o),localStorage.setItem("refreshToken",i),Ed(o),window.location.href="/"}}catch(o){console.error("Error during login:",o),alert("\ub85c\uadf8\uc778\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694."),e("/login")}})()}),[a,l,e]),t&&o?(0,oi.jsx)(Gf,{userEmail:o}):(0,oi.jsx)(oi.Fragment,{children:(0,oi.jsx)("div",{children:"\ub85c\uadf8\uc778 \ucc98\ub9ac \uc911..."})})},Xf={};Xf.Container=Fo.div`
    width: 80%;
    height:auto;
    background-color: ${qo.PALETTE.background};
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    padding-bottom: 10%;
    margin: 0 auto;
`,Xf.TitleHightlight=Fo.div`
    position:relative;
    width:100%;
    height:100%;
    img{
        position:relative;
        /* top:-3vh; */
        width:25%;
        
    }          
`,Xf.TitleContainer=Fo.div`
    
    ${Yo};
    width: 100%;
    padding: 7% 10% 0% 10%;
               
`,Xf.TitleText=Fo.div`
    position:relative;
    top:7vh;
    padding:1%;
           
`,Xf.Line=Fo.div`
    width:80%;
    height:1px;
    margin-bottom: 2%;
    background-color:black;
    position:relative;
    top:7vh;
`,Xf.BodyContainer=Fo.div`
    width: 80%;
    height:740px;
    @media (max-width: 1024px) {
        
        height: 400px; 
    }

    @media (max-width: 768px) {
        height: 300px;  
    }

    @media (max-width: 480px) {
        height: 200px; 
    }
    background-color: white;
    margin-bottom: 2%;
    border-radius: 20px;
    padding:2%;
    position:relative;
    top:7vh;
    overflow-y: auto;
    & #title{
        width:100%;
        height:15%;
        border: none; 
        outline: none;
        border-bottom: 1px solid gray;
        font-size:${qo.FONT_SIZE.h1};
        ${Qo}
    }

    & #body{
        width:100%;
        height:55%;
        resize: none;
        border: none; 
        border-bottom: 1px solid gray;
        outline: none;
        padding:2%;
        ${Jo};
    }
`,Xf.ImagePreviewContainer=Fo.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5%;
    margin-top: 10px;
    
`,Xf.ImageButtonContainer=Fo.div`
    width:100%;
    img{
        width:15%;
    }
`,Xf.ImagePreview=Fo.div`
    position: relative;
    width:140px;
    height:140px;
    @media (max-width: 1024px) {
        
        width: 90px;
        height:90px;
    }

    @media (max-width: 768px) {
        width: 60px;
        height:60px;
    }

    @media (max-width: 480px) {
        width: 40px; 
        height:40px;
    }
    img{
        position:absolute;
        width:100%;
        height:100%;
        border-radius: 0.5rem;
    }
`,Xf.RemoveButton=Fo.button`
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: #717171;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    width: 25px;
    height: 25px;
    font-size: 12px;
`,Xf.ButtonContainer=Fo.div`
    display: flex;
    width:20%;
    text-align: center;
    position:relative;
    top:7vh;
    left:30%;
`,Xf.Button=Fo.div`
    ${Xo};
    width:80%;
    padding:4% 0;
    margin-left: 10%;
    ${Vo}
    height:70%;
    text-align: center;
    border-radius: 0.5rem;
    color:white;
    background-color:${qo.PALETTE.darkGray};
    cursor: pointer;
`;const Jf=Xf,Zf=()=>{const[e,t]=(0,r.useState)([]),n=(0,r.useRef)(null),[o,i]=(0,r.useState)(""),[a,l]=(0,r.useState)(""),[s,c]=(0,r.useState)(""),u=rt();return(0,oi.jsx)("div",{children:(0,oi.jsxs)(Jf.Container,{children:[(0,oi.jsxs)(Jf.TitleContainer,{children:[(0,oi.jsx)(Jf.TitleHightlight,{children:(0,oi.jsx)("img",{src:"./global/images/postpage/board.png",alt:"\uac8c\uc2dc\ud310"})}),(0,oi.jsx)(Jf.TitleText,{children:"\uae00\uc4f0\uae30"})]}),(0,oi.jsx)(Jf.Line,{}),(0,oi.jsxs)(Jf.BodyContainer,{children:[(0,oi.jsx)("input",{type:"text",placeholder:"\uc81c\ubaa9",id:"title",value:o,onChange:e=>{const t=e.target.value;t.length<=10&&i(t)}}),(0,oi.jsx)("textarea",{id:"body",value:a,onChange:e=>l(e.target.value)}),(0,oi.jsx)(Jf.ImageButtonContainer,{children:(0,oi.jsx)("div",{onClick:()=>{n.current.click()},style:{cursor:"pointer"},children:(0,oi.jsx)("img",{src:"./global/images/postpage/pictureButton.png",alt:"Upload"})})}),(0,oi.jsx)("input",{type:"file",accept:"image/png, image/jpeg",multiple:!0,ref:n,onChange:n=>{const r=Array.from(n.target.files);r.length+e.length>5?alert("\ucd5c\ub300 5\uac1c\uc758 \uc774\ubbf8\uc9c0\ub9cc \uc5c5\ub85c\ub4dc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."):t((e=>[...e,...r]))},style:{display:"none"}}),(0,oi.jsx)(Jf.ImagePreviewContainer,{children:e.map(((e,n)=>(0,oi.jsxs)(Jf.ImagePreview,{children:[(0,oi.jsx)("img",{src:URL.createObjectURL(e),alt:`\ubbf8\ub9ac\ubcf4\uae30 ${n+1}`}),(0,oi.jsx)(Jf.RemoveButton,{onClick:()=>(e=>{t((t=>t.filter(((t,n)=>n!==e))))})(n),children:"X"})]},n)))})]}),(0,oi.jsx)(Jf.Line,{}),(0,oi.jsxs)(Jf.ButtonContainer,{children:[(0,oi.jsx)(Jf.Button,{onClick:async()=>{if(!o.trim())return void alert("\uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.");const t={content:a,title:o,boardType:"BOARD"},n=new FormData;n.append("boardRequest",JSON.stringify(t)),e.forEach(((e,t)=>{n.append("images",e)}));try{const e=localStorage.getItem("accessToken"),t=await Td.post("/v1/board",n,{headers:{Authorization:`Bearer ${e}`,"Content-Type":"multipart/form-data"}});console.log("Post created successfully:",t.data),u("/posts")}catch(r){r.response?console.log("Server error:",r):console.error("Network or other error:",r)}},children:"\uc800\uc7a5"}),(0,oi.jsx)(Jf.Button,{onClick:()=>{u("/posts")},children:"\ucde8\uc18c"})]})]})})},ep=()=>(0,oi.jsx)("div",{children:(0,oi.jsx)(yt,{})}),tp=()=>(0,oi.jsx)("div",{children:(0,oi.jsx)(yt,{})}),np={};np.Container=Fo.div`
    width: 100%;
    height:auto;
    background-color:${qo.PALETTE.background};
    /* height:100%; */
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-x: hidden;
`,np.TitleContainer=Fo.div`
    ${Yo}; 
    width: 100%;
    padding: 7% 10% 3% 10%;
    display: flex;
    justify-content: space-between;
               
`,np.TitleHightlight=Fo.div`
    
    width:100%;
    height:100%;
    img{
        position:relative;
        
        width:15%;
        margin-left:10%;
        margin-top: 5%;
    }  
`,np.PostList=Fo.div`
    width: 100%;
    margin-top: 2%;
    display: flex;
    flex-direction: column;
    gap: 15px; /* 게시글 사이의 간격 */
`,np.PostItem=Fo.div`
    padding: 1.5%;
    background-color: white;
    border-radius: 0.5rem;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    /* height:100%; */
    display: flex;
    flex-direction: column;
    gap: 15px;
`,np.TitleBody=Fo.div`
    display: flex;
    align-items: center;
    
`,np.PostTitle=Fo.div`
    ${Xo}; 
    font-weight: bold;
    color: #333;
    white-space: nowrap; 
`,np.PostContent=Fo.div`
    ${ti}; 
    padding-left: 0.5%;
    color: #717171;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis; 
`,np.UnderTitleContainer=Fo.div`
    display: flex;
    align-items: center; 
    position:relative;
    
`,np.PostInfo=Fo.div`
    padding-left: 1%;
    font-size: ${ti};
    color: ${qo.PALETTE.darkGray};
`,np.LikeContainer=Fo.div`

  display: flex;
  align-items: center;
  gap: 5px; /* 아이콘과 좋아요 개수 사이 간격 */
    cursor: pointer;
  font-size: ${ti};
  color: ${qo.PALETTE.gray};
  svg {
    font-size: ${Zo};
    transition: color 0.3s ease;
  }

  span {
    font-size: 1rem;
    font-weight: bold;
  }

 
 
`,np.CommentContainer=Fo.div`
  
  display: flex;
  align-items: center;
  margin-left: 7px;
  gap: 3px; /* 아이콘과 좋아요 개수 사이 간격 */
  font-size: ${ti};
  color: ${qo.PALETTE.gray};
  svg {
    font-size: ${Zo};
  }

`,np.LatestPostContainer=Fo.div`
    
    position: relative;
    top:-3vh;
    width:80%;
    height:auto;
    border-radius:0.5rem;
    padding:2%;
    background-color: #D9D9D9 ;
`,np.TitleButton=Fo.div`
    display: flex;
    align-items: center;
    justify-content: center;
    ${Xo};
    width:45%;
    padding: 4%;
    border-radius: 0.5rem;
    color:white;
    background-color:#2AA871;
    border:2px solid ${qo.PALETTE.green};
    line-height: 130%;
    cursor: pointer;
    display: none;
    &.goToWrite{
        background-color: white;
        color:#2AA871;
        border:2px solid ${qo.PALETTE.green};

    }
`,np.MyPostTitle=Fo.div`
    position:relative;
    width:100%;
    height:100%;
    left: 10.5%;
    top:-2.5vh;
    
    img{
        width:20%;
    }
    
`,np.PaginationContainer=Fo.div`
    position: relative;
    display: flex;
    justify-content: center;
    left:45%;
    /* gap: 10px; */
    margin:3% 0;
    width:10%;
`,np.PageButton=Fo.button`
    ${Zo}
    padding: 0% 7%;
    border-radius: 50%;
    border: none;
    background-color: #D9D9D9;
    color: black;
    cursor: pointer;
     background-color: ${e=>{let{isActive:t}=e;return t?"#717171":"transparent"}};
    color: ${e=>{let{isActive:t}=e;return t?"white":"black"}};
    
`,np.PostImage=Fo.div`
    position: absolute;
    border:none;
    right:4%;
    
    img{
        width:60px;
        height:55px;
        object-fit: cover;
        
        @media (max-width: 1024px) {
            width:35px;
            height:35px;
        }

        @media (max-width: 768px) {
            width:25px;
            height:25px;
        }

        @media (max-width: 480px) {
            width:20px;
            height:20px;
        }
    }
`,np.TitleButtonContainer=Fo.div`
    display: flex;
    justify-content: space-between;
    width:20%;
    position: absolute;
    right:10%;
    /* top:5vh; */
`;const rp=np,op=()=>{const e=rt(),[t,n]=(0,r.useState)([]),[o,i]=(0,r.useState)(0),[a,l]=(0,r.useState)(1),[s,c]=(0,r.useState)(0);console.log(t),(0,r.useEffect)((()=>{(e=>{const t=localStorage.getItem("accessToken");Td.get(`/v1/board/mypost?boardType=BOARD&page=${e}&size=10`,{headers:{Authorization:`Bearer ${t}`}}).then((e=>{console.log(e.data),n(e.data.data),l(e.data.pageInfo.totalPages)})).catch((e=>{console.error("Error fetching posts:",e)}))})(o)}),[o]);const u=5*s,d=Math.min(u+5,a);return(0,oi.jsx)("div",{children:(0,oi.jsxs)(rp.Container,{children:[(0,oi.jsx)(rp.TitleHightlight,{children:(0,oi.jsx)("img",{src:"./global/images/postpage/board.png",alt:"\uac8c\uc2dc\ud310"})}),(0,oi.jsx)(rp.TitleContainer,{children:(0,oi.jsxs)(rp.TitleButtonContainer,{style:{display:"none"},children:[(0,oi.jsx)(rp.TitleButton,{children:"\uae00\uc4f0\uae30"}),(0,oi.jsx)(rp.TitleButton,{children:"\ub0b4\uac00 \uc4f4 \uae00"})]})}),(0,oi.jsx)(rp.MyPostTitle,{children:(0,oi.jsx)("img",{src:"./global/images/postpage/myEssay.png",alt:"\uac8c\uc2dc\ud310"})}),(0,oi.jsxs)(rp.LatestPostContainer,{children:[t[0]?(0,oi.jsx)(rp.PostList,{children:t.map((t=>(0,oi.jsxs)(rp.PostItem,{onClick:()=>{return n=t.boardId,void e(`/posts/postdetail?boardId=${n}`);var n},children:[(0,oi.jsxs)(rp.TitleBody,{children:[(0,oi.jsx)(rp.PostTitle,{children:t.title}),(0,oi.jsx)(rp.PostContent,{children:t.content})]}),t.imageUrls[0]&&(0,oi.jsx)(rp.PostImage,{children:(0,oi.jsx)("img",{src:t.imageUrls[0]})}),(0,oi.jsxs)(rp.UnderTitleContainer,{children:[(0,oi.jsxs)(rp.LikeContainer,{children:[(0,oi.jsx)(Zs,{icon:t.isLiked?tc:nc,onClick:()=>(t.boardId,void t.isLiked),style:{cursor:"pointer",color:t.isLiked?"red":"gray"}}),(0,oi.jsx)("div",{children:t.likeCount})]}),(0,oi.jsxs)(rp.CommentContainer,{children:[(0,oi.jsx)(Zs,{icon:rc}),(0,oi.jsx)("div",{children:t.commentCount})]}),(0,oi.jsx)(rp.PostInfo,{children:new Date(new Date(t.createdAt).getTime()+324e5).toLocaleString("ko-KR")})]})]},t.boardId)))}):(0,oi.jsx)("div",{children:"\uccab \uac8c\uc2dc\uae00\uc744 \uc791\uc131\ud574\ubcf4\uc138\uc694!"}),(0,oi.jsxs)(rp.PaginationContainer,{children:[(0,oi.jsx)(rp.PageButton,{onClick:()=>{s>0&&(c(s-1),i(5*(s-1)))},disabled:0===s,children:"<"}),Array.from({length:d-u},((e,t)=>(0,oi.jsx)(rp.PageButton,{onClick:()=>{i(u+t)},isActive:o===u+t,children:u+t+1},t))),(0,oi.jsx)(rp.PageButton,{onClick:()=>{5*(s+1)<a&&(c(s+1),i(5*s))},disabled:d>=a,children:">"})]})]})]})})},ip={};ip.Container=Fo.div`
    width: 100%;
    /* height:100vh; */
    /* margin-bottom: 10%; */
    /* height:100%; */
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-x: hidden;
  
`,ip.TitleHightlight=Fo.div`
    /* position:relative; */
    width:100%;
    height:100%;
    
    img{
        position:relative;
        
        width:15%;
        margin-left:10%;
        margin-top: 5%;
    }          
`;const ap=ip,lp=()=>(0,oi.jsxs)("div",{children:[(0,oi.jsx)(ap.Container,{children:(0,oi.jsx)(ap.TitleHightlight,{children:(0,oi.jsx)("img",{src:"./global/images/mypage/myPage.png",alt:"\uac8c\uc2dc\ud310"})})}),(0,oi.jsx)(yt,{})]}),sp=()=>(0,oi.jsx)("div",{children:(0,oi.jsx)(yt,{})});var cp=n(252),up=n.n(cp);const dp={};dp.Background=Fo.div`
    width:100%;
    height:120vh;
    /* height: 100%; */
    margin-bottom: 40%;
    /* height: 100vh; */
    position: relative;
    /* overflow: auto; */
    /* overflow: hidden; */
    ${Ko}
    background-color: ${qo.PALETTE.background};
`,dp.Title=Fo.div`
    ${Ko};
    div:nth-child(2) {
        position: absolute;
        top:22%;
        width:60%;
        height:2px;
        background-color: black;

        
    }

`,dp.TitleHightLight=Fo.div`
        position: absolute;
        top: 7.5%;
        left:20%;
        width:28%;
        img{
            width:100%
        }
    /* width:100%;
    height:100%;
    
    img{
        position:relative;
        
        width:15%;
        margin-left:10%;
        margin-top: 5%;
    }   */
`,dp.CalendarContainer=Fo.div`
  width: 60%;
  /* height: 450px; */
  margin: auto;
  height: auto;
  position: absolute;
  top:10%;
  padding-top: 4%;
  
`,dp.CalendarHeadContainer=Fo.div`
    display:flex;
    justify-content: space-between;
    position: relative;
    /* width:90%; */
    height:10%;
    margin:3% 2%;
    padding-top: 5%;
    `,dp.ArrowsWrapper=Fo.div`
        ${Vo};
        background-color: #86A789;
        box-sizing: border-box;
        box-shadow: 0.3px 0.3px 1px 0.5px gray;
        border-radius: 1.5rem;
        
        & div{
            color:white; 
            ${Xo};
            position: relative;
            top:1px;
            
        }
       & button{
        cursor: pointer;
        color:white;
        ${Qo}
        background: none;
        border: none;
        box-shadow:none;
        margin: 0px auto;
        padding:0px 8px;
        position: relative;
        }
    
`,dp.SelectWrapper=Fo.h3`
    position:relative;
    display: flex;  /* flexbox 사용 */
    gap: 13%; 
    & select {
        cursor: pointer;
        outline: none;
        box-sizing: border-box;
        box-shadow: 0.3px 0.3px 1px 0.5px gray;
        ${Qo}
        font-weight: 500;
        border:none;
        padding: 4px;
        border-radius: 1.5rem;
        background-color: #86A789;
        color:white;
        
        & option {
            cursor: pointer;
            background-color: white;
            padding: 4px;
            ${Zo}
            color:#717171;
        }
    }
`,dp.CalendarBodyContainer=Fo.div`
    background-color: white;
    width:100%;
    height:1050px;
    padding:7% 3%;
    border-radius: 1.5rem;
    position:relative;
   
    @media (max-width: 1024px) {
        height: 700px;
    }

    
    @media (max-width: 768px) {
        height: 570px;
    }


    @media (max-width: 480px) {
        height: 500px;
    }
`,dp.LineWrapper=Fo.div`
    ${Ko}
    width: 100%;
    height:100%;
    position: relative;
    margin-top: 1%;
    & div {
        position: relative;
        width: 90%;
        height: 1px; 
        background-color: #717171; 
        /* margin:8%; */
        z-index: 999;
       
    }
    

`,dp.WeekWrapper=Fo.div`
    ${Xo}
    /* margin-top: 10%; */
    & .week{
        display: flex;
        position: relative;
        padding-bottom:3%;
        justify-content: space-between;
        & .weekday{
            width: calc(100% / 7); 
            text-align: center;
        }
    }
`,dp.DateWrapper=Fo.div`
    ${Zo}
    cursor:pointer;
    .date {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 10px;

        .weekday {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            background-color: white;
            border: 1px solid #ddd;
            border-radius: 8px;
            width:110px;
            height: 130px;
            padding: 5px;
            overflow: hidden;
            object-fit: cover;
            @media (max-width: 1024px) {
                width:50px;
                height:70px;
            }

            
            @media (max-width: 768px) {
                width:30px;
                height:40px;
            }


            @media (max-width: 480px) {
                width:20px;
                height:25px;
            }
            &.empty {
                border: none; /* 비어 있는 날짜는 테두리 제거 */
                background-color: transparent; /* 배경색도 제거 */
            }

            &.today {
                border: 2px solid ${qo.PALETTE.green};
            }

            .day-number {
                ${Zo}
            }

            img {
                width: 65px;
                height: 90px;
                margin-top: 5px;
                object-fit: cover;
                @media (max-width: 1024px) {
                    width: 30px;
                    height: 45px;
                }

                
                @media (max-width: 768px) {
                    width: 15px;
                    height: 23px;
                }


                @media (max-width: 480px) {
                    width:10px;
                    height:15px;
                }
            }

            .additional-books {
                position: absolute;
                bottom: 5px;
                right: 3px;
                background: ${qo.PALETTE.green};
                color: white;
                font-size: 12px;
                font-weight: bold;
                border-radius: 50%;
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
`;const fp=dp,pp=up().bind(fp),hp=()=>{const e=rt(),t={year:(new Date).getFullYear(),month:(new Date).getMonth()+1,date:(new Date).getDate(),day:(new Date).getDay()},n=["Su","Mo","Tu","We","Th","Fr","Sa"],[o,i]=(0,r.useState)(t.year),[a,l]=(0,r.useState)(t.month),s=new Date(o,a,0).getDate(),[c,u]=(0,r.useState)([]),d=(0,r.useCallback)((async()=>{const e=localStorage.getItem("accessToken");Td.get(`/v1/board/calendar/books?year=${o}&month=${a}`,{headers:{Authorization:`Bearer ${e}`}}).then((e=>{console.log(e.data.data),u(e.data.data)})).catch((e=>{console.error("Error fetching calendar:",e)}))}),[o,a]);(0,r.useEffect)((()=>{d()}),[d]);const f=(0,r.useCallback)((()=>{1===a?(l(12),i(o-1),2024===o&&i(2028)):l(a-1)}),[a]),p=(0,r.useCallback)((()=>{12===a?(l(1),i(o+1),2028===o&&i(2024)):l(a+1)}),[a]),h=(0,r.useCallback)((()=>{let e=[];for(let t=0;t<12;t++)e.push((0,oi.jsxs)("option",{value:t+1,children:[t+1,"\uc6d4"]},t+1));return(0,oi.jsx)("select",{className:"monthSelect",onChange:m,value:a,children:e})}),[a]),g=(0,r.useCallback)((()=>{let e=[];const n=t.year+4;for(let r=t.year;r<n+1;r++)e.push((0,oi.jsxs)("option",{value:r,children:[r,"\ub144"]},r));return(0,oi.jsx)("select",{onChange:v,value:o,children:e})}),[o]),m=e=>{l(Number(e.target.value))},v=e=>{i(Number(e.target.value))},b=(0,r.useCallback)((()=>{let e=[];return n.forEach((t=>{e.push((0,oi.jsx)("div",{className:"weekday",children:t},`week-${t}`))})),e}),[]),y=t=>{const n=`${o}-${String(a).padStart(2,"0")}-${String(t).padStart(2,"0")}`,r=c.find((e=>e.date===n));r?e(`/bookcalendar/detail?date=${n}`):alert("\ud574\ub2f9 \ub0a0\uc9dc\uc5d0 \uc5d0\uc138\uc774\ub97c \uc791\uc131\ud558\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.")},x=(0,r.useCallback)((()=>{let e=[];const n=new Date(o,a-1,1).getDay();for(let t=0;t<n;t++)e.push((0,oi.jsx)("div",{className:"weekday empty"},`empty-${t}`));for(let i=1;i<=s;i++){var r;const n=`${o}-${String(a).padStart(2,"0")}-${String(i).padStart(2,"0")}`,l=c.find((e=>e.date===n)),s=!!l,u=(null===l||void 0===l||null===(r=l.books[0])||void 0===r?void 0:r.bookCoverUrl)||null,d=(null===l||void 0===l?void 0:l.books.length)>1?l.books.length-1:0;e.push((0,oi.jsxs)("div",{className:pp("weekday",{today:t.year===o&&t.month===a&&t.date===i,hasData:s}),onClick:()=>y(i),children:[(0,oi.jsx)("div",{className:"day-number",children:i}),u&&(0,oi.jsxs)("div",{children:[(0,oi.jsx)("img",{src:u,alt:`Book Cover for ${n}`}),d>0&&(0,oi.jsxs)("span",{className:"additional-books",children:["+",d]})]})]},`day-${i}`))}return e}),[o,a,s,c]);return(0,oi.jsx)("div",{children:(0,oi.jsxs)(fp.Background,{children:[(0,oi.jsxs)(fp.Title,{children:[(0,oi.jsx)(fp.TitleHightLight,{children:(0,oi.jsx)("img",{src:"./global/images/bookcalendar/bookCalendarHightlight.png"})}),(0,oi.jsx)("div",{})]}),(0,oi.jsxs)(fp.CalendarContainer,{children:[(0,oi.jsxs)(fp.CalendarHeadContainer,{children:[(0,oi.jsxs)(fp.SelectWrapper,{children:[g()," ",h()]}),(0,oi.jsxs)(fp.ArrowsWrapper,{children:[(0,oi.jsx)("button",{onClick:f,children:"< "}),(0,oi.jsx)("div",{children:"\u3163"}),(0,oi.jsx)("button",{onClick:p,children:">"})]})]}),(0,oi.jsxs)(fp.CalendarBodyContainer,{children:[(0,oi.jsx)(fp.WeekWrapper,{children:(0,oi.jsx)("div",{className:"week",children:b()})}),(0,oi.jsx)(fp.DateWrapper,{children:(0,oi.jsx)("div",{className:"date",children:x()})})]})]})]})})},gp=()=>(0,oi.jsx)("div",{children:(0,oi.jsx)(yt,{})}),mp={};mp.Container=Fo.div`
    width: 100%;
    height:auto;
    background-color:${qo.PALETTE.background};
    /* height:100%; */
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-x: hidden;
`,mp.TitleContainer=Fo.div`
     
    width: 100%;
    padding: 3% 10% 3% 10%;
    display: flex;
    justify-content: space-between;
               
`,mp.TitleHightlight=Fo.div`
   
    width:100%;
    height:100%;
    img{
        position:relative;
        
        width:15%;
        margin-left:10%;
        margin-top: 5%;
    }             
`,mp.TitleButtonContainer=Fo.div`
    display: flex;
    justify-content: space-between;
    width:20%;
    position: absolute;
    right:0%;
    /* top:5vh; */
`,mp.TitleButton=Fo.div`
    display: flex;
    align-items: center;
    justify-content: center;
    ${Xo};
    width:50%;
    padding: 4%;
    border-radius: 0.5rem;
    background-color: white;
    color:#2AA871;
    border:2px solid ${qo.PALETTE.green};
    line-height: 130%;
    cursor: pointer;
`,mp.HotPostContainer=Fo.div`
    position: relative;
    top:5vh;
    width:80%;
    height:auto;
    border-radius:0.5rem;
    /* border-radius: 20px; */
    padding:2%;
    background-color: #CFDEC8 ;
`,mp.HotPostTitle=Fo.div`
    position:relative;
    width:100%;
    height:100%;
    left: 10.5%;
    top:5.3vh;
    
    img{
        width:20%;
    }
    
`,mp.PostContainer=Fo.div`
    display: flex;
    justify-content: flex-start;
    width:100%;
`,mp.TextContainer=Fo.div`
    width:90%;
    margin-left: 2%;
   
`,mp.BookContainer=Fo.div`
    width:8%;
    line-height: 1.3;
`,mp.BookImage=Fo.div`
    
    /* width:100%; */
    

    img{
        width:80px;
        height:120px;
        object-fit: cover;
        
        @media (max-width: 1024px) {
            width:50px;
            height:85px;
        }

        @media (max-width: 768px) {
            width:30px;
            height:50px;
        }

        @media (max-width: 480px) {
            width:20px;
            height:35px;
        }
    }
`,mp.BookTitle=Fo.div`
    ${Zo}
    padding-left: 3%;
`,mp.Writer=Fo.div`
    ${ti}
    padding-left: 3%;
    color:#717171;
`,mp.PostList=Fo.div`
    width: 100%;
    margin-top: 2%;
    display: flex;
    flex-direction: column;
    gap: 15px; /* 게시글 사이의 간격 */
`,mp.PostItem=Fo.div`
    padding: 1.5%;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    height:150px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 15px;
    position:relative;
`,mp.TitleBody=Fo.div`
   
    
`,mp.PostTitle=Fo.div`
    ${Xo}; 
    font-weight: bold;
    color: #333;
    white-space: nowrap; 
`,mp.PostContent=Fo.div`
    ${ti}; 
    color: #717171;
    /* white-space: nowrap;  */
    overflow: hidden;
    text-overflow: ellipsis;
    max-height:50%;
    padding-left: 0.1%;
    padding-top:1%;
    padding-bottom:1.5%;
    line-height: 1.2;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* 원하는 줄 수로 변경 가능 */
    -webkit-box-orient: vertical;
`,mp.UnderTitleContainer=Fo.div`
    display: flex;
    position:absolute;
    bottom:12.5%;
    
`,mp.PostInfo=Fo.div`
    padding-left: 5%;
    /* width:50%; */
    ${ti}
    color: ${qo.PALETTE.darkGray};
    white-space: nowrap; 
`,mp.LikeContainer=Fo.div`

    display: flex;
    align-items: center;
    gap: 5px; /* 아이콘과 좋아요 개수 사이 간격 */
    cursor: pointer;
    ${ti};
    color: ${qo.PALETTE.gray};
    svg {
        font-size: ${Zo};
        transition: color 0.3s ease;
    }
    span {
        font-size: 1rem;
        font-weight: bold;
    }

`,mp.CommentContainer=Fo.div`
  
    display: flex;
    align-items: center;
    margin-left: 7px;
    gap: 3px; /* 아이콘과 좋아요 개수 사이 간격 */
    ${ti}
    color: ${qo.PALETTE.gray};
    svg {
        font-size: ${Zo};
    }

`,mp.LatestPostContainer=Fo.div`
    position: relative;
    top:5vh;
    width: 80%;
    height:auto;
    margin-top: 3%;
    margin-bottom: 10%;
    padding: 2%;
    background-color: #D9D9D9;
    border-radius: 0.5rem;
  
`,mp.PaginationContainer=Fo.div`
    position: relative;
    display: flex;
    justify-content: center;
    left:45%;
    /* gap: 10px; */
    margin:3% 0;
    width:10%;
`,mp.PageButton=Fo.button`
    ${Zo}
    padding: 0% 7%;
    border-radius: 50%;
    border: none;
    background-color: #D9D9D9;
    color: black;
    cursor: pointer;
     background-color: ${e=>{let{isActive:t}=e;return t?"#717171":"transparent"}};
    color: ${e=>{let{isActive:t}=e;return t?"white":"black"}};
    
`;const vp=mp,bp=()=>{const e=rt(),[t,n]=(0,r.useState)([]),[o,i]=(0,r.useState)([]),[a,l]=(0,r.useState)(0),[s,c]=(0,r.useState)(1),[u,d]=(0,r.useState)(0);(0,r.useEffect)((()=>{var e;e=a,Td.get(`/v1/board/?boardType=FEED&page=${e}&size=10`).then((e=>{i(e.data.data),c(e.data.pageInfo.totalPages),console.log(e.data.data)})).catch((e=>{console.error("Error fetching eesays:",e)}))}),[a]);(0,r.useEffect)((()=>{Td.get("/v1/board/hotpost/essay?page=0&size=3").then((e=>{console.log(e.data),n(e.data.data)})).catch((e=>{console.error("Error fetching hot posts:",e)}))}),[a]);const f=5*u,p=Math.min(f+5,s),h=t=>{e(`/essay/essaydetail?boardId=${t}`)};return(0,oi.jsx)("div",{children:(0,oi.jsxs)(vp.Container,{children:[(0,oi.jsx)(vp.TitleHightlight,{children:(0,oi.jsx)("img",{src:"./global/images/essaypage/essayhightlight.png",alt:"\uac8c\uc2dc\ud310"})}),(0,oi.jsx)(vp.TitleContainer,{children:(0,oi.jsx)(vp.TitleButtonContainer,{children:(0,oi.jsx)(vp.TitleButton,{className:"goToWrite",onClick:()=>{e("/essay/createEssay")},children:"\uc5d0\uc138\uc774 \uc4f0\uae30"})})}),(0,oi.jsx)(vp.HotPostTitle,{children:(0,oi.jsx)("img",{src:"./global/images/essaypage/hotessay.png",alt:"\uac8c\uc2dc\ud310"})}),(0,oi.jsx)(vp.HotPostContainer,{children:(0,oi.jsx)(vp.PostList,{children:t.map((e=>(0,oi.jsx)(vp.PostItem,{onClick:()=>h(e.boardId),children:(0,oi.jsxs)(vp.PostContainer,{children:[(0,oi.jsx)(vp.BookContainer,{children:(0,oi.jsx)(vp.BookImage,{children:(0,oi.jsx)("img",{src:e.bookImage,alt:"BookCover"})})}),(0,oi.jsxs)(vp.TextContainer,{children:[(0,oi.jsxs)(vp.TitleBody,{children:[(0,oi.jsx)(vp.PostTitle,{children:e.title}),(0,oi.jsx)(vp.PostContent,{children:e.content})]}),(0,oi.jsxs)(vp.UnderTitleContainer,{children:[(0,oi.jsxs)(vp.LikeContainer,{children:[(0,oi.jsx)(Zs,{icon:e.isLiked?tc:nc}),(0,oi.jsx)("div",{children:e.likeCount})]}),(0,oi.jsxs)(vp.CommentContainer,{children:[(0,oi.jsx)(Zs,{icon:rc}),(0,oi.jsx)("div",{children:e.commentCount})]}),(0,oi.jsxs)(vp.PostInfo,{children:[e.nickname," |"," ",new Date(new Date(e.createdAt).getTime()+324e5).toLocaleString("ko-KR")]})]})]})]})},e.boardId)))})}),(0,oi.jsxs)(vp.LatestPostContainer,{children:[(0,oi.jsx)(vp.PostList,{children:o.map((e=>(0,oi.jsx)(vp.PostItem,{onClick:()=>h(e.boardId),children:(0,oi.jsxs)(vp.PostContainer,{children:[(0,oi.jsx)(vp.BookContainer,{children:(0,oi.jsx)(vp.BookImage,{children:(0,oi.jsx)("img",{src:e.bookImage,alt:"BookCover"})})}),(0,oi.jsxs)(vp.TextContainer,{children:[(0,oi.jsxs)(vp.TitleBody,{children:[(0,oi.jsx)(vp.PostTitle,{children:e.title}),(0,oi.jsx)(vp.PostContent,{children:e.content})]}),(0,oi.jsxs)(vp.UnderTitleContainer,{children:[(0,oi.jsxs)(vp.LikeContainer,{children:[(0,oi.jsx)(Zs,{icon:e.isLiked?tc:nc}),(0,oi.jsx)("div",{children:e.likeCount})]}),(0,oi.jsxs)(vp.CommentContainer,{children:[(0,oi.jsx)(Zs,{icon:rc}),(0,oi.jsx)("div",{children:e.commentCount})]}),(0,oi.jsxs)(vp.PostInfo,{children:[e.nickname," |"," ",new Date(new Date(e.createdAt).getTime()+324e5).toLocaleString("ko-KR")]})]})]})]})},e.boardId)))}),(0,oi.jsxs)(vp.PaginationContainer,{children:[(0,oi.jsx)(vp.PageButton,{onClick:()=>{u>0&&(d(u-1),l(5*(u-1)))},disabled:0===u,children:"<"}),Array.from({length:p-f},((e,t)=>(0,oi.jsx)(vp.PageButton,{onClick:()=>{l(f+t)},isActive:a===f+t,children:f+t+1},t))),(0,oi.jsx)(vp.PageButton,{onClick:()=>{5*(u+1)<s&&(d(u+1),l(5*(u+1)))},disabled:p>=s,children:">"})]})]})]})})},yp={};yp.Container=Fo.div`
    width: 80%;
    height:auto;
    background-color: ${qo.PALETTE.background};
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    padding-bottom: 10%;
    margin: 0 auto;
`,yp.TitleHightlight=Fo.div`
    position:relative;
    width:100%;
    height:100%;
    img{
        position:relative;
        /* top:-3vh; */
        width:25%;
        
    }          
`,yp.TitleContainer=Fo.div`
    
    ${Yo};
    width: 100%;
    padding: 7% 10% 0% 10%;
               
`,yp.TitleText=Fo.div`
    position:relative;
    top:7vh;
    padding:1%;
           
`,yp.Line=Fo.div`
    width:80%;
    height:1px;
    margin-bottom: 2%;
    background-color:black;
    position:relative;
    top:7vh;
`,yp.BodyContainer=Fo.div`
  
    width: 80%;
    height:600px;
    @media (max-width: 1024px) {
        
        height: 400px; 
    }

    @media (max-width: 768px) {
        height: 300px;  
    }

    @media (max-width: 480px) {
        height: 200px; 
    }
   
    background-color: white;
    margin-bottom: 2%;
    border-radius: 20px;
    padding:2%;
    position:relative;
    top:7vh;
    overflow-y: auto;
    & #title{
        width:100%;
        height:15%;
        border: none; 
        outline: none;
        border-bottom: 1px solid gray;
        font-size:${qo.FONT_SIZE.h1};
        ${Qo}
    }

    & #body{
        width:100%;
        height:50%;
        resize: none;
        border: none; 
        border-bottom: 1px solid gray;
        outline: none;
        padding:2% 0px;
        ${Jo};
    }
`,yp.ImagePreviewContainer=Fo.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 10px;
    
`,yp.ImageButtonContainer=Fo.div`
    width:100%;
    img{
        width:15%;
    }
`,yp.ImagePreview=Fo.div`
    position: relative;
    width:140px;
    height:140px;
    @media (max-width: 1024px) {
        
        width: 90px;
        height:90px;
    }

    @media (max-width: 768px) {
        width: 60px;
        height:60px;
    }

    @media (max-width: 480px) {
        width: 40px; 
        height:40px;
    }
    img{
        position:absolute;
        /* top:-100%; */
        width:100%;
        height:100%;
        border-radius: 0.5rem;
    }
`,yp.RemoveButton=Fo.button`
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: #717171;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    width: 25px;
    height: 25px;
    font-size: 12px;
`,yp.ButtonContainer=Fo.div`
    display: flex;
    width:20%;
    text-align: center;
    position:relative;
    top:7vh;
    left:30%;
`,yp.Button=Fo.div`
    ${Xo};
    width:80%;
    padding:4% 0;
    margin-left: 10%;
    ${Vo}
    height:70%;
    text-align: center;
    border-radius: 0.5rem;
    color:white;
    background-color:${qo.PALETTE.darkGray};
    cursor: pointer;
`;const xp=yp,wp=()=>{const[e,t]=(0,r.useState)([]),n=(0,r.useRef)(null),[o,i]=(0,r.useState)(""),[a,l]=(0,r.useState)(""),[s,c]=(0,r.useState)(""),u=tt(),{post:d}=u.state||{},f=rt();(0,r.useEffect)((()=>{d&&(i(d.title),l(d.content),c(d.boardId),t(d.images||[]))}),[d]);return(0,oi.jsx)("div",{children:(0,oi.jsxs)(xp.Container,{children:[(0,oi.jsxs)(xp.TitleContainer,{children:[(0,oi.jsx)(xp.TitleHightlight,{children:(0,oi.jsx)("img",{src:"./global/images/postpage/board.png",alt:"\uac8c\uc2dc\ud310"})}),(0,oi.jsx)(xp.TitleText,{children:"\uae00 \uc218\uc815\ud558\uae30"})]}),(0,oi.jsx)(xp.Line,{}),(0,oi.jsxs)(xp.BodyContainer,{children:[(0,oi.jsx)("input",{type:"text",placeholder:"\uc81c\ubaa9",id:"title",value:o,onChange:e=>i(e.target.value)}),(0,oi.jsx)("textarea",{id:"body",value:a,onChange:e=>l(e.target.value)}),(0,oi.jsx)(xp.ImageButtonContainer,{children:(0,oi.jsx)("div",{onClick:()=>{n.current.click()},style:{cursor:"pointer"},children:(0,oi.jsx)("img",{src:"./global/images/postpage/pictureButton.png",alt:"Upload"})})}),(0,oi.jsx)("input",{type:"file",accept:"image/png, image/jpeg",multiple:!0,ref:n,onChange:n=>{const r=Array.from(n.target.files);r.length+e.length>5?alert("\ucd5c\ub300 5\uac1c\uc758 \uc774\ubbf8\uc9c0\ub9cc \uc5c5\ub85c\ub4dc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."):t((e=>[...e,...r]))},style:{display:"none"}}),(0,oi.jsx)(xp.ImagePreviewContainer,{children:e.map(((e,n)=>(0,oi.jsxs)(xp.ImagePreview,{children:[(0,oi.jsx)("img",{src:URL.createObjectURL(e),alt:`\ubbf8\ub9ac\ubcf4\uae30 ${n+1}`}),(0,oi.jsx)(xp.RemoveButton,{onClick:()=>(e=>{t((t=>t.filter(((t,n)=>n!==e))))})(n),children:"X"})]},n)))})]}),(0,oi.jsx)(xp.Line,{}),(0,oi.jsxs)(xp.ButtonContainer,{children:[(0,oi.jsx)(xp.Button,{onClick:async()=>{if(!o.trim())return void alert("\uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.");const t={content:a,title:o,boardType:"BOARD"};console.log(a),console.log(o);const n=new FormData;n.append("boardRequest",new Blob([JSON.stringify(t)],{type:"application/json"})),e.forEach(((e,t)=>{n.append("images",e)}));try{const e=localStorage.getItem("accessToken"),t=await Td.patch(`/v1/board/${s}`,n,{headers:{Authorization:`Bearer ${e}`,"Content-Type":"multipart/form-data"}});console.log("Post modify successfully:",t.data),f(-1)}catch(r){r.response?console.log("Server error:",r):console.error("Network or other error:",r)}},children:"\uc800\uc7a5"}),(0,oi.jsx)(xp.Button,{onClick:()=>{f(-1)},children:"\ucde8\uc18c"})]})]})})},kp={};kp.Container=Fo.div`
    width: 80%;
    height:auto;
    background-color: ${qo.PALETTE.background};
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    padding-bottom: 10%;
    margin: 0 auto;
`,kp.TitleHightlight=Fo.div`
    position:relative;
    width:100%;
    height:100%;
    img{
        position:relative;
        /* top:-3vh; */
        width:25%;
        
    }          
`,kp.TitleContainer=Fo.div`
    
    ${Yo};
    width: 100%;
    padding: 7% 10% 0% 10%;
               
`,kp.UserInfo=Fo.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    line-height: 1.3;
`,kp.UserName=Fo.div`
    ${Zo}
`,kp.CreatedAt=Fo.div`
    ${ti}
    color:#717171;
`,kp.TitleHeader=Fo.div`
    position:relative;
    top:7vh;
    padding:1%;
    display: flex;
    align-items: center;
    gap:1%;
    span{
        width:7%;
        img{
            width:100%;
            border-radius: 50%;
        }
    }
`,kp.Line=Fo.div`
    width:80%;
    height:1px;
    margin-bottom: 2%;
    background-color:black;
    position:relative;
    top:7vh;
    &.line2{
        top:8vh;
    }
`,kp.BodyContainer=Fo.div`
    width: 80%;
    /* height:120vh; */
    height: auto;
    min-height: 300px;
    background-color: white;
    margin-bottom: 2%;
    border-radius: 1rem;
    padding:2%;
    position:relative;
    top:7vh;
    
    
`,kp.PostTitle=Fo.div`
    ${Go}
    padding-top: 1%;
    padding-bottom: 4%;
`,kp.PostContent=Fo.div`
    ${Jo}
    padding-bottom: 4%;
    word-wrap: break-word; /* 텍스트가 박스를 벗어나지 않게 함 */
    word-break: break-word; /* 긴 단어가 있을 경우 자동으로 줄바꿈 */
    overflow-wrap: break-word;
`,kp.ImageContainer=Fo.div`
    width:100%;
    
    img{
        width:100%;
        padding-bottom: 1%;
    }
`,kp.ButtonContainer=Fo.div`
    display: flex;
    width:25%;
    text-align: center;
    position:absolute;
    /* top:15%; */
    right:0%;
`,kp.Button=Fo.div`
    ${Xo};
    width:80%;
    padding:4% 0;
    margin-left: 10%;
    ${Vo}
    height:70%;
    text-align: center;
    border-radius: 0.5rem;
    color:white;
    background-color:${qo.PALETTE.darkGray};
    cursor: pointer;
`,kp.IconContainer=Fo.div`
    display: flex;
    align-self: flex-start;
    position:relative;
    top:7vh;
    left:10%;
    gap:8px;
`,kp.LikeContainer=Fo.div`

    display: flex;
    align-items: center;
    gap: 3px; 
    cursor: pointer;
    font-size: ${Zo};
    svg {
    font-size: ${Qo};
    }
    svg path {
        fill: red ;
    }
    span {
        color: ${qo.PALETTE.gray};
        font-size: 1rem;
        font-weight: bold;
    }
    
`,kp.CommentContainer=Fo.div`
  
  display: flex;
  align-items: center;
  margin-left: 7px;
  gap: 3px; 
  font-size: ${Zo};
  color: ${qo.PALETTE.gray};
  svg {
    font-size: ${Qo};
  }

`,kp.DeleteAccountContainer=Fo.div`
    position:absolute;
    z-index: 999;
    width:50%;
    height:20%;
    min-height: 200px;
    background-color:#E9E8E4 ;
    left:25%;
    /* bottom:5%; */
    ${Ko}
    border-radius: 1rem;

`,kp.DeleteText=Fo.div`
    position:absolute;
    top:30%;
    ${Xo}
    text-align: center;
`,kp.DeleteButtonContainer=Fo.div`
    position:absolute;
    top:65%;    
    display: flex;
    justify-content: center;
    width:50%;
    position: absolute;

    /* right:10%; */
`,kp.CancelButton=Fo.div`
    ${Vo}
    ${Xo};
    width:30%;
    padding: 2%;
    margin:3%;
    border-radius: 0.5rem;
    background-color: white;
    color:#2AA871;
    border:2px solid ${qo.PALETTE.green};
    line-height: 130%;
    cursor: pointer;
`,kp.DeleteButton=Fo.div`
    ${Vo}
    ${Xo};
    width:30%;
    padding: 2%;
    margin:3%;
    border-radius: 0.5rem;
    color:white;
    background-color:#2AA871;
    border:2px solid ${qo.PALETTE.green};
    line-height: 130%;
    cursor: pointer;
`;const Sp=kp,jp=()=>{const e=tt(),t=new URLSearchParams(e.search).get("boardId"),[n,o]=(0,r.useState)(null),[i,a]=(0,r.useState)(""),[l,s]=(0,r.useState)(!1),c=rt(),{user:u}=ff(),d=async()=>{try{const e=await Td.get(`/v1/board/${t}`);o(e.data),console.log(e.data)}catch(e){console.error("Error fetching post details:",e)}};(0,r.useEffect)((()=>{t&&(d(),(async()=>{if(u)try{const e=await Td.get(`/v1/like/list/${t}`),n=e.data.data;console.log(e.data.data);const r=n.some((e=>e.userId===u.userId));a(r),console.log(r)}catch(e){console.error("Error fetching like status:",e)}})())}),[t,u]),(0,r.useEffect)((()=>{d()}),[i]);return n?(0,oi.jsx)("div",{children:(0,oi.jsxs)(Sp.Container,{children:[(0,oi.jsxs)(Sp.TitleContainer,{children:[(0,oi.jsx)(Sp.TitleHightlight,{children:(0,oi.jsx)("img",{src:"./global/images/postpage/board.png",alt:"\uac8c\uc2dc\ud310"})}),(0,oi.jsxs)(Sp.TitleHeader,{children:[(0,oi.jsx)("span",{children:(0,oi.jsx)("img",{src:n.profileImageUrl})}),(0,oi.jsxs)(Sp.UserInfo,{children:[(0,oi.jsx)(Sp.UserName,{children:n.nickname}),(0,oi.jsx)(Sp.CreatedAt,{children:new Date(new Date(n.createdAt).getTime()+324e5).toLocaleString("ko-KR")})]}),(null===u||void 0===u?void 0:u.userId)===n.userId&&(0,oi.jsxs)(Sp.ButtonContainer,{children:[(0,oi.jsx)(Sp.Button,{onClick:()=>{c("/posts/postdetail/modifypost",{state:{post:n}})},children:"\uc218\uc815"}),(0,oi.jsx)(Sp.Button,{onClick:()=>{s(!l)},children:"\uc0ad\uc81c"})]})]})]}),(0,oi.jsx)(Sp.Line,{}),(0,oi.jsxs)(Sp.BodyContainer,{children:[l&&(0,oi.jsx)(hf,{visible:l,setVisible:s}),(0,oi.jsx)(Sp.PostTitle,{children:n.title}),(0,oi.jsx)(Sp.PostContent,{children:n.content}),(0,oi.jsx)(Sp.ImageContainer,{children:n.imageUrls.map(((e,t)=>(0,oi.jsx)("img",{src:e,alt:`\uc774\ubbf8\uc9c0 ${t+1}`},t)))})]}),(0,oi.jsxs)(Sp.IconContainer,{children:[(0,oi.jsxs)(Sp.LikeContainer,{children:[(0,oi.jsx)(Zs,{icon:i?tc:nc,onClick:async()=>{const e=localStorage.getItem("accessToken");if(!e)return alert("\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),void c("/login");try{const n=await Td.post(`/v1/like/${t}`,null,{headers:{Authorization:`Bearer ${e}`}});a(n.data.data.liked),o((e=>({...e,likeCount:n.data.data.likeCount})))}catch(n){console.error("Error liking the post:",n),alert("\uc88b\uc544\uc694 \uc694\uccad\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.")}}}),(0,oi.jsx)("div",{children:n.likeCount})]}),(0,oi.jsxs)(Sp.CommentContainer,{children:[(0,oi.jsx)(Zs,{icon:rc}),(0,oi.jsx)("div",{children:n.commentCount})]})]}),(0,oi.jsx)(Sp.Line,{className:"line2"}),(0,oi.jsx)(pf,{post:n,setPost:o})]})}):(0,oi.jsx)("div",{children:"Loading..."})},Cp={};Cp.Container=Fo.div`
    width: 100%;
    height:auto;
    background-color:${qo.PALETTE.background};
    /* height:100%; */
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-x: hidden;
    /* margin:5% 0; */
`,Cp.TitleContainer=Fo.div`
     
    width: 100%;
    padding: 3% 10% 3% 10%;
    display: flex;
    justify-content: space-between;
               
`,Cp.TitleHightlight=Fo.div`
   
    width:100%;
    height:100%;
    img{
        position:relative;
        
        width:15%;
        margin-left:10%;
        margin-top: 5%;
    }             
`,Cp.TitleButtonContainer=Fo.div`
    display: flex;
    justify-content: space-between;
    width:20%;
    position: absolute;
    right:0%;
    /* top:5vh; */
`,Cp.TitleButton=Fo.div`
    display: flex;
    align-items: center;
    justify-content: center;
    ${Xo};
    width:50%;
    padding: 4%;
    border-radius: 0.5rem;
    background-color: white;
    color:#2AA871;
    border:2px solid ${qo.PALETTE.green};
    line-height: 130%;
    cursor: pointer;
`,Cp.HotPostContainer=Fo.div`
    position: relative;
    top:5vh;
    width:80%;
    height:auto;
    border-radius:0.5rem;
    /* border-radius: 20px; */
    padding:2%;
    background-color: #CFDEC8 ;
`,Cp.HotPostTitle=Fo.div`
    position:relative;
    width:100%;
    height:100%;
    left: 10.5%;
    top:5.3vh;
    
    img{
        width:20%;
    }
    
`,Cp.PostContainer=Fo.div`
    display: flex;
    justify-content: flex-start;
    width:100%;
`,Cp.TextContainer=Fo.div`
    width:90%;
    margin-left: 2%;
   
`,Cp.BookContainer=Fo.div`
    width:8%;
    line-height: 1.3;
`,Cp.BookImage=Fo.div`
    align-self: flex-start;
    img{
        width:80px;
        height:120px;
        object-fit: cover;
        
        @media (max-width: 1024px) {
            width:50px;
            height:85px;
        }

        @media (max-width: 768px) {
            width:30px;
            height:50px;
        }

        @media (max-width: 480px) {
            width:20px;
            height:35px;
        }
    }
`,Cp.BookTitle=Fo.div`
    ${Zo}
    padding-left: 3%;
`,Cp.Writer=Fo.div`
    ${ti}
    padding-left: 3%;
    color:#717171;
`,Cp.PostList=Fo.div`
    width: 100%;
    margin-top: 2%;
    display: flex;
    flex-direction: column;
    gap: 15px; /* 게시글 사이의 간격 */
`,Cp.PostItem=Fo.div`
    padding: 1.5%;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    height:150px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 15px;
    position:relative;
`,Cp.TitleBody=Fo.div`
   
    
`,Cp.PostTitle=Fo.div`
    ${Xo}; 
    font-weight: bold;
    color: #333;
    white-space: nowrap; 
`,Cp.PostContent=Fo.div`
    ${ti}; 
    color: #717171;
    /* white-space: nowrap;  */
    overflow: hidden;
    text-overflow: ellipsis;
    max-height:50%;
    padding-left: 0.1%;
    padding-top:1%;
    padding-bottom:1.5%;
    line-height: 1.2;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* 원하는 줄 수로 변경 가능 */
    -webkit-box-orient: vertical;
`,Cp.UnderTitleContainer=Fo.div`
    display: flex;
    position:absolute;
    bottom:12.5%;
    
`,Cp.PostInfo=Fo.div`
    padding-left: 5%;
    /* width:50%; */
    ${ti}
    color: ${qo.PALETTE.darkGray};
    white-space: nowrap; 
`,Cp.LikeContainer=Fo.div`

    display: flex;
    align-items: center;
    gap: 5px; /* 아이콘과 좋아요 개수 사이 간격 */
    cursor: pointer;
    ${ti};
    color: ${qo.PALETTE.gray};
    svg {
        font-size: ${Zo};
        transition: color 0.3s ease;
    }
    span {
        font-size: 1rem;
        font-weight: bold;
    }

`,Cp.CommentContainer=Fo.div`
  
    display: flex;
    align-items: center;
    margin-left: 7px;
    gap: 3px; /* 아이콘과 좋아요 개수 사이 간격 */
    ${ti}
    color: ${qo.PALETTE.gray};
    svg {
        font-size: ${Zo};
    }

`,Cp.LatestPostContainer=Fo.div`
    position: relative;
    top:5vh;
    width: 80%;
    height:auto;
    margin-top: 3%;
    margin-bottom: 10%;
    padding: 2%;
    background-color: #D9D9D9;
    border-radius: 0.5rem;
  
`;const Ep=Cp,Tp=e=>{let{dateParam:t}=e;const n=rt(),[o,i]=(0,r.useState)([]);console.log(t);(0,r.useEffect)((()=>{Td.get(`v1/board/feeds/${t}`).then((e=>{i(e.data.data),console.log(e.data.data)})).catch((e=>{console.error("Error fetching eesays:",e)}))}),[]);return(0,oi.jsx)("div",{children:(0,oi.jsx)(Ep.PostList,{children:o.map((e=>(0,oi.jsx)(Ep.PostItem,{onClick:()=>{return t=e.boardId,void n(`/essay/essaydetail?boardId=${t}`);var t},children:(0,oi.jsxs)(Ep.PostContainer,{children:[(0,oi.jsx)(Ep.BookContainer,{children:(0,oi.jsx)(Ep.BookImage,{children:(0,oi.jsx)("img",{src:e.bookResponse.bookCover,alt:"BookCover"})})}),(0,oi.jsxs)(Ep.TextContainer,{children:[(0,oi.jsxs)(Ep.TitleBody,{children:[(0,oi.jsx)(Ep.PostTitle,{children:e.title}),(0,oi.jsx)(Ep.PostContent,{children:e.content})]}),(0,oi.jsxs)(Ep.UnderTitleContainer,{children:[(0,oi.jsxs)(Ep.LikeContainer,{children:[(0,oi.jsx)(Zs,{icon:e.isLiked?tc:nc}),(0,oi.jsx)("div",{children:e.likeCount})]}),(0,oi.jsxs)(Ep.CommentContainer,{children:[(0,oi.jsx)(Zs,{icon:rc}),(0,oi.jsx)("div",{children:e.commentCount})]}),(0,oi.jsxs)(Ep.PostInfo,{children:[e.nickname," |"," ",new Date(new Date(e.writeDate).getTime()+324e5).toLocaleString("ko-KR")]})]})]})]})},e.boardId)))})})},Pp={};Pp.Background=Fo.div`
    width: 100%;
    height:auto;
    position: relative;
    background-color:${qo.PALETTE.background};
    display: flex;
    align-items: center;
    flex-direction: column;
    margin:5% 0;
   padding:0 10%;

`,Pp.TitleHightLight=Fo.div`
    
    align-self: flex-start;
    margin-bottom: 3%;
        width:28%;
        img{
            width:100%
        }
`,Pp.Date=Fo.div`
    align-self: flex-start;
    ${Go};
    color: #717171;
    margin-bottom: 3%;
    

`,Pp.EssayContainer=Fo.div`
    width:100%;
    height:auto;
    border-radius:0.5rem;
    padding:2%;
    background-color: #CFDEC8 ;
`;const Op=Pp,_p=()=>{const e=tt(),t=new URLSearchParams(e.search).get("date");return(0,oi.jsx)(oi.Fragment,{children:(0,oi.jsxs)(Op.Background,{children:[(0,oi.jsx)(Op.TitleHightLight,{children:(0,oi.jsx)("img",{src:"./global/images/bookcalendar/bookCalendarHightlight.png"})}),(0,oi.jsx)(Op.Date,{children:(e=>{const t=new Date(e);return`${t.getFullYear()}\ub144 ${t.getMonth()+1}\uc6d4 ${t.getDate()}\uc77c`})(t)}),(0,oi.jsx)(Op.EssayContainer,{children:(0,oi.jsx)(Tp,{dateParam:t})})]})})},Lp=e=>{let{element:t}=e;return null!==localStorage.getItem("accessToken")?t:(0,oi.jsx)(bt,{to:"/login"})},Ap=function(e,t){return oe({basename:null==t?void 0:t.basename,future:kt({},null==t?void 0:t.future,{v7_prependBasename:!0}),history:(n={window:null==t?void 0:t.window},void 0===n&&(n={}),m((function(e,t){let{pathname:n,search:r,hash:o}=e.location;return p("",{pathname:n,search:r,hash:o},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:h(t)}),null,n)),hydrationData:(null==t?void 0:t.hydrationData)||Tt(),routes:e,mapRouteProperties:wt,unstable_dataStrategy:null==t?void 0:t.unstable_dataStrategy,unstable_patchRoutesOnNavigation:null==t?void 0:t.unstable_patchRoutesOnNavigation,window:null==t?void 0:t.window}).initialize();var n}([{path:"/",element:(0,oi.jsx)(si,{}),children:[{path:"/",element:(0,oi.jsx)(Od,{})},{path:"/login",element:(0,oi.jsx)(tp,{}),children:[{path:"/login",element:(0,oi.jsx)(Ad,{})},{path:"/login/account",element:(0,oi.jsx)(Gf,{})}]},{path:"/api/v1/auth/oauth2/kakao/code",element:(0,oi.jsx)(Qf,{})},{path:"/bookclubs",element:(0,oi.jsx)(Zd,{}),children:[{path:"bookclubinfo/:bookclubid",element:(0,oi.jsx)(tf(),{})}]},{path:"/essay",element:(0,oi.jsx)(gp,{}),children:[{path:"/essay",element:(0,oi.jsx)(bp,{})},{path:"/essay/essaydetail",element:(0,oi.jsx)(jp,{})},{path:"/essay/createEssay",element:(0,oi.jsx)(Lp,{element:(0,oi.jsx)(qf,{})})}]},{path:"/books",element:(0,oi.jsx)(zd,{})},{path:"/books/bookinfo/:isbn",element:(0,oi.jsx)(Vd,{})},{path:"/posts",element:(0,oi.jsx)(ep,{}),children:[{path:"/posts",element:(0,oi.jsx)(of,{})},{path:"/posts/postdetail",element:(0,oi.jsx)(gf,{})},{path:"/posts/postdetail/modifypost",element:(0,oi.jsx)(Lp,{element:(0,oi.jsx)(wp,{})})},{path:"/posts/createPost",element:(0,oi.jsx)(Lp,{element:(0,oi.jsx)(Zf,{})})},{path:"/posts/myPost",element:(0,oi.jsx)(Lp,{element:(0,oi.jsx)(op,{})})}]},{path:"/search",element:(0,oi.jsx)(vf,{})},{path:"/mybookclub",element:(0,oi.jsx)(Lp,{element:(0,oi.jsx)(Vf,{})}),children:[{path:"makingclub",element:(0,oi.jsx)(Lp,{element:(0,oi.jsx)(Kf,{})})}]},{path:"/mylibrary",element:(0,oi.jsx)(Lp,{element:(0,oi.jsx)(Of,{})}),children:[{path:"/mylibrary",element:(0,oi.jsx)(Lp,{element:(0,oi.jsx)(Nf,{})})}]},{path:"/bookcalendar",element:(0,oi.jsx)(Lp,{element:(0,oi.jsx)(sp,{})}),children:[{path:"/bookcalendar",element:(0,oi.jsx)(Lp,{element:(0,oi.jsx)(hp,{})})},{path:"/bookcalendar/detail",element:(0,oi.jsx)(Lp,{element:(0,oi.jsx)(_p,{})})}]},{path:"/mypage",element:(0,oi.jsx)(Lp,{element:(0,oi.jsx)(lp,{})}),children:[{path:"/mypage",element:(0,oi.jsx)(Lp,{element:(0,oi.jsx)(wf,{})})},{path:"/mypage/updateprofile",element:(0,oi.jsx)(Lp,{element:(0,oi.jsx)(Pf,{})})}]},{path:"*",element:(0,oi.jsx)(Yf,{})}]}]),Rp=Ap;var Dp=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Np=$o(Ip||(Ip=Dp(["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"],["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"])));Ho(Bp||(Bp=Dp(["",""],["",""])),Np);var Ip,Bp;const $p=Ho`

    ${Np}
    
    /* 웹 폰트 적용 */
    @font-face { //Medium
        font-family: 'Pretendard';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff') format('woff');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {//Bold
        font-family: 'Pretendard';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff');
        font-weight: 700;
        font-style: normal;
    }

    @font-face {//Extrabold
        font-family: 'Pretendard';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-ExtraBold.woff') format('woff');
        font-weight: 800;
        font-style: normal;
    }

    /* 폰트 파일 적용 */
    @font-face {//Medium
        font-family: 'TransformaScript';
        src: url('/global/fonts/TRANSFORMASCRIPT_TRIAL-MEDIUM.TTF') format('truetype');
        font-weight: 500;
        font-style: normal;
    }
    * {
        font-family: 'Pretendard';
        box-sizing: border-box;
        text-decoration: none;
        color: rgba(0,0,0,1);
        margin: 0;
        padding: 0;
        line-height: 1.5;
    }
    
`;const zp=function(){return(0,oi.jsx)(df,{children:(0,oi.jsxs)(Ro,{theme:qo,children:[(0,oi.jsx)($p,{}),(0,oi.jsx)(Nt,{router:Rp})]})})};i.createRoot(document.getElementById("root")).render((0,oi.jsx)(zp,{}))})()})();
//# sourceMappingURL=main.5e40a132.js.map