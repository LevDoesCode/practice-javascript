function beautifulDays(i, j, k) {
  let beautiful = 0;
  for (var s = i; s <= j; s++) {
    let rev = parseInt(s.toString().split("").reverse().join(""));

    if ((s - rev) % k == 0) beautiful++;
  }
  return beautiful;
}
