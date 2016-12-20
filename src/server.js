'use strict';

const express = require('express');
const config = require('./config');
var FB = require('fb');
var fb = new FB.Facebook(config.facebook);
const parser = require('./parser/base_parser');
const PORT = config.port;

// App
const app = express();

function runFeed() {
  var path = '/adelaidedogs/';
  var fields = ['message', 'created_time', 'id', 'picture', 'full_picture'];
  var token = '1668433980109240|dNtaRlW_hfoSKocTWtS3UELlJa8';
  var feed;
  var request_string = path+'feed?access_token='+token+'&fields='+fields.join(',');

  FB.api(request_string, function(res) {
    if(!res || res.error) {
      console.log(!res ? 'error occurred' : res.error);
      return;
    }
    var messages = res.data.filter(function(object) {
      if (object.message) return object;
    });

    processData(messages);
  });

}

function processData(feed) {
  var parsed_objects = feed.map(function (object) {
    var msg = parser.parse(object.message);
    if(msg.action && msg.location) {
      return {
        'message' : object.message,
        'action': msg.action,
        'type': msg.type,
        'location': msg.location,
        'date': msg.date,
        'created_time': object.created_time,
        'picture_url': object.picture,
        'full_picture_url': object.full_picture
      };
    }
  });

  // write this to disk for now or into the database.
}

// Routes
app.get('/', function (req, res) {
  runFeed();
  res.send('Hello world\n');
});


app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
