/*
 * @lc app=leetcode.cn id=334 lang=javascript
 *
 * [334] 递增的三元子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let first = Number.MAX_SAFE_INTEGER,
        second = Number.MAX_SAFE_INTEGER,
        k = 0;
    while (k < nums.length) {
        if (nums[k] > second) return true;

        if (nums[k] <= first) {
            first = nums[k];
        } else if (nums[k] < second) {
            second = nums[k];
        }
        k++;
    }
    return false;
};
// @lc code=end

