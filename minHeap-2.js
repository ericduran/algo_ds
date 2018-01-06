class MinHeap {
  constructor() {
    this.arr = [null];
  }

  getParent(i) {
    if (i > 1) {
      return Math.floor(i / 2);
    }
    return false;
    // error.
  }

  getL(i) {
    return i * 2;
  }

  getR(i) {
    return i * 2 + 1;
  }

  swap(x, y) {
    let temp = this.arr[x];
    this.arr[x] = this.arr[y];
    this.arr[y] = temp;
  }

  add(num) {
    this.arr.push(num);
    let cur = this.arr.length - 1;
    while (this.getParent(cur) != false && this.arr[cur] < this.arr[this.getParent(cur)]) {
        this.swap(cur, this.getParent(cur));
        cur = this.getParent(cur);
    }
  }

  extractMin() {
    let val = this.arr[1];
    let last = this.arr.pop();
    if (this.arr.length > 1) {
      this.arr[1] = last;
      this.heapifyDown();
    }
    return val;
  }

  heapifyDown(cur = 1) {
    let val = this.arr[cur];
    let lv = this.arr[this.getL(cur)];
    let rv = this.arr[this.getR(cur)];
    let min = Math.min(lv, rv);
    if (min < val) {
      // we have to swap if we get in here.
      if (min == lv) {
        this.swap(cur, this.getL(cur));
        this.heapifyDown(this.getL(cur));
      }
      else {
        this.swap(cur, this.getR(cur));
        this.heapifyDown(this.getR(cur));
      }
    }
  }
}

let mh = new MinHeap();
mh.add(19);
mh.add(10);
mh.add(11);
mh.add(2);
mh.add(8);
mh.add(6);
console.log(mh);

console.log(mh.extractMin());
console.log(mh);

console.log(mh.extractMin());
console.log(mh);

console.log(mh.extractMin());
console.log(mh);

console.log(mh.extractMin());
console.log(mh);

console.log(mh.extractMin());
console.log(mh);

console.log(mh.extractMin());
console.log(mh);
