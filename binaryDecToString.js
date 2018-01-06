function printBinary(num) {
  if (num >= 1 || num <= 0) {
    return "ERROR1";
  }

  let s = [];
  s.push('.');

  while (num > 0) {
    if (s.length > 32) {
      return "ERROR2"; // We've gove pass our 31 alloted slots.
    }
    console.log(num, s);
    let r = num * 2;
    if (r >= 1) {
      s.push(1);
      num = r - 1;
    }
    else {
      s.push(0);
      num = r;
    }
  }

  return s.join('');
}

console.log(printBinary(0.72));
