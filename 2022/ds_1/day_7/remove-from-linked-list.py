# https://leetcode.com/problems/remove-linked-list-elements/

class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution(object):
    def removeElements(self, head, val):
        prev = ListNode(0)
        prev.next = head
        res = prev
        cur = head

        while cur != None:
            if cur.val == val:
                prev.next = cur.next
                cur = cur.next
            else:
                cur = cur.next
        return res.next
        