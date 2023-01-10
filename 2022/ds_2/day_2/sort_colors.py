# https://leetcode.com/problems/sort-colors/

class SolutionOld(object):
    def sortColors(self, nums):
        store = {
            0: 0,
            1: 0,
            2: 0
        }

        for i in nums:
            store[i] += 1
        
        for i in range(len(nums)):
            if i < store[0]:
                nums[i] = 0
            elif i < store[0] + store[1]:
                nums[i] = 1
            else:
                nums[i] = 2

        return nums



class Solution(object):
    def sortColors(self, nums):
        zeroes = cur = 0
        twos = len(nums) - 1

        while cur < twos:
            if nums[cur] == 0:
                nums[zeroes], nums[cur] = nums[cur], nums[zeroes]
                cur += 1
                zeroes += 1
            elif nums[cur] == 2:
                nums[twos], nums[cur] = nums[cur], nums[twos]
                twos -= 1
            else:
                cur += 1
        return nums
