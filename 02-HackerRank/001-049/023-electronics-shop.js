function getMoneySpent(keyboards, drives, b) {
  let minK = Math.min(...keyboards);
  let minD = Math.min(...drives);

  if (b < minK + minD) return -1;
  let currentPrice = 0;
  let maxPrice = 0;
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      let current = keyboards[i] + drives[j];
      if (current <= b && current > maxPrice)
        maxPrice = current;
    }
  }
  return maxPrice;
}
