function beautifulTriplets(d, arr) {
    let triplets = [];
    for (let i=0; i<arr.length-2; i++) {
        for (let j=i+1; j<arr.length-1; j++) {
            if (arr[j] - arr[i] == d) {
                for (let k=j+1; k<arr.length; k++) {
                    if ( arr[k] - arr[j] == d) {
                        triplets.push([arr[i], arr[j], arr[k]]);
                    }
                }
            }
        }
    }
    console.log(triplets);
    return triplets.length;
}

let d = 1;
let arr = [2, 2, 3, 4, 5];
console.log(beautifulTriplets(d, arr));
console.log(beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10]));
