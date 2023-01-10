// https://leetcode.com/problems/reverse-linked-list/

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let reversedList = null;
    return reverseReq(reversedList, head)
};

// it was tricky, I need more practicw with recursion
function reverseReq(reversedList, head) {
    if (head === null) {
        return reversedList
    }
    let tmp = head.next
    head.next = reversedList
    return reverseReq(head, tmp)
}

var reverseListInPlace = function(head) {
    if (!head || !head.next) {
        return head
    }
    let lastEl = reverseListInPlace(head.next)
    head.next.next = head;
    head.next = null;

    return reverseListInPlace
};


let node1 = new ListNode(1)
console.assert(reverseList(node1).val === 1)

let node2 = new ListNode(2)
let node3 = new ListNode(3)
node1.next = node2
node2.next = node3

let rev = reverseList(node1)
console.log(rev.val)
console.log(rev.next.val)
console.log(rev.next.next.val)