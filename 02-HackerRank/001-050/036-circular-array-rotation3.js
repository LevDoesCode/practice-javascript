// Most optimal solution
function circularArrayRotation(a, k, queries) {
    // Let's find how many we have to shift to the right
    // [1, 2, 3] 0 shifts
    // [3, 1, 2] 1 shift
    // [2, 3, 1] 2 shifts
    // [1, 2, 3] 3 shifts
    // [3, 1, 2] 4 shifts
    // [2, 3, 1] 5 shifts
    // [1, 2, 3] 6 shifts
    let numShifts = k % a.length;
    a = a.slice(a.length - numShifts).concat(a.slice(0, a.length - numShifts));
    let queryValues = queries.map(function(queryIndex) {return this.a[queryIndex]}, {a:a});
    return queryValues;
}

let a = [3, 4, 5];
let k = 2;
let q = [1, 2];
console.log(circularArrayRotation(a, k, q));
console.log(circularArrayRotation([1, 2, 3], 2, [0, 1, 2]));
