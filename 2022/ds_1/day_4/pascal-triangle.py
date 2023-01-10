# https://leetcode.com/problems/pascals-triangle/

class Solution(object):
    def generate(self, numRows):
        result = [[1], [1, 1]]
        if numRows == 1:
            return [[1]]
        
        for i in range(2, numRows + 2):
            row = [1]
            for j in range(1, i):
                row.append(result[i - 1][j - 1] + result[i - 1][j])
            row.append(1)
            result.append(row)
        return result

print(Solution().generate(5))