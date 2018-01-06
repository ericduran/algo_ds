function fibMem(n, mem = []) {
  if (n === 0 || n === 1) {
    return n;
  }

  if (!mem[n]) {
    mem[n] = fib(n - 1) + fib(n - 2);
  }

  return mem[n];
}


function fib(n) {
  if (n === 0 || n ===1 ) {
    return n;
  }

  let prevPrev = 0;
  let prev = 1;
  let cur = 0;

  for (let i = 1; i < n; i++) {
    cur = prev + prevPrev;
    prevPrev = prev;
    prev = cur;
  }

  return cur;
}

console.log(fib(0), '0');
console.log(fib(1), '1');
console.log(fib(2), '2');
console.log(fib(3), '3');
console.log(fib(4), '4');
