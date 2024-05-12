"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6005],{4392:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=n(4848),s=n(8453);const r={},c=void 0,a={id:"Docker Compose/Dockge",title:"Dockge",description:"Replace USER with username of user",source:"@site/docs/Docker Compose/Dockge.md",sourceDirName:"Docker Compose",slug:"/Docker Compose/Dockge",permalink:"/docs/Docker Compose/Dockge",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Bookstack",permalink:"/docs/Docker Compose/Bookstack"},next:{title:"Drawio",permalink:"/docs/Docker Compose/Drawio"}},i={},d=[];function u(e){const o={code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-yaml",children:'version: "3.8"\nservices:\n  dockge:\n    image: louislam/dockge:1\n    restart: unless-stopped\n    ports:\n      - 5001:5001\n    volumes:\n      - /var/run/docker.sock:/var/run/docker.sock\n      - /home/USER/stacks/dockge/data:/app/data\n      - /home/USER/stacks:/home/docker/stacks\n    environment:\n      - DOCKGE_STACKS_DIR=/home/USER/stacks\nnetworks: {}\n\n'})}),"\n",(0,t.jsxs)(o.p,{children:["Replace ",(0,t.jsx)(o.code,{children:"USER"})," with username of user"]})]})}function p(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},8453:(e,o,n)=>{n.d(o,{R:()=>c,x:()=>a});var t=n(6540);const s={},r=t.createContext(s);function c(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);