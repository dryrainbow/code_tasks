# https://leetcode.com/problems/same-tree/

# Definition for a binary tree node.
from collections import deque
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        stack1 = deque([p])
        stack2 = deque([q])
        while len(stack1) and len(stack2):
            p1, q1 = stack1.pop(), stack2.pop()
            if p1 == None and p1 != q1:
                return False
            if q1 == None and q1 != p1:
                return False
            if p1.val != q1.val:
                return False
            stack1.appendleft(p1.left)
            stack1.appendleft(p1.right)
            stack2.appendleft(q1.left)
            stack2.appendleft(q1.right)
        return len(stack1) == len(stack2) == 0

        