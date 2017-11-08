function isBST(node, min, max) {
  if (node === null) {
    return true;
  }
  if ( (min != null && node.data <= min) || (max != null && node.data > max)) {
    return false;
  }
  if (!isBST(node.left, min, n.data) || !isBST(node.right, n.data, max)) {
    return false;
  }
  return true;
}

function checkBST(node) {
  return isBST(node, null, null);
}


class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

let n = new Node(19);
n.left = new Node(10);
n.right = new Node(23);

console.log(isBST(n), 'should be true');

let o = new Node(19);
o.left = new Node(22);
o.right = new Node(2);

console.log(isBST(o), 'should be false');


let i = new Node(30);
i.left = new Node(22);
i.right = new Node(34);
i.left.right = new Node(35);

console.log(isBST(i), 'should be false');
