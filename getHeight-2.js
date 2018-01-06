function getH(node) {
  if (node === null) {
    return 0;
  }

  return 1 + Math.max(getH(node.left), getH(node.right));
}


class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}


let a = new Node(10);
a.left = new Node(10);
a.left.left = new Node(10);

console.log(getH(a));
