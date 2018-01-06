// TODO: Write it in bubbleUp && Bubble Down methods instead of inline
class MinHeap {

  constructor() {
    this.arr = [null];
  }

  // [0, 1, 2, 3, 4, 5, 6, 7].
  // 1 (l2, R3) 2(L4, l5).
  getParentVal(index) {
    // Parent is Math.floor(index/e)
    if (index > 1) {
      let pI = Math.floor(index / 2);
      return this.arr[pI];
    }
  }

  getParentIndex(index) {
    return Math.floor(index / 2)
  }

  getLeftChild(index) {
    return index * 2;
  }

  getRightChild(index) {
    return (index * 2) + 1;
  }

  hasChildrens(index) {
    let lc = this.getLeftChild(index);
    let rc = this.getRightChild(index);
    return (typeof this.arr[lc] != 'undefined' && typeof this.arr[rc] !== 'undefined');
  }

  swap (i1, i2) {
    let temp = this.arr[i1];
    this.arr[i1] = this.arr[i2];
    this.arr[i2] = temp;
  }

  getLastIndex() {
    return this.arr.length - 1;
  }

  add(data) {
    this.arr.push(data);
    let cur = this.getLastIndex();
    while (this.arr[cur] < this.arr[this.getParentIndex(cur)]) {
      this.swap(cur, this.getParentIndex(cur));
      cur = this.getParentIndex(cur);
    }
  }

  isEmpty() {
    if (this.arr.length > 1) {
      return false;
    }
    return true;
  }

  extractMin() {
    let head = this.arr[1];
    this.arr[1] = this.arr[this.getLastIndex()];
    this.arr.splice(-1, 1); // Remove last element off array.

    // Bubble down from the top.
    let cur = 1;
    while (this.hasChildrens(cur)) {
      if (this.arr[this.getLeftChild(cur)] < this.arr[this.getRightChild(cur)]) {
        this.swap(cur, this.getLeftChild(cur));
        cur = this.getLeftChild(cur);
      }
      else {
        this.swap(cur, this.getRightChild(cur));
        cur = this.getRightChild(cur);
      }
    }
    return head;
  }
}


let mh = new MinHeap();
mh.add(10);
console.log(mh);
mh.add(9);
console.log(mh);
mh.add(16);
console.log(mh);

mh.add(7);
console.log(mh);


mh.add(6);
console.log(mh);

mh.add(8);

mh.add(177);

mh.add(86);
mh.add(89);
mh.add(23);
mh.add(2321);
mh.add(230);
console.log(mh);

while (!mh.isEmpty()) {
  console.log(mh.extractMin());
}
