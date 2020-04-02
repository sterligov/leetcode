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
var maxLevelSum = function(root) {
    if (!root) {
        return 1;
    }
    let q = [];
    q.push([1, root])
    let sum = {};
    let i = 0;
    while (q.length > i) {
        let [level, cur] = q[i];
        if (sum[level] === undefined) {
            sum[level] = 0;
        }
        sum[level] += cur.val;
        if (cur.left) {
            q.push([level+1, cur.left]);
        }
        if (cur.right) {
            q.push([level+1, cur.right]);
        }
        i++;
    }
    
    let max = root.val;
    let level = 1;
    for (let l in sum) {
        let v = sum[l];
       if (v > max) {
           max = v;
           level = l;
       } 
    }
    return level;
};