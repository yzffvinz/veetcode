/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 *
 * https://leetcode-cn.com/problems/resimum-window-substring/description/
 *
 * algorithms
 * Hard (43.08%)
 * Likes:    1543
 * Dislikes: 0
 * Total Accepted:    216.3K
 * Total Submissions: 501.4K
 * Testcase Example:  '"ADOBECODEBANC"\n"ABC"'
 *
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 ""
 * 。
 * 
 * 
 * 
 * 注意：
 * 
 * 
 * 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
 * 如果 s 中存在这样的子串，我们保证它是唯一的答案。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "ADOBECODEBANC", t = "ABC"
 * 输出："BANC"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "a", t = "a"
 * 输出："a"
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: s = "a", t = "aa"
 * 输出: ""
 * 解释: t 中两个字符 'a' 均应包含在 s 的子串中，
 * 因此没有符合条件的子字符串，返回空字符串。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * s 和 t 由英文字母组成
 * 
 * 
 * 
 * 进阶：你能设计一个在 o(n) 时间内解决此问题的算法吗？
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
class LackMap {
    constructor(t) {
        this.length = -t.length;
        this.checkMap = {};
        for (let i = 0; i < t.length; i++) {
            if (!this.checkMap[t[i]]) {
                this.checkMap[t[i]] = 0;
            }
            this.checkMap[t[i]]--;
        }
    }

    lack(c) {
        if (this.checkMap[c] !== undefined && --this.checkMap[c] < 0) {
            this.length--;
        }
        return this.isValid();
    }

    add(c) {
        if (this.checkMap[c] !== undefined && this.checkMap[c]++ < 0) {
            this.length++;
        }
        return this.isValid();
    }

    isValid() {
        return this.length >= 0;
    }
}

var minWindow = function (s, t) {
    const lackMap = new LackMap(t);
    let res = '';
    let [slow, fast] = [0, 0];

    while (slow < s.length && fast <= s.length) {
        if (lackMap.isValid()) {
            // 削减前面不必要的
            while (lackMap.isValid()) {
                lackMap.lack(s[slow++]);
            }

            // 记录长度
            if (!res.length || res.length > fast - (slow - 1)) {
                res = s.substring(slow - 1, fast);
            }
        }

        while (fast <= s.length && !lackMap.isValid()) {
            lackMap.add(s[fast++]);
        }
        if ((!res.length || res.length > fast - slow) && lackMap.isValid()) {
            res = s.substring(slow, fast);
        }
    }
    return res;
};

minWindow('a', 'aa');
// @lc code=end
