function nonDivisibleSubset(k, s) {
    s = [...new Set(s)];
    let count = 0;
    let remainders = Array(k).fill(0); // Array of remainders
    for (let i = 0; i < s.length; i++) {
        remainders[s[i] % k]++; //console.log(remainders, s[i]);
    }
    // If k is even (8) [0, 1, 2, 3, 4, 5, 6, 7]
    // We can only take one element from the k/2 (4) remainder count
    // If k is odd (7) [0, 1, 2, 3, 4, 5, 6]
    // We take all elements from the remainders group with the highest count
    count += Math.min(1, remainders[0]);
    for (let i = 1; i <= Math.floor(k / 2); i++) {
        if (i == k - i) {
            count++;
        }
        else {
            count += Math.max(remainders[i], remainders[k - i]);
        }
    }
    return [count, remainders];
}

let set1 = [19, 10, 12, 10, 24, 25, 22];
console.log(nonDivisibleSubset(4, set1));

let set2 = [19, 10, 12, 10, 24, 25, 22];
console.log(nonDivisibleSubset(5, set2));

let set3 = [278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436];
console.log(nonDivisibleSubset(7, set3));
