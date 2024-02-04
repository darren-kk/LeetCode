/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
  let result1 = ""
  let result2 = ""

  word1.forEach((item) => {
    result1 = result1 + item;
  });
  
  word2.forEach((item) => {
    result2 = result2 + item;
  });
  
  if (result1 === result2) {
    return true;
  }
  
  return false;
};