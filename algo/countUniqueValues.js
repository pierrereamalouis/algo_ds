module.exports = (arr) => {
  let unique = 0;
  let holder = 0;
  let scouter = 1;

  while (scouter <= arr.length) {
    if (arr[holder] !== arr[scouter]) {
      unique++;
      holder = scouter;
    }
    scouter++;
  }

  return unique;
};
