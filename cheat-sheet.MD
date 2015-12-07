# cheat-sheet

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
FROM fnichol/uhttpd

ADD ./src /www
```

## app1

### Dockerfile

```
FROM node:5.0
MAINTAINER Max Malm <max@malm.me>

ENV NODE_ENV=production

ADD . /app
WORKDIR /app

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
```

## app2

### Dockerfile

```
FROM node:5.0

ENV NODE_ENV=production

ADD package.json /app/package.json
RUN cd /app && npm install

ADD . /app
WORKDIR /app

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

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
