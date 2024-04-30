```yaml
Speedtest
version: '3.3'
services:
 speedtest-tracker:
 container_name: speedtest-tracker
 ports:
 - '80:80'
 - '443:443'
 environment:
 - PUID=1000
 - PGID=1000
 - DB_CONNECTION=mysql
 - DB_HOST=db
 - DB_PORT=3306
 - DB_DATABASE=speedtest_tracker
 - DB_USERNAME=$USER
 - DB_PASSWORD=$PASSWORD
 - TZ=Europe/London
 volumes:
 - '/etc/localtime:/etc/localtime:ro'
 - './config/config'
 - './web:/etc/ssl/web'
 image: 'ghcr.io/alexjustesen/speedtest-tracker:latest'
 restart: unless-stopped
 depends_on:
 - db
 db:
 image: mariadb:10
 restart: always
 environment:
 - MARIADB_DATABASE=speedtest_tracker
 - MARIADB_USER=$USER
 - MARIADB_PASSWORD=$PASSWORD
 - MARIADB_RANDOM_ROOT_PASSWORD=true
 volumes:
 - speedtest-db:/var/lib/mysql
volumes:
 speedtest-db: 
```

```.env
USER=userhere
PASSWORD=passwordhere
```

Default username and password:
`admin@example.com`
`password`
