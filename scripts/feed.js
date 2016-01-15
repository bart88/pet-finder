define(['facebook'], function(){
  'use strict';

  // this looks all messy
  var path = '/adelaidedogs/';
  var fields = ['message', 'created_time', 'id', 'picture', 'full_picture'];
  var token = '1668433980109240|dNtaRlW_hfoSKocTWtS3UELlJa8';
  var feed;
  var request_string = path+'feed?access_token='+token+'&fields='+fields.join(',');

  // we need to pull the feed from facebook
  FB.api(
    request_string,
    'GET',
    {},
    fetch
  );

  function fetch(dataFeed) {
     feed = dataFeed;
    console.log(feed);
  }

});