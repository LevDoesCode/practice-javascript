function divisibleSumPairs(n, k, ar) {
  let count = 0;
  for(let i=0; i<n-1; i++)
  {
      for(let j=i+1; j<n; j++)
          if(i<j && (ar[i]+ar[j])%k == 0)
              count += 1;
  }
  return count
}

let ar = [1, 3, 2, 6, 1, 2];
let k = 3;

console.log(divisibleSumPairs(ar.length, k, ar));