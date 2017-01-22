var config = require('../config');
var parser = require('../parser/base_parser');
var FB = require('fb');
var fb = new FB.Facebook(config.facebook);
var ACCESS_TOKEN = config.accessToken;

var feed = function runFeed(fbPath, fields) {
  var path = '/adelaidedogs/';
  var fields = ['message', 'created_time', 'id', 'picture', 'full_picture'];
  var feed;
  var request_string = path+'feed?access_token='+ACCESS_TOKEN+'&fields='+fields.join(',');

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
  writeData(parsed_objects);
}

/**
 * Function that writes the processed data.
 * @todo - look into writing this into a database.
 */
function writeData(data) {
  var date = new Date().toISOString();
  fs.writeFile('./src/data/feed_'+ date + '.json', JSON.stringify(data), 'utf8');
}

module.exports = feed;