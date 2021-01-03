// 递归 sum 数组
function recursiveSum(list) {
    if (list.length === 0) return 0;
    if (list.length === 1) return list[0];
    let head = list.shift();
    return head + recursiveSum(list);
}

console.log(recursiveSum([1, 2, 3, 4]));

// 计算列表包含的元素数


// Math.max
function maxOf(list) {
    if (list.length === 0) return 0;
    if (list.length === 1) return list[0];
    let max = list.shift();
    return max > maxOf(list) ? max : maxOf(list);
}
console.log(
    maxOf([1, 2, 3, 4])
);