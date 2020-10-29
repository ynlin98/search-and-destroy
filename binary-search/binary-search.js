"use strict";

// Complete this algo
const binarySearch = (array, target) => {
  let middle = Math.floor(array.length / 2);
  if (array[middle] === target) {
    return true;
  }

  if (array.length === 1) {
    return false;
  }

  if (array[middle] > target) {
    let newArray = array.slice(0, middle);
    return binarySearch(newArray, target);
  } else if (array[middle] < target) {
    let arr = array.slice(middle);
    return binarySearch(arr, target);
  }
};
// [1,3,4,5,10,15,20,22,23,98,1000]
// 0 1 2 3 4  5  6  7  8  9   10

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
