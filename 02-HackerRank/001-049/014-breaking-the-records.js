function breakingRecords(scores) {

  var maxScore = scores[0];
  var minScore = scores[0];
  var maxCount = 0;
  var minCount = 0;
  //10 5 20 20 4 5 2 25 1
  for(var i=1; i < scores.length; i++)
  {
      if(maxScore < scores[i])  //max record broken
      {
          maxScore = scores[i];
          maxCount++;
      }
      if(minScore > scores[i])
      {
          minScore = scores[i];
          minCount++;
      }
  }
  return [maxCount, minCount];
}

let arr = [10, 5, 20, 20, 4, 5, 2, 25, 1]

console.log(breakingRecords(arr));