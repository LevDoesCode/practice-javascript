function cutTheSticks(arr) {
    arr.sort();
    let result = [];
    result.push(arr.length)
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] != arr[i+1]) {
            result.push(arr.length - i - 1);
        }
    }
    return result;
}

console.log(cutTheSticks([5, 4, 4, 2, 2, 8]));
console.log(cutTheSticks([]));
console.log(cutTheSticks([1]));
console.log(cutTheSticks([1, 3, 5]));
