```yaml
version: "3.5"
services:
  postgres:
    image: postgres:16-alpine
    env_file: .env
    restart: unless-stopped
    volumes:
      - ./pgdata:/var/lib/postgresql/data
  linkwarden:
    env_file: .env
    environment:
      - DATABASE_URL=postgresql://postgres:${POSTGRES_PASSWORD}@postgres:5432/postgres
    restart: unless-stopped
    # build: . # uncomment this line to build from source
    image: ghcr.io/linkwarden/linkwarden:latest # comment this line to build from source
    ports:
      - 3000:3000
    volumes:
      - ./data:/data/data
    depends_on:
      - postgres
```

```.env
POSTGRES_PASSWORD=passwordhere
```