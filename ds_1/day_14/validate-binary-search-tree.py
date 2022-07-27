# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def isValidBST(self, root):
        arr = []

        def inorderReq(node):
            if node == None:
                return
            inorderReq(node.left)
            arr.append(node.val)
            inorderReq(node.right)
        inorderReq(root)

        for i in range(1, len(arr)):
            if arr[i - 1] >= arr[i]:
                return False