```
pvesm cifsscan 192.168.0.XXX --username <username> --password <password>
```

Then run:

```
pvesm add cifs <storage-id> --server <server-ip> --share <share-name> --username <username> --password <password>
```

`storage-id` does not matter as it is a local reference and doesn't affect the share at all

`server-ip` is the IP address of the NAS/ SMB share

`share-name` is the name of the share to add from the NAS

To add SMB share not on Proxmox look at [[Mount SMB share]]
