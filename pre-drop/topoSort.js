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
      if (node.parent === 0 && node.visited === false) {
        node.visited = true;
        s.add(node);
        q.push(node);
      }
    }

    // Process nodes & childrens
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

// a -> b -> d
// c -> b -> d
// a, c, b, d

let g = new Graph();
// g.getOrCreate("e");
g.addEdge("a", "b");
g.addEdge("b", "d");
g.addEdge("c", "b");
console.log(g.topologicalSort());
