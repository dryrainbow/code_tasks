// https://leetcode.com/problems/permutation-in-string/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const store = {}
    subStringStore = {}

    for (let i = 0; i < s1.length; i++) {
        if (store[s1[i]]) {
            store[s1[i]]++;
        } else {
            store[s1[i]] = 1
        }
    }
    let left = 0
    for (let i = 0; i < s2.length; i++) {
        const ch = s2[i];
        if (!store[ch]) {
            left = i + 1
            subStringStore = {}
            continue
        }
        if (subStringStore[ch] != undefined && store[ch] == subStringStore[ch]) {
            while (s2[left] != ch){
                subStringStore[s2[left]]--;
                left ++;
            };
            left ++;
            continue;
        }
        subStringStore[ch] = subStringStore[ch] ?subStringStore[ch] + 1: 1
        if (i - left + 1 === s1.length) {
            return true
        }
    }
    return false
};

console.log(checkInclusion('hello', 'ooolleoooleh'))