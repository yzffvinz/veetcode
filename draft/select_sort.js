function selectSort(list) {
    for (let i = 0; i < list.length; i++) {
        let temp = list[i];
        let tempI = i;

        for (let j = i; j < list.length; j++) {
            if (list[tempI] > list[j]) {
                tempI = j;
            }
        }

        list[i] = list[tempI];
        list[tempI] = temp;
    }
    return list;
}

console.log(selectSort([3, 2, 1]));