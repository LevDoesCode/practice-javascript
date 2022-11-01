function utopianTree(n) {
  let totalHeight = 0;
  for(let i=0; i<=n; i++) {
    totalHeight = i % 2 == 0 ? totalHeight + 1 : totalHeight * 2;
  }
  return totalHeight;
}

console.log(utopianTree(5));
