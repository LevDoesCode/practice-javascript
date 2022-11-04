function extraLongFactorials(n) {
    if (n === 1) return 1;
    return BigInt(n) * BigInt(extraLongFactorials(n-1));
}

console.log(extraLongFactorials(30));
console.log(extraLongFactorials(25));
