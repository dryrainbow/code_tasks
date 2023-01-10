# https://leetcode.com/problems/remove-duplicates-from-sorted-list/

class Solution(object):
    def deleteDuplicates(self, head):
        if head == None:
            return head

        h = head

        while head.next != None:
            if head.val == head.next.val:
                head.next = head.next.next
                continue
            head = head.next

        return h