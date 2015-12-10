# cheat-sheet

```
git clone https://github.com/triforkse/meetup.git && cd meetup
```

## app0

### Dockerfile

```
FROM ubuntu

RUN apt-get update -y && apt-get install -y nginx

ADD ./src /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
```

OR

```
# this image is much smaller than the ubuntu one
FROM fnichol/uhttpd

ADD ./src /www
```

### Commands

```
# to build our image
docker build -t app0 .

# to run our image
docker run -d -p 3000:80 app0
```

On Linux, visit localhost:3000 in your browser. Mac/Windows visit the IP seen when running `docker-machine ip default`

## app1

### Dockerfile

```
FROM node:5.0
MAINTAINER Max Malm <max@malm.me>

ENV NODE_ENV=production

ADD . /app
WORKDIR /app

RUN npm install

CMD ["npm", "start"]
```

## app2

### Dockerfile

```
FROM mhart/alpine-node

ENV NODE_ENV=production

ADD . /app
WORKDIR /app

RUN npm install && npm run build

CMD ["npm", "start"]
```

### Commands

```
# run a mongodb named db
docker run --name db -d mongo

# build app2
docker build -t app2 .

# run app2 with a link to db
docker run -p 3001:3000 --link db -d app2
```

On Linux, visit localhost:3001 in your browser. Mac/Windows visit the IP:3001 seen when running `docker-machine ip default`


### docker-compose.yml

```
web:
  build: .
  ports:
    - "3001:3000"
  links:
    - db
db:
  image: mongo
  container_name: db
```

### Commands

```
# to build (or start from cache)
docker-machine up -d

# to build without cache
docker-machine build --no-cache
```


