/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
      if (k === 0) {
    return code.map(() => 0);
  }
  
  const length = code.length;

  const result = code.map((item, index) => {
    let sum = 0;
    let count = 0;
    let a = index + 1;

    if (k < 0) {
      a = index - 1;
    }

    while (count !== k) {
      if (k < 0) {
        if (a < 0) {
          a = length - 1;
        }

        sum = sum + code[a];
        count--;
        a--;
      } else {
        if (a === code.length) {
          a = 0;
        }

        sum = sum + code[a];
        count++;
        a++;
      }
    }

    return sum;
  });

  return result;

};