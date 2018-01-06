function findDupe(arr) {
  let m = arr[0];

  for (let i = 1; i < arr.length; i++) {
    m = m ^ arr[i];
  }

  return m;
}

console.log(findDupe([1, 1, 2, 2, 3,3 , 4, 5, 5, 6, 6, 7, 7]));
