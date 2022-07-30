// https://leetcode.com/problems/reverse-integer/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let res = 0
    if (x == 0) {
        return 0;
    }
    const digits = getDigitsArr(x)
    console.log(digits)
    if (x < 0) {
        let min = -(2 ** 31)

        for (let i = 0; i < digits.length; i++) {
            const dig = digits[i];
            const mult = 10 ** (digits.length - i - 1)
            min += dig * mult
            if (min > -1) return 0;
            res += dig * mult
        }
        return -res
    } else {
        let max = 2 ** 31 - 1

        for (let i = 0; i < digits.length; i++) {
            const dig = digits[i];
            const mult = 10 ** (digits.length - i - 1)
            max -= dig * mult
            if (max < 0) return 0;
            res += dig * mult
        }
        return res
    }
};

function getDigitsArr(x) {
    if (x < 0) {
        x = -x
    }
    let res = []
    while (x) {
        res.push(x % 10)
        x = Math.floor(x / 10)
    }
    return res
}


console.log(reverse(2 ** 31))