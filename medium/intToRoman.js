
const symbols = [
    [1, "I"],
    [4, "IV"],
    [5, "V"],
    [9, "IX"],
    [10, "X"],
    [40, "XL"],
    [50, "L"],
    [90, "XC"],
    [100, "C"],
    [400, "CD"],
    [500, "D"],
    [900, "DM"],
    [1000, "M"],
].reverse()
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    let res = ''
    for (let obj of symbols) {
        let count = Math.floor(num / obj[0])
        res += multiple(obj[1], count)
        num %= obj[0]
    }

    return res
}

function multiple(char, times) {
    let res = ''
    for (let i = 0; i < times; i ++) {
        res += char
    }
    return res
}