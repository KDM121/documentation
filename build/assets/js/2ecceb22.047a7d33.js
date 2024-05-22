"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[827],{9200:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var o=t(4848),s=t(8453);const r={},c=void 0,a={id:"Docker Compose/WG-easy",title:"WG-easy",description:"",source:"@site/docs/Docker Compose/WG-easy.md",sourceDirName:"Docker Compose",slug:"/Docker Compose/WG-easy",permalink:"/docs/Docker Compose/WG-easy",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Uptime-Kuma",permalink:"/docs/Docker Compose/Uptime-Kuma"},next:{title:"Watchtower",permalink:"/docs/Docker Compose/Watchtower"}},i={},p=[];function d(e){const n={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'version: "3.3"\nservices:\n  wg-easy:\n    container_name: wg-easy\n    environment:\n      - WG_HOST=86.12.207.27\n      - PASSWORD=$PASSWORD\n      - WG_DEFAULT_DNS=192.168.0.2\n    volumes:\n      - ~/.wg-easy:/etc/wireguard\n    ports:\n      - 51820:51820/udp\n      - 51821:51821/tcp\n    cap_add:\n      - NET_ADMIN\n      - SYS_MODULE\n    sysctls:\n      - net.ipv4.conf.all.src_valid_mark=1\n      - net.ipv4.ip_forward=1\n    restart: unless-stopped\n    image: ghcr.io/wg-easy/wg-easy\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-.env",children:"PASSWORD=passwordhere\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var o=t(6540);const s={},r=o.createContext(s);function c(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);