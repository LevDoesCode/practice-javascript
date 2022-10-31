function formingMagicSquare(s) {
  // Array of arrays to simple array
  let grid = [s[0][0], s[0][1], s[0][2], s[1][0], s[1][1], s[1][2], s[2][0], s[2][1], s[2][2]];
  // grid = [5, 3, 4, 1, 5, 8, 6, 4, 2];
  // now we have index 0-9;
  // A B C
  // D E F
  // G H I
  // A, C, G, I are always even, 2, 4, 6 or 8
  // B, D, F, H are always odd, 1, 3, 7, 9
  // E is always 5
  // One 3x3 magic cube is
  // 6 7 2
  // 1 5 9
  // 8 3 4
  // These are all the possible magic cube solutions in array form
  let magic = [];
  magic.push([2, 9, 4, 7, 5, 3, 6, 1, 8]);
  magic.push([2, 7, 6, 9, 5, 1, 4, 3, 8]);
  magic.push([4, 9, 2, 3, 5, 7, 8, 1, 6]);
  magic.push([4, 3, 8, 9, 5, 1, 2, 7, 6]);
  magic.push([6, 7, 2, 1, 5, 9, 8, 3, 4]);
  magic.push([6, 1, 8, 7, 5, 3, 2, 9, 4]);
  magic.push([8, 1, 6, 3, 5, 7, 4, 9, 2]);
  magic.push([8, 3, 4, 1, 5, 9, 6, 7, 2]);
  
  // We'll calculate the costs for each sequence
  let costs = [];
  for(let i=0; i<magic.length; i++) {
    let totalCost = 0;
    for (let j=0; j<grid.length; j++) {
      totalCost+= Math.abs(grid[j] - magic[i][j]);
    }
    costs.push(totalCost);
  }

  // Return the lowest cost
  return Math.min(...costs);
}

let s = [[5, 3, 4], [1, 5, 8], [6, 4, 2]];
let s2 = [[4, 9, 2], [3, 5, 7], [8, 1, 5]];
console.log(formingMagicSquare(s));
console.log(formingMagicSquare(s2));
