# Definition for a binary tree node.
from collections import deque
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def btreeGameWinningMove(self, root: Optional[TreeNode], n: int, x: int) -> bool:
        if root == None:
            return False

        count_in_x_subtree = 0
        stack = deque([root])

        while len(stack):
            el = stack.pop()
            if el == None:
                continue
            if el.val == x:
                count_in_x_subtree = self.get_sub_tree_height(el)
                if n - count_in_x_subtree > count_in_x_subtree:
                    return True
                count_in_left = self.get_sub_tree_height(el.left)
                if n - count_in_left < count_in_left:
                    return True
                count_in_right = self.get_sub_tree_height(el.right)
                if n - count_in_right < count_in_right:
                    return True
                return False

            stack.appendleft(el.left)
            stack.appendleft(el.right)

        return True

    def get_sub_tree_height(self, node: TreeNode):
        if node == None:
            return 0
        stack = deque([node])
        count = 0
        while len(stack): 
            el = stack.pop()
            if el == None:
                continue
            count += 1
            stack.append(el.left)
            stack.append(el.right)
        print(node.val, count)
        return count

