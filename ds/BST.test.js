const BST = require('./BST');

let bst = new BST();
bst.add(10);
bst.add(8);
bst.add(13);
console.log('test 1', bst.root.left.data === 8);
console.log('test 2', bst.root.right.data === 13);
