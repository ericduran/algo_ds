// On coding problems I usually ask interviewers if it's cool if I use a
// JS array to represent a stack or queue, with the same behaviors.
// Usually they say yes, if not I just wrap it in a class Queue/Stack {}
// This is pretty straight forward if you have a good graps of Stack/Queue.
// Rememver q.length check for empty queue/stacks

// JS queues to use on coding problems.
let q = [];
q.push(1);
q.push(2);
q.push(3);
q.push(4);
console.log(q.shift() === 1);
console.log(q.shift() === 2);
console.log(q.shift() === 3);
console.log(q.shift() === 4);


// JS Stack to use on coding problems.
let s = [];
s.push(1);
s.push(2);
s.push(3);
s.push(4);
console.log(s.pop() === 4);
console.log(s.pop() === 3);
console.log(s.pop() === 2);
console.log(s.pop() === 1);
