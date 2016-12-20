'use strict';

const regex = /(\w+\b)(?:\s)(bird|cat|dog(?=s\b|\b))(?:\s|s+)(.*)(?:\#\w+\b\s)([0-9\/]+\b)/gi;
const groups = ['action', 'type', 'location', 'date'];

/**
 * Parses a string and applies the regex to it.
 *
 * @param string
 */
function parseMessage(string) {
  this.message = string;
  var object = {};

  groups.forEach(function(value, index) {
    object[value] = getMatches(string, regex, (index + 1)).trim();
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



module.exports = {
  parse: parseMessage
};
