function getH(node) {
  if (node === null) {
    return 0;
  }

  return (Math.max(
    getH(node.left),
    getH(node.right)
  ) + 1);
}

function isBalance(node) {
  let lh = getH(node.left);
  let rh = getH(node.right);
  if (lh == rh) {
    return true;
  }

  if (Math.max(lh, rh) - Math.min(lh, rh) >= 1) {
    return false;
  }
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
n.right = new Node(11);


console.log(isBalance(n), 'should be true');

n.left.left = new Node(100);
n.left.left.left = new Node(10);

console.log(isBalance(n), 'should be false');
