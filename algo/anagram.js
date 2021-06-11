module.exports = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  let str1Checker = {};
  let str2Checker = {};

  for (let i = 0; i < str1.length; i++) {
    str1Checker[str1[i]] = (str1Checker[str1[i]] || 0) + 1;

    str2Checker[str2[i]] = (str2Checker[str2[i]] || 0) + 1;
  }

  for (let key in str1Checker) {
    if (!str2Checker[key] || str1Checker[key] !== str2Checker[key]) {
      return false;
    }
  }
  return true;
};
