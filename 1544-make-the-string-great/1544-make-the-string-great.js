/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
     const stack = [];

    for (let char of s) {
        if (stack.length > 0) {
            let lastChar = stack[stack.length - 1];

            if (char.toUpperCase() === lastChar.toUpperCase() && char !== lastChar) {
                stack.pop();
            } else {
                stack.push(char);
            }
        } else {
            stack.push(char);
        }
    }

    return stack.join('');
};