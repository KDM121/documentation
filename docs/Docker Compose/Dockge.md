```yaml
version: "3.8"
services:
  dockge:
    image: louislam/dockge:1
    restart: unless-stopped
    ports:
      - 5001:5001
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - /home/USER/stacks/dockge/data:/app/data
      - /home/USER/stacks:/home/docker/stacks
    environment:
      - DOCKGE_STACKS_DIR=/home/USER/stacks
networks: {}

```

Replace `USER` with username of user