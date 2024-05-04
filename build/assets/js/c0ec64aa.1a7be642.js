"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7646],{8087:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var n=t(4848),r=t(8453);const c={},s=void 0,a={id:"Docker Compose/Watchtower",title:"Watchtower",description:"add this label to the bottom of another compose file to exclude from watchtower updates:",source:"@site/docs/Docker Compose/Watchtower.md",sourceDirName:"Docker Compose",slug:"/Docker Compose/Watchtower",permalink:"/docs/Docker Compose/Watchtower",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WG-easy",permalink:"/docs/Docker Compose/WG-easy"},next:{title:"Web-Proxy",permalink:"/docs/Docker Compose/Web-Proxy"}},i={},d=[];function l(e){const o={code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-yaml",children:'version: "3.9"\nservices:\n  watchtower:\n    environment:\n      - WATCHTOWER_CLEANUP=true\n    command: --debug --cleanup --schedule "0 30 4 * * *"\n    image: containrrr/watchtower\n    volumes:\n      - /var/run/docker.sock:/var/run/docker.sock\n    container_name: watchtower\n    restart: unless-stopped\nnetworks: {}\n'})}),"\n",(0,n.jsx)(o.p,{children:"add this label to the bottom of another compose file to exclude from watchtower updates:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:' labels:\n - "com.centurylinklabs.watchtower.enable=false"\n'})})]})}function u(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,o,t)=>{t.d(o,{R:()=>s,x:()=>a});var n=t(6540);const r={},c=n.createContext(r);function s(e){const o=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(c.Provider,{value:o},e.children)}}}]);