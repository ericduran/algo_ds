function itoa(num, base = 10) {
  if (num === 0) {
    return "0";
  }

  isNegative = false;
  let str = [];

  if (num < 0 && base == 10) {
    isNegative = true;
    num = -num;
  }

  while (num != 0) {
    let remainder = num % base;
    if (remainder > 9) {
      str.push("" + remainder - 10);
    }
    else {
      str.push("" + remainder);
    }
    num = Math.floor(num/base);
  }

  if (isNegative) {
    str.push("-");
  }

  return str.reverse().join('');

}


console.log(itoa(-121));
