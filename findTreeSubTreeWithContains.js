function containsTree(t1, t2) {
  if (t2 === null) {
    return true;
  }
  return subTree(t1, t2);
}

function subTree(t1, t2) {
  if (t1 === null) {
    return false;
  }
  else if (t1.data === t2.data && matchTree(t1, t2)) {
    return true;
  }

  return subTree(t1.left, t2) || subTree(t1.right, t2);
}

function matchTree(t1, t2) {
  if (t1 === null && t2 === null) {
    return true;
  }
  else if (t1 === null || t2 === null) {
    return false; // False cause only 1 is null
  }
  else if (t1.data != t2.data) {
    return false;
  }
  else {
    return matchTree(t1.left, t2.left) && matchTree(t1.right, t2.right);
  }
}


class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

let n = new Node (10);
n.left = new Node (9);
n.right = new Node (15);

n.left.left = new Node (2);
n.left.right = new Node (11);


console.log(containsTree(n, new Node(12)));
