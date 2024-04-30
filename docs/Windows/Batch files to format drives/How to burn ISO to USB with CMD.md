USB Harddrive

insert the USB key

Open CMD         - as an Admin
DISKPART
LIST DISK         - Will display the disks available
SELECT DISK *       - Will select the disk   ** Ensure you select the right disk **
CLEAN
CREATE PARTITION PRIMARY
SELECT PARTITION 1    - The Nº of the partition that you want to be primary
ACTIVE           - Makes the selected partition active
FORMAT FS=NTFS quick      - This will take approx. 10 minutes
ASSIGN or assign letter=X   - This will assign a drive letter (again we'll say that it's U:\)
EXIT           - To leave "DiskPart"

Find your .iso and right-click to mount it as a virtual drive (we'll use V:\)

V:
CD BOOT
BOOTSECT.EXE /NT60 U:
XCOPY V:\*.* U:\ /E /F /H  - To copy the installation files

Once finished you will be able to boot from the external USB HD .. don't forget the boot options (F2 / F12, etc.)