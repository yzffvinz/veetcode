/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 *
 * https://leetcode-cn.com/problems/search-a-2d-matrix/description/
 *
 * algorithms
 * Medium (46.60%)
 * Likes:    556
 * Dislikes: 0
 * Total Accepted:    191.8K
 * Total Submissions: 411.4K
 * Testcase Example:  '[[1,3,5,7],[10,11,16,20],[23,30,34,60]]\n3'
 *
 * 编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：
 * 
 * 
 * 每行中的整数从左到右按升序排列。
 * 每行的第一个整数大于前一行的最后一个整数。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
 * 输出：false
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
 * -10^4 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    function getMatrix(n) {
        return matrix[Math.floor(n / matrix[0].length)][n % matrix[0].length];
    }

    let length = matrix.length * matrix[0].length;
    let [i, j] = [0, length - 1];

    while (j >= i) {
        const mid = Math.floor((i + j) / 2);
        if ((getMatrix(mid) === target)) {
            return true;
        } else if (getMatrix(mid) > target) {
            j = mid - 1;
        } else {
            i = mid + 1;
        }
    }
    return false;
};
// @lc code=end

