1: On debian systems:

```bash
sudo apt update
sudo apt install nfs-common
```

2: create a mount point

```bash
sudo mkdir /PATH/TO/MOUNTPOINT
```

3:

```bash
sudo nano /etc/fstab
```

add the following to the file:

```bash
192.168.1.2:/share /PATH/TO/MOUNTPOINT nfs defaults,rw 0 0
```

4: mount the share

```bash
sudo mount -a
```

5: check if it is mounted

```bash
df -h
```

e.g:

```bash
Filesystem         Size  Used Avail Use% Mounted on
tmpfs              3.1G  2.6M  3.1G   1% /run
/dev/nvme3n1p1     916G  508G  363G  59% /
tmpfs               16G   11M   16G   1% /dev/shm
tmpfs              5.0M  4.0K  5.0M   1% /run/lock
efivarfs           128K   60K   64K  49% /sys/firmware/efi/efivars
tmpfs               16G     0   16G   0% /run/qemu
/dev/nvme0n1p1      96M   33M   64M  34% /boot/efi
tmpfs              3.1G  180K  3.1G   1% /run/user/1000
192.168.1.2:/share  469G     0  469G   0% /PATH/TO/MOUNTPOINT
```

(the last line is the nfs share)

ON the server:

1: create a group,

2: set the mapall group to the group created

3: set the permission of the group to RW in datasets

4: add the nfs share with the path/ setup nfs share

2: set host/ network if restricting to specific IP's

try accessing the nfs share
