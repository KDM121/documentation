"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3727],{4474:(e,d,n)=>{n.r(d),n.d(d,{assets:()=>r,contentTitle:()=>c,default:()=>v,frontMatter:()=>t,metadata:()=>o,toc:()=>a});var s=n(4848),i=n(8453);const t={},c=void 0,o={id:"Proxmox/Full Disk Passthrough",title:"Full Disk Passthrough",description:"In the Node shell run:",source:"@site/docs/Proxmox/Full Disk Passthrough.md",sourceDirName:"Proxmox",slug:"/Proxmox/Full Disk Passthrough",permalink:"/docs/Proxmox/Full Disk Passthrough",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Debian VM-LXC setup w dockge",permalink:"/docs/Proxmox/Debian VM-LXC setup w dockge"},next:{title:"General",permalink:"/docs/Proxmox/General"}},r={},a=[];function l(e){const d={code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.p,{children:"In the Node shell run:"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{children:"find /dev/disk/by-id/ -type l|xargs -I{} ls -l {}|grep -v -E '[0-9]$' |sort -k11|cut -d' ' -f9,10,11,12\n"})}),"\n",(0,s.jsx)(d.p,{children:"You should get an output similar to this:"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{children:"10:55 /dev/disk/by-id/scsi-36c81f660f9a9ed002cbd4b5e097a6152 -> ../../sda\n10:55 /dev/disk/by-id/wwn-0x6c81f660f9a9ed002cbd4b5e097a6152 -> ../../sda\n13:23 /dev/disk/by-id/scsi-36c81f660f9a9ed002cbc827d0dd61ec9 -> ../../sdb\n13:23 /dev/disk/by-id/wwn-0x6c81f660f9a9ed002cbc827d0dd61ec9 -> ../../sdb\n13:23 /dev/disk/by-id/scsi-36c81f660f9a9ed002cbd13b10de64335 -> ../../sdc\n13:23 /dev/disk/by-id/wwn-0x6c81f660f9a9ed002cbd13b10de64335 -> ../../sdc\n13:23 /dev/disk/by-id/scsi-36c81f660f9a9ed002cbd18c4094ea46c -> ../../sdd\n13:23 /dev/disk/by-id/wwn-0x6c81f660f9a9ed002cbd18c4094ea46c -> ../../sdd\n13:23 /dev/disk/by-id/scsi-36c81f660f9a9ed002cbd1b1c09d9bf1a -> ../../sde\n13:23 /dev/disk/by-id/wwn-0x6c81f660f9a9ed002cbd1b1c09d9bf1a -> ../../sde\n13:23 /dev/disk/by-id/scsi-36c81f660f9a9ed002cbd2358094a8392 -> ../../sdf\n13:23 /dev/disk/by-id/wwn-0x6c81f660f9a9ed002cbd2358094a8392 -> ../../sdf\n"})}),"\n",(0,s.jsx)(d.p,{children:"For each disk that you want to add run this:"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{children:"qm set 100 -scsi5 /dev/disk/by-id/wwn-0x6c81f660f9a9ed002cbd2358094a8392\n"})}),"\n",(0,s.jsxs)(d.p,{children:["In this example ",(0,s.jsx)(d.code,{children:"100"})," is the ID of the VM\n",(0,s.jsx)(d.code,{children:"scsi5"})," needs to be iterated through for each disk\n",(0,s.jsx)(d.code,{children:"/dev/disk/by-id/wwn-0x6c81f660f9a9ed002cbd2358094a8392"})," is the disk shown above."]}),"\n",(0,s.jsx)(d.p,{children:"By running"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{children:"lsblk\n"})}),"\n",(0,s.jsx)(d.p,{children:"you can see the size of disks and determine whether you want to add them or not.\ni.e."}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{children:"sda                            8:0    0 238.5G  0 disk \n\u251c\u2500sda1                         8:1    0  1007K  0 part \n\u251c\u2500sda2                         8:2    0     1G  0 part /boot/efi\n\u2514\u2500sda3                         8:3    0 237.5G  0 part \n  \u251c\u2500pve-swap                 252:0    0     8G  0 lvm  [SWAP]\n  \u251c\u2500pve-root                 252:1    0  69.4G  0 lvm  /\n  \u251c\u2500pve-data_tmeta           252:2    0   1.4G  0 lvm  \n  \u2502 \u2514\u2500pve-data-tpool         252:4    0 141.2G  0 lvm  \n  \u2502   \u251c\u2500pve-data             252:5    0 141.2G  1 lvm  \n  \u2502   \u251c\u2500pve-vm--113--disk--0 252:6    0    64G  0 lvm  \n  \u2502   \u251c\u2500pve-vm--122--disk--0 252:7    0    64G  0 lvm  \n  \u2502   \u251c\u2500pve-vm--102--disk--0 252:8    0    16G  0 lvm  \n  \u2502   \u251c\u2500pve-vm--100--disk--0 252:9    0    64G  0 lvm  \n  \u2502   \u2514\u2500pve-vm--101--disk--0 252:10   0     8G  0 lvm  \n  \u2514\u2500pve-data_tdata           252:3    0 141.2G  0 lvm  \n    \u2514\u2500pve-data-tpool         252:4    0 141.2G  0 lvm  \n      \u251c\u2500pve-data             252:5    0 141.2G  1 lvm  \n      \u251c\u2500pve-vm--113--disk--0 252:6    0    64G  0 lvm  \n      \u251c\u2500pve-vm--122--disk--0 252:7    0    64G  0 lvm  \n      \u251c\u2500pve-vm--102--disk--0 252:8    0    16G  0 lvm  \n      \u251c\u2500pve-vm--100--disk--0 252:9    0    64G  0 lvm  \n      \u2514\u2500pve-vm--101--disk--0 252:10   0     8G  0 lvm\n"})})]})}function v(e={}){const{wrapper:d}={...(0,i.R)(),...e.components};return d?(0,s.jsx)(d,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,d,n)=>{n.d(d,{R:()=>c,x:()=>o});var s=n(6540);const i={},t=s.createContext(i);function c(e){const d=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function o(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(t.Provider,{value:d},e.children)}}}]);