const ar1 = [1, 2, 3];

function simpleArraySum(ar) {
  let sum = 0;
  for(let i = 0; i<ar.length; i++)
      sum+= ar[i];
  return sum;
}

console.log(simpleArraySum(ar1));