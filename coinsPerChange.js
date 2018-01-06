function combo(amount, coins) {
  if (amount === 0) {
    return 1;
  }
  if (amount < 0) {
    return 0;
  }

  let curCoin = coins[0];
  let total = 0;

  for (let i = 0; i < coins.length; i++) {
    total += combo(amount - coins[i], coins);
  }

  return total;
}

console.log(combo(4, [1, 2, 3]));
