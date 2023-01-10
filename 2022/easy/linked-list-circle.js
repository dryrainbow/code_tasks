// https://leetcode.com/problems/linked-list-cycle/

function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    let fastPointer = head
    let slowPointer = head

    while (fastPointer && slowPointer) {
        slowPointer = slowPointer.next
        if (fastPointer.next) {
            fastPointer = fastPointer.next.next
        } else {
            return false
        }
        if (slowPointer == fastPointer) {
            return true
        }
    }

    return false
};