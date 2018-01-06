function move(row = 0, col = 0, matrix) {
  if (row > 4 || col > 4) {
    return false;
  }
  if (row === 4 && col === 4) {
    return true;
  }
  if (matrix[row][col] === 'x') {
    return false;
  }

  return move(row + 1, col, matrix) || move(row, col + 1, matrix);
}

let matrix = [
  [0, 0, 0, "x", 0],
  [0, "x", 0, "x", 0],
  [0, "x", 0, 0, 0],
  [0, "x", "x", 0, 0],
  [0, "x", "x", 0, 0]
];
console.log(move(0, 0, matrix));
