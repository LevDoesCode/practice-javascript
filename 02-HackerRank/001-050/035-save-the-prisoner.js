function saveThePrisoner(n, m, s) {
    let warn = ((m % n) + s - 1) % n;
    (warn == 0) && (warn = n);
    return warn;
}

let arr1 = [5, 2, 1];
console.log(saveThePrisoner(5, 2, 1));
console.log(saveThePrisoner(4, 6, 2));
console.log(saveThePrisoner(7, 19, 2)); // 6
console.log(saveThePrisoner(3, 7, 3)); // 3
