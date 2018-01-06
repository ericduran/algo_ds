function findMagic(arr) {
  let m = Math.floor (arr.length / 2);
  if (arr[m] === m) {
    return m;
  }

  if (m === 0 || m > arr.length) {
    return false;
  }

  if (arr[m] < m) {
    return findMagic(arr.slice(m, arr.length));
  }
  else {
    return findMagic(arr.slice(0, m));
  }
}

let a = [1, 2, 3, 4, 5, 6, 7, 7, 9, 10]

console.log(findMagic(a));
