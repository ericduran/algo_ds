/**
 Notes:
  Tons of mistake on this one:
   - 1st while loop was while (node.data != null) // Threw error because next was null
   - I used a Map instead of Set even thought I didn't need key => value
   - used Set().get instead of Set.has (was thinking map)
   - Did Set.has() === null, instead of FALSE
   - I forgot the HastSet in the 1st pass.

   Lots of easy fuck-ups, both on all 3, paper, whiteboard, editor :-|
 */
function removeDupe(head) {
  let node = head;
  let prev = null;
  let s = new Set();

  while (node != null) {
    if (s.has(node.data) == false) {
      s.add(node.data);
      prev = node;
    }
    else {
      prev.next = node.next;
    }
    node = node.next;
  }
  return head;
}

// Node for LinkedList.
class Node {
  constructor(d) {
    this.data = d;
    this.next = null;
  }
}

let a = new Node("a");
let b = new Node("b");
a.next = b;
let b2 = new Node("b");
b.next = b2;
let c = new Node('c');
b2.next = c;

let linkedList = a;

console.log('before:', linkedList)
console.log('after:', removeDupe(linkedList));
