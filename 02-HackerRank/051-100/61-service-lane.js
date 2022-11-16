function serviceLane(n, widths, cases) {
    return cases.map(function(range) {return Math.min(...this.widths.slice(range[0], range[1]+1))}, {widths: widths});
}

let w1 = [2, 3, 2, 1];
let cases1 = [[1, 2], [2, 4]];

let w2 = [2, 3, 1, 2, 3, 2, 3, 3];
let cases2 = [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]];

console.log(serviceLane(w1.length, w1, cases1));
console.log(serviceLane(w2.length, w2, cases2));
