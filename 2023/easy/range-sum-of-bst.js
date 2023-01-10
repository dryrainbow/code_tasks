// https://leetcode.com/problems/range-sum-of-bst/
// Time complexity: O(n)
// Space complexity: O(n)

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const isBetween = (low, high, val) => low <= val && high >= val
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let sum = 0;
    const stack = [root];

    while (stack.length) {
        const current = stack.pop();
        if (!current) continue;

        if (isBetween(low, high, current.val)) {
            sum += current.val;
            stack.push(current.left, current.right)
        }
    }
};