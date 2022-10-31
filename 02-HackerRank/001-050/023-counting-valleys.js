function countingValleys(steps, path) {
  let mountains = 0;
  let valleys = 0;
  let add = 0;
  for (let i = 0; i < path.length; i++) {
    if (path[i] == "U") add++;
    else add--;
    if (add == 0)
      if (path[i] == "U") valleys++;
      else mountains++;
  }
  return valleys;
}

const hike1 = "UDDDUDUU";
console.log(countingValleys(hike1.length, hike1));
