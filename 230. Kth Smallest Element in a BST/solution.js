/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var depth = null;

var kthSmallest = function(root, k) {
    depth = null;
    return dfs(root, k);
};

function dfs(root, k) {
    if (!root) {
        if (depth === null) {
            depth = 0;
        }
        return null;
    }
    let ans = dfs(root.left, k);
    if (ans !== null) {
        return ans;
    }
    if (depth !== null) {
        depth++;
    }
    if (depth == k) {
        return root.val;
    }
    ans = dfs(root.right, k);
    if (ans !== null) {
        return ans;
    }
 
    return null;
}