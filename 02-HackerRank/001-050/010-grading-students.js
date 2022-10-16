function gradingStudents(grades) {
  let rounded = [];
  for (let i = 0; i < grades.length; i++) {
    let myMod = grades[i] % 5;
    if (grades[i] < 38 || myMod <= 2) {
      rounded.push(grades[i]);
    } else if (myMod >= 3) {
      rounded.push(grades[i] + 5 - myMod);
    }
  }
  return rounded;
}

let ar1 = [73, 67, 38, 33];
console.log(ar1);
