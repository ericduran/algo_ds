class Stack {
  constructor() {
    this.head = null;
    this.len = 0;
  }
  push(data) {
    let n = new Node(data);
    n.next = this.head;
    this.head = n;
    this.len++
  }
  pop() {
    if (this.head === null) { throw new Error('Stack underflow'); }
    let n = this.head;
    this.head = n.next;
    this.len--
    return n.data;
  }
  peek() {
    if (this.head !== null) {
      return this.head.data;
    }
    else { throw new Error('Stack empty'); }
  }
  size() {
    return this.len;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let s = new Stack();

function areMatching(str) {
  let pairs = new Map();
  pairs.set('}', '{');
  pairs.set(']', '[');
  pairs.set(')', '(');

  for(let i = 0; i < str.length; i++) {
      // If it's opening lets add to our stack.
      if (['{', "[", "("].includes(str[i])) {
        s.push(str[i]);
      }
      if (['}', "]", ")"].includes(str[i])) {
        if (s.peek() == pairs.get(str[i])) {
          s.pop();
        }
      }
  }

  console.log(s);
  if (s.size() == 0) {
    return true;
  }
  return false;
}

console.log(areMatching("{ [ ] ( ) }"), 'should be true');
console.log(areMatching("{ [ ( ] ) }"), 'should be false');
console.log(areMatching("{ [ }"), 'should be false');
