/**
 * @file
 *
 * Given pointer to the head node of a linked list, the task is to reverse the
 * linked list. We need to reverse the list by changing links between nodes.
 *
 * @see https://www.geeksforgeeks.org/reverse-a-linked-list/
 */

// Node for linked list items, no need for a Linked List wrapper class.
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// When doing this one, draw it out, it's meant to be confusing.
// in: [10]->[11]->[12]  ==> out: [12]->[11]->10
function reverseList(head) {
  let cur = head;
  let next = null
  let prev = null

  while (cur != null) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
}


// Linked List: [10]->[11]->[12]
let list = new Node(10);
list.next = new Node(11);
list.next.next = new Node(12);

console.log(reverseList(list), 'should be 12 => 11 => 10');
