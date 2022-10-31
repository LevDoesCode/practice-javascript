// Adapted from https://www.youtube.com/watch?v=rgNCtNbF0os
function climbingLeaderboard(ranked, player) {
  const pos = [...new Set(ranked)]
  return player.map(v => pos.length - pos.filter(p => v>=p).length + 1);
}

let r1 = [100, 100, 50, 50, 50, 40, 40, 20, 10];
let p1 = [5, 25, 50, 120];
console.log(climbingLeaderboard(r1, p1));

let r2 = [100, 90, 90, 80, 75, 60];
let p2 = [50, 65, 77, 90, 102];
console.log(climbingLeaderboard(r2, p2));

let r3 = [100, 100, 50, 50, 50, 40, 40, 20, 20, 10, 10];
let p3 = [5, 25, 50, 120];
console.log(climbingLeaderboard(r3, p3));
