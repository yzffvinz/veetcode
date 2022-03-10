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
    const envelopeMinHeightMap = {};
    const widths = [];
    envelopes.forEach(envelope => {
        const [width, height] = envelope;
        if (!envelopeMinHeightMap[width]) {
            envelopeMinHeightMap[width] = [];
            widths.push(width)
        }
        envelopeMinHeightMap[width].push(height);
    });
    widths.sort((a, b) => a - b);

    const heights = [];
    widths.forEach(width => {
        heights.push(...envelopeMinHeightMap[width]
            .sort((a, b) => b - a));
    });

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

