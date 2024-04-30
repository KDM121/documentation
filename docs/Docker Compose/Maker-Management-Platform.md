```yaml
version: "3.6"
services:
  agent:
    image: ghcr.io/maker-management-platform/agent:main
    container_name: agent
    volumes:
      - ./library:/library
      - ./data:/data
    ports:
      - 8000:8000
    restart: unless-stopped
  ui:
    image: ghcr.io/maker-management-platform/mmp-ui:master
    container_name: ui
    ports:
      - 8083:8081
    environment:
      - AGENT_ADDRESS=agent:8000
    restart: unless-stopped
```