# https://leetcode.com/problems/majority-element/

from typing import List

class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        dict = {}
        for i in nums:
            dict[i] = dict[i] + 1 if i in dict else 1
        max = (nums[0], dict[nums[0]])
        for k in dict:
            if dict[k] > max[1]:
                max = (k, dict[k])
        return max[0]