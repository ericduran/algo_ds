class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNext(node) {
    this.next = node;
  }

  getNext() {
    return this.next;
  }
}

// Singly LinkedList
// TODO: Add remove, search, tail
class LinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    if (this.head === null) {
      this.head = new Node(data);
    }
    else { // Forgot the Else Statement!!
      let cur = this.head;
      while (cur.next != null) {
        cur = cur.next;
      }
      cur.next = new Node(data);
    }
  }

  pop() {
    if (this.head === null) {
      throw new Error('Empty LinkedList');
    }
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    return temp.data;
  }
}


let a = new LinkedList()
a.add('A');
a.add('B');
console.log(a);
console.log(a.pop());
console.log(a);
console.log(a.pop());
