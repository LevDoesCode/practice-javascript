// Works in limited scenarios
function nonDivisibleSubset(q, s) {
    s = [...new Set(s)].sort();
    let subsets = [];
    let max = 0;
    for (let i = 0; i < s.length - 1; i++) {
        for (let j = i + 1; j < s.length; j++) {
            if ((s[i] + s[j]) % q != 0) { // We find a pair
                subsets.push([s[i], s[j]]);
                for (let k = j + 1; k < s.length; k++) { // Iterate through the rest of the items
                    let addItem = true;
                    for (let l = 0; l < subsets[subsets.length - 1].length; l++) { // Iterate through the items already in the subset
                        if ((s[k] + subsets[subsets.length - 1][l]) % q == 0) {
                            addItem = false;
                            break;
                        }
                    }
                    if (addItem) {
                        subsets[subsets.length - 1].push(s[k]);
                        (subsets[subsets.length - 1].length > max) && (max = subsets[subsets.length - 1].length)
                    }
                }
            }
        }
    }
    return max;
}

let set1 = [19, 10, 12, 10, 24, 25, 22];
console.log(nonDivisibleSubset(4, set1));
