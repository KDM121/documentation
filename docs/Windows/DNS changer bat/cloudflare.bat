@ECHO OFF
netsh interface ipv4 set dnsservers Ethernet static 1.1.1.1 primary
netsh interface ipv4 add dnsservers Ethernet 1.0.0.1 index=2
netsh interface ipv4 show config
