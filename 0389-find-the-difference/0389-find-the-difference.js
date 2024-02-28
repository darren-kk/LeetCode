/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  const result = [...t]
  
  for (let i = 0; i < s.length; i++) {
    result.splice(result.indexOf(s[i]), 1)
  }
  
  return result[0];    
};