function smallBST(arr, start, end) {
  if (end < start) {
    return null; // We've gone over.
  }
  let mid = Math.floor( (start + end) / 2);
    let n = new Node(arr[mid]);
    n.left = smallBST(arr, start, mid - 1);
    n.right = smallBST(arr, mid + 1, end);
  return n;
}

class Node {
  constructor (data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

console.log(smallBST([1,2,3,4,5,6,7,8,9,10,11], 0, 10));
