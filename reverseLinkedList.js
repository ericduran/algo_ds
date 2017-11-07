function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}


let l = new LinkedListNode(10);
l.next = new LinkedListNode(12);
l.next.next = new LinkedListNode(13);

function reverse(node) {
  let cur = node;
  let next = null;
  let prev = null;

  while (cur !== null) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
}

console.log(reverse(l));
