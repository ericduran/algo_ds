// Binary Node for BST.
// const Node = require('./BinaryNode');
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

module.exports = class BST {
  constructor() {
    this.root = null;
  }

  search(key) {
    return this.find(this.root, key);
  }

  find(node, key) {
    if (node === null) {
      return false;
    }
    if (key === node.data) {
      return node;
    }
    if (key < node.data) {
      this.search(node.left, key)
    }
    else {
      this.search(node.right, key);
    }
  }

  add(item) {
    if (this.root != null) {
      return this.addR(this.root, item);
    }
    else {
      this.root = new Node(item);
      return this.root;
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

    return node;
  }

  delete(item) {
    if (this.root === null) {
      return false;
    }
    else {
      this.deleteR(this.root, item);
    }
  }

  deleteR(node, item) {
  }
}
