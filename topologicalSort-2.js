class Node {
  constructor(data) {
    this.data = data;
    this.parent = 0;
    this.visited = false;
    this.child = new Set();
  }
}

class Graph {
  constructor() {
    this.nodes = new Map();
  }

  getOrCreate(data) {
    if (this.nodes.has(data)) {
      return this.nodes.get(data);
    }
    else {
      let n = new Node(data);
      this.nodes.set(data, n);
      return n;
    }
  }

  addEdge(parent, child) {
    let p = this.getOrCreate(parent);
    let c = this.getOrCreate(child);
    p.child.add(c);
    c.parent++;
  }

  topologicalSort(s = new Set()) {
    let q = [];

    for (let [key, node] of this.nodes) {
      if (node.parent === 0 && node.visited == false) {
        s.add(node);
        q.push(node);
        node.visited = true;
      }
    }

    while (q.length) {
      let cur = q.shift();
      for (let n of cur.child) {
        n.parent--;
      }
      this.topologicalSort(s);
    }

    return s;
  }


}

let g = new Graph();
g.getOrCreate("e");
g.addEdge("a", "d");
g.addEdge("f", "b");
g.addEdge("b", "d");
g.addEdge("f", "a");
g.addEdge("d", "c");
console.log(g.topologicalSort());
