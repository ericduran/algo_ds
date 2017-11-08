class Stack {
  constructor() {
    this.head = null;
    this.len = 0;
  }
  push(data) {
    let n = new Node(data);
    n.next = this.head;
    this.head = n;
    this.len++
  }
  pop() {
    if (this.head === null) { throw new Error('Stack underflow'); }
    let n = this.head;
    this.head = n.next;
    this.len++
    return n.data;
  }
  peek() {
    if (this.head !== null) {
      return this.head.data;
    }
    else { throw new Error('Stack empty'); }
  }
  size() {
    return this.len;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let s = new Stack(3);
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(3);
s.push(4);

console.log(s.pop());
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());
