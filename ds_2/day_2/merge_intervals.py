# https://leetcode.com/problems/merge-intervals/

class Solution(object):
    def merge(self, intervals):
        intervals.sort(key=lambda x: x[0])
        res = [intervals[0]]
        for i in range(1, len(intervals)):
            if res[-1][1] >= intervals[i][0]:
                res[-1] = [min(res[-1][0], intervals[i][0]), max(intervals[i][1], res[-1][1])]
            else:
                res.append(intervals[i])
        return res

s = Solution()
print(s.merge([[1,4],[2,3]]))