# https://leetcode.com/problems/valid-sudoku/submissions/

class Solution(object):
    def isValidSudoku(self, board):
        for i in range(3):
            for j in range(3):
                if not self.valid_nine(board, i * 3, j * 3):
                    print(1)
                    return False
        for i in range(9):
            storeH = set()
            storeV = set()
            for j in range(9):
                num = board[i][j]
                if num != '.':
                    if num in storeH:
                        print(2)
                        return False
                    else:
                        storeH.add(num)
                num = board[j][i]
                if num != '.':
                    if num in storeV:
                        return False
                    else:
                        storeV.add(num)

        return True

    def valid_nine(self, board, x, y):
        store = set()
        for i in range(3):
            for j in range(3):
                num = board[i + x][j + y]
                if num == '.':
                    continue
                if num in store:
                    return False
                else:
                    store.add(num)
        return True


b = [
    [".", ".", "4", ".", ".", ".", "6", "3", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    ["5", ".", ".", ".", ".", ".", ".", "9", "."],
    [".", ".", ".", "5", "6", ".", ".", ".", "."],
    ["4", ".", "3", ".", ".", ".", ".", ".", "1"],
    [".", ".", ".", "7", ".", ".", ".", ".", "."],
    [".", ".", ".", "5", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."]
]

print(Solution().isValidSudoku(b))