# Simple Startup Boilerplate

## Development

Start mongodb in docker and join ss-network

```sh
docker network create -d bridge ss-network
docker run -it --name ss-mongo -p 27017:27017 --network=ss-network mongo:3.6.8-stretch
```

## Watch logs

```sh
docker exec -it ss-mongo bash
docker logs some-mongo
mongo
```

## SSH and connect to mongo

```sh
docker exec -it mabo-mongo bash
mongo
```

## Command reference

```sh
# Delete container
docker rm mabo-mongo
```

## TODO

WARNING: Using the XFS filesystem is strongly recommended with the WiredTiger storage engine
2018-09-02T16:09:25.987+0000 I STORAGE  [initandlisten] **          See http://dochub.mongodb.org/core/prodnotes-filesystem

Enable MongoDB's free cloud-based monitoring service, which will then receive and display
metrics about your deployment (disk utilization, CPU, operation statistics, etc).

Use local host fixed folder to avoid fill up local host SSD
 - ./data/db:/data/db