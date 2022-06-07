// https://leetcode.com/problems/set-matrix-zeroes/
// Did it in place without additional space
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let rowsWithZeros = {}
    let columnsWithZeros = {}

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j ++) {
            if (matrix[i][j] === 0) {
                setTempValues(matrix, i, j)
            }
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j ++) {
            if (matrix[i][j] === Number.MAX_SAFE_INTEGER) {
                matrix[i][j] = 0
            }
        }
    }
};
function setTempValues(matrix, row, columns) {
    for (let i = 0; i < matrix[row].length; i ++) {
        if (matrix[row][i] !== 0) {
            matrix[row][i] = Number.MAX_SAFE_INTEGER;
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][columns] !== 0) {
            matrix[i][columns] = Number.MAX_SAFE_INTEGER;
        }
    }
}