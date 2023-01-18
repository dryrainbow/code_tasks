// https://leetcode.com/problems/palindromic-substrings/description/
/**
* @param {string} s
* @return {number}
*/
var countSubstrings = function(s) {
    if (s.length == 0) return 0;
    if (s.length == 1) return 1;

    let right = 1
    let count = 1

    while (right < s.length) {
        let left = right;

        while (left >= 0) {
            if (isAnagram(s, left, right)) {
                count++;
            }
            left--;
        } 
        right++;
    }
    return count
};

const isAnagram = (str, left, right) => {
    if (left == right) return true
    while (left < right) {
        if (str[left] != str[right]) return false
        left++
        right--
    }
    return true
}

console.log(countSubstrings('aba'))
console.log(countSubstrings('abaa'))