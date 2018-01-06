function mergeSort(arr) {
  if (arr.length < 2) {
      return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid, arr.length);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(arr1, arr2) {
  let arr = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] <= arr2[0]) {
      arr.push(arr1.shift());
    }
    else {
      arr.push(arr2.shift());
    }
  }

  while (arr1.length) {
    arr.push(arr1.shift());
  }

  while (arr2.length) {
    arr.push(arr2.shift());
  }

  return arr;
}

console.log(mergeSort([3, 7, 1, 23, 49, 9]));
