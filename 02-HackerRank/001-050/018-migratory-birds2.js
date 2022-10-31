function migratoryBirds(arr) {
  let count = {};
  // Turn the array into a dictionary (key-value pairs)
  // with id's (keys) initialized to zero (values)
  for (let i = 0; i < arr.length; i++) count[arr[i]] = 0;
  // Count how many instances there are
  for (let i = 0; i < arr.length; i++) count[arr[i]] += 1;

  let largest = Math.max.apply(
    null,
    Object.keys(count).map((x) => {
      return count[x];
    })
  );
  let result = Object.keys(count).reduce((result, key) => {
    if (count[key] === largest) {
      result.push(key);
    }
    return result;
  }, []);
  return Math.min(...result);
}

let arr = [1, 4, 4, 4, 5, 3];
let arr2 = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];

console.log(migratoryBirds(arr));
console.log(migratoryBirds(arr2));
