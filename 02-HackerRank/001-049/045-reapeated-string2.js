function repeatedString(s, n) {
  let aLength = (s.match(/a/g) || "").length;
  let subTotalA = Math.floor(n/s.length) * aLength;
  let remainder = n % s.length;
  let remainderA = 0;
  for (let i=0; i<remainder; i++) {
    if (s[i] === 'a') {
      remainderA++;
    };
  };
  return subTotalA + remainderA;
}

let s1 = "aba";
let n1 = 10;
console.log(repeatedString(s1, n1));

let s2 = "a";
let n2 = 1000000000000;
console.log(repeatedString(s2, n2));
