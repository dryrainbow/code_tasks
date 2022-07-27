# https://leetcode.com/problems/single-number/

class Solution(object):
    def singleNumber(self, nums):
        n = 0
        for i in nums:
            n ^= i
        return n