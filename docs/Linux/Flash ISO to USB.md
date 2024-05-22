where `if` is the directory to the ISO and `of` is the USB stick with the drive letter of `sdb`

```
sudo dd bs=4M if=/path/to/file.iso of=/dev/sdX status=progress oflag=sync
```

Drive letter can be checked by running:

```
lsblk
```
