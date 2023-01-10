# https://leetcode.com/problems/two-sum/

class Solution:
    def twoSum(self, nums, target):
        tempNums = sorted([(num, i) for i, num in enumerate(nums)], key=lambda a: a[0])
        left = 0
        right = len(tempNums) - 1
        while left < right:
            sum = tempNums[left][0] + tempNums[right][0]
            if sum == target:
                return [tempNums[left][1], tempNums[right][1]]
            if sum < target:
                left += 1
            else:
                right -= 1
        return -1

            

print(Solution().twoSum([2,1,4,3], 4))