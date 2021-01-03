// 快速排序
function quickSort(list) {
    if (list.length <= 1) return list;
    if (list.length === 2) return list[0] > list[1] ? list.reverse() : list;

    let pivot = list[0];
    let less = [];
    let greater = [];
    for (let i = 1; i < list.length; i++) {
        pivot > list[i] ? less.push(list[i]) : greater.push(list[i]);
    }
    return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log(quickSort([4, 2, 3, 4]));