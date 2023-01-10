# https://leetcode.com/problems/3sum/


#Input: nums = [-1,0,1,2,-1,-4]
# Output: [[-1,-1,2],[-1,0,1]]

from typing import List


    
class Solution:
    def threeSum(self, nums):
        sums = []

        if len(nums) < 3:
            return []
        nums.sort()

        if nums[0] > 0 or nums[-1] < 0:
            return []

        for i, val in enumerate(nums):
            if val <= 0:
                sums.append((i,))
            else:
                break
        
        for i, sum_arr in enumerate(sums):
            for j in range(sum_arr[0] + 1, len(nums)):
                second_num = nums[j]
                sum = nums[sum_arr[0]] + second_num
                if sum > 0:
                    break
                print(sum)
                third_num_index = self.find(nums[j + 1:], -sum)
                if third_num_index != -1:
                    sums[i] = sums[i] + (j, third_num_index + j + 1)
                    break
        result = set()
        for result_sum in sums:
            if len(result_sum) < 3:
                continue
            result.add(result_sum)
        
        return [list(x) for x in list(result)]

    def find(self, arr, val):
        left, right = 0, len(arr) - 1
        while left <= right:
            mid = (left + right) // 2
            if arr[mid] == val:
                return mid
            elif arr[mid] > val:
                right = mid - 1
            else:
                left = mid + 1
        return -1

s = Solution()
a = [-2,0,1,1,2]
print(s.threeSum(a))
