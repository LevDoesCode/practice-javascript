function minimumDistances(a) {
    let min = -1;
    for (let i = 0; i < a.length - 1; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] == a[j] && j - i < min || a[i] == a[j] && min == -1) {
                min = j - i;
                break;
            }
        }
    }
    return min;
}

let a = [3, 2, 1, 2, 3];
let b = [7, 1, 3, 4, 1, 7];
console.log(minimumDistances(a));
console.log(minimumDistances(b));
