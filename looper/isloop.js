"use strict";

//Complete this algo
const isLoop = (linkedlist) => {
  let dictionary = {};
  let pointer = linkedlist.head;

  while (pointer && !dictionary[pointer]) {
    if (dictionary[pointer.value]) {
      console.log(pointer.value);
      return true;
    }

    dictionary[pointer.value] = 1;
    pointer = pointer.next;
  }
  return false;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
