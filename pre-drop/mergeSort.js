function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid, arr.length);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let a = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      a.push(left.shift());
    }
    else {
      a.push(right.shift());
    }
  }

  while (left.length) {
    a.push(left.shift());
  }

  while (right.length) {
    a.push(right.shift());
  }

  return a;
}

console.log(mergeSort([9, 8 , 7 , 5, 3, 2, 3, 1]));
