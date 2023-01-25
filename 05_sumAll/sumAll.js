// arrayRange(2, 7, 1) output: [2,3,4,5,6,7]
// arrayRange(2, 7, 2) output: [2, 4, 6, 7]
const arrayRange = (start, stop, step) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  );

function sumAll(startOfRange, endOfRange) {
  // sum all numbers in range of given parameters include themselves.
  let sum = 0;

  if (Math.sign(startOfRange) === -1 || Math.sign(endOfRange) === -1) {
    return "ERROR"; //  if parameter is Negative.
  } else if (
    typeof startOfRange === "string" ||
    typeof endOfRange === "string"
  ) {
    return "ERROR"; // if parameter data type is not a Number
  } else if (isNaN(startOfRange) || isNaN(endOfRange)) {
    return "ERROR"; // if parameter data type is not a Number
  }

  if (startOfRange > endOfRange) {
    // switch start with end if start was greater
    let arrayOfNumbers = arrayRange(endOfRange, startOfRange, 1);
    for (let i = 0; i < arrayOfNumbers.length; i++) {
      sum += arrayOfNumbers[i];
    }
  } else {
    let arrayOfNumbers = arrayRange(startOfRange, endOfRange, 1);
    for (let i = 0; i < arrayOfNumbers.length; i++) {
      sum += arrayOfNumbers[i];
    }
  }
  return sum;
}

// Do not edit below this line
module.exports = sumAll;
