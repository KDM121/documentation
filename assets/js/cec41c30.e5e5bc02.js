"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8511],{7549:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>t,default:()=>p,frontMatter:()=>c,metadata:()=>d,toc:()=>a});var s=o(4848),r=o(8453);const c={},t="Install dockge",d={id:"Proxmox/Debian VM-LXC setup w dockge",title:"Debian VM-LXC setup w dockge",description:"How to setup a Debian VM/ LXC",source:"@site/docs/Proxmox/Debian VM-LXC setup w dockge.md",sourceDirName:"Proxmox",slug:"/Proxmox/Debian VM-LXC setup w dockge",permalink:"/docs/Proxmox/Debian VM-LXC setup w dockge",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"docker install script",permalink:"/docs/Linux/docker install script"},next:{title:"Full Disk Passthrough",permalink:"/docs/Proxmox/Full Disk Passthrough"}},i={},a=[];function l(e){const n={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"How to setup a Debian VM/ LXC"}),"\n",(0,s.jsx)(n.p,{children:"ignore su if on LXC"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"su\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"apt update && apt upgrade -y\n\napt install curl sudo -y\n"})}),"\n",(0,s.jsx)(n.p,{children:"if on an lxc container also"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"adduser USERNAME\nsudo usermod -aG sudo USERNAME\nsu - USERNAME\n"})}),"\n",(0,s.jsx)(n.p,{children:"Install docker"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sudo apt install docker.io docker-compose -y\n\nsudo usermod -aG docker USERNAME\n"})}),"\n",(0,s.jsx)(n.h1,{id:"install-dockge",children:"Install dockge"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cd ~\n\nmkdir docker && cd docker\n\nmkdir stacks && cd stacks\n\nmkdir dockge && cd dockge\n\nsudo nano compose.yaml\n"})}),"\n",(0,s.jsx)(n.p,{children:"paste the dockge file in"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'version: "3.8"\nservices:\n  dockge:\n    image: louislam/dockge:1\n    restart: unless-stopped\n    ports:\n      - 5001:5001\n    volumes:\n      - /var/run/docker.sock:/var/run/docker.sock\n      - /home/USERNAME/docker/stacks/dockge/data:/app/data\n      - /home/USERNAME/docker/stacks:/home/docker/stacks\n    environment:\n      - DOCKGE_STACKS_DIR=/home/USERNAME/docker/stacks\n'})}),"\n",(0,s.jsx)(n.p,{children:"Change USERNAME to your username"}),"\n",(0,s.jsx)(n.p,{children:"ctrl +x, y, ENTER"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sudo docker-compose up -d\n"})}),"\n",(0,s.jsxs)(n.p,{children:["go to IP address of server on port 5001\ne.g.  ",(0,s.jsx)(n.a,{href:"http://192.168.0.40:5001",children:"http://192.168.0.40:5001"})]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>t,x:()=>d});var s=o(6540);const r={},c=s.createContext(r);function t(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);