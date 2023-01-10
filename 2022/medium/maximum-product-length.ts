// https://leetcode.com/problems/maximum-product-of-word-lengths/
// Too slow for leetcode, but work
function maxProduct(words: string[]): number {
    let max = 0;
    words = words.sort((a, b) => b.length - a.length)
    for (let i = 1; i < words.length; i++) {
        l1: for (let j = 0; j < i; j++) {

            let curWord = words[i]
            let prevWord = words[j]
            for (let k = 0; k < curWord.length; k++) {
                if (prevWord.indexOf(curWord[k]) !== -1) continue l1;
            }
            max = Math.max(curWord.length * prevWord.length, max)
        }
    }

    return max
};
