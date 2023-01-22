// https://leetcode.com/problems/one-edit-distance/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function (s, t) {
    if (s == t) {
        return false
    }
    if (Math.abs(s.length - t.length) > 1) {
        return false
    }

    let operationDone = false;
    let sLength = s.length
    let i = 0, j = 0;
    while (i < sLength) {
        console.log(s[i], t[j])
        if (s[i] == t[j]){
            i++;
            j++;
            continue;
        };
        if (operationDone) return false;
        
        if (s.length > t.length) {
            i++;
        } else if (t.length > s.length) {
            j++;
        } else {
            i++;
            j++;
        }
        operationDone = true
    }
    return t.length - j < 2
};
console.log(isOneEditDistance('aca', 'caca'))
console.log(isOneEditDistance('ab', 'abc'))
console.log(isOneEditDistance('acc', 'abc'))
console.log(isOneEditDistance('ac', 'abc'))
