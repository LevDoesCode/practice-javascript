let ar1 = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

function diagonalDifference(arr) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < arr.length; i++)
    for (let j = 0; j < arr[i].length; j++) {
      if (i == j) sum1 += arr[i][j];
      if (j + i == arr.length - 1) sum2 += arr[i][j];
    }
  return Math.abs(sum1 - sum2);
}

console.log(diagonalDifference(ar1));
