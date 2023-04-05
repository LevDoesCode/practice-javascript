// Works but it's not complete

function isEven(num) {
    return num % 2 == 0;
}

function fairRations(B) {
    // Parse to check if it can pass
    // We need ODD EVEN ... EVEN ODD or ODD ODD
    let linkStart;
    let linkMid;
    let linkEnd;
    let count = 0;
    for (let i = 0; i < B.length - 1; i++) {
        // The number is even, the next also has to be even
        if (isEven(B[i])) {
            continue;
        } else {
            count += 2; // In either case, if ok, we will add 2 breads
            if (!isEven(B[i + 1])) {
                // B[i] and B[i + 1] are odd, that's ok
                i += 2; // skip to B[i + 2]
                continue;
            } else {
                count += 2;
                // B[i + 1] is even, we need to iterate through all of them
                i++;
                while (i < B.length && isEven(B[i])) {
                    if (i == B.length - 1) {
                        return "NO";
                    }
                    i++;
                }
            }
        }
    }
    return count.toString();
}

let A = [4, 5, 6, 7];
let B = [1, 2];
let C = [2, 3, 4, 5, 6];

console.log(fairRations(A));
console.log(fairRations(B));
console.log(fairRations(C));
