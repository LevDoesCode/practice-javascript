// Adapted from https://www.youtube.com/watch?v=rgNCtNbF0os
function climbingLeaderboard(ranked, player) {
  let playerRank = [];
  let rankedIndex = 0;
  let pos = 1;
  for (let i=player.length - 1; i >=0; i--) {
    if (ranked[rankedIndex] <= player[i]) {
      playerRank.push(pos);
    } else {
      while (rankedIndex < ranked.length -1 && ranked[rankedIndex] > player[i]) {
        if (ranked[rankedIndex] !== ranked[rankedIndex - 1]) {
          pos++;
        }
        rankedIndex++;
      }
      if (ranked[rankedIndex] <= player[i]) {
        playerRank.push(pos);
      } else {
        playerRank.push(pos + 1);
      }
    }
  }
  return playerRank.reverse();
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
