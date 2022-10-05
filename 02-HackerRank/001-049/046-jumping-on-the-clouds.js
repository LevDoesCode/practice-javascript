function jumpingOnClouds(c) {
  let steps = 0;
  console.log(c.length);
  for(let i=0; i<c.length-1; ) {
    if (c[i+2] != 1)
      i+= 2;
    else
      i++;
    steps++;
    console.log(i, steps);
  }
  return steps;
}

let c = [0, 0, 1, 0, 0, 1, 0];
console.log(jumpingOnClouds(c));
