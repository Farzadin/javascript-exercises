function repeatString(string, times = 3) {
  let newString = "";

  if (Math.sign(times) === -1) {
    // if times is negative
    return "ERROR";
  }

  for (let i = 1; i <= times; i++) {
    newString += string;
  }
  return newString;
}
// Do not edit below this line
module.exports = repeatString;
