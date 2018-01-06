function maxCakes(cakes, size, sum = 0, mem = [], index = -1) {
  called++
  if (size === 0) {
    return sum;
  }
  if (size < 0) {
    return -1;
  }
  let key = index + "-" + sum;

  if (mem[key]) {
    return mem[key];
  }

  let max = 0;
  for (let i = 0; i < cakes.length; i++) {
    let total = 0;
    total = maxCakes(cakes, size - cakes[i].s, sum + cakes[i].v, mem, i);
    max = Math.max(total, max);
  }

  mem[key] = max;
  return max;
}


let cakes = [
  {s: 7, v: 160 },
  {s: 3, v: 90 },
  {s: 2, v: 15 }
]

console.log(maxCakes(cakes, 20));
console.log(called);
