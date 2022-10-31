function compareTriplets(a, b) {
    // 1D array to 2D array
    let result = a.map(function (val, index) {
        return [val, this.b[index]];
    }, { b: b });
    // We can use a for each
    [aPoints, bPoints] = [0, 0];
    result.forEach((pair) => { if (pair[0] > pair[1]) aPoints++; if (pair[0] < pair[1]) bPoints++; })
    // Or we can use the reduce function twice
    return [result.reduce((points, pair) => pair[0] > pair[1] ? points + 1 : points, 0), result.reduce((points, pair) => pair[1] > pair[0] ? points + 1 : points, 0)];
}

let a = [1, 2, 3];
let b = [3, 2, 1];

console.log(compareTriplets(a, b));
