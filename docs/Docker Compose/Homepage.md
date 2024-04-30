```yaml
version: "3.3"
services:
  homepage:
    image: ghcr.io/gethomepage/homepage:latest
    container_name: homepage
    ports:
      - 5002:3000
    volumes:
      - ./homepage:/app/config
      - /var/run/docker.sock:/var/run/docker.sock
    restart: unless-stopped
networks: {}

```

add the following labels to another compose file to add it to Homepage

```yaml
    labels:
      - homepage.group=Name of group
      - homepage.name=Name of item
      - homepage.href=http://link.to.webui
```
