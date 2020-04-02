/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */

var visitedSubtree = {};
var ans = [];

var findDuplicateSubtrees = function(root) {
    visitedSubtree = {};
    ans = [];
    dfs(root);
    return ans;
};

function dfs(root) {
    if (!root) {
        return "e";
    }
    let v = "l" + dfs(root.left);
    v += "v" + root.val;
    v += "r" + dfs(root.right);
    if (visitedSubtree[v] === undefined) {
        visitedSubtree[v] = 0;
    }
    visitedSubtree[v]++;
    if (visitedSubtree[v] == 2) {
        ans.push(root);
    }
    return v;
}