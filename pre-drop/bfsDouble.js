class Node {
  constructor(data) {
    this.data = data;
    this.adj = [];
    this.visited = false;
  }
}

let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let f = new Node('f');

// a - > b ->c -> d
// f -> e -> d

a.adj.push(b);
b.adj.push(c);
c.adj.push(d);
f.adj.push(e);
e.adj.push(d);

function bfs(n1, n2) {
  if (n1 === n2) {
    return n1;
  }

  let q = [];
  q.push(n1);
  q.push(n2);

  while (q.length != 0) {
    let cur = q.shift();
    if (cur.visited === true) {
      return cur;
    }
    else {
      cur.visited = true;
      for (let i = 0; i < cur.adj.length; i++) {
        q.push(cur.adj[i]);
      }
    }
  }

  return false;
}

console.log(bfs(a, f));
