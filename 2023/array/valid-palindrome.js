// https://leetcode.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        let leftCh = s[left].toLowerCase()
        let rightCh = s[right].toLowerCase()
        if (!isLetter(leftCh)) {
            left ++;
            continue;
        }
        if (!isLetter(rightCh)) {
            right --;
            continue;
        }
        if (leftCh !== rightCh) return false;
        left ++;
        right --;
    }
    return true;
};
const isLetter = (ch) => {
    let re = /^[a-z0-9]*$/
    return re.test(ch)
}