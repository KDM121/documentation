"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[604],{2910:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>i});var t=n(4848),r=n(8453);const s={},c=void 0,a={id:"Docker Compose/Ladder-Proxy",title:"Ladder-Proxy",description:"",source:"@site/docs/Docker Compose/Ladder-Proxy.md",sourceDirName:"Docker Compose",slug:"/Docker Compose/Ladder-Proxy",permalink:"/docs/Docker Compose/Ladder-Proxy",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IT-Tools",permalink:"/docs/Docker Compose/IT-Tools"},next:{title:"Linkwarden",permalink:"/docs/Docker Compose/Linkwarden"}},d={},i=[];function l(e){const o={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-yaml",children:'version: "3.3"\nservices:\n  ladder:\n    ports:\n      - 8080:8080\n    environment:\n      - RULESET=https://t.ly/14PSf\n    container_name: ladder\n    image: ghcr.io/everywall/ladder:latest\n    restart: unless-stopped\n'})})}function p(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,o,n)=>{n.d(o,{R:()=>c,x:()=>a});var t=n(6540);const r={},s=t.createContext(r);function c(e){const o=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);