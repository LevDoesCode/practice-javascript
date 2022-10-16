function queensAttack(n, k, y = r_q, x = c_q, obstacles) {
  if (n <= 0 || n > 1000 || k < 0 || k > 100000) // optional, instructions are not clear
    return 0;
  // We'll establish the bounds of the possible moves in the 4 axis the queen can make
  // y = mx + b1 -> y = x + b1 -> b1 = y - x
  // y = mx + b2 -> y = -x + b2 -> b2 = x + y
  // y = x + b1
  // x = y - b1
  // y = -x + b2
  // x = b2 - y
  let b1 = y - x;
  let b2 = y + x;
  let horMin = 0;
  let horMax = n+1;
  let verMin = 0;
  let verMax = n+1;
  let posMin = -b1 > 0 ? -b1 : 0; // The x when y is 0 or x is 0
  let posMax = n+1 - b1 < n+1 ? n+1 - b1 : n+1; // the x when y is n+1
  let negMin = b2 - (n+1) > 0 ? b2 - (n+1) : 0; // The x when y is n+1 or 0
  let negMax = b2 < n+1 ? b2 : n+1; // the x when y is 0 or x is n+1
  // console.log("Hor bounds: ", horMin, " - ", horMax);
  // console.log("Ver bounds: ", verMin, " - ", verMax);
  // console.log("Pos bounds: ", posMin, " - ", posMax);
  // console.log("Neg bounds: ", negMin, " - ", negMax);
  // console.log("---------------");
  // We'll iterate through the obstacles array and edit the bounds
  obstacles.forEach((value, index, array) => {
    // Check horizontal bounds
    if (value[0] == y) {
      if (value[1] < x && value[1] > horMin) {
        horMin = value[1];
      }
      else if (value[1] > x && value[1] < horMax) {
        horMax = value[1];
      }
    };
    // Check vertical bounds
    if (value[1] == x) {
      if (value[0] < y && value[0] > verMin) {
        verMin = value[0];
      }
      else if (value[0] > y && value[0] < verMax) {
        verMax = value[0];
      }
    };
    // Check positive diagonal
    let tempy = value[1] + b1;
    if (value[0] == tempy) {
      if (tempy < y && tempy > posMin) {
        posMin = tempy;
      }
      else if (tempy > y && tempy < posMax) {
        posMax = tempy;
      }
    };
    // Check negative diagonal
    tempy = value[1] + b2;
    if (value[0] == tempy) {
      if (tempy < y && tempy > negMin) {
        negMin = tempy;
      }
      else if (tempy > y && tempy < negMax) {
        negMax = tempy;
      }
    };
  });
  
  // console.log("Hor bounds: ", horMin, " - ", horMax);
  // console.log("Ver bounds: ", verMin, " - ", verMax);
  // console.log("Pos bounds: ", posMin, " - ", posMax);
  // console.log("Neg bounds: ", negMin, " - ", negMax);

  return (horMax - horMin - 2) + (verMax - verMin - 2) + (posMax - posMin - 2) + (negMax - negMin - 2);
}

let n1 = 4;
let k1 = 0;
let q1 = [4, 4];
let o1 = [];
//console.log(queensAttack(n1, k1, q1[0], q1[1], o1));

let n2 = 5;
let k2 = 3;
let q2 = [4, 3];
let o2 = [[5, 5], [4, 2], [2, 3]];
//console.log(queensAttack(n2, k2, q2[0], q2[1], o2));

let n3 = 8;
let k3 = 0;
let q3 = [1, 1];
let o3 = [[5, 3]];
//console.log(queensAttack(n3, k3, q3[0], q3[1], o3));
//console.log(queensAttack(n3, k3, 5, 6, o3));

let n4 = 88587;
let k4 = 9;
let q4 = [20001, 20003];
let o4 = [[20001, 20002], [20001, 20004], [20000, 20003], [20002, 20003], [20000, 20004],
[20000, 20002], [20002, 20004], [20002, 20002], [564, 323]];
console.log(queensAttack(n4, k4, q4[0], q4[1], o4));
