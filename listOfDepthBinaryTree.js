function bfs(node, level = 0, list = new Map()) {
  if (node === null) {
    return;
  }
  if (list.has(level)) {
    let l = list.get(level);
    l.next = node;
  }
  else {
    let l = node;
    list.set(level, node);
  }
  level = level + 1;
  bfs(node.left, level, list);
  bfs(node.right, level, list);

  return list;
}

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

let n = new Node(19);
n.left = new Node(10);
n.right = new Node(12);
n.left.left = new Node(1);
n.left.right = new Node(3);


console.log(bfs(n));
