class Graph {
  constructor(nodes) {
    this.nodes = [];
    for (let i of nodes) {
      this.nodes.push(new Node(i));
    }
  }

  addNode(data) {
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.p = null;
    this.c = null;
  }
}
