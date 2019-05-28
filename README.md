# doc22_ci_learning
Learning ci, step one

## Self Hosted CI CD

https://webhookrelay.com/blog/2019/02/11/using-drone-for-simple-selfhosted-ci-cd/

 - Setting up github


github.com > Settings > Developer settings > OAuth App


 - And connecting to drone local

https://docs.drone.io/installation/github/single-machine/


--------
### Running Drone in laptop 
 - Now the tunneling to a public domain in a public ip address


```
educacioon@family:~$ ssh contenedor@ci.maximilianou.com -nN -R 20000:127.0.0.1:20000
```

```
educacion@family:~$ docker pull drone/drone
```
https://docs.docker.com/compose/compose-file/

 - Docker compose complete, to start running Drone in laptop

```
educacion@family:~/src/doc22_ci_learning$ cat docker-compose.yml 
version: '3'
services:
    drone_io:
        image: drone/drone
        container_name: drone_io
        volumes:
            - '/var/run/docker.sock:/var/run/docker.sock'
            - '/var/lib/drone:/data'
        env_file: .env
        environment:
            - DRONE_GITHUB_SERVER=https://github.com
            - DRONE_GITHUB_CLIENT_ID=${L_DRONE_GITHUB_CLIENT_ID}
            - DRONE_GITHUB_CLIENT_SECRET=${L_DRONE_GITHUB_SECRET}
            - DRONE_RUNNER_CAPACITY=2
            - DRONE_SERVER_HOST=${L_DRONE_SERVER_HOST}
            - DRONE_SERVER_PROTO=${L_DRONE_SERVER_PROTO}
            - DRONE_TLS_AUTOCERT=true
        ports:
            - '20000:80'
            - '443:443'
        #restart: always
```


--------
### TODO
 - TODO
 
```
```
