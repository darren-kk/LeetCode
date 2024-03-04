/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
 const stack = []; // Use a stack to keep track of characters
    for (let char of s) {
        if (char === '*') {
            if (stack.length > 0) {
                stack.pop(); // Remove the last non-star character
            }
        } else {
            stack.push(char); // Add non-star characters to the stack
        }
    }
    return stack.join(''); // Convert the stack back into a string
};