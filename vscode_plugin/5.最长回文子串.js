/**
 * n: 数组元素做开头
 * m: 回文长度
 * m: 字符比较
 * O(n3)
 */
/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let longest = '';
    for (let i = 0; i < s.length; i++) { // 起始
        for (let m = s.length - 1; m >= i; m--) { // 假定结尾
            let c = 0;
            let offset = 0;
            for (; i + offset <= m - offset; offset++) {
                const l = i + offset;
                const r = m - offset;
                const lc = s[l];
                const rc = s[r];
                if (s[i + offset] !== s[m - offset]) {
                    c = -1;
                    break;
                }
            }
            if (c >= 0 && i + offset >= m - offset) {
                c = m - i + 1;
            }
            if (c > longest.length) {
                longest = s.substr(i, c);
            }
        }
    }
    return longest;
};
// @lc code=end
