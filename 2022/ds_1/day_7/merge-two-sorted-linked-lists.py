# https://leetcode.com/problems/merge-two-sorted-lists/

class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution(object):
    def mergeTwoLists(self, list1, list2):
        if not list1:
            return list2
        if not list2:
            return list1
        sortedHead = None
        current = None

        while list1 != None or list2 != None:
            cur = None
            if list1.val > list2.val:
                cur = list2
                list2 = list2.next
            else:
                cur = list1
                list1 = list1.next
            if sortedHead == None:
                sortedHead = cur
                current = cur
            else:
                current.next = cur
                current = cur

        if list1:
            current.next = list1
        if list2:
            current.next = list2

        return sortedHead
            
        