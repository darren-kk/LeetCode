/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
      const obj = {};
  const result = [];

  nums.forEach((item, index) => {
    if (obj[item]) {
      obj[item] = obj[item] + 1
    } else {
      obj[item] = 1; 
    }
  });
  console.log(obj)
  
  for (const key in obj) {
    if (obj[key] === 1) {
      result.push(Number(key));
    }  
  }
  
  return result;
};