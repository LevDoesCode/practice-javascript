function findDigits(n) {
    return n.toString().split('').filter((digit) => n % digit == 0).length;
}

console.log(findDigits(124));
console.log(findDigits(111));
console.log(findDigits(10));
