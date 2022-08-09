function birthdayCakeCandles(candles) {
  let maxIndex = 0;
  let maxCount = 0;
  
  for(let i=0; i<candles.length; i++)
  {
      if(candles[i] > candles[maxIndex])
      {
          maxIndex = i;
          maxCount = 0;
      }
      if(candles[i] == candles[maxIndex])
          maxCount += 1;
  }
  return maxCount
}

let ar1 = [3, 2, 1, 3];
console.log(birthdayCakeCandles(ar1));