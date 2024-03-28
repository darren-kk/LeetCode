/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
      const movesArray = [...moves];
  const position = [0, 0];
  
  movesArray.forEach((item) => {
    if (item === "U") {
      position[1]++;
    }
    
    if (item === "D") {
      position[1]--;
    }
    
    if (item === "L") {
      position[0]--;
    }
    
    if (item === "R") {
      position[0]++;
    }
  });
  
  return position.join("") === "00";
};