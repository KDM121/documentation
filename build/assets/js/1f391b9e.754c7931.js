"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6061],{7973:(e,n,t)=>{t.r(n),t.d(n,{default:()=>u});t(6540);var a=t(4164),l=t(1213),i=t(7559),s=t(1123),r=t(4993),c=t(7763),o=t(5496);const d={mdxPageWrapper:"mdxPageWrapper_j9I6"};var m=t(4848);function u(e){const{content:n}=e,{metadata:{title:t,description:u,frontMatter:f,unlisted:v},assets:h}=n,{keywords:g,wrapperClassName:x,hide_table_of_contents:p}=f,L=h.image??f.image;return(0,m.jsx)(l.e3,{className:(0,a.A)(x??i.G.wrapper.mdxPages,i.G.page.mdxPage),children:(0,m.jsxs)(s.A,{children:[(0,m.jsx)(l.be,{title:t,description:u,keywords:g,image:L}),(0,m.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,m.jsxs)("div",{className:(0,a.A)("row",d.mdxPageWrapper),children:[(0,m.jsxs)("div",{className:(0,a.A)("col",!p&&"col--8"),children:[v&&(0,m.jsx)(o.A,{}),(0,m.jsx)("article",{children:(0,m.jsx)(r.A,{children:(0,m.jsx)(n,{})})})]}),!p&&n.toc.length>0&&(0,m.jsx)("div",{className:"col col--2",children:(0,m.jsx)(c.A,{toc:n.toc,minHeadingLevel:f.toc_min_heading_level,maxHeadingLevel:f.toc_max_heading_level})})]})})]})})}},7763:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var a=t(4164),l=t(5195);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var s=t(4848);const r="table-of-contents__link toc-highlight",c="table-of-contents__link--active";function o(e){let{className:n,...t}=e;return(0,s.jsx)("div",{className:(0,a.A)(i.tableOfContents,"thin-scrollbar",n),children:(0,s.jsx)(l.A,{...t,linkClassName:r,linkActiveClassName:c})})}},5195:(e,n,t)=>{t.d(n,{A:()=>h});var a=t(6540),l=t(6342);function i(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const a=t.slice(2,e.level);e.parentIndex=Math.max(...a),t[e.level]=n}));const a=[];return n.forEach((e=>{const{parentIndex:t,...l}=e;t>=0?n[t].children.push(l):a.push(l)})),a}function s(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return n.flatMap((e=>{const n=s({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[{...e,children:n}]:n}))}function r(e){const n=e.getBoundingClientRect();return n.top===n.bottom?r(e.parentNode):n}function c(e,n){let{anchorTopOffset:t}=n;const a=e.find((e=>r(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function o(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:n}}=(0,l.p)();return(0,a.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,a.useRef)(void 0),t=o();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:i,maxHeadingLevel:s}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),r=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const a=[];for(let l=n;l<=t;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:s}),o=c(r,{anchorTopOffset:t.current}),d=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(l),e.classList.add(l),n.current=e):e.classList.remove(l)}(e,e===d)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,t])}var m=t(8774),u=t(4848);function f(e){let{toc:n,className:t,linkClassName:a,isChild:l}=e;return n.length?(0,u.jsx)("ul",{className:l?void 0:t,children:n.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.A,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(f,{isChild:!0,toc:e.children,className:t,linkClassName:a})]},e.id)))}):null}const v=a.memo(f);function h(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:o,maxHeadingLevel:m,...f}=e;const h=(0,l.p)(),g=o??h.tableOfContents.minHeadingLevel,x=m??h.tableOfContents.maxHeadingLevel,p=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:l}=e;return(0,a.useMemo)((()=>s({toc:i(n),minHeadingLevel:t,maxHeadingLevel:l})),[n,t,l])}({toc:n,minHeadingLevel:g,maxHeadingLevel:x});return d((0,a.useMemo)((()=>{if(r&&c)return{linkClassName:r,linkActiveClassName:c,minHeadingLevel:g,maxHeadingLevel:x}}),[r,c,g,x])),(0,u.jsx)(v,{toc:p,className:t,linkClassName:r,...f})}},5496:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var a=t(4164),l=t(6445),i=t(7559),s=t(3472),r=t(4848);function c(e){let{className:n}=e;return(0,r.jsx)(s.A,{type:"caution",title:(0,r.jsx)(l.Rc,{}),className:(0,a.A)(n,i.G.common.unlistedBanner),children:(0,r.jsx)(l.Uh,{})})}function o(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.AE,{}),(0,r.jsx)(c,{...e})]})}}}]);