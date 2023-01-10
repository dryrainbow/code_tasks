# https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

class TreeNode(object):
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution(object):
    def lowestCommonAncestor(self, root, p, q):
        head = root
        lowest_common = root

        if root == p or root == q:
            return root

        pv = p.val
        qv = q.val

        while True:
            if p == head or q == head:
                return lowest_common

            pnext = head.left if head.val > pv else head.right
            qnext = head.left if head.val > qv else head.right

            if pnext != qnext:
                return lowest_common
            
            lowest_common = pnext

            head = pnext