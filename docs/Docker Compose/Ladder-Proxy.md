```yaml
version: "3.3"
services:
  ladder:
    ports:
      - 8080:8080
    environment:
      - RULESET=https://t.ly/14PSf
    container_name: ladder
    image: ghcr.io/everywall/ladder:latest
    restart: unless-stopped
```