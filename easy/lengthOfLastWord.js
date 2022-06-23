// https://leetcode.com/problems/length-of-last-word/submissions/
// just to continue day by day challenge, I'm sorry for it =) 
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    let lastLength = 0;
    let curLength = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] != ' ') {
            curLength += 1
            lastLength = curLength
        } else{
            curLength = 0
        }
    }
    return lastLength
};