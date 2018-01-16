/**
 * @file
 *
 * Print all permutation of a string.
 * Ex. cat => { 'cat', 'cta', 'act', 'atc', 'tca', 'tac' }
 *
 * @see https://www.geeksforgeeks.org/write-a-c-program-to-print-all-permutations-of-a-given-string/
 */


function perm(word) {
  // Base case.
  if (word.length <= 1) {
    return new Set(word);
  }

  let s = new Set();

  for (let i = 0; i < word.length; i++) {
    let char = word[i];

    // I always name this variable rest, it reminds me that this should be
    // the rest of the word, aka word minus the current char.
    let rest = word.slice(0, i) + word.slice(i + 1, word.length);

    // I always name this variable restPerm, because it's the permutation of
    // the rest of the word aka perms without the current char.
    let restPerm = perm(rest);

    // Now we just have to add the current char to the other perms.
    for (let item of restPerm) {
      s.add(char + item);
    }
  }

  return s;
}

console.log(perm('cat'), 'all 6 permutation');
