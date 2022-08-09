let ar1 = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
  let p = 0;
  let n = 0;
  let z = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] < 0 ? n++ : arr[i] > 0 ? p++ : z++;
  }
  let numDec = 6;
  console.log((p / arr.length).toFixed(numDec));
  console.log((n / arr.length).toFixed(numDec));
  console.log((z / arr.length).toFixed(numDec));
}

plusMinus(ar1);
