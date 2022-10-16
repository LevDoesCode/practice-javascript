function kangaroo(x1, v1, x2, v2) {
  if ((x1 > x2 && v1 >= v2) || (x2 > x1 && v2 >= v1)) {
    return "NO";
  }

  let jump = (x2 - x1) / (v2 - v1);
  if (jump % 1 == 0) return "YES";
  else return "NO";
}

console.log(kangaroo(0, 3, 4, 2));
console.log(kangaroo(0, 2, 5, 3));
