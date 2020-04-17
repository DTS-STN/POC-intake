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

## Setup DB Locally

Note you must have mongodb installed on your system

```bash
# create required data directory
mkdir data
mkdir data/db

# Initialize DB
mongod --dbpath ./data/db

# Run Nuxt application
npm run dev
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
