/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const result = {};
  
  strs.forEach((item) => {
    console.log(item.split("").sort().join(""), item);
    const key = item.split("").sort().join("");
    if (!result[key]) {
      result[key] = [item];
    } else {
      result[key].push(item);
    }
  }); 
  
  return Object.values(result);
  
};