function sockMerchant(n, ar) {
  let allSocks = new Object();
  for(let i=0; i<ar.length; i++)
    allSocks[ar[i]] = allSocks[ar[i]] == undefined ? 1 : allSocks[ar[i]] + 1;

  let totalPairs = 0;
  for(const x in allSocks)
    totalPairs += Math.floor(allSocks[x]/2);
  return totalPairs;
};

let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

console.log(sockMerchant(ar.length, ar));
