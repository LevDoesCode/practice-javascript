function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appcount = 0;
  let orcount = 0;

  for (let i = 0; i < apples.length; i++) {
    apples[i] = apples[i] + a;
    if (apples[i] >= s && apples[i] <= t) appcount++;
  }

  for (let i = 0; i < oranges.length; i++) {
    oranges[i] = oranges[i] + b;
    if (oranges[i] >= s && oranges[i] <= t) orcount++;
  }
  console.log(appcount);
  console.log(orcount);
}

let all1 = { s: 7, t: 11, a: 5, b: 15, apples: [-2, 2, 1], oranges: [5, -6] };
let all2 = { s: 2, t: 3, a: 1, b: 5, apples: [2], oranges: [-2] };

countApplesAndOranges(all1.s, all1.t, all1.a, all1.b, all1.apples, all1.oranges);
countApplesAndOranges(all2.s, all2.t, all2.a, all2.b, all2.apples, all2.oranges);
