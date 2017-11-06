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



function isBst(node, min = null, max = null) {
  if (node === null) {
    return true;
  }

  if ((min != null) && node.data <= min || (max != null) && node.data > max) {
    return false;
  }

  if (!isBst(node.left, min, node.data) || !isBst(node.right, node.data, max)) {
    return false;
  }

  return true;
}

console.log(isBst(n));
