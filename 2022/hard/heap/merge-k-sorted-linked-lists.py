# https://leetcode.com/problems/k-closest-points-to-origin/


from collections import deque
import heapq
from random import random
from typing import List, Optional

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        if len(lists) == 0:
            return None
        
        heap = []
        stack = deque(lists)
        while len(stack):
            node = stack.pop()
            if node == None:
                continue
            # I'm sorry for this
            heapq.heappush(heap, (node.val, random(), node))
            if node.next:   
                stack.appendleft(node.next)
        if len(heap) == 0:
            return None
        head = heapq.heappop(heap)[2]
        cur = head
        while len(heap):
            cur.next = heapq.heappop(heap)[2]
            cur = cur.next
        cur.next = None
        return head