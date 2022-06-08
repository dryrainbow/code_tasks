// https://leetcode.com/problems/reorder-list/

// It is working but too slow!
// O(n)
// O(n)
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var reorderList = function(head) {
    if (head.next === null || head.next.next === null) {
        return;
    }
    let center = getCenterNode(head)
    let reversedHalf = reverseList(center.next)
    center.next = null
    let lastNode = head
    let tempHead = head;
    let tempReverseHead = reversedHalf;
    while (reversedHalf !== null && head !== null) {
        tempHead = head.next
        head.next = reversedHalf
        tempReverseHead = reversedHalf.next
        reversedHalf.next = tempHead;
        head = tempHead;
        reversedHalf = tempReverseHead
    }
    // console.log(head, reversedHalf)
    // head.next = null
};

function getCenterNode(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        console.log(slow.val, fast.val)
        slow = slow.next
        fast = fast.next.next
    }
    return slow;
}

function reverseList(head) {
    let tail = null;
    let tempHead = null;
    while (head !== null) {
        tempHead = head.next;
        head.next = tail;
        tail = head;
        head = tempHead;
    }
    return tail
}

let node1 = new ListNode(1)
let node2 = new ListNode(2)
let node3 = new ListNode(3)
let node4 = new ListNode(4)
let node5 = new ListNode(5)
let node6 = new ListNode(6)
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node6
// console.log(getCenterNode(node1))
reorderList(node1)
console.log(node1)
console.log(node1.next)
console.log(node1.next.next)
console.log(node1.next.next.next)
console.log(node1.next.next.next.next)
console.log(node1.next.next.next.next.next)