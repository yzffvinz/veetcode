/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 *
 * https://leetcode-cn.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (73.74%)
 * Likes:    655
 * Dislikes: 0
 * Total Accepted:    247K
 * Total Submissions: 334.8K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
 * 
 * 在「杨辉三角」中，每个数是它左上方和右上方的数的和。
 * 
 * 
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: numRows = 5
 * 输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: numRows = 1
 * 输出: [[1]]
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let res = [];

    for (let i = 0; i < numRows; i++) {
        const prev = res[i - 1];
        if (!prev) {
            res.push([1]);
            continue;
        }
        const tmp = [];
        for (let j = 0; j <= i; j++) {
            if (j - 1 < 0 || j >= i) {
                tmp.push(1);
            } else {
                tmp.push(prev[j - 1] + prev[j]);
            }
        }
        res.push(tmp);
    }

    return res;
};
// @lc code=end

