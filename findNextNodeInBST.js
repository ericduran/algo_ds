class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}


function getNextNode(node) {
  if (node === null) {
    return null;
  }

  if (node.right != null) {
    return getLeftMost(node.right);
  }
  else {
    let cur = node;
    let p = n.parent;
    // If parent isn't null and the left child isn't current.
    // go up until the current node isn't the left val.
    // or we run out of parents.
    while (p != null && p.left != cur) {
      cur = p;
      p = p.parent;
    }
    return p;
  }
}


let n = new Node(100);
n.left = new Node(50);
n.right = new Node (120);
n.left.right = new Node(67);

console.log(getNextNode(n.left));

// Recursive
function getLeftMost(node) {
  if (node === null) {
    return null;
  }

  if (node.left != null) {
    return getLeftMost(node.left);
  }

  return node;
}

// iteritive.
function getLeftMostIterative(node) {
  if (node === null) {
    return null;
  }

  while (node.left != null) {
    node = node.left;
  }

  return node;
}
