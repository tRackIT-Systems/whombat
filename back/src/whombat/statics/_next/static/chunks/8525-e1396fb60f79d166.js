"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8525],{17610:function(e,t,n){n.d(t,{Z:function(){return o}});var l=n(14357),a=n(56793),s=n(60169),r=n(35573);function o(e){let{label:t="Search",placeholder:n="Search...",icon:o,value:i,onChange:c,onSubmit:u,withButton:d=!0,...h}=e,f="search-".concat(t);return(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("label",{htmlFor:f,className:"sr-only",children:t}),(0,l.jsxs)("div",{className:"relative w-full",children:[(0,l.jsx)("div",{className:"pointer-events-none absolute inset-y-0 left-0 flex w-8 items-center pl-3",children:o||(0,l.jsx)(a.W1,{})}),(0,l.jsx)(r.II,{type:"text",value:i,id:f,onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),null==u||u())},onChange:c?e=>c(e.target.value):void 0,className:"5 pl-10 text-sm",placeholder:n,...h})]}),d&&(0,l.jsxs)(s.Z,{type:"submit",onSubmit:u,variant:"primary",className:"ml-2",children:[(0,l.jsx)(a.W1,{className:"h-4 w-4"}),(0,l.jsx)("span",{className:"sr-only",children:t})]})]})}},28217:function(e,t,n){n.d(t,{Z:function(){return u}});var l=n(14357),a=n(6439),s=n(80707),r=n(29554),o=n(7864),i=n(60169),c=n(17610);function u(e){let{value:t,options:n,onSelect:i,renderOption:u,fields:d,getOptionKey:f=(e,t)=>t,limit:m=5,autoFocus:g=!1,static:x=!0,displayValue:p,onChange:v,initialQuery:j="",as:b=c.Z}=e,[y,w]=(0,a.useState)(m),[N,k]=(0,a.useState)(j);(0,a.useEffect)(()=>null==v?void 0:v(N),[N,v]);let S=(0,a.useMemo)(()=>new o.Z(n,{keys:d,threshold:.3}),[n,d]),Z=(0,a.useMemo)(()=>N?S.search(N,{limit:y}).map(e=>e.item):n.slice(0,y),[N,S,n,y]),C="w-full rounded-md border bg-stone-50 dark:bg-stone-700 border-stone-200 dark:border-stone-600 py-2 px-1 overflow-auto shadow-lg focus:outline-none";return x?(0,l.jsx)(s.h,{value:t,onChange:i,children:e=>{let{value:t,open:a}=e;return(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)(s.h.Input,{as:b,autoFocus:g,withButton:!1,value:a||null==t?void 0:null==p?void 0:p(t),onChange:e=>k(e)}),(0,l.jsx)(s.h.Options,{static:x,className:"absolute mt-1 ".concat(C),children:(0,l.jsx)(h,{options:Z,total:n.length,limit:y,initialLimit:m,renderOption:u,getOptionKey:f,setLimit:w})})]})}}):(0,l.jsx)("div",{className:"flex flex-row w-full",children:(0,l.jsx)(s.h,{value:t,onChange:i,children:(0,l.jsxs)(r.bv,{offset:8,as:"div",className:"relative w-full",enter:"transition duration-200 ease-out",enterFrom:"scale-95 opacity-0",enterTo:"scale-100 opacity-100",leave:"transition duration-150 ease-in",leaveFrom:"scale-100 opacity-100",leaveTo:"scale-95 opacity-0",placement:"bottom",autoPlacement:!0,floatingAs:a.Fragment,children:[(0,l.jsx)("div",{className:"w-full",children:(0,l.jsx)(s.h.Input,{as:b,autoFocus:g,withButton:!1,value:null!=t?null==p?void 0:p(t):void 0,onChange:e=>k(e)})}),(0,l.jsx)("div",{className:"w-full",children:(0,l.jsx)(s.h.Options,{className:"".concat(C),children:(0,l.jsx)(h,{options:Z,total:n.length,limit:y,initialLimit:m,renderOption:u,getOptionKey:f,setLimit:w})})})]})})})}function d(e){let{option:t,renderOption:n}=e;return(0,l.jsx)(s.h.Option,{className:e=>{let{active:t}=e;return"relative cursor-default select-none p-2 rounded-md ".concat(t?"bg-stone-200 dark:bg-stone-800 text-emerald-600 dark:text-emerald-500":"")},value:t,children:n(t)})}function h(e){let{options:t,total:n,limit:a,initialLimit:s,renderOption:r,getOptionKey:o,setLimit:c}=e;return(0,l.jsxs)(l.Fragment,{children:[t.map((e,t)=>(0,l.jsx)(d,{option:e,renderOption:r},o(e,t))),t.length==a&&n>t.length?(0,l.jsx)(i.Z,{mode:"text",className:"w-full cursor-default",onClick:()=>c(n),children:(0,l.jsxs)("div",{className:"flex flex-row w-full justify-between items-center text-stone-500",children:[(0,l.jsx)("span",{className:"flex-grow text-left",children:"Show all"}),(0,l.jsxs)("span",{children:[n-t.length," more"]})]})}):t.length>s?(0,l.jsx)(i.Z,{mode:"text",className:"w-full cursor-default",onClick:()=>c(s),children:(0,l.jsx)("div",{className:"flex flex-row w-full justify-between items-center text-stone-500",children:(0,l.jsx)("span",{className:"flex-grow text-left",children:"Show less"})})}):null]})}},70565:function(e,t,n){n.d(t,{ZP:function(){return o}});var l=n(14357),a=n(5374),s=n.n(a),r=n(56793);function o(e){let{tag:t,color:n,level:a=1,className:o,onClick:i,onClose:c,...u}=e,d=function(e,t){let n="bg-".concat(e,"-").concat(t,"00 dark:bg-").concat(e,"-").concat(10-t,"00"),l="border-".concat(e,"-").concat(t+2,"00 dark:border-").concat(e,"-").concat(10-t-2,"00"),a="text-".concat(e,"-").concat(t+3,"00 dark:text-").concat(e,"-").concat(10-t-3,"00");return"".concat(n," ").concat(l," ").concat(a)}(n,a);return(0,l.jsxs)("div",{className:s()("border rounded-md px-2 whitespace-nowrap tracking-tighter max-w-fit",d,o),...u,children:[(0,l.jsxs)("button",{type:"button",className:"group",onClick:i,children:[(0,l.jsx)("span",{className:"font-thin",children:t.key}),(0,l.jsx)("span",{className:"ml-1 font-bold group-hover:underline group-hover:decoration-2 group-hover:underline-offset-2",children:t.value})]}),null!=c&&(0,l.jsx)("button",{type:"button",className:"group",onClick:c,children:(0,l.jsx)(r.Tw,{className:"inline-block w-4 h-4 ml-1 group-hover:stroke-3 group-hover:text-red-500"})})]})}},69708:function(e,t,n){n.d(t,{Z:function(){return y}});var l=n(14357),a=n(29554),s=n(6439),r=n(80707),o=n(84802),i=n(35573),c=n(70565);function u(e){let{code:t}=e;return(0,l.jsx)("span",{className:"inline-block px-1 font-mono bg-stone-900 border-stone-800 border rounded text-stone-300 text-xs",children:t})}var d=n(52315),h=n(62976),f=n(81361),m=n(11441),g=n(54313);let x={};function p(e){let{children:t}=e;return(0,l.jsx)("div",{className:"py-1",role:"none",children:t})}function v(e){let{tag:{key:t,value:n}}=e;return null==t||null==n?(0,l.jsx)(p,{children:(0,l.jsxs)("div",{className:"relative cursor-default select-none py-2 px-4",children:["To create a new tag, type the tag in the format"," ",(0,l.jsx)("code",{className:"text-emerald-500",children:"key:value"})," and press"," ",(0,l.jsx)(u,{code:"Shift"}),"+",(0,l.jsx)(u,{code:"Enter"})]})}):(0,l.jsx)(p,{children:(0,l.jsxs)("div",{className:"relative cursor-default select-none py-2 px-4",children:["Create the tag"," ",(0,l.jsx)(c.ZP,{disabled:!0,tag:{id:0,key:t,value:n},color:"blue",level:3})," by pressing ",(0,l.jsx)(u,{code:"Shift"}),"+",(0,l.jsx)(u,{code:"Enter"})]})})}function j(){return(0,l.jsx)(p,{children:(0,l.jsxs)("div",{className:"relative cursor-default select-none py-2 px-4",children:["No tags found."," "]})})}let b={};var y=(0,s.forwardRef)(function(e,t){let{onSelect:n,initialFilter:u=b,onBlur:y,onKeyDown:w,onCreate:N,autoFocus:k=!0,canCreate:S=!0,...Z}=e,[C,M]=(0,s.useState)(""),F=function(){let{initialFilter:e=x,pageSize:t=10}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(0,g.Z)({fixed:e,debounce:50}),{items:l,total:a,query:s,pagination:r}=(0,m.Z)({name:"tags",func:f.Z.tags.get,pageSize:t,filter:n.filter}),o=(0,h.D)({mutationFn:f.Z.tags.create,onSuccess:()=>{s.refetch()}});return{items:l,total:a,query:s,pagination:r,filter:n,create:o}}({initialFilter:u}),P=(0,d.Z)(e=>e.getTagColor),_=C.split(":")[0],O=C.split(":")[1];return(0,s.useEffect)(()=>{let e=C.split(":")[0],t=C.split(":")[1];null==t||null==e?(F.filter.set("search",C),F.filter.clear("key__eq"),F.filter.clear("value__has")):(F.filter.clear("search"),F.filter.set("key__eq",e),F.filter.set("value__has",t))},[C]),(0,l.jsx)(r.h,{onChange:e=>{null==n||n(e)},children:(0,l.jsxs)(a.bv,{offset:8,enter:"transition duration-200 ease-out",enterFrom:"scale-95 opacity-0",enterTo:"scale-100 opacity-100",leave:"transition duration-150 ease-in",leaveFrom:"scale-100 opacity-100",leaveTo:"scale-95 opacity-0",placement:"bottom",autoPlacement:!0,portal:!0,children:[(0,l.jsxs)("div",{className:"relative w-full cursor-default text-left",children:[(0,l.jsx)(r.h.Input,{as:i.II,ref:t,autoFocus:k,onChange:e=>M(e.target.value),onKeyDown:e=>{"Enter"===e.key&&e.shiftKey&&S&&(e.preventDefault(),_&&O&&F.create.mutate({key:_,value:O},{onSuccess:e=>{null==N||N(e)}})),null==w||w(e)},...Z}),(0,l.jsx)(r.h.Button,{className:"absolute inset-y-0 right-0 flex items-center pr-2",children:(0,l.jsx)(o.Z,{className:"h-5 w-5","aria-hidden":"true"})})]}),(0,l.jsxs)(r.h.Options,{className:"max-w-sm divide-y divide-stone-200 bg-stone-50 dark:divide-stone-600 dark:bg-stone-700 ring-stone-300 dark:ring-stone-600 rounded-md py-1 text-base shadow-lg ring-1 ring-opacity-5 focus:outline-none sm:text-sm overflow-y-scroll",children:[0===F.items.length?(0,l.jsx)(j,{}):(0,l.jsx)(p,{children:F.items.map(e=>(0,l.jsx)(r.h.Option,{className:e=>{let{active:t}=e;return"cursor-default py-2 pl-4 pr-2 ".concat(t?"bg-stone-200 dark:bg-stone-600":"")},value:e,children:(0,l.jsx)(c.ZP,{disabled:!0,className:"pointer-events-none",tag:e,...P(e)})},e.id))}),S&&(0,l.jsx)(v,{tag:{key:_,value:O}})]})]})})})},54313:function(e,t,n){n.d(t,{Z:function(){return s}});var l=n(6439),a=n(30485);function s(e){let{fixed:t,debounce:n=500}=e,[s,r]=(0,l.useState)(t),[o,i]=(0,l.useState)(t);(0,l.useEffect)(()=>{r(t),i(t)},[t]);let c=(0,l.useCallback)(e=>void 0!==t[e],[t]);(0,a.Z)(()=>{i(s)},n,[s]);let u=(0,l.useMemo)(()=>Object.keys(s).filter(e=>!c(e)).length,[s,c]);return{filter:o,set:function(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];(!c(e)||n)&&r(n=>({...n,[e]:t}))},get:e=>s[e],clear:function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];(!c(e)||t)&&r(t=>{let n={...t};return delete n[e],i(n),n})},reset:()=>r(t),submit:()=>{i(s)},size:u,isFixed:c}}},11441:function(e,t,n){n.d(t,{Z:function(){return s}});var l=n(6439),a=n(72007);function s(e){var t,n;let{name:s,func:r,pageSize:o,filter:i,enabled:c=!0}=e,[u,d]=(0,l.useState)(0),[h,f]=(0,l.useState)(o),m=[s,u,h,i],g=(0,a.a)(m,()=>r({limit:h,offset:u*h,...i}),{keepPreviousData:!0,enabled:c,refetchOnWindowFocus:!1}),x=Math.ceil((null!==(n=null===(t=g.data)||void 0===t?void 0:t.total)&&void 0!==n?n:0)/h);(0,l.useEffect)(()=>{d(e=>e>=x&&x>0?x-1:e)},[x]);let{items:p,total:v}=(0,l.useMemo)(()=>null==g.data||g.isLoading?{items:[],total:0}:{items:g.data.items,total:g.data.total},[g.data,g.isLoading]);return{items:p,total:v,pagination:{page:u,numPages:x,pageSize:h,setPage:e=>{e>=0&&e<x&&d(e)},setPageSize:e=>{e>0&&f(t=>{var n,l,a,s;let r=Math.ceil((null!==(a=null===(n=g.data)||void 0===n?void 0:n.total)&&void 0!==a?a:0)/e),o=Math.min(u*t,null!==(s=null===(l=g.data)||void 0===l?void 0:l.total)&&void 0!==s?s:0);return d(Math.max(0,Math.min(Math.floor(o/e),r-1))),e})},nextPage:()=>{u<x-1&&d(u+1)},prevPage:()=>{u>0&&d(u-1)},hasNextPage:u<x-1,hasPrevPage:u>0},query:g,queryKey:m}}},52315:function(e,t,n){n.d(t,{Z:function(){return f}}),n(6439);var l=n(16148),a=n(85758);let s=e=>({user:null,login:t=>e({user:t}),logout:()=>e({user:null})}),r=e=>({clipboard:"",copy:t=>e({clipboard:t})}),o=["slate","gray","zinc","neutral","stone","red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose"],i=[1,2,3,4,5,6],c=(e,t)=>({colors:{tags:{}},setTagColor:(t,n)=>{e(e=>({colors:{tags:{...e.colors.tags,[t.id]:n}}}))},getTagColor:n=>{let{tags:l}=t().colors;if(l[n.id])return l[n.id];{let t=o[Math.floor(Math.random()*o.length)],l=i[Math.floor(Math.random()*i.length)],a={color:t,level:l};return e(e=>({colors:{tags:{...e.colors.tags,[n.id]:a}}})),a}},clearTagColors:()=>{e(()=>({colors:{tags:{}}}))}});var u=n(9797);let d=e=>({spectrogramSettings:u._z,setSpectrogramSettings:t=>{e(e=>{let{spectrogramSettings:n}=e;return{...e,spectrogramSettings:{...n,...t}}})}}),h=(0,l.Ue)()((0,a.tJ)(function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...s(...t),...r(...t),...c(...t),...d(...t)}},{name:"whombat-storage",storage:(0,a.FL)(()=>localStorage)}));var f=h}}]);