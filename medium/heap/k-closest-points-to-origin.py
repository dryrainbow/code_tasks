# https://leetcode.com/problems/k-closest-points-to-origin/
import heapq
import math
from typing import List


class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        heap = []
        for point in points:
            [x, y] = point
            dist = math.sqrt((x ** 2 + y ** 2))
            heapq.heappush(heap, (dist, [x, y]))
        res = heapq.nsmallest(k, heap, lambda obj: obj[0])
        return list(map(lambda dist: dist[1], res))
