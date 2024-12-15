function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let middle = arr[arr.length - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < middle) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat(middle, quickSort(right));
}
console.log(quickSort([11, 3, 5, 22, 2]));
