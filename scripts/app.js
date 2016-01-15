require.config({
  baseUrl: "scripts",
  shim: {
    'facebook' : {
      exports: 'FB'
    }
  },
  paths: {
    async : "libs/requirejs-plugins/async",
    jquery : "libs/jquery/jquery.js",
    facebook : "//connect.facebook.net/en_US/all",
  }
});

define('gmaps',['async!http://maps.google.com/maps/api/js?sensor=false'], function() {
  console.log(google);
});


// parser done
require(['libs/fb', 'base_parser', 'geocoder', 'feed'], function(fb,base_parser, geocoder) {


  // hopefull google comes down along with facebook.

  var regex = /(\w+\b)(?:\s)(bird|cat|dog(?=s\b|\b))(?:\s|s+)(.*)(?:\#\w+\b\s)([0-9\/]+\b)/gi;
  var groups = ['action', 'type', 'location', 'date'];
  var parser = new base_parser(regex, groups);

  // add in the geocoder.
  console.log(fb);
  console.log(google);

  // get a data feed.

  var item = parser.parse('SIGHTING DOG Munno Para West #Adelaide 9/1/16 ');



});