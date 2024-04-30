To connect to a docker container from terminal run:

```shell
docker ps
```
to find the container name, then run

```shell
docker exec -it <mycontainer> bash
```
to connect to the container