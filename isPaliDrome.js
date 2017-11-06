function isPalidrone(word) {
  let s = new Set();

  for (let i = 0; i < word.length; i++) {
    if (s.has(word[i])) {
      s.delete(word[i]);
    }
    else {
      s.add(word[i]);
    }
  }

  if (s.size > 1) {
    return false;
  }

  return true;


}

console.log(isPalidrone("civic"), "should return true");
console.log(isPalidrone("ivicc"), "should return true");
console.log(isPalidrone("civil"), "should return false");
console.log(isPalidrone("livci"), "should return false");
