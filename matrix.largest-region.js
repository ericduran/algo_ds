/**
 * @file
 *
 * Consider a matrix with rows and columns, where each cell contains either
 * a ‘0’ or a ‘1’ and any cell containing a 1 is called a filled cell. Two
 * cells are said to be connected if they are adjacent to each other
 * horizontally, vertically, or diagonally .If one or more filled cells are
 * also connected, they form a region. find the length of the largest region.
 *
 * @see https://www.geeksforgeeks.org/find-length-largest-region-boolean-matrix/
 */

function findLargestRegion(matrix) {
  let max = Number.MIN_VALUE;

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (matrix[r][c] === 1) {
        let count = getCount(matrix, r, c);
        max = Math.max(max, count);
      }
    }
  }

  return max;
}

function getCount(matrix, row, col) {
  // Bounds check.
  if ( row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length ) {
    return 0;
  }

  // We ignore 0's and visited items (we mark visited with 'X').
  if (matrix[row][col] === 0 || matrix[row][col] === 'X') {
    return 0;
  }

  if (matrix[row][col] === 1) {
    // When we visit a 1 change it to 'X' so we don't
    // visit it again. We could also keep a visited matrix.
    matrix[row][col] = 'X';
  }

  // 1 + our surrounding.
  let count = 0;

  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      count += getCount(matrix, row + i, col + j);
    }
  }

  return 1 + count;
}


// should console out 9
console.log(findLargestRegion(
  [ // 2d matrix.
    [0, 1, 1, 0, 0],
    [1, 0, 1, 1, 0],
    [0, 1, 0, 0, 1],
    [1, 0, 0, 0, 0],
    [0, 1, 0, 0, 1]
  ]
), 'output should be 9');

// should return 6.
console.log(findLargestRegion(
  [ // 2d matrix.
    [0, 0, 1, 1, 0],
    [1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 0, 0, 1],
  ]
), 'output should be 6');
