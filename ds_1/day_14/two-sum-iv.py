# https://leetcode.com/problems/two-sum-iv-input-is-a-bst/

class Solution(object):
    def findTarget(self, root, k):
        arr = []

        def inorderReq(node):
            if node == None:
                return

            inorderReq(node.left)
            arr.append(node.val)
            inorderReq(node.right)
        inorderReq(root)
        
        left = 0
        right = len(arr) - 1
        while left < right:
            s = arr[left] + arr[right]
            if s > k:
                right -= 1
            elif s < k:
                left += 1
            else:
                return True
        return False


                    