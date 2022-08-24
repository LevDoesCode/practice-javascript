function getTotalX(a, b) {
  let max = Math.max(Math.max(...a), Math.max(...b));
  let inBetween = [];
  for(let i=1; i<=max; i++)
  {
    let mods = 0;
    for(let j=0; j<a.length; j++)
    {
      mods += i % a[j];
    }
    if(mods == 0)
    {
      for(let k=0; k<b.length; k++)
      {
        mods += b[k] % i;
      }
      if(mods == 0)
      {
        inBetween.push(i);
      } else continue;
    }
  }
  return inBetween.length;
}
