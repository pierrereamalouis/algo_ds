module.exports = (num1, num2) => {
  let num1Arr = num1
    .toString()
    .split('')
    .map((el) => Number(el));
  let num2Arr = num2
    .toString()
    .split('')
    .map((el) => Number(el));

  if (num1Arr.length !== num2Arr.length) return false;

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  if (num1Arr.reduce(reducer) !== num2Arr.reduce(reducer)) return false;

  return true;
};
