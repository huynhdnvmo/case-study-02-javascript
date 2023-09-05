function getLength(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            count += getLength(arr[i]);
        } else {
            count ++;
        }
    }
    return count;
}
console.log(getLength([1, [2, 3]]))