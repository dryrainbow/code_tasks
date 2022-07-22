# https://leetcode.com/problems/majority-element/

class Solution(object):
    def majorityElement(self, nums):
        max_count = 1
        count = 1
        max_index = 0
        prev = nums[0]
        nums.sort()

        for i in range(1, len(nums)):
            num = nums[i]
            if prev == num:
                count += 1
            else:
                count = 1
            if count > max_count:
                max_count = count
                max_index = i

            prev = num
        return nums[max_index]
        
print(Solution().majorityElement([6,5,5]))