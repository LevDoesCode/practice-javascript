function isEven(num) {
    return num % 2 == 0;
}

function fairRations(B) {
    // Parse to check if it can pass
    // We need ODD EVEN ... EVEN ODD or ODD ODD
    let countPeople = B.length;
    let countLoaves = 0;
    for (let i = 0; i < countPeople - 1; i++) {
        // The number is odd, we give them a load and oen to the perosn next to them
        if (!isEven(B[i])) {
            countLoaves += 2;
            B[i + 1] += 1;
        }
    }
    if (B[countPeople - 1] % 2 == 1) {
        return "NO";
    }
    return countLoaves.toString();
}

let A = [4, 5, 6, 7];
let B = [1, 2];
let C = [2, 3, 4, 5, 6];

console.log(fairRations(A));
console.log(fairRations(B));
console.log(fairRations(C));
