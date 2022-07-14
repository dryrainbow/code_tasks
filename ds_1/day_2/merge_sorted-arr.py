# https://leetcode.com/problems/merge-sorted-array/

class Solution(object):
    def merge(self, nums1, m, nums2, n):
        if m == 0:
            nums1[0] = nums2[0]
        if n == 0:
            return
        p1 = m - 1
        p2 = n - 1
        p3 = len(nums1) - 1

        while p1 >= 0 and p2 >= 0:
            if nums1[p1] > nums2[p2]:
                nums1[p3] = nums1[p1]
                p1 -= 1
            else:
                nums1[p3] = nums2[p2]
                p2 -= 1
            p3 -= 1
            print(p1, p2, p3)
        while p1 >= 0:
            nums1[p3] = nums1[p1]
            p1 -= 1
            p3 -= 1
        while p2 >= 0:
            nums1[p3] = nums2[p2]
            p2 -= 1
            p3 -= 1
n = [4,5,6,0,0,0]
Solution().merge(
n,
3,
[1,2,3],
3,
)
print(n)
