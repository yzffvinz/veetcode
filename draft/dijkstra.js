// 测试数据
const map = {
    sheet: {
        record: 5,
        poster: 0
    },
    record: {
        guita: 15,
        drum: 20
    },
    poster: {
        guita: 30,
        drum: 35
    },
    drum: {
        piano: 10
    },
    guita: {
        piano: 20
    },
    piano: {}
};

function dijkstraCost(map, from, to) {
    if (!from || !to || !map[from] || !map[to]) {
        return 'not found';
    }

    const costs = {};

    const addrs = [];
    addrs.push(from);

    while (addrs.length) {
        const head = addrs.shift();

        if (!costs.hasOwnProperty(head)) {
            costs[head] = 0;
        }

        const keys = Object.keys(map[head]);
        keys.length && keys.forEach(key => {
            if (map[key]) {
                const newCost = map[head][key] + costs[head];
                if (!costs.hasOwnProperty(key) || newCost < costs[key]) {
                    costs[key] = newCost;
                    addrs.push(key);
                }
            }
        });
    }
    return costs;
}

console.log(dijkstraCost(map, 'sheet', 'piano'));