
run `ip a` to find the name of the network interface:

edit the interface file
```
sudo nano /etc/network/interfaces
```

Set the config for the network interface that is not a loopback address (172.0.0.1).
```
iface ens18 inet static 
address 192.168.1.100 
netmask 255.255.255.0 
gateway 192.168.1.1 
```

Install resolvconf for DNS configuration
```
sudo apt install resolvconf 
```

Edit the DNS files
```
sudo nano /etc/resolvconf/resolv.conf.d/head 
```

Set the desired Nameservers
```
nameserver 192.168.0.1
nameserver 1.1.1.1
```

Reboot the OS
```
shutdown -r
```

Check changes have applied
```
cat /etc/resolv.conf
```