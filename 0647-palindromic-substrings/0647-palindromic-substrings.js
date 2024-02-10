/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
        let count = 0;

    // Define expandAroundCenter function inside countSubstrings
    function expandAroundCenter(left, right) {
        let count = 0;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            count++; // Found a palindrome
            left--; // Expand to the left
            right++; // Expand to the right
        }
        return count;
    }
    
    for (let i = 0; i < s.length; i++) {
        // Check for odd-length palindromes
        count += expandAroundCenter(i, i);
        // Check for even-length palindromes
        count += expandAroundCenter(i, i + 1);
    }
    
    return count;
};