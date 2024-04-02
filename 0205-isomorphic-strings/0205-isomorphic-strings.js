/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  const mappedS = {};
  const mappedT = {};
  
  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];
    
    if (!mappedS[charS]) {
      mappedS[charS] = charT;
    } else if (mappedS[charS] !== charT) {
      return false;
    }
    
    if (!mappedT[charT]) {
      mappedT[charT] = charS;
    } else if (mappedT[charT] !== charS) {
      return false;
    }
  }
  
  return true;
};