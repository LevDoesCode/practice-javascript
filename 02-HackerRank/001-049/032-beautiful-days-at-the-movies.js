function beautifulDays(i, j, k) {
  var beautiful = 0;
  for (var s = i; s <= j; s++) {
    var revString = s.toString();
    var revArray = revString.split("");
    var outArray = [];
    for (var x = revArray.length - 1; x >= 0; x--) {
      outArray.push(revArray[x]);
    }
    var outString = outArray.join("");
    var outInt = parseInt(outString);

    if (Math.abs(s - outInt) % k == 0) beautiful++;
  }
  return beautiful;
}
