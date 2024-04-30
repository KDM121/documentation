@ECHO OFF
netsh interface ipv4 set dnsservers Ethernet static 94.140.14.14 primary
netsh interface ipv4 add dnsservers Ethernet 1.1.1.1 index=2
netsh interface ipv4 show config
