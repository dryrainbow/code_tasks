// https://leetcode.com/problems/pascals-triangle-ii/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    if (rowIndex == 0) {
        return [1]
    }
    if (rowIndex == 1) {
        return [1, 1]
    }

    const prevRow = getRow(rowIndex - 1)
    const res = [1]
    for (let i = 1; i < rowIndex; i++) {
        res.push(prevRow[i - 1] + prevRow[i])
    }
    res.push(1)
    return res;
};

console.log(getRow(2))