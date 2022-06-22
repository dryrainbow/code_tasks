# https://leetcode.com/problems/add-two-numbers/

from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        result = ListNode()
        cur_res = result

        sum = 0
        
        l1_head = l1
        l2_head = l2

        while l1_head or l2_head:
            cur_res.next = ListNode()
            cur_res = cur_res.next
            if l1_head != None:
                sum += l1_head.val
                l1_head = l1_head.next

            if l2_head != None: 
                sum += l2_head.val
                l2_head = l2_head.next

            cur_res.val = sum % 10
            sum = 1 if sum > 9 else 0

        if sum != 0:
            cur_res.next = ListNode(sum)

        return result.next
            

        