```yaml
version: "3.3"
services:
  wg-easy:
    container_name: wg-easy
    environment:
      - WG_HOST=86.12.207.27
      - PASSWORD=$PASSWORD
      - WG_DEFAULT_DNS=192.168.0.2
    volumes:
      - ~/.wg-easy:/etc/wireguard
    ports:
      - 51820:51820/udp
      - 51821:51821/tcp
    cap_add:
      - NET_ADMIN
      - SYS_MODULE
    sysctls:
      - net.ipv4.conf.all.src_valid_mark=1
      - net.ipv4.ip_forward=1
    restart: unless-stopped
    image: ghcr.io/wg-easy/wg-easy
```

```.env
PASSWORD=passwordhere
```