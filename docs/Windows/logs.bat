@echo off
mode 200,50
set /p logfile=Please insert file name : 
echo collect system info
systeminfo >"%logfile%"
echo collect service tag
wmic bios get serialnumber >>"%logfile%"
echo collect baseboard information
wmic baseboard get product, serialnumber, version >>"%logfile%"
echo collect driver list
powershell -command "Get-WmiObject Win32_PnPSignedDriver| select devicename, driverversion" >>"%logfile%"
echo collect application list
powershell -command "Get-WmiObject Win32_product | select Name, Vendor, Version" >>"%logfile%"
echo collect services list
powershell -command "Get-Service | Sort Status" >>"%logfile%"
echo collect process list
powershell -command "Get-WmiObject -Class Win32_Service | Select-Object -Property Name, ProcessID" >>"%logfile%"
echo collect USB devices list
powershell -command "Get-WmiObject -Class Win32_USBDevice | Select Name,Description,DeviceID" >>"%logfile%"
echo collect system eventlog
powershell -command "Get-EventLog -LogName System -EntryType Error, Warning" >>"%logfile%"
echo collect application eventlog
powershell -command "Get-EventLog -LogName Application -EntryType Error, Warning" >>"%logfile%"