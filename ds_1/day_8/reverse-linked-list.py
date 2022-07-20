# https://leetcode.com/problems/reverse-linked-list/

class Solution(object):
    def reverseList(self, head):
        prev = None
        cur = head

        while cur != None:
            tmp = cur.next
            cur.next = prev
            prev = cur
            cur = tmp
        return prev
        

        
