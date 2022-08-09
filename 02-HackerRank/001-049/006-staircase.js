function staircase(n) {
  let space = "";
  let h = "";
  for (let i = 0; i < n; i++) {
    h += "#";
    for (let j = 0; j < n - i - 1; j++) space += " ";
    console.log(space + h);
    space = "";
  }
}

staircase(16);
