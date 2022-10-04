function sockMerchant(n, ar) {
  ar.sort();
  let total = 0;
  for (let i = 0; i < ar.length - 1; i++)
    if (ar[i] == ar[i + 1]) {
      total++;
      i++;
    }
  return total;
}

let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

console.log(sockMerchant(ar.length, ar));
