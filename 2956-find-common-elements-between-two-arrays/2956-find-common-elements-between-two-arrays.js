/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
    let num1 = 0;
  let num2 = 0;
  
  nums1.forEach((item) => {
    if (nums2.includes(item)) {
      num1++
    }
  });
  
  nums2.forEach((item) => {
    if (nums1.includes(item)) {
      num2++
    }
  });
    
  return [num1, num2];
};