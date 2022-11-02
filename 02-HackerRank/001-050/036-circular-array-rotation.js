// This can exceed time on large data sets
function circularArrayRotation(a, k, queries) {
    for (let i=0; i<k; i++) {
        a = [a.pop()].concat(a);
    }
    let qValues = queries.map(function(queryIndex) {return this.a[queryIndex]}, {a:a});
    return qValues;
}

let a = [3, 4, 5];
let k = 2;
let q = [1, 2];
console.log(circularArrayRotation(a, k, q));
