function mult(n1, n2) {
  let s = n1 < n2 ? n1 : n2;
  let b = n1 < n2 ? n2 : n1;
  return multiply(s, b);
}

function multiply(smaller, bigger) {
  console.log(smaller, bigger);
  if (smaller === 0) {return 0;}
  if (smaller === 1) {return bigger;}

  let half = smaller >> 1;
  let halfProd = multiply(half, bigger);

  if (smaller % 2 === 0) {
    return halfProd + halfProd;
  }
  else {
    return halfProd + halfProd + bigger;
  }
}

console.log(mult(42, 10));
