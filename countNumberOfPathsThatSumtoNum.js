class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

let n = new Node (9);
n.left = new Node (3);
n.right = new Node (7);
n.left.left = new Node (2);
n.left.right = new Node (2);
n.right.left = new Node (-2);
n.right.right = new Node (3);

function countPathsWithSum(node, targetSum, runningSum = 0, map = new Map()) {
  if (node === null) {
    return 0;
  }

  runningSum += node.data;
  let sum = runningSum - targetSum;
  let totalPaths = map.has(sum) ? map.get(sum) : 0;

  if (runningSum === targetSum) {
    totalPaths++;
  }

  incrementMap(map, runningSum, 1);
  totalPaths += countPathsWithSum(node.left, targetSum, runningSum, map);
  totalPaths += countPathsWithSum(node.right, targetSum, runningSum, map);
  incrementMap(map, runningSum, -1);

  return totalPaths;
}

function incrementMap(map, key, delta) {
  let newCount = (map.has(key) ? map.get(key) : 0) + delta;
  if (newCount === 0) {
    map.delete(key);
  }
  else {
    map.set(key, newCount);
  }
}

console.log(countPathsWithSum(n, 5));
