// https://leetcode.com/problems/merge-two-sorted-lists/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if (list1 === null) return list2
    if (list2 === null) return list1

    let headRes = Object.create(null)
    headRes.next = null
    let res = headRes
    while (list1 && list2) {
        res.next = new ListNode()
        res = res.next
        if (list1.val <= list2.val) {
            res.val = list1.val
            list1 = list1.next

        } else {
            res.val = list2.val
            list2 = list2.next
        }
    }

    if (list1) {
        res.next = list1
    }
    if (list2) {
        res.next = list2
    }
    return headRes.next
};