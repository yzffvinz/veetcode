/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 *
 * https://leetcode-cn.com/problems/count-primes/description/
 *
 * algorithms
 * Medium (37.74%)
 * Likes:    804
 * Dislikes: 0
 * Total Accepted:    180K
 * Total Submissions: 477K
 * Testcase Example:  '10'
 *
 * 统计所有小于非负整数 n 的质数的数量。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：n = 10
 * 输出：4
 * 解释：小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
 * 
 * 
 * 示例 2：
 * 
 * 输入：n = 0
 * 输出：0
 * 
 * 
 * 示例 3：
 * 
 * 输入：n = 1
 * 输出：0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= n <= 5 * 10^6
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
 var countPrimes = function (n) {
    const isPrime = new Array(n).fill(1);
    const primes = [];
    for (let i = 2; i < n; i++) {
        if (isPrime[i]) {
            primes.push(i);
        }

        for (let j = 0; j < primes.length && i * primes[j] < n; j++) {
            isPrime[i * primes[j]] = 0;
            if (i % primes[j] === 0) {
                break;
            }
        }
    }
    return primes.length;
};
// @lc code=end

