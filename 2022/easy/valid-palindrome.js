// https://leetcode.com/problems/valid-palindrome/
// Beautiful but slow
/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    const str = s.toLowerCase().split('').filter(ch=>/[a-zA-Z0-9]/gm.test(ch))
    return str.join('') === str.reverse().join('')
};

// faster
var isPalindromeFaster = function(s) {
    const str = s.toLowerCase().split('').filter(ch=>isValidChar(ch))
    return str.join('') === str.reverse().join('')
};
function isValidChar(ch) {
    const charCode = ch.charCodeAt(0)
    return ('a'.charCodeAt(0) <= charCode && charCode <= 'z'.charCodeAt(0))  || 
           ('0'.charCodeAt(0) <= charCode && charCode <= '9'.charCodeAt(0))
}
