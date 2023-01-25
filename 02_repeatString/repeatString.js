function repeatString(string, num = 3) {
  let newString = "";

  if (Math.sign(num) === -1) {
    return "ERROR";
  }

  for (let i = 1; i <= num; i++) {
    newString += string;
  }
  return newString;
}
// Do not edit below this line
module.exports = repeatString;
