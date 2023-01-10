// https://leetcode.com/problems/valid-sudoku/

// I don't know how to measure O of this algorithm
// because we definitely know how much iteration have to be and the size of input is fixed
// And memory has also the same situation
/**
 * @param {string[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rowNums = new Set()
    let colNums = new Set()

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let rowNum = board[i][j];
            let colNum = board[j][i]
            if (rowNum !== '.') {
                if (rowNums.has(rowNum)) return false;
                rowNums.add(rowNum);
            }
            if (colNum !== '.') {
                if (colNums.has(colNum)) return false;
                colNums.add(colNum)
            }
        }
        rowNums = new Set();
        colNums = new Set();
    }
    let squareNums = new Set()
    for (let i = 0; i < 3; i++) {
        let rowSquare = i * 3
        for (let j = 0; j < 3; j++) {
            let colSquare = j * 3;

            for (let k = rowSquare; k < rowSquare + 3; k++) {
                for (let l = colSquare; l < colSquare + 3; l++) {
                    let num = board[k][l]
                    if (num !== '.') {
                        if (squareNums.has(num)) return false;
                        squareNums.add(num)
                    }
                }

            }
            squareNums = new Set();
        }
    }
    return true
};

console.log(isValidSudoku([
    ["7",".",".",".","4",".",".",".","."],
    [".",".",".","8","6","5",".",".","."],
    [".","1",".","2",".",".",".",".","."],
    [".",".",".",".",".","9",".",".","."],
    [".",".",".",".","5",".","5",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".","2",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","."]
]))