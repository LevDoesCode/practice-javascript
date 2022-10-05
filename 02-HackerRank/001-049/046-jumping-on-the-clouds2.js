function jumpingOnClouds(c) {
  let i=0;
  let steps = 0;
  while( i < c.length - 1) {
    if (c[i+2] == 0)
      i++;
    i++;
    steps++;
  }
  return steps;
}

let c = [0, 0, 1, 0, 0, 1, 0];
console.log(jumpingOnClouds(c));
