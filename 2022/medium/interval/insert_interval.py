# https://leetcode.com/problems/insert-interval/

from typing import List

class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:    
        temp = []
        for i, cur in enumerate(intervals):
            if cur[0] >= newInterval[0]:
                temp.append(newInterval)
                temp.append(cur)
                temp = [*temp, *intervals[i+1:]]
                break
            else:
                temp.append(cur)
        if len(temp) == len(intervals):
            temp.append(newInterval)

        print(temp)
        result = [temp[0]]
        for i in range(1, len(temp)):
            prev = result[-1]
            cur = temp[i]
            if self.is_overlaping(prev, cur):
                result.pop()
                result.append(self.merge(prev, cur))
            else:
                result.append(temp[i])

        return result
        

    def is_overlaping(self, a, b):
        if (b[0] <= a[1] and b[0] >= a[0]) or (b[0] <= a[0] and b[1] >= a[1]):
            return True
        return False
    
    def merge(self, a, b):
        return [min(a[0], b[0]), max(a[1], b[1])]

s = Solution()

print(s.insert([[2,5],[6,7],[8,9]], [0, 1]))
