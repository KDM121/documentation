"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[587],{1526:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>a});var o=t(4848),s=t(8453);const r={},i=void 0,p={id:"Docker Compose/Zipline",title:"Zipline",description:"",source:"@site/docs/Docker Compose/Zipline.md",sourceDirName:"Docker Compose",slug:"/Docker Compose/Zipline",permalink:"/docs/Docker Compose/Zipline",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Web-Proxy",permalink:"/docs/Docker Compose/Web-Proxy"},next:{title:"FedoraRepoSetup",permalink:"/docs/Linux/FedoraRepoSetup"}},c={},a=[];function l(e){const n={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"version: '3'\nservices:\n postgres:\n image: postgres:15\n restart: unless-stopped\n environment:\n - POSTGRES_USER=postgres\n - POSTGRES_PASSWORD=$PASSWORD\n - POSTGRES_DATABASE=postgres\n volumes:\n - ./pg_data:/var/lib/postgresql/data\n healthcheck:\n test: ['CMD-SHELL', 'pg_isready -U postgres']\n interval: 10s\n timeout: 5s\n retries: 5\n zipline:\n image: ghcr.io/diced/zipline\n ports:\n - '3000:3000'\n restart: unless-stopped\n environment:\n - MFA_TOTP_ENABLED=true\n - WEBSITE_SHOW_FILES_PER_USER=true\n - WEBSITE_TITLE=Zipline\n - CORE_RETURN_HTTPS=false\n - CORE_SECRET=C9dde56j8fCWLo9000XcgW\n - CORE_HOST=0.0.0.0\n - CORE_PORT=3000\n - CORE_DATABASE_URL=postgres://postgres:postgres@postgres/postgres\n - CORE_LOGGER=true\n volumes:\n - ./uploads:/zipline/uploads\n - ./public:/zipline/public\n depends_on:\n - 'postgres'\nvolumes:\n pg_data:\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-.env",children:"PASSWORD=passwordhere\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>p});var o=t(6540);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function p(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);