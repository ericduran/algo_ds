function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

let a = new LinkedListNode(10);
a.next = new LinkedListNode(10);
a.next.next = new LinkedListNode(10);

function containsCycle(node) {
let slow = node;
let fast = node;
while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next


  if (slow === fast) {
    return true;
  }
}

return false;
}


console.log(containsCycle(a));
