# https://leetcode.com/problems/reshape-the-matrix/

from unittest import result


class Solution(object):
    def matrixReshape(self, mat, r, c):
        if r * c != len(mat) * len(mat[0]):
            return mat

        flat_array = []
        for row in mat:
            for el in row:
                flat_array.append(el)
        result = []
        for row in range(r):
            result.append(flat_array[row * c: row * c + c])
        return result
    

print(Solution().matrixReshape([[1,2,3],[4, 5, 6]], 3, 2))