const removeFromArray = function removeFromArray(array, ...argsToRemove) {
  // Go through each argument passed for removal
  for (const item of argsToRemove) {
    // Find the index of the item in the array
    let index = array.indexOf(item);
    
    // If the item exists in the array, remove it
    while (index !== -1) {
      array.splice(index, 1);
      // Check again in case the item appears multiple times
      index = array.indexOf(item);
    }
  }
  return array;
}

// Do not edit below this line
module.exports = removeFromArray;
