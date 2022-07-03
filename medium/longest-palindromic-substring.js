// https://leetcode.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length === 1) {
        return s
    }
    if (s.length === 2) {
        return isPalindrome(s).length ? s: s[0]
    }
    let maxRight = s.length - 1
    /**
     * 
     * @param {string} prev 
     * @param {number} i 
     */
    function longestPalindromeReq(i, left, right) {
        if (left >= 0 || right <= maxRight) {
            left = i, Math.max(0, left)
            right =  Math.min(maxRight, right)
        } else {
            return ''
        }
        if (left < 0 || right > maxRight) {
            return ''
        }
        const tempStr1 = s.slice(left, right + 1)
        if (isPalindrome(tempStr1).length) {
            const next = longestPalindromeReq(i, left - 1, right + 1)
            return maxForString(tempStr1, next)
        } else {
            const tempStr2 = isPalindrome(s.slice(i, right + 1))
            const tempStr3 = isPalindrome(s.slice(left, i + 1))
            return maxForString(tempStr2, tempStr3)
        }
    }
    let max = ''
    for (let i = 0; i < s.length; i++) {
        let cur = longestPalindromeReq(i, 0, 0)
        max = maxForString(max, cur)
    }
    return max
};
/**
 * @param {string} s 
 */
const isPalindrome = (s) => {
    if (s[0] !== s[s.length - 1]) {
        return ''
    }
    if (s === s.split('').reverse().join('')) {
        return s
    }
    return ''
}

/**
 * 
 * @param  {...string} strs 
 */
const maxForString = (...strs) => {
    let max = ''
    strs.forEach(s => {
        if (max.length < s.length) {
            max = s
        }
    })
    return max
}


console.log(longestPalindrome("aaaa"), "aaaa")
console.log(longestPalindrome("cbbd"), 'bb')