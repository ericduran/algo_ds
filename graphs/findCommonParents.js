var listOfParentsChild = [
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
    this.nodes = [];
  }

  add(x) {
    if (this.nodes[x]) {
      return this.nodes[x];
    }
    else {
      let m = new Node(x);
      this.nodes[x] = m;
      return m;
    }
  }


}

class Node {
  constructor(data) {
    this.data = data;
    this.par = new Map();
  }
}

let g = new Graph();

for (let i = 0; i < listOfParentsChild.length; i++) {
  let n = g.add(listOfParentsChild[i][0]);
  let n1 = g.add(listOfParentsChild[i][1]);
  n1.par.set(n.data, n);
}

function findParents(child, set) {
  let cur = g.nodes[child];
  if (cur) {
    set.add(cur.data);
    cur.par.forEach((ch) => {
      findParents(ch.data, set);
    });
  }

  return set;
}

function findCommonParents(a, b) {
  let p1 = findParents(a, new Set());
  let p2 = findParents(b, new Set());

  for (let l of p1.values()) {
    if (p2.has(l)) {
      return true;
    }
  }

  return false;
}

// console.log(g.nodes);
 console.log(findCommonParents(1, 4));
