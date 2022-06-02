// https://leetcode.com/problems/group-anagrams/

function groupAnagrams(strs) {
    const result = [];
    const anagramsStore = {}
    for (let i = 0; i < strs.length; i++) {
        const word =  strs[i]
        let prod = BigInt(0)
        for (let ch = 0; ch <word.length; ch++) {
            prod = BigInt(getPrimaryNumber(getCharCode(word[ch])) * prod)
        }
        if (anagramsStore[prod]) {
            anagramsStore[prod].push(strs[i])
        } else {
            anagramsStore[prod] = [strs[i]]
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
    const primaryNumbers = [2, 3, 5, 7, 11, 13, 17, 23, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107]
    return primaryNumbers[ch.charCodeAt(0) - 'a'.charCodeAt(0)]
}
console.log([2, 3, 5, 7, 11, 13, 17, 23, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, ].length)