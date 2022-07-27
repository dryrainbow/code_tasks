# https://leetcode.com/problems/3sum/solution/


class Solution(object):
    def threeSum(self, nums):
        store = []

        nums.sort()

        for i in range(len(nums)):
            if nums[i] > 0:
                break
            if i == 0 or nums[i] != nums[i - 1]:
                sums = self.find_eq_sum(-nums[i], i + 1, nums)
                for els in sums:
                    store.append([nums[i]] + els)
                
        return store

    def find_eq_sum(self, x, from_pos, nums):
        res = []
        left, right = from_pos, len(nums) - 1

        while left < right:
            s = nums[left] + nums[right]
            if x == s:
                res.append([nums[left], nums[right]])
                left += 1
            elif s > x:
                right -= 1
            else:
                left += 1
        return res
    
s = Solution()

print(s.threeSum([-2,0,1,1,2]))