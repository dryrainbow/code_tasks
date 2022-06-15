# https://leetcode.com/problems/01-matrix/
# it is O(n) time and also O(n) memory

from collections import deque
from typing import List

class Solution:
    def updateMatrix(self, mat: List[List[int]]) -> List[List[int]]:
        rows, cols = len(mat), len(mat[0])
        visited_dict = {}
        
        dirs = [(0, 1), (1, 0), (-1, 0), (0, -1)]
        for row in range(rows):
            for col in range(cols):
                if mat[row][col] == 0:
                    visited_dict[(row, col)] = 0
        queue = deque(visited_dict.keys())
        while len(queue):
            old_pos = queue.pop()
            for d in dirs:
                r, c = old_pos[0] + d[0], old_pos[1] + d[1]
                if 0 <= r < rows and 0 <= c < cols:
                    coord = (r, c)
                    if coord not in visited_dict or visited_dict[coord] > visited_dict[old_pos] + 1:
                        visited_dict[coord] = visited_dict[old_pos] + 1
                        queue.appendleft(coord)
        for i in range(rows):
            for j in range(cols):
                mat[i][j] = visited_dict[(i, j)]
        return mat

s = Solution()
print(s.updateMatrix([[0,0,0],[0,1,0],[0,0,0]]))