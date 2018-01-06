function getMatrix() {
//  1 1 1 0 1 1
//  0 0 1 1 1 1
//  1 1 1 0 0 0
//  0 0 0 0 0 1

  let m = [
    [1, 1, 1, 0, 1, 1 ],
    [0, 0, 1, 1, 1, 1 ],
    [1, 1, 1, 0, 0, 0 ],
    [0, 0, 0, 0, 0, 1 ]
  ];

  return m;
}



let matrix = getMatrix();
let visited = getMatrix();

function getHighest(row = 0, col = 0) {
  if ((row < 0 || row > 3) || (col < 0 || col > 5)) {
    return 0;
  }

  if (visited[row][col] === true) {
    return 0;
  }

  if (matrix[row][col] === 0) {
    visited[row][col] = true;
    return 0;
  }


  if (matrix[row][col] === 1) {
    visited[row][col] = true;
    return 1 +
      + getHighest(row + 1, col)
      + getHighest(row - 1, col)
      + getHighest(row, col + 1)
      + getHighest(row, col - 1);
  }
}

console.log(getHighest(0, 0));
console.log(getHighest(3, 5));
