
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
 var deleteNode = function(node) {
    let cur = node.next
    let prev = node
    if (cur.next == null) {
        prev.val = cur.val
        prev.next = null
        return
    }
    while(cur.next != null) {
        prev.val = cur.val
        prev = cur
        cur = cur.next
    }
    prev.val = cur.val
    prev.next = null
};