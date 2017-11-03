let listOfParentsChild = [
  [1, 3],
  [2, 3],
  [3, 6],
  [5, 6],
  [4, 5],
  [4, 8],
  [8, 9]
];

class Graph {
  constructor() {
    this.nodes = new Map();
  }

  createOrGetNode(data) {
    if (this.nodes.has(data)) {
      return this.nodes.get(data);
    }
    else {
      let n = new Node(data);
      this.nodes.set(data, n);
      return n;
    }
  }

  addParent(p, c) {
    let parent = this.createOrGetNode(p);
    let child = this.createOrGetNode(c);
    child.parent.add(parent);
  }

  findCommonParent(a, b) {
    let an = this.createOrGetNode(a);
    let bn = this.createOrGetNode(b);
    return bfs(an, bn);
  }
}

function bfs(n, search) {
  if (n === search) {
    return true;
  }
  let q = [];
  q.push(n);
  while (q.length > 0) {
    let cur = q.pop();
    for (let node of cur.parent) {
      if (node === search) {
        console.log(node);
        return true;
      }
      q.push(node);
    }
  }

  return false;
}

class Node {
  constructor(data) {
    this.data = data;
    this.parent = new Set();
  }
}

let g = new Graph();
listOfParentsChild.forEach( (pair) => {
  let p = pair[0];
  let c = pair[1];
  g.addParent(p, c);
})

console.log(g.findCommonParent(5, 3));
