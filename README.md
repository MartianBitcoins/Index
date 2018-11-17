# Martian Bitcoins Index (MBI)

Microservices

Docker

PostgreSQL
MongoDB

Node.js

React.js

 is a full-stack open source solution for Universal/Isomorphic web apps using PostgreSQL, React.js, Node.js, Koa.js and microservices. The idea is to cover the most common use cases for Universal web applications.

The project consist on three different micro-services:

__API__
This is the server that is public to the internet, here we communicate with the browsers and our web client app, the API knows how to access the database and when it needs to do a server side render it calls or web-app files it calls the web-app renderer for them.

__web-app renderer__
Receives state from the api, render the react app and put it in the index template, the returns the hole site to the api.
Also serve the static files of the web app (images, fonts, etc) and the app itself (javascript file) and serve them.
Note: Web-app renderer should not serve static files in the future, this should be done by an http server.

__Database (Just development)__
When using docker for development a postgreSQL container is created with the initial schema and some test data.

## Development

Database

```sh
docker network create -d bridge mbi-network
docker run -it --name mbi-mongodb -p 27017:27017 --network=mbi-network mongo:3.6.8-stretch
```

API

```sh
npm run build-dev
npm run up-dev
```

Web app

```sh
npm run build-dev
npm run up-dev
```