/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
     const wealths = accounts.map((item) => {
    return item.reduce((accumulator, currentValue) => accumulator + currentValue)
  });
  
  return Math.max(...wealths);
};