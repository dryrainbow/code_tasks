# https://leetcode.com/problems/merge-intervals/

from typing import List

class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        sorted_interval = list(sorted(intervals, key=lambda a: a[0]))
        result = [sorted_interval[0]]
    
        for i in range(1, len(sorted_interval)):
            prev = result[-1]
            cur = sorted_interval[i]
            if self.is_overlaping(prev, cur):
                result[-1] = self.merge_intervals(prev, cur)
            else:
                result.append(cur)

        return result
    
    def merge_intervals(self, a: List[int], b: List[int]) -> bool:
        return [min(a[0], b[0]), max(a[1], b[1])]


    def is_overlaping(self, a: List[int], b: List[int]) -> bool:
        return a[1] >= b[0] and a[1] <= b[1] or a[0] <= b[0] and a[1] >= b[1]


s = Solution()

print(s.merge([[1,4],[2,3]]))