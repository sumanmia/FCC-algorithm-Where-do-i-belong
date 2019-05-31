function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);
}

getIndexToIns([40, 60], 50);
