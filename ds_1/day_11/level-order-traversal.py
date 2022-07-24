# https://leetcode.com/problems/binary-tree-level-order-traversal/

from site import venv
from typing import List, Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        levels = {}

        def levelOrderReq(root: Optional[TreeNode], level=0):
            if root == None:
                return
            levelOrderReq(root.left, level + 1)
            if level in levels:
                levels[level].append(root.val)
            else:
                levels[level] = [root.val]
            levelOrderReq(root.right, level + 1)
        
        levelOrderReq(root)
        
        res = [0] * len(levels)

        for i in levels:
            res[i] = levels[i]
        return res
