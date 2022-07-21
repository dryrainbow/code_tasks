# https://leetcode.com/problems/valid-parentheses/


from collections import deque


class Solution(object):
    def isValid(self, s):
        stack = deque()

        d = {
            '(': ')',
            '{': '}',
            '[': ']'
        }

        for i in s:
            if i in d:
                stack.append(i)
            else:
                if len(stack) == 0:
                    return False
                p = stack.pop()
                if i != d[p]:
                    return False

        return len(stack) == 0