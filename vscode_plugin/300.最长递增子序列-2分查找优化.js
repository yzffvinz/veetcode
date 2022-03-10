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
var lengthOfLIS = function (nums) {
    const d = [];
    const dLastItem = () => d[d.length - 1];

    for (let i = 0; i < nums.length; i++) {
        if (i === 0 || dLastItem() < nums[i]) {
            d.push(nums[i])
        } else {
            let [s, e] = [0, d.length - 1];
            let loc = e;
            while (s <= e) {
                let mid = Math.floor((s + e) / 2);
                if (d[mid] >= nums[i]) {
                    loc = mid;
                    e = mid - 1;
                } else {
                    s = mid + 1;
                }
            }
            d[loc] = nums[i];
        }
    }
    return d.length;
};
// @lc code=end

