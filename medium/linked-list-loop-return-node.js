// https://leetcode.com/problems/linked-list-cycle-ii/

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
var detectCycle = function (head) {
    let slowPointer = head
    let store = new Set()

    while (slowPointer) {
        if (store.has(slowPointer)) {
            return slowPointer
        }
        store.add(slowPointer)
        slowPointer = slowPointer.next
    }

    return null
};
let head = new ListNode(3)
head.next = new ListNode(2)
head.next.next = new ListNode(0)
head.next.next.next = new ListNode(-4)
head.next.next.next.next = new ListNode(5)
head.next.next.next.next.next = head.next.next.next

console.log(detectCycle(head))