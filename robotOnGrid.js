
let grid = [
  [0,0,0,0,0,0,0],
  [0,0,0,0,false,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,false,0,false],
  [0,0,false,0,0,false,false],
  [0,0,0,0,0,0,false],
  [0,0,0,0,0,false,0]
];


function getPath(maze, row = maze.length - 1 , col = maze[0].length - 1, path = [], mem = new Set()) {
  console.log('called');
  if (row < 0 || col < 0 || maze[row][col] === false) {
    return false;
  }

  isAtDest = (row === 0 && col === 0);

  let setKey = row + "-" + col;
  if (mem.has(setKey)) {
    console.log('h');
    return false;
  }

  if(isAtDest || getPath(maze, row - 1, col, path, mem) || getPath(maze, row, col - 1, path, mem)) {
    path.push([row, col]);
    return true;
  }

  mem.add(setKey);
  return false;
}


let a = [];
console.log(getPath(grid, grid.length - 1, grid[0].length - 1, a));
console.log(a);
