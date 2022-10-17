//fetch a word from the wordlist
//for a future iteration
//using the results of the random number generator
/*
 *  @param {integer} min
 *  @param {integer} max
 * @returns random line (word) from text file between line min and max (both inclusive)
 *
 * @param {integer} min
 * @param {integer} max
 * @returns random integer from min to max (both inclusive)
 */
function getRandNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function fetchWord(min, max) {
  var fs = require("fs");
  var array = fs.readFileSync("filename.txt").toString().split("\n");
  return array[getRandNum(min, max)];
}

export default fetchWord;
