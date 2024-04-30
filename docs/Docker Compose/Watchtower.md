```yaml
version: "3.9"
services:
  watchtower:
    environment:
      - WATCHTOWER_CLEANUP=true
    command: --debug --cleanup --schedule "0 30 4 * * *"
    image: containrrr/watchtower
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    container_name: watchtower
    restart: unless-stopped
networks: {}
```

add this label to the bottom of another compose file to exclude from watchtower updates:
```
 labels:
 - "com.centurylinklabs.watchtower.enable=false"
```