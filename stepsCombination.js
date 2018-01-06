function steps(n) {
  if (n < 0) {
    return 0;
  }

  if (n == 0) {
    return 1;
  }

  return steps(n - 1) + steps(n -2) + steps(n-3);
}

console.log(steps(1), '1');
console.log(steps(2), '2');
console.log(steps(3), '3');
console.log(steps(4), '4');
console.log(steps(5), '5');


// with memoization
(function (a) {
  var storage = new Map();

  function steps(n) {
    if (storage.has(n)) {
      return storage.get(n);
    }

    if (n < 0) {
      return 0;
    }

    if (n == 0) {
      return 1;
    }

    let val = steps(n - 1) + steps(n -2) + steps(n-3);
    storage.set(n, val);
    return val;
  }

  console.log(steps(a));
})(4);


// console.log(steps(1), '1');
// console.log(steps(2), '2');
// console.log(steps(3), '3');
// console.log(steps(4), '4');
// console.log(steps(5), '5');
