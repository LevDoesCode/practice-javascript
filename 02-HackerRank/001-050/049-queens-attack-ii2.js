function queensAttack(boardSize, k, queenY, queenX, obstacles) {
  let top = queenY - 1;
  let left = queenX - 1;
  let right = boardSize - queenX;
  let bottom = boardSize - queenY;

  let topLeft = Math.min(top, left);
  let topRight = Math.min(top, right);
  let bottomRight = Math.min(bottom, right);
  let bottomLeft = Math.min(bottom, left);

  obstacles.forEach(([obsY, obsX]) => {
    // top
    if (obsX === queenX && obsY < queenY) {
      top = Math.min(top, queenY - obsY - 1);
    }
    // right
    if (obsY === queenY && obsX > queenX) {
      right = Math.min(right, obsX - queenX - 1);
    }
    // bottom
    if (obsX === queenX && obsY > queenY) {
      bottom = Math.min(bottom, obsY - queenY - 1);
    }
    // left
    if (obsY === queenY && obsX < queenX) {
      left = Math.min(left, queenX - obsX - 1);
    };
    // top left
    if (obsX < queenX && obsY < queenY && queenX - obsX === queenY - obsY) {
      topLeft = Math.min(topLeft, queenX - obsX - 1);
    };
    // top right
    if (obsX > queenX && obsY < queenY && obsX - queenX === queenY - obsY) {
      topRight = Math.min(topRight, obsX - queenX - 1);
    };
    // bottom right
    if (obsX > queenX && obsY > queenY && obsX - queenX === obsY - queenY) {
      bottomRight = Math.min(bottomRight, obsX - queenX - 1);
    };

    // bottom left
    if (obsX < queenX && obsY > queenY && queenX - obsX === obsY - queenY) {
      bottomLeft = Math.min(bottomLeft, queenX - obsX - 1);
    };
  });
  
  return top + right + bottom + left + topLeft + topRight + bottomRight + bottomLeft;
}

let n1 = 4;
let k1 = 0;
let q1 = [4, 4];
let o1 = [];
console.log(queensAttack(n1, k1, q1[0], q1[1], o1));

let n2 = 5;
let k2 = 3;
let q2 = [4, 3];
let o2 = [[5, 5], [4, 2], [2, 3]];
console.log(queensAttack(n2, k2, q2[0], q2[1], o2));

let n3 = 8;
let k3 = 0;
let q3 = [1, 1];
let o3 = [];
console.log(queensAttack(n3, k3, q3[0], q3[1], o3));
