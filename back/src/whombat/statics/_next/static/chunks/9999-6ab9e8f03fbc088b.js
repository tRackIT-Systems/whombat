"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9999],{95754:function(e,t,n){n.d(t,{GT:function(){return l},M8:function(){return c},Sr:function(){return o},St:function(){return a},vZ:function(){return i}});var r=n(6439),s=n(1799);let a=(0,r.createContext)({user:{id:"null",username:"anonymous",email:"",name:"anonymous",is_active:!1,is_superuser:!1}}),l=(0,r.createContext)({recording_id:-1}),o=(0,r.createContext)({id:-1,name:"",description:"",tags:[],created_at:new Date,uuid:""}),i=(0,r.createContext)({dataset:null,isLoading:!0}),c=(0,r.createContext)({evaluationSet:{id:-1,name:"",description:"",tags:[],uuid:"",mode:s.kU.CLIP_CLASSIFICATION,created_at:new Date}})},91293:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(14357),s=n(36973);function a(){return(0,r.jsx)("div",{className:"w-full h-full flex flex-row justify-center items-center",children:(0,r.jsx)(s.Z,{})})}},91226:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(14357),s=n(6439),a=n(60169),l=n(88821),o=n(80972);function i(e){let{title:t,children:n,onClose:a,isOpen:i=!0}=e;return(0,r.jsx)(o.u,{appear:!0,show:i,as:s.Fragment,children:(0,r.jsxs)(l.V,{as:"div",className:"relative z-10",onClose:()=>null==a?void 0:a(),children:[(0,r.jsx)(o.u.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,r.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),(0,r.jsx)("div",{className:"fixed inset-0 overflow-y-auto",children:(0,r.jsx)("div",{className:"flex min-h-full items-center justify-center p-4 text-center",children:(0,r.jsx)(o.u.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,r.jsxs)(l.V.Panel,{className:"w-full max-w-fit transform overflow-hidden rounded-2xl bg-stone-50 dark:bg-stone-700 text-stone-700 dark:text-stone-300 p-6 text-left align-middle shadow-xl transition-all z-[99999]",children:[null!=t&&(0,r.jsx)(l.V.Title,{as:"h3",className:"text-lg font-medium leading-6 text-stone-900 dark:text-stone-100 mb-6",children:t}),(0,r.jsx)("div",{className:"mt-2",children:n({close:()=>null==a?void 0:a()})})]})})})})]})})}function c(e){let{children:t,title:n,button:l="Open",...o}=e,[c,d]=(0,s.useState)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{type:"button",onClick:()=>d(!0),...o,children:l}),(0,r.jsx)(i,{title:(0,r.jsx)("div",{className:"max-w-md",children:n}),isOpen:c,onClose:()=>d(!1),children:e=>{let{close:n}=e;return(0,r.jsx)("div",{className:"max-w-md",children:t({close:n})})}})]})}},40072:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(14357),s=n(5374),a=n.n(s);function l(e){let{children:t,className:n,...s}=e;return(0,r.jsx)("div",{className:a()("border shadow flex flex-col gap-3 p-4 rounded-md border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300",n),...s,children:t})}},24070:function(e,t,n){n.d(t,{H1:function(){return l},H3:function(){return o},H4:function(){return i}});var r=n(14357),s=n(5374),a=n.n(s);function l(e){let{children:t,className:n,...s}=e;return(0,r.jsx)("h1",{className:a()("text-2xl font-bold text-stone-900 dark:text-stone-200",n),...s,children:t})}function o(e){let{children:t,className:n,...s}=e;return(0,r.jsx)("h3",{className:a()("text-lg font-semibold leading-7 items-center text-stone-900 dark:text-stone-200",n),...s,children:t})}function i(e){let{children:t,className:n,...s}=e;return(0,r.jsx)("h4",{className:a()("text-md font-semibold leading-6 text-stone-900 dark:text-stone-200",n),...s,children:t})}},11334:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(14357),s=n(56793),a=n(60169);function l(e){let{note:t,currentUser:n,onUpdate:l,onDelete:o,actions:i}=e;return(0,r.jsx)("li",{role:"article",className:"relative pl-6 p-2",children:(0,r.jsxs)("div",{className:"flex flex-col flex-1 gap-2",children:[(0,r.jsx)("div",{className:"absolute z-10 flex flex-row items-center justify-center w-6 h-6 rounded-full -left-3 bg-stone-100 dark:bg-stone-900",children:t.is_issue?(0,r.jsx)(s.uN,{className:"h-5 w-5 inline-block text-red-500"}):(0,r.jsx)(s.Zi,{className:"h-5 w-5 inline-block text-ston-500"})}),(0,r.jsxs)("h4",{className:"flex flex-col items-start text-base font-medium leading-6 text-stone-700 dark:text-stone-300 md:flex-row lg:items-center",children:[(0,r.jsx)("span",{className:"flex-1",children:t.created_by.username}),(0,r.jsxs)("span",{className:"text-xs font-normal text-stone-400",children:[" ",t.created_at.toLocaleString()]})]}),(0,r.jsx)("p",{className:"text-sm text-stone-500",children:t.message}),(0,r.jsxs)("div",{className:"flex flex-row justify-end gap-4",children:[i,t.is_issue&&null!=l&&(0,r.jsxs)(a.Z,{mode:"text",variant:"warning",className:"text-xs",onClick:()=>null==l?void 0:l(t.id,{is_issue:!1}),children:[(0,r.jsx)(s.uN,{className:"h-4 w-4 inline-block mr-1"}),"Resolve"]}),(null==n?void 0:n.id)===t.created_by.id?(0,r.jsxs)(r.Fragment,{children:[null!=l?(0,r.jsxs)(a.Z,{mode:"text",variant:"secondary",className:"text-xs",children:[(0,r.jsx)(s.dY,{className:"h-4 w-4 inline-block mr-1"}),"Edit"]}):null,null!=o?(0,r.jsxs)(a.Z,{mode:"text",variant:"danger",className:"text-xs",onClick:()=>{null==o||o(t.id)},children:[(0,r.jsx)(s.pJ,{className:"h-4 w-4 inline-block mr-1"}),"Remove"]}):null]}):null]})]})})}},36973:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(14357),s=n(5374),a=n.n(s);function l(e){let{variant:t="primary",className:n="w-8 h-8"}=e;return(0,r.jsxs)("div",{role:"status",children:[(0,r.jsxs)("svg",{"aria-hidden":"true",className:a()(n,"mr-2 inline animate-spin text-stone-200 dark:text-stone-600",function(e){switch(e){case"primary":case"success":return"fill-emerald-500";case"secondary":return"fill-stone-900 dark:fill-stone-100";case"danger":return"fill-rose-500";case"warning":return"fill-yellow-500";case"info":return"fill-blue-500"}}(t)),viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),(0,r.jsx)("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),(0,r.jsx)("span",{className:"sr-only",children:"Loading..."})]})}},70565:function(e,t,n){n.d(t,{ZP:function(){return o}});var r=n(14357),s=n(5374),a=n.n(s),l=n(56793);function o(e){let{tag:t,color:n,level:s=1,className:o,onClick:i,onClose:c,...d}=e,u=function(e,t){let n="bg-".concat(e,"-").concat(t,"00 dark:bg-").concat(e,"-").concat(10-t,"00"),r="border-".concat(e,"-").concat(t+2,"00 dark:border-").concat(e,"-").concat(10-t-2,"00"),s="text-".concat(e,"-").concat(t+3,"00 dark:text-").concat(e,"-").concat(10-t-3,"00");return"".concat(n," ").concat(r," ").concat(s)}(n,s);return(0,r.jsxs)("div",{className:a()("border rounded-md px-2 whitespace-nowrap tracking-tighter max-w-fit",u,o),...d,children:[(0,r.jsxs)("button",{type:"button",className:"group",onClick:i,children:[(0,r.jsx)("span",{className:"font-thin",children:t.key}),(0,r.jsx)("span",{className:"ml-1 font-bold group-hover:underline group-hover:decoration-2 group-hover:underline-offset-2",children:t.value})]}),null!=c&&(0,r.jsx)("button",{type:"button",className:"group",onClick:c,children:(0,r.jsx)(l.Tw,{className:"inline-block w-4 h-4 ml-1 group-hover:stroke-3 group-hover:text-red-500"})})]})}},52315:function(e,t,n){n.d(t,{Z:function(){return m}}),n(6439);var r=n(16148),s=n(85758);let a=e=>({user:null,login:t=>e({user:t}),logout:()=>e({user:null})}),l=e=>({clipboard:"",copy:t=>e({clipboard:t})}),o=["slate","gray","zinc","neutral","stone","red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose"],i=[1,2,3,4,5,6],c=(e,t)=>({colors:{tags:{}},setTagColor:(t,n)=>{e(e=>({colors:{tags:{...e.colors.tags,[t.id]:n}}}))},getTagColor:n=>{let{tags:r}=t().colors;if(r[n.id])return r[n.id];{let t=o[Math.floor(Math.random()*o.length)],r=i[Math.floor(Math.random()*i.length)],s={color:t,level:r};return e(e=>({colors:{tags:{...e.colors.tags,[n.id]:s}}})),s}},clearTagColors:()=>{e(()=>({colors:{tags:{}}}))}});var d=n(9797);let u=e=>({spectrogramSettings:d._z,setSpectrogramSettings:t=>{e(e=>{let{spectrogramSettings:n}=e;return{...e,spectrogramSettings:{...n,...t}}})}}),x=(0,r.Ue)()((0,s.tJ)(function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return{...a(...t),...l(...t),...c(...t),...u(...t)}},{name:"whombat-storage",storage:(0,s.FL)(()=>localStorage)}));var m=x}}]);