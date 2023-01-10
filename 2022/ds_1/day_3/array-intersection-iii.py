class Solution(object):
    def intersect(self, nums1, nums2):
        if len(nums1) == 0 or len(nums2) == 0:
            return []

        nums1.sort()
        nums2.sort()
        result = []

        p1 = 0
        p2 = 0

        

        while p1 < len(nums1) and p2 < len(nums2):
            if nums1[p1] == nums2[p2]:
                result.append(nums1[p1])
                p1 += 1
                p2 += 1
            elif nums1[p1] > nums2[p2]:
                p2 += 1
            else:
                p1 += 1

        return result