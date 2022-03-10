/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 *
 * https://leetcode-cn.com/problems/spiral-matrix/description/
 *
 * algorithms
 * Medium (48.45%)
 * Likes:    1011
 * Dislikes: 0
 * Total Accepted:    231.8K
 * Total Submissions: 478.5K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[1,2,3,6,9,8,7,4,5]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 * 输出：[1,2,3,4,8,12,11,10,9,5,6,7]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == matrix.length
 * n == matrix[i].length
 * 1 
 * -100 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (!matrix || !matrix.length || !matrix[0].length) return [];
    const rst = [];
    let [top, bottom, left, right] = [0, matrix.length - 1, 0, matrix[0].length - 1];

    while (top <= bottom && left <= right) {
        for (let j = left; j <= right; j++) {
            rst.push(matrix[top][j]);
        }
        for (let i = top + 1; i <= bottom; i++) {
            rst.push(matrix[i][right]);
        }
        if (top < bottom && left < right) {
            for (let j = right - 1; j >= left; j--) {
                rst.push(matrix[bottom][j]);
            }
            for (let i = bottom - 1; i > top; i--) {
                rst.push(matrix[i][left]);
            }
        }
        [top, bottom, left, right] = [top + 1, bottom - 1, left + 1, right - 1];
    }

    return rst;
};
// @lc code=end

