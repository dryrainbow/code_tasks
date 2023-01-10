# https://leetcode.com/problems/invert-binary-tree/
 
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        
        def invertReq(root: Optional[TreeNode]):
            if root == None:
                return
            
            tmp = root.left
            root.left = root.right
            root.right = tmp
            invertReq(root.left)
            invertReq(root.right)
            return

        invertReq(root)

        return root