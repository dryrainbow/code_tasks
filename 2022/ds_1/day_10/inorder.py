# https://leetcode.com/problems/binary-tree-inorder-traversal/

from typing import Optional, List

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        if root == None:
            return []
        res = []

        def inorderReq(root: Optional[TreeNode]):
            if root == None:
                return
            inorderReq(root.left)
            res.append(root.val)
            inorderReq(root.right)

        inorderReq(root)
        return res