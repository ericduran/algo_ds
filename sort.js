// // Assume 2 arrays of ints as input, merge them together into a single array of outputs, sorted oter, O(n);
// 2 initial inputs are sorted, nax 100,
function sortMultiArray(array1, array2) {
    // Loop over array1, if value is < array2 cur value, aadd, otherwise add value 2.

    // error cases come back.
    let arraySort = [];
    let arr1 = 0;
    let arr2 = 0;
    let arr1Len = array1.length;
    let arr2Len = array2.length;

    while (arr1 < arr1Len || arr2 < arr2Len) {
        if (arr1 == arr1Len) {
            return arraySort.concat(array2.splice(arr2, arr2Len));
        }

        if (arr2 == arr2Len) {
            return arraySort.concat(array1.splice(arr1, arr1Len));
        }

        if (array1[arr1] < array2[arr2]) {
            arraySort.push(array1[arr1]);
            arr1++;
        }
        else {
            arraySort.push(array2[arr2]);
            arr2++;
        }
    }


    return arraySort;

}

console.log(sortMultiArray([1, 2, 3, 5], [2, 4, 5, 7, 8]));
