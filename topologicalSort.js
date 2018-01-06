class Graph {
  constructor(nodes) {
    this.map = new Map();
    for (let n of nodes) {
      this.getOrCreateNode(n);
    }
  }

  getOrCreateNode(node) {
    if (this.map.has(node)) {
      return this.map.get(node);
    }
    else {
      let n = new Node(node);
      this.map.set(node, n);
      return n;
    }
  }

  addEdge(parent, child) {
    let p = this.getOrCreateNode(parent);
    let c = this.getOrCreateNode(child);
    p.adj.push(c);
    c.hasParent = true
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.adj = [];
    this.visited = false;
    this.hasParent = false;
  }
}

let g = new Graph(['a', 'b', 'c', 'd', 'e', 'f']);
// Add edges
g.addEdge("a", 'd');
g.addEdge("f", 'b');
g.addEdge("b", 'd');
g.addEdge("f", 'a');
g.addEdge("d", 'c');


function topologicalSort(g) {
  let s = [];
  for (let [k, n] of g.map) {
    if (n.hasParent === false) {
      dfs(n, s);
    }
  }
  while (s.length > 1) {
    console.log(s.pop().data);
  }
}

function dfs(node, stack) {
  if (node.visited == 'pending') {
    // We're currently in a search, so there's a cycle.
    return false;
  }
  else {
    node.visited = 'pending';
    for (let adj of node.adj) {
      if (!dfs(adj, stack)) {
        return false;
      }
    }
    node.visited = true;
    stack.push(node);
  }
  return true;
}

console.log(topologicalSort(g));
