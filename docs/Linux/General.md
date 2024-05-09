# General Commands


### check installed OS 
```bash
cat /etc/os-release
```

### check open ports

```bash
sudo ss -tunlp
```
OR
```bash
sudo netstat -tnlp
```
For a specific port
```bash
sudo lsof -nP -iTCP:3306
```


### docker container statistics

```bash
docker stats
```

### kitty set terminal correct

```bash
 export TERM=xterm
 ```