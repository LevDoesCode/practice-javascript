function timeConversion(s) {
  // get AM or PM
  let ap = s.slice(s.length - 2, s.length);
  let res = s.slice(0, s.length - 2);
  let hr = res.slice(0, 2);
  let hrInt = parseInt(hr);
  if (ap == "AM") {
    if (hrInt == 12) res = "00" + res.slice(2, res.length);
    else if (hrInt < 10) res = "0" + hrInt + res.slice(2, res.length);
  } else if (hrInt < 12) {
    res = hrInt + 12 + res.slice(2, res.length);
  }
  return res;
}

console.log(timeConversion("07:05:45PM"));
console.log(timeConversion("12:05:45PM"));
