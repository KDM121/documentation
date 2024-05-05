"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6986],{9818:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var t=o(4848),r=o(8453);const s={},a=void 0,i={id:"Docker Compose/Linkwarden",title:"Linkwarden",description:"",source:"@site/docs/Docker Compose/Linkwarden.md",sourceDirName:"Docker Compose",slug:"/Docker Compose/Linkwarden",permalink:"/docs/Docker Compose/Linkwarden",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ladder-Proxy",permalink:"/docs/Docker Compose/Ladder-Proxy"},next:{title:"Maker-Management-Platform",permalink:"/docs/Docker Compose/Maker-Management-Platform"}},c={},d=[];function l(e){const n={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'version: "3.5"\nservices:\n  postgres:\n    image: postgres:16-alpine\n    env_file: .env\n    restart: unless-stopped\n    volumes:\n      - ./pgdata:/var/lib/postgresql/data\n  linkwarden:\n    env_file: .env\n    environment:\n      - DATABASE_URL=postgresql://postgres:${POSTGRES_PASSWORD}@postgres:5432/postgres\n    restart: unless-stopped\n    # build: . # uncomment this line to build from source\n    image: ghcr.io/linkwarden/linkwarden:latest # comment this line to build from source\n    ports:\n      - 3000:3000\n    volumes:\n      - ./data:/data/data\n    depends_on:\n      - postgres\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-.env",children:"POSTGRES_PASSWORD=passwordhere\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>i});var t=o(6540);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);