// https://leetcode.com/problems/valid-anagram/description/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const storeS = new Array(26).fill(0)
    const storeT = new Array(26).fill(0)
    for(let i = 0; i < s.length; i++) {
        storeS[getCharNumber(s[i])]++;
        storeT[getCharNumber(t[i])]++;
    }
    return !storeS.some((_, i) => storeS[i] !== storeT[i])
};

function getCharNumber(char) {
    return char.charCodeAt(0) - 'a'.charCodeAt(0)
}