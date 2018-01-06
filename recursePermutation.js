// FAILED THE DYNAMIC PROGRAMMING ONE.

// MEMORIZE THIS ALGORIGHT AND WHYYYYYY!!!

function getPermutations(word) {
  if (word.length == 1) {
    return word;
  }

  let s = []

  for (let i = 0; i < word.length; i++) {

    let char = word[i];
    let aroundChar = word.slice(0, i) + word.slice(i + 1, word.length);

    let subPerms = getPermutations(aroundChar);
    for (let y = 0; y < subPerms.length; y++) {
      s.push(char + subPerms[y]);
    }
  }

  return s;
}

console.log(getPermutations('cat'));

// abc, a
// bac
// cab
