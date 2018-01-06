function steps(n, mem = []) {
  if (n === 0) {
    return 1;
  }
  if (n < 0) {
    return 0;
  }

  if (!mem[n]) {
    let m = steps(n - 1, mem) + steps(n - 2, mem) + steps(n - 3, mem);
    mem[n] = m;
  }

  return mem[n]
}

console.log(steps(4));
