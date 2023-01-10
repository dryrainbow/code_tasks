# https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
# also recursion
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    memo = {}

    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        left_p = self.is_element_in_sub_tree(root.left, p)
        left_q = self.is_element_in_sub_tree(root.left, q)
        right_p = self.is_element_in_sub_tree(root.right, p)
        right_q = self.is_element_in_sub_tree(root.right, q)
        
        if left_p and left_q:
            return self.lowestCommonAncestor(root.left, p, q)
        if right_p and right_q:
            return self.lowestCommonAncestor(root.right, p, q)
        return root

    def is_element_in_sub_tree(self, root: 'TreeNode',  node: 'TreeNode') -> bool:
        if root == None:
            return False
        
        if root.val == node.val:
            return True
        
        left = self.is_element_in_sub_tree(root.left, node)
        right = self.is_element_in_sub_tree(root.right, node)

        return left or right
    

