/**
 * @file
 *
 * Determine if a string has all Unique Characters
 *
 * ex. aabb => false, abc => true
 *
 * @see https://www.geeksforgeeks.org/determine-string-unique-characters/
 */

function unique(str) {
  // If not allowed to use any extra data structure(ex. set).
  // Ask about ascii space? If so, create array with 255 all set to bool => true.
  let uniqueCheck = Array(255).fill(true);

  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (uniqueCheck[code]) {
      uniqueCheck[code] = false;
    }
    else {
      return false;
    }
  }

  return true;
}

console.log(unique('aa'), 'should return false');
console.log(unique('abcdefghijklmnopqrstuvxyz'), 'should return true');
