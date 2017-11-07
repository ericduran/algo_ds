class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

// Doubly LinkedList
// TODO: Add remove, search, tail
class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    if (this.head === null) {
      return this.head = new Node(data);
    }
    else {
      let cur = this.head;
      while (cur.next != null) {
        cur = cur.next;
      }
      let nn = new Node(data);
      nn.prev = cur;
      cur.next = nn;
    }
  }
}


let a = new DoublyLinkedList()
a.add('A');
console.log(a);
a.add('B');
console.log(a);
a.add('C');
console.log(a);
