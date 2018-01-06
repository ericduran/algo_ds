function getMatrix(n) {
  let arr = [];
  let count = 0;
  for (let i=0; i < n; i++) {
    arr[i] = [];
    for (let j = 0; j < n; j++) {
      arr[i][j] = ++count;
    }
  }
  return arr;
}

class Graph {
  constructor(n) {
    this.arr = getMatrix(n);
    this.row = 0;
    this.col = 0;
    this.max = n;
  }

  getCur() {
    return {
      this.row,
      this.col
    };
  }

  goRight() {
    if (row < this.max) {
      this.row++;
    }
    else {
      return false;
    }
  }

  goLeft() {
    if (row > 0) {
      this.row--;
    }
    else {
      return false;
    }
  }
  goDown() {
    if (col < this.max) {
      this.row++;
    }
    else {
      return false;
    }
  }
  goUp() {
    if (col < 0) {
      this.row--;
    }
    else {
      return false;
    }
  }





  traverse() {
    let row = 0;
    let col = 0;
    while (col < this.arr.length) {
      console.log(this.arr[row][col]);
      col++;
    }
    col--;
    while (row < this.arr[row].length) {
      row++
      console.log(this.arr[row][col]);
    }
  }

  getNext(row, col) {
    if (this.arr[row + 1]) {
      row++;
    }
    if (this.arr[row][col + 1]) {
      col ++;
    }
    return [row, col];
  }
}

let g = new Graph(10);
g.traverse();
