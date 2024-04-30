How to setup a Debian VM/ LXC

ignore su if on LXC
```
su
```

```
apt update && apt upgrade -y

apt install curl sudo -y
```

if on an lxc container also
```
adduser USERNAME
sudo usermod -aG sudo USERNAME
su - USERNAME
```


Install docker
```
sudo apt install docker.io docker-compose -y

sudo usermod -aG docker USERNAME
```

# Install dockge
```
cd ~

mkdir docker && cd docker

mkdir stacks && cd stacks

mkdir dockge && cd dockge

sudo nano compose.yaml
```
paste the dockge file in
```
version: "3.8"
services:
  dockge:
    image: louislam/dockge:1
    restart: unless-stopped
    ports:
      - 5001:5001
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - /home/USERNAME/docker/stacks/dockge/data:/app/data
      - /home/USERNAME/docker/stacks:/home/docker/stacks
    environment:
      - DOCKGE_STACKS_DIR=/home/USERNAME/docker/stacks
```
Change USERNAME to your username

ctrl +x, y, ENTER
```
sudo docker-compose up -d
```
go to IP address of server on port 5001
e.g.  http://192.168.0.40:5001