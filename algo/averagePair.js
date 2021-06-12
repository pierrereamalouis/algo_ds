module.exports = (arr, target) => {
  // first pointer will be the first element in array and  second will be the last

  // take two elements and calculate their average if result is the target return true
  // if the result is bigger than the target move down second pointer
  // if the result is smaller move up the first pointer
  // if no match return false

  if (arr.length <= 1) return false;

  let pointer1 = 0;
  let pointer2 = arr.length - 1;

  while (pointer1 < pointer2) {
    let result = (arr[pointer1] + arr[pointer2]) / 2;
    if (result === target) {
      return true;
    }

    if (result > target) {
      pointer2--;
    } else {
      pointer1++;
    }
  }

  return false;
};
