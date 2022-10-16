function pickingNumbers(a) {
    // [2-100] -> 99 possible numbers
    let count = Array(101).fill(0);
    for(let i=0; i<a.length; i++)
        count[a[i]]++;
    // count = [0, 1, 0, 2, 1, 1, 1]
    let longest = 0;
    for (let i = 0; i < count.length - 1; i++)
        longest = Math.max(longest, count[i] + count[i+1]);
    return longest;
}

let s = [4, 6, 5, 3, 3, 1];
let s2 = [1, 2, 2, 3, 1, 2];
console.log(pickingNumbers(s));
console.log(pickingNumbers(s2));
