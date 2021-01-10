//  假设由省为a省到z省
const provinceList = [];
for (let i = 97; i < 97 + 26; i++) {
    provinceList.push(String.fromCharCode(i));
}

// 位置关系关系
// 东北(db): a - f
// 西北(xb): g - l
// 东南(dn): m - r
// 西南(xn): s - z
const bagMap = {
    db: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'],
    xb: ['g', 'h', 'i', 'j', 'k', 'l'],
    dn: ['m', 'n', 'o', 'p', 'q', 'r'],
    xn: ['s', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'm', 'n', 'o', 'p', 'q', 'r']
};

// 取交集
function intersection(arr1, arr2) {
    const liz1 = arr1.filter(item => arr2.includes(item));
    return Array.from(new Set(liz1));
}

// 取差集
function subtraction(arr1, arr2) {
    return arr1.filter(item => !arr2.includes(item));
}


// 每次最大覆盖，切集合交集最小
function findMinStations(provs, bagMap) {
    const bagList = [];
    const provSet = new Set;
    while (provSet.size !== provs.length) {
        let theBag = null;
        let cover = 0;
        Object.keys(bagMap).forEach(bag => {
            const left = subtraction(provs, Array.from(provSet));
            const inte = intersection(left, bagMap[bag]);
            if (inte.length > cover) {
                theBag = bag;
                cover = inte.length;
            }
        });

        bagMap[theBag].forEach(prov => {
            provSet.add(prov);
        });
        bagList.push(theBag);
    }
    console.log(bagList);
}


findMinStations(provinceList, bagMap);