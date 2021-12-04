/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }

    let low = 10,
        high = x;
    while (high / 10 > 1) high /= 10;

    let flag = true;

    while (low < high) {
        const curHigh = Math.floor(x / high);
        const curLow = x % low;

    }

    
};
// @lc code=end

