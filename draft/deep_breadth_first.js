class GraphNode {
    constructor(value, preList = []) {
        this.value = value;
        this.preList = preList;
    }

    equals(value) {
        return this.value === value;
    }

    route() {
        return [...this.preList, this.value]
    }

    born(value) {
        return new GraphNode(value, this.route());
    }

    logRoute() {
        return this.route().join(' -> ');
    }
}

function searchWithRoute(map, start, final, type) {
    let searched = [];
    let beSearched = [];
    if (!map || !map[start] || !map[start].length) {
        return;
    }

    beSearched.push(new GraphNode(start));
    while (beSearched.length) {
        let head;
        if (type === 'dfs') {       // 深度优先
            head = beSearched.pop()
        } else {                    // 广度优先
            head = beSearched.shift();
        }
        searched.push(head.value);
        if (head.equals(final)) {
            return head;
        } else {
            map[head.value].forEach(item => {
                if (!searched.includes(item)) {
                    beSearched.push(head.born(item));
                    searched.push(item);
                }
            });
        }
    }
    return 'not found';
}

function search(map, start, final, type) {
    let searched = [];
    let beSearched = [];
    if (!map || !map[start] || !map[start].length) {
        return;
    }

    beSearched.push(start);
    while (beSearched.length) {
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
console.log(searchWithRoute(map, 's', 'f', 'dfs').logRoute());
console.log('bfs');
console.log(searchWithRoute(map, 's', 'f', 'bfs').logRoute());