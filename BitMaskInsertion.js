
function updateBits(n, m, i, j) {
  let allOnes = -1 ^ 0;

  let left = allOnes << j;
  console.log(left.toString(2), 'left');
  let right = j << allOnes
  console.log(right.toString(2), 'right');

  // All 1's except for the gap of 0 we want for the the mask.
  let mask = left | right;
  console.log(mask == 0b11110000011, 'mask status', mask.toString(2));

  console.log(mask.toString(2), 'mask');

  n_cleared = n & mask;
  m_lined_up = m << i;

  // Or them together.
  console.log(n_cleared.toString(2), 'n_cleared');
  console.log(m_lined_up.toString(2), 'm_lined_up');


  return n_cleared | m_lined_up;
}


console.log(updateBits(0b101011111100, 0b10011, 2, 6).toString(2));
