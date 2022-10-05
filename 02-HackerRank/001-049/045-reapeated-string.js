function repeatedString(s, n) {
  // Number of a's in the pattern
  let aMatches = s.match(/a/g);
  if (aMatches == null)
    return 0;
  let asInString = aMatches.length;
  // Find the number of whole strings we can fit
  let wholeStrings = Math.floor(n / s.length);
  // Find the number of remainder character after we fit whole strings
  let remainder = n %  s.length;
  // Number of a's in the string with remaining characters
  let asInRemainder = 0;
  if (remainder != 0)
  {
    let matchRemain = s.slice(0, remainder).match(/a/g);
    //console.log(asInString, wholeStrings, remainder, matchRemain);
    if (matchRemain != null)
      asInRemainder = s.slice(0, remainder).match(/a/g).length;
  }
  return asInString * wholeStrings + asInRemainder;
}

let s1 = "aba";
let n1 = 10;
console.log(repeatedString(s1, n1));

let s2 = "a";
let n2 = 1000000000000;
console.log(repeatedString(s2, n2));

let s3 = "jdiacikk";
let n3 = 899491;
console.log(repeatedString(s3, n3));

let s4 = "ceebbcb";
let n4 = "817723";
console.log(repeatedString(s4, n4));