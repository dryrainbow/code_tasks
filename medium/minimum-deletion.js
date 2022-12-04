// https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/
// I'm not sure about time complexity 
// It's definately O(n) but than I iterate through 26 elements and do in the worst case 26 - i - 1 iteration every time
// So, I think it's still O(n)
/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    let store = new Array(26).fill(0)

    for (let i = 0; i < s.length; i++) {
        store[getCharIndex(s[i])]++;
    }
    
    let result = 0
    store = store.filter(count => count !== 0).sort((a, b) => Number(a) - Number(b))
    for(let i = store.length - 1; i > 0; i--) {
        console.log(store)
        let j = i
        if (store[j] === store[j - 1] && store[j] != 0) {
            j--;
            store[j]--;
            result ++;
            while(store[j] === store[j - 1] - 1) {
                store[j - 1]--;
                result ++;
                j--;
            }
        }
        
    }
    return result
};

/**
 * 
 * @param {string} char 
 * @returns 
 */
function getCharIndex(char) {
    return char.charCodeAt(0) - 'a'.charCodeAt(0)
}


console.log(minDeletions("bogoidmdkbllehemdkfofcieckdoffiokflejeeffhihfbbfffboklaoochielobmcekaeoajicke"))