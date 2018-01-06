
function stringPerm(word) {
  if (word.length <= 1) {
    return new Set(word);
  }

  let s = new Set(); // 1st Pass: I forgot to create a new Set on my 1st pass.

  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    let rest = word.slice(0, i) + word.slice(i + 1, word.length);
    let restPerm = stringPerm(rest);
    for (let node of restPerm) {
      s.add(char + node);
    }
  }

  return s;
}

console.log(stringPerm('eric'));
console.log(stringPerm('cat'));
console.log(stringPerm('at'));
