exports.random = (length = 5) => {
  const string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * string.length);
    result += string[index];
  }

  return result;
};

exports.pascal = (string) => {
  let result = string[0].toUpperCase();
  result += string.slice(1);
  return result;
};
