function perm(word) {
  if (word.length == 1) {
    return new Set(word);
  }

  let pSet = new Set();

  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    let rest = word.slice(0, i) + word.slice(i+1, word.length);

    let pRest = perm(rest);
    for (let item of pRest) {
      console.log(char + item, 'Adding to Set', pSet, 'for word', word);
      pSet.add(char + item);
    }
  }
  return pSet;
}

console.log(perm('cat'))
