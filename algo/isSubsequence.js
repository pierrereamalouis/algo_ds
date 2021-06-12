module.exports = (str1, str2) => {
  if (str1 === null || str1 === '') {
    return false;
  }

  let strArray1 = str1.split('');
  let strArray2 = str2.split('');
  let pointer1 = 0,
    pointer2 = 0;

  // looping through first array
  // pointer1 will start at the first index of first array
  // and second on the first element of second array
  // if same character found move both pointer up
  // if diff in character move up only the second pointer
  // if subsequence not found at the of first array loop return false

  while (pointer1 < strArray1.length && pointer2 < strArray2.length) {
    if (strArray1[pointer1] === strArray2[pointer2]) {
      pointer1++;
      pointer2++;
    } else {
      pointer2++;
    }
  }

  return pointer1 >= strArray1.length;
};
