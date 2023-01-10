# Definition for a binary tree node.

from typing import List, Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        res1 = self.inorderTraversal(root.left)
        res2 = self.inorderTraversal(root.right, True)
        if len(res1) != len(res2):
            return False
        for x, y in zip(res1, res2):
            if x != y:
                return False
        return True

    def inorderTraversal(self, root: Optional[TreeNode], rightOrder = False) -> List[int]:
        if root == None:
            return []
        res = []

        def inorderReq(root: Optional[TreeNode]):
            if root == None:
                res.append(None)
                return
            if rightOrder:   
                res.append(root.val)
                inorderReq(root.right)
                inorderReq(root.left)
            else:
                res.append(root.val)
                inorderReq(root.left)
                inorderReq(root.right)

        inorderReq(root)
        return res