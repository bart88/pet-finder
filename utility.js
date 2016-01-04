/**
 * Retrieve nth capturing group for a match.
 *
 * @param string
 * @param regex
 * @param index
 * @returns {String}
 */
function getMatches(string, regex, index) {
  index || (index = 1);
  var matches;
  var match;
  while (match = regex.exec(string)) {
    matches = (match[index]);
  }
  return matches;
}
