# https://leetcode.com/problems/binary-tree-preorder-traversal/

from ast import List
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        if root == None:
            return []
        res = []
        def traversalReq(root: Optional[TreeNode]):
            if root == None:
                return
            res.append(root.val)
            traversalReq(root.left)
            traversalReq(root.right)

        traversalReq(root)
        return res