/*! For license information please see f34e6036bbb1a37c512cb0b3a9dddd2544243d40-289c51cc46f7b837ad4e.js.LICENSE.txt */
(self.webpackChunkmodino_website=self.webpackChunkmodino_website||[]).push([[569],{6009:function(e,t,n){"use strict";n.d(t,{I:function(){return r}});var r=function(){function e(e){void 0===e&&(e={}),this.adapter=e}return Object.defineProperty(e,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),e.prototype.init=function(){},e.prototype.destroy=function(){},e}()},4846:function(e){var t;t=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="./packages/mdc-dom/index.ts")}({"./packages/mdc-dom/events.ts":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.applyPassive=void 0,t.applyPassive=function(e){return void 0===e&&(e=window),!!function(e){void 0===e&&(e=window);var t=!1;try{var n={get passive(){return t=!0,!1}},r=function(){};e.document.addEventListener("test",r,n),e.document.removeEventListener("test",r,n)}catch(o){t=!1}return t}(e)&&{passive:!0}}},"./packages/mdc-dom/focus-trap.ts":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FocusTrap=void 0;var r="mdc-dom-focus-sentinel",o=function(){function e(e,t){void 0===t&&(t={}),this.root=e,this.options=t,this.elFocusedBeforeTrapFocus=null}return e.prototype.trapFocus=function(){var e=this.getFocusableElements(this.root);if(0===e.length)throw new Error("FocusTrap: Element must have at least one focusable child.");this.elFocusedBeforeTrapFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.wrapTabFocus(this.root),this.options.skipInitialFocus||this.focusInitialElement(e,this.options.initialFocusEl)},e.prototype.releaseFocus=function(){[].slice.call(this.root.querySelectorAll("."+r)).forEach((function(e){e.parentElement.removeChild(e)})),!this.options.skipRestoreFocus&&this.elFocusedBeforeTrapFocus&&this.elFocusedBeforeTrapFocus.focus()},e.prototype.wrapTabFocus=function(e){var t=this,n=this.createSentinel(),r=this.createSentinel();n.addEventListener("focus",(function(){var n=t.getFocusableElements(e);n.length>0&&n[n.length-1].focus()})),r.addEventListener("focus",(function(){var n=t.getFocusableElements(e);n.length>0&&n[0].focus()})),e.insertBefore(n,e.children[0]),e.appendChild(r)},e.prototype.focusInitialElement=function(e,t){var n=0;t&&(n=Math.max(e.indexOf(t),0)),e[n].focus()},e.prototype.getFocusableElements=function(e){return[].slice.call(e.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button")).filter((function(e){var t="true"===e.getAttribute("aria-disabled")||null!=e.getAttribute("disabled")||null!=e.getAttribute("hidden")||"true"===e.getAttribute("aria-hidden"),n=e.tabIndex>=0&&e.getBoundingClientRect().width>0&&!e.classList.contains(r)&&!t,o=!1;if(n){var a=getComputedStyle(e);o="none"===a.display||"hidden"===a.visibility}return n&&!o}))},e.prototype.createSentinel=function(){var e=document.createElement("div");return e.setAttribute("tabindex","0"),e.setAttribute("aria-hidden","true"),e.classList.add(r),e},e}();t.FocusTrap=o},"./packages/mdc-dom/index.ts":function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.ponyfill=t.keyboard=t.focusTrap=t.events=void 0;var i=a(n("./packages/mdc-dom/events.ts"));t.events=i;var s=a(n("./packages/mdc-dom/focus-trap.ts"));t.focusTrap=s;var c=a(n("./packages/mdc-dom/keyboard.ts"));t.keyboard=c;var u=a(n("./packages/mdc-dom/ponyfill.ts"));t.ponyfill=u},"./packages/mdc-dom/keyboard.ts":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isNavigationEvent=t.normalizeKey=t.KEY=void 0,t.KEY={UNKNOWN:"Unknown",BACKSPACE:"Backspace",ENTER:"Enter",SPACEBAR:"Spacebar",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",END:"End",HOME:"Home",ARROW_LEFT:"ArrowLeft",ARROW_UP:"ArrowUp",ARROW_RIGHT:"ArrowRight",ARROW_DOWN:"ArrowDown",DELETE:"Delete",ESCAPE:"Escape",TAB:"Tab"};var r=new Set;r.add(t.KEY.BACKSPACE),r.add(t.KEY.ENTER),r.add(t.KEY.SPACEBAR),r.add(t.KEY.PAGE_UP),r.add(t.KEY.PAGE_DOWN),r.add(t.KEY.END),r.add(t.KEY.HOME),r.add(t.KEY.ARROW_LEFT),r.add(t.KEY.ARROW_UP),r.add(t.KEY.ARROW_RIGHT),r.add(t.KEY.ARROW_DOWN),r.add(t.KEY.DELETE),r.add(t.KEY.ESCAPE),r.add(t.KEY.TAB);var o=8,a=13,i=32,s=33,c=34,u=35,l=36,d=37,p=38,f=39,h=40,m=46,v=27,y=9,g=new Map;g.set(o,t.KEY.BACKSPACE),g.set(a,t.KEY.ENTER),g.set(i,t.KEY.SPACEBAR),g.set(s,t.KEY.PAGE_UP),g.set(c,t.KEY.PAGE_DOWN),g.set(u,t.KEY.END),g.set(l,t.KEY.HOME),g.set(d,t.KEY.ARROW_LEFT),g.set(p,t.KEY.ARROW_UP),g.set(f,t.KEY.ARROW_RIGHT),g.set(h,t.KEY.ARROW_DOWN),g.set(m,t.KEY.DELETE),g.set(v,t.KEY.ESCAPE),g.set(y,t.KEY.TAB);var E=new Set;function b(e){var n=e.key;if(r.has(n))return n;var o=g.get(e.keyCode);return o||t.KEY.UNKNOWN}E.add(t.KEY.PAGE_UP),E.add(t.KEY.PAGE_DOWN),E.add(t.KEY.END),E.add(t.KEY.HOME),E.add(t.KEY.ARROW_LEFT),E.add(t.KEY.ARROW_UP),E.add(t.KEY.ARROW_RIGHT),E.add(t.KEY.ARROW_DOWN),t.normalizeKey=b,t.isNavigationEvent=function(e){return E.has(b(e))}},"./packages/mdc-dom/ponyfill.ts":function(e,t,n){"use strict";function r(e,t){return(e.matches||e.webkitMatchesSelector||e.msMatchesSelector).call(e,t)}Object.defineProperty(t,"__esModule",{value:!0}),t.estimateScrollWidth=t.matches=t.closest=void 0,t.closest=function(e,t){if(e.closest)return e.closest(t);for(var n=e;n;){if(r(n,t))return n;n=n.parentElement}return null},t.matches=r,t.estimateScrollWidth=function(e){var t=e;if(null!==t.offsetParent)return t.scrollWidth;var n=t.cloneNode(!0);n.style.setProperty("position","absolute"),n.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(n);var r=n.scrollWidth;return document.documentElement.removeChild(n),r}}})},e.exports=t()},7397:function(e,t,n){"use strict";var r=n(4810),o=n(6540);t.A=e=>{let{pageTitle:t,description:n,link:a}=e;return o.createElement(o.Fragment,null,o.createElement("meta",{charSet:"utf-8"}),o.createElement("title",null,t),o.createElement("meta",{name:"description",content:n}),o.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),o.createElement("meta",{name:"theme-color",content:"#fafafa"}),o.createElement("meta",{name:"robots",content:"index,follow"}),o.createElement("link",{href:a,rel:"canonical"}),o.createElement("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}),o.createElement("link",{rel:"apple-touch-icon",href:"icon.png"}),o.createElement("link",{rel:"icon",href:(0,r.Fe)("/favicon.ico")}))}},5215:function(e,t,n){"use strict";n.d(t,{C6:function(){return o},Cl:function(){return a},Ju:function(){return i},fX:function(){return c},zs:function(){return s}});var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)};Object.create;function i(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function s(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(s){o={error:s}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i}function c(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create},9376:function(e,t,n){"use strict";n.d(t,{Bi:function(){return x},MA:function(){return g},Mn:function(){return F},P5:function(){return C},Px:function(){return m},UP:function(){return h},YO:function(){return j},a0:function(){return y},ag:function(){return M},cK:function(){return N},dp:function(){return k},er:function(){return U},kp:function(){return I},vw:function(){return f},xW:function(){return l},zq:function(){return H},zy:function(){return w}});var r=n(4848),o=n(6540),a=n(961),i=n(4846);function s(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var c,u={exports:{}};c=u,function(){var e={}.hasOwnProperty;function t(){for(var e="",t=0;t<arguments.length;t++){var o=arguments[t];o&&(e=r(e,n(o)))}return e}function n(n){if("string"==typeof n||"number"==typeof n)return n;if("object"!=typeof n)return"";if(Array.isArray(n))return t.apply(null,n);if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]"))return n.toString();var o="";for(var a in n)e.call(n,a)&&n[a]&&(o=r(o,a));return o}function r(e,t){return t?e?e+" "+t:e+t:e}c.exports?(t.default=t,c.exports=t):window.classNames=t}();const l=s(u.exports),d=(0,o.createContext)({portalElement:null,setPortalElement:null}),p=e=>(Array.isArray(e)?e:[e]).filter((e=>!!e)).map((e=>`mdc-theme--${(e=>e.replace(/(^[a-z]+|[A-Z][a-z]*|\d+)/g,(e=>"-"+e.toLowerCase())).slice(1))(e)}`)),f=o.forwardRef((function({tag:e="div",theme:t,element:n,...o},a){const i=n?n.props(o):o,s=n?m(a,n.reactRef):a;return(0,r.jsx)(e,{...i,ref:s})})),h=(e,t)=>l(e.className,...e.theme?p(e.theme):[],..."function"==typeof t?t(e):t),m=(...e)=>t=>{for(const n of e)"function"==typeof n?n(t):n&&"current"in n&&(n.current=t)},v=(e,t)=>{"function"==typeof e?e(t):e&&"current"in e&&(e.current=t)};function y(e){const t=o.forwardRef(e),n=(e,t)=>(0,r.jsx)(r.Fragment,{});return n.displayName=e.constructor.name||"RMWCComponent",t.displayName=n.displayName,t}function g(e){const t=y(e);return o.memo(t)}const E={blur:"onBlur",cancel:"onCancel",click:"onClick",close:"onClose",contextmenu:"onContextMenu",copy:"onCopy",cut:"onCut",auxclick:"onAuxClick",doubleclick:"onDoubleClick",dragend:"onDragEnd",dragstart:"onDragStart",drop:"onDrop",focus:"onFocus",input:"onInput",invalid:"onInvalid",keydown:"onKeyDown",keypress:"onKeyPress",keyup:"onKeyUp",mousedown:"onMouseDown",mouseup:"onMouseUp",paste:"onPaste",pause:"onPause",play:"onPlay",pointercancel:"onPointerCancel",pointerdown:"onPointerDown",pointerup:"onPointerUp",ratechange:"onRateChange",reset:"onReset",seeked:"onSeeked",submit:"onSubmit",touchcancel:"onTouchCancel",touchend:"onTouchEnd",touchstart:"onTouchStart",volumechange:"onVolumeChange",abort:"onAbort",animationend:"onAnimationEnd",animationiteration:"onAnimationIteration",animationstart:"onAnimationStart",canplay:"onCanPlay",canplaythrough:"onCanPlayThrough",drag:"onDrag",dragenter:"onDragEnter",dragexit:"onDragExit",dragleave:"onDragLeave",dragover:"onDragOver",durationchange:"onDurationChange",emptied:"onEmptied",encrypted:"onEncrypted",ended:"onEnded",error:"onError",gotpointercapture:"onGotPointerCapture",load:"onLoad",loadeddata:"onLoadedData",loadedmetadata:"onLoadedMetadata",loadstart:"onLoadStart",lostpointercapture:"onLostPointerCapture",mousemove:"onMouseMove",mouseout:"onMouseOut",mouseover:"onMouseOver",playing:"onPlaying",pointermove:"onPointerMove",pointerout:"onPointerOut",pointerover:"onPointerOver",progress:"onProgress",scroll:"onScroll",seeking:"onSeeking",stalled:"onStalled",suspend:"onSuspend",timeupdate:"onTimeUpdate",toggle:"onToggle",touchmove:"onTouchMove",transitionend:"onTransitionEnd",waiting:"onWaiting",wheel:"onWheel",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",pointerenter:"onPointerEnter",pointerleave:"onPointerLeave",change:"onChange",select:"onSelect",beforeinput:"onBeforeInput",compositionend:"onCompositionEnd",compositionstart:"onCompositionStart",compositionupdate:"onCompositionUpdate"},b=e=>E[e]||e;class A{constructor(e){this._classes=new Set,this._events={},this._style={},this._props={},this._onChange=null,this.reactRef=o.createRef(),this._onChange=e,this.onChange=this.onChange.bind(this),this.addClass=this.addClass.bind(this),this.removeClass=this.removeClass.bind(this),this.hasClass=this.hasClass.bind(this),this.setProp=this.setProp.bind(this),this.getProp=this.getProp.bind(this),this.removeProp=this.removeProp.bind(this),this.setStyle=this.setStyle.bind(this),this.addEventListener=this.addEventListener.bind(this),this.removeEventListener=this.removeEventListener.bind(this)}onChange(){this._onChange&&this._onChange()}destroy(){this._onChange=null,this._events={},this._style={},this._props={},this._classes=new Set}addClass(e){this._classes.has(e)||(this._classes.add(e),this.onChange())}removeClass(e){this._classes.has(e)&&(this._classes.delete(e),this.onChange())}hasClass(e){return this._classes.has(e)}setProp(e,t,n=!1){this._props[e]!==t&&(this._props[e]=t,!n&&this.onChange())}getProp(e){return this._props[e]}removeProp(e){void 0!==this._props[e]&&(delete this._props[e],this.onChange())}props(e){const{className:t="",style:n={}}=e,r=Object.entries(e).reduce(((e,[t,n])=>{const r=this._events[t];if("function"==typeof n&&"function"==typeof r){const o=e=>(r(e),n(e));e[t]=o}return e}),{...this._events}),o=l(t,[...this._classes]),a={...this._style,...n};return{...e,...this._props,...r,style:a,className:o}}setStyle(e,t){e=e.startsWith("--")?e:(e=>e.replace(/(-[a-z])/g,(e=>e.toUpperCase().replace("-",""))))(e),this._style[e]!==t&&(this._style[e]=t,this.onChange())}addEventListener(e,t){const n=b(e);this._events[n]!==t&&(this._events[n]=t,this.onChange())}removeEventListener(e,t){const n=b(e);this._events[n]&&(delete this._events[n],this.onChange())}get ref(){return this.reactRef.current}}const C=({foundation:e,props:t,elements:n,api:r})=>{const[,a]=(0,o.useReducer)((e=>e+1),0),i=(0,o.useRef)(t);i.current=t;const s=(0,o.useMemo)((()=>Object.keys(n).reduce(((e,t)=>(e[t]=new A((()=>{a()})),e)),{})),[]),c=(0,o.useMemo)((()=>{const t=e({...s,getProps:()=>i.current,emit:(...e)=>(e=>(t,n,r=!1)=>{let o;o=new CustomEvent(t,{detail:n,bubbles:r}),Object.defineProperty(o,"target",{value:n,writable:!1}),Object.defineProperty(o,"currentTarget",{value:n,writable:!1});const a=t;return e[a]&&e[a](o),o})(i.current)(...e)});return r&&v(i.current.apiRef,r({foundation:t,...s})),t}),[]);return(0,o.useEffect)((()=>{const e=c;return e.init(),r&&v(i.current.apiRef,r({foundation:e,...s})),v(i.current.foundationRef,e),()=>{e.destroy(),v(i.current.apiRef,null),v(i.current.foundationRef,null),Object.values(s).map((e=>e.destroy())),i.current={}}}),[c,s]),{foundation:c,...s}},_="rmwcPortal";function w({children:e,renderTo:t,menuSurfaceDomPositionRef:n}){const[i,s]=(0,o.useState)(),{portalElement:c}=(0,o.useContext)(d);return(0,o.useEffect)((()=>{let e;!0===t&&c?e=c:!0===t?(e=(null==document?void 0:document.getElementById(_))??void 0,e||console.warn('No default Portal found. Did you forget to include it in the root of your app? `import { Portal } from "@rmwc/base";`')):"string"==typeof t?(e=(null==document?void 0:document.querySelector(t))??void 0,e||console.warn(`The selector you provided for renderToPortal "${t}" didn't find any elements.`)):t instanceof Element&&(e=t),e!==i&&s(e)}),[t,i,c]),t?i?(0,r.jsx)("div",{ref:n,children:(0,a.createPortal)(e,i)}):null:(0,r.jsx)(r.Fragment,{children:e})}i.focusTrap.FocusTrap;const P=typeof window<"u"&&window.document&&window.document.createElement?o.useLayoutEffect:o.useEffect;let T=!1,S=0;function R(){return++S}const O=o.useId,x=(e,t)=>{const n=D(t.label);return t.id?t.id:`${e}-${n}`},D=e=>{if(void 0!==O){let t=O();return e??t}let t=e??(T?R():null),[n,r]=(0,o.useState)(t);return P((()=>{null===n&&r(R())}),[]),(0,o.useEffect)((()=>{!1===T&&(T=!0)}),[]),e??n??void 0},I=(e,t)=>{if(e instanceof Element){if(e&&e.closest)return e.closest(t);{let n=e;for(;n;){if(N(n,t))return n;n=n.parentElement}}}return null},N=(e,t)=>(e.matches||e.webkitMatchesSelector||e.msMatchesSelector).call(e,t);const F=e=>{var t,n,r;const o=Array.isArray(e)?e[0]:e;return(null==(t=null==o?void 0:o.type)?void 0:t.displayName)||(null==(n=null==o?void 0:o.constructor)?void 0:n.displayName)||(null==o?void 0:o.displayName)||(null==o?void 0:o.name)||(null==(r=null==o?void 0:o.constructor)?void 0:r.name)||"Unknown"},k={bottom:0,height:0,left:0,right:0,top:0,width:0},j=o.createContext(!1),M=o.createContext(!1),H=()=>{window.dispatchEvent(new Event("resize"))},U=(e,t=1,n=1)=>{window.requestAnimationFrame((()=>{n>=t?e():U(e,t,n+1)}))}},3540:function(e,t,n){"use strict";n.d(t,{$:function(){return u}});var r=n(4848),o=n(6540),a=n(275),i=n(5204),s=n(9376);const c=o.createContext(!1),u=((0,a.zu)({surface:!1})((0,s.a0)((function(e,t){const{children:n,...o}=e,a=(0,s.UP)(e,["mdc-touch-target-wrapper"]);return(0,r.jsx)(s.vw,{tag:"div",...o,ref:t,className:a,children:(0,r.jsx)(c.Provider,{value:!0,children:n})})}))),(0,a.zu)({surface:!1})((0,s.a0)((function(e,t){const{dense:n,raised:a,unelevated:i,outlined:u,danger:h,icon:m,label:v,trailingIcon:y,children:g,touch:E,...b}=e,A=(_=E,(0,o.useContext)(c)||_||!1),C=(0,s.UP)(e,["mdc-button",{"mdc-button--dense":n,"mdc-button--raised":a,"mdc-button--unelevated":i,"mdc-button--outlined":u,"mdc-button--touch":A}]);var _;if(h){const e=b.style||{},t={"--mdc-theme-primary":"var(--mdc-theme-error)","--mdc-theme-on-primary":"var(--mdc-theme-on-error)"};b.style={...t,...e}}return(0,r.jsxs)(s.vw,{tag:"button",...b,ref:t,className:C,children:[(0,r.jsx)(p,{}),(0,r.jsx)(l,{}),(0,r.jsx)(d,{}),!!m&&(0,r.jsx)(f,{icon:m}),(0,r.jsxs)("span",{className:"mdc-button__label",children:[v,g]}),!!y&&(0,r.jsx)(f,{icon:y})]})})))),l=o.memo((function(){return(0,r.jsx)("div",{className:"mdc-button__touch"})})),d=o.memo((function(){return(0,r.jsx)("div",{className:"mdc-button__focus-ring"})})),p=o.memo((function(){return(0,r.jsx)("div",{className:"mdc-button__ripple"})})),f=(0,s.MA)((function(e,t){const n=(0,s.UP)(e,["mdc-button__icon"]);return(0,r.jsx)(i.I,{...e,className:n,ref:t})}))},5204:function(e,t,n){"use strict";n.d(t,{I:function(){return d}});var r=n(4848),o=n(6540),a=n(6808),i=n(9376);const s=(e,t,n)=>"auto"===(t=t||n||"auto")?(e=>"string"==typeof e&&e.includes("/")?"url":o.isValidElement(e)?"component":"ligature")(e):t,c={ligature:({content:e,...t})=>(0,r.jsx)(l,{...t,children:e}),className:({content:e,...t})=>(0,r.jsx)(l,{...t}),url:({content:e,...t})=>(0,r.jsx)(l,{...t,style:{...t.style,backgroundImage:`url(${e})`}}),component:({content:e,...t})=>{if("svg"===e.type){const{children:n,...o}=e.props;return(0,r.jsx)(l,{...o,...t,tag:"svg",children:n})}return(0,r.jsx)(l,{...t,children:e})},auto:void 0},u=e=>o.isValidElement(e)||e&&"object"!=typeof e?{icon:e}:e,l=o.forwardRef((function(e,t){return(0,r.jsx)(i.vw,{tag:"i",...e,ref:t})})),d=(0,i.a0)((function({icon:e,...t},n){const r=(0,a.oh)(),{icon:l,strategy:d,prefix:p,basename:f,render:h,size:m,...v}={...u(e)},{basename:y=null,prefix:g=null,strategy:E=null,render:b=null}=r.icon||{},A=l,C=s(A,d||null,E||null),_=void 0===f?y:f,w="className"===C&&"string"==typeof l?`${String(p||g)}${l}`:null;let P=!!C&&c[C]||null;if("custom"===C&&(P=h||b),!P)return console.error(`Icon: rendering not implemented for ${String(C)}.`),null;const T=P({...t,...v,ref:n,content:A,className:(0,i.xW)("rmwc-icon",`rmwc-icon--${C}`,_,t.className,v.className,w,{[`rmwc-icon--size-${m||""}`]:!!m})});if(!o.isValidElement(T))return null;const S=(0,i.Mn)(T.props.children);return S.includes("Avatar")||S.includes("Icon")?o.cloneElement(T.props.children,{...T.props.children.props,...T.props,ref:n,children:T.props.children.props.children,className:(0,i.xW)(T.props.className,T.props.children.props.className)}):T}));d.displayName="Icon"},6808:function(e,t,n){"use strict";n.d(t,{oh:function(){return i}});n(4848);var r=n(6540);const o={ripple:!0,tooltip:{align:"top",showArrow:!1,activateOn:["hover","focus"],enterDelay:0,leaveDelay:0},typography:{},icon:{icon:"",basename:"material-icons",prefix:"",strategy:"auto",render:void 0}},a=r.createContext(o),i=()=>r.useContext(a)},275:function(e,t,n){"use strict";n.d(t,{A6:function(){return b},zu:function(){return A}});var r,o=n(4848),a=n(6540),i=n(9376),s=n(6808),c=n(5215),u=n(6009),l={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},d={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},p={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};var f=["touchstart","pointerdown","mousedown","keydown"],h=["touchend","pointerup","mouseup","contextmenu"],m=[],v=function(e){function t(n){var r=e.call(this,(0,c.Cl)((0,c.Cl)({},t.defaultAdapter),n))||this;return r.activationAnimationHasEnded=!1,r.activationTimer=0,r.fgDeactivationRemovalTimer=0,r.fgScale="0",r.frame={width:0,height:0},r.initialSize=0,r.layoutFrame=0,r.maxRadius=0,r.unboundedCoords={left:0,top:0},r.activationState=r.defaultActivationState(),r.activationTimerCallback=function(){r.activationAnimationHasEnded=!0,r.runDeactivationUXLogicIfReady()},r.activateHandler=function(e){r.activateImpl(e)},r.deactivateHandler=function(){r.deactivateImpl()},r.focusHandler=function(){r.handleFocus()},r.blurHandler=function(){r.handleBlur()},r.resizeHandler=function(){r.layout()},r}return(0,c.C6)(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return l},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return d},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return p},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){var e=this,n=this.supportsPressRipple();if(this.registerRootHandlers(n),n){var r=t.cssClasses,o=r.ROOT,a=r.UNBOUNDED;requestAnimationFrame((function(){e.adapter.addClass(o),e.adapter.isUnbounded()&&(e.adapter.addClass(a),e.layoutInternal())}))}},t.prototype.destroy=function(){var e=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(t.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(t.cssClasses.FG_DEACTIVATION));var n=t.cssClasses,r=n.ROOT,o=n.UNBOUNDED;requestAnimationFrame((function(){e.adapter.removeClass(r),e.adapter.removeClass(o),e.removeCssVars()}))}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},t.prototype.activate=function(e){this.activateImpl(e)},t.prototype.deactivate=function(){this.deactivateImpl()},t.prototype.layout=function(){var e=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame((function(){e.layoutInternal(),e.layoutFrame=0}))},t.prototype.setUnbounded=function(e){var n=t.cssClasses.UNBOUNDED;e?this.adapter.addClass(n):this.adapter.removeClass(n)},t.prototype.handleFocus=function(){var e=this;requestAnimationFrame((function(){return e.adapter.addClass(t.cssClasses.BG_FOCUSED)}))},t.prototype.handleBlur=function(){var e=this;requestAnimationFrame((function(){return e.adapter.removeClass(t.cssClasses.BG_FOCUSED)}))},t.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},t.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},t.prototype.registerRootHandlers=function(e){var t,n;if(e){try{for(var r=(0,c.Ju)(f),o=r.next();!o.done;o=r.next()){var a=o.value;this.adapter.registerInteractionHandler(a,this.activateHandler)}}catch(i){t={error:i}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},t.prototype.registerDeactivationHandlers=function(e){var t,n;if("keydown"===e.type)this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var r=(0,c.Ju)(h),o=r.next();!o.done;o=r.next()){var a=o.value;this.adapter.registerDocumentInteractionHandler(a,this.deactivateHandler)}}catch(i){t={error:i}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}},t.prototype.deregisterRootHandlers=function(){var e,t;try{for(var n=(0,c.Ju)(f),r=n.next();!r.done;r=n.next()){var o=r.value;this.adapter.deregisterInteractionHandler(o,this.activateHandler)}}catch(a){e={error:a}}finally{try{r&&!r.done&&(t=n.return)&&t.call(n)}finally{if(e)throw e.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},t.prototype.deregisterDeactivationHandlers=function(){var e,t;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var n=(0,c.Ju)(h),r=n.next();!r.done;r=n.next()){var o=r.value;this.adapter.deregisterDocumentInteractionHandler(o,this.deactivateHandler)}}catch(a){e={error:a}}finally{try{r&&!r.done&&(t=n.return)&&t.call(n)}finally{if(e)throw e.error}}},t.prototype.removeCssVars=function(){var e=this,n=t.strings;Object.keys(n).forEach((function(t){0===t.indexOf("VAR_")&&e.adapter.updateCssVariable(n[t],null)}))},t.prototype.activateImpl=function(e){var t=this;if(!this.adapter.isSurfaceDisabled()){var n=this.activationState;if(!n.isActivated){var r=this.previousActivationEvent;if(!(r&&void 0!==e&&r.type!==e.type))n.isActivated=!0,n.isProgrammatic=void 0===e,n.activationEvent=e,n.wasActivatedByPointer=!n.isProgrammatic&&(void 0!==e&&("mousedown"===e.type||"touchstart"===e.type||"pointerdown"===e.type)),void 0!==e&&m.length>0&&m.some((function(e){return t.adapter.containsEventTarget(e)}))?this.resetActivationState():(void 0!==e&&(m.push(e.target),this.registerDeactivationHandlers(e)),n.wasElementMadeActive=this.checkElementMadeActive(e),n.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame((function(){m=[],n.wasElementMadeActive||void 0===e||" "!==e.key&&32!==e.keyCode||(n.wasElementMadeActive=t.checkElementMadeActive(e),n.wasElementMadeActive&&t.animateActivation()),n.wasElementMadeActive||(t.activationState=t.defaultActivationState())})))}}},t.prototype.checkElementMadeActive=function(e){return void 0===e||"keydown"!==e.type||this.adapter.isSurfaceActive()},t.prototype.animateActivation=function(){var e=this,n=t.strings,r=n.VAR_FG_TRANSLATE_START,o=n.VAR_FG_TRANSLATE_END,a=t.cssClasses,i=a.FG_DEACTIVATION,s=a.FG_ACTIVATION,c=t.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var u="",l="";if(!this.adapter.isUnbounded()){var d=this.getFgTranslationCoordinates(),p=d.startPoint,f=d.endPoint;u=p.x+"px, "+p.y+"px",l=f.x+"px, "+f.y+"px"}this.adapter.updateCssVariable(r,u),this.adapter.updateCssVariable(o,l),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(i),this.adapter.computeBoundingRect(),this.adapter.addClass(s),this.activationTimer=setTimeout((function(){e.activationTimerCallback()}),c)},t.prototype.getFgTranslationCoordinates=function(){var e,t=this.activationState,n=t.activationEvent;return{startPoint:e={x:(e=t.wasActivatedByPointer?function(e,t,n){if(!e)return{x:0,y:0};var r,o,a=t.x,i=t.y,s=a+n.left,c=i+n.top;if("touchstart"===e.type){var u=e;r=u.changedTouches[0].pageX-s,o=u.changedTouches[0].pageY-c}else{var l=e;r=l.pageX-s,o=l.pageY-c}return{x:r,y:o}}(n,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):{x:this.frame.width/2,y:this.frame.height/2}).x-this.initialSize/2,y:e.y-this.initialSize/2},endPoint:{x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2}}},t.prototype.runDeactivationUXLogicIfReady=function(){var e=this,n=t.cssClasses.FG_DEACTIVATION,r=this.activationState,o=r.hasDeactivationUXRun,a=r.isActivated;(o||!a)&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(n),this.fgDeactivationRemovalTimer=setTimeout((function(){e.adapter.removeClass(n)}),p.FG_DEACTIVATION_MS))},t.prototype.rmBoundedActivationClasses=function(){var e=t.cssClasses.FG_ACTIVATION;this.adapter.removeClass(e),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},t.prototype.resetActivationState=function(){var e=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout((function(){return e.previousActivationEvent=void 0}),t.numbers.TAP_DELAY_MS)},t.prototype.deactivateImpl=function(){var e=this,t=this.activationState;if(t.isActivated){var n=(0,c.Cl)({},t);t.isProgrammatic?(requestAnimationFrame((function(){e.animateDeactivation(n)})),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame((function(){e.activationState.hasDeactivationUXRun=!0,e.animateDeactivation(n),e.resetActivationState()})))}},t.prototype.animateDeactivation=function(e){var t=e.wasActivatedByPointer,n=e.wasElementMadeActive;(t||n)&&this.runDeactivationUXLogicIfReady()},t.prototype.layoutInternal=function(){var e=this;this.frame=this.adapter.computeBoundingRect();var n=Math.max(this.frame.height,this.frame.width);this.maxRadius=this.adapter.isUnbounded()?n:Math.sqrt(Math.pow(e.frame.width,2)+Math.pow(e.frame.height,2))+t.numbers.PADDING;var r=Math.floor(n*t.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&r%2!=0?this.initialSize=r-1:this.initialSize=r,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},t.prototype.updateLayoutCssVars=function(){var e=t.strings,n=e.VAR_FG_SIZE,r=e.VAR_LEFT,o=e.VAR_TOP,a=e.VAR_FG_SCALE;this.adapter.updateCssVariable(n,this.initialSize+"px"),this.adapter.updateCssVariable(a,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(r,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(o,this.unboundedCoords.top+"px"))},t}(u.I);const y=e=>{const t=(0,a.useRef)(!1),{foundation:n,...o}=(0,i.P5)({props:e,elements:{rootEl:!0,surfaceEl:!0},foundation:({rootEl:e,surfaceEl:t,getProps:n})=>new v({addClass:e=>{t.addClass(e)},browserSupportsCssVars:()=>function(e,t){void 0===t&&(t=!1);var n,o=e.CSS;if("boolean"==typeof r&&!t)return r;if(!o||"function"!=typeof o.supports)return!1;var a=o.supports("--css-vars","yes"),i=o.supports("(--css-vars: yes)")&&o.supports("color","#00000000");return n=a||i,t||(r=n),n}(window),computeBoundingRect:()=>e.ref?e.ref.getBoundingClientRect():i.dp,containsEventTarget:t=>!!e.ref&&e.ref.contains(t),deregisterDocumentInteractionHandler:(e,t)=>document.documentElement.removeEventListener(e,t),deregisterInteractionHandler:(e,t)=>{},deregisterResizeHandler:e=>window.removeEventListener("resize",e),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset}),isSurfaceActive:()=>!!e.ref&&(0,i.cK)(e.ref,":active"),isSurfaceDisabled:()=>!!n().disabled,removeClass:e=>{t.removeClass(e)},isUnbounded:()=>!!n().unbounded,registerDocumentInteractionHandler:(e,t)=>document.documentElement.addEventListener(e,t,{passive:!0}),registerInteractionHandler:(e,t)=>{},registerResizeHandler:e=>window.addEventListener("resize",e),updateCssVariable:(e,n)=>t.setStyle(e,n)})}),{rootEl:s}=o,c=(0,a.useCallback)((e=>{e.persist(),n.activate(e)}),[n]),u=(0,a.useCallback)((e=>{e.persist(),n.deactivate()}),[n]),{onFocus:l}=e,d=(0,a.useCallback)((e=>{null==l||l(e),n.handleFocus()}),[n,l]),{onBlur:p}=e,f=(0,a.useCallback)((e=>{null==p||p(e),n.handleBlur()}),[n,p]),{onMouseDown:h}=e,m=(0,a.useCallback)((e=>{null==h||h(e),t.current||c(e),t.current=!1}),[h,c]),{onMouseUp:y}=e,g=(0,a.useCallback)((e=>{null==y||y(e),u(e)}),[y,u]),{onTouchStart:E}=e,b=(0,a.useCallback)((e=>{t.current=!0,null==E||E(e),c(e)}),[E,c]),{onTouchEnd:A}=e,C=(0,a.useCallback)((e=>{null==A||A(e),u(e)}),[A,u]),{onKeyDown:_}=e,w=(0,a.useCallback)((e=>{null==_||_(e),c(e)}),[_,c]),{onKeyUp:P}=e,T=(0,a.useCallback)((e=>{null==P||P(e),u(e)}),[P,u]);return s.setProp("onFocus",d,!0),s.setProp("onBlur",f,!0),s.setProp("onMouseDown",m,!0),s.setProp("onMouseUp",g,!0),s.setProp("onTouchStart",b,!0),s.setProp("onTouchEnd",C,!0),s.setProp("onKeyDown",w,!0),s.setProp("onKeyUp",T,!0),(0,a.useEffect)((()=>{n.setUnbounded(!!e.unbounded)}),[e.unbounded,n]),(0,a.useEffect)((()=>{e.disabled&&n.handleBlur()}),[e.disabled,n]),{...o}},g=a.createContext({});function E(e){const{children:t,className:n,primary:r,accent:s,unbounded:c,surface:u,foundationRef:l,...d}=e,{rootEl:p,surfaceEl:f}=y(e),h=a.Children.only(t);if(!a.isValidElement(h))return null;const m=c?{"data-mdc-ripple-is-unbounded":!0}:{},v=!u||!c?f.props({style:h.props.style}):{};let E=(0,i.xW)(n!==h.props.className&&n,v.className,h.props.className,{"mdc-ripple-surface":"boolean"==typeof u?u:void 0===u,"mdc-ripple-surface--primary":r,"rmwc-ripple-surface--primary":r,"mdc-ripple-surface--accent":s,"rmwc-ripple-surface--accent":s});d.disabled&&(E=E.replace("mdc-ripple-upgraded--background-focused",""));const b=a.cloneElement(h,{ref:p.reactRef,...h.props,...m,...p.props({...d,style:h.props.style,...v,className:E})});return(0,o.jsx)(g.Provider,{value:f.props({style:h.props.style}),children:b})}const b=({className:e,...t})=>(0,o.jsx)(g.Consumer,{children:n=>(0,o.jsx)("div",{...t,...n,className:`${e} ${n.className||""}`})}),A=({unbounded:e,accent:t,surface:n}={})=>r=>{const i=a.forwardRef((({ripple:a,...i},c)=>{const u=(0,s.oh)(),l="object"!=typeof(a=a??u.ripple)?{}:a;return a?(0,o.jsx)(E,{...i,accent:l.accent||t,unbounded:l.unbounded||e,surface:l.surface||n,children:(0,o.jsx)(r,{...i,ref:c})}):(0,o.jsx)(r,{...i,ref:c})}));return i.displayName=`withRipple(${r.displayName||r.constructor.name||"Unknown"})`,i}}}]);