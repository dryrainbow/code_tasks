// https://leetcode.com/problems/binary-tree-inorder-traversal/submissions/
// try to use stack
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
    let result = []
    traversal(root, result)
    return result
};

function traversal(node, result) {
    if (node === null) {
        return
    }
    traversal(node.left, result)
    result.push(node.val)
    traversal(node.right, result)
}

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

