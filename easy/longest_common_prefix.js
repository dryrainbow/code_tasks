/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length == 1) return strs[0]
    if (strs.length == 2) {
        if (strs[0].length == 0 || strs[1].length == 0) {
            return ''
        }
        j = -1
        for (let i = 0; i < strs[0].length; i++) {
            if (strs[0][i] == strs[1][i]) {
                j = i
            } else {
                return strs[0].slice(0, j + 1)
            }
        }
        return strs[0].slice(0, j + 1)
    }
    return longestCommonPrefix([
        longestCommonPrefix(strs.slice(0, Math.floor(strs.length / 2))),
        longestCommonPrefix(strs.slice(Math.floor(strs.length / 2), strs.length))
    ])
};


var longestCommonPrefixVerticalScanning = function (strs) {
    if (strs.length == 1) return strs[0]

    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (i == strs[j].length || strs[0][i] != strs[j][i]) {
                return strs[0].slice(0, i)
            }
        }
    }

    return strs[0]
}

console.log(longestCommonPrefixVerticalScanning(['flowers', 'flow', 'flights']))