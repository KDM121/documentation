```shell
nano /etc/fstab
```

```shell
//smb_server/share_name /mnt/pve/nas cifs username=your_smb_username,password=your_smb_password,uid=100000,gid=100000 0 0
```
 make sure that the folder that is "/mnt/pve/nas" in the example already exists otherwise it will fail.

Run:

```shell
sudo systemctl daemon-reload
sudo mount -a
```

Double check that it is correct and there are no errors by running:
```shell
cat -v /etc/fstab
```

To add SMB share in proxmox look at [[PVE 8 Add SMB share]]