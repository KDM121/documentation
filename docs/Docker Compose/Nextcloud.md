```yaml
services:
 nextcloud-aio-mastercontainer:
 image: nextcloud/all-in-one:latest
 init: true
 restart: always
 container_name: nextcloud-aio-mastercontainer # This line is not allowed to be changed as otherwise AIO will not work correctly
 volumes:
 - nextcloud_aio_mastercontainer:/mnt/docker-aio-config # This line is not allowed to be changed as otherwise the built-in backup solution will not work
 - /var/run/docker.sock:/var/run/docker.sock:ro # May be changed on macOS, Windows or docker rootless. See the applicable documentation. If adjusting, don't forget to also set 'WATCHTOWER_DOCKER_SOCKET_PATH'!
 ports:
 - 8080:8080
 environment: # Is needed when using any of the options below
 - APACHE_PORT=11000 # Is needed when running behind a web server or reverse proxy (like Apache, Nginx, Cloudflare Tunnel and else). See https://github.com/nextcloud/all-in-one/blob/main/reverse-proxy.md
 - NEXTCLOUD_UPLOAD_LIMIT=200G # Can be adjusted if you need more. cloudflare has limit of 100mb
volumes:
 nextcloud_aio_mastercontainer:
 name: nextcloud_aio_mastercontainer # This line is not allowed to be changed as otherwise the built-in backup solution will not work
```


If you are using Cloudflare Disable the proxy whilst the domain check is happening. Re-enable it after Nextcloud has deployed correctly when using a reverse proxy.

## NPM configuration for Nextcloud![[2023-10-02-19-52-50.png]]

![[2023-10-02-19-52-58.png]]

![[2023-10-02-19-54-33.png]]