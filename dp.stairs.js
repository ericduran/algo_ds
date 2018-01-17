/**
 * @file
 *
 * There are n stairs, a person standing at the bottom wants to reach the top.
 * The person can climb either 1 stair or 2 stairs at a time.
 * Count the number of ways, the person can reach the top.
 *
 * @see https://www.geeksforgeeks.org/count-ways-reach-nth-stair/
 */

function countWays(n) {
  // If we have 0 or 1 left, return 1 way.
  if (n === 0 || n === 1) {
    return 1;
  }

  return countWays(n - 1) + countWays(n - 2);
}

function countWaysMem(n, mem = []) {
  // If we have 0 or 1 left, return 1 way.
  if (n === 0 || n === 1) {
    return 1;
  }

  if (!mem[n]) {
    mem[n] = countWays(n - 1, mem) + countWays(n - 2, mem);
  }

  return mem[n];
}

console.log(countWays(4), 'should console 5');
console.log(countWaysMem(4), 'should console 5');
