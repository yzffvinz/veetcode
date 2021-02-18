// function genArr() {
//     return [1, 2, 3, 4, 5, 6, 7, 8];
// }

// function putIntoQueens({x, y}, queens) {
//     let inter = queens.find(queen => {
//         return queen.x === x || queen.y === y || queen.x - queen.y === x - y || queen.x + queen.y === x + y;
//     });
//     if (!inter) {
//         queens.put({x, y});
//     }
//     return !inter;
// }

// function exhaustive() {
//     let queens = [];
//     let xs = genArr();
//     let ys = genArr();
//     xs.forEach(x => {
//         ys.forEach(y => {
//             // 找一个结果
//             checkCanPut({x, y}, queens);
//             let xsc = genArr();
//             let ysc = genArr();
//         });
//     });
// }

function queen(a, cur) {
    if (cur == a.length) { console.log(a); return; }
    for (var i = 0; i < a.length; i++) {
        a[cur] = i;
        var flag = true;
        for (var j = 0; j < cur; j++) {
            var ab = i - a[j];
            if (a[j] == i || (ab > 0 ? ab : -ab) == cur - j) { flag = false; break };
        };
        if (flag) { queen(a, cur + 1); }
    };
};
queen([1, 1, 1, 1, 1, 1, 1, 1], 0);