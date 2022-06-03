// https://leetcode.com/problems/group-anagrams/

/** 
 * O(n * k)
 * I think it can be faster
 * 
 * Memory O(n) (because result needs same memory as strs)
*/
function groupAnagrams(strs) {
    const result = [];
    const anagramsStore = {}
    for (let i = 0; i < strs.length; i++) {
        const counter = (new Array(26)).fill(1)
        const word =  strs[i]

        for (let i = 0; i < word.length; i++) {
            counter[getCharCode(word[i])] += 1
        }

        const key = counter.join('')
        if (anagramsStore[key]) {
            anagramsStore[key].push(strs[i])
        } else {
            anagramsStore[key] = [strs[i]]
        }
    }

    for (let i in anagramsStore) {
        result.push(anagramsStore[i])
    }
    return result;
};

function getPrimaryNumber(i) {
    return ((i ** 2) + i + 41)
}

function getCharCode(ch) {
    return ch.charCodeAt(0) - 'a'.charCodeAt(0)
}
