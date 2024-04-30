```yaml
version: "3.3"
services:
  uptime-kuma:
    restart: unless-stopped
    ports:
      - 3001:3001
    volumes:
      - ./uptime-kuma:/app/data
      - /var/run/docker.sock:/var/run/docker.sock
    container_name: uptime-kuma
    image: louislam/uptime-kuma:1
volumes:
  uptime-kuma: {}
networks: {}
```