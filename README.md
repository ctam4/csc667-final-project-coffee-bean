# FINAL PROJECT
# by COFFEE-BEAN

## step 1: install all dependencies

```sh
$ cd frontend/ && npm install
$ cd backend/api/ && npm install
$ cd backend/websocket/ && npm install
$ cd backend/fileServer/ && npm install
```

## step 2: generate self-signed certs

```sh
$ openssl req -nodes -new -x509 -keyout server.key -out server.cert -subj '/'
```

## step 3: start all servers in parallel

```sh
$ docker-compose up
```

If `docker-compose` fails to connect to the Docker daemon, ensure the Docker daemon is up (`sudo dockerd`). Althernatively, you can use npm / pm2.

- Websocket HTTP: `http://localhost:5080/`
- Websocket HTTP: `https://localhost:5443/`
- API HTTP: `http://localhost:6080/`
- API HTTP: `https://localhost:6443/`
- FileServer HTTP: `http://localhost:4080/`
- FileServer HTTP: `https://localhost:4443/`
