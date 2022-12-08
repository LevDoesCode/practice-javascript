function freeSides(A, i, j, k) {
    let freeSides = 6;
    (A[i - 1] != undefined && A[i - 1][j + 0] != undefined && A[i - 1][j] >= k) && (freeSides--); // left
    (A[i + 1] != undefined && A[i + 1][j + 0] != undefined && A[i + 1][j] >= k) && (freeSides--); // right
    (A[i + 0] != undefined && A[i + 0][j + 0] != undefined && A[i + 0][j] > k) && (freeSides--); // top
    (A[i + 0] != undefined && A[i + 0][j + 0] != undefined && k > 1) && (freeSides--); // bottom
    (A[i + 0] != undefined && A[i + 0][j + 1] != undefined && A[i + 0][j + 1] >= k) && (freeSides--); // front
    (A[i + 0] != undefined && A[i + 0][j - 1] != undefined && A[i + 0][j - 1] >= k) && (freeSides--); // back
    return freeSides
}

function surfaceArea(A) {
    let total = 0;
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[i].length; j++) {
            for (let k = 1; k <= A[i][j]; k++) {
                total += freeSides(A, i, j, k);
            }
        }
    }
    return total;
}

let A1 = [[1]];
let A2 = [[1, 3, 4], [2, 2, 3], [1, 2, 4]];
console.log(surfaceArea(A1));
console.log(surfaceArea(A2));
