
where `if` is the directory to the ISO and `of` is the USB stick with the drive letter of `sdb` 
```
 dd if=/path/to/ISO of=/dev/sdb 
```

Drive letter can be checked by running:
```
lsblk
```