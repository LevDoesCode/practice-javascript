function cutTheSticks(arr) {
    let result = [];
    let minSum = 0;
    while (arr.length > 0) {
        result.push(arr.length);
        let min = Math.min(...arr);
        minSum += min;
        //arr = arr.filter((val) => val - minSum - (min - minSum)> 0); // This can be simplied
        arr = arr.filter((val) => val - min > 0);
    }
    return result;
}

cutTheSticks([5, 4, 4, 2, 2, 8]);
