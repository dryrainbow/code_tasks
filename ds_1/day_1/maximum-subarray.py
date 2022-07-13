# https://leetcode.com/problems/maximum-subarray/

from typing import List

class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return nums[0]
        
        maxSum = nums[0]
        curSum = nums[0]

        for num in nums[1:]:
            curSum = max(num, curSum + num)
            if curSum > maxSum:
                maxSum = curSum
            if curSum < 0:
                curSum = 0
        return maxSum

