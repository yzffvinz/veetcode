/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 *
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (76.67%)
 * Likes:    1073
 * Dislikes: 0
 * Total Accepted:    576.8K
 * Total Submissions: 751.9K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最大深度。
 * 
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例：
 * 给定二叉树 [3,9,20,null,null,15,7]，
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 返回它的最大深度 3 。
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
 * @return {number}
 * @ana space O(n)   time O(n)
 */
var maxDepth = function (root) {
    if (!root) return 0;
    // 记录每个node的depth
    function Node(node, depth) {
        this.node = node;
        this.depth = depth;
    }

    // 广度优先
    const tobeSolved = [new Node(root, 1)];
    let resultDepth = 1;

    while (tobeSolved.length) {
        const {node, depth} = tobeSolved.pop();
        if (depth > resultDepth) resultDepth = depth;
        const {left, right} = node;
        [left, right].forEach(child => {
            child && tobeSolved.push(new Node(child, depth + 1));
        });
    }

    return resultDepth;
};
// @lc code=end