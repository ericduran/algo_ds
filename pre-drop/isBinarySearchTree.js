class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

let a = new Node(10);
a.left = new Node(1);
a.right = new Node(15);

let b = new Node(10);
b.left = new Node(11);
b.right = new Node(15);


function isBST(node, min = null, max = null) {
  if (node === null) {
    return true;
  }

  if (min != null && node.data <= min || max != null && node.data > max) {
    return false;
  }

  if (!isBST(node.left, min, node.data) || !isBST(node.right, node.data, max)) {
    return false;
  }


  return true;
}


// console.log(isBST(a));
console.log(isBST(b));
