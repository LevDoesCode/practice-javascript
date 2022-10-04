function pageCount(n, p) {
  // Write your code here
  let turnsTotal = Math.floor(n/2);
  let turnsFromFront = Math.floor(p/2);
  let turnsFromBack = turnsTotal - turnsFromFront;
  
  if(turnsFromFront <= turnsFromBack)
      return turnsFromFront;
  if(turnsFromBack < turnsFromFront)
      return turnsTotal - turnsFromFront;
}

console.log(pageCount(6, 2));
console.log(pageCount(5, 4));
