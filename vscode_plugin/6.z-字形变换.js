/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s;
    const roundSize = (numRows - 1) * 2; // 轮次数量
    let strArr = [];
    for (let row = 0; row < numRows; row++) {
        const [head, tail] = [row, roundSize - row];
        const hasTail = head < tail && tail < roundSize;

        let base = 0;
        while (base < s.length) {
            const headPos = base + head; 
            if (headPos >= s.length) {
                break;
            }
            strArr.push(s[headPos]);

            const endPos = base + tail;
            if (hasTail && endPos < s.length) {
                strArr.push(s[endPos]);
            }
            base += roundSize;
        }
    }
    return strArr.join('');
};
// @lc code=end

