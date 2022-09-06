/**
 * Definition for singly-linked list.
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1) return list2;
    if (!list2) return list1;
    const res = new ListNode()
    let head = res;
    let l1: ListNode | null = list1, l2: ListNode | null = list2;
    while (l1 && l2) {
        if (l1.val > l2.val) {
            head.next = l2
            l2 = l2.next
        } else {
            head.next = l1
            l1 = l1.next
        }
        head = head.next;
    }
    if (l1) head.next = l1;
    if (l2) head.next = l2;
    return res.next;
};