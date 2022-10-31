// Works but it's time consuming
function climbingLeaderboard(ranked, player) {
  let playerRank = [];
  let reduced = [];

  ranked.forEach((value, index, array) => {
    if (value != array[index+1]) {
      reduced.push(value);
    };
  });
  player.forEach((playerScore, playerIndex, playerArray) => {
    let currentRank = 1;
    reduced.forEach((reducedScore, reducedRank, reducedArray) => {
      if (reducedScore > playerScore)
        currentRank++;
    });
    playerRank.push(currentRank);
  });
  return playerRank;
}

let r = [100, 100, 50, 40, 40, 20, 10];
let p = [5, 25, 50, 120];

console.log(climbingLeaderboard(r, p));
