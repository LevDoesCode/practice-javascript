function angryProfessor(k, a) {
  a.sort();
  return a[k - 1] <= 0 ? "NO" : "YES";
}

let arr = [-3, -1, -2, 3, 0, 3, 1];
console.log(angryProfessor(2, arr));
console.log(angryProfessor(4, arr));
console.log(angryProfessor(5, arr));