# https://leetcode.com/problems/linked-list-cycle/

class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def hasCycle(self, head):
        if head == None or head.next == None:
            return False

        slow = head
        fast = head.next.next
        while slow != fast:
            slow = slow.next
            if fast and fast.next:
                fast = fast.next.next
            else:
                return False
            
        return True


head = ListNode(1)
head.next = ListNode(2)

print(Solution().hasCycle(head))