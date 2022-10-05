// By Mathew
function equalizeArray(arr) {
  let maxLength = 0;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != arr[i + 1]) {
      let tempArr = arr.filter((e) => e == arr[i]);
      if (tempArr.length > maxLength) {
        maxLength = tempArr.length;
      }
    }
  }
  return arr.length - maxLength;
}

arr = [3, 3, 2, 1, 3];
console.log(equalizeArray(arr));

let arr = [3, 3, 2, 1, 3];
console.log(equalizeArray(arr));
let arr2 = [1, 2, 3, 1, 2, 3, 3, 3];
console.log(equalizeArray(arr2));
let arr3 = [
  46, 80, 18, 26, 60, 66, 24, 21, 60, 18, 14, 34, 72, 69, 14, 8, 13, 24, 14, 81, 81, 24, 81, 21, 60, 34, 18, 44, 81, 8, 80, 75, 100, 74, 100, 28, 100, 82, 81,
  80, 13, 96, 69, 11, 11, 24, 60, 3, 14, 13, 74, 96, 81, 8, 100, 28, 43, 60, 44, 8, 21, 11, 80, 3, 69, 4, 80, 28, 81, 11, 66,
];
console.log(equalizeArray(arr3));
