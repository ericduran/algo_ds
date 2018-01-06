class Node {
  constructor(data) {
    this.data = data;
    this.parent = null;
    this.childrens = new Map();
    this.visited = false;
  }
}

class ProjectTree {
  constructor(nodes) {
    this.nodes = new Map();
    for(let i = 0; i < nodes.length; i++) {
      this.nodes.set(nodes[i], new Node(nodes[i]));
    }
  }

  depTree(parent, child) {
    let p = this.nodes.get(parent);
    let c = this.nodes.get(child);
    p.childrens.set(c.data, c);
    c.parent = p;
  }

  getParentlessNodes() {
    let items = new Map();
    for (let [key, node] of this.nodes) {
      if (node.parent == null) {
        items.set(key, node);
      }
    }
    return items;
  }
}

let projectTree = new ProjectTree(['a', 'b', 'c', 'd', 'e', 'f']);
[
  ['a', 'd'],
  ['f', 'b'],
  ['b', 'd'],
  ['f', 'a'],
  ['d', 'c']
].forEach( deps => {
  let parent = deps[0];
  let child = deps[1];
  projectTree.depTree(parent, child);
});

function bfs(node) {
  node.visited = true;
  console.log(node.data);
  for (let [key, n] of node.childrens) {
    if (n.visited === false)
      bfs(n);
  }
}

let items = projectTree.getParentlessNodes();
for (let [key, n] of items) {
  bfs(n);
}
