// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length <= 1) return s.length
    let left = 0;
    let right = 1;
    let longestCount = 1;

    let elements = {
        [s[left]]: true
    }
    while(right < s.length) {
        if (elements[s[right]]) {
            delete elements[s[left]];
            ++left;
        } else {
            if ((right - left) + 1 > longestCount) {
                longestCount = (right - left) + 1
            }
            elements[s[right]] = true
            right++
        }
    }

    return longestCount
};

console.log(lengthOfLongestSubstring('abcd'), 4)
console.log(lengthOfLongestSubstring('aabbcc'), 2)
console.log(lengthOfLongestSubstring(''), 0)