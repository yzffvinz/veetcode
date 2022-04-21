function flatArray(arr) {
    let hasArr = true;
    let count = 1;

    while (hasArr && count++ < 10) {
        hasArr = false;
        let tempArr = [];
        arr.forEach(item => {
            if (Array.isArray(item)) {
                hasArr = true;
                tempArr.push(...item)
            } else {
                tempArr.push(item);
            }
        });
        arr = tempArr;
    }

    return arr;
}

function recursiveFlat(arr) {
    if (!arr) return [];
    function flat(arr) {
        const rst = arr.flat()
        const hasArr = rst.find(item => Array.isArray(item));
        return hasArr ? flat(rst) : rst;
    }
    return flat(arr);
}


let a = [1, [2, [3]]];
console.log(flatArray(a));