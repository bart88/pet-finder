// define a base parser

// a parser should require a regex
// the number of capture groups
// labels for the capture groups
// a common method of parsing the data

define(function(){

  'use strict';

  function Parser(regex, groups) {
    this.regex = regex;
    this.groups = groups;
  }

  /**
   * Parses a string and applies the regex to it.
   *
   * @param string
   */
  function parseMessage(string) {
    this.message = string;
    var object = {};

    var self = this;
    self.groups.forEach(function(value, index) {
      object[value] = getMatches(string, self.regex, (index + 1));
    });

    return object;
  }

  /**
   * Gets all matches from a regex group.
   *
   * @param string
   * @param regex
   * @param index
   * @returns {string}
   */
  function getMatches(string, regex, index) {
    index || (index = 1);
    var matches = '';
    var match;
    while (match = regex.exec(string)) {
      matches = (match[index]);
    }

    return matches;
  }

  Parser.prototype = {};

  Parser.prototype.constructor = Parser;
  Parser.prototype.parse = parseMessage;

  return Parser;

});
