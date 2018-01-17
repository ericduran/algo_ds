/**
 * @file
 *
 * Given a linked list, check if the the linked list has loop or not.
 *
 * @see https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Use the fast runner technique.
function hasCycle(head) {
  if (head === null && head.next === null) {
    return false;
  }

  let slow = head;
  let fast = head.next;

  while (fast != null && fast.next != null) {
    if (slow === fast) {
      return true;
    }
    slow = slow.next;
    fast = fast.next.next;
  }

  return false;
}

let cycle = new Node(10);
cycle.next = new Node(11);
cycle.next.next = new Node(12);
cycle.next.next.next = cycle;

let noCycle = new Node(20);
noCycle.next = new Node(30);
noCycle.next.next = new Node(40);


console.log(hasCycle(cycle), 'should return true');
console.log(hasCycle(noCycle), 'should return false');
