// https://leetcode.com/problems/length-of-last-word/submissions/
// just to continue day by day challenge, I'm sorry for it =) 
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    let lastLength = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] != ' ') {
            lastLength += 1
        } else{
            if (lastLength !== 0) return lastLength;
            curLength = 0
        }
    }
    return lastLength
};