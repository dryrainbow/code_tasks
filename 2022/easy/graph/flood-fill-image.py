# https://leetcode.com/problems/flood-fill/

from collections import deque
from typing import List

class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, color: int) -> List[List[int]]:
        directions = [(-1, 0), (0, -1), (0, 1), (1, 0)]
        visited = set()
        queue = deque([(sr, sc)])
        base_color = image[sr][sc]
        rows, cols = len(image), len(image[0])

        while len(queue):
            cur_col = queue.pop()
            if cur_col in visited:
                continue
            visited.add(cur_col)
            if image[cur_col[0]][cur_col[1]] == base_color:
                image[cur_col[0]][cur_col[1]] = color
                for d in directions:
                    i, j = cur_col[0] + d[0], cur_col[1] + d[1]
                    if 0 <= i < rows and 0 <= j <cols:
                        queue.append((i, j))
        return image
        
        

s = Solution()
print(s.floodFill(image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2))