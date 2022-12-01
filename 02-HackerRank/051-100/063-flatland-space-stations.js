function flatlandSpaceStations(numCities, citiesWithSS) {
    citiesWithSS.sort((a, b) => a - b);
    let longestDistance = citiesWithSS[0];
    for (let i = 1; i < citiesWithSS.length; i++) {
        let currentDistance = Math.floor((citiesWithSS[i] - citiesWithSS[i - 1]) / 2);
        (currentDistance > longestDistance) && (longestDistance = currentDistance);
    }
    let lastDistance = numCities - 1 - citiesWithSS[citiesWithSS.length - 1];
    (lastDistance > longestDistance) && (longestDistance = lastDistance);
    return longestDistance;
}

let n1 = 5;
let cities1 = [0, 4];
console.log(flatlandSpaceStations(n1, cities1));

let n2 = 6; // [0, 1, 2, 3, 4, 5]
let cities2 = [0, 1, 2, 4, 3, 5];
console.log(flatlandSpaceStations(n2, cities2));

let n3 = 8; // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let cities3 = [3, 7];
console.log(flatlandSpaceStations(n3, cities3));

let n4 = 100;
let cities4 = [93, 41, 91, 61, 30, 6, 25, 90, 97, 69,
    66, 78, 37, 67, 46, 59, 18, 42, 47, 43,
    23, 50, 2, 57, 95, 3, 29, 81, 22, 10, 52,
    31, 35, 94, 80, 5, 60, 58, 64, 8, 48, 62,
    7, 45, 63, 40, 21, 92, 0, 17, 98, 1, 68, 85,
    99, 24, 4, 34, 20, 26, 72, 51, 75, 27, 54,
    86, 33, 28, 87, 56, 82, 83, 19, 44, 15,
    9, 84, 89, 14, 49, 12, 38, 79, 96, 88, 13, 16, 71, 77, 73];
console.log(flatlandSpaceStations(n4, cities4));

let n5 = 99998;
let cities5 = [28000, 58701, 43043, 24909, 28572];
console.log(flatlandSpaceStations(n5, cities5));
