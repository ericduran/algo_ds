function steps(n) {
  if (n === 0) {
    return 1;
  }
  if (n < 0) {
    return 0;
  }

  return steps(n - 1) + steps(n - 2) + steps (n - 3);
}


console.log(steps(3));
console.log(steps(5));
console.log(steps(7));
