/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
stones.sort((a, b) => b - a);
  
  while (stones.length > 1) {
    let first = stones.shift();
    let second = stones.shift();
    
    if (first !== second) {
      let newStone = first - second;
      let index = stones.findIndex(s => s < newStone);
      if (index === -1) {
        stones.push(newStone);
      } else {
        stones.splice(index, 0, newStone);
      }
    }
  }
  
  return stones.length === 1 ? stones[0] : 0;
};