/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [];
    
  function recursive(start, currentSubset) {
    result.push(currentSubset.slice());

    for (let i = start; i < nums.length; i++) {
        currentSubset.push(nums[i]);
        recursive(i + 1, currentSubset);
        currentSubset.pop();
    }
  }

  recursive(0, []);

  return result;
};