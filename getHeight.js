class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

let n = new Node(20);
n.left = new Node(19);
n.left.left= new Node(17);
n.right = new Node(39);

function getH(node) {
  if (node === null) {
    return 0;
  }

  return Math.max(getH(node.left), getH(node.right)) + 1;
}

console.log(getH(n));
console.log(getH(n.left));
console.log(getH(n.right));
