// I struggle the most with bottom up technique, DP and MEM are easier for me.
// There's a great 3 part series on migrating a DP solution to bottom up or
// top down but I can't find it right now.

// Fibonacci with a bottom up approach.
function fib(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  let prevPrev = 0;
  let prev = 1;
  let cur = 0;
  for (let i =1; i < n; i++) {
    cur = prev + prevPrev;
    prevPrev = prev;
    prev = cur;
  }

  return cur;
}

// Fibonacci with a Dynamic Programming approach.
function fibRecursive(n) {
  if (n === 0 || n === 1) {
    return n;
  }

  return fibRecursive(n - 1) + fibRecursive(n - 2);
}

// Fibonacci with a Dynamic Programming + memoization approach.
function fibMem(n, mem = []) {
  if (n === 0 || n === 1) {
    return n;
  }

  if (!mem[n]) {
    mem[n] = fib(n - 1) + fib(n - 2);
  }

  return mem[n];
}

console.log(fib(8) === 21);
console.log(fibRecursive(8) === 21);
console.log(fibMem(8) === 21);
