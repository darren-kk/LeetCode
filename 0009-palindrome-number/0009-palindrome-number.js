/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const arr = x.toString().split("");
  const reversedX = Number(arr.reverse().join(""));
  
  if (x === reversedX) {
    return true;
  }
  
  return false
};