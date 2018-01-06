// function getSubSet(set, index = 0) {
//   let allSubSets = []
//
//   if (set.length === index) {
//     allSubSets.push([]);
//   }
//   else {
//     allSubSets = getSubSet(set, index + 1);
//     let item = set[index];
//     let moreSubsets = [];
//
//     for (let subset of allSubSets) {
//       let newSubSet = [];
//       newSubSet.push(subset);
//       newSubSet.push(item);
//       moreSubsets.push(...newSubSet);
//     }
//
//     allSubSets.push(...moreSubsets);
//
//   }
//
//   return allSubSets;
// }
//
// let set = [1, 2, 3];
// console.log(getSubSet(set));

// Failed Misarably at the above solution.

var arr = [1, 2, 3];

function generatePowerSet(array) {
  var result = [];
  result.push([]);

  for (var i = 1; i < Math.pow(2, array.length); i++) {
    let subset = [];
    for (var j = 0; j < array.length; j++) {
      if (i & Math.pow(2, j)) {
        subset.push(array[j]);
      }
      else {
        console.log('failed', i, array[j]);
      }
    }
    result.push(subset);
  }

  return result;
}

console.log(generatePowerSet(arr));
