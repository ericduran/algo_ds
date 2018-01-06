class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function add(n, d) {
  while (n.next != null) {
    n = n.next;
  }
  n.next = new Node(d);
}

function createList(node, depth = 0, arr = []) {
  if (node === null) {
    return;
  }
  if (!arr[depth]) {
    arr.push(new Node(node.data));
  }
  else {
    add(arr[depth], node.data);
  }

  createList(node.left, depth + 1, arr);
  createList(node.right, depth + 1, arr);

  return arr;
}

class N {
  constructor(d) {
    this.data = d;
    this.left = null;
    this.right = null;
  }
}

let n = new N(10);
n.left = new N(1);
n.right = new N(11);
n.left.left = new N(2);
n.left.right = new N(22);
n.right.left = new N(2);
n.right.right = new N(22);

console.log(createList(n));
