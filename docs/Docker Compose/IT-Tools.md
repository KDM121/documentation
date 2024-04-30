```yaml
version: "3.3"
services:
  it-tools:
    container_name: it-tools
    restart: unless-stopped
    ports:
      - 80:80
    image: corentinth/it-tools:latest
```