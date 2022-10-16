function miniMaxSum(arr) {
  // Finding min and max
  // find min
  let minIndex = 0;
  for (let i = 0; i < arr.length; i++) if (arr[i] < arr[minIndex]) minIndex = i;
  // find max
  let maxIndex = 0;
  for (let i = 0; i < arr.length; i++) if (arr[i] > arr[maxIndex]) maxIndex = i;
  // find min sum
  let minSum = 0;
  for (let i = 0; i < arr.length; i++) if (i != maxIndex) minSum += arr[i];
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) if (i != minIndex) maxSum += arr[i];
  // console.log(minSum, maxSum)
  // Sorting the Array
  arr.sort();
  let minAdd = 0;
  for (let i = 0; i < arr.length - 1; i++) minAdd += arr[i];
  let maxAdd = 0;
  for (let i = 1; i < arr.length; i++) maxAdd += arr[i];
  console.log(minAdd, maxAdd);
}

let ar1 = [1, 2, 3, 4, 5];
let ar2 = [7, 69, 2, 221, 8974];
miniMaxSum(ar1);
miniMaxSum(ar2);
