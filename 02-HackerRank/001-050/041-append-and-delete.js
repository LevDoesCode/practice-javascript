function appendAndDelete(start, end, moves) {
    if (moves >= start.length + end.length) {
        return 'Yes';
    }
    let differentAtIndex = 0;
    while (
        start[differentAtIndex] == end[differentAtIndex] &&
        differentAtIndex < start.length &&
        differentAtIndex < end.length) {
        differentAtIndex += 1;
    }
    let movesNeeded = start.length - differentAtIndex + end.length - differentAtIndex;
    if (moves == movesNeeded || moves > movesNeeded && (moves - movesNeeded) % 2 == 0) {
        return 'Yes';
    }
    return 'No';
}

console.log(appendAndDelete('abc', 'def', 6));
console.log(appendAndDelete('aba', 'aba', 7));
console.log(appendAndDelete('hackerhappy', 'hackerrank', 9));
console.log(appendAndDelete('ashley', 'ash', 2));
console.log(appendAndDelete('abcd', 'abcdert', 10));
console.log(appendAndDelete('aaa', 'a', 5));
