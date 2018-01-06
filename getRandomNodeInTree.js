class Node {
  constructor(data) {
    this.data = data;
    this.size = 1;
    this.left = null;
    this.right = null;
  }

  getRandomNode(i) {
    let leftSize = (this.left === null) ? 0 : this.left.size;
    if (i < leftSize) {
      return this.left.getRandomNode(i);
    }
    else if (i == leftSize) {
      return this;
    }
    else {
      // right must have something.
      return this.right.getRandomNode(i - (leftSize + 1));
    }
  }
}

class Tree {
  constructor(n, size) {
    this.root = n;
    this.size = size;
  }

  getRandomNode() {
    if (this.root === null) {
      return null;
    }
    let rand = Math.floor(Math.random() * (this.size) + 1);
    return this.root.getRandomNode(rand);
  }
}

let n = new Node(10);
n.left = new Node(4);
n.right = new Node(15);

n.left.left = new Node(2);
n.left.right = new Node(6);

n.right.left = new Node(13);
n.right.right = new Node(19);

let t = new Tree(n, 7);

console.log(t.getRandomNode());
