(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[639],{2705:function(e,t,n){var r=n(5639).Symbol;e.exports=r},4239:function(e,t,n){var r=n(2705),o=n(9607),i=n(2333),l=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":l&&l in Object(e)?o(e):i(e)}},7561:function(e,t,n){var r=n(7990),o=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(o,""):e}},1957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},9607:function(e,t,n){var r=n(2705),o=Object.prototype,i=o.hasOwnProperty,l=o.toString,s=r?r.toStringTag:void 0;e.exports=function(e){var t=i.call(e,s),n=e[s];try{e[s]=void 0;var r=!0}catch(a){}var o=l.call(e);return r&&(t?e[s]=n:delete e[s]),o}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5639:function(e,t,n){var r=n(1957),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();e.exports=i},7990:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},3279:function(e,t,n){var r=n(3218),o=n(7771),i=n(4841),l=Math.max,s=Math.min;e.exports=function(e,t,n){var a,c,u,d,f,m,v=0,h=!1,p=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function w(t){var n=a,r=c;return a=c=void 0,v=t,d=e.apply(r,n)}function b(e){return v=e,f=setTimeout(x,t),h?w(e):d}function y(e){var n=e-m;return void 0===m||n>=t||n<0||p&&e-v>=u}function x(){var e=o();if(y(e))return E(e);f=setTimeout(x,function(e){var n=t-(e-m);return p?s(n,u-(e-v)):n}(e))}function E(e){return f=void 0,g&&a?w(e):(a=c=void 0,d)}function I(){var e=o(),n=y(e);if(a=arguments,c=this,m=e,n){if(void 0===f)return b(m);if(p)return clearTimeout(f),f=setTimeout(x,t),w(m)}return void 0===f&&(f=setTimeout(x,t)),d}return t=i(t)||0,r(n)&&(h=!!n.leading,u=(p="maxWait"in n)?l(i(n.maxWait)||0,t):u,g="trailing"in n?!!n.trailing:g),I.cancel=function(){void 0!==f&&clearTimeout(f),v=0,a=m=c=f=void 0},I.flush=function(){return void 0===f?d:E(o())},I}},3218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},7005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},3448:function(e,t,n){var r=n(4239),o=n(7005);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},7771:function(e,t,n){var r=n(5639);e.exports=function(){return r.Date.now()}},3493:function(e,t,n){var r=n(3279),o=n(3218);e.exports=function(e,t,n){var i=!0,l=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return o(n)&&(i="leading"in n?!!n.leading:i,l="trailing"in n?!!n.trailing:l),r(e,t,{leading:i,maxWait:t,trailing:l})}},4841:function(e,t,n){var r=n(7561),o=n(3218),i=n(3448),l=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return NaN;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=s.test(e);return n||a.test(e)?c(e.slice(2),n?2:8):l.test(e)?NaN:+e}},6086:function(e){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},4155:function(e){var t,n,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var s,a=[],c=!1,u=-1;function d(){c&&s&&(c=!1,s.length?a=s.concat(a):u=-1,a.length&&f())}function f(){if(!c){var e=l(d);c=!0;for(var t=a.length;t;){for(s=a,a=[];++u<t;)s&&s[u].run();u=-1,t=a.length}s=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function v(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.push(new m(e,t)),1!==a.length||c||l(f)},m.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=v,r.addListener=v,r.once=v,r.off=v,r.removeListener=v,r.removeAllListeners=v,r.emit=v,r.prependListener=v,r.prependOnceListener=v,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},2218:function(e,t,n){!function(e,t){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=r(t);!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".react-horizontal-scrolling-menu--wrapper {\n  display: flex;\n}\n\n.react-horizontal-scrolling-menu--scroll-container {\n  display: flex;\n  height: max-content;\n  overflow-y: hidden;\n  position: relative;\n  width: 100%;\n}\n\n:export {\n  wrapper: react-horizontal-scrolling-menu--wrapper;\n  container: react-horizontal-scrolling-menu--scroll-container;\n}\n");const i="react-horizontal-scrolling-menu",l="-separator",s=`${i}--separator`,a=`${i}--item`,c=`${i}--scroll-container`,u=`${i}--wrapper`,d="itemId",f="data-key",m="data-index";var v=Object.freeze({__proto__:null,rootClassName:i,separatorString:l,separatorClassName:s,itemClassName:a,scrollContainerClassName:c,wrapperClassName:u,id:d,dataKeyAttribute:f,dataIndexAttribute:m});function h({className:e="",children:t,onScroll:n=(()=>{}),scrollRef:r}){const i=o.default.useMemo((()=>`${c} ${e}`),[e]);return o.default.createElement("div",{className:i,onScroll:n,ref:r},t)}var p=o.default.memo((function({className:e,id:t,index:n,refs:r}){const i=o.default.useRef(null);return r[n]=i,o.default.createElement("div",Object.assign({className:e},{[f]:t,[m]:n},{ref:i}))})),g=o.default.memo((function({children:e,className:t,id:n,index:r,refs:i}){const l=o.default.useRef(null);return i[String(r)]=l,o.default.createElement("div",Object.assign({className:t},{[f]:n,[m]:r},{ref:l}),e)}));function w({children:e,itemClassName:t="",refs:n,separatorClassName:r=""}){const i=o.default.Children.toArray(e).filter(Boolean),c=i.length,u=o.default.useMemo((()=>`${a} ${t}`),[t]),f=o.default.useMemo((()=>`${s} ${r}`),[r]);return o.default.createElement(o.default.Fragment,null,i.map(((e,t)=>{var r,i;const s=null===(i=null===(r=e)||void 0===r?void 0:r.props)||void 0===i?void 0:i[d],a=s+l,m=t+1===c;return[o.default.createElement(g,{className:u,id:s,key:"menuItem__"+s,refs:n,index:t},e),!m&&o.default.createElement(p,{className:f,id:a,refs:n,key:a,index:t+.1})]})))}function b(e,t="smooth",n="end",r="nearest"){var o,i;const l=(null===(i=null===(o=e)||void 0===o?void 0:o.entry)||void 0===i?void 0:i.target)||e;l&&window&&window.requestAnimationFrame((()=>l.scrollIntoView({block:r,behavior:t,inline:n})))}const y=e=>document.querySelector(`[data-key='${e}']`),x=e=>document.querySelector(`[data-index='${e}']`);function E(e){return o.default.isValidElement(e)&&e||"function"==typeof e&&o.default.createElement(e,null)||null}const I=e=>e.filter((e=>!new RegExp(".*-separator$").test(e)));function S({items:e,itemsChanged:t,refs:r,options:i}){const l=o.default.useRef(),[s,a]=o.default.useState([]),c=o.default.useRef(+setTimeout((()=>{}),0)),u=o.default.useCallback((t=>{e.set(function(e,t){return[...e].map((e=>{var n,r;const o=e.target,i=(null===(n=null==o?void 0:o.dataset)||void 0===n?void 0:n.key)||"";return[i,{index:String((null===(r=null==o?void 0:o.dataset)||void 0===r?void 0:r.index)||""),key:i,entry:e,visible:e.intersectionRatio>=t.ratio}]}))}(t,i)),n.g.clearTimeout(c.current),c.current=+setTimeout((()=>n.g.requestAnimationFrame((()=>{a((t=>{const n=e.getVisible().map((e=>e[1].key));return JSON.stringify(t)!==JSON.stringify(n)?n:t}))}))),i.throttle)}),[e,i]);return o.default.useLayoutEffect((()=>{const e=(e=>Object.values(e).map((e=>e.current)).filter(Boolean))(r),t=l.current||new IntersectionObserver(u,i);return l.current=t,e.forEach((e=>t.observe(e))),()=>{clearTimeout(c.current),t.disconnect(),l.current=void 0}}),[u,t,i,r]),{visibleItems:s}}function T(e,t){const[n,r]=o.default.useState(""),i=o.default.useMemo((()=>{return t=e,o.default.Children.toArray(t).map((e=>{var t,n;return null===(n=null===(t=e)||void 0===t?void 0:t.props)||void 0===n?void 0:n[d]})).filter(Boolean);var t}),[e]);return o.default.useEffect((()=>{r(i.filter(Boolean).join(""))}),[i]),o.default.useEffect((()=>{t.toItemsWithoutSeparators().filter((e=>!i.includes(e))).forEach((e=>t.delete(e)))}),[n]),n}class N extends Map{toArr(){return this.sort([...this])}toItems(){return this.toArr().map((([e])=>e))}toItemsWithoutSeparators(){return I(this.toItems())}toItemsKeys(){return this.toItems()}sort(e){return e.sort((([,e],[,t])=>+e.index-+t.index))}set(e,t){return Array.isArray(e)?this.sort(e).forEach((([e,t])=>{super.set(e,t)})):super.set(e,t),this}first(){var e;return null===(e=this.toArr()[0])||void 0===e?void 0:e[1]}last(){var e,t;return null===(t=null===(e=this.toArr().slice(-1))||void 0===e?void 0:e[0])||void 0===t?void 0:t[1]}filter(e){return this.toArr().filter(e)}find(e){return this.toArr().find(e)}findIndex(e){return this.toArr().findIndex(e)}prev(e){var t;const n=this.toArr(),r=n.findIndex((([t,n])=>t===e||n===e));return-1!==r?null===(t=n[r-1])||void 0===t?void 0:t[1]:void 0}next(e){var t;const n=this.toArr(),r=n.findIndex((([t,n])=>t===e||n===e));return-1!==r?null===(t=n[r+1])||void 0===t?void 0:t[1]:void 0}getVisible(){return this.filter((e=>e[1].visible))}}const C={ratio:.9,rootMargin:"5px",threshold:[.05,.5,.75,.95],throttle:100};function k({cb:e=(()=>{}),condition:t,visibleItems:n}){const r=t?JSON.stringify(n):"",i=function(e){const t=o.default.useRef();return o.default.useEffect((()=>{t.current=e}),[e]),t.current}(r);o.default.useEffect((()=>{t&&i!==r&&e()}),[t,i,r])}const M=o.default.createContext({}),O=e=>e.reduce(((e,t)=>e.concat(t).concat(`${t}-separator`)),[]).slice(0,-1);e.ScrollMenu=function({LeftArrow:e,RightArrow:t,children:n,onInit:r=(()=>{}),onUpdate:i=(()=>{}),onMouseDown:l,onMouseUp:s,onMouseMove:a,onScroll:c=(()=>{}),onWheel:d=(()=>{}),options:f=C,scrollContainerClassName:m="",itemClassName:v="",separatorClassName:p="",wrapperClassName:g="",apiRef:O={current:{}}}){const j=E(e),V=E(t),A=o.default.useRef(null),[_]=o.default.useState({}),W=o.default.useMemo((()=>Object.assign(Object.assign(Object.assign({},C),f),{root:A.current})),[f,A.current]),L=o.default.useRef(new N).current,$=T(n,L),{visibleItems:R}=S({items:L,itemsChanged:$,options:W,refs:_}),B=o.default.useRef({}),H=!!R.length;k({cb:()=>i(B.current),condition:function({cb:e,condition:t}){let n=t;null!=n||(n=!0);const[r,i]=o.default.useState(!1);return o.default.useEffect((()=>{n&&!r&&(i(!0),e())}),[n,r]),r}({cb:()=>r(B.current),condition:H}),visibleItems:R});const F=o.default.useMemo((()=>function(e,t=[]){var n,r;const o=I(t),i=!!(null===(n=e.first())||void 0===n?void 0:n.visible),l=!!(null===(r=e.last())||void 0===r?void 0:r.visible),s=t=>{var n;return null===(n=e.find((e=>e[1].key===String(t))))||void 0===n?void 0:n[1]},a=()=>{var t,n;return e.prev(null===(n=null===(t=e.getVisible())||void 0===t?void 0:t[0])||void 0===n?void 0:n[1])},c=()=>{var t,n,r,o;return e.next(null===(o=null===(r=null===(n=null===(t=e.getVisible())||void 0===t?void 0:t.slice)||void 0===n?void 0:n.call(t,-1))||void 0===r?void 0:r[0])||void 0===o?void 0:o[1])};return{getItemById:s,getItemElementById:y,getItemByIndex:t=>{var n;return null===(n=e.find((e=>String(e[1].index)===String(t))))||void 0===n?void 0:n[1]},getItemElementByIndex:x,getNextItem:c,getPrevItem:a,isFirstItemVisible:i,isItemVisible:e=>t.includes(e),isLastItem:t=>e.last()===s(t),isLastItemVisible:l,scrollNext:(e="smooth",t="start",n="nearest")=>b(c(),e,t,n),scrollPrev:(e="smooth",t="end",n="nearest")=>b(a(),e,t,n),scrollToItem:b,visibleItems:t,visibleItemsWithoutSeparators:o}}(L,R)),[L,R]);B.current=o.default.useMemo((()=>Object.assign(Object.assign({},F),{initComplete:H,items:L,scrollContainer:A})),[F,H,L]),O.current=B.current;const P=o.default.useCallback((e=>c(B.current,e)),[c,B]),D=o.default.useCallback((e=>d(B.current,e)),[d,B]),X=o.default.useMemo((()=>`${u} ${g}`),[g]);return o.default.createElement("div",{className:X,onWheel:D,onMouseDown:null==l?void 0:l(B.current),onMouseUp:null==s?void 0:s(B.current),onMouseMove:null==a?void 0:a(B.current)},o.default.createElement(M.Provider,{value:B.current},j,o.default.createElement(h,{className:m,onScroll:P,scrollRef:A},o.default.createElement(w,{refs:_,itemClassName:v,separatorClassName:p},n)),V))},e.VisibilityContext=M,e.constants=v,e.getItemsPos=e=>{var t;const n=(e=>e.filter(((e,t,n)=>{const r=0===t,o=t===n.length-1,i=new RegExp(l).test(e);return!((r||o)&&i)})))(e),r=n[Math.floor(n.length/2)];return{first:null==n?void 0:n[0],center:r,last:null===(t=n.slice(-1))||void 0===t?void 0:t[0]}},e.slidingWindow=function(e,t){const n=I(e),r=I(t);return{prev:()=>O(function(e,t){const n=e.findIndex((e=>e===(null==t?void 0:t[0]))),r=t.length,o=n-r,i=o<0,l=i?0:o,s=e.slice(l,i?r:n);return s.length===r?s:e.slice(n,r)}(n,r)),next:()=>O(function(e,t){const n=e.findIndex((e=>{var n;return e===(null===(n=t.slice(-1))||void 0===n?void 0:n[0])})),r=t.length,o=n+r+1,i=o>e.length-1,l=i?e.length-1:o,s=e.slice(i?l-r+1:n+1,l);return s.length===r?s:e.slice(e.length-r,e.length+r)}(n,r))}},Object.defineProperty(e,"__esModule",{value:!0})}(t,n(7294))},5182:function(e,t,n){"use strict";n.d(t,{C:function(){return w}});const r=e=>.5*(1-Math.cos(Math.PI*e)),o={_elementScroll:void 0,get elementScroll(){return this._elementScroll||(this._elementScroll=HTMLElement.prototype.scroll||HTMLElement.prototype.scrollTo||function(e,t){this.scrollLeft=e,this.scrollTop=t})},_elementScrollIntoView:void 0,get elementScrollIntoView(){return this._elementScrollIntoView||(this._elementScrollIntoView=HTMLElement.prototype.scrollIntoView)},_windowScroll:void 0,get windowScroll(){return this._windowScroll||(this._windowScroll=window.scroll||window.scrollTo)}},i=()=>{var e,t,n;return null!==(n=null===(t=null===(e=window.performance)||void 0===e?void 0:e.now)||void 0===t?void 0:t.call(e))&&void 0!==n?n:Date.now()},l=e=>{const t=(i()-e.timeStamp)/(e.duration||500);if(t>1)return e.method(e.targetX,e.targetY),void e.callback();const n=(e.timingFunc||r)(t),o=e.startX+(e.targetX-e.startX)*n,s=e.startY+(e.targetY-e.startY)*n;e.method(o,s),e.rafId=requestAnimationFrame((()=>{l(e)}))},s=e=>isFinite(e)?Number(e):0,a=e=>{const t=typeof e;return null!==e&&("object"===t||"function"===t)},c=(e,t)=>{var n,r;const a=o.elementScroll.bind(e);if(void 0===t.left&&void 0===t.top)return;const c=e.scrollLeft,u=e.scrollTop,d=s(null!==(n=t.left)&&void 0!==n?n:c),f=s(null!==(r=t.top)&&void 0!==r?r:u);if("smooth"!==t.behavior)return a(d,f);const m=()=>{window.removeEventListener("wheel",h),window.removeEventListener("touchmove",h)},v={timeStamp:i(),duration:t.duration,startX:c,startY:u,targetX:d,targetY:f,rafId:0,method:a,timingFunc:t.timingFunc,callback:m},h=()=>{cancelAnimationFrame(v.rafId),m()};window.addEventListener("wheel",h,{passive:!0,once:!0}),window.addEventListener("touchmove",h,{passive:!0,once:!0}),l(v)},u=(e,t,n,r,o,i,l,s)=>i<e&&l>t||i>e&&l<t?0:i<=e&&s<=n||l>=t&&s>=n?i-e-r:l>t&&s<n||i<e&&s>n?l-t+o:0,d=e=>"visible"!==e&&"clip"!==e,f=(e,t)=>(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth)&&(d(t.overflowY)||d(t.overflowX)||(e=>{const t=(e=>{if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(t){return null}})(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)})(e)),m=e=>{const t=e.parentNode;return null!==t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE?t.host:t},v=(e,t)=>e<-t?-t:e>t?t:e,h=e=>e in document.documentElement.style,p=(e,t)=>{const{top:n,right:r,bottom:o,left:i}=e.getBoundingClientRect(),[l,s,a,c]=["top","right","bottom","left"].map((e=>{const n=["scroll-margin","scroll-snap-margin"].filter(h)[0],r=t.getPropertyValue(`${n}-${e}`);return parseInt(r,10)||0}));return[n-l,r+s,o+a,i-c]},g=(e,t)=>{if(!1===e.isConnected)return;const n=document.scrollingElement||document.documentElement,r=[],o=getComputedStyle(document.documentElement);for(let c=m(e);null!==c;c=m(c)){if(c===n){r.push(c);break}const e=getComputedStyle(c);if((c!==document.body||!f(c,e)||f(document.documentElement,o))&&(f(c,e)&&r.push(c),"fixed"===e.position))break}const i=window.visualViewport?window.visualViewport.width:innerWidth,l=window.visualViewport?window.visualViewport.height:innerHeight,s=window.scrollX||window.pageXOffset,a=window.scrollY||window.pageYOffset,d=getComputedStyle(e),[h,g,w,b]=p(e,d),y=w-h,x=g-b,E=(e=>{switch(e){case"horizontal-tb":case"lr":case"lr-tb":case"rl":case"rl-tb":return 0;case"vertical-rl":case"tb":case"tb-rl":return 1;case"vertical-lr":case"tb-lr":return 2;case"sideways-rl":return 3;case"sideways-lr":return 4}return 0})(d.writingMode||d.getPropertyValue("-webkit-writing-mode")||d.getPropertyValue("-ms-writing-mode")),I="rtl"!==d.direction,[S,T]=((e,t,n)=>{let[r,o]=[e.block||"start",e.inline||"nearest"],i=0;switch(n||(i^=2),t){case 0:i=i>>1|(1&i)<<1,[r,o]=[o,r];break;case 1:case 3:i^=1;break;case 4:i^=2}return[r,o].map(((e,t)=>{switch(e){case"center":return 1;case"nearest":return 0;default:return"start"===e===!(i>>t&1)?2:3}}))})(t,E,I);let N=(()=>{switch(T){case 1:return h+y/2;case 2:case 0:return h;case 3:return w}})(),C=(()=>{switch(S){case 1:return b+x/2;case 3:return g;case 2:case 0:return b}})();const k=[];r.forEach((e=>{const{height:r,width:o,top:d,right:f,bottom:m,left:h}=e.getBoundingClientRect(),p=getComputedStyle(e),g=parseInt(p.borderLeftWidth,10),w=parseInt(p.borderTopWidth,10),b=parseInt(p.borderRightWidth,10),E=parseInt(p.borderBottomWidth,10);let I=0,M=0;const O="offsetWidth"in e?e.offsetWidth-e.clientWidth-g-b:0,j="offsetHeight"in e?e.offsetHeight-e.clientHeight-w-E:0;if(n===e){switch(T){case 2:I=N;break;case 3:I=N-l;break;case 1:I=N-l/2;break;case 0:I=u(a,a+l,l,w,E,a+N,a+N+y,y)}switch(S){case 2:M=C;break;case 3:M=C-i;break;case 1:M=C-i/2;break;case 0:M=u(s,s+i,i,g,b,s+C,s+C+x,x)}I+=a,M+=s}else{switch(T){case 2:I=N-d-w;break;case 3:I=N-m+E+j;break;case 1:I=N-(d+r/2)+j/2;break;case 0:I=u(d,m,r,w,E+j,N,N+y,y)}switch(S){case 2:M=C-h-g;break;case 3:M=C-f+b+O;break;case 1:M=C-(h+o/2)+O/2;break;case 0:M=u(h,f,o,g,b+O,C,C+x,x)}const{scrollLeft:t,scrollTop:n}=e;I=v(n+I,e.scrollHeight-r+j),M=v(t+M,e.scrollWidth-o+O),N+=n-I,C+=t-M}k.push((()=>c(e,{...t,top:I,left:M})))})),k.forEach((e=>e()))},w=e=>{if("scrollBehavior"in document.documentElement.style)return;const t=o.elementScrollIntoView;var n;n=n=>n.scrollIntoView=function(){const n=arguments[0];return 1===arguments.length&&a(n)?g(this,{...n,...e}):t.apply(this,arguments)},[HTMLElement.prototype,SVGElement.prototype,Element.prototype].forEach((e=>n(e)))}}}]);