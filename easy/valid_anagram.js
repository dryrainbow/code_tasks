/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    let counter1 = (new Array(26)).fill(0)
    let counter2 = (new Array(26)).fill(0)

    const charCode = (char) => char.charCodeAt(0) - 'a'.charCodeAt(0)
    for (let i = 0; i < s.length; i++) {
        counter1[charCode(s[i])] += 1;
        counter2[charCode(t[i])] += 1;
    }
    return counter1.every((num, i)=>num === counter2[i])
};
s = "anagram", t = "nagaram"
console.log(isAnagram('anagram', 'nagaram'))