import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b5f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '23f'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '1dd'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'ce8'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'ba1'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '98c'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '17e'),
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
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Linux/docker install script',
                component: ComponentCreator('/docs/Linux/docker install script', '527'),
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
                path: '/docs/Proxmox/Storage config',
                component: ComponentCreator('/docs/Proxmox/Storage config', 'dba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Windows/Batch files to format drives',
                component: ComponentCreator('/docs/Windows/Batch files to format drives', '0d4'),
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
