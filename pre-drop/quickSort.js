
function quickSort(arr, left = 0, right) {
  if (arr.length > 1) {
    let part = partition(arr, left, right);
    if (left < part - 1) {
      quickSort(arr, left, part -1);
    }
    if (part < right) {
      quickSort(arr, part, right);
    }
  }
  return arr;
}

function partition(arr, left, right) {
  let mid = Math.floor( (left + right) / 2);
  let pivot = arr[mid];

  while (left <= right) {

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
  let t = arr[x];
  arr[x] = arr[y];
  arr[y] = t;
}

console.log(quickSort([9,8,45,6,2,1,3,4,6], 0, 8));
