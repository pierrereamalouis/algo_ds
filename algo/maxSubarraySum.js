module.exports = (arr, num) => {
  // add first sequence to get maxSum depending on the amount
  // loop through array with a subset amount of elements based on the number provided
  // moving up by one position subtract first element in the subset and adding the next element
  // calculate max - if max greater than update maxSum variable
  if (num > arr.length) {
    return null;
  }

  let maxSum = 0;
  let firstElement = 0;
  let lastElement = num;
  for (let index = 0; index < num; index++) {
    maxSum += arr[index];
  }

  let tempMax = maxSum;

  while (lastElement < arr.length) {
    tempMax = tempMax - arr[firstElement] + arr[lastElement];
    console.log('tempMax', tempMax);
    maxSum = Math.max(maxSum, tempMax);
    console.log('maxSum', maxSum);
    firstElement++;
    lastElement++;
  }

  return maxSum;
};
