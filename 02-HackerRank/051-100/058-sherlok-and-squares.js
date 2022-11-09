// Works but not for huge numbers
function squares(a, b) {
    return Array.from(Array(b - a + 1), (val, i) => a + i).filter((val) => Math.sqrt(val) == Math.floor(Math.sqrt(val))).length;
}

console.log(squares(3, 9));