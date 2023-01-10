// https://leetcode.com/problems/fizz-buzz/

/**
 * @param {number} n
 * @return {string[]}
 */
 var fizzBuzz = function(n) {
    let res = []
    for (let i = 0; i < n; i ++) {
        let pos = i + 1
        let mod3 = pos % 3 == 0
        let mod5 = pos % 5 == 0
        if (mod3 && mod5) {
            res[i] = 'FizzBuzz'
        } else if (mod3) {
            res[i] = 'Fizz'
        } else if (mod5) {
            res[i] = 'Buzz'
        } else{
            res[i] = String(pos)
        }
    }
    return res
};