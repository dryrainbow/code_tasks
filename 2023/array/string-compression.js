// https://leetcode.com/problems/string-compression/

const getDigitsCount = (num) => {
    let count = 1;
    let decadeDiv = Math.floor(num / 10)
    while (decadeDiv != 0) {
        count++;
        decadeDiv = Math.floor(decadeDiv / 10)
    }
    return count
}
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let readPointer = 0;
    let writePointer = 0;
    let currentChar = chars[0];
    let currentCharCount = 1;

    for (let i = 1; i <= chars.length; i++) {
        if (currentChar == chars[i]) {
            readPointer++;
            currentCharCount++;
        } else {
            chars[writePointer] = currentChar;
            writePointer++;
            if (currentCharCount > 1){
                const currentCharArray = currentCharCount.toString().split('')
                currentCharArray.forEach(ch => {
                    chars[writePointer] = ch;
                    writePointer++;
                })
            }
            currentChar = chars[i]
            currentCharCount = 1;
        }
    }
    return writePointer
};

console.log(compress(["a","a","b","b","c","c","c"]))