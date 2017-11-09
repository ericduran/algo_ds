  function swap(arr, i1, i2) {
  let temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
}

function partition(arr, left, right) {
  // Pivot at the middle of the array.
  let mid = Math.floor( (left + right) / 2);
  let pivot = arr[mid];

  while (left < right) {

    while (arr[left] < pivot) {
      left++;
    }

    while (arr[right] > pivot) {
      right--;
    }

    if (left <= right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }

  return left;
}

function quickSort(arr, left = 0, right) {
  if (arr.length > 1) {
    let part = partition(arr, left, right);

    if (left < part - 1) {
      quickSort(arr, left, part - 1);
    }
    if (part < right) {
      quickSort(arr, part, right);
    }
  }

  return arr;
}

let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(quickSort(arr, 0, arr.length - 1));
