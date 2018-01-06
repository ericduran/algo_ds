class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

let level = 0;
// Depth --- stack-recursive
function dfs(node, lev = 0) {
  if (node === null) {
    return;
  }

  // Post order.
  dfs(node.left, lev);
  dfs(node.right, lev);
  console.log(node.data);
}

// Breadth -- queue - non rec
function bfs(node) {
  let q = [];
  let level = 0;
  q.push(node);

  while (q.length > 0) {
    let cur = q.shift();
    console.log(cur.data);
    if (cur.left !== null || cur.right !== null) {
      level++;
      if (cur.left !== null) {
        q.push(cur.left);
      }
      if (cur.right !== null) {
        q.push(cur.right);
      }
    }
  }

  console.log(level);
}


let a = new Node('a');
a.left = new Node('b');
a.right = new Node('c');
a.left.left = new Node('d');
a.left.right = new Node('e');


dfs(a);
console.log(level);
// Breadth
console.log('bfs:')
bfs(a);
