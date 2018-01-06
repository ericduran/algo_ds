class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function isSubtree(t1, t2) {
  let s1 = getString(t1).join('');
  let s2 = getString(t2).join('');

  if (s1.indexOf(s2) != -1) {
    return true;
  }

  return false;
}

function getString(node, arr = []) {
    if (node === null) {
      arr.push('X');
      return arr;
    }

    arr.push(node.data);
    getString(node.left, arr);
    getString(node.right, arr);

    return arr;
}


let n = new Node (10);
n.left = new Node (9);
n.right = new Node (15);

n.left.left = new Node (2);
n.left.right = new Node (11);

console.log(isSubtree(n, new Node(9)));
