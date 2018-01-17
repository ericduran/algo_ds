/**
 * @file
 *
 * Construct the smallest Binary Search Tree from sorted array.
 *
 * @see https://www.geeksforgeeks.org/construct-binary-tree-from-inorder-traversal/
 */


function smallBST(arr, start = 0, end = arr.length - 1) {
  if (end < start) {
    return null; // We've gone over.
  }

  // The array is sorted so we an just start from the middle
  // and chop it left and right, the middle
  let mid = Math.floor( (start + end) / 2);
  let n = new Node(arr[mid]);
  n.left = smallBST(arr, start, mid - 1);
  n.right = smallBST(arr, mid + 1, end);

  return n;
}

// Binary Node
class Node {
  constructor (data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

console.log(smallBST([1,2,3,4,5,6,7,8,9,10,11]));
