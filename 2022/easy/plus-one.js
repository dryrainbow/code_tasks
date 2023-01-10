// https://leetcode.com/problems/plus-one/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    let temp = 1
    for (let i = digits.length - 1; i >= 0 ; i--) {
        const cur = digits[i];
        const curDig = cur + temp

        if (curDig >= 10) {
            digits[i] = curDig % 10
            temp = Math.floor(curDig / 10)
        } else {
            digits[i] = curDig
            return digits
        }
    }
    if (temp > 0) {
        digits.unshift(temp)
    }
    return digits
};