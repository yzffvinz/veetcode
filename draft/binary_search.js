const arr = [];
for (let i = 0; i < 100; i++) {
    arr[i] = i;
}


// not good
function binarySearch(number, top, floor) {
    let mid;
    top = +top;
    floor = +floor;

    if (isNaN(top) || isNaN(floor)) {
        top = arr.length - 1;
        floor = 0;
        if (number > arr[top] || number < arr[floor]) {
            return;
        }
    }

    mid = Math.floor((top + floor) / 2);

    if (arr[mid] > number) {
        top = mid - 1;
    } else if (arr[mid] < number) {
        floor = mid + 1;
    }

    return arr[mid] === number ? mid : binarySearch(number, top, floor);
}

// console.log(binarySearch(100));

// better
function binSearch(list, item) {
    let low = 0,
        high = list.length - 1;

    while (high >= low) {
        let guess = Math.floor((low + high) / 2);
        if (list[guess] === item) {
            return guess;
        }
        if (list[guess] < item) {
            low = guess + 1;
        } else {
            high = guess - 1;
        }
    }
}

console.log(binSearch(arr, 99));