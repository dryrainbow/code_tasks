class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function lowestCommonAncestor(root: TreeNode, p: TreeNode, q: TreeNode): TreeNode | undefined {
    const stack = [root]

    while (stack.length) {
        const currentElement = stack.pop() as TreeNode;

        if (currentElement === p || currentElement === q) {
            return currentElement;
        }
        const pDiffSign = Math.sign(currentElement.val - p.val)
        const qDiffSign = Math.sign(currentElement.val - q.val)
        if (pDiffSign !== qDiffSign) {
            return currentElement;
        }
        if (qDiffSign > 0) {
            stack.push(currentElement.left as TreeNode)
        } else {
            stack.push(currentElement.right as TreeNode)
        }
    }
};