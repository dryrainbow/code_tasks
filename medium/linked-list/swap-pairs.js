function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {

    if (head && head.next) {
        let newHead = null
        const temp = head.next.next
        newHead = head.next
        newHead.next = head
        newHead.next.next = swapPairs(temp)
        return newHead
    }

    return head
};
const printList = (head) => {
    let res = ''
    while(head != null) {
        res += head.val + ' '
        head = head.next
    }
    console.log(res)
}

const head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
printList(head)
printList(swapPairs(head))
