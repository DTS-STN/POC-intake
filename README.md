# POC-intake

	
# BRM needs a website to promote the PoC(proof of concept) process and to allow clients to submit PoC requests.  This would be a quick product delivery similar to the DTS website.  A partnership between BPMO, BRM, DTS and IT Strategy

> 

## Build Setup 

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Setup DB Locally (Run this in an external terminal - not VSCode)

if you want to work agianst your local DB, you can use this entry in your .env file

VUE_APP_CONNECTION_STRING=mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false

Note you must have mongodb installed on your system

```bash
# create required data directory
mkdir data
mkdir data/db

# Initialize DB
mongod --dbpath ./data/db

# Alternate method (automated script)
npm run database

# Import script for test data CSV
npm run dbimport
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
