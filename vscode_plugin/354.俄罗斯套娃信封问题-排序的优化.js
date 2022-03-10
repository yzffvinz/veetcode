/*
 * @lc app=leetcode.cn id=354 lang=javascript
 *
 * [354] 俄罗斯套娃信封问题
 */

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
    // O(n * logn): 在于获取一个 height 的序列，将问题转化成 LIS
    const heights = envelopes.sort(([ax, ay], [bx, by]) => {
        return ax - bx === 0 ? by - ay : ax - bx;
    }).map(([width, height]) => height);

    // O(n * logn): 二分求 LIS
    const d = [];
    const lastDItem = () => d[d.length - 1];
    for (let i = 0; i < heights.length; i++) {
        if (i === 0 || lastDItem() < heights[i]) {
            d.push(heights[i]);
        } else {
            let [s, e] = [0, d.length - 1];
            let loc = e;
            while (s <= e) {
                let mid = Math.floor((s + e) / 2);
                if (d[mid] >= heights[i]) {
                    loc = mid;
                    e = mid - 1;
                } else {
                    s = mid + 1;
                }
            }
            d[loc] = heights[i];
        }
    }

    return d.length;
};
// @lc code=end

