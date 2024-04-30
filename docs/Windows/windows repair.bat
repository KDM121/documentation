ipconfig /flushdns

wuauclt.exe /detectnow /updatenow

del /f /s /q "C:\Windows\Temp"

del /f /s /q "C:\Users\krnmc\AppData\Local\Temp"

del /f /s /q "C:\Windows\Prefetch"

chkdsk

sfc /scannow
sfc /verifyonly
sfc /verifyfile

DISM /Online /Cleanup-image /Checkhealth
DISM /Online /Cleanup-image /ScanHealth
DISM /Online /Cleanup-image /RestoreHealth


cleanmgr
