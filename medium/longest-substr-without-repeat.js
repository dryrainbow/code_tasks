// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// too slow!!!!! read Knuth–Morris–Pratt algorithm
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let length = 0
    let tempLength = 0
    let charStore = {}

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];

        if (ch in charStore) {
            let oldIndex = charStore[ch]
            let tempStore = {
                [ch]: i
            }
            tempLength = i - oldIndex
            for (let key in charStore) {
                if (charStore[key] > oldIndex) {
                    tempStore[key] = charStore[key]
                }
            }
            charStore = tempStore
        } else {
            charStore[ch] = i
            tempLength++;
            length = Math.max(length, tempLength)
        }
    }
    return length
};

console.log(lengthOfLongestSubstring("abcabcbb"), 3)
console.log(lengthOfLongestSubstring("bbbbb"), 1)
console.log(lengthOfLongestSubstring("pwwkew"), 3)
console.log(lengthOfLongestSubstring("aab"), 2)
console.log(lengthOfLongestSubstring(""), 0)
console.log(lengthOfLongestSubstring("ababab"), 2)
console.log(lengthOfLongestSubstring("dvdf"), 3)