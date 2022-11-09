// Works but not for huge numbers
function squares(a, b) {
    let count = 0;
    for (let i = a; i <= b; i++) {
        (Number.isInteger(Math.sqrt(i))) && (count++)
    }
    return count;
}

console.log(squares(3, 9));
