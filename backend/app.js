const express = require('express');
 const bodyParser = require('body-parser');
 const mongoose = require('mongoose');
 const patientenRoutes = require('./routes/patient');

const app = express();

mongoose.connect(
    "mongodb+srv://moris:"+
    "0mmmXNivKf8FhI3M" +
    "@cluster0.58p6a.mongodb.net/praxis-app?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, })
  .then(() => {
    console.log('connected to database');
  })
  .catch(() => {
    console.log('connexion failed!');
  });

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });

   app.use('/api/patienten', patientenRoutes);

  module.exports = app;
