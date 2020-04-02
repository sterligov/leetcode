/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var max = 0;

var diameterOfBinaryTree = function(root) {
    max = 0;
    dfs(root, 0);
    return max;
};

function dfs(root) {
    if (!root) {
        return 0;
    }
    let l = dfs(root.left);
    let r = dfs(root.right);
    if (l + r > max) {
        max = l + r;
    }
    return 1 + Math.max(l, r);
}