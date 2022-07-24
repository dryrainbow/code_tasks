# https://leetcode.com/problems/path-sum/
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        res = False
    
        def hasPathSumReq(root: Optional[TreeNode], sum):
            nonlocal res
            if root == None:
                return
            if root.left == None and root.right == None:
                if targetSum == sum + root.val:
                    res = True
    
            hasPathSumReq(root.left, sum + root.val)
            hasPathSumReq(root.right, sum + root.val)
        
        hasPathSumReq(root, 0)

        return res