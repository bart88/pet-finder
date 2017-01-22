'use strict';

const express = require('express');
const config = require('./config');
var fs = require('fs');
var FB = require('fb');
var fb = new FB.Facebook(config.facebook);
var taskService = require('./services/taskService');
var getFeedData = require('./tasks/getFeedData');
const parser = require('./parser/base_parser');
const PORT = config.port;
const ACCESS_TOKEN = config.accessToken;


// App
const app = express();

// Start up the service 
taskService.start('getData', '*/3 * * * * *', getFeedData);

// Routes
app.get('/', function (req, res) {
  runFeed();
  res.send('Hello world\n');
});


app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
