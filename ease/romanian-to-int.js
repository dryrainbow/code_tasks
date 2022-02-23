const dict = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
}

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let res = 0
    for(let i = 1; i <= s.length; i++) {
        let prev = dict[s[i-1]]
        let cur = dict[s[i]]
        if (!cur || cur <= prev) {
            res += prev
        } else {
            res += cur - prev;
            i++;
            continue;
        }
    }
    return res
};

console.log(romanToInt('MCMXCIV'))