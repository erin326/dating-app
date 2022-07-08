# Let's Find Love

## Description

Dating application which uses matching functionality, along with gender interest filtering and features live chat using ActionCable.
 

## Overview

Let's Find Love is built with a React JS frontend and a Rails API, with PostgreSQL as its database. 


## Setup

To run locally, run
 
```sh 
rails s
npm start --prefix client
```

To start the postgreSQL database, use 
```sh
sudo service postgresql start
```
(For WSL Ubuntu users)

## Environment

- Ruby version: 2.7.5
- Node version: 16x
- PostgreSQL version: 12.9 (Ubuntu)
- Heroku CLI: 7.59.2 linux64
- Bundler version: 2.2.32
- Rails version: 6.1.3.2

## Dependencies

- react-router-dom: ^6.0.
- Uses ActiveStorage for storing pet images.
- Uses ActionCable for live chat feature.
- Full list of dependencies, gems and packages can be found in the `client/package-lock.json` and `Gemfile.lock` files. 



