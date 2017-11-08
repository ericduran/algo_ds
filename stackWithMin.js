class Node {
  constructor(data) {
    this.data = data;
    this.min = null;
    this.next = null;
  }
}

// Have a stack that support min() at Big O(1)
// first passed try to keep it in this.min but it was a problem to keep at O(1)
// when doing a pop, then try using a another STack but for some reason
// I talked myself out of it after drawing it. Ended up keeping min
// in the node, took a while to get to that, I got stuck :-( but the book
// has the stack solution as better :-( so close :-|

// The book recoemends
class Stack {
  constructor() {
    this.head = null;
  }
  push(data) {
    let node = new Node(data);
    if (this.isEmpty()) {
      this.head = node;
      this.head.min = data; // Forgot to add the initial min.
    }
    else {
      if (node.data < this.head.min) {
        node.min = node.data;
      }
      else {
        node.min = this.head.min;
      }
      let temp = this.head;
      this.head = node;
      this.head.next = temp;
    }
  }
  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty')
    }
    let temp = this.head;
    this.head = this.head.next;
    return temp;
  }
  isEmpty() {
    if (this.head === null) {
      return true;
    };
    return false;
  }
  min() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }
    return this.head.min;
  }
}


let s = new Stack();
s.push(5);
console.log(s.min());
s.push(3);
console.log(s.min());
s.push(1);
console.log(s.min());
s.pop();
console.log(s.min());
s.pop();
console.log(s.min());
