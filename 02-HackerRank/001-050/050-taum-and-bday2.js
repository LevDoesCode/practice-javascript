function taumBday(b, w, bc, wc, z) {
    // We need to cast all to BigInt to support large integers
    const totalBlackCost = BigInt(wc) + BigInt(z) < BigInt(bc) ? (BigInt(wc) + BigInt(z)) * BigInt(b) : BigInt(b) * BigInt(bc);
    const totalWhiteCost = BigInt(bc) + BigInt(z) < BigInt(wc) ? (BigInt(bc) + BigInt(z)) * BigInt(w) : BigInt(w) * BigInt(wc);
    console.log(totalBlackCost, totalWhiteCost);
    return BigInt(totalBlackCost + totalWhiteCost);
}

b1 = 10;
w1 = 10;
bc1 = 1;
wc1 = 1;
z1 = 1;
console.log(taumBday(b1, w1, bc1, wc1, z1));

b2 = 5;
w2 = 9;
bc2 = 2;
wc2 = 3;
z2 = 4;

console.log(taumBday(b2, w2, bc2, wc2, z2));

b3 = 3;
w3 = 6;
bc3 = 9;
wc3 = 1;
z3 = 1;

console.log(taumBday(b3, w3, bc3, wc3, z3));

b4 = 7;
w4 = 7;
bc4 = 4;
wc4 = 2;
z4 = 1;
console.log(taumBday(b4, w4, bc4, wc4, z4));

b5 = 3;
w5 = 3;
bc5 = 1;
wc5 = 9;
z5 = 2;
console.log(taumBday(b5, w5, bc5, wc5, z5));

b6 = 742407782;
w6 = 90529439;
bc6 = 847666641;
wc6 = 8651519;
z6 = 821801924;
console.log(taumBday(b6, w6, bc6, wc6, z6));

b7 = 736418699;
w7 = 754161925;
bc7 = 912285746;
wc7 = 841360803;
z7 = 736841333;
console.log(taumBday(b7, w7, bc7, wc7, z7));