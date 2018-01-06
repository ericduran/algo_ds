class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function createBinary(arr) {
  if (arr.length <= 0) {
    return null;
  }

  let mid = Math.floor(arr.length / 2);
  let n = new Node(arr[mid]);
  console.log(arr.slice(0, mid));
  console.log(arr.slice(mid + 1, arr.length));
  n.left = createBinary(arr.slice(0, mid));
  n.right = createBinary(arr.slice(mid + 1, arr.length));

  return n;
}

console.log(createBinary([1,2,3,4,5,6,7,8,9]));
