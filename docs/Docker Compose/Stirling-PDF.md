```yaml
version: "3.3"
services:
  stirling-pdf:
    image: frooodle/s-pdf:latest
    ports:
      - 8080:8080
    environment:
      - DOCKER_ENABLE_SECURITY=false
    restart: unless-stopped
```
