/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if (root === null) {
        return;
    }
    let stack = [];
    let prev = root;
    
    if (root.right !== null) {
        stack.push(root.right);
    }
    if (root.left !== null) {
        stack.push(root.left);
    }
    root.left = null;
    root.right = null;
    
    while(stack.length > 0) {
        let cur = stack[stack.length - 1];
        stack = stack.slice(0, stack.length - 1);
        
        if (cur.right !== null) {
            stack.push(cur.right);
        }
        if (cur.left !== null) {
            stack.push(cur.left);
        }
        cur.left = null;
        cur.right = null;
        prev.right = cur;
        prev = prev.right;
    }
};