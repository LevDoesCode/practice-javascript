// By Mathew
function repeatedString(s, n) {
  let answer = 0;
  let numWholePattern = Math.floor(n/s.length);
  let remainder = n % s.length;
  for (let i=0; i<s.length; i++) {
    if(s[i] === 'a') {
      answer += numWholePattern;
      if (i < remainder) {
        answer += 1;
      };
    };
  };
  return answer;
}

let s1 = "aba";
let n1 = 10;
console.log(repeatedString(s1, n1));

let s2 = "a";
let n2 = 1000000000000;
console.log(repeatedString(s2, n2));
