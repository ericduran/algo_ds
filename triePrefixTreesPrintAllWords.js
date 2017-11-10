
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
// Input : "geeks", "for", "geeks", "a", "portal",
//        "to", "learn", "can", "be", "computer",
//        "science", "zoom", "yup", "fire", "in", "data"
// Output : a be can computer data fire for geeks
//         in learn portal science to yup zoom
t.addWord('geeks');
t.addWord('for')
t.addWord('geeks');
t.addWord('a');
t.addWord('portal')
t.addWord('to');
t.addWord('learn');
t.addWord('can')
t.addWord('be');
t.addWord('computer');
t.addWord('science')
t.addWord('zoom');
t.addWord('yup');
t.addWord('in')
t.addWord('data');

function printAllWord(t, word, words) {
  let cur = t;
  if (cur.endOfWord) {
    words.push(word);
  }
  cur.child.forEach((value) => {
    printAllWord(value, word + value.char, words);
  })
  return words;
}

console.log(printAllWord(t.root, '', []));
