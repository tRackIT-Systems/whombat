"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9530],{31708:function(e,t,n){n.d(t,{f:function(){return l}});var r=n(6439),o=n(64092);function i(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";if("string"==typeof n&&"button"===n.toLowerCase())return"button"}function l(e,t){let[n,l]=(0,r.useState)(()=>i(e));return(0,o.e)(()=>{l(i(e))},[e.type,e.as]),(0,o.e)(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&l("button")},[n,t]),n}},16267:function(e,t,n){n.d(t,{g:function(){return i}});var r=n(6439);function o(e){return[e.screenX,e.screenY]}function i(){let e=(0,r.useRef)([-1,-1]);return{wasMoved(t){let n=o(t);return(e.current[0]!==n[0]||e.current[1]!==n[1])&&(e.current=n,!0)},update(t){e.current=o(t)}}}},6271:function(e,t,n){n.d(t,{T:function(){return o},d:function(){return i}});var r,o=((r=o||{})[r.First=0]="First",r[r.Previous=1]="Previous",r[r.Next=2]="Next",r[r.Last=3]="Last",r[r.Specific=4]="Specific",r[r.Nothing=5]="Nothing",r);function i(e,t){let n=t.resolveItems();if(n.length<=0)return null;let r=t.resolveActiveIndex(),o=null!=r?r:-1,i=(()=>{switch(e.focus){case 0:return n.findIndex(e=>!t.resolveDisabled(e));case 1:{let e=n.slice().reverse().findIndex((e,n,r)=>(-1===o||!(r.length-n-1>=o))&&!t.resolveDisabled(e));return -1===e?e:n.length-1-e}case 2:return n.findIndex((e,n)=>!(n<=o)&&!t.resolveDisabled(e));case 3:{let e=n.slice().reverse().findIndex(e=>!t.resolveDisabled(e));return -1===e?e:n.length-1-e}case 4:return n.findIndex(n=>t.resolveId(n)===e.id);case 5:return null;default:!function(e){throw Error("Unexpected object: "+e)}(e)}})();return -1===i?r:i}},29554:function(e,t,n){n.d(t,{bv:function(){return eU}});var r,o,i=n(6439),l=n.t(i,2),u=n(49281),a=n(80972);let c=["top","right","bottom","left"],s=c.reduce((e,t)=>e.concat(t,t+"-start",t+"-end"),[]),f=Math.min,d=Math.max,p=Math.round,m=Math.floor,h=e=>({x:e,y:e}),g={left:"right",right:"left",bottom:"top",top:"bottom"},y={start:"end",end:"start"};function v(e,t){return"function"==typeof e?e(t):e}function w(e){return e.split("-")[0]}function x(e){return e.split("-")[1]}function b(e){return"x"===e?"y":"x"}function E(e){return"y"===e?"height":"width"}function R(e){return["top","bottom"].includes(w(e))?"y":"x"}function C(e,t,n){void 0===n&&(n=!1);let r=x(e),o=b(R(e)),i=E(o),l="x"===o?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[i]>t.floating[i]&&(l=T(l)),[l,T(l)]}function S(e){return e.replace(/start|end/g,e=>y[e])}function T(e){return e.replace(/left|right|bottom|top/g,e=>g[e])}function j(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function F(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function L(e,t,n){let r,{reference:o,floating:i}=e,l=R(t),u=b(R(t)),a=E(u),c=w(t),s="y"===l,f=o.x+o.width/2-i.width/2,d=o.y+o.height/2-i.height/2,p=o[a]/2-i[a]/2;switch(c){case"top":r={x:f,y:o.y-i.height};break;case"bottom":r={x:f,y:o.y+o.height};break;case"right":r={x:o.x+o.width,y:d};break;case"left":r={x:o.x-i.width,y:d};break;default:r={x:o.x,y:o.y}}switch(x(t)){case"start":r[u]-=p*(n&&s?-1:1);break;case"end":r[u]+=p*(n&&s?-1:1)}return r}let P=async(e,t,n)=>{let{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:l}=n,u=i.filter(Boolean),a=await (null==l.isRTL?void 0:l.isRTL(t)),c=await l.getElementRects({reference:e,floating:t,strategy:o}),{x:s,y:f}=L(c,r,a),d=r,p={},m=0;for(let n=0;n<u.length;n++){let{name:i,fn:h}=u[n],{x:g,y:y,data:v,reset:w}=await h({x:s,y:f,initialPlacement:r,placement:d,strategy:o,middlewareData:p,rects:c,platform:l,elements:{reference:e,floating:t}});if(s=null!=g?g:s,f=null!=y?y:f,p={...p,[i]:{...p[i],...v}},w&&m<=50){m++,"object"==typeof w&&(w.placement&&(d=w.placement),w.rects&&(c=!0===w.rects?await l.getElementRects({reference:e,floating:t,strategy:o}):w.rects),{x:s,y:f}=L(c,d,a)),n=-1;continue}}return{x:s,y:f,placement:d,strategy:o,middlewareData:p}};async function O(e,t){var n;void 0===t&&(t={});let{x:r,y:o,platform:i,rects:l,elements:u,strategy:a}=e,{boundary:c="clippingAncestors",rootBoundary:s="viewport",elementContext:f="floating",altBoundary:d=!1,padding:p=0}=v(t,e),m=j(p),h=u[d?"floating"===f?"reference":"floating":f],g=F(await i.getClippingRect({element:null==(n=await (null==i.isElement?void 0:i.isElement(h)))||n?h:h.contextElement||await (null==i.getDocumentElement?void 0:i.getDocumentElement(u.floating)),boundary:c,rootBoundary:s,strategy:a})),y="floating"===f?{...l.floating,x:r,y:o}:l.reference,w=await (null==i.getOffsetParent?void 0:i.getOffsetParent(u.floating)),x=await (null==i.isElement?void 0:i.isElement(w))&&await (null==i.getScale?void 0:i.getScale(w))||{x:1,y:1},b=F(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:y,offsetParent:w,strategy:a}):y);return{top:(g.top-b.top+m.top)/x.y,bottom:(b.bottom-g.bottom+m.bottom)/x.y,left:(g.left-b.left+m.left)/x.x,right:(b.right-g.right+m.right)/x.x}}let k=e=>({name:"arrow",options:e,async fn(t){let{x:n,y:r,placement:o,rects:i,platform:l,elements:u,middlewareData:a}=t,{element:c,padding:s=0}=v(e,t)||{};if(null==c)return{};let p=j(s),m={x:n,y:r},h=b(R(o)),g=E(h),y=await l.getDimensions(c),w="y"===h,C=w?"clientHeight":"clientWidth",S=i.reference[g]+i.reference[h]-m[h]-i.floating[g],T=m[h]-i.reference[h],F=await (null==l.getOffsetParent?void 0:l.getOffsetParent(c)),L=F?F[C]:0;L&&await (null==l.isElement?void 0:l.isElement(F))||(L=u.floating[C]||i.floating[g]);let P=L/2-y[g]/2-1,O=f(p[w?"top":"left"],P),k=f(p[w?"bottom":"right"],P),A=L-y[g]-k,I=L/2-y[g]/2+(S/2-T/2),M=d(O,f(I,A)),$=!a.arrow&&null!=x(o)&&I!=M&&i.reference[g]/2-(I<O?O:k)-y[g]/2<0,N=$?I<O?I-O:I-A:0;return{[h]:m[h]+N,data:{[h]:M,centerOffset:I-M-N,...$&&{alignmentOffset:N}},reset:$}}});function A(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function I(e){return c.some(t=>e[t]>=0)}async function M(e,t){let{placement:n,platform:r,elements:o}=e,i=await (null==r.isRTL?void 0:r.isRTL(o.floating)),l=w(n),u=x(n),a="y"===R(n),c=["left","top"].includes(l)?-1:1,s=i&&a?-1:1,f=v(t,e),{mainAxis:d,crossAxis:p,alignmentAxis:m}="number"==typeof f?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return u&&"number"==typeof m&&(p="end"===u?-1*m:m),a?{x:p*s,y:d*c}:{x:d*c,y:p*s}}function $(e){return H(e)?(e.nodeName||"").toLowerCase():"#document"}function N(e){var t;return(null==e?void 0:null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function D(e){var t;return null==(t=(H(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function H(e){return e instanceof Node||e instanceof N(e).Node}function _(e){return e instanceof Element||e instanceof N(e).Element}function B(e){return e instanceof HTMLElement||e instanceof N(e).HTMLElement}function W(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof N(e).ShadowRoot)}function z(e){let{overflow:t,overflowX:n,overflowY:r,display:o}=X(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function V(e){let t=U(),n=X(e);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some(e=>(n.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(n.contain||"").includes(e))}function U(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function Y(e){return["html","body","#document"].includes($(e))}function X(e){return N(e).getComputedStyle(e)}function q(e){return _(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function G(e){if("html"===$(e))return e;let t=e.assignedSlot||e.parentNode||W(e)&&e.host||D(e);return W(t)?t.host:t}function J(e,t,n){var r;void 0===t&&(t=[]),void 0===n&&(n=!0);let o=function e(t){let n=G(t);return Y(n)?t.ownerDocument?t.ownerDocument.body:t.body:B(n)&&z(n)?n:e(n)}(e),i=o===(null==(r=e.ownerDocument)?void 0:r.body),l=N(o);return i?t.concat(l,l.visualViewport||[],z(o)?o:[],l.frameElement&&n?J(l.frameElement):[]):t.concat(o,J(o,[],n))}function K(e){let t=X(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,o=B(e),i=o?e.offsetWidth:n,l=o?e.offsetHeight:r,u=p(n)!==i||p(r)!==l;return u&&(n=i,r=l),{width:n,height:r,$:u}}function Q(e){return _(e)?e:e.contextElement}function Z(e){let t=Q(e);if(!B(t))return h(1);let n=t.getBoundingClientRect(),{width:r,height:o,$:i}=K(t),l=(i?p(n.width):n.width)/r,u=(i?p(n.height):n.height)/o;return l&&Number.isFinite(l)||(l=1),u&&Number.isFinite(u)||(u=1),{x:l,y:u}}let ee=h(0);function et(e){let t=N(e);return U()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:ee}function en(e,t,n,r){var o;void 0===t&&(t=!1),void 0===n&&(n=!1);let i=e.getBoundingClientRect(),l=Q(e),u=h(1);t&&(r?_(r)&&(u=Z(r)):u=Z(e));let a=(void 0===(o=n)&&(o=!1),r&&(!o||r===N(l))&&o)?et(l):h(0),c=(i.left+a.x)/u.x,s=(i.top+a.y)/u.y,f=i.width/u.x,d=i.height/u.y;if(l){let e=N(l),t=r&&_(r)?N(r):r,n=e.frameElement;for(;n&&r&&t!==e;){let e=Z(n),t=n.getBoundingClientRect(),r=X(n),o=t.left+(n.clientLeft+parseFloat(r.paddingLeft))*e.x,i=t.top+(n.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,s*=e.y,f*=e.x,d*=e.y,c+=o,s+=i,n=N(n).frameElement}}return F({width:f,height:d,x:c,y:s})}function er(e){return en(D(e)).left+q(e).scrollLeft}function eo(e,t,n){let r;if("viewport"===t)r=function(e,t){let n=N(e),r=D(e),o=n.visualViewport,i=r.clientWidth,l=r.clientHeight,u=0,a=0;if(o){i=o.width,l=o.height;let e=U();(!e||e&&"fixed"===t)&&(u=o.offsetLeft,a=o.offsetTop)}return{width:i,height:l,x:u,y:a}}(e,n);else if("document"===t)r=function(e){let t=D(e),n=q(e),r=e.ownerDocument.body,o=d(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=d(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),l=-n.scrollLeft+er(e),u=-n.scrollTop;return"rtl"===X(r).direction&&(l+=d(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:l,y:u}}(D(e));else if(_(t))r=function(e,t){let n=en(e,!0,"fixed"===t),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=B(e)?Z(e):h(1),l=e.clientWidth*i.x,u=e.clientHeight*i.y,a=o*i.x,c=r*i.y;return{width:l,height:u,x:a,y:c}}(t,n);else{let n=et(e);r={...t,x:t.x-n.x,y:t.y-n.y}}return F(r)}function ei(e,t){return B(e)&&"fixed"!==X(e).position?t?t(e):e.offsetParent:null}function el(e,t){let n=N(e);if(!B(e))return n;let r=ei(e,t);for(;r&&["table","td","th"].includes($(r))&&"static"===X(r).position;)r=ei(r,t);return r&&("html"===$(r)||"body"===$(r)&&"static"===X(r).position&&!V(r))?n:r||function(e){let t=G(e);for(;B(t)&&!Y(t);){if(V(t))return t;t=G(t)}return null}(e)||n}let eu=async function(e){let{reference:t,floating:n,strategy:r}=e,o=this.getOffsetParent||el,i=this.getDimensions;return{reference:function(e,t,n){let r=B(t),o=D(t),i="fixed"===n,l=en(e,!0,i,t),u={scrollLeft:0,scrollTop:0},a=h(0);if(r||!r&&!i){if(("body"!==$(t)||z(o))&&(u=q(t)),r){let e=en(t,!0,i,t);a.x=e.x+t.clientLeft,a.y=e.y+t.clientTop}else o&&(a.x=er(o))}return{x:l.left+u.scrollLeft-a.x,y:l.top+u.scrollTop-a.y,width:l.width,height:l.height}}(t,await o(n),r),floating:{x:0,y:0,...await i(n)}}},ea={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:n,strategy:r}=e,o=B(n),i=D(n);if(n===i)return t;let l={scrollLeft:0,scrollTop:0},u=h(1),a=h(0);if((o||!o&&"fixed"!==r)&&(("body"!==$(n)||z(i))&&(l=q(n)),B(n))){let e=en(n);u=Z(n),a.x=e.x+n.clientLeft,a.y=e.y+n.clientTop}return{width:t.width*u.x,height:t.height*u.y,x:t.x*u.x-l.scrollLeft*u.x+a.x,y:t.y*u.y-l.scrollTop*u.y+a.y}},getDocumentElement:D,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e,i="clippingAncestors"===n?function(e,t){let n=t.get(e);if(n)return n;let r=J(e,[],!1).filter(e=>_(e)&&"body"!==$(e)),o=null,i="fixed"===X(e).position,l=i?G(e):e;for(;_(l)&&!Y(l);){let t=X(l),n=V(l);n||"fixed"!==t.position||(o=null);let u=i?!n&&!o:!n&&"static"===t.position&&!!o&&["absolute","fixed"].includes(o.position)||z(l)&&!n&&function e(t,n){let r=G(t);return!(r===n||!_(r)||Y(r))&&("fixed"===X(r).position||e(r,n))}(e,l);u?r=r.filter(e=>e!==l):o=t,l=G(l)}return t.set(e,r),r}(t,this._c):[].concat(n),l=[...i,r],u=l[0],a=l.reduce((e,n)=>{let r=eo(t,n,o);return e.top=d(r.top,e.top),e.right=f(r.right,e.right),e.bottom=f(r.bottom,e.bottom),e.left=d(r.left,e.left),e},eo(t,u,o));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:el,getElementRects:eu,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){return K(e)},getScale:Z,isElement:_,isRTL:function(e){return"rtl"===X(e).direction}},ec=(e,t,n)=>{let r=new Map,o={platform:ea,...n},i={...o.platform,_c:r};return P(e,t,{...o,platform:i})};var es=n(28759);let ef=e=>{let{element:t,padding:n}=e;return{name:"arrow",options:e,fn(e){if(Object.prototype.hasOwnProperty.call(t,"current")){if(null!=t.current)return k({element:t.current,padding:n}).fn(e)}else if(t)return k({element:t,padding:n}).fn(e);return{}}}};var ed="undefined"!=typeof document?i.useLayoutEffect:i.useEffect;function ep(e,t){let n,r,o;if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if((n=e.length)!=t.length)return!1;for(r=n;0!=r--;)if(!ep(e[r],t[r]))return!1;return!0}if((n=(o=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!Object.prototype.hasOwnProperty.call(t,o[r]))return!1;for(r=n;0!=r--;){let n=o[r];if(("_owner"!==n||!e.$$typeof)&&!ep(e[n],t[n]))return!1}return!0}return e!=e&&t!=t}function em(e){let t=i.useRef(e);return ed(()=>{t.current=e}),t}var eh="undefined"!=typeof document?i.useLayoutEffect:i.useEffect;l["useId".toString()];let eg=i.createContext(null),ey=()=>i.useContext(eg);function ev(e){return!!e&&e instanceof(((null==e?void 0:e.ownerDocument)||document).defaultView||window).Element}let ew=l["useInsertionEffect".toString()],ex=ew||(e=>e());var eb=Object.defineProperty,eE=(e,t,n)=>t in e?eb(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,eR=(e,t,n)=>(eE(e,"symbol"!=typeof t?t+"":t,n),n),eC={exports:{}},eS={};eC.exports=function(){if(o)return eS;o=1;var e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,r=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(t,o,i){var u,a={},c=null,s=null;for(u in void 0!==i&&(c=""+i),void 0!==o.key&&(c=""+o.key),void 0!==o.ref&&(s=o.ref),o)n.call(o,u)&&!l.hasOwnProperty(u)&&(a[u]=o[u]);if(t&&t.defaultProps)for(u in o=t.defaultProps)void 0===a[u]&&(a[u]=o[u]);return{$$typeof:e,type:t,key:c,ref:s,props:a,_owner:r.current}}return eS.Fragment=t,eS.jsx=u,eS.jsxs=u,eS}();var eT=eC.exports;let ej=new class{constructor(){eR(this,"current",this.detect()),eR(this,"currentId",0)}set(e){this.current!==e&&(this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},eF=(e,t)=>{ej.isServer?(0,i.useEffect)(e,t):(0,i.useLayoutEffect)(e,t)},eL={serverHandoffComplete:!1},eP=i.useId??function(){let e=function(){let[e,t]=(0,i.useState)(eL.serverHandoffComplete);return(0,i.useEffect)(()=>{!0!==e&&t(!0)},[e]),(0,i.useEffect)(()=>{!1===eL.serverHandoffComplete&&(eL.serverHandoffComplete=!0)},[]),e}(),[t,n]=i.useState(e?()=>ej.nextId():null);return eF(()=>{null===t&&n(ej.nextId())},[t]),null!=t?`${t}`:void 0},eO=e=>{switch(e){case"top":return"origin-bottom";case"bottom":return"origin-top";case"left":return"origin-right";case"right":return"origin-left";case"top-start":case"right-end":return"origin-bottom-left";case"top-end":case"left-end":return"origin-bottom-right";case"right-start":case"bottom-start":return"origin-top-left";case"left-start":case"bottom-end":return"origin-top-right";default:return""}};function ek(e){return ej.isServer?null:e instanceof Node?e.ownerDocument:e&&Object.prototype.hasOwnProperty.call(e,"current")&&e.current instanceof Node?e.current.ownerDocument:document}let eA=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var eI=((r=eI||{})[r.Strict=0]="Strict",r[r.Loose=1]="Loose",r);function eM(e,t,n){let r=function(e){let t=(0,i.useRef)(e);return eF(()=>{t.current=e},[e]),t}(t);(0,i.useEffect)(()=>{function t(e){r.current(e)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)},[e,n])}let e$=new Map,eN=(0,i.createContext)(null);eN.displayName="ReferenceContext";let eD=(0,i.createContext)(null);eD.displayName="FloatingContext";let eH=(0,i.createContext)(null);function e_(e,t,n,r){let{referenceRef:o}=r;if(t.as===i.Fragment)return eT.jsx(e.type,{...e.props,...n,ref:o});let l=t.as||"div";return eT.jsx(l,{...n,ref:o,children:eT.jsx(e.type,{...e.props})})}function eB(e,t,n,r){var o;let{floatingRef:l,props:c,mounted:s,setShow:f,x:d,y:p,placement:m,strategy:h,referenceElWidth:g}=r,y={...c,...t},v=(0,i.useMemo)(()=>"function"==typeof y.originClass?y.originClass(m):"string"==typeof y.originClass?y.originClass:y.tailwindcssOriginClass?eO(m):"",[m,y.originClass,y.tailwindcssOriginClass]),w={show:!!s.current&&y.show,enter:`${y.enter||""} ${v}`,enterFrom:`${y.enterFrom||""}`,enterTo:`${y.enterTo||""}`,leave:`${y.leave||""} ${v}`,leaveFrom:`${y.leaveFrom||""}`,leaveTo:`${y.leaveTo||""}`,beforeEnter:()=>{f(!0)},afterLeave:()=>{f(!1)}},x={style:{...!y.dialog&&(y.transform||void 0===y.transform)?{position:h,zIndex:y.zIndex||9999,top:"0px",left:"0px",right:"auto",bottom:"auto",transform:`translate(${Math.round(d||0)}px,${Math.round(p||0)}px)`}:{position:h,zIndex:y.zIndex||9999,top:`${p||0}px`,left:`${d||0}px`},width:y.adaptiveWidth&&"number"==typeof g?`${g}px`:void 0}};return o=function(e){let t={...x,...n,ref:l};if(y.as===i.Fragment)return eT.jsx(e.type,{...e.props,...t});let r=y.as||"div";return eT.jsx(r,{...t,children:eT.jsx(e.type,{...e.props})})}(ej.isServer?s.current&&y.show?eT.jsx(e.type,{...e.props}):eT.jsx(i.Fragment,{}):y.transitionChild?eT.jsx(a.u.Child,{as:i.Fragment,...w,children:eT.jsx(e.type,{...e.props})}):eT.jsx(a.u,{as:i.Fragment,...w,children:eT.jsx(e.type,{...e.props})})),y.portal?eT.jsx(u.h,{children:o}):o}function eW([e,t],n){var r,o,l,u;let a=eP(),c=(0,i.useRef)(!1),[p,h]=(0,i.useState)(),g=(0,i.useRef)(null),y=(0,i.useMemo)(()=>({show:n.onShow||(()=>{}),hide:n.onHide||(()=>{}),update:n.onUpdate||(()=>{})}),[n.onShow,n.onHide,n.onUpdate]),{x:E,y:j,placement:F,strategy:L,update:P,refs:k,middlewareData:$}=function(e){void 0===e&&(e={});let{open:t=!1,onOpenChange:n,nodeId:r}=e,o=function(e){void 0===e&&(e={});let{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:o,whileElementsMounted:l,open:u}=e,[a,c]=i.useState({x:null,y:null,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[s,f]=i.useState(r);ep(s,r)||f(r);let d=i.useRef(null),p=i.useRef(null),m=i.useRef(a),h=em(l),g=em(o),[y,v]=i.useState(null),[w,x]=i.useState(null),b=i.useCallback(e=>{d.current!==e&&(d.current=e,v(e))},[]),E=i.useCallback(e=>{p.current!==e&&(p.current=e,x(e))},[]),R=i.useCallback(()=>{if(!d.current||!p.current)return;let e={placement:t,strategy:n,middleware:s};g.current&&(e.platform=g.current),ec(d.current,p.current,e).then(e=>{let t={...e,isPositioned:!0};C.current&&!ep(m.current,t)&&(m.current=t,es.flushSync(()=>{c(t)}))})},[s,t,n,g]);ed(()=>{!1===u&&m.current.isPositioned&&(m.current.isPositioned=!1,c(e=>({...e,isPositioned:!1})))},[u]);let C=i.useRef(!1);ed(()=>(C.current=!0,()=>{C.current=!1}),[]),ed(()=>{if(y&&w){if(h.current)return h.current(y,w,R);R()}},[y,w,R,h]);let S=i.useMemo(()=>({reference:d,floating:p,setReference:b,setFloating:E}),[b,E]),T=i.useMemo(()=>({reference:y,floating:w}),[y,w]);return i.useMemo(()=>({...a,update:R,refs:S,elements:T,reference:b,floating:E}),[a,R,S,T,b,E])}(e),l=ey(),u=i.useRef(null),a=i.useRef({}),c=i.useState(()=>(function(){let e=new Map;return{emit(t,n){var r;null==(r=e.get(t))||r.forEach(e=>e(n))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){e.set(t,(e.get(t)||[]).filter(e=>e!==n))}}})())[0],[s,f]=i.useState(null),d=i.useCallback(e=>{let t=ev(e)?{getBoundingClientRect:()=>e.getBoundingClientRect(),contextElement:e}:e;o.refs.setReference(t)},[o.refs]),p=i.useCallback(e=>{(ev(e)||null===e)&&(u.current=e,f(e)),(ev(o.refs.reference.current)||null===o.refs.reference.current||null!==e&&!ev(e))&&o.refs.setReference(e)},[o.refs]),m=i.useMemo(()=>({...o.refs,setReference:p,setPositionReference:d,domReference:u}),[o.refs,p,d]),h=i.useMemo(()=>({...o.elements,domReference:s}),[o.elements,s]),g=function(e){let t=i.useRef(()=>{});return ex(()=>{t.current=e}),i.useCallback(function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return null==t.current?void 0:t.current(...n)},[])}(n),y=i.useMemo(()=>({...o,refs:m,elements:h,dataRef:a,nodeId:r,events:c,open:t,onOpenChange:g}),[o,r,c,t,g,m,h]);return eh(()=>{let e=null==l?void 0:l.nodesRef.current.find(e=>e.id===r);e&&(e.context=y)}),i.useMemo(()=>({...o,context:y,refs:m,reference:p,positionReference:d}),[o,m,y,p,d])}({placement:n.placement||"bottom-start",strategy:n.strategy,middleware:p}),[N,H]=(0,i.useState)(null);(0,i.useEffect)(()=>{c.current=!0},[]),(0,i.useEffect)(()=>{e&&!e$.get(a)?(e$.set(a,!0),y.show()):!e&&e$.get(a)&&(e$.delete(a),y.hide())},[e]);let _=(0,i.useCallback)(()=>{P(),y.update()},[P,y]);(0,i.useEffect)(_,[n.placement,n.strategy,p]),(0,i.useEffect)(()=>{var e,t,r,o,i;let l=[];("number"==typeof n.offset||"object"==typeof n.offset||"function"==typeof n.offset)&&l.push((void 0===(e=n.offset)&&(e=0),{name:"offset",options:e,async fn(t){let{x:n,y:r}=t,o=await M(t,e);return{x:n+o.x,y:r+o.y,data:o}}})),(!0===n.flip||"number"==typeof n.flip||"object"==typeof n.flip)&&l.push({name:"flip",options:t={padding:"number"==typeof n.flip?n.flip:void 0,..."object"==typeof n.flip?n.flip:{}},async fn(e){var n,r,o,i,l;let{placement:u,middlewareData:a,rects:c,initialPlacement:s,platform:f,elements:d}=e,{mainAxis:p=!0,crossAxis:m=!0,fallbackPlacements:h,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:b=!0,...E}=v(t,e);if(null!=(n=a.arrow)&&n.alignmentOffset)return{};let R=w(u),j=w(s)===s,F=await (null==f.isRTL?void 0:f.isRTL(d.floating)),L=h||(j||!b?[T(s)]:function(e){let t=T(e);return[S(e),t,S(t)]}(s));h||"none"===y||L.push(...function(e,t,n,r){let o=x(e),i=function(e,t,n){let r=["left","right"],o=["right","left"];switch(e){case"top":case"bottom":if(n)return t?o:r;return t?r:o;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}(w(e),"start"===n,r);return o&&(i=i.map(e=>e+"-"+o),t&&(i=i.concat(i.map(S)))),i}(s,b,y,F));let P=[s,...L],k=await O(e,E),A=[],I=(null==(r=a.flip)?void 0:r.overflows)||[];if(p&&A.push(k[R]),m){let e=C(u,c,F);A.push(k[e[0]],k[e[1]])}if(I=[...I,{placement:u,overflows:A}],!A.every(e=>e<=0)){let e=((null==(o=a.flip)?void 0:o.index)||0)+1,t=P[e];if(t)return{data:{index:e,overflows:I},reset:{placement:t}};let n=null==(i=I.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:i.placement;if(!n)switch(g){case"bestFit":{let e=null==(l=I.map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:l[0];e&&(n=e);break}case"initialPlacement":n=s}if(u!==n)return{reset:{placement:n}}}return{}}}),(!0===n.shift||"number"==typeof n.shift||"object"==typeof n.shift)&&l.push({name:"shift",options:r={padding:"number"==typeof n.shift?n.shift:void 0,..."object"==typeof n.shift?n.shift:{}},async fn(e){let{x:t,y:n,placement:o}=e,{mainAxis:i=!0,crossAxis:l=!1,limiter:u={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...a}=v(r,e),c={x:t,y:n},s=await O(e,a),p=R(w(o)),m=b(p),h=c[m],g=c[p];if(i){let e=h+s["y"===m?"top":"left"],t=h-s["y"===m?"bottom":"right"];h=d(e,f(h,t))}if(l){let e="y"===p?"top":"left",t="y"===p?"bottom":"right",n=g+s[e],r=g-s[t];g=d(n,f(g,r))}let y=u.fn({...e,[m]:h,[p]:g});return{...y,data:{x:y.x-t,y:y.y-n}}}}),(!0===n.autoPlacement||"object"==typeof n.autoPlacement)&&l.push((void 0===(o="object"==typeof n.autoPlacement?n.autoPlacement:void 0)&&(o={}),{name:"autoPlacement",options:o,async fn(e){var t,n,r;let{rects:i,middlewareData:l,placement:u,platform:a,elements:c}=e,{crossAxis:f=!1,alignment:d,allowedPlacements:p=s,autoAlignment:m=!0,...h}=v(o,e),g=void 0!==d||p===s?function(e,t,n){let r=e?[...n.filter(t=>x(t)===e),...n.filter(t=>x(t)!==e)]:n.filter(e=>w(e)===e);return r.filter(n=>!e||x(n)===e||!!t&&S(n)!==n)}(d||null,m,p):p,y=await O(e,h),b=(null==(t=l.autoPlacement)?void 0:t.index)||0,E=g[b];if(null==E)return{};let R=C(E,i,await (null==a.isRTL?void 0:a.isRTL(c.floating)));if(u!==E)return{reset:{placement:g[0]}};let T=[y[w(E)],y[R[0]],y[R[1]]],j=[...(null==(n=l.autoPlacement)?void 0:n.overflows)||[],{placement:E,overflows:T}],F=g[b+1];if(F)return{data:{index:b+1,overflows:j},reset:{placement:F}};let L=j.map(e=>{let t=x(e.placement);return[e.placement,t&&f?e.overflows.slice(0,2).reduce((e,t)=>e+t,0):e.overflows[0],e.overflows]}).sort((e,t)=>e[1]-t[1]),P=L.filter(e=>e[2].slice(0,x(e[0])?2:3).every(e=>e<=0)),k=(null==(r=P[0])?void 0:r[0])||L[0][0];return k!==u?{data:{index:b+1,overflows:j},reset:{placement:k}}:{}}})),(!0===n.arrow||"number"==typeof n.arrow)&&l.push(ef({element:g,padding:!0===n.arrow?0:n.arrow})),l.push(..."function"==typeof n.middleware?n.middleware({referenceEl:k.reference,floatingEl:k.floating}):n.middleware||[]),(!0===n.hide||"object"==typeof n.hide)&&l.push((void 0===(i="object"==typeof n.hide?n.hide:void 0)&&(i={}),{name:"hide",options:i,async fn(e){let{rects:t}=e,{strategy:n="referenceHidden",...r}=v(i,e);switch(n){case"referenceHidden":{let n=await O(e,{...r,elementContext:"reference"}),o=A(n,t.reference);return{data:{referenceHiddenOffsets:o,referenceHidden:I(o)}}}case"escaped":{let n=await O(e,{...r,altBoundary:!0}),o=A(n,t.floating);return{data:{escapedOffsets:o,escaped:I(o)}}}default:return{}}}})),h(l)},[n.offset,n.shift,n.flip,n.arrow,n.autoPlacement,n.hide,n.middleware]),l=n.adaptiveWidth,u=k.reference,(0,i.useEffect)(()=>{if(l&&ej.isClient&&"u">typeof ResizeObserver&&u.current&&u.current instanceof Element){let e=new ResizeObserver(([e])=>{let t=e.borderBoxSize.reduce((e,{inlineSize:t})=>e+t,0);H(t)});return e.observe(u.current),()=>{e.disconnect(),H(null)}}},[]),(0,i.useEffect)(()=>{if(k.reference.current&&k.floating.current&&e)return!1!==n.autoUpdate?function(e,t,n,r){let o;void 0===r&&(r={});let{ancestorScroll:i=!0,ancestorResize:l=!0,elementResize:u="function"==typeof ResizeObserver,layoutShift:a="function"==typeof IntersectionObserver,animationFrame:c=!1}=r,s=Q(e),p=i||l?[...s?J(s):[],...J(t)]:[];p.forEach(e=>{i&&e.addEventListener("scroll",n,{passive:!0}),l&&e.addEventListener("resize",n)});let h=s&&a?function(e,t){let n,r=null,o=D(e);function i(){clearTimeout(n),r&&r.disconnect(),r=null}return function l(u,a){void 0===u&&(u=!1),void 0===a&&(a=1),i();let{left:c,top:s,width:p,height:h}=e.getBoundingClientRect();if(u||t(),!p||!h)return;let g=m(s),y=m(o.clientWidth-(c+p)),v=m(o.clientHeight-(s+h)),w=m(c),x={rootMargin:-g+"px "+-y+"px "+-v+"px "+-w+"px",threshold:d(0,f(1,a))||1},b=!0;function E(e){let t=e[0].intersectionRatio;if(t!==a){if(!b)return l();t?l(!1,t):n=setTimeout(()=>{l(!1,1e-7)},100)}b=!1}try{r=new IntersectionObserver(E,{...x,root:o.ownerDocument})}catch(e){r=new IntersectionObserver(E,x)}r.observe(e)}(!0),i}(s,n):null,g=-1,y=null;u&&(y=new ResizeObserver(e=>{let[r]=e;r&&r.target===s&&y&&(y.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{y&&y.observe(t)})),n()}),s&&!c&&y.observe(s),y.observe(t));let v=c?en(e):null;return c&&function t(){let r=en(e);v&&(r.x!==v.x||r.y!==v.y||r.width!==v.width||r.height!==v.height)&&n(),v=r,o=requestAnimationFrame(t)}(),n(),()=>{p.forEach(e=>{i&&e.removeEventListener("scroll",n),l&&e.removeEventListener("resize",n)}),h&&h(),y&&y.disconnect(),y=null,c&&cancelAnimationFrame(o)}}(k.reference.current,k.floating.current,_,"object"==typeof n.autoUpdate?n.autoUpdate:void 0):()=>{}},[e,_,k]);let B=(0,i.useRef)(!0);(0,i.useEffect)(()=>{!(k.reference.current instanceof Element)&&k.reference.current&&k.floating.current&&B.current&&(B.current=!1,_(),window.requestAnimationFrame(()=>{B.current=!0,_()}))},[k]);let W={referenceRef:k.setReference,placement:F},z={floatingRef:k.setFloating,props:n,mounted:c,setShow:t,x:E,y:j,placement:F,strategy:L,referenceElWidth:N},V={arrowRef:g,placement:F,x:null==(r=$.arrow)?void 0:r.x,y:null==(o=$.arrow)?void 0:o.y};return{referenceApi:W,floatingApi:z,arrowApi:V,x:E,y:j,placement:F,strategy:L,update:_,refs:k,middlewareData:$}}eH.displayName="ArrowContext";let ez=(0,i.forwardRef)((e,t)=>{let[n,r]=(0,i.useState)(e.show??!1),{referenceApi:o,floatingApi:l,arrowApi:u,placement:a}=eW([n,r],e),c={placement:a},[s,f]="function"==typeof e.children?e.children(c):e.children;if(!(0,i.isValidElement)(s))return console.warn("<Float /> is missing a reference and floating element."),eT.jsx(i.Fragment,{});function d(n){if(e.as===i.Fragment||!e.as)return eT.jsx(i.Fragment,{children:n});let r=e.as;return eT.jsx(r,{ref:t,className:e.className,children:n})}if(e.composable||e.dialog)return d(eT.jsx(eN.Provider,{value:o,children:eT.jsx(eD.Provider,{value:l,children:eT.jsx(eH.Provider,{value:u,children:"function"==typeof e.children?e.children(c):e.children})})},"FloatingNode"));let p=e_(s,{as:i.Fragment},{key:"reference-node"},o),m=eB(f,{as:e.floatingAs||"div"},{},l);return d([p,eT.jsx(eH.Provider,{value:u,children:m},"floating-node")])});function eV({onInitial:e,children:t,...n}){let[r,o]=(0,i.useState)(n.show??!1),l=(0,i.useMemo)(()=>{let{as:e,show:t,placement:r,strategy:o,offset:i,shift:l,flip:u,arrow:a,autoPlacement:c,hide:s,autoUpdate:f,zIndex:d,enter:p,enterFrom:m,enterTo:h,leave:g,leaveFrom:y,leaveTo:v,originClass:w,tailwindcssOriginClass:x,portal:b,transform:E,middleware:R,onShow:C,onHide:S,onUpdate:T,...j}=n;return j},[n]),{floatingApi:u,arrowApi:a,placement:c,refs:s}=eW([r,o],n);if((0,i.useEffect)(()=>{o(n.show??!1)},[n.show]),e({show:r,setShow:o,placement:c,refs:s}),!t)return eT.jsx(i.Fragment,{});let f=eB("function"==typeof t?t({placement:c,close:function(){r&&o(!1)}}):t,{...n,as:n.as||i.Fragment,show:r},l,u);return eT.jsx(eH.Provider,{value:a,children:f})}ez.displayName="Float";let eU=Object.assign(ez,{Reference:function(e){if(!e.children)return eT.jsx(i.Fragment,{});let t=(0,i.useMemo)(()=>{let{as:t,children:n,...r}=e;return r},[e]),n=function e(t){let n=(0,i.useContext)(eN);if(null===n){let n=Error(`<${t} /> is missing a parent <Float /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,e),n}return n}("Float.Reference"),{placement:r}=n;return e_("function"==typeof e.children?e.children({placement:r}):e.children,{...e,as:e.as||i.Fragment},t,n)},Content:function(e){if(!e.children)return eT.jsx(i.Fragment,{});let t=(0,i.useMemo)(()=>{let{as:t,enter:n,enterFrom:r,enterTo:o,leave:i,leaveFrom:l,leaveTo:u,originClass:a,tailwindcssOriginClass:c,transitionChild:s,children:f,...d}=e;return d},[e]),n=function e(t){let n=(0,i.useContext)(eD);if(null===n){let n=Error(`<${t} /> is missing a parent <Float /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,e),n}return n}("Float.Content"),{placement:r}=n;return eB("function"==typeof e.children?e.children({placement:r}):e.children,{...e,as:e.as||"div"},t,n)},Arrow:function(e){let{arrowRef:t,placement:n,x:r,y:o}=function e(t){let n=(0,i.useContext)(eH);if(null===n){let n=Error(`<${t} /> is missing a parent <Float /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,e),n}return n}("Float.Arrow"),l=(0,i.useMemo)(()=>{let{as:t,offset:n,children:r,...o}=e;return o},[e]),u={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]],a={left:"number"==typeof r?`${r}px`:void 0,top:"number"==typeof o?`${o}px`:void 0,right:void 0,bottom:void 0,[u]:`${-((e.offset??4)*1)}px`,...l.style};if(e.as===i.Fragment){let r="function"==typeof e.children?e.children({placement:n}):e.children;return r&&(0,i.isValidElement)(r)?eT.jsx(r.type,{...r.props,ref:t,style:a}):eT.jsx(i.Fragment,{})}let c=e.as||"div";return eT.jsx(c,{ref:t,...l,style:a,children:e.children})},Virtual:eV,ContextMenu:function(e){return eT.jsx(eV,{flip:!0,...e,show:!1,portal:!0,onInitial:function({setShow:e,refs:t}){eM("contextmenu",n=>{n.preventDefault(),t.setPositionReference({getBoundingClientRect:()=>({width:0,height:0,x:n.clientX,y:n.clientY,top:n.clientY,left:n.clientX,right:n.clientX,bottom:n.clientY})}),e(!0)}),function(e,t,n=!0){let r=(0,i.useRef)(!1);function o(n,o){if(!r.current||n.defaultPrevented)return;let i=function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e),l=o(n);if(null!==l&&l.getRootNode().contains(l)){for(let e of i){if(null===e)continue;let t=e instanceof HTMLElement?e:e.current;if(null!=t&&t.contains(l)||n.composed&&n.composedPath().includes(t))return}return!function(e,t=0){var n;return e!==(null==(n=ek(e))?void 0:n.body)&&function e(t,n,...r){if(t in n){let e=n[t];return"function"==typeof e?e(...r):e}let o=Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,e),o}(t,{0:()=>e.matches(eA),1(){let t=e;for(;null!==t;){if(t.matches(eA))return!0;t=t.parentElement}return!1}})}(l,eI.Loose)&&-1!==l.tabIndex&&n.preventDefault(),t(n,l)}}(0,i.useEffect)(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);let l=(0,i.useRef)(null);eM("mousedown",e=>{var t,n;r.current&&(l.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)},!0),eM("click",e=>{l.current&&(o(e,()=>l.current),l.current=null)},!0),eM("blur",e=>o(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}(t.floating,()=>{e(!1)})}})},Cursor:function({globalHideCursor:e,...t}){return eT.jsx(eV,{...t,portal:!0,className:"headlesui-float-cursor-root",onInitial:function({setShow:t,refs:n}){function r(){t(!1)}function o(e){n.setPositionReference({getBoundingClientRect:()=>({width:0,height:0,x:e.clientX,y:e.clientY,top:e.clientY,left:e.clientX,right:e.clientX,bottom:e.clientY})})}function l(e){t(!0),o(e)}function u(e){t(!0),o(e.touches[0])}let a=ek(n.floating);a&&((0,i.useEffect)(()=>{if((e||void 0===e)&&!a.getElementById("headlesui-float-cursor-style")){let e=a.createElement("style");return(a.head||a.getElementsByTagName("head")[0]).appendChild(e),e.id="headlesui-float-cursor-style",e.appendChild(a.createTextNode(["*, *::before, *::after {","  cursor: none !important;","}",".headlesui-float-cursor-root {","  pointer-events: none !important;","}"].join(`
`))),()=>{var e;return null==(e=a.getElementById("headlesui-float-cursor-style"))?void 0:e.remove()}}},[e]),"ontouchstart"in window||navigator.maxTouchPoints>0?(eM("touchstart",u),eM("touchend",r),eM("touchmove",u)):(eM("mouseenter",l),eM("mouseleave",r),eM("mousemove",l)))}})}})}}]);