class MinHeap {
  constructor() {
    this.arr = [null];
  }
  getParent(i) { }
  getL(i) {}
  getR(i) {}
  swap(a, b) {}
  add(num) {
    this.arr.push(num);
    let cur = this.arr.length - 1;
    while (this.arr[cur] < this.arr[this.getParent(cur)]) {
      swap(cur, this.getParent(cur));
      cur = this.getParent(cur);
    }
  }
  extractMin() {
    // error for empty arr.
    // always start at 1.
    let val = this.arr[1];
    let last = this.arr.pop();
    if (this.arr.length > 1) {
      this.arr[1] = last;
      this.heapifyDown();
    }
    return val;
  }

  heapifyDown(cur = 1) {
    // swap down with smallest child.
    let val = this.arr[cur];
    let lv = this.arr[this.getL(cur)];
    let rv = this.arr[this.getR(cur)];
    let min = Math.max(lv, rv);
    if (min < val) {
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
