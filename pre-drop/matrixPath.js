// [ 0: [ 1, 1, 1, 0, 1, 1], 1: []...]Given a 2-d array filled with 0's and 1's, calculate the size of the largest area having only 1's


let matrix = [
  [1, 1, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 1],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 1]
];

function getLargestArea(matrix) {
  let num = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 1) {
        num.push(getArea(matrix, i, j));
      }
    }
  }

  return Math.max(...num);
}

function getArea(matrix, row, col) {
  // If not visited, add to count.
  if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length) {
    return 0;
  }

  if (matrix[row][col] != 1) {
    return 0;
  }

  // Mark it visited so it doesn't get double counted.
  matrix[row][col] = 0;
  // Up, Down, Left, Right
  return 1
    + getArea(matrix, row + 1, col)
    + getArea(matrix, row - 1, col)
    + getArea(matrix, row, col + 1)
    + getArea(matrix, row, col - 1);
}

console.log(getLargestArea(matrix));
