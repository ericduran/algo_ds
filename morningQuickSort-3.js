function swap(arr, i1, i2) {
 let temp = arr[i1];
 arr[i1] = arr[i2];
 arr[i2] = temp;
}

function quickSort(arr, start = 0, end) {
  if (arr.length > 1) {
    let part = partition(arr, start, end);

    if (start < part - 1) {
      quickSort(arr, start, part - 1);
    }
    if (part < end) {
      quickSort(arr, part, end);
    }
  }

  return arr;
}


function partition(arr, start, end) {
  let mid = Math.floor( ( start + end) / 2);
  let pivot = arr[mid];
  let left = start;
  let right = end;

  while (left < right) {
    while (arr[left] < pivot) {
      left++;
    }
    while (pivot < arr[right]) {
      right--;
    }

    // If they haven't cross yet, we swap.
    if (left <= right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }

  // return where we left off on the left side.
  // so we know where to start the other split.
  return left;
}

console.log(quickSort([3, 4, 32, 83, 89, 10, 23, 80, 7, 9], 0, 9));
