```yaml
version: "2"
services:
 incognito:
 restart: unless-stopped
 image: "motortruck1221/incognito"
 ports:
 - 4941:8080
```