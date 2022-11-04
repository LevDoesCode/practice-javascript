function jumpingOnClouds(c, k) {
    let n = c.length;
    let e = 100;
    let index = 0;
    while (e) {
        index = (index + k) % n;
        e -= c[index] * 2 + 1
        if (index == 0) {
            break;
        }
    }
    return e;
}

let c = [0, 0, 1, 0];
let k = 2;

console.log(jumpingOnClouds(c, k));
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2));
