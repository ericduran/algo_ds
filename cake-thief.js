var cakeTypes = [
    {weight: 7, value: 160},
    {weight: 3, value: 90},
    {weight: 2, value: 15},
];

var capacity = 20;

function maxVal(types, cap, sum = 0) {
  if (cap === 0) {
    return sum;
  }
  if (cap < 0) {
    return 0;
  }

  let s = []
  for (let i of types) {
    s.push(maxVal(types, cap - i.weight, sum + i.value));
  }

  return Math.max(...s);
}

function maxDuffelBagValue(types, cap) {
  return maxVal(types, cap, 0);
}

console.log(maxDuffelBagValue(cakeTypes, capacity));
