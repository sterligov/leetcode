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
var max = -Infinity;
var maxPathSum = function(root) {
    max = -Infinity;
    dfs(root);
    return max;
};

function dfs(root) {
    if (!root) {
        return -Infinity;
    }
    let l = dfs(root.left);
    let r = dfs(root.right)
    max = Math.max(max, root.val, l+root.val, r+root.val, l+r+root.val);
    return Math.max(root.val, l+root.val, r+root.val);
}