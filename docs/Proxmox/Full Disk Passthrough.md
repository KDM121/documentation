In the Node shell run:
```
find /dev/disk/by-id/ -type l|xargs -I{} ls -l {}|grep -v -E '[0-9]$' |sort -k11|cut -d' ' -f9,10,11,12
```

You should get an output similar to this:
```
10:55 /dev/disk/by-id/scsi-36c81f660f9a9ed002cbd4b5e097a6152 -> ../../sda
10:55 /dev/disk/by-id/wwn-0x6c81f660f9a9ed002cbd4b5e097a6152 -> ../../sda
13:23 /dev/disk/by-id/scsi-36c81f660f9a9ed002cbc827d0dd61ec9 -> ../../sdb
13:23 /dev/disk/by-id/wwn-0x6c81f660f9a9ed002cbc827d0dd61ec9 -> ../../sdb
13:23 /dev/disk/by-id/scsi-36c81f660f9a9ed002cbd13b10de64335 -> ../../sdc
13:23 /dev/disk/by-id/wwn-0x6c81f660f9a9ed002cbd13b10de64335 -> ../../sdc
13:23 /dev/disk/by-id/scsi-36c81f660f9a9ed002cbd18c4094ea46c -> ../../sdd
13:23 /dev/disk/by-id/wwn-0x6c81f660f9a9ed002cbd18c4094ea46c -> ../../sdd
13:23 /dev/disk/by-id/scsi-36c81f660f9a9ed002cbd1b1c09d9bf1a -> ../../sde
13:23 /dev/disk/by-id/wwn-0x6c81f660f9a9ed002cbd1b1c09d9bf1a -> ../../sde
13:23 /dev/disk/by-id/scsi-36c81f660f9a9ed002cbd2358094a8392 -> ../../sdf
13:23 /dev/disk/by-id/wwn-0x6c81f660f9a9ed002cbd2358094a8392 -> ../../sdf
```

For each disk that you want to add run this:
```
qm set 100 -scsi5 /dev/disk/by-id/wwn-0x6c81f660f9a9ed002cbd2358094a8392
```

In this example `100` is the ID of the VM
`scsi5` needs to be iterated through for each disk
`/dev/disk/by-id/wwn-0x6c81f660f9a9ed002cbd2358094a8392` is the disk shown above.

By running
```
lsblk
```
you can see the size of disks and determine whether you want to add them or not.
i.e.
```
sda                            8:0    0 238.5G  0 disk 
├─sda1                         8:1    0  1007K  0 part 
├─sda2                         8:2    0     1G  0 part /boot/efi
└─sda3                         8:3    0 237.5G  0 part 
  ├─pve-swap                 252:0    0     8G  0 lvm  [SWAP]
  ├─pve-root                 252:1    0  69.4G  0 lvm  /
  ├─pve-data_tmeta           252:2    0   1.4G  0 lvm  
  │ └─pve-data-tpool         252:4    0 141.2G  0 lvm  
  │   ├─pve-data             252:5    0 141.2G  1 lvm  
  │   ├─pve-vm--113--disk--0 252:6    0    64G  0 lvm  
  │   ├─pve-vm--122--disk--0 252:7    0    64G  0 lvm  
  │   ├─pve-vm--102--disk--0 252:8    0    16G  0 lvm  
  │   ├─pve-vm--100--disk--0 252:9    0    64G  0 lvm  
  │   └─pve-vm--101--disk--0 252:10   0     8G  0 lvm  
  └─pve-data_tdata           252:3    0 141.2G  0 lvm  
    └─pve-data-tpool         252:4    0 141.2G  0 lvm  
      ├─pve-data             252:5    0 141.2G  1 lvm  
      ├─pve-vm--113--disk--0 252:6    0    64G  0 lvm  
      ├─pve-vm--122--disk--0 252:7    0    64G  0 lvm  
      ├─pve-vm--102--disk--0 252:8    0    16G  0 lvm  
      ├─pve-vm--100--disk--0 252:9    0    64G  0 lvm  
      └─pve-vm--101--disk--0 252:10   0     8G  0 lvm
```
