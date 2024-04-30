## 1.16.5 setup with paper

```bash

apt update -y && apt upgrade -y

```

```bash

adduser km27

```

```bash

sudo usermod -aG sudo km27

```

```bash

sudo su - km27

```

```bash

sudo apt install openjdk-11-jre-headless

```

```bash

wget https://papermc.io/api/v2/projects/paper/versions/1.16.5/builds/788/downloads/paper-1.16.5-788.jar

```

```bash

java -Xms4G -Xmx4G -jar paper-1.16.5-788.jar nogui

```

  

After starting server accept eula and restart