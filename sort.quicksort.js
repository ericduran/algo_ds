/**
 * @file
 * 
 * Write a quicksort.
 * 
 * Tip: I just try and remember this has 3 components
 * partition, Swap and Quick Sort.
 *
 * @see https://www.geeksforgeeks.org/quick-sort/
 */

function quickSort(arr, start = 0, end = arr.length - 1) {
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

function partition(arr, left, right) {
  // Tip: Try an remember middle, pivot and return left.
  // The rest works of that. I always use middle but I talk out loud
  // about how it can be better if it was random or something.
  // I like the while method, It clicks with me better.
  // Left moves right, right moves left, then swap 
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

function swap(arr, x, y) {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}


console.log(quickSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), 'should be sorted');