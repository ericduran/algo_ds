
class TrieNode {
  constructor(char) {
    this.char = char;
    this.child = new Map();
    this.endOfWord = false;
    this.prefixCount = 0;
  }

  find(char) {
    if (this.child.has(char)) {
      return this.child.get(char);
    }
    else {
      return false;
    }
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode('*');
  }

  addWord(word) {
    let cur = this.root;
    for(let i = 0; i < word.length; i++) {
      if (cur.child.has(word[i])) {
        cur = cur.child.get(word[i]);
      }
      else {
        let char = new TrieNode(word[i]);
        cur.child.set(word[i], char);
        cur.prefixCount++;
        cur = char;
      }
    }
    cur.endOfWord = true;
  }

  find(char) {
    return this.root.find(char);
  }
}

let t = new Trie();
// i, like, sam, sung, samsung, mobile, ice,
//   cream, icecream, man, go, mango
t.addWord('i');
t.addWord('like')
t.addWord('sam');
t.addWord('sung');
t.addWord('samsung')
t.addWord('mobile');
t.addWord('ice');
t.addWord('cream')
t.addWord('icecream');
t.addWord('man');
t.addWord('go')
t.addWord('mango');

// Find multiple words join.
function findWordBreak(word, t) {
  let cur = t;

  for (let i=0; i < word.length; i++) {
    let char = word[i];
    let next = cur.find(char);
    if (next == false) {
      return false;
    }

    // We reach the next.
    if (next.endOfWord && i == word.length - 1) {
      return true;
    }

    if (next.endOfWord && findWordBreak(word.substring(i+1), t)) {
      return true;
    }

    cur = next;
  }

  return false
}


console.log(findWordBreak("icesami", t));
