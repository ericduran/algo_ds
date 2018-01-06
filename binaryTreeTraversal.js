class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function inOrder(n) {
  if (n != null) {
    inOrder(n.left);
    console.log(n.data);
    inOrder(n.right);
  }
}

function preOrder(n) {
  if (n != null) {
    console.log(n.data);
    preOrder(n.left);
    preOrder(n.right);
  }
}

function postOrder(n) {
  if (n != null) {
    postOrder(n.left);
    postOrder(n.right);
    console.log(n.data);
  }
}

let n1 = new Node(2);
n1.left = new Node(1);
n1.right = new Node(3);

console.log('inOrder:');
inOrder(n1);
console.log('preOrder:');
preOrder(n1);
console.log('postOrder:');
postOrder(n1);
