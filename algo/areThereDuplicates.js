module.exports = (...args) => {
  let duplicatesChecker = {};
  for (let i = 0; i < args.length; i++) {
    let key = args[i];
    duplicatesChecker[key] = (duplicatesChecker[key] || 0) + 1;
  }

  return args.length !== Object.keys(duplicatesChecker).length;
};
