```yaml
version: "3.5"
services:
  drawio:
    image: jgraph/drawio
    container_name: drawio
    restart: unless-stopped
    ports:
      - 1080:8080
      - 1443:8443
    healthcheck:
      test:
        - CMD-SHELL
        - curl -f http://domain:8080 || exit 1
      interval: 1m30s
      timeout: 10s
      retries: 5
      start_period: 10s
```