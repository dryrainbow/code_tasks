// https://leetcode.com/problems/reverse-string/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        let temp = s[i]
        s[i] = s[j]
        s[j] = temp;
        i++;
        j--;
    }
};

var reverseStringRecursive = function(s) {
    let swap = (str, left, right) => {
        if (left >= right) {
            return;
        }
        let temp = str[left];
        str[left] = str[right]
        str[right] = temp
        swap(str, left + 1, right - 1)
    }
    swap(s, 0, s.length - 1)
};
let c1 = ['l','o','h']
reverseStringRecursive(c1)
console.log(c1)

let c2 = ['l']
reverseStringRecursive(c2)
console.log(c2)

let c3 = ['l', 'o']
reverseStringRecursive(c3)
console.log(c3)