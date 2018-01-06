class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let head = new Node(10);
head.next = new Node(11);
head.next.next = new Node(12);
head.next.next.next = new Node(13);

console.log(head);


function reverseLinkedList(node) {
  let cur = node;
  let next = null;
  let prev = null

  while (cur != null) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
}

// 10 -> 11 -> 12 -> 13
// 13 -> 12 -> 11 -> 10



console.log(reverseLinkedList(head));
