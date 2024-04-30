```shell
#!/bin/bash

(crontab -l ; echo "0 2 * * * /usr/bin/apt-get update -y && /usr/bin/apt-get upgrade -y") | crontab -
echo "Updating and Upgrading"
apt update -y && apt upgrade -y
echo "installing curl and sudo"
apt install curl -y
apt install sudo -y

# creating new user
while true; do
read -p "Do you want to create a new sudo user? (y/n) " yn

case $yn in
        [yY] ) echo creating new user;
                read -p "Enter the username: " username;
                echo "adding user $username";
                echo " type your password in";
                adduser $username;

                echo "add user to sudo group";
                sudo usermod -aG sudo $username;
                break;;
        [nN] )  echo skipping creation of new sudo user;
                break;;
        *)      echo invalid response;;
esac
done
# created user

# docker install
while true; do

read -p "Do you want to install docker? (y/n) " yn

case $yn in
        [yY] ) echo installing;
                                sudo apt update
                                sudo apt-get install ca-certificates -y
                                sudo install -m 0755 -d /etc/apt/keyrings
                                sudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc
                                sudo chmod a+r /etc/apt/keyrings/docker.asc
                                echo \
                                  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian \
                                $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
                                sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
                                sudo apt-get update
                                sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y
                break;;
        [nN] ) echo not installing;
                break;;
        *) echo invalid response;;
esac

done
# end docker install

echo "done! docker and compose are installed"

# install dockge
while true; do

read -p "Do you want to install dockge? (y/n) " yn

case $yn in
                [yY] ) mkdir -p /home/$username/docker/dockge
                                cd /home/$username/docker/dockge
                                echo "username=$username" >> .env
                                echo \
                                "services:
  dockge:
    image: louislam/dockge:1
    restart: unless-stopped
    ports:
      - 5001:5001
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - /home/$username/docker/dockge/data:/app/data
      - /home/$username/docker:/home/docker/stacks
    environment:
      - DOCKGE_STACKS_DIR=/home/$username/stacks
networks: {}" \
                                        >> compose.yaml
                                docker compose up -d
                        break;;
		[nN] ) echo "not installing";
                                break;;
                *) echo invalid response;;
esac
done

echo "switch user to $username"
su - $username
```

Deploy a "wgetable" copy with [[NGINX web server]]
