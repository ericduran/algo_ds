/**
 * @file
 *
 * It's good to implement your own stack and really understand
 * how it works.
 *
 * During interviews no-one expects you to write a class to use a stack.
 * I always just used an array but was explicit in treating it like a stack.
 * @example
 *  let stack = []; stack.push(); start.pop(); etc..
 *
 * Could be updated, early work.
 *
 * @see https://www.geeksforgeeks.org/stack-data-structure-introduction-program/
 */

// LinkedList node for Stack internal.
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

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
