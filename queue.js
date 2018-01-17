/**
 * @file
 *
 * It's good to implement your own queue and really understand
 * how it works.
 *
 * During interviews no-one expects you to write a class to use a queue.
 * I always just used an array but was explicit in treating it like a queue.
 * @example
 *  let queue = []; queue.push(); queue.shift(); etc..
 *
 * Could be updated, early work.
 *
 * @see https://www.geeksforgeeks.org/queue-data-structure/
 */

// LinkedList node for Queue internal.
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

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
