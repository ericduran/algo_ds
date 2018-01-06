class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}


// Binary Search Tree, representation.
//       4
//     /  \
//    /    \
//   2      6
//   / \  / \
//  1  1 5   8
// / \/ \ 1 5   8
//1  12


let n = new Node(4);
n.left = new Node(2);
n.right = new Node(6);
n.right.left = new Node(5);
n.right.right = new Node(8);


// We want to delete the 4.
//
// if the node has both left & right, we choose the lowest in the right tree.
//
// If the node has a left & rig
function delete(node, val) {
    if (node.hasLeftchild() && node.hasRightChild()) {
      let n = getNextItem(node);
    }
    else if () {

    }
}
