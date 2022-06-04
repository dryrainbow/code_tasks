// https://leetcode.com/problems/ransom-note/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    const store = Array(26)

    for (let i = 0; i < magazine.length; i++) {
        let chI = getIndex(magazine[i])
        if (store[chI]) {
            store[chI] += 1
        } else {
            store[chI] = 1
        }
    }
    for (let i = 0; i < ransomNote.length; i++) {
        let chI = getIndex(ransomNote[i])
        if (store[chI] && store[chI] > 0) {
            store[chI] -= 1;
        } else {
            return false;
        }
    }
    return true
};
const getIndex = (ch) => ch.charCodeAt(0) - 'a'.charCodeAt(0)

console.log(canConstruct('a', 'b'), false)
console.log(canConstruct('aa', 'ab'), false)
console.log(canConstruct('abc', 'aqboc'), true)
