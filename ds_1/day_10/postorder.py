# https://leetcode.com/problems/binary-tree-postorder-traversal/

from typing import List, Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        if root == None:
            return []

        def postorderReq(root: Optional[TreeNode]):
            if root == None:
                return
            postorderReq(root.left)
            postorderReq(root.right)
            print(root.val)

        postorderReq(root)
        return res
