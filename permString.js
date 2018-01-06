// P: Given two strings, write a method to decide if one is a permutation
//    of the other.
// Q: permutation requires length to be the same right?
// A: Use a hashmap key by the letter of the 1st value then
//    and value by the increment of the count. Remove when you loop the 2nd str.
//    Time: O(N) Size: O(1) or O(n) because hashMap?
class HM {
  constructor() {
    this.map = new Map();
  }

  add(char) {
    let count = this.map.get(char);
    if (count >= 1) {
      this.map.set(char, count + 1); // don't ++ here.
    }
    else {
      this.map.set(char, 1);
    }
  }

  rem(char) {
    let count = this.map.get(char);
    if (count == 1) {
      this.map.delete(char);
    }
    else {
      this.map.set(char, count - 1); // Don't -- here
    }
  }

  isEmpty() {
    return (this.map.size === 0);
  }
}

function isPermutation(str1, str2) {
  let hmap = new HM();
  // Without sorting at NlogN.
  if (str1.length !== str2.length) {
    return false;
  }

  for(i = 0; i < str1.length; i++) {
    let cur = str1[i];
    hmap.add(cur);
  }
  for (i = 0; i < str2.length; i++) {
    let cur = str2[i];
    hmap.rem(cur);
  }

  if (hmap.isEmpty()) {
    return true;
  }
  else {
    return false;
  }
}

console.log(isPermutation('dog', 'god'));
console.log(isPermutation('dogg', 'ggod'));
console.log(isPermutation('dg', 'god'));


// # Solution #2 bad Solution
function isPermutation2(str1, str2) {
  // Big O (NLogN) because of the sorting but really the joins are another N
  // so it's more like N * NlogN === N^2LongN^2 O(NlogN ^ 2), I think I'm tired....
  return (Array.from(str1).sort().join('') === Array.from(str2).sort().join(''));
}
