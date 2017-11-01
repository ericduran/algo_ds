class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.height = 0;
  }
}

class AVL {
  constructor() {
    this.root = null;
  }

  add(item) {
    if (this.root === null) {
      this.root = new Node(item);
      return this.root;
    }
    else {
      this.addR(this.root, item);
    }
  }

  addR(node, item) {
    if (node === null) {
      return new Node(item);
    }
    else {
      if (item <= node.data) {
        node.left = this.addR(node.left, item);
      }
      else {
        node.right = this.addR(node.right, item);
      }
    }

    node.height = Math.max(getH(node.left), getH(node.right));
    console.log(node.height);
    if (node.height - (Math.min(getH(node.left), getH(node.right))) > 1) {
      this.balance(node);
    }
    return node;
  }

  balance(node) {
    console.log('need to balance:', node);
  }
}


function getH(node) {
  if (node === null) {
    return -1;
  }
  return 1 + Math.max(getH(node.left), getH(node.right));
}

let a = new AVL();
a.add(10);
a.add(8);
a.add(14);
a.add(12);
// a.add(11);
// console.log(a);
