# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution(object):
    def insertIntoBST(self, root, val):
        cur = root
        while cur:
            if cur.val > val:
                if cur.left == None:
                    cur.left = TreeNode(val)
                    break
                cur = cur.left
            elif cur.val < val:
                if cur.right == None:
                    cur.right = TreeNode(val)
                    break
                cur = cur.right
        return root
        