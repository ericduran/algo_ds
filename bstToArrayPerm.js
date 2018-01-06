class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

let n = new Node(2);
n.left = new Node(1);
n.right = new Node(3);
n.left.left = new Node(3);

function bfsInOrder(node, a = []) {
  let q = [];
  q.push(node);
  while (q.length) {
    let cur = q.shift();
    a.push(cur.data);
    if (cur.left) {
      q.push(cur.left);
    }
    if (cur.right) {
      q.push(cur.right);
    }
  }

  return a;
}

function bfsOutOrder(node, a = []) {
  let q = [];
  q.push(node);
  while (q.length) {
    let cur = q.shift();
    a.push(cur.data);
    if (cur.right) {
      q.push(cur.right);
    }
    if (cur.left) {
      q.push(cur.left);
    }
  }

  return a;
}

function eachOption(node) {
  g(bfsInOrder(node.left), )
}

console.log(eachOption(n));
