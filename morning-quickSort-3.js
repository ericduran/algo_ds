function swap(arr, a1, a2) {
  let temp = arr[a1];
  arr[a1] = arr[a2];
  arr[a2] = temp;
}

function partition(arr, left, right) {
  let mid = Math.floor ((left + right) / 2);
  let pivot = arr[mid];

  while (left < right) {
    console.log(left, right, 'left, right');
    if (arr[left] < pivot) {
      left++
    }
    if (pivot < arr[right]) {
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

function sort(arr, left, right) {
  let part = partition(arr, left, right);
  console.log(part);
  die();
  if (left < part - 1) {
    sort(arr, left, part - 1);
  }
  if (part < right) {
    sort(arr, part, right);
  }

  return arr;
}

console.log(sort([9, 8, 7, 6, 5, 4, 3, 2, 1], 0, 8));
