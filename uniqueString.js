// P: Determined if a string has all unique characters.
// A: Used an Array the size of the alphabet fill with bool (true).
//    flip bool value (false) when ever we run into that char. If we run
//    into any false values return false. Otherwise return true.
// Q: String: Ascii (128) or Unicode? Extended Ascii (256)?
function uniqueString(str) {
  if (str.length > 128) { // 128 shoul be a constant. // length should have been saved.
    return false;
  }

  let potentialChars = new Array(128).fill(true); // 128 should be a const, missed that.
  for(i = 0; i < str.length; i++) {
    let cur = str.charCodeAt(i); // Didn't save this on the 1st pass.
    if (potentialChars[cur]) {
      potentialChars[cur] = false;
    }
    else {
      return false;
    }
  }

  return true;
}

// Self Code Review feedback:
// 128 magic number should have been made a constant
// str.length is checked twice, should have been saved into a var the 1st time.
// Also didn't save str.charCodeAt(i) value into a var the 1st pass.
console.log(uniqueString('This is a brown dog'));
console.log(uniqueString('Thishas'));
console.log(uniqueString('This is too long of a string to not have any uniqueString in itThis is too long of a string to not have any uniqueString in it'));
console.log(uniqueString('abcdefghijklmnopqrstuvwxyz'));
