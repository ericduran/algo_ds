function isUnique(word) {
  if (word.length > 128) {
    return false;
  }

  let arrBool = [].fill(false);
  for (let i =0; i < word.length; i++) {
    let char = word.charAt(i);
    if (arrBool[char]) {
      return false;
    }
    else {
      arrBool[char] = true;
    }
  }

  return true;
}

console.log(isUnique('cat'));
console.log(isUnique('ccat'));
