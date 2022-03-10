/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (34.17%)
 * Likes:    4430
 * Dislikes: 0
 * Total Accepted:    838.3K
 * Total Submissions: 2.4M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0
 * 且不重复的三元组。
 *
 * 注意：答案中不可以包含重复的三元组。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = []
 * 输出：[]
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [0]
 * 输出：[]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0
 * -10^5
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// eslint-disable-next-line no-unused-vars
const threeSum = function threeSum(nums) {
    if (nums.length < 3) return [];
    const rst = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            if (sum > 0) {
                while (nums[k] === nums[k - 1]) k--;
            } else if (sum < 0) {
                while (nums[j] === nums[j + 1]) j++;
            } else {
                rst.push([nums[i], nums[j], nums[k]]);
                k--; j++;
            }
        }
    }

    return rst;
};
// @lc code=end

