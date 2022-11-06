function appendAndDelete(s, t, k) {
    for (let i = 0; i < k; i++) {
        let thisSlice = s.slice(0, s.length - i);
        if (t.includes(thisSlice)) {
            if (i + (t.length - thisSlice.length) == k) {
                return 'Yes';
            }
        }
    }
    return 'No';
}

console.log(appendAndDelete('abc', 'def', 6));
console.log(appendAndDelete('aba', 'aba', 7));
console.log(appendAndDelete('hackerhappy', 'hackerrank', 9));
console.log(appendAndDelete('ashley', 'ash', 2));
console.log(appendAndDelete('abcd', 'abcdert', 10));
