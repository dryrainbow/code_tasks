# https://leetcode.com/problems/merge-sorted-array/

from typing import List


class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        for n2_index in range(n):
            n1_index = n2_index + m
            nums1[n1_index] = nums2[n2_index]
            for i in range(n2_index + m, 0, -1):
                if nums1[i] < nums1[i - 1]:
                    tmp = nums1[i - 1]
                    nums1[i - 1] = nums1[i]
                    nums1[i] = tmp