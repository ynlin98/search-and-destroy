"use strict";

// Complete this algo
const minJumps = (arr) => {
  let index = 0; // 2
  let jumps = 0; // 2 + 2 + 1

  while (index < arr.length - 1) {
    let jumpValue = arr[index]; // 2//
    jumps++;
    if (jumpValue >= arr.slice(index + 1).length) {
      return jumps;
    } else {
      jumpValue = Math.max(...arr.slice(index + 1, jumpValue + index + 1));
      index = arr.indexOf(jumpValue);
    }
  }
};
module.exports = minJumps;
