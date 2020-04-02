/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 var sums []int64

 func maxProduct(root *TreeNode) int {
	 sums = make([]int64, 0)
	 sum := dfs(root);
	 max := int64(0);
	 for i := 0; i < len(sums); i++ {
		 cur := int64(((sum - sums[i]) * sums[i]))
		 if cur > max {
			 max = cur
		 }
	 }
	 return int(max % 1000000007);
 }
 
 func dfs(root *TreeNode) int64 {
	 l := int64(0);
	 r := int64(0);
	 if root.Left != nil {
		 l = dfs(root.Left);
	 }
	 if root.Right != nil {
		 r = dfs(root.Right);
	 }
	 sums = append(sums, l + r + int64(root.Val));
	 return l+r+int64(root.Val);
 }