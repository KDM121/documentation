```yaml
version: "3"
services:
  web:
    image: nginx:latest
    ports:
      - 80:80
    restart: unless-stopped
    volumes:
      - ./html:/usr/share/nginx/html
```

Used for [[LXC Config]] with config.sh stored in ./html