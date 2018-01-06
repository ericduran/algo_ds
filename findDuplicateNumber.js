
function duplicateNum(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += arr[i];
  }

  let n = 9;
  let Tcount = 83 / 2;
  console.log(Tcount);
  console.log(count);

  return Tcount - count;
}


console.log(duplicateNum([1, 2, 3, 4, 5, 6, 7, 8, 8, 9]));
