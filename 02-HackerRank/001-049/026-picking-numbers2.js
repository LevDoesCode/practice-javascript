function pickingNumbers(a) {
  // using a map instead of an array of frequency
  let map = {};
  let max = 2; // problem condition
  a.forEach((item) => {
    if (map[item]) map[item]++;
    else {
      map[item] = 1;
    }
  });
  // iterate through the dictionary and compare
  Object.entries(map).forEach(([key, val]) => {
    let total = map[key] + (map[key - 1] || 0);
    if (total > max)
      max = total;
  });
  return max;
}

let s = [4, 6, 5, 3, 3, 1];
let s2 = [1, 2, 2, 3, 1, 2];
console.log(pickingNumbers(s));
console.log(pickingNumbers(s2));
