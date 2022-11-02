function beautifulTriplets(d, arr) {
    let m = {};
    let triplets = 0;
    for (let i = 0; i < arr.length; i++) {
        m[arr[i]]         = m[arr[i]]         ? m[arr[i]] + 1         : 1;
        m[arr[i] + d]     = m[arr[i] + d]     ? m[arr[i] + d] + 1     : 1;
        m[arr[i] + d * 2] = m[arr[i] + d * 2] ? m[arr[i] + d * 2] + 1 : 1;
    }
    for (const [key, value] of Object.entries(m)) {
        if (value == 3) {
            triplets++;
        }
    }
    return triplets;
}

let d = 1;
let arr = [2, 2, 3, 4, 5];
console.log(beautifulTriplets(d, arr));
console.log(beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10]));
