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
    const strX = String(x);
    const strXR = strX.split('').reverse().join('');
    return strX === strXR;
};
// @lc code=end

