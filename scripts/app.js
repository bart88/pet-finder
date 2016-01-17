require.config({
  baseUrl: "scripts",
  shim: {
    'facebook' : {
      exports: 'FB'
    }
  },
  paths: {
    async : "libs/requirejs-plugins/async",
    depend: "libs/requirejs-plugins/depend",
    font: "libs/requirejs-plugins/font",
    goog: "libs/requirejs-plugins/goog",
    image: "libs/requirejs-plugins/image",
    json: "libs/requirejs-plugins/json",
    markdown_converter: "libs/requirejs-plugins/markdown.converter",
    mdown: "libs/requirejs-plugins/mdown",
    noext: "libs/requirejs-plugins/noext",
    property:  "libs/requirejs-plugins/propertyParser",
    text: "libs/requirejs-plugins/text",
    jquery : "libs/jquery/jquery",
    facebook : "//connect.facebook.net/en_US/all",
    googlemaps: "libs/googlemaps"
  }
});




// parser done
require(['googlemaps!', 'libs/fb', 'jquery', 'base_parser', 'geocoder', 'feed'], function(google, fb, $, base_parser, geocoder) {
  

  var regex = /(\w+\b)(?:\s)(bird|cat|dog(?=s\b|\b))(?:\s|s+)(.*)(?:\#\w+\b\s)([0-9\/]+\b)/gi;
  var groups = ['action', 'type', 'location', 'date'];
  var parser = new base_parser(regex, groups);

  // add in the geocoder.
  console.log(google);

  // get a data feed.

  var item = parser.parse('SIGHTING DOG Munno Para West #Adelaide 9/1/16 ');



});