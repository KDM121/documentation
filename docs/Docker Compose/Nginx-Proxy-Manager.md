```yaml
version: "3.8"
services:
  app:
    image: jc21/nginx-proxy-manager:latest
    restart: unless-stopped
    ports:
      - 443:443
      - 81:81
    volumes:
      - ./data:/data
      - ./letsencrypt:/etc/letsencrypt
```