class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

let n = new Node(2);
n.left = new Node(1);
n.right = new Node(3);
// should return {2, 1, 3}, {2, 3, 1}

function findAllPosible(node) {
  let all = [];

  if (node == null) {
    all.push([]);
    return all;
  }

  let prefix = [];
  prefix.push(node.data);
  let leftSeq = findAllPosible(node.left);
  let rightSeq = findAllPosible(node.right);

  for (let l of leftSeq) {
    for (let r of rightSeq) {
      let weaved = weaveList(leftSeq, rightSeq, prefix);
    }
  }
  console.log(leftSeq);
  console.log(rightSeq);
  console.log(prefix);
  return all;
}

function weaveList(left, right, prefix) {
  
}

console.log(findAllPosible(n));
