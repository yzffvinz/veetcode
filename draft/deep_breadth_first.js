function search(map, start, final, type) {
    let searched = [];
    let beSearched = [];
    if (!map || !map[start] || !map[start].length) {
        return;
    }

    beSearched.push(...map[start]);
    while (beSearched.length) {
        console.log(beSearched);
        let head;
        if (type === 'dfs') {       // 深度优先
            head = beSearched.pop()
        } else {                    // 广度优先
            head = beSearched.shift();
        }
        searched.push(head);
        if (head === final) {
            return 'found';
        } else {
            map[head].forEach(item => {
                if (!searched.includes(item)) {
                    beSearched.push(item);
                    searched.push(item);
                }
            });
        }
    }
    return 'not found';
}

const map = {
    s: ['a', 'c'],
    a: ['b', 'f'],
    b: [],
    c: ['b', 'd'],
    d: ['f'],
    f: ['a'],
};

console.log('dfs');
console.log(search(map, 's', 'f', 'dfs'));
console.log('bfs');
console.log(search(map, 's', 'f', 'bfs'));