// https://leetcode.com/problems/palindrome-linked-list/solution/
// This solution is O(n) by space and memory, but I know how to make it effectively by memroy
// just rewrite reverse function with cycle (not recursion) 

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let slow = head;
    let fast = head;

    if (head == null || head.next == null) {
        return true
    }
    
    while(fast !== null) {
        slow = slow.next
        fast = fast.next? fast.next.next: fast.next
    }
    let reversedLeftPart = reverseList(slow)

    let start = head
    while(reversedLeftPart != null && start != null) {
        if (reversedLeftPart.val !== start.val) {
            return false
        }
        reversedLeftPart = reversedLeftPart.next
        start = start.next
    }

    return true
};

function reverseList(head) {
    if (!head || !head.next) return head;
    const last = reverseList(head.next)
    head.next.next = head
    head.next = null
    return last
} 

// 1, 2, 3, 4, 4, 3, 2, 1
// 1, 2, 3, 4, 5, 4, 3, 2, 1