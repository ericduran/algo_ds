class MaxHeap {
  constructor() {
    // Always start with [null] for Heaps.
    this.arr = [null];
  }

  getParent(i) {
    if (i > 1) {
      return Math.floor ( i / 2);
    }
    return false;
  }
  getL(i) {
    return i * 2;
  }
  getR(i) {
    return (i * 2) + 1;
  }
  swap(x, y) {
    let temp = this.arr[x];
    this.arr[x] = this.arr[y];
    this.arr[y] = temp;
  }

  add(num) {
    this.arr.push(num);
    let cur = this.arr.length - 1;
    while ( this.getParent(cur) != false && (this.arr[cur] > this.arr[this.getParent(cur)])) {
      this.swap(cur, this.getParent(cur));
      cur = this.getParent(cur);
    }
  }

  heapifyDown(cur = 1) {
    let val = this.arr[cur];
    let lv = this.arr[this.getL(cur)];
    let rv = this.arr[this.getR(cur)];
    let max = Math.max(lv, rv);
    if (max > val) {
      if (max === lv) {
        this.swap(cur, this.getL(cur));
        this.heapifyDown(this.getL(cur));
      }
      else {
        this.swap(cur, this.getR(cur));
        this.heapifyDown(this.getR(cur));
      }
    }
  }

  extractMax() {
    let val = this.arr[1];
    let last = this.arr.pop();
    if (this.arr.length > 1) {
      this.arr[1] = last;
      this.heapifyDown();
    }
    return val;
  }
}

let mh = new MaxHeap();
mh.add(10);
console.log(mh);

mh.add(100);
console.log(mh);

mh.add(40);
console.log(mh);

mh.add(50);
console.log(mh);

console.log(mh.extractMax());
console.log(mh);

console.log(mh.extractMax());
console.log(mh);

console.log(mh.extractMax());
console.log(mh);

console.log(mh.extractMax());
console.log(mh);
