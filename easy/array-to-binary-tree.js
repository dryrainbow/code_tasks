// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums, left, right) {
    if (left === undefined) {
        left = 0
        right = nums.length - 1
    }
    if (right < left) {
        return null
    }
    if (left == right) {
        return new TreeNode(nums[left])
    }

    const mid = Math.floor((left + right) / 2)
    const node = new TreeNode(nums[mid])
    node.left = sortedArrayToBST(nums, left, mid - 1)
    node.right = sortedArrayToBST(nums, mid + 1, right)

    return node
};

console.log(sortedArrayToBST([-10,-3,0,5,9]))