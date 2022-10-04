function birthday(s, d, m) {
  let count = 0;
  for(let i=0; i<s.length - m + 1; i++)
  {
      let sum = 0;
      for(let j=i; j< i + m; j++)
          sum += s[j];
      if(sum == d)
          count++;
  }
  return count;
};

let s = [2, 2, 1, 3, 2];
let d = 4;
let m = 2;

console.log(birthday(s, d, m));