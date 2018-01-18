/**
 * @file
 *
 * Given a string, write a function to check if it is palindrome or not.
 *
 * ex. abcba => Yes, abc => no.
 *
 * @see https://www.geeksforgeeks.org/c-program-check-given-string-palindrome/
 */

function isPalidrome(str) {
  // Use a Set(), if we have it in our set deleted it.
  // otherwise add it. If our set has less than or equal to 1.
  // we have a palidrome, otherwise false.
  let s = new Set();

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (s.has(char)) {
      s.delete(char);
    }
    else {
      s.add(char);
    }
  }

  if (s.size <= 1) {
    return true;
  }

  return false;
}


console.log(isPalidrome('abcba', 'should log true'));
console.log(isPalidrome('abc', 'should log false'));
