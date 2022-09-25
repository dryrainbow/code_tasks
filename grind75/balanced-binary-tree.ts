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

function isBalanced(root: TreeNode | null): boolean {  
    const getTreeHeight = getTreeHeightMemo();  
    const stack = [root]
    while (stack.length) {
        let el = stack.pop()
        if (!el) continue;
        if (Math.abs((getTreeHeight(el?.left) - getTreeHeight(el?.right))) > 1) {
            return false
        }
        stack.push(el.left, el.right)
    }
    return true;
};
function getTreeHeightMemo() {
    const store = new Map<TreeNode, number>();
    return function getTreeHeight(root: TreeNode | undefined | null): number {
        if (!root) {
            return 0
        }
        if (store.has(root)) {
            return store.get(root) as number;
        }
        store.set(root, Math.max(getTreeHeight(root.left) + 1, getTreeHeight(root.right) + 1))
        return store.get(root) as number
    }
}
