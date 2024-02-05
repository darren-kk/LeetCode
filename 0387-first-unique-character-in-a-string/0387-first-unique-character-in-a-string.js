/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    for (let i = 0; i < s.length; i++) {
    const a = s;
    const arr = a.replace(s[i], "");

    if (!arr.includes(s[i])) {
      return i;
    }
  }
  
  return -1;
};