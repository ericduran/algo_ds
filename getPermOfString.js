function perm(word) {
  if (word.length <= 1) {
    return new Set(word);
  }

  let s = new Set();
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    let rest = word.slice(0, i) + word.slice(i + 1, word.length);
    let restPerm = perm(rest);
    for (let n of restPerm) {
      s.add(char + n);
    }
  }

  return s;
}

console.log(perm('aaaaa'));;
