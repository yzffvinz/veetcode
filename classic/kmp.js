// 获取next数组
function buildNxt(n) {
    const next = [0];
    let cursor = 1, // 主指针
        offset = 0; // 子指针（偏移量）
    while(cursor < n.length) {
        if (n[cursor] === n[offset]) { // 相等，主指针位置赋值为偏移量，将主指针和偏移量都置下一位
            next[cursor++] = ++offset;
        } else { // 不相等
            if (offset > 0) { // 假设偏移量不等于0，证明可以使用捷径匹配不必从头再来（这部分是利用已有的next数组）
                offset = next[offset - 1];
            } else { // 偏移量等于0，证明从头开始匹配都不满足条件，只好移动主指针到下一位
                next[cursor++] = 0;
            }
        }
    }
    return next;
}

// 判断：n是否为m的子串
function kmp(m, n) {
    const next = buildNxt(n);
    let cursor = 0; // m指针
        offset = 0; // n指针

    while (cursor < m.length && offset < n.length // m, n长度边界校验
        && m.length - cursor >= n.length - offset // m, n余量长度校验
    ) {
        if (m[cursor] === n[offset]) { // 相等比较下一位
            cursor++;
            offset++;
            if (offset === n.length) { // 比较完了n的最后一位，已满足条件
                return true;
            }
        } else {
            if (offset) { // 根据next数组，找到n的偏移量应回溯到的位置
                offset = next[offset - 1];
            } else { // 如果第一位仍不能满足，cursor指针需要移动至下一位
                cursor++;
            }
        }
    }
    return false;
}