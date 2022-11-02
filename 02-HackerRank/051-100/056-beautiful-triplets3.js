// Adapted from the internet
function beautifulTriplets(d, arr) {
    return arr.filter(v=>arr.includes(v+d)&&arr.includes(v+d*2)).length;
}

let d = 1;
let arr = [2, 2, 3, 4, 5];
console.log(beautifulTriplets(d, arr));
console.log(beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10]));
