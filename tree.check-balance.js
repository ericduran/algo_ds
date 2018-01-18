/**
 * @file
 *
 * Check if a binary tree is balance.
 *
 * This solution uses a getHeight function. This function
 * is not very efficient. It checks the leaf nodes many times.
 * For each level it does a full height check again.
 *
 * @see https://www.geeksforgeeks.org/how-to-determine-if-a-binary-tree-is-balanced/
 */
function isBalance(root) {
  if (root === null) {
    return true;
  }

  let lH = getHeight(root.left);
  let rH = getHeight(root.right);
  let diff = Math.abs(lH - rH);


  if (diff <= 1 && isBalance(root.left) && isBalance(root.right)) {
    return true;
  }
  else {
    return false;
  }
}

/**
 * Incremenet the depth as we traverse the tree.
 */
function getHeight(root, depth = -1) {
  if (root === null) {
    return depth;
  }

  return Math.max(
    getHeight(root.left, depth + 1),
    getHeight(root.right, depth + 1)
  );
}

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

let nbal = new Node('root');
nbal.left = new Node('lc');
nbal.left.left = new Node('leaf');

let bal = new Node('root');
bal.left = new Node('left');
bal.right = new Node('rigth');

console.log(isBalance(bal), 'should return true');
console.log(isBalance(nbal), 'should return false');
