Before running the compose, run these:

```bash
sudo systemctl stop systemd-resolved 
```

```bash
sudo systemctl disable systemd-resolved
```


```yaml
version: "3"
services:
 pihole:
 container_name: pihole
 image: pihole/pihole:latest
 ports:
 - "53:53/tcp"
 - "53:53/udp"
 - "80:80/tcp"
 environment:
 TZ: 'Europe/London'
 WEBPASSWORD: $PASSWORD
 volumes:
 - './etc-pihole:/etc/pihole'
 - './etc-dnsmasq.d:/etc/dnsmasq.d'
 restart: unless-stopped
```

```.env
PASSWORD=passwordhere
```
