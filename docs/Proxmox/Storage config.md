### Change proxmox storage to have one drive for VM's and ISO's

#### **ONLY ON A FRESH INSTALL OR YOU WILL LOSE DATA**

1: Go to Datacentre -> Storage and click on `local-lvm`.

2: Remove `local-lvm`.

3: go into the shell of the node and run:

```bash
lvremove /dev/pve/data 
```

```bash
lvresize -l +100%FREE /dev/pve/root 
 ```

```bash
resize2fs /dev/mapper/pve-root 
```