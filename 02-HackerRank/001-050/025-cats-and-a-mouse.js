function catAndMouse(x, y, z) {
  let ax = Math.abs(z - x);
  let ay = Math.abs(z - y);
  let answer = "";
  ax < ay ? answer = "Cat A" : ax > ay ? answer = "Cat B" : answer = "Mouse C";
  return answer;
}

let s1 = [1, 2, 3];
console.log(catAndMouse(s1[0], s1[1], s1[2]));
s1 = [1, 3, 2];
console.log(catAndMouse(s1[0], s1[1], s1[2]));
s1 = [2, 5, 7];
console.log(catAndMouse(s1[0], s1[1], s1[2]));
s1 = [2, 7, 3];
console.log(catAndMouse(s1[0], s1[1], s1[2]));
