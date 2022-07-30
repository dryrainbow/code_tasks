# https://leetcode.com/problems/remove-duplicates-from-sorted-array/

from operator import le


class Solution(object):
    def removeDuplicates(self, nums):
        left = 0
        for i in range(1, len(nums)):
            if nums[left] != nums[i]:
                nums[left + 1] = nums[i]
                left += 1
        return left

        