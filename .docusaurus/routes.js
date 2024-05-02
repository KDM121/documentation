import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'e1b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '167'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'f83'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '9d4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'd7b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '1be'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '22f'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'bb3'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '23f'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'a2d'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '6f1'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '733'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'f77'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'd07'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '154'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '666'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '9f6'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '8ee'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'ce8'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '650'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'fae'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '2f5'),
            routes: [
              {
                path: '/docs/Docker Compose/Authentik',
                component: ComponentCreator('/docs/Docker Compose/Authentik', 'b76'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docker Compose/Bookstack',
                component: ComponentCreator('/docs/Docker Compose/Bookstack', '867'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docker Compose/Dockge',
                component: ComponentCreator('/docs/Docker Compose/Dockge', 'a8c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docker Compose/Drawio',
                component: ComponentCreator('/docs/Docker Compose/Drawio', '155'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docker Compose/General',
                component: ComponentCreator('/docs/Docker Compose/General', '30f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docker Compose/Homarr',
                component: ComponentCreator('/docs/Docker Compose/Homarr', '17b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docker Compose/Homepage',
                component: ComponentCreator('/docs/Docker Compose/Homepage', '994'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docker Compose/IT-Tools',
                component: ComponentCreator('/docs/Docker Compose/IT-Tools', '64c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docker Compose/Ladder-Proxy',
                component: ComponentCreator('/docs/Docker Compose/Ladder-Proxy', '0de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docker Compose/Linkwarden',
                component: ComponentCreator('/docs/Docker Compose/Linkwarden', '47d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docker Compose/Maker-Management-Platform',
                component: ComponentCreator('/docs/Docker Compose/Maker-Management-Platform', 'd9f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docker Compose/Metube',
                component: ComponentCreator('/docs/Docker Compose/Metube', '2c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docker Compose/Nextcloud',
                component: ComponentCreator('/docs/Docker Compose/Nextcloud', '325'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docker Compose/NGINX web server',
                component: ComponentCreator('/docs/Docker Compose/NGINX web server', 'b27'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docker Compose/Nginx-Proxy-Manager',
                component: ComponentCreator('/docs/Docker Compose/Nginx-Proxy-Manager', 'abd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docker Compose/Pi-Hole',
                component: ComponentCreator('/docs/Docker Compose/Pi-Hole', '5a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docker Compose/Speedtest',
                component: ComponentCreator('/docs/Docker Compose/Speedtest', '4a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docker Compose/Stirling-PDF',
                component: ComponentCreator('/docs/Docker Compose/Stirling-PDF', 'ce1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docker Compose/Uptime-Kuma',
                component: ComponentCreator('/docs/Docker Compose/Uptime-Kuma', 'dcb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docker Compose/Watchtower',
                component: ComponentCreator('/docs/Docker Compose/Watchtower', 'f94'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docker Compose/Web-Proxy',
                component: ComponentCreator('/docs/Docker Compose/Web-Proxy', '7b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docker Compose/WG-easy',
                component: ComponentCreator('/docs/Docker Compose/WG-easy', '4c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docker Compose/Zipline',
                component: ComponentCreator('/docs/Docker Compose/Zipline', '914'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Linux/FedoraRepoSetup',
                component: ComponentCreator('/docs/Linux/FedoraRepoSetup', '15b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Linux/Flash ISO to USB',
                component: ComponentCreator('/docs/Linux/Flash ISO to USB', 'bf5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Linux/General',
                component: ComponentCreator('/docs/Linux/General', '17b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Linux/House Keeping',
                component: ComponentCreator('/docs/Linux/House Keeping', '985'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Linux/Lunar Client Setup',
                component: ComponentCreator('/docs/Linux/Lunar Client Setup', '6cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Linux/MC Paper 1.16.5 Setup',
                component: ComponentCreator('/docs/Linux/MC Paper 1.16.5 Setup', '113'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Linux/Mount SMB share',
                component: ComponentCreator('/docs/Linux/Mount SMB share', '865'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Linux/NFS-mount',
                component: ComponentCreator('/docs/Linux/NFS-mount', '006'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Linux/Setup Static IP and DNS Debian 12',
                component: ComponentCreator('/docs/Linux/Setup Static IP and DNS Debian 12', 'a5d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Linux/SSH key stuff',
                component: ComponentCreator('/docs/Linux/SSH key stuff', '185'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Proxmox/Debian VM-LXC setup w dockge',
                component: ComponentCreator('/docs/Proxmox/Debian VM-LXC setup w dockge', '85a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Proxmox/Full Disk Passthrough',
                component: ComponentCreator('/docs/Proxmox/Full Disk Passthrough', '2da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Proxmox/General',
                component: ComponentCreator('/docs/Proxmox/General', '020'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Proxmox/LXC Config',
                component: ComponentCreator('/docs/Proxmox/LXC Config', '709'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Proxmox/PVE 8 Add SMB share',
                component: ComponentCreator('/docs/Proxmox/PVE 8 Add SMB share', 'ecd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Proxmox/PVE 8 Repositories',
                component: ComponentCreator('/docs/Proxmox/PVE 8 Repositories', '3dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Proxmox/Remove No Sub Pop-up',
                component: ComponentCreator('/docs/Proxmox/Remove No Sub Pop-up', '519'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Windows/Batch files to format drives/',
                component: ComponentCreator('/docs/Windows/Batch files to format drives/', '8a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Windows/Batch files to format drives/How to burn ISO to USB with CMD',
                component: ComponentCreator('/docs/Windows/Batch files to format drives/How to burn ISO to USB with CMD', 'f03'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Windows/DNS changer bat/DNS changer Batch Files',
                component: ComponentCreator('/docs/Windows/DNS changer bat/DNS changer Batch Files', 'e82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Windows/Full Built-In Windows Scan',
                component: ComponentCreator('/docs/Windows/Full Built-In Windows Scan', 'c88'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Windows/Setup 11 without networking',
                component: ComponentCreator('/docs/Windows/Setup 11 without networking', 'eb8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Windows/Win Run Commands',
                component: ComponentCreator('/docs/Windows/Win Run Commands', 'd9a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Windows/Windows House Keeping and checkup',
                component: ComponentCreator('/docs/Windows/Windows House Keeping and checkup', '110'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Windows/Windows Keys',
                component: ComponentCreator('/docs/Windows/Windows Keys', '1bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Windows/Windows Log Batch',
                component: ComponentCreator('/docs/Windows/Windows Log Batch', 'e2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Windows/Windows Tweaks/Block The Spot',
                component: ComponentCreator('/docs/Windows/Windows Tweaks/Block The Spot', '999'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Windows/Windows Tweaks/Chris Titus Tech',
                component: ComponentCreator('/docs/Windows/Windows Tweaks/Chris Titus Tech', '1ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Windows/Windows Tweaks/Files for Tweaks',
                component: ComponentCreator('/docs/Windows/Windows Tweaks/Files for Tweaks', '584'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Windows/Windows Tweaks/Set up Quake Terminal',
                component: ComponentCreator('/docs/Windows/Windows Tweaks/Set up Quake Terminal', 'f74'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '367'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
