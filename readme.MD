# Trifork - GOTO; Night

This repository contains applications we will be using for different meetups.

## The applications

### app0

A static website containing an html-file, an image and two stylesheets.

#### Task

Create a docker container that will serve this static website.

### app1

A node application serving "Hello World!" from Express with Babel.

#### Task

Create a docker container that will serve this app.

### app2

The Kitten Collector - a node application supported by a database.

#### Task

1. Build the application `npm build`
2. Dockerize the *built* application
3. Link a database (MongoDB) named **db** running on the default port (27017) to the built container
4. Add kittens
