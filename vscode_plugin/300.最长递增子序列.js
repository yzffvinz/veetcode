/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const dp = [];
    for (let i = 0; i < nums.length; i++) {
        dp[i] = 1;
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[j] + 1, dp[i]);
            }
        }
    }
    return Math.max(...dp) || 0
};
// 2022-04-21 19:57:58
var lengthOfLIS = function(nums) {
    const dp = [1];
    let max = 1;
    for (let i = 1; i < nums.length; i++) {
        let curMax = 1;
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                curMax = Math.max(dp[j] + 1, curMax);
            }
        }
        dp[i] = curMax;
        max = Math.max(curMax, max);
    }
    return max;
};
// @lc code=end

