require("dotenv").config();
const express = require("express");
const consola = require("consola");
const { Nuxt, Builder } = require("nuxt");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//const cors = require("cors");

// Import and Set Nuxt.js options
const config = require("../nuxt.config.js");
config.dev = process.env.NODE_ENV !== "production";
config.dev ? app.use(morgan("dev")) : app.use(morgan("production"));

// Parser, CORS and Morgan logging
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
//app.use(cors);

//get all pocs
app.use('/api/', require('./routes/poc'));

//Tie Server to Nuxt
async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);
  const { host, port } = nuxt.options.server;
  await nuxt.ready();
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }

  // Give nuxt middleware to express
  app.use(nuxt.render);

  // Listen the server
  app.listen(port, host);
  consola.ready({
    message: process.env.NODE_ENV == 'production' ? 'Server listening.....' : `http://${host}:${port}/en` ,
    badge: true
  });
}

//build connection string with password
var db=process.env.VUE_APP_CONNECTION_STRING ? process.env.VUE_APP_CONNECTION_STRING.replace('-password-', process.env.VUE_APP_POC_INTAKE_DB_PASSWORD) : 'empty connection string check environment vars';

function connectDb() {
  mongoose.set("useCreateIndex", true);
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log("Database is connected");
    })
    .catch(err => {
      console.log({ database_error: err });
    });
}

start().then(() => connectDb());
