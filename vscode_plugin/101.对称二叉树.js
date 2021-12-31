/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 *
 * https://leetcode-cn.com/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (56.73%)
 * Likes:    1676
 * Dislikes: 0
 * Total Accepted:    465.7K
 * Total Submissions: 821K
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * 给定一个二叉树，检查它是否是镜像对称的。
 * 
 * 
 * 
 * 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠/ \ / \
 * 3  4 4  3
 * 
 * 
 * 
 * 
 * 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠  \   \
 * ⁠  3    3
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 你可以运用递归和迭代两种方法解决这个问题吗？
 * 
 */

// @lc code=start
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (!root) return false;
    const { left, right } = root;
    let leftList = [left];
    let rightList = [right];

    while (leftList.length && rightList.length) {
        const left = leftList.pop();
        const right = rightList.pop();

        if (left && right) {
            const { left: ll, right: lr, val: lv } = left;
            const { left: rl, right: rr, val: rv } = right;
            if (lv !== rv) return false;

            leftList.push(ll, lr);
            rightList.push(rr, rl);
        } else if (left !== right) {
            return false;
        }
    }
    return true;
};
// @lc code=end

