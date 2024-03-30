/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
      const result = [[1]];
  let count = 1;
  
  while (count < numRows) {
    const lastElement = result[result.length - 1]
    const nextElement = [1];
    
    for (let i = 0; i < lastElement.length; i ++) {
      let sum = lastElement[i]
      
      if (result[i + 1]) {
        sum = lastElement[i] + lastElement[i + 1]  
      }
      
      nextElement.push(sum)  
    }
    
    result.push(nextElement);
    
    count++;
  }
  
  return result;
};