"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[941],{7444:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>i});var s=t(4848),o=t(8453);const r={},c=void 0,a={id:"Docker Compose/Speedtest",title:"Speedtest",description:"Default username and password:",source:"@site/docs/Docker Compose/Speedtest.md",sourceDirName:"Docker Compose",slug:"/Docker Compose/Speedtest",permalink:"/docs/Docker Compose/Speedtest",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pi-Hole",permalink:"/docs/Docker Compose/Pi-Hole"},next:{title:"Stirling-PDF",permalink:"/docs/Docker Compose/Stirling-PDF"}},d={},i=[];function p(e){const n={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"Speedtest\nversion: '3.3'\nservices:\n speedtest-tracker:\n container_name: speedtest-tracker\n ports:\n - '80:80'\n - '443:443'\n environment:\n - PUID=1000\n - PGID=1000\n - DB_CONNECTION=mysql\n - DB_HOST=db\n - DB_PORT=3306\n - DB_DATABASE=speedtest_tracker\n - DB_USERNAME=$USER\n - DB_PASSWORD=$PASSWORD\n - TZ=Europe/London\n volumes:\n - '/etc/localtime:/etc/localtime:ro'\n - './config/config'\n - './web:/etc/ssl/web'\n image: 'ghcr.io/alexjustesen/speedtest-tracker:latest'\n restart: unless-stopped\n depends_on:\n - db\n db:\n image: mariadb:10\n restart: always\n environment:\n - MARIADB_DATABASE=speedtest_tracker\n - MARIADB_USER=$USER\n - MARIADB_PASSWORD=$PASSWORD\n - MARIADB_RANDOM_ROOT_PASSWORD=true\n volumes:\n - speedtest-db:/var/lib/mysql\nvolumes:\n speedtest-db: \n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-.env",children:"USER=userhere\nPASSWORD=passwordhere\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Default username and password:\n",(0,s.jsx)(n.code,{children:"admin@example.com"}),"\n",(0,s.jsx)(n.code,{children:"password"})]})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var s=t(6540);const o={},r=s.createContext(o);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);