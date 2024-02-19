/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n === 1) return true;
  
  let result = 1;
  
  while(result < n) {
    result = result * 2;
    
    if (result === n) {
      return true;
    }
  }
  
  return false;
};