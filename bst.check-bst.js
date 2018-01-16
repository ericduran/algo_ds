/**
 * @file
 *
 * Write a function to check if a binary search tree is a binary search tree.
 *
 * Tip: Once you practice the recursion enough it'll eventually click.
 *
 * @see https://www.geeksforgeeks.org/a-program-to-check-if-a-binary-tree-is-bst-or-not/
 */

// Node for BST.
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}


function isBST(node, min = null, max = null) {
  // Our base case returns true. A null node is indeed a binary search tree.
  if (node === null) {
    return true;
  }

  // Tip: I  write this case after the case below this one.
  //     It helps me process what's happening easier.
  if ( (min != null && node.data <= min) || (max != null && node.data > max)) {
    return false;
  }

  // I always write this case 1st. Because it makes it clear what's being
  // passed in.
  if (isBST(node.left, min, node.data) === false || isBST(node.right, node.data, max) === false) {
    return false;
  }

  return true;
}

let bst = new Node(10);
bst.left = new Node(5);
bst.right = new Node(15);

let nonBst = new Node(10);
nonBst.left = new Node(12);
nonBst.right = new Node(15);

console.log(isBST(bst), 'should return true');
console.log(isBST(nonBst), 'should return false');
