class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.len = 0;
  }
  enqueue(data) {
    let n = new Node(data);
    // empty queue.
    if (this.head === null) {
      this.head = n;
      this.tail = n;
    }
    else {
      this.tail.next = n;
      this.tail = n;
    }
    this.len++;
  }
  dequeue() {
    if (this.head != null) {
      let n = this.head;
      this.head = this.head.next;
      this.len--;
      return n.data;
    }
  }
  isEmpty() {
    return (this.len === 0);
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let q = new Queue();

q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.enqueue(50);
q.enqueue(60);

console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.isEmpty());
