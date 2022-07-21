# https://leetcode.com/problems/implement-queue-using-stacks/submissions/

from collections import deque


class MyQueue(object):

    def __init__(self):
        self.s1 = deque()
        self.s2 = deque()

    def push(self, x):
        while len(self.s1):
            self.s2.append(self.s1.pop())
        self.s1.append(x)
        while len(self.s2):
            self.s1.append(self.s2.pop())


    def pop(self):
        if len (self.s1):
            return self.s1.pop()
        return None

    def peek(self):
        head = self.s1.pop()
        self.s1.append(head)
        return head
        

    def empty(self):
        return len(self.s1) == 0
        
