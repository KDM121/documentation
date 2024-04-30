``` bash
nano /etc/apt/sources.list.d/pve-enterprise.list
```

`From: deb https://enterprise.proxmox.com/debian/pve bookworm enterprise`

To:
```bash
deb http://download.proxmox.com/debian/pve bookworm pve-no-subscription
```

```bash
nano /etc/apt/sources.list.d/ceph.list
```

`From: deb https://enterprise.proxmox.com/debian/ceph-quincy bookworm enterprise`

To:
```bash
To: deb http://download.proxmox.com/debian/ceph-quincy bookworm no-subscription
```
