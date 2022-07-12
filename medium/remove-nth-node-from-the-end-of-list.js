/// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let slow = head
    let fast = head
    let slowPrev = null



    let counter = 0;

    while (fast !== null) {
        if (counter == n) {
            slowPrev = slow
            slow = slow.next
        } else {
            counter ++;
        }

        fast = fast.next
    }
    if (slowPrev == null) {
        return head.next
    }
    slowPrev.next = slow.next
    return head
};