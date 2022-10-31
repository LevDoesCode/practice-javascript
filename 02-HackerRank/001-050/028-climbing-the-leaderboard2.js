// Works in limited scenarios
function climbingLeaderboard(ranked, player) {
  let playerRank = Array(player.length).fill(1);
  let repeatedScores = 0;
  let playerIndex = player.length-1;
  for (let i=-1; playerIndex >= 0; ) {
    //console.log(i, ranked.length-1, playerIndex);
    //console.log(playerRank);
    if (i+1 < ranked.length)
      i++;
    if (i>0 && ranked[i] == ranked[i-1]) {
      repeatedScores++;
      if(i<ranked.length-1) continue;
    }
    else if (player[playerIndex] >= ranked[i]) {
      console.log('ho');
      playerRank[playerIndex] = i - repeatedScores + 1;
      playerIndex--;
    }
    if(i==ranked.length-1)  { // this means player[playerIndex] < ranked[i]
      console.log('yo');
      playerRank[playerIndex] = i - repeatedScores + 2;
      playerIndex--;
    }
    console.log("rank index: " + i + " rank score: " + ranked[i] + " playerIndex: " + playerIndex +
      " player[playerIndex]: " + player[playerIndex] + " playerRank[pIndex]: " + 
      playerRank[playerIndex] + " reapeated: " + repeatedScores);
  };
  return playerRank;
}

let r1 = [100, 100, 50, 50, 50, 40, 40, 20, 10];
// let r = [100, 50, 40, 20, 10];
let p1 = [5, 25, 50, 120];
//console.log(climbingLeaderboard(r1, p1));

let r2 = [100, 90, 90, 80, 75, 60];
let p2 = [50, 65, 77, 90, 102];
//  pk = [, , , , 2,1]
//console.log(climbingLeaderboard(r2, p2));

let r3 = [100, 100, 50, 50, 50, 40, 40, 20, 20, 10, 10];
let p3 = [5, 25, 50, 120];
console.log(climbingLeaderboard(r3, p3));

// if (0) {
//   console.log('hi1');
// }
// else if (0) {
//   console.log('hi2');
// }
// else if (1) {
//   console.log('hi3');
// }